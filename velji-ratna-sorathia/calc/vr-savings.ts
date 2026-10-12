import assert from "node:assert/strict";
import { simulate, leversFor, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

// Velji Ratna Sorathia Infra Private Limited. Only published input: FY25 MGT-7 turnover Rs Cr.
const TURNOVER_CR = 1062.54;
const BREAK = Number(process.env.BREAK ?? 0); // 1..6 deliberately violates one assert
const PER_DAY = BREAK === 5 ? TURNOVER_CR / 360 : TURNOVER_CR / 365;
// MODELLING POSITION ONLY. No wait is published, so the lever needs a "now" to move from.
// 90 keeps every step above the clamp floor. It is never printed as a company figure.
const NOW = 90;

const none = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, null>;
const basis = (over: Partial<SimBasis> = {}): SimBasis => ({
  days: { ...none, cad: NOW, dso: NOW },
  perDay: { ...none, cad: PER_DAY, dso: PER_DAY } as SimBasis["perDay"],
  balances: { ...none },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 8 : 0,
  desks: { ...none },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});
const b = basis(BREAK === 6 ? { days: { dio: NOW, cad: NOW, dso: NOW, dpo: null }, perDay: { dio: PER_DAY, cad: PER_DAY, dso: PER_DAY, dpo: null } } : {});

console.log(`PER DAY = ${TURNOVER_CR} / 365 = ${(TURNOVER_CR / 365).toFixed(6)} Rs Cr (FY25 MGT-7 turnover)`);
console.log("CLAMP BOUNDS READ (terms all null, nothing passed):");
for (const l of leversFor(b)) console.log(`  ${l.key}: now ${l.now} min ${l.min} max ${l.max} target ${l.target}`);
console.log("toTerms (no terms published) =", JSON.stringify(toTerms(b)));

const vod = valueOfADay(PER_DAY, 0);
const rows: { key: LeverKey; step: number; cash: number; carry: number }[] = [];
for (const key of ["dso", "cad"] as LeverKey[]) {
  for (const step of [10, 30]) {
    const r = simulate(b, { [key]: NOW - step });
    const cash = BREAK === 1 ? -r.released : r.released;
    rows.push({ key, step, cash, carry: r.carry });
    console.log(`SIM ${key} ${step} days less: moved ${r.levers.find((l) => l.key === key)!.moved}, released ${cash.toFixed(6)} Cr, carry ${r.carry}`);
    assert.ok(cash >= 0, "A1 no negative release");
    assert.equal(r.carry, 0, "A2 interest is zero");
    const cross = step * (BREAK === 3 ? PER_DAY * 1.01 : PER_DAY);
    assert.ok(Math.abs(cash - cross) < 1e-9, `A3 cross-check ${cash} vs ${cross}`);
  }
}
assert.equal(vod.carry, 0, "A2 valueOfADay carry zero");
assert.ok(Math.abs((vod.cash as number) - TURNOVER_CR / 365) < 1e-12, "A5 basis: valueOfADay equals turnover/365");
assert.ok(Math.abs(PER_DAY - TURNOVER_CR / 365) < 1e-12, "A5 basis: per day is turnover/365");

// A4 payables never release cash: test harness only, vendor terms unpublished (null) so the ceiling is today's figure.
const pb = basis({
  days: { ...none, dpo: 40 } as SimBasis["days"],
  perDay: { ...none, dpo: PER_DAY } as SimBasis["perDay"],
  terms: { certification: null, payment: null, vendor: BREAK === 4 ? 120 : null },
});
const up = simulate(pb, { dpo: 70 });
const down = simulate(pb, { dpo: 10 });
console.log(`PAYABLES TEST (harness, never priced): +30 days -> ${up.released}, -10 days -> ${down.released}`);
assert.ok(up.released <= 0, "A4 stretching payables must not release cash");

// A6 no lever priced on a base it does not belong to: stock and payables are absent from the priced basis.
const keys = leversFor(b).map((l) => l.key).sort().join(",");
console.log("PRICED LEVERS:", keys);
assert.equal(keys, "cad,dso", "A6 only receivable and unbilled legs, on revenue per day");

// Clamp visible: 120 days less on a 90-day modelling position is held at the floor (0).
const clamped = simulate(b, { dso: NOW - 120 });
console.log(`CLAMP CHECK: asked 120 days less, released ${clamped.released.toFixed(6)} (floor 0 holds, = ${(NOW * PER_DAY).toFixed(6)})`);
assert.ok(clamped.released <= NOW * PER_DAY + 1e-9);

console.log("ONE-DAY, 10-DAY, 30-DAY (Rs Cr):", PER_DAY.toFixed(4), (10 * PER_DAY).toFixed(4), (30 * PER_DAY).toFixed(4));
console.log("ROUNDED FOR PRINT:", (10 * PER_DAY).toFixed(2), (30 * PER_DAY).toFixed(2), "per day", PER_DAY.toFixed(2));
console.log("ALL ASSERTS PASSED");
