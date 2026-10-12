# AF-10 accuracy check: Afcons MD-edition booklet (7 Oct 2026)

File: `booklet-review/Afcons_MD-edition_Srinivasan-Paramasivan_booklet.pdf` (16 pages, rendered at 80 and 110 dpi, text extracted, chart marks measured from the PDF vector drawings).

## Verdict
Numbers: accurate. Every figure traced to data.md / depth.md / solutions.md / calc output and, for the key ones, to the source PDFs (AR26 PDF p.185 rate sentence, consolidated; Q4T/Q1T quote pages; CRISIL rationale text). Charts are to scale (all marks within 2%).
Problems are NOT in the arithmetic. (1) The file is the CFO booklet's copy re-addressed to the MD, so CFO quotes are credited to the MD ("you said", "you named"). (2) One wrong page cite. (3) One ownership slip. (4) One rounding slip.

## Table
| Page | Item as printed | Our source value | Verdict | Exact fix |
|---|---|---|---|---|
| 1 | Mr. Srinivasan Paramasivan, Managing Director | README ruling; slots-md | CORRECT | none |
| 1 | Rajat Kate, Managing Director, Crestline Intelligence | slots-md p1 | CORRECT | none |
| 1 | Rs 11,770 Cr (11,769.59 = 4,038.09 + 7,731.50), "not an audited figure", AR26 p.353-356 | data.md; verify-report | CORRECT | none |
| 2 | Address Afcons House, 16 Shah Industrial Estate, Veera Desai Road, Azad Nagar, Andheri (W), Mumbai 400053 | data.md s12; AR26 Note 1 | CORRECT | none |
| 2 | "This booklet is about 23 days" / "Dear Mr. Paramasivan" | slots-cfo p2 headline, not slots-md p2 ("Orders are growing again. The cash has not followed.") | WRONG | Replace p2 with the slots-md p2 letter (order book 43,290 vs 32,496; 982.1 Cr; 74.1 to 97.7 Cr; "thirty minutes with you, or with Mr. Jha") |
| 2 | "On the Q4 call you said 'bare minimum, we can look at 120 days'... I have used 120 only as a yardstick" | Speaker is Ramesh Jha, CFO (Q4T PDF p.19) | WRONG | "On the Q4 call your CFO, Mr. Jha, said ..." or drop the 120 from the MD letter (slots-md p2 has none) |
| 2 | 23 days = Rs 752.9 Cr; Rs 56.8 to 74.9 Cr at 7.55% to 9.95% "if the cash repays them"; Rate AR26 PDF p.185 | calc output; PDF p.185 is the consolidated borrowings note and has the sentence | CORRECT | none |
| 2 | NWC 143 (Mar 2026) from 113; AR26 p.18 (PDF 11) | AR26 p.18 | CORRECT | none |
| 2 | Q4T "call 19 May 2026, filed 22 May 2026" | data.md | CORRECT | none |
| 3 | Headline "Three things you said about time, in your own words"; lead "what you told investors" | All four quotes are credited to Ramesh Jha, CFO | WRONG | Use slots-md p3 (Paramasivan Q1T p.5, p.8; Krishnamurthy Q1T p.4; Jha Q1T p.8) or retitle "Three things your CFO said" |
| 3 | i. "bare minimum, we can look at 120 days ... But I do not want to commit at this point in time." Q4T p.19 | Verbatim, p.19 | CORRECT | none (CFO words only, not a target) |
| 3 | ii. "we should see a sizable liquidation in the range of say INR 1000 odd crores", Q4T p.19 and p.26; "expected before June" | Quote is on PDF p.26; "before June" on p.19 | CORRECT | none |
| 3 | iii. "debt closing say around INR3,500 crores or so", Q1T p.16-18 | Found Q1T PDF p.17 | CORRECT | none |
| 3 | "no material movement in collection of the blocked-up asset" Q1T p.8; "monetized before March ... But it did not happen" Q4T p.19 | p.8 and p.19 verbatim | NEEDS CAVEAT | Three promise-then-outcome lines in a row read close to a missed-promise scorecard. Keep one pair; keep the "causes are real" line |
| 4 | 7,731.50 (65.7%) + 4,038.09 (34.3%); bar widths 301.5 : 157.5 pt = 1.914 = 7,731.50 / 4,038.09 | data.md | CORRECT | none |
| 4 | 236.2 and 123.4 days; "123.4 is not a DSO" | calc 7,731.50/32.735; 4,038.09/32.735 | CORRECT | none |
| 4 | 2,102.34 = 48.7% of gross 4,319.79; year earlier 38.4% (1,382.96/3,604.77) | verify-report | CORRECT | none |
| 4 | 1,592.20 of 1,702.20 did not reach the bank (93.5%) | 1,702.20 - 110.00 | CORRECT | none |
| 4 | "About 360 of 365 dots lit" | 359.54 | CORRECT | none |
| 4 | Contract assets include 659.87 Cr, Note 37; opinion unmodified | depth.md | CORRECT | none |
| 5 | Index series 100/108.5/127.4/152.0/169.5 and 100/114.7/120.4/113.9/108.4; plotted dots and scenario end points 164.7 and 155.3 within 1% of scale | data.md rows 61 and 36 | CORRECT | none |
| 5 | FY23 data labels 108.5 and 114.7 print on top of each other | n/a | NEEDS CAVEAT | Offset one label (readability, not accuracy) |
| 5 | 6,945.58 to 11,769.59 (+69.5%); 11,018.97 to 11,948.38 (+8.4%); peak 13,267.50 (FY24) | data.md | CORRECT | none |
| 5 | Order book 32,496 (2.7x revenue); 43,290 at 30 Jun 2026 | data.md | CORRECT | none |
| 5 | Borrowings 2,455.00 / 2,235.72 / 3,538.27 | data.md | CORRECT | none |
| 5 | "credit period of 45 to 60 days for progress payments (AR26 p.357)" | Sentence is in AR26 PDF p.202 (printed p.400-401, consolidated) and PDF p.154 (standalone). Printed p.357 is Note 8, contract assets | WRONG | Cite "AR26 p.401 (PDF 202)". Same fix on p.7 and p.11 footnotes |
| 5 | 123.4 days against a 45-60 day credit period | Receivables also hold retention and 266.08 Cr of arbitration interest | NEEDS CAVEAT | Add "the credit period covers monthly progress bills only; receivables also hold retention and award interest" next to the comparison (the not-a-DSO line is in the footnote only) |
| 5 | "3.02 times (AR26 p.121) is about 121 days (365 / 3.02)" | AR26 PDF 62, printed p.121 = 3.02; 365/3.02 = 120.9 | NEEDS CAVEAT | 121 sits next to the CFO's 120. Delete the sentence, or add "unrelated to the 120 the CFO named" |
| 6 | PAT 30.30 vs 137.40 (down 77.9%); finance costs 173.05 vs 161.77 (up 7.0%); revenue 2,671.00 vs 3,370.38 (down 20.8%) | data.md; recomputed | CORRECT | none |
| 6 | 10 days = 327.4 Cr (10 x 32.735) | calc | CORRECT | none |
| 6 | SAP S/4HANA, RHP Note 52 printed p.546 | README ruling | CORRECT | none |
| 6 | CFO "We are witnessing delays in certification..." Q1T p.8 | Q1T PDF p.8 | CORRECT | none |
| 7 | "143 days: the company's own figure; you named 120 without committing" | CFO said it | WRONG | "the CFO named 120 without committing" |
| 7 | Order to cash "359.6 days of revenue" | 11,769.59 / 32.735 = 359.54, i.e. 359.5 (359.6 is the sum of two rounded legs) | WRONG | Print "359.5 days" or "about 360 days" |
| 7 | Rs 4,470.68 Cr owed to vendors; payables = 136.6 days | data.md; 4,470.68/32.735 = 136.57 | CORRECT | none |
| 7 | Badges "READ-ONLY ON YOUR ERP / NO AI-GENERATED NUMBERS / PILOT: 14 DAYS" | webapp-fit; PLAYBOOK pilot | CORRECT | none |
| 8 | Waterfall: all 25 values; every bar measured 0.0593 pt per Cr (max deviation 1.4%); arithmetic ties (e.g. 1,702.20 - 1,592.20 = 110.00; 110.00 - 237.49 = -127.49) | data.md rows 113-115 | CORRECT | none |
| 8 | Negative two years, -259.69 Cr; finance costs paid 669.86 | data.md | CORRECT | none |
| 8 | "Two totals are yours: 236.2 days waiting to be certified ... " | Certification is the client's act (PLAYBOOK rule 3, ruling) | WRONG | "Two waits sit in the accounts: 236.2 days waiting to be certified (the client's act) and 123.4 days waiting to be paid (the client's act)" or "Afcons carries two waits" |
| 8 | "JOINT MEASUREMENT" tagged OURS | Measuring is the company's act; "joint" is shared with the client | NEEDS CAVEAT | Rename "Measurement" or tag "JOINT" |
| 8 | Step waits "not public"; measured from SAP dates "once the pilot adapter reads them" | webapp-fit; rule 1 | CORRECT | none |
| 9 | Ageing 12 bands, deltas, sums 3,604.77 and 4,319.79; bar widths within 1.9% of scale (smallest band 6m-1y is 1.5% and 1.9% off) | data.md lines 81-86 | CORRECT | none |
| 9 | 722.0 Cr to restore 38.4% share; "A ceiling: 27.0% ... disputed ... allowance 281.70" | calc; verify-report | CORRECT | Delete the duplicate "27.0% of gross (Rs 1,167.16 Cr) is disputed" sentence (says the same twice) |
| 9 | Chenab 243.53 = 165.62 + 77.91; 115 Cr non-current; Chennai Metro 659.87 / 837.08; ONGC provision 124.12; UPEIDA 221.96 and award 335.50 = 152.25 + 183.25 (24 Aug 2026) | depth.md | CORRECT | none |
| 9 | Payables 40.8% not due, 19.1% over a year; MSME 222.94 and principal unpaid 278.63 | data.md line 102 | CORRECT | none |
| 10 | 30 days = 982.1 Cr; 74.1 to 97.7 Cr; 236.2 to 206.2; 123.4 to 93.4; slider thumbs at 237 / 124 / 138 on a 0-250 track | calc | CORRECT | none |
| 10 | Axis labels "0 50 100 150 200 250" are not spaced over the slider track | n/a | NEEDS CAVEAT | Re-space labels to the track ends (cosmetic) |
| 10 | Government 79%, Multilateral 12%, Private 9%; CFO "close to half state, half central" Q4T p.20 | data.md line 148 | CORRECT | none |
| 10 | Vendor advisor "15 days vs 60" | worked example, labelled in slots | CORRECT | none |
| 11 | "AI CFO auditor reviews every panel"; "Every sync on record ... Settings"; owner "Commercial head, 7 days" marked EXAMPLE | App repo CLAUDE.md, not Afcons data | NOT IN OUR DATA | none (product claims, true in the app; example is labelled) |
| 11 | 10 days sooner: 123.4 to 113.4, 327.4 Cr, 24.7 to 32.6 Cr | calc | CORRECT | none |
| 12 | Row table: 327.4 / 982.1 / 752.9 / 722.0 / 1,000.0 Cr and interest 24.7-32.6, 74.1-97.7, 56.8-74.9, 54.5-71.8, 75.5-99.5; bars on 0-250 scale within 1.6% | calc output | CORRECT | none |
| 12 | Headline "Priced: the 23 days you named, worth Rs 752.9 Cr"; lead "The 120 days you named"; row "143 to 120, the days you named" | CFO's words; ruling: 120 only in his words, never a target | WRONG | "Priced: the 23 days your CFO named, worth Rs 752.9 Cr" (or lead with the 30-day step as slots-md p12 does) and keep the quote line |
| 12 | Borrowings bars 2,455.00 / 2,235.72 / 3,538.27 (+58.3%); 752.9 = 21.3% of 3,538.27 | data.md; recomputed | CORRECT | none |
| 12 | 722 ceiling, overlap, interest-only-if-repaid, GST-conservative lines present | verify-report caveats | CORRECT | none |
| 12 | PBT caveat (386.79 after 76.51 exceptional) | not applicable: no PBT or PAT share is printed in this file | CORRECT | If the MD pack's PBT column is added back, add [C-PBT] |
| 13 | Afcons NWC 43/38/63/113/143; bars 24.0/21.0/35.2/63.0/79.5 pt = 0.56 pt per day (max 0.7%); dashed 113 within 2.5% (stroke) | depth.md; Q3 FY25 deck p.34, AR26 p.18 | CORRECT | none |
| 13 | J Kumar 127/126/123/112/99 only (no L&T, NCC, HG Infra); bars 0.43 pt per day | depth.md line 102 | CORRECT | none |
| 13 | CRISIL AA-/Negative from Stable 19 Aug 2026; trigger quote; 295 (239), NWC 139 (117; below 90), upgrade 270-280, cash about 900, limits about 1,200 (30 Jun 2026) | Checked in CRISIL rationale text | CORRECT | none |
| 13 | CRISIL 139/295 vs company 143 | Never mixed; stated "its own, never mixed with 143" | CORRECT | none |
| 13 | ICRA / CARE | not mentioned | CORRECT | none |
| 14 | Pilot = one to three domestic INR projects; "no SAP adapter today, built during the pilot"; 14 days; read-only | webapp-fit; README | CORRECT | none |
| 14 | No ISO, hosting, encryption, present-tense ERP connection claim | text search: 0 hits | CORRECT | none |
| 14 | SAP S/4HANA with RISE since 21 Nov 2023, RHP Note 52 p.546 | README ruling | CORRECT | none |
| 15 | Sources paragraph; rate range and AR26 PDF p.185; "All Afcons figures are consolidated" | p.185 is consolidated | CORRECT | none |
| 15 | Closing line "Thirty minutes with you" | slots-md says "with you, or with Mr. Jha" | NEEDS CAVEAT | Optional: add "or with Mr. Jha" |
| 15, 16 | +91 76209 35398, rajat@crestlineintelligence.com, Pune | Crestline's own details, not in Afcons files | NOT IN OUR DATA | none |
| all | Revenue 11,948.38 = revenue from operations; total income 12,322.10 and EBITDA 1,439 / 1,362.26 never printed | README rulings | CORRECT | none |
| all | Names and titles: Srinivasan Paramasivan MD, Ramesh Jha CFO (cover has no Executive Chairman) | README | CORRECT | none |
| all | Internal references (AF-, calc, CLAUDE.md, data.md): 0; other companies (Capacite, KEC, Vascon, L&T, NCC, HG Infra): 0; missed-promise scorecard: none | text search | CORRECT | none |

Counts (rows): CORRECT 47, NEEDS CAVEAT 8, WRONG 8, NOT IN OUR DATA 2 (grouped rows).

## Must-fix list
1. Whole booklet: this is the CFO copy with the MD's name. Pages 2, 3, 7 (card 01) and 12 credit the CFO's words to the MD. Either rebuild from `slots-md.md` (the approved MD pack: p2 letter, p3 four management quotes, p6 loss, p13 board view) or rewrite every "you said / you named" as "your CFO said / named".
2. p3: quotes by Ramesh Jha shown under "Three things you said ... in your own words".
3. p2, p7, p12: "you named 120" is the CFO's statement; keep 120 only inside his quote, never as the headline basis.
4. p5, p7, p11: cite for 45-60 day credit period is wrong ("AR26 p.357"); use AR26 p.401 (PDF 202).
5. p8: "Two totals are yours" contradicts "the client certifies / the client pays".
6. p7: "359.6 days" should read 359.5 (or "about 360").
Optional: p5 delete the 121-day sentence; p3 trim to one promise-outcome pair; p5 FY23 label overlap; p10 axis labels; p9 duplicate 27.0% sentence; p8 "Joint measurement" tag.

Self-review: 4/5 | the first text dump included a stale file from another task in the scratchpad (my glob `t*.txt` matched `text.txt`) and briefly showed false "Capacite" hits | I will glob page files by explicit pattern and clear the scratchpad before a scan for other companies' names.
