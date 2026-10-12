# Bajel Projects: solutions and savings (BJ-3, QA fixes BJ-4)

Every savings figure is from calc/bajel-savings-output.txt (the app's own `simulate` and `priceLevers`, run 8 Oct 2026, re-run byte-identical in BJ-4). Basis: STANDALONE, AR26 (filed on NSE 17 Jul 2026). Value of one day = FY26 revenue Rs 2,791.58 Cr / 365 = Rs 7.65 Cr. Interest at the two ends of the disclosed 6.5% to 10% (AR26 p291), on cash capped at the Rs 349.96 Cr of borrowings that range covers, and only if the cash repays that borrowing. Mobilisation advance interest is excluded. Bajel states no receivable or working capital target, so none is used.

**The same 10 and 30 day steps drive all four rows. The rows overlap and are never added.**

| Scenario | Days | Cash released once | Interest a year, 6.5% to 10% |
|---|---|---|---|
| (a) 10-day step | 202.8 to 192.8 receivable days | Rs 76.48 Cr | Rs 4.97 Cr to Rs 7.65 Cr |
| (b) 30-day step | 202.8 to 172.8 receivable days | Rs 229.44 Cr | Rs 14.91 Cr to Rs 22.94 Cr |

Chart rule for every picture below (rule 13): "today" bars in solid fill from the filing; "with Crestline" marks hollow with a dashed outline, labelled with days, cash and the interest range, and footed "Scenario, not a forecast." Marks sit on the SAME scale as the bars, except P3, where the release is a separate callout on its own scale because a release once is not part of a year's cash flow.

## P1. Receivables near 200 days of revenue

**The screen (true today).** Project O2C (Cash In) and its Client screen: every bill from executed to collected, aged against its own due date, with the wait split into ours (measure, prepare, review, submit, invoice) and the utility's (acknowledge, certify, pay). Working Capital: the cycle simulator moves the receivable leg at the measured rate per day, floored at the term the client signed. Ask Crestline answers "what should I do first to release cash on this project?" with ranked levers and the named invoices and deadlines behind them.

**Chart picture.** Vertical bars, day axis from zero. FY25 139.8 and FY26 202.8 (AR26 p320), solid. Beside the FY26 bar, in plain neutral text: "Year-end timing of collections, largely collected after year end, per the company." On the FY26 bar, two hollow dashed marks at **192.8** ("10 days, Rs 76.48 Cr once, Rs 4.97 Cr to Rs 7.65 Cr a year") and **172.8** ("30 days, Rs 229.44 Cr once, Rs 14.91 Cr to Rs 22.94 Cr a year"). FY24 is not drawn. Footer: Scenario, not a forecast.

**Days, cash, interest.** 10 days: Rs 76.48 Cr once, Rs 4.97 Cr to Rs 7.65 Cr a year. 30 days: Rs 229.44 Cr once, Rs 14.91 Cr to Rs 22.94 Cr a year.

**Data needed.** Customer invoices and RA bills with document number, amount and due date; receipts matched to them; payment term per contract; client master; the event dates for measured, submitted, certified, invoiced and collected.

## P2. Not due, with retention inside it

**The screen (true today).** Project Overview: retention deducted at billing, bill by bill, and retention held as its own block in the position bridge, apart from receivables, so it is not lost inside one "not due" line. O2C: the certification queue bill by bill, each wait marked ours or the utility's. Working Capital levers: "release the retention that has already met its milestone", priced only once the retention ledger is read; without it no figure is invented.

**Chart picture.** Stacked bars on one rupee axis from zero. FY25: not due Rs 882.77 Cr, overdue Rs 448.34 Cr. FY26: not due Rs 1,530.12 Cr, overdue Rs 399.35 Cr (AR26 p280, solid). Beside the FY26 not-due block, two hollow dashed bars at their own length, **Rs 76.48 Cr** (10 days) and **Rs 229.44 Cr** (30 days), labelled "the step, if it came out of retention and certification time". No adjusted not-due figure is printed: the step is on revenue per day and the ageing is gross, so the two are not netted. Footer: Scenario, not a forecast.

**Days, cash, interest.** As P1; the same step, read as days out of the retention and certification wait. Rs 76.48 Cr or Rs 229.44 Cr once; Rs 4.97 Cr to Rs 7.65 Cr, or Rs 14.91 Cr to Rs 22.94 Cr, a year.

**Data needed.** Retention % and cap per contract, defect liability months, retention deducted per bill, completion and taking-over dates, billing plan milestones with planned and achieved dates, certification events with dates.

## P3. Operating cash behind the work

**The screen (true today).** Working Capital: the cash movement panel (collections against payments each month, the cumulative position and its deepest point, the peak funding need) and the accrued and paid bases, so the cash that actually moved is shown beside the ledger. Portfolio Working Capital sums the pilot projects.

**Chart picture.** Vertical bars, rupee axis from zero. FY25 Rs 69.13 Cr and FY26 Rs 21.09 Cr (AR26 p258), solid, with no scenario mark on them. Beside the chart, a separate callout on its own rupee scale from zero, hollow with a dashed outline, titled "Cash released once, with Crestline": (a) 10 days, **Rs 76.48 Cr**; (b) 30 days, **Rs 229.44 Cr**. The two rows overlap and are not added. Footer: Scenario, not a forecast.

**Days, cash, interest.** As P1. Cash is released once; it is not a recurring rise in operating cash, which is why it is not drawn on the yearly bars.

**Data needed.** Receipts and payments by date (customer, supplier, subcontract, advances), trial balance with opening figures.

## P4. Borrowing, most of it vendor bill discounting, at 6.5% to 10%

**The screen (true today).** Working Capital lever ranking: every move priced in one currency (cash once, interest a year), with "just finance it" priced beside them at the stated rate. The rate and its basis are printed wherever a financing figure appears. Payables are judged against each vendor's own due date; a longer payable is never shown as a saving.

**Chart picture.** Vertical bars, rupee axis from zero. 31 Mar 2025 Rs 356.59 Cr and 31 Mar 2026 Rs 349.96 Cr (AR26 p291), solid. The FY26 bar carries the note's own split: vendor bill discounting Rs 318.96 Cr, working capital facilities Rs 31.00 Cr. On FY26, hollow dashed marks at **Rs 273.48 Cr** (10 days) and **Rs 120.52 Cr** (30 days), labelled "if the released cash repaid these facilities: Rs 4.97 Cr to Rs 7.65 Cr a year, or Rs 14.91 Cr to Rs 22.94 Cr a year". Footer: Scenario, not a forecast. Interest at 6.5% and 10%, the range Bajel discloses (AR26 p291); interest is saved only if the released cash repays these facilities; mobilisation advance interest not included.

**Days, cash, interest.** 10 days: Rs 76.48 Cr, Rs 4.97 Cr to Rs 7.65 Cr a year. 30 days: Rs 229.44 Cr, Rs 14.91 Cr to Rs 22.94 Cr a year. Both are below the Rs 349.96 Cr cap.

**Data needed.** Borrowing balances by facility from the trial balance, and the rate the finance team applies (entered once and printed beside every figure). Supplier invoices and payments with due dates, for the payment timing view.
