# MI-2 · Webapp fit for Man Infraconstruction

Read-only check of the Crestline app (repo `process-automation-crestline`, branch `clientui`, 2026-10-08) against Man Infra's two businesses. Company facts are UNVERIFIED context from the brief and MI-1. App figures quoted from CLAUDE.md are **documented, not re-measured**.

Paths below are relative to `C:\Users\asus\Desktop\process-automation-crestline\`.

## 1. Fit for third-party EPC (marine and building contracts): STRONG

| Area | Fit | Evidence |
|---|---|---|
| O2C (RA bill → certify → invoice → collect) | Yes | Bills rebuilt from the event log, `lib/derive/cases.ts`; O2C pipeline `lib/finance/o2c.ts`; project route `app/(app)/projects/[id]/o2c` |
| Certification wait / contract asset days | Yes, labelled a Crestline metric (not GAAP) | CLAUDE.md "Non-negotiable product rules" 6; floor = contract's certification window, `lib/finance/cycle-simulation.ts:198` (`simulate`) |
| Retention | Yes if the source supplies it, else NA | capability key `retention`, `lib/connectors/types.ts:41`; ledger-vs-events divergence on retention is documented (1.21–1.43×), CLAUDE.md Reconciliation |
| Advances (client and vendor) | Yes | capability keys `customerAdvances` `:43`, `vendorAdvances` `:48`; bridge adds advances back, `lib/finance/working-capital-basis.ts` |
| Claims | Listed as aged cash only, not managed | capability `claims` `:42`; FIXED-PAGES p14 "Not a claims or arbitration tracker" |
| P2P (PO → GRN → invoice → pay, vs each vendor's own terms) | Yes | capability keys `:44-47`; vendor timing `lib/derive/payment-timing.ts`; DPO never "higher is better" (CLAUDE.md rule 1) |
| Cycle simulator | Yes, bounded by contract terms | `lib/finance/cycle-simulation.ts:198`; Ask what-if `lib/ask/decide.ts:211` (`scenarioFor`) |
| Lever ranking ("Do this first") | Yes | `lib/insights/levers.ts:50` (`priceLevers`) |
| Ask Crestline | Yes, both scopes | `lib/ask/answer.ts`, `lib/ask/retrieve.ts`, `app/(app)/ask`, `app/(app)/projects/[id]/page.tsx` |
| Tickets + auditor | Yes | `lib/orchestrator/tickets.ts:224` (`verifyTicket`); routes `app/(app)/tickets`, `app/(app)/projects/[id]/tickets` |
| Hierarchy | Yes | `app/(app)/org-hierarchy`, `app/(app)/projects/[id]/org`, `lib/derive/org.ts` |
| Reconciliation (ledger vs documents) | Yes | `lib/derive/reconcile.ts:332` (`measureBasisFactor`) |

Port and marine work fits the same RA-bill flow; nothing in the app is building-specific. Unknown until a pilot: whether Man Infra's system records the step dates (acknowledge, certify) at all. If it does not, those waits read NA.

## 2. Hard answers

| Question | Answer | Evidence |
|---|---|---|
| Developer's own projects (land, WIP inventory, unsold units, homebuyer collections, RERA escrow) | **NO** | No such entity in the 99-model schema: grep for `rera`, `escrow`, `unsold`, `land bank`, `homebuyer` across `lib`, `app`, `prisma` returns nothing. `inventory` means site material stock (needs stock issues), `lib/connectors/types.ts:50-51`, not unsold flats. Matches Garvis ruling 2026-10-08. |
| EPC done for the company's own / group real-estate projects (related party) | **PARTIAL** | The flow (bills, certification, collection) is measured the same way, but the app has no related-party flag: `BusinessPartner` carries only `category` (Government/PSU/private), `paymentTermDays`, `isMsme`, `prisma/schema.prisma:428-449`. A "client" that is a group company is judged against its stated terms like any other, and the app cannot say the cash is moving inside the group. The booklet must not present group-internal receivables as third-party collection risk. Consolidated figures eliminate this work; use STANDALONE / EPC segment figures, labelled. No segment field exists either (grep `segment` in schema: none). |
| Debt-free: does value-of-a-day / carry assume borrowing? | **YES, it does, and 0% cannot be entered** | One org-wide "Cost of funds" rate (`lib/actions/cost-of-funds.ts:15`, Settings `app/(app)/settings/page.tsx:68`) prices every "a year at cost of funds" figure: `carryOn = amount × rate / 100`, `lib/insights/levers.ts:46`, `lib/insights/desks.ts:120`; financing alternative `costOfFinancing` = peak funding need × rate, `lib/insights/levers.ts:130`. **Defect:** every read is `Number(financingRatePct ?? 9) \|\| 9`, `lib/derive/project-scope.ts:383`, `lib/repository.ts:104` (and 6 more sites, plus `lib/derive/portfolio.ts:147`, `portfolio-streams.ts:136`), so a stored 0% is read back as **9%**. A debt-free company would see interest/carry it does not pay. Days, cash released, DSO/DPO/CCC do not read the rate (`cost-of-funds.ts:11-13`). |
| How the booklet should phrase value with no debt | | "Cash released once" (rupees) and "days of revenue tied up" only. Never "interest saved". If anything recurring is shown, it is the **yield foregone on cash already held** (the company's own treasury yield, if disclosed, labelled as opportunity, not cost) and only with its source. FIXED-PAGES p15 already says interest applies "only where the cash repays borrowing" (FIXED-PAGES.md:133); Garvis ruling: no interest saving printed. |
| ERP connectors today | **One live adapter, and it is not Man Infra's system** | `lib/connectors/registry.ts:33-36` GREY_ERP `available: true`; SAP S/4, SAP ECC, Oracle Fusion, Tally, CSV are listed `available: false`, `:38-42`. Every adapter must emit the universal `NormalizedEvent` contract (`lib/connectors/types.ts`). The pilot adapter is built first (FIXED-PAGES p14/p15). |
| Scale | Proven on 3 to ~8 projects of one source; documented, not re-measured | CLAUDE.md: 27,184 events, full import ~27 min, event-log transfer ~47 s from India to a us-east-2 DB, project pages ~14 s, portfolio ~31 s warm. Adequate for a 1-3 project pilot; not proven at a full listed-contractor book. Do not print any scale figure. |

## 3. What the booklet must NOT claim; honest pilot wording

Must not claim:
- That Crestline models real-estate development, unsold inventory, homebuyer collections or RERA escrow.
- Any "interest saved" or carry figure (no disclosed borrowing; and the app's own carry cannot be set to 0% today, see §2).
- That a group/related-party client is a collection risk, or any consolidated figure as EPC working capital without the label.
- That Crestline connects to, reads, or holds Man Infra's system today (FIXED-PAGES rule 1, :20); no SAP/Tally adapter exists (`registry.ts:38-42`).
- Any ISO, certification, hosting, region or encryption claim (FIXED-PAGES rule 2, :21).
- Step waits or day values on the page 8 timeline (rule 3, :22); claims management ("lists claims as aged cash; does not run them", :113).
- Any scale or speed figure.

Honest wording (FIXED-PAGES slots):
- `{PILOT_SCOPE}`: "one to three third-party EPC contracts" (one entity, the EPC segment; own real-estate projects excluded).
- `{SCOPE_CARD}`: "Real-estate development is not modelled: no land, unsold units, homebuyer collections or RERA escrow. EPC work for group projects is shown, labelled as group work."
- `{ACCOUNTING_SYSTEM}`: the system Man Infra's filings name; if none, "ERP" (FIXED-PAGES.md:10).
- `{ASK_ANSWER}` on p11: phrase the result as "cash released, ₹X Cr, once" with no interest line.
- p15 sources line keeps "interest … applied only where the cash repays borrowing" and adds: "{COMPANY} reports no borrowing, so no interest figure is printed."

## 4. MD view vs CFO view

| Reader | Question | Screens |
|---|---|---|
| MD (Manan Shah) | Which job holds the most capital, which client is slow, what needs me today | `/ask` morning brief (company); `/dashboard` portfolio control tower; `/projects` grid; `/clients`; `/performance` (verified closes only); `/org-hierarchy` (who owns the slot) |
| CFO (Ashok Mehta) | Where exactly is cash trapped, does it reconcile, what releases it | `/working-capital` company; per project `/projects/[id]/working-capital` (position, cash cycle, simulator, levers, accrued and paid bases), `/overview` (contract→cash waterfall, reconciliation), `/o2c` + `/client`, `/p2p` + `/vendors`, `/tickets`; Settings → connected sources and capabilities, Cost of funds |

Both names are from the README and are to be verified in filings (MI-1).
