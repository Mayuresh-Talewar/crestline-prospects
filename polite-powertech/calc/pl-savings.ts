import { simulate, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/*
 Polite Powertech Limited, DRHP filed 18 Mar 2026, standalone restated, FY25.
 Rs lakh from the DRHP, converted to Rs Cr here. Company days basis is 360.
 BREAK=1..5 deliberately breaks one assert so it can be seen to fail.
*/
const BREAK = Number(process.env.BREAK ?? 0);
const cr = (lakh: number) => lakh / 100;
const REVENUE = cr(15563.01); // p.89
const PURCHASES = cr(11377.37); // p.89 purchases of stock-in-trade
const RETENTION = cr(696.7 + 1781.22); // p.321 note 10 + p.323 note 17
const DSO = 118; // p.126, company stated
const DIO = 23; // p.126, company stated
const TARGET = 100; // p.126, management's own
const RATE = 8.35; // p.395
const CAP = cr(199.06); // p.394, drawn at 30 Sep 2025
const DAYS = BREAK === 5 ? 365 : 360;

const perDayRev = (REVENUE / DAYS) * (BREAK === 3 ? 1.01 : 1);
const perDayPur = (BREAK === 1 ? REVENUE : PURCHASES) / DAYS;

const none = { dio: null, cad: null, dso: null, dpo: null } as Record<LeverKey, null>;
const basis: SimBasis = {
  days: { ...none, dso: DSO, dio: DIO },
  perDay: { ...none, dso: perDayRev, dio: perDayPur },
  balances: { ...none, dso: cr(5085.05), dio: cr(715.4) },
  terms: { certification: null, payment: null, vendor: null }, // pass no terms
  workingCapital: null,
  ratePct: RATE,
  desks: { ...none },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const f = (n: number, d = 2) => n.toFixed(d);
const carryCapped = (cash: number) => (BREAK === 2 ? (cash * RATE) / 100 : (Math.min(Math.max(cash, 0), CAP) * RATE) / 100);

console.log("INPUTS (Rs Cr unless stated)");
console.log(`revenue FY25 ${f(REVENUE, 4)} | purchases FY25 ${f(PURCHASES, 4)} | retention ${f(RETENTION, 4)} | basis ${DAYS} days`);
console.log(`value of a day (revenue/${DAYS}) ${f(perDayRev, 5)} Cr | purchases per day ${f(perDayPur, 5)} Cr`);
const vod = valueOfADay(perDayRev, RATE);
console.log(`valueOfADay: cash ${f(vod.cash!, 5)} Cr, uncapped carry ${f(vod.carry!, 5)} Cr a year (NOT printed: the rate is capped at the ${f(CAP)} Cr drawn)`);

console.log("\nCLAMP BOUNDS (leversFor, no terms)");
const specs = leversFor(basis);
for (const s of specs) console.log(`${s.key}: now ${s.now} min ${s.min} max ${s.max} target ${s.target}`);
const dso = specs.find((s) => s.key === "dso")!;
const dio = specs.find((s) => s.key === "dio")!;
console.log(`levers present: ${specs.map((s) => s.key).join(", ")} (cad and dpo have no days, so not drawn)`);
// clamps do not bite on the requested moves
if (!(dso.min <= TARGET && DSO - 10 <= dso.max && dio.min <= DIO - 10)) throw new Error("clamp bites");
console.log("No clamp applies: 108 and 100 sit inside [0, " + f(dso.max, 1) + "] for receivables, 13 inside [0, " + f(dio.max, 1) + "] for stock.");

type Row = { name: string; cash: number; carry: number; days: number };
const rows: Row[] = [];
const run = (name: string, next: Partial<Record<LeverKey, number>>) => {
  const r = simulate(basis, next);
  const carry = carryCapped(r.released);
  rows.push({ name, cash: r.released, carry, days: Object.keys(next).length });
  console.log(`\n${name}\n  released once ${f(r.released, 4)} Cr | carry saved a year ${f(carry, 4)} Cr (= min(cash, ${f(CAP)}) x ${RATE}%) | simulator uncapped carry ${f(r.carry, 4)} (not printed)`);
  for (const l of r.levers) if (Math.abs(l.moved) > 0) console.log(`  ${l.key}: ${l.now} -> ${l.next} (${f(l.moved, 0)} days) cash ${f(l.cash, 4)} Cr`);
  return r;
};

const a = run("Collection, 118 to 108 (10 days)", { dso: BREAK === 6 ? DSO + 12 : DSO - 10 });
const b = run("Collection, 118 to 100 (management's own target, 18 days)", { dso: TARGET });
const c = run("Stock, 23 to 13 (10 days, at purchases per day)", { dio: DIO - 10 });
const d = run("COMBINED one run: collection to 108 and stock to 13", { dso: DSO - 10, dio: DIO - 10 });

console.log("\nRETENTION: balance only " + f(RETENTION, 4) + " Cr. Release is after the defect liability period (typically 1 to 2 years) or against a bank guarantee (p.244). No speed assumed, not priced.");

// payables never release cash: no terms published, so the lever is not drawn and cannot move
const payBasis: SimBasis = {
  ...basis,
  days: { ...none, dpo: 100 }, // synthetic test value, not a company figure
  perDay: { ...none, dpo: PURCHASES / DAYS },
  terms: { certification: null, payment: null, vendor: BREAK === 4 ? 150 : null },
};
const pay = simulate(payBasis, { dpo: 200 });
console.log(`\nPAYABLES test (no terms): asked to move 100 -> 200, simulator holds ${pay.levers[0].next}, cash ${f(pay.released, 4)}`);

// ranking: priceLevers needs a built position and vendor ledger, so rank on the same key, cash released once
const ranked = [...rows.filter((r) => !r.name.startsWith("COMBINED"))].sort((x, y) => y.cash - x.cash);
console.log("\nRANKING (cash released once; carry is equal under the cap)");
ranked.forEach((r, i) => console.log(`${i + 1}. ${r.name}: ${f(r.cash, 2)} Cr`));

// ASSERTS
const eq = (x: number, y: number, m: string) => { if (Math.abs(x - y) > 1e-9) throw new Error("ASSERT FAILED: " + m + ` (${x} vs ${y})`); };
for (const r of rows) if (r.cash < 0) throw new Error("ASSERT FAILED: negative release " + r.name);
for (const r of rows) {
  const want = (Math.min(r.cash, CAP) * RATE) / 100;
  eq(r.carry, want, "interest = min(cash, 1.99) x 8.35%");
  if (r.carry > (CAP * RATE) / 100 + 1e-12) throw new Error("ASSERT FAILED: interest above cap");
}
eq(a.released, 10 * (15563.01 / 100 / 360), "cross-check collection 10 days x revenue per day");
eq(b.released, 18 * (15563.01 / 100 / 360), "cross-check collection 18 days");
eq(c.released, 10 * (11377.37 / 100 / 360), "cross-check stock 10 days x purchases per day (not revenue)");
eq(d.released, a.released + c.released, "combined run equals its two legs moved together");
if (pay.released !== 0) throw new Error("ASSERT FAILED: payables released cash without a term");
if (DAYS !== 360) throw new Error("ASSERT FAILED: basis is not 360");
if (specs.some((s) => s.key === "cad" || s.key === "dpo")) throw new Error("ASSERT FAILED: lever priced without a base");
console.log("\nALL ASSERTS PASSED");
