# Bajel Projects: QA report (BJ-4)

Reviewer: QA, 8 Oct 2026. Scope: webapp-fit.md, problems.md, solutions.md and calc/, against data.md, depth.md and the page images in src/d. Protocol: qa-reviewer "Financial booklet verification protocol", PLAYBOOK rules 1 to 13, README rulings incl. "Garvis rulings BJ-3" and the five BJ-4 rulings (a) to (e). Sensitive items are cited by number only (S1 to S13 in sensitive-garvis.md).

## Verdict

**PASS AFTER FIXES.** Every printed figure traces to its page image and recomputes by script. Six must-fixes and four should-fixes were found; all ten are applied below. The calculator re-ran byte-identical and the app repo was left as found.

## 1. Figures, traced on the page image

All AR26 pages were read from the site copy src/d/ar26.pdf (two printed pages per PDF page, located by text search and confirmed by the printed page number on each image). Every page carries the "Standalone" header; consolidated pages start at p336 and were not used.

| Figure | Page image | Verdict |
|---|---|---|
| Revenue FY26 Rs 2,791.58 Cr, FY25 Rs 2,598.24 Cr (279,157.52 and 259,823.65 lakh) | AR26 p257, Standalone Statement of Profit and Loss | CORRECT |
| Operating cash flow Rs 21.09 Cr and Rs 69.13 Cr; receivables line Rs 599.82 Cr and Rs 549.43 Cr | AR26 p258, Standalone Statement of Cash Flow | CORRECT |
| Receivables Rs 1,849.05 Cr and Rs 1,258.65 Cr | AR26 p256 balance sheet (current plus non-current) and p280 Note 6 total net | CORRECT |
| Not due Rs 1,530.12 Cr (79.30%) and Rs 882.77 Cr (66.32%); overdue Rs 399.35 Cr and Rs 448.34 Cr | AR26 p280 and p281 Note 6 ageing, "from due date" | CORRECT |
| Terms "30 to 360 days" and the retention "Not Due" sentence | AR26 p281 Note 6(c) | CORRECT |
| Terms "30 to 90 days" | AR25 p214 Note 4(c) | CORRECT |
| Borrowings Rs 349.96 Cr = Rs 31.00 Cr working capital facilities plus Rs 318.96 Cr vendor bill discounting; FY25 Rs 356.59 Cr; 6.5% to 10%; credit terms up to 180 days | AR26 p291 Note 18 | CORRECT |
| Interest on borrowings Rs 46.36 Cr and Rs 41.29 Cr; mobilisation advances Rs 15.20 Cr | AR26 p297 Note 29 | CORRECT |
| Turnover 1.80 and 2.61, so 202.8 and 139.8 days; company reason for FY26 | AR26 p320 Note 45 | CORRECT |
| FY24 turnover 2.00, so 182.5 days | AR24 p112 | CORRECT |
| FY24 revenue Rs 1,169.21 Cr | AR24 p165 (also on p112) | CORRECT |
| FY24 operating cash flow Rs 195.37 Cr | AR25 p190 | CORRECT |
| Power Grid 64.31% of FY26 revenue (179,523.85 over 279,157.52 lakh) | AR26 p312 Note 38 | CORRECT |
| Rs 72.13 Cr "unbilled on account of work under certification" | AR26 p316 Note 42 | WAS WRONG in wording, now fixed (M5) |
| Q1 FY27 interest Rs 11.8 Cr against Rs 15.9 Cr | Q1 FY27 investor presentation p23, Standalone Income Statement | CORRECT |
| CRISIL "a one-off event" | CRISIL rationale dated 5 Aug 2026, p2 | CORRECT |

Quotes and speakers, checked on the image:
- "keeps increasing on for every project, that's the contractual terms" and "till date we have collected most part of it": Q4 FY26 call transcript p14, speaker label "Nitesh Bhandari". CORRECT.
- "around 6.5 to 7% as of now": AGM transcript p23, under the heading "Mr. Nitesh Bhandari (CFO)". CORRECT.
- "Decrease in trade receivables turnover ratio is on account of delay in collection from customers in comparison to projects execution": AR26 p320, company text, no speaker. CORRECT.

Recomputed by script (recompute.py in the BJ-4 scratch folder, asserts pass): value of a day 7.65; 10 days 76.48; 30 days 229.44; interest 4.97 to 7.65 and 14.91 to 22.94; days 202.8, 192.8, 172.8; FY25 139.8 and FY24 182.5; not due shares 66.32% and 79.30%; not due 882.77 and 1,530.12; overdue 448.34 and 399.35; operating cash 69.13 and 21.09; borrowings 356.59 and 349.96, which is 31.00 plus 318.96; Power Grid 64.31%; FY26 over FY24 revenue 2.39 times; P4 marks 273.48 and 120.52. All match the files.

## 2. Calculator red-check

- Temporary copy written with the Write tool to the app repo as scripts/_tmp-bajel-savings.ts; its hash matched calc/bajel-savings.ts.
- `npx tsx scripts/_tmp-bajel-savings.ts`: exit 0, all asserts passed. Output compared with calc/bajel-savings-output.txt by SHA-256 and `fc /b`: byte-identical, "no differences encountered".
- Copy deleted by its exact name. `git status --porcelain` afterwards shows only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`, the same as before the run.
- The break log covers every assert once. Payables never release cash; the interest base is capped at 349.96; rates are exactly 6.5% and 10%; no term or target is passed.

## 3. Must-fixes (all applied)

**M1. P3 overlay (ruling a). solutions.md P3 chart picture.**
- Was: "On FY26, a hollow dashed extension to **Rs 97.57 Cr** (10 days) and to **Rs 250.53 Cr** (30 days), labelled "had the step held at 31 Mar 2026, all else equal"."
- Now: "FY25 Rs 69.13 Cr and FY26 Rs 21.09 Cr (AR26 p258), solid, with no scenario mark on them. Beside the chart, a separate callout on its own rupee scale from zero, hollow with a dashed outline, titled "Cash released once, with Crestline": (a) 10 days, **Rs 76.48 Cr**; (b) 30 days, **Rs 229.44 Cr**. The two rows overlap and are not added. Footer: Scenario, not a forecast."
- The chart rule paragraph now names P3 as the one chart whose mark is on its own scale. calc/notes.md updated to match; the calc output keeps its `[chart] P3` row (it must stay byte-identical) but that row is no longer printed.

**M2. P1 explanation beside 202.8 (ruling b).**
- problems.md P1 adds: "**The company's own account, printed beside the 202.8 days.** Year-end timing of collections, largely collected after year end, per the company (Nitesh Bhandari, Chief Financial Officer, Q4 FY26 earnings call, 29 May 2026, transcript p14, filed 3 Jun 2026)."
- solutions.md P1 chart adds, beside the FY26 bar: "Year-end timing of collections, largely collected after year end, per the company." and "FY24 is not drawn." FY24's 182.5 stays in words, cited AR24 p112.

**M3. P2 uses the AR26 comparative alone (ruling c).**
- Was: "(AR26 p280 Note 6, filed 17 Jul 2026, standalone; both years on the AR26 ageing)". Now: "(AR26 p280 Note 6, filed 17 Jul 2026, standalone)".
- The problems.md header no longer contrasts reports; it reads "Charted figures are from the Annual Report FY2025-26 ... Earlier years appear in words only, each with its own report and filing date." The FY24 cite lost its trailing qualifier.

**M4. P4 framed neutrally (ruling d).**
- Title was "The gap is carried at 6.5% to 10%"; now "Most of the borrowing is vendor bill discounting, at 6.5% to 10%".
- Removed "both years as printed in AR26" (an S12 hint).
- Now: "Most of it is vendor bill discounting: Rs 318.96 Cr of suppliers' bills settled through banks and financial institutions on credit terms of up to 180 days. Working capital facilities were Rs 31.00 Cr. The company states the interest on both in a range of 6.5% to 10% a year (AR26 p291)."
- Credit, as the company states it: "The CFO told the AGM on 10 Aug 2026 that the average rate had come down from about 10% at the start of the year to "around 6.5 to 7% as of now" ... The company has brought the rate down. The number of rupees waiting to be collected is the part Crestline measures, and interest is saved only if cash released from receivables repays these facilities."
- solutions.md P4 chart splits only the FY26 bar (318.96 and 31.00). Splitting FY25 would print the S12 figure.

**M5. Rs 72.13 Cr was described as a balance.**
- Was: "Work executed and waiting on certification stood at Rs 72.13 Cr at 31 Mar 2026 (AR26 p316 Note 42)." The page shows a FY26 reconciling line from revenue at contracted price to revenue, not a year-end balance.
- Now: "In FY26 the revenue note deducts Rs 72.13 Cr from revenue at contract price as "unbilled on account of work under certification" (AR26 p316 Note 42)."

**M6. webapp-fit.md named the S4/S5 topic.**
- Removed the "What Crestline does not do" bullet on claims carried over from the demerger, and NEVER CLAIM 8 now reads "That Crestline does fabrication planning."

## 4. Should-fixes (all applied)

1. **Ownership.** solutions.md P1 was "ours (measure, prepare, submit) and the utility's (certify, pay)"; now "ours (measure, prepare, review, submit, invoice) and the utility's (acknowledge, certify, pay)". webapp-fit.md certification row now lists the company's five acts and the client's three.
2. **P1 longer view argued against the CFO and overstated.** "FY25 was the low point, not FY26 the outlier. In a typical year the book holds about half a year of revenue." 139.8 days is not half a year. Now: "FY25 was the lowest of the three years. In two of the three years the book held about half a year of revenue."
3. **P4 quote merged two sentences.** "Both carry interest "in the range of 6.5%-10% p.a."" quoted the vendor bill discounting sentence for both facilities. Now paraphrased without quote marks, both named.
4. **Tone.** "Money overdue actually fell" is now "Money overdue fell". NEVER CLAIM 5 and 6 now also say "or on cash that does not repay those facilities" and "A higher payable days figure is never shown as better".

## 5. Rules checked

- Rows never added: stated in solutions.md and on every chart. PASS.
- Rule 13 and A12: every with-Crestline mark (192.8, 172.8, 76.48, 229.44, 273.48, 120.52) is a calc output value; no invented chart value. PASS.
- A13: no signed figure in the three files (scan below). The calc output prints signed proof lines; they are never printed in the booklet.
- Interest range shows both ends everywhere and the base is capped at 349.96. PASS.
- Payables are never a saving and DPO is never better when higher. PASS.
- No ERP vendor named and no present-tense ERP claim; "your ERP", "will feed, read-only, built during the pilot". PASS.
- Screens true today: every screen in webapp-fit.md is in PROJECT_SECTIONS or the portfolio nav in lib/navigation.ts; the retention lever text matches lib/insights/levers.ts; the process map is not offered. PASS.
- Every KEPT OUT item absent (scan below). The S9 paraphrase stays "year-end timing of collections" with no customer named near it; Power Grid appears only in P2 as a neutral revenue share. PASS.

## 6. Still open (not for this ticket)

- Before print: re-check the H1 FY27 balance sheet if it has landed (README ruling).
- BJ-5: keep the company's audited reason and the CFO's account side by side in P1; never print one without the other.

## 7. Applied log

| File | Change |
|---|---|
| problems.md | Header neutral (M3); intro "actually" dropped; P1 CFO account added (M2) and longer view corrected (S2); P2 cite trimmed (M3) and Rs 72.13 Cr reworded (M5); P4 rewritten (M4, S3) |
| solutions.md | Chart rule names P3's own scale; P1 ownership (S1), CFO label and "FY24 is not drawn" (M2); P3 callout replaces the overlay (M1); P4 title, FY26 split, repay condition (M4) |
| webapp-fit.md | Demerger-claims bullet removed and NEVER CLAIM 8 trimmed (M6); certification row ownership (S1); NEVER CLAIM 5 and 6 tightened (S4); re-check note in the basis line |
| calc/notes.md | P3 row and judgement call 2 updated for ruling (a) |

Every replacement string was scanned (number trace, dashes, signed numbers, other company names, KEPT OUT terms) in the BJ-4 scratch folder before it went in; the applied files hash-match the scanned candidates.

## 8. Final scans

Command: `python -I scan.py bajel problems.md solutions.md webapp-fit.md calc/notes.md qa-report.md` (scan.py in the BJ-4 scratch folder). Trace corpus: data.md, depth.md, README.md, calc output, src/bj-calc-output.txt, the shared product context and PLAYBOOK.md. Planted region (a number absent from the corpus, an em dash, a signed figure, a company name, two KEPT OUT terms) is caught by every scan before the files are read; minimum region 1,000 characters; numbers anchored with (?<![\d.]).

| File | Untraced numbers | Dashes | Signed figures | Other company names | KEPT OUT hits |
|---|---|---|---|---|---|
| problems.md | 0 | 0 | 0 | 0 | 0 |
| solutions.md | 0 | 0 | 0 | 0 | 0 |
| webapp-fit.md | 0 | 0 | 0 | 0 | 0 |
| calc/notes.md (internal) | 0 | 0 | 1, the break-log wording "reversed to +10 days" | 0 | 2, internal: the basis label on the inputs line and PLAYBOOK rule 7 on tax in receivables. Neither is booklet copy |
| qa-report.md (internal) | 6 distinct, none a booklet figure: the three lakh figures read off the page images, Note 38, the "03" in a repo file name and the scan's own 1,000 character minimum | 0 | 1, quoting the notes.md wording above | 0 | 0 |

Self-review: 4/5 | biggest mistake: my first P4 chart wording split both years, which would have printed the FY25 facility figure behind S12; caught on re-reading before applying, not by the scan, because the split was described in words and carried no number | rule from now on: check every derived component of a chart (splits, labels, comparatives), not only its headline figure, against the KEPT OUT list before it goes in.
