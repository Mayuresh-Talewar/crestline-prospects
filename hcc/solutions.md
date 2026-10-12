# HCC: solutions and savings, HC-3 (QA fixes HC-4)

One per problem in `problems.md`. Screens are described as they work today in the app. HCC's SAP S/4HANA will feed, read-only, built during the pilot. Every "with Crestline" value comes from `calc/hcc-savings-output.txt` (run 8 Oct 2026, re-run byte-identical in HC-4). Standalone, INR crore. No interest is printed: no working capital facility is disclosed.

**Rule 13 drawing:** "Today" bars solid, as in problems.md. "With Crestline" marks on the SAME scale, dashed outline and hollow, one mark per step, each labelled with days and cash and the line **"Scenario, not a forecast."** The two steps overlap: the 30 day step contains the 10 day step, so their cash is never added.

**The two scenarios (calc rows S10 and S30):**

| Step on receivable days on running contracts | Days after | Cash released, once | Interest |
|---|---|---|---|
| 10 days | 147.8 | ₹107.87 Cr | not printed |
| 30 days | 127.8 | ₹323.61 Cr | not printed |

Value of a day ₹10.79 Cr (FY26 standalone revenue ₹3,937.25 Cr / 365, AR FY26 p109, filed 24 Jul 2026). Cross checked: days x value of a day, written without app code, equals the app's `simulate` to two decimals of a crore. Conservative: receivables carry GST and revenue does not.

## S1. For P1: running bills take longer to turn into cash

**The screen (true today):** project **O2C (Cash In)**. It rebuilds each RA bill from its event trail and splits every wait into HCC's (measure, prepare, review, submit, invoice) and the client's (acknowledge, certify, pay). Waits are ranked by rupee days, so the bill holding the most cash for the longest is first. Under the chart, Actionables name the bill, the desk and the next step; **Raise ticket** turns one into a commitment that an auditor closes on the re-measured figure.

**Today and with Crestline (rule 13):**
* Today: FY25 103.5, FY26 157.8 days (solid).
* With Crestline, 10 day step: **147.8 days, ₹107.87 Cr released once** (dashed, hollow).
* With Crestline, 30 day step: **127.8 days, ₹323.61 Cr released once** (dashed, hollow).
* "Scenario, not a forecast."

**Days and cash:** 10 or 30 days off the wait; ₹107.87 Cr or ₹323.61 Cr released once. Not added.

**Data needed:** RA bill event trail: bill number, activity, timestamp, amount, person, department (internal or the client's). Invoice number, date, due date. Receipts matched to invoices.

## S2. For P2: more cash is waiting on running contracts

**The screen (true today):** project **Working Capital**, Simulate mode. The receivable lever moves the real balance at the measured value of a day, stops at the payment term the contract states, and shows the cash released. **Make this the plan** writes the simulated figure into a ticket as the target. Across projects, the company **Working Capital** screen shows which project the extra balance sits on.

**Today and with Crestline (rule 13):**
* Today: FY25 ₹1,361.06 Cr, FY26 ₹1,701.67 Cr (solid).
* With Crestline, 10 day step: **₹1,593.80 Cr, 147.8 days, ₹107.87 Cr released once** (dashed, hollow).
* With Crestline, 30 day step: **₹1,378.06 Cr, 127.8 days, ₹323.61 Cr released once** (dashed, hollow).
* "Scenario, not a forecast."

**Days and cash:** as S1. The balance falls by exactly the cash released; it is the same move seen as a balance.

**Data needed:** trial balance receivable lines with opening balances (for the ledger route), plus the invoice and receipt documents (for the document route). Crestline checks one against the other and marks the figure match, divergent or single.

## S3. For P3: the growth is in this year's bills

**The screen (true today):** project **Client** screen, under O2C. Each invoice is aged on its own due date, never a house average, so a young bill inside its contract term is not called late and a young bill already past it is. It shows where this client's cash is stuck, whose delay it is, and when it lands. Retention is shown as its own ledger, held to the defect period, so it does not blur the reading of the running bills. **Ask Crestline** answers "which bills are past their own due date, and whose move is it?" in figures first.

**Today and with Crestline:**
* Today: outstanding less than six months, FY25 ₹238.12 Cr, FY26 ₹593.57 Cr (solid).
* No "with Crestline" mark on this chart: the calculator does not split the book by age, and a mark here would be an invented value. The scenario marks sit on the P1 and P2 charts (147.8 and 127.8 days; ₹107.87 Cr and ₹323.61 Cr released once).
* "Scenario, not a forecast."

**Days and cash:** as S1. Not added to S1 or S2: all three are the same move on the same book.

**Data needed:** each contract's payment term and certification window; invoice due dates; the retention ledger (deducted, released); people with role, department and work email, so a ticket reaches the right desk.

## What is not in these numbers

* No interest, by ruling: no working capital facility is disclosed.
* No saving from paying vendors later: the simulator releases ₹0.00 Cr from stretched payables.
* The scenarios touch only the receivables on running contracts of ₹1,701.67 Cr.
* No promise that a client will pay faster. Crestline shows whose act a wait is waiting on, puts a name and a deadline on it, and re-measures it.
