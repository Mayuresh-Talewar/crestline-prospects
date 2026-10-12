# NP Infraprojects: solutions (step 2)

Screens named exist today in lib/navigation.ts. Rule 13 marks use calc values only (calc/np-savings-output.txt, clean run). No interest. Rows overlap and are never added.

| Problem | Crestline screen | Answer once connected | With-Crestline mark (dashed, hollow, same scale) |
|---|---|---|---|
| 1. 282 days, split unknown | Project > Working Capital; O2C > Client; Alerts & Tickets | Retention and other waiting balances by project, client, document, date, each with an owner; a ticket re-measured by the auditor | Days bars: today 282; ten days less 272; thirty days less 252. Scenario, not a forecast |
| 2. A day's value | Working Capital simulator | Ten days = Rs 6.64 Cr, thirty = Rs 19.92 Cr, once, at Rs 0.664 Cr a day (242.39 / 365, FY25 unaudited). Sliders stop at contract bounds; paying vendors later never releases cash (asserted in calc) | Cash bars from zero: 6.64 and 19.92. No interest |
| 3. Order book per project | Projects grid; Portfolio Overview | Each project's own trapped capital as it starts | None (history only: 1,367 vs 242.39) |

Ownership. NP: measure, prepare, review, submit, invoice. Client: acknowledge, certify, pay (retention release included).
Calc: simulate() on one receivable-style leg at 282 days, per day 242.39 / 365, no terms passed (clamp 0 to 394.8). Asserts: no negative release, interest 0, cross-check days x per day, payables never release cash. Each broken once and failed visibly; clean run passes.
