# Ajwani Infrastructure: webapp fit (step 2, 2026-10-09, verdict LIGHT)

Checked against the app's CLAUDE.md and `lib/navigation.ts` (PROJECT_SECTIONS: Ask Crestline, Overview, Working Capital, P2P with Vendors under it, O2C with Client under it, Alerts & Tickets, Performance, Project Hierarchy). Every screen named below exists today.

| Problem (problems.md) | Screen that answers it | What it does today | Limit on this company |
|---|---|---|---|
| 1. Scale moved fast, bills in flight grew with it | Project Overview (contract-to-cash waterfall, stage waits) | Rebuilds every bill from its own dates and shows where contract value stops becoming cash | Needs the company's ERP events. No adapter exists for an unnamed ERP; built in the pilot |
| 2. Current assets sit in deposits, retention and bills, and the accounts cannot say where | Working Capital (position, cash-cycle diagram) and O2C (bills by stage) | Splits the trapped capital into unbilled work, receivables and retention, per project | Debtor, creditor and inventory days are not published for this company, so no "today" bar is drawn |
| 3. A day is worth a known sum | Working Capital cycle simulator | Moves a leg at its measured daily rate; stops at the contract window, the payment term and the vendors' terms | Run here with no terms and no interest: days x Rs 2.07 Cr a day only |
| Who ends each wait | Client screen, Alerts & Tickets | Client delay is never counted as ours; a finding becomes a ticket with a baseline and an owner | Owners are named from the pilot data, never guessed |

Ownership in this booklet: measure (jointly with the client), prepare, review, submit and invoice are Ajwani Infrastructure's. Acknowledge, certify and pay are the client's.

Not claimed anywhere: an ERP name, a connection, a certification, hosting or encryption, a client of Crestline, a rating after June 2024, any sensitive item in sensitive-garvis.md.
