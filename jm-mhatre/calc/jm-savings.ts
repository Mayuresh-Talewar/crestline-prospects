import "./env";
/**
 * J. M. Mhatre Infra, savings calculator (LIGHT), revised in JM-4. Temporary:
 * copied to crestline-prospects/jm-mhatre/calc/ and deleted from the app repo
 * after the run.
 *
 * Inputs (Rs crore, standalone, one vintage per chart):
 *   days: FY23 rating rationale R10 p4 (28 Mar 2024): collection 71, inventory 81,
 *         creditors 61, operating cycle 91, gross current asset days 275.
 *   value of a day: FY25 total operating income 798.93 (R14 p3 and p6,
 *         28 Jul 2025, provisional) / 365.
 *   terms: NONE passed (no contract, payment or vendor term is published).
 *   rate: 0 (no interest rate is disclosed anywhere), so no interest figure.
 *
 * Cross-check (JM-4): the expected cash is built WITHOUT simulate, from the
 * scenario's own step in days times valueOfADay(per day), after leversFor
 * confirms the step sits inside the lever's bounds (so no clamp applies).
 * simulate's release is then compared with it. Neither feeds the other.
 *
 * Run: npx tsx scripts/_tmp-jmm4-savings.ts            (clean)
 *      BREAK=1..4 npx tsx scripts/_tmp-jmm4-savings.ts (each assert broken once)
 */
import { leversFor, simulate, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.env.BREAK ?? "";

const FY25_TOI = 798.93;
const PER_DAY = FY25_TOI / 365;
// BREAK=3: the simulator's rate drifts 1% from the independent route.
const SIM_PER_DAY = BREAK === "3" ? PER_DAY * 1.01 : PER_DAY;
const DAYS = { collection: 71, inventory: 81, creditors: 61, operatingCycle: 91, gca: 275 };
const RATE_PCT = BREAK === "2" ? 9 : 0;

const none = { dio: null, cad: null, dso: null, dpo: null };
const basis: SimBasis = {
  days: { dio: DAYS.inventory, cad: null, dso: DAYS.collection, dpo: DAYS.creditors },
  // ponytail: inventory valued at income per day; the rationale publishes no
  // inventory denominator. Stated as a limitation in calc/notes.md.
  perDay: { dio: SIM_PER_DAY, cad: null, dso: SIM_PER_DAY, dpo: SIM_PER_DAY },
  balances: { ...none },
  terms: { certification: null, payment: null, vendor: BREAK === "4" ? 91 : null },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { ...none },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const r2 = (n: number) => Math.round(n * 100) / 100;
let failures = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`ASSERT ${ok ? "PASS" : "FAIL"}  ${name}  (${detail})`);
  if (!ok) failures++;
};

const day = valueOfADay(PER_DAY, RATE_PCT);

console.log("== Inputs");
console.log(`FY25 total operating income (provisional): Rs ${FY25_TOI} Cr`);
console.log(`Value of a day = ${FY25_TOI} / 365 = Rs ${PER_DAY.toFixed(4)} Cr (prints Rs ${r2(PER_DAY)} Cr); valueOfADay cash ${day.cash?.toFixed(4)}, carry ${day.carry}`);
console.log(`FY23 days: collection ${DAYS.collection}, inventory ${DAYS.inventory}, creditors ${DAYS.creditors}, operating cycle ${DAYS.operatingCycle}, gross current asset days ${DAYS.gca}`);
console.log(`Terms passed: certification null, payment null, vendor ${basis.terms.vendor}`);
console.log(`Financing rate: ${RATE_PCT}% (none disclosed)`);
console.log("Basis: FY23 days (the latest published) valued at FY25 provisional income per day; on FY23 income the figures would be larger.");

const bounds = leversFor(basis);
console.log("\n== Lever bounds read from leversFor (no terms)");
for (const l of bounds) {
  console.log(`${l.key}: now ${l.now}, min ${r2(l.min)}, max ${r2(l.max)}, target ${l.target}, side ${l.side}`);
}

const scenarios: { id: string; label: string; key: LeverKey; step: number; note?: string }[] = [
  { id: "S-A", label: "collection 10-day step", key: "dso", step: BREAK === "1" ? -10 : 10 },
  { id: "S-B", label: "collection 30-day step", key: "dso", step: 30 },
  {
    id: "S-C",
    label: "inventory 10-day step",
    key: "dio",
    step: 10,
    note: "inventory days' basis not stated; valued at income per day, so approximate",
  },
];

const emptyLedger = { stillAwaiting: 0, peakFundingNeed: 0 } as CashLedgerSummary;

console.log("\n== Scenarios: alternatives, never added (S-A and S-C release the same cash through different legs)");
for (const s of scenarios) {
  const now = s.key === "dso" ? DAYS.collection : DAYS.inventory;
  const res = simulate(basis, { [s.key]: now - s.step });
  const moved = res.levers.filter((l) => Math.abs(l.moved) > 0.001);
  const gcaNext = DAYS.gca + moved.reduce((t, l) => t + l.moved, 0);
  console.log(`${s.id} ${s.label}${s.note ? ` (${s.note})` : ""}`);
  for (const l of moved) console.log(`   ${l.key}: ${l.now} -> ${l.next} days (moved ${l.moved}), cash released once Rs ${r2(l.cash)} Cr`);
  console.log(`   operating cycle (DIO + DSO - DPO): ${res.cycle.now} -> ${res.cycle.next} days`);
  console.log(`   gross current asset days: ${DAYS.gca} -> ${gcaNext} (same lever, same days off)`);
  console.log(`   released Rs ${r2(res.released)} Cr; interest (carry) Rs ${res.carry} Cr`);

  check(`${s.id} no negative release`, res.released >= 0 && res.levers.every((l) => l.cash >= 0), `released ${r2(res.released)}`);
  check(`${s.id} interest = 0`, res.carry === 0, `carry ${res.carry}`);

  // Independent route: the scenario's own days x valueOfADay, inside leversFor's bounds.
  const spec = bounds.find((l) => l.key === s.key);
  const target = now - s.step;
  const inBounds = !!spec && target >= spec.min && target <= spec.max;
  const expected = s.step * (day.cash ?? NaN);
  check(
    `${s.id} days x valueOfADay = simulate release`,
    inBounds && Math.abs(expected - res.released) < 1e-9,
    `${s.step} x ${day.cash?.toFixed(4)} = ${r2(expected)} vs simulate ${r2(res.released)}; in bounds ${inBounds}`,
  );

  // priceLevers is handed the INDEPENDENT figure, never simulate's.
  const position = {
    actions: [
      {
        id: s.key === "dio" ? "material" : "collection",
        title: s.label,
        detail: "",
        days: s.step,
        value: expected,
        carrySaved: null,
        internallyControllable: spec?.side === "ours",
        owner: "",
        confidence: "low",
        measuredAgainst: "FY23 days, valued at FY25 provisional income per day",
      },
    ],
  } as unknown as CyclePosition;
  const priced = priceLevers({
    position,
    ledger: emptyLedger,
    vendors: [],
    retention: null,
    perDay: PER_DAY,
    financingRatePct: RATE_PCT,
    owners: { certification: null, collection: null, material: null },
  });
  check(`${s.id} priceLevers carry = 0`, priced.length === 1 && priced.every((p) => p.carry === 0), `carry ${priced.map((p) => p.carry).join(",")}`);
}

console.log("\n== Payables probe (asked to stretch creditors 61 -> 91 days)");
const probe = simulate(basis, { dpo: DAYS.creditors + 30 });
const dpo = probe.levers.find((l) => l.key === "dpo");
console.log(`   dpo: ${dpo?.now} -> ${dpo?.next} (clamped to max ${dpo?.max}), cash ${dpo?.cash}`);
check("payables never release cash", (dpo?.cash ?? 0) <= 0 && probe.released <= 0, `released ${probe.released}`);

console.log(`\n${failures === 0 ? "ALL ASSERTS PASS" : `${failures} ASSERT(S) FAILED`}`);
if (failures) process.exit(1);
