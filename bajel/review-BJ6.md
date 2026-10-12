# Bajel Projects: review gate (BJ-6)

Reviewer: QA, 8 Oct 2026. Scope: bajel/slots-unified.md (BJ-5) against data.md, depth.md, problems.md, solutions.md, webapp-fit.md, calc/, qa-report.md and README.md (BJ-3 rulings binding), plus the BJ-6 Garvis rulings 1 to 4. Protocol: qa-reviewer "Financial booklet verification protocol". Sensitive items by number only. Scratch: the BJ-6 scratchpad folder (find.py, render.py, recompute.py, scan.py, logo.py, img/).

Lessons applied from earlier reviews: check every derived chart part against KEPT OUT, not only the headline (BJ-4); "you said" only over the reader's own words (rule 11); scan each replacement string before it goes in.

## Verdict

**PASS AFTER FIXES. No figure is NO-GO.** Every input figure traces to its page image and every derived figure recomputes by script. Five must-fixes and five should-fixes were found. One printed pairing was WRONG (M1). The calculator re-ran byte-identical from a scratch copy and the app repo was left as found.

## 1. Figures traced on the page image

AR26 site copy src/d/ar26.pdf, two printed pages per PDF page, each half rendered and read; every financial page carries the "Standalone" header.

| Figure as printed | Page image | Verdict |
|---|---|---|
| Revenue ₹2,791.58 Cr and ₹2,598.24 Cr (279,157.52 and 259,823.65 lakh) | AR26 p257 Standalone P&L | CORRECT |
| Receivables ₹1,849.05 Cr (21,527.21 + 163,377.55 lakh), ₹1,258.65 Cr; contract assets ₹18.86 Cr; contract liabilities ₹465.32 Cr; borrowings ₹349.96 Cr and ₹356.59 Cr | AR26 p256 Standalone Balance Sheet | CORRECT |
| Reader titles "Managing Director and CEO" (DIN 07008856) and "Chief Financial Officer" | AR26 p256, p257, p258 signature blocks | CORRECT |
| Cash from operations ₹21.09 Cr and ₹69.13 Cr; receivables line ₹599.82 Cr and ₹549.43 Cr | AR26 p258 Standalone Cash Flow | CORRECT |
| Not due ₹1,530.12 Cr and ₹882.77 Cr; gross ₹1,929.48 Cr; overdue ₹399.35 Cr and ₹448.34 Cr; overdue more than a year ₹206.18 Cr | AR26 p280 and p281 Note 6, "from due date" | CORRECT |
| "30 to 360 days" and the retention "Not Due" sentence | AR26 p281 Note 6(c) | CORRECT, quote exact |
| Borrowings split ₹31.00 Cr + ₹318.96 Cr (17,850.80 + 14,045.31 lakh); 6.5% to 10% on both; credit terms up to 180 days | AR26 p291 Note 18 | CORRECT |
| Payables ₹881.56 Cr, micro and small ₹44.80 Cr, "90-120 days from the contractual due date" | AR26 p292 Note 19 | CORRECT |
| Mobilisation advance interest separate from the range | AR26 p297 Note 29 | CORRECT (no figure printed) |
| Power Grid incl. group 64.31% (179,523.85 / 279,157.52) | AR26 p312 Note 38 | CORRECT |
| Work in hand ₹3,441.82 Cr (3,44,181.54 lakh) | AR26 p317 Note 42(iv) | CORRECT figure; its "1.45 years" is WRONG (M1) |
| Turnover 1.80 / 2.61 and payables 3.23 / 4.53; both company reasons | AR26 p320 Note 45 | CORRECT, quotes exact |
| Registered office "801, Rustomjee Aspiree, Anik Wadala Link Road, Sion East, Mumbai 400022" | AR26 printed p164 (certificate of non-disqualification), not p165; NSE copy PDF page 85 holds p164 and p165 | CORRECT address, internal cite off by one page (S3) |
| FY24 turnover 2.00, so 182.5 days | AR24 p112 | CORRECT |
| FY24 revenue ₹1,169.21 Cr | AR24 p165 | CORRECT |
| FY25 reason "Improvement in collection from customers in comparison to projects execution" | AR25 p128 | CORRECT |
| FY24 cash from operations ₹195.37 Cr (19,536.74 lakh) | AR25 p190 | CORRECT |
| "30 to 90 days" | AR25 p214 Note 4(c) | CORRECT |
| ₹4,055 Cr at 30 Jun 2026 | Q1 FY27 deck p22 (and p20) | CORRECT |
| ₹3,612 Cr a year earlier | Q1 FY27 deck p20, "Standalone figures"; NOT on p22 | WRONG cite (M2) |
| Interest ₹11.8 Cr against ₹15.9 Cr | Q1 FY27 deck p23, Standalone Income Statement | CORRECT |
| RAASTA 2030 three targets | Q1 FY27 deck p30 | CORRECT, wording exact |
| "anywhere upwards of 15%" | Q4 FY26 transcript p9, speaker label "Rajesh Ganesh" | CORRECT |
| CFO's account of FY26 (higher Q4 billing, timing of collections, retention "that's the contractual terms") | Q4 FY26 transcript p14, speaker label "Nitesh Bhandari" | CORRECT; ruling 3 holds: the Edition 2 "you explained / you set out" is his own words |
| "around 10%" when "we started the year", "Around 6.5 to 7% as of now" | AGM transcript p23, under "Mr. Nitesh Bhandari (CFO)" | CORRECT quote; the pack's "when FY26 began" / "from the start of FY26" dates it, the speaker did not (M3) |
| "Strengthening profit conversion through working capital efficiency" | AGM transcript p5, inside the speech opened by "Mr. Shekhar Bajaj (Chairman)" on p1, no other speaker label between | CORRECT |
| Three Power Grid packages, intimations of 8 and 12 Aug 2026 | TL02 and TL06 dated August 8, 2026; TL05 dated August 12, 2026 | CORRECT |

## 2. Derived figures, recomputed by script

`python -I recompute.py` (inputs typed from the images above, lakh to crore by script). All asserts pass:
7.65 a day; 76.48 and 229.44; 4.97 to 7.65 and 14.91 to 22.94; 202.8 / 192.8 / 172.8; 139.8 and 182.5; payable days 113.0 and 80.6; not due 1,530.12 at 79.30% and 882.77 at 66.32%; overdue 399.35 and 448.34; overdue more than a year 206.18 (FY25 253.87); 69.13 / 21.09 / 195.37; 349.96 = 31.00 + 318.96; 64.31%; 273.48 and 120.52; revenue FY26 over FY24 2.39 times ("more than doubled"); "nearly four rupees in five" = 79.30%.
15.9 to 11.8 is printed as read, no derived percentage.
**Mismatch found by the same script:** ₹3,441.82 Cr / ₹2,791.58 Cr = 1.23 years. The pack's 1.45 is ₹4,055 Cr (30 Jun 2026) / FY26 revenue (src/bj-calc-output.txt line 110), so the page 5 stat pairs a 31 Mar figure with a multiple computed on a 30 Jun total.

Calculator: written to scratch with the Write tool (SHA-256 identical to calc/bajel-savings.ts), run from the app repo with `npx tsx --tsconfig <scratch>/tsconfig.json <scratch>/calc/bajel-savings.ts`: exit 0, output SHA-256 28c37c40...c93f, `cmp` identical to calc/bajel-savings-output.txt. Nothing was written into the app repo; `git status --porcelain` shows only the two untracked docs paths, as before.

## 3. QA fixes and rules held

- BJ-4 M1 to M6 and S1 to S4 held in the pack. P3 is a separate callout on its own scale (page 8), never on the yearly bars. Only the 31 Mar 2026 borrowing column is split (318.96 and 31.00); 31 Mar 2025 is one block, NOT split. Page 9 uses the AR26 comparative only; page 5 does not draw FY24.
- Rule 13 / A14: pages 5, 8, 9 card (a) and 12 carry calc values only (192.8, 172.8, 76.48, 229.44, 273.48, 120.52 and the ranges), dashed and hollow, "Scenario, not a forecast." Page 9 card (b) carries none, correctly.
- A12: page 8 tiles hold a name and an ownership tag only; strip totals sit beside the timeline.
- A13: 0 signed numbers (scan).
- Interest: every figure is a range, the cap (₹349.96 Cr) is in [INTEREST] and on pages 12 and 15, and the repay condition sits on the letter, pages 10, 11, 12 and in [INTEREST] on every page that prints a range. Rows never added.
- DPO: 113.0 shown neutral (slate, no mark), "held at 113.0 days", never a saving.
- No SAP or vendor name; "your ERP" and "once connected" throughout; screens named are true today (simulator, vendor timing with MSME 45 days, client lens, tickets, Ask Crestline; lib/navigation.ts read).
- Ownership: client acknowledges, certifies, pays; Bajel measures, checks, prepares, reviews, submits, invoices.
- KEPT OUT: S1 to S13, 136 to 214, "restated", the internal conflicts (124 days, negative cycle), the FY25 facility split, the AR25 not-due figure, CRISIL, "arbitration", "trapped": 0 hits in the printed region (scan below). The tagline is the only place the fixed pages carried "trapped"; the pack never printed it.
- Editions: titles exact; Edition 1 letter is neutral and credits the CFO by name; Edition 2 uses "you" only over the CFO's own call.

## 4. Must-fixes

**M1. Page 5 stat pairs ₹3,441.82 Cr (31 Mar 2026) with "1.45 years of revenue".** 1.45 is the 30 Jun 2026 order book (₹4,055 Cr) over FY26 revenue; the 31 Mar figure is 1.23 years. Rule: never pair two figures computed on different totals. Fix: drop the multiple ("work in hand at 31 Mar 2026"); internal slot map corrected.

**M2. Page 6 tile cites p.22 for ₹3,612 Cr.** The figure is on p.20 ("Standalone figures") and not on p.22. Fix: source "Q1 FY27 investor presentation, p.20 and p.22, filed 7 Aug 2026, standalone".

**M3. Rate history dated to FY26 (pages 12 and 13).** The CFO said "when we started the year", at an AGM in August 2026, without naming the year. "When FY26 began" and "from the start of FY26" are our inference printed as his statement. Fix: "when the year started" on page 12; page 13 row ii reads "The average borrowing rate when the year started, and in August 2026, as Nitesh Bhandari, Chief Financial Officer, told the AGM."

**M4. Ruling 2, tagline.** Pages 7 and 16 print the full "Know where your money is waiting, and who can release it."

**M5. Ruling 1, logo.** Rendered bajel-logo.svg to PNG (img/logo_on_white.png; MuPDF needed the three style classes inlined in memory). What it shows: a blue #005EAB square carrying the white Bajel mark and the white BAJEL wordmark, which reads as a self-contained tile on white; to its right, outside the square, the word "Projects" in white, which vanishes on the white strip. So the wordmark WOULD be white-on-white. Fix: Design places the whole file, as supplied, on a small navy chip on the cover's white strip; never cropped, redrawn or recoloured.

## 5. Should-fixes

**S1. Page 7 lens 04** read "64.31% ... on stated terms of 30 to 360 days", which attaches company-wide terms to one client. Now: "64.31% · of FY26 revenue from Power Grid and its group; customer terms are now stated as 30 to 360 days".

**S2. Letter P.S., both editions:** "Every figure ... comes from Bajel's own published accounts" overclaims: figures also come from the call, the AGM, the deck and Crestline's arithmetic. Now: "Every figure in these pages comes from documents Bajel has published, or from Crestline's arithmetic on them."

**S3. Internal cite:** the certificate address is on AR26 printed p164, not p165 (basis note and slot map).

**S4. Section headings in the pasted region carried internal ids** ("problem P1" to "problem P4", "fixed page, slots filled"). Not printed copy, but they go to Design; stripped so nothing internal travels.

**S5. Internal notes:** open questions closed by rulings 1 to 3; ruling 4 added as an internal note (re-check the H1 FY27 balance sheet before print, nothing in print).

## 6. Scans before the fixes

`python -I scan.py pack bajel/slots-unified.md`: region "## Reader table" to the line before "## Checks", 33,651 characters (minimum 20,000, asserted). Planted region (number absent from pack and corpus, em and en dash, Capacite, 2,490, 445.5, "trapped", "arbitration", "restated", Jamnalal and 85.95, a placeholder and a comment, two signed figures, three single-rate figures, SAP go-live, 136 to 214, data.md, Garvis, BJ-6) caught by every scan first. Numbers anchored with (?<![\d.]).

| Scan | Real hits |
|---|---|
| Untraced numbers | 0 |
| Dashes | 0 |
| Other companies and 2,490 / 445.5 | 0 |
| KEPT OUT terms | 0 |
| "trapped" / "arbitration" | 0 / 0 |
| Placeholders, comments | 0 |
| Signed numbers | 0 |
| Single-rate interest | 1, false positive: "₹2,791.58 Cr / 365 = ₹7.65 Cr" is the value of a day; scan widened to allow it |
| Internal references | 8, all normal words or headings: "Working-capital review" (title, twice), "review" as a billing step and "reviewed with your team" (fixed copy), "slots filled" in four headings (S4) |

M1 to M3 are not scan-detectable (a wrong pairing, a wrong page, a dated paraphrase); they were found on the page images and by the recompute script.

## 7. Applied (Phase B)

Every replacement string was scanned first (`python -I scan.py text replacements.txt 1000`): 0 dashes, 0 other companies, 0 KEPT OUT, 0 signed, 0 single-rate, 0 internal refs; one "untraced number" is the colour #0D172F in the logo instruction, an instruction to Design, not a figure.

| Fix | Where in slots-unified.md | Change |
|---|---|---|
| M1 | Page 5, first stat | "work in hand at 31 Mar 2026, 1.45 years of revenue" to "work in hand at 31 Mar 2026"; slot map ORDER_BOOK and ORDER_BOOK_MULT corrected |
| M2 | Page 6, first tile source | "p.22" to "p.20 and p.22" |
| M3 | Page 12 credit line; page 13 row ii | "when FY26 began" to "when the year started"; row ii now "The average borrowing rate when the year started, and in August 2026, as Nitesh Bhandari, Chief Financial Officer, told the AGM." |
| M4 | Page 7 closing line; page 16 vertical tagline | "Know where your money is waiting, and who can release it." |
| M5 | Page 1, white strip, logo line; Logo section | Design places the whole file, as supplied, on a small navy (#0D172F) rounded chip on the white strip; never cropped, traced, redrawn or recoloured. What was seen is recorded in the Logo section |
| S1 | Page 7, lens 04 | "; customer terms are now stated as 30 to 360 days" |
| S2 | Letter P.S., both editions | "Every figure in these pages comes from documents Bajel has published, or from Crestline's arithmetic on them." |
| S3 | Basis note, slot map ADDRESSEE | p165 to p164 |
| S4 | Section headings, pages 5, 7, 8, 9, 11, 12, 14, 15, 16; page 8 and 9 card labels | problem ids and "fixed page, slots filled" removed |
| S5 | Open questions | 1 to 3 closed by rulings 1 to 3 (and 4 added for ruling 3); 2 marked internal note only (ruling 4) |
| note | "## Checks" | one line pointing to this file |

Re-scan after the last edit (`python -I scan.py pack bajel/slots-unified.md`, region 33,819 characters, planted hits caught first): untraced numbers 1 (the #0D172F colour, instruction); dashes 0; other companies 0; KEPT OUT 0; "trapped" 0; "arbitration" 0; placeholders 0; signed numbers 0; single-rate interest 0; internal references 4, all normal words ("Working-capital review" twice, the "review" billing step, "reviewed with your team"). "1.45", "FY26 began", "start of FY26", "on stated terms" and "problem P" are absent from the printed region.

Not changed, by design: data.md s8 still lists "Order book over FY26 revenue 1.45 years" in a table whose neighbouring row is the 31 Mar figure; the 1.45 is the 30 Jun book (src/bj-calc-output.txt line 110). problems.md and solutions.md do not carry it. Research file, not booklet copy; flagged for the owner of data.md.

Also applied for Phase C: the reader table gained a "Letter" column (Edition 1 Letter A, Edition 2 Letter B) and the two letter headings read "Letter A, Edition 1 (Rajesh Ganesh)" and "Letter B, Edition 2 (Nitesh Bhandari)". Pack re-scanned after this edit: region 33,858 characters, same counts as above.

## 8. Phase C: assembled prompt

File: bajel/claude-design-master-prompt.md (SHA-256 32649240...33fe), written with the Write tool from MASTER-PROMPT-TEMPLATE.md. Template comment stripped; {COMPANY} = Bajel Projects; {COMPANY_LEGAL_NAME} = Bajel Projects Limited; {SENDER} = the Rajat Kate block with phone, mail and website; {READERS_TABLE} = the pack's reader table, FROM block, Letters A and B and the letter footnote; {PACK} = "## Keys" to the line before "## Checks". The logo line names bajel/assets/bajel-logo.svg with the navy chip instruction from ruling 1, and the cover paragraph points to it. Those two lines are the only template changes beyond the fills (diffed by script).

`python -I check_prompt.py` and `python -I scan.py prompt <prompt> 40000` (planted region caught by every scan first):
- {PACK} byte for byte: the 29,872-character pack slice is in the prompt and the prompt ends with it. {READERS_TABLE} byte for byte: 3,969 characters, present.
- (a) placeholders 0, comments 0.
- (b) cross-company names and 2,490 / 445.5: 0.
- (c) internal references in quoted printed text: 0 real; 4 normal-word hits ("Working-capital review" twice, the "review" billing step, "reviewed with your team"). Across the whole prompt, 10 hits, the same words plus "slot" in template rules 1 and 7.
- (d) dashes: 0.
- (e) every number in the Content section is in slots-unified.md or FIXED-PAGES.md: 0 untraced. Whole prompt: 31 numbers untraced, every one from the template's own design spec (page size, point sizes, hex colours, Unicode 2013 and 2014), none new.
- (f) KEPT OUT: 0 (the scan's one "SAP" hit is template rule A1, "no present-tense claim that Crestline connects to the company's SAP or ERP"; "TBD" and "placeholder" are template rule 7's own list).
- (g) single-rate interest: 0.
- (h) "trapped" 0, "arbitration" 0.
- Signed numbers in printed text: 0.

## 9. Still open

- Ruling 4, internal only: re-check the H1 FY27 balance sheet (due by mid November 2026) before print.
- data.md s8 1.45 label (above).
- The Q4 FY26 call being the company's "first earnings call" rests on data.md and depth.md; not re-proven on an image in BJ-6.

Self-review: 4/5 | biggest mistake: my first prompt write dropped the pack slice's final blank line, so the byte-for-byte test failed until fixed; the check caught it, my transcription did not | rule from now on: when a template says "byte for byte", prove it with an in/endswith test on the exact slice before reporting, and slice on line-anchored markers ("\n## Keys\n"), never the first text match.
