import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/**
 * Active Infrastructures: receivable-leg scenarios on consolidated FY26.
 * Inputs are from the FY26 Annual Report (Rs Cr). No interest: no single disclosed rate.
 * BREAK=<assert name> sabotages that one assert so its failure can be seen.
 */
const BREAK = process.env.BREAK ?? "";

const REVENUE_CR = 96.57; // revenue from operations, consolidated FY26 (AR PDF p136, printed 133)
const REVENUE_LAKH = 9656.65; // same figure, lakh, for the exact debtor-days division
const RECEIVABLES_LAKH = 4993.5; // trade receivables, consolidated 31 Mar 2026 (AR PDF p135, printed 132)
const RECEIVABLES_CR_PRINTED = 49.9;
const RATE_PCT = 0; // no interest is priced

const basisOf = (entity: string, period: string) => ({ entity, period });
const revBasis = basisOf("consolidated", BREAK === "basis" ? "FY25" : "FY26");
const recBasis = basisOf("consolidated", "FY26");

const perDay = REVENUE_CR / 365;
const debtorDays = (RECEIVABLES_LAKH / REVENUE_LAKH) * 365;
const debtorDaysFromCr = RECEIVABLES_CR_PRINTED / perDay;

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: debtorDays, dpo: null },
  perDay: { dio: null, cad: null, dso: perDay, dpo: null },
  balances: { dio: null, cad: null, dso: RECEIVABLES_LAKH / 100, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const fails: string[] = [];
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) fails.push(name);
};

console.log(`per day (Rs Cr) = ${REVENUE_CR} / 365 = ${perDay.toFixed(6)}`);
console.log(`debtor days = ${RECEIVABLES_LAKH} / ${REVENUE_LAKH} x 365 = ${debtorDays.toFixed(2)}  (Crestline arithmetic on the published accounts)`);
console.log(`debtor days from printed Rs ${RECEIVABLES_CR_PRINTED} Cr / per day = ${debtorDaysFromCr.toFixed(2)}  (rounded-input cross-check)`);

const rows: { step: number; cash: number; carry: number; next: number }[] = [];
for (const step of [10, 30]) {
  const r = simulate(basis, { dso: debtorDays - step });
  const lever = r.levers.find((l) => l.key === "dso")!;
  const cash = BREAK === "negative" ? -lever.cash : r.released;
  const carry = BREAK === "interest" ? 0.01 : r.carry;
  rows.push({ step, cash, carry, next: lever.next });
  console.log(`\nstep ${step} days: debtor days ${debtorDays.toFixed(1)} -> ${lever.next.toFixed(1)} | clamp [${lever.min.toFixed(1)}, ${lever.max.toFixed(1)}] | cash released Rs ${cash.toFixed(4)} Cr | carry ${carry}`);
  check(`no negative release (${step}d)`, cash >= 0, `cash ${cash.toFixed(4)}`);
  check(`interest = 0 (${step}d)`, carry === 0, `carry ${carry}`);
  const independent = BREAK === "crosscheck" ? step * perDay * 1.01 : step * perDay;
  check(`cross-check days x per day (${step}d)`, Math.abs(independent - cash) < 1e-9, `${independent.toFixed(6)} vs ${cash.toFixed(6)}`);
  const vd = valueOfADay(perDay, RATE_PCT);
  check(`valueOfADay agrees (${step}d)`, vd.cash !== null && Math.abs(vd.cash * step - cash) < 1e-9 && vd.carry === 0, `${((vd.cash ?? 0) * step).toFixed(6)}`);
}
check("30d = 3 x 10d", Math.abs(rows[1].cash - 3 * rows[0].cash) < 1e-9, `${rows[1].cash.toFixed(4)} vs ${(3 * rows[0].cash).toFixed(4)}`);

// Payables never release cash: a fixture payable leg, no vendor terms, asked to stretch to 200 days.
const payBasis: SimBasis = {
  ...basis,
  days: { ...basis.days, dpo: 50 },
  perDay: { ...basis.perDay, dpo: 1 },
  balances: { ...basis.balances, dpo: 50 },
};
const stretch = simulate(payBasis, { dpo: BREAK === "payables" ? 40 : 200 });
const dpoLever = stretch.levers.find((l) => l.key === "dpo")!;
check("payables never release cash", dpoLever.cash <= 0 && dpoLever.next <= 50 + 1e-9 && dpoLever.cash === 0, `asked 200 days, held at ${dpoLever.next}, cash ${dpoLever.cash}`);
// Payables are not in the Active Infrastructures calc at all: dso only.
check("calc legs = receivable only", simulate(basis, { dso: debtorDays - 10, dpo: 999 }).levers.length === 1, "one lever");

check("basis match (both consolidated FY26)", revBasis.entity === recBasis.entity && revBasis.period === recBasis.period, `${revBasis.entity} ${revBasis.period} vs ${recBasis.entity} ${recBasis.period}`);
check("debtor days = 188.7", debtorDays.toFixed(1) === "188.7", debtorDays.toFixed(2));
check("printed Rs 49.9 Cr matches 4,993.50 lakh", RECEIVABLES_CR_PRINTED === Math.round(RECEIVABLES_LAKH / 10) / 10, `${RECEIVABLES_LAKH / 100}`);

console.log(`\nSUMMARY  per day Rs ${perDay.toFixed(2)} Cr | 10 days Rs ${rows[0].cash.toFixed(2)} Cr | 30 days Rs ${rows[1].cash.toFixed(2)} Cr | interest 0`);
if (fails.length) {
  console.error(`\nFAILED: ${fails.join("; ")}`);
  process.exit(1);
}
console.log("ALL CHECKS PASSED");
