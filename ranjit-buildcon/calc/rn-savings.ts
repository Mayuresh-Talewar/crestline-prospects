// Ranjit Buildcon Limited: savings calc, RN-S23. Source: CARE rationale 7 Dec 2023, standalone FY23.
// One lever only: GCA 220 days as ONE block on the receivable leg, at TOI per day. No interest.
import { simulate, leversFor, toTerms, type SimBasis, type LeverKey } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

const BREAK = process.env.BREAK ?? ""; // break-test switch: 1..5
const TOI_FY23 = 1267.92; // Rs Cr, CARE p4
const GCA_DAYS = 220; // CARE p3
const RATE_PCT = BREAK === "2" ? 9 : 0; // no borrowing rate published
const perDay = BREAK === "5" ? TOI_FY23 / 360 : TOI_FY23 / 365;

const n = null;
const basis: SimBasis = {
  days: { dio: n, cad: n, dso: GCA_DAYS, dpo: n },
  perDay: { dio: n, cad: n, dso: perDay, dpo: BREAK === "4" ? perDay : n },
  balances: { dio: n, cad: n, dso: n, dpo: n },
  terms: { certification: n, payment: n, vendor: n },
  workingCapital: n,
  ratePct: RATE_PCT,
  desks: { dio: n, cad: n, dso: n, dpo: n },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
};
if (BREAK === "4") basis.days.dpo = 100;

const out: string[] = [];
const log = (s: string) => { out.push(s); console.log(s); };

log(`Per day = ${TOI_FY23} / 365 = ${perDay.toFixed(4)} Cr`);
const levers = leversFor(basis);
for (const l of levers) log(`Lever ${l.key}: now ${l.now}, min ${l.min}, max ${l.max}, target ${l.target}`);
const dso = levers.find((l) => l.key === "dso")!;
log(`Clamp bounds read: dso ${dso.min} to ${dso.max}. Steps land at 210 and 190, inside the bounds.`);
log(`toTerms (no terms published): ${JSON.stringify(toTerms(basis))}`);

const scen: Record<string, number> = { "10 days": 10, "30 days": 30 };
for (const [name, d] of Object.entries(scen)) {
  const to = BREAK === "1" ? GCA_DAYS + d : GCA_DAYS - d;
  const r = simulate(basis, { dso: to } as Partial<Record<LeverKey, number>>);
  const cross = d * perDay;
  const vod = valueOfADay(perDay, RATE_PCT);
  log(`${name}: GCA ${GCA_DAYS} -> ${to}; cash released ${r.released.toFixed(4)} Cr (cross-check ${cross.toFixed(4)}); carry ${r.carry.toFixed(4)}; valueOfADay cash ${vod.cash?.toFixed(4)} carry ${vod.carry?.toFixed(4)}`);
  const dpoCash = r.levers.filter((l) => l.key === "dpo").reduce((s, l) => s + l.cash, 0);
  log(`  levers moved: ${r.levers.map((l) => `${l.key}:${l.moved}`).join(", ")}; payables cash ${dpoCash}; basis ${r.levers[0].key} at perDay ${r.levers[0].perDay.toFixed(4)}`);
  // asserts
  const must = (ok: boolean, msg: string) => { if (!ok) throw new Error("ASSERT FAILED: " + msg); };
  must(r.released >= 0, "no negative release");
  must(r.carry === 0 && RATE_PCT === 0, "interest = 0");
  must(Math.abs(r.released - cross) < 1e-9, "simulate matches days x per day");
  must(dpoCash === 0 && !r.levers.some((l) => l.key === "dpo"), "payables never release cash");
  must(r.levers.length === 1 && r.levers[0].key === "dso", "only the receivable leg is priced");
  must(Math.abs(r.levers[0].perDay - TOI_FY23 / 365) < 1e-12, "basis is FY23 TOI / 365");
  must(to >= dso.min && to <= dso.max, "step inside clamp");
}
log("ALL ASSERTS PASSED");
