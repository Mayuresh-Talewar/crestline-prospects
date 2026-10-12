# HCC: unified 16-page pack, HC-5 (internal sections first; printed region is "## Keys" to the end of Page 16)

## Internal: basis and rulings applied

Standalone, INR crore, every figure. Sources: hcc/data.md, problems.md, solutions.md, webapp-fit.md, calc/hcc-savings-output.txt, qa-report.md (PASS after fixes). Fixed pages copied from _shared/master-design/FIXED-PAGES.md with slots filled.

* G1 applied: the settlement-scheme cash line and the deleveraging line are gone from every printed line. Page 3 opens on what is neutral and verified: one hundred years (AR FY26 p3), order book 12,971 (note 22.2, AR FY26 p150), NHPC Salal 524.17 (NSE press release 11 Aug 2026, live check clean to 8 Oct 2026), "working capital discipline" (AR FY26 p21), and SAP S/4HANA only with "will feed Crestline, read-only, built during the pilot" (AR FY25 p91). No debt, borrowing, settlement, award, recovery or claim word anywhere in the printed region.
* G2 applied: page 6 carries a separate labelled "with Crestline" callout on its own scale, rows (a) 107.87 and (b) 323.61, "same cash as page 5, not added". The cash is never split by age.
* No interest anywhere (README HC-3). The FIXED-PAGES no-rate variant says "no borrowing rate is published", which is false here (rates are disclosed on other instruments, and naming them points at debt). Adapted to "No interest is priced: these scenarios count cash only." Same on page 11's answer.
* Tagline replaced on pages 7 and 16: "Know where your money is waiting, and who can release it." The page 14 claims and arbitration line is dropped.
* {ACCOUNTING_SYSTEM} = "ERP" on every fixed page, so SAP S/4HANA appears only on page 3 in the approved phrase.
* No company working-capital target (data.md NWC section, depth.md s3): page 12 is retitled to the two step scenarios. The 30 to 90 day terms are never compared (webapp-fit never-say 11). No contract-asset, unbilled-work, advance or debt figure is used.
* Chapter numbers: p3 to p14 are chapters one to twelve, so the page 15 kicker reads THIRTEEN (fixed copy said TWELVE for a twelve-chapter pack).
* No peers in the HCC folder: page 13 is the company's own proof (the running book at 103.5 and 90.9 days), no peer line.
* Logo: hcc/assets/hcc-logo.svg, the site header image from www.hccindia.com (frontend/images/Layer_x0020_1.svg), downloaded 8 Oct 2026, 12,770 bytes, paths only; script scan 0 hits (planted script SVG 3 hits).

## Internal: figure trace (every printed number)

| Figure | Source |
|---|---|
| 1,701.67 / 1,361.06 | ageing table first line, AR FY26 p132 / p133 (qa CORRECT) |
| 3,937.25 / 4,801.05 | standalone revenue, AR FY26 p109 |
| 10.79 | calc output, 3,937.25 / 365 |
| 157.8 / 103.5 | calc output |
| 90.9 | data.md and problems.md, 1,256.20 / 5,042.78, AR FY25 p136, p113 |
| 147.8 / 127.8 / 107.87 / 323.61 / 1,593.80 / 1,378.06 | calc output S10, S30 |
| 0.00 | calc output, payables stretch |
| 340.61 / 54.3 / 355.45 | problems.md (computed) |
| 238.12 / 593.57 / 549.54 / 529.46 | problems.md P3 (AR FY26 p133, p132) |
| 532.90 / 45.74 / 255.91 / 146.40 / 127.15 | data.md FY26 ageing, AR FY26 p132 |
| 812.63 (72.71 + 739.92) | data.md, AR FY26 p131, sum computed |
| 2,017.40 / 111.54 | data.md, AR FY26 p148 |
| 12,971 / 3.29 | data.md, note 22.2 AR FY26 p150; ratio computed |
| 524.17 / 27 months | data.md, NSE press release 11 Aug 2026 |
| 100 years, 27 January 2026 | fact-check row 5, AR FY26 p3 |

## Reader table

| Edition | Name | Title | Address block | Salutation |
|---|---|---|---|---|
| A | Arjun Dhawan | Vice Chairman & Managing Director | Hindustan Construction Company Limited, Hincon House, Lal Bahadur Shastri Marg, Vikhroli (West), Mumbai 400 083 | Dear Mr. Dhawan, |
| B | Rahul Shukla | Chief Financial Officer | Hindustan Construction Company Limited, Hincon House, Lal Bahadur Shastri Marg, Vikhroli (West), Mumbai 400 083 | Dear Mr. Shukla, |

**Letter A (Arjun Dhawan)**

> "This booklet is about ten days, and what they are worth to HCC."
> "At 31 March 2026, HCC's receivables on running contracts stood at ₹1,701.67 Cr, standalone. On FY26 standalone revenue of ₹3,937.25 Cr, that is 157.8 days between a bill and its cash. A year earlier it was 103.5 days."
> "One day of that revenue is worth ₹10.79 Cr. Ten days less on the wait to be paid would release ₹107.87 Cr of cash, once. Thirty days less would release ₹323.61 Cr. The two overlap, and we never add them."
> "The Annual Report names working capital discipline among HCC's priorities. What the accounts cannot show is which running bill holds those days, on which site, and whose move ends the wait. That is the question Crestline answers."
> "Everything that follows is built on HCC's published filings. We have not seen HCC's ERP, and every figure is a scenario, not a forecast. I would value thirty minutes with you to walk through it."
> "P.S. Page 6 shows where the new cash is waiting: in bills less than six months old."

**Letter B (Rahul Shukla)**

> "This booklet is about ten days, and what they are worth to HCC."
> "The Annual Report FY26 puts HCC's receivables on running contracts at ₹1,701.67 Cr at 31 March 2026, standalone, against ₹1,361.06 Cr a year earlier. On standalone revenue, that is 157.8 days from bill to cash, from 103.5."
> "At ₹10.79 Cr a day, ten days less would release ₹107.87 Cr, once, and thirty days less ₹323.61 Cr. The two rows overlap and are never added. No interest is priced, and paying vendors later is never counted as a saving."
> "Crestline reads those days bill by bill: whose act each wait is waiting on, on which desk, and since when. A finding becomes a ticket with an owner and a date, and it closes only when the same figure, measured again, has moved."
> "Every figure here is from HCC's published filings or our arithmetic on them. We have not seen HCC's ERP. I would value thirty minutes with you to test the arithmetic."
> "P.S. Page 8 lays out the running book at 31 March 2026 by age, as the Annual Report prints it."

## Keys

Bracketed tags in a footnote stand for the caveat line below. Print the line, never the tag.

* [SCN] = "Scenario, not a forecast. Crestline's arithmetic on published figures: days x value of a day. Cash is released once. Rows overlap and are never added."
* [RUN] = "Receivables on running contracts: the first line of the trade receivables ageing table, receivables considered good, standalone (Annual Report FY26, note 6.8)."
* [DAYS] = "Receivable days on running contracts: that balance / standalone revenue from operations x 365. Crestline arithmetic, not a ratio HCC reports."
* [DAY] = "Value of a day: FY26 standalone revenue from operations ₹3,937.25 Cr / 365 = ₹10.79 Cr (Annual Report FY26, p109, filed 24 Jul 2026)."
* [GST] = "Receivables carry GST and revenue does not, so the cash figures are conservative."
* [PUB] = "From HCC's published filings only. Nothing here comes from HCC's ERP. We have not seen it."

Source words used in print: "Annual Report FY26" = HCC Annual Report for FY26, filed 24 Jul 2026. "Annual Report FY25" = HCC Annual Report for FY25, filed 21 Jul 2025. Every figure is standalone and in ₹ crore unless it says otherwise.

## Headline table

| Page | Line 1 | Line 2 |
|---|---|---|
| 3 | "It begins with a hundred years," | "and ₹12,971 Cr of work in hand." |
| 4 | "Meanwhile, ₹1,701.67 Cr of running bills" | "is waiting to be paid." |
| 5 | "Running bills now wait 54.3 days longer" | "than they did a year ago." |
| 6 | "The new cash is waiting" | "in this year's bills." |
| 7 | "Where does project cash get stuck?" | "Five lenses." |
| 8 | "Crestline reads the dates" | "your ERP records." |
| 9 | "Every rupee waiting gets a reason," | "a desk and a date." |
| 10 | "Test the fix before you make it." | "Then put a name on it." |
| 11 | "A finding gets an owner," | "a date and an auditor." |
| 12 | "Ten days, and thirty," | "priced on HCC's own figures." |
| 13 | "It has been done before," | "by HCC." |
| 14 | "Read-only on your books." | "Nothing is written back." |
| 15 | "Give us one to three running domestic projects" | "and fourteen days." |
| 16 | "Every waiting rupee," | "with a site, a desk and a date." |

## Page 1 · Cover

> "STRICTLY PRIVATE & CONFIDENTIAL" · "COPY NO. 1 OF 1"
> "Prepared for the addressee only. Please do not forward or copy."
> Title: "Working-capital review"
> "Hindustan Construction Company Limited · October 2026"
> Hero line: "₹107.87 CR IN EVERY TEN DAYS BETWEEN A BILL AND ITS CASH"
> Under the hero: "10 days x ₹3,937.25 Cr FY26 standalone revenue / 365 = ₹107.87 Cr · Annual Report FY26, p109 · Scenario, not a forecast."
> "PREPARED EXCLUSIVELY FOR" · the edition's reader name and title from the reader table
> "DRAFTED BY" · "Crestline Intelligence" · "Rajat Kate" · "Managing Director"

## Page 2 · Letter

> KICKER: "A LETTER"
> Date: "October 2026"
> Salutation, address block and letter text: from the reader table, per edition.
> "Yours sincerely," · "Rajat Kate" · "Managing Director, Crestline Intelligence Private Limited"
> Line under the letter: "Every figure in this booklet is from HCC's published filings, or Crestline's arithmetic on them. Scenarios, not forecasts."
> Footer: "Strictly private · 2 / 16"

## Page 3 · Chapter one

> KICKER: "ONE · ON THE PUBLIC RECORD"
> Chapter label: "Chapter one"
> Headline: see table.
> Lead: "Before the questions, the record. Five things HCC has published, each from its own filings."

Ruled rows, roman numeral, big figure or phrase, description, source line:

> "i" · "100 years" · "of operations, completed on 27 January 2026." · "Annual Report FY26, p3, filed 24 Jul 2026"
> "ii" · "₹12,971 Cr" · "order book at 31 March 2026, standalone, 3.29 times FY26 standalone revenue." · "Annual Report FY26, note 22.2, p150; ratio is Crestline arithmetic"
> "iii" · "₹524.17 Cr" · "NHPC Salal Power Station contract, over 27 months." · "HCC press release on NSE, 11 Aug 2026"
> "iv" · "Working capital discipline" · "named among the company's priorities." · "Annual Report FY26, Management Discussion and Analysis, p21"
> "v" · "SAP S/4HANA" · "HCC's ERP move. It will feed Crestline, read-only, built during the pilot." · "Annual Report FY25, p91, filed 21 Jul 2025"

> Closing statement: "The work is won and the systems are in place. What remains is time: how fast each running bill turns into cash."
> Footnote: "[PUB]"
> Footer: "Strictly private · 3 / 16"

## Page 4 · Chapter two

> KICKER: "TWO · THE RUNNING BOOK"
> Chapter label: "Chapter two"
> Headline: see table.
> Hero figure: "₹1,701.67 Cr"
> Under it: "receivables on running contracts at 31 March 2026, standalone. Up ₹340.61 Cr in one year, from ₹1,361.06 Cr at 31 March 2025."

Three side stats:
> "157.8 days" · "between a bill and its cash, on FY26 standalone revenue"
> "₹10.79 Cr" · "one day of FY26 standalone revenue"
> "₹812.63 Cr" · "retention inside trade receivables at 31 March 2026, standalone (non-current ₹72.71 Cr plus current ₹739.92 Cr)"

Chart: "Receivables on running contracts, standalone, ₹ Cr." Columns on one scale from zero. Today, solid: "FY25 ₹1,361.06 Cr" and "FY26 ₹1,701.67 Cr". With Crestline, dashed and hollow, beside FY26 on the same scale: "Ten days less: ₹1,593.80 Cr · 147.8 days · ₹107.87 Cr released once" and "Thirty days less: ₹1,378.06 Cr · 127.8 days · ₹323.61 Cr released once". Label beside the dashed marks: "WITH CRESTLINE · Scenario, not a forecast."
> Takeaway: "The balance falls by exactly the cash released. It is the same move seen as a balance."
> Footnote: "Annual Report FY26, p132 (31 March 2026), p133 (31 March 2025), p131 (retention), p109 (revenue), filed 24 Jul 2026. [RUN] [DAYS] [DAY] [SCN]"
> Footer: "Strictly private · 4 / 16"

## Page 5 · Chapter three

> KICKER: "THREE · THE WAIT TO BE PAID"
> Chapter label: "Chapter three"
> Headline: see table.
> Lead: "On HCC's own ageing table and its own revenue, a running bill took 103.5 days to become cash at 31 March 2025, and 157.8 days at 31 March 2026. Everything in this balance has been invoiced, so most of the wait now ends in the client's act. What HCC controls is the quality and speed of everything before it, and how early a slipping bill is chased."

Chart: "Receivable days on running contracts, standalone, Crestline arithmetic." Columns on one scale from zero. Today, solid: "FY25 103.5 days" and "FY26 157.8 days". With Crestline, dashed and hollow, beside FY26 on the same scale: "Ten days less: 147.8 days · ₹107.87 Cr released once" and "Thirty days less: 127.8 days · ₹323.61 Cr released once". Label: "WITH CRESTLINE · Scenario, not a forecast."
> Takeaway: "What the accounts cannot tell: which project and which bill carries the extra days, whether a bill sat with HCC before it was submitted or with the client after, on whose desk, and since when."
> Footnote: "Annual Report FY26, p132, p133 and p109, filed 24 Jul 2026. [RUN] [DAYS] [DAY] [GST] [SCN]"
> Footer: "Strictly private · 5 / 16"

## Page 6 · Chapter four

> KICKER: "FOUR · WHERE THE NEW CASH WAITS"
> Chapter label: "Chapter four"
> Headline: see table.
> Lead: "The ageing table counts each balance from its transaction date. Bills less than six months old rose by ₹355.45 Cr, more than the whole running book grew (₹340.61 Cr), while bills more than a year old came down. The older book is being worked through. The new bills are where the cash now waits."

Chart (history only, no scenario mark on these columns): "Receivables on running contracts by age from the transaction date, standalone, ₹ Cr." Two groups on one scale from zero.
> "Less than six months" · "FY25 ₹238.12 Cr" · "FY26 ₹593.57 Cr"
> "More than one year" · "FY25 ₹549.54 Cr" · "FY26 ₹529.46 Cr"

Callout, separate from the chart and on its own scale, dashed and hollow, never split by age:
> "WITH CRESTLINE · same cash as page 5, not added"
> "(a) Ten days less on the wait to be paid: ₹107.87 Cr released once"
> "(b) Thirty days less on the wait to be paid: ₹323.61 Cr released once"
> "Scenario, not a forecast."

> Closing statement: "One day of FY26 standalone revenue is ₹10.79 Cr. Ten days are ₹107.87 Cr."
> Footnote: "Annual Report FY26, p132 (31 March 2026) and p133 (31 March 2025), filed 24 Jul 2026. More than one year is the sum of the one to two year, two to three year and more than three year columns, Crestline arithmetic. [RUN] [DAY] [SCN]"
> Footer: "Strictly private · 6 / 16"

## Page 7 · Chapter five (fixed)

> KICKER: "FIVE · ENTER CRESTLINE"
> Chapter label: "Chapter five"
> Headline: see table.
> "Once connected, Crestline reads your ERP and shows which bills and retention are stuck, on which site, and how many crores. Here is each lens, and the HCC figure it would open up."
> "01 Working capital · WC · The cash a project eats before it pays you back." · "₹10.79 Cr" · "one day of FY26 standalone revenue"
> "02 Order to cash · O2C · From work done on site to money in the bank." · "157.8 days" · "receivables on running contracts, FY26, Crestline arithmetic"
> "03 Procure to pay · P2P · From a site's material request to the vendor getting paid." · "₹2,017.40 Cr" · "owed to vendors at 31 March 2026"
> "04 Client · WHO PAYS SLOW · Which clients pay slow, and why." · "₹812.63 Cr" · "retention inside trade receivables at 31 March 2026"
> "05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate." · "₹111.54 Cr" · "owed to micro and small enterprises at 31 March 2026"
> "Know where your money is waiting, and who can release it."
> "READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS"
> Footnote: "All five figures standalone. Annual Report FY26, p109 (revenue), p132 (receivables), p131 (retention), p148 (vendors and micro and small enterprises), filed 24 Jul 2026. [DAYS] [DAY]"
> Footer: "Strictly private · 7 / 16 · Now, on HCC's published figures."

## Page 8 · Chapter six (fixed, upper half pack copy)

> KICKER: "SIX · THE CLOCK THE ERP ALREADY KEEPS"
> Chapter label: "Chapter six"
> Headline: see table.
> "It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait."
> "CRESTLINE'S VIEWS · DRAWN ON HCC'S PUBLISHED FIGURES · NOTHING FROM YOUR ERP"

Upper half chart (history only, no scenario mark): "Receivables on running contracts at 31 March 2026, by age from the transaction date, standalone, ₹ Cr." Horizontal bars on one scale from zero, in this order:
> "Not due ₹532.90 Cr"
> "Less than six months ₹593.57 Cr"
> "Six months to one year ₹45.74 Cr"
> "One to two years ₹255.91 Cr"
> "Two to three years ₹146.40 Cr"
> "More than three years ₹127.15 Cr"
> Total line: "₹1,701.67 Cr"

Lower half:
> "One bill, from work done to cash in the bank"

Timeline, in this order. Each stage tile carries its name and its ownership tag and nothing else: no day count, no bar length, no share of the total.
> "JOINT MEASUREMENT · HCC AND CLIENT"
> "MB / QS CHECK · HCC"
> "RA BILL PREPARED · HCC"
> "REVIEW STARTED · HCC"
> "REVIEW COMPLETED · HCC"
> "BILL SUBMITTED · HCC"
> "CLIENT ACKNOWLEDGED · CLIENT"
> "CERTIFIED · CLIENT"
> "TAX INVOICE RAISED · HCC"
> "PAYMENT RECEIVED · CLIENT"
> "RETENTION RELEASED · CLIENT"
> "Ownership: HCC: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay."
> "Receivables on running contracts ₹1,701.67 Cr · FY26 standalone revenue ₹3,937.25 Cr · 157.8 days, Crestline arithmetic"
> "Step waits are not public. Once connected, Crestline measures them from the dates your ERP records. This timeline shows the stages, not HCC's days."
> Footnote: "Annual Report FY26, p132 and p109, filed 24 Jul 2026. [RUN] [DAYS]"
> Footer: "Strictly private · 8 / 16 · Illustrative stages. Totals are from published accounts."

## Page 9 · Chapter seven

> KICKER: "SEVEN · A REASON, A DESK, A DATE"
> Chapter label: "Chapter seven"
> Headline: see table.
> Lead: "The filings say how much is waiting. They cannot say why, where, or whose move it is. Crestline reads that from the dates on each bill."

Ruled table, three rows, three columns ("What the filings show" · "What they cannot tell" · "What Crestline names"):
> "157.8 days from bill to cash, from 103.5" · "Which project and which bill carries the extra days, and whether it sat with HCC before submission or with the client after" · "Each wait, priced at the value of a day and owned by whoever makes the act that ends it"
> "₹1,701.67 Cr waiting, up ₹340.61 Cr" · "Which clients and contracts the extra balance belongs to, and how much is not yet due against how much is late on its own due date" · "Each invoice aged on its own due date, never a house average"
> "₹593.57 Cr in bills less than six months old" · "Which of these young bills are inside their term and which are already late, and whose desk each is on" · "The bill, the desk and the next step, with a deadline"

Vendor block:
> "₹2,017.40 Cr owed to vendors at 31 March 2026, of which ₹111.54 Cr to micro and small enterprises." · "Crestline judges each payment against the vendor's own due date. Paying early is cash lent at zero; paying late is risk. Paying vendors later is never counted as a saving."
> Footnote: "Annual Report FY26, p132, p133, p109 and p148, filed 24 Jul 2026. [RUN] [DAYS]"
> Footer: "Strictly private · 9 / 16"

## Page 10 · Chapter eight

> KICKER: "EIGHT · THE SIMULATOR"
> Chapter label: "Chapter eight"
> Headline: see table.
> Lead: "The simulator moves the real receivable balance at the measured value of a day, stops at the payment term each contract states, and shows the cash released. Make this the plan writes the simulated figure into a ticket as its target."

Card, Simulator (dashed and hollow marks, "Scenario, not a forecast." beside them):
> "Wait to be paid, ten days less" · "157.8 to 147.8 days" · "₹107.87 Cr released once"
> "Wait to be paid, thirty days less" · "157.8 to 127.8 days" · "₹323.61 Cr released once"
> "Vendors paid later" · "₹0.00 Cr released" · "never counted as a saving"

Card, Vendor advisor:
> "Each vendor's payment against that vendor's own due date. The target is the due date: not earlier, which lends cash at zero, and not later, which is risk."
> "₹2,017.40 Cr owed to vendors, ₹111.54 Cr to micro and small enterprises, at 31 March 2026."

Card, Client lens:
> "Where each client's cash is stuck, whose delay it is, and when it lands. Retention is shown as its own ledger, held to the defect period, so it does not blur the reading of the running bills."
> Chips: "Transport" · "Hydro" · "Water" · "Nuclear and buildings"
> Footnote: "Annual Report FY26, p132, p109 and p148, filed 24 Jul 2026. Business lines as in HCC's Q4 FY26 investor presentation, 14 May 2026, p4. [DAY] [SCN]"
> Footer: "Strictly private · 10 / 16"

## Page 11 · Chapter nine (fixed)

> KICKER: "NINE · FROM A FINDING TO A CLOSED TICKET"
> Chapter label: "Chapter nine"
> Headline: see table.
> "Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your ERP's records, never generated by a model."
> "The auditor · How one finding reads · on HCC's published figures"
> "FINDING (WARNING): Receivables on running contracts wait 157.8 days, from 103.5 a year earlier, standalone."
> "ROOT CAUSE: Not visible in public accounts. From your ERP in the pilot: which client, which site, which bill, and which step of measure, prepare, submit, certify and pay holds the days."
> "DO THIS: The named bills that must move, each with a deadline, opened by the target: 157.8 to 147.8 days, ₹107.87 Cr released once."
> "Owner: Commercial head · due in 7 days · EXAMPLE"
> "Raise ticket · Alert owner"
> "01 Ticket raised: Baseline, target and due date are fixed at that moment."
> "02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed."
> "03 Re-measured: The same figure, from fresh data, each time the source syncs."
> "04 Verified: Closed only when the number moves. Nobody can mark it done by hand."
> "Ask Crestline: a question answered from HCC's own evidence · Retrieval, then code"
> "What if running bills were paid ten days sooner?"
> "157.8 to 147.8 days. ₹107.87 Cr released, once. No interest is priced: this scenario counts cash only."
> "Illustrative answer on published figures. Once connected, the live answer comes from your ERP."
> "01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen."
> "02 Simulates: A what-if runs through the simulator, inside the contract's bounds."
> "03 Computes: Code does the arithmetic. The model never produces a number."
> "04 Answers: Figures first, then the evidence. Where nothing matches, it says so."
> "Question kinds: Position · Why · What now · What if · Compare projects · Projection"
> Footnote: "Finding from the Annual Report FY26, p132, p133 and p109, filed 24 Jul 2026. [RUN] [DAYS] [DAY]"
> Footer: "Strictly private · 11 / 16 · Scenario on HCC's published figures, not a forecast."

## Page 12 · Chapter ten

> KICKER: "TEN · PRICED"
> Chapter label: "Chapter ten"
> Headline: see table.
> Lead: "Two steps on the wait to be paid, priced on receivables on running contracts of ₹1,701.67 Cr."

Two big figures:
> "₹107.87 Cr" · "ten days less, cash released once"
> "₹323.61 Cr" · "thirty days less, cash released once"

Ruled table ("Move" · "Days" · "Cash released once"):
> "Wait to be paid, ten days less" · "157.8 to 147.8" · "₹107.87 Cr"
> "Wait to be paid, thirty days less" · "157.8 to 127.8" · "₹323.61 Cr"
> "Vendors paid later" · "none counted" · "₹0.00 Cr"

Chart: "Receivables on running contracts, standalone, ₹ Cr." One scale from zero. Today, solid: "₹1,701.67 Cr". With Crestline, dashed and hollow: "₹1,593.80 Cr after ten days less" and "₹1,378.06 Cr after thirty days less". Label: "WITH CRESTLINE · Scenario, not a forecast."
> Closing statement: "Cash is released once, not every year. The two rows overlap and are never added."
> Footnote: "Annual Report FY26, p132 and p109, filed 24 Jul 2026. [RUN] [DAYS] [DAY] [GST] [SCN]"
> Footer: "Strictly private · 12 / 16"

## Page 13 · Chapter eleven

> KICKER: "ELEVEN · DONE BEFORE"
> Chapter label: "Chapter eleven"
> Headline: see table.
> Lead: "The faster book is not a theory. HCC has run it."

Ruled rows:
> "i" · "90.9 days" · "receivable days on running contracts at 31 March 2024, standalone." · "Annual Report FY25, p136 and p113, filed 21 Jul 2025; Crestline arithmetic"
> "ii" · "103.5 days" · "the same measure at 31 March 2025." · "Annual Report FY26, p133 and p109, filed 24 Jul 2026; Crestline arithmetic"
> "iii" · "₹549.54 Cr to ₹529.46 Cr" · "bills more than a year old, 31 March 2025 to 31 March 2026: the older book is being worked through." · "Annual Report FY26, p133 and p132; sum of three age columns, Crestline arithmetic"

> Closing statement: "Even the thirty-day step, 127.8 days, is slower than the 103.5 days of a year earlier. The scenario is a step, not a target."
> Footnote: "[RUN] [DAYS] [SCN]"
> Footer: "Strictly private · 13 / 16"

## Page 14 · Chapter twelve (fixed)

> KICKER: "TWELVE · READ-ONLY BY DESIGN"
> Chapter label: "Chapter twelve"
> Headline: see table.
> "Crestline is read-only by design, and your ERP stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems."
> "READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user."
> "ON RECORD · Every sync is logged, and your IT team can see it."
> "YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection."
> "PILOT SCOPE · One to three running domestic projects. One standalone entity, in rupees, read-only, 14 days."
> "What Crestline is not"
> "Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run."
> "Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done."
> "Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline."
> "Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual."
> "14 days · of read-only analysis, starting once your ERP is connected. The adapter for your ERP is built first."
> "First sync · gives the first ranked list of delays."
> "No change · to how your finance team works, or to the ERP you run."
> Footer: "Strictly private · 14 / 16 · The next page is yours."

## Page 15 · The invitation (fixed)

> KICKER: "THIRTEEN · THE INVITATION"
> Headline: see table.
> "A pilot built around your ERP, on one to three running domestic projects of your choice, in rupees, read-only. At the end you hold a list of the bills and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your ERP is built first; the 14 days of read-only analysis start once it is connected."
> "SCAN TO BOOK A TIME: crestlineintelligence.com/book-a-demo"
> "Before day 1: adapter built for your ERP, read-only connection approved"
> "Days 1 to 14: read-only analysis, then the list, reviewed with your team"
> Day dots 1 to 14, counted from the day the connection is approved.
> "We would value a thirty-minute call at a time that suits you. Scan the code, call or write."
> "SOURCES AND NOTES"
> "Sources, all HCC's own filings, standalone, in ₹ crore. Annual Report FY26, filed 24 Jul 2026: revenue from operations p109; retention p131; trade receivables ageing p132 (31 March 2026) and p133 (31 March 2025); trade payables and micro and small enterprises p148; order book note 22.2, p150; priorities p21; one hundred years p3. Annual Report FY25, filed 21 Jul 2025: SAP S/4HANA p91; receivables ageing p136 and revenue p113 (31 March 2024). HCC press release on NSE, 11 Aug 2026: NHPC Salal Power Station. Q4 FY26 investor presentation, 14 May 2026, p4: business lines. Receivables on running contracts are the first line of the ageing table, receivables considered good. Receivable days are that balance / standalone revenue x 365. Value of a day ₹10.79 Cr = ₹3,937.25 Cr / 365. Nothing here comes from HCC's ERP. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days x revenue per day. No interest is priced: these scenarios count cash only. Cash is released once. Scenarios overlap and are never added. Receivables carry GST and revenue does not, so the cash figures are conservative. Not a forecast or a commitment. Step waits on page 8 are not public and are not drawn. If this booklet reached you in error, please call +91 76209 35398 and we will collect it."
> Footer: "Strictly private · 15 / 16"

## Page 16 · Back cover (fixed)

> Vertical tagline: "Know where your money is waiting, and who can release it."
> "STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1"
> Headline: see table.
> "A thirty-minute call, at a time that suits you"
> "Rajat Kate"
> "Managing Director"
> "Crestline Intelligence Private Limited"
> "Pune, Maharashtra"
> "+91 76209 35398"
> "rajat@crestlineintelligence.com"
> "www.crestlineintelligence.com"
> "BOOK A TIME"

## Checks

Run 8 Oct 2026, `python -I scan.py` in the HC-5 scratch folder. Every pattern first hit planted.txt (planted untraced number 7,777.13 caught; planted script SVG caught 3). Minimum region: pack 15,000 chars (actual 23,362), prompt 25,000 (actual 34,711).

| Check | Pack printed region | Master prompt |
|---|---|---|
| Placeholders, comments | 0, 0 | 0, 0 |
| Company names (21-name list, word bounded) | 0 | 0 |
| Internal references | 0 | 0 |
| Dashes (U+2012 to U+2015, U+2212, spaced hyphen, double hyphen; table rules masked) | 0 | 0 |
| KEPT OUT terms and debt figures | 0 | 0 (template rule A1 and check 8 reworded from "claim" to "statement") |
| Interest figures | 0 | 0 |
| "The design to reproduce" | 0 | 0 |
| AI-tell words | 0 | 0 |
| "You said" in Content | 0 | 0 |
| Numbers untraced | 0 of 69 | 0 of 73 |

* Pack pasted byte for byte: prompt ends with the region "## Keys" to before "## Checks" (23,699 bytes); a one-character planted change is caught. Reader table and letters also identical.
* Rows 107.87 and 323.61 appear only as overlapping alternatives, never summed. No signed figures. Page 8 tiles carry name and tag only.
* Readers: exact AR FY26 titles. Neither letter uses "you said"; both credit the Annual Report by name.
* Logo: hcc/assets/hcc-logo.svg, byte-identical to the download, 0 script hits.
