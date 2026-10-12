// Effwa Infra & Research Limited: savings scenarios on the receivable leg.
// Standalone FY26 audited (AR FY26 p.78 balance sheet, p.79 P&L, Rs lakh /100).
// Run: npx tsx scripts/_tmp-ef-savings.ts   (BREAK=<name> flips one assert to prove it fails)
import { simulate, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const REVENUE = 25329.38 / 100; // Rs Cr, revenue from operations FY26
const RECEIVABLES = 12871.06 / 100; // Rs Cr, trade receivables 31 Mar 2026
const PER_DAY = 253.29 / 365; // brief: per day = 253.29 / 365
const DAYS = 185.5; // brief: debtor days, receivables / revenue x 365
const BREAK = process.env.BREAK ?? "";

const NULLS = { dio: null, cad: null, dso: null, dpo: null } as const;
const basis = (over: Partial<SimBasis> = {}, dpo?: { days: number; perDay: number }): SimBasis => ({
  days: { ...NULLS, dso: DAYS, ...(dpo ? { dpo: dpo.days } : {}) },
  perDay: { ...NULLS, dso: PER_DAY, ...(dpo ? { dpo: dpo.perDay } : {}) },
  balances: { ...NULLS, dso: RECEIVABLES },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: 0, // no interest: no borrowing rate published
  desks: { ...NULLS },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});

const fails: string[] = [];
const ok = (name: string, cond: boolean, detail: string) => {
  const pass = BREAK === name ? !cond : cond; // BREAK inverts one assert
  console.log(`${pass ? "PASS" : "FAIL"} ${name}: ${detail}${BREAK === name ? " [deliberately broken]" : ""}`);
  if (!pass) fails.push(name);
};

const dso = leversFor(basis()).find((l) => l.key === "dso")!;
console.log(`Inputs: revenue ${REVENUE.toFixed(2)} Cr, receivables ${RECEIVABLES.toFixed(2)} Cr, per day ${PER_DAY.toFixed(6)} Cr, days ${DAYS}`);
console.log(`Lever bounds (no terms passed): min ${dso.min}, max ${dso.max.toFixed(2)}`);
console.log(`valueOfADay: cash ${valueOfADay(PER_DAY, 0).cash!.toFixed(4)} Cr, carry ${valueOfADay(PER_DAY, 0).carry}`);

for (const step of [10, 30]) {
  const r = simulate(basis(), { dso: DAYS - step });
  const cash = r.levers.find((l) => l.key === "dso")!.cash;
  console.log(`\nStep ${step} days: ${DAYS} -> ${DAYS - step} days; cash released ${cash.toFixed(4)} Cr (${cash.toFixed(2)}); carry ${r.carry}`);
  ok(`nonneg-${step}`, cash >= 0, `release ${cash.toFixed(4)} >= 0`);
  ok("interest", r.carry === 0, `interest ${r.carry}`);
  const indep = step * PER_DAY;
  ok(`crosscheck-${step}`, Math.abs(cash - indep) < 1e-9, `simulate ${cash.toFixed(6)} vs ${step} x per day ${indep.toFixed(6)}`);
  ok("stepvalue", Math.abs(cash - step * valueOfADay(PER_DAY, 0).cash!) < 1e-9, `valueOfADay x ${step}`);
}

// payables never release cash: fixture leg, any target, no vendor terms passed
for (const target of [0, 10, 40, 200]) {
  const r = simulate(basis({}, { days: 40, perDay: 0.5 }), { dpo: target });
  const c = r.levers.find((l) => l.key === "dpo")!.cash;
  ok("payables", c <= 0, `dpo to ${target}: cash ${c.toFixed(2)} <= 0`);
}

// basis: balance equals per day x days within rounding of the 1-decimal day figure
const impliedDays = (RECEIVABLES / REVENUE) * 365;
ok("basis", Math.abs(impliedDays - DAYS) < 0.05 && Math.abs(PER_DAY * DAYS - RECEIVABLES) < 0.05, `receivables/revenue x 365 = ${impliedDays.toFixed(3)}; per day x days = ${(PER_DAY * DAYS).toFixed(3)} vs ${RECEIVABLES.toFixed(2)}`);

if (fails.length) { console.log(`\nFAILED: ${[...new Set(fails)].join(", ")}`); process.exit(1); }
console.log("\nALL ASSERTS PASS");
