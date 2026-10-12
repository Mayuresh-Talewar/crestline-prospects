# Bajel Projects: product fit (BJ-2, QA fixes BJ-4)

Basis: Bajel Projects Limited, standalone, domestic power transmission and distribution EPC. Product facts come from _shared/crestline-webapp-context.md and the app's own code (lib/navigation.ts, lib/connectors/types.ts), read 8 Oct 2026 and re-checked against lib/navigation.ts and lib/insights/levers.ts in BJ-4. The process map screen no longer exists and is not offered.

## What Crestline models for a T&D EPC contractor (true today)

| Bajel's money cycle | How Crestline models it today |
|---|---|
| RA bills and milestone billing to utilities | RA bill lines with measurement book reference, and billing plan lines with a milestone code, planned date, achieved date and the bill that claimed it. A milestone line is claimed without a measurement, and the model allows that. |
| Measurement and certification | Execution, measurement, submission and certification are separate events. Measuring, preparing, reviewing, submitting and invoicing are the company's own acts; a wait that ends in the client acknowledging, certifying or paying is the client's. The contract's certification window is the floor of the certification lever. |
| Retention | Retention % and cap, defect liability months, and a retention ledger per contract. Retention is released by certificates against milestones, never by chasing accounts. |
| Mobilisation advances | Mobilisation advance % on the contract and a customer advance ledger, recovered bill by bill. Advances show as someone else's money funding the cycle. |
| Vendor and supplier timing | Purchase order, goods receipt, supplier invoice and payment, each judged against that vendor's own due date. Early payment is priced as leakage; late payment is risk; MSME vendors against the statutory 45 days. |

## What Crestline does not do

- **Tower fabrication.** Manufacturing, galvanising and plant scheduling are outside the product. Stock is read only as a working capital balance.
- **Vendor bill discounting as a product.** Crestline does not arrange, price or recommend discounting. It reads supplier invoices and payments. Stretching vendors is never shown as releasing cash.
- **International EPC and FX.** The app works in INR for one entity. It has no multi-currency handling. International EPC stays out of the pilot and out of every chart.
- It is not an ERP, accounting software or project management, and it never writes back to the source.

## The BJ-3 pilot

One to three running domestic T&D projects of Bajel's choice, standalone, in rupees, read-only, 14 days. The adapter for your ERP is built first: it **will feed, read-only, built during the pilot**. The 14 days of read-only analysis start once it is connected. At the end Bajel holds a list of the bills, retention lines and payments holding those projects' cash, each with its value, its days and its owner.

## NEVER CLAIM

1. That Crestline connects to, reads or holds Bajel's system today. Say "your ERP"; never name a vendor.
2. That any figure came from Bajel's ERP. Every booklet figure is from the published accounts.
3. A Bajel target. The company publishes none for receivable days or working capital.
4. Savings as a promise, or scenario rows added together. Each step is a scenario, not a forecast.
5. Interest at any rate other than the disclosed 6.5% and 10% ends, or on cash above the Rs 349.96 Cr of borrowings that range covers, or on mobilisation advances, or on cash that does not repay those facilities.
6. That paying vendors later, or more vendor bill discounting, saves money. A higher payable days figure is never shown as better.
7. FX, multi-currency or international EPC support.
8. That Crestline does fabrication planning.
9. Which customer or utility sits behind any year-end balance. The accounts do not say and neither do we.
10. Our demo environment as a client, or demo numbers beside Bajel's figures.
11. Certifications, hosting location or encryption features not set up today.

## Screens that exist today, and the ERP fields each needs

| Screen (project scope unless stated) | What it answers for Bajel | ERP fields it needs |
|---|---|---|
| Ask Crestline (company and project) | The morning brief, then any question with figures and evidence | Everything below; it reads the same facts the screens publish |
| Overview | Contract to cash: where contract value stops becoming cash, value-state map | Contract value, BOQ, RA bills, certification amounts and deductions, invoices, receipts |
| Working Capital | Position, cash-cycle diagram, simulator, ranked levers, accrued and paid bases, cash movement and peak funding need | Trial balance with opening figures, receivables, payables, stock movements, contract assets and liabilities, advance and retention ledgers |
| O2C (Cash In) | Billing, certification and collection, bill by bill | Activity events with dates and amounts: executed, measured, submitted, certified, invoiced, collected; document number and due date per bill |
| Client (under O2C) | Where the utility's cash is stuck, whose delay it is, when it lands | Client master, payment term and certification window per contract, receipts against invoices |
| P2P (Cash Out) | Purchase order to payment, timing against terms | Purchase orders, goods receipt notes, supplier invoices, payments, vendor terms |
| Vendors (under P2P) | Who the project pays and how promptly, MSME flag | Vendor master with MSME status and agreed terms |
| Alerts & Tickets, Performance | What was flagged, who was told, what moved after the commitment | People with org unit and e-mail; re-measured from the same fields |
| Portfolio: Working Capital, O2C, P2P, Clients, Vendors | The same views summed across the pilot projects | The same fields for each project |
