/**
 * Arwade Infrastructure Limited (standalone, Rs crore): savings scenarios on the
 * app's own pure functions. Scenarios, never promises. Rows overlap; never add them.
 *
 * Inputs (Infomerics, all standalone, audited FY Apr-Mar):
 *   FY25 total operating income 261.12  (Infomerics 28 Jul 2025 p.5)
 *   FY23 collection period 72 days, FY22 151 (Infomerics 17 May 2023 p.3)
 *   FY24/FY25 collection days: NOT PUBLISHED  -> "back to 72" scenario omitted
 *   Interest rate: NOT PUBLISHED in any rationale -> ratePct 0, no interest printed
 *   Order book 337.90 at 25 Jun 2025, "executed within 12 months" (2025 PR p.3)
 *     -> basis for the per-Rs-100-Cr illustration (100 / 365 per day)
 *
 * Run from the app repo: npx tsx scripts/_tmp-arwade-savings.ts
 */
import assert from "node:assert/strict";
import { leversFor, simulate, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CycleAction, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";
import { priceLevers } from "@/lib/insights/levers";

const REVENUE_FY25 = 261.12;
const FY25_COLLECTION_DAYS: number | null = null; // NOT PUBLISHED
const FY23_COLLECTION_DAYS = 72;
const RATE_PCT = 0; // no disclosed rate
const ORDER_ILLUSTRATION = 100;

const perDay = REVENUE_FY25 / 365;
const r2 = (n: number) => Math.round(n * 100) / 100;

// Today's collection days are NOT PUBLISHED. The release of an N-day step is N x rate,
// independent of the starting level; we prove that by running two placeholders.
function basis(nowDso: number, rate: number): SimBasis {
  const nul = { dio: null, cad: null, dso: null, dpo: null };
  return {
    days: { ...nul, dso: nowDso },
    perDay: { ...nul, dso: rate },
    balances: { ...nul },
    terms: { certification: null, payment: null, vendor: null },
    workingCapital: null,
    ratePct: RATE_PCT,
    desks: { ...nul },
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: {},
  };
}

function step(days: number, rate: number) {
  const runs = [60, 150].map((placeholder) => simulate(basis(placeholder, rate), { dso: placeholder - days }));
  assert.equal(r2(runs[0].released), r2(runs[1].released), "release must not depend on the placeholder");
  const res = runs[0];
  assert.ok(res.released >= 0, "no negative release");
  assert.equal(res.carry, 0, "no interest without a disclosed rate");
  return res.released;
}

const day = valueOfADay(perDay, RATE_PCT);
assert.equal(day.cash, perDay);

// No contract terms published -> toTerms has nothing to bring to terms.
const b = basis(100, perDay);
assert.deepEqual(toTerms(b), {}, "no published terms, so no terms scenario");
assert.equal(leversFor(b).length, 1, "only the collection leg has a rate");

const rows = [10, 30].map((d) => ({ days: d, cash: step(d, perDay) }));

// Same rows through the lever ranker (rate 0 -> carry 0; cash carried through unchanged).
const action = (d: number, cash: number): CycleAction => ({
  id: "collection", title: `${d} days off milestone-to-cash`, detail: "", days: d, value: cash,
  carrySaved: null, internallyControllable: false, owner: "", confidence: "low",
  measuredAgainst: "FY25 revenue per day (Infomerics 28 Jul 2025 p.5)",
});
const position = { actions: rows.map((r) => action(r.days, r.cash)) } as unknown as CyclePosition;
const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
const levers = priceLevers({
  position, ledger, vendors: [], retention: null, perDay, financingRatePct: RATE_PCT,
  owners: { certification: null, collection: null, material: null },
});
for (const l of levers) assert.ok((l.cash ?? 0) >= 0 && l.carry === 0, `lever ${l.id} negative or carries interest`);
rows.forEach((r, i) => assert.equal(r2(levers.find((l) => l.days === r.days)!.cash!), r2(r.cash), `lever ${i} cash mismatch`));

const orderPerDay = ORDER_ILLUSTRATION / 365;
const orderRows = [10, 30].map((d) => ({ days: d, cash: step(d, orderPerDay) }));

const out: string[] = [];
const p = (s = "") => out.push(s);
p("Arwade Infrastructure Limited, standalone, Rs crore. Scenarios, not forecasts. Rows overlap; never add them.");
p(`Inputs: FY25 total operating income ${REVENUE_FY25} (Infomerics 28 Jul 2025 p.5). Per day = ${REVENUE_FY25} / 365 = ${perDay.toFixed(4)} Cr.`);
p(`Value of one day (valueOfADay): cash ${day.cash!.toFixed(4)} Cr; interest: NOT PRINTED (no rate disclosed by Arwade or Infomerics).`);
p("");
p("A. Days off the milestone-to-cash cycle (simulate, collection leg; released is one-off cash):");
for (const r of rows) p(`  ${r.days} days  -> Rs ${r2(r.cash).toFixed(2)} Cr cash, one-off`);
p("");
p(`B. Collection days back to the FY23 level (${FY23_COLLECTION_DAYS} days, Infomerics 17 May 2023 p.3): OMITTED.`);
p(`   FY25 collection days = ${FY25_COLLECTION_DAYS ?? "NOT PUBLISHED"}; no gap can be computed.`);
p("C. Contract terms (toTerms): OMITTED. No payment term or certification window is published.");
p("");
p(`D. ILLUSTRATIVE: per Rs ${ORDER_ILLUSTRATION} Cr of new orders executed over 12 months (basis: 2025 PR p.3 "executed within 12 months"), per day ${orderPerDay.toFixed(4)} Cr:`);
for (const r of orderRows) p(`  ${r.days} days  -> Rs ${r2(r.cash).toFixed(2)} Cr cash, one-off (illustrative)`);
p("");
p(`priceLevers: ${levers.length} levers, every carry 0 (no rate), cash matches simulate. Asserts passed: no negative release, placeholder-independent, no interest.`);
p("");
p("Context (computed from Infomerics figures, for problems.md):");
p(`  Revenue FY25/FY22: ${REVENUE_FY25} / 65.45 = ${(REVENUE_FY25 / 65.45).toFixed(2)}x (2023 PR pp.2-5; 2025 PR p.5)`);
p(`  Rated limits 17 May 2023 -> 28 Jul 2025: 61 -> 152 = ${(152 / 61).toFixed(2)}x; BG 50 -> 122 = ${(122 / 50).toFixed(2)}x; fund-based 11 -> 30 = ${(30 / 11).toFixed(2)}x`);
p(`  Collection period FY22 -> FY23: 151 -> ${FY23_COLLECTION_DAYS} days = ${151 - FY23_COLLECTION_DAYS} days shorter (2023 PR p.3)`);
p("GST: rate is on revenue ex-GST; receivables carry GST, so cash figures are conservative.");
console.log(out.join("\n"));
