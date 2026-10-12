# Jyoti Structures: slots-unified pack (JS-5)

One 16-page pack for the master design. Internal sections first (never printed), then the reader table, then the printed region from "## Keys" through "## Page 16", then the checks. The master prompt takes the reader table and the printed region byte for byte.

## Internal: basis and rulings applied (not printed)

- Entity and basis: Jyoti Structures Limited, STANDALONE, Annual Report FY26 vintage only. Every Mar 2025 day figure uses the FY25 revenue printed as the comparative in AR FY26 (Rs 498.04 Cr). Value of a day: FY26 revenue Rs 750.87 Cr / 365 = Rs 2.057 Cr.
- Filing dates (data.md section 1): AR FY26 submitted to the exchanges 22 Jul 2026; Q1 FY27 results 4 Aug 2026. Latest non-sensitive primary filing used: Q1 FY27 results, 4 Aug 2026 (the 4 Aug 2026 monitoring agency report, the AGM proceedings and the NSE query are sensitive and are not used). Data footing: "as published up to 4 Aug 2026".
- Story: two problems after JS-4. P1 the running book (220 to 116 days) with the under-6-months context panel inside the same chart; P3 advances, neutral. Rows A (Rs 20.57 Cr, 116 to 106 days) and B (Rs 61.72 Cr, 116 to 86 days), cash released once, never added. Panel values 94 and 74 days carry no cash label.
- No interest, no financing words. The one exception is the FIXED-PAGES interest variant sentence on p15, required word for word: "No interest is priced, because no borrowing rate is published."
- ERP: printed as "your ERP" and "ERP" only. Nothing about its vendor or status.
- Pilot (JS-3): one to three running transmission projects, standalone, read-only, 14 days; the adapter for your ERP is built first ("will feed, read-only, built during the pilot").
- Tagline (client correction): "Know where your money is waiting, and who can release it." replaces the fixed "trapped" line on p7 and p16.
- Footer teasers: allowed (FIXED-PAGES carries them on p7, p8, p11, p14); each is given as quoted copy.
- Chapter numbering (Garvis ruling 3, JS-6): chapter four is kept, so chapters one to eleven run on p3 to p13; p14 is an unnumbered TRUST page; the invitation kicker on p15 therefore reads TWELVE, as FIXED-PAGES prints it. The tagline is the only fixed wording changed.
- Kept out of every printed line: S1 to S15 of sensitive-garvis.md and the JS-3 list (the oldest ageing bucket and its share, the whole-book days figure, the restatement, the unexplained rise, margin money, operating cash outflows, the rights issue, the vacancies, the late Chairman). No borrowings figure is used anywhere, because every borrowing line sits inside S2.

## Internal: page numbers (not printed)

data.md cites the PDF page index. The booklet prints the Annual Report's own printed page number so a reader can open the book at it. Checked by script on AR FY26 (each page's text holds the figure and its printed folio): printed = PDF index less 2.

| Figure | PDF index (data.md) | Printed page (booklet) |
|---|---|---|
| CFO letter quote | p7 | p.5 |
| Order book Rs 2,274 Cr | p15 | p.13 |
| Revenue from operations, FY26 and FY25 | p89 | p.87 |
| Inventories Rs 146.01 Cr | p96 | p.94 |
| Trade payables Rs 116.20 Cr, MSME Rs 5.51 Cr | p99 | p.97 |
| Advances from customers | p100 | p.98 |
| Payment and advance policy wording | p105 | p.103 |
| Receivables ageing | p124 | p.122 |
| Q1 FY27 revenue (results, scanned) | p2 | p.2 |

## Internal: slot map against TEMPLATE-SLOTS.md (not printed)

| Slot | Filled with | Fallback used |
|---|---|---|
| COMPANY_NAME | Jyoti Structures Limited; short "Jyoti Structures" | |
| ADDRESSEE | Edition 1 Abdul Hameed Khan; Edition 2 Amit Dutta (see Editions) | |
| SECOND_CONTACT | each edition names the other reader | |
| LETTER_DATE | October 2026 (Garvis ruling 2, JS-6); cover month October 2026 | |
| BS_DATE | 31 Mar 2026 | |
| REVENUE_FY | Rs 750.87 Cr | |
| REV_SERIES | FY25 Rs 498.04 Cr and FY26 Rs 750.87 Cr (AR FY26 one vintage) | 2 years, no indexed lines |
| REC, STUCK_TOTAL | running book Rs 238.93 Cr | whole-book receivables kept out (JS-3); cover hero is ten days (Rs 20.57 Cr) |
| CA | none published | no unbilled/unpaid split on p4, p8, p10, p12; p10 says the unbilled leg is measured in the pilot |
| REC_SERIES | running book Mar 2025 Rs 299.54 Cr, Mar 2026 Rs 238.93 Cr | 2 points, one vintage |
| PAYABLES, MSME_PAYABLES | Rs 116.20 Cr; Rs 5.51 Cr | |
| BORR_SERIES, RATE | not used (S2; no rate) | p5 borrowings stat replaced by the payment policy; p12 bar set against the running book instead |
| AGEING_FY, AGEING_PRIOR | not used as bands | p9 ageing replaced by the P3 advances chart; over-six-month tiles dropped |
| TERMS | policy "payable within 90 days or less" | printed as policy, never compared with a days-of-revenue figure |
| AR_DEBTOR_DAYS | not used (label says days, values are turnover multiples) | "agrees" sentence omitted |
| WC_TARGET, WC_CURRENT, GAP_DAYS, TARGET_CASH | none stated | p12 retitled to the 10-day and 30-day steps |
| WC_REDUCED | the company's own 220 to 116 days | self proof on p3 and p13 |
| ORDER_BOOK, ORDER_BOOK_MULT | Rs 2,274 Cr; 3.03 times | |
| PROMISE_1..N | the company's own record, five lines | p3 retitled "five lines" |
| OPPROFIT, WC_CHANGE, TAX_PAID, OPCASH series | not used (operating cash kept out) | p8 waterfall dropped; the bill timeline takes the page |
| CLIENT_LIST | categories from the order filings | categories, not names |
| PEER_SET, PROOF_A, PROOF_B | none | p9 vendor card without peers; p13 own proof only |
| Q_EVENT, Q_FIGURES | Q1 FY27 growth as filed | chapter four kept |
| REV_PER_DAY | Rs 2.057 Cr; June quarter Rs 2.763 Cr (data.md, context only) | |
| DSO_DAYS, COMBINED, DOT_COUNT | running book 116 days | |
| CA_DAYS | none | |
| DPO_DAYS | 67 days (data.md, computed) | |
| TEN_DAYS, SIM_30 | Rs 20.57 Cr; Rs 61.72 Cr (calc Rows A, B) | TEN_PLUS_TEN and SIM_BOTH dropped (one leg only) |
| TEN_INT, TARGET_INTEREST, SIM_INT, PCT_OF_BORR | none | no interest (JS-3) |
| OVER6M, PROFIT_SHARE | none | kept out |
| STEP_SPLIT | none | FIXED-PAGES rule 3: no step days |

## Internal: logo (not printed)

Downloaded 8 Oct 2026 from the company's own site (jyotistructures.in header and footer), via content.app-sources.com, which the site serves its images from:
- jyoti/assets/jsl-logo-hd-transparent.png: PNG, 1736 x 1076 px, 34,234 bytes, transparent background, stacked mark with "JYOTI STRUCTURES LIMITED" and "SINCE 1974". Use this one.
- jyoti/assets/jsl-logo-header.png: PNG, 681 x 194 px, 8,183 bytes, horizontal lockup from the site header.
No SVG is offered by the site, so no script, onload or external-href check applies. Both files open as valid PNGs (signature and size read by script). Use as supplied, never redrawn.

## Internal: editions (not printed)

- Edition 1: Mr. Abdul Hameed Khan, "Whole-Time Director and Chief Financial Officer" (AR FY26 PDF p7, his letter). Still in office: signed the Q1 FY27 results on 4 Aug 2026.
- Edition 2: Mr. Amit Dutta, "Chief Operating Officer". The exchange filing of 5 Feb 2026 (ann_FinalPressRelease-0284533, page 1, the company's letter to the exchanges) prints "Mr. Amit Dutta is appointed as the Chief Operating Officer (COO) of the Company"; page 2 repeats "Amit Dutta, Chief Operating Officer, Jyoti Structures Limited". Still in office as far as the filings show: the two KMP cessation filings of 29 May 2026 (read in the session scratch) both concern the CEO only, and the NSE index to 8 Oct 2026 carries no other cessation.
- Address for both: the registered office as AR FY26 prints it (PDF p3, printed p.1): "Valecha Chambers, 6th Floor, New Link Road, Andheri (West), Mumbai-400 053, Maharashtra State, India".

## Reader table

Sender for every edition: Rajat Kate, Managing Director, Crestline Intelligence Private Limited, Pune, Maharashtra, +91 76209 35398, rajat@crestlineintelligence.com, www.crestlineintelligence.com.

### Edition 1: Abdul Hameed Khan

Cover, PREPARED EXCLUSIVELY FOR: "Mr. Abdul Hameed Khan" / "Whole-Time Director and Chief Financial Officer"

Address block (TO): "Mr. Abdul Hameed Khan" / "Whole-Time Director and Chief Financial Officer" / "Jyoti Structures Limited" / "Valecha Chambers, 6th Floor, New Link Road," / "Andheri (West), Mumbai-400 053" / "Maharashtra State, India"

Salutation: "Dear Mr. Khan," (surname in gold)

Letter date: "October 2026"

Letter text:
"This booklet is about ten days, and what they are worth to Jyoti Structures."
"I have read the Annual Report for FY26 and the results for the June quarter with one question in mind. Revenue from operations rose 50.76% to ₹750.87 Cr. The June quarter ran 61% ahead of the same quarter a year earlier. The order book stood at ₹2,274 Cr on 1 April 2026. In the same year, the bills of the running business came down from 220 days of revenue to 116. The rebuild is working."
"With the book growing this fast, the question that follows is how quickly each new bill turns into cash. At FY26 revenue, every ten days between a bill and its cash is ₹20.57 Cr, released once. Thirty days is ₹61.72 Cr. Both are scenarios on the published figures, not forecasts, and they are alternatives, not a sum."
"The pages that follow use only what Jyoti Structures has published. Crestline finds those days bill by bill and site by site, and names whose move ends each wait. It sits above your ERP and only reads."
"I would value thirty minutes with you, or with Mr. Amit Dutta. The invitation is on page 15."
"Yours sincerely,"
Signature block: "Rajat Kate" / "Managing Director, Crestline Intelligence"

### Edition 2: Amit Dutta

Cover, PREPARED EXCLUSIVELY FOR: "Mr. Amit Dutta" / "Chief Operating Officer"

Address block (TO): "Mr. Amit Dutta" / "Chief Operating Officer" / "Jyoti Structures Limited" / "Valecha Chambers, 6th Floor, New Link Road," / "Andheri (West), Mumbai-400 053" / "Maharashtra State, India"

Salutation: "Dear Mr. Dutta," (surname in gold)

Letter date: "October 2026"

Letter text:
"This booklet is about ten days, and what they are worth to Jyoti Structures."
"The Annual Report for FY26 puts the order book at ₹2,274 Cr on 1 April 2026, 3.03 times the year's revenue of ₹750.87 Cr, and the June quarter ran 61% ahead of the same quarter a year earlier. In the same year, the bills of the running business came down from 220 days of revenue to 116. The rebuild is working."
"Every one of those bills passes through steps the company owns: its side of the joint measurement, the RA bill, its review and submission, the tax invoice. The client then acknowledges, certifies and pays. The published accounts show one total for all of it. They do not show which line, which bill or which step is holding the days."
"At FY26 revenue, every ten days between a bill and its cash is ₹20.57 Cr, released once. Thirty days is ₹61.72 Cr. Both are scenarios on the published figures, not forecasts, and they are alternatives, not a sum. Crestline finds those days bill by bill and site by site, and names whose move ends each wait. It sits above your ERP and only reads."
"I would value thirty minutes with you, or with Mr. Abdul Hameed Khan. The invitation is on page 15."
"Yours sincerely,"
Signature block: "Rajat Kate" / "Managing Director, Crestline Intelligence"

Both editions: P.S. line left blank for a handwritten note. Disclaimer line under the letter, same in both: "Every figure is from Jyoti Structures' published filings, standalone. Scenarios are Crestline arithmetic on the published figures, not forecasts."

## Keys

Where a footnote carries a tag in brackets, print this line in its place, in full.
- [SCN] "Scenario, not a forecast."
- [CA] "Crestline arithmetic on the published figures."
- [DAYS] "Days are a balance divided by that year's revenue from operations, times 365; 31 Mar 2025 days use FY25 revenue of ₹498.04 Cr as printed in the Annual Report FY26, p.87, filed 22 Jul 2026, standalone."
- [ONCE] "Cash is released once. The 10-day and 30-day steps are alternatives on the same bills and are never added."
- [DUE] "The ageing note counts each bill from its due date of payment, not from the day the bill was raised. Receivables include GST and revenue does not, so the cash figures are conservative."

## Headline table

Line 2 in gold. A full stop after a headline is in ink.

| Page | Line 1 | Line 2 (gold) |
|---|---|---|
| 1 | "Working-capital" | "review" (cover title, white, no gold) |
| 2 | "Dear Mr. Khan," / "Dear Mr. Dutta," | surname in gold, per edition |
| 3 | "It begins with five lines," | "all from your own filings." |
| 4 | "Meanwhile, the running book" | "is down to 116 days." |
| 5 | "The book is growing." | "The bills are turning faster." |
| 6 | "The June quarter grew 61%." | "Each day is now worth more." |
| 7 | "Where does project cash get stuck?" | "Five lenses." |
| 8 | "Crestline reads the dates" | "your ERP records." |
| 9 | "Less client money" | "now funds the work." |
| 10 | "Test the fix before you make it." | "Then put a name on it." |
| 11 | "A finding gets an owner," | "a date and an auditor." |
| 12 | "Ten days and thirty days," | "priced." |
| 13 | "It has been done before." | "At Jyoti Structures." |
| 14 | "Read-only on your books." | "Nothing is written back." |
| 15 | "Give us one to three running transmission projects" | "and fourteen days." |
| 16 | "Every waiting rupee," | "with a site, a desk and a date." |

Backgrounds: pages 1 and 16 navy field with the gold curve lines; pages 4, 7 and 12 full navy; page 15 cream with the navy sources band; every other page cream.
Running head, right side: "JYOTI STRUCTURES LIMITED" on pages 2 to 6, 9, 12 and 15; "CRESTLINE INTELLIGENCE" on pages 7, 8, 10, 11 and 14; "PUBLIC RECORD" on page 13.
Footer teasers: each page's teaser is set on the left, after the folio on the same footer line, in the same 6 pt muted type. Nothing sits on the right.
Company logo: the uploaded file jsl-logo-hd-transparent.png, used as supplied, on the cover only. If it is not uploaded, the cover shows the reader's name only.

## Page 1. Cover

Navy field, gold curve lines.
Top left: "STRICTLY PRIVATE & CONFIDENTIAL". Top right: "COPY NO. 1 OF 1".
Below the hairline: "Prepared for the addressee only. Please do not forward or copy."
Title: "Working-capital review"
Under the title: "Jyoti Structures Limited"
Then: "October 2026"
Hero line, set in caps on the topmost curve: "₹20.57 CR IN EVERY TEN DAYS BETWEEN A BILL AND ITS CASH"
White strip, left column: "PREPARED EXCLUSIVELY FOR", the company logo if uploaded, then the reader's name and title from the reader table.
White strip, right column: "DRAFTED BY", the Crestline logo and "Crestline Intelligence", then "Rajat Kate" and "Managing Director".
Footnote, 6 pt, in the white strip under both columns: "Ten days of FY26 revenue: ₹750.87 Cr ÷ 365 = ₹2.057 Cr a day, × 10 = ₹20.57 Cr. [CA] Standalone, Annual Report FY26, p.87, filed 22 Jul 2026. [SCN]"

## Page 2. A letter

Running head: "A LETTER" · right "JYOTI STRUCTURES LIMITED".
Date in gold, salutation, TO block, letter text and signature: from the reader table, per edition.
FROM block: Crestline logo small, then "Crestline Intelligence Private Limited" / "Pune, Maharashtra" / "+91 76209 35398" / "rajat@crestlineintelligence.com" / "www.crestlineintelligence.com".
"P.S." with a ruled writing line, left blank.
Footer: "Strictly private · 2 / 16" · teaser "Please read on."

## Page 3. Chapter one

Running head: "ONE · THE RECORD" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "Chapter one"
Headline: "It begins with five lines, all from your own filings."
Lead: "Nobody outside Jyoti Structures wrote these. They come from the Annual Report for FY26 and the results for the June quarter."
Ruled rows (roman numeral in gold, figure in navy Bold, description and source at right):
- i. "₹750.87 Cr" · "revenue from operations in FY26, 50.76% above FY25" · source: "Annual Report FY26, p.87, filed 22 Jul 2026, standalone"
- ii. "61%" · "revenue growth in the June quarter of FY27: ₹251.46 Cr against ₹156.19 Cr" · source: "Q1 FY27 results, p.2, filed 4 Aug 2026, standalone"
- iii. "₹2,274 Cr" · "order book on 1 April 2026, 3.03 times FY26 revenue" · source: "Annual Report FY26, p.13, filed 22 Jul 2026. Multiple: Crestline arithmetic on the published figures."
- iv. "220 to 116 days" · "receivables of the running business, in days of revenue, 31 Mar 2025 to 31 Mar 2026" · source: "Annual Report FY26, p.122 and p.87, filed 22 Jul 2026, standalone. Crestline arithmetic on the published figures."
- v. "Timely delivery" · "'We continue to focus on quality execution, timely delivery, prudent risk management, and maintaining financial discipline across all our operations.' Abdul Hameed Khan, Whole-Time Director and Chief Financial Officer." · source: "Annual Report FY26, p.5, filed 22 Jul 2026"
Closing statement, 11 pt: "Read the list once more. Two of the five are about time."
Second sentence in gold italic: "This booklet is about the next ten days."
Footer: "Strictly private · 3 / 16" · teaser "Turn the page."

## Page 4. Chapter two (navy)

Running head: "TWO · WHAT THE ACCOUNTS SAY" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "Chapter two"
Headline: "Meanwhile, the running book is down to 116 days."
Hero: "₹238.93" with the suffix "Cr"
Under the hero: "receivables of the running business at 31 Mar 2026, up to three years past their due date. 116 days of FY26 revenue."
Chart (dot grid, problem chart for P1): 365 dots in rows, one dot per day of FY26 revenue. Today: 116 dots lit in gold, the rest faint. With Crestline: the last ten lit dots drawn as hollow dashed rings, labelled "With Crestline, 10 days sooner: 106 days, ₹20.57 Cr released once. Scenario, not a forecast."
Legend line under the grid: "116 of 365 days lit. Each dot is one day of FY26 revenue, ₹2.057 Cr."
Three side stats, separated by thin vertical rules (history, no scenario mark):
- "104 days" · "the newest part of the same book, under six months past due: ₹214.18 Cr. Same cash, not added."
- "220 days" · "the same book a year earlier: ₹299.54 Cr at 31 Mar 2025."
- "45 days" · "advances from customers: ₹92.92 Cr, down from 98 days."
Footnote: "Running book and newest bills: Annual Report FY26, p.122; revenue p.87; advances p.98; all filed 22 Jul 2026, standalone. [DAYS] [DUE] [CA] [SCN]"
Footer: "Strictly private · 4 / 16" · teaser "And the book is growing."

## Page 5. Chapter three

Running head: "THREE · THE BOOK IS GROWING" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "Chapter three"
Headline: "The book is growing. The bills are turning faster."
Lead: "Revenue from operations rose 50.76% in FY26. In the same year the receivables of the running business fell from 220 days of revenue to 116. The team billed more work and turned it into cash faster at the same time. Anything Crestline adds comes on top of that progress."
Card title: "Running book, days of revenue" · context line: "Standalone, at each 31 March"
Chart (problem chart for P1): vertical bars, one axis in days starting at zero, shared by every bar on this card and by the panel below. Value labels only; no axis numbers.
- "31 Mar 2025" · "220 days" · solid slate
- "31 Mar 2026" · "116 days" · solid amber into peach
- "With Crestline, 10-day step" · "106 days" · hollow, dashed outline · label "10 days, ₹20.57 Cr released once"
- "With Crestline, 30-day step" · "86 days" · hollow, dashed outline · label "30 days, ₹61.72 Cr released once"
Caption on the two solid bars: "The rebuild at work: 220 days to 116 in one year."
Beside the hollow bars: "Scenario, not a forecast."
Context panel inside the same card, same day scale, titled "Newest part of the same book: same cash as above, not added"
- "31 Mar 2025, under six months" · "129 days" · solid
- "31 Mar 2026, under six months" · "104 days" · solid
- "With Crestline, 10-day step" · "94 days" · hollow, dashed, no cash label
- "With Crestline, 30-day step" · "74 days" · hollow, dashed, no cash label
Takeaway (gold dot): "The newest bills grew from ₹176.04 Cr to ₹214.18 Cr with the business and fell from 129 days of revenue to 104. Fresh bills are turning faster."
Three stats below the card:
- "₹2,274 Cr" · "order book on 1 April 2026, 3.03 times FY26 revenue. The work is secured."
- "50.76%" · "revenue growth in FY26, from ₹498.04 Cr to ₹750.87 Cr."
- "90 days or less" · "the company's payment policy: 'Payment is generally due upon receipt of the invoice, payable within 90 days or less.'"
Footnote: "Ageing: Annual Report FY26, p.122; revenue p.87; order book p.13; policy p.103; all filed 22 Jul 2026, standalone. [DAYS] [DUE] [ONCE] [CA] [SCN]"
Footer: "Strictly private · 5 / 16" · teaser "And then came June."

## Page 6. Chapter four

Running head: "FOUR · THE JUNE QUARTER" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "Chapter four"
Headline: "The June quarter grew 61%. Each day is now worth more."
Lead: "Revenue from operations in the quarter to 30 June 2026 was ₹251.46 Cr, against ₹156.19 Cr in the same quarter a year earlier. As revenue grows, every day a bill waits holds more cash."
Strip: a row of thirty small day boxes; ten of them drawn hollow with a dashed outline and labelled "Ten days · ₹20.57 Cr at FY26 revenue · Scenario, not a forecast." No other values on the strip.
Three tiles (history, no scenario mark):
- "Revenue, June quarter" · "₹251.46 Cr" · "₹156.19 Cr in the same quarter a year earlier"
- "Growth" · "61%" · "on the same quarter a year earlier"
- "Revenue a day" · "₹2.763 Cr" · "in the June quarter, against ₹2.057 Cr across FY26"
Navy box, left: "The work is coming in. The open question is how fast each new bill turns into cash, and which days, on which line, sit on whose desk. The published accounts cannot say. The dates in your ERP can."
Navy box, right: "₹20.57 Cr" · "is what ten days are worth at FY26 revenue. One day of FY26 revenue is ₹2.057 Cr."
Footnote: "June quarter: Q1 FY27 results, p.2, filed 4 Aug 2026, standalone. FY26 revenue: Annual Report FY26, p.87, filed 22 Jul 2026, standalone. Revenue a day: [CA] The cash figures in this booklet use the FY26 rate. [SCN]"
Footer: "Strictly private · 6 / 16" · teaser "This is where Crestline comes in."

## Page 7. Chapter five (navy, fixed)

Running head: "FIVE · ENTER CRESTLINE" · right "CRESTLINE INTELLIGENCE".
Chapter label: "Chapter five"
Headline: "Where does project cash get stuck? Five lenses."
Lead: "Once connected, Crestline reads your ERP and shows which bills and retention are stuck, on which site, and how many crores. Here is each lens, and the Jyoti Structures figure it would open up."
Lens rows:
- "01 Working capital · WC · The cash a project eats before it pays you back." · "₹146.01 Cr" · "stock and work in progress at 31 Mar 2026, 71 days of FY26 revenue. Mostly factory stock; outside what the pilot measures."
- "02 Order to cash · O2C · From work done on site to money in the bank." · "116 days" · "receivables of the running business, ₹238.93 Cr at 31 Mar 2026"
- "03 Procure to pay · P2P · From a site's material request to the vendor getting paid." · "₹116.20 Cr" · "owed to vendors at 31 Mar 2026"
- "04 Client · WHO PAYS SLOW · Which clients pay slow, and why." · "90 days or less" · "the payment policy in the Annual Report. Terms per contract are not public."
- "05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate." · "67 days" · "vendor payables against FY26 material, erection and subcontracting cost, one average"
Closing line: "Know where your money is waiting, and who can release it."
Badges: "READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS"
Footnote: "Annual Report FY26, filed 22 Jul 2026, standalone: inventories p.94; receivables ageing p.122; revenue p.87; trade payables p.97; payment policy p.103. Days: [CA] Vendor days divide current trade payables by FY26 material, erection and subcontracting cost."
Footer: "Strictly private · 7 / 16" · teaser "Now, on Jyoti Structures' published figures."

## Page 8. Chapter six (fixed)

Running head: "SIX · THE CLOCK THE ERP ALREADY KEEPS" · right "CRESTLINE INTELLIGENCE".
Chapter label: "Chapter six"
Headline: "Crestline reads the dates your ERP records."
Lead: "It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait."
Lavender strip: "CRESTLINE'S VIEWS · DRAWN ON JYOTI STRUCTURES' PUBLISHED FIGURES · NOTHING FROM YOUR ERP"
Template fallback: the profit-to-cash waterfall is dropped; the bill timeline card takes the full width and the freed space.
Card title: "One bill, from work done to cash in the bank"
Timeline, in this order. Each stage carries its ownership tag and nothing else: no day count, no bar length, no share of the total.
- "JOINT MEASUREMENT · JYOTI STRUCTURES AND CLIENT"
- "MB / QS CHECK · JYOTI STRUCTURES"
- "RA BILL PREPARED · JYOTI STRUCTURES"
- "REVIEW STARTED · JYOTI STRUCTURES"
- "REVIEW COMPLETED · JYOTI STRUCTURES"
- "BILL SUBMITTED · JYOTI STRUCTURES"
- "CLIENT ACKNOWLEDGED · CLIENT"
- "CERTIFIED · CLIENT"
- "TAX INVOICE RAISED · JYOTI STRUCTURES"
- "PAYMENT RECEIVED · CLIENT"
- "RETENTION RELEASED · CLIENT"
"Ownership: Jyoti Structures: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay."
Published totals beside the timeline, at its last two stages: "Running book at 31 Mar 2026: ₹238.93 Cr, 116 days of FY26 revenue. Of it, under six months past due: ₹214.18 Cr, 104 days. The ageing note starts its count at the due date, after the tax invoice."
"Step waits are not public. Once connected, Crestline measures them from the dates your ERP records. This timeline shows the stages, not Jyoti Structures' days."
Footnote: "Totals: Annual Report FY26, p.122 and p.87, filed 22 Jul 2026, standalone. [DAYS] [CA]"
Footer: "Strictly private · 8 / 16" · teaser "Illustrative stages. Totals are from published accounts."

## Page 9. Chapter seven

Running head: "SEVEN · CLIENT MONEY AND VENDOR CREDIT" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "Chapter seven"
Headline: "Less client money now funds the work."
Lead: "Advances from customers came down from ₹134.21 Cr to ₹92.92 Cr over FY26, from 98 days of revenue to 45. This is how advances are meant to work. The company's policy describes them as money 'used to meet working capital requirements at the time of project mobilization stage', and as jobs move past mobilisation the advance comes back through the bills. With less client money in each job, how fast each bill turns into cash matters more every quarter."
Card 1 title: "Advances from customers" · context line: "Standalone, at each 31 March"
Chart (problem chart for P3), two parts, each on its own scale, never stacked:
Part one, Rs Cr, one axis from zero, value labels only:
- "31 Mar 2025" · "₹134.21 Cr" · solid mint into sky
- "31 Mar 2026" · "₹92.92 Cr" · solid mint into sky
Part two, a separate labelled box beside part one, on its own Rs Cr axis from zero, titled "Cash back from collecting sooner, not a new advance":
- "With Crestline, 10 days sooner" · "₹20.57 Cr" · hollow, dashed outline
- "With Crestline, 30 days sooner" · "₹61.72 Cr" · hollow, dashed outline
Beside part two: "Scenario, not a forecast. The same cash as page 5, not added."
Takeaway (gold dot): "The advance is the client's money and Crestline does not move it. What Crestline shows is which project's advance is still open and how much each running bill recovers."
Card 2 title: "Days Jyoti Structures takes to pay vendors" · context line: "Standalone, FY26" (no scenario mark: paying vendors later is never a saving)
- "67 days" · "current trade payables of ₹116.20 Cr against FY26 material, erection and subcontracting cost, one average"
- "₹5.51 Cr" · "owed to micro and small enterprises at 31 Mar 2026"
- "Credit each vendor agreed" · "not public"
Takeaway (gold dot): "One average hides every vendor's own due date. Crestline judges each payment against the date that vendor agreed, and never counts paying later as cash released."
Footnote: "Advances: Annual Report FY26, p.98; policy p.103; trade payables p.97; revenue p.87; all filed 22 Jul 2026, standalone. [DAYS] [ONCE] [CA] [SCN]"
Footer: "Strictly private · 9 / 16" · teaser "From seeing to doing."

## Page 10. Chapter eight

Running head: "EIGHT · FROM SEEING TO DOING" · right "CRESTLINE INTELLIGENCE".
Chapter label: "Chapter eight"
Headline: "Test the fix before you make it. Then put a name on it."
Card 1 title: "Cash cycle simulator" · context line: "Computed on Jyoti Structures' published FY26 figures"
"Move a wait and see the cash it releases. Every lever moves a real balance at its own rate per day, and stops where the contract stops."
Rows (scenario values hollow and dashed):
- "Billed, waiting to be paid" · "10 days sooner: ₹20.57 Cr released once" · "30 days sooner: ₹61.72 Cr released once"
- "Work done, waiting to be billed" · "Measured bill by bill in the pilot, from the dates your ERP records."
- "Vendor credit" · "Held at 67 days. Paying later is never counted as cash released."
Navy strip at the foot of the card: "Ten days or thirty, on the same bills. Not ten plus thirty." · "Scenario, not a forecast."
Card 2 title: "Vendor deal advisor" · badge "P2P"
"Buy on total cost, not the quoted rate. Price and credit are weighed together, and each payment is judged against the due date that vendor agreed. Paying early moves cash out before it has to go. Paying late is never shown as a saving."
"₹116.20 Cr owed to vendors at 31 Mar 2026, ₹5.51 Cr of it to micro and small enterprises."
Card 3 title: "Client" · badge "O2C"
"Which clients pay slow, and why. One certification clock and one payment clock for each client, judged against the terms that client signed. A client's delay is never counted as Jyoti Structures' own."
Client chips (categories, not names): "Central transmission utility" · "Private transmission developers" · "City distribution utility"
Footnote: "Simulator: [CA] at FY26 revenue of ₹2.057 Cr a day, Annual Report FY26, p.87; vendor figures p.97; both filed 22 Jul 2026, standalone. Client categories as named in the company's order filings. [ONCE] [SCN]"
Footer: "Strictly private · 10 / 16" · teaser "Client categories are public. Their clocks come from your ERP."

## Page 11. Chapter nine (fixed)

Running head: "NINE · FROM A FINDING TO A CLOSED TICKET" · right "CRESTLINE INTELLIGENCE".
Chapter label: "Chapter nine"
Headline: "A finding gets an owner, a date and an auditor."
Lead: "Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your ERP's records, never generated by a model."
Card title: "The auditor · How one finding reads · on Jyoti Structures' published figures"
"FINDING (WATCH): Bills of the running business stood at 116 days of FY26 revenue at 31 Mar 2026, down from 220 days a year earlier."
"ROOT CAUSE: Not visible in public accounts. From your ERP in the pilot: which client, which site, which bill, and which step of measurement, certification and payment holds the days."
"DO THIS: The named bills that must move, each with a deadline, opened by the target: take the running book from 116 to 106 days of revenue, ₹20.57 Cr released once."
"Owner: Commercial head · due in 7 days · EXAMPLE"
"Raise ticket · Alert owner"
"01 Ticket raised: Baseline, target and due date are fixed at that moment."
"02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed."
"03 Re-measured: The same figure, from fresh data, each time the source syncs."
"04 Verified: Closed only when the number moves. Nobody can mark it done by hand."
Card title: "Ask Crestline: a question answered from Jyoti Structures' own evidence · Retrieval, then code"
"What if each bill were paid ten days sooner?"
"116 to 106 days on the running book. ₹20.57 Cr released once, at FY26 revenue of ₹2.057 Cr a day."
"Illustrative answer on published figures. Once connected, the live answer comes from your ERP."
"01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen."
"02 Simulates: A what-if runs through the simulator, inside the contract's bounds."
"03 Computes: Code does the arithmetic. The model never produces a number."
"04 Answers: Figures first, then the evidence. Where nothing matches, it says so."
"Question kinds: Position · Why · What now · What if · Compare projects · Projection"
Footnote: "Finding and answer: Annual Report FY26, p.122 and p.87, filed 22 Jul 2026, standalone. [DAYS] [CA] The owner line is an example."
Footer: "Strictly private · 11 / 16" · teaser "Scenario on Jyoti Structures' published figures, not a forecast."

## Page 12. Chapter ten (navy)

Running head: "TEN · WHAT TEN DAYS GIVE BACK" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "Chapter ten"
Headline: "Ten days and thirty days, priced."
Three hero figures in gold:
- "10 days" · "116 to 106 days on the running book"
- "₹20.57 Cr" · "cash released once, at ten days"
- "₹61.72 Cr" · "cash released once, at thirty days, 116 to 86 days"
Table (columns: "The wait" · "Days today, and with Crestline" · "Cash released once"):
- "Running book, 10 days sooner" · "116 to 106 days" · "₹20.57 Cr"
- "Running book, 30 days sooner" · "116 to 86 days" · "₹61.72 Cr"
- "Newest bills, same steps" · "104 to 94 days; 104 to 74 days" · "Same cash as above, not added"
- "Advances from customers" · "Client money" · "None claimed"
- "Vendors" · "Paid against agreed dates" · "None claimed"
Under the table: "Rows are alternatives on the same bills and are never added. Scenario, not a forecast."
Chart (problem chart for P1), titled "Set against the running book": horizontal bars, Rs Cr, one axis from zero, value labels only:
- "31 Mar 2025" · "₹299.54 Cr" · solid
- "31 Mar 2026" · "₹238.93 Cr" · solid
- "With Crestline, 10 days sooner" · "₹218.36 Cr" · hollow, dashed outline
- "With Crestline, 30 days sooner" · "₹177.21 Cr" · hollow, dashed outline
Beside the hollow bars: "Scenario, not a forecast."
Closing statement: "The rebuild took the running book from 220 days of revenue to 116 in one year."
Second sentence in gold italic: "The next ten days are worth ₹20.57 Cr."
Footnote: "Annual Report FY26, p.122 and p.87, filed 22 Jul 2026, standalone. Scenario balances are the running book less the cash released. [DAYS] [ONCE] [CA] [SCN]"
Footer: "Strictly private · 12 / 16" · teaser "It has been done before."

## Page 13. Chapter eleven

Running head: "ELEVEN · THE EVIDENCE" · right "PUBLIC RECORD".
Chapter label: "Chapter eleven"
Headline: "It has been done before. At Jyoti Structures."
Lead: "The days a bill waits for its cash are not fixed by the industry. Jyoti Structures' own filings show them moving, in a year of fast growth."
Card 1 (history only, no scenario mark): label "RUNNING BOOK" · figure "220 to 116 days" · bars "FY25" "220 days" and "FY26" "116 days" on one day axis from zero · text "₹299.54 Cr to ₹238.93 Cr, in a year when revenue rose 50.76%."
Card 2 (history only, no scenario mark): label "NEWEST BILLS, UNDER SIX MONTHS PAST DUE" · figure "129 to 104 days" · bars "FY25" "129 days" and "FY26" "104 days" on the same day axis as card 1 · text "₹176.04 Cr to ₹214.18 Cr: more bills, turning faster."
Card 3 (problem chart for P1): label "THE NEXT STEP" · bars on the same day axis: "Today" "116 days" solid; "With Crestline, 10 days" "106 days" hollow, dashed; "With Crestline, 30 days" "86 days" hollow, dashed · text "₹20.57 Cr or ₹61.72 Cr, released once. Scenario, not a forecast."
Footer line under the cards: "Public record, cited as evidence. Days are Crestline arithmetic on the company's own filings."
Footnote: "Annual Report FY26, p.122 and p.87, filed 22 Jul 2026, standalone. [DAYS] [DUE] [ONCE] [SCN]"
Footer: "Strictly private · 13 / 16" · teaser "One thing before you decide."

## Page 14. Trust, unnumbered (fixed)

Running head: "TRUST · BEFORE YOU SAY YES" · right "CRESTLINE INTELLIGENCE".
Chapter label: "Trust"
Headline: "Read-only on your books. Nothing is written back."
Lead: "Crestline is read-only by design, and your ERP stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems."
Cards:
- "READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user."
- "ON RECORD · Every sync is logged, and your IT team can see it."
- "YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection."
- "PILOT SCOPE · One to three running transmission projects. Standalone books, rupee projects only."
"What Crestline is not"
- "Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run."
- "Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done."
- "Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline."
- "Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual."
Navy box, three cells:
- "14 days" · "of read-only analysis, starting once your ERP is connected. The adapter for your ERP is built first."
- "First sync" · "gives the first ranked list of delays."
- "No change" · "to how your finance team works, or to the ERP you run."
Footer: "Strictly private · 14 / 16" · teaser "The next page is yours."

## Page 15. The invitation (fixed)

Running head: "TWELVE · THE INVITATION" · right "JYOTI STRUCTURES LIMITED".
Chapter label: "The invitation"
Headline: "Give us one to three running transmission projects and fourteen days."
Body: "A pilot built around your ERP, on one to three running transmission projects of your choice, in rupees, read-only. At the end you hold a list of the bills and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your ERP is built first; the 14 days of read-only analysis start once it is connected."
Last clause in gold italic: "each with its value, its days and its owner."
QR card: "SCAN TO BOOK A TIME" · "crestlineintelligence.com/book-a-demo"
Strip: "Before day 1: adapter built for your ERP, read-only connection approved" · "Days 1 to 14: read-only analysis, then the list, reviewed with your team". Day boxes 1 to 14, counted from the day the connection is approved.
Closing line: "We would value a thirty-minute call at a time that suits you, with Mr. Abdul Hameed Khan or with Mr. Amit Dutta. Scan the code, call or write."
SOURCES AND NOTES (navy band, two columns, 6 pt):
"Sources. Jyoti Structures Limited, standalone. Annual Report FY26, submitted to the exchanges on 22 Jul 2026: revenue from operations p.87; inventories p.94; trade payables p.97; advances from customers p.98; payment and advance policy p.103; trade receivables ageing p.122; order book p.13; letter of the Whole-Time Director and Chief Financial Officer p.5. Results for the quarter ended 30 June 2026 (Q1 FY27), filed 4 Aug 2026, p.2. Based only on Jyoti Structures' public filings, as published up to 4 Aug 2026. Days are a balance divided by that year's revenue from operations, times 365; 31 Mar 2025 days use FY25 revenue of ₹498.04 Cr as printed in the Annual Report FY26. The running book is receivables up to three years past their due date. The ageing note counts each bill from its due date of payment, not from the day the bill was raised. Receivables include GST and revenue does not, so the cash figures are conservative. Vendor days divide current trade payables by FY26 material, erection and subcontracting cost. Nothing here comes from Jyoti Structures' ERP. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days x revenue per day, at ₹2.057 Cr a day. No interest is priced, because no borrowing rate is published. Cash is released once. Scenarios overlap and are never added. Not a forecast or a commitment. Step waits on page 8 are not public and are not drawn. If this booklet reached you in error, please call +91 76209 35398 and we will collect it."
Footer: "Strictly private · 15 / 16"

## Page 16. Back cover (fixed)

Navy field, gold curve lines.
Vertical tagline on the top curve: "Know where your money is waiting, and who can release it."
Top: "STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1"
Headline: "Every waiting rupee, with a site, a desk and a date."
White strip: "A thirty-minute call, at a time that suits you" · Crestline logo · "Rajat Kate" · "Managing Director" · "Crestline Intelligence Private Limited" · "Pune, Maharashtra" · "+91 76209 35398" · "rajat@crestlineintelligence.com" · "www.crestlineintelligence.com" · QR code labelled "BOOK A TIME"

## Checks

Run by script (session scratch JS-5/scan.py, Python -I) on the reader table plus the printed region, from "## Reader table" to the line before "## Checks": 33,173 characters against a minimum region of 15,000.

Patterns in words: a number is a digit not preceded by a digit or a dot, then digits or thousands commas and an optional decimal part, not followed by a digit; it traces when its value appears as a number in data.md, problems.md, solutions.md, calc/jyoti-savings-output.txt, qa-report.md or FIXED-PAGES.md. A page reference is "p." then digits; it must be one of the printed pages in the page table above. Company names are whole words, any case, plus 2,490 not followed by a decimal and 445.5. Dashes are the em dash, the en dash, a hyphen with a space each side and a double hyphen (table separator rows skipped). Placeholders are braces, TBD, TODO, XX, "placeholder", "lorem", "<n>" and a double question mark. Kept-out terms cover the oldest bucket wording, 1,081, restatement, unexplained, margin money, operating cash, rights issue, vacancies, Chairman, CEO, the sensitive words and figures, the item labels S1 to S15 and ERP status words. Cost-of-money words cover interest, financing, borrowing, loans, debt, overdraft, carry, facility, lending and "trapped"; one fixed sentence is allowed word for word (the p15 interest variant); the p14 claims line was dropped in JS-6 (Garvis ruling 5). The JS-6 re-run of every scan after the rulings is recorded in review-JS6.md. Also "you said", the AI-tell word list and signed numbers (the Crestline phone number excepted).

Planted run (one line appended to a copy of the region): every check fired: untraced 888.77; page p.55; Capacite; em dash; braces and TBD; "over three years" and "margin money"; interest, financing and "trapped"; "you said"; "delve"; a signed 12.

Real run, after the last edit:
| Check | Hits |
|---|---|
| untraced numbers | 0 |
| unmapped page references | 0 |
| other company names and headline figures | 0 |
| dashes | 0 |
| placeholders | 0 |
| kept-out terms | 0 |
| interest, financing, "trapped" | 0 (outside the one required p15 sentence) |
| "you said" | 0 |
| AI-tell words | 0 |
| signed numbers | 0 |

Arithmetic re-checked: 750.87 / 365 = 2.057; x 10 = 20.57; x 30 = 61.72; 238.93 less 20.57 = 218.36 and less 61.72 = 177.21 (calc "running book after"); 251.46 / 91 days = 2.763 (data.md).
Manual read: every problem chart (p4 dot grid, p5, p9 callout, p12 bars, p13 card 3) carries a hollow dashed with-Crestline mark from calc Rows A, B or C only, on the chart's own scale, with "Scenario, not a forecast."; history-only charts say so; no stage carries a day value; no figure is signed; rows are never added.
