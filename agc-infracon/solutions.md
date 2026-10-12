# AGC Infracon Private Limited: solutions and savings (step 2)

Everything below exists in the app today (lib/navigation.ts). Where it needs AGC's data it says "once connected": the adapter is built first in the pilot, then 14 days of read-only analysis. Nothing is claimed as connected now. Unit Rs Cr. Calculator: calc/agc-savings.ts, full output in calc/agc-savings-output.txt (ran clean; each assert also broken once and seen to fail).

## Method
- Value of a day = 567.63 / 365 = Rs 1.5552 Cr (printed 1.555), Infomerics 23 Apr 2025, FY24 standalone.
- Steps of 10 and 30 days, run through simulate() in lib/finance/cycle-simulation, no contract terms passed, so the floors are 0 and cash released is days moved x value of a day.
- No baseline days are published. The calc uses stand-in days only so the clamp does not bind. There is no "today" days bar anywhere.
- No interest: no borrowing rate is published. priceLevers and costOfFinancing run at 0 and return 0.
- Payables never release cash: asked for 10 more vendor days with no stated terms, the simulator returns 0.

## Savings scenarios (rows overlap, never added)
| Scenario | Cash released once, Rs Cr | Printed arithmetic |
|---|---|---|
| 10 days off the wait for work done to become a bill | 15.55 | 10 x 1.555 |
| 10 days off the wait for a bill to be paid | 15.55 | 10 x 1.555 |
| 30 days off the wait for work done to become a bill | 46.65 | 30 x 1.555 |
| 30 days off the wait for a bill to be paid | 46.65 | 30 x 1.555 |
| Vendors paid later | None claimed | paying later is never cash released |
Calc also gives 31.10 and 93.31 for both waits together; they are NOT printed (rows overlap). Rule 13 marks (dashed, hollow, "Scenario, not a forecast") use only 15.55 and 46.65.

## Per problem
1. Book to bills. Ask Crestline and the project Overview (contract to cash) and O2C screens rebuild each bill from the ERP's own dates and show the stage waits; ownership follows the act that ends the wait (AGC: measure, prepare, review, submit, invoice; client: acknowledge, certify, pay). Scenario: 10 days 15.55, 30 days 46.65.
2. Limits. The Working Capital screen ranks every lever in rupees and the simulator moves one leg at a time; vendor credit is capped at the vendors' own terms. Scenario on the same scale as the limits: 15.55 and 46.65 once. No interest.
3. Which bill, which desk. Client and O2C screens, the ranked "Do this first" list with named documents, then Alerts & Tickets: owner told (never on one click), re-measured on the same figure, closed only when the number moves. Performance counts verified closes only.

## Honest limits
Step waits are not public, so none is drawn. Scenarios are arithmetic on published totals, not a forecast and not a commitment. ERP unnamed.
