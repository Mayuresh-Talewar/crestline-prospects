# HCC (Hindustan Construction Company Limited): data, HC-1

## VERDICT: LIGHT

Blunt answer: **yes, this is a legacy-claims balance sheet.** Disputed receivables are 49.55% of the gross receivable book at 31 Mar 2026 (53.9% a year earlier), and much of the disputed book is court-stage arbitration (item S3). The ratings agency says unbilled work and disputed debtors "comprise majority debtors, which largely are due to the ongoing arbitration claims" (CARE, 8 Apr 2026, pdf p3). Headline receivable days (317.8, closing basis) and receivable plus contract asset days (497.6) are therefore NOT running-business days and must never be priced as such. Faster billing does not move a court.

Why LIGHT and not NOT FEASIBLE: there IS a running EPC book big enough to price, and it is getting slower on its own.
* Undisputed receivables considered good: Rs 1,701.67 Cr (FY26), of which Rs 1,172.21 Cr is up to one year old including not due. Undisputed receivable days: 90.9 (FY24), 103.5 (FY25), 157.8 (FY26). Infomerics independently puts "operational debtors" at 161 days in FY26.
* Retention inside receivables: Rs 812.63 Cr (FY26).
* Contract assets (unbilled work in progress): Rs 1,939.35 Cr, 179.8 days. The filing does NOT split claims from ordinary unbilled work inside this line, except Rs 115.71 Cr for closed or suspended projects (5.97%). This is the biggest unknown for any pricing.
* Contractee advances Rs 986.99 Cr and trade payables Rs 2,017.40 Cr fund the gap; the company has no fund-based working capital limits (CARE and Infomerics).

Rule for every later ticket: price days ONLY on the undisputed receivable slice, retention, and the certification queue we can evidence; show the disputed and award blocks as "outside Crestline's reach" context, never as a saving. Interest only at a disclosed facility rate (see Borrowings). The qualified audit opinion and the award machinery are Garvis items (S1 to S16), not booklet copy.

Grades: **V** = Verified (document, page, filing date, entity basis) | **C** = Computed (src/hc-calc.py, output in src/hc-calc-output.txt) | **NF** = NOT FOUND (searches listed). All figures INR crore, STANDALONE unless labelled. Page = printed page, pdf page in brackets.

## Sources (all in src/d/, primary, downloaded 8 Oct 2026)

| Code | Document | Filed / dated | File |
|---|---|---|---|
| AR26 | Annual Report FY2025-26 (100th) | HCC site upload 24 Jul 2026; AGM notice on NSE 24 Jul 2026 | hc-ar-fy26.pdf |
| AR25 | Annual Report FY2024-25 | HCC site upload 21 Jul 2025; AGM notice on NSE 21 Jul 2025 | hc-ar-fy25.pdf |
| AR24 | Annual Report FY2023-24 | HCC site upload 14 Jul 2025 (exchange date not checked; used for one ERP note only) | hc-ar-fy24.pdf |
| R4 | Q4 FY26 audited results (scan) | NSE 14 May 2026 | hc-res-q4fy26.pdf |
| R1 | Q1 FY27 unaudited results (scan) | NSE 6 Aug 2026 | hc-res-q1fy27.pdf |
| D4 / D1 / D25 | Analyst decks Q4 FY26 / Q1 FY27 / Q4 FY25 | 14 May 2026 / 6 Aug 2026 / 8 May 2025 | hc-pres-*.pdf |
| T4 / T1 / T3 / T1a / T25 | Call transcripts Q4 FY26 / Q1 FY27 / Q3 FY26 / Q1 FY26 / Q4 FY25 | calls 14 May 2026, 6 Aug 2026, 12 Feb 2026, 7 Aug 2025, 8 May 2025 (NSE filed 18 May 2026, 10 Aug 2026, 17 Feb 2026, 11 Aug 2025, 12 May 2025) | hc-tr-*.pdf |
| CARE | CARE Ratings press release (Revised) | dated 8 Apr 2026; filed on NSE 9 Apr 2026 | hc-care-apr26.pdf |
| INF | Infomerics rationale (inside company letter) | NSE 30 Jun 2026 | hc-nse-cr-20260630.pdf |
| PR | Press release, NHPC Salal contract | NSE 11 Aug 2026 | hc-nse-pr-20260811.pdf |

Blockers: none. BSE announcement API refused access (403); NSE announcements API used instead (Jan 2025 to 8 Oct 2026, 140 items read). R4 and R1 are image scans with no text layer: read only from page images. Vintage note: AR26 re-presents some FY25 balances (total assets 8,817.87 against 8,743.37 in AR25). Receivables, contract assets, payables, borrowings and revenue are identical in both vintages; where a FY25 figure differs it is flagged.

## Revenue, EBITDA, PAT, finance cost

| Item | FY24 | FY25 | FY26 | Q4 FY26 | Q1 FY27 | Grade, source |
|---|---|---|---|---|---|---|
| Revenue from operations | 5,042.78 | 4,801.05 | 3,937.25 | 988.71 | 981.73 | V: AR26 p109 (111); AR25 p113 (115); R4 pdf p7; R1 pdf p4 |
| of which contract revenue | 4,895.66 | 4,618.58 | 3,645.91 | | | V: AR26 p149 (151); AR25 p151 (153). Remainder is item S14 |
| EBITDA (excl other income) | 686.66 | 932.98 | 633.24 | 180.26 | 104.51 | C; FY26 and FY25 tie to Board's report AR26 p41 (43) |
| EBITDA margin % | 13.62 | 19.43 | 16.08 | 18.23 | 10.65 | C; company states 16.1% FY26, 10.7% Q1 FY27 (D4 p3, D1 p3) |
| PAT | 178.57 | 84.92 | 205.81 | 44.63 | 37.08 | V: same pages |
| Finance cost | 542.89 | 506.36 | 436.30 | 94.96 | 79.80 | V: same pages |
| Finance cost / revenue % | 10.77 | 10.55 | 11.08 | | | C |
| Revenue change % | | -4.79 | -17.99 | | | C |
| PAT change FY25 to FY26 % | | | 142.36 | | | C (company states 142%, D4 p3) |

Consolidated (CONSOLIDATED basis): revenue 7,006.78 (FY24), 5,603.37 (FY25), 3,969.59 (FY26); PAT 478.16, 112.63, 165.52. V: AR25 consolidated P&L (pdf 195); AR26 p189 (191). Change: -20.03% then -29.16% (C). FY24 consolidated includes a subsidiary group later sold (S10) and an exceptional gain of 850.75, so the FY24 to FY25 consolidated fall is not a like-for-like business decline.

## Receivables with ageing (standalone)

| Item | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Trade receivables, non-current | 654.99 | 646.52 | 1,178.39 | V: AR26 p131 (133); AR25 p135 (137) |
| Trade receivables, current (net) | 1,852.73 | 2,365.71 | 2,249.64 | V: same |
| Total net | 2,507.72 | 3,012.23 | 3,428.03 | V and C |
| Gross before credit-loss allowance | 2,554.10 | 3,063.15 | 3,484.29 | V: AR26 p132 (134); AR25 p136 (138) |
| Disputed, considered good | 1,251.52 | 1,651.17 | 1,726.36 | V: ageing tables, same pages |
| Undisputed, considered good | 1,256.20 | 1,361.06 | 1,701.67 | V |
| Disputed share of gross % | 49.0 | 53.9 | 49.55 | C |
| Receivable days (closing, on revenue) | 181.5 | 229.0 | 317.8 | C |
| Undisputed-good receivable days | 90.9 | 103.5 | 157.8 | C |
| Retention inside receivables | 807.58 | 921.99 | 812.63 | V: AR26 p131 (72.71 non-current + 739.92 current); AR25 p135 |
| Retention share of net receivables % | 32.2 | 30.61 | 23.71 | C |
| Presentation of receivables (note 6.1) | | | | See S3; not printed here |

FY26 ageing from transaction date (V: AR26 p132 (134), image-checked):

| Row | Not due | <6 m | 6 m to 1 y | 1 to 2 y | 2 to 3 y | >3 y | Total |
|---|---|---|---|---|---|---|---|
| Undisputed, good | 532.90 | 593.57 | 45.74 | 255.91 | 146.40 | 127.15 | 1,701.67 |
| Undisputed, credit impaired | 19.55 | 16.79 | 1.98 | 9.73 | 5.67 | 2.54 | 56.26 |
| Disputed, good | 0 | 430.92 | 457.91 | 170.71 | 132.71 | 534.11 | 1,726.36 |
| Total | 552.45 | 1,041.28 | 505.63 | 436.35 | 284.78 | 663.80 | 3,484.29 |

C: undisputed older than one year 529.46; disputed older than one year 837.53; disputed older than three years 534.11. Stated terms: receivables other than award receivables "are generally on terms of 30 to 90 days except retention deposits" (V: note 6.7, AR26 p132). Court-stage award content of receivables: item S3. Closed or suspended project receivables under Emphasis of Matter: item S2.

Rating-agency days (not the company's, different method): CARE receivable days 389 and gross current asset days 448 in FY25; 273 days excluding disputed debtors in FY25 against 240 in FY24 (V: CARE pdf p1, p3, image-checked). Infomerics: "Considering operational debtors, receivable days stood at 161 days in FY26" (V: INF pdf p15, page 4 of rationale, image-checked; Infomerics analytical approach is consolidated).

## Contract assets, advances, inventory

| Item | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Unbilled WIP (contract assets) | 2,069.17 | 2,144.85 | 1,939.35 | V: AR26 p108 (110), p150 (152); AR25 p112 (114) |
| Contract asset days | 149.8 | 163.1 | 179.8 | C |
| Receivables plus contract assets | 4,576.89 | 5,157.08 | 5,367.38 | C |
| Same, days | 331.3 | 392.1 | 497.6 | C |
| Contract liabilities (due to customers) | 30.16 | 20.69 | 35.02 | V: AR26 p150 (152) |
| Advances from contractee | 1,110.75 | 847.60 | 986.99 | V: AR26 p149 (151); AR25 p151 (153) |
| Advance days | 80.4 | 64.4 | 91.5 | C |
| Interest-bearing part of advances | | | | See S8; not printed here |
| Advance to suppliers and subcontractors | | 174.43 | 102.55 | V: AR26 p137 (139) |
| Inventories | 126.39 | 123.62 | 128.47 | V: AR26 p108; AR25 p112 |

Company's explanation of the FY26 fall in contract assets: "primarily due to higher certification of progress bills and revision in cost to completion during the year" (V: note 22.3(a), AR26 p150). Claims inside contract assets beyond the 115.71 closed-project amount: **NF** (searched AR26 notes 14, 22, 33 and KAM; the KAM says transaction price "may also include variable consideration pertaining to additional claims raised by the Company", AR26 p96 (98), with no amount).

## Payables, including MSME

| Item | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Trade payables, total | 1,796.27 | 2,061.41 | 2,017.40 | V: AR26 p148 (150); AR25 p151 (153) |
| of which micro and small enterprises | 90.21 | 125.67 | 111.54 | V |
| MSME share % | 5.02 | 6.1 | 5.53 | C |
| Payable days on materials plus subcontracting | 182.7 | 243.9 | 294.6 | C (basis is ours, not the company's) |
| MSME interest due and unpaid at year end | | 19.49 | 22.93 | V: note 20.1, AR26 p148 |
| FY26 payables older than 3 years | | | 236.00 | V: note 20.3, AR26 p149 (151) |
| FY26 unbilled dues within payables | | 783.26 | 542.52 | V: same |

C: FY26 MSME outside the "not due" bucket 74.06. Disputed payables: nil in all years (V). Stretched supplier credit is a funding source per both agencies ("relies on advances from customers and creditor funding", CARE pdf p3). Paying vendors later is never a saving in our calculations.

## Borrowings and disclosed rates (standalone, AR26 notes 17.1 to 17.3, p143 to 146 (145 to 148), image-checked)

| Facility | 31 Mar 2026 | Disclosed rate | Grade |
|---|---|---|---|
| Optionally convertible debentures (banks and others) | 275.65 | coupon 0.01%, yield 11.50% p.a. compounded quarterly | V, C |
| Non-convertible debentures, secured (LIC and ACRE) | 148.80 | LIC: yield 11.50% compounded quarterly; ACRE: yield 9.5% compounded quarterly; coupon 0.01% | V, C (split between the two not disclosed) |
| Non-convertible debentures, unsecured (ARCIL and others) | 309.09 | yield 9.5% compounded quarterly; coupon 0.01% | V, C |
| Foreign currency term loan, secured | 44.56 | 3 month SOFR plus 350 bp, floating | V, C |
| Foreign currency term loan, unsecured (USD 6.89 Mn restructured) | 24.92 | 1.91% fixed, compounded annually | V |
| Loan from others (former subsidiary) | 25.19 | interest free, on demand | V |
| Total borrowings | 828.21 | | V (FY25: 1,505.74) |
| Interest accrued on borrowings | 1,191.65 | | V: note 17.3 (FY25: 1,716.39) |
| Borrowings plus accrued interest | 2,019.86 | | C (FY25: 3,222.13; change -37.31%) |
| Net debt per company note | 1,713.83 | | V: note 17.3 (FY25: 2,676.66) |

Debt as stated elsewhere: company "Debt reduction by 38% YoY to Rs 1,995 crore" (AR26 p3 (5); D4 p3); CARE "from Rs 3,279 crore as on March 31, 2025, to Rs 2,016 crore as on March 31, 2026" (CARE pdf p1). Three figures for one date: 1,995 (company), 2,016 (CARE), 2,019.86 (our sum of note 17.3). Gap 24.86 between company and our sum (C). Rule: any interest scenario uses one facility's disclosed rate, capped at that facility's balance. Covenants: "in compliance" at both year ends (V: note 17.4). Fund-based working capital limits: none (CARE pdf p2, p3; INF pdf p15).

## Operating cash flow (standalone)

| Item | FY24 | FY25 | FY26 | Grade |
|---|---|---|---|---|
| Net cash from operating activities | 389.78 | 74.51 | 700.70 | V: AR26 p110 (112); AR25 p114 (116) |
| Change in trade receivables (cash flow line) | +148.50 | -509.05 | -409.36 | V |
| OCF / EBITDA % | 56.76 | 7.99 | 110.65 | C |

The FY26 cash flow was lifted by collections of long-stuck receivables, per the CFO (depth.md Q2). The FY25 working-capital lines differ between AR25 and AR26 vintages (financial assets line -102.80 vs -177.30); OCF is identical.

## NWC days the company states

* Debtors turnover ratio 1.22 times (FY26), 1.74 times (FY25); inventory turnover 19.83 and 24.68 (V: AR26 p20 (22), Key Financial Ratios). Implied days 299.2 and 209.8 (C; the company's denominator is not disclosed).
* Any stated NWC days, cash conversion cycle, or working capital days target: **NF**. Searched AR24, AR25 and AR26 (front sections, pdf p1 to p99) for "working capital days / cycle / target", "receivable / debtor / collection days", "cash conversion cycle", "NWC": 0 hits each; all 5 transcripts and 3 decks for "working capital", "days", "debtor", "target": no company target. Planted control: "working capital" occurs on 10, 16 and 10 pages of AR24, AR25, AR26, and "target" in T1 pdf p3, so the scanner reads these files. Our own construct (inventory + receivables + contract assets less payables less contractee advances): 130.0 / 180.3 / 231.0 days FY24 / FY25 / FY26 (C; a Crestline construct, never to be printed as the company's).

## Order book and inflow

| Item | Figure | Grade, source |
|---|---|---|
| Order book 31 Mar 2025 | 11,852 | V: note 22.2, AR26 p150 (152). CONFLICT: Board's report says the year opened at 11,188 (AR26 p41) |
| Order book 31 Mar 2026 | 12,971 | V: note 22.2; D4 p4 |
| Order book 30 Jun 2026 | 12,976 | V: R1 note 4, pdf p5 (image-checked) |
| Order book / FY26 revenue | 3.29x | C |
| FY26 new orders | 5,910 (AR26 p3 highlights); 8,828 with company share 5,636 (AR26 p41 Board's report); 5,654 HCC share incl about 1,100 LOA received Apr 2026 (D4 p3) | V, three different company figures, none chosen |
| Q1 FY27 new orders | 127 | V: D1 p3 |
| L1 at Q1 FY27 | 2,124 (HCC share 1,671) | V: D1 p3 |
| FY27 order booking guidance | about 15,000 | V: D4 p14; T4 pdf p2 |
| After Q1: NHPC Salal Power Station contract | 524.17, 27 months | V: PR, NSE 11 Aug 2026. Live check: no cancellation, termination or short-closure filing on NSE to 8 Oct 2026 |
| Order book mix 31 Mar 2026 | Transport 67%, Hydro 18%, Water 11%, Nuclear and buildings 3% | V: D4 p4 (image-checked; the four shares sum to 99 by rounding). The same slide says the backlog excludes about 1,100 LOA received in Apr 2026 and L1 of 840 |

## ERP (filings only)

* "migrating its Enterprise Resource Planning (ERP) system from SAP ECC 6.0 to SAP S/4HANA, now hosted on a cloud platform"; SAP Treasury Management module implemented; SAP SuccessFactors begun (V: AR25 p91 (93), FY25, image-checked).
* "Designed and deployed an SAP RA Bill Management system" for subcontracting, PRW and equipment hire work orders, covering retention, PBG, advances and recoveries, RA bill creation and approval (V: AR26 p86 (88), image-checked). This is the P2P side of the RA bill cycle, already in SAP.
* "the Company has used SAP application as accounting software for maintaining its books of account" with audit trail (V: AR24 note 46, pdf 181, image-checked).
* Client-side (O2C) RA bill or certification tracking in SAP: **NF** (searched AR24, AR25, AR26 for "SAP", "ERP"; 2 to 4 hits each, all listed above).

## People and registered office

| Item | Value | Grade, source |
|---|---|---|
| Vice Chairman & Managing Director | Arjun Dhawan (w.e.f. June 26, 2025) | V: AR26 pdf p16 Company Information; T1 pdf p1 (6 Aug 2026) |
| Chief Financial Officer | Rahul Shukla (w.e.f. June 1, 2025) | V: AR26 pdf p16; signs AR26 statements 14 May 2026; T1 pdf p1 |
| Chairman | Ajit Gulabchand | V: AR26 pdf p16 |
| Operations Director & Chief Business Officer | Santosh Rai | V: T1 pdf p1, T4 pdf p1 (not a KMP in AR26) |
| Deputy Chief Financial Officer | Ravi Jain | V: T4 pdf p1 |
| Company Secretary | Nitesh Kumar Jha | V: AR26 pdf p16 |
| Former MD & CEO | Jaspreet Bhullar, "upto June 23, 2025" | V: AR26 pdf p16; NSE resignation 23 Jun 2025 |
| Former CFO | Girish Gangal, "upto May 31, 2025" | V: AR26 pdf p16 |
| Registered office | Hincon House, Lal Bahadur Shastri Marg, Vikhroli (West), Mumbai 400 083 | V: AR26 pdf p16; letterhead on PR (11 Aug 2026) |
| CIN | L45200MH1926PLC001228 | V: PR letterhead |

KMP change after AR26: none on NSE to 8 Oct 2026 (searched the announcements list for "Appointment", "Resignation", "Change in Management"; the only hit is an independent director appointed 10 Jul 2026). Two directors listed in AR26 have died (S9); they are never named as officers.

## Conflicts inside the company's own documents (none resolved by us)

1. One receivable sub-line at 31 Mar 2025 is printed with two different values in AR25 (note 6.3, p135) and in the AR26 comparative (note 6.5, p132). Details S3 (g).
2. FY26 new orders: 5,910 / 5,636 / 5,654 (above).
3. Order book at 31 Mar 2025: 11,852 (note 22.2) against 11,188 (Board's report).
4. Debt at 31 Mar 2026: 1,995 (company) / 2,016 (CARE) / 2,019.86 (note 17.3 sum).
5. CARE's own text: "389 days in FY24 (337 days in FY24)" (pdf p3) and 9MFY26 income 2,857 in text against 2,478 in its table (pdf p1, p5); CARE FY25 operating income 4,526 against 4,801.05 revenue in AR25.

## Planted-hit and region rules used

Every text scan was run with a planted control known to exist in the same file (e.g. "SAP" found on AR26 pdf p88 before reading a zero elsewhere; "fastest" found on AR25 pdf p6 and p15 before declaring "fastest implementation of SAP" absent). Every image read used a crop of the full page width and at least 25% of page height (most were full pages), so no table column or speaker label sat outside the region.
