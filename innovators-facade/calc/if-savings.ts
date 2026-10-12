/**
 * INNOVATORS FACADE SYSTEMS IF-S23 savings calculator. Runs the app's own pure
 * functions on the audited STANDALONE accounts, AR 2025-26. Rs lakh in, Rs crore out.
 *
 *   npx tsx scripts/_tmp-if-savings.ts            clean run
 *   npx tsx scripts/_tmp-if-savings.ts <break>    break = neg | rate | dpo | xcheck | basis | days, one assert must fail
 */
import assert from "node:assert/strict";
import { simulate, leversFor, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition, CycleAction } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.argv[2] ?? "";

// ---- Inputs, Rs lakh, standalone, closing balances, all read from page images ----
// FY23: AR24 pp64,65,66,80 | FY24: AR25 pp79,80,81,95 | FY25 and FY26: AR26 pp78,79,80,94
const Y = {
  FY23: { rev: 18097.69, rec: 3450.82, unb: 1837.8, inv: 8289.9, pay: 315.13 + 5602.23, cons: 9700.06, pur: 13304.27, cash: 1581.57, cfo: 1776.11 },
  FY24: { rev: 21548.09, rec: 3688.33, unb: 1760.68, inv: 6663.4, pay: 207.85 + 4146.0, cons: 10594.5, pur: 9059.56, cash: 2390.98, cfo: 3545.61 },
  FY25: { rev: 22137.35, rec: 5472.05, unb: 2286.32, inv: 5411.24, pay: 309.87 + 2597.84, cons: 10808.58, pur: 9556.42, cash: 3105.71, cfo: 473.85 },
  FY26: { rev: 22751.51, rec: 4191.37, unb: 4239.13, inv: 8796.64, pay: 134.04 + 6241.86, cons: 11844.29, pur: 15229.69, cash: 4054.48, cfo: 4181.55 },
} as const;
type Yr = keyof typeof Y;
if (BREAK === "days") (Y.FY26 as { rec: number }).rec += 40; // a mistyped balance must fail the printed-days check

const DAYS_IN_YEAR = 365;
const RATE_PCT = BREAK === "rate" ? 7.3 : 0; // no single borrowing rate is disclosed: interest is 0
const CR = 100; // lakh per crore
const f1 = (n: number) => n.toFixed(1);
const f2 = (n: number) => n.toFixed(2);
const cr = (lakh: number) => f2(lakh / CR);

// ---- Day measures: closing balance / base x 365, each on its own base ----
const days = (y: Yr) => {
  const d = Y[y];
  const dso = (d.rec / d.rev) * DAYS_IN_YEAR;
  const cad = (d.unb / d.rev) * DAYS_IN_YEAR;
  const dio = (d.inv / d.cons) * DAYS_IN_YEAR;
  const dpo = (d.pay / d.pur) * DAYS_IN_YEAR;
  return { dso, cad, dio, dpo, ccc: dio + cad + dso - dpo, opwc: d.inv + d.rec + d.unb - d.pay };
};

const revPerDay = Y.FY26.rev / DAYS_IN_YEAR; //   revenue per day, lakh
const matPerDay = Y.FY26.cons / DAYS_IN_YEAR; //  materials consumed per day, lakh
const purPerDay = Y.FY26.pur / DAYS_IN_YEAR; //   purchases per day, lakh (payables base, guard only)
const D = days("FY26");

function basis(): SimBasis {
  const rev = BREAK === "xcheck" ? revPerDay * 1.01 : revPerDay;
  return {
    days: { dio: D.dio, cad: D.cad, dso: D.dso, dpo: D.dpo },
    // BASIS: stock at MATERIALS cost per day, unbilled and receivables at revenue per day. Never crossed.
    perDay: { dio: BREAK === "basis" ? revPerDay : matPerDay, cad: rev, dso: rev, dpo: purPerDay },
    balances: { dio: Y.FY26.inv, cad: Y.FY26.unb, dso: Y.FY26.rec, dpo: Y.FY26.pay },
    // No certification window, payment term or vendor term is published: pass none.
    terms: { certification: null, payment: null, vendor: BREAK === "dpo" ? 300 : null },
    workingCapital: null,
    ratePct: RATE_PCT,
    desks: { dio: null, cad: null, dso: null, dpo: null },
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: {},
  };
}

const LEG = { cad: "Unbilled work (certification wait)", dso: "Receivables (collection)", dio: "Project materials (stock)" } as const;
const BASE_PER_DAY: Record<"cad" | "dso" | "dio", number> = { cad: revPerDay, dso: revPerDay, dio: matPerDay };
const BASE_BALANCE: Record<"cad" | "dso" | "dio", number> = { cad: Y.FY26.unb, dso: Y.FY26.rec, dio: Y.FY26.inv };

const single: Record<string, number> = {};
const out: string[] = [];
const log = (s: string) => { out.push(s); console.log(s); };

log(`INNOVATORS FACADE SYSTEMS IF-S23 savings calculator  (break mode: ${BREAK || "none"})`);
log("Basis: STANDALONE, AR 2025-26 (FY ending 31 Mar 2026), closing balances, Rs lakh converted to Rs crore. Scenario, not a forecast.");
log(`Value of a day: revenue ${Y.FY26.rev} / ${DAYS_IN_YEAR} = Rs ${f2(revPerDay)} lakh = Rs ${cr(revPerDay)} cr (valueOfADay cash: ${f2(valueOfADay(revPerDay, 0).cash ?? NaN)} lakh, carry ${valueOfADay(revPerDay, 0).carry})`);
log(`Materials consumed per day: ${Y.FY26.cons} / ${DAYS_IN_YEAR} = Rs ${f2(matPerDay)} lakh = Rs ${cr(matPerDay)} cr`);
log("");
log("---- Day measures, every year (closing balance / base x 365) ----");
for (const y of Object.keys(Y) as Yr[]) {
  const d = days(y);
  log(`${y}: DSO ${f1(d.dso)} | contract-asset days ${f1(d.cad)} | DIO ${f1(d.dio)} | DPO ${f1(d.dpo)} | CCC ${f1(d.ccc)} | operating WC Rs ${f2(d.opwc)} lakh = ${cr(d.opwc)} cr | cash and bank ${cr(Y[y].cash)} cr | cash from operations ${cr(Y[y].cfo)} cr`);
}
// printed figures, from the page images and data.md
const PRINTED: Record<Yr, [number, number, number, number, number]> = {
  FY23: [69.6, 37.1, 311.9, 162.3, 256.3],
  FY24: [62.5, 29.8, 229.6, 175.4, 146.5],
  FY25: [90.2, 37.7, 182.7, 111.1, 199.6],
  FY26: [67.2, 68.0, 271.1, 152.8, 253.5],
};
for (const y of Object.keys(Y) as Yr[]) {
  const d = days(y);
  const got = [d.dso, d.cad, d.dio, d.dpo, d.ccc].map((v) => Number(f1(v)));
  assert.deepEqual(got, PRINTED[y], `${y} days differ from the printed figures: ${got} vs ${PRINTED[y]}`);
}
assert.ok(Math.abs(D.dio + D.cad + D.dso - D.dpo - D.ccc) < 1e-9, "CCC identity DIO + CAD + DSO - DPO");
log("Printed day figures reproduce to one decimal in all four years.");
log("");

// ---- Single-leg scenarios ----
log("---- Single legs: 10 and 30 days off, one lever at a time (simulate) ----");
const rows: { leg: "cad" | "dso" | "dio"; step: number; cash: number; cycleNext: number }[] = [];
for (const leg of ["cad", "dso", "dio"] as const) {
  for (const step of [10, 30]) {
    const b = basis();
    const spec = leversFor(b).find((l) => l.key === leg)!;
    const ask = BREAK === "neg" ? spec.now + step : spec.now - step;
    const sim = simulate(b, { [leg]: ask } as Partial<Record<LeverKey, number>>);
    const lv = sim.levers.find((l) => l.key === leg)!;

    // priceLevers cross-check: the same move fed through the app's ranking function (carry is 0, no rate)
    const action: CycleAction = {
      id: leg === "cad" ? "certification" : leg === "dso" ? "collection" : "material",
      title: `${step}-day step, ${LEG[leg]}`, detail: "", days: -lv.moved, value: lv.cash, carrySaved: null,
      internallyControllable: leg !== "dso", owner: "", confidence: "medium", measuredAgainst: "a fixed step, no contract window published",
    };
    const priced = priceLevers({
      position: { actions: [action] } as unknown as CyclePosition,
      ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary,
      vendors: [], retention: null, perDay: revPerDay, financingRatePct: RATE_PCT,
      owners: { certification: null, collection: null, material: null },
    });

    // ---- asserts ----
    assert.ok(lv.cash >= 0 && sim.released >= 0, `negative release: ${f2(lv.cash)}`);
    assert.equal(sim.carry, 0, "interest must be 0: no single borrowing rate is disclosed");
    assert.ok(priced.every((p) => p.carry === 0), "priceLevers carry must be 0");
    assert.ok(Math.abs((priced[0].cash ?? NaN) - sim.released) < 1e-9, "priceLevers cash must equal simulate cash");
    // independent cross-check: days x (annual base / 365), straight from the raw lakh figures
    const base = leg === "dio" ? Y.FY26.cons : Y.FY26.rev;
    const indep = (step * base) / DAYS_IN_YEAR;
    assert.ok(Math.abs(indep - lv.cash) < 1e-6, `cross-check failed for ${leg} ${step}: ${f2(indep)} vs ${f2(lv.cash)}`);
    // basis: the lever's rate is the rate of its own base, and the balance divided by that rate is its days
    assert.ok(Math.abs(lv.perDay - BASE_PER_DAY[leg]) < 1e-9, `${leg} priced on the wrong base`);
    assert.ok(Math.abs(BASE_BALANCE[leg] / BASE_PER_DAY[leg] - lv.now) < 1e-6, `${leg} balance does not divide to its days`);
    assert.ok(Math.abs(sim.gap.now! - sim.gap.next! - step) < 1e-9, "single-leg step must take exactly that many days off the cycle");

    single[`${leg}${step}`] = lv.cash;
    rows.push({ leg, step, cash: lv.cash, cycleNext: sim.gap.next! });
    log(`${LEG[leg]}, ${step} days off: ${f2(lv.now)} to ${f2(lv.next)} days | cash released once Rs ${f2(lv.cash)} lakh = Rs ${cr(lv.cash)} cr | cycle ${f1(sim.gap.now!)} to ${f1(sim.gap.next!)} days | carry ${sim.carry} | priceLevers cash ${cr(priced[0].cash ?? NaN)} cr | side: ${lv.side}`);
  }
}
log("");

// ---- ONE combined run: certification + collection + project materials, all moved in a single simulate() call ----
log("---- Combined: ONE simulate run, all three legs moved together (not a sum of rows) ----");
const combined: Record<number, { cash: number; cycleNow: number; cycleNext: number }> = {};
for (const step of [10, 30]) {
  const b = basis();
  const sim = simulate(b, { cad: D.cad - step, dso: D.dso - step, dio: D.dio - step });
  assert.equal(sim.levers.length, 4, "all four legs present in the run");
  assert.ok(sim.released >= 0 && sim.carry === 0, "combined: no negative release, no interest");
  const dpo = sim.levers.find((l) => l.key === "dpo")!;
  assert.equal(dpo.cash, 0, "payables never release cash");
  assert.equal(dpo.moved, 0, "vendor credit held at today's figure: no vendor terms are published");
  const indep = (step * (2 * Y.FY26.rev + Y.FY26.cons)) / DAYS_IN_YEAR;
  assert.ok(Math.abs(indep - sim.released) < 1e-6, `combined cross-check failed: ${f2(indep)} vs ${f2(sim.released)}`);
  assert.ok(Math.abs(sim.gap.now! - sim.gap.next! - 3 * step) < 1e-9, "three legs, three times the days off the cycle");
  combined[step] = { cash: sim.released, cycleNow: sim.gap.now!, cycleNext: sim.gap.next! };
  log(`All three, ${step} days each: cash released once Rs ${f2(sim.released)} lakh = Rs ${cr(sim.released)} cr | cycle ${f1(sim.gap.now!)} to ${f1(sim.gap.next!)} days | DPO leg moved ${f2(dpo.moved)} days, cash ${f2(dpo.cash)} | carry ${sim.carry}`);
}
log("");

// ---- Payables guard: terms are the ceiling; with none published there is no headroom, and a longer wait never releases cash ----
{
  const b = basis();
  const sim = simulate(b, { dpo: D.dpo + 10 });
  const dpo = sim.levers.find((l) => l.key === "dpo")!;
  assert.ok(dpo.cash <= 0 && sim.released <= 0, `payables released cash: ${f2(dpo.cash)}`);
  log(`Vendor credit guard: asked +10 days, moved ${f2(dpo.moved)}, cash ${f2(dpo.cash)} lakh. Terms published: none. Never priced.`);
  const terms = toTerms(b);
  assert.ok(!("dpo" in terms) && !("cad" in terms) && !("dso" in terms), "no contract term exists, so 'to the stated term' is not computed");
  log(`toTerms: ${JSON.stringify(terms)} (no certification window, no payment term, no vendor term published)`);
}
log("");

// ---- Ranking ----
log("---- Ranking: by cash released once (priceLevers cannot rank here, see lever-table.md) ----");
const rank = rows.filter((r) => r.step === 10).sort((a, b) => b.cash - a.cash || (a.leg === "cad" ? -1 : 1));
rank.forEach((r, i) => log(`${i + 1}. ${LEG[r.leg]}: Rs ${cr(r.cash)} cr per 10 days (Rs ${cr(single[`${r.leg}30`])} cr per 30 days)`));
assert.equal(rank[2].leg, "dio", "project materials rank last: its day is worth less than a day of revenue");
log("Tie at the top: certification and collection are both priced at revenue per day. Certification is ours to move, collection is the client's.");

// ---- Chart 1 cash cycle, Position and Simulate ----
log("");
log("---- Chart 1 data: the cash cycle, FY26 ----");
log(`Position: project materials ${f1(D.dio)} | built, waiting to be certified ${f1(D.cad)} | billed, waiting to be paid ${f1(D.dso)} | vendor credit ${f1(D.dpo)} | cycle ${f1(D.ccc)}`);
log(`Simulate, ten days less on each of the three legs (one run): cycle ${f1(combined[10].cycleNext)} days, Rs ${cr(combined[10].cash)} cr released once`);
log(`Simulate, thirty days less on each of the three legs (one run): cycle ${f1(combined[30].cycleNext)} days, Rs ${cr(combined[30].cash)} cr released once`);
log("");
log("---- Chart 2 data: balances ranked by size, FY26, Rs cr (no cost figure) ----");
const bal = [
  ["Project materials held (inventories)", Y.FY26.inv],
  ["Trade payables", Y.FY26.pay],
  ["Unbilled revenue (contract asset)", Y.FY26.unb],
  ["Trade receivables", Y.FY26.rec],
].sort((a, b) => (b[1] as number) - (a[1] as number));
bal.forEach(([n, v]) => log(`${n}: ${cr(v as number)}`));
log("");
log("---- Assert summary: no negative release, interest 0, independent cross-check, payables never release cash, basis matches: all passed ----");

import { writeFileSync } from "node:fs";
if (process.env.IF_OUT) writeFileSync(process.env.IF_OUT, out.join("\n") + "\n", "utf8");
