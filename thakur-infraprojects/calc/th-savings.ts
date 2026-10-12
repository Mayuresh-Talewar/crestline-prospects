/**
 * Thakur Infraprojects (TH-S23): the savings calc. Infomerics standalone FY24 only.
 * Run: npx tsx scripts/_tmp-th-savings.ts        (BREAK=1..6 deliberately breaks one assert)
 */
import assert from "node:assert/strict";
import { simulate, toTerms, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = Number(process.env.BREAK ?? 0);

// ---- INPUTS (Infomerics 23 Jan 2025, p3 and p5 and p7, standalone FY24, Rs crore) ----
const REVENUE = 736.28;
const DAYS = { dio: 14, dso: 42, dpo: 14 };
const GCA = 194; // Infomerics' own figure, never priced, never added
const RATE = BREAK === 2 ? 5 : 0; // no borrowing rate is published: no interest

const perDayDso = BREAK === 5 ? REVENUE / 360 : REVENUE / 365;
const none: Record<LeverKey, null> = { dio: null, cad: null, dso: null, dpo: null };
const basis: SimBasis = {
  days: { dio: DAYS.dio, cad: null, dso: DAYS.dso, dpo: DAYS.dpo },
  // only DSO has a published base (revenue). DIO has no cost base, DPO has no vendor terms.
  perDay: { ...none, dso: perDayDso, ...(BREAK === 4 || BREAK === 6 ? { dpo: 5 } : {}) },
  balances: { ...none },
  terms: { certification: null, payment: null, vendor: BREAK === 6 ? 30 : null },
  workingCapital: null,
  ratePct: RATE,
  desks: { ...none },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {
    dio: "no cost base published",
    cad: "no contract-asset data",
    dpo: "no vendor terms published",
  },
};

const levers = leversFor(basis);
console.log("levers the simulator can move:", levers.map((l) => `${l.key} now ${l.now} min ${l.min} max ${l.max}`).join("; "));
if (BREAK !== 6) assert.deepEqual(levers.map((l) => l.key).filter((k) => k !== "dso"), [], "only DSO is priced");

const day = valueOfADay(perDayDso, RATE);
console.log(`value of a day: ${perDayDso.toFixed(4)} Cr (736.28 / 365); carry per day at ${RATE}%: ${day.carry}`);

const rows: { label: string; step: number; to: number; cash: number; cycleNow: number | null; cycleNext: number | null; carry: number }[] = [];
for (const step of [10, 30]) {
  const to = DAYS.dso - step;
  const r = simulate(basis, { dso: BREAK === 1 ? DAYS.dso + step : to });
  const dso = r.levers.find((l) => l.key === "dso")!;
  rows.push({ label: `DSO ${step} days less`, step, to: dso.next, cash: r.released, cycleNow: r.cycle.now, cycleNext: r.cycle.next, carry: r.carry });
  console.log(
    `DSO ${DAYS.dso} -> ${dso.next} (${step} days less): released Rs ${r.released.toFixed(4)} Cr once; cycle ${r.cycle.now} -> ${r.cycle.next}; carry ${r.carry}`,
  );
  // asserts
  assert.ok(r.released >= 0, "no negative release");
  assert.equal(r.carry, 0, "interest = 0 (no rate published)");
  const independent = BREAK === 3 ? step * perDayDso * 1.01 : step * (REVENUE / 365);
  assert.ok(Math.abs(r.released - independent) < 1e-9, "cross-check days x per day vs simulate");
  assert.ok(Math.abs(dso.cash - r.released) < 1e-9, "released is the DSO leg alone");
  assert.equal(Math.round(perDayDso * (BREAK === 5 ? 360 : 365) * 100) / 100, REVENUE, "basis: per day x year = FY24 revenue");
  assert.equal(r.cycle.now, DAYS.dio + DAYS.dso - DAYS.dpo, "DIO + DSO - DPO = 42");
}

// payables never release cash: a move of the (disabled) DPO leg changes nothing
const dpoMove = simulate(basis, { dpo: 40 });
assert.ok(dpoMove.released === 0, "payables never release cash");
// to the stated term: none published
assert.deepEqual(toTerms(basis), {}, "no stated term, so no 'to term' scenario");
// clamp: 100 days of DSO is taken to the bound, not beyond
const over = simulate(basis, { dso: 500 }).levers.find((l) => l.key === "dso")!;
console.log(`clamp check: asked 500, taken to ${over.next} (bound ${over.max})`);
assert.ok(over.next <= over.max);

// ranking through priceLevers: one priced lever, no rate, so carry is 0 and ranking is trivial
const ten = rows[0];
const position = {
  actions: [
    { id: "collection", title: "Collect 10 days sooner", value: ten.cash, carrySaved: 0, days: 10, internallyControllable: false, measuredAgainst: "Infomerics DSO 42" },
  ],
} as unknown as CyclePosition;
const ledger = { stillAwaiting: 0 } as unknown as CashLedgerSummary;
const ranked = priceLevers({ position, ledger, vendors: [], retention: null, perDay: perDayDso, financingRatePct: RATE, owners: { certification: null, collection: null, material: null } });
console.log("priceLevers:", ranked.map((l) => `${l.id} cash ${l.cash?.toFixed(4)} carry ${l.carry}`).join("; "));
assert.equal(ranked.length, 1);

console.log("\nSUMMARY (Rs crore, Crestline's arithmetic on the published accounts, scenario not a forecast)");
for (const r of rows) console.log(`${r.label}: DSO 42 -> ${r.to}; cycle 42 -> ${r.cycleNext}; cash released once ${r.cash.toFixed(2)}`);
console.log(`GCA ${GCA} days is Infomerics' own figure: not priced, not added.`);
console.log("ALL ASSERTS PASSED");
