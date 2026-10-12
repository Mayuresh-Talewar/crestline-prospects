# J. M. Mhatre Infra: calculator notes (JM-2+3)

Files: jm-savings.ts (the script, byte-identical to what ran) and jm-savings-output.txt (full output: four deliberately broken runs, then the clean run). JM-4 re-ran it from the app repo as scripts/_tmp-jmm4-savings.ts with `npx tsx`, importing the app's own pure functions `leversFor` and `simulate` from lib/finance/cycle-simulation, `valueOfADay` from lib/finance/working-capital-cycle and `priceLevers` from lib/insights/levers. It was deleted by that exact name afterwards and `git status` in porcelain form in the app repo showed only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`.

## Inputs

| Input | Value | Source |
|---|---|---|
| Collection, inventory, creditors days | 71, 81, 61 | R10 p4, 28 Mar 2024, FY23 audited, standalone |
| Operating cycle | 91 | R10 p4; reproduced by simulate as 81 + 71 less 61 |
| Gross current asset days | 275 (FY22: 266) | R10 p4 |
| Value of a day | 798.93 / 365 = Rs 2.1888 Cr, printed Rs 2.19 Cr | R14 p3 and p6 (p6 labels FY25 Unaudited), 28 Jul 2025, FY25 provisional (Garvis ruling JM-3) |
| Terms | none passed (certification, payment, vendor all null) | none published |
| Financing rate | 0, so interest is 0 | none disclosed |

## Bounds read from the code before running

- `leversFor` with no terms: collection min 0, max 101 (as printed in the output); inventory min 0, max 121.5; creditors min 0, max 61. With no vendor terms the creditors ceiling is today's figure, so payables cannot be stretched at all.
- `simulate` clamps every move to those bounds; cash = minus moved x per day for asset legs, plus moved x per day for creditors; carry = released x rate / 100.
- `priceLevers` takes `position.actions[].value` as cash and prices carry at the financing rate.

## Map: problem chart to calc row

| Chart | Today (source) | With Crestline | Calc row |
|---|---|---|---|
| Problem 1, cycle bars | 81 / 71 / 61 / 91 (R10 p4) | collection 61, cycle 81, Rs 21.89 Cr | S-A |
| Problem 1, cycle bars | same | collection 41, cycle 61, Rs 65.67 Cr | S-B |
| Problem 2, cycle bars, inventory emphasised | same | inventory 71, cycle 81, Rs 21.89 Cr, approximate (inventory days' basis not stated) | S-C |
| Problem 3, gross current asset days | 266, 275 (R10 p4) | 265 (S-A), 245 (S-B); same cash as Problem 1, not additional | S-A, S-B |

## Asserts, and each one broken once

| Assert | Break used | Result |
|---|---|---|
| No negative release | BREAK=1: collection moved up 10 days instead of down | FAIL (released -21.89), exit 1 |
| Interest = 0 (simulate carry and priceLevers carry) | BREAK=2: a test rate of 9% that is NOT the company's and never printed | FAIL on all three scenarios, exit 1 |
| Step days x valueOfADay = simulate release (independent route; priceLevers is handed this figure, never simulate's) | BREAK=3: the simulator's per-day rate drifted 1% (22.11 against 21.89) | FAIL on all three, exit 1 |
| Payables never release cash | BREAK=4: a vendor term of 91 days passed, so creditors could be stretched | FAIL (released 65.67), exit 1 |
| Clean run | none | ALL ASSERTS PASS, exit 0 |

JM-4 fix to assert 3. The old assert handed simulate's cash to priceLevers and then compared the two, so it could not fail on a wrong simulate. The new assert builds the expected cash from the scenario's own step in days times valueOfADay, after leversFor confirms the step is inside the lever's bounds, and compares that with simulate's release. Neither route feeds the other; BREAK=3 shows it catching a drift the old assert would have passed.

## Limitations (state these wherever the figures appear)

1. **Two vintages in one figure.** FY23 days (the latest published) valued at FY25 provisional income per day; on FY23 income the figures would be larger. Kept by Garvis ruling (JM-4 ticket, a). FY23 valuation was not run, so no second set of figures exists to be confused with the first.
2. **Inventory denominator unknown.** The rationale does not say whether inventory days are struck on revenue or cost. S-C values the step at income per day; on a cost basis it would be smaller. It prints only with: "inventory days' basis not stated; valued at income per day, so approximate" (Garvis ruling, JM-4 ticket, b).
3. **No interest.** No rate is disclosed, so carry is 0 by construction and no interest figure may be printed.
4. **No terms.** With no contract or vendor terms the simulator has no contractual floor for collection and no ceiling headroom for creditors; the steps are fixed scenario sizes, not targets.
5. **Rows are alternatives.** S-A, S-B and S-C are never added. S-A and S-B are the same leg at two sizes; S-A and S-C release the same cash through different legs (Garvis ruling, JM-4 ticket, c).
6. **Days are what the rationale printed.** Its formula is not shown; the figures are used as printed.

## Proposed footnote

See solutions.md, top. It names both years, the provisional status, the per-day value, the cautious direction of the mix, no interest, and "Scenario, not a forecast".
