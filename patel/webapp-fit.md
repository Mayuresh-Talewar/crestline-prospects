# Patel Engineering: webapp fit

Readers: Kavita Shirvaikar, Managing Director; Rahul Agarwal, Chief Financial Officer (AR26 PDF p43). Verdict LIGHT; outreach on hold per Garvis (README, Garvis rulings of 8 Oct 2026).

## What Crestline models here
* **NWC days as a queue**: the Working Capital screens price a day at a measured rate, on the same basis as the days. Here: Rs 13.98 Cr a day for the company's stated (consolidated) NWC days, FY26 consolidated revenue / 365; Rs 13.88 Cr a day for standalone receivable days, FY26 standalone revenue / 365 (calc/pe-savings-output.txt).
* **O2C, bill by bill**: measure, prepare, review, submit and invoice are the company's own acts; acknowledge, certify and pay are the client's. A wait belongs to whoever ends it.
* **Receivables against each bill's own due date**, waits ranked on money times days, with a named desk.
* **Retention as a ledger** per holding, with the date it becomes collectable; its release is priced among the levers (priceLevers "release retention").
* **Cycle simulator** held to the contract's bounds; payables are never stretched to release cash (asserted in calc).

## What it does not model
* Bank guarantees, or retention withdrawn against them. The CFO's route (T1Q27 PDF p15) is described, not modelled.
* Balances the README keeps out: never priced, never headlined.
* Anything outside billing, collection and vendor payment. Those are not Crestline questions.
* Contract terms: the filings state no payment term or certification window, so the calc passes none and the screens would read NA until the source supplies them.

## The pilot
One entity (standalone), one segment, read-only, 14 days. SAP (AR24 PDF p24; AR26 PDF p104) **will feed, read-only, built during the pilot**. Nothing in Crestline is connected to their systems today.

## NEVER SAY
1. That Crestline is connected to their systems today, or holds any of their data.
2. Any saving as a forecast or promise. Every mark reads "Scenario, not a forecast".
3. Interest at any rate but 9.90% and 12.35% (cash credit, AR26 PDF p87 consolidated, PDF p126 standalone), or interest unless the released cash repays cash credit; capped at Rs 735.86 Cr drawn (AR26 PDF p87 consolidated, PDF p125 standalone).
4. Adding the 10 day and 30 day rows, or adding rows across problems.
5. A rupee figure priced on a different basis from its days: consolidated days with consolidated revenue, standalone days with standalone revenue.
6. A target of theirs: none exists (depth.md section 4).
7. Paying vendors later as a saving.
8. Collecting faster than the client's own payment clock: certify and pay are the client's acts.
9. Anything on the README's KEPT OUT list.
10. Certification, hosting or encryption not in place today.
11. Demo data beside their figures, or any other company's figures.

## Screens and the fields each needs (from SAP, which will feed, read-only, built during the pilot)
| Screen (route) | Answers for this reader | Fields needed |
|---|---|---|
| Working Capital, portfolio (/working-capital) | Which project added the days between FY26 and Q1 FY27 | Trial balance by project and month: receivables, retention, stock, payables, client advances; revenue by project and month |
| Working Capital, project (/projects/[id]/working-capital) | Simulator and ranked levers per job | Same, plus contract payment term and certification window per contract |
| O2C, RA bills (/o2c/ra-bills) | Which bill sits at which step, ours or the client's | RA bill events with dates and amounts: measured, prepared, reviewed, submitted, acknowledged, certified, invoiced, paid; document number |
| O2C, receivables (/o2c/receivables) | Which invoices are past their own due date | Customer invoices with due dates; receipts matched to invoices |
| O2C, retention (/o2c/retention) | Which retention has become collectable and whether its release was asked for | Retention deducted per bill; release terms and the end of the defect liability period per contract; releases asked for and received |
| Client (/projects/[id]/client) | Each client's certification and payment pace against its terms | Client master; the O2C events above |
| Ask Crestline (/ask) | "Which job added the most days this quarter?" | All of the above |
| Alerts & Tickets (/tickets) | Who was asked to move which bill, and whether the figure moved | Person and department per event; email per person |
