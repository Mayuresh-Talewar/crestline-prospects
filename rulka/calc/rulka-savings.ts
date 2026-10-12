/**
 * Rulka Electricals, RE-3 savings scenarios. TEMPORARY: copied to the prospect
 * folder and deleted from the repo after the run.
 *
 * Inputs: Annual Report 2025-26 (filed 07 Sep 2026), standalone, closing basis.
 * Units: Rs crore. Value of a day = FY26 revenue 110.20 / 365.
 * No terms are passed (none published), and no interest is printed (rate 0).
 *
 * BREAK=1..5 corrupts one input so the matching assert must fail.
 */
import { leversFor, simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { priceLevers } from "@/lib/insights/levers";
import type { CyclePosition, CycleAction } from "@/lib/finance/working-capital-cycle";
import type { CashLedgerSummary } from "@/lib/finance/cash-ledger";

const BREAK = Number(process.env.BREAK ?? 0);

// AR26 p89, p90; closing days from re-calc-output.txt section 4.
const REVENUE = 110.20;
const RECEIVABLES = 35.8352; // 3,583.52 lakh
const PAYABLES = 25.5641; // 2,556.41 lakh
const DSO = 118.69;
const DIO = 78.82;
const DPO = 110.46;
const CYCLE_RE1 = 87.05;

const perDay = REVENUE / 365;
const payablesPerDay = PAYABLES / DPO; // purchases per day implied by the AR26 closing DPO

const basis: SimBasis = {
  days: { dio: DIO, cad: null, dso: DSO, dpo: DPO },
  // Stock is not a scenario here: no consumption rate is passed, so the leg is not drawn.
  perDay: { dio: null, cad: null, dso: BREAK === 5 ? REVENUE / 360 : perDay, dpo: payablesPerDay },
  balances: { dio: null, cad: null, dso: RECEIVABLES, dpo: PAYABLES },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 9.5 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

let failures = 0;
const check = (name: string, ok: boolean, detail: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}: ${detail}`);
  if (!ok) failures++;
};
const r2 = (n: number) => n.toFixed(2);

console.log("== Inputs (Rs Cr, AR26 standalone, closing basis) ==");
console.log(`Revenue FY26: ${r2(REVENUE)} | Receivables: ${r2(RECEIVABLES)} | Payables: ${r2(PAYABLES)}`);
console.log(`DSO ${r2(DSO)} | DIO ${r2(DIO)} | DPO ${r2(DPO)} | value of a day ${perDay.toFixed(4)} Cr (${r2(perDay * 100)} lakh)`);
console.log("Terms passed: none. Interest rate passed: 0.");

console.log("\n== Clamp bounds read from leversFor ==");
for (const lever of leversFor(basis)) {
  console.log(`${lever.key}: now ${r2(lever.now)}, min ${r2(lever.min)}, max ${r2(lever.max)}, side ${lever.side}, target ${lever.target ?? "none"}`);
}

// Basis match: the per-day rate times today's days must give back today's balance.
const rebuiltDso = (RECEIVABLES / basis.perDay.dso!);
check("basis match", Math.abs(rebuiltDso - DSO) < 0.01, `receivables / value of a day = ${r2(rebuiltDso)} days vs DSO ${r2(DSO)}`);

const steps = [10, 30];
for (const step of steps) {
  const target = BREAK === 1 ? DSO + step : DSO - step;
  const sim = simulate(basis, { dso: target });
  const dso = sim.levers.find((l) => l.key === "dso")!;
  console.log(`\n== Scenario: receivables ${step} days faster ==`);
  console.log(`Receivable days ${r2(dso.now)} to ${r2(dso.next)} (moved ${r2(dso.moved)})`);
  console.log(`Cash released once: Rs ${r2(sim.released)} Cr`);
  console.log(`Receivables after: Rs ${r2(RECEIVABLES - sim.released)} Cr`);
  console.log(`Cash cycle ${r2(sim.cycle.now!)} to ${r2(sim.cycle.next!)} days`);
  console.log(`Carry (interest) a year: ${r2(sim.carry)}`);

  // Price the same move through the lever ranking, at a zero rate.
  const action: CycleAction = {
    id: "collection",
    title: `Collect receivables ${step} days sooner`,
    detail: "",
    days: -dso.moved,
    value: sim.released,
    carrySaved: null,
    internallyControllable: false,
    owner: "",
    confidence: "medium",
    measuredAgainst: "closing receivable days, AR26",
  };
  const levers = priceLevers({
    position: { actions: [action] } as unknown as CyclePosition,
    ledger: { stillAwaiting: 0, peakFundingNeed: 0 } as unknown as CashLedgerSummary,
    vendors: [],
    retention: null,
    perDay: basis.perDay.dso,
    financingRatePct: BREAK === 3 ? 9.5 : 0,
    owners: { certification: null, collection: null, material: null },
  });

  check("no negative release", sim.released >= 0, `released ${r2(sim.released)}`);
  check("interest = 0", sim.carry === 0 && levers.every((l) => l.carry === 0), `simulate carry ${r2(sim.carry)}, lever carry ${levers.map((l) => r2(l.carry)).join(",")}`);
  const independent = (step * REVENUE) / 365;
  const crossDso = ((RECEIVABLES - independent) / REVENUE) * 365;
  check(
    "independent cross-check",
    Math.abs(independent - sim.released) < 0.005 && Math.abs(crossDso - (DSO - step)) < 0.01 && levers[0].cash === sim.released,
    `${step} x 110.20 / 365 = ${r2(independent)}; DSO rebuilt from receivables after = ${r2(crossDso)}`,
  );
}

console.log("\n== Payables never release cash ==");
for (const extra of [10, 30]) {
  const want = BREAK === 4 ? { dpo: DPO + extra, dso: DSO - extra } : { dpo: DPO + extra };
  const sim = simulate({ ...basis, terms: BREAK === 4 ? { ...basis.terms, vendor: DPO + 60 } : basis.terms }, want);
  const dpo = sim.levers.find((l) => l.key === "dpo")!;
  console.log(`Asked DPO +${extra}: held at ${r2(dpo.next)}, cash from payables ${r2(dpo.cash)}`);
  check("payables never release cash", dpo.cash <= 0 && dpo.next <= DPO, `dpo cash ${r2(dpo.cash)}`);
}

check("cycle matches RE-1", Math.abs(DIO + DSO - DPO - CYCLE_RE1) < 0.01, `${r2(DIO + DSO - DPO)} vs ${r2(CYCLE_RE1)}`);

console.log(failures === 0 ? "\nALL ASSERTS PASSED" : `\n${failures} ASSERT(S) FAILED`);
if (failures) process.exit(1);
