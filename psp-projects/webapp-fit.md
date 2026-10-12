# PSP Projects: where Crestline fits (ticket PS-S23, 2026-10-12)

What the company's own report says it runs on: "integrated ERP systems" and "SAP enabled systems" (AR 2025-26, pp 17 and 35 of the PDF). No module or version is named, so the booklet says "ERP" and makes no connection claim. Crestline sits above the ERP, read-only, and the pilot is one entity, one segment, 14 days.

| Question the accounts raise | Screen in the app today | What it shows once connected |
|---|---|---|
| Which bills carry the days between 102.6 and management's own 70? | Project O2C and Client (`/projects/[id]/o2c`, `/client`); Ask Crestline | Every unpaid RA bill aged against its own due date, ranked by money x days past term, with the client and the desk |
| Where does built work wait to be certified? | Project O2C; Overview contract-to-cash waterfall | Each bill rebuilt from its own dates: measured, prepared, reviewed, submitted (ours), acknowledged and certified (the client's) |
| What is a day worth, and what does a move release? | Project Working capital: cash cycle, Position and Simulate | Collection, unbilled and stock legs at measured per-day rates; bounds stop at the contract, vendor credit is never stretched |
| Which stock sits on site unissued? | Project P2P and Working capital | Stock replayed on posting dates, by site and value, priced at materials per day |
| Is vendor credit being used inside terms? | Project P2P and Vendors | Each payment against that vendor's own terms; early payment shown as cash given away |
| Who owns the fix and did it work? | Alerts and Tickets | Ticket with owner and date; the same figure re-measured until it moves |
| What if a leg moved? | Ask Crestline (what-if) | Answered through the simulator inside the contract's bounds |

Not covered, and said so in the booklet: no ledger, no write-back, no margin or cost control, no scheduling. Retention is tracked as a balance against each contract's release condition; this source states no release time, so no scenario is run on it.
