// RV-S23 Riviera Infraprojects: GCA days as one block on the receivable leg. No interest.
import { simulate, leversFor, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = Number(process.env.BREAK ?? 0); // break-test switch: 1..5 each corrupts one assert's input
const TOI = 813.82; // Rs Cr, FY25 unaudited, standalone, CARE 20 Aug 2025 p3
const GCA = 135;    // days, FY25, CARE p2
const perDay = TOI / 365 + (BREAK === 4 ? 0.5 : 0);
const none: Record<LeverKey, null> = { dio: null, cad: null, dso: null, dpo: null };
const basis: SimBasis = {
  days: { ...none, dso: GCA, ...(BREAK === 3 ? { dio: 30 } : {}) },
  perDay: { ...none, dso: perDay, ...(BREAK === 3 ? { dio: perDay } : {}) },
  balances: { ...none },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 8 : 0, // no borrowing rate published
  desks: { ...none }, items: { dio: [], cad: [], dso: [], dpo: [] }, blocked: {},
};

const fails: string[] = [];
const check = (name: string, ok: boolean) => { console.log(`${ok ? "PASS" : "FAIL"}  ${name}`); if (!ok) fails.push(name); };

console.log(`Basis: FY25 total operating income Rs ${TOI} Cr / 365 = Rs ${(TOI / 365).toFixed(6)} Cr per day; GCA days ${GCA} (one block, receivable leg)`);
const vod = valueOfADay(perDay, 0);
console.log(`valueOfADay: cash ${vod.cash!.toFixed(6)} Cr, carry ${vod.carry} Cr`);
const levers = leversFor(basis);
console.log("levers available:", levers.map((l) => `${l.key} now=${l.now} min=${l.min} max=${l.max} target=${l.target}`).join("; "));
console.log("toTerms (no terms published):", JSON.stringify(toTerms(basis)));

const rows: { step: number; cash: number; carry: number; next: number }[] = [];
for (const step of [10, 30]) {
  const r = simulate(basis, { dso: GCA - step });
  rows.push({ step, cash: r.released, carry: r.carry, next: r.levers[0].next });
  console.log(`${step} days less: GCA ${GCA} -> ${r.levers[0].next}; cash released once Rs ${r.released.toFixed(4)} Cr (${r.released.toFixed(2)}); carry Rs ${r.carry} Cr`);
}
const asRaised = simulate(basis, { dso: 0, dpo: 500 });
console.log(`bounds probe: asked dso 0 and dpo 500 -> dso ${asRaised.levers[0].next}, levers ${asRaised.levers.length}`);

// ---- asserts
check("no negative release", rows.every((r) => r.cash >= 0) && !(BREAK === 1));
check("interest = 0 (no rate disclosed)", rows.every((r) => r.carry === 0));
check("cross-check days x per day == simulate", rows.every((r) => Math.abs(r.step * (TOI / 365) - r.cash) < 1e-9));
const payBasis: SimBasis = { ...basis, days: { ...basis.days, dpo: 60 }, perDay: { ...basis.perDay, dpo: BREAK === 5 ? 1 : 0 } };
// payables never release cash: with no per-day base and no terms the dpo lever is not offered, and moving it changes nothing
const pr = simulate(payBasis, { dpo: 120 });
check("payables never release cash", pr.released === 0 && !pr.levers.some((l) => l.key === "dpo"));
check("basis matches: only the receivable leg, priced at TOI/365", levers.length === 1 && levers[0].key === "dso" && Math.abs(levers[0].perDay - TOI / 365) < 1e-12);
check("no lever priced on a base it does not belong to (dio, cad, dpo absent)", !levers.some((l) => l.key !== "dso"));
check("10 and 30 day figures", Math.abs(rows[0].cash - 22.2964) < 1e-3 && Math.abs(rows[1].cash - 66.8893) < 1e-3);
if (fails.length) { console.error("ASSERT FAILED:", fails.join(" | ")); process.exit(1); }
console.log("ALL ASSERTS PASSED");

console.log(`
LEVER TABLE (every lever considered)
| Lever | Priced? | Why |
| GCA days 135, one block on the receivable leg, 10 days | YES | Rs ${rows[0].cash.toFixed(2)} Cr released once, at TOI/365 |
| GCA days 135, one block on the receivable leg, 30 days | YES | Rs ${rows[1].cash.toFixed(2)} Cr released once |
| GCA to a stated term | NO | no payment term or certification window published |
| Receivables (DSO) | NO | no debtor balance or debtor days published; GCA is not DSO |
| Contract assets / unbilled | NO | no balance or days published; only named as part of inventory |
| Retention | NO | NOT FOUND: no balance, no release basis |
| Stock (DIO) | NO | no stock balance and no cost base (materials consumed / COGS) published |
| Payables (DPO) | NO | creditor days 55 to 70 is a five-year range, no terms, no balance; paying later is never a saving |
| Combined scenario | NO | one lever only, so a combined run equals the single run |
| priceLevers ranking | NO | needs a cycle position and ledger the source does not give; one priced lever, nothing to rank |
| Carry cost | NO | no borrowing rate disclosed; interest = 0 |
`);
