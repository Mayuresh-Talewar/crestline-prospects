/**
 * Jaideepraj Infrastructure (JR-S23). FY24 standalone revenue 401.83 Cr (Infomerics, 21 Feb 2025, p4).
 * No days are published, so only the VALUE OF A DAY is priced. No interest (rate 0).
 * NOTIONAL_NOW is a placeholder opening day-count that exists only so the simulator has a leg
 * to move; it is never printed and the result depends only on the step size.
 * Set BREAK=1..5 to break an assert on purpose.
 */
import { simulate, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const REVENUE_CR = 401.83;
const BREAK = Number(process.env.BREAK ?? 0);
const perDay = REVENUE_CR / 365;
const NOTIONAL_NOW = 100;
const rate = BREAK === 2 ? 9 : 0;

const basis: SimBasis = {
  days: { dio: null, cad: NOTIONAL_NOW, dso: NOTIONAL_NOW, dpo: NOTIONAL_NOW },
  perDay: { dio: null, cad: perDay, dso: perDay, dpo: perDay },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: rate,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const bounds = leversFor(basis).map((l) => `${l.key}: min ${l.min}, max ${l.max}`);
console.log("clamp bounds (terms null):", bounds.join(" | "));
console.log("revenue FY24 (Cr):", REVENUE_CR, "| per day = 401.83 / 365 =", perDay.toFixed(6), "Cr");
const vod = valueOfADay(perDay, 0);
console.log("valueOfADay cash:", vod.cash?.toFixed(6), "carry:", vod.carry);

const out: Record<string, number> = {};
for (const step of [10, 30]) {
  for (const leg of ["cad", "dso"] as const) {
    const r = simulate(basis, { [leg]: NOTIONAL_NOW - step });
    const cash = BREAK === 1 ? -r.released : r.released;
    console.log(`${leg} -${step} days: released ${cash.toFixed(6)} Cr, carry ${r.carry.toFixed(6)} Cr`);
    out[`${leg}${step}`] = cash;
    if (cash < 0) throw new Error(`negative release ${leg} ${step}`);
    if (r.carry !== 0) throw new Error(`interest not zero: ${r.carry}`);
    const expected = step * perDay * (BREAK === 3 ? 1.02 : 1);
    if (Math.abs(cash - expected) > 1e-9) throw new Error(`cross-check failed ${leg} ${step}: ${cash} vs ${expected}`);
    if (Math.abs(cash - step * (vod.cash as number)) > 1e-9) throw new Error("valueOfADay basis mismatch");
  }
}

// payables never release cash: stretching to a later day is clamped at the ceiling (= today, no terms)
const pay = simulate(basis, { dpo: NOTIONAL_NOW + 30 });
const payCash = BREAK === 4 ? 1 : pay.released;
console.log("dpo +30 days requested: released", payCash, "(clamped, no agreed ceiling)");
if (payCash !== 0) throw new Error("payables released cash");
const payEarly = simulate(basis, { dpo: NOTIONAL_NOW - 10 });
if (payEarly.released > 0) throw new Error("paying earlier must never release cash");

// basis: the per-day used is the FY24 figure and nothing else
const basisCheck = BREAK === 5 ? 240.3 / 365 : perDay;
if (Math.abs(basisCheck - 401.83 / 365) > 1e-12) throw new Error("basis mismatch: not FY24 revenue / 365");

console.log("PRINT: per day Rs", perDay.toFixed(2), "Cr | 10 days Rs", out.cad10.toFixed(2), "Cr | 30 days Rs", out.cad30.toFixed(2), "Cr");
console.log("ALL ASSERTS PASSED");
