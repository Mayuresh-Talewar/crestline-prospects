// HN-S23: HNB Engineers, receivable leg, 412 GCA days, 10 and 30 day steps. No interest.
import { simulate, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0); // 1..5 deliberately breaks one assert
const INCOME_CR = 221.53; // CRISIL 1 Oct 2025, FY25 operating income
const PER_DAY = INCOME_CR / 365;
const DAYS = 412; // CRISIL GCA days, 31 Mar 2025
const RATE_PCT = 0; // no disclosed rate

const nul: Record<LeverKey, null> = { dio: null, cad: null, dso: null, dpo: null };
const basis = (over: Partial<SimBasis> = {}): SimBasis => ({
  days: { ...nul, dso: DAYS },
  perDay: { ...nul, dso: PER_DAY },
  balances: { ...nul },
  terms: { certification: null, payment: null, vendor: null }, // pass no terms
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { ...nul },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});

const v = valueOfADay(PER_DAY, RATE_PCT);
console.log(`per day Rs ${PER_DAY.toFixed(6)} Cr (221.53 / 365); valueOfADay cash ${v.cash}, carry ${v.carry}`);
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
const ok = (c: boolean, m: string) => { if (!c) { console.error("ASSERT FAILED: " + m); process.exit(1); } };

for (const step of [10, 30]) {
  const r = simulate(basis(), { dso: DAYS - step });
  const lever = r.levers[0];
  const cash = r.released;
  console.log(`step ${step}: ${DAYS} -> ${lever.next} days; released Rs ${cash.toFixed(4)} Cr; carry ${r.carry}; basis ${lever.key}; levers ${r.levers.length}`);
  ok(cash >= (BREAK === 1 ? 1e9 : 0), "no negative release");
  ok(r.carry === (BREAK === 2 ? 1 : 0), "interest = 0");
  ok(near(cash, step * PER_DAY + (BREAK === 3 ? 0.5 : 0)), "cross-check days x per day vs simulate");
  ok(lever.key === (BREAK === 5 ? "dpo" : "dso") && r.levers.length === 1, "basis is the receivable leg only");
}

// payables never release cash: stretching vendor credit with no terms must hold at today's figure
const p = simulate(basis({ days: { ...nul, dpo: 60 }, perDay: { ...nul, dpo: PER_DAY } }), { dpo: 120 });
console.log(`payables stretch 60 -> 120 requested: next ${p.levers[0].next}, released ${p.released}`);
ok(BREAK === 4 ? p.released > 0 || true && 1 === 2 : p.released <= 0 && p.levers[0].next === 60, "payables never release cash");
console.log("ALL ASSERTS PASS");
