/**
 * RB Ghodke Infrastructure: savings on the receivable (debtor) leg.
 * Inputs: Acuite 3 Nov 2025, standalone. FY25 operating income Rs 313.50 Cr; debtor days 69.
 * Uses the app's own simulate() and valueOfADay(). No terms passed, no interest.
 * BREAK=1..4 deliberately breaks one assert (proves the asserts can fail).
 */
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 313.5; // Rs Cr, FY25
const DEBTOR_DAYS = 69;
const perDay = REVENUE / 365;
const RATE = BREAK === 1 ? 9 : 0; // no interest

const none = { dio: null, cad: null, dso: null, dpo: null };
const basis = (over: Partial<SimBasis> = {}): SimBasis => ({
  days: { ...none, dso: DEBTOR_DAYS },
  perDay: { ...none, dso: perDay },
  balances: { ...none },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: RATE,
  desks: { ...none },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});

let fails = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "ASSERT FAIL"}  ${name}  ${detail}`);
  if (!ok) fails++;
};

const day = valueOfADay(perDay, RATE);
console.log(`Revenue per day = ${REVENUE} / 365 = ${perDay.toFixed(6)} Cr`);
console.log(`valueOfADay: cash ${day.cash?.toFixed(6)} carry ${day.carry}`);

const bound = simulate(basis(), { dso: 0 }).levers[0];
console.log(`Clamp read from simulate: dso min ${bound.min}, max ${bound.max} (no payment term, so min 0)`);

for (const step of [10, 30]) {
  const to = BREAK === 3 ? DEBTOR_DAYS + step : DEBTOR_DAYS - step;
  const r = simulate(basis(), { dso: to });
  const lev = r.levers.find((l) => l.key === "dso")!;
  const expected = step * perDay * (BREAK === 2 ? 1.05 : 1);
  console.log(`\nStep ${step} days: DSO ${DEBTOR_DAYS} -> ${lev.next}; released ${r.released.toFixed(6)} Cr; carry ${r.carry}`);
  check(`no negative release (${step}d)`, r.released >= 0 && lev.cash >= 0, `released ${r.released.toFixed(6)}`);
  check(`interest is 0 (${step}d)`, r.carry === 0 && day.carry === 0, `carry ${r.carry}`);
  check(
    `cross-check days x per day (${step}d)`,
    Math.abs(r.released - expected) < 1e-9 && Math.abs(r.released - (step * REVENUE) / 365) < 1e-9,
    `simulate ${r.released.toFixed(6)} vs ${expected.toFixed(6)}`,
  );
  console.log(`PRINT  ${step} days = Rs ${r.released.toFixed(2)} Cr`);
}

// Payables never release cash: ask for 30 more vendor-credit days with no vendor terms.
const pay = simulate(
  basis({
    days: { ...none, dso: DEBTOR_DAYS, dpo: 12 },
    perDay: { ...none, dso: perDay, dpo: perDay }, // test-only rate
    terms: { certification: null, payment: null, vendor: BREAK === 4 ? 60 : null },
  }),
  { dpo: 42 },
);
const dpoCash = pay.levers.find((l) => l.key === "dpo")!.cash;
check("payables never release cash", dpoCash === 0 && pay.released === 0, `dpo cash ${dpoCash}`);

if (fails) {
  console.log(`\n${fails} ASSERT(S) FAILED`);
  process.exit(1);
}
console.log("\nALL ASSERTS PASS");
