# Crestline fit for Vascon Engineers

Read against the app code on branch `clientui` (2026-10-07). Vascon facts are unverified dossier context. Paths are relative to `process-automation-crestline/`.

## Bottom line

- **EPC side (third-party contracts): strong fit.** That is exactly what the product models.
- **Real-estate development side: not modelled.** No land bank, no unsold units, no booking advances, no RERA escrow. Booklets must not claim it.
- **Connector: only one live adapter (Grey Infra's simulator ERP).** Vascon's ERP needs a new adapter before any pilot.

## 1. EPC side: what exists, with evidence

| Area | Status | Evidence |
|---|---|---|
| O2C: RA bills, certification, short-certification, invoice, collection | Yes | `prisma/schema.prisma:761` ProgressBilling, `:1001` BillingCertification, `:854` CertificationDeduction, `:1033` CustomerInvoice, `:1066` CustomerReceipt |
| Retention, client advances, claims | Yes | `prisma/schema.prisma:1091` RetentionItem, `:1122` CustomerAdvance, `:1146` Claim; capability keys `lib/connectors/types.ts:41-43` |
| P2P: PR, PO, GRN, supplier invoice, 3-way match, payment, vendor advance, subcontract | Yes | `prisma/schema.prisma:1174-1699` |
| Working capital: DSO/DIO/DPO/CCC, contract-asset days, accrued and paid bases | Yes | `lib/finance/working-capital-basis.ts`; ratios in `lib/derive/balances.ts`; CLAUDE.md "Accrued and paid" |
| Cycle simulator, bounded by contract terms | Yes | `lib/finance/cycle-simulation.ts:120` leversFor, `:198` simulate |
| Ranked levers, cost of financing | Yes | `lib/insights/levers.ts:50` priceLevers, `:130` costOfFinancing |
| Process mining (O2C and P2P discovered separately) | Engine yes, canvas removed | `lib/process-mining/discover.ts`; map page deleted, figures survive in the P2P/O2C screens |
| Two-route reconciliation (ledger vs documents) | Yes | `lib/derive/reconcile.ts:79` check, `:332` measureBasisFactor |
| Ask Crestline (company and project scope) | Yes | `app/api/ask/route.ts`, `lib/ask/decide.ts` |
| Tickets, alerts, auditor re-measure | Yes | `lib/orchestrator/tickets.ts:224` verifyTicket; `prisma/schema.prisma:2423` Ticket |
| Hierarchy | Yes | `app/(app)/org-hierarchy`, `app/(app)/projects/[id]/org`; `lib/navigation.ts:211` |
| Margin, % complete, cost to complete | **Partial, no screen** | `lib/derive/ledgers.ts:68-81` (percentComplete, recognised) is derived and tested, but the Supply and Ledgers tab was removed (CLAUDE.md line 725). Needs the ERP to publish a revenue-recognition ledger and a cost estimate. Estimate-at-completion forecasting does not exist. |

## 2. Real-estate development side: hard answers

| Need | Answer | Why |
|---|---|---|
| Developer's own projects (Vascon is both builder and owner) | **No** | A project has a `clientId` and a `contractType` of EPC / ITEM_RATE / LUMPSUM (`prisma/schema.prisma:488-493`). There is no "own development" type. |
| Land bank | **No** | No model. |
| Construction WIP held as inventory | **No** | `InventoryMovement` (`:1363`) is materials stock, not property under development. |
| Unsold unit inventory | **No** | No unit or sales model. |
| Customer booking advances and collection schedules (CLP / milestone demands) | **No** | `CustomerAdvance` is a contract mobilisation advance from one client, not hundreds of homebuyers. |
| RERA escrow (70% account) | **No** | Grep for rera/escrow/booking/unsold in `lib`, `app`, `prisma`: no hits. |
| Revenue on completion (Ind AS 115 for real estate) | **No** | Recognition logic is cost-to-date over estimate for contracts only. |

**Booklets must not claim:** real-estate sales or inventory tracking, booking-to-possession cash, RERA compliance, land cost, unsold-stock ageing, or whole-company (EPC plus real estate) working capital. Saying "Crestline covers the EPC contracting half of the business" is honest. Real-estate would be a new pillar and new schema, not a configuration.

## 3. Other hard questions

- **ERP connectors today:** one live adapter, `GREY_ERP` (a simulator ERP). SAP S/4, SAP ECC, Oracle Fusion, Tally and CSV/Excel are listed as `available: false` (`lib/connectors/registry.ts:31-43`); `createAdapter` throws for anything else (`:45-58`). Any Vascon pilot starts with building their adapter against the `NormalizedEvent` contract (`lib/connectors/types.ts`).
- **Multi-entity / subsidiaries:** schema has `CompanyCode` with currency (`prisma/schema.prisma:322`) and projects link to it, but there is no consolidation, inter-company elimination or entity switcher. CLAUDE.md line 1401: company switching is "UI architecture only". One `Organisation` with one `baseCurrency` (`:51-60`).
- **Manufacturing subsidiary (if real):** not covered. No BOM, production order or finished-goods model. Materials stock is site stores only.
- **Joint ventures:** no JV share, partner split or proportionate figures. A JV project could be loaded as an ordinary project at 100%, and the booklet must say so.
- **Scale:** a mid-size company is a reasonable fit. Live data today is 3 projects, about 27k events, and a full import takes about 27 minutes (CLAUDE.md "Testing the pipeline"). Heavy pages are slow on cross-region DB links (about 14s per project page, 31s portfolio warm). Fewer projects mean faster pages and a narrower adapter. This is a deployment observation, not a benchmark at Vascon's volume.

## 4. What a pilot could honestly show

- 1 to 3 **EPC (third-party) projects**, INR, **read-only** on their ERP.
- Prerequisite: an adapter for their ERP (unknown). Each capability is probed and shown as Available, Partial or Unavailable with a reason. Missing feeds read NA, never zero.
- Deliverables: certification and collection delays priced in rupee-days, retention and advance positions, vendor payment timing against each vendor's terms, a bounded simulator, ranked levers, ledger vs document reconciliation, and tickets closed on re-measured figures.
- Not in a pilot: real-estate projects, company-wide consolidation, margin or EAC forecasting screens.

## 5. What the CFO sees vs what the MD sees

| CFO (cash, terms, funding) | MD (where and who) |
|---|---|
| `/working-capital`: company position, ageing, release per project | `/ask`: morning brief, "which job holds the most capital?" |
| `/projects/[id]/working-capital`: cash-cycle diagram, simulator, levers, accrued and paid bases, peak funding need | `/dashboard`: project comparison, biggest bottleneck, funding gap |
| `/projects/[id]/overview`: contract-to-cash waterfall, reconciliation | `/projects`: grid of capital held per project |
| `/o2c`, `/p2p`, `/vendors`: receivables, retention, payment timing against due date | `/clients`: which client certifies and pays late across sites |
| `/settings`: what the source can and cannot supply | `/tickets`, `/performance`: who committed, what moved, verified only |
| | `/org-hierarchy`: who owns which desk, empty or doubled slots |

Unverified here: screens were not opened in a browser for this note; the evidence is code and CLAUDE.md.
