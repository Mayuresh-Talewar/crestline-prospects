/*
  Jyoti Structures Limited (STANDALONE, AR FY26 vintage): savings calc, JS-3.
  Runs the app's own pure functions. No interest (no borrowing rate disclosed),
  no targets, no contract terms passed: a term would set a floor or a ceiling
  on a leg, and none is a signed term we can cite per contract.
  Inputs: data.md s2, s4, s5, s7 and src/js-calc-output.txt.
  Run: npx tsx scripts/_tmp-jyoti-savings.ts [neg|interest|match|payables]
  The optional argument breaks ONE assert on purpose, to prove it fires.
*/
import assert from "node:assert/strict";
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.argv[2] ?? "";

// ---- inputs (Rs crore) -----------------------------------------------------
const REVENUE_FY26 = 750.87; // AR FY26 p89
const RUNNING_BOOK = 238.93; // receivables up to 3 years past due, Mar 2026, AR FY26 p124 (computed sum)
const UNDER_6M = 214.18; // under-6-months bucket, Mar 2026, AR FY26 p124
const ADV_MAR25 = 134.21; // advances from customers, Mar 2025, AR FY26 p100 note 22
const ADV_MAR26 = 92.92; // same, Mar 2026
const TP_MAR26 = 116.2; // current trade payables, Mar 2026, AR FY26 p99 (payables assert only)
const TP_DAYS = 67; // js-calc-output s3 (payables assert only)
const RATE_PCT = BREAK === "interest" ? 9 : 0; // no borrowing rate disclosed
const STEPS = BREAK === "neg" ? [-10, 30] : [10, 30];

const perDay = REVENUE_FY26 / 365;
const r2 = (n: number) => n.toFixed(2);
const r0 = (n: number) => n.toFixed(0);

const basisFor = (days: number, balance: number): SimBasis => ({
  days: { dio: null, cad: null, dso: days, dpo: null },
  perDay: { dio: null, cad: null, dso: perDay, dpo: null },
  balances: { dio: null, cad: null, dso: balance, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const emptyLedger: CashLedgerSummary = {
  months: [], totalIn: 0, totalOut: 0, netTotal: 0, peakFundingNeed: 0, peakFundingLabel: "",
  closingCumulative: 0, totalRaised: 0, totalSettled: 0, stillOnCredit: 0, totalCertified: 0,
  totalCollected: 0, stillAwaiting: 0, bestMonth: { label: "", surplus: 0 },
  worstMonth: { label: "", surplus: 0 }, monthsInSurplus: 0, monthsInDeficit: 0,
  firstHalfNet: 0, secondHalfNet: 0, halfOverHalfPct: null,
};

const positionWith = (step: number, value: number): CyclePosition => ({
  deployed: null, clientAdvance: null, otherFunding: null, ownFunds: null,
  cycleDays: null, clientDays: null, otherDays: null, coveredDays: null, reserveDays: null,
  coveredSharePct: null, selfFunded: null, selfFundingDays: null, annualCarry: null,
  actions: [{
    id: "collection", title: `Collect running receivables ${step} days sooner`, detail: "",
    days: step, value, carrySaved: null, internallyControllable: false, owner: "",
    confidence: "low", measuredAgainst: "FY26 revenue per day",
  }],
  removableDays: null, removableValue: null, cycleAfterActions: null,
  structuralGapDays: null, reachesSelfFunding: null,
});

// ---- run -------------------------------------------------------------------
console.log("=== Jyoti Structures, STANDALONE, AR FY26 vintage. Rs crore. ===");
console.log(`mode: ${BREAK || "clean"}`);
console.log(`Value of a day = FY26 revenue ${r2(REVENUE_FY26)} / 365 = ${perDay.toFixed(3)} Cr/day`);
console.log(`Interest rate used: ${RATE_PCT}% (no borrowing rate disclosed)`);
console.log("Contract terms passed: none (payment, certification, vendor all null)");
console.log("");

const running = basisFor(RUNNING_BOOK / perDay, RUNNING_BOOK);
console.log(`Running book (up to 3 years) ${r2(RUNNING_BOOK)} Cr = ${running.days.dso!.toFixed(2)} days of FY26 revenue`);

const cash: number[] = [];
STEPS.forEach((step, i) => {
  const row = i === 0 ? "A" : "B";
  const now = running.days.dso!;
  const sim = simulate(running, { dso: now - step });
  const leg = sim.levers.find((l) => l.key === "dso")!;
  const priced = priceLevers({
    position: positionWith(step, step * perDay + (BREAK === "match" ? 0.01 : 0)),
    ledger: emptyLedger, vendors: [], retention: null, perDay,
    financingRatePct: RATE_PCT, owners: { certification: null, collection: null, material: null },
  });
  console.log(`Row ${row}: ${step}-day step on the running book`);
  console.log(`  days ${now.toFixed(2)} -> ${leg.next.toFixed(2)} (printed ${r0(now)} -> ${r0(leg.next)})`);
  console.log(`  cash released once (simulate): ${r2(sim.released)} Cr`);
  console.log(`  cash released once (priceLevers): ${r2(priced[0].cash!)} Cr`);
  console.log(`  running book after: ${r2(RUNNING_BOOK - sim.released)} Cr`);
  console.log(`  interest / carry: simulate ${r2(sim.carry)}, priceLevers ${r2(priced[0].carry)}`);

  assert.ok(sim.released >= 0, `Row ${row}: negative release ${sim.released}`);
  assert.equal(sim.carry, 0, `Row ${row}: interest must be 0`);
  assert.equal(priced[0].carry, 0, `Row ${row}: lever carry must be 0`);
  assert.ok(Math.abs(priced[0].cash! - sim.released) < 1e-9, `Row ${row}: priceLevers ${priced[0].cash} != simulate ${sim.released}`);
  cash.push(sim.released);
});
console.log("");

// ---- context only ----------------------------------------------------------
const u6 = basisFor(UNDER_6M / perDay, UNDER_6M);
console.log("Row C (context only): the under-6-months bucket");
console.log(`  ${r2(UNDER_6M)} Cr = ${u6.days.dso!.toFixed(2)} days of FY26 revenue (printed ${r0(u6.days.dso!)})`);
STEPS.forEach((step, i) => {
  const sim = simulate(u6, { dso: u6.days.dso! - step });
  console.log(`  same ${step}-day step read on this bucket: ${r0(u6.days.dso!)} -> ${r0(sim.levers[0].next)} days, cash ${r2(sim.released)} Cr (= Row ${i === 0 ? "A" : "B"}, not added)`);
});
console.log("");
console.log("Row D (context only): customer advances beside the released cash");
console.log(`  advances Mar 2025 ${r2(ADV_MAR25)} -> Mar 2026 ${r2(ADV_MAR26)} Cr, change ${r2(ADV_MAR26 - ADV_MAR25)} Cr`);
cash.forEach((c, i) => console.log(`  Mar 2026 advances + Row ${i === 0 ? "A" : "B"} cash: ${r2(ADV_MAR26)} + ${r2(c)} = ${r2(ADV_MAR26 + c)} Cr (overlaps Row ${i === 0 ? "A" : "B"}, not added)`));
console.log("");

// ---- payables never release cash -------------------------------------------
const tpPerDay = TP_MAR26 / TP_DAYS;
const pay: SimBasis = {
  ...basisFor(0, 0),
  days: { dio: null, cad: null, dso: null, dpo: TP_DAYS },
  perDay: { dio: null, cad: null, dso: null, dpo: tpPerDay },
  balances: { dio: null, cad: null, dso: null, dpo: TP_MAR26 },
  terms: { certification: null, payment: null, vendor: BREAK === "payables" ? 200 : null },
};
console.log("Payables check (assert only, never printed in the booklet)");
for (const attempt of [TP_DAYS + 10, TP_DAYS + 30, TP_DAYS - 10]) {
  const sim = simulate(pay, { dpo: attempt });
  const leg = sim.levers[0];
  console.log(`  ask DPO ${attempt} -> held at ${r0(leg.next)}, cash ${r2(leg.cash)} Cr`);
  assert.ok(leg.cash <= 0, `payables released cash ${leg.cash} at DPO ${attempt}`);
}
console.log("");
console.log("ALL ASSERTS PASSED: no negative release; interest = 0; priceLevers cash = simulate cash; payables never release cash.");
