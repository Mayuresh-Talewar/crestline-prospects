# Man Infraconstruction Limited: solutions and savings (MI-3)

Scope: the EPC business only (MAN EPC, standalone = single EPC segment); pilot on one to three third-party EPC contracts. MICL real estate is not modelled. Every figure is from `calc/maninfra-savings.output.txt` (section in brackets), run on Crestline's own pure functions (`simulate`, `toTerms`, `leversFor`, `valueOfADay`, `priceLevers`) with the financing rate passed as **0** and asserted: no carry, no interest is printed, because standalone borrowings are nil (AR26 p.108). Value is **cash released, once**. Rows overlap and are never added. Scenarios, not promises.

Basis [EPC, FY26 audited]: revenue Rs 285.6 Cr / 365 = **Rs 0.782 Cr (Rs 78 lakh) a day** [calc s.2]. Receivable days 48.4; contract-asset days 14.8 [calc s.2].

## Per problem

### P1. Book running off: make the next large order cash-healthy from bill one
- **Screen:** project `/projects/[id]/overview` (contract-to-cash waterfall) and `/projects/[id]/working-capital` (cash-cycle diagram + Simulate), set up when the order is signed; `/ask` for "which contract is holding the most cash".
- **With Crestline (chart):** a waterfall from contract value to cash collected, each step a bar, showing where the order's value stops becoming cash; the cash-cycle timeline from vendor paid to client paid.
- **Days and cash (ILLUSTRATIVE) [calc s.5]:** per Rs 1,000 Cr of new EPC order value, each 10 days of billing-to-cash = **Rs 9.1 Cr** cash, once, if billed over 3 years; **Rs 6.8 Cr** over 4 years (the MD's stated 3 to 4 years for the current book); Rs 27.4 Cr if executed in one year. No such order is signed.
- **Needs from their ERP:** the order's RA bills with measured, submitted, certified, invoiced and paid dates; contract payment term and certification window.

### P2. Older receivable tail: name the bills
- **Screen:** `/projects/[id]/o2c` and `/projects/[id]/client` (bill-level ageing against each bill's own due date), alerts and tickets `/projects/[id]/tickets`.
- **With Crestline (chart):** ageing bars per contract, each bill aged on its own due date, with the owner's desk named on each row.
- **Days and cash [calc s.3]:** Row A, receivables 10 days faster (48.4 to 38.4 days) = **Rs 7.8 Cr**, once. Row C, 30 days faster (48.4 to 18.4) = **Rs 23.5 Cr**, once, which is 62% of all FY26 receivables and is tested against no published payment term, so it is an upper scenario.
- **Needs:** invoice-level receivables with due dates and receipts; client payment terms per contract.

### P3. Work done, not yet billable: measure the certification queue
- **Screen:** `/projects/[id]/working-capital` (contract-asset days, a Crestline metric, not GAAP; simulator floor = the contract's certification window), `/projects/[id]/o2c` pipeline.
- **With Crestline (chart):** O2C pipeline buckets (executed, submitted, certified, invoiced, collected) that sum to value in flight, ours vs the client's step marked.
- **Days and cash [calc s.3]:** Row B, 10 days faster to bill (14.8 to 4.8 days) = **Rs 7.8 Cr**, once. Row D, 30 days (capped at the whole balance, 14.8 to 0) = **Rs 11.6 Cr**, once.
- **Needs:** measurement and certification dates per RA bill; certification window per contract.

### P4. Group receivables: shown labelled, apart from third-party
- **Screen:** `/clients` (company) and `/projects/[id]/client`. The app has no related-party flag today (webapp-fit s.2); the pilot labels group contracts by project, outside the third-party scope.
- **With Crestline (chart):** third-party and group receivables as separate, labelled bars; group work never coloured as risk.
- **Days and cash:** none claimed. Rs 6.40 Cr (16.9%) group, Rs 31.5 Cr third-party [calc s.1].
- **Needs:** client master marking group entities; per-contract billing.

### P5. Swinging cash from operations: see the month, not the year
- **Screen:** `CashMovementPanel` on `/projects/[id]/working-capital` (monthly in, out, net, cumulative, peak funding need).
- **With Crestline (chart):** monthly bars of collections against payments with the cumulative line; the trough is reported, not the close.
- **Days and cash:** none claimed (the swing is a timing picture, not a saving).
- **Needs:** dated receipts and payments per contract.

### Retention (inside P2/P3)
- `priceLevers` at rate 0 [calc s.4]: whole retention Rs 3.6 Cr = 4.6 days of revenue, as a **ceiling**; milestone status is not published, so nothing is claimed as releasable.

### What cannot be done today [calc s.2]
- `toTerms` returns nothing: no contract payment term or certification window is published, so there is no "to their own terms" row. It is the first thing the pilot measures.
- Stores (Rs 1.0 Cr) and vendor credit have no published rate or terms, so those legs are not drawn. Paying vendors later is never a saving.

## Booklet table [EPC; cash released, once; rows overlap, never added; no interest: no EPC borrowing]
| Problem | Crestline screen | Days moved | Cash, once | Needs from ERP |
|---|---|---|---|---|
| Next large order (ILLUSTRATIVE, per Rs 1,000 Cr, 3-year billing) | Overview waterfall, WC simulator | 10 days billing-to-cash | Rs 9.1 Cr (4-year: Rs 6.8 Cr) | RA bill dates, contract terms |
| Receivables 10 days faster | O2C, Client, Tickets | 48.4 to 38.4 | Rs 7.8 Cr | Invoices, due dates, receipts |
| Receivables 30 days faster (upper scenario) | O2C, Client | 48.4 to 18.4 | Rs 23.5 Cr | Same, plus payment terms |
| Contract assets 10 days faster to bill | WC, O2C pipeline | 14.8 to 4.8 | Rs 7.8 Cr | Measurement + certification dates |
| Contract assets 30 days (whole balance) | WC, O2C pipeline | 14.8 to 0 | Rs 11.6 Cr | Same |
| Retention (ceiling, milestones unknown) | WC levers | 4.6 days of revenue | up to Rs 3.6 Cr | Retention ledger, DLP dates |
| Group receivables | Clients, labelled | none | none claimed | Group entity flag |

Footnote for print: "Standalone accounts, FY2025-26 (filed 15 Jul 2026); per day = Rs 285.6 Cr / 365. Man Infraconstruction reports no standalone borrowing, so no interest figure is printed. Receivables include GST while revenue does not, so the day counts are crude. Scenarios, not promises."
Sense check: the largest row (Rs 23.5 Cr) is 1.06% of standalone total assets and 4.2% of standalone cash, deposits and current investments [calc s.3]. The booklet should say the current EPC saving is small.
