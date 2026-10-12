# SCON Projects: solutions (screens true today, marks from calc only)

Calc: calc/scon-savings.ts, output in calc/scon-savings-output.txt. Inputs: FY25 operating income 1,355.55 (CRISIL, 5 Feb 2026); GCA days 100 at 31 Mar 2025. No terms passed (none published); rate 0 (none published). Per day 3.7138 Cr. Asserts (no negative release, interest zero, independent days x per-day cross-check, payables never release cash) each broken once and failed visibly, then clean.

| Problem | Crestline answer today | Scenario mark (rule 13) | Ownership |
|---|---|---|---|
| 1. One number, many queues | O2C and Client screens split the days by bill, client and stage; the playbook names the bills and deadlines | 100 to 90 days: Rs 37.1 Cr once. 100 to 70: Rs 111.4 Cr once. Dashed, hollow, "Scenario, not a forecast." | Prepare, review, submit, invoice: SCON. Acknowledge, certify, pay: client |
| 2. Growth is the test | Working Capital simulator with contract floors; Alerts & Tickets with auditor re-measure | One day Rs 3.71 Cr (measure, solid); 10 days Rs 37.1 Cr and 30 days Rs 111.4 Cr dashed | Same split; paying vendors later is never shown as released cash |

Rules held: rows overlap and are never added; cash once; no interest; one leg modelled because no split of the 100 days is published; every claim about Crestline is a screen that exists today (Ask Crestline, O2C, Client, Working Capital simulator, Alerts & Tickets); nothing says Crestline connects to a SCON system.
