// BU-S23 Bucon Engineers: 10 and 30 day steps on the receivable leg (gross current assets 290 days).
// Inputs: CRISIL rationale 2 Sep 2025, operating income FY25 provisional 171.24 Cr; GCA 290 days at 31 Mar 2025.
import { simulate, leversFor, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = process.env.BREAK ?? "";
const OPINC = 171.24;
const PER_DAY = OPINC / 365;
const GCA_DAYS = 290;

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: GCA_DAYS, dpo: null },
  perDay: { dio: null, cad: null, dso: BREAK === "basis" ? OPINC / 360 : PER_DAY, dpo: null },
  balances: { dio: null, cad: null, dso: GCA_DAYS * PER_DAY, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === "interest" ? 9 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let fails = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}: ${detail}`);
  if (!ok) fails++;
};

const spec = leversFor(basis).find((l) => l.key === "dso")!;
console.log(`lever dso: now ${spec.now}, min ${spec.min}, max ${spec.max}, perDay ${spec.perDay}`);
console.log(`per day (Rs Cr) = ${OPINC} / 365 = ${PER_DAY}`);
console.log(`valueOfADay cash = ${valueOfADay(PER_DAY, 0).cash}`);

for (const step of [10, 30]) {
  const r = simulate(basis, { dso: GCA_DAYS - step });
  const cash = BREAK === "negative" && step === 10 ? -r.released : r.released;
  const cross = step * PER_DAY;
  console.log(`\n== ${step} days off GCA ${GCA_DAYS} -> ${GCA_DAYS - step} ==`);
  console.log(`released Rs Cr: ${cash}  (rounded 2dp ${cash.toFixed(2)})  interest/yr: ${r.carry}`);
  check(`no negative release (${step}d)`, cash >= 0, String(cash));
  check(`interest zero (${step}d)`, r.carry === 0, String(r.carry));
  const crossOk = BREAK === "cross" ? false : Math.abs(cash - cross) < 1e-9;
  check(`cross-check days x per day (${step}d)`, crossOk, `${step} x ${PER_DAY} = ${cross} vs ${cash}`);
  check(`valueOfADay agrees (${step}d)`, Math.abs(valueOfADay(PER_DAY, 0).cash! * step - cash) < 1e-9, "");
  const dpoMove = simulate(basis, { dpo: 50 });
  check(`payables never release cash (${step}d)`, BREAK === "payables" ? false : dpoMove.released === 0 && dpoMove.levers.every((l) => l.key !== "dpo" || l.cash === 0), `dpo lever absent or zero; released ${dpoMove.released}`);
  check(`basis matches (${step}d)`, Math.abs(spec.perDay - PER_DAY) < 1e-12, `${spec.perDay} vs ${PER_DAY}`);
}
console.log(fails ? `\nFAILED ${fails}` : "\nALL PASS");
process.exit(fails ? 1 : 0);
