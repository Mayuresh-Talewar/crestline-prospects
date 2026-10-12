# Arwade Infrastructure: Crestline web-app fit (AR-2)

Date 2026-10-08. Read-only review of the Crestline app (`process-automation-crestline`, branch `clientui`), its CLAUDE.md, `_shared/crestline-webapp-context.md` and `_shared/master-design/FIXED-PAGES.md`.
Arwade context (about Rs 263 Cr design and build; PEB, warehousing, logistics, healthcare, institutional, corporate fit-outs; milestone billing to private owners; promoter-run, lean finance; ERP unknown, possibly Tally) is UNVERIFIED and comes from the ticket, not from AR-1. No figure below is measured on Arwade data; app figures quoted from CLAUDE.md are "documented, not re-measured".

## 1. Fit, feature by feature

| Area | Verdict | Evidence in code |
|---|---|---|
| Milestone / stage bills | YES (engine), PARTIAL (screens) | `lib/derive/cases.ts:58-64,300,357` (`isMilestone`, `milestoneAchievedAt`, `milestoneAmount`: a bill with a milestone-achieved event and no execution event); `lib/connectors/types.ts:634,726,733` (`milestoneCode`, milestone line claimed without measurement); consumed in `lib/finance/o2c.ts:464,574,576,646,874` (earned date, measured amount, passes measurement stage) and `lib/finance/portfolio-o2c.ts:685`. The O2C pipeline, stage waits and the p8 timeline are still worded around RA bills, joint measurement and MB/QS check; a milestone bill skips those stages rather than getting its own vocabulary. |
| RA bills | YES | the default case model (`lib/derive/cases.ts`), all O2C screens. |
| Lump-sum contract | PARTIAL | `prisma/schema.prisma:492-493` `contractType` holds EPC / ITEM_RATE / LUMPSUM as the source states it; `lib/finance/o2c.ts:1247,1406` and `lib/view-models/o2c.ts:1289` handle lump-sum bill lines ("Lump sum, no quantity"). No screen branches on contract type. |
| Certification by client's PMC | YES | `lib/glossary.ts:593-596` "Certifier (PMC)"; `lib/derive/client-intel.ts:229,688,1361` carries `certifiedBy` and escalates to the certifier by name. Ownership rule puts certify on the client side. |
| Retention | YES | `prisma/schema.prisma:536,642-643,771` (RetentionItem, retentionPct, retentionCapPct, retentionAmount); retention ledger in accrued WC. Caveat (CLAUDE.md, documented, not re-measured): on Grey, ledger retention reconciles to no event expression (1.21-1.43x). |
| Customer / vendor advances | YES | `prisma/schema.prisma:1122` CustomerAdvance, `:1645` VendorAdvance. Mobilisation advances on private D&B jobs fit directly. |
| P2P: steel purchase, PO, GRN, payment timing vs terms | YES | P2P screens, `lib/finance/p2p.ts` (missing GRN, quality hold, duplicate, override detectors at 2108-2225), vendor scorecard, MSME 45-day rule. |
| PEB fabrication (shop WIP, steel converted to members) | NO | search `fabricat|PEB|pre.?engineered` over lib/, prisma/, components/ finds only a comment in `lib/finance/p2p.ts:732` ("the only fabricator") and an unrelated "Pebbles" GST line. No fabrication order, shop WIP or conversion model. A fabrication subcontractor is handled as an ordinary vendor / subcontract. |
| Inventory days | CONDITIONAL | DIO needs stock ISSUES, not receipts (CLAUDE.md NA rule; `SourceCapability`). A Tally book with purchase vouchers only gives inventory, DIO and CCC = NA. |
| Fit-out contracts | PARTIAL | search `fit.?out` over lib/, prisma/, components/: no match. Works as any contract (bills, certification, P2P); no fit-out-specific terms (variation orders by the owner's designer, short durations). |
| Cycle simulator | YES, if terms exist | `lib/finance/cycle-simulation.ts`; floors are the contract's certification window and payment term. Milestone contracts often state a payment term but no certification window: that leg would then be unbounded and `blocked` says why. |
| Lever ranking, playbook | YES | `lib/insights/levers.ts`, `lib/insights/playbook.ts`. Needs named bills/vendors from the source. |
| Ask Crestline | YES | both scopes; the six question kinds. Peer comparison needs at least two projects connected. |
| Tickets / auditor | YES | full lifecycle; reminders off unless `ORCHESTRATOR_AUTO_MAIL=on`. |
| Hierarchy | YES, if the source has people | `app/(app)/org-hierarchy`, `app/(app)/projects/[id]/org`. Owners are resolved from org unit and event-log activity; a Tally book with no user/department per voucher gives thin ownership. |
| Reconciliation | YES | `lib/derive/reconcile.ts`; Tally holds both a ledger and vouchers, so two routes are plausible. Verdict "single" is not a pass. |

## 2. Hard answers

| Question | Answer | Why |
|---|---|---|
| Design-build lump-sum milestones | PARTIAL | Engine models milestone bills and lump-sum contracts; screens and copy are RA-bill-first. |
| Fit-out contracts | PARTIAL | Handled as generic contracts; nothing fit-out specific (named search above). |
| PEB fabrication inventory | NO | No fabrication/WIP model (named search above). Only raw steel stock, and only if issues are recorded. |
| ERP connector today | NO | `lib/connectors/` holds only `grey/`. `lib/connectors/registry.ts:41` lists `TALLY` "Tally Prime, XML export" with `available: false`; `createAdapter` throws for anything but `GREY_ERP`. SAP, Oracle and CSV also `available: false`. A Tally adapter must be built before day 1. |
| Small-company scale (about Rs 263 Cr, unverified) | YES | Nothing assumes size; a smaller event log is faster to sync (Grey: 27,184 events, about 27 min full import, documented, not re-measured). Projection needs 6 months of history; comparisons need 2+ projects. |
| Lean team, no named CFO | PARTIAL | Roles are OWNER/ADMIN/MEMBER/VIEWER, not titles; an MD can be OWNER. Every row needs an owner desk: with few finance people, many rows will route to the same one or two names, and tickets lose force. |

## 3. What the booklet must NOT claim

- That Crestline connects to or reads Tally (or any Arwade system) today. Tally adapter = `available: false`.
- That it tracks PEB fabrication, shop WIP, steel conversion, tonnage yield or fabrication progress.
- Cost-to-complete, margin or budget-vs-actual for design-build jobs (FIXED-PAGES p14 "not a margin or cost-control tool").
- Design-stage or drawing-approval tracking, project scheduling, or fit-out snag management.
- Any day value per stage, any certifier name, any client name not in a primary source.
- That inventory days will be available: only if Arwade's books record stock issues.
- ISO, hosting, region or encryption claims (FIXED-PAGES rule 2).
- That reminders mail automatically (off by default).

Honest pilot wording (FIXED-PAGES slots):
- `{ACCOUNTING_SYSTEM}`: "ERP" unless a primary source names Tally (FIXED-PAGES: print "ERP" when no filing names it).
- `{PILOT_SCOPE}`: "one to three design and build projects".
- `{SCOPE_CARD}`: "Milestone bills are read from the dates your ERP records. Steel fabrication work in progress is not modelled in the pilot."
- p8 timeline: use the short form, but for milestone billing the stages that apply are MILESTONE ACHIEVED ({COMPANY}) · BILL PREPARED ({COMPANY}) · BILL SUBMITTED ({COMPANY}) · CLIENT ACKNOWLEDGED (client) · CERTIFIED (client) · TAX INVOICE RAISED ({COMPANY}) · PAYMENT RECEIVED (client) · RETENTION RELEASED (client). "Milestone achieved" is a production change to the fixed page and needs Garvis approval; otherwise keep the fixed stages and note that milestone bills skip joint measurement.
- p14/p15 keep "The adapter for your ERP is built first; the 14 days start once it is connected."

## 4. MD view vs finance view

| Reader | Question | Screens |
|---|---|---|
| MD (Nitin Arwade, verify) | Which job holds the most capital, which client pays slow, what do I do first | `/ask` morning brief and Compare; `/dashboard` (portfolio overview, project comparison, funding gap, peak funding need); `/clients`; `/projects` grid; `/performance` (verified closes only) |
| Finance (accounts / commercial head, if any) | Which bills are uncertified or unpaid, which vendors paid early, what releases cash | `/projects/[id]/working-capital` (position, cash-cycle, simulator, levers, accrued and paid bases); `/projects/[id]/o2c` and `/client` (certification queue, ageing on own due dates, retention); `/projects/[id]/p2p` and `/vendors` (steel vendors' timing vs terms, MSME); `/projects/[id]/tickets`; `/projects/[id]/overview` (contract to cash, reconciliation) |

With a lean team the same one or two people may hold both views; the MD view is the default landing (`/ask`).
