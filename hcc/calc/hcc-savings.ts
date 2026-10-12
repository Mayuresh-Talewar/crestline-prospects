/**
 * HCC savings calculator, ticket HC-3. Temporary: copied to the HCC folder and deleted from the app repo.
 *
 * Chart to calc row map (decided before any figure was run):
 *   P1 chart, running receivable days FY25 103.5 and FY26 157.8:  rows S10.days, S30.days
 *   P2 chart, running receivable balance FY25 1,361.06 and FY26 1,701.67:  rows S10.balance, S30.balance
 *   P3 chart, days against the stated 30 to 90 day terms:  rows S10.gapTo90, S30.gapTo90
 *   Cash released, every chart:  rows S10.cash, S30.cash (one off, never added together)
 *
 * Inputs, all standalone, INR crore (hcc/data.md):
 *   FY26 revenue from operations 3,937.25  (AR FY26 p109, verified)
 *   FY25 revenue from operations 4,801.05  (AR FY26 p109, verified)
 *   Running receivables considered good, FY26 1,701.67 and FY25 1,361.06  (ageing table, AR FY26 p132, verified)
 *   Materials 526.51 and subcontracting 1,973.33, FY26  (AR FY26 p109, verified; payables check only)
 *   Trade payables FY26 2,017.40  (AR FY26 p148, verified; payables check only)
 *
 * Rules: no terms passed to the simulator, interest rate 0 (no working capital facility is disclosed),
 * payables never release cash. BREAK=1..4 breaks one assert each, to prove the assert can fail.
 *
 * Run: npx tsx scripts/_tmp-hcc-savings.ts
 */
import { leversFor, simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.env.BREAK ?? "";

const REVENUE_FY26 = 3937.25;
const REVENUE_FY25 = 4801.05;
const RUNNING_FY26 = 1701.67;
const RUNNING_FY25 = 1361.06;
const MATERIALS_FY26 = 526.51;
const SUBCONTRACT_FY26 = 1973.33;
const PAYABLES_FY26 = 2017.4;
const TERMS_UPPER = 90; // note 6.7, AR FY26 p132: generally 30 to 90 days, retention deposits excepted
const RATE_PCT = BREAK === "2" ? 9.5 : 0;

const perDay = REVENUE_FY26 / 365;
const daysNow = RUNNING_FY26 / perDay;
const daysFy25 = RUNNING_FY25 / (REVENUE_FY25 / 365);

const empty = { dio: null, cad: null, dso: null, dpo: null };
const basis: SimBasis = {
  days: { ...empty, dso: daysNow },
  perDay: { ...empty, dso: perDay },
  balances: { ...empty, dso: RUNNING_FY26 },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: RUNNING_FY26,
  ratePct: RATE_PCT,
  desks: { ...empty },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const assert = (ok: boolean, message: string) => {
  if (!ok) {
    console.error(`ASSERT FAILED: ${message}`);
    process.exit(1);
  }
};
const f2 = (n: number) => n.toFixed(2);
const f1 = (n: number) => n.toFixed(1);
const row = (label: string, value: string, formula: string) => console.log(`${label} = ${value}    [${formula}]`);

// Clamp bounds, read from the app rather than assumed.
const lever = leversFor(basis).find((l) => l.key === "dso");
assert(lever !== undefined, "receivable lever exists");
const dso = lever!;
row("Value of a day FY26", f2(perDay), "FY26 standalone revenue 3,937.25 / 365");
row("Value of a day FY25", f2(REVENUE_FY25 / 365), "FY25 standalone revenue 4,801.05 / 365");
row("Running receivable days FY26", f1(daysNow), "1,701.67 / value of a day FY26");
row("Running receivable days FY25", f1(daysFy25), "1,361.06 / value of a day FY25");
row("Simulator floor (no terms passed)", f1(dso.min), "leversFor: terms.payment null");
row("Simulator ceiling", f1(dso.max), "leversFor: max(now x 1.4, now + 30)");
row("Simulator side", dso.side, "leversFor: client's clock");

for (const step of [10, 30]) {
  const ask = BREAK === "1" ? daysNow + step : daysNow - step;
  assert(ask >= dso.min && ask <= dso.max, `step ${step} sits inside the clamp`);
  const sim = simulate(basis, { dso: ask });
  const leg = sim.levers.find((l) => l.key === "dso")!;

  // 1. No negative release.
  assert(sim.released >= 0 && leg.cash >= 0, `step ${step}: release is not negative (${f2(sim.released)})`);
  // 2. Interest is zero.
  assert(sim.carry === 0, `step ${step}: interest is zero (${f2(sim.carry)})`);
  // 3. Independent cross check: days x value of a day, written without the app.
  const valueOfADay = BREAK === "3" ? REVENUE_FY26 / 366 : 3937.25 / 365;
  const independent = step * valueOfADay;
  assert(Math.abs(independent - sim.released) < 0.005, `step ${step}: ${f2(independent)} equals simulate ${f2(sim.released)}`);

  // Levers: price the same move, interest at 0.
  const position = {
    actions: [
      {
        id: "collection",
        title: `Take ${step} days off running receivables`,
        detail: "",
        days: step,
        value: sim.released,
        carrySaved: null,
        internallyControllable: false,
        owner: "Collections",
        confidence: "medium",
        measuredAgainst: "a step scenario, no terms passed",
      },
    ],
  } as unknown as CyclePosition;
  const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
  const levers = priceLevers({
    position,
    ledger,
    vendors: [],
    retention: null,
    perDay,
    financingRatePct: RATE_PCT,
    owners: { certification: null, collection: null, material: null },
  });
  assert(levers.length === 1 && levers[0].cash === sim.released, `step ${step}: levers carry the same cash`);
  assert(levers[0].carry === 0, `step ${step}: levers interest is zero`);

  const tag = `S${step}`;
  row(`${tag}.days`, f1(leg.next), `${f1(daysNow)} less ${step}`);
  row(`${tag}.cash`, f2(sim.released), `simulate: ${step} days x value of a day, released once`);
  row(`${tag}.crossCheck`, f2(independent), `${step} x 3,937.25 / 365, written without the app`);
  row(`${tag}.balance`, f2(sim.workingCapital.next!), "1,701.67 less cash released");
  row(`${tag}.gapTo90`, f1(leg.next - TERMS_UPPER), "days after the step less the 90 day upper end of stated terms");
  row(`${tag}.interest`, f2(sim.carry), "rate 0: no working capital facility disclosed");
  row(`${tag}.leverCarry`, f2(levers[0].carry), "priceLevers at rate 0");
}
row("Gap to 90 days FY26 today", f1(daysNow - TERMS_UPPER), "157.8 less 90");
row("Gap to 90 days FY25", f1(daysFy25 - TERMS_UPPER), "103.5 less 90");

// 4. Payables never release cash: a payable leg with no vendor terms, asked to stretch.
const payPerDay = (MATERIALS_FY26 + SUBCONTRACT_FY26) / 365;
const payDays = PAYABLES_FY26 / payPerDay;
const payBasis: SimBasis = {
  ...basis,
  days: { ...empty, dpo: payDays },
  perDay: { ...empty, dpo: payPerDay },
  balances: { ...empty, dpo: PAYABLES_FY26 },
  terms: { certification: null, payment: null, vendor: BREAK === "4" ? payDays + 60 : null },
  workingCapital: null,
};
const payCash = [10, 30, 60].map((stretch) => {
  const sim = simulate(payBasis, { dpo: payDays + stretch });
  assert(sim.released <= 0, `payables +${stretch} days release no cash (${f2(sim.released)})`);
  return f2(Math.abs(sim.released));
});
row("Payable days FY26 (check only)", f1(payDays), "2,017.40 / ((526.51 + 1,973.33) / 365)");
row("Cash from stretching payables 10/30/60 days", payCash.join(" / "), "simulate: no vendor terms, ceiling = today");

console.log("ALL ASSERTS PASSED");
