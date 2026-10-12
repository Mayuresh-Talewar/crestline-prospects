# Garuda: what Crestline's app already does for this story (GA-S23, 2026-10-09)

Read: the app's CLAUDE.md, lib/navigation.ts, lib/glossary.ts (key `contractAssetDays`), lib/finance/cycle-simulation.ts, lib/finance/working-capital-cycle.ts. Nothing below is a plan; each row is a screen or function that exists today.

## The story this serves (GA-2)
Respect first (growth, profit), then one question: as the order book executes, how long does each bill wait between work done and a certified bill. The story runs on CONTRACT ASSETS. No receivable or debtor figure is used anywhere (GA-2).

## Fit table
| Garuda question | App screen (project scope) | True today? | Note |
|---|---|---|---|
| How many days of revenue sit as work done, not yet certified? | Working Capital: contract asset days card | Yes | Glossary: "A Crestline measure, not an accounting-standard ratio." Always labelled so. |
| What if that wait were 10 or 30 days shorter? | Working Capital: cycle simulator, lever "Built, waiting to be certified" | Yes | Moves a real balance at revenue per day. Floor is the contract's certification window; with no window passed the floor is zero, so the 10 and 30 day rows are not clamped. |
| Which bill is waiting, at which step, on whose desk? | O2C screen: bills rebuilt from their own dates; Client screen | Yes, once connected | Public accounts cannot say this. It needs the company's own dates, read-only. |
| Who can release it? | Ownership follows the act that ends the wait | Yes | Ours: measure, prepare, review, submit, invoice. The client's: acknowledge, certify, pay. Joint measurement is both. |
| Turn a finding into a commitment | Actionables: Raise ticket, Alert owner; Alerts & Tickets list; auditor re-measures | Yes | Mail never fires on one click. Closed only when the figure moves. |
| Ask in plain words | Ask Crestline (company and project) | Yes | Every figure computed in code, never by a model. |

## Not claimed
- A Tally adapter. The books are on Tally (AR26 auditor's report); the wording is "will feed, read-only", built during the pilot.
- Interest. Garuda has no borrowing that released cash would repay (GA-2). The simulator's carry is set to 0 and the calc asserts it.
- Certification, hosting, region or encryption (none in place).
- Any figure from Garuda's own ledger. We have not seen it.

## Ours versus the client's (booklet wording)
Garuda: joint measurement (with the client), MB / QS check, RA bill prepared, review started and completed, bill submitted, tax invoice raised. Client: acknowledged, certified, payment received, retention released.

## Calc binding
Per day = 530.72 / 365 = 1.454 Cr (FY26 revenue from operations, standalone). Contract asset days = 218.91 / per day = 150.6, "Crestline analytical measure, not an accounting standard". Both are standalone FY26. See calc/garuda-savings.ts and garuda-savings-output.txt.
