# QA report (VR-S23, 2026-10-12)

## Figures re-traced to raw source (re-downloaded 12 Oct 2026)
Form MGT-7 PDFs from vrsipl.com/investors/annual-reports, section V "Turnover and net worth", page image read for every year printed (FY21 p7, FY22 p7, FY23 p8, FY24 p7, FY25 p9 of 20; FY25 is image-only). Financial-year dates confirmed on each form. Entity name as printed: VELJI RATNA SORATHIA INFRA PRIVATE LIMITED.
Rupees to Cr by script: turnover 512.23, 650.19, 715.70, 895.90, 1,062.54; net worth 58.00, 123.57, 187.51, 234.91, 293.18. All match the pack.
Order book: Infomerics release 3 Dec 2024 (pr-VeljiRatna-3dec24.pdf), p2: "As of June 30, 2024 ... unexecuted order book of Rs. 3329.77 crore"; 6 states, 8 verticals. The "4.4 times" ratio and every other Infomerics figure are left out.
Recompute output:
[512.23, 650.19, 715.7, 895.9, 1062.54] [58.0, 123.57, 187.51, 234.91, 293.18]
2.9111 29.11 87.33 29.111 87.333
Calc: calc/vr-savings-output.txt (all asserts pass; each of six asserts broken once and failed visibly, then run clean). Temp script deleted; app git status shows only the two untracked docs paths.

## Charts
Used: Process map (every stage "Not public", no estimates, basis line printed, whole-bill line "Not public"); turnover and net worth series FY21 to FY25 as plain data; "With Crestline · ten days less / thirty days less".
Skipped: 1 cash cycle (no day measures), 2 pressure (no rate, no balances), 3 cash movement (no cash flow statement), 4 move together (no working-capital series).

## Deviations from the fixed copy
- Tagline "trapped" changed to "waiting" on p7 and p16 per the step brief.
- p14 claims and arbitration line dropped; pilot scope "One to three EPC projects".
- ERP system word: "ERP" (no filing names one). Interest variant of the p15 sources used.
- p8: each stage carries the words "Not public" (ruling VR-2 and user order override the brief's estimate rule); strip line is turnover and one day.
- p13 text only, no table, no figures.
- Scenario bars: "start at zero" not written, content-only order.

## Prompt scans (scripted, planted hits all caught)
placeholders ok 
comments ok 
internal HITS [('\\bVerified\\b', 1)]
jargon ok 
dashes ok 
pt ok 
design words ok 
other prospects ok 78 folders
kept out ok 
The design to reproduce ok 
interest figures HITS [('carry', 1)]
untraced numbers ['2013', '2014', '31', '91']
pages 16 chars 26977
Notes: "Verified" hit is the fixed copy "04 Verified:". "carry" hit is the word "carries" (not interest). Untraced numbers 2013 and 2014 are the Unicode references in the check list, 31 is "31 March", 91 is the phone country code.
