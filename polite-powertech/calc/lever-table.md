# Lever table: Polite Powertech Limited (FY25, standalone, 360-day basis)

Source of every row: calc\pl-savings-output.txt (app simulate, leversFor, valueOfADay; no contract terms passed). Rs Cr. Rows overlap and are never added; the combined row is one simulator run.

| Lever | Base and rate per day | Move | Cash released once | Carry saved a year (8.35%, cap 1.99 Cr) | Status |
|---|---|---|---|---|---|
| Receivables (DSO) | revenue 155.6301 / 360 = 0.43231 | 118 to 108 (10 days) | 4.3231 | 0.1662 | priced |
| Receivables (DSO) | same | 118 to 100 (18 days, management's own target) | 7.7815 | 0.1662 | priced |
| Site stock (DIO) | purchases of stock-in-trade 113.7737 / 360 = 0.31604 (never revenue) | 23 to 13 (10 days) | 3.1604 | 0.1662 | priced |
| Combined, one run | both legs above | DSO 108 and DIO 13 together | 7.4834 | 0.1662 | priced as ONE scenario, not a sum of rows |
| Retention receivable | balance 24.7792 (696.70 + 1,781.22 lakh) | none | none | none | not priced: a balance with a stated release basis (after the 1 to 2 year defect liability period, or against a bank guarantee, DRHP p.244); no release speed published, none assumed |
| Contract assets / unbilled | no base | none | none | none | not priced: no such balance in the DRHP, so leversFor draws no lever |
| Vendor credit (DPO) | no days entered | none | none | none | not priced: no vendor terms published; paying later is never cash released. Held at today's figure (assert: 100 to 200 test holds at 100, cash 0) |
| 30-day step | revenue per day | 118 to 88 | not run | none | below management's own 100-day target and below any client term the filing states (none stated); PP2-2 rules only the 10-day and to-target moves |
| Financing the gap | PNB cash credit 8.35%, drawn 1.99 | none | none | none | the cap itself, not a lever |

## Clamp bounds read (leversFor, no terms)
- dso: min 0 (no payment term passed), max 165.2 (118 x 1.4). 108 and 100 are inside; no clamp applies.
- dio: min 0, max 38 (max(23 x 1.5, 23 + 15)). 13 is inside; no clamp applies.
- cad and dpo: no lever (no days supplied).

## Ranking
priceLevers needs a built cycle position and a vendor ledger, which a public filing cannot supply, so it was not run. The same key is applied by hand: cash released once, largest first. Under the cap carry is identical (0.1662) for every row, so cash decides: 1 receivables to 100 days 7.78; 2 receivables 10 days 4.32; 3 stock 10 days 3.16.

## Interest
min(cash released, 1.99) x 8.35% = 1.9906 x 0.0835 = 0.16621 Cr (Rs 16.6 lakh) a year for every priced row, because each exceeds 1.99. The simulator's own uncapped carry (0.2639 to 0.6498) is never printed.
