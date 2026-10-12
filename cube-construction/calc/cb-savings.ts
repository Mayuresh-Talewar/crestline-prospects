import assert from "node:assert/strict";
import { simulate, leversFor, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/**
 * CB-S23 Cube Construction Engineering Limited.
 * Basis: FY24 operating revenue Rs 712.18 Cr (CRISIL 2 May 2025, consolidated, Crisil-adjusted,
 * latest ACTUAL year). Per day = 712.18 / 365. Value of a day only; no days bar (CRISIL's FY25
 * days are estimates with no stated basis). No interest. BREAK=1..5 breaks one assert on purpose.
 */
const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 712.18;
const PER_DAY = REVENUE / 365;
const rate = 0; // no borrowing rate is published
const fmt = (n: number) => n.toFixed(2);

const day = valueOfADay(PER_DAY, rate);
console.log(`Basis: FY24 operating revenue ${REVENUE} Cr / 365`);
console.log(`Value of a day: ${PER_DAY.toFixed(6)} Cr (${fmt(PER_DAY)} Cr), carry ${day.carry} (rate ${rate}%)`);

// Mechanics check only: the simulator needs a leg with some days. 100 is an arbitrary
// stand-in used to confirm that moving N days on a leg priced at PER_DAY releases N x PER_DAY.
// It is NOT a Cube figure and is never printed as one.
const basis: SimBasis = {
  days: { dio: null, cad: 100, dso: 100, dpo: 100 },
  perDay: { dio: null, cad: PER_DAY, dso: PER_DAY, dpo: PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: BREAK === 3 ? 150 : null },
  workingCapital: null,
  ratePct: rate,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

console.log("\nScenario (Crestline's arithmetic on the published accounts; Scenario, not a forecast)");
const rows: { days: number; cash: number }[] = [];
for (const d of [10, 30]) {
  const viaSim = simulate(basis, { cad: 100 - d }).released;
  const viaDay = d * (BREAK === 4 ? PER_DAY * 1.01 : PER_DAY);
  const cash = BREAK === 1 ? -viaDay : viaDay;
  assert.ok(cash >= 0, "no negative release");
  assert.ok(Math.abs(viaSim - viaDay) < 1e-9, `cross-check days x per day vs simulate (${d})`);
  const sim = simulate(basis, { cad: 100 - d });
  const carry = BREAK === 2 ? 1 : sim.carry;
  assert.equal(carry, 0, "interest = 0");
  rows.push({ days: d, cash });
  console.log(`${d} days less: ${d} x ${PER_DAY.toFixed(6)} = ${fmt(cash)} Cr released once; simulate ${fmt(viaSim)}; interest ${carry}`);
}
assert.ok(Math.abs(rows[1].cash - 3 * rows[0].cash) < 1e-9, "30 days = 3 x 10 days");

// Payables never release cash: stretching vendor credit with no stated terms is clamped to nothing.
const stretch = simulate(basis, { dpo: 140 }).levers.find((l) => l.key === "dpo")!;
assert.equal(stretch.moved, 0, "dpo with no stated terms cannot move up");
const dpoUp = simulate(basis, { dpo: 200 }).released;
assert.ok(dpoUp <= 0 + 1e-9 && dpoUp >= 0 - 1e-9, "payables never release cash");
console.log(`\nPayables stretched to 200 days with no terms: released ${dpoUp} Cr (clamped, as designed)`);

// Basis check: every priced lever uses the revenue-per-day base. No stock lever (no cost base), no DSO lever.
assert.deepEqual(leversFor(basis).map((l) => l.perDay), BREAK === 5 ? [1, 1, 1] : [PER_DAY, PER_DAY, PER_DAY], "basis matches");
assert.deepEqual(toTerms(basis), {}, "no term is published, so none is invented");
console.log("Clamp bounds read: dso floor = payment term (none published, so 0); cad floor = certification window (none, so 0); dpo ceiling = vendor terms (none, so held at today).");

console.log(`
LEVER TABLE
Lever                         Priced?  Why
Value of a day (revenue)      PRICED   FY24 operating revenue 712.18 Cr / 365 = ${PER_DAY.toFixed(6)} Cr a day; steps of 10 and 30 days
Receivables (DSO)             NOT      CRISIL FY25 estimate (about 130 days), no stated basis, not an audited balance; process map only, never priced
Contract assets / unbilled    NOT      no contract-asset figure published, no certification window published
Retention                     NOT      NOT FOUND: only "a large portion of receivables"; no balance, no release basis
Stock (DIO)                   NOT      about 115 days is an estimate; no materials-consumed or COGS cost base published
Payables (DPO)                NOT      "over 220 days" is a lower bound on an unstated base; no vendor terms published; paying late is never cash released
Combined scenario             NOT      only one priced base; nothing to run together
Ranking (priceLevers)         NOT RUN  one priced base, so nothing to rank; needs positions, ledger and vendors that are not published
Interest                      NONE     no borrowing rate published
`);
console.log("ALL ASSERTS PASSED");
