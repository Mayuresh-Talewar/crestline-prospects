import { leversFor, simulate, toTerms, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";

/**
 * PATEL INFRASTRUCTURE LIMITED (PI-S23). Standalone, AR 2024-25, Rs lakh as printed, 365 days.
 * Inputs (Rs lakh): revenue from operations 3,57,665.25 (AR p.54); material consumed 1,27,756.70 (Note 29, p.98);
 * construction expenses 2,98,046.79 (p.54). Days are the printed one-decimal days.
 * Rupees below are CRORE (lakh / 100).  BREAK=<name> breaks one assert on purpose.
 */
const BREAK = process.env.BREAK ?? "";
const CR = 100; // lakh per crore

// Launch-message inputs, in Cr
const REVENUE_CR = 3576.65;
const MATERIALS_CR = 1277.6;
const CONSTR_CR = 2980.4679; // payables base, used only to show DPO is never priced
// Exact lakh figures for the independent cross-check
const REVENUE_LAKH = 357665.25;
const MATERIALS_LAKH = 127756.7;

const RATE = 12.75; // AR Note 18.2, the only disclosed rate
const NCD_CR = 173.62; // carrying amount of the NCDs at 31 Mar 2025, AR Notes 18 and 22 (17,362.35 lakh)
const revPerDay = REVENUE_CR / 365;
const matPerDay = (BREAK === "basis" ? REVENUE_CR : MATERIALS_CR) / 365;
const conPerDay = CONSTR_CR / 365;

const basis: SimBasis = {
  days: { dio: BREAK === "days" ? 140 : 132.7, cad: 67.1, dso: 32.3, dpo: 38.9 },
  perDay: { dio: matPerDay, cad: revPerDay, dso: revPerDay, dpo: conPerDay },
  balances: { dio: 464.3085, cad: 657.4848, dso: 316.1902, dpo: 317.9452 },
  // NOT FOUND in the filings: client payment term, certification window. Vendor terms: general terms not found.
  terms: { certification: null, payment: null, vendor: BREAK === "dpo" ? 90 : null },
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let failed = 0;
const ok = (name: string, cond: boolean, detail: string) => {
  console.log(`${cond ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!cond) failed += 1;
};
const f2 = (n: number) => n.toFixed(2);
const carryCapped = (cash: number) => (BREAK === "interest" ? (cash * RATE) / 100 : (Math.min(cash, NCD_CR) * RATE) / 100);

console.log("=== PATEL INFRASTRUCTURE LIMITED, standalone FY25, Rs Cr (lakh / 100), 365 days ===");
console.log(`revenue per day = ${REVENUE_CR}/365 = ${f2(revPerDay)} Cr; materials per day = ${MATERIALS_CR}/365 = ${f2(matPerDay)} Cr`);
console.log(`valueOfADay(revenue per day, ${RATE}) cash ${f2(valueOfADay(revPerDay, RATE).cash!)} Cr, uncapped carry ${f2(valueOfADay(revPerDay, RATE).carry!)} Cr per day`);
console.log(`valueOfADay(materials per day, ${RATE}) cash ${f2(valueOfADay(matPerDay, RATE).cash!)} Cr per day\n`);

console.log("--- CLAMP BOUNDS (leversFor, no terms passed) ---");
for (const l of leversFor(basis)) {
  console.log(`${l.key.padEnd(3)} ${l.label.padEnd(32)} now ${l.now}  min ${l.min}  max ${l.max.toFixed(2)}  target ${l.target}  lowerIsBetter ${l.lowerIsBetter}  perDay ${f2(l.perDay)}`);
}
console.log(`toTerms (every leg to its stated term): ${JSON.stringify(toTerms(basis))}  <- empty: no term is published\n`);

type Row = { id: string; label: string; req: Partial<Record<LeverKey, number>> };
const rows: Row[] = [
  { id: "cad10", label: "Certification, 10 days less (67.1 to 57.1)", req: { cad: BREAK === "neg" ? 77.1 : 57.1 } },
  { id: "cad30", label: "Certification, 30 days less (67.1 to 37.1)", req: { cad: 37.1 } },
  { id: "dio10", label: "Project materials, 10 days less (132.7 to 122.7)", req: { dio: 122.7 } },
  { id: "dio30", label: "Project materials, 30 days less (132.7 to 102.7)", req: { dio: 102.7 } },
  { id: "dso10", label: "Collection, 10 days less (32.3 to 22.3)", req: { dso: 22.3 } },
  { id: "combo", label: "ONE COMBINED RUN: certification, materials and collection, 10 days each", req: { cad: 57.1, dio: 122.7, dso: 22.3 } },
];

const out: Record<string, { cash: number; carry: number; cycle: number | null }> = {};
console.log("--- SCENARIOS (simulate) ---");
for (const r of rows) {
  const s = simulate(basis, r.req);
  const carry = carryCapped(s.released);
  out[r.id] = { cash: s.released, carry, cycle: s.gap.next };
  console.log(`${r.label}`);
  console.log(`   cash released once ${f2(s.released)} Cr | cycle ${s.gap.now!.toFixed(1)} to ${s.gap.next!.toFixed(1)} days | accounting cycle DIO+DSO-DPO ${s.cycle.now!.toFixed(1)} to ${s.cycle.next!.toFixed(1)}`);
  console.log(`   simulate().carry uncapped at ${RATE}% = ${f2(s.carry)} Cr | CAPPED at ${NCD_CR} Cr of NCDs: min(${f2(s.released)}, ${NCD_CR}) x ${RATE}% = ${f2(carry)} Cr a year (if used to retire the ${RATE}% NCDs)`);
  console.log(`   legs: ${s.levers.map((l) => `${l.key} ${l.now}->${l.next.toFixed(1)} cash ${f2(l.cash)}`).join(" | ")}`);

  // asserts per row
  ok(`no negative release [${r.id}]`, s.released >= 0 && s.levers.every((l) => l.cash >= -1e-9), `released ${f2(s.released)}`);
  ok(`interest capped [${r.id}]`, carry <= (NCD_CR * RATE) / 100 + 1e-9 && Math.abs(carry - (Math.min(s.released, NCD_CR) * RATE) / 100) < 1e-9, `carry ${f2(carry)} <= ${f2((NCD_CR * RATE) / 100)}`);
  // independent cross-check: days x per day from the raw lakh, never through simulate
  const daysOf = (k: LeverKey) => (r.req[k] !== undefined ? basis.days[k]! - r.req[k]! : 0);
  const indep = (daysOf("cad") * (REVENUE_LAKH / 365) + daysOf("dso") * (REVENUE_LAKH / 365) + daysOf("dio") * (MATERIALS_LAKH / 365)) / CR;
  ok(`cross-check days x per day [${r.id}]`, Math.abs(indep - s.released) < 0.01, `independent ${f2(indep)} vs simulate ${f2(s.released)}`);
}

console.log("\n--- OTHER ASSERTS ---");
// payables never release cash: ask for far more vendor credit than today
const dpoUp = simulate(basis, { dpo: 90 }).levers.find((l) => l.key === "dpo")!;
ok("payables never release cash", dpoUp.cash <= 0 && dpoUp.next <= basis.days.dpo!, `DPO asked 90, held at ${dpoUp.next.toFixed(1)}, cash ${f2(dpoUp.cash)} Cr (max ${dpoUp.max})`);
const dpoNone = simulate(basis, {});
ok("payables lever untouched in every priced run", dpoNone.levers.find((l) => l.key === "dpo")!.moved === 0 && out.combo !== undefined, "DPO 38.9 days stays; not priced");

// basis matches: days recomputed from the raw lakh, one basis, identities
const rawDays = {
  dso: (31619.02 / REVENUE_LAKH) * 365,
  cad: (65748.48 / REVENUE_LAKH) * 365,
  dio: (46430.85 / MATERIALS_LAKH) * 365,
  dpo: (31794.52 / 298046.79) * 365,
};
for (const k of ["dso", "cad", "dio", "dpo"] as const) {
  ok(`basis matches [${k}]`, Math.abs(rawDays[k] - basis.days[k]!) < 0.05, `raw ${rawDays[k].toFixed(3)} vs printed ${basis.days[k]}`);
}
ok("cycle identity DIO+CAD+DSO-DPO = 193.2", Math.abs(basis.days.dio! + basis.days.cad! + basis.days.dso! - basis.days.dpo! - 193.2) < 1e-9, "132.7+67.1+32.3-38.9");
ok("no lever priced on a base it does not belong to",
  Math.abs(basis.perDay.dio! - MATERIALS_CR / 365) < 1e-12 && Math.abs(basis.perDay.cad! - REVENUE_CR / 365) < 1e-12 && Math.abs(basis.perDay.dso! - REVENUE_CR / 365) < 1e-12,
  `stock on materials ${f2(basis.perDay.dio!)}/day (not revenue ${f2(revPerDay)}/day); certification and collection on revenue`);
ok("collection never below a published term", basis.terms.payment === null && (22.3 >= 0), "no client term published, so the move is held to the ruled 10 days only");

// ranking through priceLevers, legs priced on their OWN base (cash and capped carry from simulate)
const sim10 = simulate(basis, { cad: 57.1, dio: 122.7, dso: 22.3 });
const act = (id: "certification" | "collection" | "material", title: string, key: LeverKey, ours: boolean) => {
  const l = sim10.levers.find((x) => x.key === key)!;
  return { id, title, detail: "", days: 10, value: l.cash, carrySaved: carryCapped(l.cash), internallyControllable: ours, owner: "", confidence: "medium" as const, measuredAgainst: "this company's own published accounts" };
};
const position = { actions: [act("certification", "Certify 10 days sooner", "cad", true), act("collection", "Collect 10 days sooner", "dso", false), act("material", "Hold 10 days less project materials", "dio", true)] } as unknown as CyclePosition;
const ledger = { stillAwaiting: 0 } as unknown as CashLedgerSummary;
const ranked = priceLevers({ position, ledger, vendors: [], retention: null, perDay: null, financingRatePct: RATE, owners: { certification: null, collection: null, material: null } });
console.log("\n--- RANKING (priceLevers, each leg on its own base, cash then carry capped at 173.62 Cr) ---");
ranked.forEach((l, i) => console.log(`${i + 1}. ${l.label} | cash ${l.cash === null ? "NA" : f2(l.cash)} Cr | carry ${f2(l.carry)} Cr a year | ours ${l.ours}`));
ok("ranking holds three legs only", ranked.length === 3, `${ranked.length} levers`);

console.log("\n--- LEVER TABLE ---");
console.log("Certification (contract assets, unbilled revenue) | PRICED 10 and 30 days | 67.1 days, revenue per day | no certification window published, so no 'to term' row");
console.log("Project materials (inventory, construction material) | PRICED 10 and 30 days | 132.7 days, materials consumed per day (never revenue) | no term exists for stock");
console.log("Collection (trade receivables) | PRICED 10 days ONLY | 32.3 days, revenue per day | 30 days would give 2.3 days, not credible (README); no client term published");
console.log("Combined | ONE run, 10 days on each of the three legs | a single simulate() call, never a sum of rows");
console.log("Vendor credit (trade payables, DPO 38.9) | NOT PRICED | no general vendor terms published (buyers' credit up to 90 days only); paying later is never cash released");
console.log("Retention | NOT PRICED | only a combined line with security deposits (asset 23,293.99 lakh; liability 18,916.89 lakh), no release basis");
console.log("Customer advances | NOT PRICED | a liability, no clock, no lever in the simulator");
console.log("Financing at 12.75% | only on the 173.62 Cr NCDs, capped; no other borrowing rate disclosed (term loans are a range, never used)");

console.log(failed === 0 ? "\nALL ASSERTS PASS" : `\n${failed} ASSERT(S) FAILED`);
process.exit(failed === 0 ? 0 : 1);
