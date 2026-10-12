# Booklet chart catalogue (CLIENT ORDER 2026-10-12)

The client wants the booklet charts to be the Crestline web app's own charts, named exactly as the app names them, filled with the company's ACCURATE published data, each with a "with Crestline" scenario result. This amends CONTENT-ONLY-RULES: the prompt NAMES the chart type (as below) and gives its data; it still carries no colours, fonts, layout or drawing specs.

## Every chart
- Use ONLY Verified figures on ONE basis (standalone or consolidated, one year). Never mix agency days with audited balances.
- A computed figure is labelled "Crestline's arithmetic on the published accounts" and shows its formula in the footnote.
- Every "with Crestline" figure comes from the calc script only (app functions), labelled "Scenario, not a forecast". Rows overlap and are never added; say so on the page.
- If a chart's data does not exist, the chart is NOT used. Never fill it with examples or estimates.
- In the prompt, write: Chart name (exactly as below), then "Data:" lines, then "With Crestline:" lines, then the footnote.

## The five charts (app names, exact)

### 1. "The cash cycle · Where the money sits, and who is holding it"
App: CashCycleDiagram. A timeline from material bought to client pays. Legs: "DIO · stock sitting", "Built, waiting to be certified" (contract asset days), "DSO · waiting to be paid", "DPO · vendor credit" and the cash cycle itself.
- NEEDS: at least two of DIO, contract-asset days, DSO and DPO on one basis (all four is best). Days = balance ÷ (revenue or cost per day), each on its own stated base. DPO is NEVER "better when higher".
- WITH CRESTLINE ("Position" and "Simulate"): the same legs with the calc's 10-day and 30-day moves on the ruled leg, and the cash each releases.
- Skip it if only one or no day measure exists.

### 2. "Pressure on the cycle · What is moving it, and what that costs"
App: cycle factors. Each balance is ranked by money × time.
- WITH a disclosed single borrowing rate: carry cost = balance × (days ÷ 365) × rate, per balance, ranked. The rate's source is printed. Interest is capped at the borrowing it applies to.
- WITHOUT a disclosed rate: use the app's second panel only, "No clock on these · ranked by size instead". Balances are ranked by size (receivables, contract assets, retention, advances, payables), with NO cost figure.

### 3. "Cash movement · What you committed to, what you earned, and what actually moved"
App: cash ledger panel. Collections against payments, with the peak funding need.
- NEEDS periodic cash data. Public sources give ANNUAL cash flow only, so use an ANNUAL version only, and only with at least 3 years of operating cash flow on one basis: "Cash from operations by year". Label it "annual, from the cash flow statement".
- Never draw monthly bars. Never draw a peak funding need unless a source states it.
- Skip it for companies with no cash flow statement (most unlisted companies).

### 4. "How these four move together"
App: working-capital page. Working capital, the cash cycle, surplus and cash in hand, over time.
- NEEDS at least 3 year-end points of each line used, on one basis. Use only the lines that exist; never fewer than two lines.
- WITH CRESTLINE: the latest year's cycle with the 10 and 30-day scenario shown as a scenario point, labelled.
- Skip it for single-year data.

### 5. "Process map · One bill, from work done to cash in the bank"
App: the bill timeline (the eleven stages, owner tags).
- CLIENT ORDER 2026-10-12: stages with no published figure carry an ESTIMATE, never a blank. Run `python -I _shared\stage_estimate.py --dso N [--cad N] [--gca N]` with the company's Verified one-basis days. Never type the stage values by hand.
- Each stage shows its value with a tag: "Published" (the measured anchor, e.g. Payment received = DSO) or "Estimate". Retention released stays "Not public".
- Print the basis line under the map, exactly as the script prints it: "Scaled from [Company]'s published N debtor days using the stage pattern in Crestline's demonstration ledger. Estimates are not [Company]'s measured days."
- WHOLE RA BILL (CLIENT ORDER 2026-10-12): under the map print the script's total line: "Whole RA bill, work done to cash: X days = Y days before the invoice (Estimate) + Z days to be paid (Published)". The payment wait is only the last leg; the reader must see the whole bill's journey.
- With no published days at all, every stage is "Not public".
- WITH CRESTLINE: on the Published stage only, the 10 and 30-day moves and the cash released (from the calc). Estimates are never priced.
- Pattern source: _shared\STAGE-PROPORTIONS.md (Crestline demonstration ledger, 376 bills, 2026-10-12).

## Plus the scenario bars (always)
"With Crestline · ten days less / thirty days less": the calc figures only, starting at zero, labelled "Scenario, not a forecast".
