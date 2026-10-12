# R K Chavan Infrastructure: solutions and scenarios (RK-2)

All screens named exist today (see webapp-fit.md). Savings are scenarios, rows overlap and are never added, and paying vendors later is never a saving. No interest is priced, because no borrowing rate is published.

Calc: calc/rk-savings.ts, output calc/rk-savings-output.txt. Value of a day = FY25 operating income Rs 524.35 Cr / 365 = Rs 1.436575 Cr. Steps on gross current asset days (250 at 31 Mar 2026, CRISIL; no split published). Clamp bounds read from the simulator with no terms passed: min 0, max 350.

| Chart / page | Calc row | Value printed |
|---|---|---|
| Cover hero, p6, p10, p11, p12: 10 days | 250 to 240 days | Rs 14.37 Cr released once (14.3658) |
| p6, p10, p12: 30 days | 250 to 220 days | Rs 43.10 Cr released once (43.0973) |
| One day | 524.35 / 365 | Rs 1.44 Cr (1.4366) |
| Interest | rate 0 | not priced |
| Payables | stretch 60 to 100 days, no terms | cash 0, held at 60 |

## Solutions, per problem (what Crestline does, once connected)
1. Days up: reads the dates the ERP records, splits the 250 days into the steps each bill passes, prices each in rupees at its own daily rate, and ranks them ("Do this first"). The first ranked list arrives after the 14 day read-only pilot. Marks, rule 13: the dashed "10 days less" and "30 days less" bars use only 14.37 and 43.10.
2. Debtors range: opens each bill and each retention item with its own due date and the client's own terms, names whose act ends each wait (client: acknowledge, certify, pay, release retention; company: measure, prepare, review, submit, invoice), and turns a finding into a ticket with an owner, a date and an auditor that re-measures the same figure.
3. Growing book: the simulator re-prices a day as the book grows, inside the contract's own bounds, and Ask Crestline answers the what-if from the screen's own evidence.

## Rule 13 marks
Every problem chart carries its dashed, hollow "with Crestline" mark from the rows above, same scale, labelled with days and cash, plus "Scenario, not a forecast". History-only charts (income, debtor and inventory ranges, agency quotes) carry none.
