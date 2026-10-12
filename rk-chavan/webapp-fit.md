# R K Chavan Infrastructure: webapp fit (RK-2)

Checked against the app's CLAUDE.md and lib/navigation.ts, read only, 9 Oct 2026. Every screen below exists today. Nothing here says Crestline reads their system: no ERP is named in any primary document, so the adapter is built first in the pilot (Tally, SAP, Oracle and Excel are all adapter targets; `lib/connectors/grey/` is only the worked example and is never shown as theirs).

| Problem (see problems.md) | Screen that answers it today | What it would show once connected | Not claimed |
|---|---|---|---|
| 1. Gross current assets rose from 187 to about 250 days | Working Capital (project and portfolio): position, cash-cycle diagram, cycle simulator, ranked levers ("Do this first") | Stock days, unbilled days, receivable days and payable days as separate spans, each at its own measured daily rate | No split of the 250 days is public, so none is drawn. The booklet moves the 250 as one number |
| 2. Debtors at 100 to 140 days, Q4 billing and retention | O2C (Cash In): RA bills, receivables, retention; Client screen (whose delay, when it lands) | Each bill's own dates, each client's own terms, retention held and when it falls due | Which client or site is not public |
| 3. A growing book makes each day dearer | Cycle simulator (a day is a real balance at a measured rate) and the lever ranking | The value of a day on the project's own revenue and invoicing rates, updated as the book grows | Booklet uses FY25 income only (the latest full year CRISIL prints) |

## Ownership (product rule, never swapped)
Company's own acts: measure with the client, check, prepare, review, submit, invoice. Client's acts: acknowledge, certify, pay, release retention. A wait belongs to whoever makes the act that ends it. Client delay is never counted as the company's.

## Screens used for the sample finding and the question
- Finding to ticket: Alerts & Tickets (raise ticket, alert owner, auditor re-measures the same figure, closed only when the number moves).
- Ask Crestline (position, why, what now, what if, compare projects, projection): the what-if "10 days less" is a simulator run inside bounds; the model never produces a number.

## Simulator bounds that apply to the scenario (read from lib/finance/cycle-simulation.ts)
Passing no contract terms gives min 0 and max 350 days on the one leg modelled, so 240 and 220 days sit inside the bounds. A payables leg with no vendor terms is held at today's figure: stretching payables releases nothing (asserted in calc/rk-savings.ts).

## Honest limits
- Gross current assets days are one number; the app's four legs (stock, unbilled, receivables, payables) cannot be split from public data. The calc uses the single "built, waiting to be certified" lever slot as a carrier for the 250 days and the booklet calls it gross current assets.
- No interest: no borrowing rate is published (coupon rate reads NA on every facility).
- Pilot is one entity, one segment, read-only, 14 days.
