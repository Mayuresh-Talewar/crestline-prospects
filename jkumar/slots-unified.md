# J. Kumar Infraprojects: slots-unified pack (JK-5)

ONE 16-page pack for the master design. Content only: no design section (client order 2026-10-08). Sources: data.md, problems.md, solutions.md, webapp-fit.md, calc/jk-savings-output.txt, qa-report.md, depth.md. Rulings: README.md (JK-3 and the JK-4 correction binding).

## Basis (internal, never printed)

- Basis: STANDALONE, FY26 Annual Report (AR26), filed on NSE 27 Aug 2026, unless a line says otherwise. Rs crore, printed as ₹ and Cr.
- Value of a day: 5,693.89 / 365 = 15.5997 (calc). Printed rounded once as ₹15.60 Cr; the formula prints 15.5997.
- Interest: both ends of the disclosed range only, 8.1% (overdraft) and 12.35% (cash credit), AR26 printed p194. Cash capped at the 587.44 of standalone borrowings drawn (printed p195). Interest prints only with the condition that the released cash repays those facilities. Never a single rate.
- 99 and 112 (and 96/95, 70/58, 54/54) are MD&A key ratios on a page that reports consolidated figures. Always tagged [MDA]; never on a chart or table beside standalone figures. Per the JK-4 correction the 13 days came from inventory days (70 to 58); advances are never named as a cause.
- 99 is never printed as the current figure: the latest stated is 103 (7 Aug 2026).
- Farvision: named once, p14, only as "will feed, read-only, built during the pilot". The ACCOUNTING_SYSTEM slot is filled with "ERP" everywhere else.
- Tagline replaced everywhere by: "Know where your money is waiting, and who can release it."
- p14: the fifth "Not a ..." line of FIXED-PAGES (the claims tracker line) dropped. p11 "02 Owner told" line used as FIXED-PAGES words it.
- Readers per README ruling JK-3. The director that ruling excludes is neither a reader nor named anywhere in this file.
- KEPT OUT (README JK-3 list and sensitive-garvis.md) scanned by script before hand-over; the terms are held in the scratch scan script, not in this file.

## Slot map (internal, never printed)

| Slot | Filled with | Source |
|---|---|---|
| COMPANY_NAME | J. Kumar Infraprojects Limited / J. Kumar | AR26 |
| ADDRESSEE, SECOND_CONTACT | reader table | data.md s10 |
| LETTER_DATE | October 2026 | us |
| BS_DATE | 31 Mar 2026 | AR26 |
| REVENUE_FY, REV_PER_DAY | 5,693.89; 15.5997 | AR26 p173; calc |
| REC, CA | 1,485.29; 577.97 | AR26 p172, p189 |
| STUCK_TOTAL, COMBINED, DOT_COUNT | 2,063.26; 132.3 days; 132 dots | data.md s7 (Crestline sum) |
| DSO, CA_DAYS | 95.2; 37.1 | calc; data.md s2 |
| PAYABLES | 849.54 | AR26 p172 |
| MSME_PAYABLES | omitted (KEPT OUT) | |
| BORR_SERIES | 666.26 to 587.44 | AR26 p195 |
| RATE | 8.1% to 12.35% range | AR26 p194 |
| AGEING_FY, AGEING_PRIOR | six bands, 31 Mar 2025 and 2026 | AR26 p188 |
| TERMS | not published: no assumed figure | data.md s7 |
| WC_TARGET, WC_CURRENT, WC_REDUCED | "100 to 110" (met); 99 from 112 [MDA]; 13 days | T127 p17; AR26 p53 |
| GAP_DAYS, TARGET_CASH, TARGET_INTEREST | none: range met. p12 retitled to the 10 and 30 day steps | calc S10, S30 |
| PROMISE_1..4 | range; cash conversion; measurement, certification, collections; timely certifications | T127 p17; AR26 p21, p13, p55 |
| ORDER_BOOK, ORDER_BOOK_MULT | 18,554; 3.26x | AR26 p213; data.md s8 |
| OPPROFIT/WC_CHANGE/TAX/OPCASH series | not used: p8 waterfall dropped (template fallback) | |
| CLIENT_LIST | MMRDA, DMRC, MMRC, NHAI, CIDCO, BMC, PMRDA, NBCC (all public; categories not split) | AR26 p21 (PDF p13, text checked 8 Oct 2026) |
| PEER_SET, PROOF_A, PROOF_B | none: no peer filings in this folder. p9 peer bars replaced by the CFO's retention series; p13 is the self proof only | |
| Q_EVENT, Q_FIGURES | June quarter: 103 days; Q1 revenue 1,507.42 from 1,478.66; order book 22,246 | T127 p17; R127; IP127 slide 10 |
| SIM_30 | receivables only: 467.99; 37.91 to 57.80 | calc S30 |
| OVER6M | replaced by the 6 m to 1 y bucket 12.65 to 141.15 (in data.md) | AR26 p188 |
| PROFIT_SHARE, CAGR_AND_GROWTH_MULT | not used (no same-vintage series) | |
| STEP_SPLIT | none: stages carry name and tag only (A12) | |
| Rule 13 marks | 85.2/156.00; 65.2/467.99; 86.2/9.05/141.15 | calc only |

Logo: assets/jkumar_logo_white.png, downloaded 8 Oct 2026 from https://www.jkumar.com/jkumar_logo_white.png (the only logo file the site serves; PNG 600 x 750, sha256 21299de0...3f9b). No SVG, so no script check needed. Its wordmark is white.

## Reader table

Edition 1
Name: Vasant Savla
Title: Chief Financial Officer
Address block: J. Kumar Infraprojects Limited · J. Kumar House, CTS No. 448, 448/1, 449, Subhash Road · Vile Parle (East), Mumbai 400 057, Maharashtra
Salutation: Dear Mr. Savla,
Letter date: October 2026
Letter text:
> This booklet is about the next ten days, and what they are worth to J. Kumar.
> First, the range. On the call of 7 Aug 2026, Dr. Nalin J. Gupta, Managing Director, said the company intends to keep working capital "in this range only of 100 and 110, 100 to 110, not more than that." The key ratios in the Management Discussion and Analysis of the FY26 Annual Report put the year at 99 days, from 112, and the June quarter, at 103, sits inside the range. The range is met, and the ratios show where the work was done: inventory days came down from 70 to 58.
> The next days sit in the receivable book. Standalone trade receivables were ₹1,488.56 Cr at 31 Mar 2025 and ₹1,485.29 Cr at 31 Mar 2026, about 95 days of revenue on both dates. The share past its due date went from 17.2% to 27.5%. And on 20 May 2026 you said "retention is INR464 crores".
> Ten days less between a bill and its cash is ₹156.00 Cr, released once, and ₹12.64 Cr to ₹19.27 Cr a year in interest at the 8.1% to 12.35% your facilities carry, if that cash repays them. Thirty days is ₹467.99 Cr, and ₹37.91 Cr to ₹57.80 Cr a year on the same terms. They are two different steps, not a sum.
> The accounts cannot say which bills, on which site, at whose desk, or since when. That is what Crestline reads. Every figure here starts from J. Kumar's own filings. We have not seen your ERP.
> Yours sincerely,
> Rajat Kate
> Managing Director, Crestline Intelligence Private Limited
> Scenarios on published figures, not a forecast.

Edition 2
Name: Dr. Nalin J. Gupta
Title: Managing Director
Address block: J. Kumar Infraprojects Limited · J. Kumar House, CTS No. 448, 448/1, 449, Subhash Road · Vile Parle (East), Mumbai 400 057, Maharashtra
Salutation: Dear Dr. Gupta,
Letter date: October 2026
Letter text:
> This booklet is about the next ten days, and what they are worth to J. Kumar.
> First, the range. On the call of 7 Aug 2026 you said the company intends to keep working capital "in this range only of 100 and 110, 100 to 110, not more than that." The key ratios in the Management Discussion and Analysis of the FY26 Annual Report put the year at 99 days, from 112, and the June quarter, at 103, sits inside the range. The range is met, and the ratios show where the work was done: inventory days came down from 70 to 58.
> The next days sit in the receivable book. Standalone trade receivables were ₹1,488.56 Cr at 31 Mar 2025 and ₹1,485.29 Cr at 31 Mar 2026, about 95 days of revenue on both dates. The share past its due date went from 17.2% to 27.5%. And on 20 May 2026 Vasant Savla, Chief Financial Officer, said "retention is INR464 crores".
> Ten days less between a bill and its cash is ₹156.00 Cr, released once, and ₹12.64 Cr to ₹19.27 Cr a year in interest at the 8.1% to 12.35% the company's facilities carry, if that cash repays them. Thirty days is ₹467.99 Cr, and ₹37.91 Cr to ₹57.80 Cr a year on the same terms. They are two different steps, not a sum.
> The accounts cannot say which bills, on which site, at whose desk, or since when. That is what Crestline reads. Every figure here starts from J. Kumar's own filings. We have not seen the company's ERP.
> Yours sincerely,
> Rajat Kate
> Managing Director, Crestline Intelligence Private Limited
> Scenarios on published figures, not a forecast.

Letter footnote, both editions:
> Range: results call of 7 Aug 2026, transcript p. 17, filed 10 Aug 2026. Ratios 99, 112, 70 and 58: [MDA]. 103: same call, p. 17. Receivables and ageing: [AR26] pp. 172 and 188, [S]. Retention: call of 20 May 2026, transcript p. 4, filed 25 May 2026, [CFO]. ₹156.00 Cr and ₹467.99 Cr: [SCN] [INT]

## Keys

Convention: every line starting with ">" is printed copy, exactly as written. Every other line is an instruction to you and is never printed. Where a printed line carries a tag in square brackets, print the matching line below in its place, in full.

> [AR26] J. Kumar Infraprojects Limited, FY26 Annual Report, filed on NSE on 27 Aug 2026.
> [S] Standalone financial statements, 31 Mar 2026, with 31 Mar 2025 as printed in the same report.
> [MDA] The company's key ratio as printed in the Management Discussion and Analysis, FY26 Annual Report, p. 53, filed 27 Aug 2026. The company does not define it, and the same page reports consolidated figures, so it is never combined or compared with the standalone figures.
> [SCN] Scenario, not a forecast. Crestline's arithmetic on published figures: days x ₹15.5997 Cr, one day of FY26 standalone revenue (₹5,693.89 Cr / 365, FY26 Annual Report p. 173). Cash is released once. Scenarios overlap and are never added.
> [INT] Interest at the two ends of the range the company discloses for its facilities, 8.1% (overdraft) to 12.35% (cash credit), FY26 Annual Report p. 194. Cash counted for interest is capped at the ₹587.44 Cr of standalone borrowings drawn at 31 Mar 2026 (p. 195). Interest is saved only if the released cash repays those facilities.
> [CFO] As stated by Vasant Savla, Chief Financial Officer, on results calls. Not audited and not in the financial statements.
> [CS] Crestline's sum of two audited lines, not an audited figure. Contract asset days is a Crestline analytical measure, not an accounting standard.

## Headline table

| Page | Line 1 | Line 2 (gold) |
|---|---|---|
| 1 | Working-capital review | |
| 2 | This booklet is about the next ten days, | and what they are worth to J. Kumar. |
| 3 | It begins with four promises, | all of them J. Kumar's own. |
| 4 | Meanwhile, ₹2,063.26 Cr of work done | is waiting to become cash. |
| 5 | The days came out of stock. | The receivable book held still. |
| 6 | In the June quarter, the range held. | Ten days are worth ₹156.00 Cr. |
| 7 | Where does project cash wait? | Five lenses. |
| 8 | Crestline reads the dates | your ERP records. |
| 9 | Every rupee waiting gets | a reason, a desk and a date. |
| 10 | Test the fix before you make it. | Then put a name on it. |
| 11 | A finding gets an owner, | a date and an auditor. |
| 12 | The range is met. | The next ten days, priced. |
| 13 | It has been done before. | By J. Kumar. |
| 14 | Read-only on your books. | Nothing is written back. |
| 15 | Give us one to three running domestic projects | and fourteen days. |
| 16 | Every waiting rupee, | with a site, a desk and a date. |

## Page 1 · Cover

> STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1
> Prepared for the addressee only. Please do not forward or copy.
> Working-capital review
> J. Kumar Infraprojects Limited · October 2026
Hero line, set on the top curve:
> ₹156 CR IN EVERY TEN DAYS BETWEEN A BILL AND ITS CASH
Hero footnote, small, under the curve:
> Ten days x ₹15.5997 Cr, one day of FY26 standalone revenue (₹5,693.89 Cr / 365), FY26 Annual Report p. 173, filed on NSE 27 Aug 2026. Scenario, not a forecast.
> PREPARED EXCLUSIVELY FOR
Reader name and title: from the reader table, per edition.
> DRAFTED BY
> Crestline Intelligence
> Rajat Kate · Managing Director
J. Kumar logo: the file jkumar_logo_white.png, as supplied. Its wordmark is white, so place it on a small navy (#0D172F) rounded chip in the white strip's "PREPARED EXCLUSIVELY FOR" column, above the reader's name. Never place it directly on white. Never redraw, trace or recolour it.

## Page 2 · Letter

Running head:
> A LETTER
Date, salutation, address block, letter text and signature: from the reader table, per edition.
> FROM
> Rajat Kate · Managing Director · Crestline Intelligence Private Limited · Pune, Maharashtra · +91 76209 35398 · rajat@crestlineintelligence.com
> P.S.
The P.S. line is left blank for a handwritten note.
> Footer: Strictly private · 2 / 16
Footnote: the letter footnote from the reader table.

## Page 3 · Chapter one

> KICKER: ONE · THE PROMISES · J. KUMAR INFRAPROJECTS LIMITED
> Chapter one
Headline: page 3 of the headline table.
> Four lines from J. Kumar's own filings and calls. Each one is about how fast work becomes cash.
Rows, roman numeral at left, figure or phrase in bold:
> i · "100 to 110" · Working capital days. "So right now also we intend to keep it in this range only of 100 and 110, 100 to 110, not more than that." · Dr. Nalin J. Gupta, Managing Director, results call of 7 Aug 2026, transcript p. 17, filed 10 Aug 2026.
> ii · "Cash conversion is central to strategy." · "In milestone-linked EPC, project planning, client coordination, billing documentation and collections have to advance in sync." · FY26 Annual Report, Strategic Review, p. 21, filed 27 Aug 2026.
> iii · "We tightened follow-through on measurement, certification and collections." · Joint Managing Directors' Message, FY26 Annual Report, p. 13, filed 27 Aug 2026.
> iv · "timely project certifications, approvals, and collections" · Management Discussion and Analysis, risk table, FY26 Annual Report, p. 55, filed 27 Aug 2026.
> All four are promises about time. The first one is already met.
> Footer: Strictly private · 3 / 16

## Page 4 · Chapter two

> KICKER: TWO · WAITING OUTSIDE · J. KUMAR INFRAPROJECTS LIMITED
> Chapter two
Headline: page 4 of the headline table.
> ₹2,063.26 Cr
> earned, and not yet cash, at 31 Mar 2026 [CS]
> 37.1 days · work done, waiting to become a bill · ₹577.97 Cr
> 95.2 days · bill raised, waiting to be paid · ₹1,485.29 Cr
Dot grid: 365 dots, 132 lit (37 for work waiting to be billed, then 95 for bills waiting to be paid). Of the 95, the last 10 drawn hollow and dashed as the scenario mark.
> 132 of 365 days of FY26 revenue
Scenario mark beside the 10 hollow dots:
> With Crestline: receivable days 95.2 to 85.2, ₹156.00 Cr released once. Scenario, not a forecast.
Three side stats:
> 132.3 days · of FY26 revenue held in work not yet billed and bills not yet paid, together [CS]
> ₹141.15 Cr · of bills 6 months to 1 year past their due date at 31 Mar 2026, up from ₹12.65 Cr
> 27.5% · of the receivable book past its due date, from 17.2% a year earlier
> Footnote: Contract assets (unbilled revenue) ₹577.97 Cr, p. 189; trade receivables ₹1,485.29 Cr, p. 172; ageing from due date, p. 188, all undisputed. [AR26] [S] Days on FY26 revenue of ₹5,693.89 Cr, p. 173. [CS] [SCN]
> Footer: Strictly private · 4 / 16

## Page 5 · Chapter three

> KICKER: THREE · WHAT MOVED · J. KUMAR INFRAPROJECTS LIMITED
> Chapter three
Headline: page 5 of the headline table.
> The 13 days the company took out of working capital in FY26 came, on its own key ratios, almost entirely from inventory: inventory days 70 to 58, debtor days 96 to 95, creditor days unchanged at 54. The receivable book stayed about where it was.
Card A. Title and context:
> The company's own key ratios · FY25 and FY26 [MDA]
Small ruled table, four rows, two columns. History only: no scenario mark (different basis from every calculation in this booklet).
> Working capital days · 112 · 99
> Debtor days · 96 · 95
> Inventory days · 70 · 58
> Creditor days · 54 · 54
> Takeaway: the days came almost entirely from inventory, 70 to 58. Debtor days moved from 96 to 95.
Card B. Title and context:
> Receivable days, standalone · 31 Mar 2025 and 31 Mar 2026 [AR26] [S]
Chart: vertical bars, one scale starting at zero days. Two solid bars: 95.4 (31 Mar 2025) and 95.2 (31 Mar 2026). Two scenario bars, dashed and hollow, same scale: 85.2 and 65.2.
> 95.4 · 31 Mar 2025
> 95.2 · 31 Mar 2026
> With Crestline, 10 days: 85.2 days, ₹156.00 Cr released once, ₹12.64 Cr to ₹19.27 Cr interest a year, only if the cash repays the facilities
> With Crestline, 30 days: 65.2 days, ₹467.99 Cr released once, ₹37.91 Cr to ₹57.80 Cr interest a year, only if the cash repays the facilities
> Scenario, not a forecast. The two steps are alternatives, never added.
> Takeaway: trade receivables ₹1,488.56 Cr to ₹1,485.29 Cr; inventories ₹503.48 Cr to ₹329.65 Cr.
Closing statement:
> The Joint Managing Directors' Message says: "We tightened follow-through on measurement, certification and collections." Measurement is the company's own step; certification and payment are the client's. The receivable line has not yet moved.
Stats row:
> ₹18,554 Cr · order book at 31 Mar 2026, 3.26x FY26 revenue
> ₹666.26 Cr to ₹587.44 Cr · standalone borrowings, 31 Mar 2025 to 31 Mar 2026
> Footnote: Receivable days = trade receivables / (that year's revenue / 365), closing basis, p. 172 and p. 173. Inventories p. 187. Order book p. 213. Borrowings p. 195. [AR26] [S] [MDA] [SCN] [INT]
> Footer: Strictly private · 5 / 16

## Page 6 · Chapter four

> KICKER: FOUR · THE JUNE QUARTER · J. KUMAR INFRAPROJECTS LIMITED
> Chapter four
Headline: page 6 of the headline table.
> The latest filings are for the quarter to 30 Jun 2026. Working capital is inside the range the company set.
Three tiles:
> 103 days · "the working capital cycle as of right now is 103" · Dr. Nalin J. Gupta, Managing Director, results call of 7 Aug 2026, transcript p. 17, filed 10 Aug 2026
> ₹1,507.42 Cr · revenue for the quarter, standalone, unaudited, from ₹1,478.66 Cr a year earlier · results filed 6 Aug 2026
> ₹22,246 Cr · order book at 30 Jun 2026 · investor presentation, slide 10, filed 6 Aug 2026
Closing statement:
> ₹156.00 Cr is what ten days are worth on the wait between a bill and its cash. One day of FY26 standalone revenue is ₹15.60 Cr.
> Footnote: One day = ₹5,693.89 Cr / 365 = ₹15.5997 Cr, FY26 Annual Report p. 173, filed 27 Aug 2026, standalone. 103 days for the June quarter: same results call, transcript p. 3. [SCN]
> Footer: Strictly private · 6 / 16

## Page 7 · Chapter five

> KICKER: FIVE · ENTER CRESTLINE · CRESTLINE INTELLIGENCE
> Chapter five
Headline: page 7 of the headline table.
> Once connected, Crestline reads your ERP and shows which bills and retention are waiting, on which site, and how many crores. Here is each lens, and the J. Kumar figure it would open up.
> 01 Working capital · WC · The cash a project eats before it pays you back. 99 days in FY26, from 112 · The company's key ratio; its stated range is 100 to 110 [MDA]
> 02 Order to cash · O2C · From work done on site to money in the bank. 132.3 days · Work not yet billed and bills not yet paid, together, on FY26 revenue [CS]
> 03 Procure to pay · P2P · From a site's material request to the vendor getting paid. ₹849.54 Cr · Owed to vendors at 31 Mar 2026, standalone
> 04 Client · WHO PAYS SLOW · Which clients pay slow, and why. 27.5% · Of the receivable book past its due date, from 17.2%
> 05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate. 54 days · Creditor days, unchanged from FY25 [MDA]
> Know where your money is waiting, and who can release it.
> READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS
> Footnote: Lens 01 and 05: [MDA]. Lens 02: contract assets ₹577.97 Cr (p. 189) and trade receivables ₹1,485.29 Cr (p. 172) on FY26 revenue of ₹5,693.89 Cr (p. 173). Lens 03: trade payables, p. 172. Lens 04: ageing from due date, p. 188. [AR26] [S] [CS]
> Footer: Strictly private · 7 / 16 · Now, on J. Kumar's published figures.

## Page 8 · Chapter six

> KICKER: SIX · THE CLOCK THE ERP ALREADY KEEPS · CRESTLINE INTELLIGENCE
> Chapter six
Headline: page 8 of the headline table.
> It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait.
> CRESTLINE'S VIEWS · DRAWN ON J. KUMAR'S PUBLISHED FIGURES · NOTHING FROM YOUR ERP
There is no cash-flow waterfall on this page. The timeline takes the page.
> One bill, from work done to cash in the bank
Timeline, in this order. Each stage tile carries its name and its tag, nothing else: no number, no day count, no bar length, no share of a total.
> JOINT MEASUREMENT · J. KUMAR AND CLIENT
> MB / QS CHECK · J. KUMAR
> RA BILL PREPARED · J. KUMAR
> REVIEW STARTED · J. KUMAR
> REVIEW COMPLETED · J. KUMAR
> BILL SUBMITTED · J. KUMAR
> CLIENT ACKNOWLEDGED · CLIENT
> CERTIFIED · CLIENT
> TAX INVOICE RAISED · J. KUMAR
> PAYMENT RECEIVED · CLIENT
> RETENTION RELEASED · CLIENT
> Ownership: J. Kumar: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay.
Strip totals, printed beside the timeline, not on any stage:
> At 31 Mar 2026: work done and not yet billed, ₹577.97 Cr (37.1 days of revenue). Bills raised and not yet paid, ₹1,485.29 Cr (95.2 days). [AR26] [S] [CS]
> Step waits are not public. Once connected, Crestline measures them from the dates your ERP records. This timeline shows the stages, not J. Kumar's days.
> Footer: Strictly private · 8 / 16 · Illustrative stages. Totals are from published accounts.

## Page 9 · Chapter seven

> KICKER: SEVEN · REASON, DESK AND DATE · J. KUMAR INFRAPROJECTS LIMITED
> Chapter seven
Headline: page 9 of the headline table.
> The accounts say how much is waiting and for how long past due. Crestline adds which bill, which client, which site and whose desk.
Card A. Title and context:
> Trade receivables by time past due date · 31 Mar 2025 and 31 Mar 2026, ₹ Cr [AR26] [S]
Chart: grouped horizontal bars, one scale starting at zero, two bars per band (31 Mar 2025, 31 Mar 2026), every bar labelled.
> Not due · 1,232.24 · 1,076.79
> Under 6 months · 155.18 · 185.74
> 6 months to 1 year · 12.65 · 141.15
> 1 to 2 years · 46.13 · 43.98
> 2 to 3 years · 29.43 · 20.16
> Over 3 years · 12.94 · 17.47
Scenario mark: on the 31 Mar 2026 bar of "6 months to 1 year", a dashed hollow outline of the same length, labelled:
> Collected in this scenario: ₹141.15 Cr, 9.05 days of revenue (receivable days 95.2 to 86.2). Interest ₹11.43 Cr to ₹17.43 Cr a year, only if the cash repays the facilities. Scenario, not a forecast.
> Takeaway: ₹141.15 Cr is 6 months to 1 year past due, 11.2 times the year before, up ₹128.50 Cr. Paying is the client's act; knowing which bills, and pressing for them with the paperwork complete, is the company's.
Card B. Title and context:
> Retention money, as the CFO stated it · four quarters of FY26, ₹ Cr [CFO]
Chart: four columns on one scale starting at zero, each labelled. History as stated. Scenario mark: beside the last column, a dashed hollow column of the same height divided into unlabelled segments, with no numbers on it.
> 30 Jun 2025 · 386
> 30 Sep 2025 · about 389
> 31 Dec 2025 · 415
> 31 Mar 2026 · 464
> With Crestline: the same retention, split by contract and by the milestone each amount waits on. Scenario, not a forecast.
Quote rows under the chart, credited as given:
> "Retention is INR386 crores and unbilled revenue is at INR650 crores." Vasant Savla, Chief Financial Officer, call of 30 Jul 2025, transcript p. 14, filed 4 Aug 2025.
> "So unbilled is about INR695 crores and retention is about INR389 crores." Vasant Savla, Chief Financial Officer, call of 7 Nov 2025, transcript p. 13, filed 11 Nov 2025.
> "So retention money is INR415 crores and debtors is INR1,407 crores." Vasant Savla, Chief Financial Officer, call of 6 Feb 2026, transcript p. 12, filed 9 Feb 2026.
> "Unbilled revenue is INR578 crores, mobilization advance is INR706 crores and retention is INR464 crores." Vasant Savla, Chief Financial Officer, call of 20 May 2026, transcript p. 4, filed 25 May 2026.
> Takeaway: releasing retention takes the client's certificate at a milestone. Knowing which milestone each rupee waits on is the company's.
> Footnote: Ageing from due date, p. 188, all undisputed, none credit impaired. Days on FY26 revenue, p. 173. [AR26] [S] [SCN] [INT] [CFO]
> Footer: Strictly private · 9 / 16

## Page 10 · Chapter eight

> KICKER: EIGHT · SIMULATE, THEN ASSIGN · CRESTLINE INTELLIGENCE
> Chapter eight
Headline: page 10 of the headline table.
> The simulator moves one wait at a time, at the value of a day measured from the books, and stops where the contract stops. A plan made there becomes tickets with the simulated figure as the target.
Card A. Title and context:
> Cycle simulator · on J. Kumar's published figures
Slider picture: receivable days from 95.2 to 65.2, drawn to scale, the moved position dashed and hollow.
> Receivable days 95.2 to 65.2 · ₹467.99 Cr released once · ₹37.91 Cr to ₹57.80 Cr interest a year
> Vendor credit held where it is. Paying vendors later is never counted as a saving.
> Once connected, each client's signed payment term becomes the floor. A step that would cross it stops at the term and says so.
> Scenario, not a forecast.
Card B. Title and context:
> Vendor advisor · each vendor against its own due date
> Paying early lends borrowed cash at no interest. Paying late is risk. The target is the due date.
> ₹849.54 Cr owed to vendors at 31 Mar 2026, standalone
Card C. Title and context:
> Client lens · who pays slow, and why
> Each client's certification and payment, across every site, against the terms that client signed.
Client chips, label above them:
> Clients named in the FY26 Annual Report
> MMRDA · DMRC · MMRC · NHAI · CIDCO · BMC · PMRDA · NBCC
> Footnote: Receivable days and trade payables, p. 172; revenue, p. 173; clients, Strategic Review, p. 21. [AR26] [S] [SCN] [INT]
> Footer: Strictly private · 10 / 16

## Page 11 · Chapter nine

> KICKER: NINE · FROM A FINDING TO A CLOSED TICKET · CRESTLINE INTELLIGENCE
> Chapter nine
Headline: page 11 of the headline table.
> Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your ERP's records, never generated by a model.
> The auditor · How one finding reads · on J. Kumar's published figures
> FINDING (WARNING): ₹141.15 Cr of bills is 6 months to 1 year past its due date, up from ₹12.65 Cr a year earlier. Receivable days stand at 95.2.
> ROOT CAUSE: Not visible in public accounts. From your ERP in the pilot: which client, which site, which bill, and which step of submission, certification or payment holds the days.
> DO THIS: The named bills that must move, each with a deadline, opened by the target: receivable days from 95.2 to 85.2.
> Owner: Commercial head · due in 7 days · EXAMPLE
> Raise ticket · Alert owner
> 01 Ticket raised: Baseline, target and due date are fixed at that moment.
> 02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed.
> 03 Re-measured: The same figure, from fresh data, each time the source syncs.
> 04 Verified: Closed only when the number moves. Nobody can mark it done by hand.
> Ask Crestline: a question answered from J. Kumar's own evidence · Retrieval, then code
> What if bills were paid ten days sooner?
> Receivable days 95.2 to 85.2. ₹156.00 Cr released, once. Interest ₹12.64 Cr to ₹19.27 Cr a year, only if that cash repays the company's facilities.
> Illustrative answer on published figures. Once connected, the live answer comes from your ERP.
> 01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen.
> 02 Simulates: A what-if runs through the simulator, inside the contract's bounds.
> 03 Computes: Code does the arithmetic. The model never produces a number.
> 04 Answers: Figures first, then the evidence. Where nothing matches, it says so.
> Question kinds: Position · Why · What now · What if · Compare projects · Projection
> Footnote: Finding: ageing from due date, p. 188; receivable days on FY26 revenue, pp. 172 and 173. [AR26] [S] [SCN] [INT] The owner line is an example, not one of J. Kumar's roles.
> Footer: Strictly private · 11 / 16 · Scenario on J. Kumar's published figures, not a forecast.

## Page 12 · Chapter ten

> KICKER: TEN · PRICED · J. KUMAR INFRAPROJECTS LIMITED
> Chapter ten
Headline: page 12 of the headline table.
> The company's range is met. What follows prices the next steps on the wait between a bill and its cash, on FY26 standalone revenue. Each row is an alternative. None is added to another.
Table, four rows:
> Receivables, ten days sooner · 95.2 to 85.2 days · ₹156.00 Cr released once · ₹12.64 Cr to ₹19.27 Cr interest a year
> Receivables, thirty days sooner · 95.2 to 65.2 days · ₹467.99 Cr released once · ₹37.91 Cr to ₹57.80 Cr interest a year
> Bills 6 months to 1 year past due, collected · 95.2 to 86.2 days · ₹141.15 Cr released once · ₹11.43 Cr to ₹17.43 Cr interest a year · sits inside both rows above
> Paying vendors later · None claimed · Paying vendors later is never a saving.
Bar: one horizontal scale starting at zero, the longest bar the borrowings. A solid bar for borrowings; three dashed hollow bars, each on its own line, never stacked or joined.
> ₹587.44 Cr · standalone borrowings drawn at 31 Mar 2026
> ₹156.00 Cr · 26.6% of borrowings · scenario
> ₹467.99 Cr · 79.7% of borrowings · scenario
> ₹141.15 Cr · 24.0% of borrowings · scenario
> Scenario, not a forecast.
Closing statement:
> Interest is saved only if the released cash repays these facilities. If it does not, the cash still stands, and the interest does not apply.
> Footnote: Borrowings, p. 195; rates, p. 194; receivables, p. 172; revenue, p. 173; ageing, p. 188. [AR26] [S] [SCN] [INT]
> Footer: Strictly private · 12 / 16

## Page 13 · Chapter eleven

> KICKER: ELEVEN · DONE BEFORE · J. KUMAR INFRAPROJECTS LIMITED
> Chapter eleven
Headline: page 13 of the headline table.
> The proof that days can come out is J. Kumar's own.
Rows, ruled:
> i · 112 to 99 · Working capital days, FY25 to FY26 [MDA]
> ii · 70 to 58 · Inventory days, FY25 to FY26: where almost all of the 13 days came from [MDA]
> iii · ₹666.26 Cr to ₹587.44 Cr · Standalone borrowings, 31 Mar 2025 to 31 Mar 2026, p. 195 [AR26] [S]
> iv · "100 to 110" · The range Dr. Nalin J. Gupta, Managing Director, set out on 7 Aug 2026 (transcript p. 17, filed 10 Aug 2026). Met.
Closing statement:
> The discipline that took the days out of stock is already in the business. The receivable book is the next place for it.
> These are J. Kumar's own results. Crestline played no part in them.
> Footer: Strictly private · 13 / 16

## Page 14 · Chapter twelve

> KICKER: TRUST · READ-ONLY BY DESIGN · CRESTLINE INTELLIGENCE
Headline: page 14 of the headline table.
> Crestline is read-only by design, and your ERP stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems.
> READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user.
> ON RECORD · Every sync is logged, and your IT team can see it.
> YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection.
> PILOT SCOPE · One to three running domestic projects, standalone, read-only. Farvision will feed, read-only, built during the pilot.
> SCOPE · Standalone only. Joint ventures, subsidiaries and foreign currency are not modelled.
> What Crestline is not
> Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run.
> Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done.
> Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline.
> Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual.
> 14 days · of read-only analysis, starting once your ERP is connected. The adapter for your ERP is built first.
> First sync · gives the first ranked list of delays.
> No change · to how your finance team works, or to the ERP you run.
> Footnote: ERP named in the FY26 Annual Report, p. 129, filed 27 Aug 2026.
> Footer: Strictly private · 14 / 16 · The next page is yours.

## Page 15 · The invitation

> KICKER: TWELVE · THE INVITATION · CRESTLINE INTELLIGENCE
Headline: page 15 of the headline table.
> A pilot built around your ERP, on one to three running domestic projects of your choice, in rupees, read-only. At the end you hold a list of the bills and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your ERP is built first; the 14 days of read-only analysis start once it is connected.
> SCAN TO BOOK A TIME: crestlineintelligence.com/book-a-demo
> Before day 1: adapter built for your ERP, read-only connection approved
> Days 1 to 14: read-only analysis, then the list, reviewed with your team
Day dots 1 to 14, counted from the day the connection is approved.
> We would value a thirty-minute call at a time that suits you. Scan the code, call or write.
> SOURCES AND NOTES
> J. Kumar Infraprojects Limited, FY26 Annual Report, filed on NSE 27 Aug 2026, standalone unless labelled: balance sheet and statement of profit and loss (pp. 172 and 173), inventories (p. 187), receivable ageing from due date (p. 188), contract assets (p. 189), borrowing rates (p. 194), borrowings drawn (p. 195), order book (p. 213), Joint Managing Directors' Message (p. 13), Strategic Review (p. 21), Management Discussion and Analysis key ratios (p. 53, the company's own, basis not defined, beside consolidated figures) and risk table (p. 55), ERP (p. 129). Results for the quarter to 30 Jun 2026, standalone, unaudited, and investor presentation (slide 10), both filed 6 Aug 2026. Results call transcripts, page as printed: 30 Jul 2025 (filed 4 Aug 2025), 7 Nov 2025 (11 Nov 2025), 6 Feb 2026 (9 Feb 2026), 20 May 2026 (25 May 2026), 7 Aug 2026 (10 Aug 2026). Retention is the Chief Financial Officer's figure from those calls, not audited. One day of revenue = ₹5,693.89 Cr / 365 = ₹15.5997 Cr. Receivables may carry tax that revenue does not, so the cash per day is on the conservative side. Nothing here comes from J. Kumar's ERP. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days x revenue per day; interest = cash x the rate range the company discloses, 8.1% to 12.35%, applied only where the cash repays borrowing and capped at the ₹587.44 Cr of standalone borrowings drawn, so it counts only if the released cash repays those facilities. Cash is released once, interest recurs each year. Scenarios overlap and are never added. Not a forecast or a commitment. Step waits on page 8 are not public and are not drawn. If this booklet reached you in error, please call +91 76209 35398 and we will collect it.
> Footer: Strictly private · 15 / 16

## Page 16 · Back cover

> Vertical tagline: Know where your money is waiting, and who can release it.
> STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1
Headline: page 16 of the headline table.
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

Script: `python -I check.py slots-unified.md <jkumar> <FIXED-PAGES.md>` (kept in the JK-5 scratch folder, not in this folder). Region checked: "## Reader table" through the line before "## Checks"; minimum size asserted (20,000 characters, 200 lines) so an empty cut cannot pass. Every scan was also run with a planted hit, and every plant was caught.

| Check | Result | Planted hit caught |
|---|---|---|
| Every number traces to data.md, problems.md, solutions.md, qa-report.md, depth.md, webapp-fit.md, calc output and notes, or FIXED-PAGES; five rounded values (156, 15.60, 37, 95, 132) recomputed by the script from 5,693.89, 577.97 and 1,485.29 | 0 untraced | yes |
| Scenario marks ("With Crestline", "Collected in this scenario") use calc output values only | 0 off calc | yes |
| 19 company names (word match, case blind) | 0 | yes |
| KEPT OUT terms (README JK-3 list, sensitive-garvis.md items, the excluded director's name) | 0 | yes |
| Dashes as punctuation (U+2010 to U+2015, U+2212, spaced or doubled hyphen, hyphen between digits; table rule rows excepted) | 0 | yes |
| Placeholders (braces, TBD, TODO, XXX) | 0 | yes |
| Signed numbers (A13; the phone number excepted) | 0 | yes |
| Single-rate interest: each interest figure appears only inside its "low Cr to high Cr" pair; 8.1% never without 12.35% on the line | 0 | yes |
| Farvision only as "will feed, read-only, built during the pilot" | 0 | yes |
| "you said" only over the edition reader's own words (read by hand) | Edition 1: Vasant Savla's retention quote. Edition 2: Dr. Nalin J. Gupta's range quote | n/a |
| 99 never printed as the current figure; always FY26 and tagged [MDA]; the latest stated figure, 103, on p6 | pass, read by hand | n/a |
