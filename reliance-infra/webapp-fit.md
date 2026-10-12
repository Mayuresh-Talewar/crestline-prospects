# Reliance Infrastructure Limited: webapp fit (ticket RI 2)

Prepared 8 Oct 2026. Product truth from `_shared/crestline-webapp-context.md` and the app's connector contract. Company figures from `data.md` only, each with document, PDF page, filing date and basis. LIGHT form under the Garvis rulings for ticket RI 3: no priced days, no interest, no savings figures.

## What Crestline models here

The standalone entity, Reliance Infrastructure Limited, is the E&C business: "The Company is predominantly engaged in the business of Engineering and Construction (E&C)" (AR FY26 PDF p185, filed NSE 23 Jul 2026, STANDALONE). Its FY26 revenue from operations, Rs 237.22 Cr (AR FY26 PDF p132), equals the consolidated E&C segment revenue (AR FY26 PDF p285). The pending order book is Rs 363.25 Cr at 31 Mar 2026, Rs 214.58 Cr of it expected within 12 months (AR FY26 PDF p52, p171 to 172).

That entity runs EPC contracts, which is exactly what Crestline reads:

| Crestline models | On this entity |
|---|---|
| Milestone or RA billing, measured to billed | Running jobs listed in the MD&A (AR FY26 PDF p50 to 51): Kudankulam Units 3 and 4 common services (NPCIL), Mumbai Metro Line 4 Packages 8, 10, 12 (a joint venture), the Chordaha to Gorhar six laning (NHAI) |
| Certification by the client, and whose desk a wait sits on | The client's acts (acknowledged, certified, collected) against ours (measured, prepared, reviewed, submitted, invoiced) |
| Retention held | Published only inside trade receivables ("including Retentions on Contract", AR FY26 PDF p158) and contract assets ("including retention receivable", AR FY25 PDF p192, filed NSE 17 Jul 2025) |
| Customer advances and their recovery from bills | Published as one entity balance (AR FY26 PDF p169, p172) |
| Vendor and subcontract timing against each vendor's own terms | Payables include retention payable (AR FY26 PDF p167) |
| Stock days | Shown as NA with the reason: the entity carries no inventory line (AR FY26 PDF p131) and says inventory turnover "is not applicable" (PDF p203) |

## What Crestline does not model here

Power generation and distribution, concessions (roads, Metro Line 1), defence, every subsidiary, consolidation, balances on completed contracts, and foreign currency. The app reads one company's projects in INR; it does not consolidate, and it does not handle other currencies today. The three joint operations the standalone accounts on a proportionate basis (AR FY26 PDF p117) are read only as far as this entity's own ledger records them; a partner's books are never read.

## The honest pilot

* One or two running domestic INR EPC projects on Reliance Infrastructure Limited standalone. Kudankulam and Chordaha to Gorhar are the natural pair: both carry a filed progress figure (AR FY26 PDF p50, p51).
* Read only. Crestline never writes to the ERP.
* 14 days.
* SAP: the standalone auditor's report names "accounting software SAP" for FY25 (AR FY25 PDF p142, filed NSE 17 Jul 2025, STANDALONE). The FY26 report does not name the software (AR FY26 PDF p121). So SAP is confirmed for FY25 only, and the adapter is built during the pilot. Today the app has no SAP adapter.
* At connect time the adapter probes what the instance can supply and declares each item Available, Partial or Unavailable with a reason. What it cannot supply reads NA, never zero.
* No interest is printed: borrowings from banks are nil at 31 Mar 2025 and 31 Mar 2026 (AR FY25 PDF p185, p187; AR FY26 note 18, PDF p166, STANDALONE).

## NEVER CLAIM

1. That Crestline connects to their SAP today. Say "will feed, built during the pilot".
2. That SAP is their FY26 system. Only FY25 is in a filing.
3. Any days, cash release, interest or savings figure for this company.
4. Anything about power, concessions, defence, subsidiaries or the consolidated group.
5. Consolidation, multi currency, or a partner's share of a joint venture.
6. A retention figure. None is published separately.
7. A progress figure for the Metro Line 4 packages. None is filed.
8. Any project outside the three running jobs named above as part of the running EPC book.
9. Hosted in India, ISO certification, per tenant encryption, or any security feature not live today.
10. Our demo data as theirs, or any client of ours as a reference.
11. That we know how their bills move today. We know only what is filed.

## Screens and the ERP fields each needs

SAP objects are the usual ones for each item and are confirmed at the pilot handshake, never assumed.

| Screen (project scope) | What it shows | ERP fields needed |
|---|---|---|
| Overview | Contract to cash waterfall; value state map summing to the contract | Contract value, project and WBS, work executed and measured with dates, RA bill amounts and deductions (retention, advance recovery) |
| O2C | Stage waits for each RA bill from measured to collected: each stage's days, its share of the cycle, and whose desk it sat on | Event trail per bill: measured, prepared, submitted, acknowledged, certified, invoiced, collected, each with date, user and department; department flagged ours or the client's |
| Client | Where the client's cash is stuck, against the terms the client signed | Payment term days, certification window, retention percent and cap, mobilisation advance percent, customer receipts with dates |
| Working Capital | Position, cash cycle diagram, ranked levers (figures stay inside the app during the pilot) | Trial balance by account with opening figures; customer advances; contract asset and receivable lines by project |
| P2P and Vendors | Purchase order to payment, timing against each vendor's own terms | Purchase orders, goods receipts, supplier and subcontract invoices, payments, vendor payment terms, MSME flag |
| Ask Crestline, Alerts & Tickets | Questions over the same evidence; verdicts become owned tickets | Users with name, department and mailbox, for owners |
