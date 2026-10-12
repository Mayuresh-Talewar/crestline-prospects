# Rulka Electricals: how Crestline fits (RE-2)

Basis for every company figure here: Rulka Electricals Limited, standalone, Annual Report 2025-26 filed 07 Sep 2026 (AR26). FY26 revenue Rs 110.20 Cr (AR26 p90). No ERP or accounting system is named in any filing (data.md).

## What Crestline models for them
* The receivable book as a queue: Rs 35.84 Cr at 118.69 closing days (AR26 p89), and its ageing by due date (note 14 p101). This is where the next days are.
* The cash cycle as one picture: stock 78.82, receivable 118.69 and payable 110.46 closing days, cycle 87.05 (re-calc-output.txt section 4).
* The simulator on receivables only, at Rs 0.3019 Cr a day (110.20 / 365): 10 days is Rs 3.02 Cr, 30 days is Rs 9.06 Cr, released once (calc/rulka-savings-output.txt). Two alternatives, never added.
* Work in progress stock (Rs 7.93 Cr, note 13 p101) and retention money (Rs 5.00 Cr, note 12 p101) as their own waits, once the bill trail is connected. WIP is stock in these accounts, not an unbilled line, and no claim of "work done and not billed" is made.
* Supplier payment timing judged against each supplier's own due date. A later payment is shown as where the cycle moved, never as a gain.

## What Crestline does not model
* Their accounts, tax, payroll, project planning or stock keeping. It reads; it never writes back.
* Any interest saving. Borrowings are Rs 4.80 Cr on a floating overdraft rate, so this booklet prints cash only.
* Any site, bill, client or desk detail today. We have none of their data. Those answers come only from the pilot.
* A contract asset line: AR26 shows none; the nearest is WIP.

## The pilot
One entity (Rulka Electricals Limited, standalone), one segment, read only, 14 days. No adapter for their system exists today; one is built during the pilot to feed the bill and order trail into Crestline's event contract. Our demo environment is never shown as their data.

## NEVER CLAIM
* That Crestline "connects to" their system today.
* Any certification, data residency or encryption feature that is not set up.
* Any interest saved, at any rate.
* That paying suppliers later saved money, or that the payable day rise is an improvement.
* That the 10 day and 30 day figures add up, or are a forecast. They are scenarios.
* Any figure about a named site, bill, client or person's desk.
* Any figure from a call or deck that the audited accounts do not carry.
* Anything in the Garvis only file.

## Screens and the fields each needs
* Working Capital (project and company): trial balance by month for receivables, stock, WIP, retention, supplier advances, payables, customer advances; revenue; stock issued (for stock days). Feeds the cash cycle diagram, simulator and lever ranking.
* O2C, Cash In: per RA bill, the events work measured, bill prepared, reviewed, submitted, acknowledged, certified, invoiced and paid, each with date, amount, document number, due date and the desk that acted. Measure, prepare, review, submit and invoice are Rulka's acts; acknowledge, certify and pay are the client's.
* Client: the client code on each bill and the payment term it signed. Without the term, the floor stays at 0.
* P2P, Cash Out and Vendors: purchase order, goods received, supplier invoice, due date and payment, per order, with amounts. Feeds timing against each supplier's own due date.
* Alerts and Tickets: a named owner and email per desk, so an overdue bill becomes a ticket with a target.
* Ask Crestline: needs nothing extra; it reads the screens above.
