# KEC: what Crestline would save, in money and in days (KEC-4, 2026-10-07)

KEC International Ltd, consolidated, Rs crore, FY26 unless marked. Every input is from `kec/data.md` (KEC's own filings, KEC-1); problems P1 to P5 are those of `kec/problems.md` (KEC-3). Every output is printed by `calc/kec-savings.ts`, which runs **Crestline's own pure functions** (`simulate`, `leversFor`, `valueOfADay`, `priceLevers` from the app repo) on these inputs; the run is in `calc/kec-savings.output.txt` ("checks passed").

**Scenarios, never promises.** Every row is what a stated number of days or rupees would be worth if it moved. The rows overlap (10 days off contract assets and 10 days off NWC are largely the same money) and are **never added**. Paying vendors later is never shown as a saving.

## Assumptions (rule 7, stated once, apply everywhere)
| # | Assumption | Value | Source / formula |
|---|---|---|---|
| A1 | Per-day basis | **Rs 64.40 Cr a day** | revenue 23,505.54 / 365 (AR26 PDF p.117). Used for every leg and for KEC's NWC days |
| A2 | KEC's NWC definition | **Not published** | Searched AR26, IP-Q4, IP-Q1, PR, both transcripts (data.md "Unverified"). A day of NWC is converted at A1. This is exact if KEC's NWC days = NWC / revenue x 365, whatever goes into the NWC numerator; if KEC divides by trailing revenue at 30 Jun 26 the base is 23,506.5 (23,505.54 + Q1 FY27 5,024 - Q1 FY26 5,023), the same to the crore |
| A3 | Interest rate | **10.68% a year** | KEC states **no average cost of borrowing** (AR26, both presentations, both transcripts searched). So, per the ticket: finance cost 663.60 / average of 31 Mar 25 and 31 Mar 26 (borrowings + interest-bearing acceptances) = 663.60 / ((5,208.37 + 7,223.97) / 2 = 6,216.17). The 663.60 includes interest on liabilities not at FVTPL 630.15, lease interest 23.25, MSME interest 0.43, other borrowing costs 9.77 (AR26 Note 45, PDF p.141). It excludes bank guarantee / LC charges of 208.14 (booked in other expenses, Note 47). A two-point average may understate the year's average debt (net debt incl. acceptances was 6,806 at 31 Dec 25), which would overstate the rate. **It is a Crestline computation from KEC's figures, never "KEC's rate"** |
| A4 | Sensitivity rate | **6.90% to 8.90%** | the range KEC discloses for consortium working-capital loans in FY26 (AR26 Note 30, PDF p.137). The rupee a shorter cycle frees most likely repays these lines first, so this is the conservative reading. Every interest figure below has it beside it |
| A5 | Receivable and contract terms | **Not published** | so the simulator's contract floors (certification window, client payment term) and the vendor-terms ceiling are null; the app holds the vendor leg at today, and steps are illustrative |
| A6 | Tax for PAT lens | **23.3%** | 1 - PAT 605.59 / PBT 789.14 (AR26 p.117), effective FY26 |
| A7 | Opening days (Crestline arithmetic, closing balances, not KEC's) | contract assets 188.3, receivables 101.0, stock 48.3 (on materials), payables incl. acceptances 212.0 (on materials + erection/sub-contracting) | balance / per-day rate. KEC's own debtor days are 91 on average balances (AR26 PDF p.67); never print 101.0 as KEC's |

One day is worth (`valueOfADay`): **cash 64.40 Cr, interest 6.87 Cr a year** (64.40 x 10.68%; 4.44 to 5.73 at A4).

## Savings by problem

### P3. NWC 137 days against the CFO's 110 (lead page)
- **What Crestline does:** splits KEC's one number into the legs it is made of, per project: the cash-cycle diagram to scale (`CashCycleDiagram`, `/projects/[id]/working-capital`), the cycle simulator bounded by each contract's own windows (`simulate`, Position / Simulate toggle), and every move priced in one currency and ranked (`priceLevers`). Company roll-up at `/working-capital` sums balances over summed per-day rates, never averages days.
- **With Crestline (chart):** the AR26 NWC series (124, 104, 107, 111, 137, then 134 at 30 Jun 26) with the 110 target dashed; beside it ONE stacked bar of the 27 days split into certification / collection / stock / vendor legs, drawn blank-dashed and labelled "filled from your SAP data". The split is not public, so it is never drawn with numbers.
| Scenario | Days | Cash released | Interest a year @10.68% | @6.90-8.90% | Formula |
|---|---|---|---|---|---|
| NWC -10 days | 10 | 644.0 | 68.7 | 44.4-57.3 | 10 x 64.40 |
| NWC -30 days | 30 | 1,932.0 | 206.2 | 133.3-171.9 | 30 x 64.40 |
| **Their target: 137 -> 110** | 27 | **1,738.8** | **185.6** | 120.0-154.8 | (137 - 110) x 64.40 |
| From 30 Jun 26: 134 -> 110 | 24 | 1,545.6 | 165.0 | 106.6-137.6 | (134 - 110) x 64.40 |
- **Against their debt target:** net debt incl. acceptances 6,722 -> 5,500 = **1,222** (CFO, T-Q1 p.17: "roughly about INR1,200 crores"). The NWC target alone releases **1,738.8 = 142.3%** of it (1,738.8 / 1,222). From 30 Jun 26: 1,545.6 against 1,068 still to cut (6,568 - 5,500) = **144.7%**. Read as: the working-capital promise, if met on FY26 revenue, is more than enough to fund the debt promise, **before** capex (328.68 in FY26), dividend, tax and growth, which net debt also has to carry. Growth: each 1% of revenue growth held at 110 days needs **70.8 Cr** (110 x 23,505.54 x 1% / 365); KEC gives no total revenue guidance, so no growth number is assumed.
- **Needs KEC's SAP data to measure:** the split of the 137 days by leg and by project; each contract's certification window and payment term (the simulator's floors); vendor terms (its ceiling); the projects carrying most of the days.

### P1. Contract assets 12,128 and retention 4,923
- **What Crestline does:** O2C stage waits per RA bill from SAP events (measured, billed, certified, invoiced, collected; `lib/derive/cases.ts`), the certification queue against each contract's window, the retention ledger per bill with its release milestone (`RetentionItem`, `testRetentionBasis`), and "ours vs client's" decided by the act that ends each wait. Screens: `/projects/[id]/o2c`, `/projects/[id]/client`, `/o2c`.
- **With Crestline (chart):** the indexed lines of problems.md (revenue 136.0, contract assets 162.4, FY23 = 100), plus a stage timeline (work done -> measured -> certified -> billed -> paid) with each wait as a bar, ours in one ink and the client's in another, blank-dashed until SAP fills it.
| Scenario | Days | Cash released | Interest a year @10.68% | @6.90-8.90% | Formula |
|---|---|---|---|---|---|
| Contract assets -10 days (188.3 -> 178.3) | 10 | 644.0 | 68.7 | 44.4-57.3 | `simulate` cad leg: 10 x 64.40 |
| Contract assets -30 days (188.3 -> 158.3) | 30 | 1,932.0 | 206.2 | 133.3-171.9 | 30 x 64.40 |
| **Retention held to revenue growth** | 15.1 | **974.2** | **104.0** | 67.2-86.7 | 4,922.51 - 3,669.63 x (23,505.54 / 21,846.70) = 4,922.51 - 3,948.27 |
- Retention grew 34.1% (4,922.51 / 3,669.63) while revenue grew 7.6%; retention days 61.3 -> 76.4 (balance / revenue a day). The 15.1 days is 974.2 / 64.40. The release is the client's act (`priceLevers` marks it ours = false); the figure is an assumption (excess over FY25 x revenue growth), not a milestone fact. Illustrative: holds retention to FY25 x FY26 revenue growth. Included in contract assets, so not additional to the contract-asset rows. Not a milestone-based figure. Crestline's part is chasing the retention on the day it falls due, which fits management's own expectation of Saudi releases (T-Q4 p.9) and the half-at-handover, half-six-months rule (T-Q1 p.18).
- **Needs SAP data:** contract-asset ageing (not published), the split of 12,128 between awaiting certification, retention not yet due and disputed, per project and bill; each contract's certification window and retention terms.

### P2. Receivables over six months: 9.0% to 18.2%
- **What Crestline does:** ageing on each invoice's own due date (never a house average), the client screen (where is our money with this client, against its own terms), and named stuck cases ranked by value x days past usual, each with the next step and the desk that owns it. Screens: `/projects/[id]/client`, `/clients`, Alerts & Tickets.
- **With Crestline (chart):** the two-column ageing stack of problems.md (Mar 25, Mar 26) with a third, dashed column "back to FY25 share", the over-six-month bands shrunk to 605.85.
| Scenario | Days | Cash released | Interest a year @10.68% | @6.90-8.90% | Formula |
|---|---|---|---|---|---|
| Receivables -10 days (101.0 -> 91.0) | 10 | 644.0 | 68.7 | 44.4-57.3 | `simulate` dso leg: 10 x 64.40 |
| Receivables -30 days (101.0 -> 71.0) | 30 | 1,932.0 | 206.2 | 133.3-171.9 | 30 x 64.40 |
| **Over-6-month share back to FY25 (9.0%)** | 9.6 | **621.4** | **66.3** | 42.9-55.3 | 1,227.26 - (463.47 / 5,159.92) x 6,745.05 = 1,227.26 - 605.85 |
- The 9.6 days is 621.4 / 64.40. Management's own named pockets (water 400-500 overdue, Afghanistan about 300, T-Q1 p.7) are management statements, not audited balances, and are not added to this row.
- Receivable legs are the client's clock (rule 2): the simulator would floor DSO at each contract's payment term; KEC publishes none, so the steps are illustrative and the floor must come from SAP contract data.
- **Needs SAP data:** which client, project and bill sits in each band, since when, whose desk holds the next step; the payment term per contract.

### P4. Debt and cash: net debt +47.5%, operating cash -414
- **What Crestline does:** turns days into a financing figure per project at a stated rate (`valueOfADay`, simulator carry), shows the peak funding need inside the period rather than the close (`lib/finance/cash-movement.ts`), and the funding map of who funds the position. **Borrowings are not in Crestline's feed** (webapp-fit 1.3): debt is always KEC's published figure, never measured by Crestline.
- **With Crestline (chart):** a two-bar bridge, "net debt target 1,222" beside "NWC target 1,738.8", the second bar extending past the first, captioned "before capex, dividend, tax and growth".
- **Savings:** this problem is the consequence; its money is the P1-P3 rows. The interest on the debt cut itself is 1,222 x 10.68% = **130.5 Cr a year** (84.3-108.8 at 6.90-8.90%).
- **Needs SAP data:** monthly cash in and out per project for the trough; nothing here needs KEC's treasury data, which stays outside.

### P5. Payables: visibility, never a lever
- **What Crestline does:** payment timing against each vendor's OWN due date (early = leakage, late = risk), vendor scorecard, MSME 45-day flag, subcontract stream (`/projects/[id]/vendors`, `/p2p`). NOT claimed: LC, acceptance, TReDS or supplier-finance modelling.
- **With Crestline (chart):** the payables ageing beside the receivables ageing, same anatomy; the target in the middle of a timing chart (`TimingDivergingChart`), never "higher DPO is better".
- **Money, by rule 1:** no release is shown. Asked to stretch payables 30 days, the app's simulator holds the leg at 212.0 days and releases 0 (no published vendor terms, so no ceiling). Paying 10 days sooner **consumes** 510.7 Cr (10 x cost 18,639.87 / 365), 54.5 a year at 10.68%. Any value here is the early-payment leakage that only SAP payment dates can show.
- **Needs SAP data:** vendor, site and order behind each past-due rupee; agreed vendor terms; payment date against due date per invoice.

## Ranked by the app (`priceLevers`, interest a year at 10.68%)
| Rank | Lever (app wording) | Cash | Interest/yr | Days | Ours to move? |
|---|---|---|---|---|---|
| 1 | Release retention held above revenue growth (P1; illustrative, inside contract assets, not milestone-based) | 974.2 | 104.0 | 15.1 | no, the client's act |
| 2 | Bill and certify executed work 10 days sooner (P1; partly KEC's (bill preparation and submission), partly the client's (certification)) | 644.0 | 68.7 | 10.0 | **yes** |
| 3 | Collect invoiced receivables 10 days sooner (P2) | 644.0 | 68.7 | 10.0 | no, the client's clock |
| 4 | Collect receivables overdue over six months, back to FY25 share (P2; overlaps row 3) | 621.4 | 66.3 | 9.6 | no |
Caveats (QA, KEC-8). Receivables rows: Receivable balances include GST; priced at revenue per day, which understates the cash by up to about 15%. Interest rows: Interest at the 6.90% to 8.90% KEC paid on consortium working-capital loans in FY26, assuming released cash repays those loans. Overdue row: Overdue over six months back to the FY25 share (9.0%). Overlaps receivable collection. Rows 1 and 2 overlap (retention sits inside contract assets). Days 188.3 / 101.0 / 289.3: Closing balances over revenue per day; receivables include GST, so days overstate; Crestline arithmetic, not KEC's definition. (GST-inclusive balances over ex-GST revenue: days are overstated, cash is not.) DPO 212.0 and -510.7: Includes interest-bearing acceptances (also in net debt); cost base is materials plus erection only. 1,738.8 vs 1,222: gross working-capital release against a net debt cut that also carries capex, dividend, tax and growth.

The steps before the client certifies (measure, prepare, review, submit) are wholly KEC's; certification itself is the client's act, which Crestline makes visible and chases with dates. That is why this lever leads the CFO conversation even though retention ranks first on money.

## CFO table (Rajeev Aggarwal): cash, days, interest
Overlapping scenarios; do not add rows.
| Scenario | Days | Cash released (Cr) | Interest a year (Cr) @10.68% | @6.90-8.90% |
|---|---|---|---|---|
| Any leg or NWC, -10 days | 10 | 644.0 | 68.7 | 44.4-57.3 |
| Any leg or NWC, -30 days | 30 | 1,932.0 | 206.2 | 133.3-171.9 |
| NWC 137 -> 110 (your target) | 27 | 1,738.8 | 185.6 | 120.0-154.8 |
| NWC 134 -> 110 (from 30 Jun 26) | 24 | 1,545.6 | 165.0 | 106.6-137.6 |
| Retention held to revenue growth | 15.1 | 974.2 | 104.0 | 67.2-86.7 |
| Over-6-month receivables back to FY25 share | 9.6 | 621.4 | 66.3 | 42.9-55.3 |
| Debt target 6,722 -> 5,500 covered by NWC target | | 142.3% | | |

## CEO table (Vimal Kejriwal): profit and margin
Same numbers, framed as profit. Interest saved is below EBITDA, so it moves **PBT margin and PAT, not EBITDA margin**; the "points" column is interest / revenue, the same scale as KEC's own "interest as % of revenue" line (2.8% in FY26, IP-Q4).
| Scenario | Interest saved/yr | After tax (x 0.767) | Share of FY26 PAT (605.59) | PBT-margin points |
|---|---|---|---|---|
| 10 days of working capital | 68.7 | 52.8 | 8.7% | 0.29 |
| 30 days of working capital | 206.2 | 158.3 | 26.1% | 0.88 |
| NWC to your 110-day target | 185.6 | 142.4 | 23.5% | 0.79 |
| Retention held to revenue growth | 104.0 | 79.8 | 13.2% | 0.44 |
| Over-6-month receivables back to FY25 | 66.3 | 50.9 | 8.4% | 0.28 |
Formulas: after tax = interest x (1 - 23.3%); share of PAT = after tax / 605.59; points = interest / 23,505.54 x 100. At the 6.90-8.90% range every figure scales by 0.65-0.83 (e.g. NWC target: 15.2-19.6% of PAT). Context only, not a claim: KEC's FY26 EBITDA margin was 7.1% (AR26 p.10), so 0.79 points is about a tenth of it in size, delivered below the EBITDA line.

## Time saved
Days out of each wait, as in the tables: 10 or 30 days on a leg; 27 days of NWC to target (24 from June); 15.1 days of revenue held in retention; 9.6 days of revenue held in receivables older than six months. Management hours are not numbered.

## Never print
- 10.68% as "KEC's interest rate" (A3). Print "at 10.68%, finance cost over average borrowings and acceptances, computed from KEC's FY26 accounts" or use the 6.90-8.90% range KEC discloses.
- Our 101.0 / 188.3 / 212.0 days as KEC's figures (A7), or any split of KEC's 137 days.
- Any row added to another, or a vendor stretch as a saving.
- "Crestline reads KEC's SAP today": one adapter has to be built for KEC's instance (webapp-fit section 0).

## Lessons applied
- DEV-7 / VO-5: script and this file written with Write/Edit only. VO-3: rate availability checked in one pass before computing (no stated average found). Never mix data: the KEC folder was grepped for the reference company's name and headline figures; no hits.
