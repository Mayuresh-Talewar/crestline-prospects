# Rulka Electricals: solutions and savings (RE-3)

Company figures: Rulka Electricals Limited, standalone, Annual Report 2025-26, filed 07 Sep 2026. Savings figures come only from `calc/rulka-savings-output.txt` (our app's `simulate` and `priceLevers`, value of a day 110.20 / 365 = Rs 0.3019 Cr). Cash only: no interest is printed. The 10 day and 30 day rows are alternatives and are never added. A screen named below is true of Crestline today; what it shows for Rulka needs their data, fed during the pilot.

Every "with Crestline" mark (rule 13): calc values only, same scale as the bars beside it, dashed outline with a hollow marker, labelled with days and cash, and the words "Scenario, not a forecast".

## Problem 1. Receivable days did not move
* Screen: project Working Capital, the cash cycle diagram and the simulator; then O2C, Cash In, for the bills behind the days. The receivable leg's floor is the payment term the client signed; with no term published, the floor reads 0.
* Rule 13 marks on the receivable days chart (today 119.74 and 118.69):
  * 10 day scenario: 108.69 days, Rs 3.02 Cr released once. Scenario, not a forecast.
  * 30 day scenario: 88.69 days, Rs 9.06 Cr released once. Scenario, not a forecast.
* Days and cash: 10 days is Rs 3.02 Cr; 30 days is Rs 9.06 Cr. Each day is Rs 0.3019 Cr.
* Data needed: per RA bill, the dated events for measure, prepare, review, submit, invoice (Rulka's acts) and acknowledge, certify, pay (the client's), with amount, document number and due date. The client's signed payment term per contract.

## Problem 2. The overdue book grew tenfold
* Screen: O2C, Cash In, and the Client screen. Ageing runs from each bill's own due date; every overdue bill is named with its value, client, site and whose act ends the wait. Alerts and Tickets turns a named bill into a ticket with a target and an owner, and it is closed only on a fresh measurement of the figure from new data, which records whether the figure moved.
* Rule 13 marks: on the whole receivable book only (today Rs 35.84 Cr), because the calc does not model the overdue bucket.
  * 10 day scenario: book at Rs 32.82 Cr, 108.69 days, Rs 3.02 Cr released once. Scenario, not a forecast.
  * 30 day scenario: book at Rs 26.78 Cr, 88.69 days, Rs 9.06 Cr released once. Scenario, not a forecast.
  * No mark on the Rs 9.59 Cr overdue bar. Its value with Crestline is not computed and is not drawn.
* Data needed: the open receivable ledger by bill with due date and client code; receipts matched to bills; the certification event per bill.

## Problem 3. The cycle got shorter, mostly outside the receivable leg
* Screen: project Working Capital, the cash cycle diagram (each leg to scale, with who owns it) and the lever ranking. P2P, Cash Out, and Vendors judge every payment against that supplier's own due date: early is capital leakage, late is risk, neither is a saving. The simulator's payable ceiling is the vendors' agreed terms; with none supplied it holds at today's figure.
* Rule 13 marks on the receivable leg only (today 1.05 days shorter, FY25 to FY26):
  * 10 day scenario: 10 more days off the receivable leg, Rs 3.02 Cr released once. Scenario, not a forecast.
  * 30 day scenario: 30 more days off the receivable leg, Rs 9.06 Cr released once. Scenario, not a forecast.
  * No mark on the payable leg: the calc held payable days at 110.46 with Rs 0.00 of cash from payables, by rule. No mark on the stock leg: no stock scenario was run.
* Data needed: purchase orders, goods received, supplier invoices with due dates, and payments, per order; stock issued to site, for stock days on the screen.

## What every solution needs first
A read only feed of their bill and order trail for one entity and one segment over the 14 day pilot. No adapter for their system exists today; it is built during the pilot.
