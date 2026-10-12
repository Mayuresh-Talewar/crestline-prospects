# Jyoti Structures: review gate (JS-6)

Reviewed: slots-unified.md (JS-5) against data.md, depth.md, problems.md, solutions.md, webapp-fit.md, calc/, qa-report.md and README.md (all rulings; JS-3 binding), plus the Garvis rulings on JS-5's open questions. Protocol: qa-reviewer "Financial booklet verification protocol", steps 1 to 5. Scripts and page renders are in the session scratchpad folder JS-6 only (render.py, recompute.py, scan.py).

## Verdict

**GO, with four must-fixes (all Garvis rulings) and three booklet-facing should-fixes.** No figure is WRONG. Every printed figure re-traces to an AR FY26 or Q1 FY27 page image with a standalone header, every computed figure recomputes by script (0 mismatches), and the calc re-runs byte-identical.

## 1. Page images opened (protocol step 2)

AR FY26 rendered at 110 dpi from src/d/ar_fy26.pdf; each page's printed folio read off the image.

| PDF index | Printed folio | Header on the page | Content confirmed |
|---|---|---|---|
| p3 | 1 | Corporate information | Registered office as printed in both address blocks; CFO Mr. Abdul Hameed Khan |
| p7 | 5 | Leadership Perspective, "Message from Whole-Time Director and Chief Financial Officer" | Quote on p3 row v is verbatim; signed "Mr. Abdul Hameed Khan / Whole-Time Director and Chief Financial Officer" |
| p15 | 13 | Directors' Report | "opening order book as on April 1, 2026 was Rs.2,274 Crores" |
| p89 | 87 | Standalone Statement of Profit and Loss | Revenue 750.87 and 498.04; materials 433.78; erection and sub-contracting 197.68 |
| p96 | 94 | Notes to the Standalone Financial Statements, note 5 | Inventories 146.01 (Mar 2026), 94.34 |
| p99 | 97 | Standalone notes, note 20 | Trade payables 116.20; micro and small 5.51 |
| p100 | 98 | Standalone notes, note 22 | Advances from customers 92.92 and 134.21 |
| p105 | 103 | Standalone notes, policy | "payable within 90 days or less"; "used to meet working capital requirements at the time of project mobilization stage" |
| p124 | 122 | Standalone notes, ageing schedule | Mar 2026 214.18, 7.90, 9.03, 7.82; Mar 2025 176.04, 59.92, 56.49, 7.09; both "from due date of Payment" |

Q1 FY27 results (res_q1fy27.pdf, PDF p2, scanned, no printed folio): "Statement of Standalone Un-audited Financial Results for the quarter ended June 30, 2026": 251.46 and 156.19; signed by Abdul Hameed Khan, "Chief Financial Officer & Whole Time Director", 4 Aug 2026.
Dutta filing (ann_FinalPressRelease-0284533.pdf, 5 Feb 2026): p1, the company's letter to the exchanges, "Mr. Amit Dutta is appointed as the Chief Operating Officer (COO) of the Company"; p2 "Amit Dutta, Chief Operating Officer, Jyoti Structures Limited".

**Ruling 1 (page numbers): holds.** Every AR citation in the booklet uses the printed folio, and printed = PDF index less 2 on all nine pages above. The Q1 FY27 results carry no printed folio, so "p.2" is the only page number that document has (its second sheet). One scheme throughout.

## 2. Figures (protocol steps 1 and 5)

recompute.py, inputs read off the page images, one planted mismatch asserted: **0 mismatches.**

| Figure | Formula | Raw | Verdict |
|---|---|---|---|
| 2.057 | 750.87 / 365 | 2.0572 | CORRECT |
| 20.57 | 10 x 2.0572 | 20.5718 | CORRECT |
| 61.72 | 30 x 2.0572 | 61.7153 | CORRECT |
| 238.93 | 214.18 + 7.90 + 9.03 + 7.82 | 238.93 | CORRECT |
| 299.54 | 176.04 + 59.92 + 56.49 + 7.09 | 299.54 | CORRECT |
| 116 / 106 / 86 | 238.93 / 750.87 x 365, less 10, less 30 | 116.14 / 106.14 / 86.14 | CORRECT |
| 104.11 (printed 104) | 214.18 / 750.87 x 365 | 104.11 | CORRECT |
| 94 / 74 | 104.11 less 10, less 30 | 94.11 / 74.11 | CORRECT |
| 129 | 176.04 / 498.04 x 365 | 129.01 | CORRECT |
| 220 | 299.54 / 498.04 x 365 | 219.52 | CORRECT |
| 218.36 / 177.21 | 238.93 less 20.57, less 61.72 | 218.36 / 177.21 | CORRECT |
| 2.763 | 251.46 / 91 days | 2.7633 | CORRECT |
| 61% | 251.46 / 156.19 | 60.996% | CORRECT |
| 50.76% | 750.87 / 498.04 | 50.765% (50.7649...) | CORRECT |
| 3.03 | 2,274 / 750.87 | 3.0285 | CORRECT |
| 146.01 / 71 days | note 5; 146.01 / 750.87 x 365 | 70.98 | CORRECT, level only (ruling 4) |
| 67 days | 116.20 / (433.78 + 197.68) x 365 | 67.17 | CORRECT, level only (ruling 4) |
| 134.21 / 98 days | note 22; 134.21 / 498.04 x 365 | 98.36 | CORRECT |
| 92.92 / 45 days | note 22; 92.92 / 750.87 x 365 | 45.17 | CORRECT |

Calc re-run (step 3): calc/jyoti-savings.ts copied to the scratch folder and run with the app's tsconfig from the app root (`npx tsx --tsconfig ./tsconfig.json <scratch copy>`), so nothing was written into the app repo. Exit 0, output **byte-identical** to calc/jyoti-savings-output.txt (SHA-256 bd1e3a8d...af79e both). App `git status --porcelain` before and after: only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`.

## 3. Rules and traps (protocol step 4)

| Check | Result |
|---|---|
| JS-4 fixes held | P2 is a panel inside the P1 chart with days only (94, 74) and "same cash as above, not added"; the P3 mark is a separate callout of Rows A and B, never stacked; the rebuild reading and caption are in; 299.54 is used; ownership split is the product rule |
| P1 and P3 cash never added | Held: p9 "The same cash as page 5, not added."; p12 table "Same cash as above, not added"; [ONCE] on every scenario footnote; letters say "alternatives, not a sum" |
| Rule 13 / A14 | Every problem chart carries a hollow dashed with-Crestline mark from calc Rows A, B or C only, same scale, "Scenario, not a forecast.": p4 dot grid, p5 bars and panel, p9 callout, p12 bars, p13 card 3. History-only cards say so |
| A12 | p8 stages carry no day value, bar length or split |
| A13 | 0 signed numbers (phone excepted) |
| Interest and financing words | 0, apart from the required p15 sentence |
| ERP status | 0: "your ERP" and "ERP" only |
| Ownership | p8, p10 and the letters follow the rule, except the Dutta letter's first list (should-fix 1) |
| Entity and basis | All figures standalone, one vintage (AR FY26). The order book is a Directors' Report statement with no entity basis, but p3 row iii labels it "standalone" (should-fix 2) |
| KEPT OUT (S1 to S15 and the JS-3 list) | 0 hits. Rajesh Kumar Singh and R.P. Singh are named nowhere in the printed region |
| Editions | Khan's title matches AR FY26 printed p.5; Dutta's matches the 5 Feb 2026 filing, p1 and p2. Both letters neutral; 0 "you said". The p3 quote is verbatim and credited to its speaker by name and title |
| Logo | assets/jsl-logo-hd-transparent.png opened and viewed: stacked roundel, "JYOTI STRUCTURES LIMITED", "SINCE 1974", blue on transparent. Same mark as the letterhead on the company's own 5 Feb 2026 exchange filing and the AR page headers. Official |
| Other companies, dashes, placeholders, AI tells | 0 each |

Scan (scan.py pack, Python -I) on the reader table plus the printed region, 33,173 characters against a minimum of 15,000. A planted line (888.77, confirmed absent from the corpus first; p.55; an other-company name; an em dash; a placeholder and a comment; a kept-out term and an S label; interest, trapped, arbitration; "you said"; "delve"; a signed number; an internal file name) fired every check. Real run before fixes: 0 untraced numbers (corpus: the jyoti research files, README, calc output and FIXED-PAGES), 0 unmapped page references, and 3 cost-of-money hits ("arbitration" once, "claims" twice), all in the p14 line ruling 5 drops. "review" fires four times: the booklet title "Working-capital review", a normal word.

## 4. Must-fixes (Garvis rulings)

1. **Ruling 2.** Letter date is "October 2026" in both editions, not "8 October 2026".
2. **Ruling 3.** p14 becomes an unnumbered TRUST page. Checked against ruling 3's own condition: with p14 unnumbered, chapters run one to eleven on p3 to p13, so an invitation kicker of THIRTEEN would skip twelve. To keep the numbering consecutive, p15's kicker becomes **"TWELVE · THE INVITATION"** (which is also the FIXED-PAGES wording). Flagged for Garvis: THIRTEEN was approved only on the no-gap condition, and the unnumbered p14 breaks it.
3. **Ruling 4.** Lens 01 keeps ₹146.01 Cr and 71 days as a level and gains the label "mostly factory stock; outside what the pilot measures". Note 5 supports it: construction materials at site are ₹12.68 Cr of ₹146.01 Cr, the rest is raw material, semi-finished and finished goods, WIP and stores. Lens 05 (67 days) is already a level with no saving and no judgement.
4. **Ruling 5.** Drop "Not a claims or arbitration tracker. It lists claims and awards as aged cash; it does not run them." from p14.

## 5. Should-fixes (booklet-facing)

1. **Dutta letter, ownership.** "steps the company owns: the joint measurement, ..." gives the company the whole joint measurement; the product rule (FIXED-PAGES rule 4, p8) makes it both. Fix: "its side of the joint measurement".
2. **Order book basis.** p3 row iii source reads "standalone" on a Directors' Report figure that states no basis. Fix: drop "standalone" from that source line; the multiple's own label stays.
3. **Footer teasers against the template.** The template's final check 8 forbids right-hand footer teasers, while the pack gives a teaser on every page. Without a placement instruction Claude Design either drops them or sets them on the right. Fix: one instruction line in the pack placing each teaser on the left, after the folio.

Not changed, noted: both letters say Crestline "sits above your ERP and only reads", which matches the reviewed FIXED-PAGES p8 wording and is a statement about the product, not a claim of a live connection; p15 and p14 state that the adapter is built first.

## 6. Applied (Phase B, slots-unified.md)

Every replacement string was scanned before it went in (scan.py repl: 0 untraced numbers, 0 kept-out, 0 cost-of-money, 0 dashes; the internal-reference hits sit only in the two internal lines, which stay above the printed region).

| # | Where | Change |
|---|---|---|
| M1 | Reader table, both editions; internal slot map | Letter date "8 October 2026" to "October 2026" |
| M2 | p14; internal chapter-numbering note | p14 heading "Trust, unnumbered", running head "TRUST · BEFORE YOU SAY YES", chapter label "Trust" |
| M2 | p15 | Running head "THIRTEEN · THE INVITATION" to "TWELVE · THE INVITATION", so the chapters run one to twelve with no gap |
| M3 | p7 lens 01 | Note now ends "Mostly factory stock; outside what the pilot measures." |
| M4 | p14 | "Not a claims or arbitration tracker" line removed |
| S1 | Edition 2 letter | "the joint measurement" to "its side of the joint measurement" |
| S2 | p3 row iii | "standalone" removed from the order book's source line |
| S3 | Headline table block | Instruction line: footer teasers sit on the left after the folio; nothing on the right |
| internal | Checks paragraph | Allowed-sentence note updated (the claims line is gone); points to this file for the JS-6 re-run |

Pack scan after the last edit (33,264 characters, minimum 15,000, planted line fired every check): 0 untraced numbers, 0 unmapped page references, 0 other companies, 0 dashes, 0 placeholders, 0 kept-out terms, 0 interest, financing, trapped, arbitration or claims words (outside the required p15 sentence), 0 "you said", 0 AI-tell words, 0 signed numbers. "review" four times, the normal word.

## 7. Applied (Phase C, claude-design-master-prompt.md)

Assembled from MASTER-PROMPT-TEMPLATE.md with the Write tool: the Garvis comment stripped; {COMPANY} = Jyoti Structures; {COMPANY_LEGAL_NAME} = Jyoti Structures Limited; {SENDER} = the pack's sender line; {READERS_TABLE} = the pack's reader table (Edition 1 Khan, letter A; Edition 2 Dutta, letter B; edition headings one level down so they nest under the template's heading); {PACK} = "## Keys" to the line before "## Checks"; the upload line names jyoti/assets/jsl-logo-hd-transparent.png.
verify_assembly.py rebuilds the prompt in memory from the template and the pack and compares: **IDENTICAL, 50,802 characters**; the pack region is byte for byte.

Checks on the prompt (scan.py prompt, 50,802 characters, minimum 30,000, planted line fired every check; locate.py places each hit):
| Check | Result |
|---|---|
| (a) placeholders and comments | 0 braces, 0 comments. "TBD" and "placeholder" occur once each, inside the template's rule 7 that forbids printing them |
| (b) other-company names and figures | 0 |
| (c) internal references in printed text | 0 file, ticket or tool references. Normal-word hits: "review" (the title; "its review and submission"; REVIEW STARTED and REVIEW COMPLETED; "review, submit") and "slot" (template rules 1, 6, 7). The logo file name appears only in instructions (the upload line above the paste line, and the unquoted logo instruction) |
| (d) dashes | 0 em, 0 en, 0 spaced hyphens. The only double hyphens are the two markdown "---" rules and the headline table's separator row |
| (e) every number traced | 0 untraced in the Content section (33,626 characters) against slots-unified.md and FIXED-PAGES.md. Numbers above the Content are the template's own design values |
| (f) KEPT OUT | 0 in the Content. "SAP" once, inside the template's generic rule A1 |
| (g) interest or financing figures | 0 (no number within a sentence of interest, financing or borrowing). The words occur only in template rules A6 and A1 and in the required p15 sentence |
| (h) "trapped" / "arbitration" | 0 / 0 |
| other | 0 "THIRTEEN", 0 "8 October", 0 Rajesh Kumar Singh or R.P. Singh; "you said" only inside template rule A11 and final check 13, which forbid it |

## 8. Open for Garvis

1. Ruling 3's condition: with p14 unnumbered, THIRTEEN would leave a gap, so p15 reads TWELVE. Confirm.
2. Footer teasers: the template's final check 8 still says "no right-hand footer teasers"; the pack now places them on the left. Confirm teasers are wanted at all (FIXED-PAGES carries them; the template's rule 1 forbids adding teasers, but these are given as copy).
