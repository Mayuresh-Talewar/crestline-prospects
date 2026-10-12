import { simulate, type SimBasis } from "@/lib/finance/cycle-simulation";
import { valueOfADay } from "@/lib/finance/working-capital-cycle";

/**
 * NIKHIL INFRASPECIALITIES, LIGHT data. Inputs: FY24 operating income 50.26 Cr
 * (CRISIL, 6 Jan 2025, standalone), gross current asset days 476 at 31 Mar 2024.
 * No terms passed (none published), no interest (no published rate).
 * BREAK=1..4 perturbs one thing so each assert can be seen to fail.
 */
const BREAK = Number(process.env.BREAK ?? 0);
const REV = 50.26;
const GCA_DAYS = 476;
const perDay = BREAK === 1 ? REV / 360 : REV / 365;

const basis = (over: Partial<SimBasis> = {}): SimBasis => ({
  days: { dio: null, cad: null, dso: GCA_DAYS, dpo: null },
  perDay: { dio: null, cad: null, dso: perDay, dpo: null },
  balances: { dio: null, cad: null, dso: null, dpo: null },
  terms: { certification: null, payment: null, vendor: null },
  workingCapital: null,
  ratePct: BREAK === 2 ? 10 : 0,
  desks: { dio: null, cad: null, dso: null, dpo: null },
  items: { dio: [], cad: [], dso: [], dpo: [] },
  blocked: {},
  ...over,
});

const out: string[] = [];
const say = (s: string) => { out.push(s); console.log(s); };
const check = (name: string, ok: boolean, detail: string) => {
  say(`${ok ? "PASS" : "FAIL"}  ${name}  (${detail})`);
  if (!ok) throw new Error(`ASSERT FAILED: ${name}`);
};

say(`perDay = ${REV} / 365 = ${perDay}  (Rs Cr per day)`);
const vod = valueOfADay(perDay, 0);
say(`valueOfADay(perDay, 0) = cash ${vod.cash}, carry ${vod.carry}`);

const rows: { step: number; cash: number; next: number; carry: number }[] = [];
for (const step of [10, 30]) {
  const r = simulate(basis(), { dso: GCA_DAYS - step });
  const l = r.levers[0];
  say(`step ${step}d: days ${l.now} -> ${l.next}, moved ${l.moved}, cash released ${l.cash} Cr, carry ${r.carry} Cr`);
  say(`   rounded: cash Rs ${l.cash.toFixed(2)} Cr, per day Rs ${(perDay * 100).toFixed(2)} L`);
  rows.push({ step, cash: BREAK === 3 ? -l.cash : l.cash, next: l.next, carry: r.carry });
}

for (const row of rows) {
  check(`no negative release (${row.step}d)`, row.cash >= 0, `cash ${row.cash}`);
  check(`interest is zero (${row.step}d)`, row.carry === 0, `carry ${row.carry}`);
  const independent = (row.step * REV) / 365; // days x revenue / 365, no simulate
  check(
    `cross-check days x per day vs simulate (${row.step}d)`,
    Math.abs(independent - row.cash) < 1e-9,
    `independent ${independent} vs simulate ${row.cash}`,
  );
  check(`days after step (${row.step}d)`, row.next === GCA_DAYS - row.step, `${row.next}`);
}
check("30d is exactly 3x 10d", Math.abs(rows[1].cash - 3 * rows[0].cash) < 1e-9, `${rows[1].cash} vs ${3 * rows[0].cash}`);

// payables never release cash: no vendor terms published, so asking for a longer wait is clamped to today's figure.
const pay = simulate(
  basis({ days: { dio: null, cad: null, dso: GCA_DAYS, dpo: 60 }, perDay: { dio: null, cad: null, dso: perDay, dpo: BREAK === 4 ? perDay : perDay } }),
  { dpo: 200 },
);
const dpo = pay.levers.find((l) => l.key === "dpo")!;
const payCash = BREAK === 4 ? 1 : dpo.cash;
check("payables never release cash (stretch to 200 days)", payCash === 0 && dpo.next === 60, `next ${dpo.next}, cash ${payCash}`);

say("ALL ASSERTS PASSED");
