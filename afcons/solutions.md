# Afcons Infrastructure: solutions and savings (AF-5)

Prepared 7 Oct 2026. Every Afcons figure comes from `data.md` (FY26, consolidated, ₹ Cr) with its document and page; nothing else is used. Every computed figure comes from `calc/afcons-savings.ts`, which runs Crestline's own pure functions (`simulate` / `leversFor` in `lib/finance/cycle-simulation.ts`, `valueOfADay` in `lib/finance/working-capital-cycle.ts`, `priceLevers` in `lib/insights/levers.ts`). The full printout, with all asserts passing, is in `calc/afcons-savings.output.txt`.

## Rules for using these numbers
- **These are scenarios, not promises.** The rows overlap: every row is mostly the same money looked at another way. **Never add them up.**
- **Interest is saved only if the released cash repays debt.** If it sits on deposit, the saving is the spread between the two rates and nothing more.
- **Paying vendors later is never counted as a saving.** The simulator holds vendor credit at today's level because Afcons publishes no vendor terms, and the asserts prove that no request to stretch it releases any cash.
- **Afcons does not publish the definition of its FY26 NWC days** (data.md s.1). The company's own figure is 143 days, and it is quoted as theirs. The days shown for each leg below are our computation (closing balance ÷ revenue per day) and are labelled that way.
- **GST:** receivables include GST and revenue does not, so one receivable day holds more than one day of revenue. Every receivable cash figure below is therefore **conservative**.
- **Margin:** Crestline does not fix margin, cost to complete, budget against actual or EAC (README ruling). Profit pressure is shown ONLY as the carry cost of cash that is waiting.
- **Connector:** Crestline has no SAP adapter today. Afcons runs SAP S/4HANA (RISE) since 21 Nov 2023 (RHP Note 52, printed p.546). The adapter is built during the pilot: 1 to 3 domestic INR projects, read-only. Nothing here may say "connects to your SAP" in the present tense.

## The two constants

| Constant | Value | Formula / source |
|---|---|---|
| Revenue per day | **₹32.735 Cr** | revenue from operations 11,948.38 (AR26 p.327) ÷ 365 |
| Interest rate | **7.55% to 9.95% a year** | Afcons' disclosed cash credit / WCDL rate range, 31 Mar 2026 (AR26 p.362-367). It is a range, so both ends are shown |
| Not their rate | 23.3% | our computation only: finance costs 673.61 ÷ average borrowings ((2,235.72 + 3,538.27) ÷ 2 = 2,887.0). Finance costs also carry interest on customer advances (97.09 accrued) and other charges, so this is **not** a borrowing rate. Never printed as Afcons' rate and not used in any saving |

Formulas used on every row: **cash = days × 32.735**; **interest a year = cash × 7.55% .. cash × 9.95%**.

Leg days implied by the FY26 balances (Computed, not published by Afcons):

| Leg | Balance (source) | Days = balance ÷ 32.735 |
|---|---|---|
| Contract assets (unbilled work), net | 7,731.50 (AR26 p.356) | 236.2 |
| Trade receivables, net | 4,038.09 (AR26 p.353-354) | 123.4 |
| Inventory | 1,016.57 (AR26 p.357) | 31.1 |
| Trade payables | 4,470.68 (AR26 p.364) | 136.6 (shown only; never moved) |

---

## Leg 1. Work done, waiting for certification (contract assets ₹7,731.50 Cr)

**The problem in their words.** "We are witnessing delays in certification of the work done and release of payment in projects. This has led to increase in uncertified work done leading to jump in working capital requirement." (CFO Ramesh Kumar Jha, Q1 FY27 call, Q1T PDF p.8, filed 13 Aug 2026.) Contract assets rose from 5,225.40 (FY24) to 7,095.76 (FY25) to 7,731.50 (FY26).

**What the accounts cannot tell them:** which site, which RA bill, at which step (measured, prepared, submitted, waiting for the client's engineer), and since when.

**What Crestline does (within webapp-fit).** Rebuilds every RA bill from its own dated events (`lib/derive/cases.ts`) and splits the wait between Afcons' own steps (measuring, preparing, reviewing, submitting) and the client's act (certifying). Screens: `/projects/[id]/o2c` (pipeline buckets, `lib/finance/o2c.ts`), `/projects/[id]/overview` (contract-to-cash waterfall), and `/projects/[id]/working-capital`, where the simulator stops at the contract's own certification window and never goes below it.

**The "with Crestline" chart.** A bar per RA bill, split into two shades: Afcons' own days (measure → submit) and the client's days (submitted → certified), sorted by rupee-days (amount × days over the window). The longest bars name the site, the bill number and the desk holding it.

| Scenario | Days | Cash released (formula) | Interest a year |
|---|---|---|---|
| 10 days faster | 236.2 → 226.2 | **₹327.4 Cr** (10 × 32.735) | ₹24.7 Cr .. ₹32.6 Cr |
| 30 days faster | 236.2 → 206.2 | **₹982.1 Cr** (30 × 32.735) | ₹74.1 Cr .. ₹97.7 Cr |

Not reachable by process alone: ₹659.87 Cr of variations on one joint operation sits in non-current contract assets and is under arbitration and High Court proceedings (AR26 Note 37 and the first emphasis-of-matter paragraph). Crestline lists it as aged trapped cash; it does not run the arbitration.

**What it needs from their SAP:** RA bill documents and their dated status changes (measured, submitted, certified), the certification window in each contract, project and site codes, and the desk that holds each step.

## Leg 2. Invoiced, waiting to be paid (trade receivables ₹4,038.09 Cr)

**The problem.** 48.7% of gross receivables (2,102.34 of 4,319.79) is more than one year past its due date, up from 38.4% in FY25 (AR26 p.354). 27.0% of gross is disputed. The auditors made "Recoverability of Non-Current Contract Assets and non-current trade receivables" a key audit matter (AR26 p.316-318).

**What Crestline does.** It ages every invoice from its OWN due date, never a house average, and ranks the open book by rupee-days, not by age. Screens: `/o2c`, `/clients` (how each client certifies and pays), `/projects/[id]/client`, and `/o2c/claims` (claims and awards as an aged list of trapped cash: claimed, awarded, received, oldest first). Under every chart sit *Raise ticket* and *Alert owner*, so each overdue invoice gets a named owner.

**The "with Crestline" chart.** Ageing buckets priced in rupee-days, so one old ₹200 Cr award outranks forty small bills. Next to it, a timing chart with each invoice's own due date as the zero line.

| Scenario | Days | Cash released (formula) | Interest a year |
|---|---|---|---|
| 10 days faster | 123.4 → 113.4 | **₹327.4 Cr** (10 × 32.735) | ₹24.7 Cr .. ₹32.6 Cr |
| 30 days faster | 123.4 → 93.4 | **₹982.1 Cr** (30 × 32.735) | ₹74.1 Cr .. ₹97.7 Cr |
| Over-1-year share back to FY25's 38.4% | 22.1 days of revenue | **₹722.0 Cr**: x = (2,102.34 − s × 4,319.79) ÷ (1 − s), s = 1,383.0 ÷ 3,604.77 = 38.37% | ₹54.5 Cr .. ₹71.8 Cr |

Checks: after the 30-day step, receivables are still 93.4 days, above the 45-to-60-day credit period Afcons discloses for progress payments (AR26 p.357), so the simulator's floor does not bind (asserted). The over-1-year row assumes the other buckets stay where they are, and is computed on gross figures throughout (gross with gross, never net with gross). Part of that bucket is disputed and part is already provided for (ECL 281.70), so not all of it is collectable cash. Receivables include GST, so these cash figures are conservative. Collecting is the client's act; Afcons' part is the escalation, the paperwork and the follow-through.

**What it needs from their SAP:** FI-AR open items with document date, due date and customer; receipts; customer payment terms; dispute flags.

## Leg 3. Overall net working capital (143 days, company figure)

**The problem.** Afcons' own NWC days went 63 (FY24) → 113 (FY25) → 143 (FY26) (AR26 p.18). Net operating cash flow was −132.20 (FY25) and −127.49 (FY26) (AR26 p.329), while gross borrowings rose from 2,235.72 to 3,538.27.

**What Crestline does.** `/working-capital` (company cash command centre) and `/dashboard` (project × cash-pressure heatmap, peak funding need) show which jobs hold the days. `/projects/[id]/working-capital` has the cycle simulator and the ranked levers (`priceLevers`), each priced against the cost of just financing the gap.

**The "with Crestline" chart.** The cash cycle diagram drawn to scale, plus a project × leg heatmap where each cell is that project's distance from its OWN contract terms, never from a peer average.

| Scenario | Days | Cash released (formula) | Interest a year |
|---|---|---|---|
| 10 days | 143 → 133 | **₹327.4 Cr** (10 × 32.735) | ₹24.7 Cr .. ₹32.6 Cr |
| 30 days, which is also FY25's own 113 | 143 → 113 | **₹982.1 Cr** (30 × 32.735) | ₹74.1 Cr .. ₹97.7 Cr |
| **The 120 days the CFO named on the Q4 call, without committing to it** | 143 → 120 | **₹752.9 Cr** (23 × 32.735) | ₹56.8 Cr .. ₹74.9 Cr |

Print the 120 only with the CFO's words: "bare minimum, we can look at 120 days ... But I do not want to commit at this point in time" (Q4T PDF p.19, filed 22 May 2026). It is never "your target". The 143 → 113 and the 30-day rows are one row, not two.

**What it needs from their SAP:** the trial balance by project (receivables, contract assets, inventory, payables, customer advances), so the two routes (ledger against documents) can be reconciled the way `lib/derive/reconcile.ts` does.

## Leg 4. The ~₹1,000 Cr "blocked-up" asset

**The problem.** Q4 call: "we should see a sizable liquidation in the range of say INR 1000 odd crores" (CFO, Q4T PDF p.26). Q1 call: "no material movement in collection of the blocked-up asset" (CFO, Q1T PDF p.8). Management describes it as receivable plus unbilled, so it overlaps Legs 1 and 2. Frame it as what the money does, never as a missed promise.

**What Crestline does.** It turns each blocked item into a ticket on a re-measurable fact. The auditor re-takes the same figure and closes the ticket "verified" or "no change" (`/tickets`, `/projects/[id]/tickets`, `/performance` for before and after). Ask Crestline (`/ask`) answers "where is the 1,000 crores now?" from the same figures the screens show.

**The "with Crestline" chart.** One horizontal bar per blocked item (amount, owner, days since raised), with a four-dot progress track, plus a line showing how much of the 1,000 has actually moved, re-measured from the source each sync.

| Scenario | Days | Cash (formula) | Interest a year |
|---|---|---|---|
| ₹1,000 Cr released | 30.5 days of revenue (1,000 ÷ 32.735) | **₹1,000 Cr** | ₹75.5 Cr .. ₹99.5 Cr (1,000 × 7.55% .. 9.95%) |

**What it needs from their SAP:** the list of the blocked documents (invoice and RA bill numbers), and the people who own them.

## Leg 5. Paying vendors (P2P): no saving claimed

Trade payables are 4,470.68; MSME principal unpaid 278.63, with interest due and unpaid of 9.09 (AR26 p.363-364). Crestline's P2P screens (`/p2p`, `/vendors`) judge each payment against that vendor's OWN due date: early payment is capital leakage, late payment is risk, and MSME has a statutory 45 days. **No saving is printed for this leg.** Afcons publishes no vendor terms, so the simulator holds vendor days at today's level (asserted), and stretching payables is never counted as a saving. With their SAP vendor terms and payment dates, early payments could be priced in the pilot; today that figure is NOT computed.

## Ranking (priceLevers)
Ranked by `priceLevers` at both rates, the 30-day certification step and the 30-day collection step tie (₹982.1 Cr each; carry ₹74.1 Cr at 7.55%, ₹97.7 Cr at 9.95%). They tie because one revenue rate is used for every leg. A real ranking needs per-project data from their SAP. The app marks both as the client's act; Afcons' own part is measuring, preparing, submitting and escalating. No early-payment lever (no vendor due dates in the filings) and no retention lever (retention for FY25 and FY26 NOT FOUND; last figure ₹1,096.61 Cr at 31 Mar 2024, RHP p.45).

## Margin lens (MD booklet)
**Interest sits below EBITDA. Saving it does not move EBITDA or the EBITDA margin; say so.** It adds to profit before tax in full. Profit after tax rises by less, after tax. The "% of PAT" column below is pre-tax interest ÷ PAT, so it **overstates** the PAT effect; it is shown only for scale. FY26 PAT 250.74 and PBT 386.79 (AR26 p.327).

| Row (overlapping, never added) | Interest a year | % of PAT (÷ 250.74) | % of PBT (÷ 386.79) |
|---|---|---|---|
| Any 10-day step | ₹24.7 Cr .. ₹32.6 Cr | 9.9% .. 13.0% | 6.4% .. 8.4% |
| Any 30-day step (incl. 143 → 113) | ₹74.1 Cr .. ₹97.7 Cr | 29.6% .. 39.0% | 19.2% .. 25.3% |
| 143 → 120 (the 120 days the CFO named on the Q4 call, without committing to it) | ₹56.8 Cr .. ₹74.9 Cr | 22.7% .. 29.9% | 14.7% .. 19.4% |
| ~₹1,000 Cr blocked-up asset | ₹75.5 Cr .. ₹99.5 Cr | 30.1% .. 39.7% | 19.5% .. 25.7% |
| Over-1-year receivables back to 38.4% | ₹54.5 Cr .. ₹71.8 Cr | 21.7% .. 28.7% | 14.1% .. 18.6% |

---

## CFO table (cash, days, financing)

| Leg | Scenario | Days | Cash released | Interest a year at 7.55% .. 9.95% | Formula |
|---|---|---|---|---|---|
| Contract assets | 10 / 30 days faster | 236.2 → 226.2 / 206.2 | ₹327.4 Cr / ₹982.1 Cr | ₹24.7 .. 32.6 Cr / ₹74.1 .. 97.7 Cr | days × 11,948.38 ÷ 365 |
| Receivables | 10 / 30 days faster | 123.4 → 113.4 / 93.4 | ₹327.4 Cr / ₹982.1 Cr (conservative: GST) | same as above | days × 32.735 |
| Receivables > 1 year | back to FY25's 38.4% | 22.1 days | ₹722.0 Cr | ₹54.5 .. 71.8 Cr | (2,102.34 − s × 4,319.79) ÷ (1 − s) |
| NWC | 10 / 30 days (30 = FY25's 113) | 143 → 133 / 113 | ₹327.4 Cr / ₹982.1 Cr | ₹24.7 .. 32.6 Cr / ₹74.1 .. 97.7 Cr | days × 32.735 |
| NWC | the 120 days the CFO named on the Q4 call, without committing to it | 143 → 120 | ₹752.9 Cr | ₹56.8 .. 74.9 Cr | 23 × 32.735 |
| Blocked-up asset | ~₹1,000 Cr released | 30.5 days | ₹1,000 Cr | ₹75.5 .. 99.5 Cr | 1,000 × rate |
| Vendors | none | held at today | ₹0, by rule | none | paying later is never a saving |

Rows overlap; never add them. Interest is saved only if the cash repays debt.

## MD table (execution, accountability, profit)

| What waits | Whose step | What Crestline shows (screen) | 30-day scenario | Effect on profit (interest a year; % of PBT) |
|---|---|---|---|---|
| Work done, not yet certified | Ours: measure, prepare, submit. Client: certify | each RA bill's wait by site and desk (`/projects/[id]/o2c`, `/overview`) | ₹982.1 Cr | ₹74.1 .. 97.7 Cr; 19.2% .. 25.3% of PBT |
| Invoices not yet paid | Client pays; ours: escalate and follow through | ageing on each invoice's own due date, ranked by rupee-days (`/clients`, `/o2c/claims`) | ₹982.1 Cr | same |
| The ~₹1,000 Cr blocked-up asset | named owner per item | tickets that close only when the source figure moves (`/tickets`, `/performance`) | ₹1,000 Cr | ₹75.5 .. 99.5 Cr; 19.5% .. 25.7% of PBT |
| Working capital overall | per project | project × leg heatmap against each contract's own terms (`/dashboard`) | 143 → 113 days, ₹982.1 Cr | ₹74.1 .. 97.7 Cr |

EBITDA and EBITDA margin do not change: interest is below EBITDA. Time saved is days out of each wait; management hours are described, never numbered.

## Sources and run
- Figures: `data.md` sections 1, 2, 3, 4a-4i, 11 (AR26 made available 8 Jul 2026; Q4T filed 22 May 2026; Q1T filed 13 Aug 2026).
- Calculator: `calc/afcons-savings.ts`, run from the app repo as `scripts/_tmp-afcons-savings.ts` with `npx tsx` and then deleted (repo `git status` was unchanged). Output: `calc/afcons-savings.output.txt`.
- Asserts in the script: vendor days never stretched past terms (with terms null and with a test term of 90); terms null means no floors; simulate cash = step × per day; the 30-day receivable step stays above the 60-day credit period; the over-1-year formula re-checks to the FY25 share; both priceLevers rows are the client's act.
