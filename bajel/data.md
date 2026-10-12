# Bajel Projects Limited: data (BJ-1)

Blockers: none on the primary set. Not available as of 8 Oct 2026: a Q1 FY27 call transcript (none filed) and a 30 Jun 2026 balance sheet (Q1 results are P&L only; H1 FY27 is due after 30 Sep 2026). The SAP vendor page answers 403. Two CRISIL letters on the company site are scans with no text layer (searched by image only where used).

## FEASIBILITY VERDICT: LIGHT

The O2C problem is real. The dossier's "debtor days blowout" headline does not hold on the company's own figures and basis.

1. **136 to 214 days is correct arithmetic on a partial basis.** It divides only the CURRENT receivable by revenue (136.4 and 213.6 days). It drops Rs 215.27 Cr of non-current receivables in FY26 and Rs 288.00 Cr in FY25.
   - Closing total receivables give 176.8 to 241.8 days.
   - The company's own turnover ratio (average basis, AR26 p320) gives 139.8 to 202.8 days.
2. **FY25 was the outlier, not FY26.** The company basis was 182.5 days in FY24, 139.8 in FY25 and 202.8 in FY26.
3. **Management explains most of the FY26 rise as timing, and CRISIL repeats it independently.**
   - The CFO bridged Rs 519 Cr of the Rs 590 Cr rise: higher Q4 billing Rs 194 Cr, one customer holding back Rs 225 Cr in the last fortnight of March, and retention Rs 100 Cr. He said most of it was collected after March.
   - CRISIL (5 Aug 2026) calls the 245 debtor days "a one-off event".
4. **Overdue money fell.** On the AR26 ageing basis, gross overdue receivables went from Rs 448.34 Cr to Rs 399.35 Cr. "Not due" (which includes retention until project completion) rose from Rs 882.77 Cr to Rs 1,530.12 Cr.
5. **The "fresh SAP go-live" is not in any filing.** It is zero hits across three ARs, the call, the AGM and the rating letters.

What does hold, on the company's own words and figures:
- About 200 days of receivables even in a normal year (183 in FY24).
- Retention money held as "not due" until project completion.
- Stated payment terms widened from "30 to 90 days" (AR25 p214) to "30 to 360 days" (AR26 p281).
- Power Grid is 64.31% of revenue.
- Arbitration-related receivables grew (sensitive item S1).
- Operating cash flow fell from Rs 195.37 Cr to Rs 69.13 Cr to Rs 21.09 Cr over three years.
- Supplier finance (vendor bill discounting) is Rs 318.96 Cr, 91.14% of borrowings.
- Customer mobilisation advances cost Rs 15.20 Cr of interest in FY26.

Verdict: proceed on a reframed story (retention, certification to cash, closed-project tails, cash conversion), not on "debtor days doubled" or "fresh SAP". Risk: the H1 FY27 balance sheet (due by mid Nov 2026) may show receivables normalised, which would undercut any receivables headline built on 31 Mar 2026. Re-check before print.

## Documents (all saved in bajel/src/d/, untrusted copies)

| Key | Document | Filed | Entity basis |
|---|---|---|---|
| AR26 | Annual Report FY2025-26 (audit report 27 May 2026). Exchange copy nse_ar26_20260717.pdf, same figures as the site copy ar26.pdf | 17 Jul 2026 (NSE) | Standalone p256 to 327; Consolidated p336 to 410 |
| AR25 | Annual Report FY2024-25 | 18 Jul 2025 (NSE) | Standalone p188 onward |
| AR24 | Annual Report FY2023-24 (single entity, no subsidiaries) | 29 Jul 2024 (NSE) | Single entity |
| PR4 | Q4 FY26 results press release | 27 May 2026 | Standalone |
| TR4 | Q4 FY26 earnings call transcript, call 29 May 2026 (the company's first call) | 3 Jun 2026 | Standalone figures spoken |
| PR1 | Q1 FY27 results press release | 7 Aug 2026 | Standalone and consolidated |
| DK1 | Q1 FY27 investor presentation | 7 Aug 2026 | Standalone |
| DK25 | Q4 FY25 investor presentation | 6 Jun 2025 | Standalone |
| CR26 | CRISIL rating rationale dated 5 Aug 2026, with company intimation | 6 Aug 2026 | CRISIL consolidated approach |
| AGM | Transcript of 4th AGM held 10 Aug 2026 (company website) | site, PDF dated 16 Aug 2026 | n/a |
| ORD | Reg 30 order intimations TL02 and TL06 (8 Aug 2026), TL05 (12 Aug 2026); press releases 10 Aug and 12 Aug 2026 | as stated | n/a |
| CFOA | CFO appointment intimation and press release | 4 Apr 2025 | n/a |
| NSEL | NSE corporate announcements list, 1 Dec 2023 to 8 Oct 2026, read 8 Oct 2026 | n/a | n/a |

Numbers: every conversion, sum, ratio and day count is in `src/bj-calc.py`, run as `python -I bj-calc.py > bj-calc-output.txt` (output saved beside it; self-checks pass: ageing sums, ageing less ECL equals the balance sheet, borrowings split, Note 49 bridge, turnover recompute). All tables were read from page images.

## 1. P&L (Rs Cr)

| Figure | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Revenue from operations, STANDALONE | 1,169.21 | 2,598.24 | 2,791.58 | Verified: AR26 p257 (FY25, FY26); AR25 p189 and AR24 p165 (FY24) |
| Revenue from operations, CONSOLIDATED | n/a | 2,598.24 | 2,791.58 | Verified: AR26 p337 (identical to standalone) |
| EBITDA incl. other income, STANDALONE | n/a | 90 (computed 90.17) | 125 (computed 124.69) | Verified: PR4 p3; Computed: PBT before exceptional + finance costs + D&A |
| PAT, STANDALONE | 4.29 | 15.46 | 26.95 | Verified: AR26 p257; AR24 p165 |
| PAT, CONSOLIDATED | n/a | 15.46 | 20.28 | Verified: AR26 p337 (FY26 includes share of JV loss) |
| Finance costs, STANDALONE | 18.53 | 53.51 | 63.42 | Verified: AR26 p257, p297; AR24 p165 |
| of which interest on borrowings | n/a | 41.29 | 46.36 | Verified: AR26 p297 Note 29 |
| of which interest on mobilisation advances | n/a | 10.78 | 15.20 | Verified: AR26 p297 Note 29 |
| Exceptional item (labour codes) | n/a | 0 | 7.72 | Verified: AR26 p257 |
| Q1 FY27 revenue / EBITDA / PAT, STANDALONE | 566.9 / 23.6 / 4.5 (Q1 FY26: 607.6 / 24.9 / 3.3) | | | Verified: DK1 p23, PR1 p3 |
| Q1 FY27 interest, STANDALONE | 11.8 (Q1 FY26: 15.9) | | | Verified: DK1 p23 |
| Q1 FY27 PAT, CONSOLIDATED | 4.7 (Q1 FY26: 3.0) | | | Verified: PR1 p2 |

## 2. Receivables (Rs Cr, STANDALONE; consolidated is identical, AR26 p336)

| Figure | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Trade receivables, current, net | 607.12 | 970.66 | 1,633.78 | Verified: AR26 p256; AR25 p188 |
| Trade receivables, non-current, net | 128.29 | 288.00 | 215.27 | Verified: AR26 p256; AR25 p188 |
| Total net | 735.41 | 1,258.65 | 1,849.05 | Computed (bj-calc s2) |
| Gross before ECL | 784.92 | 1,331.11 | 1,929.48 | Verified: AR26 p280; AR25 p213 |
| ECL allowance | n/a | 72.46 | 80.43 | Verified: AR26 p280 |
| Trade receivables turnover (times), company definition: revenue incl. other operating income over average receivables | 2.00 | 2.61 | 1.80 | Verified: AR24 p112; AR25 p128; AR26 p320 Note 45 |
| Receivable days on company basis, 365 / turnover | 182.5 | 139.8 | 202.8 | Computed |
| Days, closing total net / revenue | n/a | 176.8 | 241.8 | Computed |
| Days, closing CURRENT only / revenue (dossier basis) | n/a | 136.4 | 213.6 | Computed |
| CRISIL "debtors" days, consolidated, 31 Mar 2026 | | | 245 | Verified: CR26 p2 ("one-off") |

Company-stated reasons, verbatim (image-checked):
- FY26: "Decrease in trade receivables turnover ratio is on account of delay in collection from customers in comparison to projects execution" (AR26 p320).
- FY25: "Improvement in collection from customers in comparison to projects execution" (AR25 p128).

Payment terms as stated:
- "generally on terms of 30 to 90 days" (AR25 p214 Note 4(c)).
- "generally on terms of 30 to 360 days basis nature of payment terms, retention amounts due after completion of projects is categorized as Not Due until the project is completed" (AR26 p281 Note 6(c)).

**Ageing, gross, AR26 vintage (same basis both years), Rs Cr** (AR26 p280, Computed s2)

| | Not due | Overdue, all buckets | Overdue more than 1 year | Not due share |
|---|---|---|---|---|
| FY25 | 882.77 | 448.34 | 253.87 | 66.32% |
| FY26 | 1,530.12 | 399.35 | 206.18 | 79.30% |

**Vintage conflict inside the company's own documents (do not pick a side).** AR25 p213 published FY25 ageing with "Not Due" of Rs 169.94 Cr, against Rs 882.77 Cr in AR26 for the same date and the same Rs 1,331.11 Cr total. AR26 adds the retention note above, which is the likely reason, but the AR26 note does not say it restated FY25 ageing. FY24 (AR25 vintage) shows "Not Due" of Rs 135.18 Cr and Rs 649.74 Cr overdue. Never chart FY24 ageing next to FY25 or FY26 from AR26.

**Retention:** no separate retention balance is disclosed in AR24, AR25 or AR26. NOT FOUND, searched "etention" across all three ARs, TR4, AGM and CR26. What exists:
- The CFO's spoken retention increase of "around INR100 crores" in FY26 (TR4 p14).
- CRISIL: "Receivables are typically high in the business due to the sizeable retention money blocked in completed projects" (CR26 p2).

**Closed projects:** "receivables of Rs 126.76 Cr (net of impairment of Rs 28.20 Cr) related to amounts collectable in respect of operationally closed projects", FY25 (AR25 p214 Note 4(e)). This disclosure is not repeated in AR26.

Arbitration-linked receivables: sensitive item S1.

## 3. Contract balances, inventories, advances (Rs Cr, STANDALONE)

| Figure | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Contract assets (unbilled) | 165.74 | 90.99 | 18.86 | Verified: AR26 p256, p317; AR25 p188 |
| Contract liabilities (advances and billing in excess) | 226.31 | 418.70 | 465.32 | Verified: AR26 p256, p317; AR25 p188 |
| Unbilled on account of work under certification (P&L reconciliation item) | n/a | 74.75 | 72.13 | Verified: AR26 p316 Note 42 |
| Inventories | 101.05 | 127.61 | 138.51 | Verified: AR26 p256, p283; AR25 p188 |
| Advance to suppliers (current) | n/a | 33.37 | 7.42 | Verified: AR26 p284 Note 14 |
| CRISIL: inventory plus contract assets, days | | | about 21 | Verified: CR26 p2 |

## 4. Payables and MSME (Rs Cr, STANDALONE)

| Figure | FY25 | FY26 | Grade, source |
|---|---|---|---|
| Trade payables total | 546.28 | 881.56 | Verified: AR26 p292 (FY25 regrouped per Note 49) |
| of which micro and small enterprises | 25.66 | 44.80 | Verified: AR26 p292 |
| MSE share of payables | 4.70% | 5.08% | Computed |
| MSME principal unpaid at year end | 25.36 | 44.31 | Verified: AR26 p292 |
| MSME interest accrued and unpaid | 0.30 | 0.48 | Verified: AR26 p292 |
| Interest payable to MSME vendors in P&L | n/a | 0.18 | Verified: AR26 p297 |
| Payables turnover (times) | 4.53 | 3.23 | Verified: AR26 p320 ("increase in retention in respect of amounts due to suppliers") |
| Payable days, 365 / turnover | 80.6 | 113.0 | Computed |

MSME overdue amount: NOT FOUND as a separate figure. The AR26 payables ageing runs "from transaction date", not from due date (AR26 p292), so it is not an overdue table. The only overdue proxy is the unpaid MSME interest above. Stated terms: payables "normally settled within 90-120 days from the contractual due date" (AR26 p292).

## 5. Borrowings and rates (Rs Cr)

| Figure | FY25 | FY26 | Grade, source |
|---|---|---|---|
| Borrowings, all current (AR26 vintage) | 356.59 | 349.96 | Verified: AR26 p256, p291 |
| of which working capital facilities, secured, banks | 100.00 | 31.00 | Verified: AR26 p291 |
| of which working capital facilities, financial institutions | 21.00 | 0 | Verified: AR26 p291 |
| of which vendor bill discounting (FIs + banks) | 235.59 | 318.96 | Verified: AR26 p291; Computed sum |
| Lease liabilities | 19.01 | 16.85 | Verified: AR26 p256; Computed |
| Borrowings as ORIGINALLY reported in AR25 | 121.00 | | Verified: AR25 p188 |
| Trade credits reclassified into borrowings for FY25 | 235.59 | | Verified: AR26 p327 Note 49(i) |
| Fund-based limits, total, and utilisation | | 275, 11% average over six months to Jun 2026 | Verified: CR26 p2 |
| Interest paid (cash flow) | 52.01 | 59.34 | Verified: AR26 p258 |

Rates disclosed:
- Working capital facilities (Rs 200 Cr consortium, secured by first pari passu charge on current assets plus three properties, comfort letter from Jamnalal Sons): "The interest rate for the above facilities ranges from 6.5%-10%. p.a." (AR26 p291).
- Vendor bill discounting: "The interest borne by the Company in respect of such facility is in the range of 6.5%-10% p.a." on "extended credit terms upto 180 days" (AR26 p291).
- Spoken at the AGM by Nitesh Bhandari (CFO): the average rate "was when we. Started the year was around 10%... Around 6.5 to 7% as of now" (AGM p23, image-checked; transcript punctuation as printed).
- Mobilisation advances bear interest (Rs 15.20 Cr in FY26, AR26 p297); their rate is NOT FOUND.

## 6. Cash flow (Rs Cr)

| Figure | FY24 | FY25 | FY26 | Grade, source |
|---|---|---|---|---|
| Net cash from operating activities, STANDALONE | 195.37 | 69.13 | 21.09 | Verified: AR26 p258; AR25 p190 |
| Same, CONSOLIDATED | n/a | 69.13 | 21.09 | Verified: AR26 p338 |
| Increase in trade receivables (cash flow line) | n/a | 549.43 | 599.82 | Verified: AR26 p258 |

## 7. Working capital measures the company states itself

- **"Net working capital stood at 124 days as of 31st of March 2026"**, Nitesh Bhandari, CFO (TR4 p7, image-checked). No definition was given. Searched AR26, DK1, PR4 and the Q4 deck: no definition or reconciliation found.
- **"Maintaining a negative working capital cycle creates a structural moat that self-finances our growth."** (AR26 p71, image-checked). This conflicts with the 124 days above, and no reconciliation is published. Report both and do not choose.
- "Cash borrowings have reduced from INR121 crores last year to INR31 crores this year", Nitesh Bhandari, CFO (TR4 p7). This ties to working capital facilities only (AR25 p188, AR26 p291).
- Dossier "WC days" reconstruction (NOT a company figure): (current assets less cash and other bank balances less all current liabilities) / revenue gives -12.6 days FY25 and 22.8 days FY26 (Computed s3). Net current assets including cash give 25.0 and 46.7 days.
- Working capital or receivable-days target: NOT FOUND. Searched AR24, AR25, AR26 (MD&A, strategy, risk table), TR4, AGM, DK1, PR4 and CR26. The nearest are the RAASTA 2030 targets of "Double digit revenue growth", "High single digit EBITDA margins" and ">15% Return on Capital Employed" (DK1 p30). CRISIL lists "Material improvement in working capital cycle" as an upgrade trigger (CR26 p3). That is CRISIL's, not a company target.

## 8. Orders (Rs Cr, STANDALONE, excl. GST, excl. supply orders)

| Figure | Value | Grade, source |
|---|---|---|
| Unexecuted order book 31 Mar 2023 / 2024 / 2025 / 2026 | 1,638 / 3,598 / 2,984 / 3,442 | Verified: DK1 p22 |
| Unexecuted order book 30 Jun 2026 | 4,055 (Q1 FY26: 3,612; growth 12.26%) | Verified: DK1 p22, PR1 p3; Computed growth |
| Order book mix 30 Jun 2026 | Power Transmission 82%, New Energies 9%, International EPC 9% | Verified: DK1 p22 |
| Unsatisfied performance obligations 31 Mar 2026 | 3,441.82 | Verified: AR26 p317 (ties to 3,442) |
| Order inflow FY26 | "roughly INR3,100 crores as compared to about INR2,000 crores last year" (spoken as "Order outflow") | Verified: TR4 p5, Rajesh Ganesh, MD & CEO, image-checked |
| Orders received Q1 FY27 | "over ~Rs 1098 crores" | Verified: CR26 p2 |
| Power Grid share of order book 31 Mar 2026 | 60% to 70% | Verified: CR26 p2 |
| Order book over FY26 revenue | 1.45 years | Computed |

Large orders after 30 Jun 2026 (not in the 4,055). All are from PGCIL on behalf of its SPV WR ER Part A Power Transmission Ltd under TBCB. Values are bands, inclusive of GST.

| Package | Scope | Band | Term | Filed |
|---|---|---|---|---|
| TL05 | 765 kV D/C, Raigarh (Tamnar), Raigarh (Kotra), Dharamjaygarh, Chhattisgarh | Ultra-mega, "INR 600+ Crore" | 33 months | 12 Aug 2026 |
| TL02 | 765 kV D/C Raigarh (Tamnar) to Jamshedpur (New), Part II | Ultra-mega, Rs 400 Cr and above | n/a | 8 Aug 2026 |
| TL06 | 400 kV LILO at Jamshedpur (New) | Mega, Rs 300 to 400 Cr | 27 months | 8 Aug 2026 |

Live check: NSEL read to 8 Oct 2026 shows no cancellation, termination or short-closure of these or of the FY26 MSETCL Saswad order.

## 9. Domestic vs international (STANDALONE)

| Figure | FY25 | FY26 | Grade, source |
|---|---|---|---|
| Revenue, India (Rs Cr) | 2,533.42 | 2,768.76 | Verified: AR26 p312 |
| Revenue, outside India (Rs Cr) | 64.82 | 22.81 | Verified: AR26 p312; Computed |
| Outside India share | 2.49% | 0.82% | Computed |
| Power Grid incl. group share of revenue | 61.53% | 64.31% | Verified: AR26 p312; Computed |

International EPC is stated in INR by the company (the Egypt order is "Rs 400+ crs", DK1 p22), so no FX conversion is needed for any figure here. Do not mix international and domestic on one chart.

## 10. ERP (filings and company statements only)

- No filing names SAP. Zero hits for SAP, S/4, RISE and Highbar across AR24, AR25, AR26, TR4, AGM, PR4, PR1, DK1, DK25, CR26 and all Reg 30 letters saved here (scan log below).
- AR25 p39, image-checked: "Common ERP system across all operational units for supply chain integration". No vendor is named. Verified.
- AR24 p20 to 21: "we embarked on a digital transformation journey". Verified.
- AR26: Project NEEV, "our enterprise transformation programme" (digital PMO, GPS fleet tracking, e-cataloguing), AR26 p71, p178 to 185. No ERP vendor is named.
- The company website careers link points to an SAP SuccessFactors host. This is Weak: it is an HR tool, not the ERP.
- The SAP customer page cited by the dossier (Feb 2026) answers 403. A search snippet of it says the ERP was chosen as a "Day-1 ready ERP" after the Sep 2023 demerger, with a 90-day implementation and 400+ users. Grade Weak: vendor page, not read directly, not a filing.
- Chief Information Officer: Vikas Gupta (DK1 p18, image-checked).

## 11. People and office

| Name | Exact title | Source |
|---|---|---|
| Rajesh Ganesh | Managing Director and CEO (DIN 07008856) | AR26 p256 signature block, image-checked; "Managing Director & Chief Executive Officer" on DK1 p18 |
| Nitesh Bhandari | Chief Financial Officer (from 1 May 2025) | AR26 p256, p313 Note 39 and the AR26 senior management list (p152 to 153). Only the company press release of 4 Apr 2025 calls him "CFO & Joint President" (CFOA p3). In AR26 the "Joint President" title belongs to Piyush Bansal, Business Head PT, so use "Chief Financial Officer" |
| Shekhar Bajaj | Chairman, Non Executive (DIN 00089358) | AR26 p256 |
| Amee Bharatbhai Joshi | Company Secretary & Chief Compliance Officer | AR26 p256; filings from 27 May 2026 |
| Vikas Gupta | Chief Information Officer | DK1 p18 |

Registered office: 801, Rustomjee Aspiree, Anik Wadala Link Road (Bhanu Shankar Yagnik Marg), Sion (East), Mumbai 400022. CIN L31900MH2022PLC375133. Source: AR26 (notice and corporate information pages). Investor email: investor.relations@bajelprojects.com (PR1 p4). Personal emails: NOT FOUND in any filing. The dossier's are inferred patterns and are never used.

Leadership changes are flagged in sensitive-garvis.md (S10, S11).

## Scan log (BJ-1)

Command: `python -I scan.py corpus bajel/src/d` (script kept in the BJ-1 scratch folder, outside src/d). Every pattern also ran against a planted page holding a value absent from the corpus. Minimum region: 200 characters of text per page.
- 1,171 pages scanned. 69 image-only pages were unscanned, including rating_reg46 p1 to 2, rating_sep25 p1, res_q1fy27 p2 to 9 and res_q4fy25 (16 pages). Q1 FY27 figures were therefore taken from PR1 and DK1.
- SAP / S/4HANA / RISE with / Highbar: 0 real hits; planted hit found.
- "Joint President": 10 real hits. AR25 and AR26 senior management lists give the title to other executives; the CFO has it only in CFOA p3.
- "debtor days / receivable days / working capital days": 1 real hit, an analyst's question (TR4 p13). The company never states debtor days itself.
- Order cancellation, termination or short-closure: 176 raw hits. All were reviewed. The 6 near order or project words are "determination" or accounting text. 0 real cancellations.
