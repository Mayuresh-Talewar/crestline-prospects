# Precast India Infrastructures: webapp fit (step 2, LIGHT)

Basis: CRISIL Ratings rationales, 4 Nov 2020 and 3 Aug 2023, standalone. App claims checked against the app's CLAUDE.md and lib/navigation.ts. Nothing here comes from the company's ERP; the ERP is not named in any primary document.

## Verdict
Partial fit, honestly stated. Crestline answers "where is project cash waiting, for how long, who can release it". CRISIL says this company's working capital cycle is funded by customer advances and creditors with minimal bank debt. So the fit is not "release trapped cash"; it is "show, project by project, how the advances are earned out and the creditors are paid". A pilot can measure this. The public record cannot price it, so nothing is priced.

## Screen by screen (project scope, all read-only, all true today)
| Crestline screen (route under /projects/[id]) | What it would show for Precast India | Fit |
|---|---|---|
| Ask Crestline (project root, and /ask) | Plain-language questions answered from the project's own measured facts | Yes |
| Overview (/overview) | Contract to cash trail for one project | Yes, if bills are in the ERP |
| Working Capital (/working-capital) | Position and the cycle on one project | Yes |
| P2P Cash Out (/p2p) and Vendors (/vendors) | Creditors: due date against payment date | Yes, this is the creditor half of the CRISIL funding sentence |
| O2C Cash In (/o2c) and Client (/client) | Advance, bill, certification, collection by client | Yes, CRISIL names "monthly bills" and advances |
| Alerts & Tickets (/tickets) | A finding becomes an owner, a date and a re-measure | Yes |
| Performance (/performance) | Before and after the first commitment | After the pilot only |

## Out of scope, stated plainly
- Plant inventory: Precast is part manufacturer. Crestline prices project cash only (Garvis ruling).
- Retention: CRISIL does not mention it. The bill timeline carries the stage; no claim is made that Precast has retention.
- Foreign currency: none; INR only.
- No ISO, hosting or encryption claim (none in place).
- The adapter for the company's ERP does not exist until the pilot builds it. No line says Crestline connects today.

## Pilot shape
One entity, one to three projects, read-only, 14 days from approved connection.
