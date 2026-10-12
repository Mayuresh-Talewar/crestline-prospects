# Thermax Limited: data (TH-1)

Blockers: none. Every primary document named in the ticket was fetched. Q4 FY26 and Q1 FY27 transcripts are not on the exchange (the NSE filings only point to the company site), so they were taken from thermaxglobal.com/investors/quarterly-results. No ICRA or India Ratings rationale was found for Thermax Limited (search: rating rationale + Thermax Limited on all four agencies; only CRISIL and CARE hits for the parent).

## FEASIBILITY VERDICT: LIGHT

Blunt read. Thermax is a manufacturer with a project arm, rated CRISIL AA+/Stable, net debt free at group level (CRISIL 19-Jan-2026), and its operating working capital is NEGATIVE on both bases because customer advances fund it:

| Basis, FY26 | Operating NWC (TR + contract assets + inventory, less trade payables and contract liabilities) | Days of revenue |
|---|---|---|
| Thermax Limited STANDALONE | Rs -85.99 cr | -4.8 |
| Thermax group CONSOLIDATED | Rs -214.81 cr | -7.3 |
| Industrial Infra SEGMENT (segment assets less segment liabilities) | Rs 160.12 cr | 13.4 |

(Computed, th-calc.py.) A booklet that says "your capital is trapped in working capital" would be false here.

What IS real and provable from their own filings:
1. Overdue receivables. Consolidated gross trade receivables Rs 2,500.19 cr, of which Rs 1,443.42 cr (57.7%) is past due and Rs 377.27 cr is more than a year past due; ECL allowance Rs 295.35 cr. Standalone: 45.6% past due, Rs 176.66 cr over a year.
2. Cash conversion fell. Consolidated OCF halved, Rs 1,079.79 cr to Rs 541.55 cr (-49.8%; AR26 MD&A p113 prints "(50%)"); OCF/PAT 75% after 172%. Management's own explanation: "higher retention in the project business and lower customer advances" (AR26 MD&A).
3. Contract assets (unbilled plus retention) up 21% to Rs 773.08 cr, "mainly in TBWES".
4. The Group CFO admitted the build on the Q4 call and promised to work the overdues down "over the next couple of quarters". No number was given.
5. Execution: a Rs 91 cr cost-to-complete hit on one PSU project in Q1 FY27 (Industrial Infra PBIT -8.7%).

Can Industrial Infra be priced honestly? Partly. The consolidated segment note publishes revenue, PBIT, segment assets and segment liabilities, so a value of a day exists: Rs 11.91 cr of segment revenue per day (FY26, AR26 vintage). It does NOT publish receivables, contract assets, retention, advances or overdues by segment (NOT FOUND, searched AR26 note 33, Q4 FY26 and Q1 FY27 decks). So days can be valued at segment level but cannot be split into collection days vs unbilled days per segment. Receivable ageing exists only for the whole group and for the standalone entity.

Recommended basis: value of a day from the Industrial Infra SEGMENT (consolidated note), problem evidence from the CONSOLIDATED receivable ageing and contract assets (the large project orders sit in subsidiary TBWES, not in the standalone entity: standalone Industrial Infra revenue was only Rs 1,537.80 cr of the segment's Rs 4,348.05 cr). Savings should be framed as cash released and overdue days removed, not interest: the group carries more cash and liquid investments (Rs 2,467 cr, AR26 p21) than debt (Rs 2,288.01 cr), so "interest saved" only holds where cash actually repays a named facility.

Warning on vintages: the Industrial Infra segment has been restated twice. FY26 segment revenue reads Rs 4,348.05 cr in AR26 and Rs 4,088.34 cr in the Q1 FY27 results (Bioenergy moved to Green Solutions). FY25 consolidated trade receivables read Rs 2,565.35 cr in AR25 and Rs 2,003.01 cr in AR26 (contracts now shown net: consolidated p289 "refer note 49"; the standalone notes p409 refer to note 47). Never mix vintages in one chart.

## Sources (all fetched, saved in src/d/)

| Code | Document | Filed | File |
|---|---|---|---|
| AR26 | Annual Report 2025-26 | NSE 03-Jul-2026 | AR26.pdf |
| AR25 | Annual Report 2024-25 | NSE 05-Jul-2025 | AR25.pdf |
| AR24 | Annual Report 2023-24 (FY23 as comparative) | NSE 08-Jul-2024 | AR24.pdf |
| Q4R | Q4 FY26 audited results + board outcome | NSE 07-May-2026 | Q4FY26_results.pdf |
| Q4P | Q4 FY26 investor presentation | NSE 07-May-2026 | Q4FY26_pres.pdf |
| Q4PR | Q4 FY26 press release (company site) | 07-May-2026 | PR_Q4FY26.pdf |
| Q4T | Q4 FY26 call transcript, call 08-May-2026 | NSE pointer 12-May-2026 | TR_Q4FY26.pdf |
| Q1R | Q1 FY27 limited-review results | NSE 30-Jul-2026 | Q1FY27_results.pdf |
| Q1P | Q1 FY27 investor presentation (revised) | NSE 31-Jul-2026 | Q1FY27_pres_rev.pdf |
| Q1PR | Q1 FY27 press release (company site) | 30-Jul-2026 | PR_Q1FY27.pdf |
| Q1T | Q1 FY27 call transcript, call 31-Jul-2026 | NSE pointer 06-Aug-2026 | TR_Q1FY27.pdf |
| Q3T / Q2T / Q4T25 | Call transcripts 05-Feb-2026 / 12-Nov-2025 / 12-May-2025 | company site | TR_Q3FY26, TR_Q2FY26, TR_Q4FY25 |
| CRISIL | Rating rationale, Thermax Limited | 19-Jan-2026 | CRISIL_20260119.html |
| CARE | Rating rationale, CP | 14-Jan-2026 | CARE_20260114.pdf |
| NSE-x | Reg 30 filings (orders, disputes, penalties, rating letters) | dates in file names | src/d/ |

Page numbers: AR pages are the printed page numbers (the PDFs are two-page spreads). All tables below were read from rendered page images.

## 1. Profit and loss (Verified)

| Figure | STANDALONE FY26 | STANDALONE FY25 | CONSOLIDATED FY26 | CONSOLIDATED FY25 | Source |
|---|---|---|---|---|---|
| Revenue from operations | 6,518.26 | 6,244.53 | 10,694.15 | 10,369.26 | AR26 p357 / p227 |
| Other income | 284.56 | 202.53 | 267.48 | 252.22 | same |
| Finance cost | 24.87 | 31.53 | 138.96 | 116.78 | AR26 p357, p412 / p227 |
| Depreciation and amortisation | 97.19 | 73.64 | 207.64 | 158.51 | same |
| Profit before exceptional items and tax | 707.02 | 619.41 | 946.73 | 884.47 | same |
| Exceptional items | 87.84 | 93.73 | 61.21 | nil | same |
| PAT | 648.91 | 572.14 | 720.26 | 626.70 | same |
| PAT attributable to owners | n.a. | n.a. | 720.50 | 634.47 | AR26 p227 |
| EBITDA incl. other income (Computed) | 829.08 | 724.58 | 1,293.33 | 1,159.76 | th-calc.py |
| EBITDA excl. other income (Computed) | 544.52 | 522.05 | 1,025.85 | 907.54 | th-calc.py |
| EBITDA margin excl. OI (Computed) | 8.35% | 8.36% | 9.59% | 8.75% | th-calc.py |

The company's own "Profit before depreciation, finance cost, exceptional items and tax" for FY26 is Rs 1,294 cr (AR26 p114, ten-year table, CONSOLIDATED), which matches our EBITDA incl. other income.

Earlier years: CONSOLIDATED revenue FY24 9,323.46, FY23 8,089.81; PAT FY24 643.19, FY23 450.70 (AR24 p207). STANDALONE revenue FY24 5,821.93, FY23 5,141.16; PAT FY24 437.44, FY23 329.26 (AR24 p315). FY25 consolidated revenue as originally reported 10,388.69 (AR25 p209), restated 10,369.26 in AR26.

Quarters: Q4 FY26 consolidated revenue Rs 3,428 cr, PAT Rs 244 cr (+18%); standalone revenue Rs 2,226 cr, PAT Rs 201 cr (Q4PR p1). Q1 FY27 consolidated revenue Rs 2,302.73 cr, PBT Rs 42.14 cr, PAT Rs 22 cr; standalone revenue Rs 1,303 cr, loss after tax Rs 18 cr (Q1R p9, Q1PR p1 to p2).

Note: the standalone Q4 FY26 XBRL had a PBT/PAT mismatch; the company refiled the XML (NSE clarification reply 20-May-2026, Clarif_20260520.pdf). The PDF results were not changed.

## 2. Working-capital balances, 31 March (Verified, Rs cr)

| Item | STANDALONE FY26 | STANDALONE FY25 | CONSOLIDATED FY26 | CONSOLIDATED FY25 (AR26 vintage) | Source |
|---|---|---|---|---|---|
| Trade receivables (net) | 1,524.25 | 1,407.92 | 2,204.84 | 2,003.01 | AR26 p380 / p226, p256 |
| of which unbilled inside TR | 14.79 | nil | 46.56 | 21.64 | AR26 p380 / p256 |
| Impairment allowance on TR | 185.28 | 197.46 | 295.35 | 312.23 | same |
| Contract assets (net) | 496.99 | 371.47 | 773.08 | 640.56 | AR26 p381 / p256 |
| Loss allowance on contract assets | 124.52 | 99.77 | 168.65 | 141.38 | same |
| Inventories | 481.55 | 379.30 | 909.50 | 716.55 | AR26 p356 / p226 |
| Trade payables (current + non-current) | 1,420.84 | 1,154.08 | 2,057.38 | 1,747.25 | AR26 p395 / p226 |
| of which MSME | 616.19 | 472.00 | 938.15 | 749.78 | same |
| Contract liabilities: unearned revenue | 142.68 | 382.20 | 145.32 | 545.51 | AR26 p405, p409 / p289 |
| Contract liabilities: customer advances | 1,025.26 | 828.43 | 1,899.53 | 1,469.20 | same |

Days (Computed, th-calc.py, on full-year revenue of the same entity): STANDALONE FY26 receivable 85.4, contract asset 27.8, inventory 27.0, payable 79.6, contract liability 65.4. CONSOLIDATED FY26 receivable 75.3, contract asset 26.4, inventory 31.0, payable 70.2, contract liability 69.8. FY25 consolidated (AR26 vintage): 70.5 / 22.5 / 25.2 / 61.5 / 70.9.

Trend, receivable days on AR24 vintage: CONSOLIDATED FY23 84.7, FY24 88.8; STANDALONE FY23 93.9, FY24 102.9 (Computed). Not comparable with FY25/FY26 AR26 vintage because of the netting restatement.

Retention: NOT FOUND as a separate amount. AR26 says retention sits inside trade receivables, "classified as due on the basis of the contractual terms" (p256, p381) and inside contract assets ("retention money (contract asset)", p289, p409). MD&A: the contract-asset increase is "mainly due to an increase in retention amount and unbilled amount mainly in TBWES" (p113). Searched: "retention" across AR26, AR25, Q4P, Q1P.

### Trade receivable ageing (gross, Verified)

| Bucket | STANDALONE FY26 (AR26 p381) | CONSOLIDATED FY26 (AR26 p256) | CONSOLIDATED FY25 (AR26 p256) |
|---|---|---|---|
| Unbilled | 14.79 | 46.56 | 21.64 |
| Not due | 915.22 | 1,010.21 | 858.72 |
| Under 6 months | 478.53 | 931.09 | 896.81 |
| 6 months to 1 year | 124.33 | 135.06 | 202.51 |
| 1 to 2 years | 84.49 | 195.86 | 162.25 |
| 2 to 3 years | 28.24 | 72.37 | 56.38 |
| Over 3 years | 63.93 | 109.04 | 116.93 |
| Total gross | 1,709.53 | 2,500.19 | 2,315.24 |
| Past due, Computed | 779.52 (45.6%) | 1,443.42 (57.7%) | 62.0% |

Credit terms: standalone "30 to 90 days" (p380); consolidated "7 to 90 days" (p256). One subsidiary sold receivables to a bank without recourse: Rs 190 cr derecognised at 31-Mar-2026 (Rs 422.08 cr a year earlier) (p256). This flatters the consolidated receivable figure.

### MSME (Verified)
STANDALONE (AR26 p396): MSME principal outstanding Rs 616.12 cr; past due Rs 50.41 cr (616.19 less 565.78 not due, Computed); paid beyond the appointed day during the year Rs 294.31 cr (FY25 Rs 548.06 cr); interest accrued and unpaid Rs 2.02 cr; further interest carried Rs 9.58 cr.
CONSOLIDATED (AR26 p274): undisputed MSME dues Rs 937.42 cr of which Rs 857.50 cr not due, so Rs 79.92 cr past due (Computed); disputed MSME Rs 0.73 cr.

## 3. Borrowings and disclosed interest rates (Verified)

CONSOLIDATED, 31-Mar-2026 (AR26 p270 to p271): non-current Rs 1,615.83 cr, current Rs 672.18 cr, total Rs 2,288.01 cr (FY25 Rs 1,693.34 cr).

| Facility (CONSOLIDATED) | Amount | Rate |
|---|---|---|
| Foreign currency term loan, secured, bank | 15.30 | 3.65% / 5.85% |
| INR term loans, secured, banks | 1,347.48 | 7.44% to 8.65% |
| INR term loan, secured, financial institution | 295.60 | 8.65% |
| INR term loan, unsecured, bank | 25.00 | 7.30% |
| Bank overdraft | 38.25 | 7.5% to 8.85% |
| Packing credit, secured and unsecured | 65.00 + 35.00 | 5.82% to 6.19% |
| Buyer line of credit, secured | 158.90 | 6.30% to 7.27% |
| Other secured short-term borrowings | 108.49 | 7.58% to 8.30% |
| Unsecured, financial institutions | 199.00 | 7.67% |

STANDALONE (AR26 p405): term loan Rs 25.00 cr at 7.30% (capex loan, bullet in 5 years); packing credit secured Rs 65.00 cr and unsecured Rs 35.16 cr at 5.82% to 6.19%; total Rs 125.16 cr. Company "in compliance with all of its debt covenants".

CRISIL (19-Jan-2026): debt rose from Rs 363 cr (Mar-2022) to Rs 1,758 cr (Sep-2025) "led by" investments in renewable subsidiaries FEPL and TOESL; "net nil debt"; bank limit utilisation 48% average. CARE (14-Jan-2026): fund-based working-capital limit utilisation 18% average. So the term debt is project-asset finance in Green Solutions, not working-capital debt.

## 4. Cash flow (Verified)

| | STANDALONE FY26 | STANDALONE FY25 | CONSOLIDATED FY26 | CONSOLIDATED FY25 (AR26) | Source |
|---|---|---|---|---|---|
| Cash generated from operations | 598.83 | 438.92 | 891.04 | 1,265.52 | AR26 p358 / p228 |
| Net cash from operating activities | 416.48 | 373.17 | 541.55 | 1,079.79 | same |
| Increase in trade receivables | 108.98 | 193.51 | 193.71 | 328.15 | same |

Consolidated FY25 OCF was Rs 1,042.79 cr as originally reported (AR25 p211). Earlier: CONSOLIDATED OCF FY24 247.30, FY23 459.56 (AR24 p209); STANDALONE OCF FY24 90.79, FY23 418.68 (AR24 p317). OCF/PAT (Computed): consolidated FY23 102%, FY24 38%, FY25 172%, FY26 75%. Cash conversion is lumpy, which is the honest pattern to show.

## 5. The company's own working-capital measures (Verified)
- AR26 p114, ten-year table, CONSOLIDATED: "Net current assets" Rs 1,289 cr (FY25 1,678; FY24 1,723); defined by the table as current assets Rs 7,109 cr less current liabilities Rs 5,820 cr. "Working capital turnover ratio" 8.26 times (FY25 6.12).
- AR26 p454, note 36, STANDALONE: "Working capital" is defined as the average of total current assets less total current liabilities; net capital turnover 6.55 (FY25 5.91); current ratio 1.26.
- CRISIL (19-Jan-2026): "The net working capital cycle has been around 40 days due to prudent collection policy and inventory management ... receivables have remained at less than 120 days". CRISIL's definition is not stated.
- No NWC or receivable-days TARGET was found in AR26, Q4T, Q1T, Q3T, Q2T or Q4T25 (searched "target", "working capital", "days", "NWC").

## 6. Orders (Verified)
- Order booking CONSOLIDATED FY22 to FY26: 9,410 / 8,788 / 9,355 / 10,337 / 13,871; order balance 8,812 / 9,752 / 10,111 / 10,693 / 13,604 (AR26 p20).
- 31-Mar-2026 by segment: Industrial Infra booking Q4 Rs 2,433 cr, balance Rs 7,439 cr (+37%); Industrial Products balance Rs 4,841 cr; Green Solutions Rs 1,055 cr; Chemicals Rs 270 cr (Q4P slide 13).
- Industrial Infra FY26 order booking Rs 6,217 cr (FY25 Rs 4,337 cr) (AR26 p90).
- 30-Jun-2026: order balance Rs 14,045 cr; Q1 booking Rs 2,809 cr; Industrial Infra balance Rs 6,887 cr (Q1P slide 12, recast basis).
- STANDALONE order balance 31-Mar-2026 Rs 6,400 cr; 30-Jun-2026 Rs 6,576 cr (Q4PR p2, Q1PR p2).
- Order cover (Computed): consolidated 1.27 years of FY26 revenue; Industrial Infra 1.71 years.
- TOESL changed its order-book method (rolling 12-month), adding Rs 138 cr (Q4) and Rs 139 cr (Q1) with no change in contracts (Q4PR, Q1PR).

## 7. SEGMENT: Industrial Infra (CONSOLIDATED segment note, Verified)

| | FY26 (AR26 p310 to p311) | FY25 restated (AR26) | FY25 original (AR25 p292 to p293) | FY24 (AR24 p277 to p278) | FY23 (AR24) |
|---|---|---|---|---|---|
| Segment revenue | 4,348.05 | 4,694.45 | 4,714.56 | 4,455.21 | 3,928.00 |
| Segment result (PBIT before exceptional, unallocated) | 217.51 | 110.08 | 110.08 | 208.91 | 216.77 |
| Margin, Computed | 5.0% | 2.3% | 2.3% | 4.7% | 5.5% |
| Segment assets | 2,490.28 | 2,491.09 | 2,994.72 | 2,711.67 | 2,548.92 |
| Segment liabilities | 2,330.16 | 2,353.60 | 2,862.14 | 2,324.40 | 2,374.97 |
| Net, Computed | 160.12 | 137.49 | 132.58 | 387.27 | 173.95 |
| Value of a day of revenue, Computed | 11.91 | 12.86 | 12.92 | 12.21 | 10.76 |

Recast in Q1R p9 (Bioenergy moved to Green Solutions, all periods reclassified): FY26 revenue 4,088.34, result 250.37, assets 2,375.41, liabilities 2,236.84. Q1 FY27: revenue 814.15, result (70.66), assets 2,087.92, liabilities 2,184.90.
STANDALONE Industrial Infra revenue from operations FY26 Rs 1,537.80 cr (FY25 Rs 1,762.87 cr) (AR26 p409).
Receivables, contract assets, retention or advances by segment: NOT FOUND.
Industrial Infra revenue mix Q1 FY27: private 49%, export 27%, PSU 3%, services 20% (Q1P slide 16). Of projects over Rs 100 cr, 5 of 6 PSU projects are more than 5% below as-sold margin (same slide).
Industrial Infra D&A FY26 Rs 20.93 cr (AR26 p311). Package Scheme of Incentives income booked in a subsidiary in this segment: FY26 Rs 68.18 cr, Q1 FY26 Rs 55.82 cr (Q1R p10).

## 8. Guarantees and contingent liabilities (Verified)
- CONSOLIDATED (AR26 p297): guarantees for performance, advances etc. issued; "no amount has been disclosed" (outflow judged remote). Bank guarantee AMOUNT: NOT FOUND at group level.
- STANDALONE (AR26 p416): bank guarantees and LCs to end customers on behalf of subsidiaries Rs 353.23 cr (FY25 235.73); corporate guarantees Rs 94.84 cr.
- Excise demand on Industrial Infra, July 2000 to June 2017, Rs 1,385.47 cr; CESTAT allowed Thermax's appeal; department's Supreme Court appeal "was dismissed on May 25, 2026" (Q1R p9, note 3). AR26 (p295) still carried it.
- Claims not acknowledged as debt: CONSOLIDATED Rs 103.68 cr (FY25 179.88); STANDALONE Rs 79.48 cr (AR26 p297, p416).
- Tax contingencies CONSOLIDATED: excise/customs/service tax 12.72, LBT 39.03, GST 69.86, sales tax 28.48, income tax 89.56, references 27.25 (AR26 p295).
- Capital commitments CONSOLIDATED Rs 633.89 cr (FY25 150.64) (AR26 p297).

## 9. Audit and controls (Verified)
- FY26 consolidated and standalone opinions are unmodified ("true and fair view"); auditor Price Waterhouse Chartered Accountants LLP, partner Amit Borkar (AR26 p218, p356). FY25 and FY24 auditor S R B C & CO LLP. No emphasis of matter found (searched "Emphasis of Matter" in AR26).
- KAM: revenue from contracts (cost to complete, LDs, onerous contracts) (AR26 p218 to p219).
- Audit trail (note 42B, AR26 p332): one software without master-data audit trail; two with database-level trail enabled only from 22-May-2025 and 30-Jun-2025; one with no audit trail feature.

## 10. ERP (Verified for FY24, not since)
- AR24 p292, note 44A, CONSOLIDATED notes: entity "Thermax Limited", IT application "SAP", books maintained on servers in India: Yes. Verified as at FY24 (filed 08-Jul-2024).
- AR26 p116 and AR25 MD&A say only "enterprise resource planning (ERP) software"; AR26 note 42B says "multiple accounting software". SAP product version (ECC or S/4HANA): NOT FOUND. SuccessFactors: NOT FOUND in any filing.

## 11. People and address (Verified)
- Ashish Bhandari, "Managing Director and CEO" (AR26 p357 signature block; DIN 05291138). Reappointed w.e.f. 01-Sep-2025 (NSE 01-Aug-2025).
- Rajendran Arunachalam, "Executive Vice President and Group Chief Financial Officer" (AR26 p357, p26 to p27). CRISIL's letter of 19-Jan-2026 is addressed to "Mr. Rajendran A, Group Chief Financial Officer".
- Meher Pudumjee, Chairperson (AR26 p357).
- Industrial Infra head: B. C. Rajesh, "President and BU Head, Industrial Infra" (AR26 p26). Kirtiraj Jilkar (BU Head, Projects and Energy Solutions in AR26) ceased w.e.f. 30-Jun-2026 (NSE 30-Jun-2026): do not address him.
- Company Secretary: Sangeet Hunjan.
- Registered office: D-13, MIDC Industrial Area, R.D. Aga Road, Chinchwad, Pune 411 019, Maharashtra (AR26 p66; Q1R header). Corporate office: Thermax House, 14 Mumbai-Pune Road, Wakdewadi, Pune 411 003 (AR26 notice p1).
- Email printed by the company: cservice@thermaxglobal.com only (AR26). No personal email is printed; none is given here.

## 12. Sensitive items for Garvis to rule on (not for print by default)
1. Rs 91 cr cost-to-complete hit, one PSU project (Q1 FY27): MD said the original order was about Rs 1,200 cr, now loss "close to INR 150 crores", "this was a wrong project to take ... It was just wrong" (Q1T p5, p8). The MD names NRL in the same call (p4).
2. Arbitral award Rs 218.45 cr (customer named in AR26 MD&A p113 and NSE filing names as RCF): set aside by Bombay High Court 09-Dec-2025, deposit refunded with Rs 31.62 cr interest 12-Mar-2026; customer has filed a Section 37 appeal (AR26 p297). Live dispute.
3. Standalone Q1 FY27 loss after tax Rs 18 cr (Q1PR).
4. Subsidiary losses: FEPL Rs 20 cr loss in Q1 FY27 after a contractor failed, with plans to bring in a majority investor (Q1T p3 to p4); Bioenergy carrying about Rs 8 cr a quarter of team cost with no new projects for two years (Q1T p4). FY25 standalone reversal of impairment on investment in Thermax Netherlands B.V. Rs 94 cr (Q4PR p2).
5. Tax penalties appealed: CGST Pune Rs 3.14 cr (31-Mar-2026), customs Ahmedabad Rs 1.52 cr (02-Apr-2026), Jharkhand GST Rs 11.86 lakh (01-Jan-2026).
6. NSE query on the Q4 FY26 standalone XBRL mismatch (reply 20-May-2026).
7. Audit trail gaps in some accounting software (note 42B).
8. Related party: remaining 49% of TSA Process Equipments bought for Rs 42 cr, disclosed as a related-party transaction at arm's length (NSE 30-Sep-2026).
9. Rating actions: none adverse. CRISIL AA+/Stable/A1+ reaffirmed and limits enhanced to Rs 5,500 cr (19-Jan-2026); CARE A1+ assigned to Rs 100 cr CP (12-Jan-2026).
10. A director, Dr. S B (Ravi) Pandit, died on 08-May-2026 (NSE): never list him as a director.
11. Internal conflict: AR26 MD&A p86 says TBWES growth was "underpinned by large export orders, including an approximately Rs. 1,600 crore project", but the NSE filing of 27-Mar-2026 calls the Rs 1,600 cr Anuppur order "Domestic". Do not repeat the MD&A wording.

## 13. Calculator
Script: src/th-calc.py. Command: `python -I thermax/src/th-calc.py > thermax/src/th-calc-output.txt` (run from crestline-prospects/). Output: src/th-calc-output.txt.

## 13a. TH-3 page-image re-view (08-Oct-2026)
Rendered from AR26.pdf (pymupdf, zoom 3) and read on the image, per the Garvis TH-3 RE-VIEW ruling.

| Figure group | Printed page (PDF spread index) | Result |
|---|---|---|
| Consolidated cash flow: cash generated 891.04 / 1,265.52; OCF 541.55 / 1,079.79; increase in TR 193.71 / 328.15 | p228 (130) | Match |
| Consolidated MSME ageing: undisputed 937.42, not due 857.50, past due buckets 55.02 / 9.32 / 5.55 / 10.03 (sum 79.92), disputed 0.73; MSME total 938.15 / 749.78 | p274 (153) | Match |
| Consolidated contract liabilities: unearned 145.32 / 545.51; advances 1,899.53 / 1,469.20; contract assets 773.08 / 640.56 | p289 (160) | Match |
| Consolidated TR ageing subtotals FY26 and FY25, impairment 295.35 / 312.23, contract assets gross 941.73 / 781.94 | p256 (144) | Match. Page also says: "The above ageing includes retention receivables which are classified as due on the basis of the contractual terms with respective customers." |
| MD&A p113: contract assets 773 / 641 (21%), OCF 542 / 1,080 "(50%)", both quotes | p113 (72) | Match |
| CFO quote, Q4 FY26 call p11, speaker "Rajendran Arunachalam" | TR_Q4FY26.pdf p11 | Match. Full line: "Yes, it's not going to ... well, I'll be hopeful that we should resolve all the overdues in one quarter. But yes, the business reality is, I'm sure that we would be able to work it over the next couple of quarters." |

Changes made to this file (logged):
1. Section "FEASIBILITY VERDICT" item 2: OCF change was "-49.9%"; the exact figure is -49.847%, which rounds to -49.8% (the old figure double rounded from -49.85). AR26 itself prints "(50%)". Corrected.
2. "Warning on vintages": the netting reference read "note 47". On the consolidated page image (p289) the reference is "refer note 49"; note 47 is the standalone reference (p409). Corrected. No figure changed.

Computed for TH-3 (calc/thermax-savings-output.txt): consolidated FY25 past due 1,434.88 (62.0%), over one year past due FY25 335.56 (14.5% of gross), FY26 377.27 (15.1%), change +41.71 (+12.4%); contract assets +20.7%; OCF/PAT 172.3% to 75.2%.

## 14. Final scans (08-Oct-2026)
Script scan.py (kept in the session scratch folder, outside this folder) checks word-boundary matches for every other company name on the Garvis list, plus our demo source's name, and dash characters (em, en, figure dash, " -- ", " - "). Planted test file: 15 hits (all 12 names plus dashes), so the scan works. data.md, fact-check.md, depth.md, src/th-calc-output.txt: 0 hits. README.md (Garvis rulings, not written by TH-1) names the parallel company once in its ruling line. Arithmetic minus signs inside th-calc.py code are not prose.
