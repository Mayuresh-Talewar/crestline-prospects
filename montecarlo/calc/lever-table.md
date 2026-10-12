# Montecarlo Limited: LEVER TABLE (MC-S23)

Basis: STANDALONE, AR FY25, Rs Cr, closing balances, 365 days. Output: savings-output.txt (script mc-savings.ts, app functions simulate, leversFor, valueOfADay; no terms passed; rate 0). Cash is released once. Rows overlap and are never added; the combined rows are ONE simulate run.

Ranking: priceLevers needs a project's cash-cycle position, cash ledger and vendor list, which a published account does not give, so it was NOT run. With no rate, carry is 0 for every lever, so the ranking is cash released once per day moved. Collection and certification tie at Rs 12.38 Cr a day (same revenue base); materials is Rs 4.32 Cr a day. Order printed: certification (partly the company's own steps), collection (the client's act), project materials.

| Lever | Balance | Base per day | Days now | 10 days | 30 days | Status |
|---|---|---|---|---|---|---|
| Collection (DSO), trade receivables | 1,156.49 | revenue 4,518.80 / 365 = 12.38 | 93.4 | 123.80 | 371.41 | PRICED. After 30 days: 63.4 days, above the 30 days that note 11(b) gives as the lower end of its credit period for goods (NEVER BELOW THE CLIENT'S TERM holds). Not priced "to term": no single term is published, and services are milestone based. |
| Certification (contract-asset days), unbilled revenue | 639.99 | revenue 4,518.80 / 365 = 12.38 | 51.7 | 123.80 | 371.41 | PRICED. No certification window is published, so the simulator floor is 0 and no "to term" row exists. After 30 days 21.7 days. |
| Project materials (DIO), construction materials | 191.91 | materials consumed 1,577.35 / 365 = 4.32 | 44.4 | 43.22 | 129.65 | PRICED on materials per day only, never revenue per day. EPC site stock (note 10, construction materials). Property development inventory 17.38 is excluded. |
| COMBINED, one run, all three moved together | | | | 290.82 | 872.46 | ONE scenario from one simulate run. Not the sum of rows on the page. |
| Retention (note 39(c)) | 442.67 | revenue 12.38 | 35.8 days of revenue | n/a | n/a | NOT PRICED. Balance only. Release basis not published, so no speed is invented. |
| Customer advances (note 39(c)) | 620.08 | n/a | n/a | n/a | n/a | NOT PRICED. Owed to clients; not a lever. Shown as a balance only. |
| Vendor credit (DPO) | n/a | n/a | n/a | n/a | n/a | NOT PRICED, NOT PRINTED as a day count. No per-vendor terms are published and paying later is never a saving; the leg is held (leversFor returns no dpo lever). |
| Interest | n/a | n/a | n/a | n/a | n/a | NOT PRICED. No single borrowing rate is published (range only), so carry is 0 and no interest figure exists. |

Retention in days of revenue: 442.67 / 12.38 = 35.8 (Crestline's arithmetic, a description of the balance, not a scenario).
