// CY-S23 Cymetree Projects LLP: value of a day and 10/30-day steps. No interest, no terms.
// Source: CRISIL rationale 31 Jul 2026, FY25 operating income Rs 154.50 crore.
import { simulate, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const REVENUE_FY25 = 154.5; // Rs crore
const PER_DAY = REVENUE_FY25 / 365;
const BREAK = Number(process.env.BREAK ?? 0); // 1..5 deliberately breaks assert n

// Baseline days are a mechanical stand-in (none are published); only the movement is read.
const days = { dio: null, cad: 60, dso: 60, dpo: 60 } as Record<LeverKey, number | null>;
const perDay = { dio: null, cad: PER_DAY, dso: PER_DAY, dpo: PER_DAY } as Record<LeverKey, number | null>;
const basis: SimBasis = {
  days,
  perDay,
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let fails = 0;
const check = (n: number, name: string, ok: boolean, detail: string) => {
  const pass = BREAK === n ? !ok : ok;
  if (!pass) fails++;
  console.log(`${pass ? "PASS" : "FAIL"} ${n} ${name}: ${detail}`);
};

console.log(`Basis: FY25 operating income Rs ${REVENUE_FY25} crore / 365`);
const vod = valueOfADay(PER_DAY, 0);
console.log(`Value of a day: Rs ${vod.cash} crore (carry at 0%: ${vod.carry})`);

for (const leg of ["cad", "dso"] as const) {
  for (const step of [10, 30]) {
    const r = simulate(basis, { [leg]: 60 - step });
    const cash = r.levers.find((l) => l.key === leg)!.cash;
    console.log(`${leg} ${step} days: released Rs ${cash.toFixed(4)} crore, carry ${r.carry}`);
    check(1, `no negative release ${leg} ${step}`, cash >= 0 && r.released >= 0, `${cash}`);
    check(2, `interest zero ${leg} ${step}`, r.carry === 0, `${r.carry}`);
    const indep = (step * REVENUE_FY25) / 365;
    check(3, `cross-check days x per day ${leg} ${step}`, Math.abs(cash - indep + (BREAK === 3 ? 0 : 0)) < 1e-9, `${cash} vs ${indep}`);
    check(5, `basis matches ${leg} ${step}`, Math.abs(r.levers.find((l) => l.key === leg)!.perDay - PER_DAY) < 1e-12, `${PER_DAY}`);
  }
}

// Payables: asking for a longer or shorter vendor day must not release cash (no terms, ceiling = today).
const p = simulate(basis, { dpo: 90 });
check(4, "payables never release cash", p.released <= 0 && p.levers.find((l) => l.key === "dpo")!.cash === 0, `released ${p.released}`);
const p2 = simulate(basis, { dpo: 30 });
check(4, "payables shortened consumes, never releases", p2.released <= 0, `released ${p2.released}`);

const ten = (10 * REVENUE_FY25) / 365;
console.log(`10 days = Rs ${ten.toFixed(2)} crore; 30 days = Rs ${((30 * REVENUE_FY25) / 365).toFixed(2)} crore; day = Rs ${PER_DAY.toFixed(4)} crore`);
if (fails) { console.error(`${fails} FAILED`); process.exit(1); }
console.log("ALL PASS");
