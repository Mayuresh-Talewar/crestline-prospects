# Shubham EPC: data (SE-1)

**VERDICT: LIGHT.** Unlisted private company. Revenue, PAT, EBITDA, net worth, gearing, rated bank limits, order book and leaders are sourced. Missing for a FULL pack: receivable, payable and inventory days or balances (only a gross current assets band is published), any interest rate, and audited accounts. The booklet can carry the growth and gross current assets story; it cannot carry a DSO/DPO split, and it cannot print interest saved (no disclosed rate).

Blockers: MCA is out (no CIN, paid-up capital, charges, audited statements). NSE and BSE search APIs answered 403/404 from this machine. No CRISIL action dated 2026 was found (see sensitive-garvis.md).

## Entity
| Item | Value | Grade |
|---|---|---|
| Legal name | Shubham EPC Private Limited (SEPL) | Verified: D1 header, 02 Jul 2025 |
| Former name | Shubham Civil Projects Pvt Ltd, changed October 2020 | Verified: D1 "About the Company" |
| Listed? | No. A private limited company; no ticker found. | Verified (name, D1). NSE/BSE API blocked (403/404); SEBI draft offer page 1 (25 newest of 2,265, 1 to 7 Oct 2026) has no "Shubham"; web search for IPO/DRHP: zero hits for this company |
| Basis of every CRISIL figure | Standalone ("evaluated the standalone business and financial risk profiles") | Verified: D1 "Analytical Approach" |
| Founded | 1997 as proprietorship; private limited company in 2010 | Verified: D1, D2 "About the Company". D3 (2021) says "incorporated in 2009": conflict, see fact-check |
| CIN, paid-up capital | NOT FOUND (searched D1 to D4, all 14 newsletters, site disclaimer/privacy/career pages; MCA out of scope) | |

## Documents
| ID | Document | Date | Where |
|---|---|---|---|
| D1 | CRISIL rating rationale, "Ratings reaffirmed at Crisil BBB+/Stable/Crisil A2" | 02 Jul 2025 | src/d/crisil_2025-07-02.html, image-checked (screenshot) |
| D2 | CRISIL rating rationale, "Ratings upgraded to CRISIL BBB+/Stable/CRISIL A2" | 03 Apr 2024 | src/d/crisil_2024-04-03.html, image-checked |
| D3 | CRISIL rating rationale, "Rating Reaffirmed and Withdrawn" | 19 Jul 2021 | src/d/crisil_2021-07-19.html, image-checked |
| D4 | Company site shubham.biz (overview, our-team, key-strengths, contact, verticals, project pages) | fetched 08 Oct 2026, footer "Copyright 2026" | src/d/site_*.html |
| N1 | SITE INSIGHT newsletter FY2025-26 Q4 (company publication) | PDF created 31 Mar 2026 | src/d/nl_2025-26-Q4.pdf, image-only, read from page images |
| N2 | SITE INSIGHT FY2024-25 Q4 (Jan to Mar 2025) | PDF created 16 Apr 2025 | src/d/nl_2024-25-Q4.pdf |
| N3 | SITE INSIGHT FY2023-24 Q4 (header "ISSUE.01 Q4/2024") | PDF created 03 May 2024 | src/d/nl_2023-24-Q4.pdf |
| N4 | SITE INSIGHT FY2025-26 Q1 | PDF created 01 Jul 2025 | src/d/nl_2025-26-Q1.pdf |
| N5 | SITE INSIGHT FY2026-27 Q1 | PDF created 02 Jul 2026 | src/d/nl_2026-27-Q1.pdf |
| N6 | SITE INSIGHT FY2026-27 Q2 | PDF created 01 Oct 2026 | src/d/nl_2026-27-Q2.pdf |

Not found: any CRISIL rationale dated 2023 (history shows actions on 30 Jan 2023 and 21 Feb 2023) or 2026; any ICRA, CARE, India Ratings, Acuite, Infomerics or Brickwork rationale for this entity (two web searches, zero hits for this company). All 14 newsletters (FY24 Q1 to FY27 Q2) were downloaded; the five image-only issues were read at contents and finance pages only.

Computed figures: `python -I se-calc.py > se-calc.out.txt` (src/se-calc.py, output src/se-calc.out.txt). Section numbers below (C1 to C9) point to that output.

## 1. Income, EBITDA / PBILDT, PAT (Rs crore, standalone)
| FY (Mar) | Operating income | PAT | PAT margin | Source | Grade |
|---|---|---|---|---|---|
| 2020 | 154.6 | 5.2 | 3.3% | D3 KFI table | Verified |
| 2021 | 167.3 | 6.6 | 4% | D3 KFI table | Verified |
| 2022 | 275.82 | 12.00 | 4.35% | D2 KFI table | Verified |
| 2023 | 330.20 | 16.96 | 5.13% | D2 KFI table | Verified |
| 2024 | 444.39 | 25.60 | 5.76% | D1 KFI table | Verified |
| 2025 | 510.05 | 35.90 | 7.04% | D1 KFI table | Verified |

Growth, same basis (C1): FY24 +34.6%, FY25 +14.8%; FY20 to FY25 CAGR 27.0%; FY22 to FY25 multiple 1.85x.

**EBITDA / PBILDT:** CRISIL publishes no PBILDT figure in D1 to D3: NOT FOUND in rating sources. The company's own newsletter publishes "EBIDTA" (spelled so) in Rs million (N1, PDF p5, printed p03, chart "EBIDTA (Million) & EBIDTA Margin (%)", image-checked):

| FY | Turnover (N1) | EBITDA (N1) | Net worth (N1) | Grade |
|---|---|---|---|---|
| 2023 | 330.1 cr | 31.2 cr | 67.5 cr | Verified (company publication, unaudited presentation) |
| 2024 | 444.4 cr | 44.9 cr | 93.1 cr | same |
| 2025 | 508.5 cr | 56.9 cr | 122.7 cr | same |
| 2026 provisional | 680 cr | 81.6 cr | 166.9 cr | Verified as provisional: N1 says "final numbers remain subject to closure and audit"; PDF dated 31 Mar 2026, before year end |
| 2027 projected | 1,000 cr | 130 cr | 248.9 cr | Company projection, not a result |

Unit conversion million to crore (divide by 10) and margins: C3, C4. Margins recompute to 9.45%, 10.10%, 11.19%, 12.00%, 13.00% against labels 9 to 13%. Newsletter turnover ties to CRISIL operating income within 0.30% for FY23 to FY25 (C3). Two different documents: never put N1 EBITDA beside D1 PAT as one statement.

## 2. Working capital
| Item | Value | Source | Grade |
|---|---|---|---|
| Gross current assets, FY23 to FY25 | "155-200 days" | D1 "Large working capital requirement" | Verified |
| Gross current assets, FY22 to FY23 | "145-201 days" | D2 same section | Verified |
| Drivers | "moderately high receivables, inventory and other current assets pertaining to contractual requirement towards work orders" | D1, D2 | Verified |
| Funding | "credit from suppliers and short-term bank debt" | D1, D2 | Verified |
| GCA implied on FY25 OI | Rs 216.6 cr to Rs 279.5 cr | C6 | Computed (band x OI / 365; not a balance) |
| Current ratio | 1.60 times on 31 Mar 2023 | D2 "Liquidity" | Verified |
| Free cash and FD | "around Rs.8-10 crore as of Dec-23" | D2 "Liquidity" | Verified |
| Bank limit utilisation | ~75% over 12 months to Dec 2023; 80% over 12 months to Apr 2025 | D2, D1 "Liquidity" | Verified |
| Receivable, payable, inventory days or balances | NOT FOUND (searched D1 to D3 full text, N1 to N6 finance pages, site) | | |

## 3. Limits, borrowings, rate
| Item | Value | Source | Grade |
|---|---|---|---|
| Total rated bank facilities | Rs 225 cr (enhanced from Rs 165 cr) | D1 "Rating Action" | Verified; annexure sums to 225 (C8) |
| Fund based / non fund based | Rs 78.1 cr / Rs 146.9 cr | D1 rating history table | Verified; ties to annexure (C8 self-check) |
| Sanctioned CC and CC/OD | Rs 65.5 cr (Apr 2024: Rs 44.5 cr) | D1, D2 lender annexures | Computed (C8) |
| Lenders (Jul 2025) | HDFC Bank 54.1, Axis Bank 50, ICICI Bank 50, Bank of Baroda 37, proposed 33.9 | D1 lender annexure | Computed sums (C8) |
| Term loan | Rs 1.1 cr, HDFC Bank, maturity 30 Jun 2027 | D1 annexure | Verified |
| Ratings | Long term Crisil BBB+/Stable, short term Crisil A2 | D1 | Verified (as at 02 Jul 2025) |
| Gearing (adjusted debt / adjusted net worth) | 0.60 (FY25), 0.64 (FY24), 0.90 (FY23), 0.97 (FY22) | D1, D2 KFI | Verified. D1 text says "0.61 time": internal conflict |
| Interest coverage | 5.82 (FY25), 6.14 (FY24), 5.21 (FY23), 5.27 (FY22) | D1, D2 KFI | Verified. D2 text says FY23 "5.31": internal conflict |
| NCA / total debt | 0.52 (FY25), 0.31 (FY23) | D1, D2 text | Verified |
| Term debt obligation | Rs 5 to 8 cr a year, medium term; accrual expected ~Rs 40 cr | D1 "Liquidity" | Verified |
| Debt amount (Rs) | NOT FOUND in any source. A cross-source estimate (C9) exists and must not be printed | | |
| Interest rate | NOT FOUND (coupon column "NA" for every facility in D1, D2; no rate in N1 to N6 or site). Interest saved cannot be printed | | |

## 4. Order book and client mix
| Item | Value | Source | Grade |
|---|---|---|---|
| Order book | "above Rs 1400 crore, to be executed in the next 24-30 months" | D1 "Healthy order book" (02 Jul 2025) | Verified |
| Earlier order book | "above Rs 1000 crore, to be executed in the next 24 months" | D2 (03 Apr 2024) | Verified |
| Cover | 2.74x FY25 operating income | C7 | Computed; dates differ (Jul 2025 book vs FY25 income) |
| Later order book figure | NOT FOUND. N1 says only "a strong order book". N2 (Archana Badera): "The value of projects in hand has doubled compared to the start of the previous financial year" (image-checked, PDF p1) | N1, N2 | Verified wording, no figure |
| Client types | "Public Works Departments, other government and semi-government bodies and corporates" | D1 strengths | Verified |
| Geography | "Most of the company's orders are derived from Maharashtra" (D1); "80% of our revenue generated from the state" (site, undated) | D1; D4 key-strengths | Verified / Verified (site, undated) |
| Segments | healthcare, data centre, MEP besides civil (D1); site adds life sciences and laboratory, interior fit out, real estate | D1; D4 | Verified |
| Client split by % or by name share | NOT FOUND | | |
| Named projects (site) | Dr. Babasaheb Ambedkar Super Speciality Hospital and PGI, Nagpur (client Nagpur Improvement Trust, ongoing); Police Commissioner admin building, Pune (Govt of Maharashtra, completed); Police Sub HQ, Baramati (completed); Welspun One warehouse, JNPA SEZ (ongoing); Casa Venero villas, Alibag (Emaar India, ongoing); NMDC-02/03 data centres, Mumbai; STT DC-05; IVBP Pune vaccine plant (N5 p9) | D4 project pages, awards page; N5 | Verified (site); live status per site only |

## 5. Leaders (names and titles)
| Name | Title | Source | Grade |
|---|---|---|---|
| Vinay Badera | "CEO & Managing Director" | N6 p13 (printed p11), Oct 2026, image-checked. Site and N1 say "Founder & Managing Director" / "Managing Director" | Verified (latest title N6) |
| Archana Badera | Director (promoter) | D4 our-team; D1 promoters; N2 p1 | Verified |
| CA Mangesh Katariya | Director, Chartered Accountant | D4 our-team; N3 p2 "CA Mangesh Kataria, Director" (image-checked; spelling differs) | Verified |
| Karan Shah | Director | D4 our-team | Verified (site 2026) |
| Vipul Patel | Director, "joined ... as a Director in 2026"; "oversees purchasing, site-level financial management" | D4 our-team | Verified (site 2026) |
| Dnyaneshwar Thorat | General Manager, Project Support | N5 p4 (printed p02) | Verified |
| CFO / finance head | NOT FOUND (D1 to D3, D4 our-team, N1 to N6 finance pages) | | |

Promoters: "Mr Vinay Badera and Ms Archana Badera" (D1).

## 6. Address
| Item | Value | Source | Grade |
|---|---|---|---|
| Head office | 401, Amit Crystal, Senapati Bapat Road, Pune, Maharashtra 411016 | D4 contact page (08 Oct 2026) | Verified |
| Regional office | G-10, Ground Floor, Raheja Centre, 214 Nariman Point, Mumbai, Maharashtra 400021 | D4 contact page | Verified |
| Phone / mail | 020 2566 6863 / info@shubham.biz | D4 contact page | Verified |
| Registered office wording (4th floor, S.No. 106/2A, office 402) | NOT FOUND in primary sources (dossier cites MCA/Zauba) | | |
| Planned office | "our Nagpur regional office will soon become operational" (Vinay Badera, N1 p13) | N1 | Verified |

## 7. Systems (for the booklet's ERP rule)
| Item | Value | Source | Grade |
|---|---|---|---|
| ERP in use; Tally being retired | "integrated a complete accounting workflow into our ERP system, phasing out conventional Tally software in the upcoming financial year" | N2 PDF p1, Archana Badera, Director (image-checked; text layer placed it near the MD's name) | Verified |
| Migration done | "lead the migration to a unified ERP system ... parallel systems Tally and ERP software" | N4 PDF p14 (printed p12), Raju Jadhav, Head Office Pune (image-checked) | Verified |
| ERP product name | NOT FOUND (site "ERP Login" points to a bare IP address; not opened) | D4 footer | |
| HRMS | Akrivia HCM (site "HRMS Login" link shubham.akriviahcm.com) | D4 footer | Verified (link only) |
| Other tools | Hilti ON!Track for P&M assets (N3 p2); Microsoft 365 (N4) | N3, N4 | Verified |
