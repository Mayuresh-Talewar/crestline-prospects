import { simulate, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/**
 * Shri Swami Samarth Engineers Limited: scenario on the receivable leg only.
 * Inputs (Acuite, 6 Jul 2026): operating income FY26 630.37 Cr, debtor days 65.
 * No interest. No terms passed, so the lever floor is 0 and the ceiling is max(1.4x, +30).
 * BREAK=1..4 perturbs one assert's input so each assert is proven to fail visibly.
 */
const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 630.37;
const DEBTOR_DAYS = 65;
const perDay = REVENUE / 365;
let checks = 0;
const ok = (name: string, cond: boolean, detail: string) => {
  checks += 1;
  if (!cond) {
    console.log(`ASSERT FAILED: ${name} :: ${detail}`);
    process.exit(1);
  }
  console.log(`ok  ${name} :: ${detail}`);
};

const basis = (dpo: number | null): SimBasis => ({
  days: { dio: null, cad: null, dso: DEBTOR_DAYS, dpo },
  perDay: { dio: null, cad: null, dso: perDay, dpo: dpo === null ? null : 1 }, // dpo rate is a test fixture, not a company figure
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 9 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const dso = leversFor(basis(null)).find((l) => l.key === "dso")!;
console.log(`receivable lever: now ${dso.now} min ${dso.min} max ${dso.max} perDay ${perDay.toFixed(6)}`);
const day = valueOfADay(perDay, 0);
console.log(`valueOfADay: cash ${day.cash!.toFixed(4)} Cr, carry ${day.carry}`);

for (const step of [10, 30]) {
  const r = simulate(basis(null), { dso: DEBTOR_DAYS - step });
  const lever = r.levers.find((l) => l.key === "dso")!;
  const independent = (BREAK === 3 ? step + 1 : step) * REVENUE / 365;
  console.log(`\nstep ${step}: ${DEBTOR_DAYS} -> ${lever.next} days, cash ${lever.cash.toFixed(4)} Cr, released ${r.released.toFixed(4)} Cr, carry ${r.carry}`);
  ok(`no negative release (${step}d)`, (BREAK === 1 ? -1 : r.released) >= 0, `released ${r.released.toFixed(4)}`);
  ok(`interest = 0 (${step}d)`, r.carry === 0, `carry ${r.carry}`);
  ok(`cross-check days x perDay (${step}d)`, Math.abs(r.released - independent) < 1e-9, `simulate ${r.released.toFixed(6)} vs ${independent.toFixed(6)}`);
  ok(`valueOfADay x days (${step}d)`, Math.abs(day.cash! * step - r.released) < 1e-9, `${(day.cash! * step).toFixed(6)}`);
}

// payables never release cash: ask for a longer payable period; the lever holds at today's figure
const p = simulate(basis(65), { dpo: 200 });
const dpo = p.levers.find((l) => l.key === "dpo")!;
console.log(`\npayables request 200 days -> held at ${dpo.next}, cash ${dpo.cash}`);
ok("payables never release cash", dpo.cash + (BREAK === 4 ? 1 : 0) <= 0 && dpo.next <= dpo.now, `next ${dpo.next} now ${dpo.now} cash ${dpo.cash}`);
console.log(`\nALL ${checks} ASSERTS PASSED`);
