/**
 * B. G. SHIRKE (SH-3): savings scenarios on the app's own pure functions.
 * TEMPORARY. Copied to crestline-prospects/bg-shirke/calc/ and deleted from the repo.
 *
 * Units: Rs crore and days. Source: Ind-Ra rating rationale, 20 Feb 2026 (R1), standalone.
 * No contract terms are passed (none are published), so every leg uses the simulator's
 * no-terms bounds: asset legs floor 0, ceiling max(now x 1.4, now + 20 or 30); vendor leg held.
 * No interest: no rate is disclosed, so ratePct = 0 and financingRatePct = 0.
 *
 * Break each assert once with BREAK=neg | interest | cross | payables.
 */
import { simulate, type LeverKey, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = process.env.BREAK ?? "";

// ---- Inputs (data.md, all from R1 unless stated) ----
const REVENUE_FY25 = 5916; // Rs Cr, INR 59.16 bn x 100
const GROSS_WC_DAYS_FY25 = 160.6; // 44% x 365, Computed (sh-calc gross_wc_days_FY25)
const GROSS_WC_DAYS_FY23 = 113.2; // 31% x 365, Computed
const NET_WC_DAYS_FY25 = 62.1; // 17% x 365, Computed (Feb 2026 vintage)
const RATE_PCT = BREAK === "interest" ? 9 : 0; // no disclosed rate: zero
const STEPS = BREAK === "neg" ? [10, 30, -10] : [10, 30];

const valueOfADay = REVENUE_FY25 / 365;

const nulls = <T>(v: T): Record<LeverKey, T> => ({ dio: v, cad: v, dso: v, dpo: v });

/** One leg live, the rest NA: the published figures do not split the cycle. */
function basisFor(key: LeverKey, now: number): SimBasis {
  const days = nulls<number | null>(null);
  const perDay = nulls<number | null>(null);
  days[key] = now;
  perDay[key] = valueOfADay;
  return {
    days,
    perDay,
    balances: nulls<number | null>(null),
    terms: { certification: null, payment: null, vendor: BREAK === "payables" ? 60 : null },
    workingCapital: null,
    ratePct: RATE_PCT,
    desks: nulls<string | null>(null),
    items: { dio: [], cad: [], dso: [], dpo: [] },
    blocked: {},
  };
}

const fmt = (n: number) => n.toFixed(2);
const rows: string[] = [];
const out = (k: string, v: string | number, note: string) => rows.push(`${k} = ${v}    [${note}]`);
let failures = 0;
const check = (ok: boolean, name: string) => {
  if (!ok) {
    failures++;
    console.log(`ASSERT FAILED: ${name}`);
  }
};

out("revenue_FY25_RsCr", REVENUE_FY25, "Ind-Ra R1 table, 20 Feb 2026");
out("value_of_a_day_RsCr", valueOfADay.toFixed(4), "FY25 revenue / 365");
out("gross_wc_days_FY23", GROSS_WC_DAYS_FY23, "31% x 365, R1");
out("gross_wc_days_FY25", GROSS_WC_DAYS_FY25, "44% x 365, R1");
out("net_wc_days_FY25", NET_WC_DAYS_FY25, "17% x 365, R1");

// The three problem charts and the leg each one moves.
// P1 gross WC days: the whole asset side, one leg standing in for receivables + unbilled ("cad").
// P2 receivables spilling over: "dso" (the client certifies and pays; our part is submitting on time).
// P3 net WC days: same asset step, current liabilities held, so net falls by the same days.
// Vendor leg ("dpo"): run to prove payables never release cash.
const problems: { id: string; key: LeverKey; now: number; label: string }[] = [
  { id: "P1_gross", key: "cad", now: GROSS_WC_DAYS_FY25, label: "gross WC days" },
  { id: "P2_receivables", key: "dso", now: GROSS_WC_DAYS_FY25, label: "receivables inside gross WC (receivable days not published)" },
];

for (const step of STEPS) {
  for (const p of problems) {
    const basis = basisFor(p.key, p.now);
    const r = simulate(basis, { [p.key]: p.now - step });
    const lever = r.levers.find((l) => l.key === p.key)!;
    const independent = step * (BREAK === "cross" ? REVENUE_FY25 / 360 : REVENUE_FY25 / 365);

    out(`${p.id}_step${step}_days_next`, fmt(lever.next), `${p.label}: ${p.now} - ${step}`);
    out(`${p.id}_step${step}_release_RsCr`, fmt(r.released), "simulate() released, cash once");
    out(`${p.id}_step${step}_interest_RsCr`, fmt(r.carry), "simulate() carry, rate 0 (none disclosed)");
    out(`${p.id}_step${step}_crosscheck_RsCr`, fmt(independent), "step x FY25 revenue / 365, computed apart");

    check(r.released >= 0, `${p.id} step ${step}: no negative release`);
    check(r.carry === 0, `${p.id} step ${step}: interest = 0`);
    check(Math.abs(r.released - independent) < 0.005, `${p.id} step ${step}: days x valueOfADay = simulate release`);
    check(lever.next === p.now - step, `${p.id} step ${step}: inside clamp bounds`);
  }
  // P3: net = gross - current liabilities; liabilities held, so the same step moves net.
  const netNext = NET_WC_DAYS_FY25 - step;
  out(`P3_net_step${step}_days_next`, fmt(netNext), `net WC ${NET_WC_DAYS_FY25} - ${step}, liabilities held`);
  out(`P3_net_step${step}_release_RsCr`, fmt(step * valueOfADay), "same cash as P1, never added");

  // Vendor leg: try to "release" cash by paying 10 or 30 days later.
  const vendor = simulate(basisFor("dpo", 0), { dpo: step });
  out(`vendor_dpo_plus${step}_release_RsCr`, fmt(vendor.released), "no vendor terms: leg held, paying later releases nothing");
  check(vendor.released === 0, `vendor step ${step}: payables never release cash`);
}

// Rank through the app's lever pricer: interest 0, cash once, the two moves side by side.
const action = (id: "certification" | "collection", days: number, ours: boolean) => ({
  id,
  title: id === "certification" ? "Take 10 days out of work waiting to be billed and certified" : "Take 10 days out of receivables",
  detail: "",
  days,
  value: days * valueOfADay,
  carrySaved: null,
  internallyControllable: ours,
  owner: "",
  confidence: "low" as const,
  measuredAgainst: "a 10-day step, no contract terms published",
});
const position = { actions: [action("certification", 10, true), action("collection", 10, false)] } as unknown as CyclePosition;
const ledger = { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary;
const levers = priceLevers({
  position,
  ledger,
  vendors: [],
  retention: null,
  perDay: valueOfADay,
  financingRatePct: RATE_PCT,
  owners: { certification: null, collection: null, material: null },
});
for (const l of levers) {
  out(`lever_${l.id}_cash_RsCr`, fmt(l.cash ?? 0), `priceLevers, ours=${l.ours}`);
  out(`lever_${l.id}_interest_RsCr`, fmt(l.carry), "priceLevers carry at 0%");
  check(l.carry === 0, `lever ${l.id}: interest = 0`);
  check((l.cash ?? 0) >= 0, `lever ${l.id}: no negative release`);
}

console.log(rows.join("\n"));
console.log(`\nrows=${rows.length} ${failures === 0 ? "all asserts passed" : `${failures} ASSERTS FAILED`}`);
if (failures) process.exit(1);
