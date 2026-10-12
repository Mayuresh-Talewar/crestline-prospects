/**
 * VK-S23 temp calc: Vikran Engineering Limited, standalone, INR Cr.
 * Inputs are typed in the SOURCE's own units (FY26 AR 2025-26 in INR lakh,
 * FY23-FY25 Prospectus restated in INR million) and converted here.
 * Run: npx tsx scripts/_tmp-vk-savings.ts   (BREAK=1..8 breaks one assert)
 */
import { simulate, leversFor, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const lakh = (x: number) => x / 100; // INR lakh -> Cr
const mn = (x: number) => x / 10; // INR million -> Cr
const r2 = (x: number) => (Math.round(x * 100 + 1e-6 * Math.sign(x)) / 100).toFixed(2); // half-up at the stated 2 places
const r1 = (x: number) => (Math.round(x * 10 + 1e-6 * Math.sign(x)) / 10).toFixed(1);
let fails = 0;
const check = (name: string, ok: boolean, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  " + detail : ""}`);
  if (!ok) fails++;
};

// ---- source figures ----
const Y = {
  FY23: { rev: mn(5243.05), tr: mn(3699.07), ca: mn(1946.36), inv: mn(356.56), mat: mn(2664.83), proj: mn(961.78), cfo: mn(55.51), cash: mn(1.23 + 148.02), borr: mn(365.07 + 1184.18), pat: mn(428.4) },
  FY24: { rev: mn(7859.48), tr: mn(4638.96), ca: mn(2891.64), inv: mn(507.23), mat: mn(3849.57), proj: mn(1677.68), cfo: -mn(664.77), cash: mn(0.81 + 498.71), borr: mn(107.03 + 1726.88), pat: mn(748.31) },
  FY25: { rev: mn(9158.47), tr: mn(6343.29), ca: mn(4663.65), inv: mn(599.39), mat: mn(4836.75), proj: mn(1604.22), cfo: -mn(1290.86), cash: mn(24.98 + 645.66), borr: mn(319.18 + 2410.25), pat: mn(778.19) },
  FY26: { rev: lakh(124931), tr: lakh(101307 + 2926), ca: lakh(86394), inv: lakh(7992), mat: lakh(48275), proj: lakh(43541), cfo: -lakh(43699), cash: lakh(3326 + 18646), borr: lakh(4584 + 24643), pat: lakh(9170) },
} as const;
const F = Y.FY26;
const RETENTION = lakh(20488); // Note 14(b)
const REC_GROSS = lakh(104710); // Note 14 ageing, current, gross of loss allowance
const CA_GROSS = lakh(86813); // Note 50(e)
const PAYMENT_TERM = 60; // Note 50(g): 45 to 60 days; the upper end

console.log("== SOURCE-UNIT CHECKS (FY26 lakh) ==");
console.log(`revenue 124,931 lakh = ${r2(F.rev)} Cr; receivables (1,01,307+2,926) = ${r2(F.tr)}; contract assets 86,394 = ${r2(F.ca)}; inventories 7,992 = ${r2(F.inv)}`);
console.log(`cost base (materials 48,275 + project 43,541 lakh) = ${r2(F.mat + F.proj)} Cr; inventory turnover check 13.13 = ${((F.mat + F.proj) / ((F.inv + Y.FY25.inv) / 2)).toFixed(2)} (AR p226 prints 13.13)`);

console.log("\n== FOUR YEARS, ONE BASIS ==");
const series: Record<string, { dso: number; cad: number; dio: number; wc: number }> = {};
for (const [y, d] of Object.entries(Y)) {
  const cost = d.mat + d.proj;
  const dso = (d.tr / d.rev) * 365, cad = (d.ca / d.rev) * 365, dio = (d.inv / cost) * 365;
  series[y] = { dso, cad, dio, wc: d.tr + d.ca + d.inv };
  console.log(`${y} rev ${r2(d.rev)} pat ${r2(d.pat)} | cost ${r2(cost)} | DSO ${r1(dso)} CAD ${r1(cad)} DIO ${r1(dio)} | sum ${r1(dso + cad + dio)} | WC(rec+CA+stock) ${r2(d.tr + d.ca + d.inv)} | CFO ${r2(d.cfo)} | cash+bank ${r2(d.cash)} | borrowings ${r2(d.borr)} | rec ${r2(d.tr)} CA ${r2(d.ca)}`);
}
const idx = (k: "tr" | "ca" | "rev") => Object.values(Y).map((d) => r1((d[k] / Y.FY23[k]) * 100)).join(" / ");
console.log(`index FY23=100: receivables ${idx("tr")} | contract assets ${idx("ca")} | revenue ${idx("rev")}`);
console.log(`multiples FY23 to FY26: receivables ${r2(F.tr / Y.FY23.tr)}x, contract assets ${r2(F.ca / Y.FY23.ca)}x, revenue ${r2(F.rev / Y.FY23.rev)}x`);
console.log(`earned and not yet cash, FY26 (receivables + contract assets) = ${r2(F.tr + F.ca)} Cr; combined days ${r1(series.FY26.dso + series.FY26.cad)}; retention share of receivables ${r1((RETENTION / F.tr) * 100)}%`);

// ---- the app's own basis ----
const revPerDay = F.rev / 365;
const costPerDay = (F.mat + F.proj) / 365;
const day = valueOfADay(revPerDay, 0);
const dso0 = F.tr / revPerDay, cad0 = F.ca / revPerDay, dio0 = F.inv / costPerDay;
const basis: SimBasis = {
  days: { dio: dio0, cad: cad0, dso: dso0, dpo: null },
  perDay: { dio: costPerDay, cad: revPerDay, dso: revPerDay, dpo: null },
  balances: { dio: F.inv, cad: F.ca, dso: F.tr, dpo: null },
  terms: { certification: null, payment: PAYMENT_TERM, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: { dpo: "vendor credit is never a lever and no vendor terms are published" },
};
console.log(`\n== PER DAY ==\nrevenue per day ${revPerDay.toFixed(4)} Cr (valueOfADay cash ${day.cash?.toFixed(4)}, carry ${day.carry}); stock base per day ${costPerDay.toFixed(4)} Cr`);
console.log(`days now: DSO ${dso0.toFixed(2)}  CAD ${cad0.toFixed(2)}  DIO ${dio0.toFixed(2)}`);
const bounds = leversFor(basis).map((l) => `${l.key}[min ${l.min.toFixed(2)} max ${l.max.toFixed(2)} target ${l.target}]`).join("  ");
console.log(`clamp bounds read from leversFor: ${bounds}`);

type Row = { id: string; label: string; days: number; cash: number; from: number; to: number };
const rows: Row[] = [];
const run = (id: string, label: string, req: Partial<Record<"dio" | "cad" | "dso" | "dpo", number>>, leg: "dio" | "cad" | "dso") => {
  const res = simulate(basis, req);
  const lv = res.levers.find((l) => l.key === leg)!;
  rows.push({ id, label, days: -lv.moved, cash: lv.cash, from: lv.now, to: lv.next });
  check(`no negative release [${id}]`, (BREAK === 1 ? -res.released : res.released) >= -1e-9, `released ${r2(res.released)}`);
  check(`interest = 0 [${id}]`, (BREAK === 2 ? 0.01 : res.carry) === 0, `carry ${res.carry}`);
  return res;
};
console.log("\n== SINGLE-LEG RUNS (simulate) ==");
const s = {
  dso10: run("dso10", "Collection, ten days less", { dso: dso0 - 10 }, "dso"),
  dso30: run("dso30", "Collection, thirty days less", { dso: dso0 - 30 }, "dso"),
  dsoT: run("dsoT", "Collection, to the 60-day term", toTerms(basis), "dso"),
  cad10: run("cad10", "Certification, ten days less", { cad: cad0 - 10 }, "cad"),
  cad30: run("cad30", "Certification, thirty days less", { cad: cad0 - 30 }, "cad"),
  dio10: run("dio10", "Project materials, ten days less", { dio: dio0 - 10 }, "dio"),
  dio30: run("dio30", "Project materials, thirty days less (NOT PRINTED: ruling prices 10)", { dio: dio0 - 30 }, "dio"),
};
for (const r of rows) console.log(`${r.id.padEnd(6)} ${r.label.padEnd(66)} ${r.from.toFixed(2)} -> ${r.to.toFixed(2)} days  moved ${r.days.toFixed(2)}  cash ${r2(r.cash)} Cr`);

console.log("\n== ONE COMBINED RUN: ten days less on stock, certification and collection together ==");
const comb = simulate(basis, { dio: dio0 - 10, cad: cad0 - 10, dso: dso0 - 10 });
for (const l of comb.levers) console.log(`  ${l.key}: ${l.now.toFixed(2)} -> ${l.next.toFixed(2)}  cash ${r2(l.cash)}`);
console.log(`  combined released once ${r2(comb.released)} Cr (one simulate run); cycle/gap/wc ${comb.cycle.now}/${comb.gap.now}/${comb.workingCapital.now} (null: no vendor leg, none printed)`);
const sumDays = (a: number, b: number, c: number) => a + b + c;
console.log(`  chart 4 point, FY26 receivable + unbilled + stock days: ${r1(sumDays(dso0, cad0, dio0))} -> ${r1(sumDays(dso0 - 10, cad0 - 10, dio0 - 10))} after the combined run`);

console.log("\n== ASSERTS ==");
// 1 cross-check, independent of simulate
const x = (days: number, perDay: number) => days * perDay;
const cross = [
  ["dso10", x(10, revPerDay)], ["dso30", x(30, revPerDay)], ["dsoT", F.tr - PAYMENT_TERM * revPerDay],
  ["cad10", x(10, revPerDay)], ["cad30", x(30, revPerDay)], ["dio10", x(10, costPerDay)],
] as const;
for (const [id, v] of cross) {
  const got = rows.find((r) => r.id === id)!.cash + (BREAK === 3 && id === "dso10" ? 0.5 : 0);
  check(`cross-check days x per day vs simulate [${id}]`, Math.abs(got - v) < 1e-9, `${r2(got)} vs ${r2(v)}`);
}
const combX = x(10, revPerDay) * 2 + x(10, costPerDay);
check("combined run equals independent arithmetic", Math.abs(comb.released - combX - (BREAK === 8 ? 1 : 0)) < 1e-9, `${r2(comb.released)} vs ${r2(combX)}`);
// 2 payables never release cash
// BREAK=4 gives the basis a payables leg (days 100, 3 Cr a day, terms 60) and asks for 40 days of stretch
const pb: SimBasis = BREAK === 4 ? { ...basis, days: { ...basis.days, dpo: 100 }, perDay: { ...basis.perDay, dpo: 3 }, balances: { ...basis.balances, dpo: 300 }, terms: { ...basis.terms, vendor: 60 } } : basis;
const dpoReq = simulate(pb, { dio: dio0, cad: cad0, dso: dso0, dpo: BREAK === 4 ? 140 : 400 });
check("payables never release cash: no vendor lever exists", !leversFor(pb).some((l) => l.key === "dpo") && dpoReq.released === 0, `released ${dpoReq.released}`);
// 3 basis matches
check("collection and certification both priced at revenue per day", basis.perDay.dso === basis.perDay.cad && Math.abs((BREAK === 5 ? costPerDay : (basis.perDay.dso as number)) - F.rev / 365) < 1e-12);
check("stock priced at (materials + project expense) per day, never revenue", Math.abs((basis.perDay.dio as number) - (F.mat + F.proj) / 365) < 1e-12 && basis.perDay.dio !== revPerDay);
check("each balance = days x its own per day", Math.abs(dso0 * revPerDay - F.tr) < 1e-9 && Math.abs(cad0 * revPerDay - F.ca) < 1e-9 && Math.abs(dio0 * costPerDay - F.inv) < 1e-9);
check("published days reproduce: DSO 304.5, CAD 252.4, DIO 31.8", r1(dso0) === "304.5" && r1(cad0) === "252.4" && r1(dio0) === (BREAK === 6 ? "31.9" : "31.8"));
// 4 clamps
const dsoLow = simulate(basis, { dso: 20 }).levers.find((l) => l.key === "dso")!;
check("collection cannot go below the 60-day term (request 20 clamps to 60)", dsoLow.next === (BREAK === 7 ? 20 : 60), `next ${dsoLow.next}`);
const dioBig = simulate(basis, { dio: dio0 - 40 }).levers.find((l) => l.key === "dio")!;
check("stock cannot go below zero days (request -40 clamps to 0)", dioBig.next === 0, `next ${dioBig.next.toFixed(2)}, cash ${r2(dioBig.cash)}`);
const dio30 = s.dio30.levers.find((l) => l.key === "dio")!;
check("30-day stock cut is NOT clamped by the app (leaves 1.77 days), contrary to the launch note", Math.abs(dio30.next - 1.77) < 0.01, `next ${dio30.next.toFixed(2)}`);
check("retention has no lever (balance only)", !leversFor(basis).some((l) => (l.key as string) === "retention"));
check("combined run is below the sum of ten days on three legs at one base", comb.released < x(30, revPerDay) + 1e-9, "(different bases, so no single-base sum)");
const sumRows = rows.filter((r) => ["dso10", "cad10", "dio10"].includes(r.id)).reduce((t, r) => t + r.cash, 0);
check("combined equals the three single runs added (legs are independent balances)", Math.abs(sumRows - comb.released) < 1e-9, `${r2(sumRows)}`);

console.log("\n== LEVER TABLE (every lever considered) ==");
const T: [string, string, string][] = [
  ["Collection (trade receivables 1,042.33 Cr, 304.5 days)", `PRICED at revenue per day ${revPerDay.toFixed(4)} Cr: 10 days ${r2(s.dso10.released)}, 30 days ${r2(s.dso30.released)}, to the 60-day term ${r2(s.dsoT.released)} Cr`, "Receivables include 204.88 Cr retention due after completion; the 60 days excludes retention, so the to-term figure is a bound, not a promise"],
  ["Certification (contract assets 863.94 Cr, 252.4 days)", `PRICED at revenue per day: 10 days ${r2(s.cad10.released)}, 30 days ${r2(s.cad30.released)} Cr`, "No certification window is published, so no to-term row"],
  ["Project materials (inventories 79.92 Cr, 31.8 days)", `PRICED at (materials + project expense) per day ${costPerDay.toFixed(4)} Cr: 10 days ${r2(s.dio10.released)} Cr`, `30 days would leave ${dio30.next.toFixed(2)} days and release ${r2(s.dio30.released)} Cr; not printed, the ruling prices 10 days`],
  ["Retention held by clients (204.88 Cr)", "NOT PRICED: balance only", "Released after project completion per contract; no release speed published, none invented"],
  ["Vendor credit (trade payables)", "NOT PRICED", "Never a lever: paying later is not cash released; vendor terms in days are not published"],
  ["Interest or carry", "NOT PRICED", "No single working-capital borrowing rate is published; rate fixed at 0 in the simulator, interest 0"],
  ["Customer advances, supplier advances", "NOT PRICED", "No clock and no base; shown only as balances where the pack prints them"],
];
for (const [a, b, c] of T) console.log(`- ${a}\n    ${b}\n    ${c}`);

console.log("\n== RANKING by cash released once (priceLevers not run: it needs a rate and invents release speeds) ==");
[...rows].filter((r) => r.id !== "dio30").sort((a, b) => b.cash - a.cash).forEach((r, i) => console.log(`${i + 1}. ${r.label}: ${r2(r.cash)} Cr`));
console.log("Per day: collection and certification each 3.4228 Cr a day; project materials 2.5155 Cr a day.");

console.log(fails === 0 ? "\nALL ASSERTS PASS" : `\n${fails} ASSERT(S) FAILED`);
if (fails) process.exit(1);
