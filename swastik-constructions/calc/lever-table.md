# Swastik Constructions: lever table (SW-S23, 2026-10-12)
Source: Acuite rationale, 30 Jan 2026, standalone FY25. Script: calc/swastik-savings.ts; output: calc/swastik-savings-output.txt (all 6 asserts pass).
Per day = FY25 operating income Rs 393.63 Cr / 365 = Rs 1.0784 Cr. No terms passed, no rate (0).

| Lever | Status | Result / reason |
|---|---|---|
| Receivables (DSO 22 days, revenue per day) | PRICED, 10 days only | 22 to 12 days, Rs 10.78 Cr released once (10 x 1.0784 = 10.784; simulate agrees). Interest 0. |
| Receivables, 30 days | NOT PRICED: clamped | Asked 22 to -8 days. The simulator clamps at its floor (0, no payment term passed or published): moved -22, not -30; it would release Rs 23.73 Cr, not Rs 32.35 Cr. Asserted in the script (assert 4). Not printed: a 30-day cut is not a real scenario on a 22-day wait. |
| Receivables, to the stated term | NOT PRICED | No payment term published. |
| Retention Rs 26.55 Cr (31 Mar 2025) | BALANCE ONLY | Release basis NOT FOUND; no invented speed; no retention days figure computed or printed. |
| Contract assets / unbilled (certification wait) | NOT PRICED | No contract-asset line or days published; no certification window published. |
| Stock (DIO 5 days) | NOT PRICED | No cost base (materials consumed or COGS) published; revenue per day is the wrong base for stock. Shown as a position leg (5 days) in the cash cycle only. |
| Vendor credit (DPO) | NOT PRICED, not printed | No vendor terms published. Paying later than terms is never cash released. The agency creditor-day figure is KEPT OUT of print (README). |
| Interest | NOT PRICED | No borrowing rate disclosed; carry = 0. |
| Combined scenario | NOT RUN | Only one lever is priced. |
| priceLevers ranking | NOT RUN | Needs a full cycle position and cash ledger; with one priced lever there is nothing to rank. Ranking lines are product wording only. |

Break tests (each assert broken once with BREAK=n, each failed visibly with "ASSERT FAILED", then run clean):
1 no negative release | 2 interest = 0 | 3 cross-check days x per day vs simulate | 4 30-day clamp | 5 payables never release cash (synthetic leg, not Swastik data) | 6 basis: one lever, dso, revenue per day.
