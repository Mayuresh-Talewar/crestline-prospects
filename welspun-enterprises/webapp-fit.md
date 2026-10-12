# Welspun Enterprises: where the Crestline web app fits

Entity: Welspun Enterprises Limited (WEL), consolidated. Figures: data.md. Product facts: _shared/crestline-webapp-context.md and the app's own navigation. Everything here is true of the app today; nothing says Crestline is connected to WEL's SAP S/4HANA. The pilot builds that adapter, read-only, first.

## The story the app answers
Order book of 18,729 Cr at 30 Jun 2026; FY26 revenue 3,615.38 Cr, 2.2% below FY25 restated; contract assets 1,318.41 Cr (up 11.6%); trade receivables 592.20 Cr (up 76.0%). Question: as the book executes, where does each bill wait between work done and cash?

## Screens that answer it (project scope unless stated)
| Screen | What it does for WEL's question |
|---|---|
| Ask Crestline (home, both scopes) | Morning brief, then "How much is waiting to be certified?" or "What if the wait to bill were 10 days shorter?" Answers are figures first, from code. |
| Overview | Contract to cash waterfall: where contract value stops becoming cash; stage waits; value-state map that sums to the contract. |
| Working Capital | Position, cash-cycle diagram, the cycle simulator and ranked levers ("Do this first"). Contract asset days is labelled a Crestline analytical measure. |
| O2C (Cash In) | Work executed, RA bills, certification and collection, with the discovered process of how bills really flowed. |
| Client (under O2C) | One client's certification and payment behaviour against the terms it signed. |
| Alerts & Tickets | A finding becomes a ticket with an owner, a due date and a baseline; the auditor re-measures the same figure; closed only when the number moves. |
| Performance | Counts only verified closes. |
| Portfolio: Working Capital, Clients | The same views over all projects, once more than one is connected. |

## Ownership of a wait (follows the act that ends it)
Ours (WEL): measure with the client, check, prepare, review, submit, invoice. Client's: acknowledge, certify, pay. Joint: measurement. A client wait is chased, never "fixed" by us.

## Limits to respect
- The simulator's floor on the unbilled leg is the contract's certification window; the calc passed no terms, so its floor is zero and only 10 and 30 days are asked (inside the 1.4x / +20 day ceiling and the floor).
- Paying vendors later is never shown as releasing cash (calc assert 4).
- Interest is shown only at a disclosed rate. WEL discloses lender spreads but no average rate on EPC debt; the 7.5% treasury return is not a borrowing rate. No interest is priced.
- Pilot scope: one entity, one segment, read-only, 14 days. HAM and BOT road annuity receivables are outside the review.
- Nothing from WEL's SAP is implied; no page presents the demo environment as WEL.
