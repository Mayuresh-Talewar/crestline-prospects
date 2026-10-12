/*
  J. Kumar Infraprojects (JKIL), JK-3 savings scenarios. TEMPORARY: deleted after the run.
  Basis: STANDALONE, AR FY2025-26 vintage (filed 27 Aug 2026). Rs crore.
  Uses the app's own pure functions: simulate (cycle-simulation) and priceLevers (levers).
  Break switch: BREAK=1..4 perturbs one assert's input so that assert must fail.
*/
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = Number(process.env.BREAK ?? 0);

// ---- inputs, each from data.md (AR26 standalone) ----
const REVENUE = 5693.89; // AR26 PDF p89 (printed 173)
const RECEIVABLES = 1485.29; // AR26 PDF p89 (printed 172)
const PAYABLES = 849.54; // AR26 PDF p89
const PAYABLE_DAYS = 82.8; // computed in jk-calc (on material cost)
const BORROWINGS = 587.44; // AR26 PDF p100 (printed 195): Total Debt 58,744.35 lakh, image-checked
const BUCKET_6M_1Y = 141.15; // AR26 PDF p97 (printed 188)
const RATES = [8.1, 12.35]; // AR26 PDF p100 (printed 194): overdraft low end, cash credit high end

const perDay = REVENUE / 365; // value of a day
const dsoNow = RECEIVABLES / perDay;

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: dsoNow, dpo: PAYABLE_DAYS },
  perDay: { dio: null, cad: null, dso: perDay, dpo: PAYABLES / PAYABLE_DAYS },
  balances: { dio: null, cad: null, dso: RECEIVABLES, dpo: PAYABLES },
  // No payment term and no vendor term is passed: the filings state none, and a
  // vendor term would raise the payables ceiling (rule 1). DSO floor is therefore 0.
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATES[0],
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const fmt = (n: number) => n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const failures: string[] = [];
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`  [${ok ? "PASS" : "FAIL"}] ${name}: ${detail}`);
  if (!ok) failures.push(name);
};

console.log("== J. Kumar Infraprojects, STANDALONE, AR FY2025-26 vintage (Rs crore) ==");
console.log(`Value of a day = ${fmt(REVENUE)} / 365 = ${perDay.toFixed(4)} Cr`);
console.log(`Receivable days today (closing) = ${fmt(RECEIVABLES)} / ${perDay.toFixed(4)} = ${dsoNow.toFixed(1)} days`);
console.log(`Borrowings drawn (cap) = ${fmt(BORROWINGS)} Cr | disclosed rate ends ${RATES.join("% and ")}%`);
console.log("");

const scenarios = [
  { id: "S10", label: "Receivables, 10-day step", days: 10 },
  { id: "S30", label: "Receivables, 30-day step", days: 30 },
  { id: "SBK", label: "6 m to 1 y overdue bucket, in days of revenue", days: BUCKET_6M_1Y / perDay },
];

for (const s of scenarios) {
  const res = simulate(basis, { dso: dsoNow - s.days });
  const dso = res.levers.find((l) => l.key === "dso")!;
  let released = res.released;
  if (BREAK === 1 && s.id === "S10") released = -released; // assert 1 must catch this
  const cash = Math.min(released, BORROWINGS);

  // Interest through the app's lever pricing, once per disclosed end.
  const rates = BREAK === 2 && s.id === "S10" ? [...RATES, 11.5] : RATES; // 11.5 is our computed rate: never allowed
  const interest = rates.map((rate) => {
    const position = {
      actions: [
        {
          id: "collection",
          title: s.label,
          detail: "",
          days: s.days,
          value: cash,
          carrySaved: null,
          internallyControllable: false,
          owner: "",
          confidence: "medium",
          measuredAgainst: "Rs 5,693.89 Cr / 365",
        },
      ],
    } as unknown as CyclePosition;
    const ledger = { stillAwaiting: 0 } as unknown as CashLedgerSummary;
    const [lever] = priceLevers({
      position,
      ledger,
      vendors: [],
      retention: null,
      perDay,
      financingRatePct: rate,
      owners: { certification: null, collection: null, material: null },
    });
    return { rate, carry: lever.carry };
  });

  console.log(`${s.id} ${s.label}`);
  console.log(`  days ${dsoNow.toFixed(1)} -> ${dso.next.toFixed(1)} (moved ${dso.moved.toFixed(2)}) | cash released ${fmt(released)} Cr | within borrowings cap: ${fmt(cash)} Cr (${((cash / BORROWINGS) * 100).toFixed(1)}% of ${fmt(BORROWINGS)})`);
  for (const i of interest) console.log(`  interest a year at ${i.rate}%: ${fmt(i.carry)} Cr`);

  check("no negative release", released >= 0, `${fmt(released)} Cr`);
  check(
    "interest only at the two disclosed ends, within the cap",
    interest.length === 2 &&
      interest.every((i) => RATES.includes(i.rate) && i.carry <= (BORROWINGS * i.rate) / 100 + 1e-9),
    interest.map((i) => `${i.rate}%`).join(", "),
  );
  const independent = (BREAK === 3 && s.id === "S10" ? s.days + 1 : s.days) * perDay; // days x valueOfADay, no app code
  check("independent cross-check (days x value of a day = simulate)", Math.abs(independent - released) < 0.005, `${fmt(independent)} vs ${fmt(released)}`);
  console.log("");
}

// Payables never release cash: try to stretch them 30 days.
const stretch = simulate(basis, { dpo: PAYABLE_DAYS + 30 });
const dpo = stretch.levers.find((l) => l.key === "dpo")!;
const dpoCash = BREAK === 4 ? 30 * basis.perDay.dpo! : dpo.cash;
console.log(`Payables stretch attempt: ${PAYABLE_DAYS} -> asked ${PAYABLE_DAYS + 30}, simulator held at ${dpo.next} (ceiling ${dpo.max}, no vendor term passed)`);
check("payables never release cash", dpoCash <= 0 && stretch.released <= 0, `${fmt(dpoCash)} Cr`);

console.log("");
console.log("Rows overlap and are never added. Interest saved only if the cash repays debt. Scenario, not a forecast.");
if (failures.length) {
  console.log(`ASSERTS FAILED (BREAK=${BREAK}): ${failures.join("; ")}`);
  process.exit(1);
}
console.log(`ALL ASSERTS PASSED (BREAK=${BREAK})`);
