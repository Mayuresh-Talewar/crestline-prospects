# OVAL Projects Engineering Ltd: what Crestline would do (OV-3)

7 Oct 2026. Problems: `problems.md`. Every figure comes from `calc/oval-savings.output.txt` (script `calc/oval-savings.ts`, run on the app's own pure functions `valueOfADay`, `leversFor`, `simulate`, `toTerms`, `priceLevers`). Screens and limits: `webapp-fit.md`.

**Ground rules for every row below.**
- Scenarios, not promises. Rows overlap and are **never added**.
- Value of a day: FY26 revenue from operations / 365 = **Rs 0.420 Cr**. That revenue INCLUDES trading (20.2%), which is outside Crestline's scope; on works revenue alone (oil & gas works plus specialised infrastructure works, Rs 119.09 Cr) a day is **Rs 0.326 Cr**. Both are shown. The company's own sensitivity (15 days of collection = about 630 lakh, AR26 p92) gives the same Rs 0.420 Cr.
- Receivables carry GST and revenue does not, so these cash figures are conservative.
- Interest only at OVAL's disclosed working-capital rate, **9.75% to 10.20% p.a.** (RHP, 21 Aug 2025), and only if the cash repays cash credit; capped at the Rs 23.53 Cr drawn at 31 Mar 2026.
- No contract-terms scenario: OVAL discloses no client payment term, certification window or vendor term, so `toTerms` has no agreed line to move to. With their contract data in the pilot, that row appears.
- Paying vendors later is never a saving. Crestline covers EPC works only; O&M, training and trading are out of scope.
- Crestline does not connect to their accounting system today. Pilot: 2-3 PSU EPC projects, read-only, with an adapter for their accounting system built during the pilot.

## 1. Profit up, operating cash down (Rs -15.75 Cr FY25, Rs -29.96 Cr FY26)

- **What Crestline does.** Rebuilds the cash position per project from the transactions (`/projects/[id]/working-capital`: accrued and paid basis, cash movement with peak funding need), so the Rs 45.71 Cr that operations used over two years is traced to a project, a stage and a document. Ranks every move in one currency (`priceLevers`), so the first action is the one worth most.
- **With Crestline (chart).** Cash movement panel per project: monthly in and out, the cumulative line and its lowest point marked as the funding the project actually needed; beside it, the capital-position chart showing what is funded by OVAL and what by others.
- **Days and cash.** Every day taken out of the cycle is Rs 0.420 Cr once (works-only Rs 0.326 Cr); Rs 0.041 to 0.043 Cr a year in interest at the disclosed rate.
- **Needs from their accounts.** Bank receipts and payments by project, client and vendor ledgers, invoice register with dates.

## 2. Unbilled is 48.1% of receivables (Rs 16.86 Cr of Rs 35.07 Cr)

- **What Crestline does.** O2C screen (`/projects/[id]/o2c`, `/client`): each bill's trail from work executed to measured, billed, certified and paid, waits by stage, and whose act each wait is (billing is OVAL's; certification and payment are the client's). Unbilled work is listed by project with its age, and tickets go to the desk that prepares the bill. Retention and client advances (with the expiry of any guarantee given against an advance) are held per contract.
- **With Crestline (chart).** Contract-to-cash waterfall per project: contract value stepping down to executed, billed, certified, collected, with the largest drop labelled in rupees and days.
- **Days and cash (each row alone).**

| Scenario | Days | Cash, all revenue | Cash, works only | Interest a year (9.75% to 10.20%) |
|---|---|---|---|---|
| Bill executed work 10 days sooner | 10 | Rs 4.20 Cr | Rs 3.26 Cr | Rs 0.41 to 0.43 Cr |
| Bill executed work 30 days sooner | 30 | Rs 12.59 Cr | Rs 9.79 Cr | Rs 1.23 to 1.28 Cr |
| Unbilled down to one third of receivables (illustrative) | 18.5 | Rs 7.76 Cr | Rs 7.76 Cr | Rs 0.76 to 0.79 Cr |
| Unbilled down to one quarter of receivables (illustrative) | 25.7 | Rs 10.79 Cr | Rs 10.79 Cr | Rs 1.05 to 1.10 Cr |

  The share rows move the balance itself, so both bases give the same cash. FY25's ageing showed no unbilled column, so neither share is a past level; they are illustrations, not targets.
- **Margin lens.** A 10-day billing step saves 2.8% to 2.9% of FY26 PAT (Rs 14.81 Cr) in interest; a 30-day step 8.3% to 8.7%.
- **Needs from their accounts.** Measurement-book or progress entries, RA bill register (submitted, certified dates and amounts), client receipts, retention deducted per bill.

## 3. Cash out ahead of the work (stock +35.2%, vendor advances +162.3%, payables settled early)

- **What Crestline does.** P2P and vendors screens (`/projects/[id]/p2p`, `/vendors`): each payment against the vendor's own due date, early payments priced (amount x days early / 365), vendor advances by project and age, and stock against the work it is for. The working-capital screen ranks "pay on the due date, not before" against the other levers.
- **With Crestline (chart).** Payment-timing chart with the due date at the centre: bars to the left are paid early, to the right paid late, sized by rupees; vendors as dumbbells of agreed credit against credit actually taken.
- **Days and cash.** Not priced here. The filings give no vendor due dates and no stock consumption rate (inventory includes WIP), so the simulator holds both legs at today's figure rather than invent a rate. Getting the net cycle back from 97 to FY25's 93 days (AR26 Note 37) is worth Rs 1.68 Cr once (works-only Rs 1.31 Cr), Rs 0.16 to 0.17 Cr a year in interest. This is never achieved by paying vendors later than agreed.
- **Needs from their accounts.** Purchase orders with payment terms, GRNs, vendor invoices and payment dates, advance ledger, stock movements.

## 4. Order book 5.2x revenue; BG limit 79.8% used, cash credit 88.8% drawn

- **What Crestline does.** Company view (`/working-capital`, `/dashboard`, `/ask`) ranks the projects holding the most capital and shows release per project, so the cash side of the next order is visible before it is bid. It does **not** keep a bank-guarantee register or track BG limits; only a guarantee given against a client advance, with its expiry, is held.
- **With Crestline (chart).** Project-by-cash-pressure heatmap across the 2-3 pilot projects, and the cash-cycle diagram per project (stock, unbilled, billed, payables to scale).
- **Cash against the limits (visibility only; cash released does not change a sanctioned limit or the BG headroom of Rs 15.15 Cr).**

| Scenario | Cash, all revenue | % of Rs 104.72 Cr limits | % of cash credit drawn |
|---|---|---|---|
| 10-day step (billing or collection) | Rs 4.20 Cr | 4.0% | 17.8% |
| 30-day step | Rs 12.59 Cr | 12.0% | 53.5% |
| Net cycle back from 97 to FY25's 93 days (Note 37 days are turnover-implied; indicative) | Rs 1.68 Cr | 1.6% | 7.1% |

- **Needs from their accounts.** The same as 1 and 2, across every pilot project.

## 5. Two records of the same money (Note 40, once, neutral)

- **What Crestline does.** Two-route reconciliation (`/projects/[id]/overview`, reconciliation section): the ledger's figure and the document trail's figure side by side, each marked agrees, differs (with the measured ratio), single source, or not available.
- **With Crestline (chart).** A badge on each figure that says whether two routes agree.
- **Days and cash.** None claimed.
- **Needs from their accounts.** Trial balance by month and the document trail behind receivables and stock.

## Booklet table (each row alone; rows overlap and are never added)

| Problem | Crestline screen | Days | Cash released once | Interest a year at 9.75% to 10.20% (if it repays cash credit) |
|---|---|---|---|---|
| Unbilled 48.1% of receivables | O2C, contract-to-cash | 10 / 30 days sooner billing | Rs 4.20 Cr / Rs 12.59 Cr (works only Rs 3.26 Cr / Rs 9.79 Cr) | Rs 0.41-0.43 Cr / Rs 1.23-1.28 Cr |
| Billed receivables | O2C, client | 10 / 30 days sooner collection | Rs 4.20 Cr / Rs 12.59 Cr (works only Rs 3.26 Cr / Rs 9.79 Cr) | Rs 0.41-0.43 Cr / Rs 1.23-1.28 Cr |
| Unbilled share (illustrative) | O2C | to one third / one quarter | Rs 7.76 Cr / Rs 10.79 Cr | Rs 0.76-0.79 Cr / Rs 1.05-1.10 Cr |
| Net cycle lengthened (Note 37) | Working capital, simulator | back from 97 to FY25's 93 days (turnover-implied; indicative) | Rs 1.68 Cr (works only Rs 1.31 Cr) | Rs 0.16-0.17 Cr |
| Cash out ahead of work | P2P, vendors | not priced (no vendor terms disclosed) | NA | NA |
| Limits in use, order book 5.2x | Company working capital, Ask | visibility only | NA | NA |
| Two records disagree (Note 40) | Overview, reconciliation | none | none | none |

Sources for the reader line under the table: AR26 (Annual Report 2025-26, Sep 2026) for revenue, receivables, ageing, Note 37 days and limits; RHP (21 Aug 2025) for the interest rate. Rates and figures are OVAL's own; the scenarios are Crestline's arithmetic.
