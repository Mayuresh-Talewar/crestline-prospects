# ARWADE review gate (AR-6, 8 Oct 2026)

Scope: arwade/ and _shared/ only, read-only except this file. Pack reviewed: slots-unified.md, from "## Keys" to the line before "## Checks", against data.md, fact-check.md, problems.md, solutions.md, calc/arwade-savings.output.txt, qa-report.md (with its QA-fixes log) and README.md. Rules: PLAYBOOK.md 1 to 13, TEMPLATE-SLOTS.md, FIXED-PAGES.md, MASTER-PROMPT-TEMPLATE.md A1 to A14, crestline-webapp-context.md, brochure-ai-tells.md. Method: the qa-reviewer "Financial booklet verification protocol". Scratch scripts (python -I) are in the session scratchpad under ar6/ (find.py, ctx.py, rend.py, check.py).

## VERDICT: GO WITH FIXES

Every printed figure is correct. Every one traces to a source page or to the calc, and the calculator re-run is byte-identical. All five AR-4 must-fixes landed. Five wording fixes are still needed before Garvis assembles the master prompt. Two of them touch fixed-page wording, which only Garvis can approve. None of the five changes a figure.

## Must-fix (exact replacement text)

**1. p11, "02 Reminders" (pack line 354). The line implies automated reminders.**
The README ruling says "Never claim ... automatic reminders". crestline-webapp-context.md §6 says "Severity sets how many reminders a day" (that is the automated cadence) and "Automated reminders are switched off until the company turns them on". So "then chased by severity" describes a feature that is off by default and ruled out for this pack. It does not pass as fixed wording.
Replace with:
> 02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed.

Then delete the note on pack line 369 and close open question 4. Garvis: FIXED-PAGES.md carries the same line for every company, and approving a shared variant is your call (outside this ticket's scope).

**2. p15, fixed sources sentence (pack line 440). It describes interest at a rate the company does not disclose.**
"interest = cash x the rate range the company discloses, applied only where the cash repays borrowing. Cash is released once, interest recurs each year." Arwade discloses no rate, and the [SOURCES] paragraph just before it says so. Printed together, the two sentences contradict each other, and gate item 3 is "no interest anywhere".
Replace that stretch with:
> Scenarios are Crestline's arithmetic on the published figures: days x revenue per day. No interest is priced, because no borrowing rate is published. Cash is released once.

Everything else in the line stays as it is. This is also a fixed-page variant, so it needs Garvis's sign-off.

**3. p15, [SOURCES] (pack line 444). A checker note is in printed copy (MASTER-PROMPT rule 6).**
"standalone figures for financial years ending 31 March, table pages checked against the page images;" is a QA note.
Replace with:
> standalone figures for financial years ending 31 March;

**4. p6 headline (pack line 68). Line 1 carries no date, and line 2 dates the 2025 book.**
Read together, the headline says one client held half of the 25 Jun 2025 book. The 53% belongs to the 21 Apr 2023 book only (Infomerics, 17 May 2023, p.3, page image checked). The QA rule says date labels are mandatory.
Replace headline line 1 with:
> In April 2023, one client held half the order book.

Line 2 stays: "The last book is dated 25 Jun 2025."

**5. p3 closing statement (pack line 150). It misstates the source and contradicts its own rows.**
"Two of the four are not about money" is wrong, because row ii is ₹337.90 Cr. "twelve months to build the book" is also wrong: the source says the book is "expected to be executed within a period of 12 months" (Infomerics, 28 Jul 2025, p.3, page image checked). Executing a book is not building one.
Replace with:
> Two of the four carry a clock. *The order book is expected to be executed within twelve months, and in FY23 the average collection period was 72 days.*

## Should-fix

1. **Cover hero (p1), no caveat.** "₹7.15 CR IN EVERY TEN DAYS..." is a calc figure, and the only line under it is [FOOT]. Make the 7 pt line: "> [FOOT] ₹7.15 Cr is ten days of FY25 revenue (₹261.12 Cr / 365 x 10). Scenario, not a forecast."
2. **[FOOT] date (Keys, line 17).** "as published up to 28 Jul 2025" does not hold for the website, which was read on 8 Oct 2026 (open question 2). Replace with: "> Based only on Arwade's public credit-rating reports (the latest dated 28 Jul 2025) and its website, read on 8 Oct 2026."
3. **"a bill waited 72 days" (p4 headline line 1; p11 FINDING).** The source figure is a company-wide average collection period. Use "In FY23 bills waited 72 days, on average, to be paid." on p4, and "Bills waited 72 days on average to be paid in FY23, ..." in the p11 finding.
4. **Letter A, paragraph 2.** "The last time any public report counted those days was FY23" makes the collection period sound like the milestone-to-cash wait. Use Letter B's wording: "The last published count was FY23: an average collection period of 72 days, down from 151 in FY22."
5. **p5 headline line 2.** "Does the view of the cash?" is an ungrammatical ellipsis. Use "Has the view of the cash kept pace?"
6. **p5 side stat.** The source prints "~39.46%" (Infomerics, 28 Jul 2025, p.4), and the other two side stats carry "about". Print "about 39.46%".
7. **[BASIS].** The booklet says "revenue" and the source says "Total Operating Income". Append to [BASIS]: "Revenue is total operating income as the agency reports it."
8. **p6 scenario pills.** At 2.74 and 8.22 on a 0 to 350 scale, the pills are 0.8% and 2.3% of the width. Keep them to scale (A5) and let the labels carry the values. If the designer finds them unreadable, use a callout as on p4. Never stretch the pills.
9. **FIXED-PAGES.md (shared, not edited here).** Must-fixes 1 and 2 will recur in every future pack until the shared file gets an approved variant.

## Check 1: figures (protocol steps 1, 2, 3)

- **Untraced numbers.** `python -I check.py` extracts every ">" line between Keys and Checks: 502 numbers, 84 distinct, **0 untraced** against data.md, the calc output, problems.md, solutions.md and qa-report.md.
- **Recompute by script.** 18 of 18 match: 261.12/365 = 0.7154; x10 = 7.15; x30 = 21.46; 100/365 = 0.2740, giving 2.74 and 8.22; 261.12/112.80 = 2.31; 152/61 = 2.49; 261.12/65.45 = 3.99; FY25 growth 61.16%; 122/152 = 80.3%; order-book multiples 2.26, 2.04 and 1.29; 151 less 72 = 79; limit sums 61, 81 and 152.
- **Page images opened.** 2023 pp.1, 3 and 4; 2024 pp.1 and 5; 2025 pp.1, 3 and 5. Each confirms its figures, with Standalone headers on the tables:
  - 2023: limits 11 + 50 = 61; 151/72 days, 83/66 days, 271/~185 days and 0.31/0.27x; 53% Talegaon, ~11% Dhootpapeshwar, top 5 nearly 60%; table to 31.03.2023, revenue 65.45/112.80.
  - 2024: limits 11 + 70 = 81; table 112.80/162.03, EBITDA 13.46/24.06, PAT 6.12/11.63; cash credit 11.00.
  - 2025: limits 30 + 122 = 152; order book 337.90, 12 months, 1.29x; concentration quote; table 261.12, EBITDA 35.21, PAT 18.96.
  - Text located (find.py, 0 misses apart from the "EBIDTA" spelling): 2023 p.2 EBITDA 7.46/13.46 and PAT 2.74/6.12; client names on 2023 p.2 and 2024 p.2; utilisation ~61% (fund based, 2023 p.4), ~70% (cash credit, 2024 p.4) and ~39.46% (fund-based, 2025 p.4); the trigger quote on 2025 p.2.
  - "Its 2024 and 2025 reports print no days at all": the word "days" occurs 0 times in either text.
- **Calculator re-run.** A temporary copy at scripts/_tmp-arwade-ar6.ts ran with `npx tsx` and exited 0. Its output is **byte-identical** to calc/arwade-savings.output.txt (cmp). The copy was deleted, and `git status --porcelain` matches the state before the run.
- **Verdicts.** Every figure is CORRECT, with two NEEDS CAVEAT items, both wording only: should-fix 3 (72 days is an average) and should-fix 6 ("about 39.46%"). No figure is WRONG.

## Check 2: AR-4 must-fixes

1. P1 aligned spans: PASS. p2 (both letters) and p5 print 2.31x against 2.49x "between the May 2023 and July 2025 ratings", with the year-end alignment stated in the p5 footnote (2023 p.4 and 2025 p.5 tables, image-checked). "Kept pace" and "grew a little faster" are the only comparisons made, and no lagging-limits story appears.
2. Trigger quotes: PASS. The pack quotes only the 2025 trigger, "Elongation in the operating cycle impacting liquidity", which is verbatim on 2025 p.2.
3. No invented quote: PASS. "about 61%" sits outside quotation marks, and the footnote gives 61.16% (computed) against ~61.61% (printed).
4. Two-panel P1 chart: PASS. p5 has one 0 to 280 scale, revenue on the left, stacked limits at the three rating dates on the right, no ratio drawn, and dashed hollow 7.15 and 21.46 columns beside FY25.
5. "Nitin Arwade": PASS. "Subhash" has 0 hits in the pack, and the website CMD page reads "Nitin Arwade, Chairman & Managing Director".

## Check 3: Rule 13 / A14 / A12, interest, vendors, totals

- **Problem charts.** p4, p5, p6, p9 and p10 carry calc values only (7.15, 21.46, 2.74, 8.22), each dashed or hollow, labelled with days and cash, and each with "Scenario, not a forecast." The p5, p6, p10 and p12 marks share their chart's scale. On p4 and p9 the mark is a callout rather than a bar, because no FY25 "today" figure exists to subtract from. A12 requires exactly that, so it is accepted. p8 is [HIST] with no mark, which A7 allows.
- **A12.** The p8 timeline prints stage names and owners only. The day-word scan of the timeline lines finds 0 hits.
- **Interest.** No interest figure appears anywhere. The interest-scan hits are statements that none is priced, plus the fixed p15 sentence (must-fix 2).
- **Vendors paid later.** The only saving claimed is "None claimed" (p9 and p12).
- **Totals.** No row is added anywhere, and "overlap and are never added" is printed on p10, p12 and in [SCN]. The ownership tags on p8 match rule 3: acknowledge, certify and pay are the client's acts.

## Check 4: sensitive exclusions

0 printed hits for CARE, Acuite, corporate guarantee, 5.09, net worth, 60.66, 58.21, gearing, 0.47, non-cooperation, inventory and DIO. The Grey scan finds 0 hits in the whole pack. Talegaon appears twice, both times as "Talegaon Industrial Parks Private Limited (client order)" (p6 segment, p10 chip). The Rs 135.29 Cr order is not printed. PASS.

## Check 5: Crestline claims

- Every connection line is future or conditional ("Once connected", "will feed ... built during the pilot", "adapter built first").
- No ISO, hosting, region or encryption claim appears.
- No margin, cost-to-complete, scheduling, fabrication-WIP or Tally claim appears. The scope card says fabrication is not modelled.
- The pilot wording holds: "one to three design and build projects, read-only, fourteen days", one entity.
- Exception: "chased by severity" (must-fix 1).

## Check 6: Editions

Edition 2 is ACCEPTABLE. The website executive-board page prints "Dr. Balasaheb Darade | Senior DGM Accounts & Finance", and the pack's title matches it character for character. No letter calls him head of finance (0 hits for head of finance, finance head or CFO). Both letters are in a neutral voice, with 0 "you said" or "your own words". The only second person is "your ERP", which is correct. Body pages are identical across editions.

## Check 7: scans

- Dashes (U+2013, U+2014): 0 in the whole file. Spaced hyphens: 0.
- Placeholders ({ }, TBD, TODO, placeholder): 0.
- AI-tell word list (brochure-ai-tells.md §2 and §5): 0.
- Cross-company scan (Capacite, KEC, Afcons, Vascon, OVAL, GHV, Ashoka, Man Infra, MICL, Kalpataru, Grey, 2,490, 445.5) over the whole pack: 0. The 152 hits are Arwade's own ₹152 Cr limit.
- Lower-case "not public" appears only in fixed copy (open question 3). Acceptable as fixed wording.
- Checker-note scan: one hit, must-fix 3.

## Check 8: logo

arwade/assets/AIL_logo_pf1.png exists and is a valid PNG of 313 x 88 px. Viewed: the Arwade mark with "ARWADE People First", the same file src/web/home.html references in the site header. The pack names it twice, both times correctly. PASS.

Lessons applied: trace every number by script; open page images for headline figures; byte-compare the calc and leave the repo as found; report only, no edits outside this file.

## AR-6 fixes applied (8 Oct 2026)

All edits in arwade/slots-unified.md with the Edit tool. Garvis signed off must-fixes 1 and 2 as Arwade-only variants of the fixed wording. _shared/master-design/FIXED-PAGES.md is NOT edited.

Must-fix:
1. p11: "02 Reminders ... then chased by severity." replaced by "02 Owner told: The owner is mailed, never on one click, and every mail is logged with whether it landed." The p11 note was deleted and open question 4 closed.
2. p15 fixed sentence: the interest clause was replaced by "Scenarios are Crestline's arithmetic on the published figures: days x revenue per day. No interest is priced, because no borrowing rate is published. Cash is released once." The rest of the line is unchanged.
3. p15 [SOURCES]: "table pages checked against the page images;" removed, leaving "standalone figures for financial years ending 31 March;".
4. p6 headline line 1 now reads "In April 2023, one client held half the order book." This is changed in both the headline table and the p6 page copy.
5. p3 closing statement replaced by "Two of the four carry a clock. *The order book is expected to be executed within twelve months, and in FY23 the average collection period was 72 days.*"

Should-fix:
1. Cover 7 pt line now reads "> [FOOT] ₹7.15 Cr is ten days of FY25 revenue (₹261.12 Cr / 365 x 10). Scenario, not a forecast."
2. [FOOT] now reads "Based only on Arwade's public credit-rating reports (the latest dated 28 Jul 2025) and its website, read on 8 Oct 2026." Open question 2 is closed.
3. p4 headline line 1, in both the table and the page, now reads "In FY23 bills waited 72 days, on average, to be paid." The p11 finding now reads "Bills waited 72 days on average to be paid in FY23, ...".
4. Letter A, paragraph 2, now reads "The last published count was FY23: an average collection period of 72 days, down from 151 in FY22."
5. p5 headline line 2, in both the table and the page, now reads "Has the view of the cash kept pace?"
6. p5 side stat now reads "about 39.46%".
7. [BASIS] now ends "Revenue is total operating income as the agency reports it."
8. p6 has an unprinted pill note: keep 2.74 and 8.22 to scale on 0 to 350 and let the labels carry the values. If the pills are unreadable, use a callout as on p4. Never stretch them.
9. FIXED-PAGES.md is left as it is (shared, out of scope). Must-fixes 1 and 2 will recur in other packs until Garvis approves a shared variant.

Verified by script: 484 pack lines scanned. There are 0 hits for each superseded phrase ("chased by severity", "page images", "rate range", "interest recurs", "Does the view", "a bill waited", "not about money", "as published up to", "any public report counted", "02 Reminders"). There are 0 en and em dashes. No figure changed.

Master prompt: arwade/claude-design-master-prompt.md, 580 lines. It was assembled by script from the template and this pack and byte-identical to the scratch build (cmp). Checks: 0 placeholders and 0 HTML comments. The cross-company scan returns 0. The dash scan returns 0. All 91 distinct Content numbers are found in the pack. Internal references in printed lines: 0 (the only hits are the word "review" as a booklet word). Sensitive terms: 0, except 6 hits of "bank guarantee", which is the rated facility type. Corporate guarantee: 0. Garvis to rule.
