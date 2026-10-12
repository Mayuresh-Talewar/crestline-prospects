# Thermax: does Crestline fit, and what pilot is honest (TH-2)

Basis (updated to the Garvis TH-3 ruling): ONE entity, Thermax Limited or Thermax Babcock & Wilcox Energy Solutions (TBWES), the client's choice; Industrial Infra projects only. No filing figures here (TH-1 owns data). Product truth checked in the app repo: CLAUDE.md, lib/connectors/types.ts, lib/finance/cycle-simulation.ts, lib/insights/levers.ts.

## 1. What Crestline models, bluntly
**Models today (per project, INR):** O2C on milestone and RA billing (executed, measured, submitted, certified, invoiced, collected); certification waits and certified short; retention held and released; customer and vendor advances; claims; P2P on project orders (PO, goods receipt, supplier invoice, match, payment) timed against each vendor's own due date; subcontract bills; stock on site where issues are recorded; the cash cycle, simulator and ranked levers on four measured rates.
**Does NOT model:** product manufacturing (plant inventory, production WIP, BOM costing, standard cost variances); the Chemical segment; Green Solutions as a product or BOO business; service, AMC and spares revenue; multi currency (rows carry a currency code, but nothing converts or nets FX, and the base is INR); multi entity consolidation and the overseas subsidiaries (a company code is stored, nothing consolidates); treasury, borrowings, BG limits and forex hedging; tax. Plant and shop floor stock would distort DIO, so it is out of scope, not NA.

## 2. Honest pilot scope (scope card)
Two to three domestic, INR, Industrial Infra projects (LSTK or milestone billed) in ONE entity: Thermax Limited or TBWES, the client's choice. Read only, 14 days. The ERP is named only as SAP (Thermax Limited, AR FY24, AR24 p292 note 44A); no version is stated. It will feed, read-only, built during the pilot: no adapter exists today; only the demo adapter ships. If the pilot entity is TBWES, its accounting system is not named in any filing and is confirmed with Thermax before the pilot starts. Day 1 to 4 extract and field map, 5 to 9 adapter and capability probe, 10 to 14 screens, levers and a review with finance. Anything the extract cannot supply reads NA, by design.
**Excluded on the card:** Industrial Products, Chemical, Green Solutions, service and AMC; foreign currency projects and every entity other than the one chosen for the pilot; consolidation; plant inventory and production WIP; BG and treasury limits; any write back to SAP; automated mails (off unless the company turns them on); savings promises.

## 3. NEVER CLAIM (booklet)
- That Crestline "connects to" or "runs on" Thermax's SAP. Say "will feed, read-only, built during the pilot". The ERP is verified in a filing for Thermax Limited only: AR24 p292, note 44A, IT application "SAP" (as at FY24, filed NSE 08-Jul-2024). No version, and nothing for TBWES.
- That it covers the whole company, the group, the subsidiaries or the consolidated balance sheet.
- Multi currency, consolidation, manufacturing, chemicals, service or AMC analytics.
- That it replaces SAP, controlling, treasury or project systems, or that Thermax's finance is weak.
- Any savings figure on a segment other than Industrial Infra, or on consolidated numbers.
- Interest saved at a rate Thermax has not disclosed, or beyond the borrowing it applies to.
- Paying vendors later as a saving. ISO, hosting region or encryption not yet in place.
- Any Thermax process map, bottleneck or day count as if measured. Their stages may be drawn illustratively, unnumbered.

## 4. Screens that apply, and the fields they need
| Screen / chart | Fields SAP must supply (per project, WBS keyed) |
|---|---|
| Overview: contract to cash waterfall, stage waits, value state map | contract value, milestone schedule, executed/measured dates, bill submit, certify, invoice, receipt events with amounts, retention and advance recovery deducted per bill |
| O2C + Client: bills awaiting certification, ageing, retention, claims | billing documents with own due dates, certification date and certified amount, receipts, retention ledger with release milestones, claims, customer advances |
| P2P + Vendors: payment timing vs terms, early payment leakage, two clocks | PO date and value, vendor payment terms, GRN/delivery date, supplier invoice, match, payment date and amount, vendor advances, subcontract bills |
| Working capital: cash cycle diagram, simulator, Do this first | the above plus a project trial balance with opening figures; stock issues to site (else stock days read NA); contract certification window and payment term; a disclosed financing rate |
| Ask Crestline, Alerts and Tickets, Performance | the same events with user and department (internal or external flag) so every wait has an owner |
All events in the universal shape: case, activity, timestamp, person, department, amount (as a string), system, attributes.

## 5. Where Crestline adds nothing, and the one real angle
A mature SAP finance team already has receivable ageing, vendor ageing, payment runs, project costing, budget vs actual, consolidation and treasury reporting. Crestline does not beat any of those, and the booklet must not imply it does. A ledger balance, a ratio or an ageing bucket repeated on a nicer screen is not a reason to buy.
**The real angle:** the ERP records what happened, not how long each step sat or whose desk it sat on. Per Industrial Infra project, Crestline rebuilds each milestone bill and each order from the event trail, measures every wait in days, prices it in rupees at the project's own measured daily rate, says whether it is ours (measuring, submitting, invoicing) or the client's (certifying, paying), ranks the moves by rupee days against this contract's own terms, and closes a ticket only when the figure is measured again from fresh data. That is time x money and ownership, project by project. It is a narrow, true claim.

## 6. Internal note, demo environment, never printed
Any demo the client sees runs on our demo source, a civil EPC simulator. It is never shown as Thermax, never as a client, and its figures never sit beside Thermax's.
