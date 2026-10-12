# Transrail Lighting Limited: data (TR-S1, research, 2026-10-09)

**VERDICT: FULL.** Listed, audited FY26 annual report read in full, every working-capital line published with ageing, ERP stated in the company's own filing. No blocker. No gtm research file exists for this company (README, checked 2026-10-09), so the GTM check was skipped.

Sensitive items (rating actions, tax search, tax order, related parties, management change) are NOT printed here by default; they are in sensitive-garvis.md for Garvis to rule on. Rating-rationale numbers that conflict with management's are summarised there too.

## Entity, listing, basis
- Legal name: Transrail Lighting Limited. CIN L31506MH2008PLC179012, incorporated 2008. Annual Report FY26, PDF p.1 (cover letter, 2 Sep 2026) and p.164 (note 1).
- Listing: NSE symbol TRANSRAILL, BSE scrip code 544317 (AR PDF p.1; Q1 FY27 transcript p.1, 12 Aug 2026). Year of listing 2024 (AR PDF p.7 timeline). Exact listing day NOT FOUND in the documents read.
- Registered and corporate office: 501 A, B, C, E, Fortune 2000, Block-G, Bandra Kurla Complex, Bandra East, Mumbai 400051, Maharashtra (AR PDF p.1 and p.37, "no change in the registered office"). Verified.
- Promoter holding company: Ajanma Holdings Private Limited, 69.91% (AR PDF p.188 shareholder table, as at 31 Mar 2026).
- Auditor of FY26 accounts: Nayan Parikh & Co. Accounts approved by the board on 26 May 2026 (AR PDF p.164, p.159).
- Basis rule used below: STANDALONE is the legal entity; CONSOLIDATED adds subsidiaries (differences are small, under 1.5% on revenue, 2% on PAT). Every figure says which. Rs crore unless stated.

## Documents read (all saved in src/d/, treated as untrusted data)
| Short name | Document | Filed | Pages read |
|---|---|---|---|
| AR FY26 | Annual Report 2025-26 (NSE archive), 344 PDF pages | NSE, 2 Sep 2026 | 1, 3, 5, 7, 9, 15, 17 to 19, 25, 32 to 34, 37 to 39, 84, 145, 159 to 165, 180 to 202, 212, 218, 223, 247 to 251 |
| Q1 deck | Q1 FY27 investor presentation | NSE, 7 Aug 2026 (a first copy was filed 6 Aug 2026) | 7, 8, 12 to 16, 18, 19 |
| Q1 call | Transcript of Q1 FY27 earnings call held 7 Aug 2026 | NSE, 12 Aug 2026 | all 17 |
| Q4 call | Transcript of Q4 FY26 earnings call held 27 May 2026 | NSE, 2 Jun 2026 | all 18 (one document beyond the narrow list, taken as the promise baseline for depth.md) |
| Rating | One rating rationale, India Ratings and Research, bank loan facilities | NSE, 4 Aug 2026 | all 8 |
| Filings index | NSE corporate announcements list for TRANSRAILL (203 items) | read 2026-10-09 | used for the live-deal check and to find the documents above |
| Exchange letters | CFO appointment (7 Mar 2025), tax order notice (21 May 2026), order press releases (30 Sep and 6 Oct 2026), board outcomes (22 and 29 Jun 2026) | as dated | first page or two each |

Image-checked (rendered page, read by eye): AR PDF p.33; Q1 deck PDF p.15, 16, 19; Q1 call PDF p.12, 16; Q4 call PDF p.6, 17, 18. All other figures are text-layer reads of tables whose totals I re-added by script (src/tr-calc.py, output src/tr-calc-out.txt; ageing sums reconcile to the stated totals).

## Dossier check (headline claims only)
Grades: Verified (document, page, date, basis) / Computed (script) / Wrong / Stale / NOT FOUND.
| Dossier claim | What the filings say | Grade |
|---|---|---|
| Legal name Transrail Lighting Limited; NSE and BSE listed | Confirmed, symbol TRANSRAILL, BSE 544317. AR PDF p.1, 2 Sep 2026 | Verified |
| Listed Dec 2024 | AR p.7 says 2024 only; day not in documents read | Weak (year Verified, month NOT FOUND) |
| Registered office Fortune 2000, BKC | Matches AR PDF p.37 | Verified |
| Nagpur office, 46 Lambent-IT Park, Besa | searched AR for "Lambent", "Besa": zero hits | NOT FOUND |
| Revenue FY26 Rs 6,879 Cr, FY25 Rs 5,307.75 Cr, "consolidated" | Rs 6,879 Cr is the STANDALONE figure (6,778.47 revenue from operations + 100.16 other operating revenue = 6,878.63; AR PDF p.160). Consolidated FY26 is 6,880.11 (6,779.95 + 100.16; PDF p.248; the deck prints 6,880). The FY25 figure 5,307.75 is the CONSOLIDATED one (standalone 5,307.63). The dossier mixes bases but the gap is under Rs 2 Cr. Growth +29.6% standalone, +29.6% consolidated (script). | Verified with basis corrected |
| PAT FY26 Rs 412 Cr, FY25 Rs 336 Cr, "consolidated" | These are STANDALONE: 411.63 and 336.39 (AR PDF p.160). Consolidated is 403.59 and 328.68 (PDF p.248; deck prints 404). Standalone growth 22.4%, consolidated 22.8% (script). | Verified, basis Wrong in dossier |
| Order book Rs 14,551 Cr FY25 end (+44%) | Q1 deck PDF p.8 closing order book FY25 14,551, FY24 10,100: growth 44.07% (script) | Verified |
| Order book FY26 "high (verify)" | Unexecuted order book Rs 16,313 Cr at 31 Mar 2026 (AR PDF p.32 and Q1 deck p.8); Rs 16,361 Cr "unexecuted order book and L1" (AR PDF p.3). Rs 16,035 Cr including L1 of Rs 400 Cr at 30 Jun 2026 (Q1 deck p.16) | Verified |
| About 49% India, 51% international | Revenue FY26 standalone: India 3,356.12, outside India 3,422.35 = 50.5% outside India (AR PDF p.201, script). But the ORDER BOOK is 61% domestic, 39% international (AR PDF p.32) and 59 / 41 at 30 Jun 2026 (deck p.16). Revenue split and order book split differ and must never share a chart. | Verified, two splits |
| Debtor days 91 then 92 | Not stated as "debtor days". Computed from the company's own ratio (revenue over trade receivables, AR p.33): 90.6 and 92.2 days (script). The "91" in management's mouth is WORKING-CAPITAL days for FY25. | Computed (label corrected) |
| WC days 48 then 41 | Management states working capital days 91 (FY25) and 81 (FY26), 85 at Q1 FY27 (Q4 call PDF p.6; Q1 deck PDF p.19). No document shows 48 or 41. | Wrong |
| Borrowings Rs 661 Cr FY25, Rs 678 Cr FY26 | Balance-sheet borrowings are 643.46 and 659.39 (standalone, AR PDF p.159); adding lease liabilities gives 660.59 and 678.12 (script). The dossier figures include leases. | Computed, definition corrected |
| FY25 order inflows Rs 9,680 Cr (Q4 alone Rs 4,965 Cr), Q4 FY25 revenue 1,946 and PAT 126.57 | FY25 annual report and FY25 call not in this ticket's scope | NOT FOUND (FY25 documents not read) |
| FY26 order inflow | Rs 8,520 Cr, 63% domestic and 37% international (AR PDF p.5 and p.9, text read; deck p.16 prints Q1 FY27 inflow only). Audited note: remaining performance obligations Rs 16,313 Cr (prior year 14,551), AR PDF p.202, standalone note | Verified (text) |
| PAT in the Executive Chairman letter | The letter prints "operating PAT stood at Rs 421 crore, growing at 28%" (AR PDF p.15), a third PAT figure beside 411.63 standalone and 403.59 consolidated. The AR does not define "operating PAT" on that page. | Verified as printed, definition NOT FOUND |
| FY27 YTD new orders Rs 1,609 Cr plus Rs 694 Cr L1 | Matches the 30 Sep 2026 release (574 Cr order wins, extra L1 694). Stale: the 6 Oct 2026 release says intake for the year is Rs 2,021 Cr with L1 of Rs 409 Cr (script: 2,021 less 412 = 1,609). | Stale |
| About 27% revenue growth guidance | Management says 20% to 22% for FY27 (Q4 call PDF p.5, p.17) and "20% year-on-year is the guidance we maintain" (Q1 call). Rating agency expects at least 20%. | Wrong |
| CFO Deepak Khandelwal, since Mar 2025, succeeded Ajit Pratap Singh | Board approved on 7 Mar 2025, effective 8 Mar 2025 (NSE filing 7 Mar 2025, page 1). AR p.39 KMP table: "Chief Financial Officer". | Verified |
| MD and CEO Randeep Narang, DIN 07269818 | AR PDF p.39 "Managing Director & Chief Executive Officer"; DIN on balance sheet signature p.159 | Verified |
| Chairman Digambar Chunilal Bagde, "Whole-Time Director", DIN 00122564 | AR PDF p.39: "Executive Chairman"; DIN on p.159. Name is printed "D C Bagde" and "Digambar C. Bagde" | Verified (title corrected) |
| ERP "not confirmed, likely SAP" | The company states it "rolled out SAP RISE, an upgrade from SAP HANA, across its operations during 9MFY26" (AR PDF p.33, image-checked, printed p.60 to 61) and that internal controls are "integrated with SAP and other ERP systems" (AR PDF p.34). Not mentioned in the decks or calls. | Verified (SAP RISE, from the annual report only) |
| Rating actions "CRISIL/Fitch Aug to Sep 2026" | See sensitive-garvis.md | Wrong as worded |

## Figures for the problems step (standalone unless stated; Rs crore; FY26 at 31 Mar 2026, FY25 in brackets)
| Item | Figure | Source (AR FY26, filed 2 Sep 2026) | Grade |
|---|---|---|---|
| Revenue from operations | 6,778.47 (5,212.11) STANDALONE; 6,779.95 (5,212.24) CONSOLIDATED | PDF p.160 (printed 189); p.248 (printed 277) | Verified |
| Other operating revenue | 100.16 (95.52) standalone | PDF p.160 | Verified |
| EBITDA | 820 consolidated, margin 11.9% (Q1 deck PDF p.15, printed p.14, image-checked, 7 Aug 2026). Company ratio "operating profit margin" 11.92% on standalone gives about 808 (script). Standalone EBITDA is not printed. | deck, AR PDF p.33 | Verified (consolidated); standalone Computed |
| PAT | 411.63 (336.39) standalone; 403.59 (328.68) consolidated | PDF p.160; p.248 | Verified |
| Finance cost | 218.67 (197.74) in both statements; 3.23% of standalone revenue from operations (script) | PDF p.160, p.248 | Verified |
| Trade receivables, net | 1,739.48 (1,317.14) standalone; 1,737.68 (1,317.14) consolidated; up 32.1% against revenue up 29.6% (script) | PDF p.159, p.247 | Verified |
| Receivable ageing, standalone, from bill date | Gross 1,784.68 incl disputed 7.48 and credit impaired. Under 6 months 1,565.65 (87.7%); 6 to 12 months 91.54; over 1 year 127.49 (7.1%, script). FY25: under 6 months 71.7% of total. Credit impaired provision 24.91; expected credit loss allowance 20.29. | PDF p.180 to 181 (printed 209 to 210) | Verified |
| Contract assets (unbilled revenue plus retention) | 2,515.24 (2,521.97) in both statements; 36.6% of standalone turnover (script). The note says it "represents unbilled revenue and retention due to contractual conditions". | PDF p.185 (printed 214) | Verified |
| Retention, separately | Not shown as its own line. The management says contract assets include "dependency retention, TOC retention, and unbilled revenue" (Q1 call PDF p.12). | | NOT FOUND (searched AR text for "retention": 14 hits, none with an amount) |
| Customer advances | Contract liabilities 1,252.54 (1,109.23): advance from customer 1,204.82, adjustable receipts 47.72 | PDF p.193 | Verified |
| Vendor advances | Advance to suppliers 299.23 current (274.38 others plus 24.85 related parties); 90.77 of the 274.38 is backed by bank guarantees | PDF p.186 (printed 215) | Verified |
| Inventories | 762.48 (537.67) standalone, up 41.8% (script); 763.04 consolidated | PDF p.159, p.247 | Verified |
| Trade payables | 2,788.51 (2,344.90): micro and small 177.41, others 2,611.10. Of the others, 367.98 unbilled and 1,498.04 not yet due. 86.5% of the micro and small balance sits past due (script, ageing from due date). | PDF p.159; p.200 (printed 229) | Verified |
| Supplier finance (bank pays vendor, company pays later) | Trade payables inside the arrangement 1,349.66 = 48.4% of trade payables (script), plus borrowings 83.24. Payment 90 to 180 days from invoice against 30 to 45 days for comparable payables outside it. | PDF p.212 (printed 241) note 45 | Verified |
| Borrowings and disclosed rates | Total 659.39 (643.46): non-current 88.53, current 570.86. Cash credit and WCDL "average interest rate at 10.31% p.a." (WCDL 252.49 at year end); Jio Credit short-term loan 77.24 fixed 9.50% p.a.; Bajaj Finance short-term loan 10.00 at "BFL FRR + spread of 0.90%"; bill discounting 99.74 and purchase financing facility 83.24 (rate NOT FOUND); ECLGS loans 7.95% to 9.25%; EXIM Bank 29.30 non-current plus 15.77 current at 1-year MCLR + 75 bps; Bank of Baroda 1-year MCLR plus 0.25% and 0.40% spreads; Bajaj Finance rupee term loan 31.11 plus 8.89 at BFL FRR + 0.45%; Axis Finance reference rate less a spread (rate NOT FOUND); term loans in total 136.68. Facility-by-facility numeric rates are not printed for all; MCLR and FRR levels are not stated in the AR. | PDF p.190, 191, 199 (printed 219, 220, 228) | Verified (text) |
| Operating cash flow | Net cash from operating activities 644.49 (288.28) standalone; 642.92 (287.31) consolidated. "Cash generated from operations" before tax 818.39 (414.11) standalone; 816.89 (415.09) consolidated. Management's "Rs 817 Cr, nearly doubled" is the BEFORE-TAX line, not the net line (script: 96.8% growth before tax, 123.6% net, standalone). | PDF p.161 (printed 190); p.249 (printed 278); Q4 call PDF p.6 | Verified |
| Working-capital days as stated | 81 (FY26), 91 (FY25), 73 (FY24), 53 (FY23), 85 (Q1 FY27). The Executive Chairman letter calls it "Net Working Capital" reduced "by 10 days in bringing it to 81" (AR PDF p.15). The formula is NOT FOUND in any document read | Q1 deck PDF p.19 (image-checked); Q4 call PDF p.6; AR PDF p.15 | Verified (figure), definition NOT FOUND |
| Own build, for orientation only | receivables + contract assets + inventory less payables less contract liabilities = 976.15, about 51.8 days of turnover, standalone (script). This is NOT management's definition and must not be printed beside 81. | script | Computed, internal |
| Net debt | 267 at FY26 and 548 at Q1 FY27 in the deck (PDF p.19); 274.16 on the Q4 call (181.37 excluding IPO funds) | Q1 deck; Q4 call PDF p.17 | Verified, two figures for FY26 |
| Unexecuted order book split | 61% domestic and 39% international at 31 Mar 2026 (AR PDF p.32); international Rs 6,225 Cr (computes to 38.2%); 59% and 41% at 30 Jun 2026 on 15,635 (deck PDF p.16) | | Verified |
| Revenue split by place | Standalone FY26 outside India 3,422.35 (50.5%), FY25 3,019.61 (57.9%) | PDF p.201 | Verified |
| Leaders | Executive Chairman Digambar C. Bagde; Managing Director and Chief Executive Officer Randeep Narang; Chief Financial Officer Deepak Khandelwal; Company Secretary and Compliance Officer Monica Gandhi (from 24 May 2025) | AR PDF p.39 | Verified |

## Inconsistencies inside the company's own documents (reported, not resolved)
- Order book: 16,313 (AR p.32, deck p.8) against 16,361 including L1 (AR p.3). Different scope, both printed.
- Net debt FY26: 267 (deck) against 274.16 (call). Deck says previous periods are restated.
- AR p.33 prints a debtor turnover of 3.96 whose arithmetic only reproduces on turnover including other operating revenue over CONSOLIDATED receivables (script).
- The MD&A says turnover is "reported on both a standalone and consolidated basis" at 6,880 and 30% growth; the two bases are 6,878.63 and 6,880.11.

## Not used
Anything from news pages, aggregators or the dossier's sources was not cited. The search-engine summaries I saw for Q4 results disagreed with each other (Q4 revenue 1,831 versus 1,863 versus 1,910), so none was used. The company deck prints Q4 FY26 consolidated revenue 1,863.
