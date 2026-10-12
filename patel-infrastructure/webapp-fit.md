# Patel Infrastructure Limited: webapp-fit.md (PI-S23)

What the Crestline app does today for this company, screen by screen, and what it needs from SAP S/4HANA. Every line is true of the product as described in the app's own project notes. Nothing here says Crestline reads their system today: the adapter is built first in the pilot, read-only, once connected.

Company facts used (standalone, FY25, ₹ Cr): revenue ₹3,576.65 Cr; trade receivables ₹316.19 Cr (32.3 days); unbilled revenue ₹657.48 Cr (67.1 days); inventory ₹464.31 Cr (132.7 days of material consumed); trade payables ₹317.95 Cr (38.9 days of construction expenses). ERP: SAP S/4HANA, live at the head office and project sites (Annual Report FY25, printed page 21).

| App screen | What it answers for Patel Infrastructure | Data it needs from SAP S/4HANA | Fit |
|---|---|---|---|
| Ask Crestline (home) | Which job holds the most capital; what to do first; what if a wait moved ten days | Project, billing, material and payment documents | Yes. The pilot starts here on one to three EPC projects |
| Working Capital (project) | Cash cycle, the four legs, the simulator, ranked levers | Trial balance, receivables, unbilled work, stock movements, payables | Yes. Accounts already give the four legs at company level |
| O2C and the bill timeline | Where each RA bill waits between measurement and cash, and whose move ends the wait | Dated bill events: measurement, preparation, review, submission, acknowledgement, certification, invoice, collection | Yes. This is the part the accounts cannot show |
| Client screen | Which client certifies and pays slowly against the term it signed | Contract terms per client, certification and receipt dates | Needs client terms. No client payment term is published, so the booklet prices no move to a term |
| P2P and Vendors | Each vendor paid against its own agreed due date; early payment shown as cash given away | Purchase orders, goods receipts, supplier invoices, payments | Yes, once vendor terms are read. General vendor terms are not published, so vendor credit is shown and never priced |
| Alerts and Tickets | A finding becomes a ticket with an owner and a date, re-measured until the figure moves | Same documents; owners from the project hierarchy | Yes, once connected |
| Performance | Verified closes, before and after | Re-measured tickets | After the pilot |

Not a fit, and said so: Crestline is not an ERP, not accounting software, not project management, not a margin or cost-control tool. Retention is shown only as a combined line with security deposits in the accounts, so retention is not priced until the source separates it.

Guards for this booklet: the cycle is the sum of the four printed legs; vendor credit is never better when higher; stock is priced only on material consumed per day; no estimate is priced; interest only at the disclosed 12.75% on the NCDs.
