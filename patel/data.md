# Patel Engineering Limited: data (PE-1)

## VERDICT: LIGHT

**Short version.** On the running jobs, Patel bills monthly and gets paid; trade receivables are small. The working capital is locked in **contract assets (unbilled work in progress) of Rs 3,675.78 Cr, which is 264.8 days of standalone revenue at 31 Mar 2026**. The company does not say how much of that balance is legacy arbitration claims and how much is running work. Days can be priced on the clean legs (receivables, MSME payables, advances). They cannot be honestly priced on the whole contract asset balance.

**Do claims dominate receivables or contract assets? Blunt answer:**
* **Receivables: no, by size, but the tail is legacy.** Net trade receivables are Rs 813.54 Cr (58.6 days). That figure is already **net of Rs 404.24 Cr of advances received against arbitration awards and claims**. Of gross receivables, **34.1% is more than 3 years past due** (Rs 286.65 Cr). The note says receivables on awarded claims are interest bearing. That old tail is claims, not running bills.
* **Contract assets: probably, in part, and the size is undisclosed.** This is the legacy claims trap. Both the AR FY26 accounting policy and the auditor's key audit matter say claims and variations are booked as revenue when "highly probable of recovery". The FY25 rating rationale (S6) says the WIP "includes unbilled revenue and arbitration claims pending awards relating to legacy projects". **Non-current contract assets rose 34.7% in one year, to Rs 1,207.06 Cr (87.0 days)**, while revenue grew 1.18%. Management's own "adjusted" NWC strips out arbitration claims but never gives the amount. Management has given a gross claims figure on calls (S1). That is a claim value, not a book value, so it cannot be netted against the balance.
* **So what can be priced:** receivable days, MSME late payment, client advances, and retention (management figure). A contract asset scenario may be run **only on the current portion (Rs 2,468.72 Cr, 177.8 days)**, and it must be labelled "may include claims; the company does not disclose the split". The non-current portion must never be priced as a Crestline saving.
* **Why not NOT FEASIBLE:** the filings are rich. They give full receivable ageing, the contract balance roll-forward, MSME detail, rates per facility and stated NWC days. The ERP is SAP, verified in two filings. The live business is billing and collecting.

Basis: **STANDALONE** unless labelled CONSOLIDATED. Units: Rs crore (Cr). Filings report in Rs million, and conversion (/10) is by script.
Computed figures come from `python -I src/pe-calc.py > src/pe-calc-output.txt` (run from the patel folder; output saved in src/pe-calc-output.txt). All checks in the script pass. Tables and quotes were read from rendered page images.

## Sources (all downloaded to src/d/, NSE archive unless stated)
| Code | Document | Filed |
|---|---|---|
| AR26 | Annual Report FY2025-26 (AR26.pdf) | 24 Aug 2026 |
| AR25 | Annual Report FY2024-25 (AR25.pdf) | 18 Aug 2025 |
| AR24 | Annual Report FY2023-24 (AR24.pdf) | 20 Aug 2024 |
| R4Q26 | Audited results Q4/FY26, standalone and consolidated (PATELENG_14052026143743) | 14 May 2026 |
| D4Q26 | Investor presentation Q4 FY26 (PATELENG_14052026162812) | 14 May 2026 |
| T4Q26 | Transcript, Q4 FY26 call of 14 May 2026 (PATELENG_20052026114450) | 20 May 2026 |
| R1Q27 | Unaudited results Q1 FY27 (PATELENG_10082026135815) | 10 Aug 2026 |
| D1Q27 | Investor presentation Q1 FY27 (PATELENG_10082026162413) | 10 Aug 2026 |
| T1Q27 | Transcript, Q1 FY27 call of 11 Aug 2026 (PATELENG_17082026130357) | 17 Aug 2026 |
| R4Q25 | Audited results Q4/FY25 (PATELENG_13052025135133) | 13 May 2025 |
| D4Q25 | Investor presentation Q4 FY25 (PATELENG_13052025140809) | 13 May 2025 |
| T4Q25 | Transcript, Q4 FY25 call of 13 May 2025 (PATELENG_20052025190008) | 20 May 2025 |
| T1Q26 | Transcript, Q1 FY26 call of 11 Aug 2025 | 18 Aug 2025 |
| T2Q26 | Transcript, Q2 FY26 call of 13 Nov 2025 | 19 Nov 2025 |
| T3Q26 | Transcript, Q3 FY26 call of 16 Feb 2026 | 20 Feb 2026 |
| Rating | Rating rationale and letters: see S6 | various |

Blocker: the company site (pateleng.com) did not respond (no data returned in 120 s), so all documents came from the NSE archive. The 2026 rating rationale (press release) could not be fetched. Only the rating letter is on NSE. See S6.

## 1. Profit and loss
| Figure | FY26 | FY25 | FY24 | Grade, source |
|---|---|---|---|---|
| Revenue from operations, STANDALONE | Rs 5,066.56 Cr | Rs 5,007.64 Cr | Rs 4,412.04 Cr | Verified: R4Q26 PDF p9 (FY26, FY25); AR25 PDF p150, printed p163 (FY24, AR25 vintage) |
| Revenue from operations, CONSOLIDATED | Rs 5,102.74 Cr | Rs 5,093.36 Cr | Rs 4,544.11 Cr | Verified: R4Q26 PDF p20; R4Q25 PDF p21 |
| EBITDA, STANDALONE (computed: revenue less material, construction, employee, other expenses) | Rs 659.43 Cr (13.02%) | Rs 691.26 Cr (13.80%) | Rs 620.11 Cr (14.05%) | Computed, pe-calc. Ties to the company's "operating EBITDA INR 659 crores, 13%" (T4Q26 PDF p8, Rahul Agarwal) |
| EBITDA, CONSOLIDATED (company stated) | Rs 684 Cr, 13.41% | Rs 733 Cr, 14.4% | Rs 690 Cr, 15.19% | Verified: T4Q26 PDF p7; T4Q25 PDF p6 (image checked). D4Q26 slide 36 shows 6,840 / 7,332 / 6,903 Rs Mn |
| PAT, STANDALONE | Rs 284.96 Cr | Rs 262.21 Cr | Rs 285.60 Cr | Verified: R4Q26 PDF p9; AR25 PDF p150 |
| Net profit after associates, CONSOLIDATED | Rs 269.17 Cr | Rs 247.85 Cr | Rs 302.21 Cr (continuing) | Verified: R4Q26 PDF p20; R4Q25 PDF p21. The CFO's "PAT 294 / 242" is owners' total comprehensive income (2,944.95 / 2,421.74 Rs Mn) |
| Finance cost, STANDALONE | Rs 290.61 Cr | Rs 318.78 Cr | Rs 356.79 Cr | Verified: as revenue |
| Finance cost, CONSOLIDATED | Rs 296.44 Cr | Rs 322.42 Cr | Rs 362.09 Cr | Verified: as revenue |
| Q1 FY27, STANDALONE | Revenue Rs 1,273.73 Cr; PAT Rs 85.77 Cr; finance cost Rs 61.01 Cr | | | Verified: R1Q27 PDF p4. The CFO's "Profit after tax is Rs. 82.74 crores" (T1Q27 PDF p7) equals total comprehensive income (827.41 Rs Mn), not PAT |

Note: AR26 restates FY25 comparatives (see section 3). FY24 comes from the AR25 vintage. Do not set FY24 beside FY26 balances as one series without the vintage label.

## 2. Receivables, contract assets, retention, advances (STANDALONE)
| Figure | 31 Mar 2026 | 31 Mar 2025 | 31 Mar 2024 | Grade, source |
|---|---|---|---|---|
| Trade receivables, net (non current + current) | Rs 813.54 Cr | Rs 992.60 Cr | Rs 752.49 Cr | Verified: AR26 PDF p120, printed p213; AR25 PDF p169, printed p182 |
| Receivable days on standalone revenue | 58.6 | 72.3 | 62.3 | Computed, pe-calc |
| Gross receivables, ageing (from due date): less than 6 m / 6 m to 1 y / 1 to 2 y / 2 to 3 y / more than 3 y / not due (Rs Mn) | 3,541.67 / 771.03 / 1,051.88 / 176.64 / 2,866.47 / 0 (total 8,407.70) | 5,537.04 / 289.49 / 864.35 / 942.62 / 2,704.16 / 0 (total 10,337.66) | 1,772.17 / 414.00 / 1,830.88 / 1,089.07 / 1,873.95 / 549.83 (total 7,529.90) | Verified: same pages |
| Share of gross receivables more than 3 years past due | 34.1% | 26.2% | 24.9% | Computed |
| Advances received against arbitration awards/claims, netted off receivables | Rs 404.24 Cr | Rs 357.39 Cr | Rs 491.41 Cr | Verified: AR26 PDF p120 note 4 (III); AR25 PDF p169 |
| Contract assets (unbilled WIP), "technically valued and certified by the management" | Rs 3,675.78 Cr | Rs 3,294.35 Cr | Rs 2,956.16 Cr (1 Apr 2024) | Verified: AR26 PDF p138, printed p248 (roll-forward); PDF p122, printed p216 (note 9) |
| of which non-current | Rs 1,207.06 Cr (87.0 days) | Rs 895.89 Cr (65.3 days) | not split | Verified / Computed |
| of which current | Rs 2,468.72 Cr (177.8 days) | Rs 2,398.46 Cr (174.8 days) | not split | Verified / Computed |
| Contract asset days, total | 264.8 | 240.1 | | Computed |
| Contract assets growth, 1 Apr 2024 to 31 Mar 2026 | 24.3% | | | Computed |
| Contract liabilities (client advances) | Rs 620.23 Cr (44.7 days) | Rs 667.47 Cr (48.7 days) | Rs 765.66 Cr (1 Apr 2024) | Verified: AR26 PDF p138; notes 21 and 26, PDF p125 to p126 |
| Retention | NOT FOUND in filings as a line. Management: "between 200 to 250 crores is there as retention on the balance sheet", "retention almost 5% for every contract" | | | Verified quote: Rahul Agarwal, CFO, T1Q27 PDF p15 (printed p14), call 11 Aug 2026, image checked. 14.4 to 18.0 days of FY26 standalone revenue (Computed, pe-calc); 14.3 to 17.9 days of FY26 consolidated revenue, the basis the deliverables use since PE-4 (calc/pe-savings-output.txt). Searched: AR26 notes 4, 6, 9 and contract balances; "Secured deposit" in note 6 (Rs 495.11 Cr) is not labelled retention |
| Inventories (incl. stock of land Rs 126.52 Cr) | Rs 791.43 Cr | Rs 907.75 Cr | | Verified: AR26 PDF p122 note 10 |

Reading: contract assets are 4.52 times net receivables (3,675.78 against 813.54, Computed). That is where the cash sits.

## 3. Payables, including MSME (STANDALONE)
| Figure | 31 Mar 2026 | 31 Mar 2025 | Grade, source |
|---|---|---|---|
| Trade payables (non current + current) | Rs 2,821.68 Cr | Rs 2,815.68 Cr | Verified: AR26 PDF p125 to p126, printed p222 to p224 |
| Payable days on revenue / on material plus construction cost | 203.3 / 273.9 | 205.2 | Computed |
| Of which unbilled / not due | Rs 1,264.48 Cr (44.8%) | | Verified: AR26 PDF p140 note 55, printed p253; Computed share |
| Of which piece rate wages (current) | Rs 995.40 Cr | Rs 667.51 Cr | Verified: note 24 |
| MSME dues (principal and interest) | Rs 87.03 Cr | Rs 46.11 Cr | Verified: AR26 PDF p126 note 24(1), printed p224 |
| MSME: paid beyond the appointed day during the year | **Rs 161.35 Cr** | Rs 54.11 Cr | Verified: same; Computed: 2.98 times FY25 |
| MSME interest accrued and unpaid at year end | Rs 16.28 Cr | Rs 7.90 Cr | Verified: same |

Vintage warning: AR25 put the unbilled WIP inside inventories (FY25 inventories Rs 4,202.10 Cr; AR25 PDF p149, printed p162). AR26 moved it to contract assets under other assets. AR26 also restated FY25 standalone operating cash flow from Rs 368.32 Cr to Rs 283.92 Cr. Never compare an AR25 balance sheet line with an AR26 one.

## 4. Borrowings and the rate per facility
| Figure | Value | Grade, source |
|---|---|---|
| Borrowings, STANDALONE, 31 Mar 2026 | Rs 1,124.00 Cr (Rs 1,533.24 Cr in FY25) | Verified: AR26 note 16 and 23, PDF p123, p125; note 51 PDF p140 shows 11,240.04 / 15,332.42 Rs Mn |
| Gross debt, CONSOLIDATED, 31 Mar 2026 | Rs 1,187 Cr: working capital Rs 847 Cr, term Rs 340 Cr | Verified: T4Q26 PDF p8, Rahul Agarwal, image checked; D4Q26 slide 28 (11,870 Rs Mn) |
| Gross debt, CONSOLIDATED, 30 Jun 2026 | Rs 1,293 Cr: working capital Rs 969 Cr, term Rs 324 Cr | Verified: T1Q27 PDF p7, image checked |
| Cash credit | 9.90% to 12.35% p.a. (FY25: 10.20% to 13.25%), yearly renewal | Verified: AR26 PDF p126, printed p224 |
| Listed NCD, Rs 90 Cr issued in FY26 | 10.25% p.a. coupon | Verified: AR26 PDF p124, printed p220 |
| Optionally convertible debentures (origin: S2) | 0.01% coupon, 7% p.a. yield to maturity | Verified: same |
| Term loans from banks (Rs 84.95 Cr) | 8.60% to 10.25% average | Verified: AR26 PDF p124, printed p221 |
| Foreign currency term loan (Rs 28.20 Cr) | 1.5% + 3 month EIBOR (printed "EQUIBOR") | Verified: same |
| Term loans from others (Rs 30.44 Cr) | 10.75% to 11.50% | Verified: same |
| Supplier finance (bills discounting) from others, Rs 51.57 Cr | 11.00% to 12.50% | Verified: AR26 PDF p125, printed p223 |
| Supplier finance from banks, Rs 18.98 Cr | 6.75% to 8.15% | Verified: AR26 PDF p126, printed p224 |
| Unsecured inter-corporate loan, Rs 32.94 Cr | 10% | Verified: same |
| Management's blended rate | "The interest rates are around 11%, 11.5%"; debt plus client advances average "between 11% to 12%" | Verified quote: Rahul Agarwal, T4Q26 PDF p13 to p14. Rule: for a booklet interest figure, use cash credit 9.90% to 12.35% (the facility that working capital release would repay), capped at the Rs 847 Cr working capital debt |
| Bank guarantees / surety bonds outstanding | Rs 2,398.80 Cr | Verified: AR26 PDF p136 note 46(a), printed p245 |

## 5. Operating cash flow
| Figure | Value | Grade, source |
|---|---|---|
| OCF, STANDALONE FY26 | Rs 564.12 Cr (85.5% of computed EBITDA) | Verified: R4Q26 PDF p12; Computed share |
| OCF, STANDALONE FY25 | Rs 283.92 Cr (AR26 vintage) / Rs 368.32 Cr (AR25 vintage) | Verified: R4Q26 PDF p12; AR25 PDF p151, printed p164 |
| OCF, STANDALONE FY24 | Rs 454.38 Cr (AR25 vintage) | Verified: AR25 PDF p151 |
| OCF, CONSOLIDATED FY26 | Rs 560.10 Cr | Verified: R4Q26 PDF p23 |
| Write-offs and settlements inside OCF | See S10 | |

## 6. Working capital days the company states (CONSOLIDATED)
| Date | Net working capital days | Adjusted NWC days ("excludes borrowings, arbitration claims, current investment, cash and bank balance and stock of land") | Source |
|---|---|---|---|
| FY23 | 160 | 104 | D4Q26 slide 36 (image checked) |
| FY24 | 145 | 96 | same |
| FY25 | 105 | 110 | same; T4Q25 PDF p7 ("around 110 days" adjusted) |
| FY26 | 120 | 106 | same; T4Q26 PDF p8, Rahul Agarwal |
| Q1 FY27 (30 Jun 2026) | 137 | 133 | D1Q27 slide 14; T1Q27 PDF p7 |
| Receivable days (management) | "between 40 to 45" (Q1 FY27); "receivable days between 45 to 60 days" (Nov 2025) | | T1Q27 PDF p13; T2Q26 PDF p7, Rahul Agarwal, image checked |

My standalone trade WC (receivables + contract assets + inventory, less trade payables and contract liabilities) is 132.5 days in FY26 and 124.8 days in FY25 (Computed). It is a different basis and formula from the company's NWC, so do not print them side by side. Management's receivable days (40 to 45) are below the year-end computed 58.6. Their basis is not stated.

## 7. Order book and inflow (CONSOLIDATED)
| Figure | Value | Grade, source |
|---|---|---|
| Order book 31 Mar 2024 | Rs 18,663.00 Cr | Verified: D4Q25 slide 32 (image checked); AR25 PDF p196 (prior year RPO) |
| Order book 31 Mar 2025 | Rs 15,217.60 Cr excl. L1 | Verified: D4Q25 slide 32; T4Q25 |
| Order book 31 Mar 2026 | Rs 15,119.30 Cr; hydro 62.66%, irrigation 16.19%, tunnel 4.76%, road 1.42%, urban and others 14.96%; 53 projects | Verified: D4Q26 slide 10 (image checked); AR26 PDF p137 (standalone RPO Rs 15,119 Cr) |
| Order book 30 Jun 2026 | Rs 14,635.60 Cr | Verified: D1Q27 slide 9; T1Q27 PDF p3 |
| Change FY24 to FY26 | minus 19.0% | Computed |
| FY26 order inflow | about Rs 4,400 Cr | Verified: T4Q26 PDF p3, Kavita Shirvaikar; D4Q26 slide 4 ("~ INR 44,000 Mn") |
| FY25 order inflow | "around Rs. 500 crores" (Kavita Shirvaikar) and "Rs. 550 crores" (same call, opening) | Verified: T4Q25 PDF p8 and p4. Two figures in one call |
| L1 at May 2026 | Lower Arun, about Rs 1,600 Cr | Verified: T4Q26 PDF p5 |
| Book to bill FY26 | 2.96 | Computed (deck states 2.96) |

## 8. ERP (filings only)
**SAP. Verified twice:**
* AR24 PDF p24, printed p45 (filed 20 Aug 2024): "We have successfully implemented SAP across all our project sites to streamline operations and enhance productivity." Image checked.
* AR26 PDF p104, printed p181 (filed 24 Aug 2026), standalone auditor's report: "the company has used SAP accounting software & HR software for payroll function which have a feature of recording audit trail (edit log) facility". Image checked.
* AR26 PDF p42 (MD&A) speaks of future "SAP-driven enterprise integration". AR26 PDF p43 mentions ERP implementations generally.

## 9. People and registered office
| Item | Value | Grade, source |
|---|---|---|
| Managing Director | **Ms. Kavita Shirvaikar, Managing Director** (DIN 07737376; CA and ICWAI; Chief Financial Officer & Whole Time Director in AR24 signatures) | Verified: AR26 PDF p43, printed p59 (Corporate Information); R4Q26 signatures; AR24 PDF p41 |
| CFO | **Mr. Rahul Agarwal, Chief Financial Officer** | Verified: AR26 PDF p43, printed p59. AR24 listed him as "Acting Chief Financial Officer" |
| Chairperson | Ms. Janky Patel, Chairperson (non-executive, promoter), effective 6 Jul 2024 | Verified: AR26 PDF p43; AR24 PDF p32, printed p60 |
| Company Secretary | Ms. Shobha Shetty, Company Secretary and Compliance Officer | Verified: AR26 PDF p43 |
| Finance contact | Mr. Rishi R Vyas, Head Finance (addressee of rating letter, 2 Jun 2026) | Verified: rating letter in NSE filing of 3 Jun 2026, PDF p2 (S6) |
| Registered office | Patel Estate Road, Jogeshwari (West), Mumbai 400 102 | Verified: AR26 PDF p43; letterhead of every filing |
| CIN | L99999MH1949PLC007039 | Verified: R4Q26 PDF p9 |
| Company email | investors@pateleng.com | Verified: AR26 PDF p43 |

## 10. Items for Garvis (detail in sensitive-garvis.md)
S1 claims portfolio size and recovery; S2 debt restructuring and security; S3 promoter matters; S4 site incident; S5 overseas JV action; S6 ratings; S7 litigation settlements and contingent liabilities; S8 auditor EoM; S9 group entities, real estate, land; S10 write-offs and exceptional items.

## Internal conflicts in the company's own documents (not resolved, reported)
* FY26 consolidated revenue: slide 4 of D4Q26 says "INR 51,207 Mn" in its highlights and "INR 51,027 Mn" in its own table. The results say 51,027.42. Use 51,027.42.
* FY25 consolidated gross debt: Rs 1,600 Cr (T4Q25), Rs 1,603 Cr (T1Q26, T3Q26), Rs 1,645 Cr (T4Q26), 16,025 Rs Mn (D4Q26 slide 28).
* FY24 consolidated gross debt: Rs 1,886 Cr (T4Q25 PDF p6) against 18,932 Rs Mn (D4Q26 slide 28).
* FY25 adjusted NWC (110) is above reported NWC (105), although the adjustment removes assets. The definition used that year is not reconciled.
