# Glass Wall Systems (India) Limited: data (GW-1)

**VERDICT: FULL.** Listed mainboard company (NSE: GLASSWALL, BSE: 544913, listed 16 Sep 2026). It is a facade contractor that runs construction contracts with mobilisation advance, monthly progress billing and 5% retention, so the O2C and retention story applies. Three years of restated consolidated accounts (FY24 to FY26), a filed Q1 FY27 result, three rating rationales (2022, 2025, 2026) and a working capital table published by the company itself give a multi-year trend on one basis. SAP is confirmed in the RHP. Limits: the company is net cash, so interest saved is small and only on a drawn cash credit line; the Q1 FY27 earnings call transcript was not yet on the company site.

Blockers (line 1 rule): DRHP of 5 Sep 2025 not fetched (only its later RHP); Q1 FY27 call (7 Oct 2026) transcript not found on the company site on 8 Oct 2026; the three annual report PDFs on the company site are scanned images and were not read beyond page 1 (the RHP restated accounts cover the same years).

## Identity (settled first)

* Legal name: **Glass Wall Systems (India) Limited**, formerly Glass Wall Systems (India) Private Limited. CIN U74999MH2010PLC207187. Incorporated 27 Aug 2010 on conversion of the partnership firm "Glass Wall Systems". Verified: D1 p3 (incorporation text), RHP dated 1 Sep 2026.
* Listed: yes, mainboard, NSE and BSE, on 16 Sep 2026; IPO at Rs 182 per share. Verified: D2 note 3 (results filed 6 Oct 2026, p7 of the PDF) and D4 slide 3.
* Business: "major facade contractor and turnkey solutions provider" (D6, CRISIL 2 Apr 2026). Segment reported: one segment, "Construction Activities" (D1 p369, note 37). Revenue recognised over time on construction contracts: Rs 4,480.71 Mn of Rs 4,569.71 Mn in FY26 (D1 p369). Payment terms: "mobilisation advance, monthly progress payments with a credit period ranging from 0 to 60 days and certain retention money to be released at the end of the project" (D1 p429, image checked). Retention: "customers typically withhold 5.00% of each contract value as retention, typically releasing it only after the 12 to 24 months retention period" (D1 p39, image checked). EPC/project contractor test: PASSED.
* Subsidiary: Yes Systems Private Limited (fenestration), 100% acquired by share swap effective 21 Aug 2025, accounted as common control pooling from the earliest period (D2 note 6; D1 p33 footnote).
* ERP: "We have implemented SAP platforms encompassing business functions including production, materials, finance, inventory, maintenance, and human resource management." Verified, D1 p281. The SAP product version (S/4HANA or other) is NOT FOUND in any company document read.

## Documents (all saved in src/d/, treated as untrusted)

* D1 `RHP-2026-09-01.pdf`: Red Herring Prospectus dated 1 Sep 2026, from glasswallsystems.in/wp-content/uploads/2026/09/RHP.pdf. Restated consolidated (GWSIL + Yes Systems). Rs million.
* D2 `se-outcome-bm-2026-10-06.pdf`: outcome of board meeting and unaudited consolidated and standalone results for the quarter ended 30 Jun 2026, filed 6 Oct 2026, limited review by S R B C & CO LLP.
* D3 `se-upload-a.pdf`: Q1 FY27 press release, filed 6 Oct 2026.
* D4 `se-upload-b.pdf`: Q1 FY27 investor presentation, filed 6 Oct 2026.
* D5 `se-reg30-5-2026-09-17.pdf`: Regulation 30(5) intimation of authorised KMP, filed 17 Sep 2026.
* D6 `crisil-2026-04-02.html`: CRISIL rating rationale, 2 Apr 2026, combined GWSIL + Yes Systems.
* D7 `crisil-2025-01-03.html`: CRISIL rating rationale, 3 Jan 2025, standalone.
* D8 `acuite-2022-05-23.pdf`: Acuite rating rationale, 23 May 2022, standalone (then a private limited company).
* D9 `se-bagla-resignation.pdf` (18 Sep 2026), D10 `se-price-movement-reply-2026-09-22.pdf` (22 Sep 2026), D11 `se-earnings-call-intimation-2026-10-01.pdf` (1 Oct 2026).
* `ar-1.pdf` (FY25 annual report, 15th AGM notice dated for 8 Aug 2025), `ar-2.pdf`, `ar-3.pdf`: scanned, not read beyond page 1.

Computed figures come from `src/gw-calc.py`; output in `src/gw-calc-output.txt`. Command: `python -I src/gw-calc.py > src/gw-calc-output.txt`. The script asserts the filings' own arithmetic (total income, EBITDA margin, net contract balance, order book sum) before printing.

## Income, EBITDA, PAT (restated consolidated, Rs million; Rs crore by script)

* Revenue from operations: FY26 4,569.71 (Rs 456.97 Cr); FY25 2,783.27 (Rs 278.33 Cr); FY24 3,043.42 (Rs 304.34 Cr). Verified, D1 p84, image checked, filed 1 Sep 2026.
* Other income: FY26 144.54; FY25 98.09; FY24 59.15. Total income: FY26 4,714.25 (Rs 471.43 Cr); FY25 2,881.36; FY24 3,102.57. Verified, D1 p84.
* EBITDA: FY26 1,051.98 (Rs 105.20 Cr, 23.02%); FY25 730.09 (26.23%); FY24 547.03 (17.97%). Verified, D1 p144 (KPI table, certified by V. Singhi & Associates). EBITDA excludes other income (D1 p145 note 1).
* PAT: FY26 837.89 (Rs 83.79 Cr, 18.34%); FY25 575.10 (Rs 57.51 Cr, 20.66%); FY24 202.51 (Rs 20.25 Cr, 6.65%). Verified, D1 p84. FY24 carried exceptional items of 161.89 (D1 p84); adjusted PAT FY24 364.40 (D1 p145).
* Growth: revenue FY26 vs FY25 +64.2%; FY25 vs FY24 minus 8.5%. PAT FY26 vs FY25 +45.7%. Computed (gw-calc).
* Finance costs: FY26 35.20; FY25 35.86; FY24 93.74. Verified, D1 p84.
* Segment revenue FY26: domestic facade (manufacturing and EPC) 2,233.43; international facade products supply 2,065.73; fenestration 270.55. Verified, D1 p144.
* Q1 FY27 (quarter ended 30 Jun 2026, unaudited consolidated): revenue 1,074.48 (Rs 107.45 Cr) vs 791.19 (+35.8%); PAT 172.95 (Rs 17.29 Cr) vs 187.31 (minus 7.7%); other income 24.96 vs 47.99; depreciation 15.36 vs 7.86. Verified D2 p6, image checked, filed 6 Oct 2026; percentages computed.
* Q1 FY27 EBITDA margin 21.3% vs 26.6%. Verified, D3 press release table, filed 6 Oct 2026 (company figure, Rs crore rounded).
* Operating cash flow (Rs Cr): FY26 73.3; FY25 73.0; FY24 42.7; working capital changes FY26 outflow 17.7, FY25 inflow 2.6, FY24 outflow 21.4. Verified, D4 slide 28 (PDF p29), image checked. Operating cash flow was 87.5% of PAT in FY26 against 126.9% in FY25. Computed.

## Working capital (restated consolidated)

* Company's own table (D1 p38, risk factor 13, image checked): trade receivables FY26 1,089.62 / FY25 507.66 / FY24 634.37; trade payables 655.46 / 377.87 / 382.60; inventories 393.43 / 384.32 / 297.40 (Rs million). Receivable days 88 / 67 / 77; payable days 109 / 107 / 91; inventory days 66 / 109 / 71; net working capital days 45 / 69 / 57. Verified.
* Basis (D1 p38 notes): receivable days on revenue from operations; payable and inventory days on cost of raw materials and components consumed; NWC days = receivable days less payable days plus inventory days.
* Recomputed on those formulas: FY26 87.0 / 108.4 / 65.0 / 43.7; FY25 66.6 / 106.6 / 108.4 / 68.4; FY24 (366 days) 76.3 / 90.7 / 70.5 / 56.1. Computed. The company's printed days run about 1 day higher in every cell; the cause is not stated (possibly rounding up). Use the company's printed days, with this note.
* What the company formula leaves out: contract assets (unbilled revenue plus retention pending milestone) FY26 491.54 / FY25 409.89 / FY24 536.81, and contract liabilities (advances and billing in excess) 880.01 / 780.78 / 837.41. Verified D1 p369, image checked. Contract assets = 39.3 days of FY26 revenue; receivables plus contract assets = Rs 158.12 Cr = 126.3 days (FY25 120.3, FY24 140.8). Computed.
* Retention at 31 Mar 2026: non-current (held over 12 months) 153.75; current 205.81; total Rs 35.96 Cr, 28.7 days of FY26 revenue; 42.8% has been held more than 12 months. Verified D1 p39 (image checked); computed totals.
* Receivables past due more than 6 months: FY26 119.53 (11.0% of receivables); FY25 116.55 (23.0%); FY24 148.44 (23.4%). Verified D1 p39; shares computed.
* Receivables grew 114.6% in FY26 against revenue growth of 64.2%. Computed.
* Rating agency view: "gross current asset days between 186-240 days for the past 3 fiscal year ended 2025. It majorly comprises of debtor days of more than 100 days and inventory period of 90 days." Verified, D6 (CRISIL, 2 Apr 2026), combined basis. Conflicts with D1's receivable days of 67 to 77 for FY24 and FY25; see depth.md.

## Borrowings and rate

* Borrowings, restated consolidated: 31 Mar 2026 non-current 47.36 + current 19.46 = Rs 6.68 Cr; 31 Mar 2025 Rs 8.46 Cr; 31 Mar 2024 Rs 24.85 Cr. Cash plus other bank balances 31 Mar 2026 Rs 85.93 Cr; net cash Rs 79.25 Cr. Verified D1 p82 to 83; totals computed. Company KPI: net debt to equity (0.30) FY26 (D1 p145).
* At 3 Aug 2026: outstanding borrowings Rs 53.09 Mn, all on an ICICI Bank cash credit of Rs 300 Mn sanctioned (17.7% drawn); non-fund-based letter of credit and bank guarantee limit Rs 900 Mn sanctioned, nil outstanding. Verified D1 p433 to 434, certified by V. Singhi & Associates 1 Sep 2026.
* Disclosed rate: ICICI Bank cash credit "Repo rate plus a spread (current effective rate being 8.00% to 8.25% p.a.)". Verified D1 p360 (restated note 18). Bank of India overdraft: "1% above the applicable fixed deposit rate" (D1 p360, p434). A PNB Housing Finance loan at 8.80% (investment property) was fully repaid after 31 Mar 2026 (D1 p360).
* Interest rule for later tickets: only 8.00% to 8.25% (ICICI cash credit) is a disclosed working capital rate. Debt is small, so interest saved is real only up to the drawn line.

## Order book

* Total order book: 31 Jul 2026 Rs 9,815.46 Mn (Rs 981.55 Cr); 31 Mar 2026 8,460.22; 31 Mar 2025 3,488.25; 31 Mar 2024 2,078.08. Split at 31 Jul 2026: domestic facade 6,260.91; international facade products supply 1,861.91; fenestration (Yes Systems) 1,692.64. Verified D1 p33, image checked.
* Order book at 31 Jul 2026 = 2.15 times FY26 revenue. Computed.
* Live check: no cancellation, termination or short closure filed in the company's stock exchange filings list (13 PDFs, 17 Sep to 6 Oct 2026). The RHP records one client contract of Rs 524.50 Mn terminated in FY25 (D1 p27 to 28), already outside these order books. The 31 Jul 2026 figure is restated in D3 and D4 as "Rs. 982 crores".

## Clients

* Top 10 clients: 86.40% of FY26 revenue, 78.13% FY25, 88.56% FY24; top 3: 56.75% FY26. Verified D1 p27, image source text.
* Named in the RHP (D1 p27 footnotes, FY26 top ten): Winpro International, LLC; Bagmane Constructions Private Limited; Reflection Window +Wall LLC; Akruthi Infra-Build Developers Private Limited; six others not named for want of consent. FY25 list adds SRG Global Facades Proprietary Limited and Coriander Specialities Private Limited; FY24 list adds K. Raheja Private Limited.
* Customer profile: "large private corporates and reputed developers" (D1 p429). Average project execution cycle "around 12 to 18 months" (D1 p429).

## Leaders (names and titles from filings)

* Jawahar Hariram Hemrajani: Chairman and Whole Time Director, promoter. Verified D1 p303; D5 (17 Sep 2026).
* Eshan Jawahar Hemrajani: Managing Director and Chief Executive Officer, promoter. Verified D1 p303; D5; D4 slide 5.
* Sanjay Suresh Sawant: Chief Financial Officer since 21 May 2025. Verified D1 p322 to 323; D5 (17 Sep 2026).
* Sagar Lambole: Company Secretary and Compliance Officer since 3 Aug 2026. Verified D1 p322; D5.
* Amit Jawahar Hemrajani: appointed Additional Director (Non Executive) on 6 Oct 2026. Verified D2 p1.
* Senior management: Rahul Miskeen, Director Export Management; Ravindra Vitthal Pawar, Vice President Production. Verified D1 p322 to 323.
* Vivek Baid is NOT an officer now: CFO 11 Jul 2024 to 21 May 2025, then Chief Group Strategy and Finance Officer, resigned 31 Jul 2026. Verified D1 p323.
* Contact published by the company: compliance@glasswallsystem.com (note the domain has no "s"), +91 22 6103 3456. Verified D1 cover, D5. Personal e-mail addresses: NOT FOUND in any filing.

## Address

* Registered and corporate office: 503-504, 5th Floor, A Wing, Marathon Futurex, Mafatlal Mills Compound, N.M. Joshi Marg, Lower Parel (East), Mumbai 400 013, Maharashtra, India. Verified D1 cover (1 Sep 2026); repeated on D2 p6 (6 Oct 2026).
* Manufacturing: single facility at Vile Bhagad, Raigad, Maharashtra, plus the Yes Systems facility in Vile Bhagad. Verified D1 p33.

## NOT FOUND (searched)

* SAP version / S/4HANA: searched D1 full text for "S/4" and "HANA" (0 relevant hits) and "SAP" (2 hits, p280 and p281, none naming a version); D4 full text (0 hits for all three).
* Earnings call transcript for 7 Oct 2026: company stock exchange page and investor pages checked 8 Oct 2026.
* Per project or per site billing data: not in any filing (expected; it is ERP data).
