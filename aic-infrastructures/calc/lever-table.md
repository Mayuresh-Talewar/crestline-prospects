# Lever table: every lever considered (AI-S23)

Basis: CRISIL rationale 13 Feb 2026, standalone, FY25. Operating income Rs 457.07 Cr; per day = 457.07 / 365 = Rs 1.252247 Cr. No borrowing rate is published, so no interest is priced on any row.

| Lever | Priced? | Result or reason |
|---|---|---|
| Receivables (DSO), 125 days | PRICED at revenue per day | 10 days less: 115 days, Rs 12.52 Cr released once. 30 days less: 95 days, Rs 37.57 Cr released once. |
| DSO "to the stated term" | Not priced | No payment term is published for FY25. The "30 to 45 days" in CRISIL's 2021 and 2022 rationales is stale and is not used. |
| Contract assets / unbilled (certification wait) | Not priced | No data: no contract-asset line or certification window in the source. |
| Retention | Not priced | No balance and no release basis published. CRISIL names retention, earnest and security deposits held at customers, with no amount. |
| Stock (DIO), 155 days | Not priced | CRISIL publishes no cost base for stock days, and the stock is primarily work in progress. Pricing it at revenue per day would put it on a base it does not belong to. |
| Payables (DPO) | Not priced | No creditor days, payables or vendor terms published. Paying later than terms is never cash released. |
| Supplier advances | Not priced | Named by CRISIL, no amount. |
| Combined scenario | Not run | Only one leg can be priced, so there is nothing to combine. |
| Ranking (priceLevers) | Not applicable | One priced lever. |
| Interest / carry | Not priced | No disclosed borrowing rate. Script asserts carry = 0. |

Asserts in aic-savings.ts, each broken once and seen to fail: no negative release, interest 0, days x per day equals simulate, basis match, only the DSO lever priced, payables never release cash.
