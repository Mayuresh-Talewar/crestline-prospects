# Khilari Infrastructure: solutions (KH-3, QA fixes KH-4)

One per problem in problems.md. Every rupee figure is a line in calc/kh-savings-output.txt, produced by the app's own `simulate` and `priceLevers` on CARE's figures. Value of a day: FY25 total operating income Rs 639.86 crore / 365 = Rs 1.753 crore (CARE 06 Oct 2025 p3; FY25 UNAUDITED). Standalone throughout.

Rules on every figure below:
- Scenario, not a forecast. Rows overlap and are never added.
- No interest figure: the company discloses no rate.
- Cash released once, valued at income per day. CARE does not state the basis of its collection or inventory period, so these figures are approximate.
- Paying suppliers later is never a saving: the calc tried creditors 39 to 60 days with no agreed vendor terms and released Rs 0.00 crore (row p).
- Their ERP or Tally will feed, read-only, built during the pilot.

Chart rule 13, for every chart: "today" bars solid in the FY order shown; "with Crestline" marks hollow and dashed on the SAME axis, each labelled with its days and its cash released once and the words "Scenario, not a forecast". No other values on the chart.

## Solution 1. See every bill and every deposit the client is holding (Problem 1, collection)
Crestline screen, true today: O2C (Cash In) and the Client screen on each project, and Clients across the company. Every bill rebuilt from the trail with its own due date, each wait filed as ours or the client's by the act that ends it, retention and deposits read from the RA deductions, and "release the retention that has already met its milestone" priced as a lever. Alerts & Tickets turns the leading waits into named commitments that are re-measured from fresh data.

Chart picture (one axis in days, starting at zero):
- Today, solid bars: FY23 26, FY24 33, FY25 51 (unaudited).
- Lead mark. With Crestline, hollow dashed mark beside FY25 at 33 days, FY24's own level: 18 days out, Rs 31.55 crore released once (row c).
- Standard step. With Crestline, hollow dashed mark at 41 days: 10 days out, Rs 17.53 crore released once (row a).
- Outer bound only. With Crestline, hollow dashed mark at 21 days, labelled "below any year shown": 30 days out, Rs 52.59 crore released once (row b).
- Caption: "Scenario, not a forecast. Three sizes of one move; never added."

Lead with row c: it asks for nothing the company did not already run at in FY24. Row a is the standard 10-day step. Row b goes below every year shown and would need deposits released, which only a milestone does; it is the outer bound, never the ask.

Data needed: bill register with submitted, certified and invoice dates and amounts; deductions per bill (retention, security deposit, advance recovery); receipts with bill reference; payment term per contract; client master with department and state.

## Solution 2. Find where executed work waits to become a bill (Problem 2, inventory period)
Crestline screen, true today: the project Overview (contract to cash waterfall, stage waits per bill, value state map, unbilled work as its own block) and Working Capital (the certification queue on the cash cycle diagram). Measuring, preparing, reviewing and submitting are filed as the company's own waits, so the list it hands a site is the part nobody outside has to agree to. It also separates unbilled work from material on site, which CARE's single inventory figure cannot.

Chart picture (one axis in days, starting at zero):
- Today, solid bars: FY23 11, FY24 17, FY25 32 (unaudited), labelled "inventory period (CARE ties the FY25 rise to unbilled revenue)".
- Lead mark. With Crestline, hollow dashed mark beside FY25 at 17 days, FY24's own level: 15 days out, Rs 26.30 crore released once (row f).
- Standard step. With Crestline, hollow dashed mark at 22 days: 10 days out, Rs 17.53 crore released once (row e).
- Caption: "Scenario, not a forecast. Two sizes of one move; never added, and never added to Solution 1."

Data needed: work executed and measurement dates per bill (measurement book or the ERP's progress entries), bill prepared and submitted dates, certified date; unbilled work balance by month; stock receipts and issues, to separate material on site from unbilled work.

## Solution 3. One cycle, drawn to scale, priced lever by lever (Problem 3, operating cycle)
Crestline screen, true today: Working Capital on each project and for the company. The cash cycle diagram shows each leg to scale and whose it is; the simulator moves one leg at its measured daily value, stopping at the contract's own lines; the lever ranking says which move to make first. P2P and Vendors check each supplier against their own due date, so the cycle is never shortened by paying late.

Chart picture (one axis in days, zero line drawn):
- Today, solid bars: FY24 8, FY25 44 (unaudited). FY23 has no bar and no number: a text label "below zero (CARE: negative)" sits at the zero line.
- With Crestline, hollow dashed marks beside FY25, each the cycle after ONE move from the rows above:
- Lead mark at 26 days: collection back to FY24's 33, Rs 31.55 crore released once (row c).
- Mark at 29 days: inventory period back to FY24's 17, Rs 26.30 crore released once (row f).
- Mark at 34 days: 10 days out of collection or of the inventory period, Rs 17.53 crore released once (rows a, e).
- Outer bound mark at 14 days: 30 days out of collection, to 21 days, "below any year shown", Rs 52.59 crore released once (row b).
- Creditors held at 39 days in every mark (row p).
- Caption: "Scenario, not a forecast. Each mark is one move on its own; marks are never added."

Gross current asset days stay off this chart and carry no rupee figure (calc/notes.md).

Data needed: monthly trial balance (debtors, retention, unbilled work, stock, creditors, customer and vendor advances) with opening balances; stock receipts and issues; purchase orders, goods receipts, supplier and subcontractor bills and payments; vendor master with agreed terms and MSME flag.
