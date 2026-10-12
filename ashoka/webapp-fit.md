# Ashoka Buildcon: webapp fit (AB-2)

Read-only review of the Crestline app at `C:\Users\asus\Desktop\process-automation-crestline` (branch `clientui`, 2026-10-08). Ashoka context is unverified. Paths are relative to the app root. Any figure not measured in this ticket is labelled "documented, not re-measured".

## 1. Fit for third-party EPC (NHAI / MoRTH / state PWD contracts): STRONG

| Capability | Evidence | Fit |
|---|---|---|
| RA bills from the event log, plus milestone bills | `lib/derive/cases.ts:58-64`, `:300`, `:357-359`; `lib/derive/streams.ts:39-42` (`MILESTONE_ACHIEVED`); `lib/derive/project-scope.ts:1082-1097` | Yes |
| Certification, certified-short, deductions | `prisma/schema.prisma:837-884` (DeductionReason, CertificationDeduction), `:1001` BillingCertification | Yes |
| Retention, claims, customer advances | `prisma/schema.prisma:1091` RetentionItem, `:1122` CustomerAdvance, `:1146` Claim; capabilities `lib/connectors/types.ts:41-42` | Yes |
| P2P (PO, GRN, supplier invoice, match, payment, vendor advance, subcontract) | `prisma/schema.prisma:1237-1745` | Yes |
| WC simulator held to contract bounds | `lib/finance/cycle-simulation.ts:120` leversFor, `:198` simulate, `:243` toTerms | Yes |
| Lever ranking and financing alternative | `lib/insights/levers.ts:50` priceLevers, `:130` costOfFinancing, `:141` tradeoffFor | Yes |
| Ask Crestline (retrieval, then code) | `lib/ask/decide.ts:91` decide, `:211` scenarioFor; `app/(app)/ask`, `app/(app)/projects/[id]/page.tsx` | Yes |
| Tickets and auditor | `lib/orchestrator/tickets.ts:224` verifyTicket; `prisma/schema.prisma:2423` Ticket, `:2490` VerificationContract | Yes |
| Hierarchy | `app/(app)/org-hierarchy`, `app/(app)/projects/[id]/org`; HR tables `prisma/schema.prisma:1948-2113` | Yes |
| Two-route reconciliation | `lib/derive/reconcile.ts:180` discoverPayableScope, `:332` measureBasisFactor | Yes |

Client type (Government / PSU / private) is a stated fact and drives nothing: `prisma/schema.prisma:433-435`.

## 2. Hard answers

| Ask | Answer | Evidence |
|---|---|---|
| HAM 40% construction milestones (bill-like) | PARTIAL. Milestone bills run through O2C like any client bill. Nothing models the HAM 40/60 split or the 40% construction-support tranche. | `lib/derive/cases.ts:58-64`; no `HAM` or `hybrid annuity` match anywhere in `lib`, `app`, `components` or `prisma` (grep) |
| HAM 60% annuity receivable | NO. No annuity schedule, receivable or interest-on-annuity model. | grep `annuity`: 0 hits |
| BOT toll income | NO. No toll revenue, traffic or concession model. | grep `toll`: 0 hits |
| EPC for its own SPVs (related party, intra-group) | PARTIAL. An SPV can be a client like any other, and its O2C waits will be measured. There is no related-party flag and no intra-group elimination, so SPV receivables would be read as third-party cash at risk. | `BusinessPartner` has no related-party field: `prisma/schema.prisma:428-466`; grep `related.?party`, `intercompany`: 0 hits |
| Multi-entity / SPV consolidation | NO. `CompanyCode` (legal entity) is stored, and `Project.companyCodeId` exists, but no derivation groups, filters or eliminates by it. There is one `Organisation`, with one financing rate and one currency. | `prisma/schema.prisma:321-336`, `:489`, `:51-63`; companyCode is used only in `lib/sync/engine.ts:1061-1098` and `lib/derive/org.ts:53,287` |
| City gas distribution | NO. Not EPC-shaped and not modelled. | Product scope in `CLAUDE.md` ("EPC") |
| Power T&D | PARTIAL. If it is run as an EPC contract (RA or milestone bills, POs), it is the same O2C/P2P shape. Nothing is T&D-specific. | Same engine as row 1 |
| ERP connectors today | ONE: Grey Infra ERP (our simulator). SAP S/4, SAP ECC, Oracle Fusion, Tally and CSV are listed as `available: false`, and the factory throws for any type other than Grey. | `lib/connectors/registry.ts:31-42`, `:44-56` |
| Scale | UNPROVEN at Ashoka size. Largest import so far: 3 projects, 27,184 events, about 27 min to import. Portfolio warm render about 31s. Moving the event log takes about 47s from India. All documented, not re-measured. No load test exists beyond this. | `CLAUDE.md` (Testing the pipeline; All projects → Overview; Gotchas) |

## 3. What the booklet must NOT claim

- That Crestline reads, connects to or holds Ashoka's ERP today. Only the Grey adapter exists (`lib/connectors/registry.ts:31-56`).
- That SAP, Oracle or Tally connectors exist. They are listed as unavailable.
- Anything about HAM annuity, annuity receivable, BOT toll, traffic or concession analytics.
- SPV, multi-entity or group consolidation, intra-group elimination, or related-party netting.
- Asset monetisation, SPV valuation, InvIT or equity analysis.
- City gas distribution, or anything T&D-specific beyond EPC billing.
- Margin, cost-to-complete, budget against actual, scheduling or claims management (FIXED-PAGES p14).
- Any day values on the page 8 stages, any "connected" wording, and any ISO, certification, hosting, region or encryption claim (FIXED-PAGES rules 1-3).
- Group-scale performance figures.

## 4. Honest pilot (FIXED-PAGES wording)

{PILOT_SCOPE} = "two to three third-party EPC road projects in one entity (NHAI, MoRTH or state PWD clients)". The pilot excludes SPV-client jobs, HAM annuity, toll and CGD.

{SCOPE_CARD} = "The pilot covers one entity's third-party EPC contracts. HAM annuity, toll income, SPV consolidation and city gas are not modelled."

Copy, as fixed: "The adapter for your {ACCOUNTING_SYSTEM} is built first; the 14 days of read-only analysis start once it is connected." The pilot is read-only, with a read-only user. Never give an internal build-time estimate for the adapter.

{ACCOUNTING_SYSTEM} = "ERP" unless a filing names the system.

## 5. MD view against CFO view

| Reader | Question | Screens |
|---|---|---|
| MD | Which job is holding the most capital, and who can release it? | `/ask` (morning brief, Compare), `/dashboard` (control tower: project comparison, bottleneck, funding gap, actions), `/projects`, `/clients` (which client pays slow), `/performance` (verified closes), `/org-hierarchy` |
| CFO | How much cash is trapped, what is the facility need, and does it reconcile? | `/working-capital` (position, ratios, release per project, peak funding need), `/projects/[id]/working-capital` (simulator, levers, accrued and paid bases), `/projects/[id]/overview` (contract-to-cash waterfall, reconciliation), `/o2c` and `/p2p`, `/vendors` (early and late against terms), `/tickets` (auditor) |
