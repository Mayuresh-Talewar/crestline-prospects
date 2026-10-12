# Transrail Lighting: what Crestline models and what it does not (TR-2, 2026-10-09)

## What Crestline is
Working-capital intelligence for EPC companies. It sits above the ERP, reads without writing, and answers one question: where is the money trapped, for how long, why, and who can release it. It rebuilds each bill and each order from the ERP's own event trail, prices every wait in rupees and days, and names the desk.

## What it models for Transrail
- O2C: work measured, bill prepared, bill submitted, acknowledged, certified, invoiced, collected. Ours: measure, prepare, review, submit, invoice. The client's: acknowledge, certify, pay.
- P2P: order, goods received, supplier invoice, matching, payment against each vendor's own due date.
- Working capital: receivables, contract assets, retention, advances, stock held on a contract, payables.
- Cycle simulator and ranked levers, with sliders that stop at the contract's own terms.
- Tickets: a finding becomes a commitment with a baseline, a target, an owner and an audit on the same figure.

## What it does not model
Not an ERP, not accounting, not project management, not tax filing. It does not price plant or factory inventory (tower and conductor manufacturing): project cash only. It does not hold multi-currency; international figures reach it in INR. It does not judge a company against peers.

## Pilot (proposed)
One entity (the listed company), one segment (one transmission contract, domestic), read-only, 14 days. Crestline will feed from SAP RISE, read-only, built during the pilot. Nothing is connected today.

## NEVER-CLAIM list
1. Never say Crestline is connected to, or reads, their systems today.
2. Never say what their ERP covers (which entities, branches or modules) beyond what the annual report states at AR PDF p.33 and p.34.
3. Never print a figure beside management's 81 or 85 working-capital days that is computed on another definition; the definition is not printed anywhere we read.
4. Never promise savings, a forecast or a result. Scenarios only, hollow and dashed, labelled "Scenario, not a forecast".
5. Never add rows: a 10 day step out of receivables and the same step out of contract assets overlap.
6. Never show paying vendors later as releasing cash.
7. Never claim interest saved unless the released cash repays the cash credit and WCDL; only at the disclosed 10.31% and only up to the 252.49 drawn at 31 Mar 2026.
8. Never put Crestline's demo data, or any other company's figure, beside theirs.
9. Never mix international and domestic figures on one chart, never convert currency ourselves.
10. Never number management hours.
11. Never put a certification, hosting location or encryption claim about Crestline in the booklet.
12. Never frame management's words as a missed promise.
13. Never assign the client's acts (acknowledge, certify, pay) to Transrail.

## Screens and the fields each needs (all true today; fed from the pilot)
| Screen | Answers | Fields needed from the source |
|---|---|---|
| Ask Crestline (project) | "Which bills are stuck, whose move is it?" | all below, indexed |
| Overview | Contract to cash waterfall, where value stops becoming cash | contract value, work measured, billed, certified, collected, retention held, advance recovered |
| O2C | Bills by stage, certification and payment waits | bill id, dates of measure, prepare, submit, acknowledge, certify, invoice, collect; amounts; desk and person |
| Client | One client's certification and payment behaviour, whose delay | client, contract payment term, certification window, bill dates, receipts |
| Working Capital | Position, cash cycle diagram, simulator, ranked levers | receivable, contract asset, retention, advances, stock on contract, payable ledgers; revenue and invoiced per day |
| P2P and Vendors | Payment timing against each vendor's own terms | PO, goods receipt, supplier invoice, due date, payment date, vendor terms |
| Alerts and Tickets | Commitments, owner, audit on the same figure | owner mailbox, due date |
Missing fields read NA, never zero.
