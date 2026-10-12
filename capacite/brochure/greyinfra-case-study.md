# Case study: Crestline running on a demonstration EPC ERP (Grey Infra)

SALES-19, 2026-10-06. Companion to the Capacite brochure (`crestline-solutions.md`, problems P1 to P5).

**Read this first.** Grey Infra is Crestline's **demonstration environment**: a simulated EPC ERP that we connect to through the same connector a real ERP would use. It is **not a client, not a customer, not a deployment, and nothing here is a result achieved for anyone.** Every figure below is what the app computes on that demonstration data, read back from the database by the app's own code. Nothing was typed in by hand, and no figure was rounded up to look better. Use the label **"Crestline running on a demonstration EPC ERP (Grey Infra)"** on every page and slide that carries these numbers.

- **Projects used:** the three largest Grey Infra jobs. Together they hold 27,260 events (the "~27k" in the brief): Bhilai Steel Plant BF-8 (GI-BSP-02, ₹280 Cr contract), Mumbai Metro Line 9 Pkg 04 (GI-MMR-01, ₹340 Cr) and Hinjewadi IT Park Tower C (GI-PIT-03, ₹180 Cr). All three are dated **as at 20 Mar 2027**, the last event the source holds. The database now holds 10 Grey projects. Talegaon (GI-TLG-09) is used once below, to re-check the simulator figure quoted in CLAUDE.md.
- **Financing rate:** 9.25% a year, the rate the app carries for these projects. All "carry" figures use it (rule 7).
- **How the figures were produced:** see "Reproduce" at the end. Everything was read-only. No sync was run, no model was called and nothing was written.

---

## Executive summary

1. **Work done, not billed.** On all three jobs, built work waits 3.9x to 7x longer than the certification window the client signed: 211 days against 30 on Bhilai. ₹64.9 Cr of submitted bills are waiting for certification.
2. **Bills raised, not paid.** DSO runs 158 / 127 / 55 days against payment terms of 90 / 60 / 30. ₹38.7 Cr is past each invoice's own due date, and Crestline names every one of those invoices.
3. **Old money gets older.** Overdue invoices are, weighted by amount, 264 to 323 days past due. Open O2C value that has already passed its step's usual wait totals ₹168 Cr. Crestline splits each wait into ours and the client's.
4. **Growth funded by stuck cash.** ₹134 Cr of the business's own money is deployed across the three jobs, costing ₹12.4 Cr a year in carry. At the terms already agreed, the simulator releases **₹55.1 Cr once and saves ₹5.09 Cr a year**.
5. **One vendor average hides every vendor.** On Bhilai and Metro, DPO "looks good" at 73 days. The vendors' own terms are 32 to 34 days, so the business is paying late, while it also paid ₹19.8 Cr *early* on the same two jobs. On-terms rates range from 21% to 66% across vendors, and the late payments include named MSME vendors.

---

## P1. Work done, not billed

| | Bhilai (GI-BSP-02) | Mumbai Metro (GI-MMR-01) | Hinjewadi (GI-PIT-03) |
|---|---|---|---|
| **Before** (what the ERP shows) | Contract asset ₹81.4 Cr on the trial balance | ₹51.0 Cr | ₹23.2 Cr |
| **What Crestline showed** | Built, not certified **211.2 days** against a **30-day** certification window | **129.7 days** against **21** | **54.1 days** against **14** |
| Submitted, awaiting certification | ₹33.2 Cr, 18 bills, amount-weighted 323 days | ₹24.6 Cr, 19 bills, 372 days | ₹7.12 Cr, 4 bills, 442 days |
| Bill prepared, never submitted (ours) | ₹11.0 Cr, 6 bills, 517 days | ₹4.11 Cr, 4 bills, 375 days | ₹6.98 Cr, 3 bills, 328 days |
| Certified, never invoiced (ours) | ₹7.16 Cr, 5 items, 374 days | ₹12.7 Cr, 10 items, 446 days | ₹0 |
| Certified short, never re-billed | ₹7.28 Cr, 25 items | ₹98.5 L, 9 items | ₹0 |
| Top named bills | RA/SS/001 ₹1.92 Cr, 726 days since submission (at client acknowledged); RA/SS/002 ₹2.79 Cr, 710 days (certification rejected); RA/SS/003 ₹91.4 L, 701 days | RA/V1/003 ₹89.9 L, 880 days; RA/V2/004 ₹1.37 Cr, 772 days; RA/S1/004 ₹1.62 Cr, 705 days | RA/SB/006 ₹1.65 Cr, 543 days; RA/SU/003 ₹1.41 Cr, 537 days; RA/SB/008 ₹2.20 Cr, 467 days |
| Owner desk (resolved by `deskOwners`) | Vikram Shetty, Commercial | Vikram Shetty | Vikram Shetty |
| **What it would release** (simulator, certification leg to the contract window) | **₹18.8 Cr** | **₹14.1 Cr** | **₹4.77 Cr** |

**Ticket it raises:** fact `wc.contractAssetDays` (or `wcCycle.action.certification` from the cycle panel). The target is the contract's own window (30 / 21 / 14 days), never a peer figure. The owner is the certification desk. **How it closes:** the auditor (`verifyTicket`) re-derives the same fact through `buildEvidenceFor` after the next sync. If the figure has moved by more than 0.5% in the right direction, the close is "verified". If the owner says the work is done, or the due date passes, and the figure has not moved, the ticket closes as "no change". The demonstration database already holds such a ticket on Bhilai: it was raised on 12 Sep 2026 with Vikram Shetty, has not been picked up, and the figure is unchanged at 181.3 days. Ask Crestline quotes it back (see the Ask section).

## P2. Bills raised, not paid

| | Bhilai | Mumbai Metro | Hinjewadi |
|---|---|---|---|
| **Before** | Trade receivable ₹23.7 Cr; one DSO figure | ₹25.1 Cr | ₹7.0 Cr |
| **What Crestline showed** | DSO **158.2 days** against the **90-day** term this client signed | **126.6** against **60** | **55.5** against **30** |
| Past each invoice's OWN due date | ₹15.8 Cr, 8 invoices | ₹17.0 Cr, 14 invoices | ₹5.90 Cr, 2 invoices |
| Top named invoices | GI/INV/2025/00134 ₹2.85 Cr, 363 days past due; GI/INV/2025/00104 ₹2.34 Cr, 379 days; GI/INV/2026/00135 ₹2.00 Cr, 352 days | GI/INV/2026/00041 ₹2.61 Cr, 363 days; GI/INV/2025/00052 ₹1.57 Cr, 563 days; GI/INV/2025/00004 ₹1.10 Cr, 692 days | GI/INV/2025/00159 ₹2.29 Cr, 425 days; GI/INV/2026/00175 ₹3.61 Cr, 258 days |
| Owner desk | Vikram Shetty (collection) | Vikram Shetty | Vikram Shetty |
| **What it would release** (simulator, collection leg to the signed term) | **₹6.53 Cr** | **₹7.81 Cr** | **₹3.03 Cr** |

**The playbook the app writes (Bhilai, verbatim):** "Today: call the client's accounts-payable lead about GI/INV/2025/00134 (₹2.85 Cr, 363 days past due, ₹2.2 L a month to carry). Ask which payment run it is booked into..." Then an email the next day on 00104 and 00135. Then, after 7 days, the progress-meeting escalation "with the figure on the table: ₹7.19 Cr held past due, costing ₹5.54 L a month."
**Ticket:** fact `wc.dso`. The target is the payment term (90 / 60 / 30). The steps are the named invoices above. The auditor closes it on `wc.dso` as in P1. The floor is the client's signed term: the simulator will not let anyone "plan" faster collection than the contract allows.

## P3. Old money getting older

| | Bhilai | Mumbai Metro | Hinjewadi |
|---|---|---|---|
| **Before** | Ageing from invoice date, one house average | same | same |
| **What Crestline showed** | Overdue invoices weighted **270 days** past their own due dates | **264 days** | **323 days** |
| Open O2C value past its step's usual wait | ₹77.3 Cr | ₹64.6 Cr | ₹26.4 Cr |
| Retention still held | ₹17.5 Cr (median 761 days from retention withheld to DLP expiry) | ₹9.01 Cr (759 days) | ₹4.49 Cr |
| Oldest case that is OURS | RA/CF/007, ₹2.66 Cr, in internal review for 663 days against a usual 14 (Commercial, Vikram Shetty) | RA/S1/001, ₹1.85 Cr, certified and not invoiced, 712 days past a usual 3.8 (Billing, Imran Qureshi) | RA/FC/006, ₹3.55 Cr, in internal review 345 days past a usual 2.3 (Commercial, Meera Joshi) |
| Oldest case that is the CLIENT'S | RA/SS/001, ₹2.34 Cr, client-acknowledged and uncertified 676 days past usual | RA/V2/004, ₹1.62 Cr, 705 days past usual | RA/SB/008, ₹2.50 Cr, awaiting acknowledgement 460 days past usual |
| **What it would release** | Retention lever: ₹17.5 Cr, ₹1.62 Cr a year of carry, **only where DLP has expired** (not counted in the totals) | ₹9.01 Cr, ₹83.3 L a year | ₹4.49 Cr, ₹41.5 L a year |

Ageing here is always measured against each document's **own** due date, never from the invoice date. The app ranks rows by value x days past usual, not by count. Counterparty waits get a chase-and-escalate step; only our own waits get a "fix". **Ticket:** a stuck case raised from the process rows on fact `proc.o2c.atRisk`, target ₹0 (the `proc.zeroRupees` benchmark), with the doer named above.
*Not measured in this run:* the ageing **bucket** chart (0-30 / 31-90 / ... priced in rupee-days) lives on `/dashboard`. Rebuilding that portfolio view means rebuilding every project's event log, so this read-only run did not do it. Read the buckets off the screen on the call.

## P4. Growth funded by stuck cash / borrowing

| | Bhilai | Mumbai Metro | Hinjewadi |
|---|---|---|---|
| **Before** | Working capital ₹101 Cr, one number | ₹70.3 Cr | ₹28.2 Cr |
| **What Crestline showed** | Own money deployed **₹67.3 Cr**; carry **₹6.22 Cr/yr** | ₹49.3 Cr; ₹4.56 Cr/yr | ₹17.8 Cr; ₹1.65 Cr/yr |
| Share of the contract the business funds | 36.1% | 20.7% | 15.7% |
| Payments funded from our own pocket (vs the client's money) | ₹41.2 Cr of ₹85.4 Cr out; 148 of 382 payments | ₹30.9 Cr; 145 of 433 | ₹5.11 Cr; 36 of 245 |
| Deepest the account went: the facility the job actually needed (`wc.trough`) | **-₹40.7 Cr** (May) | -₹29.9 Cr | -₹3.47 Cr |
| Cash-ledger peak funding need (document basis) | ₹9.60 Cr, Sep 2025 | ₹7.21 Cr, May 2025 | none (never under water) |
| Cash cycle now → at agreed terms (simulator) | **150.5 → 82.3 days** | **92.0 → 25.5** | **40.4 → 15.0** |
| **What it would release** | **₹25.3 Cr once, ₹2.34 Cr/yr carry** | **₹21.9 Cr, ₹2.03 Cr/yr** | **₹7.80 Cr, ₹72.1 L/yr** |

The simulator stops at the contract's own terms: the certification window, the client's payment term, and the vendors' spend-weighted terms. These are the four rates the WC cards already divide by, with no elasticities. Each total above is the certification leg plus the collection leg, so P1 and P2 add up to it exactly. Alongside the levers the app prices the alternative: on Bhilai, financing the gap costs ₹88.8 L a year "and fixes nothing". **Ticket:** "Make this the plan" writes the simulated figure as the TARGET on `wc.contractAssetDays` / `wc.dso`. The auditor closes it on the same fact.
**Simulator re-check (Talegaon, GI-TLG-09):** at agreed terms, 45.9 → 13.7 days and ₹2.97 Cr released (₹1.20 Cr certification, ₹1.22 Cr collection, ₹55.4 L vendor terms). This matches CLAUDE.md, re-measured and not copied.

## P5. One vendor average hides every vendor

| | Bhilai | Mumbai Metro | Hinjewadi |
|---|---|---|---|
| **Before** | DPO **73.6 days**, which reads as "great credit" | **72.5** | **39.9** |
| **What Crestline showed** | Vendors agreed **32.1 days** (spend-weighted), so this is paying late, not credit | **33.7** agreed | **35.1** agreed |
| Yet paid EARLY | ₹5.64 Cr across 47 payments | ₹14.2 Cr across 106 payments | ₹9.84 Cr across 65 payments |
| On terms, last 90 days | 45.8% (₹3.2 Cr paid late) | 39.5% (₹3.79 Cr late) | 63.6% (₹1.83 Cr late) |
| Vendor spread (on-terms rate) | Suraj Hardware 22.6%, Coastal Aggregates 23.3%, Trident 23.5% ... Nova HVAC 54.5% | Sanghvi Steel 20.7% ... UltraBind Cement 65.5% | per vendor on `/p2p` |
| MSME paid late (statutory 45-day cap) | Coastal Aggregates Supply Co, 8 days late on ₹6.69 Cr spend; Rapid Response Equipment 7 days; Trident Equipment Rentals 6 days | Coastal Aggregates, Rapid Response, Trident, 1 day late each | Coastal Aggregates, Rapid Response, 1 day late |
| Held behind a 3-way-match exception | ₹4.95 Cr, 40 invoices, median 409 days (41.1% exception rate) | 22.9% exception rate | 15.0% |
| **What it would release** | **₹0 from DPO, and that is deliberate.** The simulator's ceiling is the vendors' agreed terms (rule 1), so paying later can never be "released". The move is to pay ON the due date: stop the early payments (₹21,075/yr carry, last 90 days) and clear the late MSME ones. | same | same |

Talegaon shows the other direction: DPO is 27.2 days against 36.1 agreed, so raising it to terms releases ₹55.4 L. That is credit the vendors already gave and the business is not using. **Ticket:** fact `p2p.timing.onTermsPct` (target 100%), or per vendor `p2p.supplier.V-004.onTermsPct` for Coastal Aggregates, raised on the P2P / vendors screens. The owner is proposed by the app from the Finance desk; confirm the name on screen. The auditor closes it on the same fact.

---

## Process-mining finding: the top bottleneck by money, ours vs the client's (Bhilai)

- Across 86 O2C cases (median cycle 230 days, 12.8% on the usual path, 48.8% with an exception), the average case waits **33.9 days on our desks, 32.5 days in handoffs between our own systems, and 174.8 days on the client.** About **27% of the wait is ours to fix.**
- The largest single case by value x days past usual is **ours**: **RA/RF/002, ₹3.50 Cr.** The client has already certified it (short), and it has waited **481 days for us to raise the tax invoice**, against a usual 10.3. This is a system handoff from CLIENT-PORTAL to GI-BILL, sitting with Billing, and the person who usually does it is Rakesh Nair.
- The single most expensive transition is invoice → cash: median 110.1 days against the 90-day term, ₹62.8 Cr held across 35 cases. Inside that, the GI-BILL → GI-FIN handoff has a median of 107 days and accounts for 31% of the stream's waiting.
- Priced (`proc` money rows): the certification wait runs 24.9 days beyond the window, which is **₹2.58 Cr** of cash. The collection wait runs 20.1 days beyond the term, which is ₹1.93 Cr. Both are priced at the same per-day rates the WC cards use.

## Ask Crestline example (Bhilai project scope)

**Question:** "How can I release cash this month?" (intent: *What to do now*)
**Answer, as the engine streams it (figures computed in TypeScript; this run made no model call):**
1. Verdict: "Do this first: collect what the client has already certified, worth ₹2.52 Cr a year and ₹27.2 Cr of cash."
2. "Every move this page can evidence, priced the same way, comes to ₹7.16 Cr a year. The next best... is bring certification back to the window the contract already agreed at ₹1.74 Cr. The best one that needs nobody's permission is stop material arriving ahead of the programme, at ₹63.1 L a year. Financing the gap instead costs ₹88.8 L a year and fixes nothing."
3. A ranked list of moves with owners (all Vikram Shetty except material, which goes to Rahul Deshmukh), then the numbered playbook naming GI/INV/2025/00134, 00104 and 00135 with deadlines.
4. "At the terms already agreed: built, waiting to be certified 211.2 days → 30 days, invoiced, waiting to be paid 158.2 days → 90 days. The cycle goes 150.5 days → 82.3 days. That releases ₹25.3 Cr once and saves ₹2.34 Cr a year in carry."
5. Source: "286 facts retrieved over 2 evidence packs, every figure computed in TypeScript from the synced source", plus the follow-up questions *Why? / Next 3 months / Who does this better?*

Note: the "₹27.2 Cr" lever is everything certified and not collected, and it includes the retention. The levers overlap, so they are ranked against each other and never added together. The ₹25.3 Cr simulator figure is the one to quote.

---

## How to show this live on the call

Log in, open the scope switcher and go to **Bhilai Steel Plant — Blast Furnace 8**. It has the widest gaps, and every story above is visible on it.

1. **Ask Crestline** (project root): type "How can I release cash this month?". The ranked moves, the named invoices and the ₹25.3 Cr all appear in about a second.
2. **Working capital**: the cash-cycle card, then flip **Position → Simulate**. Drag certification to 30 and collection to 90 to show 150.5 → 82.3 days and ₹25.3 Cr. Then try to drag vendor credit past terms to show the ceiling.
3. **Overview**: the contract-to-cash waterfall and the queues (₹33.2 Cr awaiting certification, ₹7.16 Cr certified and not invoiced).
4. **O2C**, then **Client**: overdue invoices against their own due dates. Open RA/RF/002.
5. **P2P**, then **Vendors**: DPO 73.6 against 32.1 agreed, the early and late split, and Coastal Aggregates (MSME).
6. **Alerts & Tickets**: the open certification ticket, with "figure has not moved" from the auditor.
7. Switch to **All projects → Overview** (`/dashboard`) for the company roll-up and the ageing buckets.

### Screens worth screenshotting for the brochure (the client logs in; we never enter credentials)

| # | Route | Project | Shows | Problem |
|---|---|---|---|---|
| 1 | `/projects/cmttowbwd0026u7awxom3u5f9` | Bhilai | Ask answer to "How can I release cash this month?" | all |
| 2 | `/projects/cmttowbwd0026u7awxom3u5f9/working-capital` | Bhilai | Cash-cycle diagram + Simulate mode at agreed terms | P1, P2, P4 |
| 3 | `/projects/cmttowbwd0026u7awxom3u5f9/overview` | Bhilai | Contract-to-cash waterfall, queues, time x money | P1, P3 |
| 4 | `/projects/cmttowbwd0026u7awxom3u5f9/o2c` | Bhilai | Bills waiting, by step, with named cases | P2, P3 |
| 5 | `/projects/cmttowbwd0026u7awxom3u5f9/p2p` | Bhilai | DPO vs agreed terms, early/late timing, match exceptions | P5 |
| 6 | `/projects/cmttowbwd0026u7awxom3u5f9/vendors` | Bhilai | Per-vendor two-clock dumbbell, MSME | P5 |
| 7 | `/projects/cmttowbwd0026u7awxom3u5f9/tickets` | Bhilai | Ticket list with the auditor's re-measure | ticket loop |
| 8 | `/projects/cmttp595u0ed9u7awr5s5rjrv/working-capital` | Mumbai Metro | Second proof of the simulator (92.0 → 25.5 days) | P4 |
| 9 | `/dashboard` | All projects | Company control tower, ageing priced in rupee-days, funding gap | P3, P4 |
| 10 | `/working-capital` | All projects | Company WC command centre, project x ratio heatmap | P4, P5 |

Every screenshot must carry the caption "Crestline running on a demonstration EPC ERP (Grey Infra)". The header shows the organisation as "Grey Infra", which is the source's name and not a client's.

---

## Caveats (be ready for these on the call)

- **DSO basis.** The screen's DSO (158 / 127 / 55) is the WC tab's ratio, on the ledger basis with average balances. `npm run verify:sync` prints a whole-window CLI derivation (116 / 98 / 30) on a different period basis. Quote the screen figure.
- **The levers overlap.** Collect-certified, release-retention and collect-in-window share money. Only the simulator totals are additive (certification leg + collection leg).
- **Demonstration data has extreme ages** (bills 700+ days old). It is a simulator, so expect a real ERP to show different magnitudes. The *method* is what carries over.
- **The demonstration database's tickets** (for example the Bhilai certification ticket) are test activity in our own environment, not anyone's results.

## Reproduce (read-only)

```
npm run verify:sync                                                       # balances, ratios, 10 Grey projects
npx tsx docs/brochure-capacite/case-study-calc/dump.ts GI-BSP-02 GI-MMR-01 GI-PIT-03 GI-TLG-09
npx tsx docs/brochure-capacite/case-study-calc/ask.ts                     # Ask engine, project scope
```
`dump.ts` calls only the builders the WC page and the auditor already use: `repository.projects.scope`, `buildEvidenceFor`, `buildPlaybook`, `priceLevers`, `buildSimulatorBasis` + `simulate(toTerms)`, `buildCashLedgerView`, `buildProcessMapView`. `no-ai.ts` removes the model keys before anything loads, so the Ask narration neither calls a model nor writes its cache. `buildAsk(projectId)` was deliberately not used, because it writes a signals and figures cache. Raw outputs: `case-study-calc/dump.txt`, `ask.txt`, `verify-sync.txt`.
