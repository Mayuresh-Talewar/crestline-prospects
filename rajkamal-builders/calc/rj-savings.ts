/* RJ-S23 Rajkamal Builders Infrastructure: value of a day on FY25 provisional COMBINED income.
   Source: Infomerics press release 29 Sep 2025 (income p3, p6; operating cycle p5).
   BREAK=1..5 sabotages one assert each, to prove it fails visibly. */
import { simulate, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const INCOME = 485.32; // Rs crore, FY25 provisional, combined
const CYCLE_FY24 = 103;
const CYCLE_FY25 = 137;
const RATE = BREAK === 2 ? 9 : 0; // no borrowing rate is published: no interest

const perDay = INCOME / 365;
const vod = valueOfADay(perDay, RATE);

// The 137-day cycle is the only day figure published. It is carried in the receivable slot
// purely as ONE wait at the value of a day; no balance, no terms, no other leg.
const basis: SimBasis = {
  days: { dio: null, cad: null, dso: CYCLE_FY25, dpo: null },
  perDay: { dio: null, cad: null, dso: BREAK === 5 ? INCOME / 360 : perDay, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {
    dio: "No stock cost base published",
    cad: "No contract asset or unbilled figure published",
    dpo: "No vendor terms or payables published",
  },
};

const cr = (n: number) => n.toFixed(2);
const fail = (m: string) => { console.error("ASSERT FAILED: " + m); process.exitCode = 1; };
const eq = (a: number, b: number) => Math.abs(a - b) < 1e-9;

console.log(`Basis: FY25 provisional combined total operating income Rs ${INCOME} Cr (Infomerics 29 Sep 2025 p6), four group entities`);
console.log(`Value of a day = ${INCOME} / 365 = Rs ${perDay.toFixed(6)} Cr (valueOfADay cash ${vod.cash}, carry ${vod.carry})`);
console.log(`Operating cycle (combined): FY24 ${CYCLE_FY24} days, FY25 prov ${CYCLE_FY25} days, lengthening ${CYCLE_FY25 - CYCLE_FY24} days\n`);

const scen: [string, number][] = [
  ["Ten days less", 10],
  ["Thirty days less", 30],
  ["What the extra 34 days hold", CYCLE_FY25 - CYCLE_FY24],
];
console.log("Levers the simulator exposes:", leversFor(basis).map((l) => `${l.key} (${l.now} days, bounds ${l.min} to ${l.max})`).join("; "));
console.log("\nScenario | days | cash released once (Rs Cr) | carry a year | cycle after");
for (const [name, d] of scen) {
  const r = simulate(basis, { dso: CYCLE_FY25 - d });
  const cash = BREAK === 1 ? -r.released : r.released;
  const independent = d * (INCOME / 365);
  console.log(`${name} | ${d} | ${cr(cash)} | ${cr(r.carry)} | ${CYCLE_FY25 - d}`);
  if (cash < 0) fail(`${name}: negative release`);
  if (r.carry !== 0) fail(`${name}: interest ${r.carry} not zero`);
  if (!eq(cash, independent)) fail(`${name}: simulate ${cash} vs days x per day ${independent}`);
  if (!eq(cash, d * (vod.cash as number))) fail(`${name}: valueOfADay disagrees`);
}
// 34 days is exactly the FY24 to FY25 lengthening
if (!eq(simulate(basis, { dso: CYCLE_FY24 }).released, 34 * perDay)) fail("34-day lengthening mismatch");

// payables never release cash: pushing DPO changes nothing, and no payables lever exists
const withDpo = simulate(basis, { dpo: 200, dso: CYCLE_FY25 });
const dpoLever = leversFor(basis).find((l) => l.key === "dpo");
if (BREAK === 4) { /* sabotage: pretend a payables lever released cash */ if (withDpo.released + 1 !== 0) fail("payables released cash (sabotaged check)"); }
if (dpoLever || withDpo.released !== 0) fail("payables moved cash");

// basis match: per day is income / 365 and nothing else
if (!eq(basis.perDay.dso as number, perDay)) fail("per-day basis differs from income / 365");
if (BREAK === 3) { if (!eq(simulate(basis, { dso: 127 }).released, 11 * perDay)) fail("sabotaged: 11 days vs 10"); }

console.log("\nLEVER TABLE");
console.log("Lever | Priced | Basis or reason");
console.log("Days of the operating cycle (one wait) | Yes, 10 / 30 / 34 days | value of a day = 485.32 / 365; combined; no interest");
console.log("Receivables (DSO) | No | no receivable balance or DSO published; agency range of 30 to 60 days is a generalisation, not the company's measure, not used");
console.log("Contract assets / unbilled (certification wait) | No | no figure published");
console.log("Retention | No | no balance and no release basis published");
console.log("Site stock (DIO) | No | no stock cost base published");
console.log("Payables (DPO) | No | no payables and no vendor terms published; paying later is never cash released");
console.log("Interest / carry | No | no borrowing rate published");
console.log("Combined scenario | No | the cycle is a single wait; nothing to combine");
console.log(process.exitCode ? "\nRESULT: FAILED" : "\nRESULT: all asserts passed");
