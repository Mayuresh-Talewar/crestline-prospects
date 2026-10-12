# Transrail Lighting: self-QA report (TR-2, 2026-10-09)

Verdict: PASS on all scripted checks. Two items for Garvis below.

## 1. Figures re-traced on a rendered page image (read by eye) and recomputed by script
| Figure printed | Page image | Recompute |
|---|---|---|
| Working-capital days 53, 73, 91, 81, 85; no basis label | Deck PDF p.19 (printed 18) | read only |
| Revenue 6,880 consolidated, FY26 | Deck PDF p.15 (printed 14) | recalc-out: 6,779.95 plus 100.16 = 6,880.11 |
| Revenue from operations 6,779.95 and 100.16 other operating | AR PDF p.248 (printed 277) | same |
| Standalone revenue 6,778.47 / 5,212.11, other operating 100.16 / 95.52 | AR PDF p.160 (printed 189) | 6,878.63 / 5,307.63, growth 29.60% (recalc) |
| Trade receivables 1,739.48 / 1,317.14; contract assets 2,515.24 / 2,521.97 | AR PDF p.159 (printed 188) | growth 32.06% (recalc) |
| Ageing under 6 months 1,565.65; 6 to 12 months 91.54 | AR PDF p.180 (printed 209) | read only |
| Contract assets note wording | AR PDF p.185 (printed 214) | 36.56% of consolidated revenue (recalc) |
| Debtors turnover 3.96 | AR PDF p.33 (printed 61) | 92.19 days (recalc) |
| Cash credit nil, WCDL 252.49 at 31 Mar 2026 | AR PDF p.198 (printed 227) | cap 252.49 |
| 10.31% p.a. average, cash credit and WCDL | AR PDF p.199 (printed 228) | interest 19.43 and 26.03 (recalc and output.txt agree) |
| Net debt 267 and 548 | Deck PDF p.19 | read only |
| Quote, CFO, 81 from 91 | Q4 call PDF p.6, speaker label on PDF p.5 | exact text matched |
| Quote, CFO, contract assets contents and direction | Q1 call PDF p.12 | exact text matched |
| Quote, CFO, net debt and delayed collections | Q1 call PDF p.16 | exact text matched |
Every number in problems.md, solutions.md and webapp-fit.md was traced by script against data.md, depth.md, calc/output.txt and src/tr-calc-out.txt. Untraced by the script, checked by hand: page numbers 198 and 227 (page images above), "about 133" (133.44 rounded), and list numbering.

## 2. Calc checks
- Five asserts, each broken once and each failed (calc/break-tests.txt), then the clean run passes (calc/output.txt, exit 0). A separate Python recompute (calc/recalc-out.txt) agrees to the cent.
- Basis match: revenue per day is consolidated 6,880.11 / 365 = 18.85; the deck that prints the days is consolidated and shows the same 6,880. Deck p.19 itself states no basis: recorded as NOT STATED, not guessed.
- Cash credit plus WCDL cap: verified at 0 plus 252.49 = 252.49.
- Rows never added: stated in solutions.md and calc/notes.md; no total across rows appears anywhere.
- A12 (no invented chart values): every mark is a calc output; no step without data is drawn with a number. A13: each problem has today and with-Crestline marks with days, cash, interest with its condition, dashed and labelled "Scenario, not a forecast".
- Payables: no row, no release.
- Temp script deleted by exact name; git status in the app repo shows only the 2 pre-existing entries.

## 3. Text scans (scripted; a planted file with hits for every pattern was caught first, and a word containing "oval" inside "approval" was correctly not flagged)
- Dashes: none in prose (only table-rule and code-operator characters).
- Company names list: 0 whole-word hits.
- KEPT OUT terms (the README list, items 1 to 6 of the sensitive file plus the excluded cycle figure and borrowings line): 0 hits in the deliverables. The term list lives in the scratch scan script, not here.
- No figure from the excluded external source appears in the deliverables.
- The ERP name appears once, in the approved phrase "will feed ... read-only, built during the pilot" in webapp-fit.md.
- Signed numbers: none in prose. break-tests.txt shows negative cash values because that is the deliberate failure output.

## 4. For Garvis
1. Basis of management's days is not stated on deck p.19; consolidated is inferred from the deck's own P&L page. The gap to standalone revenue is 0.02%.
2. Process slip: while checking whether a worked-example calculator existed, I listed one sub-folder of another company's folder (file names only, nothing opened). No content was used.
