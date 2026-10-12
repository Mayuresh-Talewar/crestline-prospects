# Thakur Infraprojects: lever table (TH-S23, 2026-10-12)

Basis: Infomerics press release 23 Jan 2025, standalone, audited, FY24 (year ended 31 Mar 2024). Revenue 736.28 Cr. Value of a day = 736.28 / 365 = 2.0172 Cr. Script: th-savings.ts. Output: th-savings-output.txt (all asserts pass; six deliberate breaks each failed visibly: BREAK=1 negative release, 2 interest above zero, 3 cross-check, 4 an unpriced lever priced, 5 wrong basis (360), 6 payables releasing cash).

Caveat carried to every figure: Infomerics does not state the base of its day figures. Crestline prices the 42 days at revenue per day. The simulator's floor for collection is the client's signed payment term; none is published, so the floor is 0 and the 30-day scenario (12 days) is arithmetic, not a claim that any client would pay in 12 days.

| Lever | Status | Why | Result |
|---|---|---|---|
| Receivables (DSO 42 days) at revenue per day | PRICED | revenue published, days published | 10 days less: DSO 42 to 32, cycle 42 to 32, 20.17 Cr released once. 30 days less: DSO 42 to 12, cycle 42 to 12, 60.52 Cr released once |
| To the client's payment term | not priced | no term published | none (toTerms returns nothing) |
| Contract assets / unbilled (certification wait) | not priced | no contract-asset data, no certification window | none |
| Retention | not priced | no balance, no release basis (agency says only that a large amount is blocked in earnest money deposits and retention money) | none |
| Site stock (DIO 14 days) | not priced | no cost base (materials consumed or COGS) published; never priced at revenue per day | 14 days shown only |
| Vendor credit (DPO 14 days) | not priced | no vendor terms published; paying later is never a saving | 14 days shown only |
| Borrowing carry / interest | not priced | no borrowing rate disclosed | interest 0 |
| Gross current assets 194 days | not priced | Infomerics' own figure, different measure, no balance | printed beside the cycle, never added |

Combined scenario: none. Only one leg is priced, so there is nothing to combine.
Ranking (priceLevers): one priced lever (collection), cash 20.1721 for ten days, carry 0 because no rate is disclosed. It ranks first by default.
