# AGC Infracon Private Limited: data (step 1, research)

**VERDICT: LIGHT.** Unlisted. The only audited financials in reach are FY24 (year to 31 Mar 2024) read through one rating rationale, now 2.5 years old. No annual report, no results, no receivable or payable balances, so no working-capital days can be derived. Enough exists for a short booklet built on limits, order book, liquidity wording and named promoters.

Blockers (line 1 rule): no annual report or results can exist for an unlisted company and MCA is out of scope. No rationale newer than 23 Apr 2025 was found (searched Infomerics, CRISIL, CARE, ICRA, India Ratings, Acuite, Brickwork on 2026-10-09). No gtm file exists for this company, so the GTM check is skipped. Company site read for people and logo only.

Lessons applied: primary first; entity and basis on every figure; page image checked; numbers by script; one disconfirm search per headline; sensitive items to Garvis only; people from filings or the company's own site.

## Entity
- Legal name: **AGC Infracon Private Limited** (erstwhile AG Construction). Infomerics PR 23 Apr 2025, p1 header. Image-checked.
- Listed: **No.** No NSE/BSE listing found; the company is rated by Infomerics as a private limited company (PR 23 Apr 2025, p4 "About the Company": converted to a private limited company in 2023). Search for an exchange filing returned nothing.
- Basis: Infomerics' page 5 heading reads "Financials (Consolidated)", but the same PR says "Analytical Approach: Standalone" (p3) and "List of companies considered for consolidated analysis: Not Applicable" (Annexure 4). The 6 Mar 2025 PR prints the same figures under "Financials (Standalone)". Treat as **standalone**; the "Consolidated" heading is Infomerics' own inconsistency.

## Sources read (all saved in src/d/)
| File | Document | Date |
|---|---|---|
| pr-AGC-Infracon23apr25.pdf | Infomerics press release, upgrade (the ONE rationale used) | 23 Apr 2025 |
| len-AGCInfracon-apr25.pdf | Infomerics Annexure II, lender list (part of that rationale) | 23 Apr 2025 |
| pr-AGC-Infracon-6mar25.pdf | Infomerics press release, downgrade (read only to disconfirm) | 6 Mar 2025 |
| agc-logo-light.png | Logo, company site (light variant, gold mark on transparent) | fetched 2026-10-09 |

Calc: `python -I src/ag-calc.py` ; output saved in `src/ag-calc-out.txt`. A "(calc)" grade below cites that file.

## Dossier check (src/26_AGC_Infracon_Dossier.pdf, a checklist only)
| Dossier claim | Result | Evidence |
|---|---|---|
| Legal name AGC Infracon Pvt Ltd, erstwhile AG Construction | Verified | Infomerics PR 23 Apr 2025, p1 |
| Unlisted | Verified (no listing found; rated as a private company) | PR 23 Apr 2025, p4; search 2026-10-09 |
| Rating BBB minus/Stable and A3, upgraded Apr 2025 from BB+ and A4+ | Verified | PR 23 Apr 2025, p1 |
| Total rated Rs 235.98 Cr | Verified | PR 23 Apr 2025, p1; sum (calc) |
| FY24 revenue Rs 567.6 Cr, FY23 Rs 513.3 Cr, +11% | Verified, Rs 567.63 Cr and Rs 513.30 Cr; growth 10.58% (calc) | PR 23 Apr 2025, p2 and p5, image-checked |
| Dossier labels it "Revenue (consol)" | Conflict inside the source | p5 says Consolidated, p3 and Annexure 4 say standalone |
| FY24 PAT Rs 38.4 Cr | Verified, Rs 38.39 Cr | p5 image |
| PAT margin about 6.8% | Verified, 6.75% stated, 6.76% computed | p2; calc |
| Order book about Rs 1,703 Cr at 31 Dec 2024, 3x revenue | Verified, Rs 1,702.68 Cr, "3x of FY24 revenue"; 3.00x (calc). **Stale: 21 months old.** | p3, image-checked |
| Clients MSIDC, state irrigation divisions, NHAI | Verified, wording differs | p3: Maharashtra State Infrastructure Development Corporation, Minor Irrigation Division Hingoli, Osmanabad Irrigation Department, National Highways & Infrastructure Development Corporation Limited, National Highway Authority of India |
| Mar 2025 downgrade over liquidity and PF dues, upgraded Apr 2025 | Verified | PR 6 Mar 2025, p1; PR 23 Apr 2025, p1 |
| "Now cured" / "going concern" | Unsupported | Apr PR p4: PF payment delayed again in Feb 2025, auditors say "technical reasons". No going-concern statement in either PR |
| Incorporated 31 Oct 2023 | NOT FOUND in the two PRs read | PRs say only "2023". Appeared in a search snippet of an older rationale, which was not opened |
| Aurangabad / Chhatrapati Sambhajinagar | Verified | Company site footer; PR p4 "Aurangabad" |
| Pure civil EPC, roads, barrages, canals, dams | Verified in substance | Site; PR p4 |
| MD name via MCA | Not needed; founders' sons named in PR p4 and the site, no titles | see Leaders |
| CFO not publicly named | Still NOT FOUND | see Leaders |
| ERP "most likely Tally", no public signal | NOT FOUND. Searches: "AGC Infracon ERP", "Tally", "SAP"; the company site; both PRs. Zero hits. Do not print any ERP | |
| "Receivables stress, retention lock-up, heavy unbilled revenue" | Unsupported as written. The PR says "average working capital utilisation about 69%" and names an unpaid-bills risk across Maharashtra contractors; it prints no receivable or unbilled figure | PR 23 Apr 2025, p3, p4 |

## Figures
Entity for all rows: AGC Infracon Private Limited. Document: Infomerics PR 23 Apr 2025 (filed 23 Apr 2025), standalone unless said. Rs crore. Image-checked = read from the rendered page.

### Income, EBITDA, PAT
| Item | FY23 | FY24 | Grade |
|---|---|---|---|
| Total operating income | 513.30 | 567.63 | Verified, p5, image-checked, Infomerics classification, audited |
| EBITDA | 49.17 | 58.96 | Verified, p5, image-checked |
| PAT | 32.57 | 38.39 | Verified, p5, image-checked |
| EBITDA margin % | 9.58 | 10.39 | Verified p5; 9.58 and 10.39 reproduced (calc) |
| PAT margin % | 6.34 | 6.75 | Verified p5; calc gives 6.35 and 6.76 (rounding in the source) |
| Revenue growth FY24 | | 10.58% | Computed (calc) |
| 9M FY25 total operating income | 9M FY24: 325.85 | 9M FY25: 341.34 | Verified, p2; growth 4.75% (calc). Unaudited, no later period found |

FY25 and FY26 full-year figures: NOT FOUND (searched rating agencies and the company site; private company, no filing in reach).

### Working capital
| Item | Value | Grade |
|---|---|---|
| Days (DSO, DPO, DIO, cash cycle) | none | NOT FOUND. No receivable, payable or inventory balance in either PR |
| Current ratio, 31 Mar 2024 | 1.13x in the 23 Apr 2025 PR; 0.84x (prior year 0.90x) in the 6 Mar 2025 PR | Verified, both. Different by Infomerics' own restatement: Rs 15.65 Cr of fixed deposits, earnest money and retention money moved from non-current to current assets, "post written confirmation from auditors" (p4, image-checked) |
| Free cash and equivalents, 31 Mar 2024 | 13.76 | Verified, p4, image-checked |
| Retention, earnest money and fixed deposits reclassified | 15.65 (combined, not split) | Verified, p4. Retention alone: NOT FOUND |
| Average working-capital utilisation, 12 months to Dec 2024 | about 69% | Verified, p4. Limit base not stated, so no rupee figure computed |
| Revenue per day FY24 | Rs 1.555 Cr (Rs 155.5 lakh) | Computed (calc), FY24 only |
| Overall gearing FY23, FY24 | 0.82x, 0.74x | Verified p5 and reproduced (calc) |
| Total debt FY23, FY24 | 46.27, 51.33 | Verified, p5 image |
| Tangible net worth FY23, FY24 | 56.72, 69.02 | Verified, p5 image |
| Interest coverage FY23, FY24 | 6.53x, 8.63x | Verified, p5 image |

### Limits and borrowings (rated facilities, 23 Apr 2025)
| Facility | Rs Cr | Nature | Grade |
|---|---|---|---|
| Cash credit | 20.00 | Long term, IVR BBB minus/Stable | Verified, p7 Annexure 1 and Annexure II image |
| GECL | 0.98 | Long term, matures Oct 2027 | Verified |
| Overdraft | 30.00 | Short term, IVR A3 | Verified |
| Bank guarantee | 185.00 | Short term, IVR A3 | Verified |
| Total | 235.98 | | Verified; sum (calc) |
Fund based (CC + OD + GECL) 50.98; non fund 185.00 (calc). Lenders (Annexure II, image-checked): HDFC Bank, Bank of Maharashtra, AU Small Finance Bank, Kotak Mahindra Bank. Facility by lender is in the saved Annexure II; the OD and BG rows reconcile to 30.00 and 185.00 (calc).
**Interest rate on any facility: NOT FOUND.** Annexure 1 prints "-" for coupon rate; no rate in either PR. Under the playbook, no interest figure may be printed for this company.
Disclosed borrowings are at FY24 (51.33 total debt); no later balance found.

### Order book and clients
| Item | Value | Grade |
|---|---|---|
| Unexecuted order book, 31 Dec 2024 | Rs 1,702.68 Cr, "3x of FY24 revenue", "to be executed in a period of 15-18 months", "All orders are having escalation clause" | Verified, p3 (heading on p2), image-checked. Stale, see depth.md |
| Customers named | listed in the dossier check above | Verified p3 |
| Later order book, order wins, cancellations | NOT FOUND (private, no filing; rating agencies searched) | |
| Order by order values | NOT FOUND | |
Company site lists featured projects (road, highway, barrage, canal) with no values; site date unknown, project list is Weak for anything dated.

### Leaders
| Name | Title | Source | Grade |
|---|---|---|---|
| Mr. Aslam Khan | Exact title NOT FOUND (PR calls them sons of the founder who took over the partnership in 2004) | PR 23 Apr 2025, p4, image-checked | Verified name, title NOT FOUND |
| Mr. Arif Khan | same | same | same |
| Mr. Mohsin Khan | same | same | same |
| Company site: "Mr. Aslam Abdul Gaffur Khan, Mr. Arif Abdul Gaffur Khan, and Mr. Mohsin Abdul Gaffur Khan", "industry veterans", "Strong Leadership Team" | no titles | agcinfracon.com home page, read 2026-10-09; site year unknown | Verified as the company's own naming, titles NOT FOUND |
| CFO / finance head | NOT FOUND | Searched: both PRs, company site home page, 3 web queries (2026-10-09). Not searched (out of scope): MCA, AGM notices (none for a private company), LinkedIn (no login) | NOT FOUND |
Founder "Late Mr. Abdul Gaffur Khan": deceased, never print as an officer.
Do not use "Managing Director" or "Director" for anyone until a filing or the site states it.

### Address
AG Tower, Plot No.303, N-3, CIDCO, Aurangabad-431003; phone 0240 2488 2839. Source: agcinfracon.com home page footer, read 2026-10-09. Grade: company's own site, year unknown, not confirmed by a filing (MCA out of scope). Registered office vs head office: NOT FOUND. The city is now officially Chhatrapati Sambhajinagar; the site still says Aurangabad.

### ERP
NOT FOUND (see Dossier check). Nothing to print.

## Scans (final)
Scan commands and results are at the bottom of depth.md (names 0, dashes 0 on all three files).
