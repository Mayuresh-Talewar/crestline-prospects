// CS-S23: value of a day for C S Construction India, FY23 operating income (CRISIL, 8 Aug 2024).
// No published days: legs carry placeholder days and no terms; only the value of a day matters.
import assert from "node:assert";
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = process.env.BREAK ?? "";
const REVENUE_CR = 186.23; // FY23 operating income, Rs Cr
const PER_DAY = REVENUE_CR / 365;
const RATE_PCT = BREAK === "2" ? 9 : 0; // no interest ruled
const PLACEHOLDER_DAYS = 100; // NOT a published figure; never printed

const basis = (perDay: number): SimBasis => ({
  days: { dio: null, cad: PLACEHOLDER_DAYS, dso: PLACEHOLDER_DAYS, dpo: PLACEHOLDER_DAYS },
  perDay: { dio: null, cad: perDay, dso: perDay, dpo: perDay },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: BREAK === "4" ? 200 : null },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const v = valueOfADay(PER_DAY, RATE_PCT);
console.log(`Basis: FY23 operating income Rs ${REVENUE_CR} Cr / 365`);
console.log(`PER DAY = ${PER_DAY.toFixed(6)} Cr (valueOfADay cash ${v.cash}, carry ${v.carry})`);

for (const leg of ["cad", "dso"] as const) {
  for (const step of [10, 30]) {
    const r = simulate(basis(PER_DAY), { [leg]: PLACEHOLDER_DAYS + (BREAK === "1" ? step : -step) });
    const lever = r.levers.find((l) => l.key === leg)!;
    const cross = step * PER_DAY * (BREAK === "3" ? 1.01 : 1);
    console.log(`${leg} -${step}d: released ${r.released.toFixed(4)} Cr | cross-check ${cross.toFixed(4)} | carry ${r.carry.toFixed(4)} | moved ${lever.moved}`);
    assert(r.released >= 0, "negative release");
    assert.strictEqual(r.carry, 0, "interest must be 0");
    assert(Math.abs(r.released - cross) < 1e-9, "cross-check mismatch");
    assert.strictEqual(r.released.toFixed(2), (step * PER_DAY).toFixed(2));
  }
}

// payables never release cash: stretch vendor credit by 30 days with no terms
const dpoUp = simulate(basis(PER_DAY), { dpo: PLACEHOLDER_DAYS + 30 });
const dpoCash = dpoUp.levers.find((l) => l.key === "dpo")!.cash;
console.log(`dpo +30d: cash ${dpoCash}, released ${dpoUp.released}`);
assert(dpoCash === 0 && dpoUp.released === 0, "payables released cash");

// basis: per day is revenue/365 in Rs Cr, 10d and 30d printed values
const BASIS_PER_DAY = BREAK === "5" ? 186.23 / 366 : 186.23 / 365;
assert(Math.abs(PER_DAY - BASIS_PER_DAY) < 1e-12, "basis mismatch");
console.log(`PRINT: per day Rs ${PER_DAY.toFixed(2)} Cr | 10 days Rs ${(10 * PER_DAY).toFixed(2)} Cr | 30 days Rs ${(30 * PER_DAY).toFixed(2)} Cr`);
console.log("ALL ASSERTS PASSED");
