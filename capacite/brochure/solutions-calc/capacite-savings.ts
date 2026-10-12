/**
 * SALES-17: Capacite FY26 public figures through Crestline's own PURE maths.
 * Run from the repo root:  npx tsx docs/brochure-capacite/solutions-calc/capacite-savings.ts
 * Units: INR Cr throughout (the functions are unit-agnostic). Consolidated, 31 Mar 2026.
 * Sources: [R] audited results 20 May 2026; [AR26] Annual Report FY26; [IP] Q4 FY26 investor presentation; [T] Q4 FY26 call.
 */
import assert from "node:assert/strict";
import { leversFor, simulate, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

// ---- Inputs (public) -------------------------------------------------------
const revenue = 2622.72; // [R] p.9
const material = 824.27; // material consumed, pack s.2
const costBase = 1853.5; // material + construction exp + traded purchases, pack s.2
const receivables = 1085.0 + 91.81; // [R] p.10
const contractAssets = 1068.34 + 245.15; // [R] p.10
const inventory = 128.89; // [R] p.10
const payables = 909.92; // [R] p.11
const borrowings = 471.77; // [R] p.11
const financeCost = 96.41; // [R] p.9
const RATE = 9.65; // fund-based limits [IP] slide 5; [T] PDF p.8

const perDay = { rev: revenue / 365, mat: material / 365, cost: costBase / 365 };
const days = {
  dio: inventory / perDay.mat,
  cad: contractAssets / perDay.rev,
  dso: receivables / perDay.rev,
  dpo: payables / perDay.cost,
};
const wc = receivables + contractAssets + inventory - payables; // ledger-style WC, ex contract liabilities

const basis = (paymentTerm: number | null): SimBasis => ({
  days,
  perDay: { dio: perDay.mat, cad: perDay.rev, dso: perDay.rev, dpo: perDay.cost },
  balances: { dio: inventory, cad: contractAssets, dso: receivables, dpo: payables },
  // Certification window and vendor terms are NOT public: the app holds those legs.
  terms: { certification: null, payment: paymentTerm, vendor: null },
  workingCapital: wc,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const r1 = (n: number | null) => (n === null ? "NA" : n.toFixed(1));
const row = (label: string, cash: number) => console.log(`${label.padEnd(58)} cash ${r1(cash).padStart(7)} Cr | carry ${r1((cash * RATE) / 100).padStart(5)} Cr/yr`);

console.log("== Opening position (Crestline arithmetic, 365-day, closing balances) ==");
console.log(`days: DIO ${r1(days.dio)} CAD ${r1(days.cad)} DSO ${r1(days.dso)} DPO ${r1(days.dpo)}; cycle ${r1(days.dio + days.dso - days.dpo)}; gap incl CAD ${r1(days.dio + days.dso - days.dpo + days.cad)}`);
console.log(`per day: revenue ${perDay.rev.toFixed(3)} Cr, material ${perDay.mat.toFixed(3)}, cost base ${perDay.cost.toFixed(3)}; WC (ex contract liabilities) ${r1(wc)}`);
const day = valueOfADay(perDay.rev, RATE);
console.log(`valueOfADay(revenue): cash ${day.cash!.toFixed(2)} Cr, carry ${day.carry!.toFixed(3)} Cr/yr`);
console.log(`effective rate check: finance cost / avg borrowings = ${((financeCost / ((borrowings + 416.66) / 2)) * 100).toFixed(1)}% (overstated: includes BG commission + interest on advances, [T] p.8)`);

// ---- (a) contract terms: DSO floor = payment term (AR26 p.158 "45 to 90 days") ----
console.log("\n== (a) To contract terms, app bounds ==");
for (const term of [90, 45]) {
  const b = basis(term);
  const s = simulate(b, toTerms(b));
  row(`DSO ${r1(days.dso)} -> ${term} (toTerms; retention inside, see doc)`, s.released);
}
const held = simulate(basis(90), { dpo: 250, cad: 0 });
console.log(`DPO asked 250: held at ${r1(held.levers.find((l) => l.key === "dpo")!.next)} (no vendor terms = no ceiling, rule 1). CAD asked 0: app floor is certification window; public = none, so NA (not computed)`);
row("P3 all receivables > 6 months (128.18) collected", 128.18);

// ---- (b) their own 90-day WC target (AR26 p.96) ----
console.log("\n== (b) Own target: WC days 152 -> 90 ==");
row("62 days x revenue/day (definition of WC days not disclosed)", 62 * perDay.rev);
const fy27 = revenue * 1.2; // [T] guidance 20% growth
const growthNeed = (d: number) => (d * (fy27 - revenue)) / 365;
console.log(`FY27 at +20% revenue: extra WC at 152 days ${r1(growthNeed(152))} Cr, at 90 days ${r1(growthNeed(90))} Cr, avoided ${r1(growthNeed(152) - growthNeed(90))} Cr`);

// ---- (c) conservative steps ----
console.log("\n== (c) Conservative steps ==");
for (const step of [10, 30]) {
  const s = simulate(basis(null), { cad: days.cad - step, dso: days.dso - step });
  const cad = s.levers.find((l) => l.key === "cad")!.cash;
  const dso = s.levers.find((l) => l.key === "dso")!.cash;
  row(`P1 contract-asset days -${step}`, cad);
  row(`P2 DSO -${step}`, dso);
  row(`P1+P2 together -${step} each`, s.released);
  console.log(`   cycle ${r1(s.cycle.now)} -> ${r1(s.cycle.next)}, gap ${r1(s.gap.now)} -> ${r1(s.gap.next)}, WC ${r1(s.workingCapital.now)} -> ${r1(s.workingCapital.next)}`);
}
row("P3 >6m back to FY25 level (128.18 - 90.43)", 128.18 - 90.43);
row("P3 recover 10% of >6m", 12.818);
row("P3 recover 30% of >6m", 38.454);

// ---- P5: paying closer to terms CONSUMES cash ----
console.log("\n== P5 vendors (rule 1: no release from stretching) ==");
const dpoTen = simulate(basis(null), { dpo: days.dpo - 10 });
row("DPO -10 days (pay 10 days sooner): cash CONSUMED", -dpoTen.released);
row("DPO to 83 (Ahluwalia FY26, pack s.5): cash CONSUMED", (days.dpo - 83) * perDay.cost);

// ---- Levers ranked by the app's own priceLevers (scenario c, 10-day step) ----
const ten = 10 * perDay.rev;
const position = {
  actions: [
    { id: "certification", title: "Certify 10 days sooner", detail: "", days: 10, value: ten, carrySaved: null, internallyControllable: true, owner: "", confidence: "low", measuredAgainst: "illustrative 10-day step" },
    { id: "collection", title: "Collect 10 days sooner", detail: "", days: 10, value: ten, carrySaved: null, internallyControllable: false, owner: "", confidence: "low", measuredAgainst: "illustrative 10-day step" },
  ],
} as unknown as CyclePosition;
const ledger = { stillAwaiting: 0 } as unknown as CashLedgerSummary;
const ranked = priceLevers({ position, ledger, vendors: [], retention: null, perDay: perDay.rev, financingRatePct: RATE, owners: { certification: null, collection: null, material: null } });
console.log("\n== priceLevers (10-day step) ==");
for (const l of ranked) console.log(`${l.label}: cash ${r1(l.cash)} Cr, carry ${r1(l.carry)} Cr/yr, ours=${l.ours}`);

// ---- Checks: fail loudly if the maths or the bounds drift ----
assert.equal(leversFor(basis(null)).length, 4);
assert.ok(Math.abs(simulate(basis(null), { dso: days.dso - 10 }).released - 71.86) < 0.01);
assert.equal(held.levers.find((l) => l.key === "dpo")!.next, days.dpo); // rule 1 holds
assert.ok(Math.abs(simulate(basis(90), { dso: 10 }).levers.find((l) => l.key === "dso")!.next - 90) < 1e-9); // rule 2 holds
console.log("\nchecks passed");
