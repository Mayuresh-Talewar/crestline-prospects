# KALPATARU (KPIL) · KP-6 review gate on slots-unified.md

Reviewed 8 Oct 2026. Scope: kalpataru/ and _shared/ (read-only). No other company folder opened. Protocol: qa-reviewer "Financial booklet verification protocol", PLAYBOOK rules 1 to 13, TEMPLATE-SLOTS, FIXED-PAGES, MASTER-PROMPT-TEMPLATE A1 to A14.

## Verdict: GO, with 4 must-fixes (wording and sourcing, no figure is wrong)

Every printed figure traces to a standalone page of the company's own filings or to the calculator, and every derived figure recomputes exactly. The calculator re-runs byte-identical. The 30-day interest reads 56.46 to 141.15 everywhere; 76.31 and 190.77 appear nowhere. The four must-fixes are one misleading headline, one quote framed as a cause it does not state, and two sourcing gaps.

## 1. Calculation gate

**Page images opened** (rendered from the PDFs with pymupdf, scratchpad `kp6_find.py`; entity header read on each):
- AR FY26 p.280 Standalone Balance Sheet: TR 66.27 + 7,839.41; payables 96.72 + 432.39 + 6,021.00; borrowings 565.62 + 2,274.32 (FY25 1,282.68 + 2,109.64); signatures "Managing Director & CEO" (Manish Mohnot), "Chief Financial Officer" (Ram Patodia).
- AR FY26 p.281 Standalone P&L: revenue 23,210.06 / 18,887.91; finance cost 368.03 / 380.65; PBT before exceptional 1,499.28; depreciation 394.83; other income 233.46.
- AR FY26 p.284 Standalone cash flow: 764.46 / 837.07; trade and other receivables (2,066.47).
- AR FY26 p.303 Note 11: contract assets 7,068.23 + 15.38; Note 11.4 wording.
- AR FY26 p.308 Note 18(ii) and 18.1: working-capital facilities 1,411.51, "interest in range of 4% to 10%".
- AR FY26 p.334 Note 42 ageing by due date (FY26 and FY25 columns); AR FY25 p.284 Note 42 (FY24 column).
- AR FY26 p.337 Note 44 payables ageing: MSME 391.37 not due, past due 39.44 + 0.80 + 0.34 + 0.44; FY25 25.78 + 1.43 + 0.88 + 0.24.
- AR FY26 p.342 Note 54 (MSME 432.39, interest 1.28 / 7.47) and p.343 Note 57 (62,199, standalone).
- AR FY26 p.131 SAP S/4 HANA wording.
- IP Q4 FY26 slide 21 "(Standalone)" NWC 121/96/99/94/90; slide 12 gross debt 2,470, net debt 749; slide 10 core EBITDA 1,587 / 2,029; slide 4 order wins 26,400 (consolidated block).
- IP Q1 FY27 p.9 standalone block: 106 / 90 / 94; gross debt 2,105; net debt 752.
- Results filing 11 Aug 2026 p.15 annexure (net worth 8,214.54 = standalone equity): debtors turnover 120 days FY26.
- Transcripts, speaker label on the image: Q4 FY26 p.2 (Manish Mohnot: 20% to 25%, under 100 days, 26,000 to 28,000), p.3 (continuation of his remarks: 1.6%, "collection delays within the Water business"), p.5 (15% plus, above 30,000), p.10 (1,600-odd), p.11 ("reached that level ..."); Q4 FY25 p.5 (finance costs below 2%, his opening remarks continue from p.2).
- Registered office AR FY26 text: "Gandhinagar – 382 028", printed with spaces as ruled.

**Recompute** (`python -I scratchpad/kp6_recalc.py`): 0 missing prior-year inputs in the AR FY23 / FY25 text layers (planted 9,876.54 not found, as expected). All printed derived figures match: 255.1 / 252.8 / 260.9 / 235.7; 63.59 a day; 111.4 / 124.3; 635.89 (25.44 to 63.59); 1,907.68 (56.46 to 141.15 on the 1,411.51 cap); 254.36 (10.17 to 25.44); 225.7 / 205.7; ageing 767.91 / 961.06 / 1,311.12 and 13.5 / 12.9 / 16.1%; 675.23 (9.0%); 3.2 points; core EBITDA 1,161.54 / 1,365.25 / 1,586.99 / 2,028.68 and 0.48 / 0.52 / 0.53 / 0.38; 1,400.35 (0.69); CFO -8.7%, core EBITDA 27.8%, growth 22.9%; MSME shares 3.2 / 4.2 / 4.3 / 6.6%, 62.2%, 41.02, 28.33, 391.37; borrowings 2,839.94 / 3,392.32; finance cost 2.02% / 1.59%.
One note, no action: the FY24 ageing total is 5,701.22 by components and 5,701.23 by the two printed column totals (source rounding). The total is not printed; the share is 13.5% either way.

**Calculator re-run** from a scratch copy in the app repo (`scripts/_tmp-kp6-savings.ts`, `npx tsx`, deleted by name): exit 0, output `cmp` BYTE-IDENTICAL to `calc/kalpataru-savings.output.txt`. `git status --porcelain` identical before and after (the two pre-existing untracked docs entries only).

**Number trace** (`python -I scratchpad/kp6_scan.py slots`, printed region Sender to Checks): 0 untraced figures. The 5 listed tokens are the fixed 02 / 03 / 05 step numbers and the Crestline phone number, all FIXED-PAGES copy. Planted 8,765.43 caught.

## 2. QA must-fixes landed

All 12 KP-4 must-fixes and 9 should-fixes are logged as applied, and the booklet pack agrees: row (b) interest is "₹56.46 Cr to ₹141.15 Cr" on pp.2, 5, 10, 12 with "counted on ₹1,411.51 Cr"; 0 hits for 76.31 or 190.77; P3 span, P4 framing (12 days a year earlier, p.6 lead), P5 inference (28.33 to 41.02, p.9) and the share label ("including unbilled", p.9 footnote) all carried into print.

## 3. Rule checks

| Check | Result |
|---|---|
| Rule 13 / A14: with-Crestline mark on every problem chart | PASS. p4 dot grid, p5, p6, p8, p9 (a) and (b), p12 bars; each from the calc output, dashed and hollow, "Scenario, not a forecast". p13 is history only and says so |
| A12, no invented stage days | PASS. p8 stages carry ownership tags only |
| A13, no signed numbers | PASS, 0 hits (phone excluded) |
| Rows never added | PASS. p12 table title and Edition 2 letter say so; no total printed |
| FY26 target printed as met | PASS. p3, p6, p7, p12 |
| Problem 1 days never beside company NWC days | PASS by page: P1 days on pp.4, 5, 10 only; NWC days on pp.2, 3, 6, 7, 12, 13; 0 overlap |
| Standalone labels | PASS on every figure page; p2 footnote lacks the tag (fixed under must-fix 3) |
| Water as context only | PASS. p5 context line with [MGMT], footnote "a different basis from the chart", never a calc input. Framing fixed under must-fix 2 |
| No Q1 FY27 quotes | PASS. Q1 FY27 figures come from the IP and results filing only |
| India Ratings AA+ | PASS. Once (p13), bare fact, no rationale |
| Sensitive exclusions | PASS. Fasttel, KEPL, WEPL, GST order, subsidiary exposure, 41.6% PSU, Grey: 0 hits. One hit "International subsidiaries ... are outside the pilot" (p14 scope card) is a scope limit, not an exposure figure |
| Crestline claims true today | PASS. SAP: "It will feed Crestline, read-only, through an adapter built during the pilot"; every "once connected"; no ISO, hosting or encryption claim; pilot "two to three domestic INR projects in one segment", standalone, 14 days read-only |
| p11 step 02 | PASS. "02 Owner told: ..."; "chased by severity" 0 hits |
| p15 interest clause with the cap | PASS. "capped at the ₹1,411.51 Cr of those facilities drawn at 31 March 2026, the borrowing that range applies to" |
| Editions | PASS. Manish Mohnot, Managing Director & CEO; Ram Patodia, Chief Financial Officer, as on AR FY26 p.280. Both letters neutral; "you said" 0 hits; body quotes credited by name and title |
| Dashes, AI tells, placeholders, cross-company | 0 each, planted hit caught in every scan |

## 4. Garvis rulings on KP-5 open questions, applied

- Address with spaces for dashes, PIN "382 028" as the AR prints it: as in the reader table. No change.
- p14 label: kept.
- Fallbacks (no client names, no peers, terms not published, two borrowing points): all within TEMPLATE-SLOTS fallbacks. No change.
- Logo: one attempt made. The kalpataruprojects.com homepage HTML (fetched 8 Oct 2026) exposes one logo only, `KPIL-Logo-294-79_294_79.webp`, the same 294 x 79 file already held; no SVG or larger image is referenced. Keep `assets/kpil-logo.png`. **Request a high-res logo** from the company or the client.

## 5. Must-fix (exact replacements)

**M1. p12 headline line 2 misstates the position.** At 94 days the FY26 target of "under 100" is still held, so "Holding it is worth ₹254.36 Cr" says the target is at stake when it is not; the ₹254.36 Cr is the four days back to 90.
Headline table row 12, replace `"Holding it is worth ₹254.36 Cr."` with `"Back to 90 days is worth ₹254.36 Cr."`

**M2. p5 context line frames a quote as a cause it does not state.** On p.3 the sentence is "We managed to achieve this optimal leverage levels and cash position despite collection delays within the Water business." It names a delay, not the cause of the 235.7 days.
Replace: `"Manish Mohnot, Managing Director & CEO, named the cause on 15 May 2026: ‘collection delays within the Water business’. He put the Water receivable at ‘closer to INR1,600-odd crores’."`
With: `"On 15 May 2026 Manish Mohnot, Managing Director & CEO, spoke of ‘collection delays within the Water business’ and put the Water receivable at ‘closer to INR1,600-odd crores’."`

**M3. p2 footnote does not source Edition 2's ₹14,989.29 Cr, carries no standalone tag, and prints the footing line twice** (once as [FOOTING], once as the letter footing line).
Replace the p2 footnote with: `"Revenue per day: FY26 revenue ₹23,210.06 Cr ÷ 365, Annual Report FY26 p.281. Receivables and contract assets: Annual Report FY26 p.280 and Note 11 p.303. Receivables past due: Annual Report FY26 Note 42 p.334, filed 22 Jun 2026. Working-capital days: the company's own figure, standalone, Investor presentation Q4 FY26 slide 21 (filed 14 May 2026) and Q1 FY27 p.9 (filed 11 Aug 2026). [INTEREST] [SCENARIO] [STANDALONE]"`

**M4. The 19 May 2025 call is printed without a filing date** (PLAYBOOK: every printed figure carries its document and filing date). The transcript was filed on NSE on 23 May 2025 (src/ann.txt line 195).
- Documents list: `"Earnings call of 19 May 2025"` to `"Earnings call of 19 May 2025, transcript filed 23 May 2025"`.
- p3 footnote: `call of 19 May 2025, p.5)` to `call of 19 May 2025, transcript filed 23 May 2025, p.5)`.
- p15 sources: `and 19 May 2025.` to `and 19 May 2025 (transcript filed 23 May 2025).`

## 6. Should-fix (booklet-facing, applied in Phase B)

**S1. p3 lead.** Row iv was set on 19 May 2025, not listed on 15 May 2026. Replace the lead with: `"On 15 May 2026 Manish Mohnot, Managing Director & CEO, listed the targets Kalpataru had set for FY26; the fourth row was set a year earlier, on 19 May 2025. The annual report and results show how each one closed."`
**S2. p15 sources.** The company's working-capital days also print on p.3. Replace `working-capital days on pages 2, 6, 7, 12 and 13` with `working-capital days on pages 2, 3, 6, 7, 12 and 13`.
**S3. p8 footnote.** `(Investor presentation Q4 FY26 p.10, filed 14 May 2026)` to `(Investor presentation Q4 FY26 slide 10, filed 14 May 2026)`, matching the slide numbering on pp.3, 6, 15.
**S4. Internal note in the pasted region.** "Note on page 5 line 2: ..." sits inside the region pasted into the prompt. Mark it internal and keep it out of the prompt.

## 7. Still open (client or Garvis, not fixable here)

1. High-res Kalpataru logo (only the 294 x 79 webp is published on the homepage).
2. FIXED-PAGES footers on pp.7, 8, 11, 14 carry text after the page number, while the template's check 8 says "no right-hand footer teasers". The text sits on the left after "N / 16"; kept as FIXED-PAGES gives it. Rule it once for every company.

## Applied (KP-6 Phase B, 8 Oct 2026, slots-unified.md, Edit tool only)

| Item | Applied |
|---|---|
| M1 | Headline row 12 line 2 now "Back to 90 days is worth ₹254.36 Cr." |
| M2 | p5 context line replaced as given |
| M3 | p2 footnote replaced as given; [FOOTING] no longer used, so its Key line was removed (the letter footing line still prints it once) |
| M4 | Filing date "transcript filed 23 May 2025" added in the Documents list, the p3 footnote and the p15 sources |
| S1 | p3 lead replaced as given |
| S2 | p15 sources: "pages 2, 3, 6, 7, 12 and 13" |
| S3 | p8 footnote: "slide 10" |
| S4 | Note relabelled "Internal note, never pasted" and left out of the prompt |

Re-scan after the last edit (`python -I scratchpad/kp6_scan.py slots`): untraced 0 (fixed step numbers and phone only), dashes 0, cross-company 0, sensitive 0 (one scope-card word), 76.31/190.77 0, signed 0, "you said" 0, rating 1, AI tells 0, placeholders 0, "chased by severity" 0, "02 Owner told" present, P1-beside-NWC pages 0. Planted hit caught in every scan.

Assembled: `kalpataru/claude-design-master-prompt.md` (Phase C).

## Lessons applied
Plant a hit in every scan (all caught; one planted number first collided with qa-report text and was changed). Page images, not text layers, for every headline input. Repo left as found (git status). Never edit the calculator as QA.
