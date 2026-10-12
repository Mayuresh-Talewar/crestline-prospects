# Ashoka Buildcon Limited - solutions and savings (AB-3), 8 Oct 2026

BASIS: STANDALONE (the EPC company) only. Rs crore. Every figure is from `calc/ashoka-savings.output.txt`, produced by `calc/ashoka-savings.ts` on Crestline's own pure functions (`leversFor`, `simulate`, `toTerms` in lib/finance/cycle-simulation.ts; `valueOfADay` in lib/finance/working-capital-cycle.ts; `priceLevers` in lib/insights/levers.ts).
Scope (README ruling, webapp-fit.md): third-party EPC only (NHAI, MoRTH, state PWDs). No HAM annuity, toll, SPV consolidation, related-party netting, asset monetisation, CGD, T&D-specific features, margin or claims management. Nothing is connected today: the adapter for their SAP S/4HANA is built first in the pilot; 14 days of read-only analysis start once it is connected. Pilot: two to three third-party EPC road projects in one entity.

## Rules for every number below
- One day of revenue = standalone revenue from operations FY26 5,811.7 / 365 = Rs 15.9 Cr (script: 15.922). Not total income.
- Scenarios, not promises. Rows OVERLAP and are never added: a day out of contract assets, a day out of receivables and a day out of net WC are each worth the same Rs 15.9 Cr and are partly the same day.
- Vendor credit is never moved. Paying vendors later is never a saving (DPO held out of the simulator).
- Receivables are floored at 90 days, the upper end of the AR's stated "30 to 90 days" terms (rule 2: the client's clock is not ours). Contract assets have no disclosed certification window, so no terms row.
- Receivable balances carry GST and the per-day base does not, so the cash figures are conservative.
- Interest: the AR gives the WC demand loan as MCLR + spread with no number (Note 27, PDF p222). The only numeric rate Ashoka has stated for standalone WC debt is the CFO's "9.5 is the cost of borrowing at the standard level for the working capital debt" (Paresh Mehta, Q4 FY25 call, 26 May 2025, p15), spoken and over a year old. **Interest columns print only if Garvis accepts this as a disclosed rate; otherwise the booklet is cash only.** Interest is counted only where the cash repays the WC loan actually drawn, capped at 1,110 (30 Jun 2026). Interest on the whole 1,110 at 9.5% = 105.5, 33.7% of FY26 finance cost 313.0.
- Margin lens: PAT FY26 320.4 and PBT FY26 390.0 both include the 164.7 exceptional gain; PBT before exceptional items is 225.3.
- The CFO's "110 to 120 days" is his words only. His metric is undefined; the NWC rows below show the size of the gap IF his words were read on our measure. Never a target.

## Per problem

### P1. Receivables + contract assets 290 days (148 in FY24)
- **Crestline screen:** project O2C (`/projects/[id]/o2c`) and the company Working capital page (`/working-capital`): each RA or milestone bill traced measured, submitted, certified, invoiced, collected, with the wait at each step in days and rupees, per project.
- **"With Crestline" chart:** a horizontal stage bar per project (O2C pipeline buckets, mutually exclusive, summing to value in flight), each bucket tinted by distance from the contract's own term. Illustrative stages only; no day values until their data is read.
- **Savings:** back to FY24's own 148 days (standalone, FY24 and FY26 both): 142.1 days, cash 2,262.6; interest 105.5 a year (capped at the 1,110 loan), 32.9% of PAT, 27.0% of PBT.
- **Needs from SAP S/4HANA:** FI-AR open items with document and due dates, billing documents per project (WBS), RA bill measurement, submission and certification dates, receipts.

### P2. Contract assets 166 days
- **Crestline screen:** project Overview (`/projects/[id]/overview`) contract-to-cash waterfall and time x money matrix; the certification leg in the working-capital simulator (`/projects/[id]/working-capital`).
- **"With Crestline" chart:** contract-to-cash waterfall, executed to certified to invoiced to collected, with the largest leak named; certification queue ranked by rupee-days (amount x days waiting).
- **Savings:** 10 days out = 159.2 cash, 15.1 interest a year (4.7% of PAT, 3.9% of PBT). 30 days out = 477.7 cash, 45.4 interest (14.2% PAT, 11.6% PBT). Preparing and submitting the bill are Ashoka's acts; certifying is the client's.
- **Needs:** project progress / executed value by WBS (PS), RA bill dates by stage, certification amounts and deductions.

### P3. Net operating WC 150 days, operations used cash two years
- **Crestline screen:** project Working capital (`/projects/[id]/working-capital`): Position / Simulate toggle, accrued and paid bases, cash movement panel with PEAK funding need; portfolio `/dashboard` for which job holds the most capital.
- **"With Crestline" chart:** cash-cycle diagram to scale (stock, unbilled, receivable spans against vendor credit), and the cumulative cash line with its trough marked.
- **Savings:** 10 days out = 159.2 cash, 15.1 interest. 30 days out = 477.7 cash, 45.4 interest (14.2% PAT, 11.6% PBT). If the CFO's words were read on this measure: to 120 days = 30.2 days, 480.7 cash, 45.7 interest; to 110 = 40.2 days, 639.9 cash, 60.8 interest (19.0% PAT, 15.6% PBT). His words, not a target.
- **Needs:** the above plus MM purchase orders, goods receipts, supplier invoices and payments, customer advances and recoveries.

### P4. 32.8% of receivables more than six months past due
- **Crestline screen:** Clients (`/clients`, `/projects/[id]/client`): which client pays slow against its own terms; ageing priced in rupee-days on `/dashboard`; each overdue bill raisable as a ticket with an owner and a deadline (`/projects/[id]/tickets`), closed only when the auditor re-measures the figure.
- **"With Crestline" chart:** ageing buckets priced in rupee-days per client, each bill against its OWN due date.
- **Savings:** receivables to 90 days (upper end of the AR's 30-90 day terms): 33.6 days, 535.6 cash, 50.9 interest (15.9% PAT, 13.0% PBT). Receivables 10 days out = 159.2; 30 days out = 477.7 (overlap with the terms row).
- **Needs:** FI-AR open items with due dates per invoice, customer master, receipts and clearing.

### P5. WC loan 757 to 1,110; finance cost 313
- **Crestline screen:** company Working capital (`/working-capital`): release per project at agreed terms, levers ranked by cash and carry (`priceLevers`), the cost of financing the gap as the alternative every lever beats; Alerts & Tickets with the auditor.
- **"With Crestline" chart:** ranked lever bars (cash released once, carry saved a year) beside a hatched bar for financing the gap.
- **Savings:** the 30-day steps rank equal on cash (477.7 each, carry 45.4); contract assets ranks as Ashoka's own move, receivables as the client's act (`priceLevers`). Interest at 9.5% on the whole 1,110 loan = 105.5 a year: the ceiling of any interest saving here.
- **Needs:** borrowing and interest postings (FI), plus the O2C and P2P data above.

## Booklet table (STANDALONE, Rs crore; rows overlap, never add)
| Scenario | Days from | Days to | Days out | Cash released | Interest a year at 9.5%* | % of PAT 320.4 | % of PBT 390.0 |
|---|---|---|---|---|---|---|---|
| Receivables, 10 days out | 123.6 | 113.6 | 10.0 | 159.2 | 15.1 | 4.7 | 3.9 |
| Receivables, 30 days out | 123.6 | 93.6 | 30.0 | 477.7 | 45.4 | 14.2 | 11.6 |
| Contract assets, 10 days out | 166.2 | 156.2 | 10.0 | 159.2 | 15.1 | 4.7 | 3.9 |
| Contract assets, 30 days out | 166.2 | 136.2 | 30.0 | 477.7 | 45.4 | 14.2 | 11.6 |
| Net operating WC, 10 days out | 150.2 | 140.2 | 10.0 | 159.2 | 15.1 | 4.7 | 3.9 |
| Net operating WC, 30 days out | 150.2 | 120.2 | 30.0 | 477.7 | 45.4 | 14.2 | 11.6 |
| Receivables + contract assets back to FY24's 148 days (same entity, standalone, both years) | 289.8 | 147.7 | 142.1 | 2,262.6 | 105.5 (capped at the 1,110 loan) | 32.9 | 27.0 |
| Receivables to 90 days (upper end of stated terms) | 123.6 | 90.0 | 33.6 | 535.6 | 50.9 | 15.9 | 13.0 |
| Net WC to 120 days (CFO's words, metric undefined, not a target) | 150.2 | 120.0 | 30.2 | 480.7 | 45.7 | 14.3 | 11.7 |
| Net WC to 110 days (CFO's words, metric undefined, not a target) | 150.2 | 110.0 | 40.2 | 639.9 | 60.8 | 19.0 | 15.6 |

*Interest column only if the CFO's spoken 9.5% (Q4 FY25 call, 26 May 2025, p15) is accepted as a disclosed rate, and only where the cash repays the working-capital loan. PAT and PBT include the 164.7 exceptional gain; against PBT before exceptional items (225.3) the shares are 6.7, 20.1, 46.8, 22.6, 20.3 and 27.0 (script column %PBTx).
Time saved: the days-out column, per wait. Management hours are described, never numbered.
