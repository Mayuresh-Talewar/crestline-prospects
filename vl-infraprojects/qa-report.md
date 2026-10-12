# QA report: V.L. Infraprojects, VL-S23, 12 Oct 2026

## Sources re-downloaded and image-checked
- AR 2025-26 (vlil.in, 120 pages): printed pp.83 (balance sheet), 84 (P&L), 85 (cash flow), 91 (Notes 7, 8, 9), 93 (Note 13), 94 (Notes 14 to 18), 96 (Note 23) viewed as page images and matched to the text layer; Note 19 (p.95) and the management discussion read from text. Registered office line and titles read from the text.
- AR 2024-25 (vlil.in), cash flow p.85, image-checked. AR 2023-24 (vlil.in), cash flow p.78, image-checked.
- Every figure printed in the prompt was traced by script to those values (calc and recomputation): the only numbers not traced to a balance or a computation are dates, page references, the 365-day count, the phone number and page footers.

## Recomputed by script
Days: unbilled 120.75 (120.8), receivables 56.36 (56.4), inventory 59.41 (59.4), payables 38.49 (38.5), GCA 218.08 (218.1); FY25: 120.68, 52.97, 19.85, 46.32, 212.51. Stuck total 72.66, unbilled share of assets 46.7%, unbilled over receivables 2.14. FY23 revenue 45.56 = 11,393.16 less 6,837.47 lakh. Cash flow lakh to Cr as printed. Calc asserts all pass; seven break-tests each failed visibly (calc\break-tests.txt); temp script deleted, app git status shows only the two untracked docs entries.

## Charts used
1 The cash cycle (p5, p10 Simulate); 2 "No clock on these · ranked by size instead" (p9); 3 Cash movement, annual FY23 to FY26 (p6); 5 Process map with the WHOLE RA BILL line (p8).
## Charts skipped
4 How these four move together: skipped by ruling (basis break at FY25). Chart 2's cost panel: skipped, no single borrowing rate.

## Deviations and decisions
1. Reader A title printed as "Chairman, Managing Director & CEO" (the Chairman's own signature in AR p.8/10 letter). The AR prints three forms; the launch wrote "and CEO".
2. "Retention" appears twice, both in fixed product copy (p7 intro, p8 stage name RETENTION RELEASED). No retention figure printed. The KEPT OUT list and the fixed-copy rule conflict here; fixed copy kept.
3. Fixed p8 sentence "Step waits are not public ... not V.L. Infraprojects' days" replaced by the estimate wording, because the 12 Oct order puts labelled estimates on the map.
4. Tagline on p7 and p16 is the brief's "waiting" line, replacing the fixed "trapped" line.
5. Process map basis line: the script says "published debtor days"; the company publishes no day counts, so the line says Crestline's arithmetic on the published accounts. PAYMENT RECEIVED keeps the tag "Published" per catalogue; the footnote says the anchors are Crestline's arithmetic.
6. The stage estimates sum to 120.7 (script, rounded stages) against the 120.8 anchor; printed as the script prints it, footnoted.
7. priceLevers not run (needs a built position; carry is zero). Ranking is by cash released once; certification and collection tie.
8. Letter dated 12 Oct 2026 (launch), not the 9 Oct in the generic brief.
9. depth.md says unbilled revenue is larger than net worth: false (49.54 against 50.33). Not printed. data.md borrowing proceeds 6.07 collide with a KEPT OUT figure; not printed.
10. CFO name: the report prints "Thallada Vamshikrishna" at the signature and "Vamshikrishna Thallada" in the KMP table; the launch form is used.
11. FY24 working-capital lines are grouped differently in AR 2024-25 (totals unchanged); footnoted on p6.
12. Edition letters differ only as ruled; the quote on p3 and p6 is credited by name and title, never "you".

## Scans on the prompt (check.py, planted hits caught first)
0 placeholders, comments, dashes, " pt", design words, "design to reproduce", other-prospect names (66 folder names, whole words). Remaining hits, all fixed product copy: "Verified" (p11 step name), "retention" and "RETENTION" (p7, p8). Interest: only "no interest is priced" statements.
