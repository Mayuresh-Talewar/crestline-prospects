# Bucon Engineers: qa-report.md (BU-S23, 2026-10-10)

Raw sources re-fetched 2026-10-10 (HTML, CRISIL Ratings): rationale 2 Sep 2025 (RR_368873) and 5 Jun 2024 (RR_342913); text extracted by script and read. No page images exist for HTML.

## Figures re-traced against raw text
| Printed | Raw text |
|---|---|
| ₹171.24 Cr operating income FY25 prov., ₹170.46 Cr FY24, ₹7.88 Cr PAT | KFI table, 2 Sep 2025 |
| ₹177.40 Cr FY23, ₹177.27 Cr FY22 | KFI table, 5 Jun 2024 |
| "₹170 Cr and ₹180 Cr" | "sustained revenue at Rs. 170 to 180 crores over the last four fiscal years", 2 Sep 2025 |
| more than ₹400 Cr, July 2025, next 2 fiscals | Strengths, 2 Sep 2025 |
| ₹56.74 Cr revenue till June 2025 | Weaknesses ("reported revenue till June 2025 of Rs. 56.74 Crs") |
| 290, 43, 56 days at 31 Mar 2025; retention and EMD after 2 to 3 years | Working capital-intensive operations paragraph |
| 4.69 and 14.07 Cr | calc/bu-savings-output.txt (4.6915 and 14.0745); recomputed independently in scan |

## Calc
Script calc/bu-savings.ts; five break-tests (negative release, interest, cross-check, payables, basis) each failed visibly, then the clean run passed all asserts. Temp file deleted; app git status shows only the two docs entries.

## Deviations from the fixed copy
1. Tagline "waiting" replaces "trapped" on p7 and p16 (brief ruling).
2. p14 claims or arbitration line dropped (brief).
3. p7 "Not published" lenses with a reason (brief); ERP printed as "ERP".
4. p8 STRIP_TOTALS and the upper card dropped; footer "Illustrative stages." only (launch message). All eleven stages kept.
5. p15 interest variant used; "revenue per day" defined as FY25 operating income per day (added sentence).
6. p14 kicker "TWELVE · TRUST" added (the fixed page has none).

## Deepen 2026-10-10
Both CRISIL rationales re-downloaded raw (HTML, so no page images; text extracted by script and read in full). Backups: claude-design-master-prompt.pre-deepen.bak, slots-unified.pre-deepen.bak. Image-check: not possible for HTML; each figure re-read against the extracted text.
| New printed figure | Source and section | Result |
|---|---|---|
| Mumbai and MMRDA regions give the majority of revenue | CRISIL 2 Sep 2025, Weaknesses, "Modest scale of operations" | matches text |
| Clients BMC, Adani Enterprises Ltd, MMRDA, CIDCO | CRISIL 2 Sep 2025, Strengths | matches text |
| Scope of work (pipelines, drainage, buildings, roads, bridges) | CRISIL 2 Sep 2025, About the Company | matches text |
| About ₹4.65 Cr cash and bank, 31 Mar 2025 | CRISIL 2 Sep 2025, Liquidity | matches text ("around Rs 4.65 crore") |
| About ₹17 Cr cash and bank, 31 Mar 2024 | CRISIL 5 Jun 2024, Liquidity | matches text ("around Rs 17 crore") |
| Current ratio 2.18 times, 31 Mar 2025 | CRISIL 2 Sep 2025, Liquidity | matches text |
| Order book more than ₹400 Cr, March 2024, next 2 to 3 fiscals | CRISIL 5 Jun 2024, Strengths | matches text |
Held back from print: limit utilisation (29% and 47%), 169 days and 124 to 140 days (different basis, never paired), cash accruals (expected values), rated limits, ratings. NOT FOUND list is in data.md "Depth".
Scripted checks (scratch check.py): 9 backup lines changed, all intended (p5 and p6 footnotes, p7 lenses 03 to 05, p9 lead and row count, p15 sources, p6 "Three items"); every other backup line present; 0 untraced numbers in the 25 added lines; 0 KEPT OUT, other-prospect, dash or design-word hits in added lines (planted: Capacite, BBB, navy, em dash, stretched, Ladhani all detected); the one "margin" hit is the fixed p14 line already in the backup; 16 pages, headings unchanged; prompt Content matches slots-unified.md.

## Notes
- The 5 Jun 2024 rationale gives gross current assets of 169 days on a different basis; never printed or paired.
- Day counts 43, 56, 290 are never added or priced; 290 is priced as one block only.
- Prompt scan (scratch scan.py): 0 placeholders, comments, internal references, other-prospect names, KEPT OUT terms (one "margin" is the fixed p14 line), interest figures, "design to reproduce"; pack byte-identical to slots-unified.md. Planted hits (Capacite, BBB, em dash, placeholder, pt, percent) all detected. Remaining hits are legitimate: "Verified" in the fixed ticket step, "2%" chart tolerance rule, "you said" inside a prohibition, "+91" in the phone number, markdown list hyphens.
