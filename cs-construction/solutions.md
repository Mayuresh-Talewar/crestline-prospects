# Solutions: C S Construction India (CS-S23)

Calc: calc\cs-savings.ts, output calc\cs-savings-output.txt. Basis FY23 operating income ₹186.23 Cr / 365 = ₹0.5102 Cr a day (CRISIL rationale, 8 Aug 2024). No days are published, so steps run on the value of a day only (simulate with placeholder days and no terms; the placeholder is never printed). No interest. Rows overlap, never added.

| Problem | Screen true today | Scenario (rule 13 marks, from calc only) |
|---|---|---|
| 1 Capital held with clients | O2C and Client screens; retention ledger; Working Capital simulator | Ten days less on a wait ₹5.10 Cr, thirty days ₹15.31 Cr, released once. Scenario, not a forecast. |
| 2 No where or since when | Ask Crestline, ranked levers, "Do this first" with named bills and deadlines; Alerts and Tickets (owner, due date, auditor) | Same value-of-a-day marks. No today days bar. |
| 3 Growth raises the need | Cash-cycle simulator: sliders stop at the contract's own windows; vendor credit never stretched (paying later is never a saving, vendors: none claimed) | One day ₹0.5102 Cr. |

Ownership: measure, prepare, review, submit, invoice are the company's; acknowledge, certify, pay are the client's.
Asserts passed (no negative release, interest 0, days x per day cross-check, payables never release cash, basis match); each was broken once and failed visibly (BREAK=1..5).
