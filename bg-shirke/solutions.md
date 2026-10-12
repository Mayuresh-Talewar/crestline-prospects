# B. G. Shirke: what Crestline would do (SH-3)

Problems are in problems.md. Cash and days come only from calc/shirke-savings-output.txt (the app's own `simulate()` and `priceLevers()`, run 8 Oct 2026). A day is valued at FY25 revenue of Rs 5,916 Cr / 365 = **Rs 16.2 Cr** (row `value_of_a_day_RsCr` = 16.2082).

Rules for every row below:
- Scenarios, not forecasts. A 10 day step and a 30 day step, nothing else.
- Cash is released once. The three problems are the same days seen three ways, so the rows overlap and are **never added**.
- No interest: no rate is disclosed. Nothing is said about debt repaid.
- Paying vendors later is never a saving (calc rows `vendor_dpo_plus10` and `plus30`: Rs 0.00).
- If receivables carry GST, a day of receivables is worth more than a day of revenue, so the cash figures are conservative.

## Rule 13 chart picture, common to all three

Same axis and scale as the "today" series. Today is drawn solid. With Crestline is drawn as **hollow dots on a dashed line**, right of a dashed boundary rule, each labelled with days and cash, and the panel carries the words **"Scenario, not a forecast"**. No interest label anywhere.

## Problem 1. The cycle grew from 113.2 to 160.6 days

**Screen (true today):** project **Working Capital**: the cash cycle diagram shows each leg as a span, and the **cycle simulator** moves one leg at its measured rate and stops at the contract's own windows. **Ask Crestline** at company scope answers "which project holds the most days".

**What it adds:** the 160.6 days split into work not yet billed, bills waiting for certification and certified bills waiting for payment, per project, each with its owner.

**Chart picture:** gross WC days by year, R1.
- Today (solid): FY23 113.2, FY24 131.4, FY25 160.6.
- With Crestline (hollow, dashed): **150.6 days, Rs 162 Cr released** (10 day step); **130.6 days, Rs 486 Cr released** (30 day step).
- Label: "Scenario, not a forecast. Days valued at FY25 revenue / 365. No interest shown."

| Step | Days | Cash released once | Calc rows |
|---|---|---|---|
| 10 days | 160.6 to 150.6 | Rs 162.08 Cr | `P1_gross_step10_*` |
| 30 days | 160.6 to 130.6 | Rs 486.25 Cr | `P1_gross_step30_*` |

**Data needed:** work executed by period, RA bill measured, submitted, certified and paid dates and amounts, ledger balances for unbilled work and receivables, the certification window and payment term of each contract.

## Problem 2. Receivables spilling over the year end

**Screen (true today):** project **O2C** and the **Client** screen under it, with the company **O2C** views **RA Bills**, **Receivables** and **Retention**: every bill aged against its own due date, and the wait attributed to whoever's act ends it (certified and paid are the client body's; submitted is ours). The Client screen's month by step grid shows a month that is slow for every step, such as a year end. **Alerts & Tickets** turns a chase into a commitment that closes as verified only when the figure moves on new data.

**What it adds:** which client body, which project and which RA bill spilled over, and whether the days were lost before submission (ours) or after it (MHADA's, CIDCO's or another body's).

**Chart picture:** gross WC in Rs Cr by year, R1 (Computed).
- Today (solid bars): FY23 Rs 1,795 Cr, FY24 Rs 2,120 Cr, FY25 Rs 2,603 Cr.
- With Crestline (hollow, dashed segment at the top of the FY25 bar): **Rs 162 Cr released at a 10 day step**; **Rs 486 Cr released at a 30 day step**. Only the released amount is labelled.
- Label: "Scenario, not a forecast. The client body certifies and pays; the step is not a claim that its clock can be moved."

| Step | Days | Cash released once | Calc rows |
|---|---|---|---|
| 10 days | 10 days out of the receivable leg | Rs 162.08 Cr | `P2_receivables_step10_*` |
| 30 days | 30 days out of the receivable leg | Rs 486.25 Cr | `P2_receivables_step30_*` |

Receivable days are not published, so the step is taken inside the 160.6 gross days that contain them. The same cash as Problem 1, not added to it.

**Data needed:** client body per project, RA bill number, submitted date, certified date and amount, invoice date, due date, receipt date and amount, retention deducted and released, payment term per contract.

## Problem 3. Net working capital at 17% of revenue, aided by advances and lengthened by early vendor payment

**Screen (true today):** project **Working Capital** capital position (who funds the cycle: client advances, vendor credit, own funds), project **P2P** with **Vendors**, and the company **Payment Timing** view: each payment against that vendor's own due date, early payments named.

**What it adds:** which vendors are paid ahead of their due date, by how many days, and how much cash each early payment used. The discount each payment bought is on no screen today; it is a field to bring in during the pilot, so the choice can be made per vendor. Which projects' mobilisation advances aid the net figure.

**Chart picture:** net WC days by year, R1.
- Today (solid): FY23 51.1, FY24 62.1, FY25 62.1.
- With Crestline (hollow, dashed): **52.1 days, Rs 162 Cr** (10 day step); **32.1 days, Rs 486 Cr** (30 day step), taken on the asset side with current liabilities held.
- A note beside the marks: **"Paying vendors later: Rs 0 counted."**
- Label: "Scenario, not a forecast. Same cash as Problems 1 and 2, not added."

| Step | Days | Cash released once | Calc rows |
|---|---|---|---|
| 10 days | 62.1 to 52.1 | Rs 162.08 Cr | `P3_net_step10_*` |
| 30 days | 62.1 to 32.1 | Rs 486.25 Cr | `P3_net_step30_*` |
| Vendors paid 10 or 30 days later | none | Rs 0.00 | `vendor_dpo_plus*` |

**Data needed:** PO, goods receipt, supplier invoice date and due date, payment date and amount, discount taken, vendor advance ledger, mobilisation advance ledger per project.

## What is ours to move first

`priceLevers` ranks the two 10 day moves at the same Rs 162.08 Cr. The billing side is **ours**: measure, prepare, review, submit and invoice. Certification and payment are the client body's acts, so the collection side needs the client body. Crestline's ranking would put the move that needs nobody's permission in front of the reader first, and the screens would name the bills behind it once the pilot data is read.
