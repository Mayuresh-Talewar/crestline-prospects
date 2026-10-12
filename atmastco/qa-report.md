# Atmastco: QA report (AT-S23, 10 Oct 2026)

Sources re-downloaded 10 Oct 2026 (NSE and Acuite) and image-checked where printed: FY26 results pp17 to 20 (balance sheet, profit and loss, cash flow, segment annexure); Annual Report FY25 PDF pp17, 105, 107 (AR pages 16, 104, 106) and text pages 11, 18 to 21, 63; Acuite rationale p3 (page image); SAIL press release; board outcome of 14 Aug 2026 (CFO); logo image (clean, no artefacts).

## Figure trace (calc\recompute.py, lakh read from page images, output calc\recompute-out.txt)
All match: revenue 292.62 / 289.57; PAT 18.13 / 19.89; operating cash 13.49 inflow / 33.29 outflow; borrowings 96.52 (21.10 + 75.42) / 71.97 (24.09 + 47.88); cash 19.61 / 48.92; finance cost 12.54 / 12.39; payables 73.63 (MSME 1.24) / 95.43 (4.67) / 47.32 (2.31); FY25 payables ageing 89.45, 0.78, 0.52; services 69.99 (23.9%) / 45.12 (15.6%); customer advances 10.71; supplier and contractor advances 23.60 / 12.05; order book 266.30 + 75.97 = 342.27 (Acuite p3); retention 82.54 (Acuite p3); FY24 revenue 224.01 (Acuite p3); SAIL 235.00 (press release). Per day 0.8017, ten days 8.02, thirty days 24.05 (calc output). Prompt numbers all in the traced set (calc\prompt-checks.py).

## Calc asserts
Five asserts, each broken once and failed visibly (breaks 1 to 4 fail on their own assert; break 5 inflates the rate and is caught by assert 3 first). Clean run passes. Temp file deleted; app git status shows only the two untracked docs.

## Scans on the prompt (calc\prompt-checks.py, planted hits all caught)
0 placeholders, comments, internal references, jargon, en or em dashes, " pt", other prospect names, KEPT OUT terms, interest figures, design words. Remaining hits, justified: "Verified" (fixed product copy step 04); "+91" (phone); "31" (calendar day, not in the allowed-number list by oversight).

## Deviations
1. Tagline and p7 line read "waiting" (brief), the fixed copy says "trapped".
2. Afcons, Reliance and HCC left out of client lists (other prospects' names, banned).
3. data.md says registered office carries "Nandini Road"; the AR line does ("157/158 Light Industrial Area Nandini Road Bhilai 490026"); the filing letterhead puts Nandini Road on the trading office. AR line used with Dist. Durg from the letterhead.
4. data.md "listed 23 Feb 2024" not traced to a page; printed as "February 2024" (AR p11, p228 text).
5. Finance cost 12.54 / 12.39 printed as a profit and loss line, with "no interest priced". Interest paid not printed.
6. Retention labelled as Acuite's reading, not an audited line. Acuite debtor, creditor and inventory days, ageing, limits, grade left out.
7. Fixed p8 timeline uses the full eleven stages; p10 is written here (no fixed copy exists for it); p13 text only; "Keys" and pack text carried byte for byte.
8. No backup of a prior prompt exists, so the content-only comparison check is replaced by the word scan above.
