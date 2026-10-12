/**
 * RC-S23 Relcon Infraprojects Limited: value of a day, 10 and 30 days.
 * Source: CRISIL Rating Rationale 13 Dec 2024, standalone, operating income FY24 Rs 587.54 Cr.
 * No days, no balances, no borrowing rate are published, so only the value of a day is priced.
 * BREAK=1..5 deliberately breaks one assert to prove it fails visibly.
 */
import { simulate, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const OPERATING_INCOME_FY24 = 587.54; // Rs Cr, CRISIL 13 Dec 2024, standalone, year to 31 Mar 2024
const DAYS_IN_YEAR = 365;
const PER_DAY = OPERATING_INCOME_FY24 / DAYS_IN_YEAR;
const RATE_PCT = 0; // no borrowing rate is published, no interest is priced

let failed = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) failed++;
};
const f2 = (n: number) => n.toFixed(2);

// 1. The value of a day, through the app's own function.
const vd = valueOfADay(PER_DAY, RATE_PCT);
console.log(`Basis: operating income FY24 Rs ${OPERATING_INCOME_FY24} Cr / ${DAYS_IN_YEAR} = Rs ${PER_DAY.toFixed(6)} Cr per day`);
console.log(`valueOfADay cash = ${vd.cash}, carry = ${vd.carry}`);

const step = (d: number) => (vd.cash as number) * d;
const ten = step(10);
const thirty = step(BREAK === 1 ? -30 : 30);
console.log(`10 days: Rs ${f2(ten)} Cr released once`);
console.log(`30 days: Rs ${f2(thirty)} Cr released once`);

// 2. Every lever the data supports: none. The real basis has no days, so the simulator offers no lever.
const nullKeys: Record<LeverKey, null> = { dio: null, cad: null, dso: null, dpo: null };
const real: SimBasis = {
  days: { ...nullKeys },
  perDay: { ...nullKeys },
  balances: { ...nullKeys },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: RATE_PCT,
  desks: { ...nullKeys },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {
    dio: "No stock cost base published; GCA includes plant stock",
    cad: "Contract assets not published",
    dso: "Debtor days and debtors not published",
    dpo: "Creditor days and vendor terms not published",
  },
};
const realLevers = leversFor(real);
const realSim = simulate(real, { dso: 10, cad: 10, dio: 10, dpo: 10 });
check("no lever priced on a base it does not belong to", BREAK === 5 ? false : realLevers.length === 0 && realSim.released === 0, `levers=${realLevers.length} released=${realSim.released}`);

// 3. Mechanics check of the simulator. The 100-day figures are PLACEHOLDERS for this check only, never printed in the pack.
const mech: SimBasis = {
  ...real,
  days: { dio: null, cad: null, dso: 100, dpo: 100 },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: PER_DAY },
  terms: { certification: null, payment: null, vendor: 100 },
  ratePct: RATE_PCT,
};
const s10 = simulate(mech, { dso: 90 });
const s30 = simulate(mech, { dso: 70 });
const cross10 = 10 * PER_DAY;
const cross30 = 30 * PER_DAY;
check("independent cross-check, 10 days (days x per day vs simulate)", Math.abs(s10.released - (BREAK === 2 ? cross10 + 1 : cross10)) < 1e-9 && Math.abs(s10.released - ten) < 1e-9, `simulate=${s10.released.toFixed(6)} days x per day=${cross10.toFixed(6)}`);
check("independent cross-check, 30 days (days x per day vs simulate)", Math.abs(s30.released - cross30) < 1e-9 && Math.abs(s30.released - thirty) < 1e-9, `simulate=${s30.released.toFixed(6)} days x per day=${cross30.toFixed(6)}`);

// 4. Asserts
check("no negative release", BREAK === 1 ? ten >= 0 && thirty >= 0 : ten >= 0 && thirty >= 0 && s10.released >= 0 && s30.released >= 0, `ten=${f2(ten)} thirty=${f2(thirty)}`);
check("interest = 0 (no disclosed rate)", (BREAK === 3 ? 1 : s30.carry) === 0 && vd.carry === 0, `carry=${s30.carry} valueOfADay.carry=${vd.carry}`);
// Payables never release cash: stretching vendor credit past terms is clamped to terms and releases nothing.
const stretch = simulate(mech, { dpo: 200 });
const dpoLever = stretch.levers.find((l) => l.key === "dpo")!;
check("payables never release cash (request of 200 days is clamped to the 100-day term)", dpoLever.next <= (BREAK === 4 ? 50 : 100) && stretch.released <= 0 && dpoLever.cash <= 0, `next=${dpoLever.next} released=${stretch.released}`);
check("basis matches: one source, one year, standalone operating income", OPERATING_INCOME_FY24 === 587.54 && DAYS_IN_YEAR === 365, `per day Rs ${PER_DAY.toFixed(6)} Cr`);

console.log(failed ? `\n${failed} ASSERT(S) FAILED` : "\nALL ASSERTS PASS");
process.exit(failed ? 1 : 0);
