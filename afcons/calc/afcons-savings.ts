/**
 * AF-5 · Afcons Infrastructure: savings scenarios on Crestline's own pure functions.
 *
 * Runs ONLY from inside the app repo (imports `@/lib/...`):
 *   npx tsx scripts/_tmp-afcons-savings.ts
 *
 * Every input below is from afcons/data.md (FY26, consolidated, ₹ Cr). Nothing else.
 * Rows OVERLAP and are never added. They are scenarios, not promises.
 * Units: ₹ Cr throughout (the app's maths is unit-free; only formatting assumes rupees).
 */
import assert from "node:assert/strict";
import { simulate, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import { valueOfADay, type CyclePosition, type CycleAction } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

// ── INPUTS (data.md section, document, page) ────────────────────────────────
const REVENUE = 11_948.38; // §2 revenue from operations FY26, AR26 p.327
const DAYS_IN_YEAR = 365;
const CONTRACT_ASSETS = 7_731.5; // §1/§4b net, AR26 p.356
const RECEIVABLES = 4_038.09; // §1 net, AR26 p.353-354
const RECEIVABLES_GROSS = 4_319.79; // §4a, AR26 p.354
const OVER_1Y_GROSS = 2_102.34; // §4a > 1 year past due, FY26
const OVER_1Y_SHARE_FY25 = 1_383.0 / 3_604.77; // §4a FY25: 38.4%
const INVENTORY = 1_016.57; // §3, AR26 p.357
const PAYABLES = 4_470.68; // §3/§4f, AR26 p.364
const NWC_DAYS = 143; // §1, AR26 p.18 (company figure; FY26 definition not published)
const NWC_FY25 = 113; // §4i
const CFO_120 = 120; // §11 #1, Q4T PDF p.19: "I do not want to commit"
const BLOCKED_UP = 1_000; // §11 #2, Q4T PDF p.26: "INR 1000 odd crores"
const PAT = 250.74; // §2, AR26 p.327
const PBT = 386.79; // §2
const FINANCE_COSTS = 673.61; // §2
const DEBT_FY25 = 2_235.72; // §3 borrowings incl. acceptances
const DEBT_FY26 = 3_538.27;
const CREDIT_PERIOD_MAX = 60; // §4c policy: "credit period ranging from 45 to 60 days", AR26 p.357
// Disclosed rate: cash credit / WCDL "@7.55% to 9.95% per annum", AR26 p.362-367 (§4h). A RANGE, so both ends.
const RATE_LO = 7.55;
const RATE_HI = 9.95;

// ── PER DAY: one rate for every leg (Afcons publishes no leg-level rates) ──
const { cash: perDay } = valueOfADay(REVENUE / DAYS_IN_YEAR, RATE_LO);
assert(perDay !== null);
const days = (balance: number) => balance / perDay;

const cr = (v: number) => v.toLocaleString("en-IN", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
const pct = (v: number) => `${v.toFixed(1)}%`;
const interest = (cash: number) => [(cash * RATE_LO) / 100, (cash * RATE_HI) / 100] as const;
const lines: string[] = [];
const out = (s = "") => lines.push(s);

// ── BASIS for the app's simulator ────────────────────────────────────────────
const basisWith = (terms: SimBasis["terms"]): SimBasis => ({
  days: { dio: days(INVENTORY), cad: days(CONTRACT_ASSETS), dso: days(RECEIVABLES), dpo: days(PAYABLES) },
  perDay: { dio: perDay, cad: perDay, dso: perDay, dpo: perDay },
  balances: { dio: INVENTORY, cad: CONTRACT_ASSETS, dso: RECEIVABLES, dpo: PAYABLES },
  terms,
  workingCapital: null,
  ratePct: RATE_LO,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});
// Afcons publishes no certification window and no spend-weighted vendor terms.
const basis = basisWith({ certification: null, payment: null, vendor: null });

out("AFCONS INFRASTRUCTURE · AF-5 savings scenarios (₹ Cr, FY26 consolidated)");
out("Run on Crestline's own pure functions: simulate / leversFor (lib/finance/cycle-simulation.ts),");
out("valueOfADay (lib/finance/working-capital-cycle.ts), priceLevers (lib/insights/levers.ts).");
out("Rows OVERLAP and are NEVER added. Scenarios, not promises. Interest saved only if the cash repays debt.");
out();
out(`Per day = revenue from operations ${cr(REVENUE)} / ${DAYS_IN_YEAR} = ${perDay.toFixed(3)} Cr a day`);
out("  (Afcons' FY26 NWC-days definition is not published, so one revenue rate is used for every leg.)");
out(`Interest: disclosed cash credit / WCDL range ${RATE_LO}% to ${RATE_HI}% a year (AR26 p.362-367). Both ends shown.`);
const avgDebt = (DEBT_FY25 + DEBT_FY26) / 2;
out(`Our computation, NOT their rate: finance costs ${cr(FINANCE_COSTS)} / average borrowings ((${cr(DEBT_FY25)} + ${cr(DEBT_FY26)}) / 2 = ${cr(avgDebt)}) = ${pct((FINANCE_COSTS / avgDebt) * 100)}`);
out("  (finance costs include interest on customer advances and other charges, so this is not a borrowing rate and is not used below)");
out();
out("Days implied by FY26 closing balances / per day (Computed; Afcons does not publish these):");
for (const l of leversFor(basis)) out(`  ${l.key.toUpperCase().padEnd(4)} ${l.label.padEnd(32)} ${cr(l.balance!)} / ${perDay.toFixed(3)} = ${l.now.toFixed(1)} days`);
out("  Receivables include GST; revenue does not. A receivable day therefore holds MORE than one day of revenue,");
out("  so every receivable cash row below is conservative.");
out();

// ── ASSERTS: the product's rules hold on this basis ─────────────────────────
// Terms null => no clamps: floor 0 on cad/dso, DPO ceiling = today.
for (const l of leversFor(basis)) {
  if (l.key === "dpo") assert.equal(l.max, l.now, "DPO with no vendor terms must hold at today");
  else assert.equal(l.min, 0, `${l.key}: terms null must leave no floor`);
}
// Paying vendors later is never a saving: any DPO request returns zero cash.
for (const ask of [200, 400]) {
  const r = simulate(basis, { dpo: ask });
  const dpo = r.levers.find((l) => l.key === "dpo")!;
  assert.equal(dpo.cash, 0, "DPO stretched with no terms released cash");
  assert.equal(dpo.next, dpo.now);
}
// Even with (hypothetical) vendor terms below today, DPO never moves past terms.
{
  const hyp = basisWith({ certification: null, payment: null, vendor: 90 });
  const dpo = simulate(hyp, { dpo: 300 }).levers.find((l) => l.key === "dpo")!;
  assert(dpo.next <= Math.max(90, dpo.now) + 1e-9 && dpo.cash === 0, "DPO stretched past terms");
}

// ── 1. 10-day and 30-day steps, through simulate() ───────────────────────────
out("1. STEPS (simulate(): cash = days moved x per day; interest = cash x rate)");
out("   Leg                              Step   Days now -> next     Cash released   Interest a year (7.55% .. 9.95%)");
type Row = { id: string; label: string; cash: number; days: number };
const rows: Row[] = [];
for (const key of ["cad", "dso"] as const) {
  for (const step of [10, 30]) {
    const now = basis.days[key]!;
    const r = simulate(basis, { [key]: now - step });
    const leg = r.levers.find((l) => l.key === key)!;
    assert(Math.abs(leg.cash - step * perDay) < 1e-6, "simulate cash != step x per day");
    assert.equal(r.released, leg.cash, "only one leg should move");
    const [lo, hi] = interest(leg.cash);
    out(`   ${leg.label.padEnd(32)} -${String(step).padStart(2)}d  ${leg.now.toFixed(1)} -> ${leg.next.toFixed(1)}`.padEnd(64) + `${cr(leg.cash).padStart(8)}        ${cr(lo)} .. ${cr(hi)}`);
    rows.push({ id: `${key}-${step}`, label: `${leg.label}, ${step} days`, cash: leg.cash, days: step });
  }
}
// The 30-day receivable step stays above the disclosed 60-day credit period, so the
// simulator's floor (if that period were the term) would not bind.
{
  const withTerm = basisWith({ certification: null, payment: CREDIT_PERIOD_MAX, vendor: null });
  const dso30 = simulate(withTerm, { dso: withTerm.days.dso! - 30 }).levers.find((l) => l.key === "dso")!;
  assert(dso30.next > CREDIT_PERIOD_MAX && Math.abs(dso30.moved + 30) < 1e-9, "30-day DSO step crosses the credit period");
  out(`   Check: receivables after the 30-day step = ${dso30.next.toFixed(1)} days, still above the disclosed 45-60 day credit period; the floor does not bind.`);
}
for (const step of [10, 30]) {
  const cash = step * perDay; // NWC is not a simulator leg: valueOfADay x days
  const [lo, hi] = interest(cash);
  out(`   ${"Overall net working capital".padEnd(32)} -${String(step).padStart(2)}d  ${NWC_DAYS} -> ${NWC_DAYS - step}`.padEnd(64) + `${cr(cash).padStart(8)}        ${cr(lo)} .. ${cr(hi)}`);
  rows.push({ id: `nwc-${step}`, label: `Net working capital, ${step} days`, cash, days: step });
}
out();

// ── 2. NWC to the CFO's 120 and to FY25's 113 ────────────────────────────────
out("2. NET WORKING CAPITAL DAYS (cash = days x per day)");
for (const [label, target] of [
  ["143 -> 120, the 120 days the CFO named on the Q4 call, without committing to it", CFO_120],
  ["143 -> 113, FY25's own figure (AR26 p.18)", NWC_FY25],
] as const) {
  const d = NWC_DAYS - target;
  const cash = d * perDay;
  const [lo, hi] = interest(cash);
  out(`   ${label}`);
  out(`     ${d} days x ${perDay.toFixed(3)} = ${cr(cash)} Cr; interest ${cr(lo)} .. ${cr(hi)} Cr a year`);
  rows.push({ id: `nwc-${target}`, label, cash, days: d });
}
out("   Note: 143 -> 113 is 30 days, the same figure as the 30-day NWC step above. One row, not two.");
out();

// ── 3. The ~₹1,000 Cr management said it would liquidate ─────────────────────
{
  const [lo, hi] = interest(BLOCKED_UP);
  out("3. THE ~1,000 CR 'BLOCKED-UP' ASSET (CFO, Q4 call: 'INR 1000 odd crores'; Q1 call: 'no material movement')");
  out(`   Cash ${cr(BLOCKED_UP)} Cr = ${days(BLOCKED_UP).toFixed(1)} days of revenue (1,000 / ${perDay.toFixed(3)}); interest ${cr(lo)} .. ${cr(hi)} Cr a year`);
  out("   Management describes it as receivable plus unbilled, so it overlaps rows 1 and 2.");
  rows.push({ id: "blocked", label: "The ~1,000 Cr blocked-up asset", cash: BLOCKED_UP, days: days(BLOCKED_UP) });
}
out();

// ── 4. Receivables over 1 year past due back to the FY25 share ──────────────
{
  // Collecting x from the >1y bucket shrinks the gross by x as well:
  // (over - x) / (gross - x) = s  =>  x = (over - s*gross) / (1 - s)
  const s = OVER_1Y_SHARE_FY25;
  const x = (OVER_1Y_GROSS - s * RECEIVABLES_GROSS) / (1 - s);
  assert(Math.abs((OVER_1Y_GROSS - x) / (RECEIVABLES_GROSS - x) - s) < 1e-9);
  const [lo, hi] = interest(x);
  out("4. RECEIVABLES MORE THAN 1 YEAR PAST DUE, BACK TO THE FY25 SHARE (gross basis throughout, AR26 p.354)");
  out(`   Today ${cr(OVER_1Y_GROSS)} of ${cr(RECEIVABLES_GROSS)} gross = ${pct((OVER_1Y_GROSS / RECEIVABLES_GROSS) * 100)}; FY25 ${pct(s * 100)}`);
  out(`   Collect x from that bucket: (${cr(OVER_1Y_GROSS)} - x) / (${cr(RECEIVABLES_GROSS)} - x) = ${(s * 100).toFixed(2)}%  =>  x = ${cr(x)} Cr`);
  out(`   = ${days(x).toFixed(1)} days of revenue; interest ${cr(lo)} .. ${cr(hi)} Cr a year. Assumes the other buckets stay where they are.`);
  out("   Part of this bucket is disputed (27.0% of gross is disputed) and part is provided for (ECL 281.70): not all of it is collectable cash.");
  rows.push({ id: "over1y", label: "Receivables >1 year back to the FY25 share", cash: x, days: days(x) });
}
out();

// ── 5. Ranked by the app's priceLevers (carry at the low end of the range) ──
{
  const action = (r: Row, id: CycleAction["id"]): CycleAction => ({
    id,
    title: r.label,
    detail: "",
    days: r.days,
    value: r.cash,
    carrySaved: null, // priceLevers then prices carry = value x financing rate
    internallyControllable: false, // as the app marks both: certifying and paying are the client's acts
    owner: "",
    confidence: "medium",
    measuredAgainst: "FY26 closing balance / revenue per day",
  });
  const pick = (id: string) => rows.find((r) => r.id === id)!;
  const position = {
    actions: [action(pick("cad-30"), "certification"), action(pick("dso-30"), "collection")],
  } as unknown as CyclePosition; // only `actions` is read by priceLevers
  const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
  for (const rate of [RATE_LO, RATE_HI]) {
    const ranked = priceLevers({
      position,
      ledger,
      vendors: [],
      retention: null, // FY25/FY26 retention: NOT FOUND (data.md §4c)
      perDay,
      financingRatePct: rate,
      owners: { certification: null, collection: null, material: null },
    });
    assert.equal(ranked.length, 2);
    assert(ranked.every((l) => !l.ours), "certification and collection are the client's acts");
    out(`5. priceLevers at ${rate}% (30-day step on each leg; equal days at one rate, so equal cash: a tie):`);
    for (const l of ranked) out(`   ${l.label.padEnd(44)} cash ${cr(l.cash!)}  carry ${cr(l.carry)} a year  client's act (ours: measure, prepare, submit)`);
  }
  out("   With one revenue rate for every leg, a day is worth the same on each; the ranking needs per-project SAP data.");
  out("   No early-payment lever (no vendor due dates in the filings) and no retention lever (retention FY26 NOT FOUND).");
}
out();

// ── 6. Margin lens (MD booklet) ──────────────────────────────────────────────
out("6. MARGIN LENS: interest saved as a share of FY26 PAT (250.74) and PBT (386.79)");
out("   Interest is a pre-tax saving below EBITDA: it does NOT move EBITDA or EBITDA margin. It adds to PBT in full;");
out("   PAT rises by less after tax. Shares of PAT below are pre-tax interest over PAT, so they overstate the PAT effect.");
out(`   ${"Row".padEnd(88)}${"Interest a year".padEnd(22)}${"% of PAT".padEnd(18)}% of PBT`);
for (const r of rows) {
  const [lo, hi] = interest(r.cash);
  out(`   ${r.label.padEnd(88)}${cr(lo)} .. ${cr(hi)}`.padEnd(110) + `${pct((lo / PAT) * 100)} .. ${pct((hi / PAT) * 100)}`.padEnd(18) + `${pct((lo / PBT) * 100)} .. ${pct((hi / PBT) * 100)}`);
}
out();
out("All asserts passed: DPO never stretched past terms; terms null => no clamps; simulate cash = step x per day;");
out("30-day receivable step stays above the 60-day credit period; >1y receivable formula re-checks to the FY25 share.");

console.log(lines.join("\n"));
