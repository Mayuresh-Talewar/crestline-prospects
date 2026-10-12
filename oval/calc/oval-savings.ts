/**
 * OVAL Projects Engineering Ltd: savings scenarios on the app's own pure functions.
 * Run from the app repo: npx tsx scripts/_tmp-oval-savings.ts
 * Inputs are Rs LAKH as printed in AR26 (standalone FY26 unless stated); every printed
 * figure is converted to Rs Cr here (1 Cr = 100 lakh). Scenarios, never promises; rows overlap.
 */
import { leversFor, simulate, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CycleAction, CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

// ---- INPUTS (Rs lakh) -------------------------------------------------------
const I = {
  revenue: 15314.19, // AR26 p151 revenue from operations FY26, standalone
  streams: { oilGasWorks: 7789.47, infraWorks: 4119.44, otherServices: 318.32, trading: 3086.96 }, // AR26 p170 Note 23
  receivables: 3507.15, // AR26 p168 Note 19
  unbilled: 1686.27, // AR26 p191-192 ageing, unbilled column
  noteDays: { fy25: { dso: 92, dio: 149, dpo: 148, cycle: 93 }, fy26: { dso: 80, dio: 122, dpo: 105, cycle: 97 } }, // AR26 p104 G.10 / Note 37
  e2: { days: 15, lakh: 630 }, // AR26 p92 Table E.2: +/-15 days collection = ~630 lakh
  pat: 1481.39, pbt: 2104.42, financeCost: 643.42, ebitdaAR26: 2492.1, // AR26 p151, p100
  limits: { total: 10472, cashCredit: 2650, bg: 7500 }, // AR26 p162 Note 9
  onDemandLoans: 2352.65, // AR26 p162 loans repayable on demand (bank cash credit drawn)
  bgOutstanding: 5984.7, // AR26 p174 Note 33 guarantees
  rate: { low: 9.75, high: 10.2 }, // RHP PDF p223: working-capital facilities, repo + spread
  orderBookCr: 796, // AR26 p87, total contract value 30 Apr 2026
  trend: {
    // FY24 = restated CONSOLIDATED (RHP); FY25, FY26 = standalone (AR26). Different bases.
    cfo: [-112.84, -1575.25, -2995.93],
    pat: [440.11, 934.02, 1481.39],
    inventory: [3988.07, 4368.9, 5906.74],
    receivables: [1781.91, 4306.55, 3507.15],
    vendorAdvances: [null, 1109.15, 2909.63],
    payablesCurrent: [2762.53, 3405.96, 1293.99],
    payablesLongTerm: [0, 0, 684.66],
    guarantees: [null, 4305.85, 5984.7],
    govShare: [77.73, 90.17, null], // % FY24, FY25 (RHP PDF p37); FY26 not disclosed
  },
};

const cr = (lakh: number) => lakh / 100;
const f = (lakh: number, dp = 2) => `Rs ${cr(lakh).toFixed(dp)} Cr`;
const pct = (a: number, b: number) => `${((a / b) * 100).toFixed(1)}%`;
const out: string[] = [];
const say = (s = "") => out.push(s);
function check(cond: boolean, msg: string) {
  if (!cond) throw new Error(`CHECK FAILED: ${msg}`);
}

// ---- Bases ---------------------------------------------------------------------
const s = I.streams;
check(Math.abs(s.oilGasWorks + s.infraWorks + s.otherServices + s.trading - I.revenue) < 0.05, "streams sum to revenue");
const works = s.oilGasWorks + s.infraWorks;
const perDay = { total: I.revenue / 365, works: works / 365 };
const e2PerDay = I.e2.lakh / I.e2.days;
check(Math.abs(perDay.total / e2PerDay - 1) < 0.01, "per day agrees with AR26 E.2 within 1%");
const billed = I.receivables - I.unbilled;

say("OVAL Projects Engineering Ltd: savings scenarios (OV-3), run on Crestline's pure functions");
say("Inputs Rs lakh from AR26 (FY26 standalone) unless noted; printed in Rs Cr (1 Cr = 100 lakh).");
say("Scenarios, not promises. Rows overlap and are never added. Paying vendors later is never a saving.");
say("");
say("== 1. Value of a day ==");
say(`Revenue from operations FY26 ${f(I.revenue)} INCLUDES trading ${f(s.trading)} (${pct(s.trading, I.revenue)}).`);
say(`Works revenue (oil & gas works + specialised infrastructure works) ${f(works)} (${pct(works, I.revenue)}); other services ${f(s.otherServices)} and trading excluded.`);
const vTotal = valueOfADay(perDay.total, 0);
const vWorks = valueOfADay(perDay.works, 0);
say(`One day, all revenue (incl. trading): ${f(vTotal.cash!, 3)}.  Cross-check AR26 E.2: 630 lakh / 15 days = ${f(e2PerDay, 3)} (agrees within 1%).`);
say(`One day, works-only basis (EPC scope):  ${f(vWorks.cash!, 3)}.`);
say("Receivables carry GST and revenue does not, so cash figures on revenue per day are conservative.");
say("");

// ---- Simulator basis: two O2C legs, closing balances over revenue per day ------
function basisFor(pd: number): SimBasis {
  return {
    days: { dio: null, cad: I.unbilled / pd, dso: billed / pd, dpo: null },
    perDay: { dio: null, cad: pd, dso: pd, dpo: null },
    balances: { dio: null, cad: I.unbilled, dso: billed, dpo: null },
    // No client payment term, certification window or vendor term is disclosed.
    terms: { certification: null, payment: null, vendor: null },
    workingCapital: null,
    ratePct: 0,
    desks: { dio: null, cad: null, dso: null, dpo: null },
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: {
      dio: "stock consumption rate not separable (inventory includes WIP)",
      dpo: "no vendor terms disclosed; paying later is never a saving",
    },
  };
}
// The simulate() clamp lifts a leg already below its term floor UP to the floor (negative
// release). Every target is therefore taken through toTerms() / min(now, target) and every
// result is asserted non-negative.
function run(basis: SimBasis, next: Partial<Record<"cad" | "dso", number>>) {
  for (const [k, v] of Object.entries(next)) {
    const now = basis.days[k as "cad" | "dso"]!;
    next[k as "cad" | "dso"] = Math.min(now, v!);
  }
  const r = simulate(basis, next);
  check(r.released >= 0, "no negative release");
  r.levers.forEach((l) => check(l.cash >= 0, `no negative release on ${l.key}`));
  return r;
}

const B = basisFor(perDay.total);
const Bw = basisFor(perDay.works);
const terms = toTerms(B);
check(Object.keys(terms).length === 0, "no disclosed terms, so toTerms moves nothing");

say("== 2. Opening position (31 Mar 2026, closing balances / revenue per day) ==");
say(`Receivables ${f(I.receivables)}: unbilled ${f(I.unbilled)} (${pct(I.unbilled, I.receivables)}), billed ${f(billed)}.`);
for (const l of leversFor(B)) say(`  ${l.label}: ${l.now.toFixed(1)} days on all revenue; ${(l.key === "cad" ? I.unbilled / perDay.works : billed / perDay.works).toFixed(1)} days on works-only.`);
say(`Contract-terms scenario (toTerms): NOT AVAILABLE. OVAL discloses no client payment term or certification window, so there is no agreed line to move to.`);
say(`Company's own day counts (AR26 Note 37, turnover-implied, different basis): FY25 receivable ${I.noteDays.fy25.dso} / inventory ${I.noteDays.fy25.dio} / payable ${I.noteDays.fy25.dpo} / net ${I.noteDays.fy25.cycle}; FY26 ${I.noteDays.fy26.dso} / ${I.noteDays.fy26.dio} / ${I.noteDays.fy26.dpo} / ${I.noteDays.fy26.cycle}.`);
check(I.noteDays.fy26.dio + I.noteDays.fy26.dso - I.noteDays.fy26.dpo === I.noteDays.fy26.cycle, "FY26 Note 37 cycle identity");
check(I.noteDays.fy25.dio + I.noteDays.fy25.dso - I.noteDays.fy25.dpo === I.noteDays.fy25.cycle, "FY25 Note 37 cycle identity");
say("");

// ---- Scenarios -----------------------------------------------------------------
interface Row { name: string; days: number; total: number; works: number }
const rows: Row[] = [];
const step = (name: string, key: "cad" | "dso", d: number) => {
  const a = run(B, { [key]: B.days[key]! - d });
  const b = run(Bw, { [key]: Bw.days[key]! - d });
  rows.push({ name, days: d, total: a.released, works: b.released });
};
step("Unbilled: bill 10 days sooner", "cad", 10);
step("Unbilled: bill 30 days sooner", "cad", 30);
step("Billed receivables: collect 10 days sooner", "dso", 10);
step("Billed receivables: collect 30 days sooner", "dso", 30);

const cycleBack = I.noteDays.fy26.cycle - I.noteDays.fy25.cycle; // 4 days
rows.push({ name: `Net cycle back to FY25's ${I.noteDays.fy25.cycle} days (from ${I.noteDays.fy26.cycle})`, days: cycleBack, total: cycleBack * vTotal.cash!, works: cycleBack * vWorks.cash! });

// Unbilled back to a smaller share of receivables, billed held: U' = s*B/(1-s)
for (const [label, share] of [["one third", 1 / 3], ["one quarter", 1 / 4]] as const) {
  const target = (share * billed) / (1 - share);
  const a = run(B, { cad: target / perDay.total });
  const b = run(Bw, { cad: target / perDay.works });
  check(Math.abs(a.released - (I.unbilled - target)) < 0.01, "share scenario reconciles");
  rows.push({ name: `Unbilled down to ${label} of receivables (illustrative; FY25 ageing showed none)`, days: B.days.cad! - target / perDay.total, total: a.released, works: b.released });
}

say("== 3. Cash released once (each row alone; rows overlap, NEVER add them) ==");
say("Scenario | days | cash, all-revenue basis | cash, works-only basis");
for (const r of rows) say(`${r.name} | ${r.days.toFixed(1)} | ${f(r.total)} | ${f(r.works)}`);
say("");

// ---- Interest (disclosed rate only) ---------------------------------------------
say("== 4. Interest, at the rate OVAL discloses ==");
say(`Rate: working-capital facilities ${I.rate.low}% to ${I.rate.high}% p.a. (RHP, 21 Aug 2025, Financial Indebtedness). AR26 lists other loans at 9.10% to 19.00%; not used.`);
say(`Interest is saved ONLY if the cash repays cash credit. Bank loans repayable on demand at 31 Mar 2026: ${f(I.onDemandLoans)}; saving is capped at that balance.`);
const interest = (lakh: number, ratePct: number) => (Math.min(lakh, I.onDemandLoans) * ratePct) / 100;
say("Scenario | interest a year at 9.75% | at 10.20% | as % of FY26 PAT | as % of FY26 PBT");
for (const r of rows) {
  const lo = interest(r.total, I.rate.low);
  const hi = interest(r.total, I.rate.high);
  say(`${r.name} | ${f(lo)} | ${f(hi)} | ${pct(lo, I.pat)} to ${pct(hi, I.pat)} | ${pct(lo, I.pbt)} to ${pct(hi, I.pbt)}`);
}
say(`One day, all revenue: ${f(valueOfADay(perDay.total, I.rate.low).carry!, 3)} to ${f(valueOfADay(perDay.total, I.rate.high).carry!, 3)} a year in interest.`);
say(`Margin lens: FY26 PAT ${f(I.pat)}, PBT ${f(I.pbt)}, finance cost ${f(I.financeCost)}, EBITDA (AR26 definition) ${f(I.ebitdaAR26)}.`);
say("");

// ---- Ranking through priceLevers (cash and carry at 9.75%, capped) ----------------
const action = (id: CycleAction["id"], title: string, d: number, value: number, ours: boolean): CycleAction => ({
  id, title, detail: "", days: d, value, carrySaved: interest(value, I.rate.low), internallyControllable: ours,
  owner: "", confidence: "medium", measuredAgainst: "a 10-day step (no disclosed term)",
});
const ranked = priceLevers({
  position: { actions: [action("certification", "Bill executed work 10 days sooner", 10, rows[0].total, true), action("collection", "Collect billed invoices 10 days sooner", 10, rows[2].total, false)] } as unknown as CyclePosition,
  ledger: { stillAwaiting: 0 } as unknown as CashLedgerSummary,
  vendors: [],
  retention: null, // "Other LD & Withheld" mixes LD with retention: not priced as retention
  perDay: perDay.total,
  financingRatePct: I.rate.low,
  owners: { certification: null, collection: null, material: null },
});
say("== 5. Ranked by priceLevers (10-day steps, all-revenue basis) ==");
ranked.forEach((l, i) => say(`${i + 1}. ${l.label}: cash ${f(l.cash ?? 0)}, interest ${f(l.carry)} a year, ${l.ours ? "ours to move" : "needs the client"}`));
say("Equal days are worth equal cash; the ranking keeps input order when carry is equal; it does not rank by who owns the step (billing is OVAL's own act, certification and payment are the client's).");
say("");

// ---- Limits: visibility only -----------------------------------------------------
say("== 6. Against the limits (visibility only; cash does not change a sanctioned limit) ==");
say(`Sanctioned limits ${f(I.limits.total)}: cash credit ${f(I.limits.cashCredit)}, bank guarantee ${f(I.limits.bg)} (AR26 p162).`);
say(`Cash credit drawn (loans repayable on demand) ${f(I.onDemandLoans)} = ${pct(I.onDemandLoans, I.limits.cashCredit)} of the cash-credit limit.`);
say(`Guarantees outstanding ${f(I.bgOutstanding)} = ${pct(I.bgOutstanding, I.limits.bg)} of the BG limit; headroom ${f(I.limits.bg - I.bgOutstanding)}.`);
say(`Order book ${I.orderBookCr} Cr = ${(I.orderBookCr / cr(I.revenue)).toFixed(1)}x FY26 revenue.`);
say("Scenario | cash as % of total limits | as % of cash-credit drawn");
for (const r of rows) say(`${r.name} | ${pct(r.total, I.limits.total)} | ${pct(Math.min(r.total, I.onDemandLoans), I.onDemandLoans)}`);
say("");

// ---- Trend for problems.md -----------------------------------------------------------
say("== 7. Trend FY24 / FY25 / FY26 (FY24 restated consolidated, RHP; FY25-26 standalone, AR26) ==");
const t = I.trend;
const line = (name: string, xs: (number | null)[]) => say(`${name}: ${xs.map((x) => (x === null ? "NA" : f(x))).join(" / ")}`);
line("Cash from operations", t.cfo);
line("PAT", t.pat);
say(`CFO FY25+FY26 together: ${f(t.cfo[1] + t.cfo[2])} against PAT ${f(t.pat[1] + t.pat[2])}.`);
line("Inventory (incl. WIP)", t.inventory);
line("Trade receivables", t.receivables);
line("Advances to vendors and others", t.vendorAdvances);
line("Trade payables, current", t.payablesCurrent);
line("Trade payables, long term", t.payablesLongTerm);
line("Guarantees outstanding", t.guarantees);
say(`Inventory FY25->FY26: +${pct(t.inventory[2] - t.inventory[1], t.inventory[1])}; vendor advances FY25->FY26: +${pct(t.vendorAdvances[2]! - t.vendorAdvances[1]!, t.vendorAdvances[1]!)}; revenue +${pct(I.revenue - 10228.9, 10228.9)}.`);
say(`Long-term share of trade payables FY26: ${pct(t.payablesLongTerm[2], t.payablesLongTerm[2] + t.payablesCurrent[2])}.`);
say(`Government-controlled share of revenue: FY24 ${t.govShare[0]}%, FY25 ${t.govShare[1]}%, FY26 not disclosed.`);
say("");
say("== 8. Other lakh -> Cr conversions quoted in problems.md / solutions.md ==");
const conv: [string, number][] = [
  ["Financing inflow FY26 (AR26 p154)", 4997.36],
  ["Receivables fall FY25->FY26", 4306.55 - 3507.15],
  ["WIP in inventory FY25 (AR26 p167)", 2699.87],
  ["WIP in inventory FY26", 3411.02],
  ["Other LD & withheld FY25 (AR26 p166)", 915.0],
  ["Other LD & withheld FY26", 1050.49],
];
for (const [k, v] of conv) say(`${k}: ${f(v)}`);
say("");
say("All checks passed: streams sum, per-day vs AR26 E.2, Note 37 cycle identities, no negative release, share scenario reconciles.");

console.log(out.join("\n"));
