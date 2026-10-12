# B. G. Shirke Construction Technology Private Limited: data (SH-1)

## VERDICT: LIGHT

Blunt version. The fit is real and the working-capital story is in the rating agency's own words: gross working capital went from 31% of revenue in FY23 to 44% in FY25 (about 113 to 161 days, Computed), "primarily due to higher receivable days". That is a Crestline problem, provable from a public document.

Why not FULL:
1. **One live source.** Every current figure comes from India Ratings (Ind-Ra) releases. No annual report, no audited statements, no CARE/CRISIL/ICRA credit rationale after 2018. Unlisted, MCA out.
2. **No interest rate is disclosed anywhere.** Booklet rule 6 means no interest saved can be printed. And the company is net cash with only 27% average use of its fund-based limits, so "cash released repays debt" is weak. The money story must be cash and days, not interest.
3. **PAT for FY24 and FY25: NOT FOUND.** Ind-Ra stopped printing net income after the FY23 summary.
4. **Precast against EPC split: NOT FOUND.** The only split published is "construction contracts" against the rest (shipping and other divisions), last seen for 1HFY20.
5. **Company site shirke.co.in refused every scripted request (HTTP 403); the archive copy was offline.** Leaders and address come from the group site shirkegroup.com, whose page date is unknown.

Why not NOT FEASIBLE: revenue, EBITDA, working capital as a share of revenue for four years, order book and client mix, limits and utilisation, cash, and FY20/FY21 day counts are all published by a SEBI registered agency with dates.

## Sources read (all saved in src/d/, untrusted data)

| Ref | Document | Date | Basis | File |
|---|---|---|---|---|
| R1 | Ind-Ra: upgrade to IND AA-/Stable/IND A1+ | 20 Feb 2026 | standalone view | indra-81548.json |
| R2 | Ind-Ra: Outlook to Positive, IND A+ affirmed | 6 Dec 2024 | standalone | indra-73764.json |
| R3 | Ind-Ra: upgrade to IND A+/Stable | 8 Nov 2023 | standalone | indra-67175.json |
| R4 | Ind-Ra: issuer rating disclosure discontinued (regulatory) | 22 Sep 2023 | n/a | indra-65478.json |
| R5 | Ind-Ra: Outlook to Positive, IND A affirmed | 16 Aug 2022 | standalone | indra-59236.json |
| R6 | Ind-Ra: IND A/Stable affirmed | 29 Jun 2021 | standalone | indra-55271.json |
| R7 | Ind-Ra: IND A/Stable affirmed | 2 Feb 2021 | standalone | indra-53707.json |
| R8 | Ind-Ra: IND A/Stable affirmed | 12 Dec 2019 | standalone | indra-39452.json |
| R9 | Ind-Ra: IND A/Stable affirmed | 23 Nov 2018 | standalone, after shipping merger | indra-34915.json |
| R10 | Ind-Ra: upgrade to IND A (and correction R10b, 16 Aug 2017) | 11 Aug 2017 | shipping arm consolidated for projections | indra-28505.json, indra-28521.json |
| C1 | CARE: CARE A1 on Rs 200 Cr proposed CP | 27 Jul 2018 | **CONSOLIDATED** | care-20180727.pdf |
| I1 | ICRA Grading Perspective, contractor grade CR2+ (not a credit rating) | Jan 2012 | company | icra-85391.pdf |
| W1 | shirkegroup.com: Our Management, Contact Us, About, Our Innovation | fetched 8 Oct 2026; footer "Copyright 2025"; page date unknown | group site | sg-*.html |

Ind-Ra releases were pulled as the agency's own JSON (the page source behind indiaratings.co.in/pressrelease/ID), so tables were read from HTML table cells, not from a PDF text layer. CARE and ICRA tables were image-checked on rendered pages (I1 p1, C1 p2 and p3).
All arithmetic: `python -I src/sh-calc.py > src/sh-calc-output.txt` (95 rows, asserts pass).

Grade key: **Verified** = document, date, basis. **Computed** = sh-calc.py row named. **NOT FOUND** = searched, listed at the end.

## 1. Income, PBILDT (EBITDA), PAT

Ind-Ra standalone, INR billion converted to Rs crore by script (x100).

| Year | Revenue Rs Cr | EBITDA Rs Cr | EBITDA margin | Net income (PAT) Rs Cr | Grade |
|---|---|---|---|---|---|
| FY20 | 3,879 | 780 | 20.1% | 380 | Verified R6 table (sales 38.7 table, 38.79 text) |
| FY21 (provisional) | 3,153 | 530 | 16.8% | 170 | Verified R6 table |
| FY22 | 4,390 | 680 | 15.4% | 310 | Verified R5 table |
| FY23 | 5,790 | 1,208 (R3) or 1,250 (R2) | 20.9% (R3) or 21.6% (R2) | 800 | Verified R3; **vintage conflict**, see fact check |
| FY24 | 5,890 | 1,290 | 22.1% printed (21.9% Computed) | NOT FOUND | Verified R1 table, 20 Feb 2026 |
| FY25 | 5,916 | 1,320 | 22.3% | NOT FOUND | Verified R1 table, 20 Feb 2026 |
| 1HFY26 | 2,820 | n/a | 22.5% | NOT FOUND | Verified R1 text |
| FY26 (agency view) | "about INR60 billion" | "INR12 billion to 13 billion" run rate | | | Ind-Ra expectation R1, not a reported figure |

- Revenue CAGR FY21 to FY25: 17.04% (Computed `cagr_FY21_FY25_pct`; R1 prints 17%). FY25 growth over FY24: 0.44% (Computed). Revenue is flat at about Rs 5,900 Cr for three years.
- Interest coverage (operating EBITDAR / gross interest): 13.7x FY25, 11x FY24, 9.1x FY23 (Verified R1, R2). Implied FY25 gross interest about Rs 96 Cr (Computed, approximate because the agency divides EBITDAR). FY23 interest expense Rs 120 Cr (Verified R3 table).
- **Older, different basis, never to be put on one axis with the above.**
- CARE, CONSOLIDATED (C1, 27 Jul 2018): total operating income Rs 2,683.94 Cr FY17 (audited), Rs 3,229.07 Cr FY18 (provisional); PBILDT Rs 432.12 Cr and Rs 630.54 Cr; PAT Rs 42.00 Cr and Rs 200.47 Cr. Image-checked p3. This is the only source that uses the word PBILDT.
- ICRA (I1, Jan 2012): operating income Rs 1,258.50 Cr FY11, OPBDIT Rs 212.66 Cr, PAT Rs 95.20 Cr. Image-checked p1.

## 2. Working capital days, operating cycle, gross current asset days

Ind-Ra publishes shares of revenue, not days. Days below are Computed as share x 365 and must be labelled that way.

| Year | Gross WC % revenue | Gross WC days (Computed) | Gross WC Rs Cr (Computed) | Net WC % revenue | Net WC days (Computed) | Source |
|---|---|---|---|---|---|---|
| FY22 | 36% | 131.4 | 1,580 | 8% | 29.2 | R2 |
| FY23 | 31% | 113.2 | 1,795 | 14% (R1, R2) or 13% (R3) | 51.1 or 47.5 | R1, R2, R3 |
| FY24 | 36% | 131.4 | 2,120 | 17% | 62.1 | R1, R2 |
| FY25 | 44% | 160.6 | 2,603 | 17% | 62.1 | R1 |

- R1 reason, verbatim: gross WC rose "primarily due to higher receivable days, which were largely related to the spilling over of receivables into the next financial year". Net WC held at 17% "aided by higher mobilisation advances".
- Current liabilities as a share of revenue: 28% FY22, 18% FY23, 19% FY24 (Verified R2). Gross minus current liabilities reproduces net for FY22 and FY24, misses FY23 by one point (Computed `check_gwc_minus_cl_*`).
- **Operating cycle, last time published in days (R6, 29 Jun 2021, image check n/a, HTML):** inventory days including unbilled revenue 227 (FY21) and 192 (FY20); payable days including mobilisation advances 209 and 167; net working capital days 18 and 25. Inventory minus payables equals the published net figure exactly (Computed), so **receivables are not inside that published sum**. R7 (2 Feb 2021) separately gives receivable days 40 (FY20) and 27 (FY19). Adding them gives 65 days for FY20, not 25. Conflict inside the agency's own documents; not resolved here.
- Gross current asset days: **NOT FOUND as a published figure.** Proxies only: FY25 gross WC 160.6 days (Computed); FY20 inventory plus receivables 232 days (Computed, 192 + 40); FY11 debtor plus inventory days 213 (Computed from I1 image-checked table, 39 + 174).
- Net working capital cycle history (R8, adjusted for contract assets and mobilisation advances): 20 days FY19, minus 3 days FY18, minus 31 days FY17 (Verified R8 text and table).
- CARE FY18 consolidated (C1 p2, image-checked): collection period "60 days" on book debts only, "115 days" including unbilled revenue and retention; book debts Rs 476 Cr, unbilled revenue Rs 509.35 Cr at 31 Mar 2018. Computed check: 476 / TOI x 365 = 53.8 days (CARE's 60 basis not stated).

## 3. Limits and utilisation

| Item | Figure | Grade |
|---|---|---|
| Total rated bank loan facilities | INR 48,888.2 mn = Rs 4,888.82 Cr (reduced from INR 48,952.1 mn) | Verified R1, 20 Feb 2026; Computed conversion |
| Split, Dec 2024 | fund based Rs 931.22 Cr; non fund based Rs 3,905.88 Cr; proposed term loan Rs 50 Cr; term loan Rs 8.11 Cr (maturity 31 Mar 2027) | Verified R2; sum equals 48,952.1 (Computed check) |
| Average utilisation, 12 months to Dec 2025 | fund based 27%, non fund based 65% | Verified R1 |
| Earlier utilisation | FB 32% / NFB 58% (12m to Sep 2024, R2); 33.5% / 54.6% (to Aug 2023, R3); 52% / 56% (to Jun 2022, R5); avg 18% FB, 77% NFB (to May 2021, R6) | Verified |
| Implied average drawn, if Dec 2024 split still holds | FB about Rs 251 Cr; NFB about Rs 2,539 Cr | Computed, assumption stated; 2026 split not published |
| Lenders | "largely from public sector banks" | Verified R1 |
| Unencumbered cash incl. mutual funds | Rs 1,548 Cr at 1HFY26 end; Rs 1,377 Cr FYE25; Rs 1,080 Cr FYE24 | Verified R1 |
| On-balance-sheet debt 1HFY25 | INR 10.7 bn: term loans 1.7, working capital 4.9, ICDs from related parties 3.8 | Verified R2 |
| Net position | "net cash positive over FY24 to 1HFY26" (paraphrase of R1) | Verified R1 |
| CARE 2018 | Rs 200 Cr CP "carved out of sanctioned working capital limits"; WC limit use "~50% to 60%" (12m to 30 Jun 2018) | Verified C1, image-checked |

## 4. Order book and client mix

| Date | Order book Rs Cr | x last full-year revenue (Computed) | Grade |
|---|---|---|---|
| Dec 2025 | 15,700 (incl. price escalation) | 2.65 (R1 prints 2.65x of FY25) | Verified R1 |
| Oct 2024 | 16,610 | 2.82 (R2 prints about 2.8x) | Verified R2 |
| Jul 2023 | 10,490 | 1.81 (R3 prints about 2x) | Verified R3 |
| May 2022 | 12,415 | 2.83 of FY22 (R5 prints 3.1x) | Verified R5 |
| Jul 2018 | 13,369.51 | | Verified C1 |
| Sep 2011 | about 3,628 | | Verified I1 |

Client mix, Dec 2025 (R1): Maharashtra state agencies about 81%: MHADA 47%, CIDCO 15%, MMRDA 8%, Konkan Housing and Area Development Board 4%, Pune Metropolitan Region Development Authority 3%, Pimpri Chinchwad Municipal Corporation 2% (named shares sum to 79%, Computed). Geography: Maharashtra 89%, Karnataka 9%, rest Delhi and Tamil Nadu. Top 5 contracts 43%, top 10 59%. About 30% of the book not yet commenced (41% in Oct 2024, R2). Housing for government agencies is the main line (R1 company profile).

## 5. Interest rate

**NOT FOUND.** No borrowing rate, CP coupon or facility rate is printed in R1 to R10, C1 or I1. R1 says only that mobilisation advances are useful "where the interest rate is lower than bank lending rates or where the advances remain interest free", and R2/R3 that MHADA and CIDCO advances carry no interest. **No interest figure may be printed for this company.**

## 6. Precast against EPC split

**NOT FOUND.** Published nearest: revenue from construction contracts about 93% FY18, 94% FY19 and 1HFY20 (R8, R9); CARE: construction division "~90%" (C1). The rest is shipping and other divisions, not precast. Precast is described, not sized: R1 credits "in house precast facilities located near major project sites"; R9 notes factories set up in Delhi, Pune and Mumbai (FY18); W1 states 3-S precast technology in use since 1972 and more than 2 lakh dwelling units built. Shipping: R3 and R5 cite rising contribution from a shipping segment (FY22, FY23); R1 does not mention it.

## 7. Leaders and address

From W1 (shirkegroup.com "Our Management", fetched 8 Oct 2026, page date unknown, group site; entity of the board not stated on the page):
- Vijay B. Shirke, Chairman and Managing Director
- Pratap B. Shirke, Vice Chairman
- Raosaheb B. Suryavanshi, Vice Chairman
- Jay V. Shirke, Joint Managing Director
- Nandkishor V. Kudale, Joint Managing Director
- Ajay B. Shirke, Director; Chetas G. Desai, Director; Rajendra P. Shah, Director; Uday S. Ghorpade, Director
- Senior management: B. G. Sangale, Chief Executive; D. P. Patil, Chief Executive; Y. P. Kajale, Director (Engg. Planning and Design); B. P. Kulkarni, Senior Vice President (Contracts)

Cross-check (C1, 27 Jul 2018, stale): Vijay B. Shirke, Chairman and Managing Director; Pratap B. Shirke, Vice Chairman; Jay V. Shirke, Executive Director (now Joint MD on W1); K. M. Thatte, Sr. V.P. Finance and Company Secretary.
**CFO: NOT FOUND** in any current source. K. M. Thatte is the only finance name, and it is from 2018.
Founder B. G. Shirke is described as "Late" in C1 and I1; he is never to be named as an officer.

Address (W1 Contact Us): Head Office, 72-76, Industrial Estate, Mundhwa, Pune 411 036. Tel +91 20 26708100. Civil contracts mailbox contracts@shirke.co.in. Branch offices listed: Mumbai (Nariman Point), Bengaluru, New Delhi, Secunderabad, Nagpur.

## NOT FOUND log (what was searched)

- Credit rationales from CRISIL, ICRA (credit, not grading), Acuite, Infomerics, Brickwork: web searches on "B. G. Shirke Construction Technology", "BGSCTPL", "Shirke Construction" with each agency name, 8 Oct 2026. Zero matching rationales. Three hits were other entities and were deleted unread beyond page 1. ICRA's own search sits behind bot protection and was not forced.
- CARE after Jul 2018: searched careratings.com with years 2019 to 2025; none found.
- PAT FY24, FY25; interest rate; precast split; CFO; gross current asset days: not in R1 to R10, C1, I1, W1 (keyword scans in each file).
- ERP or SAP: word-boundary scan of all saved documents, 0 hits. ERP remains unknown.
- shirke.co.in: HTTP 403 to every request; Wayback Machine offline on 8 Oct 2026.
- Official award notices naming the company: MHADA/CIDCO work-order searches returned none naming it; the group site carries its own award pages (not used for figures).
