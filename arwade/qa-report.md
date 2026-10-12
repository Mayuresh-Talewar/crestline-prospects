# ARWADE QA report (AR-4, 8 Oct 2026)

Scope: arwade/ and _shared/ only. Files checked: README.md, data.md, fact-check.md, problems.md, solutions.md, calc/arwade-savings.ts, calc/arwade-savings.output.txt (webapp-fit.md and depth.md were swept by the scans only).
Method: the qa-reviewer "Financial booklet verification protocol". Page text was split on form feeds and every key figure located by script. Page images were rendered with pymupdf and opened for 2023 PR pp.1-3 and 2025 PR pp.1, 3 and 5. All arithmetic was done by script. Scripts are in the session scratchpad (`find.py`, `pg.py`, `ar_recalc.py`, `trace.py`).

## VERDICT: PASS WITH FIXES

All the figures are right. Every number traces to a source page, the calc rows are correct, and nothing is missing or contaminated. Five wording problems must be fixed before the pack: one same-basis breach that turns the reader's conclusion upside down, one misquote, one invented quote, one chart that mixes two bases, and one name.

## Must-fix (exact replacement wording)

**1. P1 span mismatch (problems.md line 10, read against line 8). Not acceptable as worded.**
Line 8 gives revenue as 3.99x over FY22-FY25. Line 10 gives limits as 2.49x over 17 May 2023 to 28 Jul 2025. Side by side, the reader will conclude the bank lines lagged the growth (4x against 2.5x). On aligned spans the opposite is true. Each rating follows a financial-year close: the May 2023 rationale's table ends 31.03.2023 (2023 PR p.4) and the July 2025 table ends 31-03-2025 (2025 PR p.5). Revenue FY23 to FY25 is 261.12 / 112.80 = **2.31x** (script). Limits over the same window are **2.49x**. The limits grew slightly faster than revenue.
Replace line 10 with:
> - Rated bank limits: Rs 61 Cr (17 May 2023: 11 fund-based + 50 bank guarantee) to Rs 81 Cr (3 Jul 2024: 11 + 70) to Rs 152 Cr (28 Jul 2025: 30 fund-based + 122 bank guarantee) (Infomerics, p.1 of each). Between the May 2023 and July 2025 ratings, revenue rose 2.31x (FY23 Rs 112.80 Cr to FY25 Rs 261.12 Cr) and rated limits rose 2.49x; bank guarantees are 80.3% of the Rs 152 Cr (computed).

If aligned spans are not wanted, use the alternative (two figures, each with its own span, no ratio between them):
> - Revenue: Rs 65.45 Cr in FY22 to Rs 261.12 Cr in FY25. Rated bank limits: Rs 61 Cr at 17 May 2023 to Rs 152 Cr at 28 Jul 2025, of which Rs 122 Cr is bank guarantee.

In either case, delete "Limits 2.49x, BG 2.44x, fund-based 2.73x over that span" wherever it sits next to 3.99x. The headline "Revenue grew about 4x in three years, and the bank lines that carry it are mostly guarantees" can stay: on its own it carries one span and does not compare the two.

**2. Misquoted trigger (problems.md line 12).** The quotation marks claim the same words every year since 2023. The wording is not the same. 2023 PR p.2 reads: "Stretch in working capital cycle leading to deterioration in liquidity position." 2024 PR p.2 reads: "Elongation in the operating cycle adversely impacting the liquidity position". 2025 PR p.2 reads: "Elongation in the operating cycle impacting liquidity."
Replace with:
> - Agency downward trigger, every year since 2023: "Stretch in working capital cycle leading to deterioration in liquidity position" (17 May 2023 p.2); "Elongation in the operating cycle adversely impacting the liquidity position" (3 Jul 2024 p.2); "Elongation in the operating cycle impacting liquidity" (28 Jul 2025 p.2).

**3. Invented quote (problems.md line 8).** `FY25 growth "about 61%".` puts quotation marks around our own wording. The source reads "~61.61%" (2025 PR p.2) and the computed figure is 61.16%.
Replace with:
> FY25 growth about 61% (computed 61.16%; the rationale prints ~61.61%, 28 Jul 2025 p.2).

**4. P1 chart mixes two bases (solutions.md line 14).** It sets annual revenue (a flow, FY22-FY25) beside the fund-based limit of 30, a single limit dated 28 Jul 2025, on one bar axis. That pairs figures computed on different totals and invites a revenue/limit ratio. It also leaves out the Rs 122 Cr of guarantees that the problem's own headline is about.
Replace with:
> - **With Crestline chart:** two panels on the same Rs Cr scale. Left: revenue bars FY22-FY25 (65.45 / 112.80 / 162.03 / 261.12). Right: rated limits at each rating date, stacked fund-based / bank guarantee: 17 May 2023 (11 / 50), 3 Jul 2024 (11 / 70), 28 Jul 2025 (30 / 122). No ratio drawn between the panels. Beside FY25 revenue, a dashed hollow mark: "10 days faster milestone-to-cash: Rs 7.15 Cr; 30 days: Rs 21.46 Cr. Cash, one-off. Scenario, not a forecast." No interest label.

**5. Reader name (README.md line 3, edition line).** "Nitin Subhash Arwade" carries a middle name that no primary source prints (fact-check #13; the website reads "Nitin Arwade"). Rule 10 applies.
Replace with:
> ONE booklet, editions: Nitin Arwade, Chairman & Managing Director (arwadeinfra.in/chairman-managing-director/) + a finance head if one is public (else a second director, verify).

## Should-fix

1. problems.md line 18: "gross current assets about 271 to about 185 days". The source has a tilde on 185 only (2023 PR p.3). Use "271 to about 185 days".
2. problems.md line 10: add page cites. The limits are on p.1 of each rationale (image-checked for 2023 and 2025, text-checked for 2024).
3. problems.md line 10: "BG ... 0.47x FY25 revenue" divides a limit dated 28 Jul 2025 by a flow for the year to 31 Mar 2025. Keep it internal. If it is printed, say "Rs 122 Cr guarantee limit (28 Jul 2025) against FY25 revenue of Rs 261.12 Cr" with no ratio.
4. problems.md line 11: the three utilisation figures are not one series. 2023 and 2025 are "average fund based utilisation"; 2024 is "average cash credit utilisation" only (2024 PR p.4). Never draw them as one line. If they are charted, label 2024 "cash credit only".
5. problems.md line 21 and solutions.md heading: "15 months old" is right today (25 Jun 2025 to 8 Oct 2026 = 15.4 months, by script), but it ages with the print date. Use "the last published book is dated 25 Jun 2025".
6. solutions.md line 26, chart label: "53% Talegaon Industrial Parks". Use the full name and role, "53% Talegaon Industrial Parks Private Limited (client order, book at 21 Apr 2023)", so it cannot be read as the demo project. Do not link the Rs 135.29 Cr order to Talegaon. 53% of 255.31 is 135.31, which is close, but the rationale never says the two are the same order.
7. solutions.md lines 5 and 35 say "inventory days only if stock issues are recorded" and "else inventory days read NA". The README ruling says never claim inventory days. Drop both from any booklet-facing text.
8. solutions.md lines 18 and 20 print the chart label as "not published". The convention is NOT PUBLISHED, so use one casing in the booklet.
9. webapp-fit.md line 35 still says "about Rs 263 Cr, unverified", a figure fact-check #1 marks Wrong. It should read 261.12. The same file carries Grey demo figures (27,184 events, 27 min import, retention 1.21-1.43x), labelled "Grey" and internal. Keep webapp-fit.md out of the pack entirely.
10. The calc's `leversFor(b).length === 1` assert could not be broken on its own. Giving the basis a dpo rate and days produced no second lever, and adding a vendor term trips the `toTerms` assert first. It is not wrong, but it is untested. Optional: move it above the `toTerms` assert so it can be red-checked independently.
11. FYI, never print: the 2025 PR p.5 says "Status of non-cooperation with previous CRA: Nil", while CARE has rated the company INC (15 Apr 2025). Do not print or contradict either. Both are already kept out of the booklet text.

## Check 1: figures against sources (verdict per headline figure)

Entity on all three rationales: "Analytical Approach: Standalone" (p.4 each). The 2025 table on p.5 is headed "Financials (Standalone)" (image-checked). Untraced-number scan (`trace.py`): problems.md has 60 numbers and solutions.md has 32, with 0 untraced (only "2026", the doc date).

| Figure | Source quote (doc, page) | Verdict |
|---|---|---|
| FY22 65.45, FY23 112.80 | "Topline of the company increased to Rs.112.80 crore in FY23 from Rs.65.45 crore in FY22" (17 May 2023 p.2, image) | CORRECT |
| FY24 162.03 | "~43.64% to Rs. 162.03cr in FY24" (3 Jul 2024 p.2; table p.5) | CORRECT |
| FY25 261.12, PAT 18.96 | Table "Total Operating Income ... 261.12", "PAT ... 18.96", 31-03-2025 Audited (28 Jul 2025 p.5, image) | CORRECT |
| FY25 growth about 61% | "~61.61% to Rs. 261.12cr in FY25" (2025 p.2); computed 61.16% | NEEDS CAVEAT (must-fix 3) |
| 3.99x | 261.12 / 65.45 = 3.99 (script) | CORRECT; span issue (must-fix 1) |
| Limits 61 / 81 / 152 | "61.00 (INR Sixty one crore only)" (2023 p.1, image); "81.00 Total" (2024 p.1); "152.00 (INR one hundred fifty-two crore only)", "30.00 (enhanced from Rs.11.00 crore)", "122.00 (enhanced from Rs. 70.00 crore)" (2025 p.1, image) | CORRECT; NEEDS CAVEAT (must-fix 1) |
| 2.49x / 2.44x / 2.73x / 80.3% / 0.47x | script: 152/61, 122/50, 30/11, 122/152, 122/261.12 | arithmetic CORRECT; 0.47x mixed basis (should-fix 3) |
| Utilisation 61% / 70% / 39.46% | "past twelve months ended March, 2023 remained moderate at ~61%" (2023 p.4); "average cash credit utilisation ... ended in March 2024 remains at ~70%" (2024 p.4); "past twelve months ended May 2025 remained moderate at ~39.46%" (2025 p.4) | CORRECT (should-fix 4) |
| Trigger wording | quoted in must-fix 2 | WRONG as quoted |
| 151 / 72 days, 83 / 66, 271 / ~185, 0.31 / 0.27 | "working capital intensity remained at 0.27 times in FY23 though improved from 0.31 times in FY22 with the decrease in average collection period to 72 days in FY23 from 151 days in FY22 and decrease in creditor days to 66 days in FY23 from 83 days in FY22 ... ~185 days in FY23 though improved from 271 days in FY22" (2023 p.3, image) | CORRECT (should-fix 1) |
| 79 days shorter | 151 - 72 (script) | CORRECT |
| Receivable weakness dropped in 2024/2025 | "receivable" occurs 0 times in the 2024 and 2025 text (grep) | CORRECT |
| Order book 255.31, 2.26x, 135.29, 9 months | "as on April 21, 2023 stood at Rs.255.31 crore ... 2.26x of the turnover of FY23 ... Rs.135.29 crore to be executed with 9 months period" (2023 p.2, image) | CORRECT |
| 53% Talegaon, ~11% Dhootpapeshwar, top 5 ~60% | "comprises of 53% share from single order of Talegaon Industrial Parks Private Limited. Further Shree Dhootpapeshwar Limited comprises of ~11%"; "top 5 clients constituted nearly 60% of the turnover" (2023 p.3, image) | CORRECT |
| 330.21, 2.04x | "as on April 30, 2024 stood at Rs.330.21 crore" (2024 p.2); "2.04x of the turnover of FY24" (p.3) | CORRECT |
| 337.90, 1.29x, 12 months | "as on June 25, 2025, stood at Rs.337.90 crore which is expected to be executed within a period of 12 months ... 1.29 x of the turnover of FY25" (2025 p.3, image) | CORRECT |
| Moderate concentration quote | "moderate client concentration risk, with the majority of revenues and order book contributed by few clients" (2025 p.3, image) | CORRECT |
| "new contracts and tenders" | "on account of increase in new contract and tenders" (2025 p.2) | CORRECT (paraphrase, not in quotation marks) |
| 0.7154 / 7.15 / 21.46 | 261.12/365 = 0.7154; x10 = 7.15; x30 = 21.46 (script and calc) | CORRECT |
| 2.74 / 8.22 per Rs 100 Cr | 100/365 x10 = 2.74, x30 = 8.22 (script and calc) | CORRECT, labelled illustrative |

## Check 2: P1 span

Covered in must-fix 1. Not acceptable as worded. On aligned spans the implied conclusion reverses: revenue 2.31x against limits 2.49x.

## Check 3: calc red-check (app repo, `scripts/_tmp-arwade-qa.ts`)

- Unbroken copy: `npx tsx` exits 0. Output is **byte-identical** to calc/arwade-savings.output.txt (`cmp`), and identical again after every mutation round.
- Each assert broken once, each fails with exit 1:
  - negative release (`dso: placeholder + days`): "no negative release"
  - nonzero interest (`RATE_PCT = 9`): "no interest without a disclosed rate"
  - lever carry (`financingRatePct: 9` in priceLevers): "lever action-collection negative or carries interest"
  - priceLevers mismatch (`r.cash + 0.01`): "lever 0 cash mismatch"
  - release differs between stand-in starts (rate scaled by placeholder): "release must not depend on the placeholder"
  - published terms (`payment: 30`): "no published terms, so no terms scenario"
  - leversFor count: not independently breakable (should-fix 10)
- Temp file deleted. `git status --porcelain` afterwards shows only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`. `git diff --stat` is empty. No DB was touched and nothing was committed.

## Check 4: Talegaon and the Grey demo

- Grey demo figures (45.9, 13.7, 2.97, 1.22, 55.4, Bhilai, Wakad, Chakan, PRJ-, and so on) do not appear in problems.md, solutions.md or the calc. The only Grey numbers in the folder are in webapp-fit.md line 35 and the line-14 retention note. Both are labelled "Grey" and internal (should-fix 9).
- Talegaon Industrial Parks Private Limited is Arwade's client in the source: "53% share from single order of Talegaon Industrial Parks Private Limited" (17 May 2023 p.3, image). problems.md line 23 prints the full legal name. The solutions chart label needs it too (should-fix 6). The isolation notes (problems.md line 27, solutions.md line 29) are internal and must not go to the pack.

## Check 5: sensitive items

CARE BB- INC, Acuite B+ INC, the corporate guarantee (5.09), net worth (60.66 / 58.21) and gearing: none appear in booklet-facing text. The only hits are the "Not printed anywhere" note in problems.md line 3 and the README/data/fact-check internals. "Bank guarantee" hits are the BG facility, not the corporate guarantee. **PASS.**

## Check 6: product rules

- No interest figure is printed. The interest column reads "not printed (no disclosed rate)". PASS.
- No "paying vendors later" saving, and no DPO or vendor-credit lever. P4 frames vendor timing as early = cash spent, late = risk. PASS.
- Rows overlap and are never added: stated in the solutions.md header, line 21 and the footer. No total appears anywhere. PASS.
- Gaps: every gap in problems.md reads NOT PUBLISHED (5 hits). Solutions uses lowercase in two chart labels (should-fix 8). PASS.
- ERP: "it does not connect to Arwade's ERP today (the adapter is built during the pilot)", and the ERP platform is NOT PUBLISHED. No live or Tally claim appears in booklet text. PASS. Inventory days: should-fix 7.

## Check 7: cross-company scan of arwade/

Pattern: Capacite|KEC|Afcons|Vascon|OVAL|GHV|Ashoka|Man Infra|MICL|Kalpataru|Grey|2,490|2490|445.5|152 days. Run over all .md files and calc/ (plus the src text and html for other company names).
- Other companies: **0 hits.**
- 2,490 / 445.5: **0 hits.**
- 152: only Arwade's own Rs 152 Cr rated limit (problems.md line 10, calc lines 21 and 104), never as days and never tied to another company. Legitimate.
- Grey: problems.md line 27 and solutions.md line 29 (isolation notes), webapp-fit.md lines 14, 34 and 35 (product-fit notes, labelled). None is presented as an Arwade figure.
- _shared/: no file mentions Arwade. No company data was stored there by this ticket.

Lessons applied: verification-before-completion (byte compare, repo state proven); "trace every number" (scripted, 0 untraced); "never edit outside the ticket" (report only).

## QA fixes applied (AR-5, 8 Oct 2026)

- Must-fix 1: problems.md P1 now uses the ALIGNED-SPANS wording (FY23 to FY25 revenue 2.31x against rated limits 2.49x, each rating following its year-end close). "Limits 2.49x, BG 2.44x, fund-based 2.73x" next to 3.99x deleted. P1 headline and framing rewritten: the banks have kept pace so far; the question is whether the view of where the cash sits grows with the business. No "lagging limits" story. solutions.md P1 heading changed to match.
- Must-fix 2: trigger line replaced with the three dated quotes, verbatim.
- Must-fix 3: invented quote removed; "about 61% (computed 61.16%; the rationale prints ~61.61%, 28 Jul 2025 p.2)".
- Must-fix 4: solutions.md P1 chart replaced with the two-panel spec (revenue bars; limits stacked fund-based / bank guarantee at each rating date; no ratio; dashed hollow mark beside FY25).
- Must-fix 5: README reader line now "Nitin Arwade, Chairman & Managing Director (arwadeinfra.in/chairman-managing-director/)".
- Should-fix 1 (no tilde on 271), 2 (p.1 cites), 3 (0.47x kept internal, marked never printed), 4 (utilisation labelled as three separate measures, 2024 "cash credit only"), 5 ("the last published book is dated 25 Jun 2025" in both P3 headings), 6 (full Talegaon name and role; Rs 135.29 Cr never linked to it), 7 (inventory-days lines dropped from solutions.md), 8 (NOT PUBLISHED casing in chart labels): applied.
- Not applied, not booklet-facing: should-fix 9 (webapp-fit.md stays out of the pack entirely; the pack carries none of its content), 10 (calc assert order, app repo out of scope), 11 (FYI, nothing printed).
