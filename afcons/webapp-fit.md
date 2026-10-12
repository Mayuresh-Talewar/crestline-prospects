# AF-2 · Crestline webapp fit for Afcons Infrastructure

Read-only map from the app code (repo `process-automation-crestline`, branch `clientui`, 2026-10-07), CLAUDE.md and `_shared/crestline-webapp-context.md`. Afcons' shape is from an internal dossier and is unverified (AF-1 checks it). Paths are relative to the app repo.

**Bottom line for the booklets:** Crestline is strong on *where Afcons' cash is trapped, for how long, and who can release it* (O2C, retention, advances, P2P timing, working capital, ranked levers, tickets that close on the number). It is **not** a margin / cost-to-complete tool, has **one working connector (Grey, a simulator ERP)**, is **INR-only**, has **no JV, BG/LC or arbitration module**, and has only been run on 3 to 8 projects of a demo source. A pilot is an adapter build first.

## 1. Fit per area

| Area | Fit | Evidence | Afcons relevance |
|---|---|---|---|
| O2C: RA bills, certification, collection | **Strong** | bills rebuilt from events `lib/derive/cases.ts`; ageing on each document's own due date (CLAUDE.md "Derivation rules"); certified-short off certification attributes; pipeline buckets `lib/finance/o2c.ts`; client screen `app/(app)/projects/[id]/client` | Long-cycle metro/hydro billing and slow government certification is the core use case |
| Retention | **Strong** | `RetentionItem` with `dlpExpiryDate` `prisma/schema.prisma:1091-1118`; DLP action "claim the day it passes; offer a BG for early release" `lib/derive/client-funding.ts:362` | Heavy retention is Afcons' typical trapped cash |
| Mobilisation / material advances | **Good (balance + recovery)** | `CustomerAdvance` received/recovered/outstanding + `bankGuaranteeNo`/`bankGuaranteeExpiry` `prisma/schema.prisma:1122-1141`; recovery read `lib/derive/project-scope.ts:575-581`; lapsed-guarantee warning `lib/view-models/project-client.ts:516` | Shows client-funded share and advance run-off. Recovery *schedule vs plan* is not modelled |
| Claims / variations | **Partial (ledger + ageing only)** | `Claim` claimed/awarded/received/status `prisma/schema.prisma:1146-1166`; portfolio Claims list oldest-first `app/(app)/o2c/claims/page.tsx:20-26`; `claimsOutstanding` `lib/derive/project-scope.ts:99` | Lists and ages claims as trapped cash. No variation-order workflow, no EOT, no arbitration stages, no probability/provisioning |
| P2P | **Strong** | PO/GRN/invoice/payment cases `lib/derive/p2p-cases.ts`; timing vs each vendor's own terms, early payment as leakage (rule 2); MSME 45-day; vendor scorecard `lib/derive/vendor-scorecard.ts` | Large subcontract and supplier base; early payment leakage is a quick win |
| Working capital: DSO/DIO/DPO/CCC, contract assets | **Strong** | `lib/finance/ratios.ts`; `DIO+DSO-DPO=CCC` enforced; contract-asset days (Crestline metric, not GAAP); accrued and paid bases `lib/finance/working-capital-basis.ts` | Unbilled work / contract assets is the EPC balance-sheet pain |
| Simulator and levers | **Strong** | `lib/finance/cycle-simulation.ts` bounded by contract windows; `lib/insights/levers.ts` ranks moves in one currency vs cost of financing | "Which move releases most cash first" for the CFO |
| Reconciliation (ledger vs documents) | **Strong, honest** | `lib/derive/reconcile.ts`, four verdicts, measured factors (e.g. GST 1.18×) | Builds trust; `single` is never a pass |
| Process mining | **Good** | `lib/process-mining/discover.ts`; map *page* removed, findings feed P2P/O2C screens (CLAUDE.md "Process Map page REMOVED") | Shows where bills and POs wait and whose desk. Do not promise a process-map canvas |
| Ask Crestline | **Good** | `lib/ask/answer.ts`, `retrieve.ts`, `decide.ts`; model never produces a number (`strayFigures`) | Two scopes: company `/ask`, one project `/projects/[id]` |
| Tickets / alerts / auditor loop | **Strong** | `components/orchestrator/ticket-list.tsx`; auditor re-measures same fact, closes "verified" or "no change" (CLAUDE.md "auditor records news") | Accountability across many sites; mail only with `ORCHESTRATOR_AUTO_MAIL=on` |
| Hierarchy | **Present** | `app/(app)/org-hierarchy`, `app/(app)/projects/[id]/org`, `lib/derive/org.ts` | Names desks/people; depends on the ERP's org data |
| **Cost / margin / cost-to-complete** | **Weak (read-only ledger figures)** | `lib/derive/ledgers.ts`: % complete = cost to date ÷ estimate (l.136), `expectedLoss` when estimate > contract (l.73, 144-148), margin on billed and certified basis (l.87-91, 211); Overview "Profit · cash · WC" and "Cost against progress" `app/(app)/projects/[id]/overview/page.tsx:259-276`; margin card `lib/view-models/overview.ts:1051-1072`; portfolio "earns but does not collect" `lib/view-models/portfolio-overview.ts:768-775` | Margin is shown **only if the ERP supplies a revenue-recognition ledger with total estimated cost**; otherwise NA. **No budget vs actual, no cost-to-complete forecast, no estimate-at-completion re-forecast, no cost-code/WBS variance.** `budget` appears only in P2P (`lib/finance/p2p.ts`), not as project cost control. The margin cost base is PO value + subcontract certified (`overview.ts:45`), not the full project cost |

## 2. Hard questions

| Question | Answer | Evidence |
|---|---|---|
| ERP connectors working today | **No for Afcons.** Only `GREY_ERP` (a simulator) is `available: true`; SAP S/4, SAP ECC, Oracle Fusion, Tally, CSV are listed `available: false` | `lib/connectors/registry.ts:36-42`, `createAdapter` throws for anything else `:45-60`. The contract `lib/connectors/types.ts` is ERP-agnostic, so a new adapter is the work |
| Multi-currency | **No.** Currency is stored per row (`Organisation.baseCurrency`, `Project.currency`, ledger rows default INR) but never converted; sums ignore it and every figure prints as ₹ / Cr / L | `prisma/schema.prisma:60,505`; `lib/sync/engine.ts:109,258`; `lib/format.ts:13-36` (en-IN, ₹) |
| Multi-entity / consolidation | **No.** One `Organisation`; `CompanyCode` is stored but no derivation or screen consolidates by entity, and no inter-company elimination | `prisma/schema.prisma:51-70, 322-335`; only use `lib/derive/org.ts:53,287`. CLAUDE.md "Not built": single entity, single FY in demo |
| Scale for long-cycle, multi-year | **Partial.** Logic has no year cap (ledgers covering 30 months handled, `asOf` = last event). Proven only on 3 to 8 projects / 27,184 events; ~47 s to move that log from India to Neon us-east-2, portfolio ~31 s warm (CLAUDE.md Gotchas). Afcons-scale (dozens of projects, millions of events) is **unproven** and needs an in-region DB + pagination work |
| Claims and arbitration tracking | **Partial.** Claim ledger and ageing yes; arbitration stages, hearings, awards under challenge, provisioning: no. "Arbitration" appears only as a statistics robustness note `lib/intel/statistics.ts:9-22` |
| BG / LC | **Partial for BG, No for LC.** BG number and expiry only as fields on a customer advance, with a lapsed-guarantee warning. No BG register, no performance/retention BGs, no bank limits, no LC at all | `prisma/schema.prisma:1135-1136`; `lib/derive/client-book.ts:105,1185`; `lib/view-models/project-client.ts:516` |
| Mobilisation advance recovery | **Yes (balance), partial (plan).** Received, recovered, outstanding per advance; recovery per bill (`recoverable`) | `lib/derive/project-scope.ts:175,575-581,781,959` |
| Joint ventures | **No.** No JV, consortium or share-of-interest concept anywhere (`grep -i "joint venture|JV|consortium"` in lib/prisma/app = 0 hits). A JV would appear as a plain project at 100% |

## 3. Gaps: what the booklets must NOT claim, and what a pilot could honestly show

| Gap | Must NOT claim | Pilot could honestly show |
|---|---|---|
| Connector | "Plugs into your SAP/Oracle today", "live in days" | Build one adapter to `lib/connectors/types.ts` (or a column-mapped extract) on 1 to 3 Indian projects; the derivation and screens need no change |
| Margin / cost-to-complete (the dossier's main pain) | "Fixes margin", "cost-to-complete forecasting", "budget vs actual", "EAC", "predicts execution overruns" | If the ERP exports a recognition ledger: margin on billed vs certified basis, % cost vs % executed, "estimate exceeds contract" flag, and "margin earned but not banked" (profit up while WC up). Frame margin pressure as **cash cost of carrying WC** (interest on trapped capital), which the app does price |
| Multi-currency / international book | Anything on Africa / Middle East / multi-currency consolidation | Pilot on INR domestic projects only |
| Consolidation / JV | Group or JV-share roll-ups, entity consolidation | Portfolio roll-up of the pilot projects (company-scope screens) treating each as one project |
| Claims / arbitration | "Claims management", "arbitration tracking", "recovers claims" | Claims as an aged list of trapped cash with claimed / awarded / received, oldest first |
| BG / LC | "BG/LC management", "bank limit optimisation" | BG expiry against advances only, if the ERP holds it |
| Scale | "Runs across all Afcons projects" | Measured run times on the pilot projects, stated with DB region |

## 4. What the CFO sees vs what the MD sees (real screens)

| | CFO (cash, terms, financing) | MD (execution, accountability) |
|---|---|---|
| Home | `/ask` morning brief, company scope (`lib/view-models/ask.ts`) | Same brief, then a project: `/projects/[id]` Ask on one job |
| Position | `/working-capital` company cash command centre; `/dashboard` control tower (peak funding need, funding gap, project × cash-pressure heatmap) | `/projects` grid: which jobs hold the most capital; `/dashboard` project comparison on gap to own terms |
| Cash in | `/o2c`, `/o2c/claims`, `/clients` (certification and payment behaviour per client) | `/projects/[id]/o2c` and `/client`: which bills wait for certification, whose delay |
| Cash out | `/p2p`, `/vendors`: early-payment leakage, MSME 45 days | `/projects/[id]/p2p` and `/vendors`: site vs vendor delivery and terms |
| Decide | `/projects/[id]/working-capital`: simulator, ranked levers vs cost of financing, accrued vs paid WC, reconciliation badges | `/projects/[id]/overview`: contract-to-cash waterfall, cost against progress, "is the margin turning into money" (only where the ERP supplies the cost estimate) |
| Act | Raise ticket / Alert owner under every chart | `/tickets` and `/projects/[id]/tickets`: who owns what, overdue first; `/performance`: before vs after, proved from source; `/org-hierarchy`: who sits where |

## Not verified
- No screen was opened in a browser for this ticket (read-only on code); fit is from code and CLAUDE.md.
- Afcons' ERP, project count and event volumes are unknown (AF-1). Scale verdict is an extrapolation from the Grey dataset.
