import { leversFor, simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";

/**
 * GLASS WALL SYSTEMS: what a 10 day and a 30 day step is worth on receivables
 * plus contract assets. Basis: RHP dated 1 Sep 2026, restated consolidated,
 * FY26, Rs million in, Rs crore out. Pure arithmetic, no I/O.
 *
 * ponytail: receivables and contract assets are ONE block here (126.3 days), so
 * they ride on the simulator's single asset leg "dso". The app's own labels are
 * ignored; only its clamp and cash sign convention are used. Split the block if
 * a later ticket needs the two legs priced apart.
 *
 * BREAK=<name> perturbs one input so the matching assert must fail.
 */
const BREAK = process.env.BREAK ?? "";
const Cr = (mn: number) => mn / 10;

// Inputs, each with its page in RHP (printed page = PDF page).
const REVENUE_FY26 = 4569.71; // p84, revenue from operations
const REVENUE_FY25 = 2783.27; // p84 (used only by the BREAK basis test)
const RECEIVABLES = 1089.62; // p38 and p82, trade receivables 31 Mar 2026
const CONTRACT_ASSETS = 491.54; // p369, 31 Mar 2026
const CONTRACT_ASSETS_FY25 = 409.89; // p369 (BREAK basis test only)
const RETENTION = 153.75 + 205.81; // p39, non-current + current (overlaps the block; never added)
const PAYABLES = 655.46; // p38
const PAYABLE_DAYS = 109; // p38, company printed
const PUBLISHED = { receivableDays: 87.0, contractAssetDays: 39.3, blockDays: 126.3 }; // data.md, by script

const perDay = Cr(REVENUE_FY26) / 365; // value of a day, Rs Cr
const caMn = BREAK === "basis" ? CONTRACT_ASSETS_FY25 : CONTRACT_ASSETS;
const balance = Cr(RECEIVABLES) + Cr(caMn);
const blockDays = balance / perDay;

const fails: string[] = [];
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}: ${detail}`);
  if (!ok) fails.push(name);
};
const r2 = (n: number) => n.toFixed(2);

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: blockDays, dpo: PAYABLE_DAYS },
  perDay: { dio: null, cad: null, dso: perDay, dpo: Cr(PAYABLES) / PAYABLE_DAYS },
  balances: { dio: null, cad: null, dso: balance, dpo: Cr(PAYABLES) },
  // No terms passed: the clamp bounds are the simulator's own.
  terms: { certification: null, payment: null, vendor: BREAK === "payables" ? 200 : null },
  workingCapital: null,
  ratePct: BREAK === "interest" ? 8 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

console.log("== Inputs (Rs Cr unless stated)");
console.log(`revenue FY26 ${r2(Cr(REVENUE_FY26))} | per day ${perDay.toFixed(4)} (revenue / 365)`);
console.log(`receivables ${r2(Cr(RECEIVABLES))} + contract assets ${r2(Cr(caMn))} = ${r2(balance)} | ${blockDays.toFixed(2)} days`);
console.log(`retention ${r2(Cr(RETENTION))} (inside or beside the block; shown for reference, never added)`);

console.log("\n== Clamp bounds read from the simulator");
for (const l of leversFor(basis)) console.log(`${l.key}: now ${l.now.toFixed(2)} min ${l.min} max ${l.max.toFixed(2)} target ${l.target}`);
const asset = leversFor(basis).find((l) => l.key === "dso")!;

console.log("\n== Steps on the receivables plus contract assets block");
const steps = [10, 30];
const rows = steps.map((n) => {
  const to = BREAK === "negative" ? blockDays + n : blockDays - n;
  const sim = simulate(basis, { dso: to });
  const cash = sim.levers.find((l) => l.key === "dso")!.cash;
  console.log(`${n} days: ${blockDays.toFixed(1)} -> ${to.toFixed(1)} days | cash released Rs ${r2(cash)} Cr | simulate.released ${r2(sim.released)} | carry ${r2(sim.carry)}`);
  return { n, sim, cash };
});

console.log("\n== Asserts");
for (const { n, sim, cash } of rows) {
  check(`no negative release (${n} days)`, cash >= 0 && sim.released >= 0, `cash ${r2(cash)}, released ${r2(sim.released)}`);
  check(`interest is zero (${n} days)`, sim.carry === 0 && basis.ratePct === 0, `carry ${sim.carry}, rate ${basis.ratePct}`);
  const valueOfADay = Cr(REVENUE_FY26) / (BREAK === "crosscheck" ? 366 : 365);
  const independent = n * valueOfADay;
  check(`cross-check days x valueOfADay vs simulate (${n} days)`, Math.abs(independent - cash) < 1e-9, `${r2(independent)} vs ${r2(cash)}`);
}
// Payables: asking for more vendor credit than today must release nothing.
const payUp = simulate(basis, { dpo: PAYABLE_DAYS + 40 });
const payDown = simulate(basis, { dpo: PAYABLE_DAYS - 10 });
const dpoUp = payUp.levers.find((l) => l.key === "dpo")!;
const dpoDown = payDown.levers.find((l) => l.key === "dpo")!;
check("payables never release cash", dpoUp.cash <= 0 && dpoDown.cash <= 0, `+40 days asked: ${r2(dpoUp.cash)} (max ${dpoUp.max}); -10 days: ${r2(dpoDown.cash)}`);
// Basis match: one per-day, one revenue, block days equal the published figures.
check(
  "basis match",
  Math.abs(balance / perDay - PUBLISHED.blockDays) < 0.05 && Math.abs(Cr(RECEIVABLES) / perDay - PUBLISHED.receivableDays) < 0.05 && Math.abs(Cr(caMn) / perDay - PUBLISHED.contractAssetDays) < 0.05,
  `block ${blockDays.toFixed(2)} vs ${PUBLISHED.blockDays}; receivables ${(Cr(RECEIVABLES) / perDay).toFixed(2)} vs ${PUBLISHED.receivableDays}; contract assets ${(Cr(caMn) / perDay).toFixed(2)} vs ${PUBLISHED.contractAssetDays}`,
);

console.log("\n== Levers ranking (levers.ts, rate 0, retention only)");
const ranked = priceLevers({
  position: { actions: [] } as never,
  ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as never,
  vendors: [],
  retention: Cr(RETENTION),
  perDay,
  financingRatePct: BREAK === "interest" ? 8 : 0,
  owners: { certification: null, collection: null, material: null },
});
for (const l of ranked) console.log(`${l.id}: cash ${r2(l.cash ?? 0)} Cr | carry ${r2(l.carry)} | days ${l.days?.toFixed(1)}`);
check("levers: nothing negative, no interest", ranked.every((l) => (l.cash ?? 0) >= 0 && l.carry === 0), `${ranked.length} lever(s)`);

console.log(fails.length ? `\nFAILED: ${fails.join("; ")}` : "\nALL ASSERTS PASSED");
process.exit(fails.length ? 1 : 0);
