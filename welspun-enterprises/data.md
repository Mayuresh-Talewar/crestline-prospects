# Welspun Enterprises Limited (WEL): data

Researched 2026-10-09 (step 1). Entity throughout: **Welspun Enterprises Limited**, CIN L45201GJ1994PLC023920, NSE WELENT / BSE 532553. Not Welspun Corp, Welspun Living or any other group company.
Amounts in INR crore. **Basis: CONSOLIDATED** (WEL + WMEL 60.09% + HAM/BOT SPVs) unless a row says otherwise. Revenue per day is on the same basis as the days.

## VERDICT: FULL (with four limits)

Listed on NSE and BSE; every figure below comes from its own filings. The EPC cash story is provable from the annual report itself:
- Contract assets (work done, not yet billed) Rs 1,318.41 Cr, up Rs 137.34 Cr (+11.6%) while revenue fell 2.2%.
- Trade receivables Rs 592.20 Cr against Rs 336.43 Cr a year earlier (+76.0%).
- 51.7% of gross receivables are overdue by under six months (Rs 307.79 Cr of Rs 595.72 Cr).
- Customer advances (contract liabilities) Rs 901.49 Cr: a large part of the project is funded by clients' money, which makes the timing of each bill matter more, not less.
- SAP S/4HANA is stated by the company (AR and call), so the layer-on-ERP line is safe.

Limits the build step must respect:
1. **No EPC borrowing rate exists.** All Rs 1,770.90 Cr of subsidiary term debt sits in HAM/BOT road SPVs (AR PDF p193). Standalone has no variable-rate borrowing (AR PDF p256). No average rate is disclosed. Interest scenario: NOT FOUND. Only disclosed rate that fits is management's own "Return on investment" on treasury funds, 7.5% FY26 (11.5% FY25), and Garvis must rule whether it may be used (cash is released into treasury, not used to repay debt).
2. **Management states no debtor, creditor or inventory days.** Days below are Computed from the company's own published turnover ratios (one ratio at a time, never netted into a cycle).
3. **Consolidated revenue includes road construction revenue** (Transport segment Rs 1,424.98 Cr, 39.4%). Balances are not split by segment, so days are for the whole consolidated EPC-type book. Annuity receivables from HAM (Rs 1,949.05 Cr non-current + Rs 40.07 Cr current, "receivable under service concession arrangement") are NOT EPC working capital and are excluded everywhere here.
4. **WMEL (60.09%, tunnelling) is only in the consolidated numbers.** Standalone excludes it. Do not mix the two.

## 1. Financials (consolidated)

| Item | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|
| Revenue from operations | 2,872 | 3,695 (3,695.34) | 3,615 (3,615.38) | FY26 deck p24 and AR PDF p172 (printed p262). FY25 is the restated comparative; originally reported 3,584 (see conflicts) |
| Total income | not used | 3,793 (3,792.59) | 3,712 (3,712.06) | AR PDF p172 |
| EBITDA | 616 | 730 | 845 | Q4 FY26 deck (14 May 2026) p24 and p12 |
| EBITDA margin | 20 | 19 | 23 (deck p12 prints 22.8%, AR prints 23.8%) | see conflicts |
| PAT, reported (after discontinued ops) | not found in these documents | 353.83 | 392.77 | AR PDF p217 (printed p352) |
| PAT, continuing operations | 349 | 383.57 | 406.08 | AR PDF p217; FY24 from deck p24 |
| PAT attributable to owners (continuing + discontinued) | not used | 322.56 | 349.87 | AR PDF p205 (printed p328) |

Documents: Q4 & FY26 Investor Presentation dated 14 May 2026; Annual Report 2025-26 (financial statements signed 14 May 2026; website file stamp Jul 2026); basis consolidated.

**Segment split (AR PDF p217, printed pp352-353, Note 62, restated for Ind AS 108):**

| Segment | Revenue FY26 | Revenue FY25 | Segment result FY26 | Segment result FY25 |
|---|---|---|---|---|
| Transport (HAM / BOT / road EPC) | 1,424.98 | 1,716.15 | 358.79 | 358.22 |
| Water (JJM, Dharavi, Bhandup, Panjrapur) | 1,239.73 | 1,283.48 | 325.04 | 265.38 |
| Tunnelling and Rehabilitation (WMEL) | 950.67 | 695.71 | 195.68 | 110.14 |
| Total | 3,615.38 | 3,695.34 | 879.51 | 733.74 |

Segment result is before unallocated income and expense and finance cost, so it is not EBITDA. Four customers exceed 10% of revenue, Rs 2,559.53 Cr (FY25: three customers, Rs 2,812.67 Cr), same page. Customer names not disclosed.
Management's reasons for FY26 (call 15 May 2026, Lalit Jain, p8 text; AR MD&A PDF p102, printed p122, image-checked): "extended monsoons and longer project clearance cycle"; water down on slower UP JJM execution; transport down on completion and the delayed Pune-Shirur award.

**Latest quarter, Q1 FY27 (deck 4 Aug 2026, p15, image-checked):** revenue 774 (Q1 FY26: 845, -8%), EBITDA 185 (22.9%), PAT from ordinary activities 90, discontinued operations loss (34), reported PAT 56.

## 2. Working capital: management's own words and figures

Management does NOT publish debtor, creditor, inventory or working-capital **days**. NOT FOUND (searched AR, Q4 FY26 deck and call, Q1 FY27 deck and call).

What management does publish (AR PDF p102 printed p122, and note 53 PDF p204 printed p327, image-checked, consolidated):

| Item | FY26 | FY25 |
|---|---|---|
| Trade receivables turnover (revenue / average trade receivables) | 7.79 times | 8.83 times |
| Inventory turnover (cost of materials / average inventory) | 3.73 times | 3.97 times |
| Trade payables turnover (purchase of services and other expenses / average payables) | 2.74 times | 3.60 times |
| Net capital turnover | 2.08 times | 2.36 times |
| Current ratio | 1.87 | 1.77 |
| Net current assets excl. cash (adj., mobilisation advance included), management's own figure | Rs 275 Cr | Rs 398 Cr |

Same-basis days **Computed** (365 / published turnover; each from ONE ratio; do not add or net them; script-checked that the published ratios reproduce from the balance sheet):

| Computed | FY26 | FY25 |
|---|---|---|
| Receivable days (365 / 7.79 and 365 / 8.83) | 46.9 | 41.3 |
| Inventory days on cost of materials (365 / 3.73, 365 / 3.97) | 97.9 | 91.9 |
| Payable days on services and other costs (365 / 2.74, 365 / 3.60) | 133.2 | 101.4 |
| Contract-asset days: revenue / average contract assets (opening FY25 669.38) | 126.2 | 91.4 |

Contract-asset days is OUR computation (same revenue numerator, balances from AR PDF p218), not a management figure. Revenue per day: FY26 Rs 9.905 Cr (3,615.38 / 365); FY25 Rs 10.124 Cr.

**Balances (consolidated, AR PDF p172 printed p262, and p218 printed p354, image-checked):**

| Balance, Rs Cr | 31 Mar 2026 | 31 Mar 2025 |
|---|---|---|
| Trade receivables (current 509.63 + non-current 82.57; note 64B prints 592.20) | 592.20 | 336.43 |
| Contract assets (cost plus profit not yet billed) | 1,318.41 | 1,181.07 |
| Contract liabilities (customer advances) | 901.49 | 775.94 |
| Inventories | 173.90 | 162.64 |
| Trade payables (MSME 300.60 + others 687.80) | 988.40 | 857.91 |
| MSME dues alone | 300.60 | 204.86 |

Contract-asset roll-forward FY26 (p218): cost plus profit 2,979.39, billed 2,842.05, closing 1,318.41. Contract assets are 36.5% of FY26 revenue (computed).

**Receivable ageing, from due date (AR PDF p203, printed pp324-325, image-checked):** FY26 gross 595.72: not due 264.19, under 6 months overdue 307.79, 6-12 months 9.56, 1-2 years 4.32, 2-3 years 5.52, over 3 years 4.35. FY25 gross 338.29: not due 61.20, under 6 months 260.25. Note beside the table: retention money receivables are contractually due after one year but "can be released early on submission of bank guarantees" so they are treated as current.
**Payable ageing (AR PDF p204, printed p326):** FY26 total 988.40 of which not yet due 837.74 (84.8%, computed).

**Payment terms (AR PDF p256, printed p431, STANDALONE note, image-checked):** "general payment terms include mobilisation advance, monthly progress payments with a credit period ranging from 45 to 90 days and certain retention money to be released at the end of the project. In many cases, retentions are substituted with bank/corporate guarantees." Average project cycle "around 24 to 36 months". Customers: "central government agencies, state owned companies and large municipal corporations".

**Rating-agency view (ICRA rationale 29 Apr 2026, p3, image-checked; ICRA's own calculation on its adjusted WEL + WMEL basis, not management's):** NWC/OI 21.0% in FY2025 (FY2024 25.8%; FY2023 10.3%), "primarily due to high inventory and work-in-progress levels associated with large water and Jal Jeevan mission projects"; "milestone-based billing, elongated certification and approval timelines, and dependence on timely payments from Government and municipal authorities". Secondary basis: use only as context, never beside the figures above.

## 3. Borrowings and interest

| Item | Value | Source |
|---|---|---|
| Gross debt, management's table | Rs 1,771 Cr (LT 1,725 + ST working-capital loan 46); FY25 1,300 | AR PDF p102 (printed p122) and Q4 deck p14 |
| Borrowings on the balance sheet (non-current 1,724.83 + current 247.08) | Rs 1,971.91 Cr | AR PDF p172 and p203 |
| Cash and cash equivalents, management's definition (includes FDs and investments) | Rs 1,728 Cr; net debt Rs 43 Cr | AR p102 |
| Standalone gross debt | nil (30 Jun 2026 and 31 Mar 2026) | Q1 FY27 deck p17 |
| Where the term debt sits | Rs 1,770.90 Cr in subsidiary SPVs: Union Bank 668.84, Axis 329.21, Indian Bank 322.35, PNB 304.50, Central Bank 113.64, Bandhan 32.38 | AR PDF p193 (printed p304), Note 26 |
| Disclosed interest basis | floating, per lender: MCLR + 0.05% (Union), MCLR (Central), overnight MCLR (Indian, PNB), repo + 2.40% (Axis), repo + 2.75% (Bandhan); equipment loans 8.75% and 9.50% (Rs 0.44 Cr and Rs 2.56 Cr) | AR PDF p194 (printed p306), image not re-checked at line level |
| **Disclosed average rate** | **NOT FOUND** | searched AR, decks, calls |
| Management "Return on investment" on treasury funds | 7.5% FY26, 11.5% FY25 (income / average invested treasury funds; lower in FY26 because funds were invested late in the year) | AR p102 and PDF p204 note 53 |

The Rs 1,771 Cr versus Rs 1,971.91 Cr gap (Rs 200.91 Cr) is not explained in the report; likely current maturities of long-term debt (NOT verified, so do not print the reason).
Preferential warrants Rs 1,000 Cr, 25% (Rs 250 Cr) received (AR p102; call 15 May 2026 p10).

## 4. Order book (consolidated; date and segments)

| As at | Order book | Segments | Type | Source |
|---|---|---|---|---|
| 30 Jun 2026 | Rs 18,729 Cr | Water 55%, Transport 30%, Tunnel 11%, Others 4% | EPC 42%, O&M 29%, BOT 29%, HAM 1% | Q1 FY27 deck, 4 Aug 2026, p7, image-checked |
| 14 May 2026 deck (31 Mar 2026 plus Pune-Shirur LoA of 29 Apr 2026) | ~Rs 19,739 Cr | Water 54, Transport 30, Tunnel 12, Pumping 3, Rehabilitation 1, Others 1 | EPC 43, O&M 27, BOT 27, HAM 2 | Q4 FY26 deck p10, image-checked |
| 31 Mar 2026, EPC contracts only (AR Note 64F) | Rs 13,870.70 Cr balance revenue to recognise; FY25 14,158.23 | n/a | includes O&M | AR PDF p218 |

EPC is the only part Crestline prices: 42% of 18,729 is about Rs 7,866 Cr (Computed from a rounded percentage). O&M (29%, about Rs 5,431 Cr) is annuity-type and BOT (29%) is toll-road equity: neither is EPC working capital. WMEL order book Rs 2,135 Cr at 30 Jun 2026 (Q1 deck p18, text layer).

## 5. ERP

**SAP S/4HANA, stated by the company.** AR FY26 PDF p103 (printed pp124-125, image-checked): "key digital platforms, including WEL Darpan, SAP S/4HANA, Data Hub, BIM and the Document Management System (DMS), reached enterprise-scale adoption". Also AR PDF p104 (disaster recovery for "business-critical systems like S/4 HANA") and p111. Q4 FY26 call, 15 May 2026, Abhishek Chaudhary, transcript p7 (image-checked): "we have also successfully migrated to S/4HANA, creating a strong and more integrated digital backbone for the organization."
Also stated, text layer only (Q1 FY27 call, 5 Aug 2026, p6): a Supply Chain Management Source-to-Pay platform expected to go live in Q3 FY27, and a move to a "unified enterprise application architecture". Go-live date of S/4HANA and implementation partner: NOT FOUND. Do not say Crestline connects to it today.

## 6. People (AR FY26 PDF p88 printed p94, and p112 printed pp142-143, image-checked)

| Name | Title as printed |
|---|---|
| Mr. Balkrishan Goenka | Chairman (KMP list p112: "Whole-time Director & Chairman"; same page re-appointment table: "Non-Executive Director, designated as Chairman": the report says both) |
| Mr. Sandeep Garg | Managing Director (re-appointed for 3 years from 1 Jun 2026) |
| Mr. Lalit Jain (KMP list: "Mr. Lalit Kumar Jain") | Chief Financial Officer (signs the balance sheet 14 May 2026) |
| Mr. Deepak Chauhan | Director, Legal & Ethics (appointed 6 Aug 2025) |
| Mr. Abhishek Chaudhary | Chief Executive Officer, Transportation Vertical |
| Mr. Saurin Patel | Head, Integrated Water Vertical and Managing Director, Welspun Michigan Engineers Limited (MD title w.e.f. 8 Jul 2026) |
| Mr. Yogen Lal | CEO, Business Development & Strategy |
| Mr. Rajesh R. Mandawewala | Non-Executive Director |
| Ms. Nidhi Tanna | Company Secretary |
| Mr. Hardik Dhebar | Head, Finance & Investor Relations; **resigned w.e.f. 17 Jun 2026, relieved 14 Aug 2026** |

**There is no company-level "CEO" in the report**: the MD is the top executive. Never print "CEO" for Mr. Garg. Ms. Sangeeta Tripathi is "Lead Investor Relations" (Q1 FY27 call, 5 Aug 2026, p2 text). The Q4 deck p7-8 names are scrambled in the text layer; use the AR.

## 7. Registered and corporate address (AR PDF p88, printed p94, image-checked)

- Registered office: "Welspun City", Village Versamedi, Taluka Anjar, District Kutch, Gujarat 370 110. Tel +91-2836 662222.
- Corporate office: Welspun House, Kamala Mills Compound, Senapati Bapat Marg, Lower Parel, Mumbai 400 013. Tel +91-22-6613 6000.
- The dossier's "7th Floor" is NOT in the annual report; do not print the floor unless a second primary source is found.

## 8. Management quotes on working capital

No quote on debtor, creditor or inventory days exists (NOT FOUND). Quotes that exist and were image-checked:
1. Mr. Abhishek Chaudhary, CEO Transportation Vertical, Q4 FY26 earnings call, 15 May 2026, transcript p7: "we have also successfully migrated to S/4HANA, creating a strong and more integrated digital backbone for the organization."
2. Mr. Saurin Patel, Head Integrated Water Vertical and MD WMEL, Q1 FY27 earnings call, 5 Aug 2026, transcript p4 (PDF p5): "there have been delays in the release of orders for certain projects that deferred execution and consequently, revenue recognition." (about WMEL; an order-release wait, not a payment wait.)
3. Annual Report MD&A (company voice, not a person), PDF p102 printed p122: the revenue dip "was on account of extended monsoons and longer project clearance cycle."
Note the Q1 FY27 transcript PDF prints "May 15, 2026" in every page header although its cover page says the call was held on 5 Aug 2026. Use the cover date.

## 9. Dossier check (checklist only; never cite)

| Dossier claim | Result |
|---|---|
| Listed NSE WELENT / BSE 532553; CIN | Right (AR p88) |
| Regd office Anjar, Kutch; corporate Lower Parel | Right; "7th Floor" unsupported |
| FY25 revenue Rs 3,442 Cr; PAT Rs 370 Cr | Wrong basis: these are ICRA-adjusted (WEL + WMEL line by line, ICRA p4). Company's own FY25 consolidated: revenue 3,695.34 (restated; originally 3,584), PAT 353.83 |
| FY24 revenue 2,862.3 | ICRA-adjusted; company 2,872 (deck) |
| News: FY25 revenue ~3,584, EBITDA ~730 | 3,584 is the FY25 figure as first reported (15 May 2025 deck p15); 730 right |
| Order book Rs 15,354 Cr (Dec-25) | Right as ICRA's figure at 31 Dec 2025 (ICRA p1); stale. Latest Rs 18,729 Cr at 30 Jun 2026 |
| "Leverage: debt ~Rs 3 Cr" | Wrong as a company figure: Rs 3.0 Cr is ICRA's standalone "limited debt obligations" (ICRA p3). Consolidated gross debt Rs 1,771 Cr, all in HAM SPVs |
| "Cash Rs 1,273 Cr" | ICRA standalone cash at 31 Dec 2025. Company: Rs 1,728 Cr consolidated at 31 Mar 2026 |
| NWC/OI 21.0% FY25 (25.8% FY24) | Right as ICRA's number, not management's |
| Revenue CAGR "~25% 4-yr" | Not verified, not used |
| SAP S/4HANA confirmed | Right; found in FY26 AR and the call. The FY25 AR "greenfield" sentence was not re-checked |
| CFO Lalit Jain | Right (title "Chief Financial Officer") |
| WMEL 60.09% | Right (Q1 deck p18) |
| "Pune-Shirur ~Rs 7,300-7,600 Cr, L1" | Stale. LoA received 29 Apr 2026; call 15 May 2026: "approximately INR7,300 crores" total project cost, EPC value "approximately INR5,400 crores"; sub-concession agreement executed (Q1 deck) |
| ICRA AA (Stable)/A1+, 29 Apr 2026 | Right (ICRA p1); see sensitive-garvis.md |
| "Welspun 'regd office Gujarat; large'" ICP flag | Garvis ruling, not a fact |

GTM check: no crestline-gtm file exists for this company (README); nothing opened.

## 10. Conflicts between sources

1. **FY25 revenue:** Rs 3,584 Cr (15 May 2025 deck p15) vs Rs 3,695 Cr (FY26 AR and deck; "prior figures restated"). Difference Rs 111 Cr; total income is Rs 3,793 Cr in both, so Rs 111 Cr moved from other income into revenue (inferred from the two totals; the report does not say so). Use 3,695 with FY26.
2. **FY25 revenue and PAT, ICRA vs company:** 3,442 / 370 (ICRA-adjusted) vs 3,695 / 354. Different basis; never mix.
3. **EBITDA margin FY26:** 23.8% (AR p102 table) vs 22.8% (decks p12 and Q1 deck) vs 23.4% on revenue and 22.8% on total income (computed). The 23.8% reads as a typo; the call says "23%".
4. **Gross debt:** Rs 1,771 Cr (management) vs Rs 1,971.91 Cr (balance sheet borrowings).
5. **Order book:** Rs 19,739 Cr (14 May 2026) vs Rs 18,729 Cr (30 Jun 2026) vs Rs 13,870.70 Cr (AR note, EPC contracts) vs Rs 15,354 Cr (ICRA, 31 Dec 2025). Different dates and definitions.
6. **PAT:** Rs 393 Cr reported (includes discontinued loss) vs Rs 406 Cr continuing vs Rs 350 Cr owners' share.
7. **Chairman's status** inside the AR (whole-time vs non-executive): see section 6.
8. **Hardik Dhebar:** Q4 FY26 deck and call name him in finance leadership; AR shows he resigned from 17 Jun 2026.
9. **Q1 FY27 transcript header date** (15 May 2026) vs call date (5 Aug 2026).

## 11. Sources (all downloaded, text-extracted by script, printed figures image-checked)

| Short name | Document | Date |
|---|---|---|
| AR FY26 | Welspun Enterprises Limited Annual Report 2025-26 (welspunenterprises.com, fr_1785316759.pdf), PDF page numbers are spreads, printed pages in brackets | statements 14 May 2026; online Jul 2026 |
| Q4 FY26 deck | Q4 & FY26 Investor Presentation (fr_1778840407.pdf) | 14 May 2026 |
| Q4 FY26 call | Earnings call transcript (fr_1779349708.pdf) | call 15 May 2026 |
| Q1 FY27 deck | Investor Presentation Q1FY27 (fr_1785907381.pdf) | 4 Aug 2026 |
| Q1 FY27 call | Earnings call transcript (fr_1786511362.pdf) | call 5 Aug 2026 |
| Q4 FY25 deck | Q4 & FY25 Investor Presentation (fr_1747388340.pdf), used only for the 3,584 conflict | 15 May 2025 |
| ICRA | ICRA rationale, Welspun Enterprises Ltd, id 142781 | 29 Apr 2026 |

Logo: official SVG from welspunenterprises.com (page header) saved to `src/welspun-enterprises-logo.svg` and `src/welspun-enterprises-logo-white.svg`.
