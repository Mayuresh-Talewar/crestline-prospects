/**
 * Nikhil Constructiongroup savings scenarios. Temp copy, deleted after the run.
 * Inputs (CRISIL 5 Aug 2025, standalone): FY25 operating income Rs 447.15 Cr,
 * gross current assets 275 days at 31 Mar 2025. No split, no interest, no terms.
 * BREAK=neg|int|cross|pay deliberately breaks one assert to prove it fails.
 */
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const REVENUE = 447.15;
const GCA_DAYS = 275;
const PER_DAY = REVENUE / 365;
const BREAK = process.env.BREAK ?? "";

const basis = (over: Partial<SimBasis> = {}): SimBasis => ({
  days: { dio: null, cad: null, dso: GCA_DAYS, dpo: null },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: BREAK === "int" ? 9 : 0, // no interest
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});

let failed = 0;
const check = (name: string, ok: boolean, detail: string) => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "**** FAIL ****"}  ${name}  ${detail}`);
};

const vod = valueOfADay(PER_DAY, 0);
console.log(`Revenue FY25 Rs ${REVENUE} Cr / 365 = Rs ${PER_DAY.toFixed(6)} Cr a day`);
console.log(`valueOfADay cash ${vod.cash?.toFixed(6)}  carry ${vod.carry}`);
console.log(`GCA days ${GCA_DAYS}, receivable leg, no terms (floor 0), no interest\n`);

for (const step of [10, 30]) {
  const r = simulate(basis(), { dso: GCA_DAYS - (BREAK === "neg" ? -step : step) });
  const lever = r.levers[0];
  const expected = step * PER_DAY * (BREAK === "cross" ? 1.01 : 1);
  console.log(`--- ${step} days out: ${lever.now} to ${lever.next} days, cash released Rs ${r.released.toFixed(4)} Cr, carry ${r.carry}`);
  check(`no negative release (${step}d)`, r.released >= 0, `released ${r.released.toFixed(4)}`);
  check(`interest is zero (${step}d)`, r.carry === 0 && vod.carry === 0, `carry ${r.carry}`);
  check(
    `cross-check days x per day (${step}d)`,
    Math.abs(r.released - expected) < 1e-9 && Math.abs(r.released - step * (vod.cash as number)) < 1e-9,
    `simulate ${r.released.toFixed(6)} vs ${expected.toFixed(6)}`,
  );
}

// Payables: no vendor terms passed, so the ceiling is today's figure and a longer wait releases nothing.
const pay = basis({
  days: { dio: null, cad: null, dso: null, dpo: 60 },
  perDay: { dio: null, cad: null, dso: null, dpo: PER_DAY },
  terms: { certification: null, payment: null, vendor: BREAK === "pay" ? 90 : null },
});
for (const to of [0, 30, 60, 90, 200]) {
  const r = simulate(pay, { dpo: to });
  check(`payables never release cash (dpo to ${to})`, r.released <= 0, `released ${r.released.toFixed(4)}`);
}

console.log(failed ? `\n${failed} ASSERT(S) FAILED` : "\nALL ASSERTS PASSED");
process.exit(failed ? 1 : 0);
