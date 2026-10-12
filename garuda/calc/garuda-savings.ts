/**
 * Garuda: contract-asset scenarios, run through the app's own simulator.
 * Inputs: FY26 revenue from operations 530.72 Cr and contract assets 218.91 Cr,
 * both standalone FY26 (AR26). No terms passed, no interest.
 * BREAK=1..5 injects one fault per assert to prove each assert fails loudly.
 */
import assert from "node:assert/strict";
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = process.env.BREAK ?? "";

const REVENUE = { value: 530.72, entity: "standalone", fy: "FY26", doc: "AR26 PDF p.113" };
const CONTRACT_ASSETS = {
  value: 218.91,
  entity: BREAK === "5" ? "consolidated" : "standalone",
  fy: "FY26",
  doc: "AR26 PDF p.132 (printed 131, Contract Balances; also PDF p.125, Note 10)",
};

const perDay = REVENUE.value / 365;
const cadDays = CONTRACT_ASSETS.value / perDay;
const ratePct = BREAK === "2" ? 9 : 0; // no interest: no borrowing that released cash would repay

const none = { dio: null, cad: null, dso: null, dpo: null };
const basisOf = (extra?: { dpoDays: number; dpoPerDay: number; vendorTerms: number | null }): SimBasis => ({
  days: { ...none, cad: cadDays, dpo: extra?.dpoDays ?? null },
  perDay: { ...none, cad: perDay, dpo: extra?.dpoPerDay ?? null },
  balances: { ...none, cad: CONTRACT_ASSETS.value },
  terms: { certification: null, payment: null, vendor: extra?.vendorTerms ?? null },
  workingCapital: null,
  ratePct,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const day = valueOfADay(perDay, ratePct);
console.log(`Per day (FY26 revenue 530.72 / 365)      : ${perDay.toFixed(6)} Cr  -> ${perDay.toFixed(2)}`);
console.log(`valueOfADay cash / carry                  : ${day.cash?.toFixed(6)} / ${day.carry}`);
console.log(`Contract asset days (218.91 / per day)    : ${cadDays.toFixed(4)}  -> ${cadDays.toFixed(1)}`);
console.log(`Basis: ${REVENUE.entity} ${REVENUE.fy} (${REVENUE.doc}) vs ${CONTRACT_ASSETS.entity} ${CONTRACT_ASSETS.fy} (${CONTRACT_ASSETS.doc})`);

const base = basisOf();
for (const step of [10, 30]) {
  const sign = BREAK === "1" ? 1 : -1; // BREAK=1 moves the leg the wrong way
  const r = simulate(base, { cad: cadDays + sign * step });
  const lever = r.levers.find((l) => l.key === "cad")!;
  const independent = BREAK === "3" ? (step * REVENUE.value) / 360 : step * (REVENUE.value / 365);
  console.log(`\n-- ${step} days off the contract-asset leg`);
  console.log(`   days ${lever.now.toFixed(2)} -> ${lever.next.toFixed(2)} (moved ${lever.moved.toFixed(2)})`);
  console.log(`   days, one decimal (as printed): ${lever.now.toFixed(1)} -> ${lever.next.toFixed(1)}`);
  console.log(`   cash released (simulate)   : ${r.released.toFixed(6)} Cr  -> ${r.released.toFixed(2)}`);
  console.log(`   independent days x per day : ${independent.toFixed(6)} Cr`);
  console.log(`   share of ${CONTRACT_ASSETS.value} Cr         : ${((r.released / CONTRACT_ASSETS.value) * 100).toFixed(2)}%`);
  console.log(`   interest (carry)           : ${r.carry}`);

  assert.ok(r.released >= 0, `negative release: ${r.released}`);
  assert.equal(r.carry, 0, `interest must be 0, got ${r.carry}`);
  assert.ok(Math.abs(r.released - independent) < 1e-9, `cross-check ${r.released} vs ${independent}`);
}

// Payables never release cash. Test fixture (NOT Garuda data): a payable leg of 30 days at 1 Cr a day,
// asked to stretch 30 days past an unstated ceiling. The simulator must hold it at today.
const fixture = basisOf({ dpoDays: 30, dpoPerDay: 1, vendorTerms: BREAK === "4" ? 60 : null });
const pay = simulate(fixture, { dpo: 60 });
const dpo = pay.levers.find((l) => l.key === "dpo")!;
console.log(`\n-- payables fixture: asked 30 -> 60 days, simulator held at ${dpo.next}, cash ${dpo.cash}`);
assert.ok(dpo.cash <= 0, `payables released cash: ${dpo.cash}`);
assert.equal(dpo.cash, 0, "payables stretch must not move cash with no agreed ceiling");

assert.equal(REVENUE.entity, CONTRACT_ASSETS.entity, "basis mismatch: entity");
assert.equal(REVENUE.fy, CONTRACT_ASSETS.fy, "basis mismatch: year");
console.log("\nALL ASSERTS PASSED");
