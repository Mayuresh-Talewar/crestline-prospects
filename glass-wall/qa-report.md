# Glass Wall Systems: QA report (GW-2)

**Verdict: PASS.** No open defects. Fixes applied during the pass are listed at the end.

## Checks run
* Page images re-opened and every printed company figure read from them: RHP p27 (top 10 clients 86.40%), p38 (receivables 1,089.62; days 88, 67, 77, 109, 66, 45; notes), p39 (retention 153.75 and 205.81; past due 119.53, 116.55, 148.44; 5.00%; 12 to 24 months), p82 and p83 (cash, bank balances, borrowings), p84 (revenue 4,569.71, 2,783.27, 3,043.42), p281 (SAP sentence), p369 (contract assets 491.54, 409.89, 536.81; liabilities 880.01; 4,480.71 over time; overseas 2,065.73), p429 (payment terms wording), and investor presentation slide 28 (changes in working capital minus 21.4, 2.6, minus 17.7). All match.
* Value of a day verified on its page: revenue 4,569.71 Mn on RHP p84, divided by 365 = Rs 1.2520 Cr.
* Every derived figure recomputed by a separate Decimal script (round half up): receivable growth 114.6%, revenue growth 64.2%, block days 126.3 (FY25 120.3, FY24 140.8 on 366 days), block Rs 158.12 Cr, retention 35.96 Cr, 28.7 days, 42.8% non-current, net cash 79.25 Cr, 10 day Rs 12.52 Cr, 30 day Rs 37.56 Cr, block after steps 116.3 and 96.3 days and Rs 145.60 Cr and Rs 120.56 Cr, past due share 11.0% and 23.0%. All agree with the TypeScript calc output.
* Calc asserts (no negative release, interest zero, independent days x value of a day cross-check, payables never release cash, basis match) each broken once and each failed; the clean run passed all. Temp file deleted by exact name; git status shows only the 2 pre-existing entries.
* Rule checks: rows never added (stated in solutions and notes); rule 12 and rule 13 (every dashed mark is a calc value, labelled days, cash, "Scenario, not a forecast"; Problem 3 draws no invented retention scenario); no signed numbers (growth and decline written in words); KEPT OUT items absent; SAP only as "will feed, read-only, built during the pilot" plus the filing's own sentence on p281, no version; no interest printed; no vendor timing offered as a saving; ownership split as ruled (measure, prepare, review, submit, invoice ours; acknowledge, certify, pay the client's); respect opening present; each problem names source page, date, basis label and what the filings cannot tell.
* Final scans (scripts, each with a planted hit that was caught): company names 0 hits; KEPT OUT terms 0 hits; dashes 0 hits; signed numbers 0 hits; untraced numbers 0 (one test parameter, 200, in calc/notes.md is the break test setting, not a company figure).

## Fixes applied
* Removed the order book "more than doubled" sentence from Problem 2: not re-read on its page image this pass.
* Reworded "older balances are not what grew" to "the share of old balances fell": the rupee amount rose slightly (Rs 11.65 Cr to Rs 11.95 Cr) while the share fell.
* Added the rounding note to Problem 1 (108.96 plus 49.15 shows 158.11; the total is summed from unrounded Rs million, 158.12).
* Rewrote "chosen to publish" (risk factor wording) and "process mining toy" in plain terms.
* Left unprinted: FY25 block in rupees (91.75 in the old output against 91.76 by round half up).

## Known limits
* Retention is described on p369 as sitting inside contract assets and receivables, but the filing does not give the split, so it is shown beside the block and never added.
* Contract assets and receivables are priced as one block on the simulator's single asset leg; the app has no combined lever.
