// Swastik Constructions (SW-S23). Source: Acuite rationale, 30 Jan 2026, standalone FY25.
// Run: npx tsx scripts/_tmp-sw-savings.ts   (BREAK=1..6 deliberately breaks one assert)
import { simulate, leversFor, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 393.63; // Rs Cr, FY25 operating income (Acuite)
const DSO = 22; // days, FY25 (Acuite)
const RETENTION = 26.55; // Rs Cr balance at 31 Mar 2025 (Acuite)
const PER_DAY = REVENUE / 365;

// Only the DSO leg exists. No terms passed, no rate (0), no other leg.
const basis: SimBasis = {
  days: { dio: null, cad: null, dso: DSO, dpo: null },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const f = (n: number) => n.toFixed(4);
const ok = (cond: boolean, msg: string) => {
  if (!cond) throw new Error("ASSERT FAILED: " + msg);
  console.log("ok  " + msg);
};

console.log(`PER DAY = ${REVENUE} / 365 = ${f(PER_DAY)} Cr`);
const lever = leversFor(basis);
console.log("levers offered:", lever.map((l) => `${l.key} now=${l.now} min=${l.min} max=${l.max} target=${l.target}`).join("; "));

const run = (cut: number) => simulate(basis, { dso: DSO - cut });
const r10 = run(10);
const r30 = run(30);
const l10 = r10.levers[0];
const l30 = r30.levers[0];
console.log(`10-day cut: ${DSO} -> ${l10.next} days, moved ${l10.moved}, cash ${f(l10.cash)} Cr, released ${f(r10.released)}, carry ${f(r10.carry)}`);
console.log(`30-day cut asked: ${DSO - 30} -> clamped to ${l30.next} days, moved ${l30.moved}, cash ${f(l30.cash)} Cr (a true 30 days would be ${f(30 * PER_DAY)} Cr)`);
console.log(`to terms: ${JSON.stringify(toTerms(basis))} (no term published)`);
console.log(`value of a day: ${JSON.stringify(valueOfADay(PER_DAY, 0))}`);
console.log(`Retention balance only: ${RETENTION} Cr (not priced, no release basis)`);

// 1. no negative release
ok((BREAK === 1 ? -1 : 1) * r10.released >= 0 && r30.released >= 0, "no negative release (10 and 30)");
// 2. interest = 0
ok((BREAK === 2 ? 1 : 0) + r10.carry + r30.carry + (valueOfADay(PER_DAY, 0).carry ?? 0) === 0, "interest = 0 (no rate published)");
// 3. cross-check: days x per day vs simulate
ok(Math.abs(10 * PER_DAY + (BREAK === 3 ? 0.5 : 0) - r10.released) < 1e-9, "cross-check 10 x per day = simulate");
// 4. 30-day cut is clamped by the simulator (would go below zero)
ok(DSO - 30 < 0 && (BREAK === 4 ? false : l30.next === 0) && Math.abs(l30.moved + DSO) < 1e-9 && Math.abs(r30.released - DSO * PER_DAY) < 1e-9 && r30.released < 30 * PER_DAY, "30-day cut clamped to 0 days, releases only 22 days' worth");
// 5. payables never release cash: synthetic DPO leg at its own ceiling, asked to stretch far past it
const pb: SimBasis = {
  ...basis,
  days: { ...basis.days, dpo: 30 },
  perDay: { ...basis.perDay, dpo: PER_DAY },
  terms: { certification: null, payment: null, vendor: BREAK === 5 ? 90 : 30 },
};
const stretch = simulate(pb, { dpo: 90 }).levers.find((l) => l.key === "dpo")!;
ok(stretch.next === 30 && stretch.cash === 0, "payables stretched past terms release nothing (synthetic leg, not Swastik's)");
// 6. basis: only the DSO leg, on revenue per day; no stock/cad/dpo lever priced for Swastik
ok(lever.length === 1 && lever[0].key === "dso" && (BREAK === 6 ? false : lever[0].perDay === PER_DAY), "basis: one lever, dso, at revenue per day");
console.log("ALL ASSERTS PASSED");
