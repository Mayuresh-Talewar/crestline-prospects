# SALES-12b Design Lead review: Project Keystone, frozen review-v1 (2026-10-06)
Skills loaded: design:design-critique, high-end-visual-design, dataviz, design:ux-copy.
Reviewed: `review-v1/keystone.pdf` (PyMuPDF text/geometry extraction) and `review-v1/renders/p01-p16.png` + `spreads.png`. `build/` not used.

## Verdict: CHANGES REQUESTED
0 blockers, 4 majors, 6 polish. The file is close: figures, sources, margins, fonts and QR all pass. The majors are one non-footing chart, two headline rags, one template-looking page and the cover title clearance.

| Area (brief §6) | Result | Evidence |
|---|---|---|
| 1 Numbers vs storyline + copy deck | PASS, except p9 foot (M1) | Every ₹/days/%/x token matches copy-deck. 1,313.5+1,176.8=2,490.3; 182.8+163.8=346.6; bands 42.3+17.9+6.2+24.0=90.4 and 43.9+45.7+14.6+24.0=128.2; 152-90=62; CAGR (2,623/1,340)^¼=18.3%; 1,177/445=264, 2,623/1,799=146; 1,376/1,839=74.8% |
| 2 Geometry | PARTIAL | `data-v`/`data-scale` not checkable without `build/` (not run, by instruction). From PDF: p5 stack 163.3 vs revenue 172 correct; p12 dots at 90/152 correct; p4 col 8 ends 129.3, col 9 starts 133.3 as briefed |
| 3 Dates p2-16 | PASS | Every page 2-16 carries a document + date; p13-15 carry the agreed "no Capacite figures" line; AR always "July 2026", IP month only, transcript "filed 25 May 2026" |
| 4 AI tells (grep) | PASS on grep; FAIL p13 by eye (M3) | 0 U+2013/2014, 0 "!", no shadows, no icons, no eyebrows above headlines |
| 5 Size | PASS | Smallest text 9.0 pt on every page; type sizes used = brief scale only (9/10/10.5/11/13/14/16/30/46/96) |
| 6 Contrast | PASS (spec values, spot-checked) | Ink on pastels, #C3CBDD on navy, #6F7783 ticks as briefed; not pixel-measured per pair |
| 7 Gutter, margins, folio | PASS | All text inside recto 22.0-194.0 / verso 16.0-188.0 mm; folio n / 16 outer-aligned on 2-16 |
| 8 PDF | PASS | 16 pages, MediaBox 612 x 858.96 pt; fonts IBM Plex Serif/Sans/Mono only (no fallback) |
| 9 QR + days | PASS | p15 QR matrix (33x33) matches the generated code for `https://www.crestlineintelligence.com/book-a-demo`, 0/1089 module mismatches, 21.9 mm; 21 Oct 2026 = Wednesday, 23 Oct = Friday |
| 10 Visual | CHANGES | p9/p10 3-line headlines with bad rag; p13 generic flow; cover clearance |
| p2 public-filings line | PASS | "Based only on Capacite's public filings, as published up to July 2026." on the date baseline |

## The p9 waterfall: 1,839 - 1,376 - 136 = 327, printed ₹324 Cr
Yes, a chairman (and certainly Mr. Rajesh Das) will spot it: three large numbers sit side by side and the subtraction is mental arithmetic. The gap is plausibly rounding (12 yearly figures rounded to the crore can drift up to ±6 Cr, and 88-39+52+223 = 324), but the chart itself does not foot, and the explaining note reads as an excuse sitting apart from the bars. Page 13 promises "every figure ties back to your ledger, or the difference is shown": p9 must show it inside the chart.

## Departures from my brief
| Departure | Decision |
|---|---|
| Full-width headlines (172 mm measure, not 9 columns) | ACCEPT, and apply it on EVERY page (p10 and p12 still wrap at about 9 columns, which is what makes them 3 lines) |
| p9 / p10 / p12 headlines at 3 lines | REJECT p9 and p10 (fixes M2). ACCEPT p12 at 3 lines only with phrase breaks (fix P2): the figure line is the point and the page has the room |
| p4 gutter | ACCEPT. Margins measure exact (verso 16.0-188.0). Only the FY26 value label overhangs column 8 by 1.4 mm into the 4 mm gutter (fix P1) |
| Cover descender clearance about 1 mm | REJECT (M4). Measured: title baseline 81.14 mm (brief 80.0), subtitle baseline 89.07; the j/y descenders sit about 1 mm above the subtitle cap height |

## Fix list (numbered, page, exact change)
**Majors**
1. **M1 p9 waterfall.** Add a fourth, text-only step between "Tax paid" and "Operating cash": label "Rounding -₹3 Cr" (Plex Sans 9 pt #5F6670) on the dashed connector, which steps from 327 to 324 so the bars visibly foot: 1,839 - 1,376 - 136 - 3 = 324. Replace the under-plot note with: "Each year is published rounded to the crore. Over four years the rounding comes to ₹3 Cr; operating cash is shown as reported." Before print, research confirms the four years' cash-flow lines in lakhs (audited cash flow statements); if the ₹3 Cr is not rounding, the step is named for what it is.
2. **M2 p9 and p10 headlines to 2 lines.** p9 copy: "Three-quarters of operating profit went into working capital." with a forced break after "operating" if it does not fit, and add the chart title "FY23 to FY26, four years added together" (Plex Sans SemiBold 10 pt, as p4's chart title). p10: full width, break after "days.": "Payables average about 179 days. / Each vendor's terms set its own date." If line 2 exceeds 172 mm, use "Each vendor has its own due date."
3. **M3 p13 reads as a SaaS "how it works" template** (three equal outlined boxes + two arrows + ruled bullet list, 60 mm of dead navy above). Replace the boxes with a typographic row: three columns (cols 1-4, 5-8, 9-12), each a Plex Mono 9 pt step number "1" "2" "3", a 0.5 pt #597BCC hairline above, Plex Sans SemiBold 13 pt title, 10 pt line below; one single 0.75 pt white rule under all three with the label "one way, read-only" at its arrowhead. Move the row up to start 12 mm under the headline.
4. **M4 cover.** Restore the title baseline to y 80.0 (brief) and move the subtitle baseline to y 90.0, date to y 97.0, second hairline to y 102.0. Target ≥ 2 mm between descender and subtitle cap height.

**Polish**
5. **P1 p4:** right-align the "₹13,498 Cr" value label to the bar's right edge (x 129.3) so it stays inside column 8.
6. **P2 p12:** headline full width with forced breaks: "Your Annual Report states / 152 working-capital days. / The target is 90."
7. **P3 p12 axis:** "150" and "160" labels are 2.2 mm apart (others about 5 mm). Drop the "160" label, keep its tick.
8. **P4 p11:** break the row label as "Absorbed by working capital, / FY23 to FY26" (no widow "FY26").
9. **P5 copy deck p9 (copy owner, not the designer):** negatives are hyphen-minus ("-₹1,376 Cr", "-₹39 Cr"). Accounting form "(₹1,376 Cr)" reads cleaner to a chairman and removes the only hyphen used as a minus.
10. **P6 p3, p11, p13:** 55-70 mm empty bands between the visual and "What this means for you". Acceptable for a quiet file; if the grid allows, top-align the meaning block to 8 mm under the visual on these three pages only.

## Not run
`data-v` geometry check (needs `build/`); pixel contrast per pair; CMYK/stock (printer hard proof); client approval of the v2 prototype not verified by me (gate in the build brief).
