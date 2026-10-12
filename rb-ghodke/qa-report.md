# RB Ghodke Infrastructure: self-QA (2026-10-09)

Method: scripts run with `python -I`. Raw Acuite text: the 3 Nov 2025 rationale re-downloaded and extracted by pymupdf. Every scan was first run on a planted text and detected every planted hit (placeholders, comments, company names, internal references, dashes and signed numbers, KEPT OUT terms, interest figures, the dropped design section), then run on the prompt.

## 1. Figures re-traced to the raw Acuite text
All 19 checks pass: date; revenue 313.50 and 120.16; PAT 22.26 and 7.28; operating margin 14.40%; order book 1,014 (3.23 times, 30 Sep 2025); H1 FY26 about 187; gross current asset days 102 and 91; debtor days 69 and 7; inventory 9 and 47; creditor 12 and 23; advance payment for cash discount; retention due within 3 months; ratings BBB+ / A2 from BBB / A3+; more than three decades; Chairman Mr. Ramprasad Ghodke; current ratio 2.11; limit use about 50 to 70% (six months to Sep 2025); standalone basis. One first-run miss (my regex ignored a parenthetical in Acuite's sentence) was fixed in the check, not in the copy.

## 2. Recomputed by script
Per day 313.50 / 365 = 0.858904 (prints 0.8589). 10 days 8.589041 (Rs 8.59 Cr). 30 days 25.767123 (Rs 25.77 Cr). 313.50 / 120.16 = 2.609 (prints 2.6 times). Equal to calc/rb-savings-output.txt (DSO 69 to 59, 69 to 39). Calc asserts: no negative release, interest 0, independent cross-check, payables release nothing; each was broken once and failed visibly, then the clean run passed.

## 3. Number trace
Every numeric token in the prompt Content traces to Acuite text, the calc output, data.md, a derived value above, or a structural number (page, 14 days, 30 minutes, phone). Untraced: none.

## 4. Basis match
All figures standalone, FY ends 31 March; H1 FY26 never beside a full year; no two figures on different totals; debtor days are Acuite's own measure, revenue per day stands in for invoiced value per day (stated in the footnote).

## 5. Prompt scans (clean counts)
Placeholders and comments 0; company names 0; internal references 0; dashes and signed numbers 0; KEPT OUT terms 0 (Parbhani, 22.07, 108.63, Parvati, 53.59, PWD, computed cycle, 45.1, website); interest figures 0; "The design to reproduce" 0.

## 6. Judgement calls for Garvis
- Pages with no published data use "Not published" with a reason (p7 lenses 04 and 05, p9 ageing, p10 client lens).
- p13 replaces the peer proof page with the public record (ratings, decades, limit use, current ratio); no ICR or debt figure is used.
- p14 kicker "TWELVE" and p15 kicker "TWELVE" follow the fixed copy and repeat.
- p8 footer reads "Illustrative stages." (the totals clause removed, as there are no totals).
