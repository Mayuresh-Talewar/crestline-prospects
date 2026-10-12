// Ajwani Infrastructure savings scenarios. Temporary; copied to the prospect folder then deleted.
// Value of a day = FY25 turnover 755.55 Cr (MGT-7, filed 12 Nov 2025) / 365. No interest.
// There is NO single current days figure for this company, so each lever is opened at an
// arbitrary BASE of 60 days. The base cancels: cash released = days moved x per day, whatever the base.
import { simulate, leversFor, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = process.argv[2] ?? ""; // "", "neg", "interest", "cross", "payables"
const TURNOVER_CR = 755.55;
const PER_DAY = TURNOVER_CR / 365;
const BASE = 60;
const day = valueOfADay(PER_DAY, 0);
if (day.cash === null) throw new Error("valueOfADay returned null");

const basis: SimBasis = {
  days: { dio: null, cad: BASE, dso: BASE, dpo: BASE },
  perDay: { dio: null, cad: PER_DAY, dso: PER_DAY, dpo: PER_DAY },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null }, // no terms passed
  workingCapital: null,
  ratePct: BREAK === "interest" ? 9 : 0, // no interest
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};

const fmt = (n: number) => n.toFixed(2);
console.log(`Per day = ${TURNOVER_CR} / 365 = ${PER_DAY.toFixed(6)} Cr (valueOfADay cash ${day.cash.toFixed(6)}, carry ${day.carry})`);
console.log("Lever bounds (no terms passed):");
for (const l of leversFor(basis)) console.log(`  ${l.key} now ${l.now} min ${l.min} max ${l.max} side ${l.side}`);

const fails: string[] = [];
const assert = (ok: boolean, msg: string) => { if (!ok) fails.push(msg); console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`); };

console.log("\nScenarios (one wait at a time; rows overlap and are never added):");
console.log("days | lever | simulate cash Cr | cross-check Cr | interest Cr");
for (const days of [10, 30]) {
  for (const key of ["cad", "dso"] as LeverKey[]) {
    const r = simulate(basis, { [key]: BASE - days });
    const lever = r.levers.find((l) => l.key === key)!;
    const cash = BREAK === "neg" ? -lever.cash : lever.cash;
    const cross = BREAK === "cross" ? days * PER_DAY + 1 : (TURNOVER_CR * days) / 365;
    console.log(`${days} | ${key} | ${fmt(cash)} | ${fmt(cross)} | ${fmt(r.carry)}`);
    assert(cash >= 0, `no negative release: ${key} ${days} days = ${fmt(cash)}`);
    assert(r.carry === 0, `interest = 0: ${key} ${days} days carry ${r.carry}`);
    assert(Math.abs(cash - cross) < 1e-9, `cross-check ${key} ${days} days: simulate ${cash} vs ${cross}`);
  }
}

// payables never release cash: with no vendor terms the leg is held, so stretching releases nothing
for (const to of [BASE + 30, BASE + 100, BASE - 10]) {
  const r = simulate(basis, { dpo: to });
  const cash = BREAK === "payables" && to > BASE ? 1 : r.levers.find((l) => l.key === "dpo")!.cash;
  assert(cash <= 0, `payables never release cash: request ${to} days gives ${fmt(cash)}`);
}

if (fails.length) { console.error(`\n${fails.length} ASSERT(S) FAILED`); process.exit(1); }
console.log("\nALL ASSERTS PASSED");
