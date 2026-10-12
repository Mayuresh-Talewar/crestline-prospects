// Pawar Patkar Constructions Private Limited: savings scenarios on GCA days.
// Inputs (Acuite Ratings rationale, 1 Sep 2025, standalone): FY25 provisional revenue 552.35 Cr,
// gross current asset (GCA) days 106 (FY25 prov.), 55 (FY24). No split is published, so the GCA
// days are carried on ONE lever (the receivable leg) at revenue per day. No interest rate is
// disclosed, so ratePct = 0 and no interest is priced. No terms are passed: the clamp bounds
// are the simulator's own (min 0, max = max(days*1.4, days+30)).
// BREAK=1..4 perturbs the matching assert so it can be proven to fail.
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const REVENUE = 552.35;
const GCA = 106;
const PER_DAY = REVENUE / 365;
const BREAK = Number(process.env.BREAK ?? 0);

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: GCA, dpo: 40 }, // dpo 40 is a TEST-ONLY placeholder for the payables assert
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const vod = valueOfADay(PER_DAY, 0);
let fails = 0;
const check = (n: number, name: string, ok: boolean) => {
  const pass = ok;
  if (!pass) fails++;
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}`);
};

console.log(`revenue ${REVENUE} Cr (FY25 prov., standalone) / 365 = ${PER_DAY.toFixed(6)} Cr per day`);
console.log(`valueOfADay: cash ${vod.cash?.toFixed(6)} carry ${vod.carry}`);
console.log(`GCA days now ${GCA}`);

for (const step of [10, 30]) {
  const r = simulate(basis, { dso: GCA - step });
  const lever = r.levers.find((l) => l.key === "dso")!;
  const independent = step * PER_DAY;
  console.log(`\nStep ${step} days: ${GCA} -> ${lever.next} days`);
  console.log(`  released ${r.released.toFixed(6)} Cr (${(r.released).toFixed(2)})  independent ${independent.toFixed(6)}  carry ${r.carry}`);
  check(1, `${step}d: no negative release`, (BREAK === 1 ? -1 : r.released) >= 0);
  check(2, `${step}d: interest = 0`, (BREAK === 2 ? 1 : r.carry) === 0 && vod.carry === 0);
  check(3, `${step}d: simulate equals days x per day (1e-9)`, Math.abs(r.released - (BREAK === 3 ? independent + 1 : independent)) < 1e-9);
  check(3, `${step}d: valueOfADay x days equals simulate (1e-9)`, Math.abs(r.released - step * (vod.cash as number) + (BREAK === 3 ? 1 : 0)) < 1e-9);
}

// Payables never release cash: stretching vendor credit past today is clamped (no terms = no headroom).
const stretch = simulate(basis, { dpo: 70 });
const dpo = stretch.levers.find((l) => l.key === "dpo")!;
console.log(`\nStretch vendor credit 40 -> 70 requested: lands at ${dpo.next}, cash ${dpo.cash}`);
check(4, "payables: stretching releases no cash", (BREAK === 4 ? 1 : dpo.cash) === 0 && dpo.next === 40);

console.log(fails === 0 ? "\nALL ASSERTS PASS" : `\n${fails} ASSERT(S) FAILED`);
process.exit(fails === 0 ? 0 : 1);
