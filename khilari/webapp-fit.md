# Khilari Infrastructure: what Crestline fits, and what it does not (KH-2)

Company basis: Khilari Infrastructure Private Limited (KIPL), standalone, as CARE Ratings states it (press releases 04 Oct 2024 and 06 Oct 2025). A water and waste EPC contractor whose "entire order book comprises contracts awarded by government entities, including urban local bodies" (CARE 06 Oct 2025 p2), in nine states, operating across over 14 (CARE 06 Oct 2025 p2, p3). Product truth: the app's CLAUDE.md and _shared/crestline-webapp-context.md.

## What Crestline models for this kind of contractor (true today)
| Their reality | How the product reads it |
|---|---|
| RA bills on each project | Each bill rebuilt from the event trail: executed, measured, prepared, submitted, certified, invoiced, collected. Stage waits per bill, ranked by rupee days. |
| Milestone billing | Read as bills through the same trail when the source records them. There is no milestone schedule engine; a milestone bill is a bill. |
| Measurement and certification by a state department or municipal body | Acknowledging, certifying and paying are the client's acts; measuring, preparing, reviewing, submitting and invoicing are the company's. Every wait is filed as ours or the client's by the act that ends it, so a department's queue never lands on the company's action list. |
| Many clients in many states | Clients screen: each client's certification and payment behaviour across all sites. Judged against that client's own terms, never a peer average. |
| Retention and security deposits held by the client | Retention ledger and the RA deductions on each bill; "release the retention that has already met its milestone" is a priced lever. A deposit the source does not record separately reads NA, never zero. |
| Mobilisation advances | Customer advance ledger and advance recovery on each RA bill; advances shown as someone else's money in the capital position. |
| Unbilled work | Executed work no bill has picked up yet, and the certification queue, as days and rupees. |
| Vendor and subcontractor timing | P2P and Vendors: each payment judged against that vendor's own due date; early payment priced as leakage, late payment as risk; MSME suppliers held to the statutory limit; a subcontract stream from work order to certified bill to payment. |
| Working capital as a whole | Cash cycle diagram, cycle simulator, lever ranking, accrued and paid bases, peak funding need, reconciliation of the ledger against the documents. |

## What it does not model
- Tenders, bids, the order book pipeline or the pace of new awards.
- Bank facility limits and their utilisation, borrowings, or rating matters. Borrowings are not in the feed today.
- Project scheduling, progress planning, cost to complete or estimates (no screen today).
- Interest saved, for this company: no rate is disclosed, so the simulator runs at 0% and no interest line is printed.
- Why a department holds a deposit or pays late. It shows which bill, how long and whose act ends the wait; the reason is whatever the source records, else "not recorded".
- Accounting, GST filing, payroll, HR, inventory ERP. It reads the books; it does not keep them.
- Multi-currency. Everything is INR, which fits here.

## The honest pilot (KH-3)
One to three running government water or waste projects, one entity (KIPL standalone), read-only, 14 days. Their ERP or Tally will feed, read-only, built during the pilot. No adapter for their system exists yet and none is claimed. Output: the bill-level picture the rating reports cannot give (which department, which bill, whose desk, since when) for those projects only, plus a priced lever ranking and tickets on the leading waits.

## NEVER-CLAIM list
1. That Crestline connects to their ERP or Tally today, or names their system. No ERP is known.
2. Any figure from their books before the pilot. Every number in the booklet is CARE's or computed from CARE's.
3. Interest saved, a financing rate, or "carry" in rupees.
4. A saving that is a promise, a target, or a sum of overlapping rows.
5. Any rupee figure for gross current asset days (calc/notes.md: never printed).
6. Paying vendors or subcontractors later as a source of cash.
7. Collecting faster than a client's contract allows, or releasing a deposit before its milestone.
8. Which state, department or project is slow. That is exactly what the pilot finds; the rating reports do not say.
9. A process map screen. It was removed; stage waits and the cash cycle remain.
10. Hosting location, certifications, encryption schemes or any security claim beyond read-only, invite only and company domains.
11. Our demo environment shown as their data, or a demo figure beside theirs.
12. Anything listed in sensitive-garvis.md or under KEPT OUT in README.md.
13. That Crestline improves a credit rating.
14. That CARE's inventory period IS unbilled work. CARE ties the FY25 rise to unbilled revenue; it never says how much of the period is unbilled.
15. The FY23 operating cycle as a signed number. It is "below zero", in words.

## Screens that exist today, and the fields each needs
Field names are generic; on Tally they map to vouchers, ledger groups, bill-wise details and cost centres (one cost centre per project). All read-only.

| Screen | Answers | Fields needed from their ERP or Tally |
|---|---|---|
| Ask Crestline (company and project) | The morning brief; any question over the figures below | Nothing extra: reads the evidence of every screen below |
| Projects / Portfolio Overview | Capital held per project, comparison on each project's gap to its own terms | Project master: id, name, state, client, contract value, payment term, certification window where the contract states one |
| Project Overview | Contract to cash waterfall, stage waits, value state map | RA bill register: bill no, project, work executed and measured dates, submitted date, certified date and amount, deductions (retention, deposit, advance recovery), invoice no and date |
| O2C (Cash In) and Client | Which bills wait for certification or payment, whose wait it is, when it lands | As above plus receipts: date, amount, bill reference; due date per invoice |
| Clients | Each department's behaviour across sites | Client master with department and state; same bill and receipt data |
| Working Capital (project and company) | Cash cycle, simulator, ranked levers, accrued and paid bases | Trial balance by month (debtors, retention, unbilled work, stock, creditors, customer and vendor advances); opening balances; stock receipts and issues |
| P2P (Cash Out) and Vendors | Payment timing against each vendor's own due date | Purchase orders, goods receipts, supplier and subcontractor bills, payments; vendor master with agreed terms and MSME flag |
| Alerts & Tickets / Performance | Commitments, owners, re-measured results | People: name, desk, company e-mail (prefills owners; automated mail stays off until switched on) |
| Settings | What each source can and cannot supply | Read from the connection's own capability probe |
