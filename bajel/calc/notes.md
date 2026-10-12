# Bajel Projects: calculator notes (BJ-3)

Files in this folder:
- `bajel-savings.ts`: the calculator, byte-identical to the copy that ran from the app repo (`scripts/_tmp-bajel-savings.ts`, deleted after the run).
- `bajel-savings-output.txt`: its full clean output. Every printed savings figure comes from here.
- `bajel-savings-break-log.txt`: each assert broken once, with the failure it raised.

## What it runs

The app's own pure functions, unchanged: `leversFor` and `simulate` from `lib/finance/cycle-simulation.ts`, and `priceLevers` from `lib/insights/levers.ts`. Run with `npx tsx` on 8 Oct 2026.

## Inputs (all STANDALONE, AR26 vintage, Annual Report FY2025-26 filed on NSE 17 Jul 2026)

| Input | Value | Source (page image checked) |
|---|---|---|
| Revenue from operations FY26 | Rs 2,791.58 Cr (printed in lakh, checked on the page image) | AR26 p257 |
| Value of one day, revenue / 365 | Rs 7.65 Cr | Computed |
| Receivable days today | 202.8, as 365 / 1.80 | AR26 p320 Note 45, company definition, average receivables |
| Interest rates | 6.5% and 10%, the two ends of the disclosed range | AR26 p291 Note 18 |
| Interest cap | Rs 349.96 Cr: total current borrowings (printed in lakh, checked on the page image) = working capital facilities Rs 31.00 Cr + vendor bill discounting Rs 318.96 Cr, both stated at 6.5% to 10% | AR26 p291 Note 18 |
| Excluded | Interest on mobilisation advances (Rs 15.20 Cr in FY26, AR26 p297): not in Note 18 and its rate is not disclosed | |
| Targets | None. The company states no receivable or working capital target (data.md s7) | |

No contract terms were passed. A payment term or certification window would set a floor, and a vendor term would raise the payables ceiling, so passing an invented one is exactly what the brief forbids.

## Bounds read before running

- Receivables leg (`dso`): floor is the payment term, here none, so 0; ceiling is set by the app's own rule in `leversFor`, here 283.9. Both steps sit inside: 202.8 to 192.8, and 202.8 to 172.8. Neither was clamped (asserted).
- Payables leg (`dpo`): with no vendor term the ceiling is today's 113.0, so it cannot be raised. Its rate (payables / payable days) is a test input only, used to prove the leg cannot release cash. It is never printed as a finding.

## Results (overlap, never added)

| Scenario | Receivable days | Cash released once | Interest a year at 6.5% | at 10% |
|---|---|---|---|---|
| (a) 10-day step | 202.8 to 192.8 | Rs 76.48 Cr | Rs 4.97 Cr | Rs 7.65 Cr |
| (b) 30-day step | 202.8 to 172.8 | Rs 229.44 Cr | Rs 14.91 Cr | Rs 22.94 Cr |

Both releases sit below the Rs 349.96 Cr cap, so the cap does not bind. Interest is saved only if the cash repays that borrowing.

## Asserts, each broken once (log in this folder)

| Assert | How it was broken | Result |
|---|---|---|
| No negative release | Step (a) reversed to +10 days | Failed, as it should |
| Interest only at 6.5% and 10% | An 8% rate added | Failed |
| Interest within the cap | Cap added to the base | Failed |
| priceLevers cash = simulate cash | Lever value nudged by one lakh | Failed |
| One lever only, retention NA | A retention value passed | Failed (2 levers) |
| Payables never release cash | A vendor term 30 days above today | Failed (and the no-terms assert) |
| No terms passed | A certification window of 0 passed | Failed |
| No clamp on either step | Forced | Failed |

Then the clean run: exit 0, all asserts passed.

## Problem chart to calc row (rule 13)

| Problem chart | "Today" (filing) | "With Crestline" mark | Calc row |
|---|---|---|---|
| P1 receivable days, FY25 and FY26 | 139.8 and 202.8 (AR26 p320) | hollow dashed marks at 192.8 and 172.8 | `[chart] P1` |
| P2 not due and overdue, FY25 and FY26 | Rs 882.77 / 448.34 Cr and Rs 1,530.12 / 399.35 Cr (AR26 p280) | hollow dashed bars of Rs 76.48 Cr and Rs 229.44 Cr beside the FY26 not-due bar | `[chart] P2` |
| P3 operating cash flow, FY25 and FY26 | Rs 69.13 Cr and Rs 21.09 Cr (AR26 p258) | separate labelled callout on its own scale: cash released once, Rs 76.48 Cr and Rs 229.44 Cr (BJ-4 Garvis ruling (a); the `[chart] P3` row is no longer printed) | `Cash released once` |
| P4 borrowings at 6.5% to 10%, FY25 and FY26 | Rs 356.59 Cr and Rs 349.96 Cr (AR26 p291) | hollow dashed marks at Rs 273.48 Cr and Rs 120.52 Cr | `[chart] P4` |

## Judgement calls for BJ-4 QA

1. **P2 is drawn beside, not inside.** The release is days x revenue per day; the not-due figure is gross of the expected credit loss. Carving one out of the other would pair two totals, so the step is drawn as its own hollow bar at its own length on the same rupee scale, and no adjusted not-due figure is printed.
2. **P3 no longer adds a scenario to an actual.** Settled in BJ-4 (Garvis ruling (a)): a one-off release added to an annual flow mixes two kinds of figure, so the release is a separate callout on its own scale.
3. **The value of a day is revenue / 365, while the 202.8 days come from the company's stated turnover of 1.80** (revenue including other operating income over average receivables). The stated ratio is rounded: bj-calc recomputes 1.797 (s2), so the day count is good to about a third of a day. The 10 and 30 day steps do not depend on it.
4. **If the receivables carry GST** (data.md does not say), a day of receivables holds more than Rs 7.65 Cr and the cash figures are conservative.
