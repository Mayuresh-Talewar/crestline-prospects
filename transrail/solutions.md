# Transrail Lighting: solutions (TR-2, 2026-10-09)

All marks are calc values only (calc/output.txt). Drawn dashed and hollow, same scale as "today", labelled "Scenario, not a forecast". Rs crore. Rows overlap and are never added: each step uses the same value of a day, Rs 18.85 Cr (consolidated revenue 6,880.11 / 365), so a 10 day step is Rs 188.50 Cr out of whichever wait it comes from.

Interest, for every row: only at the company's disclosed average 10.31% p.a. on cash credit and WCDL (AR PDF p.199), only on cash capped at the Rs 252.49 Cr drawn at 31 Mar 2026 (cash credit nil + WCDL 252.49, AR PDF p.198), and ONLY IF the released cash repays those facilities. Annual figure, at year-end balances.
Floors: no contract terms are loaded, so the simulator floor is 0 days. Once the contract's certification window and payment term are loaded, the slider stops at them.

## Solution 1 (Problem 1, receivables). Screen true today: project O2C and Client, then Working Capital simulator
Crestline shows each bill's stage and age, whose move is next, and the client's payment behaviour against the term that client signed.
| Mark | Days (receivable) | Cash | Interest a year, if it repays the facilities |
|---|---|---|---|
| Today | 92.19 | | |
| 10 day step | 82.19 | Rs 188.50 Cr | Rs 19.43 Cr (on 188.50) |
| 30 day step | 62.19 | Rs 565.49 Cr | Rs 26.03 Cr (cash capped at 252.49) |
Ours in the list: invoice and submit on the day work is certified. The client's: acknowledge, certify, pay.
Data needed: bill number, client, contract, dates measured, prepared, submitted, acknowledged, certified, invoiced, collected, amounts, payment term, owner desk.

## Solution 2 (Problem 2, contract assets). Screen true today: project Overview waterfall, O2C stages, Working Capital
Crestline splits the balance into bills not yet prepared, bills submitted and waiting, and retention waiting on a milestone, each with age and desk.
| Mark | Days of revenue (contract assets, Crestline measure, not an accounting standard) | Cash | Interest a year, if it repays the facilities |
|---|---|---|---|
| Today | 133.44 | | |
| 10 day step | 123.44 | Rs 188.50 Cr | Rs 19.43 Cr |
| 30 day step | 103.44 | Rs 565.49 Cr | Rs 26.03 Cr (cash capped at 252.49) |
Ours: measure, prepare, review, submit. The client's: acknowledge, certify. Retention returns on contract milestones, not on chasing.
Data needed: unbilled work by contract, retention ledger with release milestone dates, certification window per contract.

## Solution 3 (Problem 3, the days and the debt). Screen true today: Working Capital cycle diagram and simulator, Alerts and Tickets
Crestline puts the four days on the bills that carry them and turns the move into a ticket with an owner, a target and an audit on the same figure.
| Mark | Management's working-capital days (deck p.19) | Cash | Interest a year, if it repays the facilities |
|---|---|---|---|
| Today (Q1 FY27) | 85 | | |
| 10 day step | 75 | Rs 188.50 Cr | Rs 19.43 Cr |
| 30 day step | 55 | Rs 565.49 Cr | Rs 26.03 Cr (cash capped at 252.49) |
The value of a day is revenue per day on the consolidated basis, because the deck that prints the days is a consolidated deck and prints no basis of its own for them; the definition of the days is not printed anywhere we read, so no figure of ours sits beside 85.
Data needed: receivable, contract asset, stock on contract and payable ledgers by project, month-end, so the days can be rebuilt on the company's own definition during the pilot.

## Payables
No row. Paying vendors later never releases cash in Crestline; the vendor side is judged against each vendor's own due date.
