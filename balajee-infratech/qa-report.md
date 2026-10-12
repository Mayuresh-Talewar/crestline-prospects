# Balajee Infratech: self-QA (2026-10-09)

Raw text re-downloaded and re-extracted into scratch the same day: CARE press release 23 Apr 2025 (careratings.com, 5 pp.) and Form MGT-7 FY2024-25 (balajeegroup.com, 20 pp.). Every printed figure re-traced by script.

## Figures traced
| Printed | Found in raw text / recomputed |
|---|---|
| 922.70, 672.13, 40.20, 24.97 | CARE p3 table; 922.70 and 672.13 also CARE p2 |
| 37% | CARE p2 ("grew by 37%"); recomputed 37.3% |
| 1,705 Cr, 1.85 times, excluding stuck orders | CARE p1 |
| 229 and 246 days | CARE p2 (adjusted GCA days, excluding liquid investments) |
| 42% | CARE p2 |
| more than two decades | CARE p1-2 |
| 963.00 Cr | MGT-7 p9, 9630040000 rupees = 963.004 Cr, printed once on p3, labelled a different measure |
| Address 601-602, Advent Atria, Chincholi Bunder Road, Opp. Kingstone Tower, Malad (West), Mumbai, Maharashtra 400064 | MGT-7 p1 (raw text "Opp.Kingstone Tower"; a space added after "Opp.") |
| Mukesh Pashupatinath Dokania, Director | MGT-7 p12 (DIN 00486271) |
| 2.5279, 25.28, 75.84, 219, 199 | calc/ba-savings-output.txt; recomputed 922.70/365 = 2.527945, x10 = 25.2795, x30 = 75.8384 |

Basis: all of 922.70, 229, 246 and the per-day value are CARE standalone FY24 (audited). 963.00 is a different measure, never in a series or calculation. No interest anywhere (grep of "interest" shows only "No interest is priced"). 30 to 60 day credit period (CARE p2) is deliberately NOT printed beside the 229 days.

## Scans on the assembled prompt
Every scan was first run on a planted text and flagged every category. Real hits: none for placeholders, comments, internal references, dashes (em, en, spaced hyphen), point sizes, company names, KEPT OUT terms, "Managing Director" beside Dokania, interest figures, "design to reproduce", signed numbers. Two jargon-list words remain by design and are not internal references: "Verified" (fixed p11 step 04 copy) and the heading "Keys" (the pack is pasted byte for byte). Number trace: only list numbers and the three calc figures were not verbatim in the sources, and those were recomputed above.

## Deviations from the fixed copy
1. Tagline on p7 and p16: "Know where your money is waiting, and who can release it." (fixed pages read "trapped"), per client order.
2. p8: the upper company card and {STRIP_TOTALS} are dropped; footer reads "Illustrative stages." (fixed text adds "Totals are from published accounts", which would be false with no totals).
3. p14: the "Not a claims or arbitration tracker" line is dropped, per client order. SCOPE_CARD left empty.
4. p15: interest variant used (no rate published); the sources paragraph is the pack's own, with the CARE and MGT-7 filing dates (MGT-7 by month, Dec 2025).
5. {ACCOUNTING_SYSTEM} printed as "ERP" (no filing names one). "Owner told", the four ticket steps, the Ask steps and all other fixed product copy are verbatim.
6. p7: four lenses read "Not published" with a one-line reason; fixed footer kept.
7. Template wording reworded in the prompt (not the product copy): printed-copy marker is a leading ">", accuracy rules renumbered B1 to B14, "placeholder", "slot" and "tag" language removed.

## Calc
Script and full output in calc/. Four breaks each failed visibly; clean run exit 0. App repo git status after deleting the temp file: only docs/03-agent-scorecard.md and docs/onboarding/.
