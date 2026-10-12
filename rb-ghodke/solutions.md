# RB Ghodke Infrastructure: solutions (screens true today; marks from calc only)

Calc: calc/rb-savings.ts, output in calc/rb-savings-output.txt. Per day = 313.50 / 365 = 0.858904 Cr. Receivable (debtor) leg 69 days. No terms passed; the simulator's floor is therefore 0 and its ceiling 99, and both steps sit inside. No interest.

| Problem | Screen | What Crestline does once connected | Mark (scenario, not a forecast) | Whose move |
|---|---|---|---|---|
| 1 Wait to be paid | O2C, Client, Working Capital simulator | Rebuild each bill from its dates; split the 69 days by stage; name the bills past their usual wait with a deadline | 10 days less: 69 to 59 days, Rs 8.59 Cr released once. 30 days less: 69 to 39 days, Rs 25.77 Cr released once | Measure, prepare, review, submit, invoice: RB Ghodke. Acknowledge, certify, pay: the client |
| 2 Suppliers paid early | P2P, Vendors | Payment timing against each vendor's own due date | None. Payables never release cash (assert in calc); creditor days stay 12 | Payment decisions: RB Ghodke |
| 3 Order book | Ask Crestline, Alerts & Tickets | Answer "what if bills were paid ten days sooner" from the same simulator; raise the finding with owner and date; auditor re-measures | Same two rows, never added | Owner named per ticket; closed only when the number moves |

Overlap rule: rows overlap and are never added. Pilot: one to three civil construction projects, read-only, 14 days, adapter built first.
