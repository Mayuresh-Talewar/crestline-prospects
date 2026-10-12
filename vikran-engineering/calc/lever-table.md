# Lever table (VK-S23, from calc\vk-savings-output.txt; Vikran Engineering Limited, standalone, FY26, INR Cr)

Per day: revenue 1,249.31 / 365 = 3.4228. Stock base (cost of materials consumed 482.75 + project related expense 435.41 = 918.16) / 365 = 2.5155. Rate in the simulator: 0, so interest is 0 on every row.

| Lever | Balance and days | Base | Priced? | Result (cash released once) | Note |
|---|---|---|---|---|---|
| Collection | trade receivables 1,042.33; 304.5 days | revenue per day | Yes | 10 days 34.23; 30 days 102.68 | To term (836.96 in the raw run): NOT PRICED. The 304.5 days include 204.88 retention not due until defect periods end, and only 291 of 1,047 gross is overdue, so most of the balance is not yet due on its own dates; a move to 60 days would claim cash that is not due (Garvis ruling) |
| Certification | contract assets 863.94; 252.4 days | revenue per day | Yes | 10 days 34.23; 30 days 102.68 | no certification window published, so no to-term row |
| Project materials | inventories 79.92; 31.8 days | (materials + project expense) per day | Yes | 10 days 25.16 | 30 days leaves 1.77 days (NOT clamped, the simulator floor is zero) and would release 75.47; not printed, the ruling prices 10 days only |
| Combined (one simulate run) | stock, certification, collection, 10 days each | each leg on its own base | Yes, one scenario | 93.61 | equals the three single runs because the balances are independent; printed as one run, never as a sum of rows |
| Retention | 204.88 | none | No | balance only | released after project completion per contract; no release speed published |
| Vendor credit (trade payables) | not printed | none | No | none | never a lever; paying later is not cash released; vendor terms in days not published |
| Interest / carry | none | none | No | 0 | no single working-capital borrowing rate is published |
| Customer advances 85.74, supplier advances 36.59 | balances | none | No | none | no clock, no base |

Ranking (cash released once, largest step of each lever; priceLevers not run because it needs a financing rate and invents release speeds for certified and retention balances): 1 collection 30 days 102.68; 2 certification 30 days 102.68; 3 collection 10 days 34.23; 4 certification 10 days 34.23; 5 project materials 10 days 25.16.
