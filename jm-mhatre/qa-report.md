# J. M. Mhatre Infra: QA report (JM-4)

Reviewed: webapp-fit.md, problems.md, solutions.md, calc/ against data.md, depth.md and the page images in src/d. Source codes as in data.md. Protocol: qa-reviewer "Financial booklet verification protocol" (2026-10-08). Scratch only in the session scratchpad JM-4 folder.

## Verdict

**PASS after fixes (LIGHT).** Every printed figure traces to a page image or to the calc output, and the arithmetic reproduces by script. Four must-fixes were found and applied: the circular calc assert, the ownership wording (three places), a signed creditors bar (A13), and an accounting package named in webapp-fit. The Garvis rulings (a), (b) and (c) are applied with the exact wording. Garvis's standing recommendation to drop this company (rulings JM-3) is unaffected by this QA.

## Figures, one verdict each

Page images rendered and read: R10 p1 (date), p4, p5 (analytical approach), p6 (financials); R14 p1 (date), p3, p6. R14 p2 and p4 checked on the text layer (prose).

| Figure | Where printed | Page check | Verdict |
|---|---|---|---|
| Collection 71, inventory 81, creditors 61, operating cycle 91 days, FY23 | problems P1 to P2, solutions | R10 p4 image: "operating cycle stood at 91 days in FY23 driven by an inventory cycle of 81 days and an average collection period of 71 days... creditor's period stood at 61 days in FY23". R10 p5 "Analytical Approach: Standalone"; R10 p6 FY23 "(Audited)"; R10 p1 dated March 28, 2024 | CORRECT |
| Gross current asset days 275 (31 Mar 2023) and 266 (31 Mar 2022) | problems P3, solutions P3 | R10 p4 image, one sentence: "Gross current assets were 275 days as on March 31, 2023, as against 266 days as on March 31, 2022." SAME document, SAME page, SAME vintage (rationale of 28 Mar 2024) | CORRECT |
| Unexecuted order book Rs 2,035.11 Cr at 31 May 2025 | problems frame | R14 p3 image: "an unexecuted order book of Rs. 2035.11 Crs. as of 31 May 2025"; R14 p1 dated 28 July 2025 | CORRECT |
| FY25 total operating income Rs 798.93 Cr | value of a day, all charts | R14 p3 image "Rs. 798.93 Crs. in FY25 (P)"; R14 p6 image, table "KEY FINANCIAL INDICATORS (Standalone)", Total Operating Income, FY25 column "Unaudited" | NEEDS CAVEAT: "provisional" every time (already printed). R14's own FY23 and FY24 income differ from R10 and R12, so FY25 from R14 is never drawn in one series with R10 or R12 years |
| About 65% roads and bridges; all projects in Maharashtra | problems frame | R14 p4 "Road Work / Bridges account for ~65% of unexecuted order value on 31 May 2025"; R14 p2 "all projects situated in the state of Maharashtra" | CORRECT |
| Three quotes (earnest money and retention; milestone billing; government payers slow) | problems P1 to P3 | R10 p4 image, word for word; no speaker (agency prose) | CORRECT |
| Value of a day Rs 2.19 Cr | problems P1, solutions footnote | script: 798.93 / 365 = 2.1888, rounds to 2.19 | CORRECT |
| Rs 21.89 Cr (10 days), Rs 65.67 Cr (30 days) | solutions, rule 13 marks | script: 10 x 2.1888 = 21.89; 30 x 2.1888 = 65.67 (unrounded rate); equal to calc clean run | CORRECT |
| Operating cycle 91 to 81 to 61; collection 71 to 61 to 41 | solutions P1 marks | script: 81 + 71 less 61 = 91; less 10 = 81; less 30 = 61. Calc clean run agrees | CORRECT |
| Gross current asset days 275 to 265 to 245 | solutions P3 marks | script: 275 less 10 = 265; less 30 = 245. Calc clean run agrees | NEEDS CAVEAT: the rationale does not state the basis of gross current asset days (applied, see A6) |
| S-C: inventory 81 to 71, cycle 81, Rs 21.89 Cr | solutions P2 mark | calc clean run | NEEDS CAVEAT, ruling (b) wording (applied, see A5) |

Mix check: the days are FY23 (R10) and the value of a day is FY25 (R14). On FY23 income from R10 p6 (1,187.70) a day is worth more than on FY25, so the printed cash figures are the smaller ones. Ruling (a) footnote applied.

## Must-fixes (all applied)

M1. **Circular calc assert.** calc/jm-savings.ts assert 3 handed simulate's cash to priceLevers and compared the two; it could not fail on a wrong simulate (the old notes admitted it). Fix: expected cash = the scenario's own step in days x valueOfADay(per day), after leversFor confirms the step is inside the lever's bounds; compared with simulate's release. priceLevers is now handed the independent figure. BREAK=3 (simulator per-day rate drifted 1%) fails all three scenarios (22.11 against 21.89); the old assert would have passed that break.

M2. **Ownership.** Measuring was written as the client's act in two places. Exact wording now:
- problems.md frame: "That book will be turned into cash through RA bills: the company measures the work, prepares, reviews and submits each bill and invoices it; CIDCO and state government bodies acknowledge, certify and pay it."
- problems.md P1: "whose desk it sits on (ours to measure, prepare, review, submit or invoice; the client body's to acknowledge, certify or pay)"
- problems.md P2: "whether the wait is ours (measuring the work, preparing, reviewing and submitting the bill) or the client body's (acknowledging and certifying it)"; Reading: "until the company has measured the milestone and the client body has accepted it."
- solutions.md P1: "which waits are ours (measuring, preparing, reviewing, submitting, invoicing) and which are the client body's (acknowledging, certifying, paying)"
- webapp-fit.md: "Measuring, preparing, reviewing, submitting and invoicing are the company's own acts; acknowledging, certifying and paying (collection) are the client's."

M3. **A13, no signed figure.** problems.md P1 chart said creditors "drawn as a negative span", an open door to a minus sign in print. Now: "creditors 61 (drawn as a span that shortens the cycle; the label reads 61 with no sign)".

M4. **No accounting product named.** webapp-fit.md named a specific accounting package. Now: "an ERP, an accounting package, or spreadsheets the site keeps".

## Should-fixes

S1. (applied) Ruling (a) footnote, exact: "FY23 days (the latest published) valued at FY25 provisional income per day; on FY23 income the figures would be larger." In solutions footnote, problems P1, calc output and notes.
S2. (applied) Ruling (b): S-C prints with "inventory days' basis not stated; valued at income per day, so approximate". It is kept because the Problem 2 chart needs it.
S3. (applied) Ruling (c): rows are alternatives, never added; S-A and S-C release the same cash through different legs. In solutions top line and footnote, webapp-fit never-claim 6, calc output header and notes.
S4. (applied) webapp-fit kept-out wording: the out-of-scope list named entity types and bank instruments in terms on the kept-out list. Now "Any legal entity other than the one company connected.", "Bank instruments and margin money, and earnest money or security deposits held by clients.", never-claim 8 "Bank instrument, deposit, land, other entity or currency tracking.", never-claim 4 "Any interest figure."
S5. (applied) webapp-fit portfolio screens were incomplete against lib/navigation.ts. Now "plus Ask Crestline, Projects, Portfolio Overview and Project Hierarchy".
S6. (applied) Problem 3 marks: footnote "The rationale does not state the basis of gross current asset days; the marks take the same days off, so they are approximate."
S7. (not applied, out of this ticket's files) data.md section 2 lists R14's FY22 and FY24 income but not R14's FY23 income, which differs from R10's. Add it as a differing-sources row so no one draws R14 FY25 beside R10 FY23 in one series.
S8. (not applied) problems P1 title "71 days of revenue waiting on government payers": R10 p4 says the clients are government bodies, and the top ten carry 92% of FY23 revenue, so it holds; if JM-5 wants it airtight, "waiting on payers that are mostly government bodies".

## Applied log

| File | Change |
|---|---|
| calc/jm-savings.ts | M1; S-C note; ruling (a) and (c) lines; valueOfADay imported. Replaced with the exact script that ran (compared after the CR strip: identical) |
| calc/jm-savings-output.txt | four broken runs and the clean run, byte-identical to the scratch run |
| calc/notes.md | run line, R14 p6 cite, assert 3 row, M1 note, limitations 1, 2, 5, Problem 2 map row |
| problems.md | M2 (three places), M3, P1 value-of-a-day line with ruling (a) |
| solutions.md | top line (c), footnote (a) and (c), M2, S-C mark (b), S-C alternative line, P2 honest-limit wording, P3 footnote S6 |
| webapp-fit.md | M2, M4, S4, S5, never-claim 6 (c) |

Calc run (app repo): written with the Write tool as scripts/_tmp-jmm4-savings.ts; tsc clean on it; `BREAK=1..4` each exit 1 with the intended asserts failing; clean run exit 0, ALL ASSERTS PASS; deleted by exact name; `git status` in porcelain form then showed only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`.

## Final scans (after the last edit)

Scope: problems.md, solutions.md, webapp-fit.md, calc/notes.md, calc/jm-savings.ts, calc/jm-savings-output.txt, qa-report.md. Each file must meet a minimum region size or the scan stops. Each scan carries a planted hit, confirmed absent first, then caught. Numbers anchored with `(?<![\d.\w])`.

| Scan | Planted hit | Result |
|---|---|---|
| Number trace against data.md, depth.md and the calc output | caught | untraced 0 |
| Dashes as punctuation (unicode dashes, spaced hyphen, double hyphen) in .md | caught | 0 hits |
| Other company names (the ticket's list) | caught | 0 hits |
| Kept-out terms (the ticket's list, plus agency names and grades, named accounting products) | caught | 0 hits |

Scans were re-run after this table was written; the counts above are that final run.

Lessons applied: the protocol's page-image rule (all key inputs read off rendered pages), and "re-run every scan after your last edit".
