# Yash Construction Co: solutions (YC-S23, 9 Oct 2026)

Screens named below exist in the app today. Nothing is claimed as connected to the firm's ERP.

| Problem | Screen (true today) | What it would show once connected |
|---|---|---|
| 1. One number, many steps | Project O2C and Client | Each RA bill rebuilt from its dates; the stage where it waits; whose move ends the wait. |
| 2. Book still to execute | Overview, Working Capital simulator, Ask Crestline | Where contract value stops becoming cash; the receivable leg moved by 10 or 30 days; "What if bills were paid ten days sooner?" answered by code. |
| 3. Name and date | Alerts & Tickets, Performance | Raise ticket, owner told (never on one click), re-measured, closed only when the number moves. |

## Scenarios (rule 13 marks, from calc/yc-savings-output.txt only)
Basis: FY26 (provisional) revenue Rs 562.18 Cr / 365 = Rs 1.5402 Cr a day; receivable leg; debtor days 64; no interest; cash released once; rows overlap and are never added.
- 10 days less: 64 to 54 days, Rs 15.40 Cr.
- 30 days less: 64 to 34 days, Rs 46.21 Cr.
Scenario, not a forecast. The simulator's lower limit is the payment term each client signed; no such term is published, so the 30 day row is arithmetic only.

## Ownership
Ours: measure, prepare, review, submit, invoice. The client's: acknowledge, certify, pay. Paying vendors later is never shown as a saving.
