# J. Kumar Infraprojects: QA report (JK-4, retry)

Scope: problems.md, solutions.md, webapp-fit.md, calc/. Run 8 Oct 2026. Protocol: qa-reviewer "Financial booklet verification protocol", PLAYBOOK.md, README rulings (JK-3 binding).

## Verdict
PASS AFTER FIXES. Every printed figure traces (0 untraced). All four retention quotes are Vasant Savla, word for word, on the cited printed page. The calculator reproduces byte for byte. Five must-fixes were found and applied; one finding departs from the JK-3 wording and is flagged for Garvis (M1).

The first run left no half-applied edit that broke a table or a sentence; the three files read end to end as consistent before this run's changes.

## Figure verdicts
Inputs re-read on the page images (AR26 PDF p9, p29, p89, p96, p97, p100, p103; transcripts) and recomputed by script (`recompute.py`, scratch JK-4, 0 mismatches, asserts on):

| Figure | Verdict |
|---|---|
| 15.5997 (569,389.15 lakh / 365) | CORRECT |
| 156.00, 467.99 | CORRECT |
| 12.64 / 19.27, 37.91 / 57.80 | CORRECT, NEEDS CAVEAT: interest only if the cash repays the facilities (now on every interest header) |
| 9.05, 11.43 / 17.43 | CORRECT, same caveat |
| 95.2 / 85.2 / 65.2 (and 95.4, 86.2) | CORRECT |
| 1,488.56 / 1,485.29 | CORRECT, standalone balance sheet |
| 17.2% / 27.5% | CORRECT (ageing note 8.1) |
| 12.65 / 141.15 (11.2 times, up 128.50) | CORRECT |
| 587.44 | CORRECT: 33,092.34 plus 25,652.01 lakh, "Total Debt" 58,744.35, standalone |
| 8.1% / 12.35% | CORRECT: overdraft "8.1% to 11.1% p.a.", cash credit "9.00% p.a. to 12.35 % p.a.", printed 194 |
| 112 / 99 | CORRECT as printed, NEEDS CAVEAT: MD&A key ratios beside a consolidated review; basis not stated by the company |
| 26.6% / 79.7% / 24.0% of borrowings | CORRECT |
| 82.8 payable days | CORRECT (849.54 over material cost 3,742.92 / 365) |

Number trace: `python -I trace.py problems.md solutions.md webapp-fit.md` (plant "157.00" caught). Untraced figures: 0. Residual non-figures: fiscal year labels, a printed page list, the 14 day pilot, a list number.

## Quotes (page images opened)
| Quote | Speaker on image | Page (printed / PDF) | Verdict |
|---|---|---|---|
| "Retention is INR386 crores and unbilled revenue is at INR650 crores." | Vasant Savla | Page 14 / PDF 15, 30 Jul 2025 | CORRECT |
| "So unbilled is about INR695 crores and retention is about INR389 crores." | Vasant Savla | Page 13 / PDF 14, 7 Nov 2025 | CORRECT |
| "So retention money is INR415 crores and debtors is INR1,407 crores." | Vasant Savla | Page 12 / PDF 13, 6 Feb 2026 | CORRECT |
| "Unbilled revenue is INR578 crores, mobilization advance is INR706 crores and retention is INR464 crores." | Vasant Savla | Page 4 / PDF 5, 20 May 2026 | CORRECT |
| "So right now also we intend to keep it in this range only of 100 and 110, 100 to 110, not more than that." | Nalin Gupta | Page 17 / PDF 18, 7 Aug 2026 | CORRECT |
| "Working capital days improved to 99 from 112" | Joint Managing Directors' Message (signed jointly) | printed 13 / PDF 9 | CORRECT, title fixed (M2) |

Cites are the transcript's printed "Page x of y", as data.md states; the column header now says so.

## Calculator
`calc/jk-savings.ts` written with Write to `scripts/_tmp-jkumar-savings.ts`; `cmp` against calc/jk-savings.ts: identical. Four break runs and the clean run re-assembled in the stored format: `cmp` against calc/jk-savings-output.txt: BYTE IDENTICAL (sha256 cda2cd58...354b on both; a planted one-character change was caught). Copy deleted by exact name. App git status after: `?? docs/03-agent-scorecard.md`, `?? docs/onboarding/` only.

## Must-fix (all applied)
- **M1, problems.md story and P1 reading. WRONG:** "the 112 to 99 gain came from stock and from advances". The company's own key ratios add up without advances: 96 plus 70 less 54 = 112; 95 plus 58 less 54 = 99 (AR26 PDF p29). Now: "on the company's own key ratios the 13 days came from stock: inventory days 70 to 58, debtor days 96 to 95, creditor days 54 to 54". The advance rise stays as a fact on the standalone table, not as a cause. The JK-3 ruling's "inventory and advances" should be read the same way; Garvis to confirm.
- **M2, problems.md opening. NEEDS CAVEAT:** "The Managing Directors' letter" is the "Joint Managing Directors' Message", and its paragraph reports consolidated figures. Added: "The 99 and 112 are the company's own key ratios (MD&A, AR26 PDF p29, printed 53); the company does not state their basis, and the same page and paragraph report consolidated figures, so they are never paired with the standalone tables below." P1 chart label changed from "Where the FY26 working capital gain came from" to "What moved on the standalone balance sheet in FY26".
- **M3, solutions.md rules. WRONG (basis mixing):** "the company closed FY26 with 'net cash of Rs 264 crore'" is a consolidated sentence on a standalone page. Replaced with: "Interest is saved only if the released cash is used to repay these facilities; if it is not, the cash figure stands and the interest column does not apply." Both interest table headers now end "only if the cash repays the facilities". webapp-fit.md NEVER CLAIM 11 added on net cash.
- **M4, solutions.md S2 rule 13 mark. WRONG (scale):** the "with Crestline" marker was in receivable days on a chart drawn in Rs crore. Now on the same Rs crore scale: "Collected in this scenario: Rs 141.15 Cr, 9.05 days of revenue (receivable days 95.2 to 86.2)". S1 marks now carry cash as well as days: "85.2 days, Rs 156.00 Cr released" and "65.2 days, Rs 467.99 Cr released". Calc values only.
- **M5, webapp-fit.md. NEEDS CAVEAT:** interest appeared without the repayment condition. Added to NEVER CLAIM 5 and to the Working Capital fields row.

## Should-fix
- Applied: "O2C retention drill-down" changed to "O2C retention panel" (solutions.md S3, webapp-fit.md); the O2C page renders a retention chart and card, not a separate drill-down screen.
- Applied: "The receivable line shows the client's half has not yet followed" changed to "The receivable line has not yet moved". A flat balance does not show whose step is late; saying so would put the client's name on what may be our own paperwork.
- Applied: P3 page column labelled as the printed page.
- Not applied (outside the three files): calc/notes.md caveat 2 still quotes the consolidated "net cash of Rs 264 crore" beside the standalone 587.44. Same fix as M3 before any copy is lifted from it.
- Note for JK-5: on 7 Aug 2026 Nalin Gupta also said "the working capital cycle as of right now is 103" (T127 p17). Still inside 100 to 110, so "Target met" holds; do not print 99 as the current figure.

## Rule checks
- Rows never added: SBK sits inside S10 and S30, stated in both files. PASS.
- Rule 13 marks use calc values only: 85.2, 65.2, 86.2, 9.05, 156.00, 467.99, 141.15. PASS after M4.
- A12: retention "with Crestline" drawn without numbers. PASS. A13: no signed figures (scan). PASS.
- Payables never a saving: stretch held at 82.8, Rs 0.00. PASS.
- Ownership: measure, prepare, review, submit, invoice ours; acknowledge, certify, pay the client's. PASS in all three files.
- Screens true today (lib/navigation.ts, CLAUDE.md, read-only): Ask Crestline, Working Capital, O2C, Client, P2P, Vendors, Alerts & Tickets exist; simulator, "Do this first" ranking, rupee-day ranking, Actionables to tickets, the retention lever label exist. PASS after the panel wording.
- Farvision only as "will feed, read-only, built during the pilot". PASS. Its page (BRSR, printed 129) also carries the board's ERP review item; that item is not used.
- KEPT OUT items absent; the excluded director is not a reader and is not named in the deliverables. PASS by scan.

## Applied log
| File | Change |
|---|---|
| problems.md | story line; opening caveat and message title (M2); P1 label (M2); P1 reading (M1); "not yet moved"; P3 page header |
| solutions.md | interest rule (M3); two interest headers (M3); S1 marks with cash (M4); S2 mark on Rs crore scale (M4); retention panel |
| webapp-fit.md | retention panel; NEVER CLAIM 5 and fields row (M5); NEVER CLAIM 11 (M3) |

## Final scans (after the last edit, each with a planted hit caught)
Number trace 0 untraced; dashes 0; 20 company names 0; KEPT OUT terms 0 in the three deliverables; signed figures 0. "net cash" appears only in webapp-fit.md NEVER CLAIM 11 and in this report.
