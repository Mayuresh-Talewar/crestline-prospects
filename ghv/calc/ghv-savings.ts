/**
 * GHV (India) Pvt Ltd - savings scenarios on Crestline's own pure functions.
 * Every input is a CRISIL figure (document date in the label). Rs crore throughout.
 * Scenarios, never promises. Rows overlap and are NEVER added.
 * Interest: no rate on GHV's working-capital borrowing is disclosed by CRISIL or the
 * company, so ratePct = 0 and no interest/carry figure is printed (cash only).
 * Run from the app repo: npx tsx scripts/_tmp-ghv-savings.ts
 */
import assert from "node:assert/strict";
import { leversFor, simulate, toTerms, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

// ---- inputs (CRISIL, CRISIL-adjusted) ----------------------------------------
const NO_RATE = 0; // no disclosed rate -> no interest figure
const OPINC_FY24_INDIA = 3361; // GHV (India) standalone, CRISIL 7-Jan-25 KFI
const OPINC_FY25_COMBINED = 2431; // combined (GHV India + GHV Infra, CRISIL 11-Feb-26 KFI)
const GCA_DAYS: [string, number, string][] = [
  ["FY20", 222, "GHV (India), CRISIL 15-Sep-23"],
  ["FY21", 193, "GHV (India), CRISIL 15-Sep-23"],
  ["FY22", 161, "GHV (India), CRISIL 15-Sep-23"],
  ["FY23", 125, "GHV (India), CRISIL 15-Sep-23"],
  ["FY24", 116, "GHV (India), CRISIL 11-Feb-26"],
  ["FY25", 287, "combined (GHV India + GHV Infra, CRISIL 11-Feb-26)"],
];
const RU_MAR25 = 1190; // receivables + unbilled, combined, CRISIL 11-Feb-26
const RU_SEP25 = 660; // receivables + unbilled, combined, CRISIL 11-Feb-26
const DEBT_SEP25 = 618; // combined, excl Rs 140 cr OCD, CRISIL 11-Feb-26
const DEBT_MAR26_EXPECTED = 400; // CRISIL's expectation, key rating sensitivity, 11-Feb-26
const FB_LIMIT_JAN26 = 97; // sanctioned fund-based limit, CRISIL 11-Feb-26
const UTIL: [string, string][] = [
  ["12 months to Jun-23", "66% (GHV India, CRISIL 15-Sep-23)"],
  ["12 months to Jan-24", "65% (GHV India, CRISIL 18-Mar-24)"],
  ["12 months from Oct-23", "78% (GHV India, CRISIL 7-Jan-25)"],
  ["12 months to Jan-26", "87%, peak 99% Q2 FY26, 90% Q3 FY26 (combined, CRISIL 11-Feb-26)"],
];

const cr = (n: number) => `Rs ${n.toLocaleString("en-IN", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} cr`;
const d1 = (n: number) => n.toFixed(1);

// One asset leg at a measured rate. No contract terms are published, so terms are null
// and the floor is 0 (leversFor); that also keeps simulate() clear of the below-term
// clamp that would turn a target under "now" into a negative release.
// ponytail: GCA is not a lever in the app; it rides the generic asset leg ("dso" key),
// which is the same days x perDay arithmetic. Labelled as such in the output.
function basisOf(days: number, perDay: number): SimBasis {
  const none = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, null>;
  return {
    days: { ...none, dso: days },
    perDay: { ...none, dso: perDay },
    balances: { ...none, dso: days * perDay },
    terms: { certification: null, payment: null, vendor: null },
    workingCapital: null,
    ratePct: NO_RATE,
    desks: none,
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: {},
  };
}

function run(label: string, basis: SimBasis, to: number) {
  const r = simulate(basis, { dso: to });
  for (const l of r.levers) assert.ok(l.cash >= 0, `negative release on ${label}`); // the below-term bug guard
  assert.equal(r.carry, 0, "no disclosed rate, so no carry may appear");
  return r;
}

const out: string[] = [];
const p = (s = "") => out.push(s);

// ---- 1. what one day is worth, two labelled bases ----------------------------
const dayIndia = valueOfADay(OPINC_FY24_INDIA / 365, NO_RATE);
const dayComb = valueOfADay(OPINC_FY25_COMBINED / 365, NO_RATE);
assert.ok(dayIndia.cash !== null && dayComb.cash !== null);
const perDayIndia = dayIndia.cash!;
const perDayComb = dayComb.cash!;
p("GHV (India) Pvt Ltd - savings scenarios (Crestline pure functions). Rs crore.");
p("Scenarios, not promises. Rows overlap and are never added. No interest figure: no disclosed rate.");
p();
p("1. ONE DAY OF OPERATING INCOME (valueOfADay, cash only)");
p(`   A. GHV (India) standalone FY24: ${OPINC_FY24_INDIA}/365 = Rs ${perDayIndia.toFixed(2)} cr per day (CRISIL 7-Jan-25)`);
p(`      at A: 10 days = ${cr(10 * perDayIndia)}, 30 days = ${cr(30 * perDayIndia)} (scale only: no FY24 balance to apply it to)`);
p(`   B. combined (GHV India + GHV Infra, CRISIL) FY25: ${OPINC_FY25_COMBINED}/365 = Rs ${perDayComb.toFixed(2)} cr per day (CRISIL 11-Feb-26)`);
p("   A and B are never mixed: B prices every combined balance below; A only states scale.");
p(`   Interest: none printed. The only rate CRISIL states is the 18% coupon on the Rs 140 cr OCD (Authum), treated as`);
p(`   quasi-equity and accrued (11-Feb-26); it is not the cost of the working-capital lines, so it is not used. carry = ${dayComb.carry}.`);
p();

// ---- 2. GCA trend ------------------------------------------------------------
p("2. GROSS CURRENT ASSET DAYS (CRISIL)");
for (const [fy, days, src] of GCA_DAYS) p(`   ${fy}: ${days} days - ${src}`);
const gca25 = 287;
const gcaBal = gca25 * perDayComb;
const ruDays = RU_MAR25 / perDayComb;
p(`   Implied GCA 31-Mar-25 = 287 x ${perDayComb.toFixed(2)} = ${cr(gcaBal)} (Computed, combined)`);
p(`   Receivables + unbilled 31-Mar-25 = ${cr(RU_MAR25)} = ${d1(ruDays)} days of FY25 combined income (Computed); ${Math.round((RU_MAR25 / gcaBal) * 100)}% of implied GCA`);
p(`   Receivables + unbilled 30-Sep-25 = ${cr(RU_SEP25)} (combined): ${cr(RU_MAR25 - RU_SEP25)} came out in six months. Not converted to days: no H1 FY26 income is published.`);
p();

// ---- 3. step scenarios on the two combined balances --------------------------
p("3. STEP SCENARIOS, combined basis B (simulate; each row stands alone)");
const ru = basisOf(ruDays, perDayComb);
const gca = basisOf(gca25, perDayComb);
assert.deepEqual(toTerms(ru), {}, "no published terms -> toTerms has nothing to move to");
assert.equal(leversFor(gca)[0].min, 0);
const rows: { label: string; days: number; cash: number }[] = [];
for (const [name, basis, now] of [
  ["Receivables + unbilled", ru, ruDays],
  ["GCA days (generic asset leg)", gca, gca25],
] as const) {
  for (const step of [10, 30]) {
    const r = run(`${name} -${step}`, basis, now - step);
    rows.push({ label: `${name}: ${d1(now)} -> ${d1(now - step)} days`, days: step, cash: r.released });
    p(`   ${name}: -${step} days (${d1(now)} -> ${d1(now - step)}) releases ${cr(r.released)}`);
  }
}
p();
p("4. GCA BACK TO AN EARLIER CRISIL LEVEL (combined balance, priced at basis B)");
p("   Target days are CRISIL's GHV (India) standalone readings; CRISIL itself sets 287 against 116 in one sentence (11-Feb-26).");
for (const [fy, target] of [["FY24", 116], ["FY22", 161]] as const) {
  const r = run(`GCA->${fy}`, gca, target);
  rows.push({ label: `GCA 287 -> ${target} days (${fy} level)`, days: 287 - target, cash: r.released });
  p(`   287 -> ${target} days (${fy} level): -${287 - target} days, releases ${cr(r.released)}`);
}
p();

// ---- 5. what those steps mean against debt and the bank line (visibility) ----
p("5. VISIBILITY: AGAINST THE DEBT CRISIL WATCHES AND THE FUND-BASED LINE");
const debtGap = DEBT_SEP25 - DEBT_MAR26_EXPECTED;
p(`   Debt 30-Sep-25 ${cr(DEBT_SEP25)} (combined, excl OCD) vs CRISIL's expected ~${cr(DEBT_MAR26_EXPECTED)} by 31-Mar-26: gap ${cr(debtGap)}`);
p(`   = ${d1(debtGap / perDayComb)} days of FY25 combined income. Only if released cash repays debt.`);
p("   Fund-based utilisation (CRISIL):");
for (const [w, v] of UTIL) p(`     ${w}: ${v}`);
p(`   Sanctioned fund-based limit Jan-26: ${cr(FB_LIMIT_JAN26)} (cut from 173 Oct-24, 166 Sep-25, at the group's request).`);
p(`   One day of B = ${Math.round((perDayComb / FB_LIMIT_JAN26) * 100)}% of that limit; a 10-day step = ${(rows[0].cash / FB_LIMIT_JAN26).toFixed(2)}x the whole limit.`);
p("   No drawn balance is computed: the 87% average ran over a limit that was cut twice (173 -> 166 -> 97).");
p();

// ---- 6. the same steps through priceLevers (no rate -> listed, not ranked) ----
p("6. priceLevers (financingRatePct 0): rows listed, NOT ranked - ranking needs a carry rate nobody disclosed");
const position = {
  actions: rows.map((r) => ({
    id: "collection" as const,
    title: r.label,
    detail: "",
    days: r.days,
    value: r.cash,
    carrySaved: null,
    internallyControllable: false, // the split ours/client is not published; Crestline measures it per bill
    owner: "",
    confidence: "medium" as const,
    measuredAgainst: "CRISIL-published balance and days",
  })),
} as unknown as CyclePosition; // ponytail: only .actions is read by priceLevers
const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary; // no ledger published
const levers = priceLevers({
  position,
  ledger,
  vendors: [],
  retention: null,
  perDay: perDayComb,
  financingRatePct: NO_RATE,
  owners: { certification: null, collection: null, material: null },
});
for (const l of levers) {
  assert.equal(l.carry, 0);
  assert.ok((l.cash ?? 0) >= 0);
  p(`   ${l.label}: ${cr(l.cash ?? 0)} cash, ${l.days} days`);
}
p();
p("Self-checks passed: no negative release, no carry without a disclosed rate, no row totals.");

// arithmetic sanity, independent of the app
assert.ok(Math.abs(rows[0].cash - 10 * perDayComb) < 1e-9);
assert.ok(Math.abs(ruDays * perDayComb - RU_MAR25) < 1e-9);

console.log(out.join("\n"));
