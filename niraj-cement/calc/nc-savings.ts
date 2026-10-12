// NC-S23: Niraj Cement Structurals, receivable leg. Standalone FY26. Rs Cr. No interest.
// BREAK=1..5 deliberately breaks one assert to prove it fails visibly.
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import assert from "node:assert/strict";

const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 540.44; // revenue from operations FY26, Cr (AR FY26 P&L)
const DEBTOR_DAYS = 47.0; // 365 / 7.76 (Note 47 ratio)
const RATE = BREAK === 3 ? 9 : 0; // no disclosed rate: interest must be 0
const PER_DAY = BREAK === 1 ? REVENUE / 360 : REVENUE / 365;

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: DEBTOR_DAYS, dpo: BREAK === 5 ? 21.2 : null },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: BREAK === 5 ? 1.2 : null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const out: Record<string, { to: number; cash: number; carry: number; cross: number; day: number }> = {};
for (const step of [10, 30]) {
  const r = simulate(basis, { dso: DEBTOR_DAYS - (BREAK === 2 ? -step : step) });
  const lever = r.levers.find((l) => l.key === "dso");
  assert.ok(lever, "receivable lever present");
  const vd = valueOfADay(PER_DAY, RATE);
  const cross = step * (REVENUE / 365) * (BREAK === 4 ? 1.01 : 1);
  out[step] = { to: lever.next, cash: r.released, carry: r.carry, cross, day: vd.cash ?? NaN };

  assert.ok(r.released >= 0, `no negative release (${r.released})`);
  assert.equal(r.carry, 0, "interest must be 0");
  assert.equal(vd.carry, 0, "valueOfADay carry must be 0");
  assert.ok(Math.abs(r.released - cross) < 1e-9, `cross-check days x per day ${cross} vs simulate ${r.released}`);
  assert.ok(Math.abs(lever.perDay - REVENUE / 365) < 1e-12, "basis: per day is FY26 revenue / 365");
  assert.equal(lever.now, DEBTOR_DAYS, "basis: days are the 47.0 debtor days");
  // payables never release cash: stretching vendor credit must not add to released cash
  const p = simulate(basis, { dso: DEBTOR_DAYS, dpo: 365 });
  assert.equal(p.released, 0, "payables stretch must release nothing");
  assert.ok(!p.levers.some((l) => l.key === "dpo"), "no payable lever on this basis");
}

console.log(`Per day: Rs ${(REVENUE / 365).toFixed(6)} Cr (${REVENUE} / 365)`);
console.log(`Debtor days: ${DEBTOR_DAYS} (leg: receivable, no terms passed, no interest)`);
for (const s of [10, 30]) {
  const o = out[s];
  console.log(`${s} days: ${DEBTOR_DAYS} -> ${o.to}; cash released Rs ${o.cash.toFixed(4)} Cr; cross-check Rs ${o.cross.toFixed(4)} Cr; interest Rs ${o.carry} Cr`);
}
console.log("ALL ASSERTS PASS");
