# NP Infraprojects: webapp fit (step 2)

Basis: the app's CLAUDE.md and lib/navigation.ts as read on 2026-10-09 (read-only). Company data: data.md, one CARE document (22 Sep 2025, standalone, FY25 unaudited).

## What the story needs and where the app answers it

| NP story | Screen true today | What it shows |
|---|---|---|
| 282 gross current asset (GCA) days, tied by CARE to retention, security deposits, margin money locked with clients | Project > Working Capital; portfolio O2C retention drill-down (/o2c/retention) | Capital trapped on a job, cash-cycle diagram, simulator, ranked levers |
| Which client holds it | Project > O2C > Client (nested under O2C) | Where this client's cash is stuck, whose delay, when it lands |
| Which bill, since when | Project > O2C | Billing, certification and collection, discovered process of how bills flowed |
| Ten or thirty days out | Project > Working Capital simulator | Cash released at the measured daily rate; sliders stop at the contract's own bounds |
| Who acts | Alerts & Tickets; Ask Crestline (home at both scopes) | Finding to owner, mail never on one click, auditor re-measures, closed only on the number |
| Order book of 1,367 Cr, project by project | Portfolio Overview and Projects grid | Each project's trapped capital |

## Fit and limits (honest)

- GCA days is CARE's measure. Crestline's own legs are stock, unbilled (contract asset) and receivable days. The pack therefore applies the 10 and 30 day steps to the 282 as one receivable-style leg and says "scenario". No split of the 282 is published, so none is drawn.
- Retention is a first-class balance in the app (capability list). Security deposits and margin money are NOT named capabilities; whether an ERP exposes them is confirmed at the probe. The pack never says Crestline reads them today. Pages say "Once connected" and "From your ERP" only.
- ERP unknown (NOT FOUND). The pack prints "ERP". The adapter is built first; the 14 days start once connected (pilot rule).
- Nothing on payables, vendors or inventory is published, so P2P, Client and Vendor lenses print "Not published" with a reason (NA rule applied to a page).
- The 42-day operating cycle is a different measure and is neither printed nor combined with 282.
- No interest: no borrowing rate is published.
- Ownership (product rule): measure, prepare, review, submit and invoice are NP's. Acknowledge, certify and pay are the client's. Retention release is the client's act.
- Sensitive items (rating level, liquidity wording, non-cooperation, gearing, net worth) stay out; see sensitive-garvis.md.
