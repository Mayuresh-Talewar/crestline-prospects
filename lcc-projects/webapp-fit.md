# LCC Projects Limited: webapp-fit.md (LC-S23, 2026-10-12)

What in the Crestline app answers each thing the Prospectus shows, and what it cannot yet do for this company. Read from the app's CLAUDE.md and lib\navigation.ts (read-only).

| LCC Projects fact (Prospectus 11 Sep 2026, consolidated) | App screen that answers it | Fit today |
|---|---|---|
| 103 projects, one company | Portfolio scope: All projects, Overview, Working Capital; project switcher keeps the section | Direct. Pilot is one to three EPC projects. |
| Unbilled revenue ₹534.83 Cr, 54.2 days | Project Working Capital (cash-cycle diagram, simulator); O2C (RA bill timeline) | Direct, once the bills are read from SAP. |
| Receivables ₹455.82 Cr, 46.2 days, nearly all under 6 months | O2C and Client screens (age against each bill's own due date), Actionables under each chart | Direct. |
| Stock ₹247.93 Cr, 65.3 days on material consumed | Working Capital: stock lever at cost per day only | Direct for EPC site stock. Needs stock movements from SAP. |
| Vendor credit 32.3 days on construction expenses | P2P and Vendors (each vendor against its own terms); simulator holds the leg at today's days | Shown, never raised. Vendor terms are not published beyond letter of credit credit. |
| Working capital days 31, 52, 67 (company's own) | Working Capital cards and the "How these four move together" panel | Direct as a label. The company's measure is current assets less current liabilities, not the four legs. |
| Cash from operations before tax FY24 to FY26 | Cash movement panel, annual version only | Annual only. No monthly series, so no peak funding need. |
| Process map of one bill | Bill timeline (eleven stages, owner tags) | Stage values are estimates from the demonstration ledger pattern, except the payment wait. Measured values need SAP dates. |
| Ranking of moves | Lever ranking ("Do this first") | Ranked by cash released once. No interest, because no single borrowing rate is published. |
| Retention and deposits in one line | Retention view | Not usable: the accounts do not separate retention. |
| SAP being implemented (page 192) | Connector contract: an adapter emits the normalised event shape | Adapter is built first in the pilot. Nothing is claimed as live. |

Not in scope for the app: certification window (not published), vendor payment terms (not published), a client credit-period target beyond the stated 45 to 90 days.
Ownership in O2C: measuring, preparing, reviewing, submitting and invoicing are LCC Projects' own acts; acknowledging, certifying and paying are the client's; joint measurement is both.
