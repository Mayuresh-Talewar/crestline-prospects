# Khilari Infrastructure: review gate (KH-6)

Scope: slots-unified.md (reader table and the printed region "## Keys" to Page 16) against data.md, depth.md, problems.md, solutions.md, webapp-fit.md, calc/, qa-report.md and README.md (KH-3 binding), plus the Garvis rulings of 08 Oct 2026 on the KH-5 questions. Protocol: qa-reviewer.md "Financial booklet verification protocol". Lessons applied: trace small integers by eye, never whitelist a range (KH-4); leave the app repo exactly as found.

## Verdict
PASS AFTER FIXES. No figure is NO-GO: all 17 key figures trace to the CARE page images or recompute exactly. Three must-fixes (two Garvis rulings not yet reflected in the wording, one audit label) and four booklet-facing should-fixes. All applied; see the applied log.

## 1. Figures, page images re-read and recomputed by script
Script: scratch KH-6/kh6_check.py, `python -I`, region "## Reader table" to the line before "## Checks", 33,864 bytes (minimum 20,000 asserted). Value of a day = 639.86 / 365.

| Figure | Page image (entity: KIPL, standalone, both releases p1) | Recomputed | Verdict |
|---|---|---|---|
| 1.753 | C25 p3 table, TOI FY25 639.86, "(UA)" | 639.86 / 365 = 1.753 | CORRECT, labelled unaudited |
| 17.53 | (calc row a, e) | 10 x 1.753 = 17.53 | CORRECT |
| 52.59 | (calc row b) | 30 x 1.753 = 52.59 | CORRECT, labelled "below any year shown" |
| 31.55 | (calc row c) | 18 x 1.753 = 31.55 | CORRECT, leads cover, letters, p4, p5, p9, p11, p12 |
| 26.30 | (calc row f) | 15 x 1.753 = 26.30 | CORRECT, printed as inventory period |
| 33 | C25 p3 "33 days in FY24" (A) | 51 less 18 | CORRECT |
| 41 | | 51 less 10 | CORRECT |
| 21 | | 51 less 30 | CORRECT |
| 22 | | 32 less 10 | CORRECT |
| 26 (cycle mark; also FY23 collection) | C24 p3 "26 days in FY23" (FY23 "(A)") | 32 + 33 less 39 | CORRECT |
| 29 | | 17 + 51 less 39 | CORRECT |
| 34 | | 44 less 10 | CORRECT |
| 14 | | 32 + 21 less 39 | CORRECT |
| 131.48 | C25 p3 table, PBILDT, March 31, 2024 (A) | as printed | CORRECT |
| 98.76 | C25 p3 table, PBILDT, March 31, 2025 (UA) | as printed | CORRECT |
| 100 | C25 p3 "positive ₹100 crore in FY24" | as printed | CORRECT |
| 4.66 | C25 p3 "stood negative of ₹4.66 crore in FY25" | as printed; printed in words as an outflow (ruling 1) | CORRECT |

Also confirmed on the images: 44, 8, 32, 17, 39, 42 days and 266, 220 GCA days (C25 p3); 11, 53, 167 days and "negative operating cycle in FY23" (C24 p3); ₹1,878.72 Cr, 2.93x, "two-three years", the nine states, "entire order book comprises contracts awarded by government entities, including urban local bodies", ₹71 Cr unbilled revenue, over ₹1,050 Cr of new orders, "in the initial phases of execution", TOI "grew by 5%" (C25 p2); "~91.40% (PY: 71.96%)" on the ₹44.90 crore limit, 12 months to June 2025 (C25 p3); "Sahebrao Khilari serving as the Chairman and Chief Executive Officer (CEO)" and "Ayush Khilari, Director" (C25 p1). CARE quotes on p4, p5 and p6 match the page word for word.

Number trace: 70 distinct numbers, 0 untraced (corpus: data.md, depth.md, problems.md, solutions.md, qa-report.md, both calc outputs, FIXED-PAGES.md; planted 913.37 rejected). Small integers checked by eye: page numbers, "1 pt", "Sector 1A", 101, 12 months, 36 extra days, 71, 91 (phone); every day count is a CARE figure or a calc mark above.

Calc red-check: calc/kh-savings.ts copied to the KH-6 scratch folder and run from the app with `npx tsx --tsconfig ./tsconfig.json`, exit 0, output byte-identical (sha256 ff532e36...bddb20 both). Nothing was written in the app repo; `git status --porcelain` before and after: the two untracked docs items only.

## 2. KH-4 must-fixes and KH-3 rulings
- Inventory period never written as unbilled work: 0 hits for "unbilled work"; p6 headline and [INV] say CARE ties the rise to unbilled revenue. HELD.
- FY23 cycle in words only: p9 "below zero (CARE: negative)", no column; p13 "Below zero". HELD.
- Row d and the gross current asset rupee figure: 0 hits (80.64, "row d", "(d)"). GCA days appear once, on p9, as a context line with no chart and no rupee figure. HELD.
- Lead row c, standard row a, outer bound row b labelled "below any year shown" on every mark. HELD.
- Ownership: p6 takeaway, p8 timeline and ownership line, p10 client lens, p11 root cause all file measure, prepare, review, submit and invoice as the company's, acknowledge, certify and pay as the client's. HELD.

## 3. Rule 13 / A14, A12, A13, interest, ERP, rows, payables
- A14 marks on p4 (dot grid bracket), p5, p6, p9, p12 and the p10 simulator, all from calc rows a, b, c, e, f, same scale, dashed and hollow, "Scenario, not a forecast". p8 profit and cash card and p9 creditors card are history only (no calc value exists, A12 wins). HELD.
- A12: p8 stages carry no day values. A13: 0 signed numbers (phone prefix excepted). HELD.
- Interest: 0 lines once the allowed sentence "No interest is priced, because no borrowing rate is published." is removed; 0 interest figures. HELD.
- ERP: only "ERP or Tally" (KH-3 ruling); no system is claimed as connected. HELD.
- Rows never added, payables "None claimed" and ₹0 on p10 and p12. HELD.

## 4. KEPT OUT, other agencies, other companies
0 hits on: the other rating agencies, non-cooperation, the subsidiary and its name, guarantee, diversion, the JV, lien, lenders, rating grades and rating actions, downgrade, trigger, sensitivities, 180 as a whole number, gearing, 80.64, 795, 155.14, 640, 44.80, 84.69, 296.83, 322.0x, 135.70, 432.53, "Stock on site", "Aayush", "Sukhdeo". 0 hits on the fifteen other company names, 2,490 (not followed by a decimal part) and 445.5. No agency other than CARE is named (the Global LEI register is a registry, not an agency). Every scan proved itself on a planted hit first.

## 5. Editions, letters, logo
- Titles exactly as CARE prints them: "Chairman and Chief Executive Officer" (bracketed CEO dropped), "Director"; "Ayush" as CARE spells it. HELD.
- Both letters neutral; 0 "you said" or "in your own words". HELD.
- Logo: the pack says print "Khilari Infrastructure" as text and never draw, trace or imitate a mark. HELD. The template's own cover line ("logo if uploaded, else nothing") and its rule 10 ("the cover shows the reader's name only") contradict this and must be reworded at assembly.

## Must-fixes
1. p8 takeaway: "which CARE puts down to unfavourable working capital changes" carries a judgement word, against ruling 1 ("frame it neutrally next to operating profit, with no judgement word"). Replace with "which CARE ties to working capital changes".
2. p6 tile, 91.40%: the label is not the one ruling 2 sets ("average use of the working-capital limit, 12 months to June 2025"), and CARE prints the figure as approximate ("~91.40%") on a maximum average basis. Replace with "average use of the ₹44.90 Cr working-capital limit, 12 months to June 2025, against 71.96% the year before, on the same basis: CARE's maximum average, printed as approximate". The basis words are kept on purpose: without "maximum average", the 91.40% reads as a plain average, which is the other basis (44.80%) that ruling 2 keeps off the page.
3. Both letters: "33 days in FY24 and 51 days in FY25, on unaudited figures" reads as if FY24 were unaudited too. FY24 is audited in that release. Replace with "33 days in FY24, audited, and 51 days in FY25, unaudited."

## Should-fixes (booklet-facing)
1. Edition 2 letter: "New projects in Ahmedabad and Uttarakhand are being mobilised" is present tense, while CARE (06 Oct 2025 p2) already says "with resource mobilisation complete". Reword to past: "CARE Ratings record over ₹1,050 Cr of new orders from Uttarakhand and Gujarat across FY24 and FY25, and new projects mobilised in Ahmedabad and Uttarakhand."
2. p10 chip "German bank aided": CARE prints "German Bank aided" (C25 p3). Match it.
3. Page headings carry internal words that pass into the prompt: "fixed page, slots filled" (p7, p8, p11, p14, p15) and "(pack copy)" (p8 upper card). Not printed copy, but check (c) on the prompt forbids them. Remove.
4. Reader table heading "(paste into the master prompt's reader table slot)" is an internal note. It is not pasted (assembly takes the content under the heading only); left in the pack.

## Open, for Garvis (not changed)
- FIXED-PAGES footers on p7, p11 and p14 carry a second phrase ("Now, on ...", "Scenario on ...", "The next page is yours.") while the template's check 8 bans right-hand footer teasers. They are fixed copy and stay; Claude Design should set them on the left after the page number. Worth one ruling for every company.
- The address street line comes from the GLEIF LEI record only (CARE confirms Navi Mumbai); sources paragraph says so.

## Applied log (KH-6)
Every replacement string was scanned BEFORE it went in (scratch KH-6/kh6_repl_scan.py: KEPT OUT incl. "unfavourable" and "high", dashes, interest, "unbilled work", other companies, internal words; planted hits found; 13 strings, 0 hits). Edits made with the Edit tool only.
- Must-fix 1, p8 takeaway: now "which CARE ties to working capital changes."
- Must-fix 2, p6 tile: now "average use of the ₹44.90 Cr working-capital limit, 12 months to June 2025, against 71.96% the year before, on the same basis: CARE's maximum average, printed as approximate".
- Must-fix 3, both letters: now "33 days in FY24, audited, and 51 days in FY25, unaudited."
- Should-fix 1, Edition 2 letter: now "CARE Ratings record over ₹1,050 Cr of new orders from Uttarakhand and Gujarat across FY24 and FY25, and new projects mobilised in Ahmedabad and Uttarakhand." (p6 lead keeps "were being mobilised", which is FY25 context and true.)
- Should-fix 2, p10 chip: "German Bank aided".
- Should-fix 3: "fixed page, slots filled" removed from the p7, p8, p11, p14 and p15 headings, "fixed page" from p16, "(pack copy)" from the p8 upper card.
- Should-fix 4: not applied (internal heading, not pasted).

Scans after the last edit (scratch KH-6/kh6_check.py on the pack region, 33,732 bytes): trace 70 numbers, 0 untraced; other companies 0; dashes 0; KEPT OUT 0; "unbilled work" 0; "you said" 0; interest lines 0 and interest figures 0; placeholders 0; comments 0; signed numbers 0; AI tells 0; internal words 8, all normal words ("Working-capital review", "reviewing", "REVIEW STARTED", "reviewed", the reader table heading's "slot", which is not pasted). Whole folder, kh-scan.py names: 2 hits, both internal (README ruling text, the pack's own Checks table), none in the prompt.

## Assembly (KH-6)
khilari/claude-design-master-prompt.md, 51,425 bytes, from MASTER-PROMPT-TEMPLATE.md: comment stripped; {COMPANY}, {COMPANY_LEGAL_NAME}, {SENDER}, {READERS_TABLE} (Edition 1 Sahebrao Khilari, letter A; Edition 2 Ayush Khilari, letter B, from the pack's "## Reader table") and {PACK} ("## Keys" to the line before "## Checks") filled. The template's three logo lines (upload line, cover column, rule 10, check 9) now say no company logo is available and "Khilari Infrastructure" prints as text; 20 template lines changed in all, each listed by the check script.

Checks (scratch KH-6/kh6_prompt.py, `python -I`, planted hits first):
- PACK byte for byte: identical (30,380 bytes). Reader table lines identical to the pack (24 lines).
- (a) placeholders 0 (one normal-word hit: "TBD" inside template rule 7, which forbids it); comments 0.
- (b) other companies, 2,490 and 445.5: 0.
- (c) internal references: 0 real; 14 normal-word hits ("Working-capital review" x5, "reviewing", "REVIEW STARTED", "REVIEW COMPLETED", "review" in the ownership line and rule A3, "reviewed", and "slot" in template rules 1, 6 and 7).
- (d) dashes: 0 em or en dashes; 0 spaced or double hyphens outside list bullets, table rules and the template's two "---" separators.
- (e) numbers: Content section 70 distinct, 0 untraced against slots-unified.md and FIXED-PAGES.md. The 14 design numbers in sections 1 to 5 (210, 297, 24 pt and the like) come from the template itself; 0 untraced once it is added.
- (f) KEPT OUT: 0 real; 5 normal-word hits ("A4" paper size and the rule ids A2 and A4).
- (g) interest figures: 0. Interest is mentioned only in rule A6 and in the allowed sentence "No interest is priced, because no borrowing rate is published."
- (h) "unbilled work": 0.
- Also 0 "you said" and 0 signed numbers (phone prefix excepted).
