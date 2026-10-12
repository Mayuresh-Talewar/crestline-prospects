/**
 * THERMAX TH-3 savings calculator. Runs the app's own pure functions on
 * Thermax's published figures. Rs crore throughout. No DB, no I/O but stdout.
 *
 *   npx tsx scripts/_tmp-thermax-savings.ts            clean run
 *   npx tsx scripts/_tmp-thermax-savings.ts <break>    break=neg|rate|lcarry|count|lever|dpo|age, one assert must fail
 */
import assert from "node:assert/strict";
import { simulate, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition, CycleAction } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.argv[2] ?? "";

// ---- Inputs: Thermax, AR26 (NSE 03-Jul-2026), consolidated statements, Rs crore ----
const IN = {
  segRevenue: 4348.05, //        Industrial Infra segment revenue FY26, AR26 p310 to p311 (AR26 vintage)
  segRevenueRecast: 4088.34, //  same, Q1 FY27 recast (Q1R p9, NSE 30-Jul-2026): footnote only, never used
  segAssets: 2490.28, //         Industrial Infra segment assets FY26, AR26 p311
  // Consolidated gross trade receivable ageing, AR26 p256 (page image re-checked TH-3)
  age26: { unbilled: 46.56, notDue: 1010.21, lt6m: 931.09, m6to1y: 135.06, y1to2: 195.86, y2to3: 72.37, gt3y: 109.04, total: 2500.19 },
  age25: { unbilled: 21.64, notDue: 858.72, lt6m: 896.81, m6to1y: 202.51, y1to2: 162.25, y2to3: 56.38, gt3y: 116.93, total: 2315.24 },
  ocf26: 541.55, ocf25: 1079.79, //            AR26 p228 (image re-checked TH-3)
  pat26: 720.26, pat25: 626.70, //             AR26 p227
  ca26: 773.08, ca25: 640.56, //               contract assets net, AR26 p256 / p289 (image re-checked TH-3)
};
if (BREAK === "age") IN.age26.gt3y += 1; // a mistyped bucket must fail the ageing sum
const DAYS_IN_YEAR = 365;
const RATE_PCT = BREAK === "rate" ? 7.3 : 0; // no interest printed (Garvis TH-3); 0 makes carry 0

const perDay = IN.segRevenue / DAYS_IN_YEAR;
// The simulator needs an opening figure on a leg. Segment receivables and contract
// assets are NOT published, so the opening is the segment's whole published asset
// base in days of its revenue: headroom only, never printed as "today".
const headroomDays = IN.segAssets / perDay;

const f2 = (n: number) => n.toFixed(2);
const pct = (a: number, b: number) => ((a / b) * 100).toFixed(1) + "%";

function basisFor(leg: LeverKey): SimBasis {
  const nul = { dio: null, cad: null, dso: null, dpo: null };
  return {
    days: { ...nul, [leg]: headroomDays },
    perDay: { ...nul, [leg]: perDay },
    balances: { ...nul },
    // No contract window passed: simulate() would RAISE a leg to a window above today.
    terms: { certification: null, payment: null, vendor: null },
    workingCapital: null,
    ratePct: RATE_PCT,
    desks: { ...nul },
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: {},
  };
}

function run(leg: "dso" | "cad", step: number) {
  const basis = basisFor(leg);
  const spec = leversFor(basis)[0];
  const ask = BREAK === "neg" ? spec.now + step : spec.now - step; // neg: the wrong direction
  const sim = simulate(basis, { [leg]: ask });
  const out = sim.levers[0];

  const action: CycleAction = {
    id: leg === "dso" ? "collection" : "certification",
    title: `${step}-day step on ${out.label.toLowerCase()}`,
    detail: "",
    days: -out.moved,
    value: BREAK === "lever" ? out.cash * 1.001 : out.cash,
    carrySaved: null,
    internallyControllable: leg === "cad",
    owner: "",
    confidence: "medium",
    measuredAgainst: "a fixed step, no contract window published",
  };
  const levers = priceLevers({
    position: { actions: [action] } as unknown as CyclePosition,
    ledger: { stillAwaiting: BREAK === "count" ? 1 : 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary,
    vendors: [],
    retention: null,
    perDay,
    financingRatePct: BREAK === "lcarry" ? 7.3 : RATE_PCT,
    owners: { certification: null, collection: null, material: null },
  });

  // ---- asserts ----
  assert.ok(sim.released >= 0 && out.cash >= 0, `negative release: ${f2(sim.released)}`);
  assert.equal(sim.carry, 0, "interest must be 0 (none printed)");
  assert.ok(levers.every((l) => l.carry === 0), "lever carry must be 0 (none printed)");
  assert.equal(levers.length, 1, "exactly one priced lever per run");
  assert.ok(Math.abs((levers[0].cash ?? NaN) - sim.released) < 1e-9, "priceLevers cash must equal simulate cash");

  console.log(
    `  ${leg.toUpperCase()} leg "${out.label}": moved ${f2(out.moved)} days | cash released once Rs ${f2(out.cash)} cr | ` +
      `simulate.released ${f2(sim.released)} | priceLevers.cash ${f2(levers[0].cash ?? NaN)} | carry ${sim.carry}`,
  );
  return out.cash;
}

function payablesGuard() {
  // Guard only: no Thermax payable figure is used or printed. With no agreed vendor
  // ceiling the DPO leg holds; asking for +10 days must release nothing.
  const basis = basisFor("dpo");
  basis.days.dpo = 0;
  if (BREAK === "dpo") basis.terms.vendor = 10; // a ceiling above today lets payables "release" cash
  const sim = simulate(basis, { dpo: 10 });
  const out = sim.levers[0];
  assert.ok(out.cash <= 0 && sim.released <= 0, `payables released cash: ${f2(out.cash)}`);
  console.log(`  DPO guard: asked +10 days, moved ${f2(out.moved)}, cash ${f2(out.cash)} (payables never release cash)`);
}

// ---- Output ----
console.log(`THERMAX TH-3 savings calculator  (break mode: ${BREAK || "none"})`);
console.log("Basis: Industrial Infra SEGMENT, consolidated segment note, AR26 vintage. Rs crore.");
console.log(`Value of a day = ${IN.segRevenue} / ${DAYS_IN_YEAR} = Rs ${f2(perDay)} cr`);
console.log(`(Footnote only: Q1 FY27 recast revenue ${IN.segRevenueRecast} would give Rs ${f2(IN.segRevenueRecast / DAYS_IN_YEAR)} cr; not used, never mixed.)`);
console.log(`Simulator opening (headroom only, not printed): segment assets ${IN.segAssets} / ${f2(perDay)} = ${f2(headroomDays)} days`);
console.log(`Financing rate passed: ${RATE_PCT}% (no interest printed)`);
console.log("");

const results: Record<string, number> = {};
for (const step of [10, 30]) {
  console.log(`Scenario (${step === 10 ? "a" : "b"}): a ${step}-day step. Rows overlap; never added.`);
  results[`dso${step}`] = run("dso", step);
  results[`cad${step}`] = run("cad", step);
}
payablesGuard();
console.log("");

const over1y = (a: typeof IN.age26) => a.y1to2 + a.y2to3 + a.gt3y;
const pastDue = (a: typeof IN.age26) => a.lt6m + a.m6to1y + over1y(a);
const o26 = over1y(IN.age26);
console.log("Scenario (c), CONTEXT ONLY, NOT A SAVINGS CLAIM (bucket is consolidated, not segment-split):");
console.log(`  More than one year past due, consolidated FY26 = ${f2(o26)} cr = ${f2(o26 / perDay)} days of Industrial Infra revenue`);
console.log("");

console.log("Trend figures, consolidated, AR26 vintage (FY25 as restated in AR26):");
for (const [y, a] of [["FY25", IN.age25], ["FY26", IN.age26]] as const) {
  const sum = a.unbilled + a.notDue + pastDue(a);
  assert.ok(Math.abs(sum - a.total) < 0.005, `${y} ageing does not sum to ${a.total}`);
  console.log(
    `  ${y}: gross ${f2(a.total)} | past due ${f2(pastDue(a))} (${pct(pastDue(a), a.total)}) | over one year ${f2(over1y(a))} (${pct(over1y(a), a.total)}) | 6 months to 1 year ${f2(a.m6to1y)}`,
  );
}
console.log(`  Over one year past due change FY25 to FY26: ${f2(o26 - over1y(IN.age25))} cr (${pct(o26 - over1y(IN.age25), over1y(IN.age25))})`);
console.log(`  Operating cash flow: FY25 ${f2(IN.ocf25)} to FY26 ${f2(IN.ocf26)} (${pct(IN.ocf26 - IN.ocf25, IN.ocf25)}); OCF/PAT FY25 ${pct(IN.ocf25, IN.pat25)}, FY26 ${pct(IN.ocf26, IN.pat26)}`);
console.log(`  Contract assets (net): FY25 ${f2(IN.ca25)} to FY26 ${f2(IN.ca26)} (${pct(IN.ca26 - IN.ca25, IN.ca25)})`);
console.log("");
console.log("Summary (rows overlap, never added):");
console.log(`  10-day step: Rs ${f2(results.dso10)} cr released once | 30-day step: Rs ${f2(results.dso30)} cr released once | interest: none printed`);
console.log("ALL ASSERTS PASSED");
