# B. G. Shirke: QA report (SH-4)

Reviewed: webapp-fit.md, problems.md, solutions.md, calc/ against data.md, depth.md and the India Ratings releases in src/d.

## Verdict: PASS AFTER FIXES

Every printed figure traces and recomputes. Three must-fixes (P3 wording, an ownership slip, screens described at the wrong scope or not built) were found and are applied below. The calc re-runs byte-identical.

Source note: the Ind-Ra releases in src/d are the agency's own JSON page source, not page images. Text and tables were read from that JSON (scratch extract of R1, R2, R3). The CARE and ICRA PDFs are not cited by these four files.

## 1. Figures, re-traced and recomputed by script

Script: `python -I SH-4/qa.py` (scratch). Trace corpus = R1, R2, R3 text extracted from src/d JSON, plus calc/shirke-savings-output.txt, plus the recompute. data.md is NOT in the corpus, so an error there cannot hide one here. Planted hit caught (untraced 4,321.77). Untraced figures in the four files: 0.

| Figure | Recompute | Source on R1 | Verdict |
|---|---|---|---|
| 16.2082 | 5,916 / 365 | Revenue 59.16 (R1 table) | CORRECT |
| 162.08, 486.25 | 10 and 30 x 16.2082 | calc rows `P1_gross_step*_release_RsCr` | CORRECT |
| 113.2 / 160.6 / 150.6 / 130.6 | 31% and 44% x 365; 160.6 less 10 and 30 | "increased to 44% in FY25 (FY24: 36%; FY23: 31%)" | CORRECT |
| 51.1 / 62.1 / 52.1 / 32.1 | 14% and 17% x 365; 62.1 less 10 and 30 | "remained stable at 17% in FY25 (FY24: 17%; FY23: 14%)" | CORRECT (62.05 prints as 62.1; the steps are taken from 62.1, as in the calc) |
| 1,795 / 2,603 | 31% x 5,790; 44% x 5,916 | FY23 57.9 in R1 text (R3 agrees) | CORRECT, Computed label carried |
| 31% / 44% | | R1 line quoted above | CORRECT |
| 1,548 | 15.48 x 100 | "INR15.48 billion at 1HFYE26" | CORRECT |
| 27% | | "27% and 65%, respectively, over the 12 months ended December 2025" | CORRECT |
| 15,700, 2.65, 22.3%, IND AA-/Stable, client shares | | R1 order book, table and rating lines | CORRECT |

## 2. Must-fixes (applied)

**M1. P3 did not say what the agency says.** Title read "carried by advances"; R1's verb is "aided", and R1 says early vendor payment LENGTHENED the net cycle. Early payment raises working capital, so it cannot be what holds it down. Paraphrase "lengthened from historically low levels because" replaced by the full quote.
- Title, problems.md and solutions.md: "Net working capital at 17% of revenue, aided by advances and lengthened by early vendor payment"
- problems.md P3: net working capital as a percentage of revenue "remained stable at 17% in FY25 (FY24: 17%; FY23: 14%), aided by higher mobilisation advances", and "BGSCTPL's net working capital cycle has elongated from a low single-digit historically, as the company takes advantage of price discounts by timely/advance payments to vendors". Paying vendors early lengthens the net cycle; the advances help keep it level.
- "advances are holding the net figure at 17%" became "mobilisation advances aid the net figure" (problems.md, solutions.md); webapp-fit rows now quote R1.

**M2. Ownership slip, solutions.md "What is ours to move first".** It said "The certification side is ours (measure, prepare, review, submit and invoice)". Certification is the client body's act. Now: "The billing side is **ours**: measure, prepare, review, submit and invoice. Certification and payment are the client body's acts, so the collection side needs the client body."

**M3. Screens not true as written.** Checked in the app (lib/navigation.ts, app routes): RA Bills, Receivables, Retention and Payment Timing are COMPANY views under O2C and P2P, not project sub-views. No screen lists "bills that crossed a year end" and no screen shows the discount a payment bought.
- solutions.md P2: project O2C and Client "with the company O2C views RA Bills, Receivables and Retention"; year-end line now "The Client screen's month by step grid shows a month that is slow for every step, such as a year end."
- solutions.md P3: "the company Payment Timing view"; "The discount each payment bought is on no screen today; it is a field to bring in during the pilot, so the choice can be made per vendor."
- webapp-fit.md screens table and Retention row relabelled the same way.

## 3. Should-fixes (applied)

- S1. Alerts & Tickets: "closed only when the receivable moves" became "closes as verified only when the figure moves on new data" (that is how the auditor closes a ticket).
- S2. P1 FY23 revenue now cited to R1 (one vintage on the chart), R3 noted as agreeing.

## 4. Rules

| Rule | Result |
|---|---|
| No interest | PASS. No rate, no interest saved; calc carry 0.00 on every row. The R2 note on interest-free advances explains advances, not a saving |
| No ERP named | PASS. Scan 0 hits; pilot wording "will feed Crestline, read only, through an adapter built during the pilot" |
| Rows never added | PASS. Stated in solutions.md, notes.md and every P3 label |
| Rule 13 marks from calc only | PASS. 150.6, 130.6, 52.1, 32.1, Rs 162 Cr, Rs 486 Cr are calc rows; dashed, hollow, "Scenario, not a forecast" |
| A12 (no invented chart values) | PASS. The billed / certified / paid split is named, never given numbers |
| A13 (today and with Crestline on every chart) | PASS on P1, P2, P3 |
| Payables never a saving | PASS. `vendor_dpo_plus*` Rs 0.00; "Paying vendors later: Rs 0 counted." |
| Ownership | PASS after M2 |
| Screens true today | PASS after M3 |
| KEPT OUT items | PASS in problems.md and solutions.md. webapp-fit.md names precast plant output only in its "does not model" and "never claim" lists, which is the exclusion itself |

## 5. Calc red-check

Write-created copy `scripts/_tmp-sh4-shirke-savings.ts` in the app repo; source diff against calc/shirke-savings.ts: identical. `npx tsx` exit 0; `cmp` against calc/shirke-savings-output.txt: byte-identical. Copy deleted by exact name. `git status --porcelain`: only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`.

## 6. Applied log

| File | Change |
|---|---|
| problems.md | P1 revenue cite R1; P3 title, quote, "cannot tell" line (M1, S2) |
| solutions.md | P2 screen line (M3, S1); P3 title, screen, "what it adds" (M1, M3); ownership line (M2) |
| webapp-fit.md | Retention, advances, vendor rows (M1, M3); O2C and P2P screen rows (M3) |

Every replacement string was scanned before it went in (SH-4/replacements.txt: 0 hits). Final scans after the last edit: number trace, dashes, the 19 other company names, KEPT OUT terms; results in the SH-4 report.
