# J. M. Mhatre Infra: review gate (JM-6)

Reviewed: slots-unified.md (reader table and the printed region, "## Keys" to "## Checks") against data.md, depth.md, problems.md, solutions.md, webapp-fit.md, calc/, qa-report.md, README.md (rulings JM-3 binding), FIXED-PAGES.md, TEMPLATE-SLOTS.md, MASTER-PROMPT-TEMPLATE.md, crestline-webapp-context.md, brochure-ai-tells.md, and the app's CLAUDE.md and lib/navigation.ts (read only). Protocol: qa-reviewer "Financial booklet verification protocol" (2026-10-08). Scratch: session scratchpad JM-6 folder only (empty when created). Source codes as in data.md.

## Verdict

**GO, after fixes.** No figure is NO-GO. Every printed figure was re-traced to its page image and every derived figure recomputed by script; the calculator re-ran from a scratch copy byte-identical to calc/jm-savings-output.txt. Three must-fixes (one accuracy, one internal reference, one ruling not yet carried into the pack) and three booklet-facing should-fixes. Garvis's standing recommendation to drop this company (rulings JM-3) is unchanged by this review.

## Garvis rulings on the JM-5 open questions (recorded)

1. **Source naming.** The publisher stays unnamed in print: "a published credit-rating rationale dated 28 Mar 2024, p.4, standalone, FY23 audited" and the 28 Jul 2025 equivalent. Rule 3 (every figure names its source) is met on document type, date, page and basis. Naming either agency would point the reader to kept-out matter (both rationales carry sensitive items, see sensitive-garvis.md). The name may be given in person if asked.
2. **Page 13** as "the records the pilot reads": approved.
3. **Logo:** assets/jmm-logo-new.png, printed small, no wider than about 30 mm (352 px wide; sharp to about 30 mm at 300 dpi). The prompt says so.
4. **Fixed-text deviations approved:** "Totals are from published figures" (p8 footer), "days x income per day" (p15 formula), and no chapter number on p14. The p7 and p16 tagline ("Know where your money is waiting.") and the dropped p14 claims line follow from the KEPT OUT list ("trapped", "arbitration").

## 1. Figures, one verdict each (page images rendered at 110 dpi and read)

| Figure | Printed on | Page image check | Verdict |
|---|---|---|---|
| Inventory 81, collection 71, creditors 61, operating cycle 91 days, FY23 | p2 letters, p4, p5, p6, p7, p8, p9, p10, p11, p12, p15 | R10 p4: "operating cycle stood at 91 days in FY23 driven by an inventory cycle of 81 days and an average collection period of 71 days... creditor's period stood at 61 days in FY23". R10 p1 dated March 28, 2024; p5 "Analytical Approach: Standalone"; p6 FY23 column "(Audited)" | CORRECT |
| Gross current asset days 275 (31 Mar 2023), 266 (31 Mar 2022) | p4, p9, p15 | R10 p4, one sentence, same document and vintage | CORRECT; composition wording on p4 NEEDS CAVEAT (SF1) |
| Three quotes (earnest money and retention; milestone billing; payments relatively slow) | p4, p5, p6, p9 | R10 p4, word for word; agency prose, no speaker; credited to the rationale, never to a person | CORRECT |
| Unexecuted order book ₹2,035.11 Cr at 31 May 2025 | p2 letters, p3, p5, p15 | R14 p3: "an unexecuted order book of Rs. 2035.11 Crs. as of 31 May 2025"; R14 p1 dated 28 July 2025 | CORRECT |
| FY25 total operating income ₹798.93 Cr, provisional | p1, p15, K1 | R14 p3 "Rs. 798.93 Crs. in FY25 (P)", "[P = Provisional]"; R14 p6 table "KEY FINANCIAL INDICATORS (Standalone)", FY25 "Unaudited" | CORRECT ("provisional" printed every time) |
| About 65% roads and bridges | p3, letter 2, p15 | R14 p4 "Road Work / Bridges account for ~65% of unexecuted order value on 31 May 2025" | CORRECT |
| Every project in Maharashtra; top five about 53% of the book | p3, letter 1, p7, p15 | R14 p2 "all projects situated in the state of Maharashtra ... ~53% of the total unexecuted order book position on 31 May 2025 coming from top 5 counterparties"; also R14 p4 | CORRECT |
| "CIDCO and state government bodies" as the clients | letters 1 and 2, p3 row iv, p15 | R14 p3: "primarily secures orders from central and state government agencies ... its private clients"; R14 p2: "most of the contractees are central and state government agencies"; R10 p4 names CIDCO and state bodies among others | WRONG as an exhaustive claim; NEEDS CAVEAT wording (MF1). The ruling allows only these two names, so the fix is "include", not more names |
| ₹2.19 Cr a day | p1, p5, p6, p10, p11, p12, K1, p15 | script: 798.93 / 365 = 2.1888 | CORRECT |
| ₹21.89 Cr (10 days), ₹65.67 Cr (30 days) | p1, letters, p4, p5, p6, p8, p10, p11, p12 | script: 10 x 2.1888 = 21.89; 30 x 2.1888 = 65.67; equal to the calc clean run | CORRECT |
| Collection 71 to 61 / 41; cycle 91 to 81 / 61 | p5, p8, p10, p11, p12 | script: 81 + 71 less 61 = 91; less 10 = 81; less 30 = 61 | CORRECT |
| Inventory 81 to 71, cycle 81 (S-C), approximate | p6, p10, p12 | script; K2 printed with it | CORRECT with K2 |
| Gross current asset days 275 to 265 / 245 | p4 | script; K3 printed with it | CORRECT with K3 |
| Book / income ratio | not printed | printed 2.53x in R14 p3, recomputes 2.55x | correctly left out |
| Registered office | reader table | M3 p1 (AGM notice, 07 Sep 2026): "PLOT NO. 492, MARKET YARD, PANVEL MAHARASHTRA 410206" | CORRECT |
| Edition 1: Janardhan Moru Mhatre, Chairman and Founder | reader table | M1 p13 "JANARDHAN MORU MHATRE, Director"; jmminfra.com "J M Mhatre, Chairman &amp; Founder" (4 places); R14 p3 "promoted by Mr. Janardhan Moru Mhatre" | CORRECT |
| Edition 2: Sachin Janardhan Mhatre, Whole-time Director | reader table | M1 p13 "SACHIN JANARDHAN MHATRE, Whole-time director" | CORRECT |

Mix check held: days are FY23 (R10), the value of a day is FY25 (R14); on FY23 income (R10 p6 1,187.70, or R14 p6 1,203.33) a day is worth more, so the printed cash is the smaller figure, and K1 says so.

Derived-figure script (scratch calc_check.py): 11 rows, 0 mismatches.

## 2. JM-4 fixes held

- **Independent calc check.** Scratch copy of calc/jm-savings.ts (written with the Write tool, plus a two-line stub for its `./env` import) run from the app repo with `npx tsx --tsconfig ./tsconfig.json`, BREAK=1..4 then clean, joined the way the stored file is: **byte-identical** to calc/jm-savings-output.txt (13,547 bytes). BREAK=3 (simulator rate drifted 1%) exits 1, so assert 3 is independent of simulate. App repo `git status --porcelain` before and after: only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`. Nothing written in the repo.
- **Ownership.** Pack: p8 ownership line, p9 two-part card, letter 2 and p6 lead all give measure, prepare, review, submit and invoice to the company and acknowledge, certify, pay and release retention to the client body; joint measurement is "J. M. MHATRE INFRA AND CLIENT". problems.md, solutions.md, webapp-fit.md carry the JM-4 wording. Held.
- **Unsigned creditors span.** p5 "the label carries no sign", p6 "61 (no sign)", p8 "mint, no sign"; signed-number scan 0 hits. Held.

## 3. Rule checks on the pack

- **Rule 13 / A14 marks** with "Scenario, not a forecast": p4, p5, p6, p8, p10, p12 (and the p11 Ask answer on the same step). p3, p9, p13 carry no chart a mark could sit on. Held.
- **A12.** p8: eleven stage tiles, each name and ownership tag only, no digit; totals sit beside the timeline, never on a stage. Held.
- **A13.** 0 signed figures (the fixed phone number excepted).
- **No interest.** 3 sentences mention interest, all "No interest is priced, because no borrowing rate is published." 0 interest figures.
- **No ERP named.** "ERP" generic as FIXED-PAGES requires; one scope line names "an ERP, an accounting package, or spreadsheets". Held.
- **Rows never added; S-A and S-C as alternatives.** p4 "Same steps as page 5, not additional"; p5 "two sizes of one step, never added"; p6 "An alternative to the 10-day collection step on page 5, never added to it"; p10 "The rows are alternatives and are never added"; p12 navy box; K1. No total printed. Held.
- **KEPT OUT.** S1 to S8, NHAI, agency names, acronyms and grade tokens, ED, PMLA, forest, frozen, non-cooperation, default, SPV, JV, group, guarantees, promoter, dams, decline, Company Secretary, "trapped", "arbitration", borrowings, debt: 0 hits (the allowed "no borrowing rate" variant and the fixed "FINDING (WATCH)" tone excepted). FY23 and FY24 revenue and every other revenue level in data.md: 0 hits; the word "revenue" does not appear.
- **Editions.** Names, titles, address and salutation exact against M1 p13, M3 p1 and the website. Letters scanned for rating, agency, investigation, decline, default, NHAI, CFO, "you said", "in your own words": 0 hits. Both letters credit no quote to the reader. Neutral.
- **Cross-company** (the ticket's 17 names and its two banned headline figures): 0 hits.
- **Number trace:** 511 numeric tokens (87 distinct) in the reader table and printed region; 0 untraced to the pack's own sources.
- **Logo.** assets/jmm-logo-new.png viewed: the "J.M.MHATRE INFRA PVT LTD" wordmark with its blue mark, dark ink on transparent, reads cleanly on the white cover strip.

## Must-fixes

- **MF1. Clients overstated.** Letter 1 ("for CIDCO and state government bodies"), letter 2 (same) and p3 row iv ("CIDCO and state government bodies · certify each RA bill and pay it") read as the whole client base. R14 p2 and p3 say central and state government agencies plus private clients. Fix within the JM-3 naming limit: "for clients that include CIDCO and state government bodies" in both letters; p3 row iv description "are among the clients that certify each RA bill and pay it."; p15 sources "Clients including CIDCO and state government bodies".
- **MF2. Internal reference in the printed region.** Six page headings carry "(FIXED-PAGES pN, slots filled ...)". They are pasted into the prompt (check c, template rule 6). Remove the parentheticals; keep page, chapter and background.
- **MF3. Logo size (ruling 3) not in the pack.** p1 names the file but not the size. Add "printed small, no wider than about 30 mm".

## Should-fixes

- **SF1 (booklet).** p4 hero line reads as the full make-up of gross current assets and leaves out cash (R10 p5: cash and equivalents ₹39.62 Cr at 31 Mar 2023); the rationale states no definition (K3). Reword to "gross current assets at 31 Mar 2023, counted in days, including stock, work in progress, bills, deposits and retention".
- **SF2 (booklet).** p15 sources open with "credit-rating rationales, annual return and website" but also rely on the AGM notice. Add it.
- **SF3 (internal).** Section 0 and section 4 of the pack: record the four rulings and close the open questions.
- **SF4 (not booklet, not applied).** data.md still lacks R14's FY23 total operating income (1,203.33, R14 p6) as a differing-sources row (JM-4 S7). No FY23 revenue prints, so the booklet is unaffected; add it if a revenue chart is ever asked for.

## Scans (scratch check.py, `python -I`, before the fixes)

Minimum regions: reader 2,000 (actual 3,275), printed 15,000 (28,434), letters 1,500 (2,190). Every scan planted a hit, confirmed it absent first, then caught it. Numbers anchored with `(?<![\d.])`. Before the fixes: 6 blocking hits, all MF2 ("FIXED-PAGES" in headings). Normal-word report only: "review"/"reviews"/"REVIEW STARTED" (the product's step names and the title "Working-capital review"), "slots" (inside the MF2 headings).

Lessons applied: page image for every key input; re-run every scan after the last edit; scan each replacement string before it goes in.

## Applied (Phase B and C)

Every replacement string was scanned before it went in (scratch repl_check.py: 13 strings, 5 patterns each with a planted hit caught, 0 hits). Edits made with the Edit tool only.

| Fix | slots-unified.md change |
|---|---|
| MF1 | Letter 1 and letter 2: "for CIDCO and state government bodies" to "for clients that include CIDCO and state government bodies". p3 row iv description: "certify each RA bill and pay it." to "are among the clients that certify each RA bill and pay it." p15 sources: "Clients named as" to "Clients including" |
| MF2 | Six page headings (p7, p8, p11, p14, p15, p16): "(FIXED-PAGES ...)" parentheticals removed; p14 now "(no chapter number)", p15 keeps "(the variant for no published rate)" |
| MF3 | p1: logo line now "(assets/jmm-logo-new.png, as supplied, printed small, no wider than about 30 mm)" |
| SF1 | p4 hero line: "gross current assets at 31 Mar 2023, counted in days, including stock, work in progress, bills, deposits and retention" |
| SF2 | p15 sources: "credit-rating rationales, annual return, AGM notice and website" |
| SF3 | Section 0: client-naming rule extended (never as the whole client base) and the four rulings recorded; section 4 marked resolved with the rulings; Checks section: JM-6 re-run line |
| SF4 | not applied (data.md, not booklet-facing) |

Pack re-scan after the fixes: 0 blocking hits; number trace 506 tokens, 0 untraced.

**Master prompt assembled:** claude-design-master-prompt.md, from MASTER-PROMPT-TEMPLATE.md. Comment stripped; {COMPANY} = J. M. Mhatre Infra; {COMPANY_LEGAL_NAME} = J. M. Mhatre Infra Private Limited; {SENDER} = the seven Rajat Kate lines as the pack prints them on p16; {READERS_TABLE} = the pack's reader table, letters and both-editions lines; {PACK} = "## Keys" to the line before "## Checks". The logo line names jm-mhatre/assets/jmm-logo-new.png, printed small, no wider than about 30 mm, and the same size limit is carried into the cover description, rule 10 and final check 9. Script verify_assembly.py: PACK region byte-identical to the pack (28,341 chars), READERS region byte-identical (3,298 chars), template frame differs from the template in exactly those four logo lines plus the stripped comment.

Prompt checks (scratch check.py, planted hit per scan, minimum regions prompt 40,000 / content 30,000; actual 49,426 / 32,027):

| Check | Content section | Whole prompt |
|---|---|---|
| (a) placeholders, comments | 0 | 0 braces, 0 comments; "TBD" and "placeholder" appear only inside template rule 7 as the words never to print |
| (b) cross-company names and figures | 0 | 0 |
| (c) internal references | 0 | 0; normal-word hits only: "review" (title "Working-capital review", the step names REVIEW STARTED / COMPLETED, "reviews"/"reviewing" as the company's act), "slot" (template rules 1, 6, 7) |
| (d) dashes | 0 | 0 unicode dashes; 26 ASCII hits are the template's markdown list markers and "---" rules, never printed text |
| (e) numbers traced | 509 tokens, 0 untraced to slots-unified.md or FIXED-PAGES.md | 746 tokens, 0 untraced; 34 distinct are template design-spec numbers (sizes, colours, page numbers) |
| (f) KEPT OUT | 0 | 0 real; template hits are rule ids A2, A3, A4 and the words "negatives" (rule 7, chart colours) and "group(s)" (the p15 day-box layout) |
| (g) interest figures | 0 (3 sentences, all "No interest is priced, because no borrowing rate is published.") | 0 (plus template rule A6) |
| signed numbers, AI tells | 0, 0 | 0, 0 |
