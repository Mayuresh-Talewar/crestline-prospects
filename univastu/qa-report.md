# Univastu India: QA report (UV-S23, 2026-10-09)

## Gate: composition of 153.8 Cr (page image, AR PDF p162, printed 160, note 16, consolidated)
Unbilled revenue 6,636.32 L; contract assets: actual work performed 65,529.42 less progress billing 56,782.77 = 8,746.65 L. Total 15,382.97 L = 153.83 Cr. HOLDS. Both lines sit in "Other current assets" on the consolidated balance sheet at 31 Mar 2026 (p145 total 16,150.14 L). The contract asset line is already net.

## Figures re-traced (page images, AR re-downloaded)
| Printed | Source | Result |
|---|---|---|
| 243.35 Cr, 171.18 Cr | P&L PDF p146: 24,334.86 L, 17,117.76 L | ok |
| 42% | MD message PDF p5: 42.16% | ok |
| 41.61 Cr, 17.10%, 25.69 Cr, 1,854 Cr | MD message p5 | ok |
| 80.63 Cr, 7.23 Cr | Balance sheet p145: 8,062.62 L, 722.77 L | ok |
| 66.36, 87.47, 153.8 | note 16 p162 | ok |
| 0.6667, 230.7, 220.7, 200.7, 6.67, 20.00 | calc output | ok |
| Quadra ERP across all project sites | PDF p46 (printed 44) | ok |
| Titles: Chairman & Managing Director, Chief Financial Officer | p5, p6 company information | ok (printed "and" for "&") |
| Address | p6 Registered Office, Pune-411038 | ok |
| MD quote | p5 | verbatim |

Script scan of the prompt: 0 placeholders, comments, internal words, en/em dashes or " pt"; 0 KEPT OUT terms; 0 other prospect names (planted hits caught in every scan); untraced numbers none (only year digits, 17.10, page numbers).

## Deviations from fixed copy
1. Tagline "Know where your money is waiting, and who can release it." replaces "trapped" on p7 and p16 (launch message).
2. p14 claims/arbitration line dropped (brief).
3. p8 footer "Strictly private · 8 / 16 · Illustrative stages."; no strip totals line; no upper card.
4. p7 lens figures: "Not published" for WC, P2P and Vendor, with a reason.
5. Pack headings "Keys"/"Checks" are not printed: the prompt carries only the pages. Footers added to non-fixed pages in the same pattern.
6. Template rules reworded to remove jargon words ("slot", "headline table", "Template fallback", ticket and file references); B1 to B6 added.
7. p15 uses the no-interest variant of the fixed sources paragraph.
8. Reader letters differ only in salutation and text; quote credited by name and title in edition B.

## Notes
- Report filing date: AR published August 2026 (data.md); month used, not a day.
- Contract asset days labelled everywhere as a Crestline measure, not an accounting standard.


## Deepen 2026-10-10 (DP-UV)

Source for every row: Univastu India Limited, Annual Report FY26 (17th), consolidated, Ind AS, re-downloaded 2026-10-10. Pages are PDF page (printed page). Image check = the number was read from a rendered page image and the printed subtotals re-added by script (arith: 64 checks, all pass). Cr = lakh divided by 100, rounded to 2 decimals.

| New figure (as printed) | Where printed | Source and page | Image check |
|---|---|---|---|
| ₹11.99 Cr; ₹5.66 Cr outflow | p3 row V, p6, p7 | Cash flow statement, PDF p148 (146): 1,198.73 L; (565.97) L | ok; 2,164.19 less 965.46 = 1,198.73 |
| ₹108.83 Cr; ₹70.51 Cr; ₹51.05 Cr | p6 | Same page: trade payables 10,882.88; current trade receivables (7,050.81); other current assets (5,104.74) | ok; all 15 working-capital lines re-added to (1,885.95) |
| ₹109.44 Cr | p4 | MD message, PDF p5 (3), "approximately 109.44 crore" (text and image page) | ok |
| ₹25.91 Cr; ₹20.85 Cr | p5, p6, p7, p12 | Note 7, PDF p158-159 (156-157): 2,591.03; 2,085.22, all not due | ok |
| ₹99.42 Cr; ₹152.00 Cr; ₹20.33 Cr; ₹43.08 Cr | p6, p7, p12 | Note 28 payables ageing, PDF p171 (169): 9,942.29; 15,199.73; 2,032.94; 4,308.10 | ok; ageing columns re-added to both totals |
| ₹4.97 Cr | p6, p7 | Note 16, PDF p162 (160): advances to suppliers of goods 497.43 | ok |
| ₹1.97 Cr | p6 | Note 10, PDF p160 (158): advances to other suppliers 197.45 | ok |
| ₹19.84 lakh; ₹23.97 lakh | p7 | Note 39.02, PDF p174 (172): MSME principal unpaid | ok; equals balance sheet MSME line |
| Quotes and policy wording | p4, p5 | Accounting policy 2.10 PDF p151-152 (149-150); MD&A risk section PDF p46 (44) | text layer read, no digits |

Kept out of the prompt by choice (in data.md only): payables more than a year past due (28.42 Cr, Crestline's arithmetic), receivable ageing, contract liabilities, working-capital limits and utilisation, interest rates, imports, net worth, JV, the call's spoken figures.

Scans (checks.py, planted hits caught): 0 other-prospect names, 0 KEPT OUT terms in added text, 0 en or em dashes, 0 design words; the one standing hit "auditor" is Crestline's own auditor on page 11 (unchanged from the backup). 14 backup lines changed, all intended (B4, B6, p3 lead and footnote, p4 and p5 and p6 footnotes, the four lens lines, p7, p12 and p15 footnotes and sources). Every other backup line is present. Page headings and the headline block are unchanged. The prompt carries no ">" lines, so the line check was run on every line instead. No new savings figure; the 10 and 30 day numbers are untouched.

STOP item for Garvis: AR note 26 (PDF p170, printed 168, image checked) publishes bank interest rates on the working-capital limits, so the standing wording "no borrowing rate is published" (page 12 footnote, page 15 sources, rule A6) is now out of date. It was left as it was, as the brief requires. Decide whether to change the ruling or the wording. See data.md, Depth, CASH side.
