# A B Infrabuild Limited: QA report (ticket AB-S23, 2026-10-12)

## Sources re-downloaded and re-traced
Annual Report 2025-26 (www.abinfrabuild.com/images/annual-report-2026.pdf), Annual Report 2024-25 (annual-report-2025.pdf), FY26 audited results (financial-results-march-2026.pdf), Acuite rationale 3 Jul 2026 (connect.acuite.in page). AR25 financial pages are images with no text layer, so balance sheet p.85, profit and loss p.86, cash flow p.87 and notes 6, 8, 9 p.94 were rendered and read as images; AR26 profit and loss p.78, cash flow p.79 and note 19 p.92 were rendered and read as images; the AR26 balance sheet p.77 and notes were traced on the text layer. Every printed figure was recomputed by script from the lakh values (days, working capital, cash and bank, multiples, ranks).

Printed figures confirmed: revenue 18,381.01 / 20,816.89 / 25,620.71 lakh; PAT 1,141.75 / 1,612.16 / 1,934.13; receivables 2,095.98 / 5,023.49 / 10,421.30; work in progress 5,051.40 / 8,111.31 / 11,053.69; payables 1,760.55 / 3,394.99 / 4,466.40 (MSME 284.06); retention 1,369.46 / 1,683.91 / 1,804.81; customer advances 915.73; operating cash flow 540.39 / (2,359.21) AR25 and (2,548.29) AR26 / (5,117.37); cash credit 6,118.05 / 8,524.87; rights issue 3,992.43; cash flow lines 5,397.81, 2,942.38, 1,071.42; order book 977.18 Cr and 3.81 times (Acuite).

## Deviations and small source findings
1. Tagline: the brief's "Know where your money is waiting, and who can release it." replaces "trapped" on pages 7 and 16 (fixed pages carry "trapped"). Revert if the fixed wording is wanted.
2. Page 8: the fixed line "Step waits are not public ... shows the stages, not A B Infrabuild's days" is kept verbatim, but the client's later order puts estimated days on the map, so the basis line, tags and one sentence on how to read each value were added. Page 15 sources: the fixed sentence "Step waits on page 8 are not public and are not drawn" was replaced by "On page 8, only Payment received is a published wait; every other stage value is an estimate scaled from it and is never priced."
3. Page 8 "Published" tag on Payment received = 148.5 days is Crestline's arithmetic on the published accounts (receivables ÷ revenue × 365); it is not a measured bill wait. The footnote on page 8 says "published debtor days".
4. "Scenario bars start at zero" (brief) is a drawing rule and is dropped under the content-only order.
5. AR25 prints FY25 revenue 20,816.88 and total current liabilities 11,016.31; AR26 comparatives print 20,816.89 and 11,016.30. Figures printed at 1 or 2 decimals in crore are unchanged either way (208.2; working capital 75.96). FY25 trade payables 3,394.99 (AR25) against 3,394.98 (AR26 components): not printed in lakh.
6. The days used by the simulator are the rounded inputs 157.5 and 148.5, so its cash cycle is 236.2; the exact figure is 236.1. Printed as 236.
7. Letter is dated 12 Oct 2026 (launch order, replaces 9 Oct).
8. Receivable ageing was NOT used: the bucket labels are ambiguous and the split overlaps the receivables-quality items in the sensitive file.
9. Registered office printed "Mumbai 400 104" (AR26 prints "Mumbai - 400 104").

## Charts
Used (catalogue names): (1) The cash cycle, page 9, Position and Simulate; (2) Pressure on the cycle, panel "No clock on these · ranked by size instead", page 12 (no cost figure, no disclosed rate); (3) Cash movement, annual, page 6, with the FY25 restatement footnote (no with-Crestline mark, no peak funding need); (4) How these four move together, page 5, working capital, cash cycle, cash and bank (no surplus line), scenario points from the calc; (5) Process map, page 8, from stage_estimate.py --dso 148.5 --cad 157.5, tags Published or Estimate. Plus the scenario results "With Crestline · ten days less / thirty days less" on page 10.
Skipped: surplus line (not published); stock leg of the cash cycle (no stock); carry cost version of chart 2 (no rate); monthly cash movement and peak funding need (annual data only); receivable ageing, indexed lines and peer pages (no chart in the catalogue, or no data).

## HOW lines
Two approved lines beside every With Crestline result: cover (Ranking), page 5 (Ranking), page 8 (Process map), page 9 (Unbilled work, Receivables, Ranking), page 10 (same three), page 11 (Receivables), page 12 (Ranking, Retention). Wording is copied from HOW-CRESTLINE-SAVES.md.

## Calc
calc\ab-savings.ts, output, break tests (five asserts, each failed visibly when broken) and lever-table.md. The temp file was deleted; the app's git status shows only docs/03-agent-scorecard.md and docs/onboarding/. The simulator computes both legs together as one run, so the combined scenarios are printed (14.04 and 42.12), labelled one scenario.

## Scans on the final prompt (scan.py, planted hits proved in the scan design by checking the same patterns on the file before the separator fix, which caught the template's rule lines)
0 placeholders, 0 comments, 0 internal references, 0 jargon, 0 em or en dashes, 0 spaced hyphens, 0 point sizes, 0 design words (navy, cream, gold, bar, card, tile and the rest of the list), 0 kept-out terms (also by substring: 15.3, 4.84, 180, 46%), 0 other prospect names (whole words, hyphenated and spaced forms), 0 "The design to reproduce". Interest appears only in "No interest is priced" lines and A6. Every number traced (142 distinct; the 42 not literally in data.md or the calc output were recomputed: multiples, crore conversions, rounded days, scenario days). Every ">" line of the pack is present in the prompt unchanged. 16 pages.

## Fixed copy
Unchanged apart from items 1 and 2 above, the p14 claims line (dropped as ruled), "{COMPANY}" filled as "A B Infrabuild", "{ACCOUNTING_SYSTEM}" as "ERP" (none named in the filings), the pilot scope as "one to three EPC projects", and the sample finding, root-cause subject, target and Ask question and answer on page 11.
