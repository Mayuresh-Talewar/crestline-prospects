# J. Kumar Infraprojects: how Crestline fits (one page)

Basis: STANDALONE, AR FY2025-26 (filed 27 Aug 2026), unless labelled. Product facts from `_shared/crestline-webapp-context.md` and the app as it stands on 8 Oct 2026.

## What Crestline models here
| Their balance (AR26, standalone) | Crestline screen that reads it |
|---|---|
| Trade receivables Rs 1,485.29 Cr, ageing from due date (PDF p89, p97) | O2C and Client: each bill's own due date, overdue by client and site |
| Contract assets Rs 577.97 Cr (PDF p97) | O2C and Overview: executed, waiting to be measured, billed and certified |
| Inventories Rs 329.65 Cr (PDF p96) | Working Capital: stock days, only where stock issues are recorded |
| Trade payables Rs 849.54 Cr (PDF p89) | P2P and Vendors: timing against each vendor's own due date |
| Mobilisation advance Rs 706.09 Cr (PDF p103) | Working Capital: the client's money in the business |
| Retention, the CFO's figure on calls (not in the accounts) | O2C retention panel, once the source supplies a retention ledger |

## What it does not model
- **Joint ventures and joint operations.** Crestline reads one entity's ledgers and project events. It does not split a JV's balances by partner share. The pilot stays on projects the company runs alone.
- **Foreign currency.** The app has no multi-currency handling. All figures are INR.
- **Plant and machinery.** Owned equipment, depreciation and capex are not working capital and are not on any screen.
- Also out: tax filing, payroll, project scheduling, consolidation of subsidiaries.

## The pilot
One to three running domestic projects, standalone, read-only, 14 days. Their ERP is Farvision (AR26 BRSR, printed p129): it **will feed, read-only, built during the pilot**. No adapter for it exists today, and nothing is written back.

## NEVER CLAIM
1. That Crestline connects to Farvision today, or has run on their data.
2. Any ISO certification, India hosting or per tenant encryption.
3. That paying vendors later saves money.
4. A savings figure as a forecast or a promise; scenario rows are never added.
5. Interest at any rate other than the disclosed 8.1% and 12.35% ends, or on cash above the Rs 587.44 Cr of borrowings. Interest is saved only if released cash repays the facilities; say so wherever interest appears.
6. Retention as an audited figure. It is the CFO's figure from calls only.
7. A definition of their "working capital days". The company does not publish one; we never rebuild it.
8. That our demo environment is a client, or that any process map shows their data.
9. JV, FX or plant handling.
10. That the client's acts (acknowledge, certify, pay) are theirs to fix. Measure, prepare, review, submit and invoice are the company's own.
11. Net cash. The only net cash figure in the filings (Rs 264 Cr, AR26 printed 13) sits in a consolidated paragraph; on the standalone basis we print gross borrowings of Rs 587.44 Cr only.

## Screens for the pilot, and the fields each needs
| Screen | Fields needed from Farvision (read-only) |
|---|---|
| Ask Crestline (project and company) | everything below; it reads the screens' own evidence |
| Working Capital (simulator, levers) | revenue by month; receivables, contract assets, stock, payables and advances with opening and closing balances; the borrowing rate to use (8.1% or 12.35%; interest counts only if released cash repays the facilities) |
| O2C | per RA bill: work measured, bill prepared, reviewed, submitted, certified, invoiced, collected, each with date, amount and document number; retention deducted per bill |
| Client | client name, payment term and certification window per contract |
| P2P and Vendors | purchase order, goods receipt, supplier invoice, payment, each with date, amount and due date |
| Alerts & Tickets | people, desk (org unit) and work email for each bill and order step |
