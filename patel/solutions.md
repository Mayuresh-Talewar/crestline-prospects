# Patel Engineering: solutions

Every figure below comes from calc/pe-savings-output.txt (script calc/pe-savings.ts, the app's own `simulate` and `priceLevers`). Each row is priced on the basis of the days it moves, never on another total:
* **NWC days and retention: CONSOLIDATED.** A day is worth Rs 13.98 Cr: FY26 consolidated revenue Rs 5,102.74 Cr / 365 (Q4 FY26 audited results PDF p20, filed 14 May 2026). Interest cap: Rs 735.86 Cr of cash credit and working capital demand loan drawn on 31 Mar 2026, consolidated (Annual Report FY26 PDF p87, printed p146, note 23, filed 24 Aug 2026).
* **Receivable days: STANDALONE.** A day is worth Rs 13.88 Cr: FY26 standalone revenue Rs 5,066.56 Cr / 365 (same results, PDF p9). Interest cap: Rs 735.86 Cr, the same line in the standalone accounts (Annual Report FY26 PDF p125, printed p223).

Rules on every row: Scenario, not a forecast. Rows overlap and are never added, within a problem or across problems. Interest counts ONLY if the released cash repays cash credit, and is shown at both ends of the disclosed cash credit rate, 9.90% and 12.35% (Annual Report FY26 PDF p87, printed p147, consolidated; PDF p126, printed p224, standalone), capped at the cash credit drawn above; no step reaches the cap. Revenue excludes GST, so the cash figures are conservative. SAP will feed, read-only, built during the pilot.

Rule 13 marks: dashed, hollow, same scale as the chart, calc values only, each labelled with days, cash, interest range and "Scenario, not a forecast".

## P1. Seventeen days back in one quarter
**Screen (true today):** Working Capital, portfolio (/working-capital): ratios by project and month, why working capital moved, release opportunity per project. Then Working Capital per project: the cycle simulator and the ranked levers ("Do this first").
**Rule 13 marks** on the NWC days chart (FY23 to Q1 FY27, CONSOLIDATED, company stated):
| Mark | Days | Cash released once | Interest a year, if it repays cash credit |
|---|---|---|---|
| 10 day step | 137 to 127 | Rs 139.80 Cr | Rs 13.84 Cr to Rs 17.27 Cr |
| 30 day step | 137 to 107 | Rs 419.40 Cr | Rs 41.52 Cr to Rs 51.80 Cr |
Footnote: days CONSOLIDATED (company stated); cash priced on FY26 CONSOLIDATED revenue, Rs 13.98 Cr a day; interest at 9.90% and 12.35%, capped at Rs 735.86 Cr consolidated cash credit drawn, only if the cash repays it.
**Data needed:** trial balance by project and month (receivables, retention, stock, payables, client advances); revenue by project and month.

## P2. Two receivable figures, one bill trail
**Screen (true today):** O2C (/o2c) and its RA bills and receivables views; Client per project. Each bill is placed at the step it stopped at, with what has to happen next and whose desk that is: ours (measure, prepare, review, submit, invoice) or the client's (acknowledge, certify, pay). Receivables are aged on each invoice's own due date; waits are ranked on money times days.
**Rule 13 mark** on the receivable days chart (FY24 62.3, FY25 72.3, FY26 58.6, STANDALONE):
| Mark | Days | Cash released once | Interest a year, if it repays cash credit |
|---|---|---|---|
| 10 day step | 58.6 to 48.6 | Rs 138.81 Cr | Rs 13.74 Cr to Rs 17.14 Cr |
Footnote: days STANDALONE (computed); cash priced on FY26 STANDALONE revenue, Rs 13.88 Cr a day; interest at 9.90% and 12.35%, capped at Rs 735.86 Cr standalone cash credit drawn, only if the cash repays it.
Only the 10 day step is drawn: 30 days would go below the 40 to 45 days the CFO already describes.
**Data needed:** RA bill events with dates and amounts (measured, prepared, reviewed, submitted, acknowledged, certified, invoiced, paid); customer invoices with due dates; receipts matched to invoices; payment term per contract.

## P3. Retention sized, not yet listed
**Screen (true today):** O2C, retention (/o2c/retention): each retention holding with what was withheld, released and still outstanding, the date it becomes collectable (end of the defect liability period) and whether a release has been asked for, longest waiting first. The release is ranked among the other levers on the Working Capital screen. Bank guarantees are not modelled; contracts that allow withdrawal against one would be listed from the contract data, not computed.
**Rule 13 mark** on a retention bar (14.3 to 17.9 days, the CFO's Rs 200 to 250 Cr, on FY26 consolidated revenue):
| Mark | Days | Cash released once | Interest a year, if it repays cash credit |
|---|---|---|---|
| 10 day step | 14.3 to 17.9 becomes 4.3 to 7.9 | Rs 139.80 Cr | Rs 13.84 Cr to Rs 17.27 Cr |
Footnote: the CFO's figure, read on the CONSOLIDATED basis of the same call; cash priced on FY26 CONSOLIDATED revenue, Rs 13.98 Cr a day; interest at 9.90% and 12.35%, capped at Rs 735.86 Cr consolidated cash credit drawn, only if the cash repays it.
Only the 10 day step is drawn: 30 days is more than the whole balance.
**Data needed:** retention deducted per bill; release terms and the end of the defect liability period per contract; which contracts allow withdrawal against a guarantee; releases asked for and received.

## Time saved
Days out of each wait, as above. Management hours are described, never numbered: the CFO's team sees which bill, which desk and since when, instead of rebuilding it from the ledger each quarter.
