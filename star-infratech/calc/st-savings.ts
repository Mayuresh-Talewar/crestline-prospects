import { leversFor, simulate, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/*
  Star Infratech (ICRA, 10 Jul 2026, standalone, FY26 PROVISIONAL, Rs crore).
  Published: operating income 1,525.4. NOT published: any DIO, contract asset, DSO, DPO,
  stock cost base, vendor terms, client term, retention, borrowing rate.
  So the only priceable thing is the VALUE OF A DAY on operating income. No interest.
*/
const OI_FY26_PROVISIONAL = 1525.4;
const PER_DAY = OI_FY26_PROVISIONAL / 365;
const BREAK = process.env.BREAK ?? "";
const fail = (m: string) => { console.error("ASSERT FAILED: " + m); process.exit(1); };
const ok = (c: boolean, m: string) => { if (!c) fail(m); console.log("ok  " + m); };
const close = (a: number, b: number) => Math.abs(a - b) < 1e-9;

// 1. The real basis: no day is published, so the app's own simulator offers no lever.
const none: Record<LeverKey, null> = { dio: null, cad: null, dso: null, dpo: null };
const real: SimBasis = {
  days: { ...none }, perDay: { ...none }, balances: { ...none },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null, ratePct: 0,
  desks: { ...none }, items: { dio: [], cad: [], dso: [], dpo: [] }, blocked: {},
};
ok(leversFor(real).length === 0, "leversFor on the published basis returns no lever (every lever NOT FOUND)");
ok(Object.keys(toTerms(real)).length === 0, "toTerms on the published basis moves nothing (no term published)");

// 2. Clamp bounds, read from the app: cad min=certification??0, dso min=payment??0, max=max(now*1.4, now+30);
//    dpo max=terms ceiling else held at now; dio needs a rate. Harness basis: now=100 is a TEST VALUE, never printed.
const H = 100;
const harness: SimBasis = {
  ...real,
  days: { dio: null, cad: H, dso: H, dpo: H },
  perDay: { dio: null, cad: PER_DAY, dso: PER_DAY, dpo: PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  ratePct: 0,
};
const specs = leversFor(harness);
const spec = (k: LeverKey) => specs.find((s) => s.key === k)!;
ok(spec("cad").min === 0 && spec("dso").min === 0, "no term published: certification and payment floors are 0, so a 10 or 30 day move is inside the bounds");
ok(spec("dso").max === 140 && spec("cad").max === 140, "clamp max = max(now*1.4, now+30) as read from cycle-simulation.ts");
ok(spec("dpo").max === H, "vendor credit held at today's figure when no vendor terms exist (never stretched)");

const steps = [10, 30];
const table: { days: number; viaValueOfADay: number; viaSimulate: number; carry: number }[] = [];
for (const d of steps) {
  const vod = valueOfADay(PER_DAY, 0);
  const viaV = (vod.cash as number) * d;
  const sim = simulate(harness, { dso: H - d });
  const viaS = sim.levers.find((l) => l.key === "dso")!.cash;
  const sim2 = simulate(harness, { cad: H - d });
  const viaC = sim2.levers.find((l) => l.key === "cad")!.cash;
  const independent = (d * OI_FY26_PROVISIONAL) / 365 + (BREAK === "cross" ? 1 : 0);
  ok(close(viaV, independent), `${d} days: valueOfADay x days = independent days x OI / 365`);
  ok(close(viaS, independent) && close(viaC, independent), `${d} days: simulate (receivable and certification harness) = independent figure`);
  const carry = (BREAK === "interest" ? 0.01 : 0) + (vod.carry as number) * d + sim.carry;
  ok(carry === 0, `${d} days: interest = 0 (no borrowing rate published)`);
  const rel = BREAK === "neg" ? -viaV : viaV;
  ok(rel >= 0, `${d} days: release is not negative`);
  table.push({ days: d, viaValueOfADay: viaV, viaSimulate: viaS, carry });
}

// 3. Payables never release cash: moving vendor credit down or past its held ceiling.
const dpoUp = simulate(harness, { dpo: H + 30 }).levers.find((l) => l.key === "dpo")!;
const dpoDown = simulate(harness, { dpo: H - 10 }).levers.find((l) => l.key === "dpo")!;
ok(dpoUp.next === H && dpoUp.cash === 0, "payables: asked to stretch past today's figure with no terms, held, releases 0");
ok(dpoDown.cash <= 0 && (BREAK === "dpo" ? false : true), "payables: paying sooner consumes cash, never releases it");
if (BREAK === "dpo") fail("payables break-test injected");

// 4. Basis: one base only, operating income, FY26 provisional; nothing priced on stock, payables or retention.
const basis = { base: "operating income FY26 provisional", rupeesCr: OI_FY26_PROVISIONAL, denominatorDays: 365 };
ok(BREAK === "basis" ? false : basis.base === "operating income FY26 provisional" && basis.denominatorDays === 365, "basis: operating income, FY26 provisional, 365 days; no stock, payables or retention priced");

// 5. Lever table
const L: [string, string][] = [
  ["Receivables (DSO) at revenue per day", "NOT PRICED: no debtor days or receivable balance published; client term not published"],
  ["Contract assets / unbilled (certification wait)", "NOT PRICED: no contract asset balance or days, no certification window published"],
  ["Retention", "NOT PRICED: no retention balance and no release basis published"],
  ["Site stock (DIO)", "NOT PRICED: no stock balance, no cost per day published"],
  ["Payables (DPO) to vendor terms", "NOT PRICED: no payables, no vendor terms published; only sub-contractor advances named, no amount"],
  ["Combined scenario", "NOT RUN: no lever has a base"],
  ["Financing carry", "NOT PRICED: no borrowing rate published; interest = 0"],
];
console.log("\nLEVER TABLE");
for (const [a, b] of L) console.log(`- ${a}: ${b}`);

console.log("\nVALUE OF A DAY (Crestline's arithmetic on the published accounts, FY26 provisional)");
console.log(`per day = ${OI_FY26_PROVISIONAL} / 365 = ${PER_DAY.toFixed(6)} Cr`);
for (const t of table) console.log(`${t.days} days: ${t.viaValueOfADay.toFixed(6)} Cr released once (simulate harness ${t.viaSimulate.toFixed(6)}), interest ${t.carry}`);
console.log(`PRINT: per day Rs ${PER_DAY.toFixed(2)} Cr; 10 days Rs ${table[0].viaValueOfADay.toFixed(2)} Cr; 30 days Rs ${table[1].viaValueOfADay.toFixed(2)} Cr`);
console.log("ALL ASSERTS PASSED");
