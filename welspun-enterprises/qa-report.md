# Welspun Enterprises: self-QA report (WE-S23)

Scope: slots-unified.md and claude-design-master-prompt.md. Basis: Welspun Enterprises Limited, CONSOLIDATED, FY26. Scans: scratch scripts (planted hit proven for every scan, then run on the prompt).

## Result of scripted checks on the prompt
Placeholders 0, comments 0, internal references 0, jargon 0, dashes (en, em, spaced hyphen, double hyphen) 0, point sizes 0, company names 0 (40 names, whole words), KEPT OUT terms 0, interest figures 0, "The design to reproduce" 0.
Hits inspected and cleared: "Verified" is the fixed ticket stage "04 Verified" (product copy, kept); "01" to "05" are fixed lens and step numbers; "2013" and "2014" are the template's own Unicode references for the dash check.
Number trace: every printed figure is in the allowed set below; recomputed by script: value of a day 9.9052 (printed 9.905); contract asset days 133.10; 10 days 99.0515 (99.05); 30 days 297.1545 (297.15); 133.10 less 10 and 30 = 123.1 and 103.1; revenue change 2.16% (2.2%); contract assets 11.63% (11.6%); receivables 76.02% (76.0%); 365 / 7.79 = 46.9 and 365 / 8.83 = 41.3. 10 x 9.905 = 99.05 and 30 x 9.905 = 297.15 tie exactly.
Calc: 5 asserts, each broken once and failing visibly (calc/we-savings-break-tests.txt), then clean (calc/we-savings-output.txt).

## Figures printed, with source (all from data.md, graded there)
Revenue 3,615.38 and 3,695.34 (AR FY26 p262); contract assets 1,318.41 and 1,181.07, receivables 592.20 and 336.43 (p354); PAT 392.77 (p352); EBITDA 845 (Q4 FY26 deck, 14 May 2026, p24); order book 18,729 (Q1 FY27 deck, 4 Aug 2026, p7); receivables turnover 7.79 and 8.83 (p122, p327); credit period 45 to 90 days (p431, standalone note); S/4HANA quote (call 15 May 2026, p7).

## Deviations and open items (read these)
1. **Page images NOT re-opened.** The Annual Report and decks are not in this folder (src holds only the dossier and logos) and the company site would not serve the PDF. Printed figures were traced to data.md, where step 1 grades them image-checked, and recomputed by script. Garvis's accuracy gate (reopen cover hero, per-day value, 10/30-day sources) still stands.
2. **Contract asset days is 133.1 (closing balance), not data.md's 126.2 (average balance).** The task ruled closing contract assets / value of a day. 126.2 is not printed anywhere. README WE-2 says "126.2"; flag for Garvis.
3. **Order book and EBITDA are cited to the investor presentations**, not the Annual Report, because that is where they are printed (README WE-2 said AR FY26 for the story as a whole).
4. **Fixed copy changed by ruling:** tagline "Know where your money is waiting, and who can release it." on pages 7 and 16 (fixed pages say "trapped"); page 14 claims/arbitration line dropped; page 8 has no upper card and no totals, so its footer reads "Illustrative stages." (fixed text adds "Totals are from published accounts."); page 15 interest variant now says "no average borrowing rate is published" (fixed text says "no borrowing rate"): WEL does publish lender spreads, so "average" keeps the line true. Page 14 carries one scope line (annuity and toll road assets outside the review).
5. **Address is the corporate office** (Welspun House, Lower Parel, Mumbai) for both readers. AR p94 prints both offices; that the MD and CFO sit in Mumbai is NOT verified from the report.
6. **Credit period 45 to 90 days** comes from a standalone-entity note; it is printed as "as stated" with the page, as a policy text and not paired with a consolidated total.
7. **Page 5 is history** (no scenario mark); the with-Crestline marks sit on pages 10 and 12, from calc values only. No scenario value is derived for revenue, so none is drawn there.
8. **Page 13** is text only, no numbers, no example (nothing sourced for peer proofs in this folder).
9. **Lens figures:** working capital, procure to pay and vendor read "Not published" with a reason; client shows only the stated credit period.
10. "2025-26" keeps its hyphen (the report's title); compounds such as "read-only" keep theirs. No dash is used as punctuation.
11. The S/4HANA quote keeps the source's lower-case "we" because it is mid-sentence in the transcript; credited to Mr. Abhishek Chaudhary, Chief Executive Officer, Transportation Vertical.
12. Not used on purpose: overdue share, payables and inventory days, 7.5% treasury return, gross debt, ICRA figures, dossier figures, sensitive-garvis.md items, any other group company.
13. Logo copied to assets/welspun-enterprises-logo.svg; only the colour file is referenced.
