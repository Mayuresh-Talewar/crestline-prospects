// SJ Contracts: value of a day, steps of 10 and 30 days. Scenario arithmetic, not a forecast.
// Run: npx tsx scripts/_tmp-sj-savings.ts      Break-tests: BREAK=neg|interest|cross|payables
import { simulate, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const OPERATING_INCOME_FY24 = 963.4; // Rs cr, standalone, CRISIL 15 Apr 2025
const perDay = OPERATING_INCOME_FY24 / 365;
const BREAK = process.env.BREAK ?? "";

// SJ publishes NO days. The 60 below is a mechanical baseline so the simulator's clamp
// (max = max(days*1.4, days+20), min = 0 with no terms) allows a 30-day step. It is not SJ's number.
const BASE = 60;
const basis = (vendorTerm: number | null): SimBasis => ({
  days: { dio: null, cad: BASE, dso: BASE, dpo: BASE },
  perDay: { dio: null, cad: BREAK === "cross" ? perDay * 1.01 : perDay, dso: perDay, dpo: perDay },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: vendorTerm },
  workingCapital: null,
  ratePct: BREAK === "interest" ? 5 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const fails: string[] = [];
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) fails.push(name);
};
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;

console.log(`Basis: FY24 operating income Rs ${OPERATING_INCOME_FY24} cr / 365 = Rs ${perDay.toFixed(6)} cr per day`);
console.log("No baseline days published: baseline 60 is a calc device only. Interest rate: none (0).");
const vd = valueOfADay(perDay, 0);
console.log(`valueOfADay: cash ${vd.cash!.toFixed(6)}, carry ${vd.carry}\n`);

for (const key of ["cad", "dso"] as LeverKey[]) {
  for (const step of [10, 30]) {
    const sim = simulate(basis(BREAK === "payables" ? 100 : null), { [key]: BASE - (BREAK === "neg" ? -step : step) });
    const lever = sim.levers.find((l) => l.key === key)!;
    const cash = lever.cash;
    console.log(`${key} ${step} days: moved ${lever.moved}, cash ${cash.toFixed(6)}, carry ${sim.carry}`);
    check(`no negative release ${key} ${step}`, cash >= 0 && sim.released >= 0, `cash ${cash.toFixed(4)}`);
    check(`interest zero ${key} ${step}`, sim.carry === 0, `carry ${sim.carry}`);
    check(`cross-check days x per day ${key} ${step}`, near(cash, step * (OPERATING_INCOME_FY24 / 365)), `${cash.toFixed(6)} vs ${(step * OPERATING_INCOME_FY24 / 365).toFixed(6)}`);
    check(`value of a day agrees ${key} ${step}`, near(cash, step * vd.cash!), "valueOfADay");
  }
}

// Payables: asking for 10 more days of vendor credit must release nothing (ceiling = today with no terms).
const p = simulate(basis(BREAK === "payables" ? 100 : null), { dpo: BASE + 10 });
const dpoCash = p.levers.find((l) => l.key === "dpo")!.cash;
console.log(`\ndpo +10 requested: cash ${dpoCash}`);
check("payables never release cash", dpoCash <= 0, `cash ${dpoCash}`);

console.log(`\n10 days = Rs ${(10 * perDay).toFixed(2)} cr; 30 days = Rs ${(30 * perDay).toFixed(2)} cr; per day Rs ${perDay.toFixed(4)} cr`);
if (fails.length) {
  console.error(`\nFAILED: ${fails.join("; ")}`);
  process.exit(1);
}
console.log("ALL ASSERTS PASS");
