# J. Kumar Infraprojects: solutions and savings (JK-3)

One solution per problem in problems.md. Every cash, day and interest figure comes from `calc/jk-savings-output.txt` (run 8 Oct 2026 on the app's own `simulate` and `priceLevers`). Basis: STANDALONE, AR FY2025-26, filed 27 Aug 2026. Value of a day: Rs 5,693.89 Cr / 365 = Rs 15.5997 Cr.

Rules on every row:
- **Scenario, not a forecast.** Rows overlap and are never added.
- Interest only at the two ends of the range the company discloses: 8.1% (overdraft) and 12.35% (cash credit), AR26 PDF p100, printed 194. Cash is capped at the Rs 587.44 Cr of standalone borrowings drawn (AR26 PDF p100, printed 195, checked on the page image). Interest is saved only if the released cash is used to repay these facilities; if it is not, the cash figure stands and the interest column does not apply.
- Receivables may carry tax that revenue does not, so the cash per day is on the conservative side.
- Paying vendors later is never a saving. The calculator tried a 30 day payables stretch; the simulator held it at 82.8 days and released Rs 0.00.

## S1 (for P1). Find the next days in the receivable book

**Screen, true today:** Working Capital (project and company). The cash cycle simulator moves receivable days at the measured value of a day and stops where the contract stops; the lever ranking ("Do this first") prices each move in cash and interest. O2C and Client show each bill against its own due date, split into our steps (measure, prepare, review, submit, invoice) and the client's (acknowledge, certify, pay).

**Rule 13 chart picture**
- *Today:* receivable days, standalone, closing basis: 95.4 at 31 Mar 2025 and 95.2 at 31 Mar 2026 (solid bars). Source AR26 PDF p89.
- *With Crestline:* two hollow, dashed bars on the same scale: **85.2 days, Rs 156.00 Cr released** (10 day step) and **65.2 days, Rs 467.99 Cr released** (30 day step). Label: "Scenario, not a forecast. Calculator run 8 Oct 2026."

| Scenario | Days | Cash released, once | Interest a year, 8.1% to 12.35%, only if the cash repays the facilities |
|---|---|---|---|
| 10 day step | 95.2 to 85.2 | Rs 156.00 Cr (26.6% of borrowings) | Rs 12.64 Cr to Rs 19.27 Cr |
| 30 day step | 95.2 to 65.2 | Rs 467.99 Cr (79.7% of borrowings) | Rs 37.91 Cr to Rs 57.80 Cr |

No payment term was passed to the simulator because the filings state none; during the pilot each client's signed term becomes the floor, and a step that would cross it is taken to the term and says so.

**Data needed:** revenue by month; every open bill with client, project, document number, amount, invoice date and its own due date; each client's payment term.

## S2 (for P2). Name the bills behind the Rs 141.15 Cr

**Screen, true today:** O2C and Client: ageing from each bill's own due date, ranked by rupee days (amount x days past due), each row naming the project, the client and the desk. Under the chart, Actionables turn a bill into a ticket (Alerts & Tickets) with an owner, a due date and a figure the auditor re-measures from fresh data before it can close.

**Rule 13 chart picture**
- *Today:* the 6 months to 1 year bucket, standalone: Rs 12.65 Cr at 31 Mar 2025 and Rs 141.15 Cr at 31 Mar 2026 (solid bars). Source AR26 PDF p97, printed 188.
- *With Crestline:* on the 31 Mar 2026 bar, same Rs crore scale, a hollow, dashed outline of the same height labelled **"Collected in this scenario: Rs 141.15 Cr, 9.05 days of revenue (receivable days 95.2 to 86.2)"**. Label: "Scenario, not a forecast. Calculator run 8 Oct 2026."

| Scenario | Days | Cash released, once | Interest a year, 8.1% to 12.35%, only if the cash repays the facilities |
|---|---|---|---|
| Collect the 6 months to 1 year bucket | 9.05 days of revenue (95.2 to 86.2) | Rs 141.15 Cr (24.0% of borrowings) | Rs 11.43 Cr to Rs 17.43 Cr |

This row sits inside the S1 rows; it is never added to them.

**Data needed:** per bill, the certified date and amount, the due date, receipts against it, and who submitted and last chased it.

## S3 (for P3). A retention ledger by contract

**Screen, true today:** the O2C retention panel and the lever "Release the retention that has already met its milestone", which reads a retention ledger against defect liability milestones. Where the source supplies no retention ledger, the screen says NA and why, never zero.

**Rule 13 chart picture**
- *Today:* the CFO's four figures, each printed only inside his exact words as quoted in problems.md P3, labelled "CFO on results calls, not audited".
- *With Crestline:* the same total split by contract and by milestone, drawn as hollow, dashed outlines **without numbers**: the calculator takes no input from a figure that is not in the accounts. Label: "Scenario, not a forecast."

| Scenario | Days | Cash | Interest |
|---|---|---|---|
| Retention by milestone | NA: not in the accounts | NA: not priced | NA |

**Data needed:** retention deducted per RA bill, contract retention terms, defect liability dates, release claims submitted and receipts.

## Data for all three (the pilot)
One to three running domestic projects, standalone, read-only, 14 days. Farvision (AR26 BRSR, printed p129) will feed, read-only, built during the pilot.
