# Shubham EPC: where Crestline fits

Entity: Shubham EPC Private Limited, standalone. Figures from data.md; product facts from `_shared/crestline-webapp-context.md` and the app's own navigation.

## What Crestline models here
* **The gross current asset days CRISIL names as the main weakness** (155 to 200 days, FY23 to FY25, D1, 02 Jul 2025), split into the parts the rating cannot show: stock at site, work executed and not yet certified, bills invoiced and unpaid, retention.
* **O2C per RA bill**: executed, measured, prepared, reviewed, submitted (ours), acknowledged and certified (the client's), invoiced (ours), paid (the client's). Every wait priced at the value of a day and owned by whoever makes the act that ends it.
* **P2P per order**: PO, goods received, supplier invoice, payment, judged against each vendor's own due date. Paying later than agreed is never shown as a saving.
* **Per site and per client**, ranked by rupee days, with a named desk and a ticket that is closed only when the figure is re-measured from fresh data.

## What it does not model
Not an ERP, accounting, tax, payroll, HR, CRM or project management tool. It does not write to the source. It does not rate the company, forecast its rating, or size its bank limits. It has no figure for this company until a source is connected: today every Shubham number in the booklet comes from CRISIL or the company's own newsletter, not from Crestline.

## The pilot
One entity, one segment (for example one vertical or a few sites), read only, 14 days. The company says it has integrated its accounting workflow into its ERP and is phasing out its earlier accounting software (SITE INSIGHT newsletter, FY2024-25 Q4 issue, January to March 2025, N2, PDF p1, Archana Badera, Director), and a later issue describes the move to a single ERP system (FY2025-26 Q1 issue, N4, PDF p14, printed p12, Raju Jadhav, Head Office Pune). Copy says "your ERP"; the adapter **will feed, read only, built during the pilot**. Nothing connects today.

## NEVER CLAIM
1. That Crestline connects to their ERP today, or any ERP product by name.
2. Any interest saved (no rate disclosed) or any debt figure.
3. Any receivable, stock or payable days for this company (none published).
4. That we know which bill, site or desk holds the days. That is what the pilot finds out.
5. A saving as a promise. Every figure is "Scenario, not a forecast"; rows overlap and are never added.
6. That paying vendors later releases cash.
7. Certification, ISO, data residency or per tenant encryption.
8. Our demo environment as a client, or any demo number beside this company's figures.
9. The FY27 projection or the FY26 provisional figure as a calc input; FY26 prints only as "provisional, company newsletter".
10. Any item listed in sensitive-garvis.md.

## Screens and the fields each needs from the source
| Screen (project scope unless marked) | Answers | Fields it needs |
|---|---|---|
| Ask Crestline (company and project) | what needs me this morning | everything below; works with whatever is connected and says NA for the rest |
| Overview | where contract value stops becoming cash | contract value, RA bill trail (executed, measured, submitted, certified, invoiced, collected dates and amounts), retention and advance recovery per bill |
| Working Capital | days and rupees trapped, simulator, ranked levers | trial balance with opening balances: stock, unbilled work, receivables, retention, vendor and client advances, trade and subcontract payables; revenue, cost, stock issues; contract certification window and payment term |
| P2P (Cash Out) | how orders really flowed | PO, goods receipt, supplier invoice, payment events with dates, amounts, document numbers |
| Vendors | paid early, on time or late | vendor master, agreed payment terms, due date per invoice, MSME flag |
| O2C (Cash In) | where each bill waits, ours or theirs | bill events with dates, document numbers, due dates; department per event with an internal or external flag |
| Client | where this client's cash is stuck | client master, signed payment term, certification window per contract |
| Alerts & Tickets | who owns each move and whether it closed | people with role, department and work email; due dates |
| Working Capital (company scope) | which site holds the most capital | the same fields for every connected site |
