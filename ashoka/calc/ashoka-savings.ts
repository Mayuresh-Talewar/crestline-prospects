/**
 * Ashoka Buildcon: savings scenarios on Crestline's own pure functions (AB-3).
 * BASIS: STANDALONE statements only (the EPC company). Rs crore throughout.
 * Sources: ashoka/data.md sections 1, 2, 2a, 2b, 3 (AR FY22-FY26 standalone pages cited there).
 * Scenarios, never promises. Rows overlap and are never added. Vendor credit (DPO) is never moved.
 * Run: npx tsx scripts/_tmp-ashoka-savings.ts
 */
import assert from "node:assert/strict";
import { leversFor, simulate, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

// ---------------- INPUTS (STANDALONE, Rs crore, data.md) ----------------
const YEARS = ["FY22", "FY23", "FY24", "FY25", "FY26"] as const;
const revenue = [4644.6, 6372.3, 7726.7, 7061.4, 5811.7]; // revenue from operations (NOT total income 5,952.2)
const trCur = [1048.3, 1085.8, 1098.5, 1272.0, 1656.4];
const trNon = [64.6, 157.8, 329.6, 496.3, 312.2];
const contractAssets = [813.4, 1351.1, 1699.1, 2268.0, 2646.1];
const inventory = [187.7, 298.4, 432.7, 348.7, 247.2];
const payables = [912.2, 1140.7, 1404.2, 1174.0, 1176.7];
const acceptances = [0, 0, 276.9, 294.0, 275.9]; // n/a before FY24 restatement
const contractLiab = [609.8, 1107.6, 1258.4, 1310.7, 1017.9];
const financeCost = [85.6, 141.0, 228.1, 296.4, 313.0];
const ocf = [161.1, 72.8, 410.1, -591.3, -291.6];
const PAT_FY26 = 320.4;
const PBT_BEFORE_EXC_FY26 = 225.3;
const EXCEPTIONAL_FY26 = 164.7;
const PBT_FY26 = PBT_BEFORE_EXC_FY26 + EXCEPTIONAL_FY26; // C: 390.0, after exceptional items
// Ageing 31 Mar 2026 / 2025 (AR26 Note 14, PDF p212): gross and past due over 6 months
const ageGross = { FY25: 1912.4, FY26: 2139.4 };
const ageOver6m = { FY25: 293.5 + 269.9 + 39.9 + 36.6, FY26: 212.6 + 346.0 + 89.7 + 53.9 };
// Working-capital loan (company, decks/calls): 31 Mar 2026 757, 30 Jun 2026 1,110
const WC_LOAN_MAR26 = 757;
const WC_LOAN_JUN26 = 1110;
// Rate: the AR (Note 27, PDF p222) gives the WC demand loan as "3 Month MCLR + Spread and 1 Year MCLR + Spread", NO number.
// The only numeric rate the company has stated for its standalone WC debt: Paresh Mehta, CFO, Q4 FY25 call (26 May 2025) p15:
// "9.5 is the cost of borrowing at the standard level for the working capital debt". Spoken, not audited.
const RATE_PCT = 9.5;
// Contract terms (AR26 p213): trade receivables "generally on terms of 30 to 90 days". Upper end used as the floor (conservative).
const PAYMENT_TERM_UPPER = 90;
const CFO_RANGE = [110, 120]; // CFO's words, Q4 FY26 call p6. Metric undefined. NEVER a target.

// ---------------- TREND ----------------
const DAYS = 365;
const r1 = (n: number) => Math.round(n * 10) / 10;
const fmt = (n: number) => r1(n).toLocaleString("en-IN", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const days = (bal: number, i: number) => (bal / revenue[i]) * DAYS;
const tr = YEARS.map((_, i) => trCur[i] + trNon[i]);
const nwc = YEARS.map((_, i) => tr[i] + contractAssets[i] + inventory[i] - payables[i] - acceptances[i] - contractLiab[i]);
const out: string[] = [];
const p = (s = "") => out.push(s);

p("ASHOKA BUILDCON LIMITED - savings scenarios (AB-3), STANDALONE basis, Rs crore");
p("Run on Crestline pure functions: leversFor, simulate, toTerms (lib/finance/cycle-simulation.ts), valueOfADay (lib/finance/working-capital-cycle.ts), priceLevers (lib/insights/levers.ts)");
p("Days = year-end balance / revenue from operations x 365. Every row uses ONE base.");
p();
p("TREND (STANDALONE)            " + YEARS.join("      "));
const row = (label: string, vals: number[]) => p(label.padEnd(30) + vals.map((v) => fmt(v).padStart(10)).join(""));
row("Revenue from operations", revenue);
row("Trade receivables (cur+non)", tr);
row("Contract assets", contractAssets);
row("Receivables days", tr.map(days));
row("Contract-asset days", contractAssets.map(days));
row("Receivables + CA days", tr.map((v, i) => days(v + contractAssets[i], i)));
row("Net operating WC", nwc);
row("Net operating WC days", nwc.map(days));
row("Operating cash flow", ocf);
row("Finance cost", financeCost);
p(`OCF FY25 + FY26 = ${fmt(ocf[3] + ocf[4])}`);
p(`Receivables + CA: FY24 ${fmt(tr[2] + contractAssets[2])} -> FY26 ${fmt(tr[4] + contractAssets[4])} (+${fmt(tr[4] + contractAssets[4] - tr[2] - contractAssets[2])})`);
p(`Receivables past due > 6 months: FY25 ${fmt(ageOver6m.FY25)} of ${fmt(ageGross.FY25)} = ${fmt((ageOver6m.FY25 / ageGross.FY25) * 100)}%; FY26 ${fmt(ageOver6m.FY26)} of ${fmt(ageGross.FY26)} = ${fmt((ageOver6m.FY26 / ageGross.FY26) * 100)}%`);
p(`WC loan: 31 Mar 2026 ${WC_LOAN_MAR26} -> 30 Jun 2026 ${WC_LOAN_JUN26} (+${WC_LOAN_JUN26 - WC_LOAN_MAR26}, +${fmt(((WC_LOAN_JUN26 - WC_LOAN_MAR26) / WC_LOAN_MAR26) * 100)}%)`);
p(`Finance cost FY22 -> FY26: ${financeCost[0]} -> ${financeCost[4]} (x${fmt(financeCost[4] / financeCost[0])})`);
p();

// ---------------- SIMULATOR BASIS, FY26 ----------------
const i26 = 4;
const perDay = revenue[i26] / DAYS;
const v = valueOfADay(perDay, RATE_PCT);
assert(v.cash !== null && v.carry !== null);
const rDays = days(tr[i26], i26);
const caDays = days(contractAssets[i26], i26);
const rcaDays = rDays + caDays;
const nwcDays = days(nwc[i26], i26);
const fy24RcaDays = days(tr[2] + contractAssets[2], 2);

const nul = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, number | null>;
const basis: SimBasis = {
  // DIO and DPO deliberately not simulated: stock is not the problem here, and vendor credit is never a saving.
  days: { ...nul, cad: caDays, dso: rDays },
  perDay: { ...nul, cad: perDay, dso: perDay },
  balances: { ...nul, cad: contractAssets[i26], dso: tr[i26] },
  terms: { certification: null, payment: PAYMENT_TERM_UPPER, vendor: null },
  workingCapital: nwc[i26],
  ratePct: RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};
const levers = leversFor(basis);
// Guard against the simulate() below-term bug: a lever whose floor sits ABOVE today would be clamped UP and consume cash.
for (const l of levers) assert(l.min <= l.now, `${l.key}: floor ${l.min} above today ${l.now}`);

// Interest only where the cash repays the WC loan actually drawn: capped at 1,110.
const interestOn = (cash: number) => (Math.min(cash, WC_LOAN_JUN26) * RATE_PCT) / 100;
const rows: { label: string; from: number; to: number; daysOut: number; cash: number }[] = [];
const run = (label: string, key: LeverKey, step: number) => {
  const s = simulate(basis, { [key]: basis.days[key]! - step });
  for (const l of s.levers) assert(l.cash >= 0, `negative release on ${l.key}`);
  assert(s.released >= 0, "negative release");
  const l = s.levers.find((x) => x.key === key)!;
  assert(Math.abs(-l.moved - step) < 1e-9, `${key} was clamped`);
  rows.push({ label, from: l.now, to: l.next, daysOut: -l.moved, cash: s.released });
};
run("Receivables, 10 days out", "dso", 10);
run("Receivables, 30 days out", "dso", 30);
run("Contract assets, 10 days out", "cad", 10);
run("Contract assets, 30 days out", "cad", 30);
// Net operating WC is not a simulator leg; one day of it is worth the same revenue day.
const byDay = (label: string, from: number, to: number) => {
  const d = from - to;
  assert(d >= 0, `${label}: negative release`);
  rows.push({ label, from, to, daysOut: d, cash: d * v.cash! });
};
byDay("Net operating WC, 10 days out", nwcDays, nwcDays - 10);
byDay("Net operating WC, 30 days out", nwcDays, nwcDays - 30);
byDay("Receivables + CA back to FY24's own level (standalone, FY24 and FY26)", rcaDays, fy24RcaDays);
// Contract terms: receivables to the upper end of the stated 30-90 day terms, via toTerms.
const terms = toTerms(basis);
assert(terms.dso === PAYMENT_TERM_UPPER && terms.cad === undefined);
{
  const s = simulate(basis, terms);
  assert(s.released >= 0 && s.levers.every((l) => l.cash >= 0), "negative release at terms");
  const l = s.levers.find((x) => x.key === "dso")!;
  rows.push({ label: "Receivables to 90 days (upper end of AR's 30-90 day terms)", from: l.now, to: l.next, daysOut: -l.moved, cash: s.released });
}
byDay("NWC to 120 (CFO's words, his metric undefined; NOT a target)", nwcDays, CFO_RANGE[1]);
byDay("NWC to 110 (CFO's words, his metric undefined; NOT a target)", nwcDays, CFO_RANGE[0]);

// priceLevers: rank the two 30-day steps the way the app's levers screen would (carry uncapped, then capped below).
const position = {
  actions: [
    { id: "certification", title: "Take 30 days out of contract assets", detail: "", days: 30, value: 30 * perDay, carrySaved: null, internallyControllable: true, owner: "", confidence: "medium", measuredAgainst: "FY26 standalone contract-asset days" },
    { id: "collection", title: "Take 30 days out of receivables", detail: "", days: 30, value: 30 * perDay, carrySaved: null, internallyControllable: false, owner: "", confidence: "medium", measuredAgainst: "FY26 standalone receivable days" },
  ],
} as unknown as CyclePosition;
const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
const priced = priceLevers({ position, ledger, vendors: [], retention: null, perDay, financingRatePct: RATE_PCT, owners: { certification: null, collection: null, material: null } });
for (const l of priced) assert(Math.abs(l.carry - (l.cash! * RATE_PCT) / 100) < 1e-9);

p("SIMULATOR BASIS FY26 (STANDALONE)");
p(`Per day = revenue from operations FY26 ${fmt(revenue[i26])} / 365 = ${fmt(perDay)} (valueOfADay.cash ${v.cash!.toFixed(3)})`);
p(`Today: receivables ${fmt(rDays)} d, contract assets ${fmt(caDays)} d, receivables + CA ${fmt(rcaDays)} d, net operating WC ${fmt(nwcDays)} d; FY24 receivables + CA ${fmt(fy24RcaDays)} d`);
p(`Levers from leversFor: ${levers.map((l) => `${l.key} now ${fmt(l.now)} floor ${fmt(l.min)}`).join("; ")}`);
p(`Rate: ${RATE_PCT}% = CFO's stated cost of standalone WC debt (Q4 FY25 call, 26 May 2025, p15). AR gives MCLR + spread, no number.`);
p(`Interest only up to the WC loan drawn, ${WC_LOAN_JUN26} (30 Jun 2026). PAT FY26 ${fmt(PAT_FY26)}; PBT FY26 ${fmt(PBT_FY26)} (= ${PBT_BEFORE_EXC_FY26} before exceptional + ${EXCEPTIONAL_FY26} exceptional gain)`);
p();
p("SCENARIOS (overlap; NEVER add rows; scenarios, not promises; vendors never paid later)");
p("Scenario".padEnd(72) + "From".padStart(8) + "To".padStart(8) + "Days".padStart(8) + "Cash".padStart(10) + "Int/yr".padStart(9) + "%PAT".padStart(7) + "%PBT".padStart(7) + "%PBTx".padStart(7));
for (const r of rows) {
  const i = interestOn(r.cash);
  p(r.label.padEnd(72) + fmt(r.from).padStart(8) + fmt(r.to).padStart(8) + fmt(r.daysOut).padStart(8) + fmt(r.cash).padStart(10) + fmt(i).padStart(9) + fmt((i / PAT_FY26) * 100).padStart(7) + fmt((i / PBT_FY26) * 100).padStart(7) + fmt((i / PBT_BEFORE_EXC_FY26) * 100).padStart(7));
  assert(r.cash >= 0 && i >= 0);
}
p("%PBTx = share of PBT before exceptional items (225.3). Interest capped where cash > 1,110.");
p(`Interest at 9.5% on the whole 1,110 WC loan = ${fmt(interestOn(1e9))} = ${fmt((interestOn(1e9) / financeCost[4]) * 100)}% of FY26 finance cost ${financeCost[4]}`);
p();
p("priceLevers ranking (30-day steps, carry uncapped): " + priced.map((l) => `${l.label} cash ${fmt(l.cash!)} carry ${fmt(l.carry)} ${l.ours ? "ours" : "client's act"}`).join(" | "));
p();
p("Self-check: no lever floor above today; no negative release on any row; no clamping on step rows; priceLevers carry = cash x rate. ALL ASSERTS PASSED.");

console.log(out.join("\n"));
