/**
 * NP Infraprojects savings scenarios. Runs the app's own simulate() and valueOfADay().
 * Inputs: CARE Ratings press release 22 Sep 2025, standalone. FY25 total operating income
 * Rs 242.39 Cr (UNAUDITED), gross current asset days 282 (FY25). No borrowing rate is
 * published, so NO interest is priced. Terms are passed as null: the clamp bounds are the
 * simulator's own (receivable leg floor 0 and ceiling max(days*1.4, days+30)).
 * NP_BREAK=neg|interest|cross|payables deliberately breaks one assert (self-test).
 */
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const TOI_FY25 = 242.39; // Rs Cr
const GCA_DAYS = 282;
const PER_DAY = TOI_FY25 / 365;
const BREAK = process.env.NP_BREAK ?? "";
const fail: string[] = [];
const check = (name: string, ok: boolean) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) fail.push(name);
};

const basis = (dpoDays: number | null): SimBasis => ({
  days: { dio: null, cad: null, dso: GCA_DAYS, dpo: dpoDays },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: dpoDays === null ? null : PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0, // no interest: no rate is published
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const b = basis(null);
console.log(`Per day (242.39 / 365): ${PER_DAY.toFixed(6)} Cr`);
console.log(`valueOfADay cash: ${valueOfADay(PER_DAY, 0).cash} carry: ${valueOfADay(PER_DAY, 0).carry}`);
const rows = [10, 30].map((step) => {
  const r = simulate(b, { dso: GCA_DAYS - step });
  const lever = r.levers.find((l) => l.key === "dso")!;
  const cash = BREAK === "neg" ? -r.released : BREAK === "cross" ? r.released * 1.01 : r.released;
  const carry = BREAK === "interest" ? 0.05 : r.carry;
  console.log(`Step ${step} days on GCA days ${GCA_DAYS}: ${GCA_DAYS} -> ${lever.next}; clamp [${lever.min}, ${lever.max.toFixed(1)}]; cash released ${cash.toFixed(4)} Cr; interest ${carry}`);
  return { step, cash, carry, next: lever.next };
});

for (const r of rows) {
  check(`step ${r.step}: no negative release`, r.cash >= 0);
  check(`step ${r.step}: interest = 0`, r.carry === 0);
  check(`step ${r.step}: independent cross-check (days x per day = simulate)`, Math.abs(r.step * (TOI_FY25 / 365) - r.cash) < 1e-9);
  check(`step ${r.step}: lands at ${GCA_DAYS - r.step}`, r.next === GCA_DAYS - r.step);
}
check("10 days is a third of 30 days", Math.abs(rows[1].cash - 3 * rows[0].cash) < 1e-9);

// Payables never release cash: NP publishes no payable days, so the leg must not exist;
// and asking for any vendor credit changes nothing. A synthetic dpo leg (not printed anywhere)
// proves the ceiling holds when the leg does exist.
const base = simulate(b, { dso: GCA_DAYS });
const asked = simulate(b, { dso: GCA_DAYS, dpo: 100 });
check("payables: no payable leg exists for NP", !base.levers.some((l) => l.key === "dpo"));
check("payables: asking for vendor credit releases nothing", asked.released === base.released);
const syn = simulate(basis(40), { dso: GCA_DAYS, dpo: 100 });
const synCash = BREAK === "payables" ? 5 : syn.levers.find((l) => l.key === "dpo")!.cash;
check("payables: synthetic leg held at ceiling, cash 0", synCash === 0);

console.log(`\nValues for the pack: 10 days = Rs ${rows[0].cash.toFixed(2)} Cr; 30 days = Rs ${rows[1].cash.toFixed(2)} Cr; one day = Rs ${PER_DAY.toFixed(2)} Cr`);
if (fail.length) {
  console.error(`\n${fail.length} ASSERT(S) FAILED: ${fail.join("; ")}`);
  process.exit(1);
}
console.log("\nALL ASSERTS PASSED");
