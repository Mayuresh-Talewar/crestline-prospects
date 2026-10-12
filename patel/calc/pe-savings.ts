/**
 * PE-4 savings calc, Patel Engineering. Rs crore. Every row is priced on ONE basis:
 *   NWC days (company stated, CONSOLIDATED)  x CONSOLIDATED revenue per day, cap = CONSOLIDATED cash credit + WCDL
 *   receivable days (computed, STANDALONE)   x STANDALONE revenue per day,   cap = STANDALONE cash credit + WCDL
 *   retention (CFO on the call, the call's NWC basis is CONSOLIDATED) x CONSOLIDATED revenue per day
 * Runs the app's own pure functions. Temp file: copied to patel/calc/ and deleted.
 *   npx tsx scripts/_tmp-patel-savings.ts          clean run
 *   BREAK=1..5 npx tsx scripts/_tmp-patel-savings.ts   breaks one assert on purpose
 */
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";

const BREAK = Number(process.env.BREAK ?? 0);

// ---- inputs (each traced in calc/notes.md; every one read on its page image in PE-4) ----
const REV_CONS_MN = 51027.42; // R4Q26 PDF p20, consolidated, year ended 31 Mar 2026, filed 14 May 2026
const REV_SA_MN = 50665.64; // R4Q26 PDF p9, standalone, same year
const CC_CONS_MN = 7358.58; // AR26 PDF p87, printed p146, consolidated note 23 "Loans repayable on demand, From bank" (cash credit + WCDL)
const CC_SA_MN = 7358.58; // AR26 PDF p125, printed p223, standalone note 23, same line
const RATES = [9.9, 12.35]; // cash credit 9.90% to 12.35% p.a.: AR26 PDF p87 printed p147 (consolidated) and PDF p126 printed p224 (standalone)
const NWC_DAYS = { fy26: 120, q1fy27: 137 }; // CONSOLIDATED, company stated: D4Q26 slide 36, D1Q27 slide 14
const REC_DAYS_FY26 = 58.6; // computed standalone, src/pe-calc-output.txt
const PAYABLE_DAYS_FY26 = 203.3; // computed standalone, src/pe-calc-output.txt
const RETENTION = [200, 250]; // CFO, T1Q27 PDF p15, call 11 Aug 2026
const STEPS = [10, 30];

const cr = (mn: number) => mn / 10;
const perDayCons = cr(REV_CONS_MN) / 365;
const perDaySa = cr(REV_SA_MN) / 365;
const capCons = cr(CC_CONS_MN);
const capSa = cr(CC_SA_MN);
const r2 = (n: number) => n.toFixed(2);

// One-leg basis. NO terms passed: the clamp bounds are then min 0 / max now*1.4 on asset legs
// and max = now on the payable leg (held, never stretched).
const basis = (leg: "dso" | "dpo", days: number, perDay: number): SimBasis => ({
  days: { dio: null, cad: null, dso: leg === "dso" ? days : null, dpo: leg === "dpo" ? days : null },
  perDay: { dio: null, cad: null, dso: leg === "dso" ? perDay : null, dpo: leg === "dpo" ? perDay : null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATES[0],
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const fail: string[] = [];
const check = (name: string, ok: boolean) => {
  console.log(`assert ${ok ? "PASS" : "FAIL"}: ${name}`);
  if (!ok) fail.push(name);
};

type Row = { label: string; step: number; cash: number; interest: number[]; cap: number; perDay: number; revMn: number };
const price = (label: string, step: number, from: number, perDay: number, cap: number, revMn: number): Row => {
  const sim = simulate(basis("dso", from, perDay), { dso: from - step });
  let cash = sim.released;
  if (BREAK === 1) cash = -cash; // sabotage: negative release
  const base = Math.min(cash, cap);
  let interest = RATES.map((rate) => (base * rate) / 100);
  if (BREAK === 2) interest = [(base * 11) / 100, interest[1]]; // sabotage: a mid rate
  return { label, step, cash, interest, cap, perDay, revMn };
};
const show = (row: Row, line: string) => {
  console.log(line);
  console.log(`  cash released once Cr: ${r2(row.cash)}`);
  console.log(`  interest a year at 9.90% / 12.35%, if it repays cash credit Cr: ${r2(row.interest[0])} / ${r2(row.interest[1])} (cap Cr ${r2(row.cap)}, binds: ${row.cash > row.cap})`);
};

console.log("=== VALUE OF A DAY ===");
console.log(`FY26 CONSOLIDATED revenue Cr: ${r2(cr(REV_CONS_MN))}; one day (revenue / 365) Cr: ${r2(perDayCons)}`);
console.log(`FY26 STANDALONE revenue Cr: ${r2(cr(REV_SA_MN))}; one day (revenue / 365) Cr: ${r2(perDaySa)}`);
console.log(`Cash credit + WCDL drawn, 31 Mar 2026 (interest cap) Cr: consolidated ${r2(capCons)}, standalone ${r2(capSa)}`);

console.log("\n=== STEPS ON NWC DAYS (CONSOLIDATED days, CONSOLIDATED revenue, CONSOLIDATED cap) ===");
const nwcRows = STEPS.map((step) => {
  const perDay = BREAK === 5 ? perDaySa : perDayCons; // sabotage: the old basis mix
  const row = price("nwc", step, NWC_DAYS.q1fy27, perDay, capCons, REV_CONS_MN);
  show(row, `${step}-day step: NWC ${NWC_DAYS.q1fy27} -> ${NWC_DAYS.q1fy27 - step} days (from FY26 ${NWC_DAYS.fy26}: ${NWC_DAYS.fy26 - step})`);
  return row;
});

console.log("\n=== STEP ON RECEIVABLE DAYS (STANDALONE days, STANDALONE revenue, STANDALONE cap) ===");
const recRow = price("receivable", 10, REC_DAYS_FY26, perDaySa, capSa, REV_SA_MN);
show(recRow, `10-day step: receivable days ${REC_DAYS_FY26} -> ${r2(REC_DAYS_FY26 - 10)}`);
console.log(`  (30-day step not drawn: ${r2(REC_DAYS_FY26 - 30)} days is below the CFO's 40 to 45)`);

console.log("\n=== RETENTION (CFO's words) in days of CONSOLIDATED revenue, via priceLevers ===");
for (const amount of RETENTION) {
  const levers = priceLevers({
    position: { actions: [] } as never,
    ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as never,
    vendors: [],
    retention: amount,
    perDay: perDayCons,
    financingRatePct: RATES[0],
    owners: { certification: null, collection: null, material: null },
  });
  const days = levers.find((lever) => lever.id === "release-retention")?.days ?? NaN;
  console.log(`Retention Rs ${amount} Cr = ${days.toFixed(1)} days of FY26 consolidated revenue; less a 10-day step: ${(days - 10).toFixed(1)} days`);
}
console.log(`A 10-day step on retention is the 10-day NWC row above: Rs ${r2(nwcRows[0].cash)} Cr once`);

console.log("\n=== PAYABLES: try to release cash by paying later ===");
const later = simulate(basis("dpo", PAYABLE_DAYS_FY26, perDaySa), { dpo: PAYABLE_DAYS_FY26 + 10 });
let dpoCash = later.released;
if (BREAK === 4) dpoCash = 10 * perDaySa; // sabotage: payables release cash
console.log(`Payable days ${PAYABLE_DAYS_FY26} asked +10: held at ${r2(later.levers[0].next)}, cash released Cr: ${r2(dpoCash)}`);

console.log("\n=== ASSERTS ===");
const rows = [...nwcRows, recRow];
check("no negative release", rows.every((row) => row.cash >= 0));
check(
  "interest only at 9.90% and 12.35%, within the cap",
  rows.every((row) =>
    row.interest.every((value, i) => Math.abs(value - (Math.min(row.cash, row.cap) * RATES[i]) / 100) < 1e-9 && value <= (row.cap * RATES[i]) / 100) &&
    Math.abs(row.interest[0] / Math.min(row.cash, row.cap) - 0.099) < 1e-12 &&
    Math.abs(row.interest[1] / Math.min(row.cash, row.cap) - 0.1235) < 1e-12,
  ),
);
// Independent route: plain arithmetic on the filed Rs Mn figure of the row's OWN basis, no app code.
const independent = (row: Row) => (row.revMn * row.step) / 365 / 10 + (BREAK === 3 ? 1 : 0); // sabotage: off by Rs 1 Cr
check("independent cross-check (Rs Mn x days / 365 / 10, own basis) equals simulate()", rows.every((row) => Math.abs(row.cash - independent(row)) < 0.005));
check("NWC rows priced on CONSOLIDATED revenue, receivable row on STANDALONE (no basis mix)", nwcRows.every((row) => row.perDay === perDayCons) && recRow.perDay === perDaySa);
check("payables never release cash", dpoCash <= 0);

if (fail.length) {
  console.log(`\n${fail.length} ASSERT(S) FAILED`);
  process.exit(1);
}
console.log("\nALL ASSERTS PASSED");
