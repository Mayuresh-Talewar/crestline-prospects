# Thermax Limited: solutions and savings (TH-3)

Every savings figure here comes from `calc/thermax-savings-output.txt` (the app's own `simulate` and `priceLevers`, run on Thermax's published figures). Nothing else is a savings number.

## The ground rules for this company
- **Scope:** Industrial Infra only. Savings are never stated on consolidated totals or any other segment (Garvis TH-2, TH-3).
- **Value of a day:** Industrial Infra segment revenue FY26 Rs 4,348.05 cr (AR26 p310 to p311, consolidated segment note, filed NSE 03 Jul 2026, AR26 vintage) / 365 = **Rs 11.91 cr**. Footnote: the Q1 FY27 results (NSE 30 Jul 2026) recast the segment to Rs 4,088.34 cr when Bioenergy moved out, which would make a day Rs 11.20 cr. The two are never mixed. Segment revenue as note 33 prints it, before Rs 5.20 cr of inter-segment sales.
- **Scenarios:** (a) a 10-day step, **Rs 119 cr released once** (calc: 119.12); (b) a 30-day step, **Rs 357 cr released once** (calc: 357.37). No target scenario: Thermax has stated no working capital or receivable days target (depth.md section 2). No contract-terms scenario: no project terms are published. Rows overlap and are never added.
- **Interest:** none printed. The group is "net nil debt" (CRISIL, 19 Jan 2026) and its disclosed rates sit on small facilities, so cash released does not map to a loan repaid.
- **Conservative:** receivables include GST and segment revenue does not, so a day of receivables is worth more cash than a day of revenue.
- **Time saved** is days out of each wait. Management hours are described, never numbered.
- **Pilot:** two to three domestic INR Industrial Infra projects in ONE entity (Thermax Limited or Thermax Babcock & Wilcox Energy Solutions, the client's choice), read-only, 14 days. The ERP is named only as SAP (Thermax Limited, AR FY24); no version is stated. It will feed, read-only, built during the pilot. Crestline does not connect to it today. If the pilot entity is Thermax Babcock & Wilcox Energy Solutions, its accounting system is not named in any filing and is confirmed with Thermax before the pilot starts.
- **Rule 13 chart convention (all five):** every problem chart has TWO panels side by side, each with its own axis and its own basis label. LEFT, "Today": solid bars from the filings, labelled with their basis (consolidated, or Industrial Infra segment for Problem 5), page and AR26 vintage. RIGHT, a separate boxed callout titled "Value of days in the Industrial Infra segment (segment revenue / 365)", with its own axis Rs 0 to 400 cr and two hollow bars with a dashed outline: "10 days: Rs 119 cr, released once" at 119.12 and "30 days: Rs 357 cr, released once" at 357.37 (calc output only). Under the callout: "Scenario, not a forecast. The two bars are alternatives, not a sum. Segment basis, AR26 p310 to p311; one day = Rs 11.91 cr." Under the left panel, on Problems 1 to 4: "Consolidated. The scenario at right is not taken out of these balances." No scenario bar ever shares an axis, a gridline or a baseline with a filed bar.

---

## Problem 1. Rs 377 cr more than a year past due (consolidated)

**Crestline screen (true today):** project **O2C** and **Client**. Every RA or milestone bill is rebuilt from the event trail and aged against its OWN due date, never a house average. Retention sits on its own ledger with its release milestone, so "past due" retention is told apart from an unpaid bill and from a disputed one. Each old bill carries a rupee figure, its age, and whose act ends the wait (the client's certification or payment, or a document still owed by our own desk). Across the two or three pilot projects, the portfolio **Clients** screen shows each client's certification and payment behaviour.

**Chart, today and with Crestline:**
- Left panel, Rs crore, axis 0 to 400. Solid: "More than one year past due, consolidated": FY25 335.56, FY26 377.27 (AR26 p256, AR26 vintage).
- Right panel: the segment callout as specified in the ground rules (10 days Rs 119 cr / 30 days Rs 357 cr, released once).

**Days:** 10 or 30 days out of the wait between a bill falling due and the cash arriving.
**Cash released once:** Rs 119 cr (10 days) or Rs 357 cr (30 days). Alternatives, not a sum.
**ERP data needed:** billing documents with their own due dates; certification dates and certified amounts; receipts; the retention ledger with release milestones; claims; the user and department on each event, flagged internal or external.

---

## Problem 2. Operating cash flow halved, retention and lower advances named as the reason

**Crestline screen (true today):** project **Working Capital**. The cash movement panel puts collections against payments month by month and reports the deepest point the cumulative position reached, not just the year end. The **accrued and paid bases** sit beside the ledger figure, so the cash the business actually laid out on a project is shown next to the position its documents add up to. **Overview**'s contract to cash waterfall shows where contract value stops becoming cash on each project, including retention and advance recovery deducted at billing.

**Chart, today and with Crestline:**
- Left panel, Rs crore, axis 0 to 1,200. Solid: "Net cash from operating activities, consolidated": FY25 1,079.79, FY26 541.55 (AR26 p228, AR26 vintage).
- Right panel: the segment callout as specified in the ground rules (10 days Rs 119 cr / 30 days Rs 357 cr, released once). Under the callout: "one-off cash, not an annual flow".

**Days:** 10 or 30 days out of the collection wait.
**Cash released once:** Rs 119 cr or Rs 357 cr.
**ERP data needed:** receipt and payment events with dates and amounts; the retention ledger with release milestones; customer advances with their receipt dates and recovery per bill; a project trial balance with opening figures.

---

## Problem 3. Contract assets up 21%, retention and unbilled, mainly in TBWES

**Crestline screen (true today):** project **Overview** and **O2C**. Stage waits on each milestone: executed, measured, submitted, certified, invoiced. The value state map sums to the contract, so unbilled work and retention are each a named block. Every wait is owned by whoever makes the act that ends it: measuring, preparing and submitting are Thermax's own desks; certifying and paying are the client's. "Ours to fix" is never mixed with "needs the client". The **cycle simulator** prices the certification leg ("Built, waiting to be certified") at the measured daily rate.

**Chart, today and with Crestline:**
- Left panel, Rs crore, axis 0 to 800. Solid: "Contract assets, net, consolidated": FY25 640.56, FY26 773.08 (AR26 p256 and p289, AR26 vintage).
- Right panel: the segment callout as specified in the ground rules (10 days Rs 119 cr / 30 days Rs 357 cr, released once), labelled "on the wait to certify".

**Days:** 10 or 30 days out of the wait from work done to bill certified.
**Cash released once:** Rs 119 cr or Rs 357 cr (calc, certification leg). The same rupees as Problems 1 and 2 because only one daily rate is published for the segment; these are the same scenarios on a different wait, not extra money.
**ERP data needed:** the milestone schedule and contract value; executed and measured dates; bill submission, certification and invoice events with amounts; retention and advance recovery deducted per bill; the contract's certification window.

---

## Problem 4. Thermax's CFO expects the overdues to be worked down "over the next couple of quarters"

**Crestline screen (true today):** **Alerts & Tickets**, with **Ask Crestline** and **Performance**. Each overdue bill can become a ticket with an owner, a due date, and the baseline and target fixed at the moment it is raised, so "improved" cannot be redefined later. An automatic auditor re-measures the same figure from fresh source data and closes the ticket only on the number: "Closed, verified" or "Closed, no change". The morning brief on Ask Crestline opens with what moved and what needs attention. Performance calls a movement Measured only when a verified ticket stands behind it, and Estimated when the figure moved but nothing was verified. That turns a two-quarter intention into a weekly, bill by bill view.

**Chart, today and with Crestline:**
- Left panel, Rs crore, axis 0 to 1,500. Solid: "Past due receivables, consolidated": FY25 1,434.88, FY26 1,443.42 (AR26 p256, AR26 vintage).
- A third slot, outline only and no number: "30 Sep 2026: not yet published". Nothing is drawn in it.
- Right panel: the segment callout as specified in the ground rules (10 days Rs 119 cr / 30 days Rs 357 cr, released once).

**Days:** 10 or 30 days out of the collection wait.
**Cash released once:** Rs 119 cr or Rs 357 cr.
**ERP data needed:** the same billing, certification and receipt events as Problem 1, with the user and department on each event, so every ticket names a desk. Automated reminder mails stay off unless Thermax turns them on.

---

## Problem 5. Segment receivables are not published, so nobody outside can see which projects hold them

**Crestline screen (true today):** the portfolio **Projects** and **Working Capital** screens across the two or three pilot projects only: each project's capital held, its gap to its OWN contract terms, and the release opportunity priced per project. **Ask Crestline** answers "which job is holding the most capital?" by comparing projects on their gap to their own terms, never on raw figures. Coverage is the pilot's projects in one entity; it is not the segment, the group or the consolidated balance sheet.

**Chart, today and with Crestline:**
- Left panel, Rs crore, axis 0 to 2,500. Solid: "Industrial Infra segment assets": FY25 2,491.09, FY26 2,490.28; beside each, "segment liabilities": FY25 2,353.60, FY26 2,330.16 (AR26 p310 to p311, AR26 vintage).
- Right panel: the segment callout as specified in the ground rules (10 days Rs 119 cr / 30 days Rs 357 cr, released once).
- Footnote: "What the segment's assets are made of (receivables, contract assets, retention) is not published."
- Note: the day steps are measured on each gross wait (bills waiting to be certified or paid), which sits inside the Rs 2,490.28 cr of segment assets. They are not measured against the segment's net figure (Rs 160.12 cr), which is what remains after customer advances.

**Days:** 10 or 30 days out of whichever wait the pilot measures as largest.
**Cash released once:** Rs 119 cr or Rs 357 cr.
**ERP data needed:** everything above, keyed by project (WBS), plus each project's contract certification window and payment term so every gap is judged against that contract's own terms.

---

## What Crestline does not claim here
It does not replace SAP, controlling, treasury or project systems. It does not cover manufacturing, chemicals, service, foreign currency projects, subsidiaries outside the pilot entity, or consolidation. It does not say Thermax's finance is weak; the filings say the opposite. Paying vendors later is never shown as a saving (the calculator's payables guard proves the app will not show it).
