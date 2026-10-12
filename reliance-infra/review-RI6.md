# Reliance Infrastructure Limited: review gate (ticket RI 6)

Prepared 8 Oct 2026. Reviewed: slots-unified.md (printed region, "## Readers" to the line before "## Checks", 33,360 characters) against data.md, problems.md, solutions.md, webapp-fit.md, qa-report.md and README.md (RI 3 rulings binding), the Garvis rulings on the RI 5 questions, FIXED-PAGES.md, TEMPLATE-SLOTS.md, MASTER-PROMPT-TEMPLATE.md and the app's CLAUDE.md (read only). Protocol: the financial booklet verification protocol in the QA agent file.

## Verdict

GO AFTER FIXES. Every printed figure is on its cited page image, with the right entity header (standalone) and the right speaker. No figure is NO-GO. Eight must fixes (four are the Garvis rulings; four are copy that a reader at the company could rebut), six booklet facing should fixes.

## 1. Figures, traced on the page images (src/d, rendered at 110 dpi)

Script: `ri6_pages.py` (text match on each cited page, then a PNG of the page opened by eye); `ri6_scan.py pack` (number trace). Derived figure recomputed by script: 69.54 + 34.56 = 104.10.

| Printed figure or words | Cited page | Header on the page | Verdict |
|---|---|---|---|
| ₹363.25 Cr pending order book of the E&C Division, 31 Mar 2026 | AR FY26 PDF p52 (MD&A, "pending order book position of Rs. 363.25 crore"); p172 note 24.4 | MD&A; Standalone notes | CORRECT |
| ₹214.58 Cr expected to be recognised as revenue in the next year | AR FY26 PDF p171 note 24.2 | Standalone notes | CORRECT |
| "timely and efficient execution of existing contracts" | AR FY26 PDF p50 | MD&A, E & C Sector | CORRECT, exact substring of "efforts remained focused on the timely and efficient execution of existing contracts"; speaker the company |
| "remains focused on efficient execution of its current order book" | AR FY26 PDF p56 | MD&A, E&C Business | CORRECT, exact; speaker the company |
| ₹116.52 Cr opening, ₹104.10 Cr closing contract assets FY26 | AR FY26 PDF p172 note 24.3 | Standalone notes | CORRECT |
| 104.10 = 69.54 considered good + 34.56 credit impaired | AR FY26 PDF p161 note 13 | Standalone notes | CORRECT (computed by script). Only 104.10 is printed |
| Contract assets "including retention receivable" | AR FY25 PDF p192 | Standalone notes FY25 | CORRECT as cited. NEEDS CAVEAT on p4: the FY26 note does not repeat the words, so "in these accounts" must point at the Annual Report wording (should fix 4) |
| Trade receivables "Considered good including Retentions on Contract" | AR FY26 PDF p158 note 8 | Standalone notes | CORRECT, exact substring |
| Trade payables "including retention payable" | AR FY26 PDF p167 note 19 | Standalone notes | CORRECT, exact substring |
| Bank borrowings nil, 31 Mar 2026 | AR FY26 PDF p166 note 18 | Standalone notes | CORRECT: the table lists inter corporate deposits only, no bank line (as RI 4) |
| Bank borrowings nil, 31 Mar 2025 | AR FY25 PDF p185 (term loans from banks nil), p187 (working capital loans from banks nil) | Standalone notes FY25 | CORRECT |
| ₹237.22 Cr revenue from operations FY26 | AR FY26 PDF p132 | Standalone Statement of Profit and Loss | CORRECT |
| Kudankulam financial progress "more than" 62.5% / 76% / 85% | AR FY24 PDF p31; AR FY25 PDF p72; AR FY26 PDF p50 | MD&A each year | CORRECT, "more than" printed every time |
| Chordaha to Gorhar "overall 75% as on March 31, 2026" | AR FY26 PDF p50 (project named, foot of page) to p51 (the 75% sentence) | MD&A | CORRECT. The p51 cite is right for the figure |
| Mumbai Metro Packages 8, 10 and 12, Wadala to Kasarvadawali, no progress figure | AR FY26 PDF p50 | MD&A | CORRECT. The page spells "Kasarvadawali"; the partner named on that page is not printed |
| NPCIL and NHAI as clients | AR FY26 PDF p50 to p51 | MD&A | CORRECT |
| SAP named as the accounting software for FY25 | AR FY25 PDF p142 | Standalone auditor's report FY25 (Chaturvedi & Shah LLP signature, 23 May 2025) | CORRECT |
| Vijesh Babu Thota, Executive Director & Chief Executive Officer; Asheesh Chaturvedi, Chief Financial Officer | AR FY26 PDF p131 signature block, 23 May 2026 | Standalone Balance Sheet | CORRECT, both titles character for character |
| Registered office, Reliance Centre, Ground Floor, 19, Walchand Hirachand Marg, Ballard Estate, Mumbai 400 001 | AR FY26 PDF p1 cover letter | Company letterhead, dated July 23, 2026 | CORRECT. The same letter confirms the AR FY26 filing date, 23 Jul 2026 |

Number trace (`ri6_scan.py pack`, check e): every number in the printed region must appear in data.md, problems.md or FIXED-PAGES.md, or be the one computed sum. Plant "987.65" caught. Untraced: 3, all axis gridline labels on the p5 progress scale (50%, 100%), which are a scale, not figures. Untraced figures: 0.

## 2. LIGHT form

No priced days, no rupee per day value, no savings, no interest figure, no signed number: 0 hits (scans f and h, plants caught). Day counts: only the 14 day pilot (fixed product copy) and "due in 7 days" in the fixed p11 owner line, which is marked EXAMPLE and is a product sample, not a company wait. Kept as is. Every with Crestline mark (p4, p5, p6, p9 a and b, p10 cards 1 to 3, p12, p13) carries [MEASURE]. The p8 timeline is stages only, no values.

## 3. Ownership

p8 timeline, p9 card (a), p10 tags, p12 table: measure, check, prepare, review, submit and invoice are Reliance Infrastructure's; acknowledge, certify, pay and retention release are the client's. p9 card (b): material received and supplier invoice are the vendor's; matching, approval and payment are ours. All correct against the product rule in CLAUDE.md.

## 4. Kept out and product truth

Kept out scan (f), plant caught, 0 hits. It looks for: the sensitive categories (audit opinion words, going concern, regulator and enforcement bodies, fraud, insolvency words, ratings, promoter, distribution company disputes, arbitration and awards, lenders, defaults, settlements, resignation); the RI 3 list (provisioning share and loss allowance, impairment, old ageing words, contract liability days, old payables share, order book decline words); the terminated road project, the solar developer award, the Metro partner, the completed tunnel job, the earlier Chordaha figures, the former chief executive, "conflict", "dispute", "legacy", termination; any number followed by days other than the pilot and the example; any rupee figure a day or a year, saved or released; the removed map screen and the word "discovered"; "Line 4" and the Metro Line 1 operator. Other companies (b): 0. Every screen named (Overview, Working Capital, O2C stage waits, Client, Vendors, simulator, Ask Crestline, Alerts & Tickets, the auditor) exists in CLAUDE.md today; no process map is named.

## 5. Editions, letters, SAP

Editions and titles exact (section 1). Both letters are neutral; the only quote is credited to the Annual Report; no "you said". SAP: named twice in print (the p14 control line and again as the label of its footnote). Should fix 1.

## Must fixes

1. RULING 2, data footing. [BASIS] and the p15 sources say "published up to 14 Aug 2026, the Q1 FY27 results". Replace with the Annual Report 2025-26, filed on NSE 23 Jul 2026, in both places; header line updated.
2. RULING 6, numbering. p14 running head "TWELVE · READ-ONLY" and chapter label "Chapter twelve". Replace with running head "TRUST · WHAT CRESTLINE IS NOT" and no chapter label, so p15 alone is TWELVE.
3. RULING 4, the LIGHT caption. The Keys instruction line says the mark carries [MEASURE] "in place of 'Scenario, not a forecast.'", which would put the scenario caption into the prompt (check g). Reword without it. The prompt rules A7, A14, finish check 6 and the chart style line are adapted in Phase C.
4. RULING 5, spelling. problems.md prints "Kasarvadavali"; the AR FY26 p50 spelling is "Kasarvadawali" (the pack already uses it).
5. p7 lens 03 prints "not published" for procure to pay, but trade payables ARE published (₹1,113.73 Cr, AR FY26 p131, p167). A reader at the company catches that on the first read. Reword to a true statement that prints no total (RI 3 keeps the payables age profile out): figure "one company line", note "retention payable is filed inside trade payables, with no split by job or by vendor".
6. Letter, edition 1: "Reliance Infrastructure comes to that question from a clear footing." An unsupported judgement of the company's position; the standalone current liabilities exceed current assets (data.md section 5) and the CFO knows it. Delete the judgement; keep the two filed facts.
7. Letter, edition 2: "the question for the running book is timing more than funding cost." False: FY26 standalone finance costs are ₹289.57 Cr, ₹85.52 Cr of it on inter corporate deposits (data.md section 4). Delete the clause; keep the filed fact (no bank borrowings).
8. Every rule in ruling 4 applied in the prompt, plus the line: this booklet prints no rupee per day value, no savings figure and no interest (Phase C).

## Should fixes (booklet facing)

1. SAP once: the p14 footnote label "SAP:" becomes "Accounting software:".
2. [NOINT] and the p15 note say "the company has no bank borrowings", undated and unscoped. Make it "the standalone balance sheet carries no bank borrowings at 31 March 2026".
3. p3 lead "publishes no guidance on its E&C book and no working-capital target" claims more than was searched (data.md section 10 searched for a working capital target and days measures). Narrow to "publishes no working-capital target for its E&C book".
4. p4 body "In these accounts the same line also holds retention receivable": the FY26 note does not use those words; the 2024-25 Annual Report does. Reword to "The Annual Report describes the same line as including retention receivable". Lens 01 note says "retention receivable included" with only p172 in its footnote; add the AR FY25 p192 cite.
5. "label slots" (p4, p5) and "slots" in the instruction line: the word is on the internal reference list for the prompt. Use "label cells".
6. Not booklet facing, housekeeping: pack header lines on the footing and the logo updated to the rulings (logo accepted, print small).

## Notes, no change

* "due in 7 days" (p11 fixed owner line, EXAMPLE) stays; it is product copy, not a company figure.
* p4 grid row "All other contracts" names no project and keeps the split honest against the whole company total. Stays.
* The p5 gridline percentages are a scale and are not traced.
* p12 footnote cites AR FY25 p187, which also carries a table outside the booklet's scope; the cite is for the nil bank line only. Nothing from it is printed.

## Applied (Phase B and C)

Every replacement string was run through the kept out, dash and other company scan (`ri6_scan.py str`) before it went in: 20 strings, 0 hits, except the problems.md row, whose "Line 4" is earlier research wording outside the booklet and was left as it was (only the spelling changed).

| Fix | File | Change |
|---|---|---|
| Must 1 (ruling 2) | slots-unified.md | [BASIS] now "up to the Annual Report 2025-26 filed on NSE on 23 Jul 2026"; p15 sentence on the Q1 FY27 results deleted; header footing line updated |
| Must 2 (ruling 6) | slots-unified.md | p14 running head "TRUST · WHAT CRESTLINE IS NOT", chapter label removed, section heading no longer says chapter twelve; p15 alone is TWELVE |
| Must 3 (ruling 4) | slots-unified.md | Keys instruction line: the mark's caption is [MEASURE]; the scenario caption no longer appears anywhere in the pack |
| Must 4 (ruling 5) | problems.md | "Kasarvadavali" to "Kasarvadawali" (0 of the old spelling left in either file) |
| Must 5 | slots-unified.md | p7 lens 03: "one company line" · "retention payable is filed inside trade payables, with no split by job or by vendor" |
| Must 6 | slots-unified.md | Letter A: "clear footing" sentence replaced by "Two filed facts frame that question." and the two facts |
| Must 7 | slots-unified.md | Letter B: the funding cost clause deleted; opens "The standalone balance sheet carries no borrowings from banks at 31 March 2026." |
| Must 8 (ruling 4) | claude-design-master-prompt.md | Rule 11 added ("This booklet prints no rupee-per-day value, no savings figure and no interest."); A5, A6, A7, A14, finish check 6 and the chart style line rewritten to the measure caption; scenario caption deleted everywhere |
| Should 1 | slots-unified.md | p14 footnote label "Accounting software:"; SAP now printed once, with its source |
| Should 2 | slots-unified.md | [NOINT] and the p15 note: "the standalone balance sheet carries no bank borrowings at 31 March 2026" |
| Should 3 | slots-unified.md | p3 lead: "publishes no working-capital target for its E&C book" |
| Should 4 | slots-unified.md | p4 body: "The Annual Report describes the same line as including retention receivable"; p7 lens footnote adds AR FY25 p192 |
| Should 5 | slots-unified.md | "label slots", "slot" to "label cells", "cell" (p4, p5, Keys) |
| Should 6 | slots-unified.md | header: footing per ruling 2; logo accepted per ruling 1, printed small |
| Ruling 1 | claude-design-master-prompt.md | upload line names reliance-infra/assets/rinfra-logo.png; cover description, rule 10 and finish check 9 say print it small (171 x 28 px, no wider than about 14 mm) |
| Ruling 3 | (already in the pack) | "waiting" tagline, p14 arbitration bullet dropped, p11 footer, LIGHT p15 sources, p8 tiles: confirmed present, unchanged |

Phase C: claude-design-master-prompt.md assembled from MASTER-PROMPT-TEMPLATE.md. Garvis comment stripped; company and legal name filled; sender block from the pack; reader table with Letter A (Thota) and Letter B (Chaturvedi), the registered office check note left out; pack region pasted from "## Keys" to the line before "## Checks". The template's opening question ("how much money and how much time would it save") is reworded to what Crestline would measure, since the LIGHT form prints no savings; the blank P.S. line drops the template's P.S. text sentence. A1 says "ERP" rather than naming the system, so SAP stays once in the whole prompt.

## Final scans (run after the last edit; `ri6_scan.py`, python -I, every scan with a planted line that must be caught)

| Check | Pack (33,371 chars, min 20,000) | Prompt (51,045 chars) |
|---|---|---|
| a placeholders / HTML comments | n/a | 0 / 0 |
| b other company names | 0 | 0 |
| c internal references | 6, all the normal word "review" (title, stage names, ownership line) | 9, the same normal word "review" |
| d dashes (markdown rules excused) | 0 | 0 |
| e numbers traced | untraced 3, the p5 gridline scale labels | 0 (whole prompt against pack and template); Content section against slots-unified.md alone: 0 |
| f kept out | 0 | 0 |
| g "Scenario, not a forecast" | 0 | 0 |
| h rupee per day, interest or savings figures | 0 | 0 |
| SAP mentions | 1 | 1 |
| pack region byte for byte in the prompt | | IDENTICAL (29,154 chars) |

The folder is not a git repository; nothing outside reliance-infra was written (scratch scripts in the session scratchpad).
