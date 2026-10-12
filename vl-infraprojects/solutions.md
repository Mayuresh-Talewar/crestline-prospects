# V.L. Infraprojects: solutions and scenarios (VL-S23)

Every scenario figure is from calc\vl-savings-output.txt (app functions: simulate, leversFor, valueOfADay). Scenario, not a forecast. Cash is released once. Rows overlap and are never added; only the combined run, one simulate call, is a joint figure. No interest is priced: no single borrowing rate is published.

| Lever (owner) | Today | 10 days less | 30 days less | Rate |
|---|---|---|---|---|
| Built, waiting to be certified (ours to start, client certifies) | 120.8 | 110.8 days, ₹4.10 Cr | 90.8 days, ₹12.31 Cr | revenue per day ₹0.4102 Cr |
| Waiting to be paid (client) | 56.4 | 46.4 days, ₹4.10 Cr | 26.4 days, ₹12.31 Cr | revenue per day ₹0.4102 Cr |
| Project materials on site (ours) | 59.4 | 49.4 days, ₹1.55 Cr | 29.4 days, ₹4.64 Cr | materials consumed per day ₹0.1545 Cr |
| Vendor credit | 38.5 | held | held | no terms published, never a saving |
| One combined run, all three moved together | | ₹9.75 Cr; cycle 77.3 to 57.3 | ₹29.25 Cr; cycle 77.3 to 17.3 | |

Not priced and why: vendor credit (no terms, paying later is never cash released), retention (no single balance and no release basis), interest (no single rate), "to a stated term" (no payment term or certification window published).
Ranking: cash released once; certification and collection tie, certification first because the step is ours; materials third. The app's priceLevers was not run: it needs a built working-capital position and prices carry, which is zero here.
Mechanism lines: _shared\HOW-CRESTLINE-SAVES.md, word for word, once connected.
