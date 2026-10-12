# Vikran Engineering: webapp fit (VK-S23)

Read from the app's CLAUDE.md and lib\navigation.ts (read-only). Everything below exists in the app today.

| Booklet chart or page | App screen | Fit |
|---|---|---|
| 1 The cash cycle, Position and Simulate | Project, Working Capital: CashCycleDiagram and the cycle simulator ("Where the money sits, and who is holding it") | Direct. Three legs only (stock, unbilled, receivables); the vendor leg has no rate and the simulator does not draw it. No "to term" row: not priced. |
| 2 No clock on these, ranked by size | Project, Working Capital: "Pressure on the cycle", second panel (components\finance\cycle-factors.tsx) | Direct. No single working-capital rate is published, so the cost panel is not used. |
| 3 Cash movement, annual | CashMovementPanel is monthly in the app; the booklet uses the annual version the catalogue allows, from the audited cash flow statement | Annual only, no peak funding need drawn. |
| 4 How these four move together | Project, Working Capital, same title | Three lines (working capital, days line, cash). The days line leaves out the vendor leg and is labelled so. |
| 5 Process map | O2C bill timeline (eleven stages, owner tags) | Stage days are estimates from the stage script except the payment wait; retention release is Not public. |
| Ask Crestline (p11) | /projects/[id], the what-if kind, held to the contract's bounds | Direct. |
| Alerts and tickets (p11) | Raise ticket, Alert owner, the four-step ticket lifecycle | Direct. |
| Ranking (p10, p12) | lib\insights\levers.ts (priceLevers) | Not run: it ranks by carry and needs a rate. Ranked by cash released once instead, as the brief allows. |

Ownership follows the app: measure, prepare, review, submit and invoice are Vikran's; acknowledge, certify and pay are the client's.
Not claimed: any connection to Vikran's ERP (none is stated in the filings), any hosting or certification statement.
