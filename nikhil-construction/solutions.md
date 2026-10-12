# Nikhil Constructiongroup: solutions (all true today; scenarios, not forecasts)

Calc: calc/nk-savings.ts, full output calc/nk-savings.out.txt. Inputs: FY25 operating income Rs 447.15 Cr (CRISIL 5 Aug 2025, standalone), GCA days 275 at 31 Mar 2025. No terms passed, no interest. Simulator: simulate() on the receivable leg as a yardstick, valueOfADay() at rate 0.

## Value of a day
447.15 / 365 = Rs 1.225 Cr (1.225068).

## Scenarios (rows overlap, never added)
| Step | Days after | Cash released once | Rule 13 mark (calc values only) |
|---|---|---|---|
| 10 days out | 265 | Rs 12.25 Cr | 10 x 1.225 = 12.25 |
| 30 days out | 245 | Rs 36.75 Cr | 30 x 1.225 = 36.75 |
Interest: none priced, no rate is disclosed. Payables: asserted never to release cash.
The days are gross current assets days, not receivable days; the value of a day uses revenue, as ruled. This is stated on the page.

## Problem to Crestline answer
1. Problem 1 (275 days, no split): the Working Capital screen and simulator rank the levers and show the cash each day is worth; the pilot would split the 275 by bill, deposit and retention. The ranking is by rupee-days.
2. Problem 2 (year-end weight): the O2C screens age each bill on its own due date and show how the queue builds through the year.
3. Problem 3 (a bigger book): per bill, the reason, the desk and the date of each wait; tickets with an owner and a due date; an auditor that closes only when the number moves.

## Ownership of the steps
Company: joint measurement with the client, MB / QS check, RA bill preparation, review, submission, tax invoice. Client: acknowledgement, certification, payment, retention release.
