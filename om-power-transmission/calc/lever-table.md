# Lever table: Om Power Transmission Limited (ticket OP-S23)

Basis: standalone, audited Annual Report 2025-26, year-end balances at 31 March 2026, 365 days, Rs Cr. Every figure below is the output of `op-savings.ts` (full output in `op-savings-output.txt`), which calls the app's `simulate`, `leversFor`, `toTerms`, `valueOfADay`, `buildCyclePosition` and `priceLevers`. No terms were passed, so every floor is zero and every ceiling is today's figure.

Per day values (revenue 449.16 / 365 = 1.2306; cost of material consumed 237.86 / 365 = 0.6517; payables base, materials plus project related expenses 347.36 / 365 = 0.9517).

| Lever | Balance | Days now | Priced on | 10 days | 30 days | To a stated term | Status |
|---|---|---|---|---|---|---|---|
| Collection (receivables, DSO) | 221.42 | 179.9 | revenue per day | 12.31 | 36.92 | none published | PRICED |
| Certification (contract assets, unbilled) | 24.05 | 19.5 | revenue per day | 12.31 | clamped at zero days (stops at 19.5 days, 24.05); NOT printed as a 30-day scenario | none published | PRICED at 10 days only |
| Project materials (stock, DIO) | 15.91 | 24.4 | cost of material consumed per day | 6.52 | clamped at zero days (stops at 24.4 days, 15.91); NOT printed as a 30-day scenario | none | PRICED at 10 days only |
| Vendor credit (payables, DPO) | 123.55 | 129.8 | payables base per day | not priced | not priced | none published (only "as per the terms and conditions of the contract/purchase orders") | NOT PRICED: no term, and paying later is never cash released. The simulator holds it at 129.8 |
| Retention | inside receivables (and inside payables) | n/a | n/a | n/a | n/a | release basis stated (commissioning, final bill approval, closure of obligations), no balance | NOT PRICED: no separate figure, no release speed |
| Interest | n/a | n/a | n/a | 0 | 0 | no single borrowing rate published | NOT PRICED: rate is a range only, and the range is kept out |
| Advances to suppliers | 4.55 | n/a | n/a | n/a | n/a | n/a | NOT PRICED: not a waiting bill, no days measure |
| Customer advances and contract liability | 0.43 and 11.19 | n/a | n/a | n/a | n/a | n/a | NOT PRICED: money received, not trapped |
| Bank deposits held as margin money | 39.45 | n/a | n/a | n/a | n/a | n/a | NOT A LEVER: not cash in hand, not a working-capital balance |

## ONE combined run (a single `simulate` call)
Collection, certification and project materials, 10 days each, vendor credit held: cash released once 31.13 Cr (12.31 + 12.31 + 6.52 from the same run); cycle 74.5 to 54.5 days (certification is not part of the cycle, so the 20 days come from collection and stock). Labelled one scenario, never a sum of rows. Interest 0.

## Ranking
`priceLevers` was run on the position built from the balances. With no certification window and no payment term published, the position yields one action only, "material", and the app prices that action at revenue per day (30.05 Cr). That is the wrong base for stock (assert A10), so it is NOT used. Ranking is therefore by cash released once at 10 days, which is the same ordering the app would give on days: collection 12.31 and certification 12.31 (equal, both at revenue per day), then project materials 6.52. At 30 days only collection is a full scenario (36.92). Ownership: measure, prepare, review, submit and invoice are ours; acknowledge, certify and pay are the client's.

## Printed figures traced to this calc
12.31 (10 days collection and certification), 36.92 (30 days collection), 6.52 (10 days materials), 31.13 (combined), 169.9 / 149.9 (collection days after), 9.5 (certification days after 10), 14.4 (stock days after 10), 64.5 / 44.5 / 64.5 (cycle after collection 10 / 30 / stock 10), 54.5 (combined cycle).
