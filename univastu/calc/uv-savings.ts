// UV-S23 Univastu India Limited: contract asset days scenarios (consolidated FY26, Rs Cr)
// BREAK=1..5 deliberately breaks one assert to prove it fails visibly.
import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0);
const L = 100; // 1 Cr = 100 lakh

// Inputs (AR FY26 consolidated: statement of P&L; note 16 other current assets)
const revenueL = 24334.86;
const unbilledL = 6636.32;
const contractAssetsNetL = 65529.42 - 56782.77; // work performed less progress billing
const revenueCr = revenueL / L;
const unbilledCr = unbilledL / L;
const caCr = contractAssetsNetL / L;
const legCr = unbilledCr + caCr; // the 153.8 Cr
const perDay = revenueCr / 365;
const days = legCr / perDay;

const fail = (m: string) => { throw new Error("ASSERT FAILED: " + m); };
const ok = (c: boolean, m: string) => { if (!c) fail(m); console.log("ok  " + m); };

const none = { dio: null, cad: null, dso: null, dpo: null };
const basis: SimBasis = {
  days: { ...none, cad: days },
  perDay: { ...none, cad: perDay },
  balances: { ...none, cad: legCr },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 9 : 0, // no interest ruled
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

console.log("Revenue FY26 consolidated Cr", revenueCr.toFixed(4));
console.log("Unbilled revenue Cr", unbilledCr.toFixed(4), "| net contract assets Cr", caCr.toFixed(4));
console.log("LEG (unbilled + net contract assets) Cr", legCr.toFixed(4), "(printed 153.8)");
console.log("PER DAY Cr", perDay.toFixed(4), "| contract asset days", days.toFixed(2));
console.log("valueOfADay", valueOfADay(perDay, 0));

ok(Math.abs(legCr - 153.8) < 0.05, "basis: leg equals the printed 153.8 Cr (unbilled + net contract assets)");
ok(Math.abs(days * perDay - legCr) < 1e-9, "basis: days x per day returns the leg balance");

for (const step of [10, 30]) {
  const r = simulate(basis, { cad: days - step });
  const cad = r.levers.find((l) => l.key === "cad")!;
  const released = BREAK === 1 ? -r.released : r.released;
  const independent = BREAK === 3 ? step * perDay * 1.01 : step * perDay;
  console.log(`\n${step} days less: moved ${cad.moved.toFixed(2)} days, released Cr ${r.released.toFixed(4)}, carry Cr ${r.carry.toFixed(4)}, days after ${cad.next.toFixed(2)}`);
  ok(released >= 0, `${step}d: no negative release`);
  ok(r.carry === 0, `${step}d: interest = 0`);
  ok(Math.abs(r.released - independent) < 1e-9, `${step}d: simulate equals days x per day (${independent.toFixed(4)})`);
  ok(Math.abs(cad.moved + step) < 1e-9, `${step}d: clamp left the step intact (floor 0, no terms passed)`);
  ok(valueOfADay(perDay, 0).carry === 0, `${step}d: valueOfADay carry 0`);
}

// Payables never release cash: give the simulator a payable leg and ask for more vendor credit
const withDpo: SimBasis = {
  ...basis,
  days: { ...basis.days, dpo: 60 },
  perDay: { ...basis.perDay, dpo: BREAK === 4 ? 0.5 : 0.5 },
  balances: { ...basis.balances, dpo: 30 },
};
const stretched = simulate(withDpo, { dpo: BREAK === 4 ? 40 : 200 });
const dpoLever = stretched.levers.find((l) => l.key === "dpo")!;
console.log("\nVendor credit asked 200 days: next", dpoLever.next, "cash", dpoLever.cash);
ok(dpoLever.cash === 0 && dpoLever.next === 60, "payables: stretching vendor credit releases no cash (held at today's days)");

if (BREAK === 5) (basis.balances as { cad: number }).cad = legCr * 1.2;
ok(Math.abs((basis.balances.cad as number) / perDay - days) < 1e-9, "basis: lever balance / per day equals the days used");
console.log("\nALL ASSERTS PASSED");
