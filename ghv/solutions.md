# GHV (India) Pvt Ltd: what Crestline would do (GH-4, 7 Oct 2026)

Problems: `problems.md`. Every figure below is from `calc/ghv-savings.output.txt` (Crestline's own pure functions: `valueOfADay`, `leversFor`, `simulate`, `toTerms`, `priceLevers`), run on CRISIL figures.
Scope (README GH-2 ruling): domestic INR EPC only. No multi-currency, no GHV India / GHV Infra inter-company reconciliation, no HAM/BOT annuity analytics, no BG/LC register, no ready connector for their ERP.
Pilot wording: an adapter for their ERP is built first; then 2-3 domestic INR projects, read-only, 14 days of analysis once connected.

**How to read the money.** One day of income is worth:
- **Rs 9.21 cr** on GHV (India) standalone FY24 (Rs 3,361 cr / 365, CRISIL 7-Jan-25). Scale only: 10 days = Rs 92.1 cr, 30 days = Rs 276.2 cr. No FY24 balance exists to apply it to.
- **Rs 6.66 cr** on the combined (GHV India + GHV Infra, CRISIL) FY25 income (Rs 2,431 cr / 365, CRISIL 11-Feb-26). This prices every scenario below, because every balance below is combined.

The two are never mixed. Scenarios, not promises. Rows overlap (the receivables + unbilled balance sits inside GCA) and are **never added**. **No interest saving is shown**: neither CRISIL nor the company publishes a rate on the working-capital lines (the 18% on the Authum OCD is quasi-equity, accrued, and not that rate). Cash only, and debt falls only if released cash is used to repay it.

---

## P1. GCA 116 to 287 days

- **What Crestline does.** The Working Capital screen (company and per project) rebuilds the position from the transactions and from the trial balance, and checks one against the other. The cash-cycle diagram shows stock, unbilled work and receivables as spans drawn to scale, each on the desk that owns it. The cycle simulator moves each leg at its measured rate and stops at the contract's own line.
- **With Crestline, the chart.** Today: six annual dots from CRISIL (222, 193, 161, 125, 116, then 287). With Crestline: the same line monthly, by project, so the climb from 116 shows up in the month it starts, not at year-end.
- **Days and cash (combined basis).** 10 days off 287 releases **Rs 66.6 cr**; 30 days releases **Rs 199.8 cr**. Back to the FY22 level of 161 days: **Rs 839.2 cr**. Back to the FY24 level of 116 days: **Rs 1,138.9 cr** (target days are CRISIL's GHV India standalone readings; CRISIL compares 287 with 116 itself).
- **ERP data needed.** Monthly trial balance (receivables, unbilled / contract assets, retention, stock, payables, customer and vendor advances) per project, plus the RA bill and purchase event log.

## P2. Receivables + unbilled Rs 1,190 cr (about 179 days)

- **What Crestline does.** Splits the one CRISIL number into its two queues: work executed and not yet certified (the company measures, prepares and submits; the client certifies) and bills invoiced and not yet paid (the client pays). Every RA bill is rebuilt from its own dated events and aged against its OWN due date. The O2C screen and the project Overview (contract to cash waterfall) show where each rupee stopped.
- **With Crestline, the chart.** One bar of Rs 1,190 cr becomes a waterfall from contract value to cash collected, each step a named queue with its days and its bills.
- **Days and cash (combined basis).** 178.7 days today. 10 days off releases **Rs 66.6 cr**; 30 days releases **Rs 199.8 cr**. The company already moved Rs 530 cr out between Mar-25 and Sep-25 (CRISIL 11-Feb-26); Crestline is how the next stretch is seen while it builds.
- **ERP data needed.** RA bill events: measured, submitted, certified (with any amount certified short), invoiced, collected, each with date, amount and document number; contract certification window, payment term and retention %.

## P3. Delayed Maharashtra government payments

- **What Crestline does.** The client screen (per project) and the company client view put each payer's actual days beside the payment term that payer signed. Every overdue bill becomes a ticket with a named owner and a deadline, and the auditor closes it only when the re-measured figure has moved. Client waits are chased, never counted as the company's own delay.
- **With Crestline, the chart.** A dumbbell per payer: hollow dot at the agreed term, solid dot at the actual days, the bar between them is the delay. Maharashtra bodies sit beside Gujarat and the rest on one scale.
- **Days and cash.** Same rows as P2 (they overlap; not added): 10 days = Rs 66.6 cr, 30 days = Rs 199.8 cr on the combined basis. Not split by payer: CRISIL publishes no per-client receivable.
- **ERP data needed.** Client master on each contract, invoice and collection events with due dates.

## P4. From NHAI to state and municipal payers

- **What Crestline does.** Ask Crestline answers "which client holds the most of our money, and for how long" over the company. The client comparison ranks payers on the gap to their own terms, never on raw days, so a 90-day payer is not flagged for paying on time.
- **With Crestline, the chart.** Capital held by payer, ranked by rupee-days (amount x days past terms), not by count of bills.
- **Days and cash.** No separate figure: this is visibility over the same balance as P2. No savings number is claimed.
- **ERP data needed.** As P3, across every project in the pilot.

## P5. Debt, interest cover and the bank line

- **What Crestline does.** The cash movement panel reports monthly in, out, net, cumulative and the PEAK FUNDING NEED, the deepest the cumulative goes, which is the line the business actually needed. Paid working capital (cash that actually moved) sits beside accrued working capital, so a facility is sized on cash laid out.
- **With Crestline, the chart.** Monthly cumulative cash with the trough marked, instead of one year-end debt figure.
- **Days and cash (combined basis).** The gap from Rs 618 cr debt (30-Sep-25) to the ~Rs 400 cr CRISIL expects by 31-Mar-26 is **Rs 218 cr = 32.7 days** of FY25 combined income. One day of income is 7% of the Rs 97 cr fund-based limit (Jan-26); a 10-day step is 0.69x the whole limit. No drawn balance is computed (the 87% average ran over a limit cut from 173 to 166 to 97). No interest figure (no disclosed rate).
- **ERP data needed.** Collection and payment events (client receipts, supplier, subcontract and advance payments) by month. Bank-line drawings are not a Crestline screen.

---

## Booklet table (scenarios, rows overlap, never added; Rs crore; combined basis unless stated)

| Problem (CRISIL) | Crestline screen | Scenario | Days | Cash released | ERP data needed |
|---|---|---|---|---|---|
| GCA 287 days, FY25 combined (11-Feb-26) | Working Capital, cash-cycle diagram, simulator | 10-day step | 10 | 66.6 | Trial balance by project, bill and purchase events |
| | | 30-day step | 30 | 199.8 | |
| | | Back to FY22 level (161) | 126 | 839.2 | |
| | | Back to FY24 level (116) | 171 | 1,138.9 | |
| Receivables + unbilled Rs 1,190 cr, 31-Mar-25 (11-Feb-26) | O2C, project Overview waterfall | 10-day step | 10 | 66.6 | RA bill events, contract terms |
| | | 30-day step | 30 | 199.8 | |
| Maharashtra payment delay (11-Feb-26) | Client screens, tickets + auditor | same as receivables rows | | (overlaps) | Client master, invoice and collection dates |
| NHAI >85% (15-Sep-23) to state/municipal payers (11-Feb-26) | Ask Crestline, client comparison | visibility only | | none claimed | as above |
| Debt 618 vs ~400 expected (11-Feb-26) | Cash movement, peak funding need | close the gap | 32.7 | 218.0 | Collection and payment events |
| Scale reference | | one day, GHV (India) standalone FY24 | 1 | 9.21 | |
| Scale reference | | one day, combined FY25 | 1 | 6.66 | |

Footnotes for the booklet: CRISIL-adjusted figures; FY25 onwards combined (GHV India + GHV Infra, CRISIL); no interest shown because no rate is disclosed; receivables may carry GST, so cash figures are conservative only where the source balance is gross (CRISIL does not say).
