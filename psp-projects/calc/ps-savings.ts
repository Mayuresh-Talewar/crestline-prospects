/**
 * PSP Projects Limited, standalone, FY26 (year ended 31 Mar 2026), Rs Cr.
 * Every input is read off the audited AR 2025-26 page images (see qa-report).
 * Runs the app's own simulate / leversFor / valueOfADay / priceLevers.
 * BREAK=<name> perturbs one input so each assert can be seen to fail.
 */
import { simulate, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay, type CyclePosition } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";

const BREAK = process.env.BREAK ?? "";
const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;
let fails = 0;
const check = (name: string, ok: boolean, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  " + detail : ""}`);
  if (!ok) fails++;
};

// ---- inputs (Rs Cr; lakh / 100) ----
const revenue = 2989.4524; // P&L p144 [203]: 2,98,945.24 lakh
const material = 1060.1682, chgInv = 21.4931; // 1,06,016.82 and 2,149.31 lakh
const construction = 1501.2729; // 1,50,127.29 lakh
const receivables = 840.2960; // BS p143: 84,029.60 lakh
const inventories = 343.7499; // 34,374.99 lakh
const payables = 400.8371; // 4,798.24 + 35,285.47 lakh
const unbilledNet = (43835.08 - 3800.56) / 100; // note 8, p165: 400.3452
const retention = (15160.03 + 5940.07) / 100; // note 8: 211.0010
const grossRecv = 876.3833, notDue = 472.9777; // note 12 ageing grand total p168
const pastDueGross = grossRecv - notDue; // 403.4056
const target = 70; // CFO, Q4 FY26 call 30 Apr 2026: "around 60 to 70 days"; conservative end

const materialsBase = material + chgInv; // note 45 cost-of-goods-sold basis
const payBase = materialsBase + construction;
const revPerDay = revenue / 365;
const matPerDay = (BREAK === "xcheck" ? 1.01 : 1) * materialsBase / 365;
const payPerDay = payBase / 365;

const days = {
  dio: inventories / matPerDay,
  cad: unbilledNet / revPerDay,
  dso: receivables / revPerDay,
  dpo: payables / payPerDay,
};
const balances = { dio: inventories, cad: unbilledNet, dso: receivables, dpo: payables };
const basis: SimBasis = {
  days,
  perDay: { dio: matPerDay, cad: revPerDay, dso: revPerDay, dpo: payPerDay },
  balances,
  // Customer term runs "immediate payment to 120 days": no lower end above zero, no certification window,
  // vendor terms stated per scheme, not one ceiling: nothing is passed, so DPO is held.
  terms: { certification: null, payment: BREAK === "floor" ? 20 : null, vendor: BREAK === "dpo" ? 60 : null },
  workingCapital: inventories + receivables - payables,
  ratePct: BREAK === "interest" ? 9 : 0, // no single disclosed borrowing rate
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

console.log("== OPENING POSITION (Crestline's arithmetic on the published accounts) ==");
for (const k of ["dso", "dio", "dpo", "cad"] as LeverKey[]) console.log(k, days[k].toFixed(2), "days; balance", balances[k].toFixed(2), "Cr; per day", basis.perDay[k]!.toFixed(4));
const cycleNow = days.dio + days.cad + days.dso - days.dpo;
console.log("cycle (DIO + CAD + DSO - DPO):", cycleNow.toFixed(2));
console.log("value of a revenue day:", JSON.stringify(valueOfADay(revPerDay, basis.ratePct)), " value of a materials day:", JSON.stringify(valueOfADay(matPerDay, basis.ratePct)));
console.log("lever bounds:", leversFor(basis).map((l) => `${l.key}[${l.min.toFixed(1)}..${l.max.toFixed(1)}] target=${l.target}`).join("  "));
console.log("Retention balance (not priced):", retention.toFixed(2), " gross receivables past due:", pastDueGross.toFixed(2), " not yet due:", notDue.toFixed(2));

type Row = { name: string; moves: Partial<Record<LeverKey, number>> };
const rows: Row[] = [
  { name: "Collection 10 days less", moves: { dso: days.dso - 10 } },
  { name: "Collection 30 days less", moves: { dso: days.dso - 30 } },
  { name: `Collection to management's ${target}-day target`, moves: { dso: BREAK === "floor" ? 20 : target } },
  { name: "Certification 10 days less", moves: { cad: days.cad - 10 } },
  { name: "Certification 30 days less", moves: { cad: days.cad - 30 } },
  { name: "Stock 10 days less", moves: { dio: days.dio - 10 } },
  { name: "Stock 30 days less", moves: { dio: days.dio - 30 } },
  { name: "COMBINED one run: collection to target + certification 30 + stock 30", moves: { dso: target, cad: days.cad - 30, dio: days.dio - 30 } },
  { name: "Vendor credit pushed to 120 days (must be refused)", moves: { dpo: BREAK === "dpo" ? 120 : 120 } },
];
if (BREAK === "neg") rows.push({ name: "BREAK: collection 20 days longer", moves: { dso: days.dso + 20 } });

console.log("\n== SCENARIOS (Scenario, not a forecast; rows overlap, never added) ==");
const results = rows.map((r) => ({ r, s: simulate(basis, r.moves) }));
for (const { r, s } of results) {
  const lv = (k: LeverKey) => s.levers.find((l) => l.key === k)!;
  console.log(
    `${r.name}\n   released ${s.released.toFixed(2)} Cr once | dso ${lv("dso").next.toFixed(1)} cad ${lv("cad").next.toFixed(1)} dio ${lv("dio").next.toFixed(1)} dpo ${lv("dpo").next.toFixed(1)} | cycle ${s.gap.now?.toFixed(1)} -> ${s.gap.next?.toFixed(1)} | carry ${s.carry.toFixed(2)}`,
  );
}

console.log("\n== ASSERTS ==");
for (const { r, s } of results) {
  check(`no negative release: ${r.name}`, s.levers.every((l) => l.cash >= -1e-9) && s.released >= -1e-9, s.released.toFixed(2));
  check(`interest is zero: ${r.name}`, s.carry === 0, String(s.carry));
  check(`payables release nothing: ${r.name}`, near(s.levers.find((l) => l.key === "dpo")!.cash, 0));
}
const R = (n: string) => results.find((x) => x.r.name.startsWith(n))!.s;
const cash = (s: ReturnType<typeof simulate>, k: LeverKey) => s.levers.find((l) => l.key === k)!.cash;
// independent cross-check: days x per day, then balance arithmetic
check("xcheck collection 10", near(cash(R("Collection 10"), "dso"), 10 * (revenue / 365), 1e-6), (10 * revenue / 365).toFixed(2));
check("xcheck collection 30", near(cash(R("Collection 30"), "dso"), 30 * (revenue / 365), 1e-6), (30 * revenue / 365).toFixed(2));
check("xcheck collection to target = balance - target x per day", near(cash(R("Collection to"), "dso"), receivables - target * (revenue / 365), 1e-6), (receivables - target * revenue / 365).toFixed(2));
check("xcheck certification 10", near(cash(R("Certification 10"), "cad"), 10 * (revenue / 365), 1e-6));
check("xcheck certification 30", near(cash(R("Certification 30"), "cad"), 30 * (revenue / 365), 1e-6));
check("xcheck stock 10", near(cash(R("Stock 10"), "dio"), 10 * (materialsBase / 365), 1e-6), (10 * materialsBase / 365).toFixed(2));
check("xcheck stock 30", near(cash(R("Stock 30"), "dio"), 30 * (materialsBase / 365), 1e-6), (30 * materialsBase / 365).toFixed(2));
const comb = R("COMBINED");
check("combined = sum of its own three legs (one run, not a row sum)", near(comb.released, cash(comb, "dso") + cash(comb, "cad") + cash(comb, "dio"), 1e-9), comb.released.toFixed(2));
// basis: each lever's balance equals days x its own per-day rate, on its own base
for (const k of ["dio", "cad", "dso", "dpo"] as LeverKey[]) check(`basis ${k}: balance = days x per day`, near(balances[k], days[k] * basis.perDay[k]!, 1e-6));
check("basis: stock priced on materials, never revenue per day", basis.perDay.dio !== basis.perDay.dso && near(basis.perDay.dio!, 1081.6613 / 365, 0.01));
check("cycle ties to 210.8", near(Math.round(cycleNow * 10) / 10, 210.8), cycleNow.toFixed(2));
check("DSO ties to 102.6, DIO 116.0, DPO 56.6, CAD 48.9",
  [days.dso, days.dio, days.dpo, days.cad].map((d) => Math.round(d * 10) / 10).join() === "102.6,116,56.6,48.9");
// never below the client's term and never past what is due
const toT = R("Collection to");
check(`collection never below the lower end of the client term (immediate payment = 0 days)`, toT.levers.find((l) => l.key === "dso")!.next >= 0 && (basis.terms.payment ?? 0) <= toT.levers.find((l) => l.key === "dso")!.next);
for (const n of ["Collection 10", "Collection 30", "Collection to", "COMBINED"]) {
  check(`${n}: cash from collection stays inside gross receivables already past due (${pastDueGross.toFixed(2)})`, cash(R(n), "dso") <= pastDueGross, cash(R(n), "dso").toFixed(2));
}
check("vendor lever refused at 120 days", near(R("Vendor").levers.find((l) => l.key === "dpo")!.next, days.dpo, 1e-9));

console.log("\n== RANKING (priceLevers; cash released once; carry 0 because no rate is disclosed) ==");
const pick = (n: string, k: LeverKey) => cash(R(n), k);
const ranked = priceLevers({
  position: {
    actions: [
      { id: "collection", title: `Collection to the ${target}-day target`, detail: "", days: days.dso - target, value: pick("Collection to", "dso"), carrySaved: 0, internallyControllable: false, owner: "", confidence: "medium", measuredAgainst: "management's own target" },
      { id: "certification", title: "Certification 30 days less", detail: "", days: 30, value: pick("Certification 30", "cad"), carrySaved: 0, internallyControllable: true, owner: "", confidence: "medium", measuredAgainst: "30 day step" },
      { id: "material", title: "Stock 30 days less", detail: "", days: 30, value: pick("Stock 30", "dio"), carrySaved: 0, internallyControllable: true, owner: "", confidence: "medium", measuredAgainst: "30 day step" },
    ],
  } as unknown as CyclePosition,
  ledger: { stillAwaiting: 0 } as never,
  vendors: [],
  retention: null, // a balance only, no release speed is stated
  perDay: revPerDay,
  financingRatePct: 0,
  owners: { certification: null, collection: null, material: null },
});
ranked.forEach((l, i) => console.log(`${i + 1}. ${l.label}: ${l.cash?.toFixed(2)} Cr once, carry ${l.carry}`));
const order = ranked.map((l) => l.cash ?? 0);
check("ranking is cash released, largest first", order.every((v, i) => i === 0 || order[i - 1] >= v));

console.log("\n== LEVER TABLE ==");
console.log("PRICED   collection (DSO 102.6) at revenue/day 8.1900: 10, 30, to 70-day target");
console.log("PRICED   certification (unbilled net 400.35, 48.9 days) at revenue/day: 10, 30; no certification window published, floor 0");
console.log("PRICED   site stock (inventories 343.75, 116.0 days) at materials/day 2.9634: 10, 30");
console.log("BALANCE  retention 211.00 Cr, released at project end per contract or swapped for bank guarantee: no speed stated, not priced");
console.log("NOT PRICED  vendor credit (DPO 56.6): terms stated per scheme, paying later is never a saving, lever held");
console.log("NOT PRICED  interest: only ranges published (6.65 to 9.51 percent, 6.83 to 10.50 percent), no single rate");
console.log("NOT PRICED  customer advances 796.42 Cr: funding, not a use");

console.log(`\n${fails === 0 ? "ALL ASSERTS PASS" : fails + " ASSERT(S) FAILED"}`);
if (fails) process.exit(1);
