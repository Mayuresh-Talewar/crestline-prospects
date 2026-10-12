# SJ Contracts: webapp fit (SJ-2, 2026-10-09, verdict LIGHT)

Basis for every figure: CRISIL Ratings rationales, standalone, fiscal years to 31 March. Source for the app: lib/navigation.ts and the app's CLAUDE.md, read 2026-10-09.

## What SJ Contracts' published story needs, and the screen that answers it

| Question the story raises | Screen (project scope unless stated) | True today? |
|---|---|---|
| Where does each bill wait, and for how long? | O2C (Cash In): billing, certification, collection, with the discovered process map of how bills flowed | Yes, on a connected source |
| Whose move ends each wait? | O2C, wait ownership: a wait ending in acknowledged, certified or collected is the client's; one ending in our submission is ours | Yes |
| Which client is holding the money? | Client screen under O2C | Yes |
| What is a day worth? | Working Capital: cycle simulator, steps in days at the measured rate per day | Yes. Here the rate per day is the only input published: FY24 operating income Rs 963.40 Cr / 365 |
| Which vendor is paid early or late against its own terms? | P2P and Vendors | Yes. Not drawn in this booklet: no vendor data is published |
| Who is told, and did the number move? | Alerts & Tickets: raise, owner mailed (never on one click), auditor re-measures | Yes |
| Ask in plain words | Ask Crestline (company and project scope) | Yes |

## What is NOT available for SJ Contracts, so no screen is shown with their figures
- Working-capital days, debtor, creditor and inventory days: not published (CRISIL, 1 Feb 2024 and 15 Apr 2025). The app would show NA, never zero. So the booklet has no "today" days bar and no baseline.
- Interest rate: not disclosed. No interest is priced anywhere.
- ERP: not named in any primary source. The booklet says "ERP" and builds no adapter claim.
- Pillar not modelled in the booklet: P2P (no vendor figures published).

## Calc limits that govern what can be printed
- The cycle simulator clamps a lever at a floor (the contract's term, or 0 where none is passed) and a ceiling. No terms were passed, so the floor is 0. A mechanical baseline of 60 days was used only so a 30-day step fits inside the clamp; it is not an SJ figure and is never printed.
- Payables: with no vendor terms, asking for 10 more days of vendor credit releases Rs 0. The product rule (never release cash by paying late) held in the calc.
- Steps are on the value of a day only: 963.40 / 365 = Rs 2.6395 Cr per day. 10 days = Rs 26.39 Cr, 30 days = Rs 79.18 Cr. Output: calc/sj-savings-output.txt.
