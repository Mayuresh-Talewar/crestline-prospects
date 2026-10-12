# Khilari savings calc: notes (KH-2+3)

Files: `kh-savings.ts` (the script, run from the app repo as `scripts/_tmp-khilari-savings.ts` with `npx tsx`, then deleted) and `kh-savings-output.txt` (its full clean output).

## Inputs and basis
- Every input is CARE Ratings, press release 06 Oct 2025, standalone, page 3, except FY23 which is not used in the calc.
- Value of a day: FY25 total operating income Rs 639.86 crore / 365 = Rs 1.753 crore (prints as Rs 1.75 crore in the output; the same line is in kh-calc-output.txt). FY25 is UNAUDITED in that release and every printed use says so.
- Days used: FY25 collection 51, inventory 32, creditors 39 (cycle recomputes to CARE's printed 44); FY24 audited collection 33, inventory 17; GCA 220 (FY24) and 266 (FY25). The FY24 figures from CARE 04 Oct 2024 (unaudited vintage) are never used.
- No contract terms passed (none published). Passing a certification or payment term would let `simulate()` clamp a leg UP to that window; passing none keeps every floor at zero, so a step is exactly the step asked for.
- No interest. Rate 0%, because the company discloses none. Every "interest a year" line in the output is Rs 0.00 by design.

## What ran
App functions, imported unchanged: `simulate` from `@/lib/finance/cycle-simulation` and `priceLevers` from `@/lib/insights/levers`. Bounds read first: asset legs clamp to [term or 0, max(now x 1.4, now + 30)] for collection and [0, max(now x 1.5, now + 15)] for stock; the payables leg's ceiling is the vendors' agreed term, or today's figure where none is stated.

| Row | Move | Days | Cash released once (Rs crore) | Operating cycle |
|---|---|---|---|---|
| a | collection 51 to 41 | 10 | 17.53 | 44 to 34 |
| b | collection 51 to 21 | 30 | 52.59 | 44 to 14 |
| c | collection back to FY24's 33 | 18 | 31.55 | 44 to 26 |
| e | inventory (unbilled work) 32 to 22 | 10 | 17.53 | 44 to 34 |
| f | inventory back to FY24's 17 | 15 | 26.30 | 44 to 29 |
| p | creditors 39 to 60, no agreed terms | 0 | 0.00 | 44 to 44 |
| d | GCA 266 back to 220, context only | 46 | 80.64 (NOT a saving, see below) | not a leg |

Rows overlap and are never added. (a), (b), (c) are three sizes of one move; (e), (f) are two sizes of another.

(e) and (f) were added beyond the brief's four scenarios because rule 13 needs a calc value for the unbilled-work chart; they use the same value of a day. The engine calls this slot "Stock on site"; CARE's inventory period carries unbilled revenue (CARE 06 Oct 2025 p3), so print it as "unbilled work", never as stock.

## Asserts, each broken once (full output: kh-savings-breaks.txt)
| Assert | How it was broken | Result |
|---|---|---|
| No negative release | arg `negative`: collection lengthened 51 to 61 | failed, -17.53, exit 1 |
| Interest equals 0 (simulate and priceLevers) | arg `interest`: rate 9% | failed on every moved row (10 failures), exit 1 |
| priceLevers cash equals simulate cash | arg `levers`: Rs 1 crore added to the action value | failed on all five rows, exit 1 |
| Payables never release cash | arg `payables`: 60-day vendor term passed, creditors 39 to 60 | failed, 36.81, exit 1 |
| Clean run | no arg | ALL ASSERTS PASSED, exit 0 |

The 9% and the 60-day term exist only inside the break runs; neither is a Khilari figure and neither appears in the clean output.

## Decision on (d), gross current asset days: NOT printed
Computed (46 days x Rs 1.753 crore = Rs 80.64 crore) because the ticket asked, and kept out of every printed line, for three reasons:
1. Gross current assets are not all receivables. CARE's own explanation of the 266 days (06 Oct 2025 p3) names balances outside the billing cycle as well as debtors and inventory; one of them is a KEPT OUT item. Pricing the whole 46 days as cash that faster billing and collection would release is false.
2. It is not a simulator leg. It is plain days x value of a day, so it carries none of the engine's bounds or asserts.
3. It would overlap almost entirely with (c) and (f), since debtors and inventory sit inside GCA. A reader would add them.
The 167 to 220 to 266 trend may appear as a context line (problems.md, problem 3) with that caveat and no rupee figure.

## Repo hygiene
Temp file `scripts/_tmp-khilari-savings.ts` deleted by exact name after each use (clean run, and the break runs saved in `kh-savings-breaks.txt`); the porcelain git status afterwards lists only the two untracked items that were there before (the agent scorecard doc and the onboarding docs folder). No commits, no DB.
