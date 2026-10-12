# Thakur Infraprojects: QA report (TH-S23, 2026-10-12)

## Precondition (README TH-2): image check of the Infomerics figures. PASSED, no mismatch
Page images rendered from the PDFs and read by eye on 2026-10-12.
| Figure | Image |
|---|---|
| 736.28, 577.28 | Infomerics 23 Jan 2025 p7 table; p3 text |
| 311.55 | Infomerics 27 Oct 2023 p7 table (FY22) |
| PAT 133.66 | p7 table (confirmed; not printed in the booklet) |
| DIO 14, DSO 42, DPO 14, operating cycle 42, GCA 194 (168 prior) | p5 text |
| Order book 4,665.16, 6.34x, 93.11% | p2 and p3 text |
| Fleet 40+, 59, 35, 222; hire about 5% | p4 text |
| Established 1974, reconstituted 2007, Navi Mumbai based Class I | p6 text |
| 9MFY25 total operating income 591.81 | p3 text |
Deviation: the Infomerics PDFs were not re-downloaded; the copies saved earlier today in the TH-1 scratch folder were reused (same URLs, same files).

## Calc
calc\th-savings.ts, th-savings-output.txt, lever-table.md. Value of a day 2.0172 Cr; 10 days 20.17 Cr; 30 days 60.52 Cr; cycle 42 to 32 and 42 to 12. Asserts: no negative release, interest 0, independent cross-check, payables never release cash, basis match, only DSO priced, no stated term. Six breaks each failed visibly (BREAK=1 to 6), then the clean run passed. Temp file deleted; app git status shows only docs/03-agent-scorecard.md and docs/onboarding/.

## Charts (CHART-CATALOGUE)
- Used: 1 "The cash cycle · Where the money sits, and who is holding it" (p5, with Position and Simulate scenarios). 5 "Process map · One bill, from work done to cash in the bank" (p8, Payment received 42 days).
- Plus scenario bars "With Crestline · ten days less / thirty days less" (p6).
- Skipped: 2 Pressure on the cycle (no disclosed rate, no balances). 3 Cash movement (operating cash flow conflicts between vintages and is kept out). 4 How these four move together (no balances at three year-ends).

## Scripted scans on the prompt (planted hits found: placeholder, comment, jargon, dash, pt, kept-out, design word, other-prospect name, interest)
0 placeholders, 0 comments, 0 jargon (one hit "Verified" is the fixed printed line "04 Verified:"), 0 dashes, 0 " pt", 0 other prospect names (whole words, every folder name), 0 kept-out terms (CARE, 685.68, 171, 2,871, operating cash flow, +24%, Panvel, debt, 90.44, EBITDA, 193.90, BBB, rating, 725.54, limit, guarantee, JV, promoter), 0 design words, 0 interest figures, 0 "design to reproduce". Untraced numbers: none (2013 and 2014 are the dash-check instruction; 35398 is the phone number).

## Number trace (all printed numbers)
311.55, 577.28, 736.28, 4,665.16, 93.11, 6.34, 591.81, 42, 14, 194, 168, 40, 59, 35, 222, 5, 1974, 2007 trace to the page images above. 2.0172 = 736.28 / 365; 20.17 = 10 x 2.0172; 60.52 = 30 x 2.0172; 32 and 12 = 42 minus 10 and 30; cycle 32 and 12 from the simulator (14 + 32 - 14, 14 + 12 - 14). 12 Oct 2026 letter date, 23 Jan 2025 and 27 Oct 2023 release dates, 30 Nov 2024 order book date, 31 Mar 2024 year end.

## Deviations from the fixed copy and the template
1. Tagline "waiting" instead of "trapped" on p7 and p16, per the launch message tagline ruling.
2. p14: claims and arbitration line dropped (ruled). Scope card omitted. Pilot scope "One to three EPC projects".
3. p15: no-rate interest wording used.
4. p8 (updated by the stage-estimate order): stage days come from stage_estimate.py --dso 42 (1.4, 2.0, 1.1, 2.6, 1.4, 2.7, 17.3, 1.8), tagged Estimate; Payment received 42 Published; Tax invoice raised has no separate wait in the script (shown on Payment received); Retention released Not public; basis line printed under the map; With Crestline stays on Payment received only; rules A12 and B3 reworded to allow labelled estimates. No upper card.
5. p13: text only, no digits in the body.
6. Letter dated 12 Oct 2026 (launch message), not 9 Oct.
7. Prompt: design section, finish check 10, comments removed; template rules reworded to content only (A5, A6, A7, A14 and checks); added B1 to B3.
8. Kept out as ruled: PAT, margins, order-book MSRDC award, concentration percentages, utilisation, Panvel client name, J.M. Mhatre and J. Kumar client names (other prospect names).
