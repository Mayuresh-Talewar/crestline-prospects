# Arwade Infrastructure Limited: data (AR-1, 8 Oct 2026)

**FEASIBILITY: LIGHT.** No SME IPO DRHP/RHP found (NOT FOUND, see below). Primary base = 3 Infomerics rationales (17 May 2023, 3 Jul 2024, 28 Jul 2025), table pages image-checked, plus the company website. Exists: FY22-FY25 standalone revenue/EBITDA/PAT/net worth/debt, order book + concentration, limits, lenders, utilisation, FY22-FY23 receivable/creditor/GCA days, MD name, finance staff titles. Missing: any FY26 figure (no rationale after 28 Jul 2025), receivable/payable/unbilled/retention balances and days for FY24-FY25, interest rate, BG utilisation, CFO, ERP name. Enough for a booklet built on rating-agency figures and trend; not enough for a calculator on their own balances.

**Blockers / sensitive (for Garvis to rule):**
1. CARE rates the same company CARE BB- / A4, ISSUER NOT COOPERATING (15 Apr 2025) while Infomerics rates IVR BBB / A3+ (28 Jul 2025). Acuite: B+ / A4 INC (13 Oct 2022). Do not print; do not contradict.
2. Corporate guarantee Rs 5.09 Cr to a group company (2025 PR p.3).
3. Gearing / net worth differ between vintages (table below).

Entity for every figure: Arwade Infrastructure Limited, STANDALONE (Infomerics "Analytical Approach: Standalone"), Rs crore, audited FY (Apr-Mar), Infomerics-classified. Computed numbers: `python -I src/calc.py` (output in src/calc-output.txt).

## SME IPO check (step 1)
NOT FOUND. Searched: "Arwade Infrastructure Limited SME IPO DRHP NSE Emerge"; `"Arwade Infrastructure" IPO OR draft red herring prospectus OR SME platform OR Emerge` (extended); "Arwade Infrastructure Limited prospectus" limited to nseindia / bseindia / sebi domains. Zero Arwade hits. Rating documents and the website never mention a listing. Limit: SEBI / NSE search pages are script-driven and were not queried directly, so this is "none found", not proof of none.

## Financials FY22-FY25 (standalone, Rs Cr)
| | FY22 | FY23 | FY24 | FY25 |
|---|---|---|---|---|
| Total operating income | 65.45 | 112.80 | 162.03 | 261.12 |
| EBITDA | 7.46 | 13.46 | 24.06 | 35.21 |
| PAT | 2.74 | 6.12 | 11.63 | 18.96 |
| EBITDA margin % (stated) | 11.40 | 11.93 | 14.85 | 13.48 |
| PAT margin % (stated) | 4.15 | 5.39 | 7.13 | 7.21 |
| Revenue growth % (computed) | n/a | 72.35 | 43.64 | 61.16 |
| Total debt | 16.78 | 37.18 | 38.80 (2024 PR) / 41.55 adj. (2025 PR) | 69.24 adj. |
| Net worth | TNW 26.92 / ATNW 27.84 | TNW 33.10 / ATNW 34.05 | 42.07 (2024 PR) / ATNW 42.02 (2025 PR) | ATNW 58.21 (table) or 60.66 (text) |
| Overall gearing x | 0.62 | 1.12 (2023 PR) / 1.09 (2024 PR) | 0.90 (2024 PR) / 0.92 text, 0.99 table (2025 PR) | 1.10 text / 1.19 table (adjusted) |
| Interest cover x | 3.18 | 3.92 | 4.06 | 4.33 |
| DSCR x | n/a | 1.37 | 1.95 | 2.19 |
| GCA | 4.61 | 8.86 | 14.96 | NOT FOUND |

Sources: FY22 and FY23 = Infomerics 17 May 2023 pp.2-5. Its table text layer is scrambled; values mapped from the narrative (p.2) and cross-checked to the FY23 column of the 3 Jul 2024 table (p.5, image-checked). FY24 = Infomerics 3 Jul 2024 p.5 (image-checked). FY25 = Infomerics 28 Jul 2025 p.5 (image-checked). Interest cover, DSCR, GCA: 2023 PR p.3, 2024 PR pp.3-4, 2025 PR p.3. FY23 gearing difference (1.123 vs 1.092) is the PR using TNW 33.10 vs ATNW 34.05 (calc-output.txt).
- 2025 PR text p.3 prints growth "~61.61%"; computed 61.16%. Print "about 61%".
- Stated margins differ slightly from computed ratios; print stated.
- Conflict inside one document (28 Jul 2025): net worth Rs 60.66 Cr (p.3 text) vs Rs 58.21 Cr (p.5 table). Never pair them; one basis per sentence.

## Debt, limits, utilisation (Infomerics 28 Jul 2025 pp.1, 4, 6-7; Annexure 2 image-checked)
- Rated limits Rs 152 Cr: long-term fund-based Rs 30 Cr (term loan 2.00 + cash credit 28.00); short-term bank guarantee Rs 122 Cr. Earlier: Rs 81 Cr (3 Jul 2024: 11 CC + 70 BG), Rs 61 Cr (17 May 2023: 11 + 50). Computed: BG = 80.3% of rated limits; BG limit = 0.47x FY25 revenue.
- Lenders (Annexure 2): HDFC Bank term loan 2.00, cash credit 3.00, bank guarantee 22.00; Bank of Maharashtra cash credit 25.00 (LC Rs 8.00 Cr sublimit), bank guarantee 100.00.
- Average fund-based utilisation: ~61% (12m to Mar 2023, 2023 PR p.4); ~70% cash credit (12m to Mar 2024, 2024 PR p.4); ~39.46% (12m to May 2025, 2025 PR p.4).
- Current ratio 1.52x at 31 Mar 2025 (2025 PR p.4). Corporate guarantee Rs 5.09 Cr at 31 Mar 2025 (p.3). FY23: mortgage loan Rs 9.80 Cr to buy office premises in Mumbai (2023 PR p.3).
- Interest rate: NOT FOUND (no rate in any rationale). BG utilisation: NOT FOUND. Split of actual debt fund vs non-fund: NOT FOUND.

## Working capital (only the years the agency printed)
- FY22: collection period 151 days; creditor days 83; GCA 271 days; WC intensity 0.31x. FY23: 72 days; 66 days; ~185 days; 0.27x (Infomerics 17 May 2023 p.3, text). Rupee balances of receivables, creditors, unbilled, retention, inventory: NOT FOUND. FY24 and FY25 days: NOT FOUND (agency stopped printing them).

## Order book, clients, concentration
- 21 Apr 2023: Rs 255.31 Cr = 2.26x FY23 revenue; one order Rs 135.29 Cr over 9 months; Talegaon Industrial Parks Private Limited = 53% of the book, Shree Dhootpapeshwar Limited ~11% (2023 PR pp.2-3). FY21 and FY22: top 5 clients ~60% of turnover (p.3).
- 30 Apr 2024: Rs 330.21 Cr = 2.04x FY24 (2024 PR pp.2-3). 25 Jun 2025: Rs 337.90 Cr = 1.29x FY25, "expected to be executed within a period of 12 months" (2025 PR p.3). That is 15 months old today; no later book exists in a primary source. Still live: NOT FOUND (no filing after 28 Jul 2025; no cancellation seen either).
- Clients named ("Some of the clients base include"): TATA Motors, Gharda Chemical, Whirlpool, Bhakti Vedanta, Reliance (2023 PR p.2; 2024 PR p.2). Dropped from the 2025 PR. Geography: Maharashtra, Karnataka, Delhi (2025 PR p.4).
- Website client page lists logos as images only; not machine-readable, not used.

## Leadership (company website, fetched 8 Oct 2026, footer "Copyright 2025")
- CMD: Nitin Arwade, "Chairman & Managing Director" (arwadeinfra.in/chairman-managing-director/). Rating text: "Mr. Nitin Arwade ... two more than two decades of experience" (2025 PR p.2; the 2024 PR said around 15 years: a stated-experience conflict, do not print a number).
- Board page: Subhash Arwade (Chairman Emeritus), Nitin Arwade, Soniya Arwade (Director), Kawal Jaggi and Umesh Shah (Independent Directors), Nitin Gupta (Director). Audit Committee: Nitin Arwade, Kawal Jaggi, Soniya Arwade.
- CFO: NOT FOUND. Checked: Executive Board, Board, Committees pages; all three Infomerics PRs (analyst names only); CARE PR. Finance staff on the Executive Board page, titles only, no dates: Dr. Balasaheb Darade (Senior DGM Accounts & Finance), Beroze Divecha (Deputy General Manager Finance). Also COO Prashant Sawant, Joint COO Rupali Kitte, GM Procurement Ravindra P. Agarkar. Not exhausted (CON-1 list): AGM notices (unlisted, none public), LinkedIn searches, award/conference speaker pages. Edition 2 reader: none in a primary source at CFO level.
- Registered office as printed: NOT FOUND in a rating document. Website Contact page prints only "Corporate Office (Pune): Arwade House, Erandwane, Pune 411004 (M S), India". The Prabhat Road flat address and the CIN are Secondary (dossier/gtm) only; MCA is paywalled and was not accessed. Incorporated 30 Nov 2009 (CARE 15 Apr 2025 p.1). Only e-mail on the site: info@arwadeinfra.com (not .in).
- Group: Arwade Steel Buildings Limited (PEB) and Arwade Industrial Developers Pvt Ltd (website Businesses menu); CARE names "Arwade Steel Limited" and "Arwade Developers Ltd". AIL itself does HVAC, fire-fighting, T&D, electrical and civil (Infomerics). PEB is a group company, not AIL.

## ERP
Website ERP page (arwadeinfra.in/erp/, fetched 8 Oct 2026): "our cutting-edge Enterprise Resource Planning (ERP) system ... stands as the backbone of seamless operations". Platform NOT named; no SAP / Oracle / Tally / Primavera string in 14 fetched pages (grep). Grade: Weak (marketing copy).
