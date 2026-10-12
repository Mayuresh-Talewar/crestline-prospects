import "./env";
import assert from "node:assert/strict";
import { leversFor, simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";

// R K Chavan Infrastructure: CRISIL 30 Jun 2026. Standalone-style "Crisil adjusted" figures.
// RK_BREAK=<name> corrupts ONE input to prove the matching assert can fail.
const BREAK = process.env.RK_BREAK ?? "";
const INCOME_FY25 = 524.35; // Rs Cr, operating income, March 2025 column
const GCA_DAYS = 250; // gross current assets, days, 31 Mar 2026 (CRISIL estimate); no split published
const RATE_PCT = 0; // no borrowing rate is disclosed, so no interest is priced
const income = BREAK === "basis" ? 700 : INCOME_FY25; // FY26 estimate must never be an input
const perDay = income / 365;

const basis: SimBasis = {
  days: { dio: null, cad: GCA_DAYS, dso: null, dpo: null },
  perDay: { dio: null, cad: perDay, dso: null, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: BREAK === "interest" ? 9 : RATE_PCT,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const [lever] = leversFor(basis);
// basis match: per-day rate is FY25 income over 365, and the FY26 estimate (700) is never an input
assert.equal(income, INCOME_FY25, "per-day must use FY25 operating income 524.35");
assert.ok(Math.abs(lever.perDay - INCOME_FY25 / 365) < 1e-12, "lever rate equals 524.35/365");
console.log(`clamp bounds on the lever (no terms passed): min ${lever.min}, max ${lever.max}, now ${lever.now}`);
console.log(`value of a day: ${income} / 365 = ${perDay.toFixed(6)} Rs Cr`);

// independent cross-check: exact rational arithmetic in paise, no floats
const exactCr = (days: bigint) => Number((days * 52435n * 1_000_000n) / 365n) / 1e8; // days*Rs524.35Cr/365, 6dp then Cr
const rows = [10, 30].map((step) => {
  const r = simulate(basis, { cad: GCA_DAYS - step });
  const cash = BREAK === "negative" ? -r.levers[0].cash : r.levers[0].cash;
  return { step, to: r.levers[0].next, cash: BREAK === "cross" ? cash + 0.1 : cash, carry: r.carry };
});

// the levers module, fed the same release at a 0% rate
const priced = rows.map((r) =>
  priceLevers({
    position: {
      actions: [
        { id: "certification", title: `Take ${r.step} days out`, detail: "", days: r.step, value: r.cash, carrySaved: null, internallyControllable: false, owner: "", confidence: "low", measuredAgainst: "gross current asset days" },
      ],
    } as never,
    ledger: { stillAwaiting: 0 } as never,
    vendors: [],
    retention: null,
    perDay,
    financingRatePct: BREAK === "interest" ? 9 : RATE_PCT,
    owners: { certification: null, collection: null, material: null },
  })[0],
);

for (const [i, r] of rows.entries()) {
  console.log(`${r.step}-day step: ${GCA_DAYS} -> ${r.to} days, cash released once Rs ${r.cash.toFixed(4)} Cr, carry ${r.carry}, lever carry ${priced[i].carry}`);
  assert.ok(r.cash >= 0, `no negative release (${r.cash})`);
  assert.equal(r.carry, 0, "interest must be 0");
  assert.equal(priced[i].carry, 0, "lever interest must be 0");
  assert.ok(Math.abs(r.cash - exactCr(BigInt(r.step))) < 1e-6, `cross-check ${r.cash} vs ${exactCr(BigInt(r.step))}`);
}
console.log(`independent exact check: 10 days ${exactCr(10n)}, 30 days ${exactCr(30n)}`);

// payables never release cash: a basis WITH a payable leg and no vendor terms is held at today's figure
const withDpo: SimBasis = { ...basis, days: { ...basis.days, dpo: 60 }, perDay: { ...basis.perDay, dpo: perDay } };
const dpoRun = simulate(withDpo, { dpo: 100 }).levers.find((l) => l.key === "dpo")!;
const dpoCash = BREAK === "payables" ? 1 : dpoRun.cash;
console.log(`payables asked to stretch 60 -> 100 days: lands at ${dpoRun.next}, cash ${dpoCash}`);
assert.equal(dpoCash, 0, "stretching payables must release nothing");

console.log("PASS: no negative release, interest 0, cross-check, payables 0, basis match");
