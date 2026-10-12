# Thermax Limited: unified booklet pack (TH-5)

One 16-page booklet, two reader editions. Fills every slot in `_shared/master-design/TEMPLATE-SLOTS.md`; pages 7, 8, 11, 14, 15 and 16 are `_shared/master-design/FIXED-PAGES.md` with slots filled only.
Story (Garvis TH-3): respect first (customers fund the business, CRISIL calls working capital management "prudent"), then how quickly project bills turn into cash.
Basis: problem evidence CONSOLIDATED, value of a day Industrial Infra SEGMENT, all on AR26 vintage. No standalone figure is printed anywhere in this pack, so standalone and consolidated never meet. No interest anywhere.
Sources: data.md, depth.md, calc/thermax-savings-output.txt, src/th-calc-output.txt, qa-report.md. Internal sections (this header, Sender, Reader table, Logo, Slot map) sit before "## Keys"; Garvis pastes "## Keys" to the line before "## Checks" into the master prompt.

## Sender

Rajat Kate
Managing Director
Crestline Intelligence Private Limited
Pune, Maharashtra
+91 76209 35398
rajat@crestlineintelligence.com
www.crestlineintelligence.com

## Logo

Official Thermax mark, taken from thermaxglobal.com on 08 Oct 2026, saved unchanged. Upload as supplied; never redraw or recolour.
- `thermax/assets/thermax-logo-light-bg.svg`: red mark, black wordmark (the site header logo, inline SVG on every page of thermaxglobal.com). Intrinsic 57 x 70 px, vector. Use on white or cream: the cover's "PREPARED EXCLUSIVELY FOR" strip.
- `thermax/assets/thermax-logo-dark-bg.svg`: red mark, white wordmark (thermaxglobal.com/themes/thermax/assets/images/footer-thermax-logo.svg). Intrinsic 83 x 103 px, vector. Use on navy only, if anywhere.
Both are SVG, so they scale without loss; if a raster is needed, render it at 600 px or more.

## Reader table

| Edition | Name | Title (AR26 p357) | Address block | Salutation |
|---|---|---|---|---|
| 1 | Ashish Bhandari | Managing Director and CEO | Thermax Limited · D-13, MIDC Industrial Area, R.D. Aga Road, Chinchwad, Pune 411 019, Maharashtra | Dear Mr Bhandari, |
| 2 | Rajendran Arunachalam | Executive Vice President and Group Chief Financial Officer | Thermax Limited · D-13, MIDC Industrial Area, R.D. Aga Road, Chinchwad, Pune 411 019, Maharashtra | Dear Mr Arunachalam, |

Address as AR26 p67 prints the registered office (also the header of the Q1 FY27 results, NSE 30 Jul 2026).

**Letter, Edition 1 (Ashish Bhandari).** Printed copy, in this order:
> "This booklet is about ten days, and what they are worth to Thermax."
> "It starts where CRISIL starts. Its rating rationale of 19 January 2026 calls Thermax's working capital management “prudent”. At 31 March 2026 customers had paid ₹1,899.53 Cr in advances, more than everything left in receivables, contract assets and inventory after trade payables and unearned revenue. Thermax does not need rescuing from its working capital, and nothing in these pages says it does."
> "The question here is narrower: how quickly a project bill turns into cash. Operating cash flow went from ₹1,079.79 Cr to ₹541.55 Cr in FY26, and the Annual Report gives the reason as higher retention in the project business and lower customer advances. ₹377 Cr of receivables is more than a year past due. On the Q4 FY26 call, Thermax's CFO said the overdues would be worked “over the next couple of quarters”."
> "In the Industrial Infra segment one day of revenue is ₹11.91 Cr. Ten days off the wait to be paid, or off the wait to be certified, is ₹119 Cr of cash, released once. No interest is priced: the group is net debt free."
> "The filings cannot say which bills hold those days, or on whose desk. The pages that follow show how Crestline would find them, on two to three projects of your choice, in fourteen days."
> "Yours sincerely,"
> P.S. "Every figure in this booklet is from Thermax's own filings, with its page and date."

**Letter, Edition 2 (Rajendran Arunachalam).** Printed copy, in this order:
> "This booklet is about ten days, and what they are worth to Thermax."
> "Thermax's finance team runs working capital well, and the record says so. CRISIL's rating rationale of 19 January 2026 calls it “prudent”. At 31 March 2026 customers had paid ₹1,899.53 Cr in advances, more than everything left in receivables, contract assets and inventory after trade payables and unearned revenue."
> "What the ledger cannot record is how long each step of a project bill took, and whose desk it sat on. Operating cash flow went from ₹1,079.79 Cr to ₹541.55 Cr in FY26, with higher retention in the project business and lower customer advances named as the reason, and ₹377 Cr of receivables is more than a year past due. On the Q4 FY26 call, Thermax's CFO said the overdues would be worked “over the next couple of quarters”. A half-yearly balance sheet will show whether that happened. It will not show which bills moved."
> "In the Industrial Infra segment one day of revenue is ₹11.91 Cr, so ten days off either wait is ₹119 Cr of cash, released once. No interest is priced: the group is net debt free."
> "We are asking for two to three projects of your choice and fourteen days, read-only, to show those bills by name."
> "Yours sincerely,"
> P.S. "Every figure in this booklet is from Thermax's own filings, with its page and date."

Letter footnote, both editions: "[CRISIL] [AR26] Customer advances AR26 p289; operating cash flow AR26 p228; reason AR26 MD&A p113; receivables past due AR26 p256, all [CON]. [Q4CALL] [DAY] [SCN] [NOINT]"

## Slot map (every TEMPLATE-SLOTS row; internal)

| Slot | Value used | Page | Source or fallback |
|---|---|---|---|
| COMPANY_NAME | Thermax Limited · Thermax | all | AR26 p356 |
| ADDRESSEE | Edition 1 Ashish Bhandari, Managing Director and CEO; Edition 2 Rajendran Arunachalam, Executive Vice President and Group Chief Financial Officer; registered office as AR26 p67 | 1, 2 | AR26 p357, p67 |
| SECOND_CONTACT | the other reader, by name in each letter's context; fixed call line kept | 2, 15 | AR26 p357 |
| LETTER_DATE | October 2026 | 1, 2 | us |
| BS_DATE | 31 March 2026 | 4 | AR26 |
| REVENUE_FY | ₹4,348.05 Cr Industrial Infra segment revenue FY26 | 6, 10, 12, 15 | AR26 p310 to p311, SEGMENT |
| REV_SERIES | not drawn: the segment was restated twice, so a series would mix vintages | 5 | fallback, Garvis TH-3 |
| REC | ₹2,204.84 Cr trade receivables, net | 8 | AR26 p226 and p256, CONSOLIDATED |
| CA | ₹773.08 Cr contract assets, net (FY25 ₹640.56 Cr) | 7, 8 | AR26 p256, p289, CONSOLIDATED |
| REC_SERIES | gross receivables ₹2,315.24 Cr and ₹2,500.19 Cr (ageing totals) | 9 | AR26 p256, CONSOLIDATED |
| PAYABLES | ₹2,057.38 Cr | 7, 10 | AR26 p226, CONSOLIDATED |
| MSME_PAYABLES | ₹938.15 Cr | 7, 10 | AR26 p274, CONSOLIDATED |
| BORR_SERIES | not printed; p3 states CRISIL's "net nil debt" with cash ₹2,467 Cr above borrowings ₹2,288.01 Cr | 3 | AR26 p21, p270 to p271 |
| RATE | none printed (Garvis TH-3) | letter, simulator, page ten, sources | Keys [NOINT] |
| AGEING_FY | FY26 seven bands | 4, 9 | AR26 p256, CONSOLIDATED |
| AGEING_PRIOR | FY25 seven bands, AR26 vintage | 4, 9 | AR26 p256, CONSOLIDATED |
| TERMS | 7 to 90 days, consolidated credit terms | 7 | AR26 p256 |
| AR_DEBTOR_DAYS | omitted | 5 | fallback: no debtors turnover printed by the company |
| WC_TARGET | none stated | 2, 3, 12 | fallback: p12 is a day-step scenario page, not a target page |
| WC_CURRENT | CRISIL's "around 40 days", quoted as CRISIL's words only | 3 | CRISIL 19 Jan 2026 |
| WC_REDUCED | omitted | 2, 3, 13 | fallback: drop the clause |
| ORDER_BOOK | ₹13,604 Cr consolidated; ₹7,439 Cr Industrial Infra | 5 | AR26 p20; Q4 FY26 presentation slide 13 |
| PROMISE_1..N | five rows on the record (p3) | 3 | CRISIL; AR26 p289; Q2 FY26 call p6; AR26 p20; Q4 FY26 call p11 |
| OPPROFIT_SERIES | not drawn | 8 | fallback: no WC change series published; p8 upper half carries the contract-asset chart |
| WC_CHANGE_SERIES | not drawn | 8 | as above |
| TAX_PAID | omitted | 8 | fallback |
| OPCASH_SERIES | ₹1,079.79 Cr and ₹541.55 Cr | 5 | AR26 p228, CONSOLIDATED |
| CLIENT_LIST | categories only: private, public sector, overseas, services | 10 | fallback: categories, no names; Q1 FY27 presentation slide 16 |
| PEER_SET | none | 9, 13 | fallback: no peer bars (no other company's data) |
| PROOF_A, PROOF_B | none; Thermax's own movements only | 13 | fallback: self proof |
| Q_EVENT | the Q4 FY26 call (latest call on working capital) | 6 | Q4 FY26 call p11 |
| Q_FIGURES | none | 6 | fallback |
| SOURCES_PARA | p15 | 15 | below |
| REV_PER_DAY | ₹11.91 Cr | 2, 6, 10, 11, 12 | calc output |
| DSO_DAYS | not printed | | lens 04 uses past due share instead |
| CA_DAYS | not printed | | |
| COMBINED | not printed | | would add two legs |
| DPO_DAYS | 70.2 days, consolidated, one average | 7 | src/th-calc-output.txt |
| STUCK_TOTAL | cover: ₹119 Cr, ten days of segment revenue (Garvis TH-6 ruling 3); ₹1,443 Cr past due stays on p4 and p6 with the retention caveat | 1, 4, 6 | calc output |
| TEN_DAYS | ₹119 Cr (119.12) | 2, 4 to 12 | calc output |
| TEN_PLUS_TEN | not printed: the two legs are alternatives | | ruling |
| TEN_INT, TARGET_INTEREST, PCT_OF_BORR, GAP_DAYS, TARGET_CASH | none | | no rate, no target |
| SIM_30 | ₹357 Cr (357.37) | 4 to 12 | calc output |
| OVER6M | more than one year past due ₹336 Cr (335.56) to ₹377 Cr (377.27) | 4, 11 | calc output |
| PROFIT_SHARE | replaced by operating cash flow as a share of profit, 172.3% and 75.2% | 5 | calc output |
| CAGR_AND_GROWTH_MULT | omitted | | |
| DOT_COUNT | omitted | 4 | fallback |
| ORDER_BOOK_MULT | 1.71 years of Industrial Infra revenue | 5 | src/th-calc-output.txt |
| STEP_SPLIT | none: stages drawn without days | 8 | A12, FIXED-PAGES rule 3 |
| FIX_LENSES, FIX_ENGINE, FIX_TICKET, FIX_ASK, FIX_SECURITY, FIX_PILOT, FIX_SENDER | FIXED-PAGES copy | 7, 8, 11, 14, 15, 16 | FIXED-PAGES.md |
| FIX_SIMULATOR | written from crestline-webapp-context.md section 4 | 10 | product truth |
| FIX_DISCLAIMERS | Keys [SCN], [NOINT], footers | all | |
| FIXED-PAGES ACCOUNTING_SYSTEM | "ERP" (SAP named only in the p14 control line, QA M8) | 7, 8, 11, 14, 15 | AR24 p292 note 44A, Thermax Limited only |
| FIXED-PAGES PILOT_SCOPE | "two to three domestic INR Industrial Infra projects" | 14, 15 | Garvis TH-3 |
| FIXED-PAGES SCOPE_CARD | one entity line | 14 | Garvis TH-3 |
| FIXED-PAGES LENS_01 to LENS_05, figures and notes | p7 | 7 | |
| FIXED-PAGES FINDING, FINDING_TONE, ROOT_CAUSE_SUBJECT, DO_THIS_TARGET | p11 | 11 | |
| FIXED-PAGES ASK_QUESTION, ASK_ANSWER | p11 | 11 | calc output |
| FIXED-PAGES STRIP_TOTALS | p8 | 8 | AR26 p226, p256, p289 |

## Keys

Each tag in brackets below is printed as its full line wherever a footnote carries it.

- [AR26] "AR26: Thermax Limited, Annual Report 2025-26, filed with NSE on 03 Jul 2026. FY25 figures are as restated in it (AR26 vintage)."
- [CON] "CONSOLIDATED: Thermax Limited and its subsidiaries."
- [SEG] "SEGMENT: Industrial Infra, from the consolidated segment note (note 33), AR26 p310 to p311."
- [DAY] "One day of Industrial Infra revenue: ₹4,348.05 Cr segment revenue FY26 / 365 = ₹11.91 Cr. Segment revenue as note 33 prints it, before ₹5.20 Cr of inter-segment sales."
- [SCN] "Scenario, not a forecast. Crestline arithmetic on the published figures: days x ₹11.91 Cr. 10 days = ₹119.12 Cr, 30 days = ₹357.37 Cr, each released once. The bars are alternatives, not a sum, and the wait to be paid and the wait to be certified are alternative legs for the same step."
- [NOINT] "No interest is priced: the group is net debt free."
- [Q4CALL] "Q4 FY26 earnings call held 08 May 2026, transcript p11, speaker Rajendran Arunachalam (thermaxglobal.com; NSE notice 12 May 2026)."
- [CRISIL] "CRISIL Ratings, rating rationale for Thermax Limited, 19 Jan 2026."
- [FOOT] "Based only on Thermax's public filings, as published up to 06 Aug 2026, the date of the NSE notice of the Q1 FY27 earnings call transcript."

### The segment callout (used on every problem chart; printed exactly)

Every problem chart has TWO panels side by side, each with its own axis and its own basis label.
- LEFT, "Today": solid bars from the filings, labelled with their basis, page and AR26 vintage, on the axis the page gives.
- RIGHT, a separate boxed callout. Title: "Value of days in the Industrial Infra segment (segment revenue / 365)". Its own axis ₹0 to 400 Cr. Two hollow bars with a dashed outline and no fill: "10 days: ₹119 Cr, released once" drawn at 119.12, and "30 days: ₹357 Cr, released once" drawn at 357.37. Under the callout: "Scenario, not a forecast. The two bars are alternatives, not a sum. Segment basis, AR26 p310 to p311; one day = ₹11.91 Cr."
- Under the left panel, on every consolidated chart: "Consolidated. The scenario at right is not taken out of these balances."
- No scenario bar ever shares an axis, a gridline or a baseline with a filed bar. On navy pages the dashed outline and labels are gold #D9C08F.

## Headline table

| Page | Line 1 (ink) | Line 2 (gold) |
|---|---|---|
| 1 | "Working-capital" | "review" |
| 2 | "This booklet is about ten days," | "and what they are worth to Thermax." |
| 3 | "It begins with five things on the record," | "four of them strengths." |
| 4 | "₹377 Cr is more than a year past due," | "and that part grew while the rest of the past due book fell." |
| 5 | "Operating cash halved," | "and the Annual Report names the project business." |
| 6 | "Thermax's CFO expects the overdues to be worked down" | "“over the next couple of quarters”." |
| 7 | "Where does project cash get stuck?" | "Five lenses." |
| 8 | "Crestline reads the dates" | "your ERP records" |
| 9 | "Every rupee waiting gets" | "a reason, a desk and a date." |
| 10 | "Test the fix before you make it." | "Then put a name on it." |
| 11 | "A finding gets an owner," | "a date and an auditor." |
| 12 | "Ten days in the project business," | "priced on its own revenue." |
| 13 | "It has been done before," | "by Thermax." |
| 14 | "Read-only on your books." | "Nothing is written back." |
| 15 | "Give us two to three domestic INR Industrial Infra projects" | "and fourteen days." |
| 16 | "Every waiting rupee, with a site," | "a desk and a date." |

## Pages

### p1 Cover (navy)
> "STRICTLY PRIVATE & CONFIDENTIAL" · "COPY NO. 1 OF 1"
> "Prepared for the addressee only. Please do not forward or copy."
> Title: "Working-capital review"
> "Thermax Limited · October 2026"
> Hero line on the top curve: "₹119 CR IN EVERY TEN DAYS BETWEEN A PROJECT BILL AND ITS CASH"
> Small line under the white strip: "₹119.12 Cr is ten days of FY26 Industrial Infra segment revenue (₹4,348.05 Cr / 365 x 10), AR26 p310 to p311. Scenario, not a forecast."
> "PREPARED EXCLUSIVELY FOR": Thermax logo (thermax-logo-light-bg.svg), then the edition's name and title from the reader table.
> "DRAFTED BY": Crestline logo, "Crestline Intelligence", "Rajat Kate", "Managing Director".

### p2 Letter (cream)
Running head: "A LETTER" · "THERMAX LIMITED"
> Date: "October 2026"
> Salutation and body: from the reader table, per edition.
> TO block: the edition's name, title and address block. FROM block: the sender block.
> Signature: "Rajat Kate", "Managing Director, Crestline Intelligence Private Limited"
> Disclaimer line: "Scenarios in this letter are Crestline arithmetic on Thermax's published figures, not a forecast or a commitment."
> Footnote: the letter footnote in the reader table.
> Footer: "Strictly private · 2 / 16"

### p3 Chapter one (cream)
Running head: "ONE · ON THE RECORD" · "THERMAX LIMITED"
> Chapter label: "Chapter one"
> Lead: "Before any question about cash, the public record says Thermax runs its working capital well. Five things on it, with their sources."
Ruled rows:
> i. "Prudent" · "CRISIL on working capital management: “The net working capital cycle has been around 40 days due to prudent collection policy and inventory management.” CRISIL does not state how it defines the cycle." · "[CRISIL]"
> ii. "₹1,899.53 Cr" · "Customer advances held at 31 March 2026. Customers fund the business: the advances were larger than everything left in receivables, contract assets and inventory after trade payables and unearned revenue." · "Consolidated. AR26 p289; filed 03 Jul 2026. Comparison is Crestline arithmetic on the published figures."
> iii. "Net nil debt" · "CRISIL's words. Cash and liquid investments of ₹2,467 Cr at 31 March 2026 were above total borrowings of ₹2,288.01 Cr." · "[CRISIL] Consolidated. AR26 p21, p270 to p271 and p319; filed 03 Jul 2026."
> iv. "20% plus" · "Ashish Bhandari, Managing Director and CEO, on orders for FY26: “I have enough confidence that I can commit to a 20% plus orders growth on the total Thermax portfolio for the year.” Order booking went from ₹10,337 Cr to ₹13,871 Cr, an increase of 34.2%." · "Q2 FY26 earnings call held 12 Nov 2025, transcript p6 (thermaxglobal.com). Consolidated order booking, AR26 p20; filed 03 Jul 2026. Increase is Crestline arithmetic on the published figures."
> v. "“Over the next couple of quarters”" · "Rajendran Arunachalam, Executive Vice President and Group Chief Financial Officer, on the overdues: “I'll be hopeful that we should resolve all the overdues in one quarter. But yes, the business reality is, I'm sure that we would be able to work it over the next couple of quarters.”" · "[Q4CALL]"
> Closing statement: "Four of the five say the business is funded and run well. *The fifth is about time.*"
> Footnote: "[CRISIL] [AR26] [CON] [Q4CALL]"
> Footer: "Strictly private · 3 / 16"
No chart on this page.

### p4 Chapter two (navy)
Running head: "TWO · PAST DUE" · "THERMAX LIMITED"
> Chapter label: "Chapter two"
> Hero: "₹1,443 Cr" with the line "of bills past their due date at 31 March 2026. Consolidated, gross, AR26 vintage."
> Lead: "The share of bills paid late is falling. The oldest part of the book is not. Receivables more than a year past due rose from ₹336 Cr to ₹377 Cr, while the 6 months to 1 year band fell from ₹202.51 Cr to ₹135.06 Cr. That is consistent with bills moving from the middle band into the oldest one rather than being collected. The table alone cannot say which bills did."
Three side stats:
> "57.7%" · "of gross receivables past due at 31 March 2026, down from 62.0% a year earlier"
> "₹377 Cr" · "more than a year past due, up 12.4% from ₹336 Cr"
> "₹295.35 Cr" · "held as an allowance against receivables that may not be collected"
Chart, two panels (problem chart):
- Left panel "Today", axis ₹0 to 400 Cr, solid jelly columns, amber into peach: "More than one year past due" FY25 "₹335.56 Cr" at 335.56, FY26 "₹377.27 Cr" at 377.27. Basis label: "CONSOLIDATED · GROSS · AR26 p256 · AR26 VINTAGE". Under it: "Consolidated. The scenario at right is not taken out of these balances."
- Right panel: the segment callout, labelled "on the wait to be paid".
> Quote under the chart: "AR26 p256: “The above ageing includes retention receivables which are classified as due on the basis of the contractual terms with respective customers.”"
> Footnote: "[AR26] [CON] Past due ₹1,443.42 Cr is the sum of the ageing bands past their due date; shares and the 12.4% are Crestline arithmetic on the published figures. Receivables of ₹190 Cr at 31 March 2026 (₹422.08 Cr a year earlier) sold to a bank without recourse by one subsidiary sit outside the table (AR26 p256). [SEG] [DAY] [SCN]"
> Footer: "Strictly private · 4 / 16"

### p5 Chapter three (cream)
Running head: "THREE · CASH CONVERSION" · "THERMAX LIMITED"
> Chapter label: "Chapter three"
> Lead: "FY25 was an exceptionally strong cash year, so part of the fall is a return to normal. The reason the company gives sits in the project business."
> Quote: "AR26 MD&A p113: “The decrease in operating cash flow is due to increased execution activities, resulting in higher retention in the project business and lower customer advances during the current year.”"
Chart, two panels (problem chart), card title "Net cash from operating activities", context line "₹ Cr · FY25 and FY26":
- Left panel "Today", axis ₹0 to 1,200 Cr, solid jelly columns, mint into sky: FY25 "₹1,079.79 Cr" at 1,079.79, FY26 "₹541.55 Cr" at 541.55. Basis label: "CONSOLIDATED · AR26 p228 · AR26 VINTAGE". Under it: "Consolidated. The scenario at right is not taken out of these balances."
- Right panel: the segment callout, labelled "on the wait to be paid", with "one-off cash, not an annual flow" under it.
> Takeaway: "Operating cash flow fell 49.8%. The Annual Report prints the fall as 50%."
Stats row:
> "172.3% to 75.2%" · "operating cash flow as a share of profit after tax, FY25 to FY26 (profit ₹626.70 Cr and ₹720.26 Cr)"
> "₹13,604 Cr" · "order balance at 31 March 2026"
> "₹7,439 Cr" · "Industrial Infra order balance, 1.71 years of the segment's FY26 revenue"
> Footnote: "[AR26] [CON] Cash flow AR26 p228; profit AR26 p227; order balance AR26 p20. Industrial Infra order balance: Q4 FY26 investor presentation, slide 13, filed with NSE 07 May 2026. Shares, the 49.8% and the 1.71 years are Crestline arithmetic on the published figures. [SEG] [DAY] [SCN]"
> Footer: "Strictly private · 5 / 16"

### p6 Chapter four (cream)
Running head: "FOUR · THE LATEST CALL" · "THERMAX LIMITED"
> Chapter label: "Chapter four"
> Lead: "Asked on the Q4 FY26 call about the working capital build, Thermax's CFO gave the cause and the timetable."
> Quote 1: "“This has been caused by some project delays and, hence, the related collection delays on some of our receivables as well.”"
> Quote 2: "“I'll be hopeful that we should resolve all the overdues in one quarter. But yes, the business reality is, I'm sure that we would be able to work it over the next couple of quarters.”"
> Credit: "Rajendran Arunachalam, Executive Vice President and Group Chief Financial Officer"
Chart, two panels (problem chart), card title "Receivables past their due date", context line "₹ Cr · 31 March":
- Left panel "Today", axis ₹0 to 1,500 Cr, solid jelly columns, amber into peach: FY25 "₹1,434.88 Cr" at 1,434.88, FY26 "₹1,443.42 Cr" at 1,443.42; a third slot drawn as an outline only, with no fill and no number, labelled "30 Sep 2026: not yet published". Basis label: "CONSOLIDATED · GROSS · AR26 p256 · AR26 VINTAGE". Under it: "Consolidated. The scenario at right is not taken out of these balances."
- Right panel: the segment callout, labelled "on the wait to be paid".
> Body: "This is an open intention, and it is read that way here. The first published figure to test it will be the half year to 30 September 2026, and it will be one company-wide number, twice a year. Crestline would show the same overdues bill by bill, re-measured each time the source syncs."
> Closing line: "₹119 Cr is what ten days are worth in the Industrial Infra segment. *One day of segment revenue is ₹11.91 Cr.*"
> Footnote: "[Q4CALL] [AR26] [CON] Past due totals are Crestline arithmetic on the published ageing bands. The ageing includes retention classified as due on its contractual terms (AR26 p256). [SEG] [DAY] [SCN]"
> Footer: "Strictly private · 6 / 16"

### p7 Chapter five (navy, FIXED)
Running head: "FIVE · ENTER CRESTLINE" · "CRESTLINE INTELLIGENCE"
> KICKER: "FIVE · ENTER CRESTLINE"
> HEADLINE: "Where does project cash get stuck? Five lenses."
> "Once connected, Crestline reads your ERP and shows which bills and retention are stuck, on which site, and how many crores. Here is each lens, and the Thermax figure it would open up."
> "01 Working capital · WC · The cash a project eats before it pays you back." "13.4 days" · "Industrial Infra segment assets less segment liabilities, ₹160.12 Cr, FY26. Segment liabilities match most of the assets."
> "02 Order to cash · O2C · From work done on site to money in the bank." "₹773.08 Cr" · "contract assets at 31 March 2026, up 20.7% from ₹640.56 Cr: retention and unbilled work, mainly in TBWES"
> "03 Procure to pay · P2P · From a site's material request to the vendor getting paid." "₹2,057.38 Cr" · "owed to vendors at 31 March 2026, ₹938.15 Cr of it to MSME suppliers"
> "04 Client · WHO PAYS SLOW · Which clients pay slow, and why." "57.7%" · "of gross receivables past due, against credit terms of 7 to 90 days"
> "05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate." "about 70.2 days" · "trade payables in days of revenue, one average for the whole group"
> "Know where your money is waiting, and who can release it."
> "READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS"
> Footnote: "[AR26] Lens 01: [SEG] Lens 02: AR26 p256 and p289; MD&A p113 for “mainly in TBWES”. Lens 03: AR26 p226 and p274. Lens 04: AR26 p256. Lens 05: AR26 p226 and p227. Lenses 02 to 05 are [CON] Days and shares are Crestline arithmetic on the published figures, on full-year revenue of the same basis: segment revenue ₹4,348.05 Cr for lens 01, consolidated revenue ₹10,694.15 Cr for lens 05. The ageing includes retention classified as due on its contractual terms (AR26 p256)."
> Footer: "Strictly private · 7 / 16 · Now, on Thermax's published figures."

### p8 Chapter six (cream, FIXED lower half)
Running head: "SIX · THE CLOCK THE ERP ALREADY KEEPS" · "CRESTLINE INTELLIGENCE"
Upper half (pack copy), problem chart, card title "Contract assets: work done, not yet billable", context line "₹ Cr · 31 March":
- Left panel "Today", axis ₹0 to 800 Cr, solid jelly columns, sky into lavender: FY25 "₹640.56 Cr" at 640.56, FY26 "₹773.08 Cr" at 773.08. Basis label: "CONSOLIDATED · NET · AR26 p256 AND p289 · AR26 VINTAGE". Under it: "Consolidated. The scenario at right is not taken out of these balances."
- Right panel: the segment callout, labelled "on the wait to certify".
> Takeaway: "AR26 MD&A p113: “The increase is mainly due to an increase in retention amount and unbilled amount mainly in TBWES.”"
Lower half (FIXED):
> KICKER: "SIX · THE CLOCK THE ERP ALREADY KEEPS"
> HEADLINE: "Crestline reads the dates your ERP records"
> "It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait."
> "CRESTLINE'S VIEWS · DRAWN ON THERMAX'S PUBLISHED FIGURES · NOTHING FROM YOUR ERP"
> "One bill, from work done to cash in the bank"
Timeline, in this order, each stage with its ownership tag only, no day count, no bar length, no share:
> "JOINT MEASUREMENT · THERMAX AND CLIENT"
> "MB / QS CHECK · THERMAX"
> "RA BILL PREPARED · THERMAX"
> "REVIEW STARTED · THERMAX"
> "REVIEW COMPLETED · THERMAX"
> "BILL SUBMITTED · THERMAX"
> "CLIENT ACKNOWLEDGED · CLIENT"
> "CERTIFIED · CLIENT"
> "TAX INVOICE RAISED · THERMAX"
> "PAYMENT RECEIVED · CLIENT"
> "RETENTION RELEASED · CLIENT"
> "Ownership: Thermax: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay."
> STRIP_TOTALS, beside the timeline, three separate figures, never added: "Contract assets ₹773.08 Cr · Trade receivables ₹2,204.84 Cr · Customer advances ₹1,899.53 Cr · Consolidated, 31 March 2026"
> "Step waits are not public. Once connected, Crestline measures them from the dates your ERP records. This timeline shows the stages, not Thermax's days."
> Footnote: "[AR26] [CON] Contract assets AR26 p256 and p289; trade receivables, net, AR26 p226 and p256; customer advances AR26 p289. [SEG] [DAY] [SCN]"
> Footer: "Strictly private · 8 / 16 · Illustrative stages. Totals are from published accounts."

### p9 Chapter seven (cream)
Running head: "SEVEN · REASON, DESK, DATE" · "CRESTLINE INTELLIGENCE"
> Chapter label: "Chapter seven"
> Lead: "The ageing note gives one company-wide snapshot a year. It does not say which project, which bill, whether a rupee is retention waiting on a completion certificate, a disputed bill or a bill the client has simply not paid, or whose desk it sits on. Crestline ages every bill against its own due date, never a house average, and keeps retention on its own ledger with its release milestone."
Chart, two panels (problem chart), card title "Where the receivables sit, by age", context line "₹ Cr · gross · 31 March":
- Left panel "Today", horizontal grouped bars, axis ₹0 to 1,100 Cr, FY25 in slate, FY26 in amber into peach, every bar labelled:
  "Unbilled" FY25 "₹21.64 Cr" at 21.64, FY26 "₹46.56 Cr" at 46.56
  "Not due" FY25 "₹858.72 Cr" at 858.72, FY26 "₹1,010.21 Cr" at 1,010.21
  "Under 6 months past due" FY25 "₹896.81 Cr" at 896.81, FY26 "₹931.09 Cr" at 931.09
  "6 months to 1 year" FY25 "₹202.51 Cr" at 202.51, FY26 "₹135.06 Cr" at 135.06
  "1 to 2 years" FY25 "₹162.25 Cr" at 162.25, FY26 "₹195.86 Cr" at 195.86
  "2 to 3 years" FY25 "₹56.38 Cr" at 56.38, FY26 "₹72.37 Cr" at 72.37
  "Over 3 years" FY25 "₹116.93 Cr" at 116.93, FY26 "₹109.04 Cr" at 109.04
  Totals line under the chart, not a bar: "Gross total ₹2,315.24 Cr (FY25) and ₹2,500.19 Cr (FY26)."
  Basis label: "CONSOLIDATED · GROSS · AR26 p256 · AR26 VINTAGE". Under it: "Consolidated. The scenario at right is not taken out of these balances."
- Right panel: the segment callout, labelled "on the wait to be paid".
What Crestline adds, three short rows:
> "Reason" · "Retention past its release date or a bill not yet paid, told apart, and a dispute wherever your ERP records one."
> "Desk" · "Whose act ends the wait: Thermax's own (measure, prepare, submit, invoice) or the client's (certify, pay)."
> "Date" · "Since when the bill has sat there, and the day it falls due under its own terms."
> Footnote: "[AR26] [CON] Bands as AR26 p256 prints them; “past due” bands are measured from each bill's due date. The ageing includes retention classified as due on its contractual terms. [SEG] [DAY] [SCN]"
> Footer: "Strictly private · 9 / 16"

### p10 Chapter eight (cream)
Running head: "EIGHT · SIMULATOR" · "CRESTLINE INTELLIGENCE"
> Chapter label: "Chapter eight"
> Lead: "Crestline's simulator moves one wait at a time and prices it at the measured daily rate. The sliders stop where the contract stops: certification cannot go below the contract's certification window, and collection cannot go below the payment term the client signed."
Card 1 "Simulator · on Thermax's published figures", scenario chart, all bars dashed and hollow, axis ₹0 to 400 Cr:
> Leg "Invoiced, waiting to be paid": "10 days: ₹119 Cr, released once" at 119.12; "30 days: ₹357 Cr, released once" at 357.37
> Leg "Built, waiting to be certified": "10 days: ₹119 Cr, released once" at 119.12; "30 days: ₹357 Cr, released once" at 357.37
> Under the card: "Scenario, not a forecast. The two legs are alternatives for the same step. Nothing here is added. No interest is priced: the group is net debt free."
Card 2 "Vendor advisor":
> "₹2,057.38 Cr owed to vendors at 31 March 2026, ₹938.15 Cr of it to MSME suppliers. Crestline judges every payment against that vendor's own due date. Paying a vendor later is never shown as releasing cash."
Card 3 "Client lens":
> "Each client's certification and payment behaviour, judged against the terms that client signed, never against a peer average."
> Chips: "Private" · "Public sector" · "Overseas" · "Services"
> Footnote: "[DAY] [SCN] [NOINT] Payables and MSME: [CON] AR26 p226 and p274; [AR26] Client categories as the Q1 FY27 investor presentation (filed with NSE 31 Jul 2026), slide 16, groups Industrial Infra revenue."
> Footer: "Strictly private · 10 / 16"

### p11 Chapter nine (cream, FIXED)
Running head: "NINE · FROM A FINDING TO A CLOSED TICKET" · "CRESTLINE INTELLIGENCE"
> KICKER: "NINE · FROM A FINDING TO A CLOSED TICKET"
> HEADLINE: "A finding gets an owner, a date and an auditor."
> "Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your ERP's records, never generated by a model."
> "The auditor · How one finding reads · on Thermax's published figures"
> "FINDING (WATCH): ₹377 Cr of receivables is more than a year past due, up from ₹336 Cr a year earlier, while the past due share fell from 62.0% to 57.7%."
> "ROOT CAUSE: Not visible in public accounts. From your ERP in the pilot: which client, which site, which bill, and which step of certification, invoicing or collection holds the days."
> "DO THIS: The named bills that must move, each with a deadline, opened by the target: the more than one year past due book back to ₹336 Cr, where it stood at 31 March 2025."
> "Owner: Commercial head · due in 7 days · EXAMPLE"
> "Raise ticket · Alert owner"
> "01 Ticket raised: Baseline, target and due date are fixed at that moment."
> "02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed."
> "03 Re-measured: The same figure, from fresh data, each time the source syncs."
> "04 Verified: Closed only when the number moves. Nobody can mark it done by hand."
> "Ask Crestline: a question answered from Thermax's own evidence · Retrieval, then code"
> "What if Industrial Infra bills were paid ten days sooner?"
> "₹119 Cr released once, at ₹11.91 Cr a day of Industrial Infra segment revenue. Thirty days would be ₹357 Cr, as an alternative, not in addition. No interest is priced: the group is net debt free."
> "Illustrative answer on published figures. Once connected, the live answer comes from your ERP."
> "01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen."
> "02 Simulates: A what-if runs through the simulator, inside the contract's bounds."
> "03 Computes: Code does the arithmetic. The model never produces a number."
> "04 Answers: Figures first, then the evidence. Where nothing matches, it says so."
> "Question kinds: Position · Why · What now · What if · Compare projects · Projection"
> Footnote: "Finding: [CON] AR26 p256, [AR26] Past due totals and shares are Crestline arithmetic on the published figures. The ageing includes retention classified as due on its contractual terms (AR26 p256). Ask answer: [DAY] [SCN] [NOINT]"
> Footer: "Strictly private · 11 / 16 · Scenario on Thermax's published figures, not a forecast."

### p12 Chapter ten (navy)
Running head: "TEN · THE PROJECT BUSINESS, PRICED" · "THERMAX LIMITED"
> Chapter label: "Chapter ten"
> Lead: "The project segment carries little of its own money. Segment assets of ₹2,490.28 Cr are matched by ₹2,330.16 Cr of segment liabilities, so the business carries about 13.4 days of its own money. That is a well run project business. What the segment note does not publish is how much of those assets are receivables, contract assets or retention, or which projects hold them."
Chart, two panels (problem chart), card title "Industrial Infra segment", context line "₹ Cr · 31 March":
- Left panel "Today", axis ₹0 to 2,500 Cr, solid jelly columns, slate for assets and mint for liabilities: FY25 assets "₹2,491.09 Cr" at 2,491.09, liabilities "₹2,353.60 Cr" at 2,353.60; FY26 assets "₹2,490.28 Cr" at 2,490.28, liabilities "₹2,330.16 Cr" at 2,330.16. Basis label: "SEGMENT · INDUSTRIAL INFRA · AR26 p310 TO p311 · AR26 VINTAGE". Under it: "What the segment's assets are made of (receivables, contract assets, retention) is not published."
- Right panel: the segment callout.
> Note under both panels: "The day steps are measured on each gross wait (bills waiting to be certified or paid), which sits inside the ₹2,490.28 Cr of segment assets. They are not measured against the segment's net figure of ₹160.12 Cr, which is what remains after segment liabilities."
Ruled table (no total row):
| Move | Days | Cash, released once |
|---|---|---|
| "Invoiced, waiting to be paid" | "10" | "₹119 Cr" |
| "Built, waiting to be certified (alternative to the row above)" | "10" | "₹119 Cr" |
| "Either wait" | "30" | "₹357 Cr" |
| "Vendors" | "None claimed" | "Paying vendors later is never a saving" |
> Closing statement: "Rows overlap and are never added. *No interest is priced: the group is net debt free.*"
> Footnote: "[AR26] [SEG] Net figure and days are Crestline arithmetic on the published figures. [DAY] [SCN]"
> Footer: "Strictly private · 12 / 16"

### p13 Chapter eleven (cream)
Running head: "ELEVEN · DONE BEFORE" · "PUBLIC RECORD"
> Chapter label: "Chapter eleven"
> Lead: "Cash discipline is not new here. Four movements from Thermax's own filings."
Ruled rows, no chart:
> i. "62.0% to 57.7%" · "Share of gross receivables past due, 31 March 2025 to 31 March 2026." · "Consolidated. AR26 p256; filed 03 Jul 2026. Crestline arithmetic on the published figures."
> ii. "₹80.53 Cr to ₹42.82 Cr" · "The year's net credit loss charge on financial and contract assets, FY25 to FY26." · "Consolidated. AR26 p227; filed 03 Jul 2026."
> iii. "₹110 Cr to ₹218 Cr" · "Industrial Infra segment profit. AR26 MD&A p90: “driven by better project execution, an improved project mix and enhanced cost discipline.”" · "Segment. AR26 MD&A p90; filed 03 Jul 2026."
> iv. "No advance, no booking" · "Ashish Bhandari, Managing Director and CEO, on two large orders agreed in the quarter: “because the advance didn't come in, we couldn't book it.”" · "Q1 FY27 earnings call held 31 Jul 2026, transcript p5 (thermaxglobal.com; NSE notice 06 Aug 2026)."
> Closing statement: "The discipline is there. *Crestline adds the bill by bill view of where it holds and where it slips.*"
> Footer line: "Thermax is not a Crestline client. These movements are its own."
> Footnote: "[AR26] [CON] [SEG]"
> Footer: "Strictly private · 13 / 16"

### p14 Chapter twelve (cream, FIXED)
Running head: "TWELVE · TRUST" · "CRESTLINE INTELLIGENCE"
> HEADLINE: "Read-only on your books. Nothing is written back."
> "Crestline is read-only by design, and your ERP stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems."
> "READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user."
> "ON RECORD · Every sync is logged, and your IT team can see it."
> "YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection."
> "PILOT SCOPE · two to three domestic INR Industrial Infra projects. One entity, Thermax Limited or Thermax Babcock & Wilcox Energy Solutions, your choice. Other segments, foreign currency projects and consolidation are outside the pilot."
> Company control line: "The ERP is named only as SAP (Thermax Limited, Annual Report FY24); no version is stated. It will feed, read-only, built during the pilot. Crestline does not connect to it today. If the pilot entity is Thermax Babcock & Wilcox Energy Solutions, its accounting system is not named in any filing and is confirmed with Thermax before the pilot starts."
> "What Crestline is not"
> "Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run."
> "Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done."
> "Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline."
> "Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual."
> "Not a claims or arbitration tracker. It lists claims and awards as aged cash; it does not run them."
> "14 days · of read-only analysis, starting once your ERP is connected. The adapter for your ERP is built first."
> "First sync · gives the first ranked list of delays."
> "No change · to how your finance team works, or to the ERP you run."
> Footnote: "SAP: Annual Report 2023-24, note 44A, p292, filed with NSE 08 Jul 2024, which lists SAP as the IT application for Thermax Limited."
> Footer: "Strictly private · 14 / 16 · The next page is yours."

### p15 The invitation (cream top, navy sources band, FIXED)
Running head: "THE INVITATION" · "CRESTLINE INTELLIGENCE"
> KICKER: "TWELVE · THE INVITATION"
> HEADLINE: "Give us two to three domestic INR Industrial Infra projects and fourteen days."
> "A pilot built around your ERP, on two to three domestic INR Industrial Infra projects of your choice, in rupees, read-only. At the end you hold a list of the bills and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your ERP is built first; the 14 days of read-only analysis start once it is connected."
> "SCAN TO BOOK A TIME: crestlineintelligence.com/book-a-demo"
> "Before day 1: adapter built for your ERP, read-only connection approved"
> "Days 1 to 14: read-only analysis, then the list, reviewed with your team"
Day dots 1 to 14, counted from the day the connection is approved.
> "We would value a thirty-minute call at a time that suits you. Scan the code, call or write."
> "SOURCES AND NOTES"
> "Thermax Limited, Annual Report 2025-26, filed with NSE 03 Jul 2026: consolidated balance sheet p226, statement of profit and loss p227, cash flows p228, trade receivables, ageing and contract assets p256, MSME dues p274, contract balances p289, borrowings p270 to p271 and p319, segment information (note 33) p310 to p311, order and cash figures p20 and p21, MD&A p90 and p113. Annual Report 2023-24, filed with NSE 08 Jul 2024: note 44A, p292. Q4 FY26 investor presentation, filed with NSE 07 May 2026, slide 13. Q1 FY27 results, filed with NSE 30 Jul 2026, p9. Q1 FY27 investor presentation, filed with NSE 31 Jul 2026, slide 16. Earnings call transcripts from thermaxglobal.com: Q2 FY26 (12 Nov 2025) p6; Q4 FY26 (08 May 2026) p11; Q1 FY27 (31 Jul 2026) p5. CRISIL Ratings rationale, 19 Jan 2026. FY25 figures are as restated in the Annual Report 2025-26. Problem figures are consolidated; the value of a day is the Industrial Infra segment; the two never share an axis. One day = ₹4,348.05 Cr / 365 = ₹11.91 Cr, segment revenue as note 33 prints it, before ₹5.20 Cr of inter-segment sales. The Q1 FY27 results recast the segment to ₹4,088.34 Cr when Bioenergy moved to Green Solutions; that figure is not mixed with this one. Based only on Thermax's public filings, as published up to 06 Aug 2026, the date of the NSE notice of the Q1 FY27 earnings call transcript. Nothing here comes from Thermax's ERP. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days x revenue per day. No interest is priced: the group is net debt free. Cash is released once. Scenarios overlap and are never added. Not a forecast or a commitment. Step waits on page 8 are not public and are not drawn. If this booklet reached you in error, please call +91 76209 35398 and we will collect it."
> Footer: "Strictly private · 15 / 16"

### p16 Back cover (navy, FIXED)
> Vertical tagline: "Know where your money is waiting, and who can release it."
> "STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1"
> HEADLINE: "Every waiting rupee, with a site, a desk and a date."
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

Run 08 Oct 2026, `python -I th5_check.py <thermax>` and `python -I th5_xco.py <thermax>` (session scratch folder, outside this folder). Every scan carries a planted hit that must fire, and asserts a minimum region size for the pack, for the printed region and for the folder.

| Check | Planted hits | Result |
|---|---|---|
| Number trace against data.md, depth.md, calc/thermax-savings-output.txt, src/th-calc-output.txt, qa-report.md (rounded forms allowed; page refs, dates, years, axis ends and counts up to 31 skipped) | 2 of 2 | every number in the file traced, 0 untraced |
| Cross-company: the eleven other company names on the Garvis list, the parallel company, our demo source, and two headline figures from other packs (anchored so Thermax's own segment assets do not match), in this whole file | 5 | 0 |
| Same scan over all 23 text files in thermax/ | 6 | 3, all on qa-report.md line 40, which is QA's own description of the scan patterns, not data |
| Dashes (em, en, figure dash, spaced hyphen, double hyphen) | 3 | 0 |
| Placeholders (braced slot ids and the usual to-do markers) | 2 | 0 |
| KEPT OUT terms: the README TH-3 list plus the director, the internal day figure and the simulator opening that TH-5 names | 6 | 0 |
| Signed numbers | 2 | 0 |
| Financing figures: priced carry and the disclosed loan rates | 2 | 0 |
| AI tells: brochure-ai-tells.md words, the TH-3 banned phrase, second-person quote credits | 3 | 0 |
| Near-miss controls: three of Thermax's own decimals that contain a banned number must not be flagged | | not flagged |
| "standalone" in the printed region | | 0 |
| Problem charts: left panel basis label carries CONSOLIDATED or SEGMENT and AR26 VINTAGE | | 6 of 6 |
| Segment callout on every problem chart | | 6 of 6 |
| Pages 1 to 16 in order; reader names, AR26 titles, registered office, data footing, no-rate variant, inter-segment footnote, "02 Owner told" line present | | all present |

TH-6 (08 Oct 2026): review gate re-run after the Garvis TH-6 rulings and the review fixes; results in review-TH6.md.

Logo: thermax/assets/thermax-logo-light-bg.svg (57 x 70 px intrinsic, vector) and thermax-logo-dark-bg.svg (83 x 103 px intrinsic, vector), both from thermaxglobal.com, checked for script content before saving.
