// Balajee Infratech savings calc. Uses the app's own simulate() and valueOfADay().
// Inputs: FY24 total operating income 922.70 Cr (CARE, 23 Apr 2025, audited, standalone),
// adjusted gross current asset days 229 (FY24, same source and basis). No interest (no rate published).
// BREAK=1..4 deliberately breaks one assert so it can be seen to fail.
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const TOI = 922.7;
const GCA_DAYS = 229;
const perDay = TOI / 365;
const day = valueOfADay(perDay, 0); // rate 0: no interest is priced

const basisFor = (dso: number, rate: number, extra?: Partial<SimBasis>): SimBasis => ({
  days: { dio: null, cad: null, dso, dpo: null },
  perDay: { dio: null, cad: null, dso: perDay, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: rate,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...extra,
});

let fails = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) fails++;
};

console.log(`Value of a day = ${TOI} / 365 = ${perDay.toFixed(6)} Cr (valueOfADay.cash = ${day.cash?.toFixed(6)}, carry = ${day.carry})`);
console.log(`Receivable-leg days (adjusted GCA, FY24, CARE) = ${GCA_DAYS}\n`);

const rows: { step: number; cash: number; carry: number; to: number }[] = [];
for (const step of [10, 30]) {
  const sim = simulate(basisFor(GCA_DAYS, 0), { dso: GCA_DAYS - step });
  const lever = sim.levers.find((l) => l.key === "dso")!;
  rows.push({ step, cash: sim.released, carry: sim.carry, to: lever.next });
  console.log(`Step ${step} days: ${GCA_DAYS} to ${lever.next} days, cash released ${sim.released.toFixed(4)} Cr, interest ${sim.carry}`);
}
console.log("");

// Assert 1: no negative release on a shortening
for (const r of rows) check(`no negative release (${r.step}d)`, BREAK === 1 ? r.cash < 0 : r.cash >= 0, `cash=${r.cash.toFixed(4)}`);
// Assert 2: interest is zero
for (const r of rows) check(`interest = 0 (${r.step}d)`, BREAK === 2 ? r.carry !== 0 : r.carry === 0, `carry=${r.carry}`);
// Assert 3: independent cross-check, days x per day, computed here without simulate
for (const r of rows) {
  const indep = (r.step * TOI) / 365 + (BREAK === 3 ? 1 : 0);
  check(`cross-check days x per day (${r.step}d)`, Math.abs(indep - r.cash) < 1e-9, `independent=${indep.toFixed(6)} simulate=${r.cash.toFixed(6)}`);
}
// Assert 4: payables never release cash. Test fixture only (creditor days are not published; 60 is a dummy, never printed).
const dpoBasis = basisFor(GCA_DAYS, 0, {
  days: { dio: null, cad: null, dso: GCA_DAYS, dpo: 60 },
  perDay: { dio: null, cad: null, dso: perDay, dpo: perDay },
});
const later = simulate(dpoBasis, { dpo: BREAK === 4 ? 0 : 120 }); // asked to pay 60 days later
const dpoCash = later.levers.find((l) => l.key === "dpo")!.cash;
check("payables never release cash", BREAK === 4 ? dpoCash > 0 : dpoCash <= 0, `asked 60 to 120, cash=${dpoCash}`);

console.log(`\nBREAK=${BREAK} failures=${fails}`);
if (fails) process.exit(1);
