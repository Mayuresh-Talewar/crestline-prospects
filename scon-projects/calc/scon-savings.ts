/**
 * SCON Projects savings scenarios. Inputs are CRISIL (5 Feb 2026), standalone:
 * FY25 operating income Rs 1,355.55 Cr, gross current asset days 100 at 31 Mar 2025.
 * No terms are passed (none are published), no interest (no rate is published).
 * BREAK=1..4 sabotages one assert each, to prove the asserts can fail.
 */
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 1355.55;
const GCA_DAYS = 100;
const perDay = REVENUE / 365;

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: GCA_DAYS, dpo: null },
  perDay: { dio: null, cad: null, dso: perDay, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let failed = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) failed += 1;
};

const day = valueOfADay(perDay, 0);
console.log(`Value of a day = ${REVENUE} / 365 = ${day.cash} Cr`);
console.log(`Carry per day at rate 0 = ${day.carry}`);

for (const step of [10, 30]) {
  const r = simulate(basis, { dso: GCA_DAYS - step });
  const lever = r.levers.find((l) => l.key === "dso")!;
  let cash = lever.cash;
  if (BREAK === 1 && step === 10) cash = -cash; // negative release
  const cross = step * REVENUE / 365; // independent route: days x revenue / 365
  const crossCompared = BREAK === 3 && step === 10 ? cross * 1.01 : cross;
  let carry = r.carry;
  if (BREAK === 2 && step === 10) carry = 0.5;
  console.log(`\nStep ${step} days: GCA ${GCA_DAYS} -> ${lever.next}, moved ${lever.moved}, released ${r.released} Cr, carry ${r.carry}`);
  check(`no negative release (${step}d)`, cash >= 0, `cash=${cash}`);
  check(`interest is zero (${step}d)`, carry === 0, `carry=${carry}`);
  check(`cross-check days x per day vs simulate (${step}d)`, Math.abs(cash - crossCompared) < 1e-9, `simulate=${cash} cross=${crossCompared}`);
}

// Payables never release cash: synthetic fixture, no SCON meaning (SCON publishes no payable days).
const pay: SimBasis = { ...basis, days: { ...basis.days, dpo: 60 }, perDay: { ...basis.perDay, dpo: 1 } };
let worst = -Infinity;
for (const to of [0, 20, 59, 60, 90, 200]) {
  const l = simulate(pay, { dpo: to }).levers.find((x) => x.key === "dpo")!;
  worst = Math.max(worst, BREAK === 4 && to === 200 ? 5 : l.cash);
}
check("payables never release cash (fixture, any request)", worst <= 0, `max cash=${worst}`);

console.log(`\nRESULT ${failed === 0 ? "ALL PASS" : failed + " FAILED"}`);
process.exit(failed === 0 ? 0 : 1);
