# Vascon Engineers: solutions and savings (VS-5)

Prepared 7 Oct 2026. Vascon figures only, from `data.md` (pages there). Arithmetic: `calc/vascon-savings.ts` run on Crestline's own pure functions (`simulate`, `leversFor`, `toTerms` in lib/finance/cycle-simulation.ts; `valueOfADay` in lib/finance/working-capital-cycle.ts; `priceLevers` in lib/insights/levers.ts), output in `calc/vascon-savings.output.txt`. Printed footnotes say "Crestline arithmetic on the published figures", never file names.

## Ground rules applied

- **EPC only.** Crestline covers the EPC contracting business, 96.6% of FY26 consolidated revenue (segment note, AR26 PDF p124, computed). Real-estate development (land, projects under development, unsold units, bookings, RERA escrow) is not modelled. Real-estate inventory (Rs 591 Cr to Rs 737 Cr) is OUT of every scenario. One line in each booklet says so.
- **Per day** = consolidated revenue from operations FY26 Rs 948.53 Cr / 365 = **Rs 2.5987 Cr a day** (AR26 PDF p87). Standalone revenue FY26 is the same Rs 948.53 Cr (AR26 PDF p48), so standalone balances (retention, unbilled) and this per day sit on one revenue total.
- **Cash = days x Rs 2.5987 Cr.** Asserted in the script for every row.
- **Rows overlap and are never added.** A 30-day step on unbilled and a 30-day step on the overall cycle can be the same 30 days. Scenarios, never promises.
- **Paying vendors later is never a saving.** Vascon publishes no vendor terms, so the vendor leg is held at today's figure (asserted), and payables appear only as visibility.
- **Interest**: only at the rate Vascon discloses: cash credit "ranging from 9.65% -10.95%" (AR26 PDF p103, consolidated). That rate applies to cash credit, and fund-based limits drawn were Rs 76 Cr at 30 Jun 2026 (Q1D27 p6). So booklet rows print interest only where the cash is Rs 76 Cr or less. Larger rows carry interest as indicative (other debt runs 6.20% to 13.50%, AR26 PDF p103-105) and capped at FY26 finance cost Rs 16.20 Cr, because nobody saves more interest than they paid. Interest is saved only if the cash repays debt.
- **Our computed rate is not theirs.** Finance cost Rs 16.20 Cr / average borrowings ((205.00 + 298.60) / 2 = Rs 251.80 Cr) = 6.43%. Cross-check only, never printed, never used.
- **Margin**: only as carry cost. Interest sits below EBITDA, so it moves PBT and PAT, never EBITDA margin. PAT FY26 Rs 48.90 Cr (consolidated, AR26 PDF p87); PBT FY26 Rs 65.08 Cr (consolidated, 6,507.98 lakh, AR26 PDF p87; **new figure, read from the PDF text layer for this ticket, not yet in data.md: VS-6 to confirm on the page image**).
- **Q3 FY26 "-88%"** is not used. Order backlog Rs 4,000 Cr is a backlog target, not revenue, and is not used here.
- **Ours vs the client's**: measuring, preparing, submitting and invoicing a bill are Vascon's acts; certifying, paying and releasing retention are the client's.

## 1. Unbilled work (contract assets): the largest balance

**Problem (from their accounts).** Net amount due from customers (unbilled less related advances), standalone: Rs 300.64 Cr (Mar-24) to Rs 563.51 Cr (Mar-26), +87.4% (AR24 PDF p87; AR26 PDF p59). In days of revenue: 300.64 / (763.40 / 365) = **143.7 days** in FY24; 563.51 / 2.5987 = **216.8 days** in FY26. The CFO ties the stretch to projects "at the fag end of the completion" where "final bill, certification takes its own sweet time" (Somnath Biswas, Q1T27 p8, 14 Aug 2026).

**What Crestline does (EPC screens).** Rebuilds every RA bill from SAP's own events: executed, measured, bill prepared, submitted, certified, short-certified, invoiced. Each bill's wait is split into Vascon's desk (measure, prepare, submit) and the client's (certify), priced in rupee-days and ranked. `/projects/[id]/o2c` (pipeline buckets, certification queue), `/projects/[id]/overview` (contract-to-cash waterfall: where contract value stops becoming cash), `/projects/[id]/working-capital` (cash-cycle diagram, simulator, levers).

**With Crestline, the chart.** The cash-cycle diagram per project with "Built, waiting to be certified" as its own span, drawn to scale; under it the simulator slider for that leg and the ranked rows naming the bills, the desk and a deadline. The waterfall shows the step where the money stops.

**Savings (scenarios; cash = days x 2.5987).**

| Scenario | Days | Cash (Rs Cr) | Interest a year (Rs Cr) | Formula |
|---|---|---|---|---|
| 10-day step | 10 | 25.99 | 2.51 to 2.85 | 10 x 2.5987; x 9.65% / 10.95% |
| 30-day step | 30 | 77.96 | 7.52 to 8.54 (indicative, above Rs 76 Cr drawn) | 30 x 2.5987 |
| Back to FY24 days of revenue | 216.8 - 143.7 = 73.1 | 189.96 | indicative, capped at 16.20 | 73.1 x 2.5987 |
| Back to the FY24 balance | 101.2 | 262.87 | indicative, capped at 16.20 | 563.51 - 300.64 |

The FY24-days row is the fair one: it allows for revenue having grown. The FY24-balance row is shown because the ticket asks for it; it ignores growth and is the upper bound.

**Needs from their SAP.** Per-bill events (PS/SD): work measured, bill submitted, certified, short-certified with deduction reasons, invoiced, with dates and amounts; the certification window in each contract (not published, so no term floor is applied). Audit trail is not enabled in their SAP (AR26 PDF p44): event dates are read as recorded, and the pilot states this.

## 2. Receivables and retention

**Problem.** Trade receivables, consolidated, Mar-26 Rs 238.30 Cr including retention = 238.30 / 2.5987 = **91.7 days**. Retention (accrued, not due), standalone: Rs 45.26 Cr (Mar-22) to Rs 107.18 Cr (Mar-26), +136.8%; 45.0% of the net receivable. From FY23 retention grew +73.8% (61.67 to 107.18) while standalone revenue grew +23.6% (767.47 to 948.53). Retention days: 61.67 / (767.47 / 365) = 29.3 days (FY23) against 107.18 / 2.5987 = 41.2 days (FY26). Standalone FY22 revenue is not in our data, so the revenue-matched base is FY23.

**Terms check.** Vascon states "The average credit period on EPC contracts is 60 days" (AR26 PDF p60). Billed debtors without retention: 238.10 - 107.18 = Rs 130.92 Cr (standalone) = 50.4 days, already inside 60. `toTerms` releases Rs 0. So the excess sits in retention and unbilled work, not in billed debtors. (App finding for engineering: `simulate` clamps a leg already below its term UP to the term and reports Rs -25.00 Cr here; `toTerms` is correct. Not fixed in this ticket.)

**What Crestline does.** Ages every invoice against its own due date, not a house average; keeps the retention ledger per bill against its defect-liability milestone; flags retention past its release date and the certificate that releases it. `/projects/[id]/client` (who pays late across sites), `/projects/[id]/o2c`, `/clients` for the company view.

**With Crestline, the chart.** Retention per project and per bill, split "milestone met, not released" against "not yet due"; receivables aged on each invoice's own due date; ranked rows naming the client, the bill and the certificate to chase.

| Scenario | Days | Cash (Rs Cr) | Interest a year (Rs Cr) | Formula |
|---|---|---|---|---|
| Receivables incl. retention, 10-day step | 10 | 25.99 | 2.51 to 2.85 | 10 x 2.5987 |
| Receivables incl. retention, 30-day step | 30 | 77.96 | 7.52 to 8.54 (indicative) | 30 x 2.5987 |
| Retention, 10-day step | 10 | 25.99 | 2.51 to 2.85 | 10 x 2.5987 |
| Retention held to revenue growth since FY23 (standalone) | 41.2 - 29.3 = 11.9 | 30.96 | 2.99 to 3.39 | 107.18 - 61.67 x 948.53 / 767.47 |

Release of retention is the client's act (a certificate), so these are chase-and-evidence moves, not decisions Vascon takes alone.

**Needs from their SAP.** Invoice due dates, receipts, retention deducted per bill with its release milestone, client advances and their recovery.

## 3. The overall cycle, in the CFO's own words

**What he said.** "the net working capital cycle has been increased from 45 days to almost 65 to 70 days" (Somnath Biswas, CFO, Q1T27 PDF p6-7, call 14 Aug 2026), and that it "will be aligned to the back -- earlier system" (p7). Vascon publishes no formula for this cycle (NOT FOUND), so it is priced on the same per day, and labelled as his description, not a target.

| Scenario | Days | Cash (Rs Cr) | Interest a year (Rs Cr) | Formula |
|---|---|---|---|---|
| 10-day step | 10 | 25.99 | 2.51 to 2.85 | 10 x 2.5987 |
| 30-day step | 30 | 77.96 | 7.52 to 8.54 (indicative) | 30 x 2.5987 |
| His description, 65 back to 45 | 20 | 51.97 | 5.02 to 5.69 | 20 x 2.5987 |
| His description, 70 back to 45 | 25 | 64.97 | 6.27 to 7.11 | 25 x 2.5987 |

**What Crestline does.** Measures the cycle per project from documents and checks it against the ledger (two routes, divergence printed); names the two or three projects and the desks holding the days. He names two government projects, Supaul and Sindhudurg, as the cash constraint (Santosh Sundararajan, Q1T27 p3, p10): Crestline would show their bills, the stage each sits at and since when. `/working-capital` (company, EPC projects), `/projects/[id]/working-capital` (simulator, ranked levers), `/tickets` (who committed, re-measured).

**With Crestline, the chart.** Project x cash-pressure heatmap, each project judged against its own terms; a monthly cycle line per project; the simulator's "Make this the plan" row turning a step into a ticket with a target that is re-measured on the same figure.

**Ranking (priceLevers at 9.65%, overlapping options).** 1. Bring unbilled back to FY24 days: Rs 189.96 Cr, carry Rs 18.33 Cr a year (indicative; the booklet caps interest at Rs 16.20 Cr). 2. Retention held to revenue growth: Rs 30.96 Cr, carry Rs 2.99 Cr a year. Both need the client's act; neither is "ours alone".

## 4. Payables and supplier finance: visibility only, no saving

Trade payables over one year: 150.80 / 641.35 = **23.5%** (standalone ageing, "from the date of transactions", AR26 PDF p66). Supplier finance outstanding **Rs 104.33 Cr** at 31 Mar 2026 (Rs 29.40 Cr a year earlier) = 16.3% of trade payables; terms "30-180days" (AR26 PDF p66). MSME interest accrued and unpaid Rs 2.44 Cr (243.90 lakh, Note 35).

**What Crestline does.** Measures each vendor's payment against its own due date (early, on time, late), MSME against the statutory 45 days, and shows which payables are on supplier finance. `/projects/[id]/p2p`, `/projects/[id]/vendors`. **No saving is claimed**: paying later is a risk, never a saving, and the vendor leg is asserted never to move past terms. Value here is visibility and MSME compliance, stated in words, not rupees.

**Needs from their SAP.** PO, GRN, supplier invoice, payment with dates; vendor payment terms and MSME flag; which invoices sit on the supplier-finance programme.

## 5. Margin lens (CMD booklet): carry cost only

Interest is below EBITDA: it changes PBT and PAT, not EBITDA margin. Rows with booklet-safe interest (cash Rs 76 Cr or less):

| Scenario | Cash (Rs Cr) | Interest a year (Rs Cr) | Share of PAT Rs 48.90 Cr | Share of PBT Rs 65.08 Cr |
|---|---|---|---|---|
| Any 10-day step | 25.99 | 2.51 to 2.85 | 5.1% to 5.8% | 3.9% to 4.4% |
| Retention held to revenue growth (standalone) | 30.96 | 2.99 to 3.39 | 6.1% to 6.9% | 4.6% to 5.2% |
| CFO's description, 65 back to 45 | 51.97 | 5.02 to 5.69 | 10.3% to 11.6% | 7.7% to 8.7% |
| CFO's description, 70 back to 45 | 64.97 | 6.27 to 7.11 | 12.8% to 14.5% | 9.6% to 10.9% |

Formula: share = cash x rate / PAT (or PBT). Pre-tax interest against post-tax PAT overstates the PAT effect; the PBT column is the like-for-like one. PBT pending VS-6 confirmation.

## CFO table (Somnath Biswas)

| Leg | Today (formula) | Scenario | Days | Cash (Rs Cr) | Interest a year (Rs Cr) |
|---|---|---|---|---|---|
| Unbilled (standalone) | 563.51 / 2.5987 = 216.8 d | 10-day step | 10 | 25.99 | 2.51 to 2.85 |
| Unbilled (standalone) | FY24 143.7 d | back to FY24 days | 73.1 | 189.96 | not printed (above Rs 76 Cr drawn) |
| Receivables incl. retention (consolidated) | 238.30 / 2.5987 = 91.7 d | 10-day step | 10 | 25.99 | 2.51 to 2.85 |
| Retention (standalone) | 107.18 / 2.5987 = 41.2 d | held to revenue growth since FY23 | 11.9 | 30.96 | 2.99 to 3.39 |
| Billed debtors ex-retention (standalone) | 130.92 / 2.5987 = 50.4 d vs 60-day credit period | to terms | 0 | 0 | 0 |
| NWC cycle, his words | "45 days to almost 65 to 70 days" | back to 45 | 20 to 25 | 51.97 to 64.97 | 5.02 to 7.11 |
| Payables, supplier finance | 23.5% over 1 year; Rs 104.33 Cr SFA | visibility | n/a | no saving | n/a |

Rows overlap; never add. Interest at 9.65% to 10.95% (Vascon's cash-credit rate), only if the cash repays debt.

## CMD table (Siddharth Vasudevan Moorthy)

| Question | Answer (formula) |
|---|---|
| What is a day of the EPC cycle worth? | Rs 2.60 Cr of cash (948.53 / 365) |
| What would the CFO's 45-day cycle be worth? | Rs 52 Cr to Rs 65 Cr of cash (20 to 25 days x 2.5987); Rs 5.0 Cr to Rs 7.1 Cr interest a year, 7.7% to 10.9% of FY26 PBT |
| Where is most of it? | Unbilled work: 216.8 days of revenue against 143.7 in FY24 |
| Margin effect | Carry cost only: interest is below EBITDA, so PBT and PAT move, EBITDA margin does not |
| What is not covered | Real-estate development (not modelled); payables (never a saving) |
| Pilot | 1 to 3 third-party EPC projects, INR, read-only; an adapter for their SAP built first |

Self-review: 4/5 | PBT 65.08 was read from the PDF text layer, not the page image, and is not yet in data.md | every new figure goes to data.md with an image-read page before it reaches a booklet table.
