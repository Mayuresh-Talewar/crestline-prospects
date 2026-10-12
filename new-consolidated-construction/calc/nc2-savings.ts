import { simulate, toTerms, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";

// New Consolidated Construction Company Limited, standalone FY25, Rs Cr, days as Acuite reports (3 Feb 2026).
const REV = 610.57;
const PER_DAY = REV / 365;
const DSO = 100;
const RETENTION = 92.39;
const BREAK = process.env.BREAK ?? "";

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: DSO, dpo: null },
  perDay: { dio: null, cad: null, dso: BREAK === "basis" ? REV / 360 : PER_DAY, dpo: null },
  balances: { dio: null, cad: null, dso: DSO * PER_DAY, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === "interest" ? 9 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const fmt = (n: number) => n.toFixed(2);
const levers = leversFor(basis);
console.log("LEVERS the simulator can pull:", levers.map((l) => `${l.key} now=${l.now} min=${l.min} max=${l.max} target=${l.target} perDay=${fmt(l.perDay)}`).join(" | "));
console.log("valueOfADay(rate 0):", JSON.stringify(valueOfADay(PER_DAY, 0)));
console.log("PER DAY =", PER_DAY.toFixed(6), "Cr; DSO 100 balance =", fmt(DSO * PER_DAY), "Cr");

const results: Record<string, { released: number; carry: number; cash: number }> = {};
for (const step of [10, 30]) {
  const r = simulate(basis, { dso: BREAK === "negative" ? DSO + step : DSO - step });
  const dso = r.levers.find((l) => l.key === "dso")!;
  results[step] = { released: r.released, carry: r.carry, cash: dso.cash };
  console.log(`DSO ${DSO} -> ${dso.next} (${step} days): released ${fmt(r.released)} Cr, carry ${fmt(r.carry)} Cr/yr, workingCapital ${r.workingCapital.next}`);
  // independent cross-check
  const expect = step * REV / 365;
  const crossed = BREAK === "cross" ? expect + 0.5 : expect;
  console.log(`  cross-check days x per day = ${fmt(crossed)}`);
  if (r.released < 0) throw new Error("ASSERT FAIL: negative release");
  if (r.carry !== 0) throw new Error("ASSERT FAIL: interest must be 0, no rate disclosed");
  if (Math.abs(r.released - crossed) > 0.005) throw new Error("ASSERT FAIL: simulate disagrees with days x per day");
  if (Math.abs(dso.perDay - REV / 365) > 1e-9) throw new Error("ASSERT FAIL: basis, DSO must move at revenue per day on 365 days");
  if (r.levers.some((l) => l.key !== "dso")) throw new Error("ASSERT FAIL: lever priced on a base it does not belong to");
}
// payables never release cash: a DPO lever must not exist (no terms, no days), and stretching must not release
const dpoBasis: SimBasis = { ...basis, days: { ...basis.days, dpo: 60 }, perDay: { ...basis.perDay, dpo: 1 }, balances: { ...basis.balances, dpo: 60 } };
const dp = simulate(dpoBasis, { dpo: BREAK === "dpo" ? 0 : 90 }).levers.find((l) => l.key === "dpo")!;
console.log(`DPO probe (no vendor terms): now 60, asked 90, held at ${dp.next}, cash ${dp.cash}`);
if (BREAK !== "dpo" && (dp.next !== 60 || dp.cash !== 0)) throw new Error("ASSERT FAIL: payables released cash");
if (BREAK === "dpo" && dp.cash >= 0) throw new Error("ASSERT FAIL: payables released cash");
if (BREAK === "dpo" && dp.cash < 0) throw new Error("ASSERT FAIL: payables moved below today, probe broken");
// no client term published, so toTerms must move nothing
const tt = toTerms(basis);
console.log("toTerms (no term published):", JSON.stringify(tt));
if (Object.keys(tt).length) throw new Error("ASSERT FAIL: terms invented");

// Ranking via priceLevers: retention as a balance only, rate 0
const ranked = priceLevers({
  position: { actions: [] } as never,
  ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as never,
  vendors: [],
  retention: RETENTION,
  perDay: PER_DAY,
  financingRatePct: 0,
  owners: { certification: null, collection: null, material: null },
});
for (const l of ranked) console.log(`priceLevers: ${l.id} cash ${l.cash} carry ${l.carry} days ${l.days?.toFixed(1)} (balance, no release speed assumed)`);
console.log("Retention in revenue-days:", (RETENTION / PER_DAY).toFixed(1));

console.log("\nRANK (cash released once, scenario rows overlap, never added):");
console.log(` 1. Receivables 30 days less: ${fmt(results[30].released)} Cr`);
console.log(` 2. Receivables 10 days less: ${fmt(results[10].released)} Cr`);
console.log(` -  Retention: ${fmt(RETENTION)} Cr balance only, not priced as a move (no release basis)`);
console.log("\nLEVER TABLE");
console.log("Receivables (DSO 100) at revenue per day | PRICED 10d, 30d | not to term: no client term published, clamp floor 0, ceiling 140");
console.log("Contract assets / unbilled | NOT PRICED | no balance or days published");
console.log("Retention 92.39 Cr | NOT PRICED | balance only, release basis not found; 55.2 revenue-days shown as size");
console.log("Stock (DIO 171) | NOT PRICED | no cost-of-materials base published; never priced at revenue per day");
console.log("Payables (DPO) | NOT PRICED | no creditor days, no vendor terms");
console.log("Combined scenario | NOT RUN | only one lever priced, a combined run equals the single lever");
console.log("Interest | NOT PRICED | no borrowing rate disclosed in sources used");
console.log("ALL ASSERTS PASSED");
