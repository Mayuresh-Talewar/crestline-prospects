# Om Power Transmission Limited: qa-report.md (OP-S23, 2026-10-12)

## Sources re-downloaded and image-checked
- AR 2025-26 (ompowertransmission.com, AR2025-26.pdf, 142 pages): re-downloaded this pass. Page images read: balance sheet p.108, profit and loss p.109, cash flow p.110, note 4 p.128, notes 8 and 9 pp.131 and 132, notes 17 and 18 pp.139 and 140, notes pp.141 and 142, chairman's message p.12, strategy p.27, projects p.21, management discussion pp.42 and 43. Address text from Corporate Information (text layer; the same line appears on several pages).
- AR 2024-25 (Om Power Transmission Private Limited, scanned, accounts signed 1 September 2025): re-downloaded from the company's reports page (Financial-Year-Annual-Report-2024-25.pdf). Balance sheet, profit and loss and cash flow pages read as images.
- "Older report for FY24": the site's 2023-24.pdf is an unreadable form file, so FY24 is taken from the FY24 comparative columns of AR 2024-25 (page images). Vintage is labelled in the pack.
- CRISIL rationale of 28 Apr 2026: downloaded, context only; no figure from it is printed (rating is kept out).

## Every printed figure, re-traced (scripted: scratch trace.py, 420 numeric tokens, 0 unexplained)
Unmatched tokens in the script were only the phone number, the date "31 March", list ordinals, and three working-capital figures the script did not list (21.25, 58.45, 110.30), each recomputed: current assets less current liabilities, FY24 8,456.83 less 6,331.60, FY25 13,044.21 less 7,199.04, FY26 31,030.63 less 20,000.57 (lakh).

| Printed | Source | Result |
|---|---|---|
| Revenue 449.16, 279.44, 182.76 | AR26 p.109 (44,916.49; 27,943.51), AR25 P&L (18,276.16) | match |
| EBITDA 57.11, 12.72%, PAT 40.02 up 81%, revenue up 61% | AR26 p.12 | match |
| Order book 621.28, book to bill 1.39x, all-time high | AR26 pp.12, 43 | match |
| Receivables 221.42 / 90.11 / 69.89; contract asset 24.05 / 6.68; inventory 15.91; payables 123.55 / 45.17 / 29.07 | AR26 pp.108, 128, 139; AR25 balance sheet | match (payables = micro and small part + others part) |
| DSO 179.9 / 117.7 / 139.6; contract-asset days 19.5; DIO 24.4; DPO 129.8; cycle 74.5 / 60.9 / 72.9 | recomputed by script (calc and scratch figs.py) | match |
| Cash from operations 3.53 / 16.87 / 25.63 outflow; first filed 12.45 | AR25 cash flow (353.08, 1,244.60); AR26 p.110 (1,686.96; (2,562.85)) | match |
| Receivables absorbed 134.71, vendors funded 78.02, inventories absorbed 8.44 | AR26 p.110 | match |
| Cash and cash equivalents 0.17 / 0.69 / 2.99 | AR25 BS (17.16, 68.58), AR26 p.108 (298.68) | match |
| Ageing FY26 and FY25 bands | AR26 p.131 total rows | match after one correction: one to two years FY26 is 7.99, not the 8.00 in data.md |
| Payables not yet due 108.41, unbilled 3.02 | AR26 p.139 (10,841.31; 301.67) | match |
| Vendor advances 4.55 / 3.42; customer advances 0.43 | AR26 note 6 (455.28; 341.88), note 18 p.140 (43.07) | match |
| Fresh capital 132.56; "around 75 days" quote; "long-term working capital and the reduction of leverage" | AR26 pp.26 and 27 images | match |
| Revenue per day 1.23, materials per day 0.65, payables base per day 0.95; 12.31, 36.92, 6.52, 31.13, 245.47 | calc output; 221.42 + 24.05 | match |
| Stage values 0.9 1.3 0.7 1.7 0.9 1.7 11.2 1.1; 179.9; whole RA bill 199.4 | stage_estimate.py output (calc/stage-estimate-output.txt) | match |
| Address, titles, names | AR26 Corporate Information and signature pages | match ("Kanu Patel" signs the statements; "Kanubhai Patel" is the printed name and title elsewhere) |

## Deviations found in our own files (corrected in data.md)
1. Per-day values in data.md were ten times too large (12.31, 6.52 and 9.52 are ten days). Pack uses 1.23, 0.65, 0.95.
2. Ageing one to two years FY26: 7.99.
3. Contract-asset wording is on printed p.142.

## Calc
Script and full output in calc/. 10 asserts plus break tests: BREAK 1 to 10, each fails visibly (calc/op-savings-breaktests.txt); clean run all pass. Temp script deleted by its exact name; app git status shows only the two untracked docs paths. priceLevers ran; its only action prices stock at revenue per day, a base the rules forbid for stock, so its number is excluded and the ranking is by cash released once (lever-table.md).

## Deviations from the fixed copy (all deliberate)
1. Tagline: "Know where your money is waiting, and who can release it." replaces "trapped" on pages 7 and 16, as the brief ordered.
2. Page 8: stage values with Published or Estimate tags, the basis line and the whole RA bill line are added, and the fixed line "Step waits are not public ... not the company's days" is replaced by the estimate basis line, because the later order (12 Oct) requires estimates. The basis line is the script's own line with the company's name in place of "the company's".
3. Page 8 footer: "Estimated stages. Totals are from published accounts." (fixed: "Illustrative stages.").
4. Interest sentence: "no single borrowing rate is published" (fixed variant: "no borrowing rate is published"), because a range is published and is kept out.
5. Page 14: the claims and arbitration line dropped, as ordered. Page 13 is text only, with "No numbers on this page."
6. "Scenario bars start at zero" is a drawing instruction and is omitted under the content-only order.
7. Page 7 lenses 04 and 05 carry "not published" with a reason (client payment terms, vendor credit terms).
8. Accuracy rule labels A1 to A14 renamed "Accuracy 1 to 14": the label "A2" is on the kept-out list.

## Charts
Used: (1) The cash cycle, Position and Simulate (p4). (2) Pressure on the cycle, second panel "No clock on these · ranked by size instead" only (p9). (3) Cash movement, annual (p6). (4) How these four move together, three year-ends, no surplus line (p5). (5) Process map with estimates and whole RA bill (p8). Plus "With Crestline · ten days less / thirty days less" (p10) and the ranking (p12).
Skipped: Pressure on the cycle, cost panel (no single borrowing rate); monthly cash and peak funding need (annual data only); surplus line in chart 4 (not published); retention on the size panel (no separate balance).

## Scripted checks on claude-design-master-prompt.md (output in calc/prompt-check-output.txt)
0 placeholders, 0 comments, 0 en or em dashes, 0 spaced hyphens, 0 " pt", 0 internal references, 0 "design to reproduce", 0 content-only drawing words (navy, cream, gold, Poppins, italic, dashed, hollow, hatched, card, pill, dumbbell, slider, axis, curve and the rest), 0 kept-out terms (bank return, mismatch, GST, VAT, CARO, guarantee, trigger, 250 days, 252, 64.0%, 93%, GETCO, top customer, top ten, MSME, 44.34, 9.20, 11.80, BBB, A2, 744.6, 71.5, 58 projects, rating, range), 0 interest figures. Jargon scan: one hit, "Verified" in the fixed product line "04 Verified: Closed only when the number moves", which is product copy. Other prospect names (every folder name in the prospects directory, whole words, hyphen and space forms): one hit, "patel", 3 times, all in the reader name "Mr. Kanubhai Patel" and its salutation, which are mandatory. Planted hits (another prospect name, GETCO, 252 days, MSME, an em dash, navy, pt, a brace placeholder) were all caught on a copy. Cross-company scan of the other new docs: 0 hits apart from the same reader name in slots-unified.md.
Page count: 16 page sections. Editions differ only in cover reader lines, page 2 address block and salutation, and letter.

## Judgement calls
- No named client or utility appears anywhere (README keeps out the client's name; the logo list on p.21 was left out rather than picked through).
- ERP is written "ERP": no filing names it.
- Nothing from CRISIL is printed.
