# B. G. Shirke: savings calc notes (SH-3)

Script: `calc/shirke-savings.ts`. Output: `calc/shirke-savings-output.txt` (31 rows, all asserts pass).
Run from inside the app repo as `scripts/_tmp-shirke-savings.ts` with `npx tsx`, then deleted by name. `git status --porcelain` afterwards showed only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`.

## Inputs

| Input | Value | Source |
|---|---|---|
| FY25 revenue | Rs 5,916 Cr | Ind-Ra R1 table, 20 Feb 2026 (INR 59.16 bn), data.md section 1 |
| Value of a day | Rs 16.2082 Cr | FY25 revenue / 365 |
| Gross WC days FY25 | 160.6 | 44% x 365, Computed, R1 |
| Net WC days FY25 | 62.1 | 17% x 365, Computed, R1 |
| Interest rate | none | No rate is disclosed (data.md section 5). Rate passed as 0 |
| Contract terms | none | None published. No terms passed |

## Problem chart to calc row

| Problem chart | Leg in `simulate()` | Rows |
|---|---|---|
| P1 Gross WC days, FY23 to FY25 (R1) | `cad`, now 160.6 | `P1_gross_step10_*`, `P1_gross_step30_*` |
| P2 Gross WC in Rs Cr, receivables spilling over (R1) | `dso`, now 160.6 | `P2_receivables_step10_*`, `P2_receivables_step30_*` |
| P3 Net WC days, FY23 to FY25 (R1) | same asset step, current liabilities held | `P3_net_step10_*`, `P3_net_step30_*` |
| Vendor timing inside P3 | `dpo`, no vendor terms | `vendor_dpo_plus10_*`, `vendor_dpo_plus30_*` |

## Results (cash released once, never added across rows)

| Step | Gross WC days | Net WC days | Cash released | Interest |
|---|---|---|---|---|
| 10 days | 160.6 to 150.6 | 62.1 to 52.1 | Rs 162.08 Cr | not computed (no disclosed rate) |
| 30 days | 160.6 to 130.6 | 62.1 to 32.1 | Rs 486.25 Cr | not computed (no disclosed rate) |
| Vendors paid 10 or 30 days later | n/a | n/a | Rs 0.00 | n/a |

P1, P2 and P3 are the SAME days seen three ways. The Rs 162.08 Cr (10 days) and Rs 486.25 Cr (30 days) are one release each, never summed across problems.

## Clamp bounds read before the run (`lib/finance/cycle-simulation.ts`)

- With no terms passed: `cad` and `dso` floor 0, ceiling `max(now x 1.4, now + 20)` for cad and `max(now x 1.4, now + 30)` for dso. Steps of 10 and 30 from 160.6 sit well inside, so nothing was clipped (assert `inside clamp bounds`).
- `dpo` with no vendor terms: ceiling = today's figure, so the leg is held and paying later releases nothing. That is the product rule, not a calc choice.
- `priceLevers` (`lib/insights/levers.ts`) priced the two 10-day moves at Rs 162.08 Cr each with interest 0.00; certification is `ours=true`, collection `ours=false`.

## Asserts, each broken once

| Assert | How it was broken | Result |
|---|---|---|
| No negative release | `BREAK=neg`: a minus 10 day step added | 2 failures, exit 1 |
| Interest = 0 | `BREAK=interest`: rate set to 9 | 6 failures, exit 1 |
| Independent cross check (days x FY25 revenue / 365 against `simulate().released`) | `BREAK=cross`: cross check computed as `REVENUE_FY25 / 360` | 4 failures, exit 1 |
| Payables never release cash | `BREAK=payables`: vendor terms of 60 days passed | 2 failures, exit 1 |
| Clean run | none | 31 rows, all asserts passed, exit 0 |

The 9 and 60 in the break runs are test values only; they appear in no output row and in no document.

## Caveats to carry into copy

- Receivable days and unbilled days are not published separately; R1 gives only gross and net shares of revenue. The steps are taken on the published gross figure. Which share is receivables and which is unbilled is exactly what Crestline would measure.
- A day is valued at revenue per day. If the receivable carries GST, a day of receivables is worth more than a day of revenue, so the cash figures are conservative.
- No interest is printed: no rate is disclosed, and with Rs 1,548 Cr of unencumbered cash and 27% average use of fund based limits (R1), released cash would not obviously repay debt.
- Scenarios, not forecasts. Rows overlap and are never added.
