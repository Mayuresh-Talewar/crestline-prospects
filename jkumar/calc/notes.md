# J. Kumar Infraprojects: savings calculator notes (JK-3)

Files: `jk-savings.ts` (the script, as run) and `jk-savings-output.txt` (full output: four break runs, then the clean run). Run 8 Oct 2026 from the app repo as `scripts/_tmp-jkumar-savings.ts` with `npx tsx`; the temp file was then deleted by exact name and the app repo's git status showed only its 2 pre-existing entries.

## Basis
STANDALONE, AR FY2025-26 vintage (filed 27 Aug 2026). Rs crore. Every input is in data.md:

| Input | Value | Source |
|---|---|---|
| Revenue from operations FY26 | 5,693.89 | AR26 PDF p89 (printed 173) |
| Value of a day | 5,693.89 / 365 = 15.5997 | calc |
| Trade receivables 31 Mar 2026 | 1,485.29 (95.2 days, closing basis) | AR26 PDF p89 (printed 172) |
| 6 months to 1 year overdue bucket | 141.15 | AR26 PDF p97 (printed 188) |
| Borrowings drawn (the cap) | 587.44 | AR26 PDF p100 (printed 195), the "Total Debt" line of the debt reconciliation, printed in Rs lakh. Verified on the rendered page image, 8 Oct 2026 |
| Interest, low end | 8.1% (overdraft, "8.1% to 11.1% p.a.") | AR26 PDF p100 (printed 194), image checked |
| Interest, high end | 12.35% (cash credit, "9.00% p.a. to 12.35 % p.a.") | same page, image checked |
| Payables, payable days | 849.54, 82.8 | AR26 PDF p89; jk-calc |

Our computed 11.5% rate is never used; break run 2 proves the assert refuses it.

## The app's clamp bounds, read before the run
`lib/finance/cycle-simulation.ts`: receivables (dso) move between `terms.payment ?? 0` (the floor) and an upper bound above today's figure; payables (dpo) between 0 and `terms.vendor` (or today's figure when no vendor term is given). No payment term and no vendor term were passed: the filings state neither, and a vendor term would raise the payables ceiling. So receivables can step down freely, and payables cannot be stretched at all (the stretch attempt held at 82.8 days and released 0.00). `lib/insights/levers.ts` `priceLevers` prices carry as cash x rate / 100; it was called once per disclosed rate end.

## Problem chart to calc row (mapped before the run)

| Problem (problems.md) | Chart | Calc row | Days | Cash | Interest a year (8.1% to 12.35%) |
|---|---|---|---|---|---|
| P1 Target met, receivable book did not move | receivables, inventory, advances FY25 to FY26 | S10 | 95.2 to 85.2 | 156.00 | 12.64 to 19.27 |
| P1 (second scenario) | same | S30 | 95.2 to 65.2 | 467.99 | 37.91 to 57.80 |
| P2 A block of bills went past due | ageing from due date FY25 vs FY26 | SBK (the 141.15 bucket in days of revenue) | 95.2 to 86.2 (9.05 days) | 141.15 | 11.43 to 17.43 |
| P3 Retention, in the CFO's words | four quarter series | none. Retention is not in the accounts, so it is never a calculator input | NA | NA | NA |

Rows overlap and are never added (SBK sits inside S10 and S30). All cash rows are under the 587.44 cap (26.6%, 79.7%, 24.0%).

## Asserts, each broken once

| Assert | Break | Result |
|---|---|---|
| No negative release | BREAK=1 flips the S10 release sign | FAIL, exit 1 (the cross check also caught it) |
| Interest only at the two disclosed ends, within the cap | BREAK=2 adds our computed 11.5% | FAIL, exit 1 |
| Independent cross check: days x value of a day equals simulate | BREAK=3 adds one day to the hand count | FAIL, exit 1 (171.60 vs 156.00) |
| Payables never release cash | BREAK=4 prices a 30 day stretch by hand | FAIL, exit 1 (307.80) |
| Clean run | none | ALL ASSERTS PASSED, exit 0 |

## Caveats for any page that prints these
1. Scenario, not a forecast. Days come out of waits that are the client's to end (pay); our part is what makes a bill payable and chased.
2. Interest saved only if the cash repays debt. The company closed FY26 with "net cash of Rs 264 crore" (AR26 printed 13), so the interest range applies only to the 587.44 of borrowings that exist.
3. Receivables may carry tax that revenue does not; dividing by revenue keeps the cash per day on the conservative side.
4. Process note: the temp file was deleted before the copy was written here; `jk-savings.ts` is the identical source text, written from the same content that ran.
