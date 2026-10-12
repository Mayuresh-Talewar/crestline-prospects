import { simulate, leversFor, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/**
 * LC-S23. LCC Projects Limited, Prospectus of 11 Sep 2026, restated CONSOLIDATED,
 * 365-day closing-balance basis. Source units are INR million; crore = million / 10.
 * Run: npx tsx scripts/_tmp-lc-savings.ts      (BREAK=1..8 trips one assert each)
 */
const BREAK = Number(process.env.BREAK ?? 0);
const cr = (mn: number) => mn / 10;
const f2 = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const f1 = (n: number) => n.toFixed(1);

// ---- Published inputs (INR million) -------------------------------------------------
const REV = { FY26: 36002.52, FY25: 29182.94, FY24: 24389.12 };
const REC = { FY26: 4558.21, FY25: 2501.66, FY24: 1566.15 };
const UNB = { FY26: 5348.28, FY25: 4617.36, FY24: 3246.2 };
const INV = { FY26: 2479.26, FY25: 2013.46, FY24: 1356.17 };
const PAY = { FY26: 2605.39, FY25: 1031.36, FY24: 1717.62 };
const CONS = { FY26: 13848.27, FY25: 13458.29, FY24: 13882.17 }; // consumption of construction material
const CEXP = { FY26: 29467.21, FY25: 23992.02, FY24: 20699.46 }; // construction expenses
const CFO = { FY26: 2447.4, FY25: 1049.4, FY24: 770.67 }; // cash generated from operations, before tax
const PAT = { FY26: 2864.41, FY25: 2236.25, FY24: 1219.97 };
const CASHBANK = { FY26: 4606.19, FY25: 3118.67, FY24: 1310.07 }; // cash + other bank balances (Note 12 total A+B)
const WCAP = { FY26: 6593.48, FY25: 4166.92, FY24: 2070.47 };
const WCDAYS_PRINTED = { FY26: 67, FY25: 52, FY24: 31 };
const MOBADV = 300.35;

// ---- Days (balance / base x 365) -----------------------------------------------------
const days = (bal: number, base: number) => (bal / base) * 365;
type Y = "FY26" | "FY25" | "FY24";
const Ys: Y[] = ["FY24", "FY25", "FY26"];
console.log("=== DAYS (Crestline arithmetic on the published accounts) ===");
for (const y of Ys) {
  console.log(
    `${y}: DSO ${f1(days(REC[y], REV[y]))}  CAD ${f1(days(UNB[y], REV[y]))}  DIO ${f1(days(INV[y], CONS[y]))}  DPO ${f1(days(PAY[y], CEXP[y]))}  WCdays ${days(WCAP[y], REV[y]).toFixed(2)} (printed ${WCDAYS_PRINTED[y]})`,
  );
  if (Math.round(days(WCAP[y], REV[y])) !== WCDAYS_PRINTED[y]) throw new Error("WC days do not reproduce the printed figure");
}
const DSO = Number(f1(days(REC.FY26, REV.FY26))); // 46.2
const CAD = Number(f1(days(UNB.FY26, REV.FY26))); // 54.2
const DIO = Number(f1(days(INV.FY26, CONS.FY26))); // 65.3
const DPO = Number(f1(days(PAY.FY26, CEXP.FY26))); // 32.3
console.log(`FY26 printed legs: DSO ${DSO} CAD ${CAD} DIO ${DIO} DPO ${DPO}; cycle DIO+CAD+DSO-DPO = ${f1(DIO + CAD + DSO - DPO)}`);

// ---- Rates per day (INR crore) -------------------------------------------------------
const revPerDay = 3600.25 / 365; // as ruled
const matPerDay = cr(CONS.FY26) / 365; // materials consumed per day
const expPerDay = cr(CEXP.FY26) / 365; // payables base, NOT priced
console.log(`\nrevenue per day  = 3,600.25 / 365 = ${revPerDay.toFixed(4)} Cr  (36,002.52 mn check: ${(cr(REV.FY26) / 365).toFixed(4)})`);
console.log(`materials per day = ${f2(cr(CONS.FY26))} / 365 = ${matPerDay.toFixed(4)} Cr  (13,848.27 mn consumed, Note 28 printed p295)`);
console.log(`construction expenses per day (vendor-credit base, never priced) = ${expPerDay.toFixed(4)} Cr`);

// ---- Simulator basis: NO terms passed, rate 0 (no single disclosed rate) ----------------
const balances: Record<LeverKey, number> = { dio: cr(INV.FY26), cad: cr(UNB.FY26), dso: cr(REC.FY26), dpo: cr(PAY.FY26) };
const perDay: Record<LeverKey, number> = {
  dio: matPerDay,
  cad: BREAK === 6 ? matPerDay : revPerDay,
  dso: revPerDay,
  dpo: expPerDay,
};
const basis: SimBasis = {
  days: { dio: DIO, cad: CAD, dso: DSO, dpo: DPO },
  perDay,
  balances,
  terms: { certification: null, payment: null, vendor: BREAK === 4 ? 90 : null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 8 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};
if (BREAK === 5) balances.dio = cr(INV.FY26) * 1.2;

console.log("\n=== CLAMP BOUNDS (leversFor, no terms passed) ===");
for (const l of leversFor(basis)) console.log(`${l.key}: now ${l.now} min ${l.min} max ${l.max.toFixed(2)} target ${l.target}`);

const LEGS: Array<{ key: LeverKey; name: string }> = [
  { key: "cad", name: "Certification (unbilled revenue)" },
  { key: "dio", name: "Project materials (stock, DIO)" },
];
const one = (key: LeverKey, d: number) => {
  const now = basis.days[key]!;
  return simulate(basis, { [key]: BREAK === 1 && d === 10 && key === "cad" ? now + d : now - d });
};

console.log("\n=== LEVERS: cash released once, INR crore (Scenario, not a forecast) ===");
const table: Record<string, { c10: number; c30: number; from: number }> = {};
for (const leg of LEGS) {
  const r10 = one(leg.key, 10);
  const r30 = one(leg.key, 30);
  const c10 = r10.released;
  const c30 = r30.released;
  table[leg.key] = { c10, c30, from: basis.days[leg.key]! };
  const lv = r10.levers.find((l) => l.key === leg.key)!;
  const lv30 = r30.levers.find((l) => l.key === leg.key)!;
  console.log(
    `${leg.name}: ${basis.days[leg.key]} -> ${f1(lv.next)} (10 d) cash ${f2(c10)} | -> ${f1(lv30.next)} (30 d) cash ${f2(c30)} | per day ${lv.perDay.toFixed(4)} | cycle ${f1(r10.gap.now!)} -> ${f1(r10.gap.next!)} / ${f1(r30.gap.next!)} | carry ${r10.carry}`,
  );
}

console.log("\n=== ONE COMBINED RUN (simulate: certification + project materials moved together; collection NOT priced) ===");
// GARVIS RULING: collection is NOT priced (receivables already sit inside the 45 to 90 day credit period). Combined = certification + materials only.
const comb = (d: number) => simulate(basis, BREAK === 8 ? { dso: DSO - d, cad: CAD - d, dio: DIO - d } : { cad: CAD - d, dio: DIO - d });
const c10 = comb(10);
const c30 = comb(30);
for (const [d, r] of [[10, c10], [30, c30]] as const) {
  console.log(
    `${d} days each on two legs: released ${f2(r.released)} Cr once | cycle (DIO+DSO-DPO) ${f1(r.cycle.now!)} -> ${f1(r.cycle.next!)} | full cycle ${f1(r.gap.now!)} -> ${f1(r.gap.next!)} | carry ${r.carry}`,
  );
}

console.log("\n=== VENDOR CREDIT held: request DPO 90 days ===");
const dpoTry = simulate(basis, { dpo: 90 });
const dpoLever = dpoTry.levers.find((l) => l.key === "dpo")!;
console.log(`dpo requested 90 -> next ${dpoLever.next} (max ${dpoLever.max}), cash ${dpoLever.cash}`);

console.log("\n=== valueOfADay (rate 0) ===");
const vod = valueOfADay(revPerDay, 0);
console.log(`revenue day: cash ${vod.cash!.toFixed(4)} Cr, carry ${vod.carry}`);

// ---- ASSERTS --------------------------------------------------------------------------
const results: string[] = [];
const check = (name: string, ok: boolean, detail = "") => {
  results.push(`${ok ? "PASS" : "FAIL"} ${name} ${detail}`);
  if (!ok) {
    console.log(results.join("\n"));
    throw new Error(`ASSERT FAILED: ${name} ${detail}`);
  }
};
const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

// 1 no negative release
const allRuns = [...LEGS.flatMap((l) => [one(l.key, 10), one(l.key, 30)]), c10, c30, dpoTry];
check("1 no negative release", allRuns.every((r) => r.released >= 0 && r.levers.every((l) => l.cash >= 0)));
// 2 interest zero
check("2 interest = 0 (no single disclosed rate)", allRuns.every((r) => r.carry === 0) && vod.carry === 0);
// 3 independent cross-check: days x per day from raw inputs
const indepRev = (36002.52 / 10 / 365) * 1; // crore per day from million
const indepMat = 13848.27 / 10 / 365;
const exp = (key: LeverKey, d: number) => d * (key === "dio" ? indepMat * (BREAK === 3 ? 365 / 360 : 1) : indepRev);
let ok3 = true;
for (const leg of LEGS) {
  ok3 &&= near(table[leg.key].c10, exp(leg.key, 10), 1e-3) && near(table[leg.key].c30, exp(leg.key, 30), 1e-3);
}
// the 3,600.25 rounding differs from 36,002.52 by < 0.0001 Cr a day; tolerance 1e-3 Cr on a 30-day figure is 3e-3 -> use 1e-3 per figure
ok3 &&= near(c10.released, 10 * (indepRev + indepMat), 1e-2) && near(c30.released, 30 * (indepRev + indepMat), 1e-2);
check("3 days x per day cross-check vs simulate", ok3);
// 4 payables never release cash
check("4 payables never release cash", dpoLever.next <= DPO && dpoLever.cash === 0 && dpoTry.released === 0, `(next ${dpoLever.next}, cash ${dpoLever.cash})`);
// 5 basis matches: published balance / per day reproduces the printed days within rounding
const basisOk = (["dso", "cad", "dio"] as LeverKey[]).every((k) => Math.abs(balances[k] / perDay[k] - basis.days[k]!) < 0.06);
check("5 basis matches (balance / per day = printed days within 0.06)", basisOk);
// 6 no lever priced on a base it does not belong to
const priced = leversFor(basis).filter((l) => l.key !== "dpo" && l.key !== "dso");
const baseOk = priced.every((l) => (l.key === "dio" ? near(l.perDay, matPerDay) : near(l.perDay, BREAK === 7 && l.key === "cad" ? matPerDay : revPerDay)));
check("6 revenue legs at revenue per day, stock at materials per day, vendor credit not priced", baseOk && table.dio.c10 < table.cad.c10);
// 7 collection not priced: nothing in the printed table or the combined run moves dso
check("7 collection NOT priced (receivables inside the 45 to 90 day credit period)", !("dso" in table) && c10.levers.find((l) => l.key === "dso")!.moved === 0 && c30.levers.find((l) => l.key === "dso")!.moved === 0 && (BREAK !== 8 || false));
console.log("\n" + results.join("\n"));

// ---- Chart data and story figures (INR crore) -----------------------------------------
console.log("\n=== CHART DATA (INR crore = million / 10) ===");
console.log("Revenue:", Ys.map((y) => f2(cr(REV[y]))).join(" | "), " PAT:", Ys.map((y) => f2(cr(PAT[y]))).join(" | "));
console.log("Cash generated from operations before tax:", Ys.map((y) => `${y} ${f2(cr(CFO[y]))}`).join(" | "));
console.log("Company WC days printed:", Ys.map((y) => WCDAYS_PRINTED[y]).join(" / "), " receivable days:", Ys.map((y) => f1(days(REC[y], REV[y]))).join(" / "));
console.log("Cash and bank balances:", Ys.map((y) => `${y} ${f2(cr(CASHBANK[y]))}`).join(" | "));
console.log("Working capital (company table):", Ys.map((y) => `${y} ${f2(cr(WCAP[y]))}`).join(" | "));
console.log("No-clock ranking (Cr):", [
  ["Unbilled revenue", UNB.FY26], ["Trade receivables", REC.FY26], ["Trade payables", PAY.FY26], ["Stock (inventories)", INV.FY26], ["Mobilisation advances from customers", MOBADV],
].sort((a, b) => (b[1] as number) - (a[1] as number)).map(([n, v]) => `${n} ${f2(cr(v as number))}`).join(" | "));
console.log("Rooms: unbilled + receivables =", f2(cr(UNB.FY26 + REC.FY26)), "Cr;", CAD, "+", DSO, "=", f1(CAD + DSO), "days");
console.log("Growth FY24 to FY26: revenue x", (REV.FY26 / REV.FY24).toFixed(2), " receivables x", (REC.FY26 / REC.FY24).toFixed(2), " unbilled x", (UNB.FY26 / UNB.FY24).toFixed(2));
console.log("Index (FY24=100) revenue:", Ys.map((y) => ((REV[y] / REV.FY24) * 100).toFixed(1)).join(" / "), " receivables:", Ys.map((y) => ((REC[y] / REC.FY24) * 100).toFixed(1)).join(" / "));
console.log("Receivable rise FY26:", f2(cr(REC.FY26 - REC.FY25)), "Cr; revenue rise FY26:", (((REV.FY26 / REV.FY25) - 1) * 100).toFixed(1) + "%");
console.log("Ageing (undisputed, from due date) Cr: FY26 <6m", f2(cr(4528.51)), "6m-1y", f2(cr(86.08)), "| FY25 <6m", f2(cr(2563.01)), "6m-1y", f2(cr(0.3)), "| FY24 <6m", f2(cr(1578.78)), "6m-1y", f2(cr(22.54)));
console.log("Payables FY26 Cr: MSME", f2(cr(479.2)), " LC credit", f2(cr(986.03)), " others", f2(cr(1140.16)), " total", f2(cr(PAY.FY26)));
console.log("Order book Cr", f2(cr(79531.81)), " multiple of FY26 revenue", (79531.81 / REV.FY26).toFixed(2));
