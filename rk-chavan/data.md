# R K Chavan Infrastructure Private Limited: data (RK-1)

**VERDICT: LIGHT.** Unlisted, so there is no annual report or results release to read. One credit rating rationale carries every verified figure. A strong working-capital story (see depth.md), but no EBITDA, no FY26 PAT, no disclosed interest rate, no ERP evidence and no address in any primary document read. Booklet is feasible on rating-rationale figures only, with those gaps left out or labelled.

**Blockers (line 1 rule):** (1) No annual report exists to read; MCA is out by order. (2) The company's own site was fetched but carries injected casino spam text on the home page and a 2023 footer, so it is used for people and logo only. (3) Rationale is HTML, so there are no page images; the printed tables were checked against the raw HTML table cells, not a PDF text layer. (4) No gtm file exists for this company, so the GTM check is skipped (README, checked 2026-10-09).

## Entity and listing
| Item | Finding | Grade |
|---|---|---|
| Legal name | R K Chavan Infrastructure Private Limited (RKCIPL). Named so in the rationale header and the site footer ("© 2023 R K Chavan Infrastructure Private Limited (RKCIPL)") | Verified (CRISIL rationale, 30 Jun 2026, p.1; company site footer, read 9 Oct 2026) |
| Listed? | Unlisted. No NSE or BSE listing or draft offer document found in two named searches (both zero hits for this company). Rationale lists no listed instrument; rated amounts are bank loan facilities only | Verified by absence (searches: "R K Chavan Infrastructure NSE BSE listed OR IPO OR DRHP"; rationale annexure shows bank facilities only) |
| Basis of figures | CRISIL "moderately consolidated" RKCIPL with two project SPVs: Bhoyegaon Gadchandur Roadways Private Limited and RKCIPL Karmala Tembhurni Highways Private Limited. Key indicators are "Crisil adjusted numbers" | Verified (rationale, Analytical Approach and Annexure) |

## Source documents (saved in src/d/, untrusted)
1. CRISIL Ratings rationale, 30 Jun 2026: `src/d/crisil_jun2026.html` (rating reaffirmed BBB+/Stable and A2, limits enhanced to Rs 347 Cr). Latest found; earlier actions in its own history table dated 6 May 2026, 14 Jan 2026, 5 Feb 2025.
2. Company site pages (people, clients), read 9 Oct 2026: `src/d/site_people_group_executive_board.html`, `site_people_group_clients.html`, `site_about-us.html`, `rkcipl_home.html`; logo `RKC_logo.png`.

## Figures (Rs crore, INR; entity RKCIPL as consolidated by CRISIL, "Crisil adjusted")
| Figure | Value | Grade |
|---|---|---|
| Operating income FY2025 | 524.35 | Verified (rationale 30 Jun 2026, Key Financial Indicators, March 2025 column) |
| Operating income FY2024 | 457.65 | Verified (same table, March 2024 column) |
| Revenue FY2026 | "around Rs. 700 crores", an estimate; "grown at 34% from Rs. 524 crores" | Verified as management/CRISIL estimate (Key Rating Drivers, Strengths). Computed 33.5% to 33.6% by rk-calc.py; consistent with 34% |
| Reported PAT FY2025 | 30.23 (margin 5.77%) | Verified (same table); margin recomputed 5.77 by script |
| Reported PAT FY2024 | 27.85 (margin 6.09%) | Verified (same table); margin recomputed 6.09 by script |
| PAT FY2026 | not given | NOT FOUND (searched: rationale full text; no results release exists for an unlisted company) |
| EBITDA / operating margin, any year | not given. Only a sensitivity: "sustenance of healthy profitability at above 10%" | NOT FOUND (searched: rationale full text) |
| Revenue growth FY25 over FY24 | 14.57% | Computed (rk-calc.py) |
| Revenue CAGR | "nearly 20% during past four fiscals through fiscal 26" | Verified as CRISIL's statement; not recomputed (FY2022 not in the document) |
| Net worth | "estimated networth of more than Rs. 215 crores as on March 31, 2026" | Verified (Strengths, financial risk profile) |
| Gearing | below 1 time at 31 Mar 2026 (FY26 estimate) against 0.59 times at 31 Mar 2025. Table shows Adjusted Debt/Adjusted Net worth 0.59 (FY25), 0.63 (FY24) | Verified |
| Interest coverage FY25 | 4.79 times in the table; 5.10 times in the text; FY26 about 4.7 times | Verified, but the document disagrees with itself on FY25 (4.79 vs 5.10). Print neither as headline |
| Working-capital days | Gross current assets about 250 days at 31 Mar 2026, up from 187 days at 31 Mar 2025; debtors "in the range of 100-140 days"; inventory "70-90 days" (mostly work in progress) | Verified (Weaknesses, "Working capital-intensive operations"). Day basis not stated; a "range" is not a point |
| Working-capital balances in Rs | not given | NOT FOUND. Any rupee figure from days x revenue is Computed and illustrative only (rk-calc.py: debtors 191.8 to 268.5; inventory 134.2 to 172.6 at the Rs 700 Cr estimate), never headline |
| Total rated bank facilities | Rs 347 Cr, enhanced from Rs 250 Cr (30 Jun 2026) | Verified (Rating Action, p.1); components sum to 347.0 by script |
| Facility split | Bank guarantee 164.50; cash credit 100.00; drop line overdraft 81.00; proposed cash credit 1.00; proposed non-fund 0.50 | Verified (Annexure, Details of Instruments); fund-based 182.0, non-fund 165.0 by script |
| Lenders | Union Bank of India (BG 135, CC 25), ICICI Bank (CC 50), Bank of Maharashtra (DLOD 35), UCO Bank (DLOD 46), Axis Bank (BG 20, CC 15), Punjab National Bank (BG 7.5, CC 7.5), Central Bank of India (BG 2, CC 2.5) | Verified (Annexure, Details of Bank Lenders) |
| Interest rate disclosed on borrowings | none. Coupon rate column reads NA for every facility | NOT FOUND. So no interest figure may print (README ruling) |
| Order book | EPC contracts Rs 2,595 Cr as of March 2026, "to be executed over the next 24-36 months"; toll contracts of around Rs 625 Cr | Verified (Strengths, "Healthy order book"); EPC book is 3.71 times FY26 estimated revenue (script) |
| Clients | NHAI, PWD, MORTH named as agencies in the rationale ("central and state government agencies such as NHAI, PWD, MORTH etc."); the company's Clients page also lists MSRDC, Ircon and several private contractors. Two names on that page match names on the cross-company scan list and are withheld here (see src/d/site_people_group_clients.html) | Verified (rationale; site read 9 Oct 2026, footer 2023) |
| Bank limit use / liquidity | limit use "around 80% for the past eleven months ended February 26"; cash and bank about Rs 25 Cr at 31 Mar 2026; accruals expected over Rs 60 Cr against term debt of Rs 24 to 33 Cr | Verified |
| ERP | no ERP named in the rationale or on the site; one search (company name with ERP, SAP, Tally, Oracle, Dynamics) returned nothing about this company | NOT FOUND. Do not name an ERP anywhere |
| Address | Rationale says only "Based in Pune, Maharashtra". The site pages read give no postal address | NOT FOUND in primary documents. Dossier address (Warje, Pune 411058) is Secondary (registry aggregator) and must not print without a primary source |
| Incorporation | "Incorporated in 2011" (rationale). Site says "Since our establishment in 1995" and "Over 27 years" | Verified both as statements; they differ (company incorporated 2011, business roots 1995 per its own site). Print "incorporated 2011" |

## People (names and titles only from the company's own site and the rationale)
Site page: People, RKC Executive Board (footer 2023, so stale; flag before print). Read 9 Oct 2026.
| Name | Title as the site prints it (the site joins role and function with a dash; shown here with a comma) | Other source |
|---|---|---|
| Mr. Rajkumar Chavan | Chairman & Managing Director | Rationale: "owned and managed by Rajkumar Chavan and his son" (30 Jun 2026) |
| Mr. Altaf Qureshi | CEO | site only |
| Mr. Sanjay Singh | Vice President, Infrastructure | site only |
| Mr. S. Chavan (MD's son; full first name on the site page and in the rationale) | Head, Engineering & Construction | rationale names him as co-owner and manager |
| Mr. Pramod Gaikwad | Head, Project Coordination | site only |
| Mr. Murali Krishna | Head, Procurement | site only |
| Mrs. Mala Kulkarni | Head, Finance | site title is "Head, Finance". The dossier's "CFO" comes from a registry aggregator, Secondary only |
| Miss. Sheetal Chavan | Head, Corporate Governance & CSR | site only |
Contact printed on the site: info@rkcipl.com, +020-20429295 (company's own page; a general inbox, not a person).
Logo: `src/d/RKC_logo.png`, white wordmark "RKC" with a red star accent and the line "Intelligent Engineering"; transparent background, designed for a dark ground. Source: company site upload, 2022/08.

## Dossier check (dossier is a claim list, never a source)
| Dossier claim | Result | Grade |
|---|---|---|
| Legal name R K Chavan Infrastructure Private Limited | Right | Verified |
| Unlisted | Right | Verified by absence |
| CRISIL BBB+/Stable and A2, upgraded Feb 2025 | Right on rating and date. History table: 5 Feb 2025 BBB+/Stable, 29 May 2024 BBB/Stable. The dossier is Stale: reaffirmed since on 6 May 2026 and 30 Jun 2026 | Verified (history, Annexure) |
| Rated facilities Rs 250 Cr, up from Rs 100 Cr | Stale: now Rs 347 Cr "enhanced from Rs.250 Crore". The Rs 100 Cr starting point is not in the document read | 347 and 250 Verified; 100 NOT FOUND in the one rationale read |
| Revenue FY24 Rs 457.65 Cr, FY25 Rs 524 Cr | Right (524.35 exact) | Verified |
| FY26 about Rs 700 Cr, +34% | Right, as an estimate | Verified |
| "~50% growth over two years" | FY24 457.65 to FY26 about 700 is 52.9%; mixes an audited year with an estimate, so do not print | Computed, not for print |
| Order book not in snippet | Now found: EPC Rs 2,595 Cr (March 2026) plus toll about Rs 625 Cr | Verified |
| Pure civil EPC contractor | Partly wrong: it also holds toll contracts and is building a hybrid annuity SPV (rationale) | Verified |
| Business: roads, bridges, tunnelling, mining | Roads, tunnels, bridges in the rationale; the site lists mining as a sector | Verified |
| MD Rajkumar Masappa Chavan | Name and "Managing Director" are registry data; site title is Chairman & Managing Director | Title per site Verified; DIN Secondary |
| "Mala Nitin Kulkarni listed as CFO" | Site says Head, Finance, no CFO title | Wrong title for print; use "Head, Finance" |
| "Meena / Sheetal R. Chavan, Directors" | Sheetal Chavan is on the site as Head, Corporate Governance & CSR; Meena is not on the site and not in the 2026 rationale | Unsupported as directors |
| ERP "most likely Tally or a mid-tier ERP" | Guess, as the dossier itself says | NOT FOUND |
| Registered address Warje, Pune 411058 | Not in any primary document read | NOT FOUND (Secondary only) |
| CIN U45200PN2011PTC140559 | Not in the rationale | NOT FOUND in primary documents read |
| Receivables stretch as revenue scales | Supported, and larger than the dossier knew: debtors 100 to 140 days, gross current assets 250 days | Verified |

GTM check: skipped, no gtm file exists for this company.

## Script
`python -I src/rk-calc.py > src/rk-calc-output.txt` (output saved). Includes an assertion that 700 over 524 rounds to 34%.
