/**
 * KHILARI INFRASTRUCTURE (KH-2+3): savings scenarios on the app's own pure functions.
 * Temporary. Copied to crestline-prospects/khilari/calc/ and deleted from the repo.
 *
 * Inputs: CARE Ratings press release 06 Oct 2025, standalone, page 3.
 *   FY25 total operating income Rs 639.86 crore, UNAUDITED in that release.
 *   FY25 days: collection 51, inventory 32, creditors 39 (operating cycle 44).
 *   FY24 days (audited, same release): collection 33, inventory 17. GCA 220 (FY24) and 266 (FY25).
 * Value of a day = FY25 TOI / 365. No interest: the company discloses no rate.
 * No contract terms are passed: none is published, and simulate() would RAISE a
 * leg to a certification window that sat above today's figure.
 *
 * Break any assert on purpose: npx tsx scripts/_tmp-khilari-savings.ts <negative|interest|levers|payables>
 */
import { simulate, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.argv[2] ?? "";
const TOI_FY25 = 639.86; // Rs crore, unaudited, CARE 06 Oct 2025 p3
const PER_DAY = TOI_FY25 / 365;
const RATE_PCT = BREAK === "interest" ? 9 : 0; // no disclosed rate; 9 exists only to break the assert

const DAYS = { collection: 51, inventory: 32, creditors: 39, collectionFY24: 33, inventoryFY24: 17, gcaFY24: 220, gcaFY25: 266 };

const basis = (vendorTerm: number | null): SimBasis => ({
  days: { dio: DAYS.inventory, cad: null, dso: DAYS.collection, dpo: DAYS.creditors },
  perDay: { dio: PER_DAY, cad: null, dso: PER_DAY, dpo: PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: vendorTerm },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const emptyLedger: CashLedgerSummary = {
  months: [], totalIn: 0, totalOut: 0, netTotal: 0, peakFundingNeed: 0, peakFundingLabel: "",
  closingCumulative: 0, totalRaised: 0, totalSettled: 0, stillOnCredit: 0, totalCertified: 0,
  totalCollected: 0, stillAwaiting: 0, bestMonth: { label: "", surplus: 0 }, worstMonth: { label: "", surplus: 0 },
  monthsInSurplus: 0, monthsInDeficit: 0, firstHalfNet: 0, secondHalfNet: 0, halfOverHalfPct: null,
};

const positionWith = (id: "collection" | "material", days: number, value: number): CyclePosition => ({
  deployed: null, clientAdvance: null, otherFunding: null, ownFunds: null,
  cycleDays: null, clientDays: null, otherDays: null, coveredDays: null, reserveDays: null,
  coveredSharePct: null, selfFunded: null, selfFundingDays: null, annualCarry: null,
  actions: [{
    id, title: id === "collection" ? "Take days out of the collection wait" : "Take days out of the inventory period (unbilled work)",
    detail: "", days, value, carrySaved: null, internallyControllable: id === "material", owner: "", confidence: "low",
    measuredAgainst: `CARE ${id === "collection" ? "collection" : "inventory"} period, FY25 unaudited`,
  }],
  removableDays: days, removableValue: value, cycleAfterActions: null, structuralGapDays: null, reachesSelfFunding: null,
});

let failures = 0;
const check = (ok: boolean, what: string) => {
  if (!ok) { failures++; console.log(`ASSERT FAILED: ${what}`); }
};
const cr = (v: number) => v.toFixed(2);

console.log(`Value of a day, FY25 TOI ${TOI_FY25} / 365 (unaudited, CARE 06 Oct 2025 p3): Rs ${cr(PER_DAY)} crore`);
console.log(`Interest rate used: ${RATE_PCT}% (none disclosed; no interest figure)`);
console.log("");

type Scenario = { id: string; label: string; next: Partial<Record<LeverKey, number>>; vendorTerm?: number | null };
const scenarios: Scenario[] = [
  { id: "a", label: "10-day step out of the collection wait (51 to 41)", next: { dso: DAYS.collection - 10 } },
  { id: "b", label: "30-day step out of the collection wait (51 to 21)", next: { dso: DAYS.collection - 30 } },
  { id: "c", label: "Collection period back to FY24's 33 days from FY25's 51 (18 days)", next: { dso: DAYS.collectionFY24 } },
  // CARE's inventory period. CARE attributes the FY25 rise to unbilled revenue; the engine names this slot "Stock on site".
  { id: "e", label: "10-day step out of the inventory period, unbilled work (32 to 22)", next: { dio: DAYS.inventory - 10 } },
  { id: "f", label: "Inventory period back to FY24's 17 days from FY25's 32 (15 days)", next: { dio: DAYS.inventoryFY24 } },
  // Payables probe: try to stretch creditors 39 to 60. With no agreed vendor terms the ceiling is today's figure.
  { id: "p", label: "Payables probe: creditor days 39 to 60, no agreed vendor terms", next: { dpo: 60 } },
];
if (BREAK === "negative") scenarios.push({ id: "x", label: "BREAK: collection wait lengthened 51 to 61", next: { dso: 61 } });
if (BREAK === "payables") scenarios.push({ id: "y", label: "BREAK: creditor days 39 to 60 with a 60-day vendor term passed", next: { dpo: 60 }, vendorTerm: 60 });

for (const s of scenarios) {
  const result = simulate(basis(s.vendorTerm ?? null), s.next);
  const moved = result.levers.filter((l) => Math.abs(l.moved) > 0.001);
  const dso = result.levers.find((l) => l.key === "dso")!;
  const dpo = result.levers.find((l) => l.key === "dpo")!;
  console.log(`(${s.id}) ${s.label}`);
  for (const l of result.levers) {
    console.log(`    ${l.key.padEnd(3)} ${l.label.padEnd(30)} ${String(l.now).padStart(3)} -> ${String(l.next).padStart(3)} days, cash ${cr(l.cash)}`);
  }
  console.log(`    operating cycle (inventory + collection - creditors): ${result.cycle.now} -> ${result.cycle.next} days`);
  console.log(`    cash released once: Rs ${cr(result.released)} crore | interest a year: Rs ${cr(result.carry)} crore`);
  if (moved.length === 0) console.log("    nothing moved: the leg is held at today's figure");

  check(result.released >= 0, `(${s.id}) no negative release, got ${cr(result.released)}`);
  check(result.carry === 0, `(${s.id}) interest equals 0, got ${cr(result.carry)}`);
  check(dpo.cash <= 0, `(${s.id}) payables never release cash, got ${cr(dpo.cash)}`);

  const dio = result.levers.find((l) => l.key === "dio")!;
  for (const [leg, id] of [[dso, "collection"], [dio, "material"]] as const) {
    if (leg.moved >= 0) continue;
    const days = -leg.moved;
    const value = leg.cash + (BREAK === "levers" ? 1 : 0);
    const levers = priceLevers({
      position: positionWith(id, days, value), ledger: emptyLedger, vendors: [], retention: null,
      perDay: PER_DAY, financingRatePct: RATE_PCT, owners: { certification: null, collection: null, material: null },
    });
    const lever = levers.find((l) => l.id === `action-${id}`)!;
    console.log(`    priceLevers: "${lever.label}" cash Rs ${cr(lever.cash ?? NaN)} crore, carry Rs ${cr(lever.carry)} crore, ${lever.days} days`);
    check(Math.abs((lever.cash ?? NaN) - leg.cash) < 1e-9, `(${s.id}) priceLevers cash equals simulate cash, ${cr(lever.cash ?? NaN)} vs ${cr(leg.cash)}`);
    check(lever.carry === 0, `(${s.id}) priceLevers interest equals 0, got ${cr(lever.carry)}`);
  }
  console.log("");
}

// (d) Context only. Gross current asset days are not a simulator leg: GCA holds more
// than receivables, so this is plain days x value of a day and is NOT a release figure.
const gcaDays = DAYS.gcaFY25 - DAYS.gcaFY24;
const gcaValue = gcaDays * PER_DAY;
console.log(`(d) CONTEXT ONLY, not a saving: gross current asset days 266 back to FY24's 220 (${gcaDays} days) x value of a day = Rs ${cr(gcaValue)} crore`);
check(gcaValue >= 0, "(d) no negative figure");
console.log("");

// Cross-checks on the inputs.
check(DAYS.inventory + DAYS.collection - DAYS.creditors === 44, "FY25 operating cycle recomputes to CARE's printed 44");
console.log(`Operating cycle FY25 recomputed: ${DAYS.inventory} + ${DAYS.collection} - ${DAYS.creditors} = ${DAYS.inventory + DAYS.collection - DAYS.creditors} (CARE prints 44)`);
console.log("Rows overlap and are never added: (a), (b) and (c) are three sizes of one move; (e) and (f) are two sizes of another.");
console.log("");

if (failures > 0) {
  console.log(`${failures} ASSERT(S) FAILED`);
  process.exit(1);
}
console.log("ALL ASSERTS PASSED");
