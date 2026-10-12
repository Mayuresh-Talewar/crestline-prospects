# Rulka Electricals Limited: data (RE-1)

**VERDICT: FULL.** Listed on NSE EMERGE (SME), so the primary set exists and was read: two audited annual reports, the H1 FY26 results, two call transcripts, two investor decks and the exchange filings. Every booklet slot can be filled from them except two: a separate contract asset line (the accounts carry WIP stock and retention instead) and a numeric working capital target (management gave none). No credit rating was found. Scale caveat for Garvis: revenue is Rs 110.20 Cr. That is a commercial call, not a data gap.

Blockers fetching documents: none. Both annual reports came from NSE archives; the June 2026 transcript came from the company site (the NSE filing of 09 Jun 2026 only links to it). MCA not used, no login, nothing paid.

Conventions: page numbers are **PDF page numbers** of the files in `src/d/`. Amounts are Rs lakh unless shown as Cr. Every crore figure, ratio, sum and day count comes from `src/re-calc.py`; output saved in `src/re-calc-output.txt` (command: `python -I src/re-calc.py > src/re-calc-output.txt`, run in the rulka folder). "§n" points to its sections.

## Entity
- Legal name: **Rulka Electricals Limited** (formerly Rulka Electricals Private Limited). CIN U31103MH2013PLC243817 (AR25 p82 header; AR26 cover letter). Verified.
- Listed: NSE SME platform (NSE EMERGE), symbol RULKA, listed **24 May 2024** (AR26 p40, Board's Report, filed 07 Sep 2026). ISIN INE0R7301013. Verified.
- Basis: **standalone** in every year. No subsidiary existed in FY24 to FY26; a 51% copper trading subsidiary was approved only on 03 Oct 2026 (NSE filing LT-36). There is no consolidated statement.
- Accounts: Indian GAAP style notes (AS-3, AS-15, AS-18 cited in AR26 notes), although AR26 p40 says Ind AS. Noted in fact-check.md.

## Documents (all in src/d/, treated as untrusted)
| Code | Document | Filed | Read as page images |
|---|---|---|---|
| AR26 | Annual Report 2025-26 (`RULKA_07092026181546_LT-30_...pdf`) | 07 Sep 2026 | 13, 78, 83, 89 to 91, 96 to 107 |
| AR25 | Annual Report 2024-25 (`RULKA_AR_FY25.pdf`) | 08 Sep 2025 | 82 to 84, 91, 92, 95 |
| H1 | Unaudited results H1 FY26 | 13 Nov 2025 | 5 |
| TJ | FY26 earnings call transcript (`rel_transcript-08june2026.pdf`) | 09 Jun 2026 | 2, 3, 4 |
| TD | Investor meet transcript, call of 15 Dec 2025 | 18 Dec 2025 | 10 |
| PJ | Investor presentation June 2026 | 08 Jun 2026 | 5, 15, 17 |
| PM | Investor presentation May 2025 | 24 May 2025 | 4, 11 |
| PR | Media release H1 FY26 | 17 Nov 2025 | text layer only |

## Income, EBITDA, PAT
| Item | FY26 | FY25 (restated in AR26) | Grade |
|---|---|---|---|
| Revenue from operations | 11,020.26 (Rs 110.20 Cr) | 7,972.54 (Rs 79.73 Cr) | Verified, AR26 p90, 07 Sep 2026, standalone |
| Total income | 11,025.78 (Rs 110.26 Cr) | 7,979.63 (Rs 79.80 Cr) | Verified, AR26 p90 |
| Profit before tax | 427.73 (Rs 4.28 Cr) | 324.41 (Rs 3.24 Cr) | Verified, AR26 p90 |
| PAT | 328.86 (Rs 3.29 Cr) | 225.56 (Rs 2.26 Cr) | Verified, AR26 p90 |
| Growth, revenue / PAT | 38.23% / 45.80% | | Computed §2 |
| EBITDA = PBT + finance cost + D&A (the method the company used in PM p11) | 562.66, 5.11% of revenue | 435.94, 5.47% | Computed §2. A company-published FY26 EBITDA: NOT FOUND (searched AR26, PJ p11 to p15, TJ) |
| EBITDA as published by the company for FY25 | | 437.02 (FY24: 919.84) | Verified, PM p11 image, 24 May 2025, original vintage |

Earlier years, **original vintage only** (AR25 p83, 08 Sep 2025): FY25 revenue 7,947.11; FY24 revenue Rs 70.98 Cr; FY24 PAT Rs 6.11 Cr; FY25 PAT down 63.09% on FY24 (§6). Never place FY24 beside AR26's FY25 column (see Vintage).

## Working capital balances (AR26 p89; notes p99, p101)
| Item | 31 Mar 2026 | 31 Mar 2025 restated | Grade |
|---|---|---|---|
| Trade receivables | 3,583.52 (Rs 35.84 Cr) | 2,615.46 (Rs 26.15 Cr) | Verified, AR26 p89, note 14 p101 |
| of which over 6 months from due date | 959.20 (Rs 9.59 Cr), 26.77% | 94.31 (Rs 0.94 Cr), 3.61% | Verified note 14; shares Computed §3 |
| of which 1 year and older | 328.83 | | Computed from note 14 ageing, §3 |
| Contract assets / unbilled revenue | NOT FOUND as a line | | Searched AR26 statement images p89 to p106 and AR25 p82 to p95 for "contract asset", "unbilled", "due from customers": none |
| Inventory WIP (nearest proxy for work done, not billed) | 792.65 (Rs 7.93 Cr) | 905.30 (Rs 9.05 Cr) | Verified, note 13 p101 |
| Inventory raw material | 1,266.17 (Rs 12.66 Cr) | 1,056.94 (Rs 10.57 Cr) | Verified, note 13 p101 |
| Inventories total | 2,058.82 (Rs 20.59 Cr) | 1,962.25 (Rs 19.62 Cr) | Verified, p89 |
| Retention money (other non current assets) | 499.96 (Rs 5.00 Cr) | 373.75 (Rs 3.74 Cr) | Verified, note 12 p101 |
| Advance to vendors | 438.25 (Rs 4.38 Cr) | 487.81 (Rs 4.88 Cr) | Verified, note 17 p101 |
| Trade payables | 2,556.41 (Rs 25.56 Cr) | 1,232.02 (Rs 12.32 Cr) | Verified, p89 and note 9 p99 |
| of which MSME | 1,761.11, 68.89% of payables | 777.57 on the balance sheet, 684.44 in note 9 | Verified both; the FY25 split differs by 93.13 inside AR26 (§3) |
| Advance received from customers | 222.93 (Rs 2.23 Cr) | 140.00 (Rs 1.40 Cr) | Verified, note 10 p99 |

### Days
Company's own ratios on **average balances**, AR26 note 35 p106 (image-checked at 220 dpi):
| Ratio | FY26 | FY25 | Grade |
|---|---|---|---|
| Trade receivable days | 102.66 | 117.12 | Verified; FY26 rebuilt exactly (§4) |
| Inventory days | 76.97 | 69.58 | Verified; FY26 rebuilt exactly |
| Trade payable days | 81.85 | 74.78 | Verified; FY26 rebuilt exactly |
| Net working capital days | 96.12 | 123.93 | Verified |
| DSO + DIO minus DPO, average | 97.78 | | Computed §4 |

The FY25 receivable days (117.12) only rebuild with the FY24 receivable from the ORIGINAL vintage (implied 2,500.94; AR25 shows 2,501.16), so that one figure mixes two bases (§4). Use FY26 average days, or the closing basis below.

Closing basis, both years from AR26 (§4):
| Days | FY26 | FY25 restated |
|---|---|---|
| DSO (receivables / revenue) | 118.69 | 119.74 |
| DIO (inventory / material consumed + change in inventory) | 78.82 | 106.12 |
| DPO (trade payables / purchases) | 110.46 | 72.01 |
| CCC | 87.05 | 153.85 |
| Retention, days of revenue | 16.56 | 17.11 |
| WIP, days of revenue | 26.25 | 41.45 |
| Customer advances, days of revenue | 7.38 | 6.41 |
| Trade working capital (receivables + inventory + retention + vendor advances, less payables and customer advances) | Rs 38.01 Cr = 125.90 days | Rs 40.67 Cr = 186.21 days |

## Borrowings and the disclosed rate
| Item | 31 Mar 2026 | 31 Mar 2025 | Grade |
|---|---|---|---|
| Long term borrowings (ICICI Bank term loan, after current maturity) | 1.47 | 19.11 | Verified, AR26 note 5 p97 |
| Short term borrowings | 478.50 (working capital loan 460.86 + current maturity 17.64) | 856.83 (839.19 + 17.64) | Verified, note 8 p99 |
| Total borrowings | Rs 4.80 Cr | Rs 8.76 Cr | Computed §3; matches PJ p5 image and TJ p3 image |
| Debt to equity | 0.13x | 0.26x | Computed §3, Verified note 35 p106 |
| Finance costs | 101.18 (working capital loan interest 88.59) | 85.27 (72.42) | Verified, note 23 p102 |

**Disclosed rates (the only ones to print):**
- **8.25% p.a.**, ICICI Bank term loan. Verified, AR26 note 5 p97, 07 Sep 2026.
- **Repo rate 6.50 + 3.00%**, ICICI Bank overdraft, sanction Rs 1,380 lakh (9.50% by §5). Verified, AR25 note 7 p91, 08 Sep 2025. AR26 states no rate for the working capital loan (note 8 sends the reader to note 5, which gives only the term loan rate).
- 9.25% on two ICICI MSME working capital loans. Verified, AR25 p91 (FY25 vintage).
- Never print as theirs: FY26 working capital loan interest over the average loan is 13.63% (§5). It is our computation and includes charges and timing.

## Operating cash flow
| Year | OCF | Grade |
|---|---|---|
| FY26 | +611.76 (Rs 6.12 Cr) | Verified, AR26 p91 |
| FY25 restated | (1,503.94) (Rs minus 15.04 Cr) | Verified, AR26 p91 |
| FY25 original | (1,491.29) (Rs minus 14.91 Cr) | Verified, AR25 p84. A third value, (1,498.08), is the comparative in H1 (text layer only) |
| FY24 original | Rs minus 5.83 Cr | Verified, AR25 p84; crore §6 |
In FY26 trade payables rose 1,324.37 and receivables 968.06 (AR26 p91, Verified). The rise in what is owed to suppliers was larger than the whole OCF.

## Order book
- **Rs 143.85 Cr**, "total order book for the year 2025-26" (AR26 p10 Visionaries' Note and p39 Board's Report, 07 Sep 2026). Verified, wording as filed.
- "As the year end, our unexecuted order book stoods approximately rupees 144 crores" (TJ p4, within Nitin Aher's opening remarks, image-checked). Verified.
- PJ p6: "143 Cr Current Unexecuted Orders" (text layer of a deck slide). Weak until image-checked.
- Order book over FY26 revenue: 1.31x (§7).
- Live check: 0 of 162 NSE announcements (01 Apr 2024 to 08 Oct 2026) mention cancellation, termination or short closure (one line Python count over the NSE announcement list).
- Conflict: PR (17 Nov 2025) "Rs. 92Cr. worth of orders in hand" at H1 FY26; TD p5 (15 Dec 2025 call, Pravin Chaudhari, image-checked) "Unexecuted order book stands at approximately INR144 crores" at H1. See fact-check.md.

## People (filings only)
| Name | Title | Source |
|---|---|---|
| Rupesh Laxman Kasavkar | Chairman and Managing Director, DIN 06546906 | AR26 p89 and p90 signature blocks (image); AR26 p3 |
| Nitin Indrakumar Aher | Whole Time Director, DIN 06546905; "Founding Promoter" in PJ p5 | AR26 p89 (image); PJ p5 (image) |
| Azad Ashok Jinwal | Chief Financial Officer (KMP, not a director) | AR26 p13 (image), p46, p89 |
| Kejal Niken Shah | Company Secretary and Compliance Officer | AR26 p46, p89 |
| Pravin Chaudhari | Vice President (the TJ moderator says "senior vice president") | AR26 p13 (image) |
| Milind Dhumal, Sandeep Sawant, Tejaswi Jogal | Independent Directors | AR26 p3, p12 |
| Statutory auditor FY26 | Doshi Doshi & Co (FRN 153683W), partner Chintan Doshi | AR26 p78, p89 |
| Banker | ICICI Bank Limited | AR26 p3 |
The two promoters hold 14,73,360 shares each, 34.60% each, of 42,58,400 shares at 31 Mar 2026 (AR26 note 3 p96, image). The July 2026 allotments change this; not computed.

## Address
**A-20, Shiva Industrial Estate, Lake Road, Bhandup (West), Mumbai 400078, Maharashtra.** Registered office: AR26 p3 (07 Sep 2026) and AR25 p82 (adds "Near Tata Power"). Phone 022 4974 2572 / 4974 2573; info@relservices.in; www.relservices.in (letterheads).

## Other facts
- IPO: 11,23,200 shares at Rs 235, total 2,639.52 lakh (fresh 1,979.64 + offer for sale 659.88). AR25 p37, 08 Sep 2025; sum and price check §7.
- Preferential issue after FY26: 6,50,000 shares at Rs 109.50 (Rs 7.12 Cr) and 77,40,808 warrants at Rs 109.50 (Rs 84.76 Cr if fully converted). AR26 p41 to p42; products §7. Allotments: NSE board outcomes of 08 and 10 Jul 2026.
- FY26 audit opinion: unmodified, no emphasis of matter (AR26 p78 image).
- ERP or accounting system: NOT FOUND. Searched the text of all 18 downloaded documents for ERP, SAP, Tally: 0 true hits (only "digitally" and signature lines). Image-only statement pages carry no such section. AR26 shows software of Rs 2.05 lakh gross as an intangible (p100), nothing more.
- Credit rating: NOT FOUND. Searched all 18 document texts for CRISIL, ICRA, CARE, India Ratings, Acuite, Infomerics, Brickwork, "credit rating" (0 true hits); the NSE announcement list (no rating filing); two web searches naming every agency (0 results for the company).

## Vintage (read before using any FY25 figure)
AR26 restated FY25 (note 37: "regrouped / rearranged"). Same year, two sets of numbers (§6):
- Receivables 3,520.76 (original) became 2,615.46; inventory 1,056.94 became 1,962.25. The 905.30 that left receivables is exactly the restated WIP. Until AR26, work done and not billed sat inside receivables.
- Revenue 7,947.11 became 7,972.54; payables 1,157.04 became 1,232.02; OCF (1,491.29) became (1,503.94); PAT unchanged at 225.56.
- Booklet rule: FY26 against FY25 restated, both from AR26. Never FY24 or the H1 FY26 balance sheet (old basis: receivables 4,285.48 at 30 Sep 2025, H1 p5 image) beside them.
