# Shubham EPC: calc notes (SE-3)

Script: `shubham-savings.ts` (this folder). Full output: `shubham-savings.out.txt`. Run inside the app repo as `scripts/_tmp-shubham-savings.ts` with `npx tsx`, using the app's own `simulate`, `leversFor` (lib/finance/cycle-simulation) and `priceLevers`, `costOfFinancing` (lib/insights/levers). The temp copy was deleted by its exact name afterwards; app `git status` showed only the 2 entries present before the run.

## Inputs (one entity, one basis)
| Input | Value | Source |
|---|---|---|
| FY25 operating income | Rs 510.05 cr | CRISIL rationale, 02 Jul 2025 (D1), standalone |
| Value of a day | 510.05 / 365 = Rs 1.3974 cr | computed in the script |
| Gross current assets | 155 to 200 days, FY23 to FY25 | D1, same entity and basis |
| Interest rate | none (0%) | no rate disclosed anywhere (data.md section 3) |
| Contract, client or vendor terms | none passed | none disclosed |

No split of gross current assets exists (receivables, stock and other current assets are one band in D1). The script runs the band on one asset leg and proves the leg choice changes nothing: the stock, unbilled and receivable legs release the same cash for the same days. The leg's on screen label is not used.

## Clamp bounds read from the simulator (no terms)
Floor 0 days on every asset leg. Ceilings at 155 days: 232.50 (stock leg), 217.00 (other two); at 200 days: 300.00 and 280.00. The 10 and 30 day steps sit well inside, so nothing is clamped. Vendor leg with no vendor terms: ceiling = today, so it cannot move.

## Results (rows overlap, NEVER added)
| Scenario | Days | Cash released | Interest |
|---|---|---|---|
| 10 day step | 155 to 145, or 200 to 190 | Rs 13.97 cr | none (no rate) |
| 30 day step | 155 to 125, or 200 to 170 | Rs 41.92 cr | none (no rate) |

The release is the same at either end of the band: it is days times the value of a day.

## Chart to calc row map
| Chart (problems.md) | Today (source) | With Crestline mark (calc row) |
|---|---|---|
| P1 Operating income FY20 to FY25 bars | D3, D2, D1 KFI tables | value of a day Rs 1.3974 cr; 10 day step Rs 13.97 cr; 30 day step Rs 41.92 cr |
| P2 Gross current asset band | D2 145 to 201 days; D1 155 to 200 days | 145 and 125 days (from 155), 190 and 170 days (from 200); Rs 13.97 cr and Rs 41.92 cr |
| P3 Rated bank facilities Apr 2024 vs Jul 2025 | D2 Rs 165 cr, D1 Rs 225 cr (C8) | Rs 13.97 cr and Rs 41.92 cr as dashed hollow bars, same crore scale; no share of limit is computed |

## Asserts, each broken once (BREAK=name), then run clean
| Assert | How it was broken | Result |
|---|---|---|
| no negative release | step sign flipped (days added) | FAIL on all 4 rows, exit 1 |
| interest = 0 | rate set to 9% | FAIL on 4 rows, levers and financing cost, exit 1 |
| independent cross-check (510.05 x days / 365 by hand) | hand formula given a wrong day count | FAIL on all 4 rows, exit 1 (the assert label still prints the correct formula) |
| payables never release cash | vendor terms supplied so the vendor leg could rise | FAIL on both steps, exit 1 |
| basis (days and per day share one entity) | band labelled consolidated | FAIL, exit 1 |
| clean run | none | all PASS, exit 0; output identical to the first clean run |

The vendor leg probe starts at 0 days: a test value, not a company figure, and never printed.

## Not computed, and why
Interest saved (no disclosed rate). Any receivable, stock or payable days (not published). Anything on the FY27 projection or FY26 provisional figure (never a calc input).
