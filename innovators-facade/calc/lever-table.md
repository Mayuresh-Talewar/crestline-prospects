# Lever table: Innovators Facade Systems (IF-S23)

Basis: standalone audited accounts, Annual Report for the year ended 31 March 2026 (filed 30 May 2026), closing balances, Rs lakh converted to Rs crore. Script: if-savings.ts. Full output: savings-output.txt. Break tests: break-tests.txt. Every printed saving traces to savings-output.txt.
Per day: revenue 22,751.51 lakh / 365 = 62.33 lakh a day. Materials consumed 11,844.29 lakh / 365 = 32.45 lakh a day. Scenarios, not forecasts. Rows overlap and are never added.

| Lever | Balance (Cr) | Days now | Priced at | 10 days | 30 days | To a stated term | Status |
|---|---|---|---|---|---|---|---|
| Unbilled work, certification wait (ours) | 42.39 | 68.0 | revenue per day | 6.23 Cr | 18.70 Cr | not computed: no certification window published | PRICED |
| Receivables, collection (the client's act) | 41.91 | 67.2 | revenue per day (the app prices receivables at invoiced value per day; invoiced value is not published, so revenue, as ruled) | 6.23 Cr | 18.70 Cr | not computed: no payment term published | PRICED |
| Project materials, stock (ours) | 87.97 | 271.1 | materials consumed per day | 3.25 Cr | 9.74 Cr | no agreed line for stock | PRICED |
| ALL THREE together, one simulate run | | cycle 253.5 | each leg on its own base | 15.71 Cr, cycle 223.5 days | 47.13 Cr, cycle 163.5 days | | PRICED as one run, not a sum of rows |
| Vendor credit (trade payables) | 63.76 | 152.8 (on purchases of 15,229.69 lakh) | | | | | NOT PRICED: no vendor terms published, and paying later is never cash released. The simulator held the leg at today's figure (moved 0.00 days, cash 0.00) |
| Retention | | | | | | | NOT PRICED: two retention figures in the same Annual Report do not agree and the release basis is not published |
| Interest and carry | | | | | | | NOT PRICED: no single borrowing rate is disclosed (spreads and ranges only), so carry is 0 in every run |
| Plant and manufacturing inventory | | | | | | | NOT PRICED: stock is priced only as project materials, at materials cost per day |
| Customer advances | 64.90 | | | | | | NOT PRICED: money the clients hold with the company, not a waiting bill |

## Ranking
priceLevers cannot rank this company: its input is a cycle position built from the contract's own certification window, payment term and vendor terms, and none of the three is published, so the position cannot be built from the audited balances. The moves are ranked by cash released once, which is what priceLevers' carry ranking reduces to when no rate is disclosed:
1. Unbilled work, certification wait: 6.23 Cr per 10 days (18.70 Cr per 30). Tie with collection, because both are priced at revenue per day. Placed first because the step is the company's own; collection is the client's act.
2. Receivables, collection: 6.23 Cr per 10 days (18.70 Cr per 30).
3. Project materials: 3.25 Cr per 10 days (9.74 Cr per 30).
priceLevers was still run on each move as a cash cross-check and agrees with simulate to the rupee (carry 0).

## Asserts (all pass on the clean run; each broken once and failed visibly, see break-tests.txt)
no negative release | interest 0 | independent cross-check (days x annual base / 365 against simulate, singles and combined) | payables never release cash | each lever priced on its own base | printed day figures reproduce in all four years.
