# Patel Infrastructure Limited: qa-report.md (PI-S23)

Sources re-downloaded on 2026-10-12 from patelinfra.com (Financial Reports): "Annual Report 2024_2025.pdf" (219 pages) and "Annual Report 2023_2024.pdf" (201 pages), standalone statements. Every printed figure was re-read from page images (balance sheet, profit and loss, cash flow, Notes 11.6, 12, 13, 15, 18, 18.2, 22, 23, 23.7, 24, 29, 33) and then recomputed by script (scripts in the session scratchpad, results below). Printed page = PDF page minus 1 in the FY25 report, plus 1 in the FY24 report. The temporary calc file was deleted by exact name; app git status shows only "?? docs/03-agent-scorecard.md" and "?? docs/onboarding/".

## Figures re-traced (₹ lakh as printed, then ₹ Cr)
| Figure | Raw (lakh) | Printed in booklet | Source page |
|---|---|---|---|
| Revenue from operations FY25 / FY24 / FY23 | 3,57,665.25 / 2,95,073.50 / 1,98,380.23 | 3,576.65 / 2,950.74 / 1,983.80 | AR25 p.54; AR24 p.62 |
| Profit after tax | 12,322.49 / 7,259.65 / 6,202.10 | 123.22 / 72.60 / 62.02 | same |
| Trade receivables | 31,619.02 / 17,802.18 / 52,833.12 | 316.19 / 178.02 / 528.33 | AR25 p.53; AR24 p.61 |
| Unbilled revenue (contract assets) | 65,748.48 / 71,633.03 / 50,910.32 | 657.48 / 716.33 / 509.10 | AR25 p.81, p.101; AR24 p.86 |
| Inventory | 46,430.85 / 49,971.93 / 32,530.60 | 464.31 / 499.72 / 325.31 | AR25 p.53; AR24 p.61 |
| Material consumed | 1,27,756.70 / 99,940.24 / 61,810.45 | 1,277.57 / 999.40 / 618.10 | Note 29, AR25 p.98; AR24 p.99 |
| Construction expenses | 2,98,046.79 / 2,41,769.74 / 1,58,505.46 | 2,980.47 / 2,417.70 / 1,585.05 | AR25 p.54; AR24 p.62 |
| Trade payables | 31,794.52 / 44,169.90 / 50,511.81 | 317.95 / 441.70 / 505.12 | AR25 p.53, p.95; AR24 p.61 |
| Cash and cash equivalents | 898.55 / 6,333.03 / 2,298.69 | 8.99 / 63.33 / 22.99 | AR25 p.53, p.80; AR24 p.61 |
| Operating profit before WC changes | 35,248.54 / 34,786.93 / 19,673.55 | 352.49 / 347.87 / 196.74 | AR25 p.55; AR24 p.63 |
| Cash generated from operations | 8,855.82 / 21,446.83 / (17,684.67) | inflow 88.56 / inflow 214.47 / outflow 176.85 | same |
| Net cash from operating activities | 3,661.38 / 16,321.42 / (20,506.94) | inflow 36.61 / inflow 163.21 / outflow 205.07 | same |
| Receivable ageing FY25 | 30,376.40; 1,213.13; 237.65; gross 31,827.18; allowance 208.16 | 303.76; 12.13; 2.38; 318.27; 2.08 | Note 11.6, AR25 p.79 |
| Receivable ageing FY24 | 16,495.69; 139.44; 325.22; 937.42; gross 17,897.77; allowance 95.59 | 164.96; 1.39; 3.25; 9.37; 178.98; 0.96 | same |
| Customer advances | 9,616.60 + 10,377.82 | 199.94 | Note 33b, AR25 p.101 |
| Deposits and retention money, asset / liability | 23,293.99 / 18,916.89 | 232.94 / 189.17 | Note 13 p.80; Note 24 p.96 |
| Advance to suppliers | 3,854.16 | 38.54 | Note 15, AR25 p.81 |
| NCD rate and amount | 12.75%; carrying 11,404.51 + 4,966.14 + 991.70 = 17,362.35 | 12.75%; ₹173.62 Cr | Notes 18.2, 18, 22, AR25 p.86, 84, 90 |
| SAP S/4 HANA sentence | text | quoted | Directors' Report, AR25 p.21 |
| Founded 1972; solar diversification | text | text | Directors' Report, AR25 p.13 |
FY24 payables print 41,817.42 lakh in AR25 and 41,817.43 in AR24; the AR25 figure is used (total 44,169.90).

Days recomputed from raw lakh (script): FY25 DSO 32.27, contract asset days 67.10, DIO 132.65, DPO 38.94; FY24 22.02, 88.61, 182.51, 66.68; FY23 97.21, 93.67, 192.10, 116.32. Printed to one decimal. Cycle is the sum of the printed legs: 266.7, 226.4, 193.2 (unrounded 266.66, 226.45, 193.08).
Chart 2 cost = min(balance, 173.62) × days ÷ 365 × 12.75%: stock 8.05, certification 4.07, receivables 1.96 (script).
₹973.67 Cr = 316.19 + 657.48. ₹263.93 Cr = 352.49 − 88.56 (printed lines; 74.9% = 26,392.72 ÷ 35,248.54).

## Calc (calc\pi-savings.ts, output in calc\pi-savings-output.txt)
All asserts pass: no negative release, interest capped at ₹22.14 Cr (173.62 × 12.75%), independent days × per day cross-check on the raw lakh, payables never release cash (asked 90 days, held at 38.9, cash 0.00), basis matches (days recomputed within 0.05; cycle identity 193.2), no lever priced on a base it does not belong to. Each assert broken once and failed visibly (calc\pi-savings-break-tests.txt). Clamp bounds read first: certification min 0 max 93.94, collection min 0 max 62.30, materials min 0 max 199.05, vendor credit held at 38.90; no terms passed. The calc input for materials was README's 1,277.6; the booklet prints 1,277.57 (the exact line); results are identical at printed precision (35.00, 105.01).
Per-day values print to three decimals (9.799, 3.500) so 10 × 9.799 reads 97.99.

## Process map (python -I _shared\stage_estimate.py --dso 32.3 --cad 67.1)
JOINT MEASUREMENT 3.1, MB / QS CHECK 4.4, RA BILL PREPARED 2.3, REVIEW STARTED 5.7, REVIEW COMPLETED 3.1, BILL SUBMITTED 6.0, CLIENT ACKNOWLEDGED 38.5, CERTIFIED 4.0 (all Estimate); TAX INVOICE RAISED no value; PAYMENT RECEIVED 32.3; RETENTION RELEASED Not public.
WHOLE RA BILL: 99.4 days = 67.1 days before the invoice (Estimate) + 32.3 days to be paid. The eight estimates sum to 67.1 exactly (anchored on contract asset days).

## Charts used and skipped
Used: (1) The cash cycle; (2) Pressure on the cycle, with the 12.75% panel capped at ₹173.62 Cr and "No clock on these"; (3) Cash movement, annual only, three years; (4) How these four move together (cycle, DSO, DIO, cash and cash equivalents, three year ends); (5) Process map; plus "With Crestline · ten days less / thirty days less".
Skipped: monthly cash movement and peak funding need (no source states one; annual only); working capital as a line in chart 4 (the README names cycle, DSO, DIO and cash only); any peer chart (no other company's data).

## Deviations from the fixed copy and the brief (each justified)
1. p8: the fixed copy says stages carry no day values and "Step waits are not public". The client order of 2026-10-12 (estimates, whole RA bill) supersedes it, so the stage values are printed with tags, the closing fixed sentence is replaced by the measure-once-connected line plus "Estimates are never priced", and the footer reads "Estimates are tagged. Figures from the accounts are Crestline's arithmetic." The upper card is absent; no stage tile carries more than its name, owner, value and tag.
2. p8 basis line: the script says "published debtor days ... published contract asset days". These two measures are Crestline's arithmetic on the accounts, so the printed line says "debtor days 32.3 and contract asset days 67.1, both Crestline's arithmetic on the audited accounts". The measured stage and the whole-bill line carry "From the audited accounts (Crestline's arithmetic)", as the README rules.
3. Tagline on p7 and p16 and the cover is the brief's "Know where your money is waiting, and who can release it." (the fixed copy had "trapped").
4. p14: claims and arbitration line dropped (brief). No scope card.
5. p15 interest clause: the fixed text says "the rate range the company discloses"; this company discloses one rate on one debt, so it reads "the 12.75% the company discloses on its unlisted NCDs, applied only where the cash retires that debt", cash counted up to ₹173.62 Cr.
6. Letter dated 12 October 2026 (README and launch message override the brief's 9 Oct). Address spelled "Iskon Ambali Road" (the report prints "Iskon-Ambali"; the hyphen is dropped to keep copy free of dashes).
7. Page 13 holds text only, no figures, and "No numbers on this page." is an instruction, not printed.
8. Annual Reports are cited as "Annual Report for FY25" and "for FY24" so no hyphenated year range prints.
9. Fixed p11 "04 Verified" contains the word "Verified": product copy, kept verbatim. The prompt sections on rules and checks were reworded to content only (labels B1 to B6 added; rules 1, 3 to 7, 10, A5, A7, A12, A14 and finish checks 2, 5, 6, 7, 9, 12 reworded; finish check 10 and section 2 removed).
10. HOW lines (two each) sit beside the cover hero and the with-Crestline results on pages 5, 6, 8, 10 and 12. Not added on p11's illustrative Ask answer, whose mechanism is already the page's four fixed lines.

## Garvis rulings applied (after the first report)
- NCD cap: carrying amount ₹173.62 Cr (Note 18 debentures 11,404.51 + Note 22 current maturities 4,966.14 + 991.70 = 17,362.35 lakh). NCD_CR = 173.62 in the calc, re-run, all asserts pass and each breaks visibly. Capped carry: 30-day certification and the combined run ₹22.14 Cr; other rows unchanged. Chart 2: stock 8.05, certification 4.07, receivables 1.96.
- Order book printed on p3 and in the sources: ₹14,153 Cr at 31 December 2025 (roads 46%, renewable 35%), as CARE Ratings reports, press release 10 April 2026, page 2. "CARE" removed from the scan list; BBB+, A-, rating, downgrade, limits, utilisation stay on it (the only "rating" hits are inside "CARE Ratings").
- No client payment term or certification window is published; collection is a ten day step, not a move to a term. Estimates on p8 are tagged and never priced.

## Scans on the master prompt (script, planted hit found by every scan)
0 placeholders, 0 comments, 0 internal references, 0 dashes (en, em, spaced or doubled hyphen), 0 " pt", 0 "The design to reproduce", 0 content-only design words (navy, cream, gold, Poppins, italic, dashed, hollow, hatched, white card, upper card, pill, dumbbell, slider, on one scale, scale from, axis, curve, small capitals), 0 KEPT OUT terms (Patel Engineering, Patel KNR, BBB+, A-, downgrade, rating, 510, 2,365, 97%, utilis, borrowings, 1,121, 6.90, 11.50, subcontract, 46.6, MSE, 21.6, 227, 259, DRHP, IPO, Nitin Patel), 0 other prospect names (every folder name in crestline-prospects except patel-infrastructure, whole words, plus distinctive tokens and short names), "Patel" appears only in the company name and the reader name. One jargon hit, "Verified", inside the fixed product line "04 Verified". Numbers: every figure in the Content traced to the accounts, the calc output or the stage script; the only untraced numerals are fixed-copy numbering and "376 bills" (STAGE-PROPORTIONS).
Interest figures printed (12.49, 22.14, 4.46, 13.39) all come from the calc.
