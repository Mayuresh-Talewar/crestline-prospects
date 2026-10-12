# B. G. Shirke: review of slots-unified.md (SH-6)

Reviewed against data.md, problems.md, solutions.md, webapp-fit.md, calc/, qa-report.md, README.md (SH-3 rulings binding), FIXED-PAGES.md, the app's CLAUDE.md and lib/navigation.ts.

## Verdict: GO AFTER FIXES

No figure is wrong. Two must-fixes are about who the readers are and what a letter claims. Ten should-fixes are wording that says slightly more than the source does. No NO-GO.

## How it was checked

- Source: R1 (India Ratings, 20 Feb 2026), extracted from src/d/indra-81548.json into scratch with span tags joined. The source splits "INR1</span><span>5.48" across two spans, which a naive extraction reads as "INR1 5.48". Rendered, it is INR15.48 billion, so ₹1,548 Cr is correct.
- Script: scratch SH-6/check.py, run `python -I check.py pack slots-unified.md <scratch>`. It asserts minimum region sizes: reader table over 3,000 characters, printed region (## Keys to ## Checks) over 20,000, and all 16 page headings present. Trace corpus: R1 numbers, and R1 INR billion x 100, the Contact Us page, calc/shirke-savings-output.txt, and recomputes done in the script (shares x 365, shares x revenue, 5,916 / 365 x 10 and x 30, the step days, 45% and 2% growth, 47.4, 15,700 / 5,916). data.md and src/sh-calc-output.txt are NOT in the corpus.
- Planted run (`--plant`): fired every class: untraced number, other company, dash, placeholder, comment, internal reference, KEPT OUT term, interest figure, signed number, "The design to reproduce".
- Clean run: untraced numbers 0. Other company names 0, dashes 0, placeholders 0, KEPT OUT terms 0. Quotes not found verbatim in R1: 0 (compared with whitespace and hyphens normalised). The scan reports three false positives: "04 Verified:" is fixed page 11 copy; "+9" is the phone number +91; "rate" appears in the vendor lens and in a page 15 heading, neither with an interest figure.
- Calc: calc/shirke-savings.ts was copied into scratch only (cmp identical), with a scratch tsconfig mapping @/ to the app, and run with the app's tsx. Exit 0. Output is byte-identical to calc/shirke-savings-output.txt. App repo `git status --porcelain` before and after: only `?? docs/03-agent-scorecard.md`, `?? docs/onboarding/`.
- Logo viewed: assets/shirke-group-logo.png is the orange SHIRKE wordmark with ®. It is used as supplied. The SHA-1 was not re-checked against a fresh download in this ticket.
- App: Payment Timing (/p2p/payment-timing), Client (project), the cycle simulator, Ask Crestline and Alerts & Tickets all exist. The Client screen's step x month grid exists (components/client/workspace/client-workspace.tsx, "delay by month"). No screen is called "Vendor advisor".

## Figures, per verdict

| Figure | Source / recompute | Verdict |
|---|---|---|
| IND AA-/Stable, from IND A+, A1+ affirmed, 20 Feb 2026 | R1 rating action | CORRECT. The rating is on the bank loan facilities; see S1 |
| ₹5,790 / 5,890 / 5,916 Cr revenue | R1 KRD 57.9 / 58.9 / 59.16 x 100 | CORRECT |
| 31% / 36% / 44% gross; 14% / 17% / 17% net | R1 KRD | CORRECT |
| 113.2 / 131.4 / 160.6; 51.1 / 62.1 / 62.1 days | share x 365 | CORRECT. Labelled [DAYS] |
| ₹1,795 / 2,120 / 2,603 Cr | share x revenue | CORRECT. Labelled [CR]; for "at 31 March 2025" see S3 |
| ₹16.21 Cr a day; ₹162.08 / ₹486.25 Cr | 5,916 / 365; x 10, x 30; calc rows | CORRECT. For the cover footnote arithmetic see S4 |
| 150.6 / 130.6; 52.1 / 32.1 | calc rows | CORRECT |
| 45%, 2%, 47.4 days, 161 dots | 2,603.04 / 1,794.9; 5,916 / 5,790; 160.6 less 113.2 | CORRECT |
| ₹15,700 Cr, 2.65 times | R1 KRD 157 bn; "around 2.65x" | CORRECT |
| About ₹6,000 Cr FY26 | R1 KRD "about INR60 billion" | CORRECT |
| 17% CAGR FY21 to FY25 | R1 KRD | CORRECT |
| ₹1,548 / 1,377 / 1,080 Cr cash | R1 Liquidity | CORRECT. For tense and date see S2 |
| 27% / 65% limit use | R1 Liquidity | CORRECT |
| ₹2,820 / 2,707 Cr, 22.5%, 22.3% | R1 KRD | CORRECT |
| EBITDA ₹1,290 / 1,320 Cr; OCF ₹1,246 / 930 Cr | R1 Key financial indicators; KRD | CORRECT |
| 81%, 47, 15, 8, 4, 3, 2% | R1 KRD "About 81%" | NEEDS CAVEAT: print "About 81%" (S5) |

## Rules

| Rule | Result |
|---|---|
| Section citations (web release, no pages) | PASS after S10. Every footnote names its section; only the [SRC] key named none (used on p3 only) |
| Rule 13 / A14 | PASS. p4, p5, p9 B, p10 and p12 carry dashed, hollow calc values with "Scenario, not a forecast". p8 upper card is history only; p9 A is client mix with no scenario mark |
| A12 | PASS. Page 8 stages carry names and ownership only; the 44% bracket is the published total, not a split |
| A13 | PASS. No signed numbers |
| No interest | PASS. No rate and no interest figure; the [NOINT] and p15 no-rate variant are used |
| Rows never added | PASS. "one wait at two depths, never added" on every pair |
| Payables never a saving | PASS. "Paying vendors later: ₹0 counted" on p9, p10 and p12 |
| Ownership | PASS. Billing is OURS, certification and payment are the CLIENT's, and page 8 joint measurement is both |
| Screens true today | PASS after S7 |
| KEPT OUT | PASS. 0 hits: sensitive items, FY20/FY21 days, dossier revenue, defence/stadium, ERP names, precast/plant/inventory, trapped, arbitration, claims |
| Editions | 3 readers is fine. FAIL on exact titles (M1) and on support for "Money is not short" (M2) |

## Must-fixes

**M1. A title does not match the group site.** shirkegroup.com "Our Management" prints "Vijay B. Shirke, Chairman & Managing Director". The pack prints "Chairman and Managing Director" on the cover line and in the TO block. The pack note (line 32) says "Titles exactly as printed there", which was not true.
Fix: "Chairman & Managing Director" in both lines, and correct the note. "Joint Managing Director" matches for both Jay V. Shirke and Nandkishor V. Kudale.

**M2. "Money is not short" is unsupported in two editions.** Edition A supports it with cash, net cash and 27% limit use. Editions B and C replace the 27% with the order book and the EBITDA margin, and neither of those is liquidity. The letters also differ in a fact for no reason, which is not neutral.
Fix: the same paragraph in all three editions: cash, net cash positive and 27% fund-based use. Each edition still has its own closing paragraph.

## Should-fixes (all booklet-facing, all applied)

- S1. "upgraded the company to IND AA-/Stable" (all 3 letters) and "Long-term rating" (p3 row i). R1 upgrades the BANK LOAN FACILITIES. The issuer rating in the same table reads WD. Fix: "the company's bank loan facilities".
- S2. "It holds ₹1,548 Cr" (letters). This is present tense on a September 2025 figure. Fix: "It held ... at the end of 1HFY26".
- S3. p4 hero "at 31 March 2025". R1 gives a share of revenue and does not say it is a year-end balance. Fix: "in gross working capital, FY25".
- S4. Cover footnote "₹16.21 Cr a day; x 10 = ₹162.08 Cr". 16.21 x 10 is 162.10. Fix: "₹16.21 Cr a day, rounded; ₹5,916 Cr / 365 x 10 = ₹162.08 Cr".
- S5. "81%" (p7 lens 04, p9 takeaway). R1 says "About 81%". Fix: "About 81%".
- S6. p3: "The latest reads like a list of strengths". R1 lists three strengths and two weaknesses, so this becomes "The latest leads with its strengths." "Three of the four are about scale": a rating is not scale, so this becomes "about strength".
- S7. p10 "Vendor advisor" is not a screen. Fix: card titled "Payment Timing".
- S8. p12 "₹1,548 Cr already in cash". The figure includes mutual funds. Fix: "in unencumbered cash and mutual funds".
- S9. p13 "Crestline shows which projects..." is present tense about their books. Fix: "Once connected, Crestline would show".
- S10. [SRC] key names no section. Fix: append "rating action and Key Rating Drivers" (p3, its only use).

Not booklet-facing, left as is: the "## Checks" block describes the SH-5 script; page headings carry "(fixed, filled)" notes that are instructions and never printed.

## Applied log

| # | Where | Change |
|---|---|---|
| M1 | Reader table, Vijay B. Shirke: cover line and TO block; line 32 note | "Chairman and Managing Director" became "Chairman & Managing Director"; note now says titles are as printed, ampersand included |
| M2 + S1 + S2 | Letter paragraph 2, all three editions | One identical paragraph: bank loan facilities upgraded; "It held ₹1,548 Cr ... at the end of 1HFY26"; net cash positive; 27% fund-based use; "Money is not short." |
| S1 | p3 row i | "Long-term rating on bank loan facilities, upgraded from IND A+ on 20 February 2026; short-term affirmed at IND A1+." |
| S3 | p4 hero line | "in gross working capital, FY25" |
| S4 | p1 footnote | "₹16.21 Cr a day, rounded; ₹5,916 Cr / 365 x 10 = ₹162.08 Cr" |
| S5 | p7 lens 04, p9 takeaway | "About 81%" |
| S6 | p3 lead and closing line | "leads with its strengths"; "about strength" |
| S7 | p10 card | "Card · Payment Timing · Sets each vendor payment ..." |
| S8 | p12 | "already in unencumbered cash and mutual funds" |
| S9 | p13 | "Once connected, Crestline would show which projects and which bills added them." |
| S10 | [SRC] key | "... standalone: rating action and Key Rating Drivers." |

Each replacement string was scanned in scratch (SH-6/replacements.txt, planted run fired every class; clean run 0 on every class) before it went in. The full pack scan was re-run after the last edit; the results are in the SH-6 report.
