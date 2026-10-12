# Lever table, Relcon Infraprojects Limited (RC-S23, 2026-10-12)

Basis: CRISIL Rating Rationale, 13 Dec 2024, standalone, year to 31 Mar 2024. Operating income Rs 587.54 Cr. One source, one basis.
Value of a day = 587.54 / 365 = Rs 1.609699 Cr (app function valueOfADay; calc output in rc-savings-output.txt).

| Lever | Priced? | Why |
|---|---|---|
| Value of a day (revenue per day) | YES | 10 days = Rs 16.10 Cr; 30 days = Rs 48.29 Cr, released once. No days bar. |
| Receivables (DSO) | NOT FOUND | No debtor balance or debtor days published. |
| Contract assets / unbilled (certification wait) | NOT FOUND | No contract-asset balance, no certification window published. |
| Retention | NOT FOUND | CRISIL names retention money as a reason for working capital need; no balance, no release basis. |
| Site stock (DIO) | NOT FOUND | No stock cost base published. |
| Gross current assets, 199 days (31 Mar 2024) | NOT PRICED | Includes plant stock (seven ready-mix plants); not a bill-cycle measure and not DSO. |
| Payables (DPO) | NOT FOUND | No creditor balance, days or vendor terms published. Paying later than terms is never cash released. |
| Interest / carry | NOT PRICED | No borrowing rate disclosed. Interest = 0. |
| Combined scenario | NOT RUN | No leg has a base. |
| Ranking (priceLevers) | NOT RUN | Nothing priced beyond the value of a day. |

Asserts (all pass clean, each failed visibly when broken once): no negative release; interest = 0; cross-check days x per day against simulate (10 and 30 days); payables never release cash; no lever priced on a base it does not belong to; basis matches.
