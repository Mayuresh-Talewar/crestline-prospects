# Shri Swami Samarth Engineers: solutions (screens true today)

Calculator: calc/ss-savings.ts, full output in calc/ss-savings-output.txt. Inputs: operating income FY26 630.37 Cr and receivable days 65 (Acuite, 6 Jul 2026). Per day = 630.37 / 365 = 1.727041 Cr. No terms passed, so floor 0, ceiling 95 days; both steps sit inside. No interest.

## Problem 1: where each bill waits
- Screens: O2C (Cash In) with the discovered bill process map; Working Capital cycle simulator; Client screen; Actionables under each chart with owner, deadline and named bills; Alerts & Tickets with the auditor.
- Scenario marks (rule 13, calc values only): today 65 days; 10 days sooner = 55 days, 17.27 Cr released once; 30 days sooner = 35 days, 51.81 Cr released once. Dashed, hollow, same scale, from zero. "Scenario, not a forecast". Rows overlap and are never added.
- Time saved is days out of the wait, never hours of management time.
- Ownership: client acknowledges, certifies and pays; the company measures, prepares, reviews, submits and invoices.

## Problem 2: the gain not yet explained
- Screens: Performance (before and after the first commitment, verified closes only); Ask Crestline (position and why questions answered from the screen's own evidence); Alerts & Tickets.
- Pilot: read-only, one to three EPC projects, 14 days; the list of bills holding cash, each with value, days and owner.
- No mark with a figure beyond the two calc rows above.

## Asserts (calc)
No negative release; interest = 0; days x per day cross-check against simulate; payables never release cash. Each assert broken once and failed visibly, then run clean (9 of 9 pass).
