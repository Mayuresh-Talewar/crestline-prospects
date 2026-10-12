# QA report: Rajkamal Builders Infrastructure (RJ-S23, 2026-10-12)

Source re-downloaded: https://www.infomerics.com/admin/uploads/pr-Rajkamal-Builders-Infra-29sep25.pdf (9 pages). Pages 3, 5, 6 rendered to images and read against the text layer. Every figure is combined, four group entities.

## Figures traced
| Printed figure | Source |
|---|---|
| Order book 1,977.38 Cr at 31 Jul 2025, incl. O&M 389.74 Cr; 4.07 times FY25 combined income 485.32 Cr | p3 (image-checked) |
| Work certified about 671 Cr: STP/WTP about 278, roads and bridges about 332, O&M about 61 | p3 (image-checked) |
| Income 537.16 Cr FY24 audited, 485.32 Cr FY25 provisional | p3 text, p6 table (image-checked) |
| Operating cycle 103 days FY24, 137 days FY25 provisional | p5 (image-checked) |
| In business since 1979, "AA" class contractor Govt of Gujarat, work types, five states, all customers government | p3, p6 |
| Most orders 1 to 3 years, O&M five to ten years; order book skewed to roads, bridges, STP in Rajasthan, Gujarat, MP | p3 |
| Value of a day 1.3296 Cr; 10 days 13.30; 30 days 39.89; 34 days 45.21; 127 and 107 days; 34 = 137 minus 103 | calc\rj-savings-output.txt (re-done by separate Python: 13.30, 39.89, 45.21) |

## Calc
Script calc\rj-savings.ts, output calc\rj-savings-output.txt. Uses simulate, leversFor and valueOfADay. The 137-day cycle is carried as ONE wait at the value of a day (the only published day figure); no terms passed. Asserts: no negative release, interest 0, independent cross-check (days x per day vs simulate and valueOfADay), payables never release cash, basis match. Each broken once (BREAK=1 to 5) and failed visibly; clean run passes. Temp file deleted; app git status shows only the two untracked docs paths.

## Charts used and skipped
Used: Process map (catalogue 5), every stage Not public, no estimates (launch order overrides the estimate order); operating cycle 103 to 137 as plain data (p5, p8); scenario bars as figures (p10, p12).
Skipped: 1 cash cycle (no DIO, contract assets, DSO, DPO), 2 pressure (no balances), 3 cash movement (no cash flow statement), 4 how these four move (two year-ends, no lines).
Levers not priced: DSO, contract assets, retention, DIO, DPO, interest (see the lever table in the calc output).

## Deviations from the fixed copy
- Tagline "trapped" changed to "waiting" on p7 and p16 per the launch order.
- Company, "ERP" and pilot scope filled; "Not a claims or arbitration tracker" dropped (brief).
- p14 adds a scope sentence: figures combine four group entities, pilot reads one entity, one segment.
- p8 stage tiles add "Not public" to name and tag (catalogue item 5). Upper cash-flow section omitted.
- Letter dated 12 Oct 2026 per launch (brief says 9 Oct).
- p13 has no numbers (brief); no peer or proof lines.
- Template rules reworded for content-only (no drawing rules); labelled A1 to A14 and B1 to B5.

## Scans (by script, planted hits caught)
0 placeholders, comments, internal references, dashes, point sizes, kept-out terms, design words, other prospect names, "design to reproduce". Interest appears only as "No interest is priced". Numbers in the Content traced to the source or the calc; the rest are page numbers, dates and the phone number.
