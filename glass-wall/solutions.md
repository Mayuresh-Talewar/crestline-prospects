# Glass Wall Systems: solutions (GW-2)

Basis: RHP dated 1 Sep 2026, restated consolidated, FY26. Calc: calc/glasswall-savings.ts, output in calc/glasswall-savings-output.txt (notes in calc/notes.md).

## The one calc behind every mark
* Value of a day = FY26 revenue from operations Rs 456.97 Cr (RHP p84) divided by 365 = Rs 1.25 Cr (1.2520 unrounded).
* Block = trade receivables Rs 108.96 Cr (RHP p38) plus contract assets Rs 49.15 Cr (RHP p369) = Rs 158.12 Cr = 126.3 days.
* A 10 day step takes the block to 116.3 days and releases Rs 12.52 Cr once. A 30 day step takes it to 96.3 days and releases Rs 37.56 Cr once. The block would then stand at Rs 145.60 Cr and Rs 120.56 Cr.
* The simulator's own bounds were read, no terms passed: the lever can move from 126.3 days down to 0 and up to 176.8 days. Both steps sit inside them.
* No interest is printed: the company is net cash. The two rows overlap (the 30 day step contains the 10 day step) and are never added.
* Every dashed mark below carries three things: days, cash, and the words "Scenario, not a forecast". No other value is drawn (rule 12 and rule 13 of the playbook).

## Problem 1: the headline of 45 days is not the whole wait

**Screen (true today).** Working Capital for one project: the cash cycle diagram, the simulator whose lever stops where the contract stops, and the "Do this first" ranking. Overview shows contract to cash as a waterfall that ends at the money still out.

**Chart.** Horizontal bars in Rs crore, one scale. Solid: today, Rs 158.12 Cr (receivables 108.96, contract assets 49.15). Dashed and hollow: Rs 145.60 Cr "10 days off: 116.3 days, Rs 12.52 Cr released" and Rs 120.56 Cr "30 days off: 96.3 days, Rs 37.56 Cr released". Label: Scenario, not a forecast.

**Days and cash.** 10 days, Rs 12.52 Cr. 30 days, Rs 37.56 Cr.

**Who moves the days.** Measure, prepare, review, submit and invoice are the company's own acts. Acknowledge, certify and pay are the client's. The filings do not split the 126.3 days between the two, so the scenario assumes no split. The pilot reads the bill trail and shows it.

**Data needed (SAP, read-only, built during the pilot).** Customer invoices and receipts with due dates, the unbilled (contract asset) ledger, the contract's payment term and certification window, project and client on each document.

## Problem 2: receivables grew faster than revenue in FY26

**Screen (true today).** O2C (Cash In) with its discovered process map and the holders on each step, the Client screen for where each client's cash is stuck and whose delay it is, and Alerts and Tickets for turning a finding into a commitment with a named owner.

**Chart.** Columns of the block in days, one scale: FY24 140.8 (366 day year), FY25 120.3, FY26 126.3, solid. Beside the FY26 column, dashed and hollow marks at 116.3 days (10 days off, Rs 12.52 Cr) and 96.3 days (30 days off, Rs 37.56 Cr). Label: Scenario, not a forecast. The growth figures (114.6% against 64.2%) stay in text, not in a mark.

**Days and cash.** 10 days, Rs 12.52 Cr. 30 days, Rs 37.56 Cr, on the same block.

**Data needed.** RA bill events with date, amount, document number, person and department for measured, prepared, reviewed, submitted, acknowledged, certified, invoiced and collected, plus the client on each bill.

## Problem 3: retention is held for 12 to 24 months

**Screen (true today).** The O2C retention drill-down, the value state map on Overview (which sums to the contract and names its residual), and the "release the retention that has already met its milestone" lever in the ranking.

**Chart.** One stacked bar in Rs crore: held more than 12 months 15.38, held less than 12 months 20.58, total 35.96 (28.7 days of FY26 revenue), solid, labelled "held", not "target". The calc has no retention scenario of its own, so none is drawn (rule 12). Retention sits inside the block of Problem 1, so the dashed marks are that block's: 116.3 days with Rs 12.52 Cr, and 96.3 days with Rs 37.56 Cr. Label: Scenario, not a forecast. Retention and the block are never added.

**Days and cash.** The same 10 days, Rs 12.52 Cr and 30 days, Rs 37.56 Cr. The Rs 35.96 Cr is shown as what is held, never as a release promise.

**Who moves the days.** Preparing final documents and defect closure are the company's. Certifying the release is the client's.

**Data needed.** The retention ledger by contract with the release milestone and date, bank guarantee substitutions, the final documentation status per contract, and the client's certification of release.
