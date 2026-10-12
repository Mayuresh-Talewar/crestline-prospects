# A B Infrabuild Limited: lever table (ticket AB-S23)

Basis: STANDALONE, audited, Rs Cr, year ended 31 Mar 2026, closing balances (AR26). Revenue per day = 256.2 / 365 = 0.701918. Cost of construction per day = 233.4579 / 365 = 0.639611 (used for the payables base only). Script: ab-savings.ts, output: ab-savings-output.txt (all asserts pass), break tests: break-tests.txt (each of five asserts fails visibly when broken).

Functions run: simulate, leversFor, toTerms, valueOfADay, priceLevers (app code, no terms passed, financing rate 0).

| Lever | Days now | Base | Priced? | 10 days | 30 days | To the stated term |
|---|---|---|---|---|---|---|
| Contract assets (unbilled work in progress) | 157.5 | revenue per day | YES | Rs 7.02 Cr | Rs 21.06 Cr | none published: no certification window |
| Receivables (DSO) | 148.5 | revenue per day | YES | Rs 7.02 Cr | Rs 21.06 Cr | none published: no payment term (the 180 day agency average is not a contract term) |
| COMBINED, one simulate run, both legs moved together | 157.5 and 148.5 | revenue per day | YES, one scenario | Rs 14.04 Cr (both 10 days less) | Rs 42.12 Cr (both 30 days less) | none |
| Retention | n/a | balance only | NO (balance Rs 18.05 Cr) | not priced | not priced | no release basis published; no implied speed printed |
| Stock (DIO) | n/a | none | NO | no stock balance: the inventories line is unbilled work in progress | | |
| Payables (DPO) | 69.8 | cost of construction per day | NO | no vendor terms published; held at today's figure; paying later is never cash released (asserted) | | |
| Interest or carry | n/a | none | NO | no borrowing rate published; carry is 0 in every run | | |
| Customer advance Rs 9.16 Cr, MSME dues Rs 2.84 Cr | n/a | balances | NO | shown by size only | | |

Cash cycle (contract-asset days + DSO minus DPO, no stock leg): 236.2 on the rounded inputs (236.1 on unrounded balances, printed as 236). Moves: one leg 10 days less, 226; one leg 30 days less, 206; both legs 10 days less (one run), 216; both legs 30 days less (one run), 176.

Ranking (priceLevers order, cash released once, no carry because no rate): no term-based action exists (no terms), so priceLevers returns only the retention balance (Rs 18.05 Cr, carry 0). Contract assets and DSO are worth the same per day (Rs 0.7019 Cr), so neither is ranked above the other; the combined run is the largest single scenario. Rows overlap and are never added; the combined figure is one run, not a sum of rows.
