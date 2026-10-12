# Man Infraconstruction Limited: data (MI-1)

Research date 8 Oct 2026. Prospect folder: maninfra only. All filings downloaded from the company site (maninfra.com, Investor Relations pages) into `src/ar/`; page images in `src/img/`; text in `src/txt/`. Filing date = server Last-Modified of the file or the date printed on it.
Every number below was read from a rendered page image, not only the text layer. All ratios, shares and percentages come from one script: `python -I src/compute.py` (output saved in `src/compute-output.txt`).
Units: Rs Cr (Rs lakh / 100). "AR p." = printed page number, with PDF page in brackets.

## 0. Blockers and basis (read first)
- No blocker: all primary documents were fetched. The FY2025-26 Annual Report is on the site (file dated 15 Jul 2026). Q1 FY27 results, presentation and analyst-meet transcript are on the site (12 and 21 Aug 2026). Q1 FY27 has no balance sheet (only half-yearly).
- **BASIS (binding): the standalone company is a single EPC segment.** Standalone note 4.06(a) (AR26 p.148 [PDF 170]): "the Company's business activity falls within a single business segment viz. Engineering, Procurement and Construction (EPC)". Real estate sits in subsidiaries, LLPs and JVs. So EPC working capital below = STANDALONE. The consolidated EPC segment note (AR26 p.217 [239]) is the second cross-check.
- **The standalone P&L is not an EPC margin.** FY26 standalone total income Rs 437.8 Cr includes Rs 152.2 Cr other income (34.8%), mostly interest on loans to group real-estate entities. PAT Rs 154.8 Cr against EPC revenue Rs 285.6 Cr is not an EPC margin. EPC segment result is Rs 79.9 Cr (consolidated segment note).
- **Vintage trap: from Q1 FY27 the company reclassifies interest earned on funding real-estate projects into "Other Operating Revenue".** Restated FY26: consolidated revenue 714.7 (was 630.5), standalone 366.4 (was 285.6). Both are printed in Q1 FY27 papers (results p2/p4, presentation slides 29-31). Use 285.6 / 630.5 when quoting the audited FY26 accounts, and say which.
- Earlier years are quoted as first reported in each year's own Annual Report. Where a later report restates the same year the restatement is flagged.

## 1. Documents (primary)
| Doc | Filing date | File |
|---|---|---|
| Annual Report FY2025-26 (257 pp.) | 15 Jul 2026 (site file date) | ar/AR_FY2025-26.pdf |
| Annual Reports FY2024-25 / 2023-24 / 2022-23 / 2021-22 | 17 Jul 2025 / Jul 2024 / Jul 2023 / 2022 | ar/AR_FY*.pdf |
| Q4/FY26 audited results standalone + consolidated (scanned) | 13 May 2026 | ar/SA_Q4FY26.pdf, CONSO_Q4FY26.pdf |
| Outcome of board meeting Q4 FY26 (unmodified opinion, dividend) | 13 May 2026 | ar/OUT_Q4FY26.pdf |
| Q1 FY27 results standalone + consolidated (scanned, G. M. Kapadia review) | 12 Aug 2026 | ar/SA_Q1FY27.pdf, CONSO_Q1FY27.pdf |
| Investor presentations Q4FY23, Q4FY24, Q4FY25, Q2FY26, Q3FY26, Q4FY26, Q1FY27 | May 2023 ... 12 Aug 2026 | ar/IP_*.pdf |
| Earnings call transcripts Q4 FY25 (20 May 2025), Q4 FY26 (14 May 2026) | May 2025, May 2026 | ar/TR_*.pdf |
| Virtual analyst meet transcript Q1 FY27 | 21 Aug 2026 | ar/AnalystMeet_Q1FY27.pdf |
| CARE rating letters 28 Oct 2024 and 11 Nov 2025 | as dated | ar/CR_2024.pdf, CR_2025.pdf |
| Buyback board resolution (Rs 169.29 Cr) | 1-2 Sep 2026 | other/ |
- A Q1 FY27 earnings call was cancelled (company letter 13 Aug 2026, ar/CallCancel_Q1FY27.pdf); a virtual analyst meet replaced it.

## 2. Standalone = EPC (Rs Cr). STANDALONE, whole company, single EPC segment
| | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|
| Revenue from operations | 236.6 | 797.8 | 708.3 | 394.7 | 285.6 (366.4 restated) | 102.7 (incl. 24.9 interest reclass) |
| Other income | 75.3 | 83.2 | 96.5 | 123.4 | 152.2 | 11.6 |
| PBT | 131.2 | 208.8 | 244.3* | 202.5 | 201.0 | 79.5 |
| PAT | 105.6 | 166.0 | 195.5* | 156.8 | 154.8 | 59.6 |
| EBITDA ex other income (Computed) | 61.1 | 136.9 | 159.8 | 90.8 | 62.5 | not computed |
| Net cash from operations | 15.9 | 24.8 | 230.2** | 15.4 | 46.8 | n/a |
- Sources: P&L AR22 p.83, AR23 p.97, AR24 p.109, AR25 p.109, AR26 p.109 [PDF 131]; cash flow AR23 p.99, AR25 p.111, AR26 p.111 [133]; Q1 FY27 standalone result p2 (12 Aug 2026).
- *FY24 as restated in AR25: PBT 271.5, PAT 215.4, other income 125.3 (AR25 p.109). The FY24 AR first reported 244.3 / 195.5. Both are printed company figures; vintage must be named.
- **FY24 cash from operations is from the AR25 comparative (AR25 p.111); the FY24 AR's own cash flow page was not rendered.
- EBITDA is Computed: revenue minus (total expenses minus finance costs minus D&A). Company's own restated FY26 standalone "EBITDA excluding other income" = 143.4 (slide 31 Q1 FY27 presentation) because it includes reclassified interest.
- Standalone revenue FY26 is down 64.2% on FY23 and 27.7% on FY25 (compute.py).
- Auditor: Nayan Parikh & Co (K. Y. Narayana) for FY22; G. M. Kapadia & Co (Atul Shah) from FY23 on (signature blocks AR22 p.82, AR23 p.96, AR26 p.108).

### Standalone balance sheet and working capital (Rs Cr; 31 March)
| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Trade receivables current + non-current | 78.5 | 277.1 | 67.2 | 61.2 | 37.9 (36.1 + 1.8) |
| Receivable days on revenue (Computed, crude) | 121 | 127 | 35 | 57 | 48 |
| Retention (Ind AS 115 note) | 4.2 | 61.5 | 6.7 | 4.2 | 3.6 |
| Contract assets | 0 | 0.7 | 9.2 | 0 | 11.6 |
| Contract liabilities | 61.2 | 71.8 | 28.1 | 7.3 | 74.6 |
| Customer advances (note) | 4.3 | 18.5 | 59.6 | 27.7 | 0 |
| Trade payables total | 20.3 | 107.0 | 48.9 | 46.1 | 18.7 |
| of which MSME | n/p | 1.2 | 15.2 | 12.8 | 6.5 (34.6%) |
| Inventories (EPC stores) | 3.0 | 1.6 | 3.4 | 3.0 | 1.0 |
| Borrowings (cash credit) | 0 | 10.8 | 8.6 | 0 | 0 |
- Pages: FY26 balance sheet AR26 p.108 [130]; receivables note 2.04 p.126-127 [148-149]; payables note 2.16 p.135 [157]; other liabilities 2.20 p.137 [159]; contract balances and retention 4.06 p.148-149 [170-171]; FY25 AR25 p.108, p.126, p.147 [120, 138, 159]; FY23 AR23 p.96, p.111, p.128 [100, 115, 132]; FY22 AR22 p.82 [84]; FY24 AR24 p.108 [118].
- n/p: FY22 balance sheet prints no separate MSME line.
- FY26 trade receivables 37.9 Cr = 1.7% of standalone total assets (2,220.2 Cr).
- **FY26 receivable ageing, current (AR26 p.127 [149]):** total undisputed good 36.13 Cr: printed "not due" 1.80 (5.0%), under 6 months 30.55 (84.5%), 6 months to 1 year 1.70 (4.7%), 1-2 years 2.06 (5.7%), over 2 years 0.02. Past due over 6 months = 3.78 Cr (10.5%). Credit-impaired 0.05 Cr. FY25 over 6 months = 1.19 Cr (2.0%).
  - **Anomaly:** the current table's "not due" cell shows 180.46 lakh, identical to the non-current balance. Reported as printed; the split may be a misprint.
- FY26 payables (AR26 p.135 [157]): MSME 6.46 Cr (not due 6.23, unbilled 0.23); others 12.19 Cr (of which 3.08 Cr overdue under 1 year, plus 0.00 older). Total 18.65 Cr, down from 46.06 Cr.
- Retention is small in every year after FY23 (3.6 Cr FY26). FY23's 61.5 Cr equals the non-current trade receivable line exactly (6,154.10 lakh).

### What the standalone balance sheet really holds (FY26, Rs Cr)
- Loans (all current) 821.2 = 37.0% of total assets: to related parties 333.2, other loans 488.0 (AR26 p.128 [150]). Of these, 307.8 are to firms/LLPs/companies in which a director is partner/director (p.128). Unsecured; repayable on demand (H2 FY26 related-party disclosure, src/other/RPT_H2FY26.pdf: loan to Atmosphere Realty 7.0 Cr at 12%, repayable on demand).
- Investments 866.5 (non-current 672.2 + current 194.3). Fixed deposits above 3 months 342.3. Cash at bank 21.3. Cash + bank deposits + current investments = 557.8.
- Pledged fixed deposits 54.78 Cr for non-fund facilities (AR26 p.135 [157]).
- Guarantees/collaterals given for subsidiaries/associates 332.2 Cr (FY25 131.0) (AR26 p.161 [183]).
- Equity 2,100.7 Cr; total assets 2,220.2 Cr; current liabilities 115.3 Cr.

## 3. Is it debt-free?
| Basis | Figure | Source |
|---|---|---|
| STANDALONE borrowings, 31 Mar 2026 and 2025 | nil. Cash-credit line undrawn. Interest on overdraft/cash credit FY26: Rs 0.13 lakh (AR26 p.140 [162]) | AR26 p.108, p.135 |
| STANDALONE finance cost FY26 | 4.30 Cr, of which bank guarantee and commitment charges 4.20 Cr | AR26 p.140 |
| CONSOLIDATED gross borrowings 31 Mar 2026 | 57.9 Cr (secured 31.1, other 26.8). BS: non-current 17.77 + current 40.09 | IP Q1FY27 slide 30; AR26 p.174 [196] |
| CONSOLIDATED gross borrowings 30 Jun 2026 | 77.8 Cr (secured 42.2, other 35.6) | IP Q1FY27 slide 30 (PDF 31) |
| Rate on consolidated borrowing | term loans 10% to 12%; overdraft 10.70% to 11.70%; one term loan 10.20% (held in real-estate LLPs Man Vastucon LLP, MICL Creators LLP) | AR26 p.200 [222] |
| Company's own description | "net debt free" and "extremely low" debt; MD (analyst meet): the Rs 78 Cr "is a contribution from partners in the form of debt. It is not an actual borrowing which has been done." | Q4FY26 call p.4; analyst meet p.5 |
| Consolidated liquidity | "Total cash and cash equivalents" 686.0 Cr (Mar-26), 767.2 Cr (Jun-26). The balance-sheet line "cash and cash equivalents" is only 85.7 Cr; the 686 is the company's own wider liquidity figure (composition not stated) | IP Q1FY27 slide 30; AR26 p.174 |
- Consolidated gross borrowings by year (Computed from balance sheets): FY22 557.3, FY23 205.9, FY24 130.8, FY25 35.6, FY26 57.9.
- Bank limits (CARE, 11 Nov 2025): fund-based 32.50 Cr (Union Bank 17.50, Bank of Baroda 15.00); non-fund-based 387.00 Cr (Bank of Baroda 162, Union Bank 225). Total 419.5 Cr. Rating CARE A+; Stable (LT) / A1 (ST), reaffirmed 11 Nov 2025 (upgraded from A on 28 Oct 2024). Source: ar/CR_2025.pdf pp.1, 4.
- **Reading for the booklet:** standalone EPC has no borrowing, so no interest saving may be printed (README ruling). Released cash is "cash available". Real-estate entities do carry bank debt at 10%-12%, but that is not EPC and not a Crestline pilot scope.

## 4. Segment note, consolidated (EPC vs real estate). CONSOLIDATED, as first reported (Rs Cr)
| | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|
| EPC segment revenue (before inter-segment) | 493.3 | 1,024.8 | 803.3 | 413.4 | 303.8 | 82.1 |
| Real estate segment revenue | 641.6 | 973.4 | 530.4 | 698.5 | 329.4 (413.6 restated) | 136.8 |
| EPC segment result | 128.9 | 135.5 | 157.7 | 106.3 | 79.9 | 47.0 |
| EPC segment assets | 193.2 | 434.7 | 204.3 | 154.6 | 138.1 | 128.6 |
| EPC segment liabilities | 167.2 | 329.3 | 211.4 | 120.9 | 119.1 | 94.8 |
| EPC net segment assets (Computed) | 26.1 | 105.5 | -7.0 | 33.8 | 18.9 | 33.8 |
- Pages: AR22 p.170 [172]; AR24 p.217 [227] (FY23 and FY24); AR25 p.214 [226]; AR26 p.217 [239]; Q1 FY27 consolidated result p5 (12 Aug 2026).
- **Q1 FY27 segment values are on a basis that allocates finance cost to segments and restates comparatives** (note under the table). EPC result 47.0 on revenue 82.1 is as printed; the allocation basis is not disclosed.
- EPC segment revenue FY26 is down 70.4% on FY23 and 26.5% on FY25. Q1 FY27 EPC revenue is down 19.7% on Q1 FY26 (82.07 vs 102.24).
- EPC capital employed is small: net segment assets about Rs 19 Cr at 31 Mar 2026 (Rs 34 Cr at 30 Jun 2026). Working capital tied up in EPC is tens of crore, not hundreds.
- Consolidated headline (Rs Cr): revenue FY22 961.5, FY23 1,890.3, FY24 1,263.5, FY25 1,108.1, FY26 630.5; PAT total 298.5, 289.0, 303.3, 312.8, 211.0; PAT to owners 216.4, 258.6, 300.4, 282.7, 200.6. FY26 revenue is down 43.1% on FY25 (not "halved"); total PAT down 32.5%; PAT to owners down 29.1%. Sources: consolidated P&L AR22 p.135, AR24 p.177, AR25 p.175, AR26 p.175 [197].
- Consolidated Q1 FY27 (12 Aug 2026): revenue 218.3 (restated basis), PAT 62.7, PAT after minority interest 71.6 (+29% on Q1 FY26 55.6), per IP slide 29 and result p4.
- Consolidated inventories (real estate, not EPC): FY22 449.0, FY23 380.3, FY24 504.7, FY25 530.2, FY26 738.0.

## 5. EPC order book and clients (company statements)
| Date | Order book Rs Cr | Mix | Source |
|---|---|---|---|
| 31 Mar 2023 | 980+ | infra 83% / residential 17% | IP Q4FY23 slide 19 |
| 31 Mar 2024 | 823 | n/s | IP Q4FY24 slide 19 |
| 31 Mar 2025 | 503 | infra 26% / residential 74% (text layer; not image-checked) | IP Q4FY25 slides 14, 25; call 20 May 2025 p.4 |
| 31 Dec 2025 | ~300 | infra 34% / residential 66% | IP Q3FY26 slides 15, 26 |
| 31 Mar 2026 | 392 | infra 52% / residential EPC 48% | IP Q4FY26 slide 20 (image); AR26 p.98 [120]; call 14 May 2026 p.3 |
| 30 Jun 2026 | 305 | infra 61% / residential 39% | IP Q1FY27 slide 28 (image) |
- Order book is down 69% from Mar-23 to Jun-26 (Computed). n/s = not stated.
- Clients named: infra = BMCT (Bharat Mumbai Container Terminals, PSA, Nhava Sheva) EPC, and PMC for Trident Agro (an associate from 14 Apr 2025, AR26 p.153 [175]). Residential = PMC fee contracts (Aaradhya Avaan Tardeo, JadePark Vile Parle, Atmosphere Tower G Mulund) and the EPC contract for Artek Park BKC, all group or associate real-estate projects. Slide note: PMC contracts count only the PMC fee, not total work value.
- **BMCT Terminal 4 is live but ending:** "2022-2026, Rs 1,800+ Cr contract value, 95%+ executed, as on Jun-26" (IP Q1FY27 slide 27 [PDF 27], image checked). AR26 p.98: "BMCT project at Nhava Sheva is nearing completion". Infra share of the Jun-26 book is about Rs 186 Cr (Computed 61% x 305).
- Standalone remaining performance obligation, 31 Mar 2026: Rs 287.86 Cr (0-1 year 232.30; 1-2 years 55.56) (AR26 p.149 [171]).
- MD, 21 Aug 2026: "almost on the final verge of negotiations for one of the significantly large order for EPC ... hopefully in the next two quarters" (not yet an order). See depth.md.

## 6. Related-party EPC (work for its own / group real-estate entities). STANDALONE
Contract revenue from related parties (note 4.09, Rs Cr), share of standalone contract revenue and of revenue from operations (Computed):
| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Related-party contract revenue | 196.5 | 156.3 | 97.2 | 16.1 | 14.9 |
| % of revenue from operations | 83.0% | 19.6% | 13.7% | 4.1% | 5.2% |
- Counterparties: Man Vastucon LLP (subsidiary) FY22 158.2, FY23 92.1, FY24 53.8, FY25 nil; Atmosphere Realty Pvt Ltd (associate) 38.3, 64.2, 43.5, 15.8, 14.4; MICL Creators LLP (subsidiary) 0.29 (FY25), 0.48 (FY26). Pages: AR23 p.133 [137], AR24 p.154 [164], AR25 p.154 [166], AR26 p.154-155 [176-177].
- External contract revenue (contract revenue minus related-party) FY26 Rs 227.0 Cr against Rs 629.7 Cr in FY23 (down 63.9%).
- **Outstanding related-party trade receivables FY26: Rs 6.40 Cr = 16.9% of standalone trade receivables;** Atmosphere Realty alone Rs 5.49 Cr (14.5%), up from 4.45 Cr in FY25 (AR26 p.160 [182]). Receivable from directors'-linked firms and companies 5.91 Cr (note 2.04, p.126).
- Related-party EPC revenue is therefore small now, but the order book is mostly group projects (section 5). Group-funded projects are paid from group funds that the standalone itself lends (Rs 821 Cr loans).

## 7. Cash flow context, standalone (FY26, Rs Cr; AR26 p.111 [133])
- Net cash from operations 46.8; investing -353.2 (purchase of investments -346.6, loans repaid by subsidiaries +7.6, interest received +100.2, deposits -101.0); financing +284.5 (proceeds from conversion of warrants 329.9, dividends -35.1).
- Buyback: board approved 1 Sep 2026, up to Rs 169.29 Cr, max Rs 171/share, open market (company letters 1-2 Sep 2026). Interim dividend Rs 0.72/share (36%) for FY2026-27, declared 13 May 2026 = Rs 29.1 Cr (Computed).

## 8. Auditor's report wording (STANDALONE FY26; AR26 p.100 [122])
- G. M. Kapadia & Co, report on the audit of the standalone statements: "In our opinion ... the aforesaid standalone financial statements give the information required by the Companies Act 2013 in the manner so required and give a true and fair view". Unmodified. The company's 13 May 2026 letter says the same for consolidated and standalone (image checked).
- One key audit matter: "Revenue recognition over time in Construction contracts ... applying percentage of completion", resting on forecast costs for labour, material, subcontractors and defect liability, and "assessments of claims on customers relating to, e.g., change or additional orders".
- No emphasis-of-matter paragraph found (text search of the full AR).

## 9. Leadership and registered office (as printed, AR26 p.1 [23])
- Registered and corporate office: 12th Floor, Krushal Commercial Complex, G. M. Road, Chembur (West), Mumbai 400 089 (AR26 p.1; secretarial reports add "Above Shoppers Stop"). CIN L70200MH2002PLC136849. investors@maninfra.com, +91 22 4246 3999. Listing NSE MANINFRA, BSE 533169.
- Managing Director: Mr. Manan Parag Shah (DIN 06500239, director since 29 May 2014).
- CFO: Mr. Ashok Manharlal Mehta, "Whole-time Director and Chief Financial Officer" (DIN 03099844, appointed director 11 Sep 2019). In call transcripts "Director and Group CFO". Full names from AR26 p.62 [84].
- Company Secretary and Compliance Officer: Mr. Durgesh S. Dingankar (Membership F7007).
- Chair: AR26 (Corporate Information, p.1 [23]; governance p.45 [67]) prints "Mr. Berjis M. Desai, Non-executive Director and Chairman" and "Mr. Parag K. Shah (Parag Kishorchandra Shah), Non-executive Director and Chairman Emeritus"; Parag K. Shah is Manan's father. AR26 notes that Berjis Desai "retires by rotation at the ensuing AGM and has not offered himself for re-appointment". **The Q1 FY27 presentation of 12 Aug 2026 (slide 7 [PDF 7]) shows "Mr. Parag Shah, Chairman and Non-Executive Director"** (image checked). Current chair is therefore unconfirmed between the two documents. Check the 24th AGM outcome before print.
- Independent director Mr. Rajiv N. Sheth appointed 3 Jul 2026 (company letter); presentation also lists Mr. Vatsal Shah (non-executive) and Sivaramakrishnan S. Iyer (independent).
- Statutory auditors G. M. Kapadia & Co; internal auditors Aneja Associates; bankers Bank of Baroda, Union Bank of India.

## 10. ERP (own filings only)
- AR FY2025-26, Management Discussion p.99 [121]: "Enterprise Resource Planning (ERP) software is in place at the Head Office and across its sites". Same sentence in AR FY2024-25 (p.? PDF 112), FY2023-24 (PDF 109), FY2021-22 (PDF 74: "successfully implemented Enterprise Resource Planning Software in its Head Office and across its Sites").
- Vendor and product: **NOT FOUND.** Checked: text of AR FY22 to FY26, presentations, transcripts, rating letters, website home page; web searches "Man Infraconstruction ERP SAP Oracle Tally" and "... SAP S/4HANA Microsoft Dynamics Primavera" (no result names one). CARO/auditor note says "an accounting software ... with audit trail feature" (AR26 p.125, p.186), unnamed.
