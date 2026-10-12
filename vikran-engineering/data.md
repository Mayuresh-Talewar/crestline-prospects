# Vikran Engineering Limited: data.md (VK-1, researched 2026-10-12)

## VERDICT: FULL
Listed (NSE VIKRAN / BSE 544496, debut 3 Sep 2025). Audited standalone FY26 annual report is filed (accounts approved 22 May 2026; revised AR filed on NSE 31 Aug 2026). Four year-ends of balances and cash flow on ONE basis (standalone, one auditor: Walker Chandiok & Co LLP). Every day measure computes on the company's own stated cost bases. Gaps: no single disclosed working-capital borrowing rate, ERP not stated, vendor payment terms not stated. Sensitive items are in sensitive-garvis.md only.

BASIS FOR EVERY DAY FIGURE: standalone, INR Cr, year-end net balance divided by that year's flow x 365. Revenue = Revenue from operations. Stock and payables base = "Cost of materials consumed + Project related expense", the company's own denominator for its inventory and payables turnover ratios (AR 2025-26 Note 52, PDF p116). Label: "Crestline's arithmetic on the published accounts". Calc script: scratch calc.py (inputs below; rerun from this file).

Vintage: FY23, FY24, FY25 = Prospectus (restated financial information, examination report dated 18 Jul 2025, INR million, PDF p306-313). FY26 = Annual Report 2025-26 (audited, 22 May 2026, INR lakh, PDF p82-84 and notes). FY25 appears in both and agrees (revenue 9,158.47 mn = 91,585 lakh; trade receivables 6,343.29 mn = 63,432 lakh; operating cash flow -1,290.86 mn vs -12,907 lakh). The AR's FY25 column includes amalgamation-scheme adjustments (Note 55); no difference at the Cr level shown.

## Dossier check
| Dossier claim | Result |
|---|---|
| FY25 is latest year | STALE. FY26 filed. Re-based to FY26 |
| FY25 revenue 915.85, PAT 77.82 | RIGHT (Prospectus P&L; AR26 FY25 column 91,585 / 7,781 lakh) |
| FY25 operating cash flow -147.79 Cr (FY24 -57.81) | CARE's figure, differs from audited. Audited standalone: -129.09 (FY25), -66.48 (FY24). Print audited only |
| GCA 517 days FY25 (430 FY24) | CARE-computed (CARE PR 28 Jan 2026). Not printed beside audited days |
| Order book 2,412 / 4,987 / 5,737 | 2,412 = CARE, ~mid-2025. Investor deck: 5,206.0 Cr at 31 Mar 2026, ~5,737 Cr at 22 May 2026. 4,987 not checked (news) |
| Registered office 401 Odyssey IT Park | WRONG. Registered office: B-2 & B-3, B Wing, 3rd Floor, Ashar IT Park, Road No. 16-Z, Wagle Industrial Estate, Thane, Maharashtra 400604 (AR26 corporate information). Odyssey IT Park is a listed office address in the AR |
| CFO Ashish Bahety | RIGHT: "Chief Financial Officer" (AR26 p29; signs the accounts) |
| Rating BB-/A4 INC, withdrawn 28 Jan 2026 | RIGHT (CARE PR 28 Jan 2026) |
| ERP | NOT FOUND (AR says only "an accounting software operated by a third-party software service provider") |

## Entity
Vikran Engineering Limited (formerly Vikran Engineering & Exim Private Limited; earlier Ratnagiri Financial Advisory Pvt Ltd). CIN L93000MH2008PLC272209, incorporated 2008. Business: EPC for power T&D, solar, water, railway; one reportable segment (AR Note 44). CARE's PR misspells it "Vikrant Engineering Limited" once; same entity (promoter Rakesh Markhedkar, 2008). Namesakes ruled out: Vikrant Engineering and any other "Vikran" entity are different. Subsidiary NOPL Solar Projects Pvt Ltd consolidated from 22 Jan 2026; STANDALONE is used throughout. Consolidated FY26 revenue 1,249.3 Cr (investor deck, May 2026) equals standalone 1,249.31 at Cr level.

## P&L (standalone, INR Cr)
| | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|
| Revenue from operations | 524.31 | 785.95 | 915.85 | 1,249.31 |
| PAT | 42.84 | 74.83 | 77.81 | 91.70 |
| EBITDA excl other income (computed) | not computed | not computed | 160.23 | 175.13 |
Sources: Prospectus p307; AR26 standalone P&L (PDF p83). EBITDA computed = revenue less materials, project, employee and other expenses; FY26 175 and FY25 160 agree with the May 2026 investor deck. Cost of materials 482.75, project-related expense 435.41, finance costs 66.44 (FY26).

## Year-end balances (standalone, INR Cr, net of loss allowance)
| | 31 Mar 2023 | 31 Mar 2024 | 31 Mar 2025 | 31 Mar 2026 |
|---|---|---|---|---|
| Trade receivables (current + non-current) | 369.91 | 463.90 | 634.33 | 1,042.33 |
| Contract assets (unbilled work in progress) | 194.64 | 289.16 | 466.37 | 863.94 |
| Inventories | 35.66 | 50.72 | 59.94 | 79.92 |
| Trade payables (MSE + others) | 293.21 | 296.92 | 477.62 | 788.42 |
| Borrowings (current + non-current) | 154.93 | 183.39 | 272.95 | 292.27 |
| Cash and cash equivalents | 0.12 | 0.08 | 2.50 | 33.26 |
| Other bank balances (deposits) | 14.80 | 49.87 | 64.57 | 186.46 |
| Cash from operating activities (after tax) | +5.55 | -66.48 | -129.09 | -436.99 |
Sources: Prospectus PDF p311, p313; AR26 PDF p82, p83 (cash flow), p84.
FY26 cash from operations stated: "Net cash used in operating activities [A] (43,699) lakh". Image-checked on the page render and the text layer.

## Days, one basis (Crestline's arithmetic on the published accounts; year-end balance / annual flow x 365)
| | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|
| DSO (trade receivables / revenue) | 257.5 | 215.4 | 252.8 | 304.5 |
| Contract-asset days (contract assets / revenue) | 135.5 | 134.3 | 185.9 | 252.4 |
| DIO (inventory / (materials + project expense)) | 35.9 | 33.5 | 34.0 | 31.8 |
| DPO (trade payables / (materials + project expense)) | 295.1 | 196.1 | 270.7 | 313.4 |
| DIO + DSO + contract-asset days - DPO | 133.8 | 187.1 | 202.0 | 275.3 |
Cost base (INR Cr): FY23 362.66, FY24 552.73, FY25 644.10, FY26 918.16.
Operating working capital (receivables + contract assets + inventory - payables): 307.0, 506.9, 683.0, 1,197.8.
Company's own average-balance turnover (AR26 Note 52, FY26): trade receivable turnover 1.49x, trade payables 1.45x, inventory 13.13x; these give about 245, 252 and 28 days on averages. Not mixed with the closing-balance days above; printed only as "company ratio, average balances".
Caution for DPO: FY26 trade payables include unbilled payables of 312.64 Cr (not-due bucket, AR26 note 22 ageing, PDF p103). DPO is never "better when higher".
One value per day (FY26): revenue per day 3.42 Cr. 10 days = 34.2 Cr, 30 days = 102.7 Cr on receivables or on contract assets (calc to confirm).

## CLIENT side
- Payment terms (contract): "45 to 60 days except retention monies which are due after the completion of the project as per the terms of contract. However, actual realisation may vary." (AR26 Note 50 g, PDF p115). VERIFIED.
- Retention held by clients inside current trade receivables: 204.88 Cr (31 Mar 2025: 165.45). 19.7% of FY26 net trade receivables (1,042.33). Release basis: after project completion per contract (same note). VERIFIED. AR26 Note 14 b, PDF p95.
- Receivable ageing, current gross 1,047.10 Cr (31 Mar 2026; excl. ECL): not due 756.04; under 6 months overdue 176.81; 6-12 months 56.92; 1-2 years 35.24; 2-3 years 7.54; over 3 years 14.55. Overdue total 291.06 (27.8%). Non-current disputed 29.29 Cr (one Rajasthan customer, project short-closed Apr 2023, matter in Jaipur commercial court; see sensitive file). AR26 Note 14 ageing, PDF p96.
- Loss allowance on receivables 34.03 Cr (current); on contract assets 4.19 Cr. Contract assets gross 868.13 Cr (net 863.94).
- Advance from customers 85.74 Cr; contract liability 38.40 Cr (31 Mar 2026). AR26 Note 24, PDF p103.
- Concentration FY26: revenue from top five customers 1,040.48 Cr of 1,247.94 Cr revenue from services (83.4%); one customer above 10%: 697.64 Cr (55.9%). FY25: top five 636.85 Cr of 911.82 Cr; three customers above 10%. AR26 Note 44 b, c, PDF p111-112. Customer names not published in these notes.
- Order book client mix (investor deck, May 2026, slide "Order Book", PDF p10): Private sector 51%, PSUs 17%, Government 31% (rounding: slide totals 99%). CONFLICT: Chairman and MD letter in AR26 says order book mix "58% private sector (primarily solar IPPs), 21% PSUs and 21% Government" (date of mix not stated). Not reconciled: print neither without both labels, or print the deck figure with its date.
- Management on receivables (Q4 FY26 call, 1 Jun 2026 transcript, Ashish Bahety, CFO): "because of the last quarter ... Q4 ... we have done lot of procurements and work done in Q4 ... the creditors are slightly higher, same with debtors as well" (p18 of 20). Also the call names Jal Jeevan Mission receivables from government water projects; 25-30% of a ~1,000 Cr receivable pool was mentioned in an answer (not re-measured here; do not print).
- Certification delays the source names: NOT FOUND as a figure. AR26 Note 50 (PDF p115) says: "Increase in contract assets is primarily due to higher revenue recognition as compared to progress billing during the year in certain projects". Gross contract assets rose 401.29 Cr in FY26 (46,684 to 86,813 lakh).

## VENDOR side
- Trade payables 788.42 Cr (FY26): MSE 54.89 + others 733.53. FY25 477.62. "Trade payables are generally non-interest bearing and are settled within normal operating cycle" (AR26 Note 22). Vendor payment terms in days: NOT FOUND.
- Not-due payables 671.69 Cr of 788.42; includes unbilled 312.64 Cr. Overdue by bucket: under 1 year 87.21; 1-2 years 16.20; 2-3 years 8.97; over 3 years 4.35 (AR26 PDF p103). 
- MSME dues: principal 51.51 Cr plus interest due 3.38 Cr unpaid at 31 Mar 2026 (FY25 principal 86.92, interest 4.89). Interest due and payable for delayed payment (paid late) 1.43 Cr in FY26. MSME payment days: NOT FOUND. AR26 PDF p102.
- Retention held back from vendors: 89.95 Cr (FY25 72.40), payable on completion of a milestone, completion of the contract or after a specified period. AR26 Note 22 b.
- Advances to suppliers and subcontractors: 36.59 Cr (FY25 11.93). AR26 Note 12, PDF p95.
- Supplier bills discounted (supplier finance): 14.24 Cr at 31 Mar 2026 (unsecured, 11.00% to 13.00% p.a.); the secured one (12.50% to 13.75%) was fully repaid in FY26. AR26 Note 20.
- Top supplier concentration (Prospectus vintage, raw materials only, FY25): top 1 = 5.06%, top 5 = 19.25%, top 10 = 32.24% of raw material procured (Prospectus PDF p77, risk factors). FY26: NOT FOUND. Subcontract share: NOT FOUND (project-related expense 435.41 Cr in FY26 is not split).

## PROJECT side
- Order book: 5,206.0 Cr at 31 Mar 2026 (Solar 2,825.1 / 54.2%; Power T&D 1,705.8 / 32.8%; Water 634.4 / 12.2%; Railway 40.7 / 0.8%) vs 2,044.3 Cr at 31 Mar 2025 (T&D 1,237.4; Water 764.6; Railway 42.3). ~5,737 Cr at 22 May 2026 (49% solar, 39% T&D, 11% water, 1% railway). Investor deck May 2026, PDF p10. Also "executing an additional solar EPC order of ~1,400 Cr with NOPL Solar" (footnote). 
- Projects and states: "45 completed projects across 14 states; currently active in 16 states with 190+ project and store locations" (deck, PDF p14). Order count and top-10 share at mid-2025: 44 orders, top 10 = 71.8% of unexecuted book; state split UP 29.02%, MP 22.63%, Karnataka 11.67%, AP 11.07% (CARE PR 28 Jan 2026, at the time of its 2 Jul 2025 action; do not print beside FY26 figures).
- Largest orders, execution period, JV share: NOT FOUND in a figure the team has checked. Solar contract named in AR26: NTPC Renewable Energy end-client work; Rs 2,035 Cr contract from NOPL Solar for 600 MW AC (AR26 text). Treat as "named in AR, not re-measured".

## CASH side
- Cash from operations (audited, standalone): +5.55 (FY23), -66.48 (FY24), -129.09 (FY25), -436.99 (FY26) INR Cr. Four years, one basis. Supports "Cash movement" annual chart.
- Working-capital cycle as the company states it: NOT FOUND (no stated WC-days). Management guided to positive operating cash flow around FY28 (Q4 FY26 call transcript, 1 Jun 2026). Page not re-opened as an image; use words only if cleared by Garvis.
- Borrowing for working capital: cash credit 58.64 Cr, working-capital loans 113.34 Cr (banks 102.40 + financial institution 10.94), supplier bills discounted 14.24 Cr; total borrowings 292.27 Cr at 31 Mar 2026. Consortium WC limit sanctioned 179.00 Cr (INR 17,900 lakh; CARO bank-return table, AR26 PDF p79). Limit utilisation in FY26: NOT FOUND (CARE 97.54% fund-based is for the 12 months to June 2025 only, "best available information").
- IPO: fresh issue net proceeds 670.97 Cr received; 541.00 Cr for working capital and 129.97 Cr general corporate purposes; "Utilisation up to 31 March 2026: fully utilised, unutilised nil" (AR26 PDF p99).
- Single disclosed borrowing rate: NONE for working capital. Cash credit 10.00% to 13.00% p.a. (MCLR-linked), WC loans from banks 10.00% to 10.25%, from financial institutions 18.50%, supplier bills 11.00% to 13.00%. One fixed single rate exists on one instrument only: term loan from a financial institution, 48.83 Cr, 11.50% p.a. fixed (AR26 Note 20). It is not a working-capital rate and must not be applied to the 1,042 Cr receivable. Use the app's "No clock on these · ranked by size" panel for chart 2.

## LEVER DATA (same basis as the days)
| Item | Value | Status |
|---|---|---|
| Stock cost base | Materials consumed 482.75 Cr; company's inventory base (materials + project expense) 918.16 Cr | Verified (AR26 P&L, Note 52) |
| Vendor payment terms | Not stated ("normal operating cycle") | NOT FOUND |
| Client payment term / certification window | 45 to 60 days; retention after completion. Certification window: NOT FOUND | Payment term Verified |
| Retention balance and release basis | 204.88 Cr held by clients; 89.95 Cr held from vendors; client retention due after project completion | Verified |
| Contract assets / unbilled | 863.94 Cr net (868.13 gross); 86,813 lakh note 17 | Verified |
| Receivable at stated term | The company's term is 45 to 60 days; the closing-balance DSO is 304.5 days (note retention inside receivables) | Computed |

## Charts supported (CHART-CATALOGUE)
1. The cash cycle: YES. All four legs, four years, FY26 latest (DIO 31.8, contract-asset 252.4, DSO 304.5, DPO 313.4).
2. Pressure on the cycle: YES, second panel only ("No clock on these"). No single working-capital rate. Rank by size: trade receivables 1,042.33; contract assets 863.94; trade payables 788.42; retention in receivables 204.88 (inside receivables, not additive); advances (customer 85.74, to suppliers 36.59).
3. Cash movement, annual from the cash flow statement: YES (four years).
4. How these four move together: YES. Working capital (operating), cycle, and cash in hand (cash + other bank balances 14.9 / 50.0 / 67.1 / 219.7), four year-ends. Surplus line: not computed.
5. Process map: YES with the stage script: DSO 304.5, contract-asset days 252.4 anchors (one basis). Retention release stays "Not public".
Priceable levers: DSO, contract-asset days, DPO is NOT a lever to push up, DIO (small, 79.92 Cr), retention release (204.88 Cr). Interest: none unless a rate cleared per above.

## Leaders (exact titles, AR 2025-26 board and management pages)
Rakesh Ashok Markhedkar, Chairman & Managing Director (promoter). Ashish Bahety, Chief Financial Officer (21 years in finance and commercial; with the company over 4 years). Avinash Ashok Markhedkar, Whole-Time Director. Nakul Markhedkar, Whole-Time Director (also served as Procurement Director earlier). Dibyendu Ray, Chief Operating Officer (joined May 2024). Kanchan Markhedkar, Chief Human Resource Officer. Ravindra Ved, Senior General Manager, Commercial (leads Commercial & Insurance Department; with the company since 1 Jun 2017). Vaibhav Kapoor, General Manager, Contracts and Legal. Jatashanker Singh, General Manager, Execution. Kajal Rakholiya (Kajal Sagar Rakholiya), Company Secretary and Compliance Officer. Direct finance-desk head below CFO: NOT FOUND.

## Conflicts between sources
1. Operating cash flow FY25/FY24: CARE -147.79/-57.81 vs audited -129.09/-66.48. Use audited.
2. Order-book client mix: deck 51/17/31 vs chairman's letter 58/21/21. Unreconciled.
3. Registered office: dossier Odyssey IT Park vs AR Ashar IT Park.
4. PAT FY24: 74.85 (CARE) vs 74.83 (Prospectus). Use prospectus.
5. The chairman's letter is AR26 PDF p14; the Note 52 ratios are PDF p115-116.

## NOT FOUND
ERP; vendor payment terms in days; MSME days; certification window; single working-capital rate; limit utilisation FY26; top supplier concentration FY26; subcontract share; largest named orders and execution period; JV share; company-stated working-capital cycle; direct finance-desk head; official logo (not downloaded).

## Documents used
Annual Report 2025-26 (NSE annual_reports AR_30853_VIKRAN_2025_2026, filed 31 Aug 2026, revised); Prospectus (company site, Aug 2025); Investor presentation Q4 FY26 (NSE, 25 May 2026); Q4 FY26 call transcript (company site, 1 Jun 2026); CARE Ratings press release 28 Jan 2026; NSE board-meeting outcome 11 Aug 2026 (Q1 FY27 results, not used for figures).
