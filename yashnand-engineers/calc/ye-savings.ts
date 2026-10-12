import { simulate, leversFor, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/* Yashnand Engineers and Contractors, CRISIL 5 Dec 2024, standalone, FY24 (CRISIL estimate).
   Rs crore. Debtor days 120 as CRISIL reports; per day = operating income / 365. No interest. */
const OPERATING_INCOME = 575.08;
const DSO = 120;
const PER_DAY = OPERATING_INCOME / 365;
const BREAK = Number(process.env.BREAK ?? 0); // break-test: 1..5 corrupts one check input

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: DSO, dpo: null },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const f = (n: number) => n.toFixed(2);
let fails = 0;
const check = (name: string, ok: boolean) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) fails++;
};

console.log(`Operating income FY24 (CRISIL estimate): ${OPERATING_INCOME} Cr`);
console.log(`Debtor days (CRISIL): ${DSO}`);
console.log(`PER DAY = ${OPERATING_INCOME} / 365 = ${PER_DAY.toFixed(6)} Cr`);
console.log(`valueOfADay: ${valueOfADay(PER_DAY, 0).cash} cash, carry ${valueOfADay(PER_DAY, 0).carry}`);

const levers = leversFor(basis);
console.log("\nLevers the simulator accepts:", levers.map((l) => `${l.key} now ${l.now} min ${l.min} max ${l.max} target ${l.target}`).join("; "));
console.log("toTerms (no terms published):", JSON.stringify(toTerms(basis)));

const rows: { cut: number; to: number; cash: number; carry: number; cycleNow: number | null }[] = [];
for (const cut of [10, 30]) {
  const r = simulate(basis, { dso: DSO - cut });
  const dso = r.levers.find((l) => l.key === "dso")!;
  rows.push({ cut, to: dso.next, cash: r.released, carry: r.carry, cycleNow: r.cycle.now });
  console.log(`\nDSO ${DSO} -> ${dso.next}: moved ${dso.moved}, cash released ${f(r.released)} Cr (${r.released}), carry ${r.carry}`);
}
const bad = simulate(basis, { dso: DSO - 10, dio: 0, dpo: 999, cad: 0 });
console.log("\nOther legs asked to move (no base): levers present =", bad.levers.map((l) => l.key).join(","));

console.log("\nLEVER TABLE");
console.log("Receivables (DSO 120): PRICED at 575.08/365 per day: 10 days, 30 days. No payment term published, so no 'to term' row.");
console.log("Contract assets / unbilled: NOT PRICED, no balance or days published.");
console.log("Retention: NOT PRICED, no balance and no release basis published (GCA 151 is not added).");
console.log("Stock (DIO 29): NOT PRICED, no cost base (materials consumed or COGS) published.");
console.log("Payables (DPO): NOT PRICED, no payables, creditor days or vendor terms published.");
console.log("Combined scenario: none, only one lever is priced (the 30 day row is the whole run).");
console.log("Interest: none, no borrowing rate published.");

console.log("\nASSERTS");
const [r10, r30] = rows;
check("no negative release", (BREAK === 1 ? -1 : 1) * Math.min(r10.cash, r30.cash) >= 0);
check("interest = 0", (BREAK === 2 ? 0.5 : bad.carry) === 0 && r10.carry === 0 && r30.carry === 0);
check("cross-check days x per day vs simulate", Math.abs(r10.cash - (BREAK === 3 ? 99 : 10 * PER_DAY)) < 1e-9 && Math.abs(r30.cash - 30 * PER_DAY) < 1e-9);
check("payables never release cash", (BREAK === 4 ? 0 : 1) === 0 ? false : !bad.levers.some((l) => l.key === "dpo" && l.cash !== 0));
check("basis matches: only dso priced, at revenue-basis per day", (BREAK === 5 ? 2 : levers.length) === 1 && levers[0].key === "dso" && levers[0].perDay === PER_DAY);
check("no lever priced on a base it does not belong to (dio/cad/dpo absent)", !bad.levers.some((l) => l.key !== "dso"));
check("10 days = a tenth of 30 x 3 consistency", Math.abs(r30.cash - 3 * r10.cash) < 1e-9);

console.log(`\nSUMMARY  ten days ${f(r10.cash)} Cr (to ${r10.to} days); thirty days ${f(r30.cash)} Cr (to ${r30.to} days); one day ${f(PER_DAY)} Cr`);
if (fails) { console.log(`${fails} FAILED`); process.exit(1); }
console.log("ALL PASS");
