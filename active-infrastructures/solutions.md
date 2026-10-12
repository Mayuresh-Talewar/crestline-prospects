# Active Infrastructures Limited: solutions (step 2)

Every screen named here exists in the app today (checked against lib/navigation.ts). Nothing says Crestline is connected to the company's system: the adapter is built first, then 14 days of read-only analysis on one project.

## Problem 1: bills wait 188.7 days to be paid

| What the reader asks | Screen, once connected | What it shows |
|---|---|---|
| Which bills hold this cash? | O2C, Cash In (project) and Client | Each bill with value, age, step and owner |
| What is ten days worth? | Working Capital (project), simulator | The receivable leg moved at its measured daily rate |
| What do I do first? | Working Capital, ranked levers and the "Do this" playbook | Named bills, each with a deadline |
| Who owns it? | Alerts & Tickets | Ticket with owner, baseline, target and due date, re-measured on fresh data |

Rule 13 marks (calc values only, receivable leg, per day Rs 96.57 Cr / 365, scale starts at zero, dashed and hollow, "Scenario, not a forecast"):

| Mark | Days | Cash released once | Interest |
|---|---|---|---|
| Today | 188.7 | none | none |
| 10 days less | 178.7 | Rs 2.65 Cr | not priced |
| 30 days less | 158.7 | Rs 7.94 Cr | not priced |

Rows overlap. They are never added. Collection is the client's act, so the move is a plan with the client's desk, not a promise.

## Problem 2: contract work done and not yet billed

| What the reader asks | Screen | What it shows |
|---|---|---|
| Which pieces of work wait to be billed? | O2C (project) | Bills from measurement through submission, with the step each sits on |
| Whose desk holds each? | O2C and Alerts & Tickets | Company steps (measure, check, prepare, review, submit, invoice) apart from the client's (acknowledge, certify, pay) |

No scenario mark: the calculator has no leg for it.

## Problem 3: the named risk

| What the reader asks | Screen | What it shows |
|---|---|---|
| Which payers drive the delay? | Client (under O2C) | This client's payment behaviour, whose delay it is, and when it lands |
| Did the fix work? | Performance | Only verified closes count |

No scenario mark.

## Ours and the client's

Measure (joint), prepare, review, submit and invoice are the company's. Acknowledge, certify and pay are the client's.

## Caveats

- Per day uses revenue from operations. If receivables carry indirect tax the cash figure is conservative. Not verified for this company.
- The live simulator stops at the payment term each client signed. Those terms are not published, so no term is assumed and none is printed.
- Interest is not priced: two subsidiaries disclose two different overdraft rates and no single rate applies to the cash released.
