# KEC International Limited (NSE: KEC, BSE: 532714): data, graded (KEC-1, 2026-10-07)

Grade: **V** Verified (document + page + filing date) · **C** Computed (formula, script `src/kec_calc.py`, run `python -I src/kec_calc.py`) · **W** Weak. INR crore, **consolidated** unless marked. Every row below is KEC's own figure from KEC's own document.
Page notation: "PDF p.N (printed p.M)" for the annual reports (they are two-page spreads, printed = 2 x PDF page - 4 in the financial statements).

## UNVERIFIED / OPEN (read first)
| Item | Status | Cheap test that settles it |
|---|---|---|
| **KEC's NWC-days definition** | NOT in any document read (AR26, IP Q4/Q1, PR, 2 transcripts). Only the number is published (137 days at 31 Mar 26). Our own arithmetic gives 145.1 (before contract liabilities) or 116.5 (after) on closing balances; neither matches 137. Never print our figure as theirs | Ask CFO: numerator, average vs closing, treatment of contract assets, retention, acceptances, advances |
| **NWC series restated?** AR25 chart: FY22 131, FY23 112, FY24 112, FY25 122. AR26 chart: FY22 124, FY23 104, FY24 107, FY25 111. Same years, 7 to 11 days lower. Q2 FY26 PR (Nov 2025) still quotes 138 days at 30 Sep 25 and 130 at 30 Sep 24, i.e. the older scale | Unexplained in the documents. Use ONE series per chart; the trend-safe one is AR26 FY22-FY26 (124/104/107/111/137) or the quarterly press-release series (112, 130, 122, 138, 135, 137, 134). Do not mix | Ask CFO |
| FY22 balance-sheet lines | AR23 numbers, BEFORE the reclassification that AR24 applied to the FY23 comparatives (FY23 receivables 6,896.06 as first printed vs 4,281.67 restated; contract liabilities 2,620.30 vs 1,230.34). FY22 receivables / contract assets / contract liabilities are therefore not comparable with FY23-FY26 | Not derivable; use FY23-FY26 for balance trends |
| Why contract assets are 12,128 | Not explained in the filings. Of it, retention receivables 4,922.51 (V) | Ask CFO |
| FY25 EBITDA | Two printed values: 1,528 (PR 26 May 2025, includes Rs 24 Cr arbitration award) and 1,504 (AR26 p.10 / IP Q4 FY26 slide 27, restated to exclude it). Margin 7.0% vs 6.9% | Use 1,504 / 6.9% with FY26 1,659 / 7.1%, never 1,528 against 1,659 |
| "Spillover Rs 450 Cr" and Afghanistan Rs 300 Cr | Management statements, not audited balances | Check Q2 FY27 call |
| SAP S/4HANA and SuccessFactors | NOT FOUND in a primary document (see fact-check.md section C) | Ask IT / CFO |
| Q4 FY26 audited results as filed on NSE/BSE | NOT downloaded; the NSE URL could not be located (only the newspaper-publication intimation, 18 May 2026). Same figures are on kecrpg.com press release (16 May 2026) and AR26 | Open NSE corporate-announcements for KEC, 16 May 2026 |
| Q1 FY27 balance sheet | NOT published in the Q1 pack (no receivable/payable/contract-asset lines). Only net debt, NWC days, P&L | Q2 FY27 results (Nov 2026) will carry the half-year balance sheet |

## 1. Source register (all downloaded into `src/`)
| Key | Document | Where | Date |
|---|---|---|---|
| AR26 | Integrated Annual Report 2025-26 (215 PDF pp.), audited by Price Waterhouse Chartered Accountants LLP | https://www.kecrpg.com/public/media/annualReportMedia/KEC_Annual_Report_2025-26.pdf (`src/AR2526.pdf`) | Financial statements signed 16 May 2026 (PDF p.117); AGM 21 Aug 2026; AR link sent to shareholders, filed on NSE 29 Jul 2026 (`src/NSE_KEC_29072026204215_SEintimation.pdf`). Exact exchange upload day of the AR itself not verified |
| AR25 | Integrated Annual Report 2024-25 | .../KEC_Annual_Report_2024-25.pdf (`src/AR2425.pdf`) | Statements signed 26 May 2025 (PDF p.110) |
| AR24 | Annual Report 2023-24 | .../media/annualReportMedia/KEC Annual Report 2023-24.pdf (`src/AR2324.pdf`) | Signed 7 May 2024 (PDF p.99) |
| AR23 | Annual Report FY2022-23 | .../KEC Annual Report FY2022_23.pdf (`src/AR2223.pdf`) | Signed 3 May 2023 (PDF p.95) |
| PR-Q4 | Press release, Q4 and FY26 results | https://www.kecrpg.com/press-release/earnings/financial-performance-for-quarter-&-year-ended-31-march-2026 (`src/pr_q4fy26.html`) | 16 May 2026 (board approved results 16 May 2026, confirmed by NSE newspaper intimation of 18 May 2026, `src/NSE_KEC_18052026165217_SEintimationnewspaper.pdf`) |
| IP-Q4 | Corporate/investor presentation Q4 FY26 | https://www.kecrpg.com/media/corporatePresentationFilesMedia/Corporate%20Presentation%20Q4%20FY26.pdf (`src/IP_Q4FY26.pdf`, 39 slides) | cover date 16 May 2026 |
| T-Q4 | Q4 FY26 earnings call transcript (27 pp.) | https://www.kecrpg.com/public/media/earningsCallRecordingFilesMedia/KEC%20Q4%20FY26%20Earnings%20Call%20Transcript.pdf (`src/T_Q4FY26.pdf`) | call 18 May 2026 |
| PR-Q1 | Press release, Q1 FY27 | https://www.kecrpg.com/press-release/earnings/financial-performance-for-quarter-ended-30-june-2026-10thaug26 (`src/pr_q1fy27.html`) | 10 Aug 2026 |
| IP-Q1 | Corporate presentation Q1 FY27 (39 slides) | https://www.kecrpg.com/media/corporatePresentationFilesMedia/Corporate%20Presentation%20Q1%20FY27.pdf (`src/IP_Q1FY27.pdf`) | cover date 10 Aug 2026 |
| T-Q1 | Q1 FY27 earnings call transcript (23 pp.) | .../earningsCallRecordingFilesMedia/KEC%20Q1%20FY27%20Earnings%20Call%20Transcript.pdf (`src/T_Q1FY27.pdf`) | call 11 Aug 2026 |
| PR-Q2, PR-FY25 | Press releases Q2 FY26 (10 Nov 2025) and FY25 (26 May 2025) | kecrpg.com press-release/earnings pages (`src/pr_q2fy26.txt`, `src/pr_q4fy25.txt`) | as stated |
Not read: BSE/NSE-hosted copies of the same documents (kecrpg.com is the company's own site). Images of every page quoted are in `src/img/`.

## 2. Profit and loss, FY22 to FY26, Q1 FY27 (KEC consolidated)
| Metric | FY22 | FY23 | FY24 | FY25 | FY26 | Source (grade V) |
|---|---|---|---|---|---|---|
| Revenue from operations | 13,742.26 | 17,281.71 | 19,914.17 | 21,846.70 | 23,505.54 | AR26 PDF p.117 (pr. 231); AR25 p.110 (pr. 217); AR24 p.99 (pr. 195); AR23 p.95 (pr. 187) |
| EBITDA (company) | 904 | 830 | 1,215 | 1,504 (PR 26 May 25: 1,528) | 1,659 | AR26 PDF p.10 (pr. 16-17); IP-Q4 slide 27 |
| EBITDA margin % | 6.6 | 4.8 | 6.1 | 6.9 | 7.1 | AR26 PDF p.10 |
| Finance costs | 316.00 | 538.59 | 655.13 | 663.59 | 663.60 | statements as above |
| Interest as % of revenue (company) | 2.3 | 3.1 | 3.3 | 3.0 | 2.8 | AR26 PDF p.33 (pr. 63) chart; IP-Q4 slide 27 |
| PBT (after exceptional) | 399.43 | 160.98 | 426.49 | 727.49 | 789.14 | statements |
| PAT | 332.08 | 176.03 | 346.78 | 570.74 | 605.59 | statements |
| Operating PAT (ex exceptional), company | | | | 553 | 650 | IP-Q4 slide 27 |
**Standalone** (KEC International Ltd only; cables moved to subsidiary KEC Asian Cables from 1 Jan 2025): revenue FY26 19,047 vs FY25 19,178; EBITDA 1,054 vs 1,037; PAT 428 vs 324 (PR-Q4, 16 May 2026; IP-Q4 slide 28). **Consolidated total income** FY26 23,555.87 (AR26 p.117) is NOT revenue; use 23,505.54.
**Q1 FY27 (quarter to 30 Jun 26) vs Q1 FY26**, PR-Q1 10 Aug 2026: revenue 5,024 vs 5,023; EBITDA 291 vs 350 (5.8% vs 7.0%); interest 3.3% of revenue vs 3.0%; PBT 90 vs 159; PAT 73 vs 125. Standalone: revenue 3,898 vs 4,030, EBITDA 156 vs 197, PAT 1 vs 37.
**Quarterly FY26 (consolidated)**: Q1 revenue 5,023, EBITDA 350, PAT 125 (PR-Q1 comparative); Q2 6,092 / 430 / 161, H1 11,114 / 781 / 285 (PR-Q2, 10 Nov 2025); Q4 6,390 / 448 / operating PAT 193 (PR-Q4).

## 3. Order book, inflow, segments (V)
| | FY22 | FY23 | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|---|---|
| Order book at 31 Mar | 23,716 | 30,553 | 29,644 | 33,398 | 36,267 | AR26 PDF p.10 |
| Order intake | not collected | not collected | not collected | 24,689 | 25,280 (54% international) | PR-FY25 26 May 2025; PR-Q4 / IP-Q4 slide 31 |
Order book 30 Sep 25: 39,325 plus L1 about 5,000 (PR-Q2, 10 Nov 2025). 30 Jun 26: 37,697 (IP-Q1 slide 33); "order book and L1 over Rs 40,000 crore" (PR-Q1). Order book 31 Mar 26: domestic 52% / international 48% (IP-Q4 slide 31); Middle East 28% (AR26 p.10); about 27% of order book plus L1, "almost equally divided between Saudi Arabia and the UAE" (T-Q4 p.2, CEO).
**Segment revenue FY26 vs FY25** (IP-Q4 slide 29; sum checked in script): T&D 15,883 vs 12,833 (of which KEC T&D 14,082 vs 11,508, SAE Towers 1,800 vs 1,325); Civil 3,823 vs 4,483; Transportation 1,555 vs 2,112; Oil & Gas 258 vs 363; Renewables 516 vs 853; Cables & Conductors 2,217 vs 1,805; inter-segment -746 vs -603. **Q1 FY27 vs Q1 FY26** (IP-Q1 slide 31): T&D 3,217 vs 3,157; Civil 993 vs 940; Transportation 259 vs 471; O&G 117 vs 60; Renewables 56 vs 136; Cables 601 vs 383; inter -219 vs -124. FY22-FY24 segment history: not collected.
**Ind AS 108 segments** (Note 58): EPC 21,988.29 / Others (cables) 2,216.70 less inter-segment -699.45 = 23,505.54 (AR26 PDF p.156, pr. 309).

## 4. Balance sheet, working-capital lines (V; closing, 31 March; KEC consolidated)
Basis: each year as printed in the NEXT year's report where restated (FY23 from AR24, FY24 from AR25, FY25 from AR26). FY22 shown for reference only, pre-restatement.
| Line | FY22 (AR23, not comparable) | FY23 (AR24 comparative) | FY24 (AR25 comparative) | FY25 (AR26 comparative) | FY26 (AR26) |
|---|---|---|---|---|---|
| Trade receivables, current (net of ECL) | 5,106.10 | 4,281.67 | 4,136.62 | 5,051.10 | **6,474.21** |
| Trade receivables, non-current (net) | 467.69 | 359.30 | 288.34 | 214.93 | 31.45 |
| Contract assets (unbilled work incl. retention) | 6,092.09 | 7,465.61 | 9,088.37 | 11,043.51 | **12,127.56** |
| of which retention receivables (gross) | n/c | n/c | n/c | 3,669.63 | **4,922.51** |
| Inventories | 1,066.48 | 1,137.16 | 1,213.31 | 1,140.46 | 1,532.74 |
| Trade payables: MSME + others | 6,847.33 (incl acceptances) | 8,388.33 (incl acceptances 2,113.06) | 7,670.22 | 8,996.21 | 8,703.25 (MSME 218.20 + others 8,485.05) |
| Trade acceptances (shown separately from AR25) | in payables | in payables | 1,560.79 | 1,507.27 | **2,120.74** |
| Contract liabilities (advances + advance billing) | 2,410.87 | 1,230.34 | 1,211.49 | 1,659.36 | 1,837.26 |
| of which advance from customers | n/c | n/c | n/c | 1,267.21 | 1,538.71 |
| Borrowings, non-current | 393.26 | 493.16 | 236.01 | 358.46 | 661.37 |
| Borrowings, current | 2,469.45 | 2,701.29 | 3,552.27 | 3,342.64 | 4,441.86 |
| Cash and cash equivalents + other bank balances | 261.94 | 344.16 | 273.28 | 655.93 | 511.93 |
Sources: AR26 PDF p.117 (pr. 230) for FY26 and FY25; AR25 PDF p.110 (pr. 216) FY24; AR24 PDF p.99 (pr. 194) FY23; AR23 PDF p.95 (pr. 186) FY22. Retention and advances: AR26 PDF p.132 Note 20 (pr. 260) and p.139 Note 35 (pr. 274). Acceptances: Note 33 PDF p.138 (pr. 273). n/c = not collected. Contract-asset note wording: "The contract assets represents amounts receivable from customers, primarily relate to the Company's rights to consideration for work executed. The contract assets are transferred to trade receivables when the rights to collection becomes unconditional due to passage of time." (AR26 PDF p.132).
**FY26 detail (V):** gross current trade receivables 6,745.05, ECL allowance 270.84 (FY25: 5,159.92 / 108.82) (Note 16, PDF p.131, pr. 258). Non-current receivables gross 35.60, ECL 4.15 (FY25: 351.06 / 136.13; Rs 111.07 Cr of the allowance moved to current) (Note 11, PDF p.129-130). Contract assets: receivable for contract works 7,408.59 (FY25 7,508.78) + retention receivables 4,922.51 (3,669.63) - ECL 203.54 (134.90) = 12,127.56 (PDF p.132). Inventories split FY26: raw material 970.07, WIP 115.24, finished goods 373.68, stores 49.93, scrap 23.82 (Note 15). Customer advances: advance billing 275.27 (374.14), advance from customers 1,538.71 (1,267.21), interest on customer advance 23.28 (18.01) (Note 35). Related-party receivables 2.20 (PDF p.131).
**Supplier finance (first disclosed FY26):** of trade payables, 1,737.37 are "in the nature of Supplier finance arrangements but non-interest bearing", range 0-180 days; trade acceptances 2,120.74 interest-bearing, 0-180 days, all "received by supplier from finance provider"; comparatives not given (transitional relief). Quote: "The Group does not incur any interest cost for the arrangements specified in point (iii) above. The arrangement simply offers participating suppliers the benefit of early payment." (Note 33, AR26 PDF p.138, pr. 273).
**MSME (Note 32.1, FY26 vs FY25):** principal unpaid 184.25 vs 130.80; interest due on unpaid 6.08 vs 5.38; interest due for delayed payments paid beyond appointed day 27.87 vs 28.46; interest on MSME payable charged to P&L 0.43 vs 9.00 (Note 45).
**Long-term contract balances expected beyond 12 months (Note 59, consolidated):** trade receivables 1,026.26 (FY25 1,187.18), contract assets 1,380.03 (1,584.57), contract liabilities 717.03 (324.08), trade payables 196.83 (150.69) (AR26 PDF p.157, pr. 310).

## 5. Company's own working-capital wording (V)
| Statement | Source | Date |
|---|---|---|
| "Net Working Capital (NWC) stands at 137 days as on 31 Mar'26 vis-a-vis 135 days as on 31 Dec'25" | IP-Q4 slide 30 | 16 May 2026 |
| "Net Working Capital (NWC) has been reduced to 134 days as on 30 Jun'26 vis-a-vis 137 days as on 31 Mar'26" | IP-Q1 slide 32; PR-Q1 | 10 Aug 2026 |
| "Net Working Capital (NWC) stands at 122 days as on 31 Mar 25, vis-a-vis 112 days as on 31 Mar 24" | PR-FY25 (kecrpg.com); AR25 PDF p.9 chart shows 122 / 112 | 26 May 2025 |
| "Net Working Capital (NWC) stands at 138 days as on 30 Sept 25 vis-a-vis 130 days as on 30 Sept 24" | PR-Q2 | 10 Nov 2025 |
| NWC days FY22-FY26 (chart): 124, 104, 107, 111, 137 | AR26 PDF p.10 (pr. 16-17) | May 2026 |
| Net debt incl. acceptances (company's two lines: Net debt + "Interest Bearing Acceptances"): 31 Mar 25 3,051 + 1,507 = 4,558; 31 Dec 25 4,865 + 1,941 = 6,806; 31 Mar 26 4,601 + 2,121 = 6,722; 30 Jun 25 3,660 + 1,689 = 5,348; 30 Jun 26 4,492 + 2,075 = 6,568; 30 Sep 25 6,480 vs 5,265 at 30 Sep 24 | IP-Q4 slide 30; IP-Q1 slide 32; PR-Q2 | as dated |
| Debtors Turnover Ratio (No. of Days) 91 (FY26) vs 81 (FY25) [FY24: 83.1]. Formula printed: "(Average Account Receivable/Total Revenue from operations) x No. of Days" | AR26 PDF p.67 (pr. 131); AR25 PDF p.64 | May 2026 / May 2025 |
| Inventory Turnover (days) 36 vs 33; Current ratio 1.2 vs 1.2; Debt/equity 0.9 vs 0.7; Interest cover 2.2 vs 2.1 | AR26 PDF p.67 | May 2026 |
**Net debt including acceptances rose Rs 2,164 Cr (47.5%) during FY26** (4,558 to 6,722) (C from the two V figures). Company reasons: "Net debt, including acceptances, stood at Rs 6,722 Crore at year-end, due to delayed customer collections, strategic inventory build-up to mitigate supply chain volatility and temporary dispatch delays" (AR26 PDF p.33, pr. 63). IP-Q4 slide 30: "Debt and Working capital levels could have been reduced further but for the following reasons: Spillover of collections ... higher inventory due to delayed dispatches in Dubai amid Middle East disruptions, strategic inventory build-up owing to volatile steel prices, muted collections in the Water business and increase in revenue driven debt".

## 6. Ageing tables (V, KEC consolidated, AR26)
**Current trade receivables, gross (Note 16.3, PDF p.131, pr. 259), Rs Cr**
| Bucket (from due date) | 31 Mar 26 | 31 Mar 25 |
|---|---|---|
| Not due | 3,337.84 | 3,277.90 |
| Less than 6 months | 2,179.95 | 1,418.55 |
| 6 months to 1 year | 691.70 | 266.95 |
| 1 to 2 years | 209.01 | 124.68 |
| 2 to 3 years | 92.35 | 18.77 |
| More than 3 years | 234.20 | 53.07 |
| Total gross (undisputed good + credit impaired + disputed) | 6,745.05 | 5,159.92 |
| of which credit impaired (undisputed 2.74, disputed 42.33) / disputed good 7.74 | 45.07 / 7.74 | 0 / 18.75 |
C (script): over 6 months 1,227.26 = 18.2% of gross (FY25 463.47 = 9.0%); over 1 year 535.56 = 7.9% (FY25 196.52 = 3.8%); not due 49.5% (FY25 63.5%). ECL provision matrix FY26: not due 0.01-4.9%, over 3 years 20.4-100% (Note 54B.3, PDF p.148, pr. 292). **Contract-asset ageing: NOT published** (only the balance, retention and ECL). Non-current receivables: Note 11.1, PDF p.130, gross 35.60, of which "not due" 33.50.
**Trade payables ageing (Note 32.2, PDF p.138, pr. 272), "outstanding for following periods from due date of payments", EXCLUDES acceptances**
| | Unbilled | Not due | <1 yr | 1-2 | 2-3 | >3 | Total |
|---|---|---|---|---|---|---|---|
| 31 Mar 26 | 1,935.21 | 2,517.23 | 3,537.42 | 279.85 | 150.23 | 283.31 | 8,703.25 |
| 31 Mar 25 | 1,865.58 | 3,760.01 | 2,677.63 | 244.91 | 246.63 | 201.45 | 8,996.21 |
C: past due date (columns "<1 yr" to ">3") 4,250.81 = 48.8% of FY26 payables (FY25 3,370.62 = 37.5%); older than 1 year 713.39 (FY25 692.99). MSME part FY26: 218.21 (not due 36.89; <1 yr 163.20; 1-2 10.24; 2-3 1.07; >3 6.81).

## 7. Cash flow and capex (V, consolidated, Rs Cr; latest restated comparatives)
| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Cash generated from / (used in) operations (before tax) | 2.59 | 828.27 | 563.28 | 261.88 | **(113.42)** |
| Taxes (paid) / refund | (286.30) | (214.53) | (252.13) | +157.19 | (300.70) |
| **Net cash from operating activities** | (283.71) | 613.74 | 311.15 | 419.07 | **(414.12)** |
| Capex (PPE + intangibles, net of CWIP) | 143.14 | 178.29 | 237.38 | 182.52 | 328.68 |
| Change in trade receivables (cash-flow line) | +8.30 | (1,194.60) | +144.68 | (992.62) | (1,150.38) |
| Change in contract assets | (1,580.48) | (60.27) | (1,645.80) | (2,017.72) | (1,022.11) |
| Change in trade payables / acceptances | +692.48 | +1,515.27 | +807.99 (AR24) or +1,384.32 payables and (576.31) acceptances (AR25 split) | +1,244.06 / (53.52) | (370.44) / +613.47 |
Sources: AR26 PDF p.118 (pr. 233) FY26, FY25; AR25 PDF p.111 (pr. 219) FY25, FY24; AR24 PDF p.100 (pr. 197) FY24, FY23; AR23 PDF p.96 (pr. 189) FY23, FY22. FY23 operating cash printed 606.73 in AR23 and 613.74 in AR24 (restated); latest used. FY24 311.14 in AR24, 311.15 in AR25. QIP in FY25: Rs 870.16 Cr (AR26 PDF p.160, note on the QIP, printed p.316-317 area). Dividend FY26 Rs 5.50/share (275%), recommended (AR26 PDF p.67).

## 8. Borrowing cost and the guarantee book (V)
- **Interest rate disclosed (ranges, not an average):** consortium working-capital loans 6.90% to 8.90% p.a. in FY26 (8.10% to 10.50% FY25); short-term bank loans (unsecured) 6.50% to 7.90%; listed commercial paper 6.97% to 7.30% (Rs 444.76 Cr); packing credit 4.37% to 6.90%; Bangladesh project loan 13.70% (AR26 PDF p.137, Note 30, pr. 270-271).
- Finance costs 663.60 = interest on liabilities not at FVTPL 630.15 + MSME interest 0.43 + lease interest 23.25 + other borrowing costs 9.77 (Note 45, PDF p.141, pr. 278).
- **Bank guarantee, letter of credit and other charges: Rs 208.14 Cr in FY26 (175.35 FY25)**, booked in other expenses, not in finance cost (Note 47, PDF p.141). C: 0.89% of revenue.
- Financial and performance guarantees given on behalf of jointly controlled operations (KEC share): 1,308.27 at 31 Mar 26 vs 714.85 (Note 54B.3, PDF p.148, pr. 292); management considers a claim "remote". Total amount of BGs/LCs issued by banks for KEC projects: NOT disclosed. Contingent liabilities (tax, civil suits) 188.22 vs 179.24 (Note 57, PDF p.156). Margin money/security against guarantees held in bank: 94.41 (FY25 79.74) (Note 18).
- Bad debts written off 116.25 less allowance used 69.17 = 47.08 expense; ECL allowance charge 164.09 (FY25 216.70) (Note 47). Receivables discounted without recourse: nil in FY26, 63.14 carrying value in FY25 (Note 16.1).
- C: implied finance cost on average (borrowings + acceptances) FY26 = 10.68%, a blended Crestline figure, NOT a rate KEC states; do not print as KEC's interest rate.

## 9. Geography, concentration, FX (V)
- Revenue by region FY26 (FY25), Note 58(b), AR26 PDF p.157 (pr. 310): India 14,516.07 (14,763.29); UAE 1,658.84 (1,170.43); Saudi 3,282.12 (2,383.14); Brazil+Mexico+USA 1,795.22 (1,272.99); other 2,253.29 (2,256.85). C: international 8,989.47 = 38.2% of revenue (FY25 7,083.41 = 32.4%; script prints FY26).
- One India customer 5,579.68 = 23.7% of revenue (C), "(2025: 4,105.50 crore)" = 18.8% (C); one customer outside India (Saudi) 3,282.12. Two customers each above 10% of trade receivables: together 4,372.34 (FY25 2,417.65) (Note 54B.3, PDF p.148). Denominator not stated; against gross current receivables 6,745.05 that is 64.8% (C, indicative only).
- Customers named by KEC: Power Grid (PGCIL), Adani (about 5% of order book plus L1, "close to maybe 5% or less", T-Q1 call p.21), state governments (Jal Jeevan Mission water projects in Odisha and Madhya Pradesh), Indian Railways, Saudi/UAE utilities. State-utility mix of receivables: NOT disclosed.
- FX: forward contracts outstanding 31 Mar 26 net fair value (14.46) vs (0.67) (Note 54C, PDF p.148, pr. 293); realised loss on forwards 52.58 vs 19.39 FY25; policy: "The Group mainly uses forward contracts to manage the foreign currency risk" (PDF p.148). Hedging framework stated at AR26 PDF p.33 (pr. 63).

## 10. Auditor's report (V; Price Waterhouse Chartered Accountants LLP, partner Sumit Seth)
- **FY26 consolidated (PDF p.111-112, pr. 218-221), signed with the statements 16 May 2026:** opinion UNMODIFIED. "Emphasis of Matter ... 4. We draw attention to Note 63 to the consolidated financial statements regarding an investigation by a government agency, who has filed a chargesheet, and the Court has taken cognizance of the same. Pending completion of the proceedings, the possible impact, if any, on the consolidated financial statements is currently not determinable. Our opinion is not modified in respect of the above matter." Note 63 (PDF p.160): investigation "involving one Public Sector Undertaking ('PSU') official and an employee of the Company ... in connection with a transmission project"; company "of the view that the case will not have any material impact".
- **Key audit matters FY26:** (1) "Estimation of construction contract revenue and related cost"; (2) **"Recoverability of Trade Receivables and Contract Assets"**: "Trade receivables and contract assets represent significant balances in the Holding Company's consolidated financial statements as at March 31, 2026. The assumptions used for estimating the expected credit loss in respect of these balances is an area which is influenced by significant Management judgement." The auditor tested "uncertainties and delays in recoveries, subsequent realisation, correspondence with the customers, ongoing litigations and disputes". Also reproduced from the SAE Towers auditors: "Recoverability of Trade receivables ... The Group's trade receivables amount to Rs 303.90 crores as at 31 March 2026 ... The Group has significant overdues from various customers for which expected credit loss provision is measured ... using simplified approach"; and goodwill/deferred tax assets of the Brazilian subsidiary (goodwill 279.36, DTA 328.53).
- **FY25 (AR25 PDF p.104):** unmodified; EoM on Note 64, "an ongoing investigation by a government agency". **FY24 (AR24 PDF p.94):** EoM Note 62: "the Parent Company's net exposure of Rs 245 crores (including Afghanistan branch exposure) from its transmission line projects in Afghanistan as at March 31, 2024, which are kept on hold due to Force Majeure event ... The timing of the recovery of the said exposure is dependent upon the geopolitical environment in Afghanistan and negotiations with international funding agencies." **FY23 (AR23 PDF p.91):** EoM Note 66(a): net exposure Rs 252 crores incl. Rs 79.20 crores in the Afghanistan branch; the branch auditors added that "the bank guarantees issued in respect of these ongoing projects are also currently not enforceable due to the force majeure event". No qualified opinion in any of the four years (only the words "unmodified"/"not modified" appear).

## 11. What management says about collections, payment delays, programmes (V, verbatim; speaker labels in the transcript PDFs are out of sequence in places, so attribution is "management" unless the name is in the line)
| Quote | Source and page | Date |
|---|---|---|
| "We adopted a calibrated approach in executing water projects due to continued delay with payments." (MD, prepared remarks) | T-Q4 p.3 | 18 May 2026 |
| "revenues could have been higher, but for the labor constraints, delayed release of work front in some projects and slower release of payments in the water projects. Given the current payment dynamics in water projects, we continue to follow a calibrated and cautious approach to execution." | T-Q4 p.6 | 18 May 2026 |
| "our net debt, including acceptances is at INR 6,722 crores ... The debt could have been lower, but for the spillover of collections of INR 450 crores from certain large clients to the first week of April '26." | T-Q4 p.4 | 18 May 2026 |
| JJM: "last year, we got around INR800 crores. And this year till now we got around INR58 crores or INR60 crores"; JJM order book about 1,400 and receivables about 800 | T-Q4 p.9, p.14 (CFO) | 18 May 2026 |
| "our Saudi business has got 20% retention, and we have got a lot of large Saudi contracts around two years back, and they are now heading into completion. So I think in the next two quarters, we will receive a lot of release of retentions also." | T-Q4 p.9 (CEO) | 18 May 2026 |
| "The receivables are not increasing. They are not decreasing either. The money is coming, the work is being done." (water) | T-Q4 p.26 | 18 May 2026 |
| "Delay in payments in Water projects leading to slower progress and impacting working capital"; "Delay in legal closure of disputes/ settlement of claims in Transportation and Metro projects" (headwinds) | IP-Q1 slide 34 | 10 Aug 2026 |
| "Debt could have been lower but for: Delay in realisation of significant collections from Afghanistan, which we expect to materialize in Q2" | IP-Q1 slide 23 | 10 Aug 2026 |
| "total receivables [JJM] should be around INR800 crores to INR900 crores, of which around INR400 crores to INR500 crores are sort of overdue ... Balance are pending certification" ... "In the month of July and August till date, we have received around INR110 crores or so between the 2 states." | T-Q1 p.7 (CEO) | 11 Aug 2026 |
| "As far as Afghanistan is concerned, we have around roughly INR300 crores of money, which is due for payment for some time, and it has to come from ADB ... It was supposed to come in Q1. Now, they have told us Q2." | T-Q1 p.7 (CEO) | 11 Aug 2026 |
| "we have deliberately, let's say, slowed down the execution, although the construction is going on full force, what is happening is that supply items, we are actually doing it need-based." (CFO, water) | T-Q1 p.18 | 11 Aug 2026 |
| Claims: "we should be able to realize between INR150 crores to INR200 crores from the claims" (railways, awards already "about INR150 crores, INR160 crores") | T-Q1 p.19 (CFO) | 11 Aug 2026 |
| "I can say that both in civil, T&D, I am seeing [payment terms] improving. Power grid also, in some cases, have now improved ... Power Grid used to charge interest on advances. Now they have made it interest free." And "we recently negotiated a contract where we told the client that we will not work with less than 20% advance". Also: on T&D/PGCIL/Middle East "standard tender conditions, there it [negotiating retention] does not work out". | T-Q1 p.20 (CEO) | 11 Aug 2026 |
| Programme language in the AR: "increasing the average order size from approximately Rs 350 Crore to over Rs 500 Crore. This disciplined approach has strengthened execution efficiency, improved working capital management" and a "Key initiatives ... to optimise financial efficiency" box: fewer larger orders, "Digitised banking and treasury operations", "Strengthened financial governance through an SAP ERP-integrated internal control framework" (AR26 PDF p.33, pr. 62-63). Risk statements: "High dependence on a single geography may create concentration risk in growth, execution and recovery of receivables"; geopolitical risk "may disrupt supply chains, impact project execution and delay collections" (AR26 PDF p.68, pr. 133). | AR26 | May 2026 |

## 12. Management's own targets and guidance (V, exact words)
| Target | Words | Source |
|---|---|---|
| **Net debt** FY27 | "we are targeting an overall reduction of almost INR1,000 crores in the debt. ... INR500 crores should happen by end of Q2 and another INR500 crores by the end of the year" ; "by end of H1 should be around INR6,000 crores"; "[year-end] INR5,500 crores, yes. Yes, absolutely." | T-Q4 p.12, 18 May 2026 (CEO, CFO) |
| **Debt (updated)** | "overall reduction ... roughly about INR1,200 crores debt reduction. So at the beginning of the year, we were at about INR6,700 crores. And what we are guiding is by March, we should reach to about INR5,500 crores." (CFO, levers: Afghanistan, Saudi retention, railway claims, water arrears, inventory unwind) | T-Q1 p.17, 11 Aug 2026 |
| **NWC days** | Q4 call: "currently, we are at about 135 days ... by H1, I think we should come down to about 120 days or so. And another 10 days, we will reduce in the H2" and "I thought we said 110 days" (T-Q4 p.13, p.23). Q1 call: "I think we are talking about 110 days for working capital at the end of the year." (CFO, T-Q1 p.17) | 18 May / 11 Aug 2026 |
| Debt timing | "We expect the debt levels to improve by Q2 FY27" (IP-Q4 slide 30); "we believe they [challenges] are largely transitory" (MD, PR-Q1) | 16 May / 10 Aug 2026 |
| Margin | no guidance given: "that is also preempting us not to give us any guidance on margin" (analyst) and CEO: "high single digit in '28 should be possible" (T-Q1 p.11) | 18 May / 11 Aug 2026 |
| Revenue | Civil "at least 30% or maybe more" growth in FY27 (T-Q4 p.13); Cables "at least 15%" (T-Q4 p.24) | 18 May 2026 |
Outcome so far: NWC 137 to 134 days and net debt 6,722 to 6,568 (-154) in Q1 FY27 (IP-Q1 slides 32; PR-Q1) against a 6,000 target for end-H1.

## 13. Computed (C), one script, KEC consolidated, closing balances, revenue basis
Command: `python -I src/kec_calc.py` (output pasted). Bases: receivables = current + non-current net; contract assets as printed; payables include acceptances; days = balance / revenue x 365. These are **Crestline arithmetic, not KEC's NWC definition**.
| | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|
| Receivables + contract assets | 12,106.58 | 13,513.33 | 16,309.54 | 18,633.22 |
| Same, days of revenue | 255.7 | 247.7 | 272.5 | 289.3 |
| Payables incl acceptances, days of revenue (not DPO: base is revenue, not cost) | 177.2 | 169.2 | 175.5 | 168.1 |
| (Receivables + contract assets + inventory - payables incl acceptances) | 4,855.41 | 5,495.63 | 6,946.52 | 9,341.97 |
| Same, days of revenue | 102.5 | 100.7 | 116.1 | 145.1 |
| Same, also less contract liabilities, days | 76.6 | 78.5 | 88.3 | 116.5 |
| Finance cost % revenue (printed numbers) | 3.12 | 3.29 | 3.04 | 2.82 |
FY26 vs FY25 (C): revenue +7.6%; trade receivables +23.5%; contract assets +9.8%; inventory +34.4%; retention receivables +34.1% (4,922.51 vs 3,669.63); retention = 76.4 days of revenue (61.3 in FY25) and 39.9% of gross contract-asset receivable. FY23 to FY26: revenue +36.0%, receivables + contract assets +53.9%. One day of FY26 revenue = Rs 64.4 Cr; 10 days = Rs 644 Cr. Reconciliation of our net debt: borrowings less cash and bank 4,591.30 vs company 4,601 (FY25 3,045.17 vs 3,051), close but not identical.
Ageing and concentration figures are in sections 6 and 9 (script output).

## 14. Not found (never print as KEC data)
Order intake FY22-FY24 and segment revenue FY22-FY24 (not collected, not asked to re-derive); contract-asset ageing; receivables split by client type (state utility, PGCIL, private, international); the receivable/retention split by country; total bank guarantee and LC book; unbilled vs certified split inside contract assets; the NWC definition; payment-term days (contracts: "payment terms are improving" only). Receivable terms in policy: not stated in the pages read.
