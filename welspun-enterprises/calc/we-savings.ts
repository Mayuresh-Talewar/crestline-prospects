import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/**
 * Welspun Enterprises Limited, CONSOLIDATED FY26 (31 Mar 2026).
 * Inputs: AR FY26 (data.md): revenue from operations 3,615.38 Cr, contract assets 1,318.41 Cr.
 * Both consolidated, both FY26. No interest (no disclosed borrowing rate). No terms passed.
 * BREAK=n (1..5) deliberately corrupts assert n so the failure can be seen.
 */
const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = BREAK === 5 ? 3584 : 3615.38; // 5 = wrong basis (FY25 as first reported)
const CONTRACT_ASSETS = 1318.41;
const RATE = BREAK === 2 ? 7.5 : 0;

const perDay = REVENUE / 365;
const cad = CONTRACT_ASSETS / perDay;
const day = valueOfADay(perDay, RATE);

// Only the unbilled leg is live; the payables leg is a TEST FIXTURE (not Welspun data) to prove it never releases cash.
const basis: SimBasis = {
  days: { dio: null, cad, dso: null, dpo: 100 },
  perDay: { dio: null, cad: perDay, dso: null, dpo: perDay },
  balances: { dio: null, cad: CONTRACT_ASSETS, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let failed = 0;
const check = (n: number, name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"} ${n} ${name}: ${detail}`);
  if (!ok) failed++;
};
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;

console.log("Welspun Enterprises Limited, consolidated, FY26 (year to 31 Mar 2026), INR crore");
console.log(`Revenue from operations ${REVENUE}; contract assets ${CONTRACT_ASSETS}`);
console.log(`Value of a day (revenue / 365) = ${perDay.toFixed(4)} Cr  (valueOfADay.cash = ${day.cash?.toFixed(4)})`);
console.log(`Contract asset days (closing contract assets / value of a day) = ${cad.toFixed(2)}  [Crestline analytical measure, not an accounting standard]`);

const out: Record<number, { cash: number; carry: number; next: number }> = {};
for (const step of [10, 30]) {
  const r = simulate(basis, { cad: cad - step });
  const lever = r.levers.find((l) => l.key === "cad")!;
  out[step] = { cash: r.released, carry: r.carry, next: lever.next };
  console.log(`Step ${step} days on the unbilled leg: ${cad.toFixed(2)} -> ${lever.next.toFixed(2)} days, cash released once = ${r.released.toFixed(4)} Cr, interest a year = ${r.carry}`);
}

check(1, "no negative release", out[10].cash >= 0 && out[30].cash >= 0 && (BREAK !== 1 || false), `10d ${out[10].cash.toFixed(2)}, 30d ${out[30].cash.toFixed(2)}`);
if (BREAK === 1) check(1, "no negative release (probe: step -10 = lengthen)", simulate(basis, { cad: cad + 10 }).released >= 0, "lengthening a wait consumes cash, as it must");

check(2, "interest = 0", out[10].carry === 0 && out[30].carry === 0 && day.carry === 0, `carry 10d ${out[10].carry}, 30d ${out[30].carry}`);

const x10 = 10 * perDay;
const x30 = 30 * perDay;
check(3, "cross-check days x per day vs simulate", near(out[10].cash, BREAK === 3 ? x10 + 1 : x10) && near(out[30].cash, x30), `10d ${x10.toFixed(4)} vs ${out[10].cash.toFixed(4)}; 30d ${x30.toFixed(4)} vs ${out[30].cash.toFixed(4)}`);

const dpoRes = simulate(basis, { dpo: BREAK === 4 ? 200 : 100 + 50 });
const dpo = dpoRes.levers.find((l) => l.key === "dpo")!;
const dpoCash = BREAK === 4 ? dpo.cash + 1 : dpo.cash;
check(4, "payables never release cash", dpoCash <= 0, `requested 150 days of vendor credit, clamped to ${dpo.next}, cash ${dpo.cash}`);

const basisOk = REVENUE === 3615.38 && CONTRACT_ASSETS === 1318.41;
check(5, "basis match (both consolidated FY26)", basisOk, `revenue ${REVENUE}, contract assets ${CONTRACT_ASSETS}`);

console.log(`\nPRINT VALUES: per day ${perDay.toFixed(2)}; CAD ${cad.toFixed(1)}; 10d ${out[10].cash.toFixed(1)} (${out[10].cash.toFixed(2)}); 30d ${out[30].cash.toFixed(1)} (${out[30].cash.toFixed(2)})`);
if (failed) {
  console.log(`\n${failed} CHECK(S) FAILED`);
  process.exit(1);
}
console.log("\nALL CHECKS PASSED");
