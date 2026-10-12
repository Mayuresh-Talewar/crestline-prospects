# Shri Swami Samarth Engineers: where the story meets the app (true today)

Checked against the app's lib/navigation.ts and CLAUDE.md on 2026-10-09. Nothing here implies access to the company's ERP; no ERP is named in any public source.

| Booklet page | Story point | App screen that answers it today | True today? |
|---|---|---|---|
| 4, 5 | Receivable days 65 (FY26), 81 (FY25) | Project scope, Working Capital (position, cash-cycle diagram) and O2C (Cash In) | Yes, once a source is connected |
| 6, 10, 12 | A day is worth 630.37 / 365; 10 and 30 days on the receivable leg | Working Capital cycle simulator (Position / Simulate), valueOfADay, simulate | Yes. The lever floor is the client's payment term; with no term passed the floor is 0 and the ceiling 95 days (calc) |
| 7 | Five lenses | Working Capital, O2C, P2P, Client, Vendor screens | Yes. P2P, Client and Vendor print "Not published" because the public record has no figure |
| 8 | One bill, work done to cash | O2C discovered process map; ownership follows the act that ends the wait | Yes, once connected. Stage waits are not public and are not drawn |
| 9 | Reason, desk, date | Actionables under every chart; desks resolved from the event log | Yes |
| 11 | Finding to closed ticket; Ask Crestline | Alerts & Tickets, auditor, Ask Crestline (retrieval, then code; model never produces a number) | Yes |
| 14, 15 | Read-only, 14-day pilot | Read-only adapters; Settings lists what a source can supply | Yes as worded; no certification, hosting or encryption claim |

## Ownership (O2C)
Ours: measure (jointly with the client), prepare, review, submit, invoice. The client's: acknowledge, certify, pay. A wait ending in the client's act is the client's and is never counted as ours.

## Limits to respect
- Simulator: paying vendors later is never shown as releasing cash; collection cannot go below the term the client signed. Payables never release cash (calc assert).
- No interest anywhere: no borrowing rate is published (data.md, NOT FOUND).
- No ERP is named. The adapter does not exist until the pilot builds it, so no page says Crestline reads the company's system today.
- Creditor days, inventory days, ratings and limits are not printed (README SS-2).
