# Effwa Infra & Research Limited: solutions and savings scenarios (EF-S23, 2026-10-09)

Calc: calc\ef-savings.ts, full output calc\ef-savings-output.txt, break tests calc\breaks.txt. Uses simulate() from lib/finance/cycle-simulation and valueOfADay() from lib/finance/working-capital-cycle. Leg: receivable ("Invoiced, waiting to be paid"). No contract terms passed (none published), so the lever's floor is zero and the steps are inside it. No interest (rate 0). Basis: standalone FY26, per day = 253.29 / 365 = Rs 0.693945 Cr; days 185.5 on receivables Rs 128.71 Cr (185.474 unrounded, matches).

## Scenario values (cash is released once; rows overlap and are never added)
| Step on the wait to be paid | Days | Cash released |
|---|---|---|
| Today | 185.5 | none |
| 10 days less | 175.5 | Rs 6.94 Cr |
| 30 days less | 155.5 | Rs 20.82 Cr |
Cross-check: 10 x 0.693945 = 6.9395; 30 x 0.693945 = 20.8184. Scenario, not a forecast. No interest priced.

## Problem 1 and 2 solved by (screens true today)
| Need | Crestline does, once connected | Owner of the act |
|---|---|---|
| See each waiting bill and its dates | Rebuilds every bill from the ERP's own dates, read-only, alongside it | n/a |
| Split the wait by whose move ends it | Prepare, review, submit, invoice are Effwa's. Acknowledge, certify, pay are the client's. Joint measurement is both | per step |
| Price a day | Simulator moves the receivable leg at its measured daily rate | n/a |
| Name the next move | Actionable with named bills, deadline, owner; Raise ticket and Alert owner (mail never fires on one click) | Effwa to submit, invoice, chase; client to certify and pay |
| Prove it moved | Auditor re-measures the same figure; closes only on the number | n/a |

## Ownership rule
Effwa's: measure (jointly), check, prepare, review, submit, invoice. Client's: acknowledge, certify, pay. A client wait is chased, never "fixed" by Effwa.

## Rule 13 marks (from calc values only)
Dashed, hollow, labelled "Scenario, not a forecast": 175.5 days and Rs 6.94 Cr (10 days less); 155.5 days and Rs 20.82 Cr (30 days less). Same scale as today's 185.5 days, bars from zero.
