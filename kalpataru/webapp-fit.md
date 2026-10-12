INTERNAL. Product-fit note for the team only; never copied into the pack. "Grey" below is Crestline's demo simulator, never a client.
# KP-2 · Kalpataru (KPIL) · Crestline web-app fit

Prepared 2026-10-08. Read-only on app code (repo `process-automation-crestline`, branch `clientui`). Inputs: CLAUDE.md, app code, `_shared/crestline-webapp-context.md`, `_shared/master-design/FIXED-PAGES.md`, `kalpataru/src/kalpataru-dossier-internal.pdf`, `kalpataru/README.md` (Garvis BASIS ruling: standalone Indian EPC unless labelled).
Performance and scale figures below are taken from CLAUDE.md and are **documented, not re-measured** in this ticket. Every "absent" claim names the search that backs it.

Company context (dossier, unverified, consolidated unless noted): FY25 revenue >Rs 22,000 Cr consol / Rs 18,888 Cr standalone; order book Rs 64,495 Cr; EBITDA ~8.9% (stale, fact-check D16); 9+ verticals (wrong, D6: six businesses), 70+ countries (stale, D5: company prints 75+); international T&D via LMG / Linjemontage / Fasttel; post-merger KPTL + JMC; ERP "SAP-likely, not independently confirmed". Booklet prints "ERP" unless a filing names SAP (FIXED-PAGES slot rule).

## 1. Fit per segment, domestic EPC only

The engine is segment-agnostic: any segment whose bills move measure → RA bill → certify → invoice → collect, and whose orders move PO → GRN → invoice → pay, is covered. Fit differs by billing shape, not by product.

| Capability | T&D domestic (Power Grid, TRANSCOs) | Buildings & Factories (ex-JMC) | Water / irrigation | Railways / urban mobility / highways | Oil & gas pipelines |
|---|---|---|---|---|---|
| O2C (RA bill → certify → collect) | Fit. Milestone / supply-erection-commissioning billing still emits submit/certify/pay events | Strong fit (classic RA-bill EPC, closest to the Grey reference data; Grey: internal note, demo environment, never printed) | Strong fit; state-govt payers make client-delay split valuable | Strong fit (NHAI, railways, metro certify and pay slow) | Fit; fewer, larger milestone bills |
| Certification (contract asset days, cert window) | Fit | Strong | Strong | Strong | Fit |
| Retention ledger | Fit | Fit | Fit | Fit | Fit |
| Advances (mobilisation, vendor) | Fit | Fit | Fit | Fit | Fit |
| Claims (listed as aged cash, not run) | Partial: lists and ages; does not manage claims (FIXED-PAGES p14) | same | same | same; highways claims/arbitration are large and only aged | same |
| P2P (PO → GRN → pay vs own due date) | Fit for site buys; tower/conductor supply from own plant is not modelled (see §2) | Strong | Strong | Strong | Fit (line pipe often client-free-issue: P2P smaller) |
| Simulator (bounded by contract terms) | Fit where terms are in the source | Fit | Fit | Fit | Fit |
| Levers / "Do this first" / playbook | Fit | Fit | Fit | Fit | Fit |
| Ask Crestline (project + company scope) | Fit | Fit | Fit | Fit | Fit |
| Tickets + auditor (re-measure on sync) | Fit | Fit | Fit | Fit | Fit |
| Project hierarchy (`app/(app)/org-hierarchy`, `projects/[id]/org`) | Fit; reads org units and people from source | Fit | Fit | Fit | Fit |
| Reconciliation (ledger vs documents, measured factors) | Fit, needs project-level trial balance from the ERP | Fit | Fit | Fit | Fit |

Best pilot segment: Buildings & Factories or Water (RA-bill shape, domestic, INR, single entity). T&D is the largest segment but its plant-fed supply makes P2P/inventory partial.

## 2. Hard answers

| Question | Answer | Evidence (named search) |
|---|---|---|
| Multi-currency | **NO** (partial storage only). Schema carries a `currency` Char(3) column defaulting to INR on Project and documents, and `Organisation.baseCurrency`; nothing converts. Every formatter prints `₹` with en-IN grouping. | `grep -niE "exchange.?rate|fxRate|convertCurrency|toInr" lib app components` → no FX code (only the word "exchange rate" in glossary prose). `lib/format.ts` hard-codes `₹`. `lib/sync/engine.ts:109` sets `baseCurrency: "INR"`. |
| Multi-entity / foreign subsidiaries | **PARTIAL (stored, not rolled up).** `CompanyCode` model exists (SAP BUKRS) and Project has `companyCodeId`; it is read only by `lib/derive/org.ts`, the Grey adapter (Grey: internal note, demo environment, never printed), sync and two components. No entity filter, no per-entity roll-up, no consolidation or intercompany elimination. LMG/Linjemontage/Fasttel: **NO**. | `grep -rln companyCode lib app components` → adapter, types, derive/org.ts, sync engine, person-detail, source-projects-panel only; none in view-models or portfolio roll-ups. |
| JVs | **NO.** No JV / consortium / share-of-JV concept. | `grep -rniE "joint.?venture|\bJV\b|consortium" prisma lib` → no matches. |
| Segment views | **NO.** Project has `contractType` (EPC / ITEM_RATE / LUMPSUM) but no business segment or vertical field; portfolio filters are per project only. | `grep -niE "segment|businessUnit|vertical" prisma/schema.prisma` → no matches; "segment" in lib is chart-bar segments (`client-book.ts SplitSegment`). |
| Scale (hundreds of projects) | **NO, not today.** Built and exercised on Grey (internal note, demo environment, never printed; 3 source projects; CLAUDE.md also cites 6 and 8-project roll-ups). Portfolio renders warm in ~31s, project pages ~14s, event-log transfer dominates (27k rows ~47s from India). All documented, not re-measured. Hundreds of projects would need pagination/pre-aggregation not built. | CLAUDE.md "One scope per request", "Moving the event log dominates every page". |
| ERP connectors today | **One: Grey Infra ERP (the reference simulator; internal note, demo environment, never printed).** SAP S/4HANA, SAP ECC, Oracle Fusion, Tally, CSV are listed `available: false`; `createAdapter` throws for any type but GREY_ERP. A KPIL SAP adapter must be built first. | `lib/connectors/registry.ts` `SUPPORTED_SOURCES` + `createAdapter` switch. |
| Manufacturing (tower plant) inventory | **NO.** Inventory is site stores: goods receipt in (101) / issue out (261), DIO on issues. No production orders, BOM, plant WIP or finished-goods transfer to site. A `Plant` model exists (SAP WERKS master only). | `grep -niE "manufactur|production order" prisma/schema.prisma` → none; `Plant` at schema.prisma:340 is master data. |

## 3. What the booklet must NOT claim, and honest pilot wording

Must not claim:
- That Crestline reads, connects to or holds KPIL's SAP (or any system) today. No SAP adapter exists (`available: false`). Use "Once connected" per FIXED-PAGES rule 1.
- Multi-currency, FX, or any figure for the international T&D subsidiaries (LMG, Linjemontage, Fasttel) as a Crestline view.
- Group consolidation, multi-entity roll-up, intercompany, or JV share-of-cash.
- Segment dashboards ("T&D vs Buildings vs Water view").
- "Hundreds of projects", "your whole Rs 64,495 Cr order book", "70+ countries" as Crestline scope.
- Tower / conductor plant inventory, manufacturing WIP or plant-to-site stock.
- Post-merger "unified cross-segment reporting" (the dossier's angle) as a delivered capability.
- Claims or arbitration management (lists and ages only); margin / cost-to-complete; any ISO, hosting, region or encryption claim (FIXED-PAGES rule 2).
- Step-wait days on page 8 (rule 3); any figure not from a public filing, labelled standalone or consolidated.

Honest pilot wording (slots):
- `{PILOT_SCOPE}`: "two to three domestic INR projects in one segment, on the standalone company".
- `{SCOPE_CARD}`: "Domestic, standalone and in rupees. International subsidiaries, joint ventures, foreign-currency books and the tower plant are outside the pilot."
- `{ACCOUNTING_SYSTEM}`: "SAP" (SAP S/4HANA verified, AR FY26 p.131), worded "will feed, read-only, built during the pilot".
- p15 already carries "The adapter for your {ACCOUNTING_SYSTEM} is built first; the 14 days start once it is connected" — keep verbatim.

## 4. Two editions mapped to screens

| | Manish Mohnot, MD & CEO | Ram Patodia, Chief Financial Officer |
|---|---|---|
| Question | Which jobs and which counterparties hold the cash, and who on my side can move it? | How many days and crores are trapped, what releases first, what does it save in interest, and does the number reconcile? |
| Lead screens | Ask Crestline company brief (`/ask`); All projects → Overview control tower (`/dashboard`); Clients (`/clients`) and Vendors (`/vendors`); project Overview contract→cash waterfall; Project Hierarchy (`/org-hierarchy`) for "who can release it" | Company Working Capital (`/working-capital`): position, WC bridge, ratios by project, release opportunity; project Working Capital: cash-cycle diagram, simulator, levers, accrued vs paid bases, peak funding need; Reconciliation badges (match / divergent / single) |
| Action layer | Alerts & Tickets + Performance (verified closes only) as the governance read | Tickets with fixed baseline/target and the auditor's re-measure; "Make this the plan" from the simulator |
| Booklet emphasis | Fewer figures, the five lenses, the finding → closed ticket loop (p11), read-only trust (p14) | Ratios on standalone basis, interest at the company's disclosed rate range, every assumption stated, two-route reconciliation |
| Caveat to state | Pilot is one segment, domestic | Standalone only; consolidated figures labelled; no FX/entity roll-up in the product |
