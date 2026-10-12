# Jyoti Structures: Crestline product fit (JS-2)

Jyoti Structures Limited, standalone. A power transmission and distribution EPC contractor: towers, lines and substations for utilities and transmission developers. Product truth from the app's CLAUDE.md and `_shared/crestline-webapp-context.md`. Company facts from data.md and depth.md only.

## What Crestline models for a transmission EPC contractor
| Area | What Crestline does with it | Why it fits Jyoti |
|---|---|---|
| RA and milestone billing to utilities | Rebuilds every RA bill from the ERP's events: executed, measured, submitted, certified, invoiced, collected. Prices each wait in rupees and names whose desk it sits on | Long-cycle utility and developer clients; turnkey orders of 12 to 42 months (data.md s11) |
| Measurement and certification | Splits "ours" (measure, prepare, review, submit, invoice) from "the client's" (acknowledge, certify, collect, which is the client paying). Client delay is never counted as ours | The accounts age a bill only from its due date (AR FY26 p124), so the days before it are invisible today |
| Collection against terms | Ages each invoice on its OWN due date, judged against the term that contract signed | Policy: "payable within 90 days or less" (AR FY26 p105); the actual term per contract is not in the filings |
| Retention | A retention ledger per bill, released against its milestone, kept apart from ordinary receivables | Policy: retention is "generally due upon expiration of the contract period" (AR FY26 p105); no balance is disclosed |
| Customer advances | Advances shown as client money funding the job, and their recovery through each bill | 92.92 Cr at Mar 2026, 134.21 Cr at Mar 2025 (AR FY26 p100) |
| Steel and subcontractor vendor timing | P2P: orders, goods received, supplier invoices, payments, each judged against the vendor's own due date. Paying early is flagged as leakage; paying later is never shown as a saving | Raw materials "including steel, cement" (AR FY26 p106); erection and subcontracting cost (data.md s7) |
| Site stock | Construction material at site, at its consumption rate, where the ERP records issues as well as receipts | Construction materials at site 12.68 Cr at Mar 2026 (AR FY26 p96) |

## What Crestline does not model (internal, not printed)
- **Tower fabrication production.** Plant scheduling, tonnage, yield and the fabrication WIP at the Nashik units are factory operations, not a bill or an order waiting on a desk.
- **Legacy balances.** Crestline reads running jobs. It does not analyse, reconcile or recover balances from before the rebuild.
- **Bank guarantees.** Not a Crestline capability.
- **Foreign currency.** The app has no multi-currency handling. Overseas jobs stay out of any pilot.
- Also not: accounting, ERP replacement, project scheduling, payroll, tax.

## The JS-3 pilot
- One to three **running** transmission projects, standalone, read-only, 14 days.
- Your ERP **will feed, read-only, built during the pilot**. No adapter for your system exists today, so nothing is claimed as connected.
- Output: for each pilot project, the bills between execution and cash with the days each sat at each step, whose desk, and the cash a 10-day and a 30-day step would release at that project's own rate. Every figure aged against the source's last event.

## NEVER CLAIM (internal, not printed)
1. That Crestline connects to Jyoti's ERP today, or names its vendor. Copy says "your ERP" only.
2. Anything about the ERP's status or roll-out at Jyoti.
3. Any interest saved, financing cost or yearly carry. The filings give no rate to price it at.
4. A days figure for the whole receivables book. Only the running book (up to three years) and the under-6-months bucket.
5. Any figure about Jyoti's bills, desks, clients or waits as if Crestline had measured it. The pilot measures; the booklet only sizes.
6. A retention balance, a certification window or a payment term per contract. None is disclosed.
7. A process map screen. That screen is gone from the product.
8. Tower fabrication planning, guarantee management, legacy recovery or multi-currency.
9. ISO certification, India hosting or per-tenant encryption.
10. That paying vendors later is a saving.
11. That a scenario is a forecast or a promise.
12. Rows added together. Cash released once, never summed across rows.

## Screens that exist today, and the ERP fields each needs
| Screen (scope) | What it answers for a transmission job | ERP fields it needs |
|---|---|---|
| Ask Crestline (company and project) | The morning brief, then any question on the job's money and time | Everything below; it reads the same evidence the screens publish |
| Overview (project) | Contract to cash: where contract value stops becoming cash, stage waits, funding sources | Contract value; RA bill events with dates and amounts; executed and measured dates; RA deductions (retention, advance recovery) |
| Working Capital (project and company) | Capital trapped, the cash-cycle diagram, the simulator, ranked levers | Trial balance extract with opening figures; receivable, stock and payable balances; revenue and cost flows |
| O2C, Cash In (project and company); at company level also RA Bills, Receivables, Retention, Claims | Billing, certification and collection, with each bill's steps rebuilt from your events | Bill number, project, client, measured date, submitted date, certified date and amount, invoice number, date and due date, receipt date and amount, retention deducted, claims |
| Client (project) and Clients (company) | Each utility's certification and payment behaviour against its own terms | Client master; payment term and certification window per contract; the O2C fields above |
| P2P, Cash Out (project and company); at company level also Purchase Orders, Payables, Payment Timing, 3-Way Matching | Steel and subcontract orders through to payment, judged against each vendor's due date | PO number, vendor, date and value; goods receipt; supplier invoice and due date; payment date and amount; subcontract bills |
| Vendors (project and company) | Who the job pays and how promptly against each vendor's terms | Vendor master with agreed terms and MSME status; the P2P fields above |
| Alerts and Tickets; Performance | A finding becomes a commitment with an owner, then is re-measured from fresh data | People and departments, with which desks are internal; e-mail addresses for owners |
| Project Hierarchy | The slots on the job and the chain above them | Org units and reporting lines |
| Settings | What your source can and cannot supply, as at when | The connector's capability probe |
