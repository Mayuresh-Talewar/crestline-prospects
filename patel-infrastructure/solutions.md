# Patel Infrastructure Limited: solutions.md (PI-S23)

Every figure below is from calc\pi-savings-output.txt (app functions simulate, leversFor, valueOfADay, priceLevers; all asserts pass; every assert broken once and failed visibly, see calc\pi-savings-break-tests.txt). Scenario, not a forecast. Rows overlap and are never added; the combined row is one simulate() run.

Value of a day: revenue ₹9.799 Cr (₹3,576.65 Cr ÷ 365); material consumed ₹3.500 Cr (₹1,277.6 Cr ÷ 365).

| Lever (base) | Move | Cash released once | Cash cycle | Carry saved a year if used to retire the 12.75% NCDs (cash counted up to ₹173.62 Cr) |
|---|---|---|---|---|
| Certification (revenue) | 67.1 to 57.1 days | ₹97.99 Cr | 193.2 to 183.2 | ₹12.49 Cr |
| Certification (revenue) | 67.1 to 37.1 days | ₹293.97 Cr | 193.2 to 163.2 | ₹22.14 Cr (₹173.62 Cr counted) |
| Project materials (material consumed) | 132.7 to 122.7 days | ₹35.00 Cr | 193.2 to 183.2 | ₹4.46 Cr |
| Project materials (material consumed) | 132.7 to 102.7 days | ₹105.01 Cr | 193.2 to 163.2 | ₹13.39 Cr |
| Collection (revenue) | 32.3 to 22.3 days (10 only) | ₹97.99 Cr | 193.2 to 183.2 | ₹12.49 Cr |
| All three, 10 days each (ONE run) | as above | ₹230.98 Cr | 193.2 to 163.2 | ₹22.14 Cr (₹173.62 Cr counted) |

Ranking (priceLevers over the three legs, each on its own base): collection 10 days and certification 10 days tie at ₹97.99 Cr (certification is ours to move, collection is the client's clock); project materials 10 days ₹35.00 Cr.

Not priced: vendor credit (held at 38.9 days; simulate clamps it, so asking for 90 days releases no cash); retention (combined with deposits, no release basis); customer advances (no clock). No certification window and no client payment term are published, so no "to term" row exists.

Screens true today that carry each move: Working Capital (cash-cycle diagram, simulator, ranked levers), O2C bill timeline, Ask Crestline (what-if), Alerts and Tickets. "How" wording is the approved set in _shared\HOW-CRESTLINE-SAVES.md, always "once connected".
