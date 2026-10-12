/**
 * AGC Infracon: value of a day and 10/30-day steps. TEMP, copied to the prospect
 * folder then deleted. Unit: Rs crore. Run: npx tsx scripts/_tmp-agc-savings.ts
 * BREAK=1..4 breaks one assert on purpose (negative release, interest,
 * cross-check, payables).
 *
 * LIMIT: no receivable, unbilled or payable days are published for AGC. The
 * stand-in "now" days below only keep the clamp from binding; cash released is
 * days moved x value of a day, so the answer does not depend on them.
 */
import { simulate, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { priceLevers, costOfFinancing } from "@/lib/insights/levers";

const BREAK = Number(process.env.BREAK ?? 0);
const REVENUE = 567.63; // Rs Cr, FY24, Infomerics 23 Apr 2025, standalone
const PER_DAY = REVENUE / (BREAK === 3 ? 360 : 365);
const RATE = BREAK === 2 ? 5 : 0; // no interest: no rate is published
const NOW = 100; // stand-in days, see LIMIT

const basis = (): SimBasis => ({
  days: { dio: null, cad: NOW, dso: NOW, dpo: 60 },
  perDay: { dio: null, cad: PER_DAY, dso: PER_DAY, dpo: PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  // No contract terms are published: nothing passed. Clamp floors fall to 0.
  terms: { certification: null, payment: null, vendor: BREAK === 4 ? 100 : null },
  workingCapital: null,
  ratePct: RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
});

const fails: string[] = [];
const check = (name: string, ok: boolean) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok) fails.push(name);
};
const run = (m: Partial<Record<LeverKey, number>>) => simulate(basis(), m);
const cashOf = (r: ReturnType<typeof run>, k: LeverKey) => r.levers.find((l) => l.key === k)?.cash ?? 0;
// independent route: integer arithmetic in hundredths of a crore, no floats
const indep = (days: number) => Number((BigInt(days) * 56763n * 100000n) / 36500n) / 100000;

console.log(`Value of a day = ${REVENUE} / ${BREAK === 3 ? 360 : 365} = Rs ${PER_DAY.toFixed(4)} Cr (Rs ${(PER_DAY * 100).toFixed(2)} lakh)`);
console.log(`Stand-in days for the clamp: ${NOW} (no published baseline). Terms passed: none. Interest rate: ${RATE}%`);
const sgn = BREAK === 1 ? -1 : 1;
for (const step of [10, 30]) {
  const cad = run({ cad: NOW - sgn * step });
  const dso = run({ dso: NOW - sgn * step });
  const both = run({ cad: NOW - sgn * step, dso: NOW - sgn * step });
  console.log(`\n${step} days: unbilled wait ${cashOf(cad, "cad").toFixed(2)} | unpaid wait ${cashOf(dso, "dso").toFixed(2)} | both ${both.released.toFixed(2)} Rs Cr (rows overlap, never added in print) | carry ${both.carry}`);
  console.log(`   moved: cad ${both.levers.find((l) => l.key === "cad")?.moved}, dso ${both.levers.find((l) => l.key === "dso")?.moved}`);
  check(`${step}d no negative release`, [cad, dso, both].every((r) => r.released >= 0 && r.levers.every((l) => l.cash >= 0)));
  check(`${step}d interest = 0`, both.carry === 0 && cad.carry === 0 && dso.carry === 0);
  check(`${step}d cross-check (integer route) one wait`, Math.abs(cashOf(cad, "cad") - indep(step)) < 1e-4);
  check(`${step}d cross-check both waits`, Math.abs(both.released - 2 * indep(step)) < 2e-4);
}
// a request below the clamp floor is taken to the floor, not past it
const deep = run({ cad: -50 });
console.log(`\nRequest of -50 days on the unbilled wait clamps to ${deep.levers.find((l) => l.key === "cad")?.next} days, cash ${cashOf(deep, "cad").toFixed(2)}`);
check("clamp floor holds (cash <= NOW x per day)", cashOf(deep, "cad") <= NOW * PER_DAY + 1e-9);
// payables: asking for 10 more vendor days with no stated terms releases nothing
const pay = run({ dpo: 70 });
console.log(`Payables +10 days, no vendor terms stated: cash ${cashOf(pay, "dpo")}`);
check("payables never release cash", cashOf(pay, "dpo") === 0 && pay.released === 0);

// lever ranking: priceLevers and costOfFinancing at rate 0
const levers = priceLevers({
  position: {
    actions: [{ id: "collection", title: "Cut the wait to be paid by 10 days", value: indep(10), carrySaved: null, days: 10, internallyControllable: false, measuredAgainst: "value of a day" }],
  } as never,
  ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as never,
  vendors: [],
  retention: null,
  perDay: PER_DAY,
  financingRatePct: RATE,
  owners: { certification: null, collection: null, material: null },
});
console.log(`priceLevers: ${levers.map((l) => `${l.id} cash ${l.cash?.toFixed(2)} carry ${l.carry}`).join("; ")}; costOfFinancing ${costOfFinancing({ peakFundingNeed: 0 } as never, RATE)}`);
check("priceLevers carry = 0", levers.every((l) => l.carry === 0));

if (fails.length) {
  console.log(`\nFAILED ${fails.length}: ${fails.join(" | ")}`);
  process.exit(1);
}
console.log("\nALL ASSERTS PASS");
