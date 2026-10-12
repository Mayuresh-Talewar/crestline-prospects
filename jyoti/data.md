# Jyoti Structures Limited: data (JS-1)

Blockers: none on the core documents. No earnings call transcript, investor presentation or credit rating rationale exists for this company in the period searched (see section 12). Sensitive items are referred to as S1, S2 ... and are listed only in sensitive-garvis.md.

## FEASIBILITY VERDICT: LIGHT

**The legacy-balance trap is real.** Of Rs 2,223.10 Cr of trade receivables at 31 Mar 2026, Rs 1,984.17 Cr (89.25%) is more than three years past due. That old book alone is 68.11% of total assets. These balances have carried item S4 every year from FY23 to FY26, and the company's own note says their reconciliation is "under process". Any whole-company working-capital day figure is meaningless. Total receivables come to 1,081 days of FY26 revenue, and that number describes the past, not the running business.

**The running business can be separated, but only roughly.** Receivables up to three years past due were Rs 238.93 Cr at Mar 2026 (116 days of FY26 revenue). The under-6-months bucket was Rs 214.18 Cr (104 days). Five things stop us pricing days with full confidence:
1. The buckets run from the due date, not the bill date.
2. Receivables include GST and revenue does not.
3. The over-3-years bucket rose Rs 146.85 Cr in FY26, and Rs 139.76 Cr of that rise cannot be explained by balances ageing into it.
4. The Mar 2025 buckets were restated between the FY25 and FY26 reports, with Rs 46.12 Cr moved into the under-6-months bucket. So the bucket edges move.
5. The filings give no contract-asset or retention balance, and unbilled revenue is only Rs 5.45 Cr.

**No borrowing rate is disclosed, so days can be priced in cash and not in interest.** FY26 revenue is Rs 2.057 Cr a day, and Q1 FY27 runs at Rs 2.763 Cr a day. Operating cash flow has been negative for three years, Rs 465.39 Cr in total. The largest running-business cash trap we can see is margin money: Rs 148.74 Cr held with banks, 120.42% of the guarantees outstanding. That trap is tied to S6.

**What a booklet can and cannot say.** A booklet is possible on the running slice only: the under-6-months receivables, inventory (71 days of revenue), customer advances (45 days, down from 98) and margin money. Everything would be stated in cash, with caveats, and with no interest savings and no whole-company days. The reader list is also thin: there has been no Chairman since 17 Jul 2026 and no CEO since 29 May 2026 (section 10).

## Conventions
- Entity: Jyoti Structures Limited (JSL). Basis: STANDALONE unless marked CONSOLIDATED. The standalone figures include seven foreign branches, five of them unaudited (S5).
- "p" = the page index of the PDF file in src/d (the printed page number differs). Rs crore unless stated. Lakh figures were converted in src/js-calc.py.
- Grades: **Verified** (document, page, filing date, basis; read from the page image) / **Computed** (src/js-calc.py, output in src/js-calc-output.txt) / **NOT FOUND** (with what was searched).
- Run: `python -I src/js-calc.py > src/js-calc-output.txt`

## 1. Source register (all in src/d)
| File | Document | Filed / dated |
|---|---|---|
| ar_fy26.pdf | Annual Report 2025-26 (51st) | submitted to exchanges 22 Jul 2026 (per corrigendum filed 27 Jul 2026); accounts signed 30 Apr 2026 |
| nse_JYOTISTRUC_27072026181640_CorrigendumF.pdf | AR FY26 corrigendum (CSR committee composition only; "all other contents ... remain unchanged") | 27 Jul 2026 |
| ar_fy25.pdf | Annual Report 2024-25 (50th) | 20 Aug 2025 (cover letter p1); accounts signed 28 May 2025 |
| ar_fy24.pdf | Annual Report 2023-24 (49th), figures in Rs lakh | website copy, no filing date printed; accounts signed 29 May 2024 |
| res_q1fy27.pdf | Q1 FY27 results + limited review | 4 Aug 2026 |
| res_q4fy26.pdf | Q4 FY26 audited results | 30 Apr 2026 |
| res_q2fy26_nov2025.pdf | Q2 FY26 results with statement of assets and liabilities | 12 Nov 2025 |
| res_q4fy25.pdf | Q4 FY25 audited results | 28 May 2025 |
| res_q3fy26_jan2026.pdf, res_q1fy26_aug2025.pdf, res_q3fy25_feb2025.pdf | other quarters (index only) | 23 Jan 2026, 14 Aug 2025, 3 Feb 2025 |
| ann_Press_Release-June26-5843438.pdf | Q1 FY27 press release | 4 Aug 2026 |
| ann_Press_Release-7569167.pdf | Q4 FY26 press release | 30 Apr 2026 |
| ann_JSL_Press_Release-8444614.pdf | FY25 press release | 28 May 2025 |
| ann_PRESSRELEASE-4882750.pdf | Rs 639 Cr order press release | 11 Aug 2025 |
| nse_JYOTISTRUC_04082026164045_MAreportJune26.pdf | Monitoring agency report, rights issue proceeds | 4 Aug 2026 |
| nse_announcements_20250401_20261008.json | NSE announcement index, 101 rows, pulled 8 Oct 2026 | index |
| other ann_*.pdf, nse_*.pdf | order, completion, KMP and board filings, as cited below | as cited |

## 2. Profit and loss (STANDALONE)
| Item | FY24 | FY25 | FY26 | Q1 FY27 | Source, grade |
|---|---|---|---|---|---|
| Revenue from operations | 451.38 | 497.83 as first published; 498.04 as restated in AR FY26 | 750.87 | 251.46 (Q1 FY26: 156.19) | AR FY25 p80 (20 Aug 2025); AR FY26 p89 (22 Jul 2026); res_q1fy27 p2 (4 Aug 2026). Verified |
| Other income | 11.64 | 6.67 first published; 6.46 restated | 21.57 (FD interest 17.82) | 3.72 | same pages; AR FY26 p100 note 25. Verified |
| Total income | 463.02 | 504.50 | 772.44 | 255.18 | same. Verified |
| EBITDA (company figure, includes other income) | NOT FOUND for FY24 in a primary document | 44.28 | 69.97 | 24.97 | Q4 FY26 PR p2 (30 Apr 2026); Q1 FY27 PR p2 (4 Aug 2026). Verified. The script check PBT + finance cost + D&A gives 69.97 and 44.28 |
| EBITDA excluding other income | | | 48.40 (6.45% of revenue) | | Computed |
| Finance costs | 1.01 | 0.12 | 2.70 (all "interest expense", note 30) | 2.23 | AR FY25 p80; AR FY26 p89, p101; res_q1fy27 p2. Verified |
| PBT | 19.87 | 35.66 | 54.72 | 19.27 | same. Verified |
| PAT | 29.44 | 35.81 | 56.04 | 19.46 | same. Verified |
| PAT, CONSOLIDATED | 28.86 | 35.57 | 56.03 | 19.46 | AR FY25 p130; AR FY26 p139; res_q1fy27 p3. Verified |
| FY23 revenue | 229.23 (Rs 22,923.12 lakh) | | | | AR FY24 p97. Verified, converted by script |

Growth (Computed): FY24 revenue +96.91%. FY25 +10.29% on the first-published figure. FY26 +50.76% on the restated base. Q1 FY27 +61.00% on Q1 FY26. Other income was 39.42% of FY26 PBT.
Internal conflict: the CFO's FY26 letter (AR FY26 p7) says "revenue from operations increased significantly to ₹772 crore". Rs 772 Cr is total income; revenue from operations was Rs 750.87 Cr (p89).

## 3. Cash flow (STANDALONE)
| Item | FY24 | FY25 | FY26 | Source, grade |
|---|---|---|---|---|
| Net cash from operating activities | (19.34) | (177.08) | (268.97) | AR FY25 p82; AR FY26 p91. Verified |
| Working-capital change in OCF | (53.61) | (222.04) | (304.74), of which receivables and other assets (205.90), inventories (51.67) | same. Verified |
| Cash and cash equivalents, year end | 38.50 | 463.83 | 97.33 | AR FY26 p92. Verified |
| Cumulative OCF FY24 to FY26 | | | (465.39) | Computed |

## 4. Trade receivables (STANDALONE)
Gross receivables at Mar 2026 were Rs 2,237.85 Cr, of which Rs 2,023.67 Cr was outstanding more than six months; the ECL provision was 14.75 and the net figure 2,223.10 (AR FY26 p96 note 6). Verified. Mar 2025: gross 2,147.60, provision 10.75, net 2,136.85. Sep 2025 net: 2,187.45 (res_q2fy26_nov2025 p3, 12 Nov 2025). Verified.

**Ageing table** (measured from the due date of payment; all "undisputed, considered good"; no disputed rows):
| As at | under 6 m | 6 m to 1 y | 1 to 2 y | 2 to 3 y | over 3 y | Total | Source |
|---|---|---|---|---|---|---|---|
| Mar 2023 | 93.22 | 0.20 | 0 | 0 | 1,897.01 | 1,990.43 | AR FY24 p132 (lakh, converted). Verified |
| Mar 2024 | 72.80 | 25.27 | 26.44 | 0 | 1,898.24 | 2,022.75 | AR FY25 p116. Verified |
| Mar 2025, as first published | 129.92 | 69.13 | 93.37 | 7.09 | 1,837.34 | 2,136.85 | AR FY25 p116. Verified |
| Mar 2025, as restated | 176.04 | 59.92 | 56.49 | 7.09 | 1,837.32 | 2,136.85 | AR FY26 p124. Verified |
| Mar 2026 | 214.18 | 7.90 | 9.03 | 7.82 | 1,984.17 | 2,223.10 | AR FY26 p124. Verified |

Computed:
- Over-3-years share of net receivables: 95.31% (Mar 2023), 93.84% (Mar 2024), 85.98% (Mar 2025 restated), 89.25% (Mar 2026). It is 68.11% of total assets at Mar 2026.
- Running book (up to 3 years): Rs 238.93 Cr at Mar 2026, 116 days of FY26 revenue. At Mar 2025 it was Rs 299.53 Cr, 220 days.
- Under-6-months bucket: 104 days (Mar 2026), 129 days (Mar 2025).
- The over-3-years bucket rose Rs 146.85 Cr in FY26. Only Rs 7.09 Cr could have aged into it from the 2-to-3-years bucket, which leaves Rs 139.76 Cr unexplained.
- The restatement of Mar 2025 moved Rs 46.12 Cr into the under-6-months bucket and out of the 6-to-12-months and 1-to-2-years buckets.
- Foreign branch receivables are Rs 208.77 Cr (AR FY26 p78), 9.39% of net receivables.
- The ECL provision covers 0.66% of gross receivables.
- Receivables are 76.31% of total assets at Mar 2026 (Computed). S4 states 76.30%.

## 5. Contract assets, retention, contract liabilities, advances
| Item | Mar 2024 | Mar 2025 | Mar 2026 | Source, grade |
|---|---|---|---|---|
| Revenue accrued but not due (unbilled) | NOT FOUND as a line | nil | 5.45 | AR FY26 p97 note 11. Verified |
| Contract assets as a separate line | NOT FOUND | NOT FOUND | NOT FOUND | searched AR FY26 and FY25 balance sheets and notes 9, 11 and 34 for "contract asset" and "Ind AS 115"; the policy text (p105) names contract assets but no balance is given |
| Retention receivable | NOT FOUND | NOT FOUND | NOT FOUND | searched "retention" in AR FY26 and FY25: only policy text. AR FY26 p105 says retention is "generally due upon expiration of the contract period" |
| Advances from customers (the only contract-liability line) | 93.77 | 134.21 | 92.92 | AR FY25 p91; AR FY26 p100 note 22. Verified |
| Other current liabilities, Sep 2025 (not split) | | | 170.28 | res_q2fy26_nov2025 p3. Verified |

Computed: customer advances were 98 days of FY25 revenue and 45 days of FY26 revenue.
Company terms (AR FY26 p105, image-checked): "Payment is generally due upon receipt of the invoice, payable within 90 days or less."

## 6. Inventories (STANDALONE)
| Item | Mar 2024 | Mar 2025 | Mar 2026 | Source |
|---|---|---|---|---|
| Raw materials in stock (policy: "including steel, cement", p106) | 27.00 (+0.67 in transit) | 48.35 | 44.83 | AR FY25 p87; AR FY26 p96. Verified |
| Construction materials at site | 4.37 | 7.30 | 12.68 | same |
| Semi-finished goods | 0 | 0 | 12.62 | same |
| Work in progress | 31.46 | 27.39 | 45.45 | same |
| Finished goods | 2.49 | 4.74 | 18.12 | same |
| Stores and consumables, bought-out components, scrap | 5.82 | 6.56 | 12.31 | same (sum of lines as printed) |
| Total | 71.81 | 94.34 | 146.01 | same. Verified |
| Sep 2025 total | | | 118.93 | res_q2fy26_nov2025 p3. Verified |

A separate "tower" stock line is NOT FOUND: the company does not split towers out. Computed: inventory was 71 days of FY26 revenue, or 123 days of FY26 cost of materials consumed.

## 7. Trade payables and MSME (STANDALONE)
| Item | Mar 2024 | Mar 2025 | Mar 2026 | Source |
|---|---|---|---|---|
| Trade payables, current | 106.04 | 132.00 | 116.20 | AR FY25 p91; AR FY26 p99 note 20. Verified |
| of which micro and small enterprises | 0.85 | 1.69 | 5.51 | same. Verified |
| Trade payables, non-current (operational creditors, note 16) | | 20.00 | 15.00 | AR FY26 p99. Verified |
| MSME interest due and unpaid at year end | | 0.01 | 0.03 | AR FY26 p126. Verified |
| Trade payables, Sep 2025 | | | 114.58 | res_q2fy26_nov2025 p3. Verified |

MSME ageing at Mar 2026, from the due date: under 6 m 5.36; 6 m to 1 y 0.12; 1 to 2 y 0.02; 2 to 3 y 0.00; over 3 y 0.01 (AR FY26 p126). Verified. The company states that payables "include dues to micro and small enterprises ... outstanding for more than 45 days" without giving an amount. **MSME overdue past 45 days: NOT FOUND as a figure.** Computed: MSME dues more than 6 months past due were Rs 0.15 Cr. Current trade payables were 67 days of FY26 material plus erection and subcontracting cost.

## 8. Borrowings, rates, guarantees (STANDALONE, Mar 2026; AR FY26 p99, p92)
| Facility | Mar 2025 | Mar 2026 | Rate disclosed |
|---|---|---|---|
| Non Convertible Debenture, long term (S2) | 1,845.69 | 1,896.63 | NOT FOUND |
| Financial creditors, long term (S2) | 29.27 | 28.78 | NOT FOUND |
| Non Convertible Debenture, short term (S2) | 22.87 | 82.76 | NOT FOUND |
| Financial creditors, short term (S2) | 97.89 | 0.49 | NOT FOUND |
| Project specific demand loan, "secured against current assets of the projects" | nil | 74.49 | NOT FOUND |
| Total | 1,995.72 | 2,083.17 (the notes sum to 2,083.15, a rounding gap) | |

All rows are Verified (AR FY26 p99). The interest rate searches covered notes 15, 19 and 30, the interest-rate-risk note on p123 (which states 0.00% of borrowings at variable rates), the MA report and all press releases, and found nothing. The only rate printed anywhere is 5.50% on an HDFC Bank fixed deposit of rights-issue money (MA report p8, 4 Aug 2026). That is a deposit yield, not a borrowing rate. **No borrowing rate is disclosed, so a booklet cannot price days at an interest rate.** Finance cost was Rs 2.70 Cr in FY26. Computed: the instruments covered by S2 are 96.42% of borrowings.
Bank guarantees outstanding: 44.64 (Mar 2025), 123.52 (Mar 2026) (AR FY26 p114). Margin money with banks: 50.11 and 148.74 (p96 note 8). Verified. Computed: margin money is 120.42% of guarantees outstanding and equals 72 days of FY26 revenue; it rose Rs 98.63 Cr in FY26.

## 9. Ratios and working-capital measures the company states itself (AR FY26 p127, definitions p128; STANDALONE)
| Ratio as labelled | FY26 | FY25 | Company definition |
|---|---|---|---|
| Trade receivables turnover ratio (No. of Days) | 0.34 | 0.24 | net credit sales / average receivables |
| Inventory turnover ratio (No. of Days) | 4.88 | 4.11 | cost of goods sold / average inventory |
| Trade payables turnover ratio (No. of Days) | 4.47 | 2.59 | net credit purchases / average payables |
| Net capital turnover ratio (times) | 0.31 | 0.20 | net sales / average working capital |
| Current ratio | 6.47 | 6.41 | current assets / current liabilities |
| Debt service coverage ratio | 0.48 | 0.76 | as defined on p128 |

All rows Verified. The labels say "No. of Days" but the values are turnover multiples (times), which is an internal inconsistency. **No net working capital figure, working-capital-days figure or working-capital target is stated anywhere**: a script search of 74 text-layer documents found 0 hits (src/js-scan.py), and the scanned results were read from page images.

## 10. People and office
| Role | Name and exact title | Source, grade |
|---|---|---|
| CFO | Mr. Abdul Hameed Khan, "Whole-Time Director and Chief Financial Officer" (letter); signs as "Chief Financial Officer & Whole time Director", DIN 09508070. CFO with effect from 12 Aug 2024; before that he was CEO and Whole Time Director (AR FY24 p97, where the CFO was Mr. Kumar V Balan). Tenure extended 1 Apr 2026 to 31 Mar 2027. | AR FY26 p7, p88, p18; AR FY25 p17; res_q1fy27 p2 (4 Aug 2026). Verified |
| CEO | **Vacant.** Mr. Rajesh Kumar Singh resigned with effect from the close of 29 May 2026. No successor filed by 8 Oct 2026. | ann_FINALOUTCOME-0070351 (29 May 2026); AR FY26 p3; NSE index. Verified |
| Chairman | **Vacant.** The last Chairman died on 17 Jul 2026 and must not be named as an officer. No new Chairman filed by 8 Oct 2026; the 51st AGM on 13 Aug 2026 was chaired by Mrs. Monica Chaturvedi, Independent Director. | ann_Intimation-4274007 (17 Jul 2026); AGM proceedings p2 (13 Aug 2026). Verified |
| COO | Mr. Amit Dutta, Chief Operating Officer, appointed 5 Feb 2026 | ann_FinalPressRelease-0284533 (5 Feb 2026). Verified |
| Company Secretary | Ms. Sonali K. Gaikwad, Company Secretary & Compliance Officer, FCS 13908 | AR FY26 p3. Verified |
| Board at the AR date | Dr. Govind Prasad Saha, Mrs. Monica Akhil Chaturvedi, Mr. Raajeev B. Batra (spelt "Rajeev" on p3), all Independent; Mr. Abhinav Rishi Angirish, Non-Executive Nominee Director; Mr. Abdul Hameed Khan, Whole Time Director | AR FY26 p3, p18. Verified |
| Registered office | Valecha Chambers, 6th Floor, New Link Road, Andheri (West), Mumbai 400 053, Maharashtra. Tel +91 22 3515 5000. CIN L45200MH1974PLC017494. Website jyotistructures.in | AR FY26 p3, p51. Verified |
| Emails printed | investor@jsl.co.in (AR FY26 p3; also the BRSR contact for the CFO, p53); contact@jsl.co.in (company website) | Verified. No personal email address is printed in any filing |

## 11. Order book and inflow
| Measure | Figure | Source, grade |
|---|---|---|
| Order book 1 Apr 2026 | Rs 2,274 Cr (GST basis not stated) | AR FY26 p15. Verified, single source |
| Order book 1 Apr 2025 | "over Rs. 1,900 Cr" | FY25 PR p2 (28 May 2025). Verified |
| same date, other statement | "in excess of ₹ 1,800 Crores" | AR FY25 p14 (20 Aug 2025). Verified. **Conflict of Rs 100 Cr between two company documents** |
| Orders in hand, Feb 2025 | "close to Rs. 2,000 Crores, including GST" | ann_Intimation-0112045 (21 Feb 2025). Verified |
| Total income from the order book, Nov 2021 to 31 Mar 2026 | Rs 1,974 Cr | AR FY26 p15. Verified |
| FY26 major orders named | 639.08 + 288.38 + 88.35 = 1,015.81 | AR FY26 p15. Verified; sum Computed |
| FY26 inflow implied by the roll-forward | 1,124.87 (opening 1,900) or 1,224.87 (opening 1,800) | Computed. Indicative only: GST basis unknown |
| Order book cover | 3.03 times FY26 revenue | Computed |

Large orders (each checked live in depth.md):
| Filed | Client | Scope | Value | Period |
|---|---|---|---|---|
| 16 Jul 2024 | Adani Energy Solutions | 765 kV D/C KPS III to AP44 line, construction and part supply | Rs 117.74 Cr incl GST | to 31 Oct 2025 |
| 28 Aug 2024 | "a leading Private Developer" | supply of towers, 765 kV DC line, Gujarat | Rs 105.57 Cr incl GST | 10 months |
| 23 Oct 2024 | Adani Energy Solutions | LILO of 765 kV DC Bhuj II to Lakadia at Navinal, turnkey | Rs 450.01 Cr excl GST | 18 months, "by April, 2026" |
| 23 Jan 2025 | POWERGRID | Package 01, ±800 kV HVDC KPS2 to Nagpur, total turnkey | Rs 741.28 Cr incl GST | 42 months |
| 25 Feb 2025 | Adani Energy Solutions | 765 kV DC line 1B, Boisar II to Pune III, turnkey | Rs 389.36 Cr incl GST | 18 months |
| 11 Aug 2025 | not named | 765 kV and 400 kV lines, turnkey EPC | Rs 639 Cr excl GST (AR: 639.08) | 12 to 15 months |
| 15 Oct 2025 | AESL Projects | portion of ±800 kV HVDC Bhadla 3 to Fatehpur, turnkey | Rs 288.36 Cr excl GST (AR: 288.38) | 36 months |
| 30 Mar 2026 | Adani Electricity Mumbai | EHV 220/110 kV modification works, Mumbai Coastal Road, LSTK | Rs 88.33 Cr excl GST (AR: 88.35) | 12 months |
| 13 May 2026 | National Transmission Network Service Provider (Private) Limited, Sri Lanka; JSL in a JV with Fentons | 28 km 220 kV DC line, Mannar to Mullikulam | Rs 67.96 Cr at the filing's own rates of 1 USD = ₹95.14 and 1 LKR = ₹0.29; JSL's share not stated | 18 months |

All rows are Verified from the filing PDF of each date (ann_*.pdf and nse_*.pdf in src/d).

## 12. ERP and systems (from filings only)
- "ERP Software", intangible asset under development, Rs 94.52 lakh, added in FY24 (AR FY24 p102, image-checked). Verified.
- The software under development reached Rs 1.75 Cr at Mar 2026, with Rs 0.95 Cr aged 2 to 3 years, so it had still not been put into use (AR FY26 p94, image-checked). Verified.
- The vendor or product name is NOT FOUND. Searched "SAP", "Oracle", "ERP" and "software" in AR FY24, FY25 and FY26: the only named software is for tower design (PLS-Tower, BOCAD, S-Tow, AR FY26 p28).
- Books are kept in "accounting software which has a feature of recording audit trail" (AR FY26 p81). Verified.
- Warning: AR FY24 p26 uses "ERP" for a person connected with S1, not for a system.

## 13. Searches that came back empty (NOT FOUND)
- **Earnings call transcripts, investor presentations.** Searched the NSE announcement index from 1 Apr 2025 to 8 Oct 2026 (no analyst-meet, call or presentation category among 101 rows), the company's investor-relations, financial-results and announcement pages, and web searches for "Jyoti Structures earnings call transcript OR investor presentation 2026". None exist. The management words available are therefore press releases (credited to "A Company Spokesperson", unnamed) and annual report letters.
- **Credit rating rationales.** Searched "credit rating" in AR FY25 and FY26 (0 hits), the NSE index (no rating filing; CARE Ratings appears only as the rights-issue monitoring agency), and web searches across the CRISIL, ICRA, CARE, India Ratings, Acuite and Infomerics sites. Every hit belonged to a different "Jyoti" entity (checked on page 1 of each PDF).
- **Q4 FY26 and Q1 FY27 balance sheets.** Q4 FY26 is covered by the AR. Q1 FY27 publishes no balance sheet; the latest interim balance sheet is Sep 2025.
