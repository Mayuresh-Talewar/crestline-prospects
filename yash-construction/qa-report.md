# Yash Construction Co: QA report (YC-S23, 9 Oct 2026)

## Source re-trace
Acuite rationale of 29 Jun 2026 re-fetched raw from connect.acuite.in on 9 Oct 2026 (HTML, text extracted by script). Matched in the text: entity and address (Ajinkya City, Ambajogai Road, Latur 413 512); established 2008; unexecuted order book Rs 1543.19 Cr as on June 11, 2026; revenue 562.18 (FY26 Prov.) and 620.50 (FY25); operating margin 12.51 from 10.60 percent; PAT 41.12; debtor days 64 from 70; PWD of Maharashtra and NHAI. Printed as 1,543.19 (digit grouping only). Not image-checked: HTML page, no PDF.

## Recompute by script
562.18 / 365 = 1.540219; 10 days = 15.40 Cr (15.4022); 30 days = 46.21 Cr (46.2066); 64 less 10 = 54; 64 less 30 = 34. Printed per-day 1.5402 x 10 = 15.402 and x 30 = 46.206, both agree with the printed rounding. Calc asserts and five break tests: calc/yc-savings-output.txt. Temp script deleted; app git status shows only the two untracked docs entries.

## Scans on claude-design-master-prompt.md (script)
Placeholders 0, comments 0, internal references 0, jargon 0, dashes 0, point sizes 0, other prospect names 0 (planted-hit check of the scanner done first), kept-out terms 0, "design to reproduce" 0. Interest: the word appears only as "No interest is priced" and the rule on disclosed rates; no interest figure. Signed numbers: only the phone number prefix. Every number traced to the source text or the calc output; the only untraced tokens are the dash code points in a check rule and the phone number.
Pack scans: p13 has no digits except footer page numbers; p8 stage tiles carry name and tag only.

## Deviations from the fixed copy and the template
1. Tagline reads "waiting" (brief) on p7 and p16; the stored fixed copy says "trapped".
2. p14 "First sync" line reads "ranked list of waits"; the stored copy says "delays", a kept-out word. p14 claims and arbitration line dropped (brief).
3. p8 footer keeps "Totals are from published accounts" verbatim; the total is from a rating record. Flag for Garvis.
4. p15 headline and body use "one to three EPC projects"; interest variant used (no rate published).
5. p7 lens figures: four lenses read "Not published" with a reason; no ERP is named, so the accounting system prints as "ERP".
6. Template changes: section 2 and finish-check 10 removed and later items renumbered; wording of rules 1, 4, 5, 6, 7 and checks 2, 7, 11 changed to remove internal and jargon words; printed-copy marker is lines starting with >. No B rules added.
7. Partners not named individually (no title stated by Acuite); no logo.
