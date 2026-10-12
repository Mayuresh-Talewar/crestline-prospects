# Garuda: self-QA report (GA-S23, 2026-10-09)

## 1. Printed figures traced to the page image
Both Annual Reports were downloaded from the BSE files named in data.md and each page below was rendered and read as an image. Pages are printed page numbers (AR25 pages carry the stamp "N of 192").

| Printed figure | Where printed | Page image shows | Result |
|---|---|---|---|
| Revenue from operations FY24 154.18; PAT 36.44 | p3 row i | AR25 p.119 of 192: 15,417.83 and 3,643.53 lakh | Match |
| Revenue FY25 225.03; PAT 49.80 | p3, letters | AR26 p.112: 22,503.01 and 4,980.48 lakh | Match |
| Revenue FY26 530.72; PAT 122.54 | cover, p3, letters | AR26 p.112: 53,071.52 and 12,254.11 lakh | Match |
| Contract assets 218.91 (31 Mar 2026) and 96.13 (31 Mar 2025) | p4 to p13, letters | AR26 p.131 Contract Balances: 21,891.23 and 9,613.25 lakh; AR26 p.124 Note 10 "Contract Assets, Revenue in Excess of Billing": same | Match |
| Trade and other payables 116.86 | p7 | AR26 p.111: 11,685.60 lakh ("Other than Micro and Small Enterprises"; MSE line nil) | Match |
| 97 employees incl. managing director | p3 | AR26 p.53 text read on the image | Match |
| Registered office, 201, A Wing, Fortune 2000, C-3 Block, BKC, Bandra (East), Mumbai 400051 | reader table | AR26 p.3 (and the cover page, PDF p.2) | Match |
| "Chairman & Managing Director" | edition A | AR26 p.5, signature under the Chairman's message (p.3 and p.25 print "Managing Director and Chairman") | Match, exact form from p.5 |
| "Whole Time Director and Chief Financial Officer" | edition B | AR26 p.21 (appointment as "Whole Time Director and Chief Financial Officer"; p.3 and p.91 print "Whole Time Director & CFO", p.25 prints "Whole-time Director and Chief Financial Officer") | Match |
| Tally for books of account | sources | AR26 p.100 auditor's report, "has used Tally Edit Log for maintaining its books of account" | Match |
| Order book 3,461 at 27 October 2025 | p5 | Company presentation dated 28 October 2025, slides 5 and 15, per data.md. NOT re-opened in this run (the deck is not in the folder) | Carried from GA-1, flag for the accuracy gate |

Both exact titles were verified in AR26 before use (the ruling's "Whole Time Director & Chief Financial Officer" is not printed anywhere in that form; the p.21 wording is used).

Correction to data.md: it cites contract assets at "AR26 PDF p.133". PDF p.133 is Note 29 (employee benefits). The correct pages are PDF p.132 (printed 131, Contract Balances) and PDF p.125 (printed 124, Note 10); the auditor's key matter on PDF p.96 repeats 21,891.23 and 9,613.25 lakh. Not printed in the booklet.

## 2. Recomputed by script (python, independent of the TypeScript calc)
- per day 530.72 / 365 = 1.4540
- 10 days 14.5403 prints 14.54; 30 days 43.6208 prints 43.62
- contract asset days 218.91 / 1.4540 = 150.5542 prints 150.6; less 10 = 140.5542 prints 140.6; less 30 = 120.5542 prints 120.6
- payables 11,685.60 lakh / 100 = 116.86
All agree with calc/garuda-savings-output.txt (clean run: all asserts passed; five break runs each failed visibly: negative release, interest not zero, cross-check mismatch, payables released cash, basis mismatch). The temporary script in the app repo was deleted by name; git status there shows only "?? docs/03-agent-scorecard.md" and "?? docs/onboarding/".
Basis: revenue and contract assets are both standalone FY26 (balance at 31 Mar 2026 against revenue for the year to the same date). No interest is priced anywhere.
Chart scale: p5 bars 150.6 / 140.6 / 120.6 and p12 bars 218.91 / 14.54 / 43.62 each start at zero on one scale per chart; p3 columns 154.18 / 225.03 / 530.72 start at zero (history only).

## 3. Scripted scans on claude-design-master-prompt.md (scratch scan.py, output in the run log)
0 placeholders; 0 comments; 0 company names (37 listed, whole words, case-insensitive); 0 internal references; 0 template jargon; 0 en or em dashes (and no spaced hyphen); 0 KEPT OUT terms (receivable, debtor, related part, pledge, 91.8, 48.7, 220.63, 240.41, 29.4, 4,336.72, 4,876.78, 226.76, 107, 204, 217, 9%, ICD, IPO); 0 interest figures; 0 "The design to reproduce". Every scan was proven with a planted hit that it caught. Numbers in the Content region not in the traced set: 01 to 05 (lens numbers) and 201 (street address) only.
Real hits found and patched before the clean run: "tag" (the page 8 instruction and rule A3 said "tag"; changed to "ownership label") and "master" (title line; changed to "brief"). Both were genuine template wording, not false alarms.

## 4. Deviations from the fixed copy and the template
Fixed pages (FIXED-PAGES.md):
1. p7 and p16 tagline reads "Know where your money is waiting, and who can release it." (fixed copy says "trapped"). Lens 04 reads "WHO WAITS LONGEST · Which clients wait longest, and why." (fixed: "WHO PAYS SLOW"), to keep the story off payment behaviour.
2. p7 lens figures: 01 and 04 and 05 read "Not published" with a reason; 02 and 03 print published balances.
3. p8: no upper card; strip label reads "CRESTLINE'S VIEW · THE STAGES ONLY · NOTHING FROM YOUR ERP" (fixed: "VIEWS · DRAWN ON ... PUBLISHED FIGURES"); the totals line is dropped; footer reads "Illustrative stages." (fixed adds "Totals are from published accounts"). Stage tiles carry name and ownership label only.
4. p14: claims and arbitration line dropped (client order); one sentence added to the lead, "Tally will feed Crestline, read-only."; no extra scope card; kicker "TRUST · READ-ONLY" added (the fixed page gives none).
5. p15: interest variant shortened to "No interest is priced." The fixed text adds "because no borrowing rate is published", which would be false for this company; dropped. Sources paragraph is the full list with dates and pages.
6. p11: sample finding, target and question filled from the calc; tone word "WATCH".
Template (MASTER-PROMPT-TEMPLATE.md), content-only edits: design section and finish-check 10 removed, numbering closed up; rule 1 "slot" to "field"; rule 4 "tag" to "marker"; rule 5 example list shortened; rule 6 rewritten without internal-reference words; rule 7 examples changed; rule 9 ownership verbs follow the ruling (measures, prepares, reviews, submits, invoices; the template said "escalates"); rule 10 and finish-check 9 fixed to the supplied logo; A1 names Tally; A3 "tag" to "label"; A13 excepts telephone numbers; logo line and header filled; "master" removed from the title.
Content (this company): chapter four (latest quarter) replaced by "What a day is worth" because the filed Q1 FY27 results were not read; pages 9, 10, 12 and 13 written from the calc and the Annual Report only (no ageing, peer, proof or promise content); footer for pages without their own is stated once under Keys.

## 5. Open items for the accuracy gate
- Order book figure and date: re-open the 28 October 2025 presentation, slides 5 and 15.
- Tally "will feed, read-only" is wording only; the adapter does not exist until the pilot.
- "Not published" on lenses 01, 04, 05 rests on GA-1's NOT FOUND list (no company-stated working-capital days) and on the booklet's own reasoning for client and vendor waits; confirm if the client wants it tighter.
