import assert from "node:assert/strict";
import { leversFor, simulate, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/*
  DRAIPL (Dineshchandra R. Agrawal Infracon Pvt Ltd), CARE Ratings 2 Apr 2026, FY25.
  Inputs, all from the CARE rationale:
    TOI 7,116 Cr (p1, p3, p4)   debtor days 38 (p3)   inventory days 20 (p3)   GCA days 127 (p1)
  CARE states no day base: 365 is Crestline's arithmetic.
  Not published: stock cost base, vendor terms, client term, certification window,
  contract assets, retention, payables, borrowing rate.
*/
const BREAK = process.env.BREAK ?? "";
const TOI = 7116; // Rs Cr, FY25
const DSO = 38;
const DIO = 20;
const GCA = 127; // never priced, never split
const PER_DAY = BREAK === "3" ? TOI / 360 : TOI / 365; // break 3: wrong day base

const nulls = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, null>;
const empty = { dio: [], cad: [], dso: [], dpo: [] };
const basis = (over: Partial<SimBasis>): SimBasis => ({
  days: { ...nulls },
  perDay: { ...nulls },
  balances: { ...nulls },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === "2" ? 7 : 0, // break 2: an interest rate sneaks in
  desks: { ...nulls },
  items: empty,
  blocked: {},
  ...over,
});

// DSO is the only priceable lever. DIO is carried with NO cost base (perDay null),
// as CARE publishes the days but not the balance or the cost base.
const draipl = basis({
  days: { dio: DIO, cad: null, dso: DSO, dpo: null },
  perDay: { dio: BREAK === "5" ? PER_DAY : null, cad: null, dso: PER_DAY, dpo: null }, // break 5: stock priced at revenue per day
  blocked: { dio: "No stock cost base published", cad: "Contract assets not published", dpo: "Payables and vendor terms not published" },
});

console.log("== DRAIPL calc: CARE 2 Apr 2026, FY25, 365-day arithmetic (CARE states no day base) ==");
console.log(`TOI ${TOI} Cr / 365 = ${PER_DAY.toFixed(4)} Cr per day`);

const levers = leversFor(draipl);
console.log("\nLevers the simulator accepts:", levers.map((l) => l.key).join(", "));
for (const l of levers) console.log(`  ${l.key}: now ${l.now} d, min ${l.min}, max ${l.max}, target ${l.target}, perDay ${l.perDay.toFixed(4)}, side ${l.side}`);
console.log("  clamp bounds read: DSO min is 0 because no client term is published (terms.payment null), so the floor does not protect the scenario; the 10-day step is held by ruling, not by the clamp.");
console.log("  toTerms (needs a stated term):", JSON.stringify(toTerms(draipl)));

// Scenario: DSO 38 -> 28 (10 days). 30 days is NOT run: ruled not credible (38 -> 8).
const ten = simulate(draipl, { dso: DSO - 10 });
const dso = ten.levers.find((l) => l.key === "dso")!;
const released = BREAK === "1" ? -ten.released : ten.released; // break 1: negative release
console.log("\nScenario (not a forecast), DSO 38 -> 28:");
console.log(`  moved ${dso.moved} d, cash released once ${released.toFixed(4)} Cr, carry a year ${ten.carry.toFixed(4)} Cr (no rate)`);
console.log(`  cycle now/next: ${ten.cycle.now}/${ten.cycle.next} (needs DIO, DSO and DPO, so NA)`);

const vod = valueOfADay(PER_DAY, 0);
console.log(`  valueOfADay: cash ${vod.cash?.toFixed(4)} Cr, carry ${vod.carry} Cr`);

// Payables never release cash: ask for more vendor credit with no stated terms.
const dpoBasis = basis({
  days: { dio: null, cad: null, dso: null, dpo: 60 },
  perDay: { dio: null, cad: null, dso: null, dpo: 10 },
  terms: { certification: null, payment: null, vendor: BREAK === "4" ? 90 : null }, // break 4: a vendor term appears
});
const dpoTry = simulate(dpoBasis, { dpo: 200 });
console.log(`\nPayables probe (request 200 days, no terms): released ${dpoTry.released} Cr`);

// ASSERTS
assert.ok(ten.levers.every((l) => l.cash >= 0) && released >= 0, "no negative release");
assert.equal(ten.carry, 0, "interest must be 0");
assert.equal(draipl.ratePct, 0, "interest rate must be 0");
const cross = 10 * (TOI / 365);
assert.ok(Math.abs(released - cross) < 1e-9, `cross-check days x per day vs simulate: ${released} vs ${cross}`);
assert.ok(Math.abs(vod.cash! - TOI / 365) < 1e-12, "valueOfADay matches TOI/365");
assert.equal(dpoTry.released, 0, "payables never release cash");
assert.deepEqual(levers.map((l) => l.key), ["dso"], "no lever priced on a base it does not belong to (DIO has no cost base)");
assert.ok(Math.abs(draipl.perDay.dso! - TOI / 365) < 1e-12, "basis: DSO priced on TOI/365 only");
assert.equal(Math.round(released * 100) / 100, 194.96);
console.log("\nALL ASSERTS PASS. Not priced: DIO (no cost base), GCA (CARE measure, never split), contract assets, retention, DPO (NOT FOUND).");
void GCA;
