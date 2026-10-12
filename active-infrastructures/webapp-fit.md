# Active Infrastructures Limited: where Crestline's web app fits (step 2)

Basis for everything below: consolidated FY26 (year ended 31 Mar 2026), Annual Report 2025-26 ("AR FY26"). Pages are printed page numbers, with the PDF page in brackets. Product behaviour is taken from the app's own CLAUDE.md and `lib/navigation.ts` (read-only).

## What the filings give us to work with

| Need | In the AR FY26? | Fit |
|---|---|---|
| Money waiting on bills (receivables) | Yes: Rs 4,993.50 lakh, p132 (PDF p135) | Strong. Works with the O2C and Working Capital screens |
| Revenue per day (value of a day) | Yes: Rs 9,656.65 lakh, p133 (PDF p136) | Strong. One basis with receivables |
| Contract work done, not yet billed | Yes: Inventories, services Rs 1,992.22 lakh, Note 7, p150 (PDF p153) | Fits the "built, waiting to be billed" leg, shown as a figure only |
| Client payment terms | No | Receivable floor in the simulator cannot be set. Scenarios are plain 10 and 30 day steps |
| Vendor payment days, vendor terms | Not on a comparable basis | P2P and Vendors screens are not used in this story. Lens reads "Not published" |
| Borrowing rate | Two different overdraft rates in two subsidiaries, no single rate | No interest is priced anywhere |
| ERP name | No | Copy says "ERP". No adapter is claimed |

## Screens that carry the story (all exist in the app today)

| Screen | Scope | What it answers for this company, once connected |
|---|---|---|
| Ask Crestline | Company and project | "Which bills are waiting longest?" and "What if bills were paid ten days sooner?" answered from the same evidence as the screens |
| Working Capital (project) | One project | Cash-cycle diagram, simulator, ranked levers. The receivable leg is the one used here |
| O2C, Cash In (project) | One project | Each bill from measurement to payment, with age and value |
| Client (under O2C) | One project | Which client's bills wait, and whose delay it is |
| Alerts & Tickets | One project | A finding becomes a ticket with an owner, a date and a re-measured figure |
| Performance | One project | What moved after the first verified close |

Not used in the booklet story: P2P and Vendors (no comparable published figure), Project Hierarchy, Portfolio Overview.

## Ownership of each step (product rule: the act that ends the wait decides)

| Step | Whose act |
|---|---|
| Joint measurement | Both (the company with the client) |
| Check (MB / QS), bill prepared, review, bill submitted, tax invoice raised | The company's |
| Client acknowledged, certified, payment | The client's |
| Retention released | The client's |

Measure, prepare, review, submit and invoice are ours (the company's). Acknowledge, certify and pay are the client's. A client's delay is never counted as the company's.

## Honest limits

- No ERP data has been seen. Nothing in the booklet says Crestline reads, connects to or holds the company's system today.
- The pilot is one project, one segment, read-only, 14 days, after the adapter is built.
- Debtor days are Crestline's arithmetic on the published accounts, not a figure management states.
- The group includes a majority-owned roads subsidiary. Its order book is shown as a separate figure and is never added to the parent's.
