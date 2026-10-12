# J. M. Mhatre Infra: solutions (JM-2+3, LIGHT)

Every "with Crestline" value below is a row of calc/jm-savings-output.txt (clean run), produced by the app's own simulate and priceLevers on the company's numbers. Scenarios, not forecasts. Rows are alternatives and are never added: S-A and S-C release the same cash through different legs, and S-A and S-B are one leg at two sizes. No interest figure anywhere: no rate is disclosed. Every chart keeps one scale for today and with Crestline; the with Crestline mark is dashed or hollow and carries the words "Scenario, not a forecast".

**Proposed footnote for every chart with a with Crestline mark:**
"Days: FY23 audited, standalone, from the company's public rating rationale published 28 Mar 2024, p4, the latest year for which day counts are published. Each day is valued at FY25 total operating income of Rs 798.93 Cr (provisional, published 28 Jul 2025) divided by 365, Rs 2.19 Cr a day. FY23 days (the latest published) valued at FY25 provisional income per day; on FY23 income the figures would be larger. Cash is released once. No interest figure: no rate is disclosed. Scenario, not a forecast. The scenarios are alternatives and are never added."

## Problem 1. Collection, 71 days

- **Screen (true today).** O2C (Cash In) and its Client screen: every RA bill with its submitted, certified and paid dates, ageing on its own due date, and which waits are ours (measuring, preparing, reviewing, submitting, invoicing) and which are the client body's (acknowledging, certifying, paying). Working Capital: the cash cycle diagram and the simulator on the collection leg. Alerts & Tickets: the named bills become a commitment with an owner and a re-measured figure.
- **Chart picture (rule 13).** Today, solid: inventory 81, collection 71, creditors 61, operating cycle 91 (FY23). With Crestline, hollow and dashed on the same day scale:
  * 10-day step (S-A): collection 61, operating cycle 81. "10 days, Rs 21.89 Cr released once. Scenario, not a forecast."
  * 30-day step (S-B): collection 41, operating cycle 61. "30 days, Rs 65.67 Cr released once. Scenario, not a forecast."
- **Days and cash released once.** 10 days, Rs 21.89 Cr; or 30 days, Rs 65.67 Cr. Alternatives, never added.
- **Honest limit.** Paying is the client body's act. Crestline does not make CIDCO or a state body pay faster; it shows which bills are certified and unpaid, which never left our desk, and who to chase with which bill numbers.
- **Data needed.** RA bill register with measurement, submission, certification and payment dates and amounts; invoice due dates; receipts; the payment term in each contract.

## Problem 2. Work done and not yet billable, 81 days

- **Screen (true today).** Overview: contract value to cash, with executed work that no bill has picked up yet shown as its own state. Working Capital: the cash cycle diagram and the simulator. O2C: time from executed work to measured to billed, per bill, split into ours and the client body's.
- **Chart picture (rule 13).** Today, solid: inventory 81, collection 71, creditors 61, operating cycle 91 (FY23). With Crestline, hollow and dashed on the same scale:
  * 10-day step on inventory (S-C): inventory 71, operating cycle 81. "10 days, Rs 21.89 Cr released once. Inventory days' basis not stated; valued at income per day, so approximate. Scenario, not a forecast."
- **Days and cash released once.** 10 days, Rs 21.89 Cr. An alternative to the Problem 1 rows: the same cash released through a different leg, never added to them.
- **Honest limit.** The rationale publishes no denominator for inventory days; the step is valued at income per day, the same rate the app uses for work waiting to be billed. If the published days were struck on cost, the cash figure would be smaller. The chart prints: "Inventory days' basis not stated; valued at income per day, so approximate."
- **Data needed.** Executed work by date and project (measurement book or progress records); milestone schedule per contract; RA bill dates; stock receipts AND stock issues (without issues, stock days read NA).

## Problem 3. Gross current asset days 275

- **Screen (true today).** Working Capital: the capital position and its accrued basis, built from transactions, with retention as its own block; O2C: the retention ledger, what is held and what has met its release milestone. Deposits held by clients are NOT modelled today (webapp-fit.md); the screen names them as outside its view rather than guessing.
- **Chart picture (rule 13).** Today, solid: 266 (31 Mar 2022) and 275 (31 Mar 2023), with a rule at the FY23 operating cycle of 91. With Crestline, a hollow dashed mark beside the FY23 bar on the same scale:
  * 10-day step on collection (S-A): 265. "Same step as Problem 1, not additional. 10 days, Rs 21.89 Cr released once. Scenario, not a forecast."
  * 30-day step on collection (S-B): 245. "Same step as Problem 1, not additional. 30 days, Rs 65.67 Cr released once. Scenario, not a forecast."
  * Footnote on this chart: "The rationale does not state the basis of gross current asset days; the marks take the same days off, so they are approximate."
- **Days and cash released once.** The same rows as Problem 1. Nothing is computed for retention or deposits: neither is sized in any public document.
- **Data needed.** Retention ledger (deducted per bill, released, milestone); the monthly trial balance with receivables, unbilled work, retention, stock and other current assets; deposits only as a named balance, since the app does not track them.
