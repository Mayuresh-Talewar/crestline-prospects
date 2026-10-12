# J. Kumar Infraprojects Limited (NSE: JKIL, BSE: 532940): data

## VERDICT: FULL

Feasible in full. The company's own filings give everything the booklet needs: three years of standalone balances, a receivable ageing from due date, contract assets, mobilisation advances, MSME dues with ageing, eleven borrowing lines with their disclosed rates, a working capital day count the company publishes every quarter, its own working capital targets in its own words, and the name of its ERP. Retention money is NOT in the accounts; the CFO states it on every call, so it is usable as the CFO's figure, not as an audited one.

Blunt caveats:
1. The ERP is **Farvision**, named in the FY26 annual report. Not SAP. The dossier's "SAP likely" is wrong. Any copy that says "layer on SAP" must go.
2. The company does not define its "working capital days" anywhere we found, and its FY24 figure exists in two vintages (123 days in the FY24 report, 105 days in the 2026 decks). Print the company's number with its source; never rebuild it.
3. FY26 operating cash flow (Rs 1,116 Cr) is real but flattered: Rs 284 Cr came from released bank deposits and Rs 177 Cr from new capex creditors. See section 11.
4. A Garvis item sits in sensitive-garvis.md (a regulator matter naming an MD). It does not change feasibility; it may change tone and timing.

Basis: **STANDALONE** unless labelled. FY26 consolidated includes a new subsidiary; FY25 consolidated equals standalone, so a consolidated FY26 vs FY25 comparison is not same basis. Units: Rs crore (Cr). Lakh converted by script (`src/jk-calc.py`, output `src/jk-calc-output.txt`; run `python -I src/jk-calc.py` from this folder). Every table and quote below was read from the rendered page image.

## Sources (all in src/d/, all primary)

| Key | Document | Filed (NSE) | Notes |
|---|---|---|---|
| AR26 | Annual Report FY2025-26 (`AR_FY26.pdf`) | 27 Aug 2026 | Two printed pages per PDF page. FS approved 19 May 2026. Auditor Todi Tulsyan & Co., unmodified opinion |
| AR25 | Annual Report FY2024-25 (`AR_FY25.pdf`) | 29 Aug 2025 | FS approved 20 May 2025 |
| AR24 | Annual Report FY2023-24 (`AR_FY24.pdf`) | 30 Aug 2024 | used for FY23/FY24 ratio vintage only |
| R426 | Q4 FY26 audited results (`Q4FY26_results.pdf`) | 19 May 2026 | standalone revenue ties to AR26 |
| IP426 / IP127 | Investor presentations Q4 FY26 / Q1 FY27 | 19 May 2026 / 6 Aug 2026 | |
| R127 | Q1 FY27 limited-review results (`Q1FY27_results.pdf`, scanned) | 6 Aug 2026 | |
| PR127 | Q1 FY27 press release | 6 Aug 2026 | |
| T425, T126, T226, T326, T426, T127 | Call transcripts: 21 May 2025, 30 Jul 2025, 7 Nov 2025, 6 Feb 2026, 20 May 2026, 7 Aug 2026 | 26 May 2025, 4 Aug 2025, 11 Nov 2025, 9 Feb 2026, 25 May 2026, 10 Aug 2026 | page numbers = transcript's own "Page x of y" |
| ICRA | ICRA rationale (`ICRA_JKIL_202602.pdf`) | 27 Feb 2026 (rating date) | ICRA analyses on a CONSOLIDATED basis |
| Orders | LoA filings 28 Jul 2025, 13 Aug 2025, 12 Feb 2026, 1 Apr, 4 Apr, 23 Apr, 6 Aug 2026 | as dated | |
| KMP | CHRO appointment 16 Sep 2026; CFO appointment filing 6 Aug 2024 (NSE list) | | |

Could not fetch: BSE API (Access Denied). Not needed; NSE served every document.

## 1. Profit and loss (STANDALONE, Rs Cr)

| Item | FY24 | FY25 | FY26 | Grade / source |
|---|---|---|---|---|
| Revenue from operations | 4,879.20 | 5,693.49 | 5,693.89 | Verified: AR25 PDF p156 (printed 153); AR26 PDF p89 (printed 173) |
| Growth | | +16.7% | +0.007% (flat) | Computed, jk-calc |
| EBITDA (revenue less material, construction, employee, other expenses) | 704.06 | 826.40 | 818.70 | Computed from the same pages |
| EBITDA margin | 14.4% | 14.5% | 14.4% | Computed |
| Finance cost | 123.88 | 155.09 | 162.30 | Verified: same pages |
| PAT | 328.59 | 390.45 | 383.55 | Verified: same pages. FY26 after a Rs 12.37 Cr exceptional item (Labour Codes) |
| PAT margin | 6.7% | 6.9% | 6.7% | Computed |
| Q1 FY27 revenue / PAT / finance cost | | | 1,507.42 / 97.81 / 43.26 (Q1 FY26: 1,478.66 / 102.73 / 38.35) | Verified: R127 PDF p5, 6 Aug 2026, STANDALONE, unaudited |

Company's own CONSOLIDATED headline (MD&A, Rs Cr): FY26 revenue 5,723, EBITDA 823 (14.4%), PAT 387, finance cost 168; FY25 5,693 / 826 / 391 / 155. Verified: AR26 PDF p29 (printed 52). Consolidated FY26 revenue 5,723.03 Cr, PAT 386.90 Cr: AR26 PDF p116 (printed 227). Note AR25 printed FY25 PAT as 390 (AR25 PDF p46, printed 43); AR26 reprints it as 391 (associate share). Two vintages; use one per chart.

Finance cost split FY26 (S, note 28, AR26 PDF p103, printed 201): interest on borrowings 71.85, other finance charges 64.36, guarantee commission 25.72, lease 0.32. Interest on borrowings is 44.3% of finance cost (Computed).

## 2. Receivables, contract assets, retention, advances (STANDALONE unless stated)

| Item (Rs Cr, 31 Mar) | FY24 | FY25 | FY26 | Grade / source |
|---|---|---|---|---|
| Trade receivables (net) | 1,192.44 | 1,488.56 | 1,485.29 | Verified: AR25 PDF p155 (printed 152); AR26 PDF p89 (printed 172) |
| Receivable days, closing basis (x365 / revenue) | 89.2 | 95.4 | 95.2 | Computed |
| Contract assets (unbilled revenue) | 553.11 | 589.02 | 577.97 | Verified: AR25 PDF p172 (printed 169); AR26 PDF p97 (printed 189) and note 39(c) PDF p109 (printed 213) |
| Contract asset days | 41.4 | 37.8 | 37.1 | Computed |
| Mobilisation and machinery advance (liability) | 459.25 | 621.02 | 706.09 | Verified: AR25 PDF p183 (printed 180); AR26 PDF p103 (printed 200) |
| Advances to suppliers (asset) | 61.27 | 79.74 | 140.43 | Verified: same as contract assets |
| Expected credit loss allowance | nil | nil | 2.48 | Verified: AR26 PDF p96 (printed 187) |
| Security deposits (financial assets, non-current + current) | not tabulated | 220.48 + 147.17 | 314.49 + 149.08 | Verified: AR26 PDF p96 (printed 187). What they are deposited with is NOT stated |

**Receivable ageing from DUE DATE** (Verified: AR26 PDF p97, printed 188 for FY26 and FY25; AR25 PDF p171, printed 168 for FY24). Rs Cr:

| | Not due | < 6 m | 6 m to 1 y | 1 to 2 y | 2 to 3 y | > 3 y | Total |
|---|---|---|---|---|---|---|---|
| FY24 | 962.49 | 105.93 | 18.43 | 62.79 | 30.97 | 11.82 | 1,192.44 |
| FY25 | 1,232.24 | 155.18 | 12.65 | 46.13 | 29.43 | 12.94 | 1,488.56 |
| FY26 | 1,076.79 | 185.74 | 141.15 | 43.98 | 20.16 | 17.47 | 1,485.29 |

Computed (jk-calc): overdue share 19.3% / 17.2% / **27.5%**; past due over 6 months 10.4% / 6.8% / **15.0%**; the 6 m to 1 y bucket rose **11.2x** (+Rs 128.50 Cr) in FY26. All undisputed; none credit impaired.

**Retention money: NOT FOUND in the accounts** (searched AR24, AR25, AR26 full text for "retention money", "retention", "withheld", "retained by"; zero hits in the financial statements). The CFO states it on calls (company's words, not audited; Verified, image-checked):

| Date (call) | Retention | Unbilled | Mobilisation advance | Speaker, page |
|---|---|---|---|---|
| 30 Jun 2025 (T126, 30 Jul 2025) | 386 | 650 | 789 | Vasant Savla, T126 p14 (retention, unbilled), p13 (mob. adv.) |
| 30 Sep 2025 (T226, 7 Nov 2025) | about 389 | about 695 | 900 | Vasant Savla, T226 p13 |
| 31 Dec 2025 (T326, 6 Feb 2026) | 415 | | | Vasant Savla, T326 p12 (also debtors 1,407) |
| 31 Mar 2026 (T426, 20 May 2026) | 464 | 578 | 706 | Vasant Savla, T426 p4 |

Interest-bearing mobilisation advance: "INR470 crores", "varying interest rate from 8.5% to 11%" (Nalin Gupta, T127 p13, 7 Aug 2026). Kamal Gupta added "around 8 5% to 9.5%, 10% I don't think anything is above 10". CONFLICT: asked for the total, Nalin Gupta said "Total is INR470 crores", but the balance sheet shows Rs 706.09 Cr at 31 Mar 2026 and the CFO said 706 on T426. Treat 470 as the interest-bearing part only.

## 3. Inventories (STANDALONE)

| Rs Cr | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Inventories | 481.46 | 503.48 | 329.65 | Verified: AR25 PDF p155; AR26 PDF p96 (printed 187): raw materials, stores and spares 319.44, trading 10.21 |
| Days on material cost | 55.4 | 49.0 | 32.1 | Computed |

Internal mismatch: note 25 (AR26 PDF p103, printed 201) gives closing stock 305.85, against 319.44 raw materials in note 7. Difference not explained. Also, the CFO's "inventory" on calls is "raw material plus unbilled revenue" (T126 p14); do not mix with the balance sheet line.

## 4. Payables, including MSME (STANDALONE)

| Rs Cr | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Trade payables total | 586.39 | 839.50 | 849.54 | Verified: AR25 PDF p155; AR26 PDF p89 |
| of which micro and small | 73.89 | 86.21 | 98.72 | same |
| MSMED principal unpaid at year end | 73.68 | 68.37 | 80.53 | Verified: AR25 PDF p183 (printed 180); AR26 PDF p102 (printed 199). Interest due under MSMED: nil, all years |
| Disputed MSE dues | | 17.84 | 18.19 | Verified: AR26 PDF p102 (printed 199) |
| Payable days on material cost | 67.5 | 81.7 | 82.8 | Computed |

Payables ageing FY26 (from due date, Rs Cr): MSE not due 80.53; others not due 484.51, < 1 y 208.29, 1 to 2 y 32.80, 2 to 3 y 15.11, > 3 y 10.11; disputed MSE 18.19. Computed: 35.5% of non-MSE payables past due (FY25 38.6%).

## 5. Borrowings, with disclosed rates (STANDALONE)

Gross debt 666.26 (FY25) to **587.44** (FY26): non-current 256.52, current 330.92 (of which repayable on demand 202.56, overdraft 24.81, current maturities 103.55). Verified: AR26 PDF p99 (printed 193), p100 (printed 195). Q1 FY27 gross debt "840" (Kamal Gupta, T127 p11, consolidated context, unaudited).

Rates as disclosed, note 17, AR26 PDF p100 (printed 194). Amount per lender is NOT disclosed:

| Facility | Disclosed rate |
|---|---|
| HDFC Bank term loans | 8.25% to 9.50% p.a. |
| ICICI Bank term loans | 1 year MCLR + 0.60%, "currently equal to 8.40% p.a." |
| Tata Capital Financial Services | 9.35% to 11% p.a. |
| Kotak Mahindra Bank | 8.50% to 9.50% p.a. |
| Bank of Baroda | 8.80% p.a. |
| Union Bank of India | 8.95% p.a. |
| Bank of India | 8.60% p.a. |
| India Exim Bank (capex LC) | 9.25% p.a. |
| Indian Bank | 9.35% p.a. |
| Working capital (cash credit, consortium led by Bank of India) | 9.00% to 12.35% p.a. |
| Overdraft | 8.1% to 11.1% p.a. |

Consortium limits: fund based Rs 400 Cr, non-fund (BG/LC) Rs 2,650 Cr (AR26 PDF p100, printed 195). Bank guarantees outstanding Rs 4,363.75 Cr vs 2,945.16 (x1.48) (AR26 PDF p105, printed 204). ICRA: fund-based utilisation averaged 38% over 18 months to Dec 2025 (ICRA p3).

Internal conflicts: (a) note 37 says 0% of borrowings are variable rate (AR26 PDF p109, printed 212), yet the ICICI loan is MCLR-linked; (b) AR25 printed the ICICI rate as "MCLR + 8.05%", AR26 as "MCLR + 0.60%". Computed only, never print as theirs: FY26 interest on borrowings / average gross debt = 11.5%.

## 6. Operating cash flow (STANDALONE)

FY24 336.46, FY25 375.29, FY26 **1,116.45** (x2.97). Verified: AR25 PDF p158 (printed 155); AR26 PDF p90 (printed 175). Consolidated headline "Rs 1,128 crore" (AR26 printed 13 and 21). See section 11 for what drove it.

## 7. Working capital days the company states

| Period | Working capital cycle | Debtors | Inventory | Creditors | Source |
|---|---|---|---|---|---|
| FY23 | 126 | 99 | 81 | 55 | AR24 PDF p32 (printed 58) |
| FY24 | **123** (AR24) / **105** (IP426, IP127 slide 30) | 89 | 77 | 44 | AR24 PDF p32; AR25 PDF p46 (printed 43) |
| FY25 | 112 | 96 | 70 | 54 | AR25 PDF p46; AR26 PDF p29 (printed 53) |
| FY26 | 99 | 95 | 58 | 54 | AR26 PDF p29 (printed 53) |
| Q1 FY27 | 103 | | | | T127 p3, opening remarks labelled "Nalin Gupta" (the moderator handed over to Kamal Gupta, p2; the speaker introduces himself as Nalin Gupta). Kamal Gupta repeats "Net working capital is 103 days" (T127 p7) |

Definition: **NOT FOUND**. Searched AR24, AR25, AR26 MD&A and notes, both decks, all six transcripts. The only defined ratio is note 42: trade receivable turnover = revenue / average trade receivables, 3.83x FY26, 4.25x FY25 (AR26 PDF p110, printed 215). Computed: 3.83x = 95.3 days, which matches the stated 95; FY25 4.25x = 85.9 days, which does NOT match the stated 96 (the stated 96 matches closing basis, 95.4). So the company's day counts are not on one basis across years. Inventory turnover was redefined between AR25 (revenue / average unbilled revenue) and AR26 (material cost / average inventory).

ICRA (CONSOLIDATED, ICRA's definition): NWC / operating income 23.4% at 30 Sep 2025, 25.1% FY25 (ICRA p2).

Crestline's own computation, our definition only: receivables + contract assets + inventory less payables and mobilisation advance = 88.4 / 71.8 / 53.7 days of revenue (FY24 / FY25 / FY26). Receivables plus contract assets alone = 132.3 days of FY26 revenue (Rs 2,063.26 Cr).

## 8. Order book and inflow (Rs Cr)

| | FY25 | FY26 | Q1 FY27 | Source |
|---|---|---|---|---|
| Order book (period end) | 22,238 | 18,554 | 22,246 | AR25 PDF p45 (printed 42); AR26 note 39(e) PDF p109 (printed 213); IP127 slide 10 |
| Order inflow | 4,700 | 1,039 | 4,556 | AR25 PDF p45; AR26 PDF p29 (printed 52); IP127 slide 10 |

Order book FY26 = 3.26x FY26 standalone revenue (Computed). Mix at 30 Jun 2026: elevated corridors and flyovers 48%, roads and road tunnels 20%, metro 9%, others 23% (Nalin Gupta, T127 p3); Maharashtra 65% (IP127 slide 10). ICRA: about 72% of the order book at 30 Sep 2025 was "in the nascent stages of execution in terms of financial billing on account of milestone-linked payment cycles" (ICRA p1). Top three clients about 65% of the unexecuted book (ICRA p2). Contract revenue from four customers was Rs 3,413.59 Cr in FY26 (AR26 PDF p107, text layer).

## 9. ERP (filings only)

**Farvision ERP.** Verified: AR26 PDF p67 (printed 129), BRSR Principle 1, board and KMP familiarisation programme: "Confirmation is sought on whether the current Farvision ERP being used is the latest version available from the service provider or an earlier version" and "An assessment of utilisation of Farvision ERP functionalities may be presented, including modules implemented, extent of usage, and functionalities available but not yet fully deployed." No SAP, Oracle or other ERP named in any document read (searched all 3 ARs, both decks, 6 transcripts). Auditor's Rule 11(g) note says only "accounting software" with audit trail (AR26 PDF p86).

## 10. People and registered office

| Name | Exact title in filings | Source |
|---|---|---|
| Jagdishkumar M. Gupta | Executive Chairman | AR26 PDF p89 (printed 172); R127 PDF p5 |
| Kamal J. Gupta | Managing Director | AR26 PDF p89; T127 cover "Managing Director" |
| Dr. Nalin J. Gupta | Managing Director | AR26 PDF p89; KMP filing 16 Sep 2026 signed "Managing Director". The AR26 letter is headed "Joint Managing Directors' Message" (PDF p9, printed 12) |
| Vasant Savla | Chief Financial Officer (w.e.f. 6 Aug 2024); also "Chief Risk Officer" member of the Risk Management Committee | AR25 PDF p191 (printed 188); AR26 PDF p32 (text layer) |
| Poornima (signs "Poornima"; signature "Poornima Chintakindi"; AR26 prints "Poornima Reddy") | Company Secretary | AR26 PDF p89; letters 2025 to 2026 |
| Milind Gopalrao Wani | Chief Human Resources Officer (SMP) w.e.f. 15 Sep 2026 | KMP filing 16 Sep 2026 |

Registered office: J. Kumar House, CTS No. 448, 448/1, 449, Subhash Road, Vile Parle (East), Mumbai 400 057, Maharashtra. CIN L74210MH1999PLC122886. Verified: letterhead image, T126 cover letter (4 Aug 2025); same text on R127 PDF p5 (6 Aug 2026) and KMP letter (16 Sep 2026). Emails for people: NOT FOUND in filings (only investor.grievances@jkumar.com and info@jkumar.com).

## 11. Disconfirm results (top findings)

| Finding | Test run | Result |
|---|---|---|
| WC days improved 112 to 99 | Same-basis check of the series | Holds for FY25 to FY26, but the FY24 base exists twice (123 vs 105) and debtor days mix bases. Print the company's numbers as theirs, with vintage |
| OCF tripled | Read every cash flow line (AR26 p90) | Rs 283.97 Cr came from released bank deposits (margin money) and Rs 176.51 Cr from new creditors for capital expenditure, both inside OCF. Without them OCF is Rs 655.97 Cr, x1.75 not x2.97 (Computed, our adjustment). Receivables moved only Rs 10.77 Cr |
| Collections tightened (management says) | Ageing from due date | Receivables are flat, but the overdue share rose from 17.2% to 27.5% and 6 to 12 months overdue went 11.2x. The improvement in days came from inventory (DIO 70 to 58) and advances, not from debtors |
| ERP is SAP (dossier) | Search all filings | Contradicted: Farvision, AR26 PDF p67 |
| Orders cited are live | 214 NSE announcements Jan 2024 to Sep 2026 scanned for cancel / terminat / short close / foreclos / withdraw / conclud (planted hit tested) | No exchange filing of a cancellation. BUT Kamal Gupta says an order "Orange Gate, which got cancelled" (T127 p7, 7 Aug 2026), and the Virar Alibaug L1 (about Rs 4,000 Cr) was dropped as the client moved to BOT (Nalin Gupta, T126 p6). Neither is in the order book figures above as far as we can tell; do not cite either as live |
