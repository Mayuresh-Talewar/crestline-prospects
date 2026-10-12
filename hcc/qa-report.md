# HCC QA report, HC-4 (internal, not booklet copy)

Files checked and fixed: `problems.md`, `solutions.md`, `webapp-fit.md`. Protocol: qa-reviewer "Financial booklet verification protocol"; PLAYBOOK rules 1 to 13; README rulings, HC-3 binding. Scratch: session scratchpad `HC-4/` (scan.py, planted.txt, page PNGs, run output).

## Verdict

**PASS after fixes.** Every printed figure traces (untraced count 0). Calc red-check byte-identical. Two items need a Garvis ruling (G1, G2 below).

## Garvis must-fixes, as applied

1. **PAT removed.** Old: "Standalone PAT rose 142.36% in FY26 to ₹205.81 Cr (AR FY26 p109; change computed)." New opening bullets: "₹250 Cr of settlement-scheme cash was promised for Q1 FY26 (...) and received in that quarter (...)." and "The debt reduction the CFO set out in August 2025, over a 15 to 18 month window (...), was reached by 31 Mar 2026 on the company's own year-end figure, inside that window (AR FY26 p3, filed 24 Jul 2026)." No debt figure. Also fixed: the old line said the target was "reported met"; AR FY26 p3 gives a year-end figure, not the word "met".
2. **"Contested receivables" removed** (webapp-fit "does not model" bullet deleted; never-say 10 now "Any figure for group companies or debt. Receivables are always those on running contracts, ₹1,701.67 Cr at FY26."). The label definition also carried a counterpart term ("not under contest"); it now reads "*Receivables on running contracts* = the first line of the trade receivables ageing table, receivables considered good (note 6.8, ...)". "Running receivables" renamed "receivables on running contracts" throughout. "Nothing outside the running book" dropped from solutions.
3. **P2 revenue fall dropped.** The title "More cash is held on less work" was itself a decline headline, and the FY25 value of a day (13.15) carried the same fall. P2 is now "More cash is waiting on running contracts": book 1,361.06 to 1,701.67, up ₹340.61 Cr. Revenue stays only as the P1 days denominator, a table row, no headline.
4. **"Stated 90 day upper term" is NOT the company's wording.** Page image AR FY26 p132 (pdf 134), note 6.7: receivables "(other than receivables on account of claims awarded in arbitration in favour of the Company) are non-interest bearing and are generally on terms of 30 to 90 days except retention deposits". It is a general range, its scope carve-out cannot be quoted without kept-out matter, and it excludes retention that the running book contains. **Dropped:** 13.5, 67.8, 57.8, 37.8 and every "upper end" line. P3 rebuilt on verified ageing columns (below). Never-say 11 added.

## Figure verdicts

| Figure | Verdict | Trace |
|---|---|---|
| 1,701.67 | CORRECT | image AR26 p132 (pdf 134), line a, standalone header; also = sum of its six buckets by script |
| 1,361.06 | CORRECT, CITE FIXED | image AR26 **p133** (pdf 135), not p132 as printed; standalone header |
| 3,937.25 / 4,801.05 | CORRECT | AR26 p109 (pdf 111), standalone P&L |
| 1,256.20 / 5,042.78 (FY24, context) | CORRECT | AR25 p136 (pdf 138), p113 (pdf 115), text-checked |
| 10.79, 107.87, 323.61, 147.8, 127.8, 103.5, 157.8, 340.61, 54.3, 90.9, 1,593.80, 1,378.06 | CORRECT | python recompute, 0 mismatches; calc output byte-identical |
| 593.57 / 238.12 (new P3) | CORRECT | images AR26 p132 / p133, "less than 6 months" column |
| 549.54 / 529.46, 355.45 (new P3) | CORRECT (C) | script: 185.38+69.78+294.38; 255.91+146.40+127.15; 593.57-238.12 |
| 812.63 retention | NEEDS CAVEAT, applied | not printed on p131; 72.71 + 739.92, now marked "sum computed" |
| 12,971 order book | CORRECT | AR26 p150 (pdf 152), note 22.2 |
| 250 settlement cash | CORRECT, see G1 | Q4 FY25 call p2 (image, Rahul Shukla's opening, Deputy CFO per p1); Q1 FY26 call p4 |
| 15 to 18 month window | CORRECT, see G1 | Q1 FY26 call p3 (image), Rahul Shukla, CFO |
| PAT 142.36%, 205.81 | REMOVED | must-fix 1 |
| 13.15, 17.99% | REMOVED | must-fix 3 |
| 13.5, 67.8, 57.8, 37.8 | WRONG BASIS, REMOVED | must-fix 4 |

## Should-fixes

Applied:
* S-a. CFO quote "received a lot of our receivables from client which we have stuck" (Q4 FY26 call p5) removed from Respect first: in FY26 the large receipts include recoveries the README keeps out, so the quote points at kept-out matter, same logic as must-fix 1.
* S-b. S3 said retention runs "against its milestones". The Client screen shows retention "held to the defect period" (components/client/project/project-client.tsx:999). Reworded; webapp-fit retention line and S3 data list aligned.
* S-c. SAP named only as "will feed, read-only, built during the pilot". Other mentions ("from SAP", "written back to SAP", "connects to SAP today", table header) now say "the source" or "HCC's ERP".
* S-d. webapp-fit said "Filings give the book at 157.8 days": 157.8 is Crestline arithmetic. Reworded.

For Garvis (not applied, ruling needed):
* **G1.** The ₹250 Cr "settlement-scheme cash" is one award settled under the Vivad se Vishwas scheme (Q4 FY25 call p2, image), and the CFO says the deleveraging is funded partly by "withdrawing money against our awards" (Q1 FY26 call p3, image). Both opening lines follow your must-fix 1 and HC-3 and name nothing kept out, but a reader who checks the cited pages lands on award matter. Option: open on the debt reduction and order book only.
* **G2.** Rule 13: P3's ageing chart has no "with Crestline" mark, because the calc has no age split and a mark would invent a value (rule 12). Either accept a today-only chart with the line stated in S3, or order a calc row.
* G3. The "21 company names" list is not in the HCC folder. Scanned 25 names: the PLAYBOOK companies plus large Indian EPC peers, Grey Infra, and the two excluded readers. Send the canonical list if it differs.
* G4. `calc/notes.md` and `calc/hcc-savings.ts` still say "running receivables ... not under contest" and carry the 90 day rows; these are internal calc records and were left byte-identical so the red-check stays valid.

## Checks

* Rows never added: S10 and S30 shown as overlapping, "never added" in each file. PASS.
* Rule 13 marks use calc values only: 147.8, 127.8, 107.87, 323.61, 1,593.80, 1,378.06. P3 has no mark (G2). PASS.
* A12 (no invented chart values) and A13 (today and with Crestline): PASS, G2 noted.
* No interest: no rate, no interest figure; scan "interest ... ₹digit" 0 hits. PASS.
* Payables never a saving: ₹0.00 from stretching, stated. PASS.
* Ownership: measure, prepare, review, submit, invoice ours; acknowledge, certify, pay the client's, in all three files. PASS.
* Screens true today: O2C, Working Capital (Simulate, Make this the plan), Client (own due date ageing, retention ledger), Ask Crestline, Tickets: routes and components exist in the app repo. PASS after S-b.
* SAP only as "will feed, read-only, built during the pilot": scan 0 other hits. PASS.
* KEPT OUT absent: scan 0 hits (see scans).

## Calc red-check

Write-created `scripts/_tmp-hc4-savings.ts` in the app repo; `cmp` against `calc/hcc-savings.ts`: identical. `npx tsx` exit 0; output `cmp` against the clean run in `calc/hcc-savings-output.txt`: **byte-identical** (planted extra line detected as a diff). Copy deleted by exact name. `git status --short`: `?? docs/03-agent-scorecard.md`, `?? docs/onboarding/` only.

## Final scans (scratch `scan.py`, every pattern hit `planted.txt` first)

On the three fixed files: number trace untraced 0 (planted 4,444.44 caught); dashes 0 (planted em dash caught); company names 0 (planted Capacite caught); KEPT OUT terms 0, incl. dispute, contested, arbitration, award, claim, qualified, rating, PAT, 142, 17.99, the three debt figures, 317.8, 497.6, the S-item amounts and group names (planted "disputed" caught); dropped P3 figures 0; SAP outside the allowed phrase 0; interest with a rupee figure 0.

## Applied log

| File | Change |
|---|---|
| problems.md | PAT line removed; CFO "stuck" quote removed; debt line reworded, no figure; label renamed, counterpart term removed; FY25 cite p132 to p133; P2 retitled, revenue fall and 13.15 removed; P3 rebuilt on ageing columns, 90 day rows removed; retention marked as computed sum |
| solutions.md | SAP phrase; label renamed; S2 title; S3 rebuilt (no gap to 90, no mark, reason stated); retention "milestones" corrected; "Nothing outside the running book" removed; "re-measured" spelling |
| webapp-fit.md | "Contested receivables" bullet removed; never-say 1, 10 reworded, 11 added; 157.8 attributed to Crestline arithmetic, 30 to 90 comparison removed; SAP phrase; "from SAP" headers to "from the source"; retention line aligned with the screen |
