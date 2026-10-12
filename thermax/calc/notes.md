# Thermax: savings calculator notes (TH-3)

Files in this folder:
- `thermax-savings.ts`: the calculator, a copy of the script run from the app repo as `scripts/_tmp-thermax-savings.ts` (deleted after the run; `git status --porcelain` afterwards showed only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`).
- `thermax-savings-output.txt`: the FULL clean run, unedited. Every savings figure in problems.md and solutions.md comes from this file.
- `break-<mode>.txt`: one deliberately broken run per assert, each ending in the AssertionError it was meant to trigger.

Command (from `process-automation-crestline/`): `npx tsx scripts/_tmp-thermax-savings.ts [break mode]`.

## What it runs
The app's own pure functions, unchanged: `leversFor` and `simulate` from `@/lib/finance/cycle-simulation`, `priceLevers` from `@/lib/insights/levers`. Signatures and clamp bounds were read first:
- receivable leg (dso): floor = the client's payment term, or 0 when none is passed; ceiling = the larger of 1.4 x today or today + 30.
- certification leg (cad): floor = the certification window, or 0; ceiling = the larger of 1.4 x today or today + 20.
- payable leg (dpo): floor 0; ceiling = the vendors' agreed terms when given, else today's figure, so with no terms it cannot move up.
- `toTerms()` and the floors would RAISE a leg to a contract window above today's figure, so no contract terms are passed. Thermax publishes none at project level in any case.

## Inputs (all Thermax, AR26, filed NSE 03-Jul-2026, Rs crore)
- Value of a day: Industrial Infra segment revenue FY26 4,348.05 (AR26 p310 to p311, consolidated segment note, AR26 vintage) / 365 = Rs 11.91 cr. Footnote only: the Q1 FY27 recast (4,088.34, Q1 FY27 results p9, NSE 30-Jul-2026) would give Rs 11.20 cr. Never mixed.
- Simulator opening: segment assets 2,490.28 (AR26 p311) / 11.91 = 209.05 days. HEADROOM ONLY. The segment's receivables and contract assets are not published, so the simulator needs some opening figure to step down from; this one is on the same total (the segment) and is never printed as "today". A step's cash does not depend on the opening, only on days moved x the daily rate.
- Ageing (consolidated, AR26 p256), cash flow (AR26 p228), PAT (AR26 p227), contract assets (AR26 p256, p289): all re-checked on the page image in TH-3 (data.md section 13a).
- Financing rate passed: 0%. Garvis TH-3: no interest printed. The group is net debt free (CRISIL 19-Jan-2026, "net nil debt") and the disclosed rates sit on small facilities.

## Results (from thermax-savings-output.txt)
| Scenario | Days | Cash released once | Interest |
|---|---|---|---|
| (a) 10-day step | 10 | Rs 119.12 cr | none printed |
| (b) 30-day step | 30 | Rs 357.37 cr | none printed |
| (c) INTERNAL ONLY, never printed | 31.67 days of segment revenue = Rs 377.27 cr more than a year past due (consolidated) | NOT a savings claim | none |

Print form (the app's rupee formatter: 0 decimals at Rs 100 cr and above): Rs 119 cr and Rs 357 cr. Scenario (c) is INTERNAL ONLY and is never printed in any form (Garvis TH-4 ruling a: a consolidated bucket divided by segment revenue is two totals in one figure).

Each step was run on two legs separately, "Invoiced, waiting to be paid" (dso) and "Built, waiting to be certified" (cad). Both give the same cash because only one published daily rate exists at segment level (segment revenue); the app would use invoiced value per day on the receivable leg, which Thermax does not publish by segment. The two legs are alternatives for the same step: rows overlap and are never added.

Why (c) is context only: the over-one-year bucket is a consolidated figure covering every segment. Expressing it in days of Industrial Infra revenue gives a sense of size (about a month of the project business's revenue); it is not a release the segment can claim. That 31.67 sits close to the 30-day step is arithmetic, not a claim that a 30-day step clears the bucket.

## Asserts, and proof each one bites
| Assert | Break mode | Failure seen |
|---|---|---|
| no negative release | `neg` (asks for the leg to go UP 10 days) | `negative release: -119.12` |
| interest equals 0 (simulate carry) | `rate` (7.3% passed) | `interest must be 0 (none printed)` |
| interest equals 0 (priceLevers carry) | `lcarry` (7.3% passed to priceLevers only) | `lever carry must be 0 (none printed)` |
| one priced lever per run | `count` (Rs 1 cr of certified-uncollected added) | `exactly one priced lever per run` |
| priceLevers cash equals simulate cash | `lever` (lever value 0.1% off) | `priceLevers cash must equal simulate cash` |
| payables never release cash | `dpo` (a vendor ceiling of 10 days above today) | `payables released cash: 119.12` |
| ageing buckets sum to the printed total | `age` (one bucket +1) | `FY26 ageing does not sum to 2500.19` |

The clean run then passed every assert (`ALL ASSERTS PASSED`, exit 0).

## Caveats to carry into print
- Cash figures are scenarios, released once, never a forecast and never annual.
- Receivables carry GST and segment revenue does not, so a day of receivables in cash is larger than a day of revenue: our cash figures are conservative.
- Paying vendors later is never a saving; the dpo guard proves the app will not show it as one.
- Savings sit on the Industrial Infra segment only (Garvis TH-2/TH-3), never on consolidated totals.
- The minus signs in the output files are arithmetic, not prose dashes.
