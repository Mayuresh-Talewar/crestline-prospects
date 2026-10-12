# AGC Infracon Private Limited: self-QA report (steps 2 and 3, 2026-10-09)

Source: Infomerics Ratings press release, 23 Apr 2025 (src/d/pr-AGC-Infracon23apr25.pdf), rendered to page images and page text; pages 1, 3, 4 and 5 read as images, pages 2, 6 and 7 by text layer. Standalone throughout.

## 1. Figures re-traced on the source page
| Printed figure | Page | Result |
|---|---|---|
| 567.63 and 513.30 total operating income FY24, FY23 | p5 table (also p2 text) | Match |
| 58.96 and 49.17 EBITDA | p5 | Match |
| 38.39 and 32.57 PAT | p5 | Match |
| 1,702.68 order book at 31 December 2024, "3x of FY24 revenue" | p3 | Match, image read |
| 235.98 total rated; 185.00, 30.00, 20.00, 0.98 | p1 table, p7 Annexure 1 | Match; p1 also shows 20.98 long term and 215.00 short term, which equal 20.00 + 0.98 and 30.00 + 185.00 |
| Release date 23 April 2025 | p1 | Match |
| Three quotes on page 13 | p1, p3 | Exact string match on the page text; speaker is the agency in all three |
| Standalone basis | p3 "Analytical Approach: Standalone" | Match. The p5 table heading says another word; the booklet does not use it |

## 2. Recomputed by script (python -I, scratch)
Value of a day 567.63 / 365 = 1.555; 10 days = 15.55; 30 days = 46.65; revenue growth 10.58%; PAT growth 17.87%; guarantee share 185.00 / 235.98 = 78.4%; fund based 20.00 + 30.00 + 0.98 = 50.98 = 21.6%; 185.00 + 50.98 = 235.98; order book / revenue = 3.00. All equal the printed values. The calculator (TypeScript, the app's simulate, priceLevers and costOfFinancing) gives the same 15.55 and 46.65 and an independent integer-arithmetic route agrees to 0.0001. Interest = 0, no negative release, payables release nothing. Each assert was broken once and failed; the clean run passed (calc/agc-savings-output.txt).
Not printed on purpose: 31.10 and 93.31 (both waits together; rows overlap).

## 3. Basis match
Every figure is standalone, FY24 audited (or the 31 December 2024 order book, which the agency itself pairs with FY24 revenue as "3x"). No two totals from different bases are paired except that agency pairing. The p6 scenario bars sit on the same rupee scale as the limits and are labelled as cash released once, not as a repayment.

## 4. Scans (python -I; each scan was first run on a planted string and fired on every rule)
On the assembled prompt: placeholders 0, comments 0, the 28 company names (whole words) 0, internal references 0, em or en dashes 0, spaced hyphens or double hyphens 0, signed numbers 0 (the phone number's plus sign is excluded), KEPT OUT terms 0 (downgrade, upgrade, provident fund, non-cooperating agencies, consolidated, reclassification, current ratio, 15.65, 1.13, 0.84, cured, Tally, execution period, 15-18, 89,000, rating grades), interest figures 0, "design to reproduce" 0.
Template rules containing a flagged word: one, "ticket ids" in rule 6, reworded to "reference codes". Section 2 and finish-check 10 removed; sections and checks renumbered.
Number trace: all printed figures traced (list in section 1 and 2). Remaining numerals are axis scales (0 to 50, 70, 200, 600, 1,800), dates from the release, page numbers, 14 days, 7 days, 10 and 30 days, the company address and the Crestline phone number.

## 5. Judgement calls for Garvis
- Kickers invented for pages 3, 4, 5, 6, 9, 10, 12, 13, 14: THE PUBLIC RECORD, THE BOOK, THE YEAR, THE LIMITS, REASON DESK DATE, THE SIMULATOR, PRICED, THE AGENCY'S WORDS, TRUST. Change if you prefer.
- Page 13 quotes the agency's positive wording and its upward factor on the working-capital cycle. No peers or proofs are used, so the usual proof page became an agency page.
- Page 11 finding tone is "SCENARIO" because nothing is measured.
- Letter date 9 October 2026; cover month October 2026. Address from the company site, not confirmed by a filing.
- Fixed p14: the claims and arbitration line dropped, as ordered. Fixed taglines changed to "waiting" on p7 and p16, as ordered.
- Interest: none printed; the p15 notes use the no-rate variant.
