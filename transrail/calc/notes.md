# Transrail Lighting: calc notes (TR-2, 2026-10-09)

Files: `transrail-savings.ts` (copy of the run script; it imports `@/lib/finance/cycle-simulation` and `@/lib/insights/levers`, so it only runs inside the app repo), `output.txt` (full clean run), `break-tests.txt` (each assert broken once), `recalc.py` + `recalc-out.txt` (separate Python recompute, run with -I). Rs crore. The temp copy in the app repo was deleted by exact name; git status shows only the 2 pre-existing entries.

## Chart to calc row
| Problem | Chart | Calc row (output.txt) |
|---|---|---|
| 1 Receivables | Days from invoice to cash, today vs 10 and 30 day steps | `dso 10d`, `dso 30d` |
| 2 Contract assets | Days of revenue sitting as contract assets | `cad 10d`, `cad 30d` |
| 3 Working-capital days | Management's days (deck p.19) and the facility the cash would repay | `wc 10d`, `wc 30d` |
Rows overlap and are never added: every row uses the same value of a day, so a 10 day step is Rs 188.50 Cr whichever wait it comes out of.

## Basis (verified on page images)
- Deck p.19 (printed 18) prints Working Capital Days 53, 73, 91, 81, 85 with NO basis label and NO formula. Basis of management's days: NOT STATED on that page. The deck's own P&L (deck p.15, printed 14) is titled "Consolidated P&L" and prints FY26 revenue from operations 6,880. So revenue per day uses the CONSOLIDATED figure: AR PDF p.248 (printed 277), 6,779.95 plus 100.16 = 6,880.11. The deck's 6,880 equals it. Standalone is 6,878.63 (AR p.160); the gap is 0.02%.
- Revenue per day = 6,880.11 / 365 = 18.85 (18.8496). 10 days = 188.50, 30 days = 565.49.
- Receivable days today: 1,737.68 (consolidated, AR p.247) over 6,880.11 x 365 = 92.19, equal to 365 / the company's own debtors turnover 3.96 (AR PDF p.33, printed 61, image-checked).
- Contract asset days today: 2,515.24 (identical in both statements, standalone AR p.185 image-checked) over 6,880.11 x 365 = 133.44. A Crestline analytical metric, not an accounting standard.
- The definition of management's 81 and 85 days is NOT FOUND. We never print a computed figure beside it.

## Simulator bounds (read from the code, no terms passed)
`cad`: min 0, max 186.81. `dso`: min 0, max 129.06. No certification window and no payment term is known, so both floors are 0: the simulator's protection against promising faster than a contract allows does NOT apply here. The 10 and 30 day steps are therefore labelled scenarios, and once the contract terms are loaded Crestline stops the slider at them. Vendor credit: no terms passed, so the ceiling equals today's days, and any request to pay later releases 0.

## Interest
Only the disclosed average rate 10.31% p.a. on "Cash Credit facility & WCDL" (AR PDF p.199, printed 228, note i, image-checked). Cash it applies to is capped at drawn cash credit + WCDL at 31 Mar 2026 (AR PDF p.198, printed 227, image-checked): cash credit from consortium bankers "-" (nil; 49.02 a year earlier), WCDL 252.49. Cap = 252.49. Bill discounting 99.74 and the other short-term loans are excluded because 10.31% is not disclosed for them. Interest is saved only if the released cash repays those facilities. 10 day step: 188.50 x 10.31% = 19.43 a year. 30 day step: cash 565.49 capped at 252.49, so 26.03 a year. Standalone note; the facility balances are year end, not an average.

## Asserts (all broken once, all failed, then clean run passes)
A1 no negative release (BREAK=1 lengthens the wait); A2 interest only at 10.31% and applied cash within the cap (BREAK=2 uses 10.5%); A3 independent cross-check (BigInt integer arithmetic on the same revenue, plus the separate Python file; BREAK=3 inflates one rate, BREAK=5 uses the standalone revenue); A4 payables never release cash (BREAK=4 gives vendors an agreed ceiling above today); A5 basis match (revenue consolidated and prints as the deck's 6,880; per day equals revenue / 365; cap is 0 plus 252.49). Limit: A3 shares the revenue input with the simulator, so it proves the arithmetic, not the input; the input was read from AR p.248 and deck p.15.

## Limits
Management's days are not a simulator leg (their formula is unknown), so the `wc` row is direct arithmetic at the same value of a day, with the same asserts. `priceLevers` is used only to rank the two simulator legs and return the same carry; it adds no lever. Scenario, not a forecast.
