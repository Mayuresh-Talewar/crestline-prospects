# SCON Projects: where Crestline fits (webapp-fit)

Source of product facts: _shared/crestline-webapp-context.md, the app's CLAUDE.md and lib/navigation.ts (read only, 2026-10-09). Company facts: data.md (CRISIL, 5 Feb 2026, standalone).

## The question
Gross current assets are 100 days at 31 Mar 2025 (CRISIL), down from 148 to 167 days. Which stage, project and client holds those days, and whose move releases them? The rating shows one number; Crestline's screens are built for the split.

## Screens, true today, mapped to the question
| SCON question | Crestline screen (today) | What it shows |
|---|---|---|
| Where is the cash across all jobs? | Portfolio: Ask Crestline, Portfolio Overview, Working Capital | Position, release opportunity per project, ranked levers |
| Which bills wait, and for whom? | O2C (Cash In) with the Client screen nested under it | RA bills, receivables, retention; certification and payment behaviour per client |
| Which wait is ours? | O2C process view of how bills really flowed | Wait ownership follows the act that ends it |
| What if ten days came out? | Working Capital: cycle simulator | Cash released once; floors at the contract's certification window and the client's payment term; paying vendors later never counts as cash |
| Who does what by when? | Alerts & Tickets, Ask Crestline | Finding to owner to date to auditor re-measure; mail never on one click |

## Ownership (product rule)
- SCON's own acts: measure with the client (joint), check, prepare, review, submit, invoice.
- The client's acts: acknowledge, certify, pay. Client delay is never counted as SCON's.

## What is NOT claimed
- No connection to any SCON system (ERP not found); the adapter is built in the pilot. No ISO, hosting, region or encryption claim. No client behaviour implied for the clients named on the company site.
- Debtor, creditor and inventory days, any borrowing rate, any working-capital target and payment terms are not published, so the pack models one leg (GCA days) at a day of FY25 operating income, prices no interest, and prints "not published" on three lenses.
- Not a margin or cost tool, not project management, not a claims tracker (that line is dropped on p14).
