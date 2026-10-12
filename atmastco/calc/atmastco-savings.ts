/**
 * AT-S23 Atmastco: value of a day, 10 and 30 day steps, NO days bar, NO interest.
 * Basis: standalone FY26 revenue from operations 292.62 Cr (audited results, 26 May 2026) / 365.
 * The simulator needs a "days now" to run; it is a placeholder (100) that is NEVER printed and
 * never used: cash released = days moved x perDay, independent of it. A single days figure is not used.
 * BREAK=1..5 deliberately breaks assert 1..5.
 */
import { simulate, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const REVENUE = 292.62; // Rs Cr, FY26 standalone
const PER_DAY = REVENUE / 365;
const RATE = 0; // no interest priced
const BREAK = Number(process.env.BREAK ?? 0);
const PLACEHOLDER_NOW = 100; // internal, never printed

const mk = (perDay: number): SimBasis => {
  const days = { dio: null, cad: PLACEHOLDER_NOW, dso: PLACEHOLDER_NOW, dpo: PLACEHOLDER_NOW } as Record<LeverKey, number | null>;
  const pd = { dio: null, cad: perDay, dso: perDay, dpo: perDay } as Record<LeverKey, number | null>;
  const none = { dio: null, cad: null, dso: null, dpo: null };
  return {
    days, perDay: pd, balances: none,
    terms: { certification: null, payment: null, vendor: PLACEHOLDER_NOW }, // vendor ceiling = today: payables cannot stretch
    workingCapital: null, ratePct: RATE,
    desks: none, items: { dio: [], cad: [], dso: [], dpo: [] }, blocked: {},
  };
};

const basis = mk(BREAK === 5 ? PER_DAY * 1.1 : PER_DAY);
const vod = valueOfADay(PER_DAY, RATE);
const fmt = (n: number) => n.toFixed(4);
console.log(`Revenue FY26 standalone ${REVENUE} Cr / 365 = ${fmt(PER_DAY)} Cr per day`);
console.log(`valueOfADay: cash ${fmt(vod.cash as number)} carry ${fmt(vod.carry as number)}`);

for (const days of [10, 30]) {
  for (const key of ["cad", "dso"] as const) {
    const r = simulate(basis, { [key]: PLACEHOLDER_NOW - days });
    const lever = r.levers.find((l) => l.key === key)!;
    const indep = days * PER_DAY;
    console.log(`${days} days on ${key}: released ${fmt(r.released)} Cr, carry ${fmt(r.carry)}, independent ${fmt(indep)}`);
    const released = BREAK === 1 ? -1 : r.released;
    if (!(released >= 0)) throw new Error("ASSERT 1 FAILED: negative release");
    const carry = BREAK === 2 ? 0.5 : r.carry;
    if (carry !== 0) throw new Error("ASSERT 2 FAILED: interest not zero");
    const cross = BREAK === 3 ? indep + 0.1 : indep;
    if (Math.abs(lever.cash - cross) > 1e-9) throw new Error("ASSERT 3 FAILED: simulate vs days x per day");
    if (Math.abs(lever.cash - vod.cash! * days) > 1e-9) throw new Error("ASSERT 3b FAILED: vs valueOfADay");
  }
  // payables: stretching beyond vendor terms must release nothing
  const p = simulate(basis, { dpo: PLACEHOLDER_NOW + days });
  const pay = BREAK === 4 ? 1 : p.levers.find((l) => l.key === "dpo")!.cash;
  console.log(`${days} days of extra vendor credit: cash ${fmt(pay)} (held at ceiling)`);
  if (pay > 0) throw new Error("ASSERT 4 FAILED: payables released cash");
}
// 5: basis matches
if (Math.abs(basis.perDay.dso! - REVENUE / 365) > 1e-12) throw new Error("ASSERT 5 FAILED: basis mismatch");
console.log(`Ten days: ${(10 * PER_DAY).toFixed(2)} Cr once. Thirty days: ${(30 * PER_DAY).toFixed(2)} Cr once. One day: ${PER_DAY.toFixed(2)} Cr. Interest: 0.`);
console.log("ALL ASSERTS PASSED");
