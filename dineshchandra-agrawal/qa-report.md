# DRAIPL qa-report (DA-S23)

Sources re-downloaded 12 Oct 2026: CARE 2 Apr 2026 (all 8 pages rendered; pages 1-5 image-checked), CARE 10 Jan 2025 (page 4 image-checked, FY23 5,701), CARE 27 Mar 2024 (text: 5,701), company site contactus and companyleadership (screenshots: "Chairman and Managing Director", "401, The Grand Mall, S.M. Road, Ambawadi, Ahmedabad-380015").

## Figures traced
| Printed | Source |
|---|---|
| TOI 5,701 FY23 | CARE 10 Jan 2025 p4 (image) |
| TOI 6,382 FY24, 7,116 FY25, 11%, 23% | CARE 2 Apr 2026 p4, p1, p3 (image) |
| PAT 408 (FY24 311) | p5 (image) |
| Order book 36,285, 5.10x | p1, p2 (image) |
| Collection 38, stock 20 | p3 (image) |
| GCA days 127 / 98 | p1 / p3 (image) |
| Gross cash accruals 482 | p4 (image) |
| Segment 27/25/14/11, Gujarat 41, Assam 15, Rajasthan 15, ~7% intl, 76% under 20% progress | p2 (image) |
| 9 operational HAM (8 NHAI, 1 state), 51 annuities, 4 HAM, 2 transmission, 1 toll (28 Feb 2026) | p1, p3, p4 |
| Fund-based utilisation 72% | p4 |
| 19.4959, 194.96 | python recompute: 7116/365 = 19.49589, x10 = 194.9589; matches calc output |
| Stage values, 27.1, 65.1 | stage_estimate.py --dso 38 output; sum of stages recomputed 27.1 |

## Charts
Used: (1) The cash cycle, partial (stock 20, collection 38, no total, GCA beside it); (5) Process map; scenario bars at 10 days.
Skipped: (2) no rate, no balances; (3) no cash flow statement; (4) single year, no 3 year-ends of two lines.

## Deviations from fixed copy and rulings
1. p8: fixed "no day values" copy replaced by the 12 Oct order (estimate values with tags); "Step waits are not public" line replaced by the estimate basis; footer changed to say estimates are marked. Payment received tag is "As CARE reports, FY25" (ruling), not "Published".
2. Tagline "Know where your money is waiting, and who can release it." on p7 and p16 (brief), not "trapped".
3. p8 has no upper card; p13 text only; p14 claims line dropped; p10 advisor copy is written from the product context as no fixed text exists.
4. Ruled story phrase "most of the money waits outside invoices" NOT printed: CARE does not say it and gross current assets are wider than invoices. Printed as a question.
5. Basis: CARE says combined approach and does not say whether FY25 table is standalone or combined; stated in p3 footnote. FY23 5,701 is from the earlier (standalone-approach) note; FY24 6,382 is identical in both notes.
6. Logo not used: company site logo is a 132x127 bitmap.
7. priceLevers not run: one priced lever only.
8. Master prompt rules reworded to content-only (B1 to B3 added); "04 Verified" in the fixed ticket steps is product copy and stays.

## Scans on the prompt (script scan.py)
0 placeholders, 0 comments, 0 dashes, 0 " pt", 0 design words, 0 "design to reproduce", 0 KEPT OUT hits (27 terms), 0 other-prospect names (78 folders, whole words; tokens booklet, done, transmission are ordinary words), 0 interest figures. Planted hits detected. Every number in the prompt traced to the table above.
