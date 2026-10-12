# Lever table: Ranjit Buildcon Limited (RN-S23)
Basis: CARE press release, 7 Dec 2023, standalone FY23. Value of a day = FY23 total operating income 1,267.92 Cr / 365 = 3.4738 Cr (revenue per day). All figures as published, December 2023. No interest anywhere: no borrowing rate is published.
Calc: calc\rn-savings.ts (app simulate, leversFor, toTerms, valueOfADay), output in calc\rn-savings-output.txt.

| Lever | Priced? | Why / basis | 10 days | 30 days | To a stated term |
|---|---|---|---|---|---|
| Gross current asset days 220, ONE block on the receivable (dso) leg, at revenue per day | YES | CARE publishes 220 days (FY22 190); the split into receivables, retention, deposits, stock is not published, so it moves as one block. Simulator bounds read: now 220, min 0 (no payment term published), max 308; 210 and 190 are inside. | 34.74 Cr released once (220 to 210) | 104.21 Cr released once (220 to 190) | none published |
| Receivables alone (DSO) | No | No debtor days, no receivable balance published; GCA must not be split | n/a | n/a | no client payment term published |
| Contract assets / unbilled (certification wait) | No | No contract assets or certification window published | n/a | n/a | none |
| Retention | No | CARE names retention money as a blockage but publishes no balance and no release basis | n/a | n/a | none |
| Site stock (DIO) | No | No stock balance, no materials-consumed or COGS cost base published; never priced at revenue per day | n/a | n/a | none |
| Vendor credit (DPO) | No | No payables, creditor days or vendor terms published; paying later is never cash released; the simulator leg is not drawn (no rate) and releases 0 | n/a | n/a | none |
| Working-capital cycle 137 days | No | CARE figure, denominator not stated; printed once, never priced, never added to the 220 | n/a | n/a | none |
| Carry / interest | No | No borrowing rate published; carry = 0 | 0 | 0 | none |
| Combined scenario | No | Only one lever priced; no sum of rows exists | n/a | n/a | n/a |

Ranking: priceLevers needs a full cycle position, a cash ledger and vendors, none of which exist on a published-figures basis. It was not run. With one priced lever the ranking is that lever first; the unpriced levers carry no cash figure and are listed with their reason.
