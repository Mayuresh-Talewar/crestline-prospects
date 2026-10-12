# QA report (NC-S23, 2026-10-09)

Source re-downloaded: Annual Report FY26, https://niraj.co.in/wp-content/uploads/2026/09/28th-Annual-Report_2025-26.pdf (scratch NC-S23). Page images re-read: statement of profit and loss (printed p68) and Note 47 ratios (printed p97). Text layer used for MD, CFO, office address, joint venture list (13 named, Note 31).

## Figures re-traced
- 540.44 / 506.72 / 470.22 Cr, 21.60 Cr PAT, 70.76 Cr, 385.37 Cr: recomputed from Rs Lakh by script (recompute output matched). FY24 revenue 47,021.71 Lakh is from Annual Report FY25 per data.md (not re-opened here).
- Ratios 7.76 and 8.11 seen on the Note 47 page image; 365/7.76 = 47.0, 365/8.11 = 45.0 by script.
- JV share 71.3% printed as 71%. Per day 1.4807 printed 1.48; 10 days 14.81; 30 days 44.42 (calc output, cross-check equal).
- Basis: 70.76 is the closing balance, 47.0 days is on the average balance; both are labelled where they share a page (pages 4, 5, 7, 8, 15). Never combined into one figure. Creditor days not printed.
- Title and names: Managing Director and Chief Financial Officer as in AR FY26. CFO spelling "Vinaykumar Ghuwalewala" as in the FY26 signature block. Legal name "Niraj Cement Structurals Limited" confirmed in AR FY26.

## Scripted prompt scan (check.py, planted hit caught first)
placeholders 0, comments 0, internal references 0, jargon 0, dashes 0, point sizes 0, other prospect names 0, KEPT OUT terms 0, "The design to reproduce" 0, interest rate figures 0. Untraced numbers listed: only 20, 31 (Note numbers), 2013, 2014 (Unicode reference), 24, 25, 26 (inside FY24 to FY26). Full output: below.

## Deviations from the fixed copy
1. Tagline changed to "Know where your money is waiting, and who can release it." on pages 7 and 16 (step brief).
2. Page 14: claims and arbitration line dropped (brief); scope card omitted.
3. Page 8: no upper card, tiles carry name and tag only.
4. Accounting system printed as "ERP" (no filing names one).
5. Fixed copy converted from ">" lines to quoted printed lines. Page 11 "04 Verified" kept as fixed copy (the scan substitutes it).
6. Pages 1, 2 (labels), 3, 4, 5, 6, 9, 10, 12, 13 are new copy; p9, p10, p12 describe product behaviour only as in the product context.
7. Template rules reworded for the prompt: footnote tag rule, slot, headline table, Template fallback, status words; B1 to B4 added.

## Weak points
- FY24 figures and the JV note numbers rest on data.md's earlier page check.
- Calc script imports app code, runs only inside the repo; temp copy deleted, app git status clean.

Check output:
PLANT misses: []
placeholders 0 []
comments 0 []
internal 0 []
jargon 0 []
dashes 0 []
pt 0 []
others 0 []
kept_out 0 []
design_repro 0 []
interest_rate 0 []
UNTRACED numbers: ['20', '2013', '2014', '24', '25', '26', '31']
ALL CLEAN []
