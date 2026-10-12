# Jyoti Structures: what Crestline would do about each (JS-3, fixed in JS-4)

Jyoti Structures Limited, **standalone**, AR FY26 vintage (filed 22 Jul 2026). Problems in problems.md: P1 (with the under-6-months panel inside it) and P3. Every with-Crestline value comes from `calc/jyoti-savings-output.txt` (the app's own `simulate` and `priceLevers`, run on these inputs). Value of a day: FY26 revenue Rs 750.87 Cr / 365 = Rs 2.057 Cr.

**Chart rules (internal, not printed; PLAYBOOK rule 13, A12, A13).** Today in solid fill; with Crestline as a hollow, dashed outline, labelled with days and cash released once; footnote "Scenario, not a forecast". Only calc values are drawn. Rows overlap and are never added. No signed numbers. Receivables include GST and revenue does not, so the cash figures are conservative. Nothing about the cost of money is printed (Garvis ruling JS-3).

## For P1. The running book
**The screen (true today).** Project **Working Capital**: the cash-cycle diagram and the simulator, where the receivables leg moves at the project's own invoiced value per day and the floor is the payment term that contract signed. At company level, **Working Capital** shows each project's release opportunity side by side. Project **O2C, Cash In**: each RA bill's steps rebuilt from your ERP's own events (executed, measured, submitted, certified, invoiced, collected), the days each step took, and whose act ends each wait; the company-level **RA Bills** screen lists every bill. The **Client** screen under O2C shows the utility's certification and payment behaviour against the terms it signed, and the client's delay is never counted as the company's. This is the part the ageing note cannot show: the days before the due date.

**Chart picture.** Vertical bars, days of revenue, one axis starting at zero and shared by every bar and by the panel.
| Bar | Value | Style |
|---|---|---|
| 31 Mar 2025 | 220 days | solid |
| 31 Mar 2026 | 116 days | solid |
| With Crestline, 10-day step | 106 days | hollow, dashed |
| With Crestline, 30-day step | 86 days | hollow, dashed |
Labels on the hollow bars: "10 days, Rs 20.57 Cr released once" and "30 days, Rs 61.72 Cr released once". Caption on the two solid bars: "The rebuild at work: 220 days to 116 in one year." Footnote: "Scenario, not a forecast. Standalone, AR FY26 p124 and p89. Crestline arithmetic at FY26 revenue per day."

**Context panel inside the same chart**, titled "Newest part of the same book: same cash as above, not added".
| Bar | Value | Style |
|---|---|---|
| 31 Mar 2025, under 6 months | 129 days | solid |
| 31 Mar 2026, under 6 months | 104 days | solid |
| With Crestline, 10-day step | 94 days | hollow, dashed, no cash label |
| With Crestline, 30-day step | 74 days | hollow, dashed, no cash label |
Values from calc Row C (context). The panel carries no cash figure of its own: its cash is the Rs 20.57 Cr and Rs 61.72 Cr above.

**Days and cash released once.** 10-day step: 116 to 106 days, **Rs 20.57 Cr** (calc Row A). 30-day step: 116 to 86 days, **Rs 61.72 Cr** (calc Row B). The two are alternatives, not a sum.

**Data needed.** Per project: open customer invoices with number, client, amount, invoice date and due date; receipts with date and amount; the payment term per contract; revenue by project and month; a trial balance extract with opening receivables. RA bill events per project: bill number, work executed date, measurement date, submission date, certification date and certified amount, invoice number, date and due date, receipt date and amount, retention deducted, advance recovered; the certification window and payment term per contract; which departments are the company's own.

## For P3. Less client money funding the work
**The screen (true today).** Project **Overview**, funding sources: how much of the job client money, vendor credit and the company's own funds each pay for. Project **Working Capital**, the capital position: advances drawn as client money beside the company's own, and the accrued basis built from the advance ledgers.

**Chart picture.** Two parts, each on its own scale.
| Part | Bar | Value | Style |
|---|---|---|---|
| Advances, Rs Cr | 31 Mar 2025, advances from customers | Rs 134.21 Cr | solid |
| Advances, Rs Cr | 31 Mar 2026, advances from customers | Rs 92.92 Cr | solid |
| Callout, Rs Cr, own axis | With Crestline, 10 days sooner | Rs 20.57 Cr | hollow, dashed |
| Callout, Rs Cr, own axis | With Crestline, 30 days sooner | Rs 61.72 Cr | hollow, dashed |
The callout is a separate labelled box beside the advances bars, never stacked on them, titled "Cash back from collecting sooner, not a new advance". Footnote: "Scenario, not a forecast. The same cash as P1, not added. Standalone, AR FY26 p100."

**Days and cash released once.** The same 10-day and 30-day steps as P1: **Rs 20.57 Cr** and **Rs 61.72 Cr** (calc Rows A and B). The advance is the client's money and Crestline does not move it.

**Data needed.** Per project: customer advance received (date, amount), advance recovered on each RA bill, the advance recovery rate in the contract, and the balance outstanding by project.

**What is not claimed (internal, not printed).** No cost-of-money figure, no yearly figure, no figure for the whole receivables book, no target, and nothing measured from Jyoti's own ERP. Calc Row D (advances plus released cash) is no longer drawn (Garvis ruling JS-4 b). The pilot (webapp-fit.md) is where the real days per bill, per step and per desk get measured: one to three running transmission projects, standalone, read-only, 14 days, with your ERP that "will feed, read-only, built during the pilot".
