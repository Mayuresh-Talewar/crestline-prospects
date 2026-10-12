# KPIL: solutions and savings, KP-3

Kalpataru Projects International Limited. Prepared 8 Oct 2026. Basis: STANDALONE, AR FY26 filed 22 Jun 2026. Rs = INR crore.
Every figure below is copied from `calc/kalpataru-savings.output.txt`, produced by the Crestline app's own pure functions (`simulate`, `leversFor`, `toTerms` from `lib/finance/cycle-simulation`, `valueOfADay` from `lib/finance/working-capital-cycle`, `priceLevers` from `lib/insights/levers`). Asserts held on the clean run and each one failed when broken on purpose.

## The calculator in one table

Per-day value: standalone FY26 revenue Rs 23,210.06 Cr / 365 = **Rs 63.59 Cr a day**. One day held is worth Rs 2.54 Cr to Rs 6.36 Cr a year in interest, at the 4% to 10% the company discloses for working-capital facilities (AR FY26 Note 18.1 p.308). Cash counted for interest is capped at the working-capital facilities drawn, Rs 1,411.51 Cr (AR FY26 Note 18(ii), p.308), because the 4% to 10% applies to those facilities only. The 30-day step releases more than that, so its interest is counted on Rs 1,411.51 Cr.

| Scenario | Days | Cash released once | Interest a year, at the 4% to 10% the company discloses for working-capital facilities |
|---|---|---|---|
| (a) A 10-day step | 10 | Rs 635.89 Cr | Rs 25.44 Cr to Rs 63.59 Cr |
| (b) A 30-day step | 30 | Rs 1,907.68 Cr | Rs 56.46 Cr to Rs 141.15 Cr (counted on the Rs 1,411.51 Cr of working-capital facilities drawn) |
| (c) Undo the Q1 FY27 slip, standalone NWC 94 back to 90 | 4 | Rs 254.36 Cr | Rs 10.17 Cr to Rs 25.44 Cr |
| (d) Their own FY26 target, "under 100 days" | MET at 90 | not a savings scenario | not applicable |

Rules on this table:
- Scenarios, not forecasts. The rows overlap and are never added together.
- No FY27 target exists, so none is used. No contract payment or certification term is published, so there is no "to terms" scenario (`toTerms` returns nothing to move).
- Interest is saved only if the released cash repays borrowings. The 4% to 10% range is the one disclosed for working-capital facilities; it is never narrowed to a single rate.
- Revenue per day excludes GST while receivables include it, so the cash per day is on the conservative side.
- Paying vendors later is never a saving. The calculator holds the payables leg at today's figure (no published vendor terms); asking it for 30 more days releases Rs 0.00.

Pilot scope: two to three domestic INR projects in one segment, Buildings & Factories or Water, on the standalone company. SAP S/4HANA (named in AR FY26 p.131) will feed Crestline, read-only, through an adapter built during the pilot. Not claimed anywhere: foreign currency, subsidiaries, joint ventures, the whole order book, plant inventory, or a live SAP connection today.

---

## Problem 1. Receivables plus unbilled work at 235.7 days

**Crestline screens (all exist today).** Project Overview: the contract-to-cash waterfall and the value-state map, which show where contract value stops becoming cash. Project O2C: every RA bill rebuilt from its events (measured, prepared, reviewed, submitted, certified, invoiced, collected), with the wait at each step and the bills sitting on it now. Each wait is assigned by the act that ends it: measure, prepare, review, submit and invoice are KPIL's; acknowledge, certify and collect are the client's. Project Working Capital: the cash-cycle diagram, the simulator and the ranked levers. Company Working Capital: release opportunity and capital ageing by project.

**Chart, today and with Crestline.** Vertical bars, one axis in days of revenue from 0 to 280, standalone, our formula:
- Today (solid): FY23 255.1, FY24 252.8, FY25 260.9, FY26 235.7.
- With Crestline (hollow, dashed outline, beside FY26, same axis): 225.7 (a, 10-day step) and 205.7 (b, 30-day step).
- Label on the hollow bars: "10-day step: Rs 635.89 Cr released once; Rs 25.44 Cr to Rs 63.59 Cr a year at the 4% to 10% the company discloses for working-capital facilities." and "30-day step: Rs 1,907.68 Cr released once; Rs 56.46 Cr to Rs 141.15 Cr a year, same range, counted on the Rs 1,411.51 Cr of working-capital facilities drawn." Footer: "Scenario, not a forecast."
- Never on this chart: the company's NWC days (different definition).

**Days, cash, interest.** 10 days: Rs 635.89 Cr once, Rs 25.44 Cr to Rs 63.59 Cr a year. 30 days: Rs 1,907.68 Cr once, Rs 56.46 Cr to Rs 141.15 Cr a year (interest counted on the Rs 1,411.51 Cr of working-capital facilities drawn). Both at the 4% to 10% the company discloses for working-capital facilities. Today's split: contract assets 111.4 days (Rs 7,083.61 Cr), receivables 124.3 days (Rs 7,905.68 Cr). The calculator gives the same cash whichever of the two legs the days come out of.

**ERP data needed (SAP S/4HANA, read-only, built during the pilot).** Per pilot project: the RA bill trail with a dated event for each step (measurement, bill prepared, internal review, submitted, client acknowledgement, certified with amount and deductions, invoiced, collected); the contract's certification window and payment term where the system holds them; the retention ledger; project-level trial-balance lines for receivables and contract assets, so the two routes can be reconciled. Which SAP objects hold these is not in any filing and is confirmed at pilot start.

---

## Problem 2. Receivables more than a year past due at 16.1%

**Crestline screens (all exist today).** Project Client screen: where the client's cash is stuck, whose move it is, and when it lands. O2C receivables aged on each invoice's OWN due date, never a house average. The retention ledger, kept apart from overdue money. Ask Crestline "why" questions, answered against each figure's own contract target. Raise ticket: each named invoice becomes a commitment with a fixed baseline and target, and the auditor closes it only when fresh source data shows the figure moved.

**Chart, today and with Crestline.** Vertical bars, one axis in Rs Cr from 0 to 1,400, standalone, gross ageing by due date:
- Today (solid), with the share printed above each bar: FY24 767.91 (13.5%), FY25 961.06 (12.9%), FY26 1,311.12 (16.1%).
- With Crestline (hollow, dashed outline, beside FY26, same axis): 675.23 (9.0%), labelled "If the 10-day step came from this bucket: Rs 635.89 Cr released once; Rs 25.44 Cr to Rs 63.59 Cr a year at the 4% to 10% the company discloses for working-capital facilities. Scenario, not a forecast."
- The 30-day step is not drawn: it is larger than the bucket.
- Never on this chart: management's Water figure of about Rs 1,600 Cr (Q4 FY26 call, 15 May 2026, p.10). It is quoted with the problems as context, with its date and page, and is not a calculator input or a savings claim.

**Days, cash, interest.** As scenario (a): 10 days, Rs 635.89 Cr once, Rs 25.44 Cr to Rs 63.59 Cr a year at the 4% to 10% the company discloses for working-capital facilities.

**ERP data needed.** Per pilot project: open customer invoices with invoice date, due date, amount and receipt history; the client master (so each client's behaviour can be read across the pilot's sites); retention held and its release milestone; any dispute flag the system records.

---

## Problem 3. Operating cash flow down while earnings rose

**Crestline screens (all exist today).** The cash-movement panel on project and company Working Capital: collections against payments month by month, the cumulative position, and the PEAK FUNDING NEED, the deepest the cumulative went, which is the facility the period actually needed. The accrued and paid bases beside the ledger's working capital, with the bridge between them stated in steps.

**Chart, today and with Crestline.** Paired vertical bars, one axis in Rs Cr from 0 to 2,100, standalone:
- Today (solid): operating cash flow FY23 559.38, FY24 713.61, FY25 837.07, FY26 764.46, each beside core EBITDA 1,161.54, 1,365.25, 1,586.99, 2,028.68; ratio printed above each pair: 0.48, 0.52, 0.53, 0.38.
- With Crestline (hollow, dashed outline, beside FY26, same axis): operating cash flow 1,400.35, ratio 0.69, labelled "One-off, if the 10-day step were released inside the year: Rs 635.89 Cr; Rs 25.44 Cr to Rs 63.59 Cr a year at the 4% to 10% the company discloses for working-capital facilities. Scenario, not a forecast."

**Days, cash, interest.** As scenario (a): 10 days, Rs 635.89 Cr once (a release happens once; it does not repeat every year), Rs 25.44 Cr to Rs 63.59 Cr a year at the 4% to 10% the company discloses for working-capital facilities.

**ERP data needed.** Per pilot project: dated customer receipts and supplier, subcontract and advance payments (the cash that actually moved), and the same RA bill and purchase-order trails as problems 1 and 5.

---

## Problem 4. Four days back in Q1 FY27

**Crestline screens (all exist today).** Company Working Capital: "why did working capital move", measured like-for-like on the projects present at both dates, and the trend. Alerts & Tickets with the auditor that re-measures on each sync and records news, not heartbeats. Performance, which counts only verified closes.

**Chart, today and with Crestline.** Vertical bars at quarter ends, one axis in days from 0 to 125, the company's own standalone NWC days:
- Today (solid): Q1 FY26 106, Q4 FY26 90, Q1 FY27 94.
- A dashed horizontal rule at 100, labelled "FY26 target: under 100 days. Met at 90."
- With Crestline (hollow, dashed outline, beside Q1 FY27, same axis): 90, labelled "Back to 90 days: 4 days, Rs 254.36 Cr released once; Rs 10.17 Cr to Rs 25.44 Cr a year at the 4% to 10% the company discloses for working-capital facilities. Scenario, not a forecast."
- Year ends FY22 to FY26 (121, 96, 99, 94, 90) go in a separate strip, never mixed with the quarter bars.

**Days, cash, interest.** Scenario (c): 4 days, Rs 254.36 Cr once, Rs 10.17 Cr to Rs 25.44 Cr a year at the 4% to 10% the company discloses for working-capital facilities. Scenario (d), the FY26 target of "under 100 days", was met at 90 and is not a gap. No FY27 target exists and none is assumed. The company's NWC definition is not published; a day is valued at revenue per day.

**ERP data needed.** Monthly project-level balances (receivables, contract assets, stock, payables, advances) from the trial balance, so a quarter's move can be split by balance and by project.

---

## Problem 5. MSME payables up 62% in a year

**Crestline screens (all exist today).** Project and company Vendors: payment timing against each vendor's OWN due date, with micro and small suppliers judged against the statutory 45 days. P2P timing chart with the due date at the centre: early is capital paid away too soon, late is risk. Alert owner, which names the recipient before any mail is sent.

**Chart, today and with Crestline.** Vertical bars, one axis in Rs Cr from 0 to 450, standalone balance sheet:
- Today (solid): FY23 150.91, FY24 222.45, FY25 266.59, FY26 432.39, share of trade payables printed above (3.2%, 4.2%, 4.3%, 6.6%). The FY26 bar is split: 391.37 not yet due, 41.02 past due.
- With Crestline (hollow, dashed outline on the 41.02 segment only): "Paid on its due date: Rs 41.02 Cr of cash used, never a saving. Scenario, not a forecast."
- No interest figure: this move consumes cash.

**Days, cash, interest.** Days: not computable from the filings (due dates per invoice are not published). Cash: Rs 41.02 Cr USED, not released. Interest: none printed.

**ERP data needed.** Per pilot project: purchase orders, goods receipts, supplier invoices with due dates, payments, and the vendor master's MSME flag.

---

## What Crestline does not claim here

Nothing on these pages says Crestline is connected to KPIL's systems today, covers the whole book, the subsidiaries, joint ventures, foreign-currency projects or the tower plant, or knows which projects hold the balances above. Those answers are what the pilot measures, on two to three projects, once the read-only SAP S/4HANA adapter is built.
