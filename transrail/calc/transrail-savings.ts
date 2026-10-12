/**
 * Transrail Lighting Limited (TR-2). Scenario arithmetic through the app's own
 * pure functions. Rs crore. Run: npx tsx scripts/_tmp-transrail-savings.ts
 * BREAK=1..5 deliberately breaks one assert (self-test of the asserts).
 */
import { simulate, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";

const BREAK = process.env.BREAK ?? "";

// ---- INPUTS (every one from a page image, see calc/notes.md) ----
// AR FY26 PDF p.248 (printed 277), consolidated: revenue from operations + other operating revenue.
const REVENUE_CONSOL = 6779.95 + 100.16; // 6,880.11; deck p.15 prints 6,880 (consolidated)
const REVENUE_STANDALONE = 6778.47 + 100.16; // 6,878.63, AR p.160
const RECEIVABLES = 1737.68; // consolidated trade receivables, AR p.247
const CONTRACT_ASSETS = 2515.24; // both statements, AR p.185
const MGMT_WC_DAYS = 85; // Q1 FY27 deck PDF p.19 (printed 18)
const RATE_PCT = 10.31; // AR p.199 (printed 228) note i, cash credit and WCDL average
const CASH_CREDIT_DRAWN = 0; // AR p.198 (printed 227): cash credit from consortium bankers, "-" at 31 Mar 2026
const WCDL_DRAWN = 252.49; // same page
const CAP = CASH_CREDIT_DRAWN + WCDL_DRAWN;
const STEPS = [10, 30];

const revenue = BREAK === "5" ? REVENUE_STANDALONE : REVENUE_CONSOL;
const perDay = revenue / 365;
const rate = BREAK === "2" ? 10.5 : RATE_PCT;

const dsoNow = (RECEIVABLES / REVENUE_CONSOL) * 365;
const cadNow = (CONTRACT_ASSETS / REVENUE_CONSOL) * 365;

// No contract terms are known, so none are passed: floors stay at the simulator's own default.
const basis: SimBasis = {
  days: { dio: null, cad: cadNow, dso: dsoNow, dpo: 100 /* test fixture, never printed */ },
  perDay: { dio: null, cad: perDay * (BREAK === "3" ? 1.01 : 1), dso: perDay, dpo: perDay },
  balances: { dio: null, cad: CONTRACT_ASSETS, dso: RECEIVABLES, dpo: null },
  terms: { certification: null, payment: null, vendor: BREAK === "4" ? 160 : null },
  workingCapital: null,
  ratePct: rate,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const fails: string[] = [];
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}: ${detail}`);
  if (!ok) fails.push(name);
};
const f = (n: number) => n.toFixed(2);

// Independent path: integer paise, BigInt, no shared code with the simulator.
const cashIndependent = (days: number) => {
  const hundredths = 688011n; // 6,880.11 as an integer count of 0.01 crore
  return Number((BigInt(days) * hundredths * 1000n) / 365n) / 1e5;
};

console.log("== BOUNDS READ FROM THE SIMULATOR (no terms passed)");
for (const l of leversFor(basis)) console.log(`${l.key} now ${f(l.now)} min ${f(l.min)} max ${f(l.max)} perDay ${f(l.perDay)} target ${l.target}`);
console.log(`revenue per day ${f(perDay)} (revenue ${f(revenue)} / 365). Cap ${f(CAP)} = cash credit ${CASH_CREDIT_DRAWN} + WCDL ${WCDL_DRAWN}. Rate ${rate}%`);

const sign = BREAK === "1" ? -1 : 1; // BREAK=1 lengthens the wait instead of cutting it
const rows: { lever: string; step: number; from: number; to: number; cash: number; applied: number; interest: number }[] = [];

for (const step of STEPS) {
  const req: Partial<Record<LeverKey, number>> = { cad: cadNow - sign * step, dso: dsoNow - sign * step };
  const res = simulate(basis, req);
  for (const l of res.levers.filter((x) => x.key === "cad" || x.key === "dso")) {
    const applied = Math.min(l.cash, CAP); // saved only if released cash repays cash credit + WCDL
    const interest = (applied * rate) / 100;
    rows.push({ lever: l.key, step, from: l.now, to: l.next, cash: l.cash, applied, interest });
    check(`A1 no negative release ${l.key} ${step}d`, l.cash >= 0, `cash ${f(l.cash)}`);
    check(`bounds ${l.key} ${step}d`, l.next >= l.min && l.next <= l.max, `next ${f(l.next)} in [${f(l.min)}, ${f(l.max)}]`);
    check(`A3 independent cross-check ${l.key} ${step}d`, Math.abs(l.cash - cashIndependent(step)) < 0.01, `sim ${f(l.cash)} vs bigint ${f(cashIndependent(step))}`);
    check(`A2 interest ${l.key} ${step}d`, applied <= CAP + 1e-9 && Math.abs(interest / applied - 0.1031) < 1e-9, `applied ${f(applied)} <= ${f(CAP)}, interest ${f(interest)}`);
  }
}

// Management-basis row (days of revenue): not a simulator leg, same value of a day.
console.log("== MANAGEMENT WORKING-CAPITAL DAYS ROW (deck p.19 basis, value of a day = revenue per day)");
const mgmt = STEPS.map((step) => {
  const cash = step * perDay;
  const applied = Math.min(cash, CAP);
  const interest = (applied * rate) / 100;
  check(`A1 no negative release wc ${step}d`, cash >= 0, `cash ${f(cash)}`);
  check(`A3 independent cross-check wc ${step}d`, Math.abs(cash - cashIndependent(step)) < 0.01, `${f(cash)} vs ${f(cashIndependent(step))}`);
  check(`A2 interest wc ${step}d`, applied <= CAP + 1e-9 && Math.abs(interest / applied - 0.1031) < 1e-9, `applied ${f(applied)}, interest ${f(interest)}`);
  console.log(`wc ${step}d: ${MGMT_WC_DAYS} -> ${MGMT_WC_DAYS - step} days, cash ${f(cash)}, applied ${f(applied)}, interest a year ${f(interest)}`);
  return { step, cash, applied, interest };
});

// A4: payables never release cash, whatever is asked.
for (const ask of [130, 1000, 100]) {
  const r = simulate(basis, { dpo: ask }).levers.find((x) => x.key === "dpo")!;
  check(`A4 payables release no cash (ask ${ask} days)`, r.cash <= 0 && r.next <= r.now, `cash ${f(r.cash)}, next ${f(r.next)} (ceiling ${f(r.max)})`);
}
const both = simulate(basis, { cad: cadNow - 10, dso: dsoNow - 10, dpo: 1000 }).released;
const without = simulate(basis, { cad: cadNow - 10, dso: dsoNow - 10 }).released;
check("A4 asking for later payment changes nothing", Math.abs(both - without) < 1e-9, `${f(both)} vs ${f(without)}`);

// A5: basis match. Revenue per day is the consolidated figure the deck prints; a standalone figure fails.
check("A5 basis: revenue consolidated 6,880.11 and deck prints 6,880", Math.abs(revenue - 6880.11) < 0.005 && Math.round(revenue) === 6880, `revenue ${f(revenue)}`);
check("A5 basis: per day equals revenue / 365 exactly", Math.abs(basis.perDay.dso! - revenue / 365) < 1e-12 && Math.abs(basis.perDay.cad! - revenue / 365) < 1e-12, `dso ${f(basis.perDay.dso!)} cad ${f(basis.perDay.cad!)}`);
check("A5 cap is cash credit nil plus WCDL 252.49", Math.abs(CAP - 252.49) < 1e-9, `cap ${f(CAP)}`);

// Ranking through the app's lever pricer (cash and carry already capped; no financing line).
const act = (id: "certification" | "collection", days: number, ours: boolean) => {
  const cash = days * perDay;
  const carry = (Math.min(cash, CAP) * rate) / 100;
  return { id, title: id, detail: "", days, value: cash, carrySaved: carry, internallyControllable: ours, owner: "", confidence: "low" as const, measuredAgainst: "scenario" };
};
const priced = priceLevers({
  position: { actions: [act("certification", 10, true), act("collection", 10, false)] } as never,
  ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as never,
  vendors: [],
  retention: null,
  perDay,
  financingRatePct: rate,
  owners: { certification: null, collection: null, material: null },
});
console.log("== priceLevers (10 day step, interest capped)");
for (const l of priced) console.log(`${l.id}: cash ${f(l.cash ?? 0)} carry ${f(l.carry)} days ${f(l.days ?? 0)} ours ${l.ours}`);
check("levers: two rows, no unrequested lever", priced.length === 2, `${priced.length} rows`);

console.log("== TABLE (rows overlap, never added)");
for (const r of rows) console.log(`${r.lever} ${r.step}d: ${f(r.from)} -> ${f(r.to)} days, cash ${f(r.cash)}, applied ${f(r.applied)}, interest ${f(r.interest)}`);

if (fails.length) {
  console.log(`\nFAILED ${fails.length}: ${fails.join(" | ")}`);
  process.exit(1);
}
console.log("\nALL ASSERTS PASS");
void mgmt;
