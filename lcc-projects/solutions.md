# LCC Projects Limited: solutions.md (LC-S23, 2026-10-12)

Every figure below is from calc\lc-savings-output.txt (app functions simulate, leversFor, valueOfADay; no terms passed; rate 0). Scenarios, not forecasts. Rows overlap and are never added; the combined line is its own simulate run.

| Problem | Screen that is true today | Scenario (cash released once, ₹ Cr) |
|---|---|---|
| 1 Receivable days | Measured position only (46.2 days, ₹455.82 Cr). O2C and Client age every unpaid invoice against its own due date | NOT PRICED: receivables already sit within the 45 to 90 day credit clients are given; the simulator never moves a bill before its own due date |
| 2 Unbilled work | O2C bill timeline: how long work waited to be measured, submitted, certified, whose move ends it; longest waits raised first | 10 days 98.64 (54.2 to 44.2); 30 days 295.91 (to 24.2) |
| 3 Stock on site | Working Capital stock lever at materials per day: stock replayed on posting dates, what sat unissued by site and value | 10 days 37.94 (65.3 to 55.3); 30 days 113.82 (to 35.3) |
| Combined (one run, certification + materials) | Cycle simulator, Position and Simulate | 10 days each 136.58, cycle 133.4 to 113.4; 30 days each 409.73, cycle 133.4 to 73.4 |
| Vendor credit | P2P and Vendors: payments judged against each vendor's own terms | None: held at 32.3 days, no cash released |

Ownership: the certification wait runs from LCC Projects' own measuring, preparing and submitting to the client's certifying; the payment wait ends in the client's act.
Ranking (cash released once at 10 days): certification 98.64, then project materials 37.94. Collection is not priced (Garvis ruling). priceLevers was not used: it needs a project's ledger, vendor list and a financing rate, none of which are public. The ranking is the simulator's own cash figure per leg.
Not priced: see calc\lever-table.md. How Crestline saves it: lines from _shared\HOW-CRESTLINE-SAVES.md beside each result in the pack.
