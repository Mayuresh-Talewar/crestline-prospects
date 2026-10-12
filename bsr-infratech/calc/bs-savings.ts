/**
 * BS-S23 BSR Infratech India Limited: collection lever only, on ICRA's published figures.
 * Rs Cr, standalone, FY2026 provisional operating income. No interest (no disclosed rate).
 * BREAK=1..5 injects one fault per assert so each can be seen to fail.
 */
import { leversFor, simulate, toTerms, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";
import { priceLevers } from "@/lib/insights/levers";

const brk = process.env.BREAK ?? "";
const OI = 2682.2; // ICRA 3 Aug 2026 p4, FY2026 provisional
const DEBTORS = 1222; // ICRA p1-2, gross debtors at 31 Mar 2026
const PER_DAY = OI / 365;
const DSO = DEBTORS / PER_DAY; // ICRA does not state 166.3; this is Crestline's arithmetic
const RATE = 0; // no borrowing rate disclosed

const basis: SimBasis = {
  days: { dio: null, cad: null, dso: DSO, dpo: brk === "4" ? 50 : null },
  perDay: { dio: null, cad: null, dso: PER_DAY, dpo: brk === "4" ? 5 : null },
  balances: { dio: null, cad: null, dso: brk === "5" ? 1000 : DEBTORS, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // none published: pass no terms
  workingCapital: null,
  ratePct: brk === "2" ? 9 : RATE,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const f = (n: number, d = 2) => n.toFixed(d);
const lines: string[] = [];
const say = (s: string) => { lines.push(s); console.log(s); };

const levers = leversFor(basis);
const dso = levers.find((l) => l.key === "dso")!;
say(`PER DAY = ${OI} / 365 = ${f(PER_DAY, 4)} Cr`);
say(`DSO = ${DEBTORS} / PER DAY = ${f(DSO, 4)} days (shown ${f(DSO, 1)})`);
say(`Clamp bounds read from leversFor: dso min=${f(dso.min)} (term null so floor 0), max=${f(dso.max)}, target=${dso.target}`);

const out: Record<number, { cash: number; carry: number; next: number; moved: number }> = {};
for (const d of [10, 30]) {
  const r = simulate(basis, { dso: DSO - d });
  const l = r.levers.find((x) => x.key === "dso")!;
  const cash = brk === "1" ? -r.released : r.released;
  out[d] = { cash, carry: r.carry, next: l.next, moved: l.moved };
  say(`DSO ${d} days less: ${f(DSO, 1)} -> ${f(l.next, 1)} days, cash released once Rs ${f(cash)} Cr, carry Rs ${f(r.carry)} Cr (no rate)`);
  const check = brk === "3" ? d * PER_DAY * 1.5 : d * valueOfADay(PER_DAY, 0).cash!;
  if (cash < 0) throw new Error(`ASSERT negative release ${cash}`);
  if (Math.abs(cash - check) >= 1e-9) throw new Error(`ASSERT cross-check days x per day vs simulate: ${cash} vs ${check}`);
  if (r.carry !== 0) throw new Error(`ASSERT interest must be 0, got ${r.carry}`);
}
const toT = toTerms(basis);
say(`To the stated term: toTerms = ${JSON.stringify(toT)} (no client payment term published, NOT PRICED)`);

// payables never release cash: ask for any dpo move and check the cash on that leg
const dpoTry = simulate(basis, { dpo: 999 });
const dpoLeg = dpoTry.levers.find((l) => l.key === "dpo");
if (dpoLeg && dpoLeg.cash > 0) throw new Error(`ASSERT payables released cash ${dpoLeg.cash}`);
if (levers.some((l) => l.key !== "dso" )) throw new Error(`ASSERT lever priced on a base it does not belong to: ${levers.map((l) => l.key)}`);
say(`Payables: dpo lever present = ${!!dpoLeg}; cash from any dpo ask = ${dpoLeg ? dpoLeg.cash : 0}`);

// basis match: balance / per day reproduces the days, per day is the same OI base as the 166.3
if (Math.abs(dso.balance! / dso.perDay - DSO) > 1e-9 || Math.abs(dso.perDay - OI / 365) > 1e-12)
  throw new Error("ASSERT basis mismatch");
say(`Basis check: balance ${DEBTORS} / perDay = ${f(dso.balance! / dso.perDay, 4)} days; perDay base = FY2026 operating income / 365`);

// ranking through priceLevers (one priceable lever)
const ranked = priceLevers({
  position: { actions: [{ id: "collection", title: "Collect invoiced bills sooner", detail: "", days: 30, value: out[30].cash, carrySaved: null, internallyControllable: false, owner: "", confidence: "medium", measuredAgainst: "no published term" }] } as never,
  ledger: { stillAwaiting: 0 } as never, vendors: [], retention: null, perDay: PER_DAY, financingRatePct: 0,
  owners: { certification: null, collection: null, material: null },
});
say(`priceLevers ranking: ${ranked.map((l, i) => `#${i + 1} ${l.id} cash ${f(l.cash!)} Cr carry ${f(l.carry)}`).join("; ")}`);

say("");
say("LEVER TABLE");
say("| Lever | Status | Reason |");
say("|---|---|---|");
say(`| Receivables (collection, DSO ${f(DSO, 1)}) | PRICED at 10 and 30 days | gross debtors ${DEBTORS} Cr over FY2026 operating income per day ${f(PER_DAY, 2)} Cr; 10 days Rs ${f(out[10].cash)} Cr, 30 days Rs ${f(out[30].cash)} Cr, released once |`);
say("| Receivables, to the stated term | NOT PRICED | no client payment term published (ICRA gives no days) |");
say("| Contract assets / unbilled (certification) | NOT PRICED | no contract-asset balance or certification window published |");
say("| Retention | NOT PRICED | no balance and no release basis published (ICRA names retention money only as a guarantee purpose) |");
say("| Site stock (DIO) | NOT PRICED | no stock balance and no materials-consumed or cost base published |");
say("| Vendor credit (DPO) | NOT PRICED | no payables, vendor terms or cost base published; paying later is never a saving |");
say("| Interest / carry | NOT PRICED | no borrowing rate disclosed |");
say("| Combined scenario | NOT RUN | one priceable lever only; a combined run would equal the single lever |");
say("");
say("ALL ASSERTS PASSED");

import { writeFileSync } from "node:fs";
writeFileSync(process.env.OUT ?? "scripts/_tmp-bs-out.txt", lines.join("\n") + "\n", "utf8");
