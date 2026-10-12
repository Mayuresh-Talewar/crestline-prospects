# SJ Contracts: self-QA report (SJ-2/3, 2026-10-09)

Method: raw downloaded CRISIL rationale HTML (15 Apr 2025, 1 Feb 2024), tags stripped by script, regexes run with `python -I`. No fetch summary used. Each scan carried a planted hit (a known-present phrase, and a known-absent phrase that had to MISS); both behaved.

## 1. Figures traced to the raw CRISIL text
| Printed figure | Raw text found | Result |
|---|---|---|
| Operating income FY24 963.40, FY23 610.18 | 15 Apr 2025 table: "Operating income Rs crore 963.40 610.18" | Match |
| PAT FY24 41.16, FY23 17.86 | same table: "Reported profit after tax Rs crore 41.16 17.86" | Match |
| Operating income FY22 593.89 | 1 Feb 2024 table: "Operating income Rs Crores 610.18 593.89" | Match |
| Order book 2,484 at 31 Mar 2025, 12 to 36 months | 15 Apr 2025: "order book of Rs 2484 crore as on 31st March, 2025, to be executed within the next 12-36 months" | Match |
| Order book 1,770 at 30 Nov 2023 | 1 Feb 2024: "order book of Rs 1770 as on 30th Nov, 2023" | Match (first regex missed on "30 th Nov"; re-read by eye) |
| Crisil A-/Stable and A2+, reaffirmed, 15 Apr 2025, standalone | 15 Apr 2025 header and Analytical Approach | Match |

## 2. Recomputed by script
- 963.40 / 610.18 less 1 = 57.89%, printed 57.9%.
- 963.40 / 365 = 2.639452, printed 2.6395. x10 = 26.394521, printed 26.39. x30 = 79.183562, printed 79.18.
- 2,484 / 963.40 = 2.578, printed "about 2.6 times" (page 4 side stat, with "the two dates differ") and 2.58 in the footnote. Dates differ (31 Mar 2025 vs FY24), so the wording is kept.
- Calc (calc/sj-savings-output.txt): all asserts PASS; four break-tests each FAILED visibly (calc/sj-savings-breaktests.txt). App repo git status: only the two pre-existing untracked docs.

## 3. Basis match
Every figure is CRISIL, standalone, INR crore, fiscal years to 31 March. Order book is a point-in-time figure at two dates and is never added to or divided with a flow except in the labelled 2.6 times line. No other basis is paired.

## 4. Scans on the assembled prompt (claude-design-master-prompt.md)
Clean run versus planted run (planted text added in memory only):
| Scan | Clean | Planted (must trigger) |
|---|---|---|
| placeholders | 0 | 1 |
| comments | 0 | 1 |
| company names (33 whole words) | 0 | 4 |
| internal references | 0 | 3 |
| dashes (en, em, spaced hyphen) | 0 | 3 |
| KEPT OUT terms | 1 ("margin", the fixed page 14 line "Not a margin or cost-control tool"; not SJ's margin range) | 5 |
| "Managing Director" with a Jangle name present | 0 (no Jangle name anywhere) | 5 |
| interest figures | 0 | 1 |
| "The design to reproduce" | 0 | 1 |
| signed numbers | 0 | 1 |
| untraced numbers | 1 ("05", the fifth lens number) | 8 |

Pack pasted into the prompt is byte-identical to slots-unified.md from "## Keys" to before "## Checks"; the reader table likewise.

## 5. Open items for Garvis
- Page 4 side stat "About 2.6 times" mixes dates by design and says so on the page; drop it if you want zero mixed-date ratios.
- Page 14 "PILOT SCOPE" says "One to three projects" (SJ is a building contractor, so "EPC" is not used).
- No rationale after 15 Apr 2025 was found (see sensitive-garvis.md); the booklet says "as published" through dates.
