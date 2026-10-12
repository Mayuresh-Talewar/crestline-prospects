/**
 * OP-S23 Om Power Transmission Limited: savings calc on the app's own functions.
 * Standalone AR 2025-26, year-end balances, Rs Cr (lakh / 100). 365 days.
 * Temporary. BREAK=1..7 injects one deliberate fault so each assert is seen to fail.
 */
import { simulate, leversFor, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay, buildCyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = Number(process.env.BREAK ?? 0);

// ---- inputs, AR 2025-26 standalone (Rs lakh / 100) -------------------------
const REVENUE = 44916.49 / 100;
const MATERIALS = 23786.36 / 100;
const PROJECT_EXP = 10950.13 / 100;
const RECEIVABLES = 22142.24 / 100;
const CONTRACT_ASSET = 2405.1 / 100;
const INVENTORY = 1591.29 / 100;
const PAYABLES = 12355.01 / 100;
const WORKING_CAPITAL = (31030.63 - 20000.57) / 100;

const revPerDay = REVENUE / 365;
const matPerDay = MATERIALS / 365;
const payPerDay = (MATERIALS + PROJECT_EXP) / 365; // base the DPO is struck on

const days = {
  dso: (RECEIVABLES / REVENUE) * 365 + (BREAK === 9 ? 1 : 0),
  cad: (CONTRACT_ASSET / REVENUE) * 365,
  dio: (INVENTORY / MATERIALS) * 365,
  dpo: (PAYABLES / (MATERIALS + PROJECT_EXP)) * 365,
};

const basis = (): SimBasis => ({
  days,
  perDay: {
    dso: revPerDay,
    cad: revPerDay,
    dio: BREAK === 5 || BREAK === 7 ? revPerDay : matPerDay,
    dpo: payPerDay,
  },
  balances: { dso: RECEIVABLES, cad: CONTRACT_ASSET, dio: INVENTORY, dpo: PAYABLES },
  // README: pass no terms. Break 4 gives vendors a published term so DPO can rise.
  terms: { certification: null, payment: null, vendor: BREAK === 4 ? 200 : null },
  workingCapital: WORKING_CAPITAL,
  ratePct: BREAK === 2 ? 9.2 : 0,
  desks: { dso: null, cad: null, dio: null, dpo: null },
  items: { dso: [], cad: [], dio: [], dpo: [] },
  blocked: {},
});

const f = (n: number, d = 2) => n.toFixed(d);
const fails: string[] = [];
const check = (ok: boolean, msg: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
  if (!ok) fails.push(msg);
};
const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

console.log("=== OP-S23 Om Power Transmission Limited, savings calc ===");
console.log(`Basis: standalone, audited AR 2025-26, 365 days. Rs Cr.`);
console.log(`Revenue ${f(REVENUE)}  per day ${f(revPerDay, 4)}`);
console.log(`Cost of material consumed ${f(MATERIALS)}  per day ${f(matPerDay, 4)}`);
console.log(`Payables base (materials + project expenses) ${f(MATERIALS + PROJECT_EXP)}  per day ${f(payPerDay, 4)}`);
console.log(`Days: DSO ${f(days.dso, 1)}  contract asset ${f(days.cad, 1)}  DIO ${f(days.dio, 1)}  DPO ${f(days.dpo, 1)}`);
console.log(`Cycle DIO + DSO - DPO = ${f(days.dio + days.dso - days.dpo, 1)}`);

const b = basis();
const specs = leversFor(b);
console.log("\n--- Levers the simulator offers (no terms passed) ---");
for (const s of specs) {
  console.log(`${s.key}  now ${f(s.now, 2)}  min ${f(s.min, 2)}  max ${f(s.max, 2)}  perDay ${f(s.perDay, 4)}  balance ${s.balance === null ? "NA" : f(s.balance)}  target ${s.target ?? "none"}`);
}
console.log(`toTerms (every leg to its stated term) = ${JSON.stringify(toTerms(b))}  (empty: no term is published)`);

// ---- one-leg scenarios ------------------------------------------------------
type Row = { lever: string; step: number; next: number; moved: number; cash: number; clamped: boolean; cycleNext: number | null };
const rows: Row[] = [];
const runLeg = (key: LeverKey, step: number): Row => {
  const sign = BREAK === 1 && key === "dso" ? +1 : -1; // break 1: push collection the wrong way
  const r = simulate(basis(), { [key]: days[key] + sign * step });
  const lv = r.levers.find((l) => l.key === key)!;
  const clamped = Math.abs(lv.moved) + 1e-9 < step;
  return { lever: key, step, next: lv.next, moved: lv.moved, cash: lv.cash, clamped, cycleNext: r.cycle.next };
};
const plan: [LeverKey, number][] = [["dso", 10], ["dso", 30], ["cad", 10], ["cad", 30], ["dio", 10], ["dio", 30]];
console.log("\n--- One lever at a time (days moved, cash released once, Rs Cr) ---");
for (const [k, s] of plan) {
  const r = runLeg(k, s);
  rows.push(r);
  console.log(`${k} ${s}d: now ${f(days[k], 2)} -> ${f(r.next, 2)}  moved ${f(r.moved, 2)}  cash ${f(r.cash, 4)}  cycle after ${f(r.cycleNext ?? NaN, 2)}  ${r.clamped ? "CLAMPED (stops at zero days, not a " + s + "-day scenario)" : ""}  interest ${f(simulate(basis(), { [k]: days[k] - s }).carry, 4)}`);
}

// ---- ONE combined run -------------------------------------------------------
const combined = simulate(basis(), BREAK === 8 ? { dso: days.dso - 10, cad: days.cad - 10 } : { dso: days.dso - 10, cad: days.cad - 10, dio: days.dio - 10 });
console.log("\n--- ONE combined run: collection, certification and project materials, 10 days each ---");
for (const l of combined.levers) console.log(`  ${l.key}: ${f(l.now, 2)} -> ${f(l.next, 2)}  cash ${f(l.cash, 4)}`);
console.log(`  released once ${f(combined.released, 4)}   carry ${f(combined.carry, 4)}   cycle ${f(combined.cycle.now ?? NaN, 2)} -> ${f(combined.cycle.next ?? NaN, 2)}`);

// ---- value of a day ---------------------------------------------------------
const vd = valueOfADay(revPerDay, 0);
console.log(`\nvalueOfADay(revenue per day, 0%): cash ${f(vd.cash!, 4)}  carry ${f(vd.carry!, 4)}`);

// ---- priceLevers, if the position builds -----------------------------------
const position = buildCyclePosition({
  deployed: RECEIVABLES + CONTRACT_ASSET + INVENTORY,
  clientAdvance: 0.43,
  otherFunding: PAYABLES,
  revenuePerDay: revPerDay,
  contractAssetDays: days.cad,
  dso: days.dso,
  dio: days.dio,
  certificationSlaDays: null,
  paymentTermDays: null,
  materialShare: null,
  financingRatePct: 0,
});
const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
const priced = priceLevers({
  position, ledger, vendors: [], retention: null, perDay: revPerDay, financingRatePct: 0,
  owners: { certification: null, collection: null, material: null },
});
console.log("\n--- priceLevers (app ranking) ---");
console.log(`position builds: cycle days on one clock ${f(position.cycleDays ?? NaN, 1)}; actions returned: ${position.actions.map((a) => a.id).join(", ") || "none"}`);
for (const l of priced) console.log(`  ${l.id}: cash ${l.cash === null ? "NA" : f(l.cash, 4)}  carry ${f(l.carry, 4)}  days ${l.days === null ? "NA" : f(l.days, 2)}`);
const materialRow = priced.find((l) => l.id === "action-material");
const simMaterialFull = BREAK === 10 ? (materialRow?.cash ?? 0) : simulate(basis(), { dio: 0 }).levers.find((l) => l.key === "dio")!.cash;

// ---- asserts ----------------------------------------------------------------
console.log("\n--- Asserts ---");
const legRows = rows.filter((r) => !(r.lever === "dpo"));
check(legRows.every((r) => r.cash >= 0) && combined.released >= 0, "A1 no negative release on any priced move");
check(rows.every((r) => near(simulate(basis(), { [r.lever]: days[r.lever as LeverKey] - r.step }).carry, 0)) && near(combined.carry, 0), "A2 interest = 0 everywhere (no single rate is published)");
const ind = { dso10: 10 * REVENUE / 365, dso30: 30 * REVENUE / 365, cad10: 10 * REVENUE / 365, dio10: 10 * MATERIALS / 365 };
const sim = (k: string, s: number) => rows.find((r) => r.lever === k && r.step === s)!.cash;
const simBasis = basis();
if (BREAK === 3) simBasis.perDay.dso *= 1.01;
const simDso10 = BREAK === 3 ? -(simulate(simBasis, { dso: days.dso - 10 }).levers.find((l) => l.key === "dso")!.moved) * simBasis.perDay.dso : sim("dso", 10);
check(near(simDso10, ind.dso10, 1e-9) && near(sim("dso", 30), ind.dso30, 1e-9) && near(sim("cad", 10), ind.cad10, 1e-9) && near(sim("dio", 10), ind.dio10, 1e-9),
  "A3 independent cross-check: days x per day equals simulate, to 1e-9");
const dpoTargets = [0, 50, days.dpo, 200, 500];
const dpoCash = dpoTargets.map((t) => simulate(basis(), { dpo: t }).levers.find((l) => l.key === "dpo")!);
check(dpoCash.every((l) => l.cash <= 1e-12) && dpoCash.filter((l) => l.next >= days.dpo).every((l) => near(l.cash, 0)),
  "A4 payables never release cash (any raise of DPO is held at today's figure; any cut consumes cash)");
check([["dso", RECEIVABLES, revPerDay], ["cad", CONTRACT_ASSET, revPerDay], ["dio", INVENTORY, matPerDay], ["dpo", PAYABLES, payPerDay]].every(([k, bal, pd]) => {
  const spec = leversFor(basis()).find((l) => l.key === k)!;
  return near(spec.now * spec.perDay, bal as number, 1e-6) && near(spec.perDay, pd as number, 1e-12);
}), "A5 basis matches: each balance equals its days x its own per-day base");
const cad30 = rows.find((r) => r.lever === "cad" && r.step === 30)!;
const dio30 = rows.find((r) => r.lever === "dio" && r.step === 30)!;
const cadNow = BREAK === 6 ? 40 : days.cad;
check(cad30.clamped && near(cad30.next, 0) && near(cad30.cash, CONTRACT_ASSET, 1e-6) && cad30.cash < 30 * revPerDay && cadNow === days.cad,
  "A6 clamp: certification 30-day cut stops at zero days (releases the whole 24.05 balance, not 30 x per day)");
check(dio30.clamped && near(dio30.next, 0) && near(dio30.cash, INVENTORY, 1e-6), "A6b clamp: project materials 30-day cut stops at zero days");
const p = basis().perDay;
check(near(p.dio, matPerDay) && !near(p.dio, p.dso) && near(p.dso, revPerDay) && near(p.cad, revPerDay) && near(p.dpo, payPerDay),
  "A7 no lever is priced on a base it does not belong to (stock at materials per day, never revenue per day)");
const sumLegs = combined.levers.reduce((t, l) => t + l.cash, 0);
check(near(sumLegs, combined.released) && near(combined.released, 10 * (2 * revPerDay + matPerDay), 1e-9) && near((combined.cycle.now ?? 0) - (combined.cycle.next ?? 0), 20, 1e-9),
  "A8 combined run is one simulate call; cash and a 20-day cycle cut (stock and receivables) reconcile");
check(Math.round((days.dio + days.dso - days.dpo) * 10) / 10 === 74.5 && Math.round(days.dso * 10) / 10 === 179.9 && Math.round(days.cad * 10) / 10 === 19.5 && Math.round(days.dio * 10) / 10 === 24.4 && Math.round(days.dpo * 10) / 10 === 129.8,
  "A9 printed days: DSO 179.9, contract asset 19.5, DIO 24.4, DPO 129.8, cycle 74.5");
check(materialRow === undefined || !near(materialRow.cash ?? 0, simMaterialFull, 1e-6),
  "A10 priceLevers' material action is priced at revenue per day (30.0 Cr), a different base from simulate (15.91 Cr): NOT used");

console.log(`\nPriceLevers material action cash ${materialRow?.cash === null || materialRow === undefined ? "none" : f(materialRow.cash!, 4)} (revenue per day base) vs simulate stock balance ${f(simMaterialFull, 4)} (cost per day base).`);
console.log(fails.length ? `\nRESULT: ${fails.length} FAILED` : "\nRESULT: ALL PASS");
process.exit(fails.length ? 1 : 0);
