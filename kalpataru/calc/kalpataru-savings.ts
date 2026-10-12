/**
 * KALPATARU PROJECTS INTERNATIONAL LIMITED (KPIL), ticket KP-3. Savings scenarios.
 *
 * Basis: STANDALONE, AR FY26 (filed NSE 22 Jun 2026). Rs crore throughout.
 * Runs the app's own pure functions: simulate, leversFor, toTerms (cycle-simulation),
 * valueOfADay (working-capital-cycle) and priceLevers (levers).
 *
 * Archive copy. It imports @/lib/..., so it only runs from inside the app repo:
 * copy to scripts/_tmp-kalpataru-savings.ts, run, then delete that copy by name.
 *
 *   npx tsx scripts/_tmp-kalpataru-savings.ts            clean run
 *   BREAK=<mode> npx tsx scripts/_tmp-kalpataru-savings.ts   breaks one assert on purpose
 *   modes: neg | rate | cap | lever | dpo | target | leg
 */
import { leversFor, simulate, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.env.BREAK ?? "";

// ---------------------------------------------------------------- inputs (all V unless marked C)
const REVENUE_FY26 = 23210.06; // P&L p.281, AR FY26
const PER_DAY = REVENUE_FY26 / 365; // Garvis ruling: per-day value
const WC_FACILITIES = 1411.51; // Note 18(ii) p.308, AR FY26: working-capital facilities from banks, the only debt the 4%..10% range applies to (cap on cash used for interest)
const RATES = BREAK === "rate" ? [4, 12] : [4, 10]; // Note 18.1 p.308: WC facilities "4% to 10%"
const RANGE = { low: 4, high: 10 };

// Receivables and contract assets, 31 Mar (BS p.280 / Note 11 p.303; FY23 AR23 p.246, p.265; FY24 AR25 p.234, p.255)
const Y = ["FY23", "FY24", "FY25", "FY26"] as const;
const rev = { FY23: 14336.82, FY24: 16759.66, FY25: 18887.91, FY26: 23210.06 };
const trnc = { FY23: 180.47, FY24: 131.05, FY25: 80.5, FY26: 66.27 };
const trc = { FY23: 4943.87, FY24: 5393.32, FY25: 7218.01, FY26: 7839.41 };
const canc = { FY23: 0, FY24: 23.19, FY25: 14.92, FY26: 15.38 }; // FY23 non-current line not shown
const cac = { FY23: 4894.81, FY24: 6059.36, FY25: 6185.9, FY26: 7068.23 };
const cfo = { FY23: 559.38, FY24: 713.61, FY25: 837.07, FY26: 764.46 }; // cash flow statements
const pat = { FY23: 531.95, FY24: 533.0, FY25: 647.95, FY26: 831.75 };
// core EBITDA = PBT before exceptional + finance cost + depreciation - other income (C)
const pbt0 = { FY23: 684.58, FY24: 773.79, FY25: 929.43, FY26: 1499.28 };
const fin = { FY23: 293.9, FY24: 337.03, FY25: 380.65, FY26: 368.03 };
const da = { FY23: 294.75, FY24: 367.88, FY25: 374.85, FY26: 394.83 };
const oth = { FY23: 111.69, FY24: 113.45, FY25: 97.94, FY26: 233.46 };
const msme = { FY23: 150.91, FY24: 222.45, FY25: 266.59, FY26: 432.39 }; // BS current MSME payables
const tp = { FY23: 4743.87, FY24: 5351.57, FY25: 6170.86, FY26: 6550.11 }; // total trade payables (C sum of BS lines)
const MSME_OVERDUE_FY26 = 432.39 - 391.37; // Note 44 p.337: MSME billed less not due (C)

// Gross trade receivables ageing by due date, undisputed + disputed (FY24, FY25: AR FY25 p.284 image-checked; FY26: AR FY26 p.334)
const ageing = {
  FY24: { u: [3002.59, 1571.93, 310.63, 287.55, 106.62, 190.41], d: [44.61, 3.55, 0, 1.78, 34.49, 147.06] },
  FY25: { u: [4867.65, 1131.57, 460.72, 362.87, 189.68, 282.08], d: [29.58, 4.12, 0.21, 2.11, 0.04, 124.28] },
  FY26: { u: [4886.99, 1716.74, 228.25, 639.48, 258.71, 292.58], d: [19.34, 0, 0, 1.27, 1.75, 117.33] },
};
// Company's own figures (IP Q4 FY26 slide 21, filed 14 May 2026; IP Q1 FY27 p.9, filed 11 Aug 2026)
const NWC = { FY22: 121, FY23: 96, FY24: 99, FY25: 94, FY26: 90, Q1FY26: 106, Q1FY27: 94 };
const FY26_TARGET = 100; // "under 100 days", Q4 FY26 call p.2, 15 May 2026

// ---------------------------------------------------------------- helpers
const r2 = (n: number) => Math.round(n * 100) / 100;
const r1 = (n: number) => Math.round(n * 10) / 10;
const fmt = (n: number) => r2(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fails: string[] = [];
const check = (name: string, ok: boolean, detail: string) => {
  if (!ok) fails.push(`${name}: ${detail}`);
};
const out: string[] = [];
const say = (s = "") => out.push(s);

const empty = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, number | null>;
const noItems = { dio: [], cad: [], dso: [], dpo: [] };
function basis(days: Partial<Record<LeverKey, number>>, terms: SimBasis["terms"] = { certification: null, payment: null, vendor: null }): SimBasis {
  const perDay = { ...empty };
  const balances = { ...empty };
  for (const k of Object.keys(days) as LeverKey[]) {
    perDay[k] = PER_DAY;
    balances[k] = (days[k] as number) * PER_DAY;
  }
  return {
    days: { ...empty, ...days },
    perDay,
    balances,
    terms,
    workingCapital: null,
    ratePct: RANGE.low,
    desks: { ...empty } as Record<LeverKey, string | null>,
    items: noItems,
    blocked: {},
  };
}

// Interest at the disclosed range, cash used for interest capped at working-capital facilities drawn.
function interest(cash: number) {
  const used = BREAK === "cap" ? cash : Math.min(cash, WC_FACILITIES);
  const [lo, hi] = RATES.map((rate) => (used * rate) / 100);
  check("A2 interest range", RATES[0] === RANGE.low && RATES[1] === RANGE.high, `rates ${RATES.join(",")} are not the disclosed 4% and 10%`);
  check("A2 interest range", lo >= (used * RANGE.low) / 100 - 1e-9 && hi <= (used * RANGE.high) / 100 + 1e-9, `interest ${lo}..${hi} outside 4%..10% of ${used}`);
  check("A3 interest cap", used <= WC_FACILITIES + 1e-9, `cash used for interest ${fmt(used)} > working-capital facilities ${fmt(WC_FACILITIES)}`);
  return { used, lo, hi };
}

// The O2C balance on one clock: receivables + contract assets over revenue per day (own formula, C).
const rca = (y: (typeof Y)[number]) => trnc[y] + trc[y] + cac[y] + canc[y];
const cadDays = (cac.FY26 + canc.FY26) / PER_DAY;
const dsoDays = (trnc.FY26 + trc.FY26) / PER_DAY;
const o2c = basis({ cad: cadDays, dso: dsoDays });

// ---------------------------------------------------------------- value of a day
const day = valueOfADay(PER_DAY, RANGE.low);
const dayHi = valueOfADay(PER_DAY, RANGE.high);
say("KPIL STANDALONE, KP-3 savings calculator. Rs crore. Basis AR FY26 (filed 22 Jun 2026).");
say(`Per-day value = revenue ${fmt(REVENUE_FY26)} / 365 = ${fmt(day.cash as number)} a day (valueOfADay)`);
say(`One day, interest a year at the 4% to 10% disclosed for WC facilities: ${fmt(day.carry as number)} to ${fmt(dayHi.carry as number)}`);
say(`Working-capital facilities drawn (cap on cash used for interest): ${fmt(WC_FACILITIES)}`);
say();

// ---------------------------------------------------------------- scenarios
interface Row { id: string; label: string; days: number; cash: number; lo: number; hi: number; used: number }
const rows: Row[] = [];
function stepScenario(id: string, label: string, stepDays: number) {
  const step = BREAK === "neg" && id === "a" ? -stepDays : stepDays;
  const viaCad = simulate(o2c, { cad: cadDays - step });
  const viaDso = simulate(o2c, { dso: dsoDays - (BREAK === "leg" ? step + 1 : step) });
  check("A7 leg independence", Math.abs(viaCad.released - viaDso.released) < 1e-6 && Math.abs(viaCad.released - step * (day.cash as number)) < 1e-6, `cad ${viaCad.released} dso ${viaDso.released} days*perDay ${step * (day.cash as number)}`);
  return finish(id, label, stepDays, viaCad.released, viaCad.levers.map((l) => l.cash));
}
function finish(id: string, label: string, stepDays: number, released: number, legCash: number[]) {
  check("A1 no negative release", released >= 0 && legCash.every((c) => c >= -1e-9), `${id} released ${released}`);
  const it = interest(released);
  // priceLevers on the same move: one evidenced action carrying the simulated cash.
  for (const rate of RATES) {
    const carry = (it.used * rate) / 100;
    const position = {
      actions: [
        {
          id: "certification",
          title: label,
          detail: "",
          days: stepDays,
          value: BREAK === "lever" ? released + 1 : released,
          carrySaved: carry,
          internallyControllable: false,
          owner: "",
          confidence: "medium",
          measuredAgainst: "standalone revenue per day, AR FY26",
        },
      ],
    } as unknown as CyclePosition;
    const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
    const levers = priceLevers({ position, ledger, vendors: [], retention: null, perDay: PER_DAY, financingRatePct: rate, owners: { certification: null, collection: null, material: null } });
    check("A4 priceLevers = simulate", levers.length === 1 && Math.abs((levers[0].cash ?? NaN) - released) < 1e-6 && Math.abs(levers[0].carry - carry) < 1e-6, `${id} lever cash ${levers[0]?.cash} vs simulate ${released}`);
  }
  const row = { id, label, days: stepDays, cash: released, lo: it.lo, hi: it.hi, used: it.used };
  rows.push(row);
  return row;
}

stepScenario("a", "A 10-day step out of receivables plus contract assets", 10);
stepScenario("b", "A 30-day step out of receivables plus contract assets", 30);
if (BREAK === "cap") stepScenario("x", "Break test: a 50-day step", 50);

// (c) Undo the Q1 FY27 slip, standalone NWC 94 back to 90 (company's own figure; definition not published).
const nwcQ1 = basis({ cad: NWC.Q1FY27 });
const c = simulate(nwcQ1, { cad: NWC.FY26 });
check("A7 leg independence", Math.abs(c.released - (NWC.Q1FY27 - NWC.FY26) * (day.cash as number)) < 1e-6, `c ${c.released}`);
finish("c", "Undo the Q1 FY27 slip: standalone NWC 94 back to 90 days", NWC.Q1FY27 - NWC.FY26, c.released, c.levers.map((l) => l.cash));

// (d) Their own FY26 target "under 100 days": met at 90. toTerms must leave it where it is.
const nwcFY26 = basis({ cad: NWC.FY26 }, { certification: BREAK === "target" ? 80 : FY26_TARGET, payment: null, vendor: null });
const dMove = toTerms(nwcFY26);
// Not simulate(): "under 100" is a ceiling, and simulate clamps a leg UP to a floor that sits
// above today's figure (cad min = terms.certification), which would read as cash consumed.
const dGap = Math.max(0, NWC.FY26 - (nwcFY26.terms.certification as number));
const d = { released: dGap * PER_DAY };
check("A6 target met", d.released === 0 && dMove.cad === NWC.FY26 && NWC.FY26 < FY26_TARGET, `toTerms moved NWC to ${dMove.cad}, gap ${dGap} days`);

// Contract terms: none published (paymentTermDays NOT FOUND), so toTerms has nothing to move.
const termsMove = toTerms(o2c);

// Rule 1: DPO is never higher-is-better. With no published vendor terms the leg is held where it is.
const dpoDays = tp.FY26 / PER_DAY;
const dpoBasis = basis({ dpo: dpoDays });
if (BREAK === "dpo") dpoBasis.terms.vendor = dpoDays + 30;
const dpoTry = simulate(dpoBasis, { dpo: dpoDays + 30 });
check("A5 DPO never releases", dpoTry.released === 0, `stretching payables released ${dpoTry.released}`);
const dpoSpec = leversFor(dpoBasis)[0];

// ---------------------------------------------------------------- print
say("SCENARIOS (rows overlap and are never added)");
say("id | scenario | days | cash released once | interest a year at 4% | at 10% | cash used for interest");
for (const r of rows) say(`${r.id} | ${r.label} | ${r.days} | ${fmt(r.cash)} | ${fmt(r.lo)} | ${fmt(r.hi)} | ${fmt(r.used)}`);
say(`d | Their own FY26 target "under 100 days" | MET at ${NWC.FY26} (toTerms leaves it at ${dMove.cad}; release ${fmt(d.released)}). Not a savings scenario.`);
say(`Contract terms scenario: none. toTerms on the O2C legs returns ${JSON.stringify(termsMove)} because no payment or certification term is published.`);
say(`Rule 1 check: payables leg held at ${r1(dpoDays)} days (min ${r1(dpoSpec.min)}, max ${r1(dpoSpec.max)}); asking for +30 days released ${fmt(dpoTry.released)}.`);
say();

say("CHART VALUES, today and with Crestline (scenario, not a forecast)");
say("P1 receivables + contract assets, days of revenue (own formula, revenue basis)");
for (const y of Y) say(`  ${y}: ${fmt(rca(y))} Cr = ${r1((rca(y) / rev[y]) * 365)} days`);
const today = rca("FY26");
const todayDays = (today / rev.FY26) * 365;
for (const r of rows.filter((x) => x.id === "a" || x.id === "b"))
  say(`  with Crestline (${r.id}): ${r1(todayDays - r.days)} days, ${fmt(today - r.cash)} Cr`);
say(`  split today: contract assets ${r1(cadDays)} days (${fmt(cac.FY26 + canc.FY26)}), receivables ${r1(dsoDays)} days (${fmt(trnc.FY26 + trc.FY26)})`);

say("P2 gross receivables overdue more than one year (ageing by due date)");
const over1 = (k: keyof typeof ageing) => [3, 4, 5].reduce((s, i) => s + ageing[k].u[i] + ageing[k].d[i], 0);
const tot = (k: keyof typeof ageing) => [...ageing[k].u, ...ageing[k].d].reduce((s, v) => s + v, 0);
for (const k of Object.keys(ageing) as (keyof typeof ageing)[]) say(`  ${k}: ${fmt(over1(k))} of ${fmt(tot(k))} = ${r1((over1(k) / tot(k)) * 100)}%`);
const a = rows.find((x) => x.id === "a") as Row;
say(`  with Crestline (a), if the 10-day step came from this bucket: ${fmt(over1("FY26") - a.cash)} of ${fmt(tot("FY26") - a.cash)} = ${(((over1("FY26") - a.cash) / (tot("FY26") - a.cash)) * 100).toFixed(1)}%`);

say("P3 operating cash flow against core EBITDA");
for (const y of Y) {
  const e = pbt0[y] + fin[y] + da[y] - oth[y];
  say(`  ${y}: CFO ${fmt(cfo[y])} | core EBITDA ${fmt(e)} | ratio ${r2(cfo[y] / e)} | PAT ${fmt(pat[y])}`);
}
const e26 = pbt0.FY26 + fin.FY26 + da.FY26 - oth.FY26;
say(`  FY26 vs FY25: CFO ${r1((cfo.FY26 / cfo.FY25 - 1) * 100)}%, core EBITDA ${r1((e26 / (pbt0.FY25 + fin.FY25 + da.FY25 - oth.FY25) - 1) * 100)}%, PAT ${r1((pat.FY26 / pat.FY25 - 1) * 100)}%`);
say(`  with Crestline (a), one-off, if released inside the year: CFO ${fmt(cfo.FY26 + a.cash)}, ratio ${r2((cfo.FY26 + a.cash) / e26)}`);

say("P4 standalone NWC days (company figure)");
say(`  year ends FY22..FY26: ${[NWC.FY22, NWC.FY23, NWC.FY24, NWC.FY25, NWC.FY26].join(", ")} | Q1 FY26 ${NWC.Q1FY26} | Q1 FY27 ${NWC.Q1FY27}`);
say(`  Q1 FY27 vs Q4 FY26: +${NWC.Q1FY27 - NWC.FY26} days; vs Q1 FY26: ${NWC.Q1FY27 - NWC.Q1FY26} days`);
const cr = rows.find((x) => x.id === "c") as Row;
say(`  with Crestline (c): ${NWC.FY26} days, ${fmt(cr.cash)} Cr, interest ${fmt(cr.lo)} to ${fmt(cr.hi)} a year`);

say("P5 payables to micro and small enterprises (current, BS)");
for (const y of Y) say(`  ${y}: ${fmt(msme[y])} = ${r1((msme[y] / tp[y]) * 100)}% of trade payables ${fmt(tp[y])}`);
say(`  FY26 vs FY25: +${r1((msme.FY26 / msme.FY25 - 1) * 100)}%`);
say(`  FY26 billed MSME past due date: ${fmt(MSME_OVERDUE_FY26)}. With Crestline: paid on its due date, ${fmt(MSME_OVERDUE_FY26)} of cash CONSUMED, never a saving.`);
say();

say(`ASSERTS: ${fails.length === 0 ? "all passed (A1 no negative release, A2 interest only at 4%..10%, A3 cap 1,411.51 (WC facilities), A4 priceLevers = simulate, A5 DPO never releases, A6 target met, A7 leg independence)" : "FAILED"}`);
console.log(out.join("\n"));
if (fails.length) {
  console.error(fails.join("\n"));
  process.exit(1);
}
