# THERMAX TH-6: review gate (slots-unified.md)

Reviewer: QA. 08 Oct 2026. Scope: thermax/ plus _shared/ (read only). No other company folder opened.
Protocol: qa-reviewer.md "Financial booklet verification protocol" 1 to 5; PLAYBOOK rules 1 to 13; README rulings (TH-3 binding); Garvis TH-6 rulings 1 to 6.
Scratch scripts (session scratchpad, python -I, each with a planted hit and a minimum region size): th6_trace.py, th6_find.py, th6_crop.py, th6_calc.py, th6_scan.py, th6_qafix.py.

## VERDICT: GO WITH FIXES

Every printed figure traces to its page image and every derived figure recomputes exactly. No figure or calculation is NO-GO. The must-fixes are the six Garvis rulings plus four wording problems: one figure described as something narrower than its line (p13), two lines that read segment liabilities as customer money (p7, p12), and one Crestline claim that is only true where the source records it (p9).

## 1. Calculation gate

### 1a. Page images opened (rendered with pymupdf at 3x, crop around the cited text, read on the image)
| Cite | PDF idx (left / right page) | Entity header | Result |
|---|---|---|---|
| AR26 p228 cash flow | 130 (p228) | CONSOLIDATED STATEMENT OF CASH FLOWS | 541.55 / 1,079.79; 891.04 / 1,265.52. CORRECT |
| AR26 p227 P&L | 129 (p227) | CONSOLIDATED STATEMENT OF PROFIT AND LOSS | PAT 720.26 / 626.70; revenue 10,694.15. The 42.82 / 80.53 line reads "Net impairment losses on financial and contract assets". CORRECT figure, WRONG description on p13 (MF4) |
| AR26 p226 balance sheet | 129 (p226) | CONSOLIDATED BALANCE SHEET | Trade receivables 2,204.84; borrowings 1,615.83 + 672.18. CORRECT |
| AR26 p256 ageing | 144 (p256) | NOTES TO CONSOLIDATED FS | All 14 bands, totals 2,500.19 / 2,315.24, allowance 295.35 / 312.23, terms "7 to 90 days", Rs 190 (Rs 422.08) derecognised, retention sentence word for word, contract assets 773.08 / 640.56. CORRECT |
| AR26 p274 MSME | 153 (p274) | NOTES TO CONSOLIDATED FS | Current trade payables MSME 938.15 / 749.78; total trade payables 2,057.38 on the same spread. CORRECT |
| AR26 p289 contract balances | 160 (p289) | NOTES TO CONSOLIDATED FS | 773.08 / 640.56; 145.32 / 545.51; 1,899.53 / 1,469.20. Revenue by segment on p288: Industrial Infra inter segment (5.20), 4,342.85 after it (4,342.85 + 5.20 = 4,348.05). CORRECT |
| AR26 p310 to p311 note 33 | 171 | NOTES TO CONSOLIDATED FS | Industrial Infra revenue 4,348.05 / 4,694.45 on p310; liabilities 2,330.16 / 2,353.60 on p311. CORRECT |
| AR26 MD&A p113 | 72 (p113) | MD&A | Contract assets 773 / 641 "21%"; OCF 542 / 1,080 "(50%)"; both quotes word for word. CORRECT |
| AR26 MD&A p90 | 61 (p90) | MD&A | "segment profit improved to Rs. 218 crore from Rs. 110 crore ... driven by better project execution, an improved project mix and enhanced cost discipline". CORRECT |
| AR26 p357 titles | 194 (p356, p357) | Standalone statements signature block | "Managing Director and CEO"; "Executive Vice President and Group Chief Financial Officer". CORRECT |
| AR26 registered office | 49 | Corporate information | "D-13, M.I.D.C Industrial Area, R.D. Aga Road, Chinchwad, Pune 411 019, Maharashtra". CORRECT text; it sits on the RIGHT page of the spread, p67, not p66 (internal cite only, SF2) |
| AR26 p20 to p21 | 26 | KPI pages (consolidated: revenue 10,694) | Order booking 13,871 / 10,337, balance 13,604 on p20; 2,467 on p21 labelled "Cash and Cash Equivalents and Other Bank Balances, Including Current Investments". CORRECT |
| Borrowings total 2,288.01 | 175 (p319) | NOTES TO CONSOLIDATED FS | Printed as a total on p319; p270 to p271 print only its two parts. CORRECT figure, cite incomplete (SF1) |
| AR24 p292 note 44A | AR24 idx 165 (p292) | NOTES TO CONSOLIDATED FS | "Thermax Limited / SAP / Yes / Yes*"; TBWES appears only against the employee reimbursement system. CORRECT |
| CRISIL 19 Jan 2026 | HTML text | Rating Rationale, January 19, 2026 | "Prudent working capital management", the 40-day sentence and "Thermax has net nil debt" all found. CORRECT |
| Q4 FY26 call p11 | TR_Q4FY26 idx 10 | Page 11 | Both CFO quotes word for word under the label "Rajendran Arunachalam:". CORRECT |
| Q1 FY27 call p5 (ruling 4) | TR_Q1FY27 idx 4 | Page 5 | "because the advance didn't come in, we couldn't book it" word for word. No label on p3 to p5 above it; the block opens on p2 under "Ashish Bhandari:" (image checked). Speaker CORRECT, quote stays |
| Q2 FY26 call p6 | TR_Q2FY26 idx 5 | Page 6 | "I have enough confidence that I can commit to a 20% plus orders growth on the total Thermax portfolio for the year." under Ashish Bhandari. CORRECT |
| Q4 FY26 presentation slide 13 | idx 13 | "Consolidated Performance Summary by Segment" | Industrial Infra order balance 7,439. CORRECT |
| Q1 FY27 presentation slide 16 | idx 16 | "Industrial Infra Segment, Key Metrics" | Revenue mix Private / Export / PSU / Services. CORRECT |

th6_trace.py text-layer check of the same pages: 8 strings missed on the first pass, all resolved by th6_find.py (figures printed on the facing page or as parts of a sum, listed above). Planted fake figure absent, real figure present.

### 1b. Derived figures (th6_calc.py, inputs as read on the images above)
11.91, 119.12, 357.37, past due 1,443.42 / 1,434.88, 57.7% / 62.0%, over one year 377.27 / 335.56, 12.4%, OCF fall 49.8%, OCF/PAT 172.3% / 75.2%, contract assets 20.7%, order booking 34.2%, Industrial Infra cover 1.71 years, segment net 160.12 and 13.4 days, DPO 70.2 days, borrowings 1,615.83 + 672.18 = 2,288.01, segment revenue 4,342.85 + 5.20 = 4,348.05. **21 of 21 match.** Both ageing tables sum to their totals. Advances 1,899.53 exceed receivables + contract assets + inventory less payables and unearned revenue (1,684.72): the letter's claim holds. Planted wrong value (11.92) caught.

### 1c. Savings script re-run (protocol step 3)
calc/thermax-savings.ts copied to the scratchpad and run from there with the app's tsconfig (`npx tsx --tsconfig ./tsconfig.json <scratch copy>`), so nothing was written into the app repo. Exit 0, `cmp` BYTE-IDENTICAL, sha256 b3d35aa2...358f on both. App repo `git status --porcelain` before and after: the same two untracked docs paths only.

### 1d. Number trace (protocol step 1)
th6_scan.py: 129 distinct numbers in the printed copy, traced against data.md, depth.md, problems.md, solutions.md, qa-report.md and both calc outputs. **Untraced 3, all benign:** 336 (335.56 rounded) and the two parts of the fixed phone number.

## 2. The 18 QA fixes (th6_qafix.py, one assert each)
M1 to M10 and S1 to S8: **18 of 18 landed.**

## 3. Problem charts (p4, p5, p6, p8, p9, p12)
Two panels each, basis label with CONSOLIDATED or SEGMENT and AR26 VINTAGE, segment callout with 119.12 and 357.37 only, "Scenario, not a forecast", "alternatives, not a sum": 6 of 6. A12: the p6 third slot carries no number; p8 stages carry no days. A13: 0 signed numbers (2 raw hits are the fixed phone number). Interest: 0 figures; "No interest is priced: the group is net debt free" only. Standalone in print: 0. "Trapped": 2 hits, both the fixed tagline on p7 and p16 (ruling 1, MF2). Retention caveat travels with the past due book on p4 only (ruling 3 asks for it wherever it is used: MF8).

## 4. KEPT OUT
0 real hits over the README TH-3 list, the director, the internal day figure and the simulator opening. One raw hit is the fixed p14 line "Not a claims or arbitration tracker", product copy from FIXED-PAGES, not the award.

## 5. Crestline claims, pilot, SAP, fixed lines
Pilot and SAP wording match the rulings (p14 control line, p15). "02 Owner told" present. p15 reads "No interest is priced: the group is net debt free." Simulator copy on p10 matches the app (floors at the certification window and the payment term). Retention release dates: true (retention ledger carries the defect liability end date). Disputes: the app tells a dispute apart only where the source records one, and says so when it does not, so p9's "Reason" row overclaims (MF7).

## 6. Editions and letters
Names and titles match AR26 p357 exactly; both letters neutral; "Thermax's CFO said" in both; 0 "you said". Letter date "October 2026" (ruling 5) already in place.

## 7. Logos
thermax/assets/thermax-logo-light-bg.svg and thermax-logo-dark-bg.svg exist, one svg root each; 0 hits for script, event handlers, href, use, foreignObject, style, external url or data URIs (planted string fires). The pack names the light-background file for the cover.

## MUST-FIX (exact replacements)

**MF1 (ruling 3), p1 cover.** Hero line: replace `"₹1,443 CR OF BILLS PAST THEIR DUE DATE AT 31 MARCH 2026, CONSOLIDATED"` with `"₹119 CR IN EVERY TEN DAYS BETWEEN A PROJECT BILL AND ITS CASH"`. Small line: replace `"Consolidated, gross. AR26 p256, filed with NSE 03 Jul 2026."` with `"₹119.12 Cr is ten days of FY26 Industrial Infra segment revenue (₹4,348.05 Cr / 365 x 10), AR26 p310 to p311. Scenario, not a forecast."`

**MF2 (ruling 1), p7 and p16.** `"Know where your money is trapped, and who can release it."` becomes `"Know where your money is waiting, and who can release it."`

**MF3 (ruling 6), data footing.** In [FOOT] and in the p15 sources paragraph, `as published up to 30 September 2026` becomes `as published up to 06 Aug 2026, the date of the NSE notice of the Q1 FY27 earnings call transcript`.

**MF4, p13 row ii.** The line on AR26 p227 is "Net impairment losses on financial and contract assets", not receivables alone. Replace `"The year's charge for receivables that may not be collected, FY25 to FY26."` with `"The year's net credit loss charge on financial and contract assets, FY25 to FY26."` (the word "impairment" is avoided so the KEPT OUT scan, which bars subsidiary impairments, stays clean; AR26 MD&A p113 calls the same line the ECL provision).

**MF5, p7 lens 01.** Segment liabilities include what the segment owes vendors; their make-up is not published. Replace `Customers fund most of it.` with `Segment liabilities match most of the assets.`

**MF6, p12.** Same reason. Lead: replace `"The project segment is almost entirely funded by its own customers. Segment assets` with `"The project segment carries little of its own money. Segment assets`. Note under both panels: replace `which is what remains after customer advances.` with `which is what remains after segment liabilities.`

**MF7 (rule 1, claims true today), p9 "Reason" row.** Replace `"Retention past its release date, a disputed bill, or a bill not yet paid, each told apart."` with `"Retention past its release date or a bill not yet paid, told apart, and a dispute wherever your ERP records one."`

**MF8 (ruling 3), retention caveat wherever the past due book is used.** Add `The ageing includes retention classified as due on its contractual terms (AR26 p256).` to the footnotes of p6, p7 and p11.

## SHOULD-FIX

**SF1 (booklet-facing), borrowings cite.** p3 row iii source `AR26 p21 and p270 to p271` becomes `AR26 p21, p270 to p271 and p319`; sources paragraph `borrowings p270 to p271` becomes `borrowings p270 to p271 and p319`.

**SF2 (internal), address cite.** Reader table note and slot map: AR26 p66 becomes p67. data.md section 11 and fact-check.md row 4 carry the same p66 cite; left for the data owner (outside this ticket's edit list), never printed.

**SF3 (internal), slot map STUCK_TOTAL row.** Record the ruling 3 cover change.

**SF4 (internal), Checks section.** Add the TH-6 run line so the pack's own record matches this gate.

Not changed, on purpose: qa-report.md line 40 (ruling 2); the p6 outline slot "30 Sep 2026: not yet published" (a period end, not the data footing; ruling 6 is about the footing).

## Applied (Phase B, 08 Oct 2026, slots-unified.md, Edit tool only)

| Item | Where | Applied |
|---|---|---|
| MF1 ruling 3 | p1 hero and small line | Replaced word for word; page cite as data.md gives it (AR26 p310 to p311) |
| MF2 ruling 1 | p7 tagline, p16 vertical tagline | "trapped" to "waiting"; the only change to fixed wording |
| MF3 ruling 6 | Keys [FOOT], p15 sources paragraph | Footing now 06 Aug 2026, the NSE notice of the Q1 FY27 call transcript (latest non-sensitive primary filing in data.md) |
| MF4 | p13 row ii | "The year's net credit loss charge on financial and contract assets, FY25 to FY26." |
| MF5 | p7 lens 01 note | "Segment liabilities match most of the assets." |
| MF6 | p12 lead and note | Lead opens "The project segment carries little of its own money."; note ends "after segment liabilities." |
| MF7 | p9 Reason row | "Retention past its release date or a bill not yet paid, told apart, and a dispute wherever your ERP records one." |
| MF8 ruling 3 | p6, p7, p11 footnotes | Retention sentence added (p4 and p9 already carried it) |
| SF1 | p3 row iii source, p15 sources | p319 added beside p270 to p271 |
| SF2 | Reader table note, slot map ADDRESSEE | p66 to p67 (data.md and fact-check.md still say p66; not edited here) |
| SF3 | Slot map STUCK_TOTAL | Cover change recorded |
| SF4 | Checks section | TH-6 line added |
| Ruling 2 | qa-report.md line 40 | Left unchanged |
| Ruling 4 | p13 row iv | Kept: verbatim, speaker Ashish Bhandari confirmed on the image |
| Ruling 5 | p1, p2 | "October 2026" already in place |

Re-run after the last edit (th6_scan.py, pack printed region, 32,454 chars): "trapped" 0; cross-company 0; KEPT OUT 1 raw hit, the fixed p14 "arbitration tracker" line (product copy); interest figures 0 real (1 raw: "62.0% a year earlier"); dashes 0; "you said" 0; standalone 0; signed numbers 0 real (2 raw: the phone number); internal references 0 real (5 raw: "review" as a word on p1, p2 and the p8 stages); number trace 130 numbers, 4 untraced and all benign (319 page cite, 336 rounded from 335.56, the phone number in two parts). Folder-wide cross-company scan, 23 text files: 1 line, qa-report.md line 40 (ruling 2).

Lessons applied: QA TH-4 rule (anchor numbers with a no-digit-or-dot lookbehind; the segment-assets figure scanned only when not followed by decimals) and SK-7 (PDFs and HTML read and rendered only, never executed; scripts run with python -I from the scratchpad).
