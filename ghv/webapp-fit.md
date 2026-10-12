# GHV (India): Crestline web app fit (GH-2)

Read-only review of the app at `process-automation-crestline` (branch clientui, 2026-10-07). Paths are relative to that repo. GHV facts are the unverified dossier; nothing here is a GHV figure.

## 1. Fit for domestic EPC: STRONG

| Need | Verdict | Evidence |
|---|---|---|
| RA bills, certification, invoice, collection | Yes | bills rebuilt from events, `lib/derive/cases.ts`; certification SLA and payment term on `Contract`, `prisma/schema.prisma:624-660` |
| Milestone bills | Yes | `BillingPlanLine`, schema:932-951 (schedule slip + billing lag) |
| Retention | Yes | `RetentionItem` schema:1091; `retentionPct`/`retentionCapPct` on Contract |
| Customer advances (mobilisation) | Yes | `CustomerAdvance` schema:1122; `mobilisationAdvancePct` on Contract |
| Claims | Yes | `Claim` schema:1146 |
| P2P, vendor advances, subcontract | Yes | `VendorAdvance` schema:1645, `SubcontractBilling` schema:1699 |
| WC simulator | Yes | `lib/finance/cycle-simulation.ts:120` (leversFor), `:198` (simulate), bounded by contract terms |
| Levers / "do this first" | Yes | `lib/insights/levers.ts:28`; Ask decision seam `lib/ask/decide.ts:91,211` |
| Ask Crestline | Yes | `lib/ask/answer.ts:219` (kindOf), `:235` (route) |
| Tickets + auditor | Yes | `Ticket` schema:2423; `verifyTicket` `lib/orchestrator/tickets.ts:224` |
| Hierarchy | Yes | `app/(app)/org-hierarchy/`, `lib/derive/org.ts` |
| Reconciliation (ledger vs documents) | Yes | `lib/derive/reconcile.ts:180` (payable scope), `:332` (measured basis factor) |

## 2. Hard answers

| Question | Answer | Evidence |
|---|---|---|
| Multi-currency (AED, UAE contract) | **NO.** Currency is stored per row, but nothing converts or guards it. No FX table. Org base is fixed INR; sync defaults to INR; formatters print ₹/Cr/L only; portfolio sums plain numbers. An AED contract would be summed into rupee totals as if it were rupees. | schema:60 (`baseCurrency` INR), schema:633; `lib/sync/engine.ts:109,258,372`; `lib/format.ts:13,49,54`; `lib/finance/portfolio-wc.ts:220`; no currency use in `lib/derive` except `project-scope.ts:997` (passed through) |
| Multi-entity / group / inter-company reconciliation | **NO (partial data model only).** `CompanyCode` (legal entity) exists and is stored, but no derivation, screen or reconciliation reads it. No related-party, trading-partner or inter-company concept anywhere in lib/app/components/prisma. | schema:318-335; `lib/derive/org.ts:53,287` (label only); grep for intercompany/related-party/trading partner: 0 hits |
| HAM / BOT annuity highway contracts | **NO.** No annuity, concession or toll model; Contract is item-rate/milestone billing to a client. Construction-phase RA billing under a HAM EPC sub-contract would fit; the annuity receivable would not. | schema:624-660, 936; grep annuity: 0 hits |
| Scale at ~7x order book | **PARTIAL / UNTESTED.** Live on 3 Grey projects, 27,184 events. Every page reads the full project event log; portfolio warm ~31s, project ~14s; ~47s to move 27k rows from Neon us-east-2 to India. GHV volumes untested. | `lib/derive/event-source.ts:28`; CLAUDE.md Gotchas + "One scope per request" |
| BG / LC | **PARTIAL.** BG number + expiry on customer advances only, surfaced as an expired-BG warning. No BG register (performance BGs, margin, commission), no LC. | schema:1133-1134; `lib/view-models/project-client.ts:516`; `components/client/project/project-client.tsx:1091` |
| ERP connectors | **ONE live: Grey Infra ERP** (simulator). SAP S/4, SAP ECC, Oracle Fusion, Tally, CSV listed `available: false`. GHV ERP unknown, so any pilot starts with an adapter build. | `lib/connectors/registry.ts:31-42,45-57` |

## 3. Booklet must NOT claim; honest pilot

Must not claim: AED or any multi-currency support; group consolidation or GHV India / GHV Infra inter-company reconciliation; HAM/BOT annuity analytics; a BG/LC register; a ready connector for their ERP (only Grey works); proven performance at their volume; any GHV figure (nothing is connected).

Honest pilot (8-10 weeks, read-only): 2-3 domestic INR projects only (one NHAI-type EPC, one railway or building), one entity (GHV India). Week 1 confirms the ERP and probes capabilities (NA where the source cannot supply). Build one adapter to the `NormalizedEvent` contract. Deliver O2C certification/collection waits, retention, advances, P2P vendor timing, the simulator and 5 tickets closed by the auditor on re-measured figures. UAE contract, inter-company flows and BGs are listed as phase 2 with named build items (FX table + currency guard, CompanyCode-aware consolidation with inter-company matching, BG register).

## 4. Promoter vs finance head

| Reader | Question | Screens |
|---|---|---|
| Promoter | Where is the money trapped across the group, which job, who releases it | `/ask` morning brief; `/dashboard` control tower; `/projects` grid; `/performance` (verified closes only) |
| Finance head | Can I trust the number, what is the facility need, what do I chase this week | `/working-capital` (accrued and paid bases, peak funding need); project Overview reconciliation; `/o2c`, `/p2p`, `/clients`, `/vendors`; project Working Capital simulator + levers; `/projects/[id]/tickets`; Settings source capabilities |
