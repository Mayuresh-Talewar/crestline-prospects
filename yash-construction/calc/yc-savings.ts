import assert from "node:assert/strict";
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

// Yash Construction Co, Acuite 29 Jun 2026: FY26 (provisional) revenue Rs 562.18 Cr, debtor days 64.
const REV = 562.18, DEBTOR_DAYS = 64, RATE = 0; // no interest: no borrowing rate published
const BREAK = process.env.BREAK ?? "";
const perDay = REV / 365;

const nil = { dio: null, cad: null, dso: null, dpo: null };
const basis = (over: Partial<SimBasis> = {}): SimBasis => ({
  days: { ...nil, dso: DEBTOR_DAYS },
  perDay: { ...nil, dso: BREAK === "basis" ? REV / 360 : perDay },
  balances: nil,
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === "rate" ? 9 : RATE,
  desks: nil,
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});

const day = valueOfADay(perDay, RATE);
console.log(`Revenue FY26 (prov.) Rs ${REV} Cr / 365 = Rs ${perDay.toFixed(6)} Cr per day; debtor days ${DEBTOR_DAYS} (receivable leg); rate ${RATE}%`);
console.log(`valueOfADay: cash ${day.cash?.toFixed(6)} carry ${day.carry}`);

for (const step of [10, 30]) {
  const to = BREAK === "neg" ? DEBTOR_DAYS + step : DEBTOR_DAYS - step;
  const r = simulate(basis(), { dso: to });
  const dso = r.levers.find((l) => l.key === "dso")!;
  const expected = BREAK === "cross" ? step * perDay * 1.01 : step * perDay;
  console.log(`${step} days: ${DEBTOR_DAYS} -> ${dso.next} days; released Rs ${r.released.toFixed(4)} Cr; carry Rs ${r.carry}; cross-check ${expected.toFixed(4)}`);
  assert.ok(r.released >= 0, "no negative release");
  assert.equal(r.carry, 0, "interest must be 0");
  assert.ok(Math.abs(r.released - expected) < 1e-9, "cross-check days x per day");
  assert.equal(dso.moved, -step);
  assert.ok(Math.abs(dso.perDay - REV / 365) < 1e-12, "basis: revenue / 365 on the receivable leg");
  assert.equal(r.levers.length, 1, "only the receivable leg moves");
}

// Payables never release cash: a longer payable leg is clamped to terms (or today's figure).
const payB = basis({ days: { ...nil, dso: DEBTOR_DAYS, dpo: BREAK === "dpo" ? 99 : 40 }, perDay: { ...nil, dso: perDay, dpo: 1 } });
const p1 = simulate(payB, { dpo: 70 });
const p2 = simulate({ ...payB, terms: { certification: null, payment: null, vendor: 50 } }, { dpo: 100 });
console.log(`DPO stretch with no terms: cash ${p1.levers.find((l) => l.key === "dpo")?.cash}; with terms 50, asked 100: next ${p2.levers.find((l) => l.key === "dpo")?.next}`);
assert.equal(p1.levers.find((l) => l.key === "dpo")!.cash, 0, "payables never release cash");
assert.equal(p2.levers.find((l) => l.key === "dpo")!.next, 50, "payables capped at terms");
console.log("ALL ASSERTS PASSED");
