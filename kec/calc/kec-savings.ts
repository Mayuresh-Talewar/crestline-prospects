/**
 * KEC-4: KEC International FY26 public figures through Crestline's own PURE maths.
 * Imports the app (`@/lib/...`), so it runs only from inside the app repo:
 *   copy to <repo>/scripts/_tmp-kec-savings.ts, then `npx tsx scripts/_tmp-kec-savings.ts`, then delete the copy.
 * Units: Rs crore. KEC consolidated, closing balances at 31 Mar 2026 unless marked.
 * Every input comes from kec/data.md (KEC's own filings): [AR26] Annual Report 2025-26, statements signed 16 May 2026;
 * [IP-Q4] investor presentation 16 May 2026; [IP-Q1] 10 Aug 2026; [T-Q4] call 18 May 2026; [T-Q1] call 11 Aug 2026.
 */
import assert from "node:assert/strict";
import { leversFor, simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

// ---- Inputs (all V in data.md) ------------------------------------------------
const revenue = 23505.54; // [AR26] PDF p.117, revenue from operations FY26
const revenueFY25 = 21846.7; // [AR26] p.117 comparative
const material = 11571.46; // [AR26] p.117, materials consumed (fact-check B6)
const costBase = 11571.46 + 7068.41; // materials + erection & sub-contracting [AR26] p.117
const receivables = 6474.21 + 31.45; // current + non-current net [AR26] p.117
const contractAssets = 12127.56; // [AR26] p.117 (incl. retention)
const retention = 4922.51; // [AR26] p.132 Note 20
const retentionFY25 = 3669.63; // [AR26] p.132 comparative
const inventory = 1532.74; // [AR26] p.117
const payables = 8703.25 + 2120.74; // trade payables + trade acceptances [AR26] p.117, Note 33
const gross26 = 6745.05, over6m26 = 691.7 + 209.01 + 92.35 + 234.2; // Note 16.3 [AR26] p.131
const gross25 = 5159.92, over6m25 = 266.95 + 124.68 + 18.77 + 53.07; // same note, FY25 column
const financeCost = 663.6; // [AR26] Note 45 p.141: interest 630.15 + MSME 0.43 + lease 23.25 + other borrowing costs 9.77
const debt26 = 661.37 + 4441.86 + 2120.74; // borrowings + interest-bearing acceptances, 31 Mar 26
const debt25 = 358.46 + 3342.64 + 1507.27; // same, 31 Mar 25
const nwcDays = { now: 137, q1: 134, target: 110 }; // [IP-Q4] slide 30; [IP-Q1] slide 32; [T-Q1] p.17 (CFO)
const netDebt = { now: 6722, q1: 6568, target: 5500 }; // [IP-Q4] slide 30; [IP-Q1] slide 32; [T-Q1] p.17 (CFO)
const pat = 605.59, pbt = 789.14; // [AR26] p.117
const wcLoanRange = [6.9, 8.9]; // consortium working-capital loans FY26 [AR26] Note 30 p.137

// KEC publishes no average cost of borrowing (transcripts, presentations, AR26 searched). Fallback, as the ticket says:
const RATE = (financeCost / ((debt25 + debt26) / 2)) * 100; // 10.68%, see solutions.md for what it includes

const perDay = { rev: revenue / 365, mat: material / 365, cost: costBase / 365 };
const days = {
  dio: inventory / perDay.mat,
  cad: contractAssets / perDay.rev,
  dso: receivables / perDay.rev,
  dpo: payables / perDay.cost,
};
const wc = receivables + contractAssets + inventory - payables; // Crestline arithmetic, NOT KEC's NWC definition

const basis: SimBasis = {
  days,
  perDay: { dio: perDay.mat, cad: perDay.rev, dso: perDay.rev, dpo: perDay.cost },
  balances: { dio: inventory, cad: contractAssets, dso: receivables, dpo: payables },
  // Certification window, client payment terms and vendor terms are NOT published: the app holds those legs at today.
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: wc,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const f = (n: number, d = 1) => n.toLocaleString("en-IN", { minimumFractionDigits: d, maximumFractionDigits: d });
const at = (cash: number, r: number) => (cash * r) / 100;
const row = (label: string, cash: number) =>
  console.log(
    `${label.padEnd(64)} cash ${f(cash).padStart(9)} | interest/yr ${f(at(cash, RATE)).padStart(6)} @${f(RATE, 2)}%` +
      ` (${f(at(cash, wcLoanRange[0]))}-${f(at(cash, wcLoanRange[1]))} @ WC-loan range)`,
  );

console.log("== Opening position (Crestline arithmetic, 365-day, closing balances, FY26) ==");
console.log(`revenue/day ${f(perDay.rev, 2)} | material/day ${f(perDay.mat, 2)} | cost/day ${f(perDay.cost, 2)}`);
console.log(`days: contract assets ${f(days.cad)} | receivables ${f(days.dso)} | stock (on material) ${f(days.dio)} | payables incl acceptances (on cost) ${f(days.dpo)}`);
console.log(`WC (receivables + contract assets + stock - payables incl acceptances, before contract liabilities) ${f(wc)}`);
console.log(`rate: finance cost ${financeCost} / avg(borrowings + acceptances) ${f((debt25 + debt26) / 2)} = ${f(RATE, 2)}%`);
const day = valueOfADay(perDay.rev, RATE);
console.log(`valueOfADay: cash ${f(day.cash!, 2)} Cr, interest ${f(day.carry!, 2)} Cr/yr`);

console.log("\n== (1) 10- and 30-day steps per leg (simulate; rows overlap, never add) ==");
for (const step of [10, 30]) {
  const cad = simulate(basis, { cad: days.cad - step });
  const dso = simulate(basis, { dso: days.dso - step });
  row(`Contract assets ${f(days.cad)} -> ${f(days.cad - step)} days (-${step})`, cad.released);
  row(`Trade receivables ${f(days.dso)} -> ${f(days.dso - step)} days (-${step})`, dso.released);
  row(`KEC NWC ${nwcDays.now} -> ${nwcDays.now - step} days (-${step}), revenue/365 basis`, step * perDay.rev);
}

console.log("\n== (2) Their own targets ==");
const nwcCash = (nwcDays.now - nwcDays.target) * perDay.rev;
const nwcCashQ1 = (nwcDays.q1 - nwcDays.target) * perDay.rev;
const debtCut = netDebt.now - netDebt.target;
const debtCutQ1 = netDebt.q1 - netDebt.target;
row(`NWC ${nwcDays.now} -> ${nwcDays.target} days (27 days x revenue/day)`, nwcCash);
console.log(`   debt target ${netDebt.now} -> ${netDebt.target} = ${debtCut}; NWC target alone = ${f((nwcCash / debtCut) * 100)}% of it`);
row(`From 30 Jun 26: NWC ${nwcDays.q1} -> ${nwcDays.target} days`, nwcCashQ1);
console.log(`   debt still to cut ${netDebt.q1} -> ${netDebt.target} = ${debtCutQ1}; NWC remainder = ${f((nwcCashQ1 / debtCutQ1) * 100)}% of it`);
console.log(`   interest on the debt cut itself: ${f(at(debtCut, RATE))} Cr/yr @${f(RATE, 2)}%`);
console.log(`   growth absorbs: each 1% of revenue growth held at 110 days needs ${f((nwcDays.target * revenue * 0.01) / 365)} Cr (KEC gives no total revenue guidance)`);

console.log("\n== (3) Old receivables: over-6-month share back to FY25 ==");
const share26 = over6m26 / gross26, share25 = over6m25 / gross25;
const old = over6m26 - share25 * gross26;
console.log(`over 6 months: FY26 ${f(over6m26, 2)} = ${f(share26 * 100)}% of ${gross26}; FY25 ${f(over6m25, 2)} = ${f(share25 * 100)}% of ${gross25}`);
row(`Over-6m back to ${f(share25 * 100)}% of FY26 gross (${f(over6m26, 2)} -> ${f(share25 * gross26, 2)})`, old);

console.log("\n== (4) Retention held to revenue growth ==");
const revGrowth = revenue / revenueFY25;
const retAtRevenue = retentionFY25 * revGrowth;
const retRelease = retention - retAtRevenue;
console.log(`revenue +${f((revGrowth - 1) * 100)}%, retention +${f((retention / retentionFY25 - 1) * 100)}%; retention days ${f(retentionFY25 / (revenueFY25 / 365))} -> ${f(retention / perDay.rev)}`);
row(`Retention ${f(retention, 2)} -> ${f(retAtRevenue, 2)} (FY25 x revenue growth)`, retRelease);

console.log("\n== (5) Levers ranked by the app's priceLevers (10-day steps + retention + old receivables) ==");
const ten = 10 * perDay.rev;
const position = {
  actions: [
    { id: "certification", title: "Bill and certify executed work 10 days sooner", detail: "", days: 10, value: ten, carrySaved: null, internallyControllable: true, owner: "", confidence: "low", measuredAgainst: "illustrative 10-day step" },
    { id: "collection", title: "Collect invoiced receivables 10 days sooner", detail: "", days: 10, value: ten, carrySaved: null, internallyControllable: false, owner: "", confidence: "low", measuredAgainst: "illustrative 10-day step" },
  ],
} as unknown as CyclePosition;
const ledger = { stillAwaiting: old } as unknown as CashLedgerSummary; // over-6m receivables stand in for "certified, not collected"
const ranked = priceLevers({ position, ledger, vendors: [], retention: retRelease, perDay: perDay.rev, financingRatePct: RATE, owners: { certification: null, collection: null, material: null } });
for (const l of ranked) console.log(`${l.label.padEnd(64)} cash ${f(l.cash ?? 0).padStart(9)} | interest/yr ${f(l.carry).padStart(6)} | days ${l.days === null ? "NA" : f(l.days)} | ours=${l.ours}`);

console.log("\n== (6) Margin lens (CEO) ==");
const tax = 1 - pat / pbt; // effective FY26, computed from PBT and PAT
console.log(`effective tax FY26 = 1 - ${pat}/${pbt} = ${f(tax * 100)}%`);
for (const [label, cash] of [["10 days of any leg", ten], ["30 days of any leg", 3 * ten], ["NWC 137 -> 110", nwcCash], ["Retention to revenue growth", retRelease], ["Over-6m back to FY25 share", old]] as const) {
  const i = at(cash, RATE);
  console.log(`${label.padEnd(30)} interest ${f(i).padStart(6)} | after tax ${f(i * (1 - tax)).padStart(6)} = ${f(((i * (1 - tax)) / pat) * 100).padStart(5)}% of PAT | ${f((i / revenue) * 100, 2)} pts of revenue (PBT margin, not EBITDA)`);
}

console.log("\n== Vendors (rule 1: paying later is never a saving) ==");
const stretch = simulate(basis, { dpo: days.dpo + 30 });
console.log(`DPO asked +30: held at ${f(stretch.levers.find((l) => l.key === "dpo")!.next)} (no published vendor terms = no ceiling), released ${f(stretch.released)}`);
row("Pay 10 days sooner: cash CONSUMED (negative)", simulate(basis, { dpo: days.dpo - 10 }).released);

// ---- Checks: fail loudly if the maths or the bounds drift ----
assert.equal(leversFor(basis).length, 4);
assert.ok(Math.abs(RATE - 10.68) < 0.01, `rate ${RATE}`);
assert.ok(Math.abs(simulate(basis, { cad: days.cad - 10 }).released - ten) < 1e-6);
assert.equal(stretch.released, 0); // rule 1 holds
assert.ok(Math.abs(share25 * 100 - 8.98) < 0.01 && Math.abs(share26 * 100 - 18.2) < 0.05);
console.log("\nchecks passed");
