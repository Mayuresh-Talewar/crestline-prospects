# Ashoka Buildcon Limited - data (AB-1), written 8 Oct 2026

Company: Ashoka Buildcon Limited (NSE ASHOKA, BSE 533271), CIN L45200MH1993PLC071970.
BASIS RULE: EPC working capital is read on the STANDALONE statements (the EPC company). Consolidated includes the BOT/HAM road SPVs and is shown only in its own labelled table. No row mixes the two.
Units: Rs crore unless stated (statements are in Rs lakh; 100 lakh = 1 crore). Every figure was checked on a rendered page image; PDF page = printed page + 14 in the FY26 annual report (AR) financial section.
Grades: V = Verified (page cited), C = Computed (formula and script: `src/scripts/calc.py`, run `python -I calc.py`), W = Weak / secondary.

## 0. Documents read (all downloaded from ashokabuildcon.com or exchange/agency site; copies in `src/`)
| Doc | Local file | Date |
|---|---|---|
| Annual Report FY2025-26 (standalone + consolidated) | AR2526.pdf | Auditor's report 21 May 2026; MD&A signed 11 Aug 2026; AGM 25 Sep 2026. Exchange filing day NOT verified |
| Annual Report FY2024-25 | AR2425.pdf | signed 23 May 2025 |
| Annual Report FY2023-24 | ABL_AR_2324.pdf | signed 22 May 2024 |
| Annual Report FY2022-23 and FY2021-22 | AR2223.pdf, AR2122.pdf | 24 May 2023; 25 May 2022 |
| Results Q4 FY26 (audited, FY26) | RES_Q4FY26.pdf | Board 21 May 2026 |
| Results Q1 FY27 (unaudited, quarter to 30 Jun 2026) | RES_Q1FY27.pdf | Board 11 Aug 2026 |
| Results Q2 FY26 | RES_Q2FY26.pdf | Nov 2025 |
| Earnings-call transcripts Q4 FY25, Q1-Q4 FY26, Q1 FY27 | TR_*.pdf | 26 May 2025; 12 Aug 2025; 17 Nov 2025; 2 Feb 2026; 22 May 2026 (filed 27 May); 12 Aug 2026 (filed 18 Aug) |
| Investor presentations Q4 FY26, Q1 FY27, AGM 25 Sep 2026 | IP_Q4FY26.pdf, IP_Q1FY27.pdf, AGMP_2026.pdf | May 2026; Aug 2026; Sep 2026 |
| Rating documents | CRISIL.pdf (8 Dec 2025), rating/crisil_jun2026.html (12 Jun 2026), rating/crisil_may2025.html, CARE.pdf (9 Jan 2026), rating/care_jan2025.pdf, Acuite.pdf (24 Feb 2026), rating/icra*.pdf | see depth.md section 4 |
| Exchange announcements | ann/*.pdf, ann_titles.txt (405 titles up to 28 Sep 2026) | |

## 1. STANDALONE - income statement and cash flow (Rs crore)
Vintage per column: FY26 and FY25 = FY26 AR (audited, 21 May 2026); FY24 = FY25 AR comparative (23 May 2025); FY23 = FY24 AR comparative (22 May 2024, restated per its Note 66); FY22 = FY23 AR comparative (24 May 2023).

| Metric (STANDALONE) | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 (qtr, unaudited) | Source § page / grade |
|---|---|---|---|---|---|---|---|
| Revenue from operations | 4,644.6 | 6,372.3 | 7,726.7 | 7,061.4 | 5,811.7 | 1,287.9 (Q1 FY26: 1,310.6, -1.7%) | AR26 Standalone P&L PDF p185 (FY26, FY25); AR25 p179; AR24 p150; AR23 p134. Q1: Q1 FY27 results p8 / deck p9. V |
| YoY revenue | n/a | +37.2% | +21.3% | -8.6% | -17.7% | -1.7% | C |
| Total income | 4,790.3 | 6,477.8 | 7,841.3 | 7,187.8 | 5,952.2 | 1,320.4 | V (P&L pages above). Note: Rs 5,952.2 Cr is TOTAL INCOME, not revenue from operations |
| EBITDA (company method: profit before exceptional items + finance cost + depreciation, other income included) | 701.3 | 639.1 | 691.1 | 673.3 | 636.1 | 125.5 (9.5%) | C. FY25 673 and FY26 636 equal the figures management states on its calls (Q4 FY25 call; Q4 FY26 call p5). Q1: deck p9 |
| EBITDA % of total income | 14.6 | 9.9 | 8.8 | 9.4 | 10.7 | 9.5 | C; FY26 10.69% equals AR MD&A PDF p44 |
| Finance cost | 85.6 | 141.0 | 228.1 | 296.4 | 313.0 | 60.2 (Q1 FY26: 84.1) | V |
| Profit before exceptional items and tax | 546.0 | 423.9 | 358.4 | 278.7 | 225.3 | 43.0 | V |
| Exceptional items, gain / (loss) | (769.6) | +349.2 | +216.6 | nil | +164.7 | nil | V; FY26 = gain on sale of BOT/HAM stakes 112.1 + write-back of investor obligation 95.3 - impairment 37.5 - gratuity 5.2 (AR26 MD&A p44) |
| PAT | -308.6 | 671.3 | 442.8 | 197.2 | 320.4 | 31.5 | V. FY26 +62.5% YoY (C); includes exceptional gain |
| Operating profit before WC changes | 546.3 | 525.4 | 597.0 | 617.7 | 603.9 | n/a | AR cash-flow statements. AR26 p186 (FY26, FY25); AR25 p180; AR24 p151; AR23 p135. V |
| Cash generated from operations (before tax) | 312.5 | 211.7 | 562.8 | -495.7 | -182.9 | n/a | same pages. V |
| NET CASH FROM OPERATING ACTIVITIES | 161.1 | 72.8 | 410.1 | -591.3 | -291.6 | n/a | same pages. V. FY25 + FY26 = -882.9 (C) |

Q1 FY27 standalone interest cost paid to subsidiaries Rs 17 Cr in the quarter (CFO, Q1 FY27 call p10). Standalone FY26 interest cost Rs 313 Cr; CFO guide FY27 "Rs 225-240 Cr", FY28 "Rs 200-210 Cr" (call p19).

## 2. STANDALONE - balance sheet, 31 March (Rs crore)
Vintage as in section 1. Pages: AR26 PDF p183-184 (FY26, FY25); AR25 p177-178 (FY24); AR24 p148-149 (FY23, restated); AR23 p132-133 (FY22). Grade V unless C.

| Item (STANDALONE) | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Trade receivables, current | 1,048.3 | 1,085.8 | 1,098.5 | 1,272.0 | 1,656.4 |
| Trade receivables, non-current | 64.6 | 157.8 | 329.6 | 496.3 | 312.2 |
| Contract assets (unbilled work certified or not yet billed) | 813.4 | 1,351.1 | 1,699.1 | 2,268.0 | 2,646.1 |
| Inventories | 187.7 | 298.4 | 432.7 | 348.7 | 247.2 |
| Trade payables (current + non-current) | 912.2 | 1,140.7 | 1,404.2 | 1,174.0 | 1,176.7 |
| of which MSME (current) | 59.4 | 39.6 | 96.9 | 114.2 | 161.0 |
| Acceptances / factoring (supply-chain finance), shown separately from FY25 AR; FY24 restated | n/a | n/a | 276.9 | 294.0 | 275.9 |
| Contract liabilities = customer advances + unearned revenue (current + non-current) | 609.8 | 1,107.6 | 1,258.4 | 1,310.7 | 1,017.9 |
| Borrowings, current + non-current, ALL-IN (includes loans from subsidiaries) | 559.3 | 1,038.5 | 1,442.7 | 2,058.7 | 2,112.1 |
| Cash + bank balances | 144.0 | 186.5 | 510.6 | 240.5 | 583.0 |
| Total equity | 2,698.7 | 3,369.7 | 3,812.5 | 4,009.4 | 4,331.7 |

Restatements seen: FY24 trade payables non-MSME were Rs 1,477.6 Cr in the FY24 AR and Rs 1,200.7 Cr in the FY25 AR because Rs 276.9 Cr was moved to a new "Acceptances / Factoring" line (AR25 p178 vs AR24 p149). FY23 trade receivables, other assets also re-presented between AR23 and AR24 (AR24 "Refer Note 66"). Figures above use the LATEST vintage for each year.

### 2a. Working-capital days, STANDALONE, year-end balances (C, `calc.py`; each ratio divides by ONE named base and is never paired with another)
| Ratio | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Trade receivables (cur+non-cur) days on revenue from operations | 87 | 71 | 67 | 91 | 124 |
| Contract-asset days on revenue from operations | 64 | 77 | 80 | 117 | 166 |
| Trade receivables + contract assets, days on revenue | 151 | 149 | 148 | 209 | 290 |
| Trade payable days on (materials + construction expenses) | 88 | 75 | 76 | 71 | 88 |
| Trade payables + acceptances, days on same base | 88 | 75 | 91 | 89 | 109 |
| Net operating WC = receivables + contract assets + inventory - payables - acceptances - contract liabilities (Rs Cr) | 592.0 | 644.9 | 620.5 | 1,606.3 | 2,391.3 |
| ...same, days of revenue | 47 | 37 | 29 | 83 | 150 |

Company's own ratio, AR26 Note 60 (PDF p253) and MD&A (p44): "Trade Receivables turnover ratio" = revenue from operations / average (trade receivables + contract assets) = 1.28 in FY26 against 1.85 in FY25 (-30.5%, "Increase in Trade receviables and contract assets resulting in overall decline"). 365/1.28 = 285 days; 365/1.85 = 197 days (C). Inventory turnover 59.71 days against 49.47. Current ratio 2.15 against 1.82. Debt-equity 0.49 against 0.51. Interest service coverage 2.03 against 2.27. DSCR 0.84 against 0.72.
Excluded from net operating WC: other current assets (Rs 547.2 Cr at FY26; includes vendor advances), loans to subsidiaries, assets held for sale.
Management's own phrase for the level: "we should go back to the old norms of 110 to 120 days" (CFO Paresh Mehta, Q4 FY26 call, 22 May 2026, transcript p6). The metric is not defined on the call; the analyst put "110 days odd... almost doubled" to him. Do not equate it with any row above.

### 2b. Receivable ageing, STANDALONE (AR26 Note 14 ageing, PDF p212; from DUE date; C shares)
| Rs Cr | 31 Mar 2026 | share | 31 Mar 2025 | share |
|---|---|---|---|---|
| Trade receivables, gross, not due | 593.9 | 27.8% | 518.9 | 27.1% |
| less than 6 months past due | 843.3 | 39.4% | 753.6 | 39.4% |
| 6 months to 1 year | 212.6 | 9.9% | 293.5 | 15.3% |
| 1-2 years | 346.0 | 16.2% | 269.9 | 14.1% |
| 2-3 years | 89.7 | 4.2% | 39.9 | 2.1% |
| more than 3 years | 53.9 | 2.5% | 36.6 | 1.9% |
| Total gross (ageing table) | 2,139.4 | | 1,912.4 | |
| Past due more than 6 months | 702.3 | 32.8% | 639.9 | 33.5% |
| Contract assets: not due | 1,995.7 (73.8% of 2,703.6 gross) | | 2,214.5 | |
| Contract assets with significant increase in credit risk (all 6 months to 2 years) | 366.8 (6m-1y 327.0; 1-2y 39.8); plus "considered good" aged 1-2 years 341.1 | | 69.1 (6m-1y 59.2; 1-2y 9.8) | |
| Expected-credit-loss allowance on trade receivables + contract assets (ageing table) | 228.4 | | 159.6 | |

Note 12 contract assets: Rs 2,646.1 Cr net; allowance Rs 57.6 Cr (FY25: 15.6). Policy words: "Contract assets are initially recognized for revenue earned from construction projects contracts, as receipt of consideration is conditional on successful completion of project milestones/certification" (AR26 PDF p211). Trade receivables "are non interest bearing and are generally on terms of 30 to 90 days... in case of long term construction contracts, payment is generally due upon completion of milestone" (PDF p213). Customer terms: "mobilisation advance, monthly progress payments with a credit period ranging from 45 to 90 days and certain retention money to be released at the end of the project. In some cases retentions are substituted with bank/corporate guarantees" (PDF p234).
Top-10 customers = Rs 1,392.5 Cr = 70.74% of gross trade receivables (FY25 71.81%) (PDF p234). Dues from government-promoted agencies Rs 3,534.5 Cr = 72.1% of the Rs 4,905.4 Cr credit exposure incl. loans (C, PDF p234).
RELATED-PARTY RECEIVABLES: Rs 753.3 Cr trade receivable from group companies in the concentration table (PDF p234; 38.3% of Rs 1,968.6 Cr net trade receivables, C) but only Rs 268.8 Cr "dues from subsidiary and other group companies" in the Note 14 table (PDF p213). The two are not reconciled in the AR. Do not print either as "NHAI/government receivables".
NHAI share of revenue or receivables: NOT FOUND (standalone segment note is omitted under Ind AS 108 para 4, AR26 Note 52 PDF p249). Order-book client mix, 30 Jun 2026 (Q1 FY27 deck p13, image checked): Central Govt 12.2%, State Govt 55.8%, HAM 10.0%, Private 7.0%, Overseas 15.1%.
RETENTION money: no standalone amount is disclosed (NOT FOUND). Agencies: T&D "20% payment is typically received post operationalising of projects and 10% is retained as retention money until the expiry of the defect liability period" (CARE 9 Jan 2026, p3). Defect-liability provisions Rs 30.6 Cr current + Rs 50.9 Cr non-current (AR26 Notes 25, 32, PDF p221, p224).

### 2c. Payables, MSME and supply-chain finance, STANDALONE (AR26 PDF p223-224, p253)
- Payables ageing 31 Mar 2026 (Rs Cr, from due date): not due 558.9 (MSME 161.0 + others 397.9), under 1 year 512.4, 1-2 years 32.8, 2-3 years 28.6, over 3 years 44.0; total 1,176.7 (note total 1,258.3 includes unearned revenue 81.7). FY25 trade-payables ageing total 1,174.0 (not due 715.6; under 1 year 361.8; 1-2 y 50.6; 2-3 y 19.4; over 3 y 26.6). V (table), shares C.
- MSME (Note 59, PDF p253): principal unpaid Rs 161.0 Cr "within due date"; interest due nil. FY25 Rs 114.2 Cr.
- Supply-chain finance (Note 28): "enables the Company to avail an extended credit period, generally up to 90 days and subject to a maximum period of 180 days from the date of acceptance of the invoice. The Company bears the financing cost". Rs 275.9 Cr outstanding (FY25 294.0). Weighted effective interest: banks 9.00% (FY25 8.50%), others 5.61% (6.93%). Contract credit period for suppliers outside the arrangement 0-45 days. V (PDF p223).

## 3. STANDALONE - debt and net debt
Company definition: third-party borrowings only; loans from subsidiaries excluded (CFO, Q1 FY27 call p10-11).
| Date | Standalone debt | of which working-capital loan | NCD | equipment | Cash + bank | Source |
|---|---|---|---|---|---|---|
| 31 Mar 2025 | 1,405 | 1,004 | 300 | 101 | 240.5 (BS) | Q4 FY25 call p5 / AR25 |
| 30 Jun 2025 | 1,652 | 1,257 | 300 | 95 | 215 | Q1 FY26 call p4; Q1 FY27 deck p7 (image checked) |
| 30 Sep 2025 | 1,362 | 978 | 300 | 83 | 1,151 | Q2 FY26 call p5; deck p7 |
| 31 Dec 2025 | 1,046 (deck p7 shows 1,042) | 667 | 300 | 79 | 376 | Q3 FY26 call p4; deck p7 |
| 31 Mar 2026 | 1,127 | 757 | 300 | 70 | 584 | Q4 FY26 call p5; deck |
| 30 Jun 2026 | 1,173 | 1,110 | nil | 63 | 261 | Q1 FY27 deck p7 |
Net debt (C): 30 Sep 2025 = 1,362 - 1,151 = 211 (cash peak right after the HAM proceeds; Q1 FY27 deck p7); 31 Mar 2026 = 1,127 - 584 = 543 (CFO says "approximately INR600 crores", Q4 FY26 call p9); 30 Jun 2026 = 1,173 - 261 = 912.
AR26 BS cross-check (C): non-current bank term loans 80.5 + current borrowings 1,046.5 = 1,127.0 = the company's Mar-26 standalone debt. Loans from subsidiaries (non-current) are a further Rs 985.1 Cr (MCLR + spread + 1%; "Bullet repayment after March 31, 2027") and sit inside the all-in 2,112.1 in section 2. Current borrowings 31 Mar 2026 = WC demand loan 681.5 + NCD 300.0 (8.75%, due 9-23 Apr 2026) + current maturities of term loans 65.0 (AR26 Note 27 PDF p222).
CONSOLIDATED (labelled, for context only): consolidated debt Rs 6,671 Cr (31 Mar 2025, Q4 FY25 call), Rs 6,826 Cr (30 Jun 2025), Rs 4,910 Cr (30 Sep 2025), Rs 2,722 Cr (31 Dec 2025), Rs 2,778 Cr (31 Mar 2026), Rs 2,773 Cr (30 Jun 2026) (deck p7). CRISIL's adjusted number: Rs 2,847 Cr incl. interest-bearing acceptances (12 Jun 2026).
Interest-rate ranges disclosed (STANDALONE, AR26 Notes 22, 27, 28): equipment/vehicle loans 6.50% to 8.9%; HDFC Bank term loan Rs 50 Cr 7.85%; financial-institution loan 1-year MCLR + spread; WC demand loan/cash credit "3 Month MCLR + Spread and 1 Year MCLR + Spread" (no numeric range printed); NCD Rs 300 Cr 8.75%; subsidiary loans 3-month MCLR + spread + 1%; SCF 9.00% (banks) and 5.61% (others). CFO, Q4 FY25 call p15: "9.5 is the cost of borrowing at the standard level for the working capital debt" (W as a forward-looking rate; V as a quote).
Customer advances (standalone): Rs 928.2 Cr at 31 Mar 2026 (FY25 1,278.9) = advance from customers 469.97 current + 458.22 non-current (PDF p218, p221). The AR does not split mobilisation advance. MD&A: "increase in interest bearing mobilisation advances taken from client for execution of projects" raised finance cost (PDF p44). CRISIL: interest-bearing mobilisation advances "~Rs 979 crore as on June 30, 2025" treated as debt (Dec 2025 rationale, p1; analytical basis is CRISIL's, not the company's).

## 4. Order book and mix (company, Rs crore)
| Date | Total | Road EPC | Road HAM | Railways | Power T&D | Building | Source |
|---|---|---|---|---|---|---|---|
| 30 Sep 2025 | 14,888 | 6,816 | 1,834 | 1,154 | ~31% | | Q2 FY26 call p4-5 (roads + rail 9,804 = 65.8%) |
| 31 Mar 2026 | 15,312 | 7,084 | 1,619 | 1,420 | 4,627 (30%) | 562 (3.7%) | Q4 FY26 call p4 (excludes Rs 681 Cr Angola LoA after year-end) |
| 30 Jun 2026 | 15,251 | 6,783 | 1,519 | 1,346 | 5,066 (33.2%) | 536 (3.5%) | Q1 FY27 call p5; deck p13-14 (excludes Rs 451 Cr received after 30 Jun) |
Order book at 31 Mar 2026 EXCLUDES the Diriyah (Saudi) hotel package and the Mumbai ITMS orders, which are executed in subsidiaries (CFO, Q4 FY26 call p5) - these are not standalone orders. Overseas = 15.1% of the 30 Jun 2026 book; Q1 FY27 revenue from outside India Rs 1,451 Cr "80% ... from Guyana" (MD; transcript p17 - a consolidated-scale figure that the call does not label; do not use).

## 5. HAM equity commitments and asset monetisation (dates, amounts, vintage)
- Funding commitment towards group companies (STANDALONE): Rs 179.4 Cr at 31 Mar 2026 (Rs 267.5 Cr at 31 Mar 2025) (AR26 Note 55 PDF p251). CFO: Rs 179 Cr in FY27 on existing HAM projects incl. Bowaichandi, Rs 72 Cr each in FY28 and FY29; "investment up to June, the six HAM projects is to the tune of almost INR638 crores" (Q1 FY27 call p8). Earlier: Rs 175 / 75 / 75 Cr (Q4 FY26 call p9-10).
- Done in FY26: five HAM SPVs sold for Rs 1,146 Cr (Sep 2025; Rs 1,050 Cr received in Q2, Rs 96 Cr outstanding at 17 Nov 2025, Q2 FY26 call p16); five BOT SPVs sold by Ashoka Concessions Ltd to Maple Infrastructure Trust for Rs 1,814.42 Cr effective 26 Nov 2025 (announcement 26 Nov 2025; CARE and ACUITE print 1,847 / 1,847, which is not the company's number); SBI Macquarie's 34% in ACL bought for ~Rs 1,549 Cr (Acuite 24 Feb 2026 p2; CRISIL "~Rs 1,550 crore"). Total proceeds Rs 2,817 Cr (CARE 9 Jan 2026) / Rs 2,817 Cr (Acuite). Standalone net gain recorded Rs 112.2 Cr as exceptional item (AR26 KAM PDF p174, "net gain of INR 11,220.57 lakhs").
- Pending (as stated 12 Aug 2026): six HAM SPVs, price ~Rs 1,100-1,150 Cr; "4 assets ... approximately INR700 crores" expected "by September end or first part of October"; other 2 "by December and may be Q4" (CFO, Q1 FY27 call p8-9). Company's 30 Jun 2026 filing extends indicative completion to 15 Sep 2026 (TS-1, TS-2, TS-3) and 30 Sep 2026 (BS SPV). No completion filing appears in the company's 405-item announcement list up to 28 Sep 2026 (`ann_titles.txt`). Holdbacks on earlier deals: ~Rs 130 Cr "between June and July" 2026 plus ~Rs 550 Cr deferred consideration tied to toll extension "in the next 1 or 2 years" (CFO, Q4 FY26 call p10); on 12 Aug 2026 "almost received around 30% of it" of ~Rs 50 Cr BOT + Rs 90 Cr HAM pending (call p12).
- Next candidates: Chennai ORR "by the year-end", Jaora-Nayagaon "by March end or next year first half" (CFO, Q1 FY27 call p13). Cost of ownership: Jaora ~Rs 418 Cr, Chennai ORR ~Rs 300 Cr (call p18).
- InvIT: buyers were Maple Infrastructure Trust (BOT) and Infrastructure Yield Plus II/IIA via EAAA (HAM) (company announcements 26 Nov 2025 and 30 Jun 2026).

## 6. CONSOLIDATED (labelled; includes BOT/HAM SPVs; NOT used for any EPC working-capital ratio)
| Rs crore | FY22 | FY23 | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|---|---|
| Revenue from operations | 5,999.0 | 8,100.5 | 9,798.5 | 10,036.6 | 7,519.9 | consolidated P&L: AR26 PDF p273 (FY26, FY25); AR25 p266; AR24 p233; AR23 p211. V |
| Finance cost | 1,003.8 | 1,103.8 | 1,310.4 | 1,245.3 | 912.0 | same; FY22 per AR23 MD&A. V |
| PAT | 771.4 | 293.9 | 521.2 | 1,733.6 | 2,575.8 | same (FY23 restated, AR24). V |
FY26 PAT +48.6% (C) includes exceptional gain Rs 2,143.67 Cr on sale of BOT/HAM stakes (AR26 PDF p45, p273). Quarterly consolidated: Q1 FY26 total income 1,937 / EBITDA 649 (33.5%) / PAT 227; Q2 FY26 1,908 / 642 (33.6%) / 91; Q4 FY26 1,992 / 302 (15.1%) / 147; Q1 FY27 total revenue 1,534 / EBITDA 292 (19.0%) / PAT 127 (deck p10; "monetization of BOT and HAM", CFO). FY26 full-year consolidated EBITDA: not read.

## 7. Auditor's report wording (S R B C & CO LLP; partner Pramod Kumar Bapna for FY25 and FY26)
STANDALONE FY26 (PDF p173-177, image checked p175):
- OPINION: unmodified ("give a true and fair view").
- EMPHASIS OF MATTER: "We draw attention to Note 57 ... regarding an ongoing regulatory matter which is sub-judice before Ld. Court of Special Judge, CBI, Bihar, involving inter-alia the Company, pending final outcome of which no adjustments have been made... Our opinion is not modified in respect of this matter." Note 57 (PDF p252): FIR alleging bribery of certain NHAI officials by Company personnel on a Bihar project; final chargesheet dated 15 Feb 2024 received 28 Feb 2025; project complete and "completion certificate from NHAI"; writ petition 11 May 2026 in Patna High Court. Same emphasis in FY25 (Note 57) and FY24 (Note 56, "ongoing investigation by a law enforcement agency").
- KEY AUDIT MATTERS (2): (1) revenue recognition for construction contracts, cost-to-cost percentage of completion (Ind AS 115); (2) assessment of accounting for sale of investments classified as held for sale (five HAM + five BOT subsidiaries transferred; 6 still held for sale).
- Other legal/regulatory paragraph 2(b): "we are unable to comment whether daily backups were taken due to absence of logs maintained by the Company in respect of Tally ERP System as stated in Note 67(10)" and Rule 11(g): audit trail "not enabled for certain changes made using privileged/administrative access rights" to the SAP HANA application and database (PDF p175-176). This is a reporting-on-books remark, not a modification of the opinion; the report itself calls it "the modification relating to the maintenance of accounts" in para (f).
- No going-concern uncertainty reported. CONSOLIDATED FY26 (PDF p261): same Note 57 emphasis; KAMs include revenue recognition and held-for-sale.

## 8. Contingent and other items worth knowing (STANDALONE, AR26 Note 55-56, PDF p251-252)
Contingent liabilities Rs 229.1 Cr (tax: income tax 77.8, sales tax 95.6, GST 49.9; claims 1.3; guarantees 4.5; FY25 354.98). Commitments Rs 189.2 Cr (capital 9.8; funding to group companies 179.4). Corporate guarantees for group companies nil (FY25 Rs 711.1 Cr). Karnataka DMG royalty demand ~Rs 382.8 Cr assessed "remote" (Note 3, PDF p252). GST search at Nashik office 11 Jun 2025 (announcement 12 Jun 2025).

## 9. Leadership NOW (8 Oct 2026)
| Role | Name | Evidence |
|---|---|---|
| Chairman | Ashok (Motilal) Katariya | AR26 balance-sheet signature p184; company board page |
| Managing Director | Satish (Dhondulal) Parakh | same; Q1 FY27 call p2 |
| Chief Financial Officer | Paresh (C.) Mehta | same; company Investor Contact page lists "CFO Mr. Paresh C. Mehta ... Email: paresh.mehta@ashokabuildcon.com" (fetched 8 Oct 2026) |
| Company Secretary and Compliance Officer | Manoj A. Kulkarni (FCS 7377) | AR26 p184; every exchange letter; mailbox manoj.kulkarni@ashokabuildcon.com in AR26 |
| Joint Managing Directors | Sanjay P. Londhe (to 31 Mar 2028), Ashish A. Kataria (to 31 Mar 2027) | re-designated from Whole-time Directors w.e.f. 11 Aug 2026 (Board outcome 11 Aug 2026); approved at the 33rd AGM 25 Sep 2026, 99.998% and 99.997% in favour (voting results) |
Registered office as printed on exchange letterhead: "S. No. 861, Ashoka House, Ashoka Marg, Vadala, Nasik - 422 011, Maharashtra, India", Tel +91 253 6633705. The results header prints "Nashik 422011" and the company's contact page "Ashoka Nagar, Nashik - 422 011". Both spellings appear; use "Nashik". Investor-relations advisers: the website lists Stellar IR Advisors; the calls name SGA (website stale).
Auditor: S R B C & CO LLP (ICAI FRN 324982E/E300003).

## 10. ERP (primary wording)
- "At Ashoka Buildcon Limited, Internal Controls are a key pillar ... It operates through ERP system - SAP" (AR26 PDF p42, MD&A).
- "The Company's project sites are integrated through the SAP ERP system" (PDF p56).
- "we have implemented the SAP S4 - HANA platform. This has enabled the organisation with a single source for financial accounting, costing, and asset accounting through Integrated System under SAP S4/ HANA architecture" (PDF p62).
- "The Company is currently operating on two software - SAP HANA and Tally ERP Systems" (Note 67(10), PDF p260 standalone; PDF p367 group).
So: SAP S/4HANA for finance, costing and assets, plus Tally for part of the books. Not stated: which modules run project billing or retention, or whether SPVs are on SAP. Crestline would sit above these; no adapter exists today (pilot "will feed, built during the pilot").

## 11. Gaps (honest)
CRISIL, CARE and Acuite are the live agencies (ICRA rates a Rs 100 Cr CP only; India Ratings: none found). Standalone retention balance, NHAI share of receivables, FY22-FY24 receivable ageing and FY22-FY23 company-defined ratios not extracted (FY22-FY23 AR ratio tables do not state whether standalone). FY26 consolidated EBITDA not read. Q1 FY27 standalone balance sheet not published (quarterly results carry P&L only). Peers: none included (see depth.md).
