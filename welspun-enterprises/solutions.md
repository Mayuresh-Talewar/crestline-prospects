# Welspun Enterprises: solutions (screens true today, scenarios from calc only)

Calc: calc/we-savings.ts, output calc/we-savings-output.txt, break tests calc/we-savings-break-tests.txt. Basis: consolidated FY26, revenue from operations 3,615.38 Cr, contract assets 1,318.41 Cr at 31 Mar 2026. Value of a day 9.9052 Cr. Contract asset days 133.10 (Crestline analytical measure, not an accounting standard). No interest.

| Problem | Screen true today | Scenario (calc values only) |
|---|---|---|
| 1 Work done, not billed | Working Capital simulator (unbilled leg) and O2C: names the RA bills and measurement packs; ranked in the "Do this first" list | 10 days less: 133.10 to 123.10 days, Rs 99.05 Cr released once. 30 days less: 133.10 to 103.10 days, Rs 297.15 Cr released once. The two rows overlap and are never added. |
| 2 Billed, not paid | O2C and Client: each bill against its own due date; Alerts & Tickets: an owner and a re-measured figure | Not priced. Receivable days (46.9, FY25 41.3) are history, never a second priced row. |
| 3 Which site, bill, desk, since when | Overview waterfall and stage waits; Ask Crestline; process of how bills really flowed, read from SAP S/4HANA dates in the pilot | None. Step waits are not public and are not invented. |

## Who moves each step
Measure with the client, check, prepare, review, submit and invoice are WEL's. Acknowledge, certify and pay are the client's. Joint measurement is both.

## Rules kept
Paying vendors later is never a saving (calc assert 4). No interest: no average borrowing rate is disclosed and the 7.5% treasury return is not a borrowing rate (calc assert 2). Scenarios, not forecasts. Rows overlap.
