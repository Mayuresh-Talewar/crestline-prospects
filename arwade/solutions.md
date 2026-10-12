# Arwade Infrastructure Limited: solutions (AR-3, 8 Oct 2026)

Every figure from `calc/arwade-savings.output.txt` (run on the app's own `simulate`, `toTerms`, `leversFor`, `valueOfADay`, `priceLevers`). Rs crore, standalone. **Scenarios, not forecasts. Rows overlap; never add them.** Cash is one-off. **No interest is printed**: neither Arwade nor Infomerics discloses a rate. Rate base is FY25 revenue ex-GST, so cash figures are conservative.

Within webapp-fit.md and the README ruling: Crestline reads milestone bills from the dates the ERP records; it does not track PEB fabrication or shop WIP, margin, cost-to-complete, scheduling or design; it does not connect to Arwade's ERP today (the adapter is built during the pilot); reminders do not mail automatically. Pilot = one to three design and build projects.

Scenarios omitted, and why (stated, not hidden):
- "Collection days back to FY23's 72": OMITTED. FY25 days are NOT PUBLISHED, so there is no gap to close.
- "Their contract terms" (`toTerms`): OMITTED. No payment term or certification window is published.
- "Their own target": none stated anywhere (depth.md).

## P1. Growth, with bank lines that kept pace
- **Screen:** `/dashboard` (portfolio: funding gap, peak funding need, project comparison) and `/projects/[id]/working-capital` (position, cash cycle, accrued vs paid basis, lever ranking).
- **With Crestline chart:** two panels on the same Rs Cr scale. Left: revenue bars FY22-FY25 (65.45 / 112.80 / 162.03 / 261.12). Right: rated limits at each rating date, stacked fund-based / bank guarantee: 17 May 2023 (11 / 50), 3 Jul 2024 (11 / 70), 28 Jul 2025 (30 / 122). No ratio drawn between the panels. Beside FY25 revenue, a dashed hollow mark: "10 days faster milestone-to-cash: Rs 7.15 Cr; 30 days: Rs 21.46 Cr. Cash, one-off. Scenario, not a forecast." No interest label.
- **Days + cash:** 10 days = Rs 7.15 Cr; 30 days = Rs 21.46 Cr.
- **Needs from their ERP:** milestone bills with achieved / submitted / certified / paid dates, receipts, open supplier invoices, bank guarantee register if kept there.

## P2. Collection days not published since FY23
- **Screen:** `/projects/[id]/o2c` and `/projects/[id]/client` (each bill aged on its own due date; who certifies; retention), `/ask` ("which client pays slowest?").
- **With Crestline chart:** two bars, FY22 151 and FY23 72 days; FY24 and FY25 drawn as empty outlines labelled "NOT PUBLISHED". The with-Crestline mark is a dashed hollow callout, not a days bar (no FY25 base exists): "every 10 days off = Rs 7.15 Cr cash; 30 days = Rs 21.46 Cr, scenario, not a forecast".
- **Days + cash:** same rows as P1 (they overlap; do not add).
- **Needs from their ERP:** invoice and receipt dates per bill, client payment terms, certification dates.

## P3. Concentration (Apr 2023 book); the last published book is dated 25 Jun 2025
- **Screen:** `/clients` (portfolio client position), `/projects` grid, `/projects/[id]/client`, Ask Crestline Compare (needs two or more projects connected).
- **With Crestline chart:** order book bars 255.31 (21 Apr 2023), 330.21 (30 Apr 2024), 337.90 (25 Jun 2025), the first split 53% Talegaon Industrial Parks Private Limited (client order, book at 21 Apr 2023) / 11% Shree Dhootpapeshwar Limited / rest (never link the Rs 135.29 Cr order to Talegaon: the rationale does not say they are the same order), dates printed on each bar. Dashed hollow mark: "per Rs 100 Cr of new orders, 10 days faster = Rs 2.74 Cr; 30 days = Rs 8.22 Cr, illustrative, scenario, not a forecast".
- **Days + cash (illustrative):** per Rs 100 Cr of orders over 12 months: 10 days = Rs 2.74 Cr; 30 days = Rs 8.22 Cr. Basis: 2025 PR p.3 "executed within 12 months".
- **Needs from their ERP:** contract per client with value and terms, bills per contract.
- **Never** show Grey demo "Talegaon" figures near this page.

## P4. What the books cannot tell
- **Screen:** `/ask` morning brief (what needs me, priced), `/projects/[id]/tickets` (owner, deadline, verified close), `/projects/[id]/p2p` + `/vendors` (vendor payments against each vendor's own due date; MSME 45 days), `/projects/[id]/overview` (contract-to-cash trail, reconciliation).
- **With Crestline chart:** p8 fixed stages unchanged, plus one line "for milestone bills, the measurement step is replaced by the milestone sign-off"; stages drawn WITHOUT day values (rule 12). Mark: "one day of FY25 revenue = Rs 0.7154 Cr, scenario, not a forecast".
- **Days + cash:** one day = Rs 0.7154 Cr.
- **Needs from their ERP:** event dates per document and the user / department on each entry (for owners).

## Booklet table

| Problem | Crestline screen | Scenario | Cash (one-off) | Interest | ERP data needed |
|---|---|---|---|---|---|
| P1 growth, bank lines kept pace | `/dashboard`, project working capital | 10 / 30 days off milestone-to-cash | Rs 7.15 / 21.46 Cr | not printed (no disclosed rate) | milestone bill dates, receipts, supplier invoices |
| P2 days unpublished since FY23 | project O2C, client, `/ask` | same rows as P1 (overlap) | Rs 7.15 / 21.46 Cr | not printed | invoice + receipt dates, terms, certification dates |
| P3 concentration, aged book | `/clients`, projects grid, Compare | per Rs 100 Cr of orders, 10 / 30 days (illustrative) | Rs 2.74 / 8.22 Cr | not printed | contracts per client, bills per contract |
| P4 what the books cannot tell | `/ask`, tickets, P2P/vendors, overview | value of one day | Rs 0.7154 Cr | not printed | event dates, user/department per entry |
| omitted | | back to FY23's 72 days; contract terms; own target | NOT PUBLISHED inputs | | |

Footer for every with-Crestline mark: "Scenario, not a forecast. Rows overlap; do not add. Rate: FY25 total operating income Rs 261.12 Cr / 365 (Infomerics, 28 Jul 2025, p.5)."
