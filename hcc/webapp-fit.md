# HCC: where Crestline fits, HC-2 (QA fixes HC-4)

One page. Product facts from `_shared/crestline-webapp-context.md` and the app's own code (navigation read 8 Oct 2026, client screen re-read in HC-4). Company facts from `data.md`. Standalone, INR crore.

## What Crestline models for HCC

* **The running O2C book, bill by bill.** Each RA bill's trail: measured, prepared, reviewed, submitted, invoiced (HCC's acts), then acknowledged, certified, paid (the client's acts). Every wait is priced at the value of a day and owned by whoever makes the act that ends it.
* **Receivables on running contracts against the term each contract states**, aged on each invoice's own due date. On the filings, Crestline arithmetic puts them at 157.8 days in FY26 (AR FY26 p132 and p109).
* **Retention** (812.63 at FY26, AR FY26 p131, sum of the non-current and current lines) as its own ledger: deducted, held to the defect period, released.
* **Unbilled work** waiting to be billed, against the certification window in the contract.
* **The cycle simulator and lever ranking**: days moved at a measured rate, bounded by the contract, cash released once.
* **Tickets that close on the number**: a verdict becomes a commitment with an owner, and an auditor re-measures the same figure from fresh data.

## What Crestline does not model

* Group companies and subsidiaries. One standalone entity only.
* Foreign currency. The app works in INR; it has no multi currency engine.
* Structured, convertible or restructured debt, its yields and its schedules.
* Interest on any of the scenarios here: no working capital facility is disclosed, so no rate applies.

## The pilot

One to three running domestic projects, standalone, read-only, 14 days. SAP S/4HANA (named in the company's own filings, AR FY25 p91) will feed, read-only, built during the pilot. Nothing is written back to the source.

## NEVER SAY (the never-say list)

1. That Crestline connects to HCC's ERP today. No adapter for it exists; it is built during the pilot.
2. That we have seen, received or analysed any HCC system data. Every figure here is from published filings.
3. Any saving as a promise. Every figure is "Scenario, not a forecast", rows overlap, never added.
4. Any interest saved, or any rate printed as HCC's.
5. Paying vendors later as a saving. The simulator releases 0.00 from stretched payables.
6. A process map screen. That tab was taken out of the product; the engine behind it still feeds the screens below.
7. ISO certification, hosting in India, per tenant encryption, or multi currency.
8. Our demo environment as a client, or demo figures beside HCC's.
9. That Crestline speeds up the client's own certification or payment. It shows whose desk a wait sits on and who to chase; the client's acts stay the client's.
10. Any figure for group companies or debt. Receivables are always those on running contracts, ₹1,701.67 Cr at FY26.
11. Any comparison of the book with the 30 to 90 day terms in note 6.7.

## Screens and the fields each needs

| Screen (project scope unless noted) | What it answers for HCC | Fields it needs from the source |
|---|---|---|
| Ask Crestline (company and project) | "Which running bill is holding the most cash, and whose move is it?" | Everything below; it reads the same evidence the screens publish |
| Overview | Contract to cash: where contract value stops becoming cash | Contract value, work executed by period, RA bill amounts and deductions (retention, advance recovery), invoices, receipts |
| Working Capital | Cash cycle, simulator, ranked levers | Trial balance lines (receivables, unbilled work, retention, payables, stock, advances) with opening balances; revenue and cost by period |
| O2C (Cash In) | Billing, certification and collection, each wait priced | RA bill event trail: bill number, activity (measured, prepared, reviewed, submitted, certified, invoiced, paid), timestamp, amount, person, department |
| Client (under O2C) | Where this client's cash is stuck, whose delay, when it lands | Invoice number, date, due date, amount; payment term and certification window per contract; receipts matched to invoices; retention ledger |
| P2P and Vendors | Vendor payment timing against each vendor's own due date | Purchase orders, goods receipts, supplier invoices with due dates, supplier payments |
| Alerts & Tickets, Performance | Who was told, and what moved after | People with role, department and work email; departments marked internal or external |
| Settings (company) | What the source can and cannot supply | The adapter's capability probe; anything missing reads NA, never zero |
