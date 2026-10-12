# Nikhil Constructiongroup: where the Crestline web app fits

Basis: app CLAUDE.md and lib/navigation.ts, read-only, 2026-10-09. Everything below exists in the app today. Nothing is claimed about a connection to this company's system: the adapter does not exist until a pilot builds it, and no filing names an ERP.

## Problem to screen (all true today)
| Problem on the NK-2 story | Screen | What it does today |
|---|---|---|
| Gross current assets of 275 days at 31 Mar 2025, one figure, no split | Project > Working Capital (cycle simulator, ranked levers) | Moves a leg by N days at its measured daily rate, held inside the contract's own bounds; pays-vendors-later is never shown as cash released |
| Which bill is waiting, at which client desk, since when | Project > O2C and Client | Rebuilds each RA bill from its own dates; ranks waits by rupee-days; a wait is ours or the client's by the act that ends it |
| Year-end bunching (about 45% of revenue booked in the last quarter, per CRISIL) | Project > O2C, Overview (contract to cash waterfall) | Shows where contract value stops becoming cash, stage waits, ageing on each document's own due date |
| Deposits held by institutions add to the days | Project > O2C (retention and deposit lines), Working Capital | Retention and security deposit shown as their own aged balances when the source records them |
| Turning a finding into an owner and a date | Alerts & Tickets, row actions | Raise ticket, Alert owner (mail never sends on one click), auditor re-measures the same figure; closed only when the number moves |
| Asking in plain language | Ask Crestline (company and project) | Retrieves from the screen's own evidence; code does the arithmetic; the model never produces a number |

## Ownership (product rule)
Ours (the company): measure, prepare, review, submit, invoice. The client's: acknowledge, certify, pay. Joint measurement is both. A wait that ends in the client's act is never counted as the company's.

## Limits of this fit (stated, not hidden)
- No split of the 275 days is published. The scenario therefore runs on ONE leg, the receivable leg of the simulator, as a yardstick: each day taken out is valued at one day of FY25 revenue (447.15 / 365). It is not a claim that all 275 days are receivables.
- No contract terms are passed, so the simulator floor is zero days and no contractual line is drawn.
- No borrowing rate is disclosed: interest is 0 and nothing is priced.
- No creditor days are published: the payables leg is not run. The calculator asserts that payables never release cash.
- The Alerts & Tickets, Ask and simulator screens are real; the live figures for this company would come only from a connected source in a pilot.
