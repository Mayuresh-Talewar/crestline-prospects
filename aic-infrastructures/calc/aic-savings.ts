// AIC Infrastructures Private Limited: savings on the receivable leg (ticket AI-S23).
// Source: CRISIL rationale 13 Feb 2026, standalone, FY25. Operating income 457.07 Cr; receivables 125 days.
// No interest: no borrowing rate is disclosed. Stock days (155) are never priced.
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0); // 1..5 deliberately breaks one assert
const OPERATING_INCOME_CR = 457.07;
const PER_DAY = OPERATING_INCOME_CR / 365;
const DAYS = 125;
const RATE_PCT = 0; // no disclosed rate

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: DAYS, dpo: null },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let fails = 0;
const check = (name: string, ok: boolean) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) fails++;
};

console.log(`Basis: FY25 operating income Rs ${OPERATING_INCOME_CR} Cr, standalone (CRISIL 13 Feb 2026)`);
console.log(`Per day = ${OPERATING_INCOME_CR} / 365 = Rs ${PER_DAY.toFixed(6)} Cr`);
console.log(`Leg: receivable (debtor days ${DAYS}); no interest (rate ${RATE_PCT}%)`);
console.log(`valueOfADay cash = ${valueOfADay(PER_DAY, RATE_PCT).cash?.toFixed(6)} Cr; carry = ${valueOfADay(PER_DAY, RATE_PCT).carry}`);

console.log("\nScenarios (Scenario, not a forecast; rows overlap, never added):");
const rows = [10, 30].map((step) => {
  const r = simulate(basis, { dso: DAYS - step });
  const lever = r.levers[0];
  console.log(
    `  ${step} days less: ${DAYS} -> ${lever.next} days; released Rs ${r.released.toFixed(6)} Cr (${r.released.toFixed(2)}); carry ${r.carry}; moved ${lever.moved}`,
  );
  return { step, r, lever };
});

console.log("\nProcess map and cash cycle chart values:");
console.log(`  Payment received today: ${DAYS} days (CRISIL, FY25)`);
for (const { step, lever, r } of rows)
  console.log(`  With Crestline, ${step} days less: ${lever.next} days; Rs ${r.released.toFixed(2)} Cr released once`);
console.log("  DIO 155 days: stated by CRISIL, never priced, no scenario");

console.log("\nAsserts:");
for (const { step, r, lever } of rows) {
  const released = BREAK === 1 ? -1 : r.released;
  check(`${step}d: no negative release`, released >= 0);
  const carry = BREAK === 2 ? 1 : r.carry;
  check(`${step}d: interest = 0`, carry === 0);
  const independent = BREAK === 3 ? step * PER_DAY + 1 : step * PER_DAY;
  check(`${step}d: cross-check days x per day = simulate (${independent.toFixed(6)})`, Math.abs(independent - r.released) < 1e-9);
  const basisOk = BREAK === 5 ? false : Math.abs(lever.perDay * 365 - OPERATING_INCOME_CR) < 1e-9 && lever.now === DAYS && lever.key === "dso";
  check(`${step}d: basis is receivable at 457.07/365 and 125 days`, basisOk);
}
// no lever priced on a base it does not belong to: only the receivable leg exists, DIO/CAD/DPO have no inputs
const keys = simulate(basis, { dso: 115, dio: 100, cad: 10, dpo: 90 }).levers.map((l) => l.key).join(",");
check("only the dso lever is priced (DIO has no cost base, CAD/DPO no data)", (BREAK === 6 ? "dso,dio" : keys) === "dso");
// payables never release cash: ask a payable leg for more credit than terms allow, and for less
const pay: SimBasis = { ...basis, days: { ...basis.days, dso: null, dpo: 60 }, perDay: { ...basis.perDay, dso: null, dpo: 1 } };
const stretch = simulate(pay, { dpo: 90 });
const tighten = simulate(pay, { dpo: 30 });
const stretchCash = BREAK === 4 ? 5 : stretch.released;
check("payables: stretching past terms releases 0 (clamped)", stretchCash === 0);
check("payables: paying sooner never releases cash", tighten.released <= 0);

console.log(fails ? `\n${fails} FAILED` : "\nALL PASS");
process.exit(fails ? 1 : 0);
