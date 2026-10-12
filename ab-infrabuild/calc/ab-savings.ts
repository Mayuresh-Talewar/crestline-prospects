import { simulate, leversFor, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay, buildCyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

/**
 * A B Infrabuild Limited, standalone FY26 closing (AR26). Rs Cr.
 * BREAK=1..5 deliberately breaks one assert to prove it fails visibly.
 */
const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 256.2; // 25,620.71 lakh, printed as 256.2
const COST = 233.4579; // cost of construction 23,345.79 lakh (DPO base only)
const PER_DAY = REVENUE / 365;
const COST_PER_DAY = COST / 365;
const DAYS = { cad: 157.5, dso: 148.5, dpo: 69.8 };
const RETENTION = 18.0481; // 1,804.81 lakh, balance only
const RATE = BREAK === 2 ? 5 : 0; // no disclosed borrowing rate

const basis: SimBasis = {
  days: { dio: 0, cad: DAYS.cad, dso: DAYS.dso, dpo: DAYS.dpo }, // dio 0: no stock leg exists
  perDay: {
    dio: null, // no stock, no lever
    cad: PER_DAY,
    dso: BREAK === 5 ? COST_PER_DAY : PER_DAY,
    dpo: COST_PER_DAY,
  },
  balances: { dio: null, cad: 110.5369, dso: 104.2130, dpo: 44.6640 },
  terms: { certification: null, payment: null, vendor: BREAK === 4 ? 100 : null }, // none published
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let failed = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) failed++;
};
const f = (n: number, d = 2) => n.toFixed(d);

console.log(`PER DAY (revenue 256.2 / 365) = ${PER_DAY.toFixed(6)} Cr`);
console.log(`valueOfADay = ${JSON.stringify(valueOfADay(PER_DAY, RATE))}`);
console.log(`levers available: ${leversFor(basis).map((l) => `${l.key}(min ${f(l.min, 1)}, max ${f(l.max, 1)}, target ${l.target})`).join("; ")}`);
console.log(`toTerms (no terms passed) = ${JSON.stringify(toTerms(basis))}`);

const runs: { name: string; move: Partial<Record<LeverKey, number>>; legs: LeverKey[]; days: number }[] = [
  { name: "Contract-asset days, 10 days less", move: { cad: DAYS.cad - 10 }, legs: ["cad"], days: 10 },
  { name: "Contract-asset days, 30 days less", move: { cad: DAYS.cad - 30 }, legs: ["cad"], days: 30 },
  { name: "DSO, 10 days less", move: { dso: DAYS.dso - 10 }, legs: ["dso"], days: 10 },
  { name: "DSO, 30 days less", move: { dso: DAYS.dso - 30 }, legs: ["dso"], days: 30 },
  { name: "COMBINED one run, both legs 10 days less", move: { cad: DAYS.cad - 10, dso: DAYS.dso - 10 }, legs: ["cad", "dso"], days: 20 },
  { name: "COMBINED one run, both legs 30 days less", move: { cad: DAYS.cad - 30, dso: DAYS.dso - 30 }, legs: ["cad", "dso"], days: 60 },
];

console.log("\nSCENARIOS (cash released once, Rs Cr; carry = 0 because no rate)");
const base = simulate(basis, {});
console.log(`opening: cycle(excl. unbilled)=${f(base.cycle.now!, 1)} gap(cash cycle)=${f(base.gap.now!, 1)}`);
for (const r of runs) {
  const s = simulate(basis, r.move);
  const cross = r.days * PER_DAY;
  const released = BREAK === 3 ? s.released + 0.5 : s.released;
  console.log(
    `${r.name}: released ${f(s.released)} Cr | cross-check ${f(cross)} | carry ${f(s.carry)} | cash cycle ${f(s.gap.now!, 1)} -> ${f(s.gap.next!, 1)} | per leg ${s.levers.filter((l) => r.legs.includes(l.key)).map((l) => `${l.key} moved ${f(l.moved, 1)} cash ${f(l.cash)}`).join(", ")}`,
  );
  check(`no negative release: ${r.name}`, (BREAK === 1 ? -1 : s.released) >= 0, `released ${f(s.released)}`);
  check(`interest 0 (no rate): ${r.name}`, s.carry === 0, `carry ${s.carry}`);
  check(`cross-check days x per day: ${r.name}`, Math.abs(released - cross) < 1e-9, `${f(released, 6)} vs ${f(cross, 6)}`);
}

// Payables never release cash: any DPO target, including beyond today's, must never be positive.
const dpoCash = [40, 69.8, 80, 100, 200].map((t) => ({ t, cash: simulate(basis, { dpo: t }).levers.find((l) => l.key === "dpo")!.cash }));
console.log(`\nDPO targets -> cash: ${dpoCash.map((d) => `${d.t}:${f(d.cash)}`).join("  ")}`);
check("payables never release cash", dpoCash.every((d) => d.cash <= 1e-9), `max ${f(Math.max(...dpoCash.map((d) => d.cash)))}`);

// Basis match: each lever on its own base, no stock lever.
const lv = Object.fromEntries(leversFor(basis).map((l) => [l.key, l]));
check("no stock lever (no DIO base)", lv.dio === undefined, `keys ${Object.keys(lv).join(",")}`);
check("cad priced at revenue per day", Math.abs(lv.cad.perDay - PER_DAY) < 1e-12, `${lv.cad.perDay}`);
check("dso priced at revenue per day", Math.abs(lv.dso.perDay - PER_DAY) < 1e-12, `${lv.dso.perDay}`);
check("dpo base is cost, never revenue", Math.abs(lv.dpo.perDay - COST_PER_DAY) < 1e-12 && lv.dpo.perDay !== PER_DAY, `${lv.dpo.perDay}`);
check("balance behind cad within 0.1 Cr of days x per day", Math.abs(lv.cad.balance! - DAYS.cad * PER_DAY) < 0.1, `${f(lv.cad.balance!)} vs ${f(DAYS.cad * PER_DAY)}`);
check("balance behind dso within 0.1 Cr of days x per day", Math.abs(lv.dso.balance! - DAYS.dso * PER_DAY) < 0.1, `${f(lv.dso.balance!)} vs ${f(DAYS.dso * PER_DAY)}`);
check("dpo held at today (no vendor terms)", BREAK === 4 ? lv.dpo.max <= DAYS.dpo : lv.dpo.max === DAYS.dpo, `max ${lv.dpo.max}`);

// Ranking: priceLevers with no terms and no rate. Retention carried as a balance only.
const position = buildCyclePosition({
  deployed: null, clientAdvance: null, otherFunding: null, revenuePerDay: PER_DAY,
  contractAssetDays: DAYS.cad, dso: DAYS.dso, dio: null,
  certificationSlaDays: null, paymentTermDays: null, materialShare: null, financingRatePct: RATE,
});
const ranked = priceLevers({
  position,
  ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary,
  vendors: [], retention: RETENTION, perDay: PER_DAY, financingRatePct: RATE,
  owners: { certification: null, collection: null, material: null },
});
console.log(`\npriceLevers (no terms, no rate): ${ranked.map((l) => `${l.id} cash ${f(l.cash ?? 0)} carry ${f(l.carry)}`).join("; ") || "none"}`);
check("priceLevers prices no term-based action (no terms)", position.actions.length === 0, `actions ${position.actions.length}`);
check("priceLevers carry 0 on every lever", ranked.every((l) => l.carry === 0), "");
console.log(`Retention balance only: Rs ${f(RETENTION)} Cr (release basis not published; the implied days figure from priceLevers is NOT printed)`);

console.log(failed ? `\n${failed} CHECK(S) FAILED` : "\nALL CHECKS PASSED");
process.exit(failed ? 1 : 0);
