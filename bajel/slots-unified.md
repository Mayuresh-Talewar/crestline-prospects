# Bajel Projects Limited: unified 16-page pack (BJ-5)

Internal sections first (never printed): basis, slot map, logo, open questions. Then the reader table, then the printed region from "## Keys" to the end of Page 16, then the checks. The printed region is what Garvis pastes into MASTER-PROMPT-TEMPLATE.md as {PACK}; the reader table is {READERS_TABLE}.

## Basis and rulings applied (internal)

- Entity and basis: Bajel Projects Limited, STANDALONE, Annual Report FY26 vintage (filed on NSE 17 Jul 2026; data.md documents table). Domestic only. No international figure is charted.
- Story: the four QA-fixed problems (problems.md P1 to P4, qa-report.md applied log). P1 on page 5, P2 on pages 4 and 9, P3 on page 8, P4 on page 12.
- Scenario rows: (a) 10 days, ₹76.48 Cr once, ₹4.97 Cr to ₹7.65 Cr a year; (b) 30 days, ₹229.44 Cr once, ₹14.91 Cr to ₹22.94 Cr a year (calc/bajel-savings-output.txt). Never added. Interest at the disclosed 6.5% to 10% (AR26 p291), capped at the ₹349.96 Cr of borrowings that range covers, saved only if the cash repays them.
- No company target exists for receivable days or working capital (data.md s7), so page 12 is a ten-day and thirty-day scenario page, not "your own target".
- Cover hero is ten days of FY26 standalone revenue: 2,791.58 / 365 x 10 = 76.48 (calc output "Value of one day" 7.65 and scenario a).
- Readers: README BJ-3. Titles as the README rules them from AR26: "Managing Director and CEO" (AR26 p256 signature block; DIN 07008856) and "Chief Financial Officer" (AR26 p256, p313; never "Joint President").
- Registered office as AR26 prints it in the Corporate Governance Report certificate of non-disqualification (AR26 printed p164, on NSE copy PDF page 85 with p165; page image checked in BJ-6): "801, Rustomjee Aspiree, Anik Wadala Link Road, Sion East, Mumbai 400022". AR26 also prints shorter forms (corporate information p75: "801, Rustomjee Aspiree, Bhanu Shankar Yagnik Marg, Sion East, Mumbai 400022"); the certificate form is used because it carries the door number and road and needs no dash.
- KEPT OUT of every printed line: sensitive-garvis.md S1 to S13 in full, the debtor-days headline from the dossier, any restatement wording, the internal conflicts, the FY25 facility split, the earlier report's not-due figure, any ERP vendor. The fixed page 14 line on claims trackers is dropped. The rating agency rationale is not used in print (not needed; keeps the copy to the company's own words).
- Plain-language and AI-tells pass done by hand (brochure-ai-tells.md): no "unlock, leverage, seamless, holistic, landscape, delve, journey", no "not just X but Y", no em or en dashes.

## Slot map: TEMPLATE-SLOTS.md section 3, every row (internal)

| Slot | Value used | Page(s) | Source or fallback |
|---|---|---|---|
| COMPANY_NAME | Bajel Projects Limited; short "Bajel" | all | AR26 cover |
| ADDRESSEE | Edition 1 Rajesh Ganesh, Managing Director and CEO; Edition 2 Nitesh Bhandari, Chief Financial Officer; registered office above | 1, 2 | AR26 p256, p164 |
| SECOND_CONTACT | the other reader in each edition | 2, 15 | AR26 |
| LETTER_DATE | October 2026 | 1, 2 | us |
| BS_DATE | 31 Mar 2026 | 4 | AR26 p256 |
| REVENUE_FY | ₹2,791.58 Cr FY26 (₹2,598.24 Cr FY25) | 1, 5, 6, 15 | AR26 p257 |
| REV_SERIES | FY24 ₹1,169.21 Cr in words, FY26 ₹2,791.58 Cr | 5 | AR24 p165, AR26 p257; fallback 3 years, words only |
| REC | ₹1,849.05 Cr net (₹1,258.65 Cr FY25) | 5, 8 | AR26 p256 |
| CA | ₹18.86 Cr contract assets | 8 | AR26 p256; too small to carry a split, so the unbilled and unpaid split is replaced by not due and overdue (AR26 p280) |
| REC_SERIES | receivable days 139.8 and 202.8 charted; 182.5 in words | 5 | AR26 p320, AR24 p112 |
| PAYABLES | ₹881.56 Cr | 7, 9, 10 | AR26 p292 |
| MSME_PAYABLES | ₹44.80 Cr to micro and small enterprises | 7, 9, 10 | AR26 p292 |
| BORR_SERIES | ₹356.59 Cr and ₹349.96 Cr (two points; FY26 split only) | 5, 12 | AR26 p291; fallback 2 points |
| RATE | 6.5% to 10%, both ends always | 2, 10, 11, 12, 15 | AR26 p291 |
| AGEING_FY | not due ₹1,530.12 Cr, overdue ₹399.35 Cr, gross ₹1,929.48 Cr | 4, 9 | AR26 p280 |
| AGEING_PRIOR | not due ₹882.77 Cr, overdue ₹448.34 Cr (AR26 comparative only) | 9 | AR26 p280 |
| TERMS | "30 to 360 days" (from "30 to 90 days") | 4, 7 | AR26 p281, AR25 p214 |
| AR_DEBTOR_DAYS | company turnover 1.80 and 2.61, so 202.8 and 139.8 days | 5, 7, 11 | AR26 p320 |
| WC_TARGET | none published | 2, 3, 7, 12 | fallback applied: scenario page 12 retitled, no target printed |
| WC_CURRENT | not printed | n/a | the company's own figure is an internal conflict (kept out); no computed substitute printed |
| WC_REDUCED | not printed | n/a | fallback: clause dropped; page 13 uses the FY25 receivable-days improvement instead |
| ORDER_BOOK | ₹3,441.82 Cr at 31 Mar 2026 (no multiple printed); ₹4,055 Cr at 30 Jun 2026 against ₹3,612 Cr | 5, 6 | AR26 p317; DK1 p20, p22 |
| PROMISE_1..N | three: MD growth guidance, RAASTA 2030 targets, Chairman's working capital priority | 3 | TR4 p9, DK1 p30, AGM p5 |
| OPPROFIT_SERIES | not published as a series | 8 | fallback: waterfall dropped; page 8 carries the operating cash chart (P3) |
| WC_CHANGE_SERIES | cash flow receivables line ₹549.43 Cr and ₹599.82 Cr | 8 | AR26 p258 |
| TAX_PAID | omitted | 8 | OPT, omitted |
| OPCASH_SERIES | ₹69.13 Cr and ₹21.09 Cr charted; ₹195.37 Cr in words | 8 | AR26 p258, AR25 p190 |
| CLIENT_LIST | categories, one name: Power Grid and its group 64.31% | 10 | AR26 p312; fallback categories |
| PEER_SET | none | 9, 13 | fallback: peer bars dropped; page 9 shows Bajel's own payable days |
| PROOF_A | none | 13 | fallback: self proof only |
| PROOF_B | none | 13 | fallback: self proof only |
| Q_EVENT | Q1 FY27: order book ₹4,055 Cr, interest ₹11.8 Cr against ₹15.9 Cr, three Power Grid packages in Aug 2026 | 6 | DK1 p22, p23; Reg 30 of 8 and 12 Aug 2026 |
| Q_FIGURES | as above; no balance sheet after 31 Mar 2026 is filed, so no debt tile | 6 | data.md blockers |
| SOURCES_PARA | written on page 15 | 15 | data.md documents table |
| REV_PER_DAY | ₹7.65 Cr | 1, 2, 6, 15 | calc output |
| DSO_DAYS | 202.8 (company basis) | 4, 5, 7, 10, 11 | AR26 p320 |
| CA_DAYS | not printed | n/a | contract assets ₹18.86 Cr carry no meaningful day figure; no computed day printed |
| COMBINED | not printed | n/a | as above |
| DPO_DAYS | 113.0 (FY25 80.6) | 7, 9, 10 | AR26 p320 |
| STUCK_TOTAL | replaced: cover hero is ten days of revenue (₹76.48 Cr); page 4 hero is not due ₹1,530.12 Cr | 1, 4 | calc output; AR26 p280 |
| TEN_DAYS | ₹76.48 Cr | 1, 2, 6, 11, 12 | calc scenario a |
| TEN_PLUS_TEN | not printed (one receivable leg only) | n/a | calc ran one lever; retention NA |
| TEN_INT | ₹4.97 Cr to ₹7.65 Cr a year | 2, 11, 12 | calc scenario a |
| GAP_DAYS | none (no target) | n/a | fallback |
| TARGET_CASH | none (no target) | n/a | fallback |
| TARGET_INTEREST | none (no target) | n/a | fallback |
| PCT_OF_BORR | not printed | n/a | not in calc output; marks 273.48 and 120.52 show the same thing on the chart |
| SIM_30 | ₹229.44 Cr once, ₹14.91 Cr to ₹22.94 Cr a year | 5, 10, 12 | calc scenario b |
| OVER6M | replaced by overdue more than one year: ₹206.18 Cr (FY26) | 9 | AR26 p280 |
| PROFIT_SHARE | not printed | n/a | no operating profit series |
| CAGR_AND_GROWTH_MULT | "more than doubled" in words (FY24 to FY26) | 5 | data.md fact-check 8; no CAGR printed |
| DOT_COUNT | dropped | 4 | no traced value; page 4 uses three side stats |
| ORDER_BOOK_MULT | not printed | n/a | BJ-6 M1: data.md's 1.45 is the 30 Jun 2026 book over FY26 revenue; the 31 Mar 2026 figure is 1.23 and is in no calc output, so the multiple is dropped |
| STEP_SPLIT | none: stages carry names and owners only | 8 | FIXED-PAGES rule 3, A12 |
| FIX_LENSES | written out, page 7 | 7 | FIXED-PAGES |
| FIX_ENGINE | written out, page 8 | 8 | FIXED-PAGES |
| FIX_TICKET | written out, page 11 | 11 | FIXED-PAGES |
| FIX_ASK | written out, page 11 | 11 | FIXED-PAGES |
| FIX_SIMULATOR | page 10 | 10 | product context |
| FIX_SECURITY | written out, page 14, claims-tracker line dropped | 14 | FIXED-PAGES |
| FIX_PILOT | written out, page 15 | 15 | FIXED-PAGES, README BJ-3 pilot |
| FIX_SENDER | Rajat Kate block | 1, 2, 16 | FIXED-PAGES p16 |
| FIX_DISCLAIMERS | Keys below | 5, 8 to 13 | FIXED-PAGES |

FIXED-PAGES slots: {COMPANY} = Bajel; {ACCOUNTING_SYSTEM} = ERP ("your ERP"); {PILOT_SCOPE} = "one to three running domestic projects"; {SCOPE_CARD} = transmission and distribution, standalone, rupees, international EPC outside the pilot; lens figures, finding, ask and strip totals as on pages 7, 8 and 11; {SOURCES_PARAGRAPH} on page 15. Interest variant: the company discloses a rate, so the interest clause prints, with the cap sentence added.

## Logo (internal)

- File: bajel/assets/bajel-logo.svg, 4,936 bytes, viewBox 644.5 x 373.6, Adobe Illustrator export. Downloaded 8 Oct 2026 from https://bajelprojects.com/images/bajel-logo.svg (official domain). SHA-256 977303caa02aa326e406358d918a3252d910e02b487b1454be801414114b7ea8.
- Safety check by script: 0 hits for script, on* handlers, href, xlink:href, foreignObject, javascript:, image, @import, url(. Only rect, path, polygon and a style block (three fills).
- What it is: a blue (#005EAB) square holding the white Bajel mark and "BAJEL", with the word "Projects" in WHITE to its right. It is a reverse logo, built for a dark ground. On white, "Projects" disappears.
- BJ-6 (Garvis ruling 1): rendered to PNG in the BJ-6 scratch folder and viewed. The square is a self-contained tile on white, but "Projects" sits outside it and is white-on-white. Design is told to place the whole file on a small navy chip on the cover's white strip.
- The homepage header image (images/bfl bajel projects_blue_172wx100h.gif, 172 x 100) shows a group centenary mark, not the company logo, so it was not used. No other variant was found (nine likely file names answer 403).

## Open questions (internal)

1. Logo ground: CLOSED (ruling 1). The file goes on the cover's white strip on a navy chip, as supplied.
2. H1 FY27 balance sheet (due by mid November 2026): INTERNAL NOTE ONLY (ruling 4), nothing about it in print. Re-check before print. If receivables have normalised, page 4 and page 5 still hold (they are dated 31 Mar 2026) but the letter's framing should be re-read.
3. Tagline: CLOSED (ruling 2). Pages 7 and 16 print "Know where your money is waiting, and who can release it."
4. Edition 2 letter: CLOSED (ruling 3). "You explained" and "you set out" sit only over Nitesh Bhandari's own words on his own call (transcript p14, speaker label checked on the page image in BJ-6).

## Reader table

| Edition | Name | Title | Address block | Salutation | Letter |
|---|---|---|---|---|---|
| Edition 1 | Rajesh Ganesh | Managing Director and CEO | "Mr. Rajesh Ganesh · Managing Director and CEO · Bajel Projects Limited · 801, Rustomjee Aspiree, Anik Wadala Link Road, Sion East, Mumbai 400022" | "Dear Mr. Ganesh," (surname in gold) | Letter A |
| Edition 2 | Nitesh Bhandari | Chief Financial Officer | "Mr. Nitesh Bhandari · Chief Financial Officer · Bajel Projects Limited · 801, Rustomjee Aspiree, Anik Wadala Link Road, Sion East, Mumbai 400022" | "Dear Mr. Bhandari," (surname in gold) | Letter B |

FROM block, both editions: "Rajat Kate · Managing Director · Crestline Intelligence Private Limited · Pune, Maharashtra · +91 76209 35398 · rajat@crestlineintelligence.com"

### Letter A, Edition 1 (Rajesh Ganesh)

"This booklet is about ten days, and what they are worth to Bajel."

"When receivables rose in FY26, the company explained the rise openly. On its first earnings call, on 29 May 2026, Nitesh Bhandari, Chief Financial Officer, set out the reasons: higher billing in the last quarter; year-end timing of collections, largely collected after year end, per the company; and retention that grows with every project under its contract terms. We take that account as given."

"Our question sits underneath it. At 31 Mar 2026, ₹1,530.12 Cr of receivables were not yet due, 79.30% of the book, and the Annual Report places retention inside that line until each project is complete. How much of it is retention, and how much is time spent waiting for certification? The answer sits in the dates of each bill, project by project."

"On the company's own turnover ratio, receivables stood at 202.8 days of revenue in FY26. One day of revenue is ₹7.65 Cr. Ten days less on that wait is ₹76.48 Cr of cash, released once, and ₹4.97 Cr to ₹7.65 Cr a year in interest, at the 6.5% to 10% the company discloses for working-capital facilities and vendor bill discounting, if that cash repays them."

"We would value thirty minutes with you, or with Mr. Bhandari."

"Yours sincerely,"

"P.S. Every figure in these pages comes from documents Bajel has published, or from Crestline's arithmetic on them."

### Letter B, Edition 2 (Nitesh Bhandari)

"This booklet is about ten days, and what they are worth to Bajel."

"When receivables rose in FY26, you explained the rise openly. On the company's first earnings call, on 29 May 2026, you set out the reasons: higher billing in the last quarter; year-end timing of collections, largely collected after year end, per the company; and retention that grows with every project under its contract terms. We take that account as given."

"Our question sits underneath it. At 31 Mar 2026, ₹1,530.12 Cr of receivables were not yet due, 79.30% of the book, and the Annual Report places retention inside that line until each project is complete. How much of it is retention, and how much is time spent waiting for certification? The answer sits in the dates of each bill, project by project."

"On the company's own turnover ratio, receivables stood at 202.8 days of revenue in FY26. One day of revenue is ₹7.65 Cr. Ten days less on that wait is ₹76.48 Cr of cash, released once, and ₹4.97 Cr to ₹7.65 Cr a year in interest, at the 6.5% to 10% the company discloses for working-capital facilities and vendor bill discounting, if that cash repays them."

"We would value thirty minutes with you, or with Mr. Ganesh."

"Yours sincerely,"

"P.S. Every figure in these pages comes from documents Bajel has published, or from Crestline's arithmetic on them."

Letter footnote, both editions (6 pt, foot of page 2): "Revenue, receivables and turnover ratio: Annual Report FY26, p.257, p.280 and p.320, filed 17 Jul 2026, standalone. Retention sits in 'Not Due' until the project is completed: Annual Report FY26, p.281. The CFO's account: Q4 FY26 earnings call, 29 May 2026, transcript p.14, filed 3 Jun 2026. [SCENARIO] [INTEREST]"

## Keys

Each tag in brackets in a footnote is replaced by its line below, printed in full.

- [SCENARIO]: "Scenario, not a forecast. Crestline arithmetic on the published figures: days x one day of revenue, ₹7.65 Cr (FY26 standalone revenue ₹2,791.58 Cr / 365, Annual Report FY26, p.257, filed 17 Jul 2026, standalone). Cash is released once. Rows overlap and are never added."
- [INTEREST]: "Interest at the 6.5% to 10% the company discloses for working-capital facilities and vendor bill discounting (Annual Report FY26, p.291, filed 17 Jul 2026, standalone), counted on no more than the ₹349.96 Cr of those facilities, and saved only if the released cash repays them. Interest on mobilisation advances is not included."
- [DAYS]: "Receivable days = 365 / trade receivables turnover, the company's own ratio of revenue including other operating income to average receivables: 1.80 in FY26 and 2.61 in FY25 (Annual Report FY26, p.320, filed 17 Jul 2026, standalone). Crestline arithmetic on the published figures."
- [CFO-ACCOUNT]: "Year-end timing of collections, largely collected after year end, per the company (Nitesh Bhandari, Chief Financial Officer, Q4 FY26 earnings call, 29 May 2026, transcript p.14, filed 3 Jun 2026)."

## Headline table

| Page | Background | Running head left | Running head right | Headline line 1 | Headline line 2 (gold) |
|---|---|---|---|---|---|
| 1 | Navy cover | n/a | n/a | "Working-capital review" | n/a |
| 2 | Cream | "A LETTER" | n/a | n/a | n/a |
| 3 | Cream | "ONE · THE PROMISES" | "BAJEL PROJECTS LIMITED" | "It begins with three promises," | "all of them Bajel's." |
| 4 | Navy | "TWO · THE BOOK AT YEAR END" | "BAJEL PROJECTS LIMITED" | "Nearly four rupees in five" | "are not yet due." |
| 5 | Cream | "THREE · DAYS OF REVENUE" | "BAJEL PROJECTS LIMITED" | "Receivables held 202.8 days" | "of revenue in FY26." |
| 6 | Cream | "FOUR · THE LATEST QUARTER" | "BAJEL PROJECTS LIMITED" | "The latest quarter brought" | "more orders and less interest." |
| 7 | Navy | "FIVE · ENTER CRESTLINE" | "CRESTLINE INTELLIGENCE" | "Where does project cash get stuck?" | "Five lenses." |
| 8 | Cream | "SIX · THE CLOCK THE ERP ALREADY KEEPS" | "CRESTLINE INTELLIGENCE" | "Crestline reads the dates" | "your ERP records" |
| 9 | Cream | "SEVEN · REASON, DESK, DATE" | "BAJEL PROJECTS LIMITED" | "Every rupee waiting gets" | "a reason, a desk and a date." |
| 10 | Cream | "EIGHT · TEST THE FIX" | "CRESTLINE INTELLIGENCE" | "Test the fix before you make it." | "Then put a name on it." |
| 11 | Cream | "NINE · FROM A FINDING TO A CLOSED TICKET" | "CRESTLINE INTELLIGENCE" | "A finding gets an owner," | "a date and an auditor." |
| 12 | Navy | "TEN · TEN DAYS AND THIRTY, PRICED" | "BAJEL PROJECTS LIMITED" | "Ten days and thirty days," | "priced against the borrowing." |
| 13 | Cream | "ELEVEN · DONE BEFORE" | "PUBLIC RECORD" | "It has been done before." | "By Bajel." |
| 14 | Cream | "TWELVE · READ-ONLY" | "CRESTLINE INTELLIGENCE" | "Read-only on your books." | "Nothing is written back." |
| 15 | Cream top, navy sources band | "TWELVE · THE INVITATION" | "CRESTLINE INTELLIGENCE" | "Give us one to three running domestic projects" | "and fourteen days." |
| 16 | Navy back cover | n/a | n/a | "Every waiting rupee, with a site, a desk and a date." | n/a |

## Page 1: Cover

Navy field, gold curve lines, white strip at the foot (master section 2).
- Top line: "STRICTLY PRIVATE & CONFIDENTIAL" left, "COPY NO. 1 OF 1" right.
- Under it: "Prepared for the addressee only. Please do not forward or copy."
- Title: "Working-capital review"
- Below the title: "Bajel Projects Limited · October 2026"
- Hero line, set on the topmost curve: "₹76.48 CR IN EVERY TEN DAYS BETWEEN A BILL AND ITS CASH"
- Footnote under the hero, 6 pt, white at 70%: "Ten days of FY26 standalone revenue: ₹2,791.58 Cr / 365 x 10 = ₹76.48 Cr (Annual Report FY26, p.257, filed 17 Jul 2026, standalone). Crestline arithmetic on the published figures. Scenario, not a forecast."
- White strip, left: "PREPARED EXCLUSIVELY FOR", then the reader's name and title from the reader table. Bajel logo: the supplied file is a blue square holding the white Bajel mark and wordmark, with the word "Projects" in white to its right, which would vanish on white. On the white strip, place the whole file, as supplied and unrecoloured, on a small navy (#0D172F) rounded chip so that "Projects" reads. Never crop, trace, redraw or recolour it.
- White strip, right: "DRAFTED BY", Crestline logo, "Crestline Intelligence", "Rajat Kate", "Managing Director".

## Page 2: Letter

Cream. Running head "A LETTER". Date in gold: "October 2026". Salutation, TO block, letter body and P.S. per edition from the reader table. FROM block from the reader table. Signature space, then "Rajat Kate" and "Managing Director, Crestline Intelligence". Letter footnote as given in the reader table, with its tags replaced by their key lines.
Footer: "Strictly private · 2 / 16"

## Page 3: Chapter one, the promises

Cream. Chapter label "Chapter one". Headline per table.
- Lead: "Bajel more than doubled its revenue in two years. Its leaders have said where they want it to go next, in their own words."
- Ruled rows (roman numeral in gold, quoted phrase in navy Bold, description and source at right):
  - "i" · "'anywhere upwards of 15%'" · "Revenue growth for FY27." Source line: "Rajesh Ganesh, Managing Director and CEO, Q4 FY26 earnings call, 29 May 2026, transcript p.9, filed 3 Jun 2026"
  - "ii" · "'Double digit revenue growth', 'High single digit EBITDA margins', '>15% Return on Capital Employed'" · "The RAASTA 2030 targets." Source line: "Q1 FY27 investor presentation, p.30, filed 7 Aug 2026"
  - "iii" · "'Strengthening profit conversion through working capital efficiency.'" · "One of five RAASTA 2030 priorities." Source line: "Shekhar Bajaj, Chairman, 4th Annual General Meeting, 10 Aug 2026, transcript p.5"
- Closing statement, 11 pt: "Two are promises about growth and returns." Second sentence in gold italic: "The third is about time: how fast work becomes cash."
- Footnote: "Revenue FY24 ₹1,169.21 Cr (Annual Report FY24, p.165, filed 29 Jul 2024); FY26 ₹2,791.58 Cr (Annual Report FY26, p.257, filed 17 Jul 2026, standalone). Quotes as printed in the transcripts and presentation."
Footer: "Strictly private · 3 / 16"

## Page 4: Chapter two, the book at year end

Navy. Chapter label "Chapter two". Headline per table.
- Lead: "At 31 Mar 2026, most of what clients owed Bajel was not yet due. The Annual Report says why: 'retention amounts due after completion of projects is categorized as Not Due until the project is completed.'"
- Hero, the master's large white hero size with a small "Cr" suffix: "₹1,530.12 Cr"
- Under the hero: "of receivables not yet due at 31 Mar 2026: 79.30% of the ₹1,929.48 Cr gross book, up from ₹882.77 Cr (66.32%) a year earlier. Money overdue fell, from ₹448.34 Cr to ₹399.35 Cr."
- Three side stats, figure in gold Bold, explanation below:
  - "202.8 days" · "receivables, on the company's own turnover ratio, FY26"
  - "30 to 360 days" · "customer terms as now stated, where the previous report said 30 to 90 days"
  - "64.31%" · "of FY26 revenue from Power Grid and its group, whose certification sets much of the clock"
- No chart on this page. No scenario mark (the scenario for this balance is drawn on page 9).
- Footnote: "Ageing, gross, from due date: Annual Report FY26, p.280; terms and retention: p.281; Power Grid share: p.312; all filed 17 Jul 2026, standalone. Earlier terms: Annual Report FY25, p.214, filed 18 Jul 2025, standalone. [DAYS]"
Footer: "Strictly private · 4 / 16"

## Page 5: Chapter three, days of revenue

Cream. Chapter label "Chapter three". Headline per table.
- Lead: "The company's own receivables turnover ratio puts the book at 202.8 days of revenue in FY26, against 139.8 days in FY25. In FY24 it was 182.5 days. In two of the three years the book held about half a year of revenue."
- Card title: "Receivable days, FY25 and FY26". Context line: "Company ratio · standalone".
- Chart: two vertical columns on ONE day scale starting at zero, tall enough for the FY26 column. Value labels only, no axis numbers.
  - FY25: "139.8 days", solid slate fill.
  - FY26: "202.8 days", solid amber fill.
  - Beside the FY26 column, plain neutral text (not a scenario mark): "Year-end timing of collections, largely collected after year end, per the company."
  - On the FY26 column, on the same scale, two dashed hollow marks: at 192.8, label "192.8 days · 10 days · ₹76.48 Cr once · ₹4.97 Cr to ₹7.65 Cr a year"; at 172.8, label "172.8 days · 30 days · ₹229.44 Cr once · ₹14.91 Cr to ₹22.94 Cr a year". Small gold tag "WITH CRESTLINE". Printed beside them: "Scenario, not a forecast."
  - FY24 is not drawn.
- Takeaway (gold dot): "The company's stated reason for FY26: 'Decrease in trade receivables turnover ratio is on account of delay in collection from customers in comparison to projects execution.' The CFO's account of the same year sits beside it on the chart."
- Three stats in a row:
  - "₹3,441.82 Cr" · "work in hand at 31 Mar 2026"
  - "₹1,169.21 Cr to ₹2,791.58 Cr" · "revenue, FY24 to FY26: more than doubled"
  - "₹356.59 Cr to ₹349.96 Cr" · "borrowings, 31 Mar 2025 to 31 Mar 2026"
- Footnote: "Receivable days: Annual Report FY26, p.320, filed 17 Jul 2026, standalone; FY24 182.5 days from turnover 2.00, Annual Report FY24, p.112, filed 29 Jul 2024. Work in hand (unsatisfied performance obligations): Annual Report FY26, p.317. Borrowings: p.291. Revenue: p.257, and Annual Report FY24, p.165. [DAYS] [CFO-ACCOUNT] [SCENARIO] [INTEREST]"
Footer: "Strictly private · 5 / 16"

## Page 6: Chapter four, the latest quarter

Cream. Chapter label "Chapter four". Headline per table.
- Lead: "The first quarter of FY27 added to the order book, and the interest bill came down. Balances in this booklet are at 31 Mar 2026, the latest audited balance sheet."
- Three tiles (white cards), no chart, no scenario mark:
  - "₹4,055 Cr" · "unexecuted order book at 30 Jun 2026, against ₹3,612 Cr a year earlier" · source "Q1 FY27 investor presentation, p.20 and p.22, filed 7 Aug 2026, standalone"
  - "₹11.8 Cr" · "interest in Q1 FY27, against ₹15.9 Cr in Q1 FY26" · source "Q1 FY27 investor presentation, p.23, filed 7 Aug 2026, standalone"
  - "'around 6.5 to 7% as of now'" · "the average borrowing rate, down from about 10% when the year started, as Nitesh Bhandari, Chief Financial Officer, told the AGM" · source "4th Annual General Meeting, 10 Aug 2026, transcript p.23"
- Line under the tiles: "In August 2026 Bajel announced three more Power Grid transmission packages, after the quarter closed (order intimations of 8 and 12 Aug 2026)."
- Closing line, navy rounded box: "₹76.48 Cr is what ten days are worth on the receivable wait." Second sentence in gold italic: "One day of revenue is ₹7.65 Cr."
- Footnote: "[SCENARIO]"
Footer: "Strictly private · 6 / 16"

## Page 7: Chapter five, five lenses

Navy. Chapter label "Chapter five". Headline per table.
- "Once connected, Crestline reads your ERP and shows which bills and retention are stuck, on which site, and how many crores. Here is each lens, and the Bajel figure it would open up."
- "01 Working capital · WC · The cash a project eats before it pays you back. ₹21.09 Cr · cash from operations in FY26, on ₹2,791.58 Cr of revenue"
- "02 Order to cash · O2C · From work done on site to money in the bank. 202.8 days · receivables, on the company's own turnover ratio, FY26"
- "03 Procure to pay · P2P · From a site's material request to the vendor getting paid. ₹881.56 Cr · owed to vendors at 31 Mar 2026, ₹44.80 Cr of it to micro and small enterprises"
- "04 Client · WHO PAYS SLOW · Which clients pay slow, and why. 64.31% · of FY26 revenue from Power Grid and its group; customer terms are now stated as 30 to 360 days"
- "05 Vendor · WHO COSTS MORE · Which vendors cost more than their rate. 113.0 days · payables, one average across all vendors, FY26"
- "Know where your money is waiting, and who can release it."
- "READ-ONLY BY DESIGN · NO AI-GENERATED NUMBERS · 14 DAYS OF READ-ONLY ANALYSIS"
- Footnote: "Operating cash: Annual Report FY26, p.258; revenue: p.257; receivable days and payable days: p.320 (365 / turnover of 1.80 and 3.23); payables and micro and small enterprises: p.292; Power Grid share and terms: p.312 and p.281. All filed 17 Jul 2026, standalone. Crestline arithmetic on the published figures."
Footer: "Strictly private · 7 / 16 · Now, on Bajel's published figures."

## Page 8: Chapter six, the clock the ERP keeps (company chart above, fixed timeline below)

Cream. Chapter label "Chapter six". Headline per table.
- "It sits above your ERP and never writes back. Once connected, it rebuilds every bill from its own dates and shows where money stops, for how long, and whose move ends the wait."
- "CRESTLINE'S VIEWS · DRAWN ON BAJEL'S PUBLISHED FIGURES · NOTHING FROM YOUR ERP"

Upper half, card:
- Card title: "Cash from operations, FY25 and FY26". Context line: "₹ Cr · standalone".
- Chart: two vertical columns on ONE rupee scale starting at zero. Value labels only, no axis numbers. No scenario mark on these columns.
  - FY25: "₹69.13 Cr", solid mint fill.
  - FY26: "₹21.09 Cr", solid mint fill.
- Beside the chart, a separate callout on its OWN rupee scale starting at zero, hollow with a dashed outline, titled "Cash released once, with Crestline": two dashed hollow bars, "(a) 10 days · ₹76.48 Cr" and "(b) 30 days · ₹229.44 Cr". Under them: "The two rows overlap and are not added. Scenario, not a forecast."
- Takeaway (gold dot): "Revenue rose from ₹2,598.24 Cr to ₹2,791.58 Cr while trade receivables took ₹549.43 Cr and ₹599.82 Cr of cash in those two years. In FY24, cash from operations was ₹195.37 Cr."

Lower half, fixed:
- "One bill, from work done to cash in the bank"
- Timeline, in this order. Each stage tile holds its name and its ownership tag and nothing else: no figure, no day count, no bar length, no share.
  - "JOINT MEASUREMENT · BAJEL AND CLIENT"
  - "MB / QS CHECK · BAJEL"
  - "RA BILL PREPARED · BAJEL"
  - "REVIEW STARTED · BAJEL"
  - "REVIEW COMPLETED · BAJEL"
  - "BILL SUBMITTED · BAJEL"
  - "CLIENT ACKNOWLEDGED · CLIENT"
  - "CERTIFIED · CLIENT"
  - "TAX INVOICE RAISED · BAJEL"
  - "PAYMENT RECEIVED · CLIENT"
  - "RETENTION RELEASED · CLIENT"
- "Ownership: Bajel: measure with the client, check, prepare, review, submit, invoice. CLIENT: acknowledge, certify, pay."
- Beside the timeline, never inside a stage tile: "At 31 Mar 2026: receivables ₹1,849.05 Cr · work done and not yet billed ₹18.86 Cr · customer advances and billing ahead of work ₹465.32 Cr"
- "Step waits are not public. Once connected, Crestline measures them from the dates your ERP records. This timeline shows the stages, not Bajel's days."
- Footnote: "Cash from operations and the receivables line: Annual Report FY26, p.258; revenue: p.257; balances (contract assets and contract liabilities): p.256; all filed 17 Jul 2026, standalone. FY24 cash from operations: Annual Report FY25, p.190, filed 18 Jul 2025. [SCENARIO]"
Footer: "Strictly private · 8 / 16 · Illustrative stages. Totals are from published accounts."

## Page 9: Chapter seven, reason, desk and date (receivables and vendor days)

Cream. Chapter label "Chapter seven". Headline per table.
- Lead: "The accounts give the book in two parts, not due and overdue. They do not say which project holds each rupee, which milestone releases the retention, or whose desk a bill is waiting on. Crestline gives every rupee a reason, a desk and a date."

Card (a), receivables:
- Card title: "Receivables not due and overdue, gross". Context line: "₹ Cr · 31 Mar 2025 and 31 Mar 2026".
- Chart: two stacked columns on ONE rupee scale starting at zero. Value labels only, no axis numbers.
  - FY25: not due "₹882.77 Cr" (sky into lavender), overdue "₹448.34 Cr" (amber into peach).
  - FY26: not due "₹1,530.12 Cr" (sky into lavender), overdue "₹399.35 Cr" (amber into peach).
  - Beside the FY26 not-due block, on the SAME scale, two dashed hollow columns at their own length: "₹76.48 Cr · 10 days" and "₹229.44 Cr · 30 days". Label: "The step, if it came out of retention and certification time." Gold tag "WITH CRESTLINE". Printed beside them: "Scenario, not a forecast." No adjusted not-due figure is drawn or printed.
- Takeaway (gold dot): "Overdue for more than a year fell to ₹206.18 Cr. The growth is in money not yet due, where retention sits until each project is complete."

Card (b), vendor days (no scenario mark: paying vendors later is never a saving):
- Card title: "Payable days, FY25 and FY26". Context line: "Company ratio · standalone".
- Chart: two horizontal pill bars on ONE day scale starting at zero. Value labels only. FY25 "80.6 days", FY26 "113.0 days", both solid slate.
- Takeaway (gold dot): "The company's stated reason: 'increase in retention in respect of amounts due to suppliers.' Bajel holds retention against its own suppliers too. Payables are normally settled within 90 to 120 days from the contractual due date, as the company states. Of ₹881.56 Cr owed to vendors, ₹44.80 Cr is owed to micro and small enterprises."
- Footnote: "Ageing from due date: Annual Report FY26, p.280; payable days = 365 / payables turnover of 4.53 and 3.23: p.320; payables and terms: p.292; all filed 17 Jul 2026, standalone. Crestline arithmetic on the published figures. [SCENARIO]"
Footer: "Strictly private · 9 / 16"

## Page 10: Chapter eight, test the fix

Cream. Chapter label "Chapter eight". Headline per table.
- Lead: "The simulator moves one wait at a time, at the rate the books already measure, and stops where the contract stops. Then it turns the scenario into a plan with a name on it."
- Card, "Cycle simulator", context line "On Bajel's published figures":
  - Slider row "Receivable days": "202.8 today", with the handle at "172.8" drawn dashed and hollow. Result line: "Thirty days off the receivable wait: ₹229.44 Cr cash released once; ₹14.91 Cr to ₹22.94 Cr interest a year at the 6.5% to 10% the company discloses, if the cash repays those facilities." Printed beside it: "Scenario, not a forecast."
  - Slider row "Vendor credit": "held at 113.0 days". Line: "The simulator never releases cash by paying vendors later."
- Card, "Vendor advisor": "Every vendor judged against its own due date. Paying early is lending borrowed cash at no return; paying late is risk. Micro and small enterprises are judged against the statutory 45 days." Figure line: "₹881.56 Cr owed to vendors at 31 Mar 2026, ₹44.80 Cr of it to micro and small enterprises."
- Card, "Client lens": "Which client pays slow, on which site, and whose move ends each wait." Chips (outlined pills): "Power Grid and its group · 64.31% of revenue" · "State utilities" · "Private customers"
- Footnote: "Receivable days: Annual Report FY26, p.320; payable days: p.320; payables: p.292; Power Grid share: p.312; all filed 17 Jul 2026, standalone. [SCENARIO] [INTEREST]"
Footer: "Strictly private · 10 / 16"

## Page 11: Chapter nine, finding to closed ticket, and Ask Crestline

Cream. Chapter label "Chapter nine". Headline per table.
- "Crestline's auditor re-measures the same figure. Once connected, every figure is computed in code from your ERP's records, never generated by a model."
- "The auditor · How one finding reads · on Bajel's published figures"
- "FINDING (WATCH): Receivables stood at 202.8 days of revenue in FY26, from 139.8 days in FY25."
- "ROOT CAUSE: Not visible in public accounts. From your ERP in the pilot: which client, which site, which bill, and which step of certification and retention release holds the days."
- "DO THIS: The named bills that must move, each with a deadline, opened by the target: take ten days out of the receivable wait, 202.8 to 192.8 days."
- "Owner: Commercial head · due in 7 days · EXAMPLE"
- "Raise ticket · Alert owner"
- "01 Ticket raised: Baseline, target and due date are fixed at that moment."
- "02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed."
- "03 Re-measured: The same figure, from fresh data, each time the source syncs."
- "04 Verified: Closed only when the number moves. Nobody can mark it done by hand."
- "Ask Crestline: a question answered from Bajel's own evidence · Retrieval, then code"
- "What if bills were paid ten days sooner?"
- "202.8 to 192.8 days. ₹76.48 Cr released once. ₹4.97 Cr to ₹7.65 Cr interest a year, at the 6.5% to 10% the company discloses for working-capital facilities and vendor bill discounting, if the cash repays them."
- "Illustrative answer on published figures. Once connected, the live answer comes from your ERP."
- "01 Retrieves: Each screen publishes its facts. The question is matched to them, so the answer cannot disagree with the screen."
- "02 Simulates: A what-if runs through the simulator, inside the contract's bounds."
- "03 Computes: Code does the arithmetic. The model never produces a number."
- "04 Answers: Figures first, then the evidence. Where nothing matches, it says so."
- "Question kinds: Position · Why · What now · What if · Compare projects · Projection"
- Footnote: "Finding: Annual Report FY26, p.320, filed 17 Jul 2026, standalone. [DAYS] [SCENARIO] [INTEREST]"
Footer: "Strictly private · 11 / 16 · Scenario on Bajel's published figures, not a forecast."

## Page 12: Chapter ten, ten days and thirty, priced

Navy. Chapter label "Chapter ten". Headline per table.
- Lead: "Most of Bajel's borrowing at 31 Mar 2026 was vendor bill discounting: suppliers' bills settled through banks and financial institutions on credit terms of up to 180 days. The company states the interest on it, and on its working capital facilities, in a range of 6.5% to 10% a year. Released cash saves that interest only if it repays these facilities."
- Card title: "Borrowings, 31 Mar 2025 and 31 Mar 2026". Context line: "₹ Cr · standalone".
- Chart: two vertical columns on ONE rupee scale starting at zero. Value labels only, no axis numbers.
  - 31 Mar 2025: "₹356.59 Cr", solid slate, NOT split.
  - 31 Mar 2026: "₹349.96 Cr", solid, split in two stacked blocks: "Vendor bill discounting ₹318.96 Cr" (peach) and "Working capital facilities ₹31.00 Cr" (slate).
  - On the 31 Mar 2026 column, on the same scale, two dashed hollow marks: at 273.48, label "₹273.48 Cr · if ₹76.48 Cr repaid these facilities · ₹4.97 Cr to ₹7.65 Cr a year"; at 120.52, label "₹120.52 Cr · if ₹229.44 Cr repaid them · ₹14.91 Cr to ₹22.94 Cr a year". Gold tag "WITH CRESTLINE". Printed beside them: "Scenario, not a forecast."
- Table, three rows, white text on navy, figures in gold:
  - "(a) Ten days off the receivable wait · 202.8 to 192.8 days · ₹76.48 Cr released once · ₹4.97 Cr to ₹7.65 Cr interest a year"
  - "(b) Thirty days off the receivable wait · 202.8 to 172.8 days · ₹229.44 Cr released once · ₹14.91 Cr to ₹22.94 Cr interest a year"
  - "Paying vendors later · None claimed · Never counted as a saving"
- Under the table: "Both releases are below the ₹349.96 Cr of borrowings the rate range applies to. The rows overlap and are never added."
- Credit line: "The company has already brought the rate down: from about 10% when the year started to 'around 6.5 to 7% as of now', as Nitesh Bhandari, Chief Financial Officer, told the AGM on 10 Aug 2026. The rupees waiting to be collected are the part Crestline measures."
- Footnote: "Borrowings, the split and the rate range: Annual Report FY26, p.291, filed 17 Jul 2026, standalone. AGM transcript p.23. [SCENARIO] [INTEREST]"
Footer: "Strictly private · 12 / 16"

## Page 13: Chapter eleven, done before

Cream. Chapter label "Chapter eleven". Headline per table.
- Lead: "Bajel has moved these figures before, on its own record."
- Ruled rows (roman numeral in gold, figure in navy Bold, description and source at right):
  - "i" · "182.5 to 139.8 days" · "Receivable days on the company's own ratio, FY24 to FY25. The company's words: 'Improvement in collection from customers in comparison to projects execution.'" Source line: "Annual Report FY24, p.112, filed 29 Jul 2024; Annual Report FY25, p.128, filed 18 Jul 2025"
  - "ii" · "about 10% to 'around 6.5 to 7%'" · "The average borrowing rate when the year started, and in August 2026, as Nitesh Bhandari, Chief Financial Officer, told the AGM." Source line: "4th Annual General Meeting, 10 Aug 2026, transcript p.23"
  - "iii" · "₹15.9 Cr to ₹11.8 Cr" · "Interest for the quarter, Q1 FY26 to Q1 FY27." Source line: "Q1 FY27 investor presentation, p.23, filed 7 Aug 2026, standalone"
- Closing statement, 11 pt: "The rate has come down." Second sentence in gold italic: "The days are the part still to move."
- Footnote: "Receivable days = 365 / the company's trade receivables turnover, 2.00 in FY24 and 2.61 in FY25. Crestline arithmetic on the published figures. Public filings of Bajel Projects Limited only."
Footer: "Strictly private · 13 / 16"

## Page 14: Chapter twelve, read-only

Cream. Chapter label "Chapter twelve". Headline per table.
- "Crestline is read-only by design, and your ERP stays exactly as it is. Crestline raises the finding and tracks the ticket. The change is made by your team, in your systems."
- "READ-ONLY BY DESIGN · No postings, approvals or edits. The adapter reads documents and ledgers. The pilot login is a read-only user."
- "ON RECORD · Every sync is logged, and your IT team can see it."
- "YOUR IT TEAM FIRST · What data we need, where it is held and who can see it are agreed with your IT team in writing before any connection."
- "PILOT SCOPE · One to three running domestic projects. Transmission and distribution, standalone, in rupees. International EPC and any foreign-currency book stay outside the pilot."
- "What Crestline is not"
- "Not an ERP, and not accounting software. It holds no ledger and issues no invoice. It reads what your ERP already recorded and replaces nothing you run."
- "Not project management or scheduling. It does not plan the work. It measures what happened to the money after the work was done."
- "Not a write-back or automation tool. Nothing is posted, approved or edited from Crestline."
- "Not a margin or cost-control tool. It does not forecast cost to complete or compare budget with actual."
- "14 days · of read-only analysis, starting once your ERP is connected. The adapter for your ERP is built first."
- "First sync · gives the first ranked list of delays."
- "No change · to how your finance team works, or to the ERP you run."
Footer: "Strictly private · 14 / 16 · The next page is yours."

## Page 15: The invitation

Cream top two thirds, navy sources band at the foot. Headline per table.
- "A pilot built around your ERP, on one to three running domestic projects of your choice, in rupees, read-only. At the end you hold a list of the bills, retention lines and payments holding those projects' cash, each with its value, its days and its owner. The adapter for your ERP is built first; the 14 days of read-only analysis start once it is connected." (last clause in gold italic)
- QR card: "SCAN TO BOOK A TIME" · "crestlineintelligence.com/book-a-demo"
- "Before day 1: adapter built for your ERP, read-only connection approved"
- "Days 1 to 14: read-only analysis, then the list, reviewed with your team"
- Day strip 1 to 14 in two groups, counted from the day the connection is approved.
- Edition 1: "We would value a thirty-minute call at a time that suits you, with you or with Mr. Bhandari. Scan the code, call or write."
- Edition 2: "We would value a thirty-minute call at a time that suits you, with you or with Mr. Ganesh. Scan the code, call or write."
- Navy band, "SOURCES AND NOTES", two columns, 6 pt:
  "Bajel Projects Limited, standalone. Annual Report FY26 (standalone statements from p.256), filed on NSE 17 Jul 2026; Annual Report FY25, filed 18 Jul 2025; Annual Report FY24, filed 29 Jul 2024; Q4 FY26 earnings call transcript (call 29 May 2026), filed 3 Jun 2026; Q1 FY27 investor presentation, filed 7 Aug 2026; transcript of the 4th Annual General Meeting, 10 Aug 2026; order intimations of 8 and 12 Aug 2026, the latest filing used. Filings read to 8 Oct 2026. Balances are at 31 Mar 2026, the latest audited balance sheet. One day of revenue = FY26 revenue ₹2,791.58 Cr / 365 = ₹7.65 Cr (p.257). Receivable days = 365 / the company's trade receivables turnover (p.320). Charts: page 5, p.320; page 8, p.258; page 9, p.280 and p.320; page 12, p.291. Nothing here comes from Bajel's ERP. We have not seen it. Scenarios are Crestline's arithmetic on the published figures: days x revenue per day; interest = cash x the rate range the company discloses, 6.5% to 10% (p.291), applied only where the cash repays borrowing, and counted on no more than the ₹349.96 Cr of borrowings that range applies to. Cash is released once, interest recurs each year. Scenarios overlap and are never added. Not a forecast or a commitment. Step waits on page 8 are not public and are not drawn. If this booklet reached you in error, please call +91 76209 35398 and we will collect it."
Footer: "Strictly private · 15 / 16"

## Page 16: Back cover

Navy field, the cover's curve lines, the vertical tagline on the top curve, white strip at the foot with the Crestline logo, the sender block and a QR code (crestlineintelligence.com/book-a-demo) labelled "BOOK A TIME".
- Vertical tagline: "Know where your money is waiting, and who can release it."
- "STRICTLY PRIVATE & CONFIDENTIAL · COPY NO. 1 OF 1"
- Headline: "Every waiting rupee, with a site, a desk and a date."
- "A thirty-minute call, at a time that suits you"
- "Rajat Kate"
- "Managing Director"
- "Crestline Intelligence Private Limited"
- "Pune, Maharashtra"
- "+91 76209 35398"
- "rajat@crestlineintelligence.com"
- "www.crestlineintelligence.com"
- "BOOK A TIME"

## Checks

BJ-6: the pack was re-scanned after the review fixes; commands, counts and the applied log are in review-BJ6.md. The BJ-5 record follows.

Command: `python -I check.py` (BJ-5 scratch folder). Scope: from "## Reader table" to the line before "## Checks", 33,651 characters (minimum region 20,000, asserted).

Method:
- Trace corpus: data.md, problems.md, solutions.md, calc/bajel-savings-output.txt, qa-report.md, _shared/master-design/FIXED-PAGES.md. Numbers extracted with `(?<![\d.])\d[\d,]*(?:\.\d+)?`, commas removed, on both sides.
- A planted region (a number absent from the corpus, an em and en dash, five other company names, 2,490 and 445.5, "trapped", "arbitration", "restated", a sensitive name and figure, a placeholder, two signed figures, three single-rate interest figures, an ERP vendor and the kept-out headlines) was confirmed absent from the pack and the corpus first, then caught by every scan before the pack was scanned.
- Markdown table rules and list bullets are removed before the dash and sign scans (they are structure, not punctuation). The phone number "+91 76209 35398" is fixed copy and is exempt from the sign scan.
- Single-rate interest: every ₹4.97 Cr must be followed by "to ₹7.65 Cr", every ₹14.91 Cr by "to ₹22.94 Cr", ₹22.94 Cr must follow ₹14.91 Cr, ₹7.65 Cr must be either that upper end or the value of a day, and every 6.5% or 10% must sit in "6.5% to 10%", the CFO's quoted "6.5 to 7%" or "about 10%" (the rate history, not an interest figure).

| Scan | Planted hits caught | Real hits |
|---|---|---|
| Numbers that do not trace to the corpus | 5 | 0 |
| Dashes as punctuation (U+2012 to U+2015, U+2212, spaced hyphen, double hyphen) | 2 | 0 |
| Other company names (17 names) and 2,490 / 445.5 | 5 | 0 |
| Placeholders | 2 | 0 |
| KEPT OUT terms (S1 to S13 names and figures, restatement and reclassification, the conflicts, the facility split, the earlier not-due figure, the debtor-days headline figures, ERP vendor words, the rating agency) | 13 | 0 |
| "trapped" | 1 | 0 |
| "arbitration" | 1 | 0 |
| Signed numbers | 2 | 0 |
| Single-rate interest figures | 4 | 0 |

Also run on the whole file: 0 em or en dashes, 0 other company names, 0 "trapped", 0 "arbitration". AI-tell word list (brochure-ai-tells.md): 0 hits outside the internal basis note that names the list.

Checked by reading, not by script:
- Every problem chart (pages 5, 8, 9 card (a), 12) carries calc values only (192.8, 172.8, 76.48, 229.44, 273.48, 120.52, the interest ranges), dashed and hollow, on the same scale or, on page 8, a separate labelled callout, with "Scenario, not a forecast."
- Page 8 stage tiles hold a name and an ownership tag only; the strip totals sit beside the timeline.
- Derived chart parts against KEPT OUT before writing: page 12 splits only the 31 Mar 2026 column (318.96 and 31.00); the 31 Mar 2025 column is one block. Page 9 uses the Annual Report FY26 comparative only. Page 5 does not draw FY24.
- The CFO's account and the company's audited reason sit together on page 5 (qa-report open item).
- No quote is credited as "you said". The Edition 2 letter says "you explained" and "you set out" only about the CFO's own call.
