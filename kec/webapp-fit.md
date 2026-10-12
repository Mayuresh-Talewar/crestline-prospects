# Crestline webapp fit for KEC International (KEC-2, 2026-10-07)

Purpose: decide what the CFO booklet (Rajeev Aggarwal) and the MD & CEO booklet (Vimal Kejriwal) may claim. Every statement below is read from the app code in `C:\Users\asus\Desktop\process-automation-crestline` (branch `clientui`, commit 5b80121). Paths are relative to that repo. KEC facts come from the internal dossier and are **unverified context** (KEC-1 grades them).

Key: **YES** built and live on the demo source · **PARTIAL** modelled or computed but with a stated limit · **NO** not in the code · **NEEDS ERP** works only once KEC's own data is connected.

---

## 0. The one fact that governs every claim

**Crestline has exactly one working connector today, and it is not SAP.**

- `lib/connectors/registry.ts:31-43` lists `SAP_S4` ("OData gateway: EKKO, VBRK, MSEG, CDHDR") and `SAP_ECC` ("RFC / IDoc extract") with `available: false`.
- `lib/connectors/registry.ts:45-58`: `createAdapter` has one case, `GREY_ERP`; anything else throws `No adapter for source type "..."`. That is the "No adapter for SAP_S4" message seen in the DB.
- The only adapter is `lib/connectors/grey/adapter.ts` (Grey Infra, a simulated EPC back office). Every figure the app has ever shown came from it: 3 projects, 27,184 events (CLAUDE.md:693-694).

What IS real and transferable: the schema is SAP-shaped (`CompanyCode` = BUKRS, `Plant` = WERKS, `PurchasingGroup` = EKORG/EKGRP, `prisma/schema.prisma:321-375`), and the universal contract (`lib/connectors/types.ts`, `SourceAdapter` at :945, `NormalizedEvent`) means an SAP adapter is "a new folder plus a line in registry.ts; nothing downstream changes" (CLAUDE.md, Architecture). That is a design claim backed by structure, **not** a tested SAP integration.

**Booklet rule:** never say "connects to your SAP" in the present tense. Say "reads SAP through one adapter we build for your instance; everything above the adapter exists today."

---

## 1. Feature-by-feature fit

Fit score: how much of KEC's need in that area the code meets today, assuming the data reaches it (5 = full).

### 1.1 O2C, cash in: fit 4/5

| Capability | Status | Evidence |
|---|---|---|
| RA bills rebuilt from the event log, measured → billed → certified → invoiced → collected | YES | `lib/derive/cases.ts` (BillCase); schema `ProgressBilling` :761, `BillingCertification` :1001, `CustomerInvoice` :1033, `CustomerReceipt` :1066 |
| Certified short off the certification event, deduction reasons | YES | `CertificationDeduction` :854; CLAUDE.md "Certified short comes off the certification event's attributes" |
| Ageing on each document's own due date | YES | CLAUDE.md, Derivation rules |
| Retention ledger and its basis tested per bill | YES | `RetentionItem` :1091; `lib/finance/working-capital-basis.ts` (`testRetentionBasis`) |
| Mobilisation / customer advances, recovery, outstanding | YES | `CustomerAdvance` :1122-1140 |
| **Advance bank guarantee expiry while advance outstanding** | YES (narrow) | `CustomerAdvance.bankGuaranteeNo/Expiry` :1133-1134; `lib/derive/client-book.ts:413-418,1185-1195` flags `guaranteeLapsed`; `lib/derive/client-projection.ts:107` raises a "guarantee" event |
| Variation / escalation claims (claimed, awarded, received) | PARTIAL | `Claim` model :1146 (escalation, idling, EoT, scope change); read in `lib/derive/project-scope.ts`, `client-book.ts`. Ledger only: no claim process mining |
| Client screen (where is our money with this client, whose delay) | YES | `app/(app)/projects/[id]/client/page.tsx`; portfolio `app/(app)/clients` |
| O2C forecast | YES | `lib/finance/o2c-forecast.ts:575` |

Gap for KEC: Power Grid / TRANSCO / Railways certification cycles run through the client's own systems; Crestline sees only the dates KEC's SAP records. Fine, and exactly the "ours vs theirs" split.

### 1.2 P2P, cash out: fit 4/5

| Capability | Status | Evidence |
|---|---|---|
| PO → GRN → supplier invoice → match → payment | YES | schema :1237-1640; `receivedValue` per order in `lib/derive/streams.ts` (GRN vs delivery, never double-counted) |
| Payment timing against each vendor's OWN due date, early = leakage | YES | Non-negotiable rules 1-2 (CLAUDE.md); `TimingDiverging` charts |
| Vendor scorecard, sites compared like vendors | YES | `lib/derive/vendor-scorecard.ts`, `lib/view-models/vendors.ts`; `app/(app)/projects/[id]/vendors` |
| MSME 45-day statutory flag | YES | `isMsme` `lib/derive/client-impact.ts:60,115,299-300` |
| Subcontract stream (work orders, subcontract bills) | YES | `SubcontractOrder` :1675, `SubcontractBilling` :1699; stream `SUBCONTRACT` `lib/connectors/types.ts:78` |
| Vendor advances | YES | `VendorAdvance` :1645 |
| Agreed-rate window pricing | YES | `VendorRateRecord` :2861; CLAUDE.md "orders priced against the agreed-rate window" |
| **Supplier LCs, usance/acceptances, buyer's credit, TReDS, supplier finance** | NO | no model or field; grep for LC/acceptance/factoring/TReDS returns nothing |
| Import procurement in foreign currency (steel, conductor, zinc) | NO (see 2.1) | |

### 1.3 Working capital: fit 4/5 per project, 3/5 at group level

| Capability | Status | Evidence |
|---|---|---|
| DSO / DIO / DPO / CCC with `DIO + DSO − DPO = CCC` or all NA | YES | `deriveRatios` `lib/derive/balances.ts:534` |
| Contract asset days (Crestline metric, labelled non-GAAP) | YES | rule 6; glossary |
| Cash-cycle diagram to scale, ownership of each half | YES | `CashCycleDiagram`; `internallyControllable` `lib/finance/working-capital-cycle.ts:92,180,200,221` |
| Cycle simulator bounded by the contract (cert window, payment term, vendor terms ceiling) | YES | `simulate` `lib/finance/cycle-simulation.ts:198` |
| Levers priced in one currency and ranked, financing as the alternative | YES | `priceLevers` `lib/insights/levers.ts:50`; `buildPlaybook` `lib/insights/playbook.ts:65` |
| Accrued and paid WC beside the ledger, bridge stated | YES | `lib/finance/working-capital-basis.ts` |
| Peak funding need (trough, not close) | YES | `lib/finance/cash-movement.ts` |
| Company roll-up: summed balances over summed per-day rates, never averaged | YES | `lib/view-models/portfolio-working-capital.ts`, `lib/finance/portfolio-wc.ts` |
| Borrowings, statutory dues, non-fund-based limits | NO | CLAUDE.md "Borrowings and statutory dues are not in the feed and the card says so" |

### 1.4 Process mining: fit 4/5

| Capability | Status | Evidence |
|---|---|---|
| Discovery, pure and deterministic, O2C and P2P separately | YES | `lib/process-mining/discover.ts` |
| Bottlenecks ranked by money, not duration | YES | CLAUDE.md "Bottlenecks rank by money" |
| Ours vs counterparty: the act that ends the wait decides | YES | `ROLES`, `lib/process-mining/intelligence.ts:24,303`; `Department.isInternal` from the source (`lib/connectors/types.ts:83-87`) |
| Rework counted per case | YES | discover.ts |
| Named stuck cases with value × days past usual, next step, doer | YES | `buildStreamIntel` `lib/process-mining/intelligence.ts` |
| **The visual process map canvas** | NO (removed) | CLAUDE.md: "THE PROCESS MAP TAB IS GONE"; engine survives, canvas does not. Do not show a map screenshot as a current screen |

### 1.5 Ask Crestline: fit 4/5

| Capability | Status | Evidence |
|---|---|---|
| Company and project scope, scope in the URL | YES | `app/(app)/ask/page.tsx`, `app/(app)/projects/[id]/page.tsx`, `app/api/ask/route.ts` |
| Lexical retrieval over the screens' own facts, IDF per request | YES | `retrieve` `lib/ask/retrieve.ts:284` |
| Kind decides the answer: why / what now / what if / compare / projection | YES | `lib/ask/answer.ts`, `lib/ask/decide.ts` |
| Model never produces a number; narration dropped on a stray figure | YES | `strayFigures` in `lib/ask/answer.ts` |
| Morning brief, every row actionable | YES | `lib/view-models/ask.ts`, `components/ask/row-actions.tsx` |
| Company questions over hundreds of projects | PARTIAL | company scope reads the benchmark table, which is cheap, but each row is written at the foot of a project WC render (`ProjectBenchmark` :2202), so a project nobody opened has no row |

### 1.6 Tickets, alerts, auditor loop: fit 5/5 (as software)

| Capability | Status | Evidence |
|---|---|---|
| Row → ticket with baseline, target, direction fixed at raise | YES | `VerificationContract` :2490; `lib/orchestrator/from-insight.ts` |
| Auditor re-measures the same fact, skips without new data | YES | `verifyTicket` `lib/orchestrator/tickets.ts:224` |
| Mail never on one click; auto reminders off by default | YES | `ORCHESTRATOR_AUTO_MAIL=on` gate (CLAUDE.md) |
| Performance counts only verified closes | YES | `app/(app)/performance/page.tsx`, `app/(app)/projects/[id]/performance` |

Caveat: no client has run this loop yet; "proved savings" figures do not exist outside the demo.

### 1.7 Portfolio vs project hierarchy: fit 2/5 for KEC

Two levels only: company → project (`lib/navigation.ts`, `PROJECT_SECTIONS`). There is no entity, segment, region or business-unit level between them (see 2.2, 2.6).

### 1.8 Reconciliation, two routes: fit 4/5

| Capability | Status | Evidence |
|---|---|---|
| Ledger vs document trail per figure, verdict match / divergent / single / unavailable | YES | `lib/derive/reconcile.ts`; `components/common/figure-badge.tsx` |
| GST basis factor measured, never assumed | YES | `measureBasisFactor` `lib/derive/reconcile.ts:332` |
| Payable scope discovered by testing | YES | `discoverPayableScope` `lib/derive/reconcile.ts:180` |
| Foreign tax regimes (Brazil, Mexico, USA, GCC VAT) | PARTIAL | the factor is measured, so a 5% VAT returns 1.05 by construction (CLAUDE.md); never run on such data |

---

## 2. Hard questions

### 2.1 Multi-currency (amounts and FX): **NO** (column only)

- Every money table has `currency Char(3) @default("INR")` (`prisma/schema.prisma:505,633,778,1047,...1795`), and `Organisation.baseCurrency` (:60). So the column exists.
- Nothing reads it: no FX rate table, no conversion anywhere (`grep exchangeRate|fxRate` returns nothing in lib/app/components).
- All derivations sum raw amounts regardless of currency (`lib/derive/event-source.ts:50` converts `amount` to a number with no currency), and every screen formats through `formatRupees` (`lib/format.ts:38`, ₹ / Cr / L; ~1,780 call sites).
- The Grey adapter hardcodes `currency: "INR"` (`lib/connectors/grey/adapter.ts:235,357`).
- Result: load a BRL or USD SAE Towers project and its amounts would be added to INR projects and printed as rupees. **Wrong, silently.**

### 2.2 Multi-entity / subsidiaries / consolidation: **NO**

- `CompanyCode` (BUKRS, with currency and country) exists in the schema (:321-335) and `Project.companyCodeId` links to it, but no derivation, view model or screen groups by it (`companyCode` appears only in `lib/derive/org.ts` for people and in two components).
- `Organisation` is "One row today" (schema :49-50). CLAUDE.md:1402: "the demo dataset is a single entity and a single financial year, and the controls say so."
- No intercompany elimination, no consolidation. The portfolio is a simple sum of projects.

### 2.3 Scale: **NO at KEC group scale today; PARTIAL for a pilot**

Measured facts from CLAUDE.md on ~27k events and 3-8 projects:
- Each page reads the full event log of its project into memory (`lib/derive/event-source.ts:28-56`, `findMany` with no pagination). Every metric is computed on read (no materialised figures).
- 27k rows from Neon us-east-2 to India take ~47s, under 1s in-region (CLAUDE.md:1323). Project pages ~14s, portfolio warm ~31s (CLAUDE.md:988).
- The portfolio Overview rebuilds EVERY project's full scope per render, 2 at a time (`lib/view-models/portfolio-overview.ts:43,390`). Cost is linear in projects × events per request: O(P × E) memory and time. At hundreds of projects and millions of events this is minutes per page and will exhaust the 25-connection pool (CLAUDE.md:1304).
- A full import of 3 projects takes ~27 min (CLAUDE.md:693).
- What scale needs (not built): region co-located DB, pre-aggregated per-project snapshots refreshed after sync (a design change to "nothing derived at write time"), background jobs for sync, paginated portfolio.
- Honest pilot size: one segment or one entity, roughly 5-15 projects, a few hundred thousand events, DB in an Indian region. Even that is untested.

### 2.4 SAP connector: **NO**

As in section 0. An `SAP_S4` connection row in the DB is a registered connection with no adapter behind it. Building one means mapping KEC's tables (VBRK/VBRP billing, BSID/BSAD or ACDOCA for AR, EKKO/EKPO, MSEG, RBKP, BSAK, PS for WBS/PSPID, CDHDR for events) into `NormalizedEvent` and the document DTOs. Effort unknown until we see their instance; RA billing in SAP EPC shops is often custom (Z-tables).

### 2.5 Bank guarantees / LCs / acceptances: **PARTIAL (advance BG only)**

- YES: the BG backing a mobilisation advance, with its expiry, flagged when it lapses while the advance is outstanding (`client-book.ts:413-418`).
- NO: performance BGs, retention BGs, BG limit utilisation, BG commission, LCs (import or inland), supplier acceptances / usance bills, bill discounting. None is modelled. The AI scenario prompt mentions guarantees in prose only (`lib/ai/chart-scenario.ts:234`), which is not a feature.

### 2.6 Manufacturing inventory (tower, cable plants): **NO for manufacturing; YES for site stores**

- YES: site stock replayed from movements (101 in, 261 out) `stockFromMovements` `lib/derive/balances.ts:377`; DIO divided by issues, not COGS; materials leverage `lib/derive/material-leverage.ts:592`.
- NO: production orders, BOMs, WIP by work centre, finished goods, plant-to-site transfers as a supply chain. `grep` for production order / BOM / AFKO returns nothing. Ledger WIP is read only as a balance (CLAUDE.md "headline WC includes WIP where the ledger publishes it").
- A tower plant would appear, at best, as a project with stock movements. Plant inventory days would be meaningless without issue-to-production data.

### 2.7 Segment views (T&D vs civil vs railways vs renewables vs oil & gas): **NO**

No segment, business unit or division field on `Project` (schema :479-520). Portfolio filters are by project (`lib/finance/portfolio-wc.ts` filters projects). Access scopes are projects or clients only (`AccessScopeKind` :3120-3128). A segment view would need a field from the source plus a filter: small to build, but not there.

### 2.8 Role views (CFO vs CEO): **PARTIAL**

- Roles are permission levels, not personas: OWNER > ADMIN > MEMBER > VIEWER (`AccessRole` :3020; `lib/auth/rbac.ts`), plus project/client scopes (`AccessScopeKind` :3120).
- Every screen is written for the CFO (`app/(app)/dashboard/page.tsx:55` "The CFO roll-up"; `app/(app)/o2c/page.tsx:35`, `p2p/page.tsx:29`).
- No CEO-specific screen. The closest CEO surfaces are the portfolio Overview (control tower), Ask Crestline company brief, and Performance.

---

## 3. Gaps: what the booklets must NOT claim, and what a pilot can honestly show

| Gap | Must NOT claim | Pilot can honestly show |
|---|---|---|
| No SAP adapter | "Plugs into your SAP", "live in weeks", "already integrated" | "We build one read-only adapter to your SAP; everything above it runs today." Scope the adapter on one company code |
| No multi-currency | Global / 100-country view, SAE Towers, international EPC in USD/AED | One INR entity: KEC India T&D or Railways. International is a roadmap item |
| No consolidation / multi-entity | "Group working capital", "consolidated view" | One entity, its projects summed honestly |
| Scale untested | "Handles your full portfolio", "millions of events in seconds" | 5-15 projects of one segment, DB in-region; we will report page times |
| BG / LC / acceptances absent | "BG and LC exposure", "non-fund-based limit optimisation", "supplier credit" | Advance BG lapse alerts only. Payment timing vs vendor terms is real and is the honest supplier-credit story |
| Manufacturing inventory absent | "Tower/cable plant inventory", "plant WIP" | Site-store stock days (needs stock issues, else NA) |
| No segment view | "T&D vs Civil vs Railways comparison" | If the pilot is one segment, the question does not arise. A segment tag is a small, named build item |
| No CEO persona screens | "Built for the CEO" dashboards | Portfolio Overview + Ask Crestline brief + Performance, framed for the CEO |
| Process map canvas removed | Screenshots of a process map as a current screen | Bottlenecks by money, ours vs client, named stuck cases (all live) |
| No customer results | Any KEC saving as a fact | Savings as scenarios from our own functions on KEC public data (KEC-4), labelled as such |
| Borrowings not in the feed | Interest saved on KEC's actual debt | Carry at a stated rate (rule 7), released cash computed per lever |

---

## 4. What each reader sees (mapped to real screens)

### What the CFO sees in Crestline

| Question | Screen (route) |
|---|---|
| What happened overnight and what needs me | Ask Crestline, company (`/ask`) |
| Where is working capital, why did it move, which project, which lever | Working Capital, company (`/working-capital`) |
| DSO / DIO / DPO / CCC on the ledger basis, reconciled to documents | Project Working Capital (`/projects/[id]/working-capital`), figure badges |
| What if the client paid on terms, certified in the window; cash released, carry saved | Cycle simulator on the same screen (Position / Simulate) |
| Which bills await certification, which client pays late against its own terms | O2C (`/o2c`, `/projects/[id]/o2c`), Client (`/projects/[id]/client`), Clients (`/clients`) |
| Retention, advances, advance BG expiry, claims | Client screen and O2C drill-downs |
| Are we paying vendors early (leak) or late (risk); MSME exposure | P2P and Vendors (`/p2p`, `/vendors`, `/projects/[id]/vendors`) |
| Accrued and paid WC; the overdraft the business actually needed (peak funding) | Project Working Capital basis cards; cash-movement panel |
| Does the ledger agree with the documents | Overview reconciliation section (`/projects/[id]/overview`) |
| Who owns the fix, did it happen | Alerts & Tickets (`/projects/[id]/tickets`), Performance |

### What the MD & CEO sees

| Question | Screen (route) |
|---|---|
| Which job is holding the most capital, and against its own terms | Ask Crestline company (`/ask`), comparison answers from the benchmark table |
| One control tower: company position, project comparison, biggest bottleneck, funding gap, actions | Portfolio Overview (`/dashboard`) |
| Every project and the capital it holds | Projects grid (`/projects`) |
| Contract value to cash, where it stops | Project Overview waterfall (`/projects/[id]/overview`) |
| Whose desk is the money sitting on: ours or the client's | Process bottlenecks on O2C / P2P, owner rows |
| Who reports to whom, empty slots | Project Hierarchy (`/org-hierarchy`, `/projects/[id]/org`) |
| Did the actions work, proved from source | Performance (`/performance`) |

CEO framing must stay at one entity / one segment in a pilot; the group-level and segment-level CEO questions (T&D vs Railways, India vs SAE Towers) are exactly the ones the app cannot answer today.

---

## 5. Lessons applied

- 2026-10-06 VO-3: checked every hard question against code in one pass before writing; blockers (SAP, currency, entity, scale) listed first.
- DEV-3b: claims tested against real code paths, not CLAUDE.md prose alone (e.g. currency column exists but `formatRupees` and the adapter's hardcoded INR decide the answer).
- Report client-only steps separately: SAP access, a KEC company-code choice and an in-region DB are KEC/ops decisions, not ours.
