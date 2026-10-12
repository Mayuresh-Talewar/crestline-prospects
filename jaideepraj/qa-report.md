# Jaideepraj Infrastructure: QA report (JR-S23, 2026-10-09)

## Source re-trace
Infomerics press release of 21 Feb 2025 re-downloaded (228,030 bytes), text extracted by script, pages 1, 2 and 4 checked as page images.
- Legal name "Jaideepraj Infrastructure Private Limited": p1 heading, image checked. Address "Mumbai": p4 (Corporate Office), image checked.
- 240.30 and 401.83 (FY23, FY24 total operating income), 47.94, 11.93%, 29.86: p4 table image. 67%: p2 text and image. 1229.48 Cr at 31 December 2024 and 3.06x: p2 image (printed "Rs.1229.48"; the pack prints the same digits as 1,229.48).
- Recomputed by script (trace.txt): 401.83 / 240.30 = 1.6722; 1229.48 / 401.83 = 3.06; 47.94 / 401.83 = 11.93%.
- Calc (calc/output.txt): 401.83 / 365 = 1.100904, printed 1.10; 10 days 11.01; 30 days 33.03. All five asserts failed visibly when broken, then passed clean. Temp script deleted; app git status shows only the two untracked docs entries.

## Basis match
Every figure is standalone FY24 or FY23 revenue-year data, plus the order book at 31 Dec 2024 as the source's own ratio. Revenue per day uses FY24 only. No figure from another basis.

## Deviations from fixed copy
1. Tagline "waiting" instead of "trapped" on p7 and p16, per step brief.
2. p8: no strip totals line; footer is "Illustrative stages." only, per brief and ruling.
3. p14: claims and arbitration line dropped, per brief. No scope card.
4. System name printed as "ERP" (no filing names one).
5. p7 lens figures: three lenses read "Not published" with a reason; lenses 01 and 02 carry the value of a day and the order book.
6. p11 finding tone printed as "SCENARIO"; sample owner line kept as "EXAMPLE".
7. p15: interest variant used; "Step waits on page 8 are not public and are not drawn" added in the sources text (fixed wording otherwise unchanged).
8. Template rule labels A1 to A14 renamed R1 to R14 (the label A3 would collide with the kept-out rating term); B1 to B5 added.

## Kept out, scanned
Rating grade, IVR, BBB, A3, limits, 143, 11.83, 79.05, gearing, 1.14, Dec-25, 288, Shrirampur, incorporat, proprietorship, "funds growth": zero hits in the prompt. Current ratio and cash (1.14x, 2.79) also left out. Scans run on the prompt with a planted hit that failed all checks visibly.
