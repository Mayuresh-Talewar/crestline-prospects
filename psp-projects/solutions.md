# PSP Projects: solutions and savings (ticket PS-S23)

Every figure is from calc\ps-savings-output.txt (app `simulate`, `leversFor`, `valueOfADay`, `priceLevers`). Scenario, not a forecast. Cash is released once. Rows overlap and are never added. No interest is priced: only ranges are published (term loans 6.65% to 9.51%, working-capital loans 6.83% to 10.50%, AR26 note 16), no single rate.

Per day, FY26: revenue Rs 8.19 Cr (2,989.45 / 365); materials Rs 2.96 Cr (1,081.66 / 365, the note 45 cost-of-goods base).

| Lever | Opening days | Move | Days after | Cash released once (Rs Cr) |
|---|---|---|---|---|
| Collection (receivables) | 102.6 | 10 days less | 92.6 | 81.90 |
| | | 30 days less | 72.6 | 245.71 |
| | | to management's own 70-day target (conservative end of "around 60 to 70") | 70.0 | 266.98 |
| Certification (unbilled, 400.35) | 48.9 | 10 days less | 38.9 | 81.90 |
| | | 30 days less | 18.9 | 245.71 |
| Project materials (stock, 343.75) at materials per day | 116.0 | 10 days less | 106.0 | 29.63 |
| | | 30 days less | 86.0 | 88.90 |
| COMBINED, one simulate run: collection to 70, certification 30 less, materials 30 less | cycle 210.8 | | cycle 118.2 | 601.59 |

Ranking (priceLevers input order, by cash released once; carry is 0 because no rate is disclosed): 1 collection to 70 (266.98), 2 certification 30 days (245.71, tied with collection 30), 3 materials 30 days (88.90).

Lever table (every lever considered)
- Collection: PRICED. Floor: the lower end of the client term is immediate payment (0 days), so 70 is above the floor. Never below term holds. The cash from any collection scenario (largest 266.98) stays inside the 403.41 Cr of gross receivables already past due; no not-yet-due balance is needed.
- Certification: PRICED. No certification window published, floor 0. Thirty days leaves 18.9.
- Project materials: PRICED at materials per day, never revenue per day. EPC site stock only.
- Retention 211.00 Cr: BALANCE ONLY. Released at project end per contract or replaced by bank guarantee; no speed stated, so no days or cash scenario.
- Vendor credit (DPO 56.6): NOT PRICED. Terms are stated per scheme, not as one ceiling; the simulator refuses 120 days and holds at 56.6. Paying later is never a saving.
- Interest: NOT PRICED, no single disclosed rate.
- Customer advances 796.42 Cr: funding, not a use; shown by size only.

Screens true today for each: see webapp-fit.md. HOW lines come word for word from _shared\HOW-CRESTLINE-SAVES.md (receivables, unbilled work, project materials, retention, vendor credit, process map, ranking).
