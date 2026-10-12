/**
 * VL-S23: V.L. Infraprojects Limited, standalone, AR 2025-26. Rs Cr throughout.
 * Runs the app's own simulate / leversFor / valueOfADay. No terms, no interest.
 * BREAK=1..7 (1 wrong-way move, 2 interest, 3 vendor terms, 4 cross-check, 5 wrong base, 6 stock on revenue, 7 wrong days) corrupts one input so the matching assert must fail.
 */
import { simulate, leversFor, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);

// ---- inputs (Rs lakh from AR 2025-26, converted to Rs Cr) -------------------
const REV = 149.74; // revenue from operations, as the brief rules
const MAT = 56.41; // cost of materials consumed
const PUR = 12717.74 / 100; // Note 23 net purchases (materials + subcontract), vendor leg only
const bal = { cad: 4953.59 / 100, dso: 2312.29 / 100, dio: 918.09 / 100, dpo: 1341.19 / 100 };
// Published days (data.md, 365-day year). Recomputed below from the balances.
const DAYS: Record<LeverKey, number> = { cad: 120.8, dso: BREAK === 7 ? 66.4 : 56.4, dio: 59.4, dpo: 38.5 };

const perDay: Record<LeverKey, number> = {
  cad: REV / 365,
  dso: BREAK === 5 ? MAT / 365 : REV / 365, // BREAK 5: collection priced on the wrong base
  dio: BREAK === 6 ? REV / 365 : MAT / 365,
  dpo: PUR / 365,
};

const basis: SimBasis = {
  days: { ...DAYS },
  perDay,
  balances: { ...bal },
  terms: { certification: null, payment: null, vendor: BREAK === 3 ? 60 : null }, // none published
  workingCapital: null,
  ratePct: BREAK === 2 ? 9 : 0, // no single borrowing rate is published
  desks: { cad: null, dso: null, dio: null, dpo: null },
  items: { cad: [], dso: [], dio: [], dpo: [] },
  blocked: {},
};

let fails = 0;
const ok = (cond: boolean, msg: string) => {
  console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`);
  if (!cond) fails++;
};
const close = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;
const f = (n: number, d = 4) => n.toFixed(d);

console.log("== Inputs ==");
console.log(`revenue per day      = ${REV}/365 = ${f(REV / 365, 6)} Cr`);
console.log(`materials per day    = ${MAT}/365 = ${f(MAT / 365, 6)} Cr`);
console.log(`purchases per day    = ${f(PUR, 2)}/365 = ${f(PUR / 365, 6)} Cr (vendor leg, held, never priced)`);
const vod = valueOfADay(REV / 365, 0);
console.log(`valueOfADay(rev/day, 0%) -> cash ${f(vod.cash ?? NaN, 6)} Cr, carry ${vod.carry}`);

console.log("\n== Clamp bounds read from leversFor (no terms passed) ==");
for (const l of leversFor(basis)) {
  console.log(`${l.key}  now ${l.now}  min ${l.min}  max ${f(l.max, 2)}  target ${l.target}  perDay ${f(l.perDay, 6)}`);
}
const spec = Object.fromEntries(leversFor(basis).map((l) => [l.key, l])) as Record<LeverKey, ReturnType<typeof leversFor>[number]>;

console.log("\n== Days recomputed from balances (basis match) ==");
const chk: Record<LeverKey, number> = {
  cad: bal.cad / (REV / 365),
  dso: bal.dso / (REV / 365),
  dio: bal.dio / (MAT / 365),
  dpo: bal.dpo / (PUR / 365),
};
for (const k of ["dio", "cad", "dso", "dpo"] as LeverKey[]) console.log(`${k}: ${f(chk[k], 2)} days from balance, published ${DAYS[k]}`);
// Revenue 149.74 vs 149.7356 shifts cad by 0.003 day; tolerance 0.06 day.
ok((["dio", "cad", "dso", "dpo"] as LeverKey[]).every((k) => Math.abs(chk[k] - DAYS[k]) < 0.06), "ASSERT basis: balance / own per-day base reproduces each published day within 0.06");
ok(perDay.cad === perDay.dso && perDay.cad === REV / 365, "ASSERT base: certification and collection both priced on revenue per day");
ok(perDay.dio === MAT / 365 && perDay.dio !== REV / 365, "ASSERT base: stock priced on materials consumed per day, never revenue per day");

const steps = [10, 30];
const rows: { name: string; key: LeverKey; step: number; cash: number; to: number }[] = [];
let negative = false;
let leaked = false;
console.log("\n== Single levers (simulate) ==");
for (const key of ["cad", "dso", "dio"] as LeverKey[]) {
  for (const step of steps) {
    const to = DAYS[key] - (BREAK === 1 ? -step : step); // BREAK 1: the move goes the wrong way
    const r = simulate(basis, { [key]: to });
    const lv = r.levers.find((x) => x.key === key)!;
    const independent = step * perDay[key]; // days x per day, no simulate
    console.log(`${key} -${step}d: ${DAYS[key]} -> ${f(lv.next, 1)} days  moved ${f(lv.moved, 1)}  released ${f(r.released, 4)} Cr  independent ${f(independent, 4)}  carry ${r.carry}`);
    ok(close(lv.next, to), `ASSERT no clamp: ${key} -${step} lands on ${f(to, 1)} (min ${spec[key].min}, max ${f(spec[key].max, 2)})`);
    ok(close(r.released, BREAK === 4 ? independent + 0.01 : independent), `ASSERT cross-check: ${key} -${step} simulate = days x per day (${f(independent, 4)})`);
    const dpoLever = r.levers.find((x) => x.key === "dpo")!;
    if (r.released < 0 || lv.cash < 0) negative = true;
    if (dpoLever.cash !== 0) leaked = true;
    ok(r.carry === 0, `ASSERT interest = 0 for ${key} -${step}`);
    rows.push({ name: lv.label, key, step, cash: r.released, to: lv.next });
  }
}
ok(!negative, "ASSERT no negative release in any single-lever run");

console.log("\n== Combined runs (one simulate call, all three legs moved together) ==");
const comb: Record<number, ReturnType<typeof simulate>> = {};
for (const step of steps) {
  const r = simulate(basis, { cad: DAYS.cad - step, dso: DAYS.dso - step, dio: DAYS.dio - step });
  comb[step] = r;
  const sumIndep = step * (perDay.cad + perDay.dso + perDay.dio);
  console.log(`all three -${step}d: released ${f(r.released, 4)} Cr (independent ${f(sumIndep, 4)})  cycle ${f(r.cycle.now ?? NaN, 1)} -> ${f(r.cycle.next ?? NaN, 1)}  gap ${f(r.gap.now ?? NaN, 1)} -> ${f(r.gap.next ?? NaN, 1)}  carry ${r.carry}`);
  ok(close(r.released, sumIndep), `ASSERT combined -${step}: simulate = independent sum of its own legs`);
  ok(r.released >= 0 && r.carry === 0, `ASSERT combined -${step}: release not negative, interest 0`);
  const dp = r.levers.find((x) => x.key === "dpo")!;
  if (dp.cash !== 0 || dp.moved !== 0) leaked = true;
}

console.log("\n== Payables probe: push vendor credit UP 20 days, and cut certification 500 days ==");
const probe = simulate(basis, { dpo: DAYS.dpo + 20, cad: DAYS.cad - 500 });
const pd = probe.levers.find((x) => x.key === "dpo")!;
const pc = probe.levers.find((x) => x.key === "cad")!;
console.log(`dpo asked ${DAYS.dpo + 20} -> ${f(pd.next, 1)} (max ${f(pd.max, 1)}), cash ${pd.cash}`);
console.log(`cad asked ${DAYS.cad - 500} -> ${f(pc.next, 1)} (min ${pc.min}), cash ${f(pc.cash, 4)}`);
ok(pd.next === pd.now && pd.cash === 0 && !leaked, "ASSERT payables never release cash: held at 38.5 with no terms, cash 0, in every run");
ok(pc.next === pc.min, "ASSERT clamp: certification cannot go below its floor (0, no window published)");

console.log("\n== Cycle (simulator's own arithmetic) ==");
const base = simulate(basis, {});
console.log(`DIO ${DAYS.dio} + DSO ${DAYS.dso} - DPO ${DAYS.dpo} = cycle ${f(base.cycle.now ?? NaN, 1)}; plus built-waiting ${DAYS.cad} = gap ${f(base.gap.now ?? NaN, 1)}`);
ok(close(base.cycle.now ?? NaN, DAYS.dio + DAYS.dso - DAYS.dpo, 1e-6), "ASSERT cycle = DIO + DSO - DPO");
ok(close(base.gap.now ?? NaN, DAYS.dio + DAYS.dso - DAYS.dpo + DAYS.cad, 1e-6), "ASSERT gap = cycle + certification days");
const gca = 8946.4 / (14973.56 / 365);
console.log(`GCA = 8946.40 / (14973.56/365) = ${f(gca, 2)} days (separate measure, never added)`);
ok(Math.abs(gca - 218.1) < 0.05, "ASSERT GCA 218.1");

console.log("\n== LEVER TABLE ==");
const T = (a: string, b: string, c: string, d: string) => console.log(`${a.padEnd(28)}| ${b.padEnd(10)}| ${c.padEnd(46)}| ${d}`);
T("Lever", "Priced", "Base and bounds", "Result / reason");
T("Certification (unbilled)", "YES", `revenue per day ${f(REV / 365, 4)}; no window published, floor 0`, `10d ${f(10 * perDay.cad, 2)} Cr, 30d ${f(30 * perDay.cad, 2)} Cr`);
T("Collection (receivables)", "YES", `revenue per day ${f(REV / 365, 4)}; no term published, floor 0`, `10d ${f(10 * perDay.dso, 2)} Cr, 30d ${f(30 * perDay.dso, 2)} Cr`);
T("Site stock (materials)", "YES", `materials consumed per day ${f(MAT / 365, 4)}`, `10d ${f(10 * perDay.dio, 2)} Cr, 30d ${f(30 * perDay.dio, 2)} Cr`);
T("Vendor credit (DPO)", "NO", "no vendor terms published; ceiling = today's 38.5", "held; paying later is never cash released");
T("Retention", "NO", "no single balance and no release basis in the filings", "not priced, not printed");
T("Interest / carry", "NO", "no single borrowing rate disclosed (rate 0 passed)", "interest = 0");
T("Customer advances", "NO", "none outstanding at 31 Mar 2026", "no lever");
T("To a stated term", "NO", "no payment term, no certification window published", "no 'to term' scenario");
console.log("Ranking: cash released once at each step. Certification and collection tie (same revenue per day);");
console.log("certification is listed first because the step is ours to make. Stock is third. priceLevers not run: it needs a built CyclePosition and the rate is 0.");

console.log(fails ? `\n${fails} ASSERT(S) FAILED` : "\nALL ASSERTS PASSED");
if (fails) process.exit(1);
