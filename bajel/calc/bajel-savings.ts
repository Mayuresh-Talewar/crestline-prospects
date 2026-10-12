/**
 * Bajel Projects Limited: savings scenarios on the app's own pure functions (BJ-3).
 *
 * Basis: STANDALONE, AR26 vintage (Annual Report FY2025-26, filed on NSE 17 Jul 2026).
 * Every input is from bajel/data.md, image-checked. Money in Rs Cr.
 * Scenarios, not forecasts. No targets: the company states none (data.md s7).
 *
 * Run: npx tsx scripts/_tmp-bajel-savings.ts
 * Break one assert: BREAK=<release|rate|cap|levers|retention|payables|terms|bounds> npx tsx scripts/_tmp-bajel-savings.ts
 */
import { leversFor, simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.env.BREAK ?? "";

// ---- Inputs (data.md, AR26 unless stated) --------------------------------
const REVENUE_FY26 = 2791.58; // AR26 p257, Rs 279,157.52 lakh, standalone
const RECEIVABLE_DAYS_FY26 = 365 / 1.8; // AR26 p320 Note 45, turnover 1.80 (company basis, average receivables)
const PAYABLES_FY26 = 881.56; // AR26 p292
const PAYABLE_DAYS_FY26 = 365 / 3.23; // AR26 p320 Note 45, turnover 3.23
const CAP = 349.96; // AR26 p291 Note 18: total current borrowings Rs 34,996.11 lakh (WC facilities 31.00 + vendor bill discounting 318.96), both "6.5%-10% p.a."; mobilisation advance interest is NOT in it
const RATES = BREAK === "rate" ? [6.5, 8, 10] : [6.5, 10]; // the two disclosed ends, AR26 p291
const OCF_FY26 = 21.09; // AR26 p258
const NOT_DUE_FY26 = 1530.12; // AR26 p280, gross, AR26 vintage
const BORROWINGS_FY26 = 349.96; // AR26 p256, p291

const PER_DAY = REVENUE_FY26 / 365; // value of one day, the brief's rule
const PAYABLE_PER_DAY = PAYABLES_FY26 / PAYABLE_DAYS_FY26; // test rate only, to prove the payables leg cannot release cash; never printed as a finding

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: RECEIVABLE_DAYS_FY26, dpo: PAYABLE_DAYS_FY26 },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: PAYABLE_PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: PAYABLES_FY26 },
  // No terms: none is disclosed as a single line, and a vendor term would RAISE the payables ceiling.
  terms: { certification: BREAK === "terms" ? 0 : null, payment: null, vendor: BREAK === "payables" ? PAYABLE_DAYS_FY26 + 30 : null },
  workingCapital: null,
  ratePct: 6.5,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const emptyLedger: CashLedgerSummary = {
  months: [], totalIn: 0, totalOut: 0, netTotal: 0, peakFundingNeed: 0, peakFundingLabel: "",
  closingCumulative: 0, totalRaised: 0, totalSettled: 0, stillOnCredit: 0, totalCertified: 0,
  totalCollected: 0, stillAwaiting: 0, bestMonth: { label: "", surplus: 0 }, worstMonth: { label: "", surplus: 0 },
  monthsInSurplus: 0, monthsInDeficit: 0, firstHalfNet: 0, secondHalfNet: 0, halfOverHalfPct: null,
};

const failures: string[] = [];
const check = (ok: boolean, msg: string) => {
  if (!ok) failures.push(msg);
};
const cr = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const d1 = (n: number) => n.toFixed(1);

console.log("== Bajel Projects, standalone, AR26 vintage. Scenarios, not forecasts ==");
console.log(`Revenue FY26 (Rs Cr): ${cr(REVENUE_FY26)}`);
console.log(`Value of one day = revenue / 365 (Rs Cr): ${cr(PER_DAY)}`);
console.log(`Receivable days today, company basis 365 / 1.80: ${d1(RECEIVABLE_DAYS_FY26)}`);
console.log(`Interest cap, borrowings at 6.5%-10% (Rs Cr): ${cr(CAP)}`);
console.log(`Rates used: ${RATES.join("% and ")}%`);
const legs = leversFor(basis);
for (const l of legs) console.log(`Leg ${l.key}: now ${d1(l.now)}, bounds ${d1(l.min)} to ${d1(l.max)}, target ${l.target ?? "none"}`);

check(basis.terms.certification === null && basis.terms.payment === null && basis.terms.vendor === null, "TERMS: a term was passed (none exists, and a vendor term raises the payables ceiling)");

const STEPS = [
  { name: "a", label: "10-day step", days: BREAK === "release" ? -10 : 10 },
  { name: "b", label: "30-day step", days: 30 },
];

for (const step of STEPS) {
  const target = RECEIVABLE_DAYS_FY26 - step.days;
  const sim = simulate(basis, { dso: target });
  const dso = sim.levers.find((l) => l.key === "dso")!;
  console.log(`\n== Scenario ${step.name}: ${step.label} out of the receivable wait ==`);
  console.log(`Receivable days: ${d1(dso.now)} to ${d1(dso.next)} (moved ${d1(dso.moved)})`);
  console.log(`Cash released once (Rs Cr): ${cr(sim.released)}`);

  check(sim.released >= 0, `RELEASE: scenario ${step.name} released ${cr(sim.released)} (negative)`);
  for (const l of sim.levers) if (l.key !== "dpo") check(l.cash >= 0, `RELEASE: leg ${l.key} negative in ${step.name}`);
  check(BREAK === "bounds" ? false : Math.abs(dso.moved + step.days) < 1e-9, `BOUNDS: scenario ${step.name} was clamped (asked ${step.days}, moved ${dso.moved})`);

  // Interest: only on cash that can repay the borrowings the range applies to.
  const base = BREAK === "cap" ? sim.released + CAP : Math.min(sim.released, CAP);
  check(base <= CAP + 1e-9, `CAP: interest counted on ${cr(base)}, above the ${cr(CAP)} cap`);
  check(RATES.length === 2 && RATES[0] === 6.5 && RATES[1] === 10, `RATE: rates ${RATES.join(",")} are not exactly the two disclosed ends`);
  console.log(`Cash counted for interest, capped at ${cr(CAP)} (Rs Cr): ${cr(base)}`);
  for (const r of RATES) console.log(`Interest saved a year at ${r}% (Rs Cr): ${cr((base * r) / 100)}`);

  // priceLevers over the same move must agree with simulate to the rupee.
  const position = {
    actions: [
      {
        id: "collection" as const,
        title: `Take ${step.days} days out of the receivable wait`,
        detail: "",
        days: step.days,
        value: BREAK === "levers" ? step.days * PER_DAY + 0.01 : step.days * PER_DAY,
        carrySaved: (base * 6.5) / 100,
        internallyControllable: false,
        owner: "",
        confidence: "medium" as const,
        measuredAgainst: "revenue per day, AR26",
      },
    ],
  } as unknown as CyclePosition;
  const levers = priceLevers({
    position, ledger: emptyLedger, vendors: [], retention: BREAK === "retention" ? 1 : null, perDay: PER_DAY, financingRatePct: 6.5,
    owners: { certification: null, collection: null, material: null },
  });
  const leverCash = levers[0]?.cash ?? NaN;
  check(Math.abs(leverCash - sim.released) < 1e-6, `LEVERS: priceLevers cash ${leverCash} != simulate cash ${sim.released}`);
  check(levers.length === 1, `LEVERS: expected 1 lever, got ${levers.length} (retention is NA, never invented)`);
  console.log(`priceLevers cash (Rs Cr): ${cr(leverCash)} | simulate cash: ${cr(sim.released)}`);

  // Chart marks (rule 13), each derived only from the release above.
  console.log(`[chart] P1 receivable days with the step: ${d1(dso.next)}`);
  console.log(`[chart] P2 slice of the not-due bar (gross ${cr(NOT_DUE_FY26)}), drawn at its own length: ${cr(sim.released)}`);
  console.log(`[chart] P3 FY26 operating cash flow ${cr(OCF_FY26)} + release, had the step held at 31 Mar 2026: ${cr(OCF_FY26 + sim.released)}`);
  console.log(`[chart] P4 borrowings at 6.5%-10% ${cr(BORROWINGS_FY26)} less capped release, if the cash repaid them: ${cr(BORROWINGS_FY26 - base)}`);
}

// Payables never release cash: ask to stretch AND to shorten.
console.log("\n== Payables leg (proof only, never a saving) ==");
for (const ask of [10, 30, -10]) {
  const sim = simulate(basis, { dpo: PAYABLE_DAYS_FY26 + ask });
  const dpo = sim.levers.find((l) => l.key === "dpo")!;
  console.log(`Ask ${ask > 0 ? "+" : ""}${ask} days of vendor credit: moved ${d1(dpo.moved)}, cash ${cr(dpo.cash)}`);
  check(dpo.cash <= 1e-9, `PAYABLES: asking ${ask} days released ${cr(dpo.cash)}`);
}

console.log("");
if (failures.length) {
  for (const f of failures) console.log(`ASSERT FAILED: ${f}`);
  process.exit(1);
}
console.log("All asserts passed: no negative release; interest only at 6.5% and 10% and within the cap; priceLevers cash = simulate cash; payables never release cash; no terms passed; no clamp on either step.");
