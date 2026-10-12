# Oval: Crestline web-app fit (OV-2)

Read-only check of the app code on branch `clientui` (repo `process-automation-crestline`), 2026-10-07.
The Oval profile (revenue, order book, client mix, ERP) comes from an unverified dossier. Every claim about Crestline below cites the app code.

## 1. Fit for EPC works contracts: strong

| Capability | Evidence |
|---|---|
| O2C: RA bills, certification lag, collection | `lib/derive/cases.ts:58-64` (milestone bills, alongside RA bills); `app/(app)/projects/[id]/o2c` |
| Retention | `prisma/schema.prisma:1091` `RetentionItem`; `lib/derive/client-funding.ts:362` (defect-liability release action) |
| Client advances + BG expiry | `prisma/schema.prisma:1122,1133-1134` `CustomerAdvance.bankGuaranteeNo/Expiry`; `lib/insights/client-scenarios.ts:811-821` flags a guarantee lapsed while an advance is still out |
| Claims | `prisma/schema.prisma:1146` `Claim` |
| P2P, vendor advances, MSME 45-day | `prisma/schema.prisma:1645` `VendorAdvance`; `app/(app)/projects/[id]/p2p`, `/vendors` |
| WC simulator | `lib/finance/cycle-simulation.ts:198` `simulate` (bounded by contract terms) |
| Levers ranked in rupees | `lib/insights/levers.ts:50` `priceLevers` |
| Ask Crestline | `app/(app)/ask`, `app/(app)/projects/[id]/page.tsx`, `lib/ask/` |
| Tickets + auditor re-measure | `lib/orchestrator/tickets.ts:224` `verifyTicket`; `app/(app)/projects/[id]/tickets` |
| Hierarchy / owner per desk | `prisma/schema.prisma:376` `Department` (isInternal); `lib/insights/desks.ts`; `app/(app)/org-hierarchy` |
| Two-route reconciliation | `lib/derive/reconcile.ts:180` `discoverPayableScope`, `:332` `measureBasisFactor` |

## 2. Hard answers

| Question | Answer | Why |
|---|---|---|
| O&M recurring / periodic billing | **NO** (not modelled) | `Project.contractType` only expects `EPC / ITEM_RATE / LUMPSUM` (`prisma/schema.prisma:493`). The O2C trail is executed, measured, RA bill, certified, invoiced, collected. Nothing models a billing schedule or recurring invoices. A periodic invoice could still flow as an invoice-to-collection case, but with no measurement or certification stage it would read mostly NA. |
| Service / training contracts (non-RA billing) | **PARTIAL at best** | Invoices and collections would derive (DSO, ageing). Certification, retention and the contract-asset legs would be NA. Skill-development payments released in tranches by the government are not modelled. |
| Tally connector | **NO** | `lib/connectors/registry.ts:41` lists `TALLY` (XML export) with `available: false`. `createAdapter` only builds `GREY_ERP` (`:45-55`). CSV/Excel is also `available: false` (`:42`). The contract is ready (`lib/connectors/types.ts`), but the adapter has to be written. |
| Small-company scale | **YES** | Built for per-project figures; all thresholds come from the project's own distribution. Grey's three projects come to 27k events (CLAUDE.md), the same order as a ~Rs 150 Cr contractor. Caveat: Tally data has a thin event trail (vouchers, not workflow steps), so the time-per-step and process figures will be thinner than on Grey. |
| BG tracking | **PARTIAL** | Only the BG attached to a client advance, with an expiry alert (see above). No register of performance BGs, EMD or retention-against-BG, and no BG limits. |
| Lean team, no CFO | **YES, with a caveat** | Four roles: OWNER > ADMIN > MEMBER > VIEWER (`lib/auth/rbac.ts:16-17`). The MD can be OWNER and the finance head ADMIN. Tickets go to the desk resolved from the hierarchy, not to the most senior name (`lib/orchestrator/prompt.ts:38`), so the MD is told rather than handed the work. On a tiny hierarchy one person covers several desks (`lib/insights/peers.ts:259`). Auto-mail is off unless `ORCHESTRATOR_AUTO_MAIL=on`. |

## 3. Booklet: must not claim / honest pilot

**Must not claim:**
- "Works with Tally today" or "plug and play with your ERP". Only the Grey adapter is live.
- O&M, service or training contract analytics.
- A full bank-guarantee register.
- Any Oval figure. Nothing has been measured on their data, and the dossier is unverified.
- Live sync from their accounting system before an adapter exists.

**Honest pilot:**
- 2-3 EPC works projects (PSU / oil and gas, North-East) chosen with the finance head.
- One adapter for their system (a Tally XML export or a CSV mapping into `NormalizedEvent`), 3-6 weeks of build by us (internal engineering estimate, not measured; never printed).
- Deliverables: O2C certification and collection waits against each contract's own terms, retention and advance positions with BG expiry, vendor timing against terms, WC simulator, ranked levers, and tickets to named desks.
- Every figure the source cannot supply shows NA with a reason.
- O&M and training stay out of scope and are named as such.

## 4. Who sees what

| Person | Screens |
|---|---|
| **MD** | `/ask` (morning brief over every project); `/dashboard` (control tower, project comparison); `/working-capital` (company position, release opportunity per project); `/tickets` (what was raised and whether it moved). Can be read-only (VIEWER) or OWNER. |
| **Finance head** | Project scope: `/projects/[id]/working-capital` (position, accrued/paid basis, simulator, levers), `/o2c` + `/client` (certification, collection, retention, advances/BG), `/p2p` + `/vendors` (early/late payments, MSME), `/tickets` (raise, alert owner, audit), `/overview` (contract-to-cash, reconciliation). Role ADMIN; manages access in `/settings/access`. |
