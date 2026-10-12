# Patel Engineering: QA report (PE-4)

Scope: problems.md, solutions.md, webapp-fit.md, calc/. Protocol: qa-reviewer "Financial booklet verification protocol"; PLAYBOOK.md; README (PE-3 rulings binding).

## Verdict
**PASS after fixes.** One must-fix (the basis mix Garvis named) was real and changed six printed figures; it is fixed, re-run and asserted. No other figure was wrong. Three should-fixes applied (wording, not figures).

## Must-fix
| # | Finding | Fix |
|---|---|---|
| M1 | NWC days are CONSOLIDATED (company stated) but the cash on them was priced on STANDALONE revenue per day, and the cap and rate were cited from the standalone notes. Two totals in one row (PLAYBOOK rule "never pair two figures computed on different totals"). | Option (a). The company publishes no standalone NWC days (both deck slides read on the page image; they sit beside consolidated revenue and consolidated debt). NWC rows now use FY26 consolidated revenue Rs 5,102.74 Cr (R4Q26 PDF p20, page image) = Rs 13.98 Cr a day; cap Rs 735.86 Cr consolidated cash credit and working capital demand loan (AR26 PDF p87, printed p146, consolidated note 23, page image); rate 9.90% to 12.35% from the consolidated note (printed p147). Receivable row stays standalone on standalone. Retention days moved to the consolidated basis of the call. |

Figures changed by M1 (old, WRONG; new, CORRECT):
| Row | Old | New |
|---|---|---|
| NWC 10 day step, cash once | Rs 138.81 Cr | Rs 139.80 Cr |
| NWC 10 day step, interest a year | Rs 13.74 Cr to Rs 17.14 Cr | Rs 13.84 Cr to Rs 17.27 Cr |
| NWC 30 day step, cash once | Rs 416.43 Cr | Rs 419.40 Cr |
| NWC 30 day step, interest a year | Rs 41.23 Cr to Rs 51.43 Cr | Rs 41.52 Cr to Rs 51.80 Cr |
| Retention in days | 14.4 to 18.0 (less 10: 4.4 to 8.0) | 14.3 to 17.9 (less 10: 4.3 to 7.9) |
| P3 mark cash and interest | Rs 138.81 Cr; Rs 13.74 Cr to Rs 17.14 Cr | Rs 139.80 Cr; Rs 13.84 Cr to Rs 17.27 Cr |

## Should-fix (applied)
| # | Finding | Fix |
|---|---|---|
| S1 | Retention screen described as "a ledger per bill, read against its release milestone, ranked among the levers". The live /o2c/retention page lists HOLDINGS with withheld, released, outstanding, the end of the defect liability period and whether a release was asked for; the lever ranking is on the Working Capital screen. | Reworded in solutions.md and webapp-fit.md to what the screen shows today; data needed now names the defect liability period end. |
| S2 | SAP appeared outside the one allowed phrase ("SAP will feed Crestline, read only", "until SAP supplies them", "connects to SAP today"). | Every SAP mention now reads "will feed, read-only, built during the pilot"; other lines say "their systems" or "the source". |
| S3 | KEPT OUT items were named in the deliverables' own "kept out" and "does not model" lines (a scan hit on six terms). | Replaced by a reference to the README's KEPT OUT list. The CFO's receivable quote now also says he was answering about Q1 and did not state his measure: the "different basis" note in plain words. |

## Per figure (page image read in PE-4 unless marked)
| Figure | Verdict |
|---|---|
| NWC days 160, 145, 105, 120 (D4Q26 slide 36) and 137 (D1Q27 slide 14), CONSOLIDATED; 55 and 17 day moves | CORRECT |
| "the net working capital days is around 120 days" (T4Q26 PDF p8) and "net working capital days around 137 days" (T1Q27 PDF p7) | CORRECT, verbatim; speaker Rahul Agarwal, label on T4Q26 PDF p7 and T1Q27 PDF p6, same turn |
| Consolidated revenue Rs 5,102.74 Cr (R4Q26 PDF p20); standalone Rs 5,066.56 Cr (PDF p9) | CORRECT |
| Rs 13.98 Cr and Rs 13.88 Cr a day | CORRECT (computed by script) |
| Cap Rs 735.86 Cr; rates 9.90% and 12.35% | CORRECT on both bases (AR26 PDF p87 and p125, p126) |
| Receivables Rs 813.54 Cr, Rs 992.60 Cr (AR26 PDF p120), Rs 752.49 Cr (AR25 PDF p169); 58.6, 72.3, 62.3 days | CORRECT (8,135.37 / 9,926.00 / 7,524.94 Rs Mn; days recomputed: 58.61, 72.35, 62.25) |
| Receivable 10 day step Rs 138.81 Cr; Rs 13.74 Cr to Rs 17.14 Cr | CORRECT (standalone days on standalone revenue) |
| "we are getting paid monthly as and when we do the work" | CORRECT, verbatim; speaker Kavita Shirvaikar (T4Q26 PDF p14) |
| "Receivable days is between 40 to 45." | CORRECT, verbatim; speaker Rahul Agarwal (T1Q27 PDF p13). NEEDS CAVEAT, applied: "answering a question about Q1 of this year ... He did not say how it is measured." |
| Retention quotes, Rs 200 to 250 Cr | CORRECT, verbatim (now in full, with "So, see,"); speaker Rahul Agarwal, answering Rohit Joshi (T1Q27 PDF p15, printed 14 of 15) |
| Readers' names and titles | CORRECT (AR26 PDF p43, Corporate Information) |

## Rule checks
* No row added: tables keep their PE-3 rows (P1 two, P2 one, P3 one). Rows overlap and are never added.
* Rule 13 marks: every mark value is in calc/pe-savings-output.txt (trace below).
* A12/A13 hold: no chart value invented; every chart has today and the with-Crestline mark from calc only.
* Interest: both ends, the cap and "if it repays cash credit" on every row and footnote.
* Payables are never a saving (asserted: paying later releases Rs 0.00).
* Ownership: measure, prepare, review, submit, invoice ours; acknowledge, certify, pay the client's.
* Screens true today: every route cited exists in the app (app/(app)/... page files listed; retention wording fixed, S1).
* SAP: only "will feed, read-only, built during the pilot".
* KEPT OUT: absent from all three deliverables and calc (scan below).

## Commands and counts
* Calc: PE-3 script re-run from a Write-created copy, output byte-identical. New script written to `scripts/_tmp-patel-savings.ts`; BREAK=1..5 each failed its assert (exit 1); clean run exit 0, run twice byte-identical; output saved to calc/. Copy deleted by exact name; `git status` shows only `docs/03-agent-scorecard.md` and `docs/onboarding/`.
* Number trace: `python -I trace.py <patel> problems.md solutions.md webapp-fit.md calc/notes.md` (scratch). Planted untraceable figure flagged; untraced 3, all explained: 48.6 is the calc's 48.60 (twice), 1.4 is the simulator's clamp (lib/finance/cycle-simulation.ts line 170).
* Scans: `python -I scan.py <same files> qa-report.md` (scratch); minimum region 50 characters; a planted line of at least 50 characters per category, run through the same preprocessing. Dashes 0, company names 0 (22 names plus two headline figures), KEPT OUT terms 0.

## Applied log
1. calc/pe-savings.ts and calc/pe-savings-output.txt replaced (consolidated NWC and retention, standalone receivables, BREAK=5 basis assert).
2. calc/notes.md rewritten for the new basis and cites.
3. problems.md: P1 basis line, P2 CFO caveat, P3 days and full quote, kept out line.
4. solutions.md: basis header, all NWC and P3 figures, footnotes per table, retention screen, SAP phrase.
5. webapp-fit.md: value of a day on both bases, retention screen, SAP phrase, NEVER SAY 5 (no basis mix) and 9 (KEPT OUT list).
6. data.md retention row: days on both bases stated.

## Lessons applied
Basis on every figure; page image for every input, cite and quote; planted hit at least the minimum region (the PE-3 scan failed on exactly this); scan each replacement before it went in.

Self-review: 4/5 | biggest mistake: PE-3 shipped a consolidated day count priced on standalone revenue, caught by Garvis and not by our own checks | rule: every calc row asserts that its days and its revenue per day come from the same entity basis.
