# THERMAX TH-4: QA report

Reviewer: QA. Date 08 Oct 2026. Scope: thermax/ plus _shared/ (read only). No other company folder was opened.
Protocol: qa-reviewer.md "Financial booklet verification protocol" steps 1 to 5, PLAYBOOK rules 1 to 13, README Garvis rulings (TH-3 binding).

## VERDICT: PASS WITH FIXES

The figures are right. Every headline number was traced to its page image and recomputed by script, and the calculator re-ran byte-identical. The fixes are about presentation: one figure mixes two bases (the Garvis TH-3 ruling), every chart spec draws the segment scenario on the same axis as consolidated balances, one Crestline claim is overstated, the SAP wording is not exact, and problems.md prints negatives and the word "trapped". Once the 10 must-fixes below are applied, the pack can go to TH-5.

---

## 1. Evidence

### 1a. Page images opened (rendered with pymupdf, read on the image)
| Cite | PDF spread | Entity header on the page | Result |
|---|---|---|---|
| AR26 p228 cash flow | AR26.pdf idx 130 | CONSOLIDATED STATEMENT OF CASH FLOWS | OCF 541.55 / 1,079.79; cash generated 891.04 / 1,265.52; TR increase 193.71 / 328.15. CORRECT |
| AR26 p256 ageing, contract assets | idx 144 | NOTES TO CONSOLIDATED FS | Sub-totals 2,500.19 / 2,315.24, every bucket, impairment 295.35 / 312.23, contract assets 941.73 / 168.65 / 773.08 and 781.94 / 141.38 / 640.56, the retention sentence word for word. CORRECT |
| AR26 p274 MSME | idx 153 | NOTES TO CONSOLIDATED FS | Undisputed MSME 937.42, not due 857.50, buckets 55.02 / 9.32 / 5.55 / 10.03, disputed 0.73, total 938.15 / 749.78. CORRECT (MSME is not used in booklet files) |
| AR26 p289 contract balances | idx 160 | NOTES TO CONSOLIDATED FS | 773.08 / 640.56; 145.32 / 545.51; 1,899.53 / 1,469.20; "refer note 49"; "has supplied more products and services ahead of the agreed billing and payment schedules as per contractual terms" word for word. CORRECT |
| AR26 p310 to p311 segment note 33 | idx 171 | NOTES TO CONSOLIDATED FS | Industrial Infra segment revenue 4,348.05 / 4,694.45; assets 2,490.28 / 2,491.09; liabilities 2,330.16 / 2,353.60; result 217.51 / 110.08. CORRECT, NEEDS CAVEAT (see S3) |
| AR26 MD&A p113 | idx 72 | MD&A (consolidated figures: TR 2,205 matches p256) | Contract assets 773 / 641 "21%"; OCF 542 / 1,080 "(50%)"; both quotes word for word; p112 ECL quote also matches. CORRECT |
| AR26 filing date | idx 0 | Cover letter to BSE and NSE dated "July 03, 2026" | CORRECT |
| AR26 titles | idx 130, p229 signature block | "Managing Director and CEO"; "Executive Vice President and Group Chief Financial Officer" | CORRECT |
| Q4 FY26 transcript p11 | TR_Q4FY26.pdf idx 10 | Header "Thermax Limited, May 08, 2026, Page 11 of 17" | Both CFO quotes word for word under the speaker label "Rajendran Arunachalam:"; the analyst (Priyankar Biswas, JM Financial) used "a substantial working capital build". CORRECT |
| AR24 p292 note 44A (SAP) | AR24.pdf idx 165 | "Thermax Limited / SAP / Yes / Yes*" | CORRECT for Thermax Limited only; no other entity is shown on SAP |
| CRISIL 19 Jan 2026 | CRISIL_20260119.html (text search) | | "Prudent working capital management", the 40-day sentence, and "net nil debt" were all FOUND |

### 1b. Derived figures recomputed by script (scratch th4_check.py, asserts pass)
11.91, 119.12, 357.37, 57.7%, 62.0%, past due 1,443.42 / 1,434.88, over one year 377.27 / 335.56, +41.71 / 12.4%, 14.5% / 15.1%, OCF fall 49.8%, OCF/PAT 172.3% / 75.2%, contract assets +20.7%, segment net 137.49 / 160.12, 10.7 / 13.4 days, operating NWC consolidated -214.81 and standalone -85.99, MSME past due 79.92. **All 15 asserted headline figures match.** Both ageing tables sum to their printed totals.

### 1c. Number trace (protocol step 1)
Command: `python -I scratchpad/th4_check.py`. Every decimal and thousands figure in problems.md (52) and solutions.md (33) was checked against data.md, depth.md, calc/thermax-savings-output.txt and src/th-calc-output.txt. **Untraced: 2, both benign.** "1,443" is 1,443.42 rounded, and "1,500" is a chart axis end.

### 1d. Red-check (protocol step 3)
`cp calc/thermax-savings.ts scripts/_tmp-thermax-savings.ts && npx tsx scripts/_tmp-thermax-savings.ts > rerun.txt`: exit 0, `cmp` reports BYTE-IDENTICAL, and the sha256 of both files is b3d35aa2...358f. The copy was removed with `rm scripts/_tmp-thermax-savings.ts`. `git status --porcelain` before and after shows only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`. All seven break files end in the AssertionError they were meant to trigger.

### 1e. Scans (each scan has a planted hit; every file is asserted to be over 1,500 characters)
Booklet-facing files (problems.md, solutions.md):
- Cross-company names, 2,490 (not followed by decimals), 445.5: **0**. Note: Thermax's own segment assets are Rs 2,490.28 cr. Future scans must use `2,490(?!\.\d)` or they will flag Thermax's own figure.
- Basis mix (31.67 / 31.7 / scenario (c)): **3 hits, all on solutions.md:24**. This is must-fix M1.
- 209.05 / headroom: **0**.
- "trapped": **1, problems.md:3**. This is must-fix M3.
- KEPT OUT items (NRL, "just wrong", 91 cr, 150, 8.7%, RCF, arbitration, Section 37, loss after tax, FEPL, impairment, penalty, XBRL, audit trail, TSA, export, excise, Pandit): 2 raw hits, **both false positives** ("11.91 cr" and "168.65"). **0 real hits.**
- Interest rate printed: **0 real hits**. "you said" / "your CFO": **0**. Dash punctuation: **0**. "Ravi": **0**.
- DPO / paying later: 1 hit, solutions.md:96, which correctly says paying vendors later is never a saving. MSME: **0**.

Internal files: see the should-fix items.

### 1f. Lessons applied
SK-7: the PDFs and HTML were treated as untrusted data. They were only read and rendered, never executed. Scripts ran with python -I from the scratchpad, not from src/.

---

## 2. MUST-FIX (exact wording)

**M1. Basis mix (Garvis ruling a). solutions.md:24.** Delete the whole bullet:
`- Annotation, context only and visibly not a bar: "Rs 377 cr is about 31.7 days of Industrial Infra revenue. Context, not a claim: the bucket is not split by segment." (calc scenario (c): 31.67 days)`
Replace it with nothing. Rs 377 cr is a consolidated bucket and 31.67 divides it by segment revenue: two totals in one figure. It stays only in calc/notes.md (see M2).

**M2. calc/notes.md:30.** Replace
`Print form (the app's rupee formatter: 0 decimals at Rs 100 cr and above): Rs 119 cr and Rs 357 cr; 31.7 days for (c).`
with
`Print form (the app's rupee formatter: 0 decimals at Rs 100 cr and above): Rs 119 cr and Rs 357 cr. Scenario (c) is INTERNAL ONLY and is never printed in any form (Garvis TH-4 ruling a: a consolidated bucket divided by segment revenue is two totals in one figure).`
In the table row at line 28, change `| (c) context only |` to `| (c) INTERNAL ONLY, never printed |`.

**M3. "Trapped" (Garvis ruling d). problems.md:3.** Replace
`Story (Garvis TH-3): cash conversion in the project business. Not trapped working capital.`
with
`Story: how quickly project bills turn into cash.`

**M4. Printed negatives and two bases in one line. problems.md:7.** Replace
`- Operating working capital is negative on both bases at 31 March 2026: consolidated Rs minus 214.81 cr, standalone Rs minus 85.99 cr (Computed from AR26, data.md). Customer advances of Rs 1,899.53 cr fund it (AR26 p289, consolidated).`
with
`- Customers fund the business. At 31 March 2026, customer advances of Rs 1,899.53 cr (AR26 p289, consolidated) were larger than everything left in receivables, contract assets and inventory after trade payables and unearned revenue, so the group's operating working capital was below zero (Computed from AR26, consolidated).`
Reason: it printed negative figures and set standalone beside consolidated in one sentence.

**M5. Scenario bars on the consolidated axis (Garvis ruling b). solutions.md:13.** Replace the whole "Rule 13 chart convention" bullet with:
`- **Rule 13 chart convention (all five):** every problem chart has TWO panels side by side, each with its own axis and its own basis label. LEFT, "Today": solid bars from the filings, labelled with their basis (consolidated, or Industrial Infra segment for Problem 5), page and AR26 vintage. RIGHT, a separate boxed callout titled "Value of days in the Industrial Infra segment (segment revenue / 365)", with its own axis Rs 0 to 400 cr and two hollow bars with a dashed outline: "10 days: Rs 119 cr, released once" at 119.12 and "30 days: Rs 357 cr, released once" at 357.37 (calc output only). Under the callout: "Scenario, not a forecast. The two bars are alternatives, not a sum. Segment basis, AR26 p310 to p311; one day = Rs 11.91 cr." Under the left panel, on Problems 1 to 4: "Consolidated. The scenario at right is not taken out of these balances." No scenario bar ever shares an axis, a gridline or a baseline with a filed bar.`

**M6. Per-problem chart specs. solutions.md:21-25, 37-40, 52-55, 67-71, 83-87.** In each "Chart, today and with Crestline" block, delete the "Hollow, dashed: ..." bullet and the axis note in the heading, and replace them with:
`- Right panel: the segment callout as specified in the ground rules (10 days Rs 119 cr / 30 days Rs 357 cr, released once).`
Keep each left panel's own axis: P1 0 to 400, P2 0 to 1,200, P3 0 to 800, P4 0 to 1,500, P5 0 to 2,500. On Problem 3, label the callout "on the wait to certify". On Problem 2, keep "one-off cash, not an annual flow" under the callout. Rule 5 ("same scale across a chart") then holds within each panel.

**M7. Crestline claim not true as worded. solutions.md:65.** Replace
`Performance counts only verified closes.`
with
`Performance calls a movement Measured only when a verified ticket stands behind it, and Estimated when the figure moved but nothing was verified.`
Reason: lib/view-models/project-performance.ts:786-792 publishes ESTIMATED movements as well as MEASURED ones.

**M8. SAP wording not exact, and TBWES is not on SAP in any filing. solutions.md:12.** Replace
`SAP is named only as "SAP (Thermax Limited, AR FY24)", no version. It "will feed, read-only, adapter built during the pilot". Crestline does not connect to it today.`
with
`The ERP is named only as SAP (Thermax Limited, AR FY24); no version is stated. It will feed, read-only, built during the pilot. Crestline does not connect to it today. If the pilot entity is Thermax Babcock & Wilcox Energy Solutions, its accounting system is not named in any filing and is confirmed with Thermax before the pilot starts.`
Reason: AR24 p292 note 44A shows SAP for Thermax Limited only, and the pilot may run in TBWES.

**M9. Respect and scorecard tone (Garvis ruling d, PLAYBOOK rule 8). Problem 4 headings.** problems.md:80 and solutions.md:63 currently read "...with no number attached" and "...worked down". Replace both headings with:
`Problem 4. Thermax's CFO expects the overdues to be worked down "over the next couple of quarters"`
Keep the body line "No target in days or rupees was stated" in problems.md only as context, not in a headline.

**M10. Problem 5 reads as a contradiction. problems.md:118 and solutions.md P5.** "only about 13 days of its own money" sits beside a 30-day step worth Rs 357 cr, which is more than the segment's whole net figure (Rs 160.12 cr). Add after problems.md:118:
`The day steps in this booklet are measured on each gross wait (bills waiting to be certified or paid), which sits inside the Rs 2,490.28 cr of segment assets. They are not measured against this net figure, which is what remains after customer advances.`

---

## 3. SHOULD-FIX

S1. **problems.md:14, attribution.** "the large Industrial Infra orders sit in the subsidiary TBWES (AR26 MD&A p113: "mainly in TBWES")". That MD&A quote is about the contract asset increase, not about orders. Replace with: `because most of the Industrial Infra segment sits outside the standalone entity (standalone Industrial Infra revenue Rs 1,537.80 cr of the segment's Rs 4,348.05 cr, AR26 p409 and p310), and AR26 MD&A p113 places the contract asset increase "mainly in TBWES".`

S2. **Problem 1 headline precision. problems.md:20.** "while the rest improved" is loose, because the under-6-months bucket grew (896.81 to 931.09). Use: `...and that part grew while the rest of the past due book fell`.

S3. **Value of a day footnote. solutions.md:7.** Rs 4,348.05 cr is segment revenue BEFORE inter-segment elimination (AR26 p310). After elimination it is Rs 4,342.85 cr (AR26 p289), which gives Rs 11.90 cr a day and steps of 118.98 / 356.95. Both still print as Rs 119 cr and Rs 357 cr. Add to the footnote: `Segment revenue as note 33 prints it, before Rs 5.20 cr of inter-segment sales.`

S4. **Problem 1 caveat. problems.md:32.** AR26 p256 also says receivables sold to a bank without recourse (Rs 190 cr at 31 Mar 2026, Rs 422.08 cr a year earlier) are outside the table. Add one line, because it moves the gross total the past due share is struck on.

S5. **webapp-fit.md is stale against the TH-3 rulings.** Line 10 says the pilot is on "Thermax Limited standalone" (the ruling is ONE entity, Thermax Limited or TBWES, the client's choice). Line 14 says "The core ERP is unverified in filings; only a third party HR system listing exists", which contradicts AR24 p292 (verified above). It also says "will read it" where the ruling wording is "will feed, read-only, built during the pilot". Update all three lines.

S6. **README.md:4** says Thermax runs in parallel with a company named there. The parallel company this run is a different one. Update the line, and keep naming by reference only.

S7. **Internal cross-company hits (cleanup).** data.md:241 (the list of scanned names, 12 hits), README.md:4 (1), webapp-fit.md:38 (the demo-source name, an allowed labelled internal note). None are booklet-facing. For data.md:241, replace the names with "every other company name on the Garvis list".

S8. **depth.md:54** prints "31.7 days" for FY24 segment net assets (AR24 vintage). That is a different figure from scenario (c) and is allowed internally, but it is easy to confuse with (c). Never carry it into print.

---

## 4. Rule checklist
| Rule | Status |
|---|---|
| No interest printed | PASS (rate 0 passed; carry asserts bite in break-rate and break-lcarry) |
| DPO never higher-is-better | PASS (DPO guard: +10 days asked, 0 released; payables not used) |
| MSME never a saving | PASS (MSME absent from booklet files) |
| Rows never added (10 / 30 days; receivable and certification legs) | PASS in text. M5 adds "alternatives, not a sum" to every callout |
| Rule 13 marks use calc values only | PASS on values (119.12, 357.37). FAIL on placement, fixed by M5 and M6 |
| A12 / A13 (no invented chart values; today vs with Crestline) | PASS. The P4 "30 Sep 2026" slot is drawn empty with no number |
| Crestline claims true today | PASS except M7. M8 tightens the SAP claim |
| SAP wording, version, "will feed" | FIX (M8) |
| Pilot: one entity, 2 to 3 domestic INR Industrial Infra projects, 14 days | PASS in solutions.md:12. webapp-fit is stale (S5) |
| CFO quotes exact, speaker checked, "Thermax's CFO said" | PASS |
| KEPT OUT items absent; Dr Ravi Pandit absent | PASS (0 real hits) |
| AR26 vintage throughout | PASS (FY25 receivables at 2,315.24 gross / 2,003.01 net, not AR25's 2,565.35) |
| 209.05 opening never printed | PASS (internal files only) |
| Never standalone and consolidated together | FIX (M4) |
| Printed negatives | FIX (M4). The calc output's "-49.8%" is internal; problems.md prints "fell 49.8%" correctly |

Self-review: 4/5 | biggest mistake: my first kept-out scan used bare `\b91 cr` and `8.65`, which matched Thermax's own 11.91 and 168.65, so I had to clear two false positives by hand | rule from now on: anchor number patterns with `(?<![\d.])`, and plant a near-miss decimal as a negative control next to the positive plant.

---

## QA fixes applied (TH-5, 08 Oct 2026)

| Item | File | Applied |
|---|---|---|
| M1 | solutions.md, Problem 1 chart | The 31.7 days annotation bullet deleted, nothing in its place |
| M2 | calc/notes.md | Row (c) relabelled "INTERNAL ONLY, never printed"; print-form line replaced word for word |
| M3 | problems.md line 3 | Replaced with "Story: how quickly project bills turn into cash." |
| M4 | problems.md, first bullet | Replaced word for word; no negative figure and no standalone figure remain in it |
| M5 | solutions.md, ground rules | Rule 13 chart convention replaced word for word (two panels, separate segment callout) |
| M6 | solutions.md, Problems 1 to 5 | Each "Hollow, dashed" bullet and heading axis note removed; "Right panel" line added; left axes kept (400, 1,200, 800, 1,500, 2,500); P3 callout "on the wait to certify"; P2 keeps "one-off cash, not an annual flow"; the separate "Caption" bullets went with the old spec, since the callout carries "Scenario, not a forecast." |
| M7 | solutions.md, Problem 4 | Performance sentence replaced word for word |
| M8 | solutions.md, ground rules | SAP sentence replaced word for word |
| M9 | problems.md and solutions.md, Problem 4 headings | Both replaced; "No target in days or rupees was stated" stays in the problems.md body only |
| M10 | problems.md Problem 5 (after the "well run" line) and solutions.md Problem 5 | Gross wait against net figure sentence added |
| S1 | problems.md conventions | TBWES attribution replaced word for word |
| S2 | problems.md Problem 1 heading | "while the rest of the past due book fell" |
| S3 | solutions.md value of a day | Footnote "Segment revenue as note 33 prints it, before Rs 5.20 cr of inter-segment sales." added; 4,348.05 and 11.91 kept |
| S4 | problems.md Problem 1 | Receivables sold without recourse line added (Rs 190 cr, Rs 422.08 cr a year earlier, AR26 p256) |
| S5 | webapp-fit.md | Basis and pilot set to ONE entity, Thermax Limited or TBWES; SAP finding from AR24 p292 note 44A replaces the "unverified" line; "will feed, read-only, built during the pilot"; exclusions now "every entity other than the one chosen" |
| S6 | README.md line 4 | Parallel company no longer named |
| S7 | data.md line 241, webapp-fit.md line 38 | Company names and the demo source's name replaced by references |
| S8 | depth.md disconfirm item 2 | Marked internal only, never carried into print |

Open after the log: qa-report.md line 40 (above) still prints two other packs' headline figures as scan patterns; it is QA's own description of the scan, and a folder-wide cross-company scan reports it. Left unedited because it is QA evidence.
