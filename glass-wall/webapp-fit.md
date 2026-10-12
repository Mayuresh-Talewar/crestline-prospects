# Glass Wall Systems: what Crestline fits (GW-2)

Basis for every company figure here: RHP dated 1 Sep 2026, restated consolidated, Rs million converted to Rs crore by script. "RHP p84" means the printed page, checked on its page image.

## What Crestline models
* Working capital intelligence for contractors. It sits above the company's ERP, reads it without ever writing back, and asks one question: where is the money trapped, for how long, why, and who can release it.
* Three pillars: O2C (cash in: work executed, measured, billed, certified, invoiced, collected), P2P (cash out) and Working Capital (the capital trapped between them). Every finding is time times money, owned by a desk, ranked by rupee-days.
* It fits this company because the RHP describes construction contracts with "mobilisation advance, monthly progress payments with a credit period ranging from 0 to 60 days and certain retention money to be released at the end of the project" (RHP p429), 5.00% retention held for 12 to 24 months (RHP p39), and revenue recognised over time on Rs 4,480.71 Mn of Rs 4,569.71 Mn in FY26 (RHP p369).
* Ownership of a wait follows the act that ends it. Ours: measure, prepare, review, submit, invoice. The client's: acknowledge, certify, pay. Client delay is never counted as ours.

## What it does not model
* Not an ERP, not accounting software, not project management, not a generic process mining tool, not HR, payroll, CRM or tax filing. It does not replace SAP.
* Today the RHP names SAP platforms across production, materials, finance, inventory, maintenance and HR (RHP p281). The version is not stated in any document read. SAP will feed Crestline, read-only, built during the pilot.
* The product has no multi-currency handling today. The company reports international sales (RHP p369: overseas Rs 2,065.73 Mn of FY26 revenue), so those figures stay in the INR the filings print.

## The pilot
One entity, one segment, read-only, 14 days. The segment is chosen with the company. The pilot is what turns the filings' account totals into bills, desks and days.

## NEVER claim
* That Crestline is connected to the company's SAP, or has seen any of its data. It has not.
* Any per project, per client, per bill or per desk figure. The filings do not contain one.
* A savings promise. Every figure is "Scenario, not a forecast", and the rows overlap and are never added.
* Interest saved. The company is net cash (Rs 79.25 Cr, RHP p82 and p83), so no interest figure is printed.
* That paying vendors later releases cash. It never does.
* The SAP product version, or any ERP detail beyond RHP p281.
* Anything in sensitive-garvis.md, the conflicts between sources listed in depth.md, or any plan the filings describe as a future facility.
* Our demo environment as a client, or any other company's number.

## Screens and the fields each needs (all fed from SAP, read-only, during the pilot)
* **Working Capital (project)**: cash cycle diagram, simulator, "Do this first" ranking. Needs: invoice and receipt documents with due dates, contract asset (unbilled) ledger, retention ledger with release milestones, customer advances, contract payment term and certification window, trial balance for the ledger route.
* **O2C (Cash In) and its process map**: Needs RA bill events (measured, prepared, reviewed, submitted, acknowledged, certified, invoiced, collected) with date, amount, document number, person and department.
* **Client**: where each client's cash is stuck and whose delay it is. Needs client on every bill, the agreed term, and the dated trail above.
* **Overview**: contract to cash waterfall. Needs contract value, work executed, billed, certified, collected per project.
* **Alerts and Tickets**: Needs the owner's name and mailbox from SAP's user master. A mail never sends on one click.
* **Ask Crestline**: no fields of its own; it reads the screens' evidence.
* P2P and Vendors follow the same pattern (purchase orders, goods receipts, supplier invoices, payments) and are not used in these three problems.
