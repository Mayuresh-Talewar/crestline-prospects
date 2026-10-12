# HCC calculator notes, HC-3

Files: `hcc-savings.ts` (the script, byte identical to the copy that ran in the app repo) and `hcc-savings-output.txt` (full output: four break runs, then the clean run). All figures standalone, INR crore.

## 1. Chart to calc row map (written before the run)

| Chart (problems.md) | Today, from | With Crestline, calc rows |
|---|---|---|
| P1 Running receivable days, FY25 and FY26 | 103.5 and 157.8 (output rows "Running receivable days") | S10.days 147.8 and S30.days 127.8 |
| P2 Running receivable balance, FY25 and FY26 | 1,361.06 and 1,701.67 (data.md, AR FY26 p132) | S10.balance 1,593.80 and S30.balance 1,378.06 |
| P3 Days beyond the 90 day upper end of stated terms | 13.5 and 67.8 (output rows "Gap to 90 days") | S10.gapTo90 57.8 and S30.gapTo90 37.8 |
| Cash released, every chart | | S10.cash 107.87 and S30.cash 323.61, once each |

## 2. Inputs and method

* Value of a day = FY26 standalone revenue from operations 3,937.25 / 365 = 10.79. Revenue verified in data.md (AR FY26 p109, filed 24 Jul 2026), identical in the AR FY25 vintage for FY25.
* Running receivables = the ageing table's line for receivables considered good and not under contest: 1,701.67 (FY26), 1,361.06 (FY25), AR FY26 p132. Days on this line: 157.8 and 103.5, matching data.md.
* App code used: `leversFor` and `simulate` from `@/lib/finance/cycle-simulation`, `priceLevers` from `@/lib/insights/levers`. Only the receivable leg was given a balance and a rate.
* No terms passed. The simulator's clamp was read, not assumed: floor 0.0, ceiling 220.9 days, side "theirs" (the client's clock). Both steps sit inside it.
* Interest rate 0. The company has no disclosed working capital facility; the rates it does disclose sit on other instruments, so no interest is printed (HC-3 ruling).

## 3. Asserts, each broken once

| Assert | How it was broken | Result |
|---|---|---|
| No negative release | asked for 10 more days instead of 10 fewer | failed: release negative, 107.87 consumed |
| Interest = 0 | rate set to 9.5% | failed: 10.25 |
| Independent cross check, days x value of a day (plain arithmetic, no app code) equals `simulate` | value of a day taken on 366 days | failed: 107.58 against 107.87 |
| Payables never release cash | vendor terms passed 60 days above today | failed: 68.49 released |

Clean run: all asserts passed. With no vendor terms, stretching payables by 10, 30 or 60 days releases 0.00, 0.00, 0.00.

## 4. Reading the rows

* The two rows overlap. The 30 day step contains the 10 day step. They are never added.
* Cash is released once, not every year.
* Conservative: the value of a day is struck on revenue, which carries no GST, while the receivable balance does, so a day of receivables holds somewhat more than 10.79.
* Even the 30 day step leaves the book at 127.8 days, 37.8 days beyond the 90 day upper end of the stated terms. The scenario is a step, not a target.
* Scenario, not a forecast. Nothing here says the client will pay faster; it says what each day is worth if it does.

## 5. Housekeeping

Temp file `scripts/_tmp-hcc-savings.ts` deleted by exact name after the copy was diffed (identical). App repo `git status --short` afterwards: `?? docs/03-agent-scorecard.md`, `?? docs/onboarding/` only.
