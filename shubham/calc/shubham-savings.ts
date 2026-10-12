/**
 * SHUBHAM EPC, SE-3 savings scenarios. Runs the app's own pure functions.
 * Inputs (all CRISIL rating rationale 02 Jul 2025, Shubham EPC Private Limited, standalone):
 *   FY25 operating income Rs 510.05 cr; gross current assets 155 to 200 days (FY23 to FY25).
 * No split of gross current assets exists, so the band runs on ONE asset leg. No terms are
 * passed (none disclosed), so the simulator's own bounds apply. No interest: no rate disclosed.
 * Units: Rs crore. Run: npx tsx scripts/_tmp-shubham-savings.ts   (BREAK=<name> to trip one assert)
 */
import { leversFor, simulate, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { costOfFinancing, priceLevers } from "@/lib/insights/levers";

const BREAK = process.env.BREAK ?? "";
const fails: string[] = [];
const check = (name: string, ok: boolean) => {
  console.log(`ASSERT ${name}: ${ok ? "PASS" : "FAIL"}`);
  if (!ok) fails.push(name);
};
const r2 = (n: number) => n.toFixed(2);

// ---- inputs, each with its entity and basis label ----
const ENTITY = "Shubham EPC Private Limited, standalone, CRISIL 02 Jul 2025";
const income = { value: 510.05, entity: ENTITY, basis: "FY25 operating income" };
const gcaBand = {
  low: 155,
  high: 200,
  entity: BREAK === "basis" ? "Shubham EPC, consolidated" : ENTITY,
  basis: "gross current asset days, FY23 to FY25, on operating income",
};
const ratePct = BREAK === "interest" ? 9 : 0; // no rate disclosed
const steps = [10, 30];
const perDay = income.value / 365;

console.log("== inputs ==");
console.log(`per day = ${income.value} / 365 = ${perDay.toFixed(4)} cr (${income.entity}, ${income.basis})`);
console.log(`GCA band ${gcaBand.low} to ${gcaBand.high} days (${gcaBand.entity}, ${gcaBand.basis})`);
console.log(`interest rate: ${ratePct}% (none disclosed); terms passed: none`);
check("basis: days and per day share one entity", income.entity === gcaBand.entity);

const NULLS = { dio: null, cad: null, dso: null, dpo: null };
const basisFor = (leg: LeverKey, days: number, vendorTerms: number | null = null): SimBasis => ({
  days: { ...NULLS, [leg]: days },
  perDay: { ...NULLS, [leg]: perDay },
  balances: { ...NULLS, [leg]: days * perDay },
  terms: { certification: null, payment: null, vendor: vendorTerms },
  workingCapital: null,
  ratePct,
  desks: { ...NULLS },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

// ---- clamp bounds the simulator applies with no terms ----
console.log("\n== clamp bounds (no terms passed) ==");
const assetLegs: LeverKey[] = ["dio", "cad", "dso"];
for (const start of [gcaBand.low, gcaBand.high]) {
  for (const leg of assetLegs) {
    const [spec] = leversFor(basisFor(leg, start));
    console.log(`${leg} at ${start} days: min ${r2(spec.min)}, max ${r2(spec.max)}`);
  }
}

// ---- scenarios ----
console.log("\n== scenarios: days out of gross current assets (rows overlap, never added) ==");
const rows: { start: number; step: number; to: number; released: number; carry: number }[] = [];
for (const start of [gcaBand.low, gcaBand.high]) {
  for (const step of steps) {
    const signed = BREAK === "neg" ? -step : step;
    const byLeg = assetLegs.map((leg) => simulate(basisFor(leg, start), { [leg]: start - signed }));
    const res = byLeg[2];
    const lever = res.levers[0];
    console.log(
      `start ${start} days, step ${step}: to ${r2(lever.next)} days, moved ${r2(lever.moved)}, cash released ${r2(res.released)} cr, interest ${r2(res.carry)} cr`,
    );
    check(`leg choice irrelevant (${start}/${step})`, byLeg.every((r) => Math.abs(r.released - res.released) < 1e-9));
    check(`no negative release (${start}/${step})`, res.released >= 0);
    check(`interest = 0 (${start}/${step})`, res.carry === 0);
    const independent = BREAK === "cross" ? (510.05 * step) / 366 : (510.05 * step) / 365;
    check(`cross-check 510.05 x ${step} / 365 = ${r2(independent)} (${start}/${step})`, Math.abs(independent - res.released) < 0.005);
    rows.push({ start, step, to: lever.next, released: res.released, carry: res.carry });
  }
}

// ---- payables never release cash: no vendor terms, so DPO cannot move up ----
console.log("\n== payables (no vendor terms disclosed) ==");
for (const step of steps) {
  const res = simulate(basisFor("dpo", 0, BREAK === "payables" ? step : null), { dpo: step });
  console.log(`push DPO 0 -> ${step}: moved ${r2(res.levers[0].moved)}, cash ${r2(res.released)} cr`);
  check(`payables never release cash (+${step})`, res.released <= 0);
}

// ---- the same scenarios through the lever ranking ----
console.log("\n== levers (priceLevers at the disclosed rate: none) ==");
const actions = steps.map((step) => ({
  id: "collection" as const,
  title: `Take ${step} days out of gross current assets`,
  detail: "",
  days: step,
  value: (rows.find((r) => r.step === step) ?? rows[0]).released,
  carrySaved: null,
  internallyControllable: false,
  owner: "",
  confidence: "low" as const,
  measuredAgainst: "CRISIL gross current asset band",
}));
const levers = priceLevers({
  position: { actions } as unknown as Parameters<typeof priceLevers>[0]["position"],
  ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as Parameters<typeof priceLevers>[0]["ledger"],
  vendors: [],
  retention: null,
  perDay,
  financingRatePct: ratePct,
  owners: { certification: null, collection: null, material: null },
});
for (const l of levers) console.log(`${l.label}: cash ${r2(l.cash ?? 0)} cr, interest a year ${r2(l.carry)} cr`);
check("levers: interest = 0", levers.every((l) => l.carry === 0));
check("levers cash = simulator cash", levers.every((l) => rows.some((r) => Math.abs(r.released - (l.cash ?? -1)) < 1e-9)));
const fin = costOfFinancing({ peakFundingNeed: 1 } as unknown as Parameters<typeof costOfFinancing>[0], ratePct);
console.log(`cost of financing at ${ratePct}%: ${r2(fin)} cr`);
check("financing cost = 0 (no rate)", fin === 0);

console.log(`\n== summary == ${fails.length ? `FAILED: ${fails.join("; ")}` : "all asserts PASS"}`);
if (fails.length) process.exit(1);
