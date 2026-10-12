# AGC Infracon Private Limited: where Crestline fits (step 2)

Basis for every figure: AGC Infracon Private Limited, standalone, FY24 audited, Infomerics press release 23 Apr 2025 (the rationale's own approach is standalone; its table heading says "Consolidated", we do not use that word). Calculator: calc/agc-savings.ts, output calc/agc-savings-output.txt. Verdict from step 1: LIGHT.

## What the published record gives us, and what it does not
| Have (dated) | Do not have |
|---|---|
| FY24 total operating income Rs 567.63 Cr, PAT Rs 38.39 Cr (p5) | Receivable, unbilled, payable or stock balances, so no working-capital days |
| Order book Rs 1,702.68 Cr at 31 Dec 2024, "3x of FY24 revenue" (p3) | Any later order book, any later year |
| Rated limits Rs 235.98 Cr: cash credit 20.00, overdraft 30.00, GECL 0.98, bank guarantee 185.00 (p1, p7) | Any borrowing rate, so no interest figure |
| Clients by category: state infrastructure body, irrigation divisions, national highway bodies (p3) | Contract terms (payment term, certification window), so the simulator floors stay at their defaults |
| Address from the company site | Any ERP name. None is printed. |

## Fit by app screen (all exist in lib/navigation.ts today)
| Question for AGC | Screen | What it would show once an adapter is built and connected |
|---|---|---|
| Which bill is holding the money, since when | Project Working Capital (`/projects/[id]/working-capital`) | Position, cash-cycle diagram, simulator, ranked levers |
| Where does each bill wait, ours or the client's | Project O2C (`/projects/[id]/o2c`) and Client (`/projects/[id]/client`) | Stage waits from the ERP's dates; a wait belongs to whoever makes the act that ends it |
| Who pays slow against the term they signed | Client | Gap to that client's own terms, never a peer |
| Vendors paid early or late | P2P and Vendors | Timing against each vendor's own due date; paying late never shown as a release |
| What to do first | Ask Crestline (`/projects/[id]`) | Ranked levers, named documents, deadlines |
| Make it a commitment | Alerts & Tickets (`/projects/[id]/tickets`) | Ticket, owner told (never on one click), audit on the same figure |
| Did it move | Performance | Verified closes only |

## Limits on every claim
- No adapter exists for AGC's system. It is built first in the pilot; the 14 days of read-only analysis start once it is connected. No line says Crestline reads or connects today.
- No ERP is named in any source, so the pages say "ERP".
- Without days the NA rule applies: the booklet draws no "today" days bar and no days for any step.
- The simulator's sliders stop at the contract's windows; with no terms published, the calc passes none and uses a stand-in baseline only so the clamp does not bind. Cash released is days moved x value of a day, whatever the stand-in.
- Ownership: measure, prepare, review, submit and invoice are AGC's; acknowledge, certify and pay are the client's. Joint measurement is both.
- No interest: no rate is published.
- Scenario, not a forecast. Rows overlap and are never added.
