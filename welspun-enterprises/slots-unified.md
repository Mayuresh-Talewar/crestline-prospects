# Welspun Enterprises: unified 16-page pack, two reader editions

Internal notes (never pasted into the prompt).
- Entity: Welspun Enterprises Limited, CONSOLIDATED, FY26 (year to 31 Mar 2026). Basis checked: revenue 3,615.38 Cr and contract assets 1,318.41 Cr are both consolidated FY26. Calc: calc/we-savings.ts.
- Contract asset days 133.1 uses the CLOSING balance (1,318.41 / 9.905), as the task ruled. data.md's 126.2 uses the average balance; it is not printed.
- Value of a day printed as 9.905 so 10 x 9.905 = 99.05 and 30 x 9.905 = 297.15 tie exactly to the calc.
- No interest. Receivable days 46.9 / 41.3 printed as history only, never added, never priced.
- Pages 7, 8, 11, 14, 15, 16 are FIXED-PAGES.md copy with the rulings of this ticket applied (tagline, p8 no upper card, p14 claims line dropped, p15 interest variant with "average", p8 footer without totals). See qa-report.md.
- Logo: assets/welspun-enterprises-logo.svg.
- Convention in Keys: lines starting with ">" are printed copy. Every other line is an instruction and is never printed.

## Reader table

Edition A
- Name and title: Mr. Sandeep Garg, Managing Director
- Address block (TO): Mr. Sandeep Garg, Managing Director, Welspun Enterprises Limited, Welspun House, Kamala Mills Compound, Senapati Bapat Marg, Lower Parel, Mumbai 400 013
- Salutation: Dear Mr. Garg,
- Letter: Letter A below

Edition B
- Name and title: Mr. Lalit Jain, Chief Financial Officer
- Address block (TO): Mr. Lalit Jain, Chief Financial Officer, Welspun Enterprises Limited, Welspun House, Kamala Mills Compound, Senapati Bapat Marg, Lower Parel, Mumbai 400 013
- Salutation: Dear Mr. Jain,
- Letter: Letter B below

Letter A (printed, after the salutation):
> This booklet is about ten days, and what they are worth to Welspun Enterprises.
> Welspun Enterprises closed FY26 with a profit after tax of ₹392.77 Cr and, at 30 June 2026, an order book of ₹18,729 Cr. At 31 March 2026, work done and not yet billed stood at ₹1,318.41 Cr, 11.6% higher than a year earlier, while revenue from operations was 2.2% lower. That balance is the wait between the site and the bill.
> One day of revenue is ₹9.905 Cr. Ten days less on that wait is ₹99.05 Cr released once, and thirty days is ₹297.15 Cr. These are scenarios on your published figures, with no interest priced. They are not a forecast, and we have not seen your SAP S/4HANA.
> A pilot of fourteen days, read-only, on one to three EPC projects would show, bill by bill, where the days sit and whose move ends each wait. I would value thirty minutes with you.

Letter B (printed, after the salutation):
> This booklet is about ten days, and what they are worth to Welspun Enterprises.
> The consolidated balance sheet at 31 March 2026 carries ₹1,318.41 Cr of contract assets, work done and not yet billed, against ₹1,181.07 Cr a year earlier, and ₹592.20 Cr of trade receivables, against ₹336.43 Cr. Revenue from operations was ₹3,615.38 Cr, 2.2% lower. Those balances are the waits between the site, the bill and the payment.
> One day of revenue is ₹9.905 Cr. Ten days less on the wait to bill is ₹99.05 Cr released once, and thirty days is ₹297.15 Cr. These are scenarios on published figures, with no interest priced. They are not a forecast, and we have not seen your SAP S/4HANA.
> A pilot of fourteen days, read-only, on one to three EPC projects would show, bill by bill, where the days sit and whose move ends each wait. I would value thirty minutes with you.

## Keys

### Page 1, cover
> STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1
> Prepared for the addressee only. Please do not forward or copy.
> Working-capital review
> Welspun Enterprises Limited · October 2026
> TEN DAYS LESS ON THE WAIT TO BILL · ₹99.05 CR RELEASED ONCE
> 10 days × ₹9.905 Cr a day (FY26 revenue from operations of ₹3,615.38 Cr, divided by 365) = ₹99.05 Cr. The wait to bill is measured as contract asset days, a Crestline analytical measure. Scenario, not a forecast.
> PREPARED EXCLUSIVELY FOR
Under it, the reader's name and title from the reader table.
> DRAFTED BY
> Crestline Intelligence
> Rajat Kate, Managing Director

### Page 2, letter
Running head: left "A LETTER", right "WELSPUN ENTERPRISES LIMITED".
> 9 October 2026
Then the salutation from the reader table.
> TO
Under it, the address block from the reader table.
> FROM
> Rajat Kate, Managing Director, Crestline Intelligence Private Limited, Pune, Maharashtra
Then the letter from the reader table.
> Yours sincerely,
> Rajat Kate
> Managing Director
> P.S.
> Footer: Strictly private · 2 / 16

### Page 3, chapter one
Running head: left "ONE · THE RECORD", right "PUBLIC RECORD".
> Chapter one
> HEADLINE: It begins with a book of work, / and the system to run it.
Rows with roman numerals:
> I · ₹18,729 Cr · Order book at 30 June 2026 · Investor presentation Q1 FY27, 4 August 2026, page 7
> II · ₹845 Cr · EBITDA, FY26 · Investor presentation Q4 FY26, 14 May 2026, page 24
> III · ₹392.77 Cr · Profit after tax as reported, FY26 · Annual Report 2025-26, printed page 352
> IV · SAP S/4HANA · "we have also successfully migrated to S/4HANA, creating a strong and more integrated digital backbone for the organization." Mr. Abhishek Chaudhary, Chief Executive Officer, Transportation Vertical, earnings call, 15 May 2026, page 7
Closing statement:
> A lot of work is built and a lot is booked. The next question is how fast that work becomes cash.
> Footnote: All figures are consolidated, in INR crore. Sources are listed on page 15.
> Footer: Strictly private · 3 / 16

### Page 4, chapter two
Running head: left "TWO · WORK DONE, NOT YET BILLED", right "PUBLIC RECORD".
Chart: hero figure and three side stats. No scenario mark. Never compute a figure that is not given here.
> Chapter two
> HEADLINE: Work worth ₹1,318.41 Cr is done / and not yet billed.
> ₹1,318.41 Cr
> Contract assets, work done and not yet billed, at 31 March 2026
> 133.1 days · Contract asset days (Crestline analytical measure, not an accounting standard): ₹1,318.41 Cr divided by ₹9.905 Cr of revenue a day
> ₹592.20 Cr · Trade receivables at 31 March 2026, billed and waiting to be paid. ₹336.43 Cr a year earlier
> 46.9 days · Receivable days, computed from the published receivables turnover of 7.79 times. 41.3 days a year earlier. History only, not added to contract asset days
> Footnote: Consolidated, INR crore. Annual Report 2025-26, printed pages 262, 354 and 122. Contract asset days is a Crestline analytical measure that the Annual Report does not state.
> Footer: Strictly private · 4 / 16

### Page 5, chapter three
Running head: left "THREE · THE BALANCES AGAINST THE SALES", right "PUBLIC RECORD".
Chart: grouped columns, FY25 beside FY26, three groups, ONE shared scale starting at zero, every column labelled. History only, no scenario mark. Never compute a figure that is not given here.
> Chapter three
> HEADLINE: Revenue came in 2.2% lower. / The waiting balances grew.
> Revenue from operations · FY25 3,695.34 · FY26 3,615.38 · 2.2% lower
> Contract assets · FY25 1,181.07 · FY26 1,318.41 · 11.6% higher
> Trade receivables · FY25 336.43 · FY26 592.20 · 76.0% higher
> Management attributed the lower revenue to "extended monsoons and longer project clearance cycle." Annual Report 2025-26, management discussion, printed page 122.
> Footnote: Consolidated, INR crore, at 31 March of each year. FY25 revenue is the restated comparative in the Annual Report 2025-26, printed page 262. Contract assets and trade receivables, printed page 354.
> Footer: Strictly private · 5 / 16

### Page 6, chapter four
Running head: left "FOUR · TEN DAYS, PRICED", right "WELSPUN ENTERPRISES LIMITED".
Chart: four tiles on one row, no bars. The two scenario tiles carry the scenario mark. Never compute a figure that is not given here.
> Chapter four
> HEADLINE: Ten days on one wait / is a number you can price.
> One day of revenue · ₹9.905 Cr
> Ten days less on the wait to bill · ₹99.05 Cr released once
> Thirty days less on the wait to bill · ₹297.15 Cr released once
> Today · 133.1 contract asset days (Crestline analytical measure)
> Scenario, not a forecast. The two scenarios overlap and are never added.
> Footnote: Value of a day is FY26 consolidated revenue from operations of ₹3,615.38 Cr divided by 365. No interest is priced.
> Footer: Strictly private · 6 / 16

### Page 7, chapter five: five lenses (fixed copy)
Running head: right "CRESTLINE INTELLIGENCE".
> KICKER: FIVE · ENTER CRESTLINE
> HEADLINE: Where does project cash get stuck? Five lenses.
> Once connected, Crestline reads your SAP S/4HANA and shows which bills and retention are stuck, on which site, and how many crores. Here is each lens, and the Welspun Enterprises figure it would open up.
> 01 Working capital · WC · The cash a project eats before it pays you back. Not published · Management states no working-capital days.
> 02 Order to cash · O2C · From work done on site to money in the bank. 133.1 contract asset days (Crestline analytical measure) · ₹1,318.41 Cr of contract assets at 31 March 2026.
> 03 Procure to pay · P2P · From a site's material request to the vendor getting paid. Not published · Vendor payment days are not stated in the Annual Report.
> 04 Client · WHO PAYS SLOW · Which clients pay slow, and why. Not published · Days actually taken by each client are not published.
> 05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate. Not published · Vendor terms and rates are not disclosed.
> Know where your money is waiting, and who can release it.
> READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS
> Footnote: Annual Report 2025-26, printed pages 354. Contract asset days is contract assets divided by revenue per day, a Crestline analytical measure.
> Footer: Strictly private · 7 / 16 · Now, on Welspun Enterprises' published figures.

### Page 8, chapter six: the clock the ERP keeps (fixed copy)
Running head: right "CRESTLINE INTELLIGENCE".
Draw the timeline only. There is no card above it. Each stage tile carries only its name and its ownership tag. Do not invent step waits.
> KICKER: SIX · THE CLOCK THE ERP ALREADY KEEPS
> HEADLINE: Crestline reads the dates your ERP records
> It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait.
> CRESTLINE'S VIEWS · DRAWN ON WELSPUN ENTERPRISES' PUBLISHED FIGURES · NOTHING FROM YOUR ERP
> One bill, from work done to cash in the bank
> JOINT MEASUREMENT · WELSPUN ENTERPRISES AND CLIENT
> MB / QS CHECK · WELSPUN ENTERPRISES
> RA BILL PREPARED · WELSPUN ENTERPRISES
> REVIEW STARTED · WELSPUN ENTERPRISES
> REVIEW COMPLETED · WELSPUN ENTERPRISES
> BILL SUBMITTED · WELSPUN ENTERPRISES
> CLIENT ACKNOWLEDGED · CLIENT
> CERTIFIED · CLIENT
> TAX INVOICE RAISED · WELSPUN ENTERPRISES
> PAYMENT RECEIVED · CLIENT
> RETENTION RELEASED · CLIENT
> Ownership: Welspun Enterprises: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay.
> Step waits are not public. Once connected, Crestline measures them from the dates your SAP S/4HANA records. This timeline shows the stages, not Welspun Enterprises' days.
> Footer: Strictly private · 8 / 16 · Illustrative stages.

### Page 9, chapter seven
Running head: left "SEVEN · REASON, DESK, DATE", right "CRESTLINE INTELLIGENCE".
Text only. No chart, no figures.
> Chapter seven
> HEADLINE: Every rupee waiting gets a reason, / a desk and a date.
> A wait belongs to whoever makes the act that ends it.
> When the act is Welspun Enterprises' own (measure with the client, check, prepare, review, submit, invoice), the wait is Welspun Enterprises' to fix.
> When the act is the client's (acknowledge, certify, pay), the wait is the client's. It is chased, and it is never counted as Welspun Enterprises' delay.
> Every waiting bill is then given a reason, a desk and a date, read from the dates your SAP S/4HANA records once it is connected.
> Footer: Strictly private · 9 / 16

### Page 10, chapter eight
Running head: left "EIGHT · TEST THE FIX", right "WELSPUN ENTERPRISES LIMITED".
Chart: three horizontal bars on ONE shared scale starting at zero, days on the axis, every bar labelled. The first bar is today's figure. The other two are scenario bars. Never compute a figure that is not given here.
> Chapter eight
> HEADLINE: Test the fix before you make it. / Then put a name on it.
> Contract asset days, the wait to bill (Crestline analytical measure)
> Today · 133.1 days
> Ten days less · 123.1 days · ₹99.05 Cr released once
> Thirty days less · 103.1 days · ₹297.15 Cr released once
> Scenario, not a forecast. The two scenarios overlap and are never added. No interest is priced.
> Every lever in the simulator moves a real balance at its measured daily rate, and the sliders stop where the contract stops. Paying vendors later is never shown as releasing cash. This wait is Welspun Enterprises' own to move.
> Footnote: Consolidated FY26. ₹9.905 Cr a day is revenue from operations of ₹3,615.38 Cr divided by 365. Contract assets of ₹1,318.41 Cr at 31 March 2026, Annual Report 2025-26, printed pages 262 and 354.
> Footer: Strictly private · 10 / 16

### Page 11, chapter nine (fixed copy)
Running head: right "CRESTLINE INTELLIGENCE".
> KICKER: NINE · FROM A FINDING TO A CLOSED TICKET
> HEADLINE: A finding gets an owner, a date and an auditor.
> Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your SAP S/4HANA's records, never generated by a model.
> The auditor · How one finding reads · on Welspun Enterprises' published figures
> FINDING (Watch): Work done and not yet billed rose from ₹1,181.07 Cr to ₹1,318.41 Cr in the year to 31 March 2026, while revenue from operations fell from ₹3,695.34 Cr to ₹3,615.38 Cr.
> ROOT CAUSE: Not visible in public accounts. From your SAP S/4HANA in the pilot: which client, which site, which bill, and which step of the wait between work done and the bill holds the days.
> DO THIS: The named bills that must move, each with a deadline, opened by the target: cut contract asset days (Crestline analytical measure) from 133.1 to 123.1.
> Owner: Commercial head · due in 7 days · EXAMPLE
> Raise ticket · Alert owner
> 01 Ticket raised: Baseline, target and due date are fixed at that moment.
> 02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed.
> 03 Re-measured: The same figure, from fresh data, each time the source syncs.
> 04 Verified: Closed only when the number moves. Nobody can mark it done by hand.
> Ask Crestline: a question answered from Welspun Enterprises' own evidence · Retrieval, then code
> What if the wait to bill were ten days shorter?
> Contract asset days (Crestline analytical measure) go from 133.1 to 123.1 days. ₹99.05 Cr is released once. No interest is priced.
> Illustrative answer on published figures. Once connected, the live answer comes from your SAP S/4HANA.
> 01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen.
> 02 Simulates: A what-if runs through the simulator, inside the contract's bounds.
> 03 Computes: Code does the arithmetic. The model never produces a number.
> 04 Answers: Figures first, then the evidence. Where nothing matches, it says so.
> Question kinds: Position · Why · What now · What if · Compare projects · Projection
> Footnote: The finding uses Annual Report 2025-26, printed pages 262 and 354. The owner line is an example, not a Welspun Enterprises role. The answer uses ₹9.905 Cr of revenue a day, consolidated FY26.
> Footer: Strictly private · 11 / 16 · Scenario on Welspun Enterprises' published figures, not a forecast.

### Page 12, chapter ten
Running head: left "TEN · TWO SCENARIOS, ONE WAIT", right "WELSPUN ENTERPRISES LIMITED".
Chart: two horizontal bars of cash released, ONE shared scale starting at zero, both labelled. Both are scenario bars. Never compute a figure that is not given here.
> Chapter ten
> HEADLINE: Ten days and thirty days, / priced on one wait.
> Ten days less on the wait to bill · ₹99.05 Cr released once
> Thirty days less on the wait to bill · ₹297.15 Cr released once
> Value of a day: ₹9.905 Cr. 10 × 9.905 = 99.05. 30 × 9.905 = 297.15.
> Scenario, not a forecast. The two rows overlap and are never added. No interest is priced.
> Footnote: Consolidated FY26, INR crore. Revenue from operations of ₹3,615.38 Cr divided by 365, Annual Report 2025-26, printed page 262.
> Footer: Strictly private · 12 / 16

### Page 13, chapter eleven
Running head: left "ELEVEN · WHAT COUNTS AS PROOF", right "CRESTLINE INTELLIGENCE".
Text only. No table, no chart, no example or computed figure. No numbers on this page.
> Chapter eleven
> HEADLINE: What counts as proof / in the pilot.
> A finding closes only when the number moves. The auditor re-measures the same figure from fresh data.
> The Performance screen counts only closes that the data verified. A ticket that closes with no change is recorded as that, a fact about the number and not a judgement of the effort.
> At the end of the pilot you hold the list of bills and payments holding the selected projects' cash, each with its value, its days and its owner.
> Footer: Strictly private · 13 / 16

### Page 14, chapter twelve (fixed copy)
Running head: right "CRESTLINE INTELLIGENCE".
> HEADLINE: Read-only on your books. Nothing is written back.
> Crestline is read-only by design, and your SAP S/4HANA stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems.
> READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user.
> ON RECORD · Every sync is logged, and your IT team can see it.
> YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection.
> PILOT SCOPE · One to three EPC projects. Annuity and toll road assets are outside this review.
> What Crestline is not
> Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run.
> Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done.
> Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline.
> Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual.
> 14 days · of read-only analysis, starting once your SAP S/4HANA is connected. The adapter for your SAP S/4HANA is built first.
> First sync · gives the first ranked list of delays.
> No change · to how your finance team works, or to the SAP S/4HANA you run.
> Footer: Strictly private · 14 / 16 · The next page is yours.

### Page 15, the invitation (fixed copy)
Running head: right "CRESTLINE INTELLIGENCE".
> KICKER: TWELVE · THE INVITATION
> HEADLINE: Give us one to three EPC projects and fourteen days.
> A pilot built around your SAP S/4HANA, on one to three EPC projects of your choice, in rupees, read-only. At the end you hold a list of the bills and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your SAP S/4HANA is built first; the 14 days of read-only analysis start once it is connected.
> SCAN TO BOOK A TIME: crestlineintelligence.com/book-a-demo
> Before day 1: adapter built for your SAP S/4HANA, read-only connection approved
> Days 1 to 14: read-only analysis, then the list, reviewed with your team
> Day dots 1 to 14, counted from the day the connection is approved.
> We would value a thirty-minute call at a time that suits you. Scan the code, call or write.
> SOURCES AND NOTES
> Welspun Enterprises Limited, consolidated, INR crore. Annual Report 2025-26 (consolidated statements signed 14 May 2026): revenue from operations and trade receivables, printed page 262; profit after tax, printed page 352; contract assets, printed page 354; management discussion and receivables turnover, printed page 122; credit period, printed page 431 (standalone note); SAP S/4HANA, printed pages 124 and 125. Investor presentation Q4 and FY26, 14 May 2026, EBITDA, page 24. Investor presentation Q1 FY27, 4 August 2026, order book, page 7. Earnings call transcript, 15 May 2026, page 7. Value of a day is FY26 revenue from operations of ₹3,615.38 Cr divided by 365, which is ₹9.905 Cr. Contract asset days is contract assets at 31 March 2026 divided by the value of a day, which is 133.1; it is a Crestline analytical measure that the Annual Report does not state. Receivable days is 365 divided by the published receivables turnover of 7.79 (FY25: 8.83, which gives 41.3), shown as history. Nothing here comes from Welspun Enterprises' SAP S/4HANA. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days x revenue per day. No interest is priced, because no average borrowing rate is published. Cash is released once. Scenarios overlap and are never added. Not a forecast or a commitment. Step waits on page 8 are not public and are not drawn. If this booklet reached you in error, please call +91 76209 35398 and we will collect it.
> Footer: Strictly private · 15 / 16

### Page 16, back cover (fixed copy)
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

Run by script on the assembled prompt (see qa-report.md): placeholders, comments, internal references, jargon, dashes, point sizes, company names, number trace, KEPT OUT terms, interest figures.
