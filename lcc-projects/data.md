# LCC Projects Limited: data.md (Step 1, 2026-10-12)

## VERDICT: FULL
Listed (BSE 544918, NSE LCCPROJECT), audited restated CONSOLIDATED FY26 balance sheet, notes, cash flow and a 3-year KPI certificate are all in the company's own Prospectus. All four day measures, 3 years of cash from operations and 3 year-ends of working capital and cash are Verified on ONE basis. Gaps: no single borrowing rate (a range only), retention not separable from deposits, no certification window, no vendor payment terms stated (except LC credit up to 90 days).

BASIS FOR EVERYTHING BELOW: Restated Consolidated Financial Information (Ind AS), LCC Projects Limited and subsidiaries/JVs, years ended 31 March, INR million unless stated (Rs Cr = million / 10). DAY-COUNT BASIS: closing balance / annual flow x 365. Source "PROSP" = Prospectus dated 11 Sep 2026, lccprojects.com/investor-pdf/ipo/prospectus-signed.pdf (printed page = PDF page minus 4). Auditor: Surana Maloo & Co (FRN 112171W), report dated 25 Aug 2026. Every number below was read from page images as well as the text layer.

## Entity
- Legal name: LCC Projects Limited (formerly LCC Projects Private Limited); CIN U45500GJ2017PLC100301. Partnership firm Laxmi Construction Co, Mar 2004; private company Dec 2017; public company Dec 2024 (CARE 8 Jul 2026, p3; PROSP fresh certificate 5 Dec 2024).
- Listed: yes. BSE 544918, NSE LCCPROJECT (Q1 FY27 board outcome letter, 5 Oct 2026). IPO: bid 9 to 11 Sep 2026, price Rs 146 cap, size Rs 4,271.41 mn (Rs 427.14 Cr) = fresh Rs 2,580.00 mn + OFS Rs 1,691.41 mn (PROSP cover p1). Fresh issue goes to equipment, debt prepayment, general purposes (PROSP p58).
- Business: EPC, irrigation and water supply (dams, barrages, canals, lift irrigation, multi-village schemes), plus metro rail and one mining MDO project. EPC 99.84% of FY26 revenue, O&M 0.16% (PROSP p185 PDF).
- Registered and corporate office: LCC Corporate House, B/S GTPL House, Sindhu Bhavan Road, Bodakdev, Ahmedabad 380054, Gujarat (PROSP cover).
- Namesakes ruled out: Leena Construction Co (CARE, different entity), LCC Engineering Private Limited (subsidiary, not the issuer), Doms Delicious (consolidated subsidiary).

## Headline P&L (PROSP restated consolidated P&L printed p261; KPI certificate Surana Maloo 25 Aug 2026)
| Rs mn | FY26 | FY25 | FY24 |
|---|---|---|---|
| Revenue from operations | 36,002.52 | 29,182.94 | 24,389.12 |
| EBITDA | 5,198.97 | 4,010.35 | 2,413.65 |
| PAT | 2,864.41 | 2,236.25 | 1,219.97 |
| Order book (31 Mar) | 79,531.81 | 78,821.71 | 62,689.68 |
| Total debt | 8,606.54 | 7,467.66 | 4,216.43 |
| Net worth | 8,884.11 | 6,049.89 | 3,828.25 |
FY26 revenue Rs 3,600.25 Cr; order book Rs 7,953.18 Cr = 2.21x FY26 revenue (PROSP p180 PDF). 103 projects in the order book at 31 Mar 2026 (PROSP p37 PDF).

## BALANCES USED (PROSP restated consolidated balance sheet, printed p260; notes p290, p291, p294)
| Rs mn at 31 Mar | FY26 | FY25 | FY24 |
|---|---|---|---|
| Trade receivables (net of ECL 56.38 / 61.65 / 35.17) | 4,558.21 | 2,501.66 | 1,566.15 |
| Unbilled revenue (contract asset), Note 15 | 5,348.28 | 4,617.36 | 3,246.20 |
| Inventories (construction material 2,472.77 / 2,006.12 / 1,348.52) | 2,479.26 | 2,013.46 | 1,356.17 |
| Trade payables (Note 22) | 2,605.39 | 1,031.36 | 1,717.62 |
| Total current assets | 20,941.30 | 14,015.94 | 8,484.36 |
| Total current liabilities | 14,347.82 | 9,849.05 | 6,413.89 |
| Cash and cash equivalents | 1,721.64 | 1,028.45 | 218.94 |
| Bank balances other than cash equivalents (FDs under 12 mo, lien-marked) | 2,884.55 | 2,090.23 | 1,091.13 |
Flows (P&L, printed p261 and Note 28 p295): revenue as above; Consumption of construction material 13,848.27 / 13,458.29 / 13,882.17; Purchases of construction material 14,314.92 / 14,115.89 / 14,425.41; Construction expenses (all, goods + services + subcontract) 29,467.21 / 23,992.02 / 20,699.46.

## DAYS (Crestline's arithmetic on the published accounts; closing balance, 365 days, consolidated, each on its own stated base)
Script: `scratchpad\LC-1\days.py` (re-runnable). Formula = balance / base x 365.
| Days | FY26 | FY25 | FY24 | Formula (FY26) |
|---|---|---|---|---|
| DSO, debtor days | 46.2 | 31.3 | 23.4 | 4,558.21 / 36,002.52 x 365 |
| Contract-asset days (unbilled) | 54.2 | 57.8 | 48.6 | 5,348.28 / 36,002.52 x 365 |
| DIO, stock days (on construction material consumed) | 65.3 | 54.6 | 35.7 | 2,479.26 / 13,848.27 x 365 |
| DPO, vendor credit (on total construction expenses, goods + services) | 32.3 | 15.7 | 30.3 | 2,605.39 / 29,467.21 x 365 |
| Cash cycle DIO + CAD + DSO - DPO | 133.4 | | | 65.3 + 54.2 + 46.2 - 32.3 |
- DPO base choice (flag for Step 2): Note 22.1 says payables are for "goods purchased and services availed", so the wider base (construction expenses) is used. Alternative on material purchases only: 66.4 / 26.7 / 43.5 days. Pick ONE and print it; do not show both.
- Company's own stated figure: "Working capital days" 67 / 52 / 31 (current assets less current liabilities, divided by revenue x 365). PROSP printed p32, Rs 6,593.48 / 4,166.92 / 2,070.47 mn. Verified (my check: 6,593.48 / 36,002.52 x 365 = 66.8). This is a different measure from the four legs; never add it to them.
- CARE's gross current asset days (215 FY26 prov., 184 FY25) are STANDALONE and provisional; Crestline computes consolidated current assets / revenue = 212.3. Different basis: do not pair.
- Value of a day (consolidated revenue): Rs 36,002.52 mn / 365 = Rs 98.64 mn = Rs 9.86 Cr per day (arithmetic).

## CASH SIDE
Cash flow statement (restated consolidated, printed p262; PDF p266). Rs mn:
| | FY26 | FY25 | FY24 |
|---|---|---|---|
| Operating profit before WC changes | 4,817.31 | 3,810.87 | 2,306.25 |
| Cash generated from operations (before tax) | 2,447.40 | 1,049.40 | 770.67 |
| Direct taxes paid | (862.99) | (813.13) | (477.18) |
| Net cash from operating activities | 1,584.41 | 236.27 | 293.50 |
| Net cash used in investing | (1,068.42) | (1,951.54) | (1,294.89) |
| Net cash from financing | 177.21 | 2,524.77 | 834.53 |
FY26 working-capital movement lines: receivables (2,051.28), financial and other assets (3,138.08), inventories (465.80), financial liabilities and payables +3,285.25.
Working capital (current assets less current liabilities): Rs 6,593.48 / 4,166.92 / 2,070.47 mn (company's own table, printed p32).
Borrowings for working capital (printed p32): banks 6,717.96 + NBFCs 479.68 = Rs 7,197.64 mn at 31 Mar 2026 (6,335.69 FY25; 3,507.66 FY24). Total borrowings 8,606.54; floating-rate share 83.68% (PROSP p48 printed).
Limit utilisation (CARE, 8 Jul 2026, p3): fund-based 50 to 60%, non-fund-based about 70%, 12 months to 30 Jun 2026; unencumbered cash and bank Rs 62 Cr at 31 Mar 2026. STANDALONE agency figure, not consolidated.
INTEREST RATE: NOT a single rate. "As of July 31, 2026, the interest rates for our borrowings ranged from 7.05% to 10.70% per annum" (PROSP printed p48). Chart 2 carry cost is therefore NOT available; use the "No clock on these" panel. Finance cost FY26 Rs 961.70 mn is an expense, not a disclosed rate; never print a derived rate as theirs.

## CLIENT SIDE
- Mix, revenue FY26 (PROSP printed p23): government departments Rs 32,166.17 mn = 89.34%; private Rs 3,836.35 mn = 10.66% (FY25 80.71 / 19.29; FY24 86.75 / 13.25). Note 36 (printed p308) gives another cut: revenue from government-promoted agencies 90.59% FY26, 82.34% FY25, 86.75% FY24; private corporates 9.41 / 17.66 / 13.25. Two definitions in one document, listed under Conflicts.
- Order book mix 31 Mar 2026: government Rs 62,885.50 mn 79.07%, private Rs 16,646.31 mn 20.93% (printed p23).
- Top 10 customers: 72.30% of FY26 revenue (Rs 26,028.44 mn), 84.10% FY25, 82.76% FY24. Top 3: 43.32% FY26 (56.31% FY25, 64.21% FY24). FY26 named: Executive Engineer N D Division 16, Kukshi, Dhar MP 20.01%; Madhya Pradesh Jal Nigam Maryadit 12.77%; Water Resources Investigation Division Palanpur / Drainage Division Gandhinagar 10.54%; Executive Engineer Sauniyojana Division Rajkot 6.75%; Indira Gandhi Nahar Project Rajasthan 3.80%; SSNNL 3.72%; Ken-Betwa Link Nahar Nirman Khand-2 Banda 3.24% (printed p21).
- Revenue by state FY26: Gujarat 39.64%, Madhya Pradesh 36.58%, Rajasthan 10.17%, Jharkhand 4.33% (printed p188 and p25).
- Credit period: "mobilisation advance, monthly progress payments with a credit period ranging from 45 to 90 days and certain retention money to be released at the end of the project; in some cases retentions are substituted with bank/corporate guarantees" (Note 36, printed p308). Retention or bank guarantee typically 5 to 10% of contract value, released after the defect liability period (PROSP business section).
- Receivable ageing 31 Mar 2026 (Note 11.4, undisputed, considered good): under 6 months Rs 4,528.51 mn, 6 months to 1 year Rs 86.08 mn, nothing older; gross Rs 4,614.59 mn less ECL 56.38. FY25: 2,563.01 / 0.30.
- Contract assets: unbilled revenue Rs 5,348.28 mn at 31 Mar 2026 (4,617.36 FY25; 3,246.20 FY24; Note 15, printed p291). CARE cites "year-end billing and ongoing trial runs for WSP" as why debtors and unbilled revenue rose (CARE 8 Jul 2026 p1).
- Retention held BY the client (asset): NOT FOUND separately. "Security deposits and retention money" is one line: current Rs 2,833.09 mn (FY25 830.63; FY24 342.36) plus non-current Rs 529.38 mn (810.23; 485.75) = Rs 3,362.47 mn at 31 Mar 2026, mixed with security deposits (printed p290, p101 PDF). Interest income on retention monies Rs 45.09 mn FY26 (cash flow). Not a retention-only balance; do not print it as retention.
- Certification delay: certification window NOT FOUND in the filings. Delays named: "customer approved delays and modification in scope" (PROSP p37 PDF).
- Mobilisation advances from customers Rs 300.35 mn (905.83 FY25; 130.82 FY24) (Note 24, printed p294).

## VENDOR SIDE
- Trade payables Rs 2,605.39 mn: MSME Rs 479.20 mn; buyers' credit / suppliers' credit (Letter of Credit) Rs 986.03 mn; others Rs 1,140.16 mn (Note 22). All but 11.40 mn under 1 year (Note 22.6).
- Vendor terms: buyers' and suppliers' credit "largely repayable up to 90 days from the date of draw down" (Note 22.4, printed p294). Other vendor payment terms: NOT FOUND. MSME days: NOT FOUND (no interest due, nil, per Note 22.3).
- Retention and deposits HELD from vendors (liability): current Rs 2,699.14 mn + non-current Rs 531.57 mn = Rs 3,230.71 mn (Notes 19, 23). Mixed with deposits, so release basis NOT FOUND.
- Vendor advances: advance to suppliers Rs 194.18 mn (203.74; 186.81) (Note 15).
- Supplier concentration (cost of construction material bought): Welspun Corp 35.21% FY26, Welspun DI Pipes 6.99%; top 10 = 70.87% (Rs 10,144.71 mn); FY25 top 10 72.73% (printed p36).
- Subcontract: works and labour contracts Rs 13,511.74 mn FY26 (Rs 8,679.08 mn FY25; 5,477.31 FY24) = 37.53% of consolidated revenue by Crestline's arithmetic (the prospectus prints 37.63%, see Conflicts); machinery hire Rs 582.43 mn.

## PROJECT SIDE
- 103 projects in the order book; bids FY26 170, awarded 23 (Rs 33,449.84 mn); FY25 19 (Rs 42,578.28 mn); FY24 19. 38 projects completed in time over FY24 to FY26; 80 completed in total (printed p26, p31, p120).
- Top 3 projects: Sondwa Lift Micro Irrigation Rs 15,349.52 mn; Sidhi Bansagar Multi-Village Rs 15,251.44 mn; Gandhi Sagar 1 Multi-Village Rs 11,539.00 mn (printed p181).
- Execution period 12 to 36 months (one coal project 7 years), about 42% of the order book at an early stage, order book 19% MP, 11% Gujarat, 7% Rajasthan, 5% Jharkhand at 28 Feb 2026 (CARE 8 Jul 2026 p2). Note CARE order book Rs 9,445 Cr at 28 Feb 2026 is a different date and basis from Rs 7,953.18 Cr at 31 Mar 2026; do not mix.
- JVs consolidated (CARE Annex 6): LCC Sai KSIPLJV, LCC MCL JV, LCC VKMCPL JV, UTIPL-LCC (proportionate); subsidiaries Doms Delicious, LCC Minechem, LCC Engineering.

## RATING (agency's own PDF, careratings.com)
CARE Ratings press release 8 Jul 2026 (file 202607140716): long-term CC Rs 384 Cr CARE A; Stable; LT/ST bank guarantee Rs 1,662 Cr CARE A; Stable / A2+; ST Rs 20 Cr CARE A2+; Reaffirmed. Total Rs 2,066 Cr. Rated STANDALONE results, consolidated analytical approach. Earlier: 10 Oct 2025 reaffirmed A; 8 Oct 2024 upgraded to A from A-. Matches the Prospectus rating table (3,840.00 / 200.00 mn). No later CARE file found through search of careratings.com; no other agency rationale found (ICRA appears only as the industry-report author).

## ERP
Prospectus: "implemented ERP infrastructure across a significant portion of our operations ... and are in the process of implementing SAP systems in our workstreams" (printed p192 / PDF p196); SAP server/network is an intangible asset (Note 5). Not found: "S/4HANA", "RISE", "Highbar", "TechKranti". Dossier ERP claim is UNSUPPORTED beyond "SAP being implemented". Never print S/4HANA RISE.

## PEOPLE (PROSP, KMP and Senior Management, printed p247 to p248; balance sheet signature block printed p260)
- Arjan Suja Rabari: Chairman and Managing Director.
- Laljibhai Arjanbhai Ahir: Managing Director.
- Artiba Narpatsinh Jadeja: Chief Financial Officer (since 18 Dec 2024; internal auditor from 1 Apr 2016; ICAI member; FY26 remuneration Rs 2.79 mn). Female ("She").
- Gayatri Desai: Company Secretary and Compliance Officer.
- Manharbhai Kurjibhai Jadav: Vice President. G Radhakrishna Murthy: Vice President - Technical. Shivalingaiah Lingegowda: Senior General Manager - Projects. Amol Atmaram Shinde: Chief Operating Officer - Civil. Jaydeep Chiragbhai Sutaria: GM - Tender. A separate finance head or commercial head beyond the CFO: NOT FOUND in what was read.
- Dossier titles "Chairman & Managing Director" and "Managing Director" are correct. Dossier called the CFO "PRIMARY WC buyer": that is an opinion, not a filing.

## Dossier check
| Dossier claim | Result |
|---|---|
| Revenue 2,438.91 / 2,918.29 / 3,600.25 Cr | Right (consolidated restated, 24,389.12 / 29,182.94 / 36,002.52 mn) |
| Order book 6,268.97 / 7,882.17 / 7,953.18 Cr, 103 projects | Right |
| IPO about Rs 427 Cr, listed 17 Sep 2026, band 139 to 146 | Size and price Right; 17 Sep listing date not read from a primary file (exchange listing notice not on the site pages read) |
| 11 states | Prospectus says 12 states (printed p176/p181); Stale |
| FY26 PAT "in RHP" | Found: Rs 2,864.41 mn |
| SAP S/4HANA RISE via Highbar, "CONFIRMED" | Unsupported (only "implementing SAP") |
| CFO, CS, MD titles | Right |
| "Debtor days in RHP" | RHP states no debtor days; only working capital days 67 / 52 / 31 |
| Entity, CIN, address, 2004 / 2017 | Right |

## Conflicts between sources
1. FY26 revenue: Rs 3,600.25 Cr (PROSP, restated consolidated, audited) against Rs 3,469 Cr (CARE, standalone, unaudited provisional). Different perimeter. USE consolidated only; never pair either with the other's days.
2. GCA days 215 (CARE standalone) against 212.3 (Crestline, consolidated). Not comparable; use neither beside the four legs.
3. Government share of FY26 revenue: 89.34% (printed p23) against 90.59% (Note 36, printed p308). Print one with its page, never both.
4. Subcontract share of revenue printed as 37.63% (p33 PDF) but 13,511.74 / 36,002.52 = 37.53%. Print the rupees.
5. Order book Rs 9,445 Cr (28 Feb 2026, CARE) against Rs 7,953.18 Cr (31 Mar 2026, PROSP): different dates.
6. Aggregator FY26 revenue 3,639.45 Cr seen in search results (total income 36,394.54 mn = revenue + other income). Never a source; revenue from operations is 3,600.25 Cr.

## CHART DATA and LEVER DATA
| Item | Status |
|---|---|
| DIO, DSO, DPO, contract-asset days, one basis (consolidated FY26, 365 days) | Verified balances; days are Crestline's arithmetic |
| 3+ years of cash from operations | Verified (FY24 to FY26) |
| 3 year-ends of working capital and cash | Verified |
| Single borrowing rate | NOT FOUND (range 7.05% to 10.70%); Rs 7,197.64 mn working-capital borrowing |
| Stock cost base | Verified: material consumed 13,848.27 mn (purchases 14,314.92) |
| Vendor payment terms | LC credit up to 90 days only; otherwise NOT FOUND |
| Client payment term | Verified 45 to 90 days; certification window NOT FOUND |
| Retention balance and release basis | Balance NOT FOUND separately (mixed with deposits); release basis Verified (end of project / defect liability period, 5 to 10%) |
| Contract assets and unbilled revenue | Verified Rs 5,348.28 mn |

Catalogue charts supported:
1. The cash cycle: YES, all four legs, FY26 consolidated.
2. Pressure on the cycle: second panel ONLY ("No clock on these"; ranked by size: unbilled revenue 5,348.28; receivables 4,558.21; payables 2,605.39; stock 2,479.26; mobilisation advances 300.35). Retention is not a clean figure, leave it out.
3. Cash movement: ANNUAL "Cash from operations by year" FY24 to FY26, no monthly bars, no peak funding need.
4. How these four move together: YES, working capital, cash cycle, cash in hand over FY24 to FY26 (cycle legs per the days table).
5. Process map: Published anchor = DSO 46.2 and contract-asset days 54.2 are Crestline's arithmetic, not the company's stated days; Step 2 must label them "Crestline's arithmetic on the published accounts" and tag the stage values accordingly.

Priceable levers (calc inputs): DSO leg at Rs 9.86 Cr per day; contract-asset leg at the same revenue base; DIO leg on materials consumed (Rs 13,848.27 mn / 365 = Rs 3.79 Cr per day); vendor credit never raised past terms (rule 1). Not priceable: retention, interest saving (no single rate).

## Not found / still open
Exchange listing-notice date (17 Sep 2026 unconfirmed from a primary file); certification window; retention-only balance; vendor terms beyond LC; finance head beyond the CFO; a single borrowing rate; contract-by-contract receivable ageing by client.
