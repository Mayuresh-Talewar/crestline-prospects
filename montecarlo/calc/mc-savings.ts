/**
 * MC-S23: Montecarlo Limited, STANDALONE FY25 (AR 2024-25), Rs Cr, 365 days, closing balances.
 * Runs the app's own simulate / leversFor / valueOfADay. No terms passed, rate 0 (no single rate disclosed).
 * BREAK=<name> flips one assert's input so the assert must fail visibly.
 */
import { leversFor, simulate, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = process.env.BREAK ?? "";
const REVENUE = 4518.8; // note 29, Rs Cr
const MATERIALS = 1577.35; // note 31, consumption of construction material
const REC = 1156.49; // note 11, net of ECL
const UNBILLED = 639.99; // note 15
const STOCK = 191.91; // note 10, construction materials
const RETENTION = 442.67; // note 39(c), balance only
const ADVANCES = 620.08; // note 39(c), balance only (not a lever)
const CLIENT_TERM_LOW = 30; // note 11(b) lower end, goods only; used ONLY as a floor guard, never passed as a term

const revPerDay = REVENUE / 365;
const matPerDay = MATERIALS / 365;
const days = { dio: STOCK / matPerDay, cad: UNBILLED / revPerDay, dso: REC / revPerDay, dpo: null };

const basis: SimBasis = {
  days: days as SimBasis["days"],
  perDay: { dio: matPerDay, cad: revPerDay, dso: revPerDay, dpo: null },
  balances: { dio: STOCK, cad: UNBILLED, dso: REC, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: { dpo: "No per-vendor terms published; vendor credit is never priced." },
};

const f2 = (n: number) => n.toFixed(2);
const f1 = (n: number) => n.toFixed(1);
let failures = 0;
function check(name: string, okIn: boolean, detail: string) {
  const ok = BREAK && name.startsWith(BREAK) ? !okIn : okIn; // BREAK=<name prefix> inverts that assert so it must fail visibly
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}  ${detail}`);
  if (!ok) failures++;
}

console.log("INPUTS (Rs Cr)");
console.log(`revenue ${REVENUE}  materials ${MATERIALS}  receivables ${REC}  unbilled ${UNBILLED}  stock ${STOCK}  retention ${RETENTION}`);
console.log(`revenue per day = ${REVENUE}/365 = ${revPerDay.toFixed(6)}`);
console.log(`materials per day = ${MATERIALS}/365 = ${matPerDay.toFixed(6)}`);
console.log(`days: DIO ${f1(days.dio)}  contract-asset ${f1(days.cad)}  DSO ${f1(days.dso)}  DPO not priced`);

console.log("\nCLAMP BOUNDS (leversFor, no terms passed)");
const specs = leversFor(basis);
for (const l of specs) console.log(`${l.key}  now ${f2(l.now)}  min ${f2(l.min)}  max ${f2(l.max)}  target ${l.target}  side ${l.side}  perDay ${l.perDay.toFixed(6)}`);

const run = (moves: Partial<Record<LeverKey, number>>) => simulate(basis, moves);
const cashOf = (r: ReturnType<typeof simulate>, k: LeverKey) => r.levers.find((l) => l.key === k)?.cash ?? 0;

console.log("\nSCENARIOS (simulate, one lever at a time)");
const single: Record<string, number> = {};
for (const [k, label] of [["dso", "collection"], ["cad", "certification"], ["dio", "materials"]] as const) {
  for (const step of [10, 30]) {
    const r = run({ [k]: (basis.days[k] as number) - step });
    const lv = r.levers.find((l) => l.key === k)!;
    single[`${k}${step}`] = lv.cash;
    console.log(`${label} ${step} days: ${f1(lv.now)} -> ${f1(lv.next)} days, released ${f2(lv.cash)} Cr once, carry ${f2(r.carry)}`);
  }
}

console.log("\nCOMBINED (ONE simulate run, all three moved legs together; one scenario, not a sum of rows)");
const combined: Record<number, ReturnType<typeof simulate>> = {};
for (const step of [10, 30]) {
  combined[step] = run({ dso: days.dso - step, cad: days.cad - step, dio: days.dio - step });
  const r = combined[step];
  console.log(`all three ${step} days: released ${f2(r.released)} Cr once, carry ${f2(r.carry)}; ` + r.levers.map((l) => `${l.key} ${l.now.toFixed(1)}->${l.next.toFixed(1)}`).join(", "));
}

console.log("\nVALUE OF A DAY (valueOfADay, rate 0)");
const vd = valueOfADay(revPerDay, 0);
console.log(`revenue day cash ${f2(vd.cash!)}  carry ${f2(vd.carry!)}`);

console.log("\nBALANCES ONLY (not simulated)");
console.log(`retention ${RETENTION} Cr = ${f1(RETENTION / revPerDay)} days of revenue; release basis not published`);
console.log(`customer advances ${ADVANCES} Cr: a balance owed to clients, not a lever`);

// ---------- asserts ----------
console.log("\nASSERTS");
const allCash = [...Object.values(single), combined[10].released, combined[30].released];
check("no-negative-release", Math.min(...allCash) >= 0, `min cash ${f2(Math.min(...allCash))}`);
check("interest-zero", combined[30].carry === 0 && vd.carry === 0, `combined carry ${combined[30].carry}, valueOfADay carry ${vd.carry}`);
for (const step of [10, 30]) {
  const exp = step * revPerDay;
  const got = single[`dso${step}`];
  check(`cross-check-collection-${step}`, Math.abs(got - exp) < 1e-9 && Math.abs(single[`cad${step}`] - step * vd.cash!) < 1e-9, `days x per day ${f2(exp)} vs simulate ${f2(got)}`);
  check(`cross-check-materials-${step}`, Math.abs(single[`dio${step}`] - (step * MATERIALS) / 365) < 1e-9, `${f2((step * MATERIALS) / 365)} vs ${f2(single[`dio${step}`])}`);
  check(`combined-is-one-run-${step}`, Math.abs(combined[step].released - (cashOf(combined[step], "dso") + cashOf(combined[step], "cad") + cashOf(combined[step], "dio"))) < 1e-9, `released ${f2(combined[step].released)}`);
}
check("payables-never-release", cashOf(combined[30], "dpo") === 0 && !specs.some((l) => l.key === "dpo"), "no dpo lever, dpo cash 0");
check("basis-match-receivables", Math.abs(days.dso * revPerDay - REC) < 1e-6, `${f2(days.dso * revPerDay)} vs ${f2(REC)}`);
check("basis-match-unbilled", Math.abs(days.cad * revPerDay - UNBILLED) < 1e-6, `${f2(days.cad * revPerDay)} vs ${f2(UNBILLED)}`);
check("basis-match-stock-on-materials", Math.abs(days.dio * matPerDay - STOCK) < 1e-6 && basis.perDay.dio !== revPerDay, "stock priced on materials per day, never revenue per day");
check("no-lever-on-foreign-base", specs.every((l) => (l.key === "dio" ? l.perDay === matPerDay : l.perDay === revPerDay)), "dio on materials; cad and dso on revenue");
const dsoAfter = combined[30].levers.find((l) => l.key === "dso")!.next;
check("never-below-client-term", dsoAfter >= CLIENT_TERM_LOW, `receivable days after 30 = ${f1(dsoAfter)} >= ${CLIENT_TERM_LOW}`);
check("retention-not-simulated", !specs.some((l) => (l.balance ?? 0) === RETENTION), "retention is a balance only");

console.log(failures ? `\n${failures} ASSERT(S) FAILED` : "\nALL ASSERTS PASSED");
process.exit(failures ? 1 : 0);
