# Patel Infrastructure Limited: slots-unified.md (ticket PI-S23, 16-page pack)

Internal notes (never printed, never pasted into the prompt):
- Basis everywhere: STANDALONE, Annual Report for FY25 (year to 31 March 2025, audit report signed 21 July 2025) and Annual Report for FY24 (signed 4 September 2024), Rs lakh as printed, shown in Rs Cr (lakh ÷ 100), 365 days, year-end balances. Every figure is traced in qa-report.md.
- Calc: calc\pi-savings.ts, full output calc\pi-savings-output.txt. Revenue per day 3,576.65 ÷ 365 = 9.799 Cr. Materials per day 1,277.6 ÷ 365 = 3.500 Cr. One combined run. Interest only at the disclosed 12.75% on the NCDs, cash counted capped at 200 Cr.
- Process map: python -I _shared\stage_estimate.py --dso 32.3 --cad 67.1 (output kept in qa-report.md). Estimates are never priced.
- Charts used: The cash cycle; Pressure on the cycle; Cash movement (annual); How these four move together; Process map; With Crestline ten days less / thirty days less.
- Kept out by ruling: rating and its change, limits and utilisation, borrowings total, term loan rates, subcontract share, small supplier dues, agency day measures, the 2018 offer document, group guarantees, related parties, Patel Engineering, Patel KNR.
- No logo for this company. Nothing is copied to assets\.
- Letter dated 12 Oct 2026. Tagline: "Know where your money is waiting, and who can release it."
- p13 has no figures. p8 stage values are estimates, tagged, as the client ordered on 2026-10-12.

## Reader table

Edition A
Name: Mr. Arvind V. Patel
Title: Managing Director
Salutation: Dear Mr. Patel,
> Mr. Arvind V. Patel
> Managing Director
> Patel Infrastructure Limited
> MZ Corporate, 401, 501 & 601 (4th, 5th & 6th Floor), Ashok Vatika, Double Road Corner, Iskon Ambali Road, Bopal, Ahmedabad 380058, Gujarat
Letter text, printed:
> 12 October 2026
> Dear Mr. Patel,
> Patel Infrastructure has taken its revenue from operations from ₹1,983.80 Cr in FY23 to ₹3,576.65 Cr in FY25, and its cash cycle from 266.7 days to 193.2 days over the same two years. That is the work of a company that already manages its working capital closely.
> This booklet asks the next question, and answers it only from your published accounts. At 31 March 2025, built work waiting to be certified and billed stood at 67.1 days of revenue, ₹657.48 Cr, and project materials at 132.7 days, ₹464.31 Cr. The accounts cannot say which certificates and which deliveries hold those days.
> For scale, ten days less on the wait to be certified and billed is ₹97.99 Cr of cash, released once. That is a scenario, not a forecast, and it is Crestline's arithmetic on your own accounts.
> Once connected, Crestline reads what your SAP S/4HANA already records and shows which bill, which site and which desk. It is read-only, and every change stays with your team. We would value thirty minutes with you.
> Yours sincerely,
> Rajat Kate
> Managing Director, Crestline Intelligence Private Limited

Edition B
Name: Mr. Nikunj Shah
Title: Chief Financial Officer
Salutation: Dear Mr. Shah,
> Mr. Nikunj Shah
> Chief Financial Officer
> Patel Infrastructure Limited
> MZ Corporate, 401, 501 & 601 (4th, 5th & 6th Floor), Ashok Vatika, Double Road Corner, Iskon Ambali Road, Bopal, Ahmedabad 380058, Gujarat
Letter text, printed:
> 12 October 2026
> Dear Mr. Shah,
> The audited accounts for FY25 show a cash cycle of 193.2 days, down from 226.4 days in FY24 and 266.7 days in FY23. The four legs behind it, at 31 March 2025, are 132.7 days of project materials, 67.1 days of built work waiting to be certified and billed, 32.3 days of receivables, and 38.9 days of vendor credit.
> This booklet works only from those published accounts. It does not claim to know which certificates and which deliveries hold the next days. That is what the bill-level clock in your SAP S/4HANA would show.
> For scale, ten days less on the wait to be certified and billed is ₹97.99 Cr of cash, released once, and ten days less on project materials is ₹35.00 Cr. Each is a scenario, not a forecast, and the rows overlap and are never added.
> Once connected, Crestline reads what your SAP S/4HANA already records. It is read-only, and every change stays with your team. We would value thirty minutes with you.
> Yours sincerely,
> Rajat Kate
> Managing Director, Crestline Intelligence Private Limited

## Keys

Printed copy is every line that starts with ">". Every other line is an instruction to you and is never printed. Each page below lists its printed lines in order. In a printed line, the labels KICKER:, HEADLINE:, Footnote:, Footer: and Vertical tagline: only tell you where the text goes; print the text after the label.
FY25 means the year to 31 March 2025, FY24 the year to 31 March 2024 and FY23 the year to 31 March 2023.
Every figure is Patel Infrastructure Limited, standalone, from its published Annual Reports, in ₹ crore (₹ Cr), 365 days, year-end balances. A figure marked "Crestline's arithmetic" is computed on those accounts, and its formula is in the footnote of its page.

### Page 1 · Cover

> STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1
> Prepared for the addressee only. Please do not forward or copy.
> Working-capital review
> Patel Infrastructure Limited · October 2026
> ₹97.99 Cr of cash, released once, if built work waited ten days less to be certified and billed
> The arithmetic: 10 days × ₹9.799 Cr of revenue per day (₹3,576.65 Cr ÷ 365) = ₹97.99 Cr. Scenario, not a forecast.
> Once connected, Crestline rebuilds each bill from its own dates and shows how long the work has waited to be measured, submitted and certified, and whose move ends the wait.
> The longest waits are raised first as tickets, ours to fix where the step is ours and chased where it is the client's.
> PREPARED EXCLUSIVELY FOR
The reader's name and title come from the Reader table, per edition.
> DRAFTED BY
> Crestline Intelligence
> Rajat Kate
> Managing Director
> Know where your money is waiting, and who can release it.
> Footnote: Revenue from operations ₹3,576.65 Cr, Patel Infrastructure Limited, standalone, Annual Report for FY25, printed page 54. Cash is released once.

### Page 2 · Letter

> A LETTER
The date, the TO block, the salutation, the letter text and the signature are the Reader table's lines for that edition.
> FROM
> Crestline Intelligence Private Limited
> Pune, Maharashtra
> Footer: Strictly private · 2 / 16

### Page 3 · Chapter one

> KICKER: ONE · WHAT IS ALREADY BUILT
> HEADLINE: It begins with scale, and a system already live.
> Six facts from Patel Infrastructure's own Annual Reports and audited accounts, and one order book figure as CARE Ratings reports it. Every one of them is about what has been built.
> i · ₹1,983.80 Cr to ₹3,576.65 Cr · Revenue from operations, FY23 to FY25, with ₹2,950.74 Cr in FY24 · Annual Reports for FY24 and FY25, standalone
> ii · ₹62.02 Cr to ₹123.22 Cr · Profit after tax, FY23 to FY25, with ₹72.60 Cr in FY24 · Annual Reports for FY24 and FY25, standalone
> iii · 266.7 days to 193.2 days · The cash cycle, shorter at every year end, with 226.4 days in FY24 · Crestline's arithmetic on the audited accounts
> iv · SAP S/4HANA · "The Company has implemented SAP S/4 HANA V 1.4, which is live at the head office and project sites." · Patel Infrastructure Limited, Directors' Report, Annual Report for FY25, printed page 21
> v · Since 1972 · A construction company that, in FY25, also diversified into the renewable energy sector, with a focus on solar projects · Patel Infrastructure Limited, Directors' Report, Annual Report for FY25, printed page 13
> vi · ₹14,153 Cr · Order book at 31 December 2025 (roads 46%, renewable 35%), as CARE Ratings reports · CARE Ratings press release, 10 April 2026, page 2
> Everything above is built. The question here is about the days between work done and cash in the bank.
> Footnote: Revenue from operations and profit after tax: Annual Report for FY25, printed pages 54 (FY25, FY24) and Annual Report for FY24, printed page 62 (FY23). Cash cycle formula is on page 5.
> Footer: Strictly private · 3 / 16

### Page 4 · Chapter two

> KICKER: TWO · WHAT IS WAITING OUTSIDE
> HEADLINE: ₹973.67 Cr of work is still waiting to become cash.
> ₹973.67 Cr · built or billed, and not yet cash, at 31 March 2025
> 67.1 days · work done, waiting to be certified and billed · ₹657.48 Cr
> 32.3 days · bill raised, waiting to be paid · ₹316.19 Cr
> 99.4 days · end to end, 67.1 days plus 32.3 days
> ₹14.51 Cr · of receivables more than six months past their due date at 31 March 2025, against ₹14.02 Cr a year earlier
> ₹263.93 Cr · FY25 operating profit before working-capital changes (₹352.49 Cr) less cash generated from operations (₹88.56 Cr), which is 74.9% of that profit
> Footnote: ₹973.67 Cr = trade receivables ₹316.19 Cr + unbilled revenue (contract assets) ₹657.48 Cr, Crestline's arithmetic on the standalone accounts at 31 March 2025, Annual Report for FY25, printed pages 53 and 81. Days = balance ÷ revenue from operations ₹3,576.65 Cr × 365. Contract asset days is a Crestline analytical measure, not an accounting standard. Receivable ageing: Note 11.6, printed page 79, measured from the due date of payment. Cash flow: printed page 55.
> Footer: Strictly private · 4 / 16

### Page 5 · Chapter three

> KICKER: THREE · THE CASH CYCLE
> HEADLINE: The cycle has come down in two years. Here is where the days sit now.
> The cash cycle · Where the money sits, and who is holding it
> Position
Three year ends, FY23, FY24, FY25. Data:
> DIO · stock sitting (project materials): 192.1 days, 182.5 days, 132.7 days. Balance ₹325.31 Cr, ₹499.72 Cr, ₹464.31 Cr
> Built, waiting to be certified (contract asset days): 93.7 days, 88.6 days, 67.1 days. Balance ₹509.10 Cr, ₹716.33 Cr, ₹657.48 Cr
> DSO · waiting to be paid: 97.2 days, 22.0 days, 32.3 days. Balance ₹528.33 Cr, ₹178.02 Cr, ₹316.19 Cr
> DPO · vendor credit: 116.3 days, 66.7 days, 38.9 days. Balance ₹505.12 Cr, ₹441.70 Cr, ₹317.95 Cr
> The cash cycle: 266.7 days, 226.4 days, 193.2 days
> Vendor credit is never better when higher. It is shown, never moved, in every scenario on this page.
> Simulate
On the FY25 position. With Crestline:
> Certification, ten days less: 67.1 to 57.1 days. Cash cycle 193.2 to 183.2 days. ₹97.99 Cr released once.
> Certification, thirty days less: 67.1 to 37.1 days. Cash cycle 193.2 to 163.2 days. ₹293.97 Cr released once.
> Project materials, ten days less: 132.7 to 122.7 days. Cash cycle 193.2 to 183.2 days. ₹35.00 Cr released once.
> Project materials, thirty days less: 132.7 to 102.7 days. Cash cycle 193.2 to 163.2 days. ₹105.01 Cr released once.
> Collection, ten days less: 32.3 to 22.3 days. Cash cycle 193.2 to 183.2 days. ₹97.99 Cr released once.
> Scenario, not a forecast. Rows overlap and are never added.
> Once connected, Crestline rebuilds each bill from its own dates and shows how long the work has waited to be measured, submitted and certified, and whose move ends the wait.
> The longest waits are raised first as tickets, ours to fix where the step is ours and chased where it is the client's.
> Once connected, Crestline replays stock movements on their posting dates and shows what has sat on site unissued, by site and by value.
> It names the stock to draw down first, so cash stops waiting in material that is not yet in the work.
> Once connected, Crestline ages every unpaid invoice against its own due date and ranks them by money × days past term, naming the client and the desk.
> Each one becomes a ticket with an owner and a date, and the same figure is re-measured until the bill is paid.
> Footnote: Crestline's arithmetic on the standalone accounts, Annual Report for FY25 (printed pages 53, 54, 81, 98) and Annual Report for FY24 (printed pages 61, 62, 86, 99). DSO = trade receivables ÷ revenue from operations × 365. Contract asset days = unbilled revenue ÷ revenue from operations × 365. DIO = inventory ÷ material consumed × 365 (material consumed ₹1,277.57 Cr, ₹999.40 Cr, ₹618.10 Cr). DPO = trade payables ÷ construction expenses × 365 (₹2,980.47 Cr, ₹2,417.70 Cr, ₹1,585.05 Cr). Cash cycle = the four legs as printed, DIO + contract asset days + DSO − DPO. Value of a day: ₹9.799 Cr of revenue, ₹3.500 Cr of material consumed. No client payment term or certification window is published, so no scenario is taken to a term. Scenarios are Crestline's arithmetic from its simulator, not Patel Infrastructure's targets.
> Footer: Strictly private · 5 / 16 · Scenario on Patel Infrastructure's published figures, not a forecast.

### Page 6 · Chapter four

> KICKER: FOUR · WHAT ACTUALLY MOVED
> HEADLINE: What was earned, and what actually moved.
> Cash movement · What you committed to, what you earned, and what actually moved
Annual, from the cash flow statement. Data, FY23, FY24, FY25:
> Operating profit before working-capital changes: ₹196.74 Cr, ₹347.87 Cr, ₹352.49 Cr
> Cash generated from operations: outflow ₹176.85 Cr, inflow ₹214.47 Cr, inflow ₹88.56 Cr
> Net cash from operating activities, after tax: outflow ₹205.07 Cr, inflow ₹163.21 Cr, inflow ₹36.61 Cr
> Annual, from the cash flow statement.
> Footnote: Standalone cash flow statement, Annual Report for FY25, printed page 55 (FY25, FY24), and Annual Report for FY24, printed page 63 (FY23). Annual figures only.
> How these four move together
Data, year ends FY23, FY24, FY25:
> The cash cycle: 266.7 days, 226.4 days, 193.2 days
> DSO · waiting to be paid: 97.2 days, 22.0 days, 32.3 days
> DIO · stock sitting: 192.1 days, 182.5 days, 132.7 days
> Cash and cash equivalents: ₹22.99 Cr, ₹63.33 Cr, ₹8.99 Cr
With Crestline, on the FY25 cash cycle:
> Certification, ten days less: cash cycle 193.2 to 183.2 days, ₹97.99 Cr released once.
> Certification, thirty days less: cash cycle 193.2 to 163.2 days, ₹293.97 Cr released once.
> Scenario, not a forecast. Rows overlap and are never added.
> Once connected, Crestline rebuilds each bill from its own dates and shows how long the work has waited to be measured, submitted and certified, and whose move ends the wait.
> The longest waits are raised first as tickets, ours to fix where the step is ours and chased where it is the client's.
> Footnote: Cash and cash equivalents as the standalone balance sheet prints them, Annual Report for FY25, printed page 53, and Annual Report for FY24, printed page 61. Days are Crestline's arithmetic on the standalone accounts, formulas on page 5.
> Footer: Strictly private · 6 / 16 · Scenario on Patel Infrastructure's published figures, not a forecast.

### Page 7 · Chapter five: five lenses

> KICKER: FIVE · ENTER CRESTLINE
> HEADLINE: Where does project cash get stuck? Five lenses.
> Once connected, Crestline reads your SAP S/4HANA and shows which bills and retention are stuck, on which site, and how many crores. Here is each lens, and the Patel Infrastructure figure it would open up.
> 01 Working capital · WC · The cash a project eats before it pays you back. 193.2 days · The cash cycle at 31 March 2025, from 266.7 days at 31 March 2023
> 02 Order to cash · O2C · From work done on site to money in the bank. 99.4 days · 67.1 days waiting to be certified and billed, then 32.3 days waiting to be paid
> 03 Procure to pay · P2P · From a site's material request to the vendor getting paid. ₹317.95 Cr owed to suppliers · 38.9 days of construction expenses, with project materials held 132.7 days
> 04 Client · WHO PAYS SLOW · Which clients pay slow, and why. 32.3 days of revenue in receivables · ₹303.76 Cr of ₹318.27 Cr gross is within six months of its due date; the client payment term is not published
> 05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate. 38.9 days of vendor credit, one average · the credit each vendor agreed is not published
> Know where your money is waiting, and who can release it.
> READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS
> Footnote: Standalone, 365 days, year-end balances. Annual Report for FY25 printed pages 53, 54, 79, 98 and Annual Report for FY24 printed pages 61, 62, 99. Days are Crestline's arithmetic on the published accounts, formulas on page 5.
> Footer: Strictly private · 7 / 16 · Now, on Patel Infrastructure's published figures.

### Page 8 · Chapter six: the clock the ERP keeps

> KICKER: SIX · THE CLOCK THE ERP ALREADY KEEPS
> HEADLINE: Crestline reads the dates your ERP records
> It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait.
> CRESTLINE'S VIEWS · DRAWN ON PATEL INFRASTRUCTURE'S PUBLISHED FIGURES · NOTHING FROM YOUR ERP
> Process map · One bill, from work done to cash in the bank
Stages in this order, each with its owner, the days after that stage until the next, and its tag:
> JOINT MEASUREMENT · Patel Infrastructure and client · 3.1 days · Estimate
> MB / QS CHECK · Patel Infrastructure · 4.4 days · Estimate
> RA BILL PREPARED · Patel Infrastructure · 2.3 days · Estimate
> REVIEW STARTED · Patel Infrastructure · 5.7 days · Estimate
> REVIEW COMPLETED · Patel Infrastructure · 3.1 days · Estimate
> BILL SUBMITTED · Patel Infrastructure · 6.0 days · Estimate
> CLIENT ACKNOWLEDGED · CLIENT · 38.5 days · Estimate
> CERTIFIED · CLIENT · 4.0 days · Estimate
> TAX INVOICE RAISED · Patel Infrastructure · its wait is the wait to be paid, shown on the next stage
> PAYMENT RECEIVED · CLIENT · 32.3 days · From the audited accounts (Crestline's arithmetic)
> RETENTION RELEASED · CLIENT · Not public
> Ownership: Patel Infrastructure: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay.
> Whole RA bill, work done to cash: 99.4 days = 67.1 days before the invoice (Estimate) + 32.3 days to be paid (From the audited accounts, Crestline's arithmetic)
> Scaled from Patel Infrastructure's debtor days 32.3 and contract asset days 67.1, both Crestline's arithmetic on the audited accounts, using the stage pattern in Crestline's demonstration ledger. Estimates are not Patel Infrastructure's measured days.
> Once connected, Crestline measures each stage from the dates your SAP S/4HANA records. Estimates are never priced.
With Crestline, on the stage from the audited accounts only:
> PAYMENT RECEIVED, ten days less: 32.3 to 22.3 days, ₹97.99 Cr released once. Scenario, not a forecast.
> Once connected, Crestline measures each of the eleven stages from the dates your ERP already records, so the wait has a stage, a desk and a number.
> The step that holds the most money for the most days is shown first, with the person who usually records it.
> Footnote: Stage pattern: Crestline demonstration ledger, 376 bills, run on 12 October 2026. It is a pattern, not Patel Infrastructure's data. Debtor days = trade receivables ÷ revenue from operations × 365. Contract asset days = unbilled revenue ÷ revenue from operations × 365. Standalone, Annual Report for FY25, printed pages 53, 54 and 81.
> Footer: Strictly private · 8 / 16 · Estimates are tagged. Figures from the accounts are Crestline's arithmetic.

### Page 9 · Chapter seven

> KICKER: SEVEN · A REASON, A DESK AND A DATE
> HEADLINE: Every rupee waiting gets a reason, a desk and a date.
> Receivables by age, measured from the due date of payment, in ₹ Cr, at 31 March 2025 and at 31 March 2024
Data, 31 March 2025, 31 March 2024:
> Less than 6 months: ₹303.76 Cr, ₹164.96 Cr
> 6 months to 1 year: ₹12.13 Cr, ₹1.39 Cr
> 1 to 2 years: ₹2.38 Cr, ₹3.25 Cr
> 2 to 3 years: nil, ₹9.37 Cr
> Gross receivables: ₹318.27 Cr, ₹178.98 Cr
> Less loss allowance: ₹2.08 Cr, ₹0.96 Cr
> Trade receivables, net: ₹316.19 Cr, ₹178.02 Cr
> More than six months: ₹14.51 Cr, ₹14.02 Cr
> Trade payables, with the days of construction expenses they represent, at 31 March 2023, 2024 and 2025:
> ₹505.12 Cr, ₹441.70 Cr, ₹317.95 Cr · 116.3 days, 66.7 days, 38.9 days
> The credit each vendor agreed: not published
> The accounts show the balance by age, not by bill. Once connected, Crestline names the bill, the client and the desk behind each band, and every vendor payment against that vendor's own terms.
> Footnote: Receivables: Note 11.6, standalone, Annual Report for FY25, printed page 79 (both year ends). Loss allowance ₹208.16 lakh and ₹95.59 lakh. Payables: Note 23, printed page 95, and the balance sheet, Annual Report for FY25 printed page 53, Annual Report for FY24 printed page 61. Trade payables include provisions where invoices are not yet booked and work certification is pending (Note 23.1). Days are Crestline's arithmetic, formulas on page 5.
> Footer: Strictly private · 9 / 16

### Page 10 · Chapter eight

> KICKER: EIGHT · TEST THE FIX
> HEADLINE: Test the fix before you make it. Then put a name on it.
> Every lever in the simulator moves a real balance at its measured daily rate. Its bounds stop where the contract stops: certification cannot go below the contract's certification window, collection cannot go below the payment term the client signed, and vendor credit cannot go above what the vendors agreed. Paying vendors late is never shown as releasing cash.
> With Crestline · ten days less / thirty days less
Data, cash released once (Scenario, not a forecast), from zero:
> Certification, ten days less: ₹97.99 Cr
> Certification, thirty days less: ₹293.97 Cr
> Project materials, ten days less: ₹35.00 Cr
> Project materials, thirty days less: ₹105.01 Cr
> Collection, ten days less: ₹97.99 Cr
> All three together, ten days each, run as one scenario: ₹230.98 Cr, cash cycle 193.2 to 163.2 days
> Scenario, not a forecast. Rows overlap and are never added; the last row is one run of the simulator, not a sum.
> Collection is shown at ten days only. Thirty days would take it to 2.3 days, which is not a credible scenario.
> Not priced: vendor credit, held at 38.9 days because paying later is never cash released. Retention, because the accounts show it only combined with security deposits, with no release basis.
> No certification window and no client payment term are published, so no scenario is taken to a term.
> Once connected, Crestline rebuilds each bill from its own dates and shows how long the work has waited to be measured, submitted and certified, and whose move ends the wait.
> The longest waits are raised first as tickets, ours to fix where the step is ours and chased where it is the client's.
> Once connected, Crestline replays stock movements on their posting dates and shows what has sat on site unissued, by site and by value.
> It names the stock to draw down first, so cash stops waiting in material that is not yet in the work.
> Once connected, Crestline ages every unpaid invoice against its own due date and ranks them by money × days past term, naming the client and the desk.
> Each one becomes a ticket with an owner and a date, and the same figure is re-measured until the bill is paid.
Ranking, by cash released once:
> 1 and 2 · Certification, ten days (ours to move) and collection, ten days (the client's clock): ₹97.99 Cr each
> 3 · Project materials, ten days (ours to move): ₹35.00 Cr
> Crestline prices every move in one currency, cash released once, and ranks them, so the first move is the largest one on the evidence.
> The simulator stops at what the contract allows: no lever is moved past the term the client or vendor signed.
> Footnote: Crestline's arithmetic from its simulator on the standalone accounts, Annual Report for FY25. Days × value of a day: ₹9.799 Cr of revenue per day (₹3,576.65 Cr ÷ 365) for certification and collection, ₹3.500 Cr of material consumed per day (₹1,277.57 Cr ÷ 365) for project materials. Cash is released once.
> Footer: Strictly private · 10 / 16 · Scenario on Patel Infrastructure's published figures, not a forecast.

### Page 11 · Chapter nine: finding to closed ticket, and Ask Crestline

> KICKER: NINE · FROM A FINDING TO A CLOSED TICKET
> HEADLINE: A finding gets an owner, a date and an auditor.
> Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your SAP S/4HANA's records, never generated by a model.
> The auditor · How one finding reads · on Patel Infrastructure's published figures
> FINDING (Watch): Built work waiting to be certified and billed stood at 67.1 days of revenue, ₹657.48 Cr, at 31 March 2025, from 88.6 days a year earlier.
> ROOT CAUSE: Not visible in public accounts. From your SAP S/4HANA in the pilot: which client, which site, which bill, and which step of certification holds the days.
> DO THIS: The named bills that must move, each with a deadline, opened by the target: cut the wait to be certified and billed from 67.1 to 57.1 days.
> Owner: Commercial head · due in 7 days · EXAMPLE
> Raise ticket · Alert owner
> 01 Ticket raised: Baseline, target and due date are fixed at that moment.
> 02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed.
> 03 Re-measured: The same figure, from fresh data, each time the source syncs.
> 04 Verified: Closed only when the number moves. Nobody can mark it done by hand.
> Ask Crestline: a question answered from Patel Infrastructure's own evidence · Retrieval, then code
> What if built work were certified and billed ten days sooner?
> Built and waiting: 67.1 to 57.1 days. ₹97.99 Cr released once. Cash cycle 193.2 to 183.2 days. If used to retire the 12.75% NCDs (₹173.62 Cr outstanding at 31 March 2025), ₹12.49 Cr a year.
> Illustrative answer on published figures. Once connected, the live answer comes from your SAP S/4HANA.
> 01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen.
> 02 Simulates: A what-if runs through the simulator, inside the contract's bounds.
> 03 Computes: Code does the arithmetic. The model never produces a number.
> 04 Answers: Figures first, then the evidence. Where nothing matches, it says so.
> Question kinds: Position · Why · What now · What if · Compare projects · Projection
> Footnote: Finding: standalone accounts, Annual Report for FY25 printed page 53 and 81, and Annual Report for FY24 printed page 61 (88.6 days is Crestline's arithmetic, formula on page 5). Interest at the 12.75% disclosed on the unlisted NCDs, Note 18.2, printed page 86, on the cash released up to the ₹173.62 Cr outstanding at 31 March 2025 (Notes 18 and 22, printed pages 84 and 90): ₹97.99 Cr × 12.75% = ₹12.49 Cr a year.
> Footer: Strictly private · 11 / 16 · Scenario on Patel Infrastructure's published figures, not a forecast.

### Page 12 · Chapter ten

> KICKER: TEN · WHAT THE DAYS COST
> HEADLINE: One disclosed rate, priced only where it applies.
> Pressure on the cycle · What is moving it, and what that costs
Ranked by money × time. The only borrowing rate the accounts disclose is 12.75% on its unlisted NCDs, ₹173.62 Cr outstanding at 31 March 2025, so each balance is costed on at most ₹173.62 Cr. Data, FY25:
> Stock sitting (project materials): balance ₹464.31 Cr, 132.7 days, ₹8.05 Cr a year to carry
> Built, waiting to be certified: balance ₹657.48 Cr, 67.1 days, ₹4.07 Cr a year to carry
> Invoiced, waiting to be paid: balance ₹316.19 Cr, 32.3 days, ₹1.96 Cr a year to carry
> No clock on these · ranked by size instead
Data, at 31 March 2025:
> Trade payables: ₹317.95 Cr
> Security deposits and retention money, an asset, one combined line: ₹232.94 Cr
> Customer advances, non-current and current: ₹199.94 Cr
> Security deposits and retention money, a liability, one combined line: ₹189.17 Cr
> Advance to suppliers: ₹38.54 Cr
> Rows overlap and are never added.
With Crestline, if the cash released is used to retire the 12.75% NCDs, carry saved a year (cash counted up to ₹173.62 Cr, the NCDs outstanding at 31 March 2025). Scenario, not a forecast:
> Certification, ten days less: ₹97.99 Cr released, ₹12.49 Cr a year
> Certification, thirty days less: ₹293.97 Cr released, ₹173.62 Cr counted, ₹22.14 Cr a year
> Project materials, ten days less: ₹35.00 Cr released, ₹4.46 Cr a year
> Project materials, thirty days less: ₹105.01 Cr released, ₹13.39 Cr a year
> Collection, ten days less: ₹97.99 Cr released, ₹12.49 Cr a year
> All three together, ten days each, one scenario: ₹230.98 Cr released, ₹173.62 Cr counted, ₹22.14 Cr a year
> Cash is released once. Carry recurs each year only while the cash stays out of that debt. Scenario, not a forecast.
> Once connected, Crestline rebuilds each bill from its own dates and shows how long the work has waited to be measured, submitted and certified, and whose move ends the wait.
> The longest waits are raised first as tickets, ours to fix where the step is ours and chased where it is the client's.
> Once connected, Crestline replays stock movements on their posting dates and shows what has sat on site unissued, by site and by value.
> It names the stock to draw down first, so cash stops waiting in material that is not yet in the work.
> Once connected, Crestline ages every unpaid invoice against its own due date and ranks them by money × days past term, naming the client and the desk.
> Each one becomes a ticket with an owner and a date, and the same figure is re-measured until the bill is paid.
> Crestline prices every move in one currency, cash released once, and ranks them, so the first move is the largest one on the evidence.
> The simulator stops at what the contract allows: no lever is moved past the term the client or vendor signed.
> Footnote: Carry cost = the lower of the balance and ₹173.62 Cr × (days ÷ 365) × 12.75%, Crestline's arithmetic. Rate: unlisted NCDs at 12.75%, Note 18.2, printed page 86. Amount outstanding ₹173.62 Cr = debentures ₹114.05 Cr long term (Note 18, page 84) + ₹49.66 Cr and ₹9.92 Cr current maturities (Note 22, page 90, rounded), standalone, Annual Report for FY25. Balances: printed page 53 (trade payables), page 80 (Note 13, deposits and retention money, asset), page 81 (Note 15, advance to suppliers), page 96 (Note 24, deposits and retention money, liability) and page 101 (Note 33, customer advances). Carry saved = the lower of the cash released and ₹173.62 Cr × 12.75%. No other borrowing rate is used.
> Footer: Strictly private · 12 / 16 · Scenario on Patel Infrastructure's published figures, not a forecast.

### Page 13 · Chapter eleven

> KICKER: ELEVEN · IT HAS BEEN DONE BEFORE
> HEADLINE: It has been done before. By you.
> Patel Infrastructure's own accounts show its cash cycle shortening from one year end to the next. Crestline did not do that work and does not claim it.
> What Crestline adds is the view underneath: which certificate and which delivery hold the next days, on which site, at which desk.
> No other company's results are used in this booklet.
No numbers on this page.
> Footer: Strictly private · 13 / 16

### Page 14 · Chapter twelve: trust, read-only, what Crestline is not

> HEADLINE: Read-only on your books. Nothing is written back.
> Crestline is read-only by design, and your SAP S/4HANA stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems.
> READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user.
> ON RECORD · Every sync is logged, and your IT team can see it.
> YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection.
> PILOT SCOPE · One to three EPC projects.
> What Crestline is not
> Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run.
> Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done.
> Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline.
> Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual.
> 14 days · of read-only analysis, starting once your SAP S/4HANA is connected. The adapter for your SAP S/4HANA is built first.
> First sync · gives the first ranked list of delays.
> No change · to how your finance team works, or to the SAP S/4HANA you run.
> Footer: Strictly private · 14 / 16 · The next page is yours.

### Page 15 · The invitation

> KICKER: TWELVE · THE INVITATION
> HEADLINE: Give us one to three EPC projects and fourteen days.
> A pilot built around your SAP S/4HANA, on one to three EPC projects of your choice, in rupees, read-only. At the end you hold a list of the bills and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your SAP S/4HANA is built first; the 14 days of read-only analysis start once it is connected.
> SCAN TO BOOK A TIME: crestlineintelligence.com/book-a-demo
> Before day 1: adapter built for your SAP S/4HANA, read-only connection approved
> Days 1 to 14: read-only analysis, then the list, reviewed with your team
> Day dots 1 to 14, counted from the day the connection is approved.
> We would value a thirty-minute call at a time that suits you. Scan the code, call or write.
> SOURCES AND NOTES
> Patel Infrastructure Limited, standalone, Annual Report for the year to 31 March 2025 (audit report signed 21 July 2025) and Annual Report for the year to 31 March 2024 (signed 4 September 2024), from patelinfra.com, Financial Reports. Printed pages used: balance sheet, profit and loss and cash flow statement (FY25 pages 53 to 55, FY24 pages 61 to 63); Notes 11.6, 13, 15, 18.2, 23, 24, 29 and 33 (FY25 pages 79, 80, 81, 86, 95, 96, 98, 101); and the Directors' Report (pages 13 and 21). Order book: CARE Ratings press release of 10 April 2026, page 2, as CARE Ratings reports it. All figures are in ₹ lakh as printed, shown in ₹ crore, 365 days, year-end balances. Days: DSO = trade receivables ÷ revenue from operations × 365; contract asset days = unbilled revenue ÷ revenue from operations × 365; DIO = inventory ÷ material consumed × 365; DPO = trade payables ÷ construction expenses × 365. Revenue per day ₹9.799 Cr; material consumed per day ₹3.500 Cr. Nothing here comes from Patel Infrastructure's SAP S/4HANA. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days × value of a day; interest = cash, counted up to ₹173.62 Cr, × the 12.75% the company discloses on its unlisted NCDs (₹173.62 Cr outstanding at 31 March 2025), applied only where the cash retires that debt. Cash is released once, interest recurs each year. Scenarios overlap and are never added. Not a forecast or a commitment. Stage values on page 8 other than the wait to be paid are estimates from Crestline's demonstration ledger and are not Patel Infrastructure's data. If this booklet reached you in error, please call +91 76209 35398 and we will collect it.
> Footer: Strictly private · 15 / 16

### Page 16 · Back cover

> Vertical tagline: Know where your money is waiting, and who can release it.
> STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1
> HEADLINE: Every waiting rupee, with a site, a desk and a date.
> A thirty-minute call, at a time that suits you
> Rajat Kate
> Managing Director
> Crestline Intelligence Private Limited
> Pune, Maharashtra
> +91 76209 35398
> rajat@crestlineintelligence.com
> www.crestlineintelligence.com
> BOOK A TIME

## Checks

Run by script before hand-over; results are in qa-report.md.
- every ">" figure traced to calc output or the published accounts
- 0 KEPT OUT terms, 0 other prospect names, 0 dashes, 0 placeholders
