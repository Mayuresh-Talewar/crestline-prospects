# Shubham EPC: solutions, per problem

Every cash figure below comes from `calc/shubham-savings.out.txt` (the app's own simulator and lever ranking, run on CRISIL FY25 operating income of Rs 510.05 cr and the 155 to 200 day band, 02 Jul 2025, standalone). Rows overlap and are never added. No interest is printed: no rate is disclosed. Screens are described as they work today; for this company they **will feed, read only, from your ERP, built during the pilot** (one entity, one segment, 14 days).

Rule 13 marks: dashed outline, hollow, same scale as the chart's own figures, labelled with days and cash and the words **"Scenario, not a forecast"**.

## Problem 1. The book has grown faster than any single view of it

**Screen (true today).** Working Capital at company scope, and Ask Crestline at company scope. Every connected site is set side by side and ranked by the gap to its own contract terms, not by raw days, so "which site is holding the most capital?" is answered with a site name, a figure and a desk.

**Rule 13 mark.** On the FY25 bar: "10 days out of gross current assets: Rs 13.97 cr. 30 days: Rs 41.92 cr. Scenario, not a forecast." Value of a day at FY25 income: Rs 1.3974 cr.

**Days and cash.** 10 days, Rs 13.97 cr; 30 days, Rs 41.92 cr. Released once, not a yearly figure.

**Data needed.** Trial balance by site or project with opening balances; revenue per site; contract terms per site (certification window, payment term).

## Problem 2. Gross current assets held at 155 to 200 days, with no split

**Screen (true today).** Working Capital per project: the cash cycle diagram and its simulator split the days into stock, work not yet certified, bills unpaid and vendor credit, each with its own rupees. O2C and Client then show each bill's wait and whose act ends it: measure, prepare, review, submit and invoice are the company's; acknowledge, certify and pay are the client's. The simulator's floors are the client's own certification window and payment term, so a scenario never asks a client for faster than they signed.

**Rule 13 marks.** On the FY23 to FY25 band: dashed ticks at 145 and 125 days (from the 155 end) and at 190 and 170 days (from the 200 end), each labelled "Rs 13.97 cr" (10 days) or "Rs 41.92 cr" (30 days), "Scenario, not a forecast". The release is the same at either end of the band.

**Days and cash.** 10 days, Rs 13.97 cr; 30 days, Rs 41.92 cr. Time saved is days out of each wait; management hours are described, never numbered. Which part of the step is the company's own and which needs the client cannot be said until bills are read: the band has no split.

**Data needed.** RA bill events with dates, amounts, document numbers and due dates (executed, measured, prepared, reviewed, submitted, acknowledged, certified, invoiced, paid); department per event with an internal or external flag; retention per bill; stock receipts and issues.

## Problem 3. As the book grows, the limits grow with it

**Screen (true today).** Working Capital per project: the cash movement panel reports the deepest point the cumulative cash position reached, which is the funding the work actually needed, and the paid basis shows the cash that left the business. P2P and Vendors judge every payment against the vendor's own due date, so supplier credit is used to terms and never stretched past them.

**Rule 13 marks.** Beside the Rs 165 cr and Rs 225 cr bars, on the same crore scale: dashed hollow bars of Rs 13.97 cr (10 days) and Rs 41.92 cr (30 days), "Scenario, not a forecast". Caption: cash released lowers limit use only if it repays borrowing; no interest is shown because no rate is disclosed. No share of the limit is computed.

**Days and cash.** As Problem 2: the same scenarios, never added to it. Paying vendors later releases nothing: the calc's vendor leg moves 0 days with no agreed terms.

**Data needed.** Monthly collections and payments (customer receipts, supplier and subcontract payments, advances); PO, goods receipt, supplier invoice and payment events; vendor master with agreed payment terms and MSME flag; a disclosed borrowing rate, before any interest figure is printed.
