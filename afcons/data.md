# Afcons Infrastructure Limited: data.md (AF-1)

Researched 7 Oct 2026. Company: Afcons Infrastructure Limited, CIN L45200MH1976PLC019335, NSE AFCONS, BSE scrip code 544280. All ₹ crore (Cr), CONSOLIDATED, unless marked. Grades: **V** = Verified (document + page), **C** = Computed (script `src/scripts/calc_af1.py`, output pasted in `src/scripts/calc_af1_output.txt`; run `python -I src/scripts/calc_af1.py`), **NF** = NOT FOUND (list of places checked given). The internal dossier and gtm file are never cited. Table pages were rendered to PNG and read as images (`src/img/`), not read from the text layer.

## 0. Sources (all downloaded to `src/`; afcons.com/financials/ is behind a Sucuri JS gate, fetched by replaying its cookie script)
| Short | File | Document | Filing / date | Pages |
|---|---|---|---|---|
| RHP | RHP.pdf | Red Herring Prospectus, restated consolidated FY22-FY24 (₹ million; /10 = Cr) | dated 18 Oct 2024 (cover) | 764 |
| AR25 | AR_FY25.pdf | Annual Report 2024-25 | board approval 23 May 2025 (signature page); PDF created 28 Jun 2025; exchange filing date NF | 379 |
| AR26 | AR_FY26.pdf | Annual Report 2025-26 (printed page number given as "p.xxx", PDF page in brackets) | accounts approved 18 May 2026; AR made available with BRSR intimation to NSE/BSE dated **8 Jul 2026** (`NSE_BRSR_intimation_2026-07-08.pdf`) | 207 |
| Q4R | Q4FY26_results.pdf | Audited FY26 results + auditor's reports (scanned, OCR layer poor) | board meeting **18 May 2026** | 38 |
| Q4PR | Q4FY26_pressrelease.pdf | Investor release Q4/FY26 | 18 May 2026 | 3 |
| Q4P | Q4FY26_presentation.pdf | Investor presentation Q4/FY26 | PDF created 18 May 2026; filing date NF | 30 |
| Q4T | Q4FY26_transcript.pdf | Earnings call transcript, call 19 May 2026 | filed **22 May 2026** (cover letter) | 26 |
| Q1R | Q1FY27_results.pdf | Unaudited Q1 FY27 results + limited review | **7 Aug 2026** | 16 |
| Q1PR | Q1FY27_pressrelease.pdf | Investor release Q1 FY27 | 7 Aug 2026 | 3 |
| Q1P | Q1FY27_presentation.pdf | Investor presentation Q1 FY27 | PDF created 7 Aug 2026; filing date NF | 32 |
| Q1T | Q1FY27_transcript.pdf | Earnings call transcript, call 10 Aug 2026 | filed **13 Aug 2026** | 21 |
| Q2PR, Q1PR26, Q4PR25 | Q2FY26_pressrelease.pdf, Q1FY26_pressrelease.pdf, Q4FY25_pressrelease.pdf | earlier releases (12 Nov 2025, 8 Aug 2025, 23 May 2025) | as stated on cover | |
| Q4T25 | Q4FY25_transcript.pdf | Q4 FY25 call 27 May 2025 | | |

Q3 FY26 financials and Q4 FY25/Q4 FY26 files also in `src/`. Text extracts in `src/txt/`.

## 1. Headline: five working-capital figures (FY26, 31 Mar 2026 / year FY26)
1. **Net working capital days: 143** (FY24 63, FY25 113), the company's own figure. V: AR26 p.18-19 (PDF 11), "Net Working Capital (in Days)" chart; spoken by CFO Ramesh Kumar Jha, Q4T PDF p.19 ("this networking capital number of around 143 days"). Definition for FY26 is NOT stated in AR26 or Q4T. The RHP glossary definition (printed p.14, PDF 19): "(Current Assets minus cash and bank) minus (Current Liabilities-short term debt)/ Revenue from Operations* No. of Days in the year". Do not assume FY26 uses it.
2. **Contract assets (unbilled work) ₹7,731.50 Cr net** = current 6,234.46 + non-current 1,497.04 (FY25 7,095.76; FY24 5,225.40). V: AR26 p.356 (PDF 180); AR25 p.312 (PDF 287). C: sums.
3. **Trade receivables ₹4,038.09 Cr net** (3,431.52 current + 606.57 non-current) on gross ₹4,319.79 Cr less ECL ₹281.70 Cr; **48.7% of gross is more than 1 year past due date** (FY25 38.4%); 27.0% of gross is disputed. V: AR26 p.353-354 (PDF 178-179). C: percentages.
4. **Cash from operations: operating profit before working-capital changes ₹1,702.20 Cr turned into cash generated from operations ₹110.00 Cr; net operating cash flow −₹127.49 Cr** (FY25 −132.20; two-year −259.69). V: AR26 p.329 (PDF 166); AR25 p.315 (PDF 290). C: difference −1,592.20 (FY25 −1,522.81).
5. **Gross borrowings including acceptances ₹3,538.27 Cr** (FY25 2,235.72); net debt ₹2,741.02 Cr per the company's own reconciliation (includes lease liabilities). V: AR26 p.330 (PDF 167) net debt table "Borrowings (Including Acceptances)".

## 2. Income statement, FY22 to FY26 and Q1 FY27 (consolidated)
FY22-FY24 are RESTATED figures from the RHP (₹ million ÷ 10). FY24 also appears in AR25 and agrees (revenue 13,267.50, PAT 449.76).

| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 (Q1 FY26) | Source |
|---|---|---|---|---|---|---|---|
| Revenue from operations | 11,018.97 | 12,637.38 | 13,267.50 | 12,548.42 | **11,948.38** | 2,671.00 (3,370.38) | RHP p.440 (PDF 445); AR26 p.327 (PDF 165); Q1R p.14 (PDF 14) |
| Other income | 250.58 | 206.71 | 379.38 | 474.35 | 373.72 | 55.68 (48.67) | same |
| **Total income** (company headline) | 11,269.55 | 12,844.09 | 13,646.87 | 13,022.77 | **12,322.10** | 2,726.68 (3,419.05) | same; C: revenue + other = published total, difference 0.00 every year |
| EBITDA, company definition | 1,068.60 | 1,373.79 | 1,583.12 | 1,662 | 1,439 | 263 (445) | RHP p.184 (PDF 189); AR26 p.18 (PDF 11); Q4PR; Q1PR |
| EBITDA margin (on total income), company | 9.48% | 10.70% | 11.60% | 12.8% | 11.7% | 9.6% (13.0%) | same; C: 12.76% and 11.68% |
| Finance costs (statement) | 424.73 | 446.66 | 577.26 | 629.20 | 673.61 | 173.05 (161.77) | RHP p.440; AR26 p.327; Q1R p.14 |
| Depreciation | 355.37 | 471.58 | 494.53 | 491.10 | 453.92 | 83.52 (138.81) | same |
| PAT | 357.61 | 410.86 | 449.74 | 486.79 | **250.74** | 30.30 (137.40) | same |
| PAT margin on total income | 3.17% | 3.20% | 3.30% | 3.74% | 2.03% | 1.1% (4.0%) | C |
| Profit before tax | 406.55 | 599.08 | 672.60 | 710.01 | 386.79 | 50.59 (183.38) | same |

Rules for use: **EBITDA margin is on TOTAL INCOME**, which includes other income (FY26 other income 373.72 = 3.0% of total income, C). Revenue from operations fell 4.78% in FY26 and 9.94% from FY24 (C); total income fell 5.38% (C).
- **Two EBITDA figures exist for FY26.** Company (press release, AR26 p.18): ₹1,439 Cr, note: "Components of finance cost like Bank charges and commission is added to other expenses & deducted from finance cost ... excludes the one-time impact of ₹76.51 Cr from labour code in Q3FY26 and FY26". Board's Report (AR26 p.83, PDF 43): "EBITDA (excluding exceptional items)" ₹1,362.26 Cr consolidated (FY25 1,661.80); standalone 1,394.16 (FY25 1,759.15). C: 1,362.26 + 76.51 = 1,438.77, so the two differ by the labour-code charge. Never print one against the other's prior year. FY25 company 1,662 vs Board 1,661.80 agree.
- Standalone (V, AR26 p.83): total income 12,308.38 (FY25 12,966.66); PAT 289.90 (FY25 586.13); revenue from operations 11,938.32 (FY25 12,499.93) per Q4R p.19 (OCR layer; total income cross-checked to AR26 p.83).
- Exceptional item FY26: ₹76.51 Cr (labour codes) V: AR26 p.327, Note 47 p.392.
- Quarterly consolidated total income (company): Q1 FY26 3,419; Q2 3,101; Q3 3,025; Q4 2,777; Q1 FY27 2,727. Q4 FY26 EBITDA 170 (6.1%), PAT −89 (loss −88.55). V: Q4PR p.1 (image), Q2PR p.1, Q1PR p.1. CEO-level wording: MD says "first time since we started publishing quarterly numbers from 2010" (Q4T PDF p.3).
- Provisions: Q4T PDF p.13 CFO: Q4 provision "close to INR 160-odd crores", FY26 "close to INR 325 crores"; one-offs "INR 260-265 crores" (PDF p.14). Q1FY27: EBITDA 9.6%, PBT 51 per Q1T.

## 3. Balance sheet (consolidated; closing)
FY22-FY24 from RHP printed p.439 (PDF 444) ÷10; FY24-FY25 AR25 p.312 (PDF 287); FY25-FY26 AR26 p.326 (PDF 165) and notes.

| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Trade receivables, net (current + non-current) | 2,982.75 | 2,847.85 | 3,620.19 | 3,458.23 | **4,038.09** |
| Contract assets, net (current + non-current) | 3,962.83 | 4,689.01 | 5,225.40 | 7,095.76 | **7,731.50** |
| Receivables + contract assets (same basis) | 6,945.58 | 7,536.86 | 8,845.59 | 10,553.99 | 11,769.59 |
| Inventories | 1,270.24 | 1,585.79 | 1,626.57 | 1,010.22 | 1,016.57 |
| Trade payables (current + non-current) | 3,137.05 | 3,981.34 | 4,756.61 | 3,975.13 | 4,470.68 |
| Contract liabilities (advances from customers + amount due to customers) | 4,480.14 | 4,539.31 | 4,449.45 | 4,773.99 | 4,094.00 |
| Borrowings incl. acceptances (current + non-current) | 1,555.20 | 1,562.82 | 2,455.00 | 2,235.72 | 3,538.27 |
| Cash and cash equivalents | 447.09 | 319.32 | 413.26 | 440.17 | 385.70 |
| Equity attributable to owners (net worth proxy) | 2,712.08 | 3,175.72 | 3,595.95 | 5,260.52 | 5,449.80 |

C for all totals and for FY22/FY23 sums (RHP lines added; FY24 sums agree to AR25 to ±0.02). Other bank balances/liquid investments FY26 500.19 (FY25 330.39) AR26 p.357 note 10.1.
- **Net debt**: company table AR26 p.330 (PDF 167): FY26 (2,741.02), FY25 (1,572.74), after cash, liquid investments and lease liabilities (88.64 / 107.58). C ex-leases: FY26 2,652.38 (CFO said "net debt is INR 2,653 crores", Q4T PDF p.8). FY25: C ex-leases 1,465.16; CFO said "INR1,486 crores on net basis" (Q4T25 PDF p.8): does not reconcile to the AR, so do not print 1,486.
- Net debt / equity (company, AR26 p.19 chart): FY24 0.5, FY25 0.3, FY26 0.5; Q1 FY27 "around 0.68x" net debt basis (Q1T PDF p.8, CFO). Gross debt / equity FY26 0.65x (AR26 p.121 / PDF 62 table "Debt-Equity Ratio 0.65, 0.42"), C 0.65.
- Acceptances (supplier credit presented as borrowing) **₹259.67 Cr** (FY25 247.82), payment terms "30-180 days" V: AR26 p.366-368 (PDF 185-186) Notes 20, 20.4. C: 7.3% of FY26 gross borrowings. Whether other supplier-finance/vendor-bill discounting exists beyond this: RHP printed p.44 says working capital is financed through "cash credit facilities, working capital demand loans, bill discounting and vendor financing"; amount NF for FY26 (AR26 notes 14/15/20 list none separately).
- Total debt Jun-30-2024 (RHP) 33,650.98 mn = ₹3,365.10 Cr (RHP p.184).

## 4. Working-capital detail (FY26 unless stated)
### 4a. Receivables ageing, FY26 (AR26 p.354, PDF 179; ₹ Cr; "from due date of payment")
Gross subtotal 4,319.79; ECL (281.70); net 4,038.09 (V). Bucket totals across undisputed + disputed, good + significant-credit-risk, current + non-current (C, script):

| Bucket | FY26 | share | FY25 (p.354 prior-year table) | share |
|---|---|---|---|---|
| Not due | 1,184.92 | 27.4% | 1,113.44 | 30.9% |
| < 6 months | 888.97 | 20.6% | 907.04 | 25.2% |
| 6 months to 1 year | 143.56 | 3.3% | 201.33 | 5.6% |
| 1 to 2 years | 723.51 | | 302.97 | |
| 2 to 3 years | 405.08 | | 260.11 | |
| > 3 years | 973.75 | | 819.88 | |
| **> 1 year total** | 2,102.34 | **48.7%** | 1,383.0 | 38.4% |
| Total gross | 4,319.79 | | 3,604.77 | |
Disputed trade receivables FY26 1,167.16 = 27.0% of gross (FY25 970.09, 26.9%) C. Allowance FY26 281.70 = 6.5% of gross (FY25 146.54 = 4.1%) C. Related-party receivables FY26 net 346.50 current + 74.52 non-current V: AR26 p.353. Management attributes part to Jal Jeevan Mission (UP): "we were having close to INR400 crores of receivable ... for all practical purposes, the receivable remains to be in the similar level" (CFO, Q1T PDF p.16); this is "a combination of receivable plus unbilled" (Q1T PDF p.17).
FY22-24 ageing: RHP printed p.478 (PDF 483) has the Jun-24 and Mar-24 tables; not tabulated here (older basis).
### 4b. Contract assets / unbilled
Net 7,731.50 (current 6,234.46, non-current 1,497.04); gross 8,015.04; ECL 283.54 (52.36 current, 231.18 non-current) V: AR26 p.356. Variations / claims inside contract assets: ₹659.87 Cr (Mar-25 659.87) "recognized towards such variations/ claims ... as non-current assets" on one joint operation (Chennai-metro related JV; AR26 EOM and Notes 37, PDF p.149/196) V; ₹221.96 Cr Uttar Pradesh Expressways claim (Note 42, p.390) V; ₹243.53 Cr arbitration award Dec 2025 in Chenab bridge undertaking, "₹165.62 crore" through revenue and ₹77.91 Cr from contract assets (Note 40, p.390) V.
CFO on cause (Q1T PDF p.8): "We are witnessing delays in certification of the work done and release of payment in projects. This has led to increase in uncertified work done leading to jump in working capital requirement."
### 4c. Retention
Retention receivables (RHP "Risk factors", printed p.45, PDF 50): 31 Mar 2022 ₹1,192.07 Cr; 31 Mar 2023 ₹1,119.41 Cr; 31 Mar 2024 ₹1,096.61 Cr; 30 Jun 2024 ₹1,133.56 Cr (V, ₹ million ÷10). **FY25 and FY26: NF as a figure.** Checked: AR25 and AR26 full text for "retention" (only policy wording and "including retention monies" inside note 5), Q4/Q1 presentations, both transcripts (CFO Q4T25 PDF p.13: Bangladesh "close to 50 crores ... All that is retention money"). Policy wording, AR26 p.357/PDF 202: "Monthly progress payments have a credit period ranging from 45 to 60 days and Retention money to be released at the end of the project. In some cases, retentions are released / substituted with bond / guarantees."
### 4d. Claims and arbitration receivables
AR26 Note 43(b), p.391 (PDF 197): "total net receivable of ₹ 1,259.08 Crore (as at 31st March, 2025 : ₹ 1,163.45 Crore) (including interest on arbitration awards ₹ 266.08 Crore (as at 31st March, 2025 : ₹ 303.41 Crore))" within trade receivables and other financial assets, won arbitration awards "further challenged by the customers". Part payment received under Niti Aayog scheme against a bank guarantee, shown as customer advance. Interest on arbitration awards receivable: current 43.64 + non-current 222.44 = 266.08 (V: Note 7, p.355). Pending-in-legal trade receivables FY22-24 (RHP p.45): 5,931.97 / 7,287.20 / 10,653.54 mn = ₹593.20 / 728.72 / 1,065.35 Cr.
Gabon: SAG invoked Performance Bond and Advance Payment Guarantee "EUR 17.84 million" and terminated the EPC contract on 18 Feb 2026 (Note 44, p.391); CFO: "we have already paid that bank guarantee invocation" (Q4T PDF p.26). Interest-bearing arbitration income in other income FY26: arbitration interest ₹19 Cr, other interest ₹61 Cr (CFO, Q4T PDF p.23).
### 4e. Mobilisation and customer advances
Advances from customers FY26 3,814.01 (current 1,672.70 + non-current 2,141.31); FY25 4,425.24 V: AR26 p.365 (PDF 184) Note 17. C sums. Total contract liabilities 4,094.00 / 4,773.99. Accrued interest on advances from customers FY26 ₹97.09 Cr (FY25 35.19) AR26 Note 16 p.365 V. CFO FY25: "all advances put together, it is close to INR4,500 crores" (Q4T25 PDF p.18). Interest-bearing share: "almost 40% of the overall advances were interest bearing" (CFO, Q4T PDF p.7); Q1 FY27: "62% of our advances are interest-free and 38% ... interest-bearing" (CFO, Q1T PDF p.7).
### 4f. Payables ageing, FY26 (AR26 p.364, PDF 184; ₹ Cr)
Not due 1,824.62 (40.8%); < 1 year 1,793.87 (40.1%); 1-2 years 289.02; 2-3 years 238.81; > 3 years 324.36; total 4,470.68 = BS (C). > 1 year 19.1% C. FY25 total 3,975.13 = BS, not due 33.1% C. MSME (Note 15/MSME disclosure): principal unpaid 278.63, interest due and unpaid 9.09 (FY25 220.57 / 14.62), accrued interest 64.02; MSME trade payables 222.94 total (205.67 + 17.27) V: p.363-364.
### 4g. Inventory
FY26 1,016.57 (steel 446.21, cement 7.08, aggregate 81.14, other 135.71, stores and spares 346.43) V: AR26 p.357 Note 9. FY25 1,010.22.
### 4h. Interest-rate ranges disclosed (V: AR26 p.362-367)
Cash credit / working capital demand loans "@7.55% to 9.95% per annum (As at 31st March, 2025 interest ranging from @9.09% to 10.35% per annum)"; buyers credit "@2.60% to 4.31%" (FY25 3.07%-5.39%); equipment rupee loans 8.60%-10.10%; HSBC ECB 6M Euribor + 193 bps (4.08%); LBBW 6M Euribor + 115 bps (3.29%); NCD ₹50 Cr at 8.40% (3-year bullet, FY28-29). Commercial paper ₹200 Cr (unsecured), WCDL ₹1,678.60 secured + ₹50 unsecured; short-term borrowings total 2,618.67. Management: "improved our average borrowing cost in FY26" (CFO, Q4T PDF p.7) but no single average-rate figure given: NF.
### 4i. Working-capital days: company definitions and history
Company reports **Net Working Capital (in days) FY24 63, FY25 113, FY26 143** (AR26 p.18). CFO FY25: "net working capital is at an elevated level of 113 days" (Q4T25 PDF p.8). RHP gave 91 days at 30 Jun 2024 ("net working capital divided by revenue calculated on a daily basis", RHP p.44, PDF 49). FY22/FY23 days: NF (RHP gives standalone net working capital requirement ₹ mn 10,519.30 / 11,264.30 / 21,644.00 / 31,903.60 (Jun-24) at RHP p.44 PDF 49, no days). Q1 FY27: CFO "marginally increased from the March number" (Q1T PDF p.11); absolute Q1 balance-sheet figures not published ("generally, the balance sheet numbers are disclosed in H1", CFO, Q1T PDF p.10), so Q1 FY27 receivables, debt, payables, advances: NF.

## 5. Cash flow (consolidated, ₹ Cr; V: RHP p.441 PDF 446 ÷10; AR25 p.315; AR26 p.329)
| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Operating profit before WC changes | 1,105.41 | 1,416.57 | 1,633.47 | 1,630.93 | 1,702.20 |
| Cash generated from operations | 726.92 | 1,315.38 | 957.57 | 108.12 | 110.00 |
| **Net cash from operating activities** | 610.45 | 1,215.48 | 707.45 | **−132.20** | **−127.49** |
| (Increase) in trade receivables incl. retention | +57.87 | +125.14 | −793.91 | +156.58 | −680.11 |
| (Increase) in contract assets | −37.32 | −731.41 | −546.65 | −1,949.33 | −635.74 |
| Increase/(decrease) in trade payables | −257.64 | +850.58 | +792.19 | −732.20 | +519.64 |
| Increase/(decrease) in contract liabilities | +401.93 | +123.26 | −33.83 | +369.09 | −642.95 |
| Finance costs paid | 429.06 | 448.06 | 574.93 | 627.02 | 669.86 |
| Net cash from investing | −250.62 | −870.21 | −858.56 | −131.35 | −401.72 |
| Net cash from financing | −521.01 | −482.55 | 245.52 | 289.94 | 472.92 |
FY22/FY23 from RHP (₹ mn ÷10; FY24 RHP 7,074.48 = AR25 707.45). FY26 "interest funded by borrowing": finance costs paid 669.86 against operating outflow −127.49 (V; CFO answered the analyst's "vicious cycle" point at Q4T PDF p.21 with: "we have got a sizable cash and bank balances, we have got sizable undrawn bank limits available with us, and we have got very sizable advances which we can draw at any point in time").
Capex FY26 ₹1,069 Cr (CFO, Q4T PDF p.14); FY27 ~₹725 Cr (Q4T PDF p.10), later "INR700 crores to INR800 crores" (Q1T PDF p.17-18).

## 6. Net worth, returns (company's own definitions only)
Net worth: equity attributable FY26 5,449.80, total equity 5,450.58 V: AR26 p.326. Share capital 367.78. RHP net worth definition per SEBI ICDR is lower (RHP p.24 n.1); not used.
ROE / ROCE (company): FY22 14.02% / 17.30%, FY23 13.96% / 20.04%, FY24 13.28% / 20.18% (RHP p.184 PDF 189); AR26 p.19: ROE 13.3 (FY24), 11.0 (FY25), **4.7 (FY26)**; ROCE 20.2, 17.3, **11.9**. CFO at Q4T PDF p.8: "ROCE ... around 12% and ROE is around 5%, which is quite low."
Current ratio 1.29 (FY25 1.36), DSCR 1.69 (2.08), inventory turnover 4.08 (3.49), trade receivable turnover 3.02 (3.43), net profit margin 2.10% (3.88%) V: AR26 p.121 (PDF 62), company-defined ratios.

## 7. Order book, inflow, mix
| | Mar-22 | Mar-23 | Mar-24 | Mar-25 | Jun-25 | Sep-25 | Mar-26 | Jun-26 |
|---|---|---|---|---|---|---|---|---|
| Order book ₹ Cr | 32,804.83 | 30,405.77 | 30,960.99 | 36,869 | 35,311 | 32,681 | **32,496** | **43,290** |
Sources: RHP p.183 (PDF 188); AR26 p.19; Q4PR25 p.1 (36,869 excludes L1 ₹10,662 Cr); Q1PR26 (35,311 excludes L1 ₹21,556 Cr); Q2PR; Q4PR; Q1PR. 
Order inflow ₹ Cr: FY22 16,883.04; FY23 7,923.83; FY24 7,783.64 (RHP p.184); FY25 15,960 (Q4PR25); H1 FY26 1,268; **FY26 4,125 "excluding approximately INR 3,800 crores of variation and change orders"** (MD, Q4T PDF p.5); Q1 FY27 13,219 (Q1PR). Q1 FY27: company states book-to-bill 3.8x; C 13,219 / 2,727 = 4.85, so the 3.8x definition is not reconciled: do not print a computed ratio beside it.
**Order-book mix by segment (company segments; V from images of the releases)**: 
| | 30 Sep 25 | 31 Mar 26 | 30 Jun 26 |
|---|---|---|---|
| Urban Infra, UG and elevated metro | 10,398 (31.8%) | 9,279 (28.6%) | 8,905 (21%) |
| Urban Infra, bridges and elevated corridor | 7,355 (22.5%) | 7,580 (23.3%) | 6,992 (16%) |
| Hydro and underground | 8,161 (25.0%) | 7,423 (22.8%) | 7,110 (16%) |
| Marine and industrial | 4,322 (13.2%) | 4,779 (14.7%) | 9,540 (22%) |
| Surface transport | 1,797 (5.5%) | 2,907 (8.9%) | 10,324 (24%) |
| Oil and gas | 649 (2.0%) | 528 (1.7%) | 419 (1%) |
| Total | 32,681 | 32,496 | 43,290 |
Sources: Q2PR p.1, Q4PR p.1, Q1PR p.1 (all viewed as images). C: shares recompute to the printed percentages (Sep-25 sums 32,682 by rounding).
Client mix at 31 Mar 2026 (AR26 p.19 and Q4P p.10): Government 79%, Private 9%, Multilateral 12%; CFO: "close to 50% is from state government ... 50% is central government" of the ~80% government (Q4T PDF p.20). Geography: domestic 87%, overseas 13% (AR26 p.19); CFO: overseas order book "around 25%" at Jun-26 (Q1T PDF p.21). Slow-moving: "roughly around 5.65% is slow-moving category, and Bangladesh orders constitute about 2%, and another about 3% constitutes Jal Jeevan Mission orders ... roughly around 11%" (MD, Q1T PDF p.17). Jal Jeevan Mission orders ₹1,221 Cr (UP balance 510, MP 414, Rajasthan 297), UP receivable ~₹400 Cr (CFO, Q1T PDF p.16).

## 8. Revenue by segment and by geography
Segment reporting is **geographic only (India / Other countries)**, no business-segment revenue is reported. V: AR26 Note 32 p.379 (PDF 191):
| ₹ Cr | FY26 | FY25 |
|---|---|---|
| Revenue, India | 8,599.36 | 8,697.13 |
| Revenue, Other countries | 3,349.02 | 3,851.29 |
| Segment profit before tax, India | 74.73 | 367.89 |
| Segment profit before tax, Other countries | 609.20 | 604.62 |
| Segment assets India / Other | 13,408.62 / 5,659.39 | 12,547.43 / 4,558.79 |
C: overseas = 28.0% of FY26 revenue (30.7% FY25); segment PBT margin India 0.87% (FY25 4.23%), Other 18.19% (15.70%); India = 72.0% of revenue and 10.9% of segment PBT. Segment profit is before unallocated expenses (297.14 FY26). CFO: overseas contributes ~30% of turnover (Q4T PDF p.9); Q1 FY27 overseas revenue "around 16% ... domestic is 84%" (Q1T PDF p.21). RHP overseas revenue share FY22 32.27%, FY23 31.92%, FY24 24.89% (RHP p.184).
**Client concentration:** "During the year ended 31st March, 2026, no customer individually, contributed 10% or more to the Company's revenue. (As at 31st March, 2025, revenue of ₹ 1,293.36 Crore arising from a customer in Liberia (Viz. ArcelorMittal Liberia Limited))." V: AR26 p.380 (PDF 192). Business-segment revenue (metro, hydro, marine ...): NF (order book only).

## 9. Contingent liabilities, guarantees and BG/LC
V: AR26 Note 29, p.373-374 (PDF 188-189), ₹ Cr, FY26 (FY25): sub-contractor/vendor differences 530.41 (563.41); royalty claims 483.64 (483.64; show-cause demands 239.00 and 244.64 with stay); Maldives EPA fine 42.69 (38.47); claims against joint operations 171.49 (149.35); sales tax and entry tax 7.58 (17.08); service tax 67.25 (69.63); GST 72.64 (67.48); income tax 1.50 (7.80); VAT 0 (0.46). Capital commitments 151.47 (582.20). No total is stated by the company; not summed here.
**Bank guarantee / LC outstanding FY26 and FY25: NF.** Searched AR25 and AR26 full text (note 29, note 50, MD&A, auditor's annexures) and both transcripts. Only dated figure: "As of June 30, 2024, we had provided bank guarantees (including letters of credit) amounting to ₹143,712.60 million" = ₹14,371.26 Cr (RHP printed p.44, PDF 49). BG margin money held FY26 63.07, FY25 113.50 (AR26 p.357 Note 10.1). Lombard/performance guarantees invoked in Gabon (EUR 17.84 million, Note 44).
Going concern: AR26 Note 48 p.392: five joint operations/subsidiaries had a "Material uncertainty related to going concern" note by their own auditor; "Basis the Company's assessment company can adequately source the funding required". (Afcons Sener LNG; Afcons Oil and Gas Services; Afcons Gulf International; Afcons Construction Mideast; Afcons Contracting Company.)
Interest-free advances to JVs ₹689.41 Cr (FY25 894.68), AR26 Note 39 (PDF 149).

## 10. Auditor's report (exact wording; AR26 p.314-319, PDF 159-161; Q4R p.5, 12-13)
Joint statutory auditors: Deloitte Haskins & Sells LLP (Nilesh Shah, Partner, M. No. 049660) and HDS & Associates LLP (Suresh K. Joshi, Partner, M. No. 030035); signed Mumbai 18 May 2026 (AR26 p.220-221 and statements). Opinion on consolidated statements: unmodified ("In our opinion ... give a true and fair view ..."; Q4R p.5: "unmodified opinion"). **No qualification.** Three emphasis-of-matter paragraphs on the consolidated report, each ending "Our opinion is not modified in respect of this matter":
1. "We draw attention to Note no. 40 of the Consolidated Financial Statement, which describes the uncertainties relating to the outcome of the proceedings in arbitration and High Court in respect of variations recognised by the Company in terms of the provisions of the contract with the client, on account of matters stated therein. ... However, considering that the proceedings in arbitration and High Court are ongoing, the duration and outcome is uncertain." (AR26 p.315, PDF 159.)
2. Audit report on **Transtonnelstroy Afcons Joint Venture** includes: "We draw attention to Note 32 ... uncertainties relating to the outcome of the proceedings in arbitration, High Court and Supreme Court in respect of variations recognised by the joint venture in earlier years ..." (carried ₹659.87 Cr, see 4b). (AR26 p.315-316.)
3. Audit report on **Dahej Standby Jetty Project Undertaking**: "Note no. 23 ... uncertainties relating to the outcome of the Hon'ble High Court Delhi, where the joint operation has filed appeal to set aside an unfavourable award granted in Arbitration, towards claims of liquidated damages for delay in completion of works by joint operation." (AR26 p.316.) AR25 (PDF p.276-277) also listed Afcons Gunanusa JV (Note 26 claims on change orders); not repeated in AR26's extract above, check printed p.316 if needed.
**Key audit matters (consolidated), AR26 p.316-318:** (1) "Estimation of contract cost and revenue recognition – Construction Contract Revenue"; (2) "Recoverability of Non-Current Contract Assets and non-current trade receivables" ("Assessing the recoverability of contract assets and amounts overdue against invoices raised which have remained unsettled for a significantly long period after the end of the contractual credit period also involves a significant amount of judgment.").
Q1 FY27 limited review (Q1R p.10, PDF 10): emphasis of matter on Note (vii) (variations in arbitration and High Court) and TTA JV Note (iv), "Our Conclusion on this Statement is not modified in respect of this matter".
Other auditor statements: audit-trail (edit log) feature operated throughout FY26 with no tampering found (AR26 p.221 / PDF 112 para vi). Internal controls: attestation report on internal financial controls issued, unmodified (MD&A AR26 p.121).

## 11. Management's own targets, exact words (speaker verified in the transcript PDFs)
| # | Target / statement | Words | Speaker | Document, page, date |
|---|---|---|---|---|
| 1 | NWC days | "this networking capital number of around 143 days and in last call, we had talked about that we are looking at somewhere around, say, 120 odd days ... we will go back to around 120 days and then from there on ... bare minimum, we can look at 120 days and from there on, we need to see improvement. But I do not want to commit at this point in time" | Ramesh Jha, CFO | Q4T PDF p.19, call 19 May 2026 (filed 22 May 2026) |
| 2 | Cash unlock | "before June, we are looking at a sizable amount getting unlocked"; "we should see a sizable liquidation in the range of say INR 1000 odd crores" | Ramesh Jha, CFO | Q4T PDF p.19 and p.26 |
| 3 | Outcome vs #2 | "We are witnessing delays in certification ... no material movement in collection of the blocked-up asset" and "collections have not moved to a level where we would have expected. However, management is rigorously working towards stuck collection, and we are confident to turn things around this year." | Ramesh Jha, CFO | Q1T PDF p.8, call 10 Aug 2026 (filed 13 Aug 2026) |
| 4 | Debt | "for this financial year FY27, we will see a sizable drop in the debt number ... we will bring it down to a level what we were there say in FY25 or so." Later: "we are looking at debt closing say around INR3,500 crores or so"; "some 5% to 10% improvement" in working capital as "bare minimum"; net debt "somewhere around INR2,700 to INR2,800 crores" | Ramesh Jha, CFO | Q4T PDF p.21; Q1T PDF p.16-18 |
| 5 | Order inflow guidance | "we believe ... total order booking guidance of INR 30,000 crores for the current financial year" ; "we remain confident of achieving our full-year order inflow guidance of INR30,000 crores" | Paramasivan Srinivasan, MD | Q4T PDF p.5; Q1T PDF p.5 |
| 6 | Revenue / margin | "we believe it would be prudent to wait for greater visibility before providing specific revenue growth or EBITDA margin guidance for FY27" ; "it doesn't make sense for any guidance in terms of growth" | Paramasivan Srinivasan, MD (Q4T PDF p.5); Ramesh Jha, CFO (Q1T PDF p.6) | as stated |
| 7 | Shape of year | "Q3 and Q4, we believe, would see significant uptick." "In past ... H1 remains to be around 40%, 45%, and H2 remains around 55% to 60%." | Paramasivan Srinivasan, MD (Q1T PDF p.8); Ramesh Jha, CFO (Q1T PDF p.10) | |
| 8 | Priorities FY27 | "We will continue to focus on growing order book, improving collections, strengthening cash flows, and further enhancing and strengthening the balance sheet." | Krishnamurthy Subramanian, Executive Chairman | Q1T PDF p.4 |
| 9 | Long-run margin | "our guidance will remain around 11%" (FY25 call, pre-dates FY26 withdrawal) | Ramesh Jha, CFO | Q4T25 PDF p.7, 27 May 2025 |
| 10 | Execution | "We expect stronger execution in the second half of the financial year." | Krishnamurthy Subramanian, Executive Chairman | Q1PR p.1, 7 Aug 2026 |
Speaker check: the Q4 FY26 transcript text layer drops names on some pages; #5 and #6 sit in the MD's opening statement (the CFO is introduced only after it: "I now invite our Chief Financial Officer"), PDF p.5.

## 12. Leadership and registered office (V)
- **Executive Chairman (Whole-time Director): Mr. Subramanian Krishnamurthy**, DIN 00047592; elevated to Executive Chairman w.e.f. 28 Aug 2025 (before that "Executive Vice Chairman", AR25 p.312 signature block) AR26 PDF p.65; printed p.326.
- **Managing Director: Mr. Srinivasan Paramasivan**, DIN 00058445 (signature "Srinivasan Paramasivan, Managing Director", AR26 p.326; related-party list "Mr. S. Paramasivan – Managing Director", p.381; transcripts print "Paramasivan Srinivasan").
- **Deputy Managing Director: Mr. Giridhar Rajagopalan**, DIN 02391515 (re-appointed w.e.f. 1 Jul 2025) AR26 PDF p.23, p.65. 
- **Chief Financial Officer: Mr. Ramesh Kumar Jha** (AR26 p.326 signature "Ramesh Kumar Jha, Chief Financial Officer"; Q4T/Q1T "Mr. Ramesh Kumar Jha – Chief Financial Officer").
- **Company Secretary and Compliance Officer: Mr. Gaurang (Maheshchandra) Parekh**, Membership No. F8764 (Q4T cover letter, Q1T cover letter).
- Head of Corporate Strategy: Mr. Hitesh Singh (call participant).
- **Separate CEO: none found.** The AR26 board page and KMP list name Executive Chairman, MD, Deputy MD, CFO and Company Secretary (AR26 PDF p.23, 26, 45, 51). The only "CEO" in AR26 is "CEO AND CFO CERTIFICATION TO THE BOARD" (PDF p.83), signed by the MD and CFO.
- Board changes in FY26 (Q2PR p.2): Mr. Pallon Mistry and Mr. Firoz Cyrus Mistry (Non-Executive Directors), Mr. Santosh Nayar (Independent Director); Mr. Shapoorji P. Mistry Chairman Emeritus.
- Registered and corporate office: **Afcons House, 16, Shah Industrial Estate, Veera Desai Road, Azad Nagar, Andheri (West), Mumbai - 400 053**, Tel +91-22-6719 1000, secretarial@afcons.com, CIN L45200MH1976PLC019335 (Q1R p.14 letterhead; Q4T cover letter; AR26 p.331 Note 1). Investor relations: investor.relations@afcons.com (Q4PR p.3).
- Listing: IPO completed 4 Nov 2024 on NSE and BSE (AR26 Note 1 p.331). Parent: Shapoorji Pallonji and Company Private Limited until 12 Jan 2024; Goswami Infratech Private Limited from 13 Jan 2024 to 3 Nov 2024; both now "entity having significant influence" (AR26 p.381).

## 13. International vs domestic (V, see section 8 and 7)
Order book overseas 13% (Mar-26; FY22 28.94%, FY23 30.13%, FY24 27.65%); FY26 revenue overseas 28.0% (C) vs CFO "around 30%"; Q1 FY27 revenue overseas ~16%, order book overseas ~25% (CFO). Overseas margin "200 to 300 basis points" above domestic (CFO, Q1T PDF p.14). Geopolitical impact: "after the war, there were Petroleum, Oil, and Lubricants (POL) and gas-related issues ... in the overseas market" (CFO, Q4T PDF p.6).

## 14. ERP evidence (primary)
See fact-check.md section "ERP". Short form: RHP restated financials Note 52 (printed p.546, PDF 551): "The Company was using accounting software i.e. 'SAP ECC' as its books of accounts till 20 November 2023. The Company has upgraded its accounting software to 'SAP S/4 Hana with rise' with effect from 21st November,2023." Also RHP printed p.295: "We have implemented an SAP-based dashboard which provides real-time insights to management teams".

## 15. Gaps (honest)
- Retention FY25/FY26, BG/LC outstanding FY26, working-capital days definition for FY26, FY22-23 days, average borrowing rate FY26, Q1 FY27 balance-sheet items, business-segment revenue, AR25 exchange filing date, presentations' exact filing dates, primary NSE filing for the 30 Jun 2026 arbitral award: NF or not retrieved.
- Promoter pledge: no primary shareholding-pattern filing retrieved. Secondary search snippets (trendlyne/upstox) give 60.13% pledged Mar-26 and 100% Jun-26: treat as Weak; the gtm "~25% encumbered" is unsupported.
- Receivables and contract assets net/gross choice: this file always states net unless marked gross; never pair a net figure with a gross one.
