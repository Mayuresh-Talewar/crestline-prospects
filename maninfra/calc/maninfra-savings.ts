/**
 * MI-3 Man Infraconstruction Ltd: EPC savings calculator on Crestline's own pure functions.
 * Basis: STANDALONE = single EPC segment (AR FY2025-26 note 4.06(a), p.148).
 * Every input is from maninfra/data.md (audited FY figures, Rs Cr, 31 March).
 * Cash released, once. NO interest/carry: standalone borrowings nil, so rate = 0 passed
 * explicitly (the app reads a stored 0% as 9%; that default must not leak into print).
 * Run: npx tsx scripts/_tmp-maninfra-savings.ts   (copy kept in maninfra/calc/, repo copy deleted)
 */
import assert from "node:assert/strict";
import { simulate, toTerms, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const RATE = 0; // no borrowing, no interest. Never default.
const cr = (n: number) => `Rs ${n.toFixed(1)} Cr`;
const d1 = (n: number) => n.toFixed(1);
const pct = (a: number, b: number) => `${((a / b - 1) * 100).toFixed(1)}%`;
const out: string[] = [];
const say = (s = "") => out.push(s);

// ---- 1. Trend, STANDALONE (EPC segment), FY22..FY26 --------------------------------
const FY = ["FY22", "FY23", "FY24", "FY25", "FY26"];
const rev = [236.6, 797.8, 708.3, 394.7, 285.5519]; // FY26 = 28,555.19 lakh (AR26 p.109), prints as 285.6
const recv = [78.5, 277.1, 67.2, 61.2, 37.9];
const ca = [0, 0.7, 9.2, 0, 11.6];
const ret = [4.2, 61.5, 6.7, 4.2, 3.6];
const pay = [20.3, 107.0, 48.9, 46.1, 18.7];
const cl = [61.2, 71.8, 28.1, 7.3, 74.6];
const inv = [3.0, 1.6, 3.4, 3.0, 1.0];
const cfo = [15.9, 24.8, 230.2, 15.4, 46.8];

say("=== 1. EPC trend, STANDALONE (single EPC segment), Rs Cr, 31 March ===");
say("Source: AR FY22-FY26 standalone statements (pages in data.md s.2). Days are crude: balance / (revenue/365).");
say("Year | Revenue | Receivables | Recv days | Contract assets | CA days | Retention | Payables | Contract liab. | Net trade WC* | CFO");
FY.forEach((y, i) => {
  const pd = rev[i] / 365;
  const net = recv[i] + ca[i] + inv[i] - pay[i] - cl[i];
  say(`${y} | ${d1(rev[i])} | ${d1(recv[i])} | ${(recv[i] / pd).toFixed(0)} | ${d1(ca[i])} | ${(ca[i] / pd).toFixed(1)} | ${d1(ret[i])} | ${d1(pay[i])} | ${d1(cl[i])} | ${d1(net)} | ${d1(cfo[i])}`);
});
say("* Net trade WC = receivables + contract assets + stores - trade payables - contract liabilities (Computed).");
say("  Retention is NOT added: it may sit inside receivables (FY23 retention 61.5 = the non-current receivable line).");
say(`Revenue FY26 vs FY23: ${pct(rev[4], rev[1])}; vs FY25: ${pct(rev[4], rev[3])}`);
say(`Receivables FY26 vs FY23: ${pct(recv[4], recv[1])}`);
const ob = [980, 823, 503, 392, 305];
say(`Order book Mar-23 980+ -> Jun-26 305: ${pct(ob[4], ob[0])} (company presentations; 980 is a floor, '980+')`);
const rp = 6.40;
say(`Related-party receivables FY26 ${cr(rp)} = ${((rp / recv[4]) * 100).toFixed(1)}% of ${cr(recv[4])}; third-party receivables ${cr(recv[4] - rp)}`);
say();

// ---- 2. FY26 basis on the app's SimBasis ------------------------------------------
const perDay = rev[4] / 365; // standalone EPC revenue FY26 / 365
const days: Record<LeverKey, number | null> = {
  dio: null, // stores 1.0 Cr; no consumption rate published -> leg not drawn (rule 3)
  cad: ca[4] / perDay,
  dso: recv[4] / perDay,
  dpo: null, // no cost base or vendor terms published; paying later is never a saving anyway
};
const basis: SimBasis = {
  days,
  perDay: { dio: null, cad: perDay, dso: perDay, dpo: null },
  balances: { dio: inv[4], cad: ca[4], dso: recv[4], dpo: pay[4] },
  terms: { certification: null, payment: null, vendor: null }, // not published in any filing
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {
    dio: "No stores-issue rate published",
    dpo: "No vendor terms published; DPO is never stretched",
  },
};

say("=== 2. FY26 basis (STANDALONE = EPC) ===");
say(`Per day = ${d1(rev[4])} / 365 = Rs ${perDay.toFixed(3)} Cr/day (Rs ${(perDay * 100).toFixed(0)} lakh a day)`);
say(`Receivable days ${d1(days.dso!)} | Contract-asset days ${d1(days.cad!)} (Crestline analytical metric, not GAAP)`);
const levers = leversFor(basis);
say(`Levers the app can draw: ${levers.map((l) => `${l.key} (${l.label})`).join(", ")}`);
const terms = toTerms(basis);
say(`toTerms: ${JSON.stringify(terms)} -> no contract terms are published, so there is no "to terms" scenario.`);
assert.deepEqual(terms, {});

const day = valueOfADay(perDay, RATE);
assert.equal(day.carry, 0, "rate 0 must give zero carry");
say(`Value of one day (valueOfADay, rate 0 passed explicitly): cash ${cr(day.cash!)} once`);
say();

// ---- 3. Scenarios: cash released, once. Rows overlap; never added. -----------------
say("=== 3. Scenarios, cash released ONCE (rows overlap, never added) ===");
const rows: [string, Partial<Record<LeverKey, number>>][] = [
  ["A  Receivables 10 days faster", { dso: days.dso! - 10 }],
  ["B  Contract assets 10 days faster to bill", { cad: days.cad! - 10 }],
  ["C  Receivables 30 days faster", { dso: days.dso! - 30 }],
  ["D  Contract assets 30 days faster (capped at the whole balance)", { cad: days.cad! - 30 }],
];
for (const [name, move] of rows) {
  const r = simulate(basis, move);
  assert.ok(r.released >= 0, `${name}: negative release`);
  for (const l of r.levers) assert.ok(l.cash >= -1e-9, `${name}: lever ${l.key} negative`);
  assert.equal(r.carry, 0, `${name}: carry leaked`);
  const moved = r.levers.filter((l) => Math.abs(l.moved) > 0.01);
  say(`${name}: ${moved.map((l) => `${l.key} ${d1(l.now)} -> ${d1(l.next)} days`).join("; ")} => ${cr(r.released)} cash, once`);
}
{
  const c = simulate(basis, rows[2][1]).released;
  say(`Largest single row C = ${((c / 2220.2) * 100).toFixed(2)}% of standalone total assets (Rs 2,220.2 Cr, AR26 p.108) and ${((c / 557.8) * 100).toFixed(1)}% of standalone cash + bank deposits + current investments (Rs 557.8 Cr).`);
  say(`Row C = ${((c / recv[4]) * 100).toFixed(0)}% of all FY26 receivables; it assumes collection 30 days faster with no published payment term to test it against.`);
}
say();

// ---- 4. priceLevers with rate 0 ----------------------------------------------------
const position = { actions: [] } as unknown as CyclePosition; // no contract terms -> no evidenced cycle actions
const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary; // no event log yet
const priced = priceLevers({
  position, ledger, vendors: [], retention: ret[4], perDay, financingRatePct: RATE,
  owners: { certification: null, collection: null, material: null },
});
say("=== 4. priceLevers (rate 0) ===");
for (const l of priced) {
  assert.equal(l.carry, 0, "carry leaked in priceLevers");
  assert.ok((l.cash ?? 0) >= 0);
  say(`${l.label}: ceiling ${cr(l.cash ?? 0)} = ${d1(l.days ?? 0)} days of revenue. Milestone status NOT published: whole balance is a ceiling, not a claim.`);
}
say();

// ---- 5. Forward illustration (ILLUSTRATIVE) ---------------------------------------
say("=== 5. ILLUSTRATIVE: per Rs 1,000 Cr of new EPC order value ===");
say("Assumes billing spread evenly over the execution period; MD said the current book executes over 3 to 4 years (Q4 FY26 call, 14 May 2026, p.3).");
for (const years of [1, 3, 4]) {
  const v = valueOfADay(1000 / (365 * years), RATE);
  assert.equal(v.carry, 0);
  say(`Executed over ${years} year${years > 1 ? "s" : ""}: each 10 days of billing-to-cash = ${cr(v.cash! * 10)} cash, once`);
}
say("No order of this size is signed: the MD (21 Aug 2026) described one as under negotiation.");
say();
say("Checks passed: no negative release; carry = 0 on every row (rate 0 passed explicitly); no interest printed.");

console.log(out.join("\n"));
