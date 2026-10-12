/**
 * Vascon Engineers: savings scenarios on the app's own pure functions.
 * Run from the app repo: npx tsx scripts/_tmp-vascon-savings.ts
 * Money in Rs Cr. Every input is a Vascon published figure (page in vascon/data.md).
 * Scenarios, never promises. Rows overlap and are never added.
 */
import assert from "node:assert/strict";
import { leversFor, simulate, toTerms, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CycleAction, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";
import { priceLevers } from "@/lib/insights/levers";

// ---- INPUTS ---------------------------------------------------------------
const REV = 948.53; // consolidated revenue from operations FY26, AR26 PDF p87
const EPC_SHARE = 96.6; // % of FY26 consolidated revenue, segment note AR26 PDF p124 (computed)
const P = REV / 365; // per day, Garvis ruling 2026-10-07
const RECV_CONS = 238.3; // consolidated trade receivables incl. retention, Mar-26, AR26 PDF p87
const RECV_SA = 238.1; // standalone net trade receivables, Mar-26, AR26 PDF p60
const RET = { fy22: 45.26, fy23: 61.67, fy26: 107.18 }; // standalone retention, data.md 3c
const REV_SA = { fy23: 767.47, fy24: 763.4, fy26: 948.53 }; // standalone revenue (FY22 standalone not in our data)
const UNB = { fy24: 300.64, fy26: 563.51 }; // standalone net unbilled (Note 7), data.md 3c
const TP_CONS = 640.33; // consolidated trade payables Mar-26
const PAY_TERM = 60; // "average credit period on EPC contracts is 60 days", AR26 PDF p60 Note 10
const PAT = 48.9; // consolidated PAT FY26, AR26 PDF p87
const PBT = 65.08; // consolidated PBT FY26 (6,507.98 lakh), AR26 PDF p87
const FIN_COST = 16.2; // consolidated finance cost FY26
const BORR = { mar25: 205.0, mar26: 298.6 }; // consolidated borrowings excl. leases
const CC_DRAWN = 76; // fund-based limits utilised, 30 Jun 2026, Q1D27 p6 (Mar-26 split not published)
const RATES = [9.65, 10.95]; // cash credit "ranging from 9.65% -10.95%", AR26 PDF p103 consolidated
const PAYABLES_OVER_1Y_LAKH = 597.24 + 41.0 + 13.36 + 4031.03 + 1676.83 + 8720.77; // standalone ageing
const PAYABLES_SA_LAKH = 64135; // standalone trade payables 641.35 Cr
const SFA = 104.33; // supplier finance outstanding Mar-26, standalone, AR26 PDF p66

// ---- one leg on its own basis ---------------------------------------------
const NO_TERMS = { certification: null, payment: null, vendor: null };
function leg(key: LeverKey, balance: number, ratePct: number, terms: SimBasis["terms"] = NO_TERMS): SimBasis {
  const nul = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, number | null>;
  return {
    days: { ...nul, [key]: balance / P },
    perDay: { ...nul, [key]: P },
    balances: { ...nul, [key]: balance },
    terms,
    workingCapital: null, // no whole-company WC claim (EPC + real estate)
    ratePct,
    desks: { dio: null, cad: null, dso: null, dpo: null },
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: { dio: "Real-estate inventory (projects under development) is outside every scenario." },
  };
}
const cr = (n: number) => n.toFixed(2);
const d1 = (n: number) => n.toFixed(1);
const close = (a: number, b: number) => Math.abs(a - b) < 1e-6;

// ---- ASSERTS ----------------------------------------------------------------
// terms null => no clamps: floors at 0, vendor leg held at today's figure
{
  const b = leg("dso", RECV_CONS, RATES[0]);
  assert.equal(leversFor(b)[0].min, 0, "dso floor must be 0 with no terms");
  assert.equal(leversFor(leg("cad", UNB.fy26, RATES[0]))[0].min, 0, "cad floor must be 0 with no terms");
  const v = leg("dpo", TP_CONS, RATES[0]);
  assert.equal(leversFor(v)[0].max, leversFor(v)[0].now, "vendor leg held when terms null");
  const r = simulate(v, { dpo: TP_CONS / P + 30 }).levers[0];
  assert.ok(r.moved === 0 && r.cash === 0, "vendor days never stretched with no terms");
  // with a stated term, the vendor leg stops AT the term, never past it
  const now = TP_CONS / P;
  const t = simulate(leg("dpo", TP_CONS, RATES[0], { ...NO_TERMS, vendor: now + 10 }), { dpo: now + 30 }).levers[0];
  assert.ok(close(t.next, now + 10), "vendor days never stretched past terms");
  // real-estate inventory is never a lever
  assert.ok(leversFor(leg("dso", RECV_CONS, RATES[0])).every((l) => l.key !== "dio"));
}

// ---- SCENARIOS ---------------------------------------------------------------
type Row = { group: string; label: string; days: number; cash: number };
const rows: Row[] = [];
function step(group: string, label: string, key: LeverKey, balance: number, toDays: number) {
  const b = leg(key, balance, RATES[0]);
  const out = simulate(b, { [key]: toDays });
  const l = out.levers[0];
  assert.ok(close(l.cash, -l.moved * P), `cash = step x per day (${label})`);
  assert.ok(close(out.carry, (l.cash * RATES[0]) / 100), `carry = cash x rate (${label})`);
  rows.push({ group, label, days: -l.moved, cash: l.cash });
}

const cadNow = UNB.fy26 / P;
const dsoNow = RECV_CONS / P;
const retNow = RET.fy26 / P;
step("Unbilled (contract assets, standalone)", "10-day step", "cad", UNB.fy26, cadNow - 10);
step("Unbilled (contract assets, standalone)", "30-day step", "cad", UNB.fy26, cadNow - 30);
const cadFy24Days = (UNB.fy24 / REV_SA.fy24) * 365;
step("Unbilled (contract assets, standalone)", `back to FY24 days of revenue (${d1(cadFy24Days)} d)`, "cad", UNB.fy26, cadFy24Days);
step("Unbilled (contract assets, standalone)", "back to the FY24 balance (Rs 300.64 Cr)", "cad", UNB.fy26, UNB.fy24 / P);
step("Receivables incl. retention (consolidated)", "10-day step", "dso", RECV_CONS, dsoNow - 10);
step("Receivables incl. retention (consolidated)", "30-day step", "dso", RECV_CONS, dsoNow - 30);
const retFy23Days = (RET.fy23 / REV_SA.fy23) * 365;
step("Retention (standalone)", "10-day step", "dso", RET.fy26, retNow - 10);
step("Retention (standalone)", `held to revenue growth since FY23 (${d1(retFy23Days)} d)`, "dso", RET.fy26, retFy23Days);

// Overall NWC: no published formula, so a day is valued with valueOfADay on the same per day
for (const [label, days] of [["10-day step", 10], ["30-day step", 30], ["CFO's description: 65 back to 45", 20], ["CFO's description: 70 back to 45", 25]] as const) {
  const v = valueOfADay(P, RATES[0]);
  assert.ok(v.cash !== null && close(v.cash, P));
  rows.push({ group: "Overall NWC cycle", label, days, cash: days * v.cash });
}

// Terms scenario: billed debtors ex-retention against the 60-day average credit period
const exRet = RECV_SA - RET.fy26;
const termsBasis = leg("dso", exRet, RATES[0], { ...NO_TERMS, payment: PAY_TERM });
const termsTarget = toTerms(termsBasis).dso!;
assert.ok(close(termsTarget, exRet / P), "toTerms keeps a leg already inside its term where it is");
// App finding (not fixed here): simulate() clamps to min = the term, so a leg already BELOW its
// term is pushed UP to it and reports negative cash. Shown, then the release is taken as 0.
const appClamp = simulate(termsBasis, { dso: termsTarget }).levers[0].cash;
assert.ok(appClamp < 0, "documents the clamp behaviour");
const termsMove = { cash: 0 };

// ---- PRINT ---------------------------------------------------------------------
const out: string[] = [];
const p = (s = "") => out.push(s);
p("VASCON ENGINEERS: savings scenarios on Crestline's pure functions (simulate, leversFor, toTerms, valueOfADay, priceLevers)");
p(`Per day = consolidated revenue from operations FY26 Rs ${cr(REV)} Cr / 365 = Rs ${P.toFixed(4)} Cr a day (EPC is ${EPC_SHARE}% of it).`);
p("Real-estate inventory (591 -> 737) is OUT of every scenario. Rows overlap; never add them. Scenarios, not promises.");
p(`Interest at Vascon's disclosed cash-credit range ${RATES[0]}%-${RATES[1]}% (AR26 PDF p103, consolidated), only where the cash repays debt.`);
p();
p(`Booklet interest only where cash <= Rs ${CC_DRAWN} Cr fund-based (cash-credit) limits drawn at 30 Jun 2026 (Q1D27 p6), the debt the disclosed rate applies to.`);
p(`Above that, interest is INDICATIVE (other debt carries 6.20%-13.50%) and is capped at FY26 finance cost Rs ${FIN_COST} Cr: nobody saves more interest than they paid.`);
p("group | scenario | days | cash Rs Cr | interest Rs Cr/yr @9.65 - @10.95 | % of PAT 48.90 | % of PBT 65.08 | booklet interest?");
for (const r of rows) {
  const lo = Math.min((r.cash * RATES[0]) / 100, FIN_COST);
  const hi = Math.min((r.cash * RATES[1]) / 100, FIN_COST);
  assert.ok(r.cash <= BORR.mar26, "cash within Mar-26 borrowings");
  const ok = r.cash <= CC_DRAWN;
  const capped = hi >= FIN_COST ? " (capped at finance cost)" : "";
  p(`${r.group} | ${r.label} | ${d1(r.days)} | ${cr(r.cash)} | ${cr(lo)} - ${cr(hi)}${capped} | ${d1((lo / PAT) * 100)}-${d1((hi / PAT) * 100)}% | ${d1((lo / PBT) * 100)}-${d1((hi / PBT) * 100)}% | ${ok ? "yes" : "NO, indicative"}`);
}
p();
p("Today's days (balance / per day):");
p(`  unbilled standalone ${cr(UNB.fy26)} / ${P.toFixed(4)} = ${d1(cadNow)} d; FY24 ${cr(UNB.fy24)} / (${REV_SA.fy24}/365) = ${d1(cadFy24Days)} d`);
p(`  receivables consolidated ${cr(RECV_CONS)} / ${P.toFixed(4)} = ${d1(dsoNow)} d`);
p(`  retention standalone ${cr(RET.fy26)} / ${P.toFixed(4)} = ${d1(retNow)} d; FY23 ${RET.fy23} / (${REV_SA.fy23}/365) = ${d1(retFy23Days)} d`);
p(`  retention growth FY22 -> FY26: ${RET.fy22} -> ${RET.fy26} = +${d1((RET.fy26 / RET.fy22 - 1) * 100)}%; FY23 -> FY26 +${d1((RET.fy26 / RET.fy23 - 1) * 100)}% vs standalone revenue +${d1((REV_SA.fy26 / REV_SA.fy23 - 1) * 100)}%`);
p(`  unbilled growth FY24 -> FY26: ${UNB.fy24} -> ${UNB.fy26} = +${d1((UNB.fy26 / UNB.fy24 - 1) * 100)}%`);
p();
p(`Terms scenario: billed debtors ex-retention (standalone ${cr(RECV_SA)} - ${cr(RET.fy26)} = ${cr(exRet)}) = ${d1(exRet / P)} d against the ${PAY_TERM}-day average credit period: toTerms releases Rs ${cr(termsMove.cash)} Cr (already inside). The excess over terms is retention and unbilled, not billed debtors.`);
p(`  note: simulate() on this leg clamps UP to the 60-day floor and reports Rs ${cr(appClamp)} Cr; toTerms() is the correct call and gives 0.`);
p();
p("Visibility only, no saving:");
p(`  payables over 1 year: ${cr(PAYABLES_OVER_1Y_LAKH / 100)} / ${cr(PAYABLES_SA_LAKH / 100)} = ${d1((PAYABLES_OVER_1Y_LAKH / PAYABLES_SA_LAKH) * 100)}% (standalone ageing, from date of transaction)`);
p(`  supplier finance outstanding Rs ${cr(SFA)} Cr = ${d1((SFA / (PAYABLES_SA_LAKH / 100)) * 100)}% of standalone trade payables. Paying vendors later is never a saving; vendor leg asserted held.`);
p();
p(`Cross-check only, our computation, NOT their rate: finance cost ${FIN_COST} / average borrowings ((${BORR.mar25}+${BORR.mar26})/2 = ${cr((BORR.mar25 + BORR.mar26) / 2)}) = ${((FIN_COST / ((BORR.mar25 + BORR.mar26) / 2)) * 100).toFixed(2)}%. Not used.`);
p("Interest is below EBITDA: it moves PBT and PAT, never EBITDA margin.");
p();

// Ranking with priceLevers: two evidenced levers, ranked by carry (overlapping options, not a sum)
const cadRow = rows.find((r) => r.label.startsWith("back to FY24 days"))!;
const retRow = rows.find((r) => r.label.startsWith("held to revenue"))!;
const action: CycleAction = {
  id: "certification",
  title: "Bring unbilled work back to FY24 days of revenue",
  detail: "",
  days: cadRow.days,
  value: cadRow.cash,
  carrySaved: null,
  internallyControllable: false,
  owner: "billing and certification desk",
  confidence: "medium",
  measuredAgainst: "Vascon's own FY24 unbilled days",
};
// ponytail: priceLevers reads only position.actions and ledger.stillAwaiting; the rest is not published by Vascon
const position = { actions: [action] } as unknown as CyclePosition;
const ledger = { stillAwaiting: 0 } as unknown as CashLedgerSummary;
const ranked = priceLevers({
  position, ledger, vendors: [], retention: retRow.cash, perDay: P, financingRatePct: RATES[0],
  owners: { certification: null, collection: null, material: null },
});
assert.equal(ranked.length, 2);
p(`priceLevers ranking @${RATES[0]}% (overlapping options, never added):`);
ranked.forEach((l, i) => p(`  ${i + 1}. ${l.label}: cash Rs ${cr(l.cash ?? 0)} Cr, carry Rs ${cr(l.carry)} Cr/yr, ${d1(l.days ?? 0)} d, ours=${l.ours}`));
p();
p("ALL ASSERTS PASSED: vendor days never stretched past terms; terms null => no clamps; cash = step x per day.");
console.log(out.join("\n"));
