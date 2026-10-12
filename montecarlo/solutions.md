# Montecarlo Limited: solutions.md (MC-S23)

Every screen below exists in the app today (lib\navigation.ts). All figures are the calc output (calc\savings-output.txt); scenarios, not forecasts; rows overlap and are never added. "Once connected" throughout.

| Problem | Screen and what it would do | Scenario (calc) | Rule 13 mark |
|---|---|---|---|
| 1 Wait to be paid | Project O2C and Client, Working Capital: ages every unpaid invoice against its own due date, ranks by money x days past term, names the client and the desk, raises a ticket per bill and re-measures | Ten days: 93.4 to 83.4 days, Rs 123.80 Cr once. Thirty days: 63.4 days, Rs 371.41 Cr once | Scenario, not a forecast |
| 2 Unbilled work | Project Overview waterfall and O2C bill timeline: rebuilds each bill from its own dates, shows whose move ends each wait | Ten days: 51.7 to 41.7 days, Rs 123.80 Cr. Thirty days: 21.7 days, Rs 371.41 Cr | Scenario, not a forecast |
| 2 Retention | Retention tracked bill by bill against each contract's release condition | Balance Rs 442.67 Cr only; no scenario | none |
| 3 Project materials | Working Capital stock lever: replays movements on posting date, names stock to draw down first | Ten days: 44.4 to 34.4 days, Rs 43.22 Cr. Thirty days: 14.4 days, Rs 129.65 Cr | Scenario, not a forecast |
| Combined | Simulator, one run | Ten days each: Rs 290.82 Cr. Thirty days each: Rs 872.46 Cr | Scenario, not a forecast |
| Ranking | Lever ranking in one currency, bounded by contract terms | Order: certification, collection, project materials (cash per day Rs 12.38, 12.38, 4.32 Cr) | none |

Not priced: vendor credit (no per-vendor terms; paying later is never a saving), interest (no single borrowing rate), retention (no release basis).
Ownership: certification wait spans the company's own steps and the client's act; collection is the client's act; materials are the company's.
