# Reliance Infrastructure Limited: QA report (ticket RI 4)

Prepared 8 Oct 2026. Scope: problems.md, solutions.md, webapp-fit.md, checked against data.md, depth.md, fact-check.md, the README rulings (RI 3 binding) and the filings in src/d, every printed figure opened on its rendered page image. Product truth checked against the app's CLAUDE.md ("THE PROCESS MAP TAB IS GONE") and lib/navigation.ts PROJECT_SECTIONS, read only.

## Verdict

PASS AFTER FIXES. Before the fixes: FAIL on two must fixes (a removed screen named as live; an internal progress conflict printed). Every figure in the three files is on its cited page. After the fixes listed below, all final scans are clean.

## Figure verdicts (page images)

| Figure or claim | File | Page image | Verdict |
|---|---|---|---|
| Kudankulam financial progress more than 62.5% / 76% / 85%, each "as on March 31" | problems | AR FY24 p31, AR FY25 p72, AR FY26 p50 | CORRECT. Filing says "more than", now printed that way. All three points are the company's own filings; nothing in the row reads as a criticism |
| Chordaha to Gorhar "overall 75% as on March 31, 2026" | problems, solutions | AR FY26 p51 | CORRECT. Only this latest figure is kept |
| Metro Line 4 Packages 8, 10, 12 under execution, no figure | problems, webapp-fit | AR FY26 p50 | CORRECT. Joint venture partner not named in any of the three files |
| Contract assets opening 116.52, closing 104.10 | problems, solutions | AR FY26 note 24.3 p172 | CORRECT |
| 104.10 shown on note 13 | problems | AR FY26 p161 | NEEDS CAVEAT, applied: p161 prints 69.54 considered good and 34.56 credit impaired, not 104.10. Now cited as "Computed: 69.54 + 34.56 = 104.10" (checked by script) |
| Contract assets "including retention receivable" | problems, webapp-fit | AR FY25 p192 | CORRECT |
| Trade receivables "including Retentions on Contract" | problems, webapp-fit | AR FY26 p158 | CORRECT |
| Trade payables "including retention payable" | problems, webapp-fit | AR FY26 p167 | CORRECT |
| Bank borrowings nil at 31 Mar 2025 | problems, webapp-fit | AR FY25 p185 (term loans from banks nil), p187 (working capital loans from banks nil) | CORRECT |
| Bank borrowings nil at 31 Mar 2026 | problems, webapp-fit | AR FY26 note 18 p166 | NEEDS CAVEAT, applied: the table lists only inter corporate deposits and no bank line; p167 carries notes only. Cite changed from "p166 to 167" to "note 18, PDF p166", with "the borrowings table lists no bank line" |
| "The Division remains focused on efficient execution of its current order book" | problems | AR FY26 p56 | CORRECT, word for word; speaker is the company (MD&A) |
| "predominantly engaged in the business of Engineering and Construction (E&C)" | webapp-fit | AR FY26 p185 note 35 | CORRECT |
| Standalone revenue 237.22 equals E&C segment revenue 237.22 | webapp-fit | AR FY26 p132; p285 | CORRECT |
| Order book 363.25 at 31 Mar 2026; 214.58 in the next year | webapp-fit | AR FY26 p52; note 24.2 p171 | CORRECT (level only, no decline printed) |
| Customer advances one entity balance | webapp-fit | AR FY26 p169 note 21 | CORRECT |
| No inventory line; "Inventory turnover ratio is not applicable" | webapp-fit | AR FY26 p131; p203 | CORRECT |
| "3 Joint Operations accounted on proportionate basis" | webapp-fit | AR FY26 p117 | CORRECT. Note: that page is the auditor's report; cite the fact only, never quote the page further |
| SAP named for FY25; FY26 report names no software | webapp-fit | AR FY25 p142; AR FY26 p121 | CORRECT |
| Vijesh Babu Thota, Executive Director & Chief Executive Officer | readers | AR FY26 p131 signature block, dated May 23, 2026 | CORRECT |
| Asheesh Chaturvedi, Chief Financial Officer (from 23 May 2026) | readers | AR FY26 p131; p103 ("Appointed as Chief Financial Officer with effect from May 23, 2026") | CORRECT. Recorded in data.md section 9, now marked image checked |

Filing dates (NSE 12 Jul 2024, 17 Jul 2025, 23 Jul 2026, 7 Dec 2025, 23 May 2026, 14 Aug 2026) are taken from the data.md sources table; a page image cannot show an NSE dissemination date, so these were not re-verified here.

## Must fixes (Garvis), with the exact wording applied

1. PRODUCT TRUTH. solutions.md Solution 3 named "project O2C with the discovered process map" and "bottlenecks rank by money"; webapp-fit.md listed "O2C, with the discovered process map". The process map screen was removed. Replaced with: "the project O2C screen's stage waits (each stage with its days, its share of the cycle and whose desk it sits on, ours or the client's), the Client screen beneath it (where this client's cash is stuck, whose delay, and when it lands), and Alerts & Tickets, which turns a verdict into an owned commitment that is measured again from fresh data." webapp-fit screen row now reads "O2C | Stage waits for each RA bill from measured to collected: each stage's days, its share of the cycle, and whose desk it sat on". Every other screen named (Overview with the contract to cash waterfall and value state map; Working Capital with the capital position panel; P2P and Vendors; Client; Alerts & Tickets; Ask Crestline) exists in PROJECT_SECTIONS today.
2. INTERNAL CONFLICTS KEPT OUT. problems.md Problem 1 printed the two earlier Chordaha to Gorhar figures and a sentence saying the filings do not reconcile them. Both removed. The row now reads "Chordaha to Gorhar six laning, NH-2 (NHAI), overall progress | | | 75%", sourced "AR FY26 PDF p51 (filed NSE 23 Jul 2026), "overall 75% as on March 31, 2026"".
3. RE-VERIFY. Done on page images (table above). Derived figure recomputed by script: 69.54 + 34.56 = 104.10.
4. KEPT OUT. Scan clean: none of the RI 3 or sensitive categories appear in the three files; no priced days, no interest figure, no savings figure; the terminated road project and the solar developer award are absent; the Metro Line 4 partner is not named. webapp-fit NEVER CLAIM item 8, which described the terminated contract and the developer award, now reads "Any project outside the three running jobs named above as part of the running EPC book."
5. WITH CRESTLINE PICTURES. All three show what would be measured, never a number ("measured from your ERP", "days measured from your ERP", caption "What Crestline would measure, not a figure."). Ownership follows the rule. problems.md Problem 3 had "certified to collected (the client's)", which swallowed our invoicing step; now "certified to invoiced (ours), invoiced to collected (the client's)", matching the Solution 3 stage table.
6. READERS. Both titles verified on AR FY26 PDF p131 and p103; recorded in data.md.

## Should fixes

1. Applied: Kudankulam wording "over" changed to the filed "more than".
2. Applied: Metro Line 4 row carries the filed corridor name (Wadala to Kasarvadavali).
3. Applied: Solution 2 says "Contract assets (work done, not yet billed) and retention are separate blocks", the labels the capital position panel actually uses.
4. Applied: webapp-fit "legacy balances on completed or closed contracts" shortened to "balances on completed contracts".
5. Applied: Solution 1 today mark names the two latest filed figures explicitly.
6. For RI 5: data.md section 7 and depth.md section 3 still hold the earlier Chordaha figures and the conflict note as research. The pack must take progress from problems.md only.
7. For RI 5: the order book appears only as a level in webapp-fit; it must never be drawn as a trend.
8. For RI 5: README line 4 names the company running in parallel (an internal Garvis note). It is not booklet facing and must never reach the master prompt.

## Applied log

| File | Change |
|---|---|
| problems.md | Bank borrowings cite narrowed to AR FY26 note 18 p166; Problem 1 table: Kudankulam "more than", Chordaha latest figure only, Metro corridor name; conflict sentence removed; Problem 2 source states the p161 split as Computed; Problem 3 stage ownership corrected |
| solutions.md | Solution 1 today mark names the latest figures; Solution 2 block labels; Solution 3 screen line rewritten to existing screens |
| webapp-fit.md | O2C screen row rewritten; NEVER CLAIM 8 rewritten; scope line shortened; borrowings cite narrowed |
| data.md | Asheesh Chaturvedi row marked image checked (RI 4) |

## Final scans (run after the last edit, script ri_scan.py in the session scratchpad, python -I)

Each scan appends a planted line to every file and fails if the plant is missed; each file must be at least 1,500 characters to count as scanned.

| Scan | What it looks for | Result |
|---|---|---|
| Number trace | every decimal or percent figure in the three files must appear in data.md or in the one computed sum | planted caught; untraced 0 |
| Dashes | long dash characters, a hyphen with spaces both sides, a double hyphen (markdown table rule rows excused) | planted caught; 0 |
| Other companies | the thirteen other company names on the ticket list, every .md in the folder | planted caught; 1 hit: README line 4, the internal parallel run note (should fix 8). 0 in the three files and this report |
| Kept out | the RI 3 list and the sensitive categories: provisioning share and loss allowance, old ageing, contract liability days, old payables share, order book decline, audit opinion words, regulator and enforcement bodies, fraud, insolvency process words, arbitration and awards, distribution company disputes, ratings, promoter, the terminated road project, the solar developer award, the joint venture partner, termination, interest, savings, reconciliation, the earlier progress figures, the former chief executive, the completed tunnel job, settlements, lenders, defaults, resignation, conflict, dispute, legacy, any number followed by days, any rupee figure "a year", "saved" or "released" | planted caught; 0 (excused only: lines that state the no interest, no savings rule without a figure; the product's ledger and document reconciliation; the 14 day pilot) |
| Removed screen | the removed map screen by name, and "discovered" | planted caught; 0 |
| Calc re-run | src/ri-calc.py copied to scratch and run | output byte identical to src/ri-calc.out.txt |

The folder is not a git repository; no file outside reliance-infra was written.

Self-review: 4/5 | biggest mistake: first dash scan flagged markdown table rule rows as dashes, so the scan needed a second pass | rule from now on: excuse table syntax inside the scan itself before the first run, and keep the planted line proving the scan still bites.
