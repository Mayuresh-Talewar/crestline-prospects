# KALPATARU (KPIL) · KP-4 QA report

Reviewed 8 Oct 2026. Scope: kalpataru/ only, plus _shared/ (read-only). No other company folder was opened. No file except this report was written, and the app repo was left as it was found.

## Verdict: PASS WITH FIXES

Every headline figure traces to a STANDALONE page of the company's own filings, and every derived figure recomputes exactly. Only one figure is wrong, and it is wrong because of the new interest ruling: the interest on the 30-day step. One framing claim is unsupported (P3, "three years running"), and one inference contradicts the filing (P5, "timing improved"). Nothing sensitive reaches the booklet-facing files.

## How it was checked (protocol steps 1 to 5)

- **Page images opened.** All of the following carry the header "Standalone":
  - AR FY26: BS p.280, P&L p.281, CF p.284, Note 11 p.303, Note 18(ii)/18.1 p.308, Note 42 ageing p.334, Note 43 p.336, Note 44 p.337, Note 54/55 p.342.
  - AR FY25: BS p.234, P&L p.235, CF p.238, Note 11 p.255, Note 42 p.284.
  - AR FY23: BS p.246, P&L p.247, CF p.250, Note 11 p.265.
  - IP Q4 FY26 slide 21 ("(Standalone)"); IP Q1 FY27 p.9 (standalone block).
  - Transcripts: Q4 FY26 pp.2, 3, 10, 11, 14; Q3 FY26 p.12.
  - CRISIL 16 Oct 2025 pp.4 and 5.
- **Recompute:** `python -I scratchpad/kp4_recalc.py`.
  - 255.1 / 252.8 / 260.9 / 235.7 days (R+CA 10,019.15 / 11,606.92 / 13,499.33 / 14,989.29).
  - Ageing 13.47 / 12.89 / 16.06%. Gross 8,162.44 less ECL 256.76 = 7,905.68, which equals the BS figure.
  - OCF / core EBITDA 0.482 / 0.523 / 0.527 / 0.377 (FY22 0.441).
  - CFO -8.67%, core EBITDA +27.83%, PAT +28.37%, revenue +22.88%.
  - 63.5892 a day; 635.89 / 1,907.68 / 254.36; MSME +62.19%; MSME past due 41.02.
  - P1/P2/P3 chart marks 225.7 / 205.7 / 675.23 (8.97%) / 1,400.35 (0.69).
  - All CORRECT.
- **Number trace:** `python -I scratchpad/kp4_trace.py`. problems.md has 88 numbers with 0 untraced; solutions.md has 95 with 0 untraced. A planted untraced number (9,999.99) was caught.
- **Calculator re-run:** `cp calc/kalpataru-savings.ts scripts/_tmp-kalpataru-savings.ts; npx tsx ...; rm`. Exit 0. The output is byte-identical to lines 1 to 48 of `kalpataru-savings.output.txt`. Lines 49 to 61 (break tests and app note) were added by hand and are not produced by the script. `git status` was the same before and after.
- **Scans:** `python -I scratchpad/kp4_scan.py`. Each of the 10 scans has a planted hit, and every planted hit was matched and printed. Results are listed under the items below.

## Verdict per figure

| Figure | Source checked | Verdict |
|---|---|---|
| Revenue 23,210.06; 63.59 a day | AR26 p.281 | CORRECT |
| TR 7,905.68 (66.27 + 7,839.41); CA 7,083.61 (7,068.23 + 15.38) | AR26 p.280, p.303 | CORRECT |
| 255.1 / 252.8 / 260.9 / 235.7 days | AR23 p.246/265, AR25 p.234/255, AR26 p.280/303 | CORRECT (own formula, never theirs) |
| Ageing >1 yr 767.91 / 961.06 / 1,311.12; 13.5 / 12.9 / 16.1% | AR25 p.284 image (FY24, FY25), AR26 p.334 (FY25, FY26; the FY25 column is identical in both) | CORRECT |
| CFO 559.38 / 713.61 / 837.07 / 764.46; core EBITDA; 0.48 / 0.52 / 0.53 / 0.38 | AR23 p.250, AR25 p.238, AR26 p.284 | CORRECT. The "three years running" wording is WRONG (must-fix 7) |
| -8.7% CFO, +27.8% core EBITDA, +28.4% PAT | computed | CORRECT |
| NWC 121 / 96 / 99 / 94 / 90; Q1 FY26 106, Q4 FY26 90, Q1 FY27 94 | IP Q4 FY26 slide 21; IP Q1 FY27 p.9 | CORRECT. Framing NEEDS CAVEAT (must-fix 8) |
| MSME 150.91 / 222.45 / 266.59 / 432.39; 41.02 past due; Note 54: 1.28 and 7.47 | AR23 p.246, AR25 p.234, AR26 p.280, p.337, p.342 | CORRECT. The inference is WRONG (must-fix 9) |
| WC facilities 1,411.51, "4% to 10%" | AR26 Note 18(ii) and 18.1, printed p.308 | CORRECT. This becomes the cap |
| Borrowings 2,839.94 (565.62 + 2,274.32) | AR26 p.280 | Correct figure but the wrong cap under the ruling (must-fixes 1 to 5) |
| Interest rows (a) 25.44 to 63.59; (c) 10.17 to 25.44; one day 2.54 to 6.36 | min(cash, 1,411.51) | CORRECT, unchanged |
| Interest row (b) 76.31 to 190.77 | min(1,907.68, 1,411.51) = 1,411.51 | WRONG. Correct figures are **56.46 to 141.15** |
| Quotes: Mohnot p.2 ("under 100 days"), p.3 (Water delays), p.10 (1,600-odd), p.11 ("reached that level"), p.14 ("4 to 5 months"); Q3 FY26 p.12 ("6 to 7 days") | transcript images; the speaker label is Manish Mohnot on each | CORRECT. Water is context only and is never a calculator input |
| CRISIL quotes ("Sizeable retention money ...", "... remains a monitorable") | CRISIL 16 Oct 2025 | CORRECT text. Both are on p.4 only (should-fix 3) |
| Note 11.4 quote | AR26 p.303 | The source spells it "upto", not "up to" (should-fix 4) |
| India Ratings IND AA+/Stable, 3 Jul 2026 | NSE cover letter: "Upgrades ... NCDs and Bank Loan Facilities" | CORRECT, printed as a bare fact (problems.md line 9) |

## Must-fix (numbered, with exact replacement wording)

**1. solutions.md line 8. Interest cap (Garvis ruling).**

Replace:
> Cash counted for interest is capped at borrowings drawn, Rs 2,839.94 Cr (AR FY26 p.280); no scenario reaches the cap.

With:
> Cash counted for interest is capped at the working-capital facilities drawn, Rs 1,411.51 Cr (AR FY26 Note 18(ii), p.308), because the 4% to 10% applies to those facilities only. The 30-day step releases more than that, so its interest is counted on Rs 1,411.51 Cr.

**2. solutions.md line 13, row (b).**

Replace `Rs 76.31 Cr to Rs 190.77 Cr` with:
> Rs 56.46 Cr to Rs 141.15 Cr (counted on the Rs 1,411.51 Cr of working-capital facilities drawn)

Rows (a) and (c) are unchanged, since both sit under the cap.

**3. solutions.md line 35 (P1 chart label, 30-day).**

Replace:
> "30-day step: Rs 1,907.68 Cr released once; Rs 76.31 Cr to Rs 190.77 Cr a year, same range."

With:
> "30-day step: Rs 1,907.68 Cr released once; Rs 56.46 Cr to Rs 141.15 Cr a year, same range, counted on the Rs 1,411.51 Cr of working-capital facilities drawn."

**4. solutions.md line 38.**

Replace `30 days: Rs 1,907.68 Cr once, Rs 76.31 Cr to Rs 190.77 Cr a year.` with:
> 30 days: Rs 1,907.68 Cr once, Rs 56.46 Cr to Rs 141.15 Cr a year (interest counted on the Rs 1,411.51 Cr of working-capital facilities drawn).

**5. calc/kalpataru-savings.ts and its output. The cap constant (owner: Senior Dev; QA did not edit).**

- Line 25: replace with
  ```ts
  const WC_FACILITIES = 1411.51; // Note 18(ii) p.308, AR FY26: working-capital facilities from banks, the only debt the 4%..10% range applies to (cap on cash used for interest)
  ```
  Then rename `BORROWINGS` to `WC_FACILITIES` on lines 92, 96 and 112.
- Line 90 comment: `// Interest at the disclosed range, cash used for interest capped at working-capital facilities drawn.`
- Line 96 message: `` `cash used for interest ${fmt(used)} > working-capital facilities ${fmt(WC_FACILITIES)}` ``
- Line 112: `` say(`Working-capital facilities drawn (cap on cash used for interest): ${fmt(WC_FACILITIES)}`); ``
- Line 232: replace `A3 cap 2,839.94` with `A3 cap 1,411.51 (WC facilities)`.
- Re-run the script and regenerate the output file. Expected row b:
  `b | A 30-day step out of receivables plus contract assets | 30 | 1,907.68 | 56.46 | 141.15 | 1,411.51`.
  Re-run BREAK=cap: the 50-day step (3,179.46) must still fail A3 against 1,411.51.
- Also mark the hand-added lines 49 onward as hand-added. Prefix line 50 with `(hand-added from separate BREAK runs, not script output)`.

**6. README.md lines 3, 4 and 14.**

- Line 4. Remove the other company names. Replace everything from "Parallel companies:" to the end of the line (the clause naming the parallel company and the peer company's folder) with:
  > Parallel companies: never open any other company folder).
- Line 14. Replace:
  > Cash used for interest capped at borrowings drawn, 2,839.94.

  With:
  > Cash used for interest capped at the working-capital facilities drawn, 1,411.51 (AR FY26 Note 18(ii) p.308) (Garvis ruling KP-4, supersedes the 2,839.94 cap).
- Line 3. The title is not verified as "Group CFO". Replace `Ram Patodia, President & Group CFO (verify both in filings)` with:
  > Ram Patodia, Chief Financial Officer (AR FY26 p.280; introduced on the Q4 FY26 call, p.2, as "President, Finance and the CFO"). Both titles verified.

  "Group CFO" has 0 hits in the filings (fact-check D24), and the reader block must not print it.

**7. problems.md line 77 (P3). The span does not match the table.**

The table shows FY23 to FY26, which contains two rises. A third rise is only true if FY22 is counted, and FY22 is not shown. Replace:
> Cash conversion had risen three years running and fell back in FY26.

With:
> Cash conversion rose from 0.48 to 0.53 between FY23 and FY25 and fell back to 0.38 in FY26.

**8. problems.md heading line 83 and paragraph line 85 (P4). Fair framing of Q1 FY27.**

The same quarter a year earlier added 12 days (94 at 31 Mar 2025 to 106 at 30 Jun 2025, IP Q4 FY26 slide 21 and IP Q1 FY27 p.9).

- Replace the heading with:
  > Problem 4. The working-capital cycle rose four days after March in Q1 FY27
- Add after "...the move is against March, not against last year.":
  > A year earlier the same quarter added 12 days, from 94 to 106; this year it added 4.

The solutions P4 label "Undo the Q1 FY27 slip" stays a scenario, unchanged.

**9. problems.md line 103 (P5). The inference contradicts the ageing table.**

Billed MSME dues past their due date rose from Rs 28.33 Cr (FY25: 25.78 + 1.43 + 0.88 + 0.24, Note 44 p.337) to Rs 41.02 Cr. Replace:
> ...down from Rs 7.47 Cr the year before (Note 54 p.342), so timing on these suppliers improved even as the balance grew.

With:
> ...against Rs 7.47 Cr the year before (Note 54 p.342). Billed MSME dues past their due date rose from Rs 28.33 Cr to Rs 41.02 Cr over the same year (Note 44 p.337).

**10. problems.md line 30 (P1). Same-basis rule: the company's NWC days must not be set beside problem 1's own formula.**

Replace:
> This 235.7 is our own formula and is never the company's figure. The company prints NWC days (90 for FY26) on a definition it does not publish; the two are never placed on one chart.

With:
> This 235.7 is our own formula and is never the company's figure. The company publishes its own working-capital days on a definition it does not state; the two are never shown together.

**11. problems.md line 64 (P3). Cash-flow line labels.**

The statement prints "Trade and other Receivables" and "Trade and other Payables" (AR FY26 p.284). Replace:
> trade receivables absorbed Rs 2,066.47 Cr and inventories Rs 391.79 Cr, against Rs 1,559.42 Cr from higher trade payables.

With:
> trade and other receivables absorbed Rs 2,066.47 Cr and inventories Rs 391.79 Cr, against Rs 1,559.42 Cr from trade and other payables.

**12. webapp-fit.md. Grey must be a labelled internal note.**

Insert as the first line:
> INTERNAL. Product-fit note for the team only; never copied into the pack. "Grey" below is Crestline's demo simulator, never a client.

Grey appears on lines 14, 34, 37 and 38 and is unlabelled today.

## Should-fix

1. **problems.md line 32.** "every day held in this queue is Rs 63.59 Cr of cash the company funds itself" overstates the case, because customer advances (4,817.27) and payables fund part of the queue. Use: "every day held in this queue ties up Rs 63.59 Cr of cash".
2. **solutions.md line 50.** Print "8.97%" or "9.0%" for the P2 with-Crestline share. The other bars carry one decimal, and "9%" reads as a different precision.
3. **problems.md line 28.** Both CRISIL quotes are on p.4. Cite "rationale 16 Oct 2025, p.4", not "pp.4 to 5".
4. **problems.md line 28.** The Note 11.4 quote must match the source spelling: "upto 20% of the contract value is received as an advance and upto 20% amount is retained and released by the customer at the end of project". Alternatively, drop the quotation marks and paraphrase.
5. **problems.md P5 table, line 110.** Label the share row "Share of all trade payables, including unbilled". The denominator 6,550.11 includes Rs 1,995.28 Cr of unbilled payables, while the MSME line is billed only.
6. **Internal references in booklet-facing copy, to be stripped in KP-5:**
   - solutions.md "(KP-2)" (line 24), "as the ruling sets" (line 84), "quoted in problems.md" (line 52), "(listed in the output file)" (line 4).
   - problems.md "`calc/kalpataru-savings.output.txt`" (line 4) and "The Q1 FY27 call transcript was not read" (line 56).
7. **webapp-fit.md (internal, stale).**
   - "Ram Patodia, President & Group CFO" (line 62): use "Chief Financial Officer".
   - "70+ countries", "9+ verticals" and "EBITDA ~8.9%" (line 6) are marked Wrong or stale in fact-check D5, D6 and D16.
   - `{ACCOUNTING_SYSTEM}`: "ERP until a KPIL filing names SAP" (line 57). SAP S/4HANA is now verified (AR FY26 p.131), so the slot is "SAP", worded "will feed, read-only, built during the pilot".
8. **depth.md line 58.** The cross-check sets the own-formula 252.8 / 260.9 days beside the company's 94 / 90 NWC days. It is internal, but label it "internal cross-check, never printed together" so it is not lifted into the pack.
9. **data.md line 55.** Rename the row "Trade receivable build in cash flow" to "Trade and other receivables (cash-flow line)", and do the same for the payables row on line 57.

## Rules checked (pass)

- **Standalone basis.** Every booklet figure is standalone and the entity headers were confirmed. Consolidated figures appear only in data.md and are labelled.
- **Sensitive exclusions.** The scan of problems.md and solutions.md found Fasttel, GST order, subsidiaries and public-sector only in the "Left out, by ruling" line (problems.md line 122) and in the scope disclaimers (solutions.md lines 24 and 107). KEPL, WEPL, 41.6 and 9,656 do not appear. India Ratings appears once, as a bare fact.
- **Quotes.**
  - No Q1 FY27 management quote. The two scan hits are a "not read" note and a chart label, neither of them a quote.
  - The Water Rs 1,600 Cr figure is context only, is never compared with 1,311.12, and never feeds the calculator.
  - "You said" has 0 hits.
- **Rule 1 and MSME.** DPO is never higher-is-better: payables are held at today's level and +30 days releases 0.00. MSME is "cash used, never a saving". The negatives scan found 0 hits.
- **Scenarios and chart marks.** Rows are never added. The FY26 target is printed as met at 90 and no FY27 target is invented. Every with-Crestline chart mark comes from the calc output and is labelled "Scenario, not a forecast".
- **Crestline claims.** Every screen named in solutions.md exists today per CLAUDE.md. SAP wording: "will feed Crestline, read-only, through an adapter built during the pilot" and "Not claimed ... a live SAP connection today". This is compliant.
- **Cross-company scan.** 7 hits: README line 4 (the parallel company's name and the peer company's folder, covered by must-fix 6) and the demo name on 4 webapp-fit lines (covered by must-fix 12). Every other name and headline figure on the brief's list had 0 hits. The names are not repeated here, so that this report does not itself create hits.

## Note for Garvis: app behaviour (not touched)

`lib/finance/cycle-simulation.ts`:
- Line 156 sets the cad leg's `min = terms.certification ?? 0`, and line 169 sets the dso leg's `min = terms.payment ?? 0`.
- `simulate()` (line 200) clamps EVERY leg, including legs nobody asked to move (`next[key] ?? lever.now`).

So where the contract window sits ABOVE today's figure, simulate raises the leg to the window and reports the difference as cash used (a negative release), even with no move requested. KP-3 found this on row (d) and routed around it with `toTerms`.

Suggested fix for a separate ticket: `min: Math.min(term, now)`, mirroring how the dpo leg's `max` already uses `Math.max(ceiling, dpo)`.

## Lessons applied

- Plant a hit in every scan (done; all ten matched).
- Check page images, not text layers (done).
- Leave the repo as found (verified with git status).
- Never edit the calculator as QA (the changes are written as must-fix 5).

## QA fixes applied (KP-5, 8 Oct 2026)

| Item | Applied | Where |
|---|---|---|
| Must-fix 1 | Cap sentence replaced, wording as given | solutions.md, calculator table intro |
| Must-fix 2 | Row (b) interest now Rs 56.46 Cr to Rs 141.15 Cr, counted on Rs 1,411.51 Cr | solutions.md table |
| Must-fix 3 | P1 30-day chart label replaced | solutions.md P1 chart |
| Must-fix 4 | P1 "Days, cash, interest" 30-day sentence replaced | solutions.md P1 |
| Must-fix 5 | `BORROWINGS` replaced by `WC_FACILITIES = 1411.51`; comment, A3 message, print line and assert summary updated. Re-run with npx tsx from scripts/_tmp-kalpataru-savings.ts: exit 0, row b `30 \| 1,907.68 \| 56.46 \| 141.15 \| 1,411.51`. BREAK=cap exits 1 (`1,907.68 > working-capital facilities 1,411.51`); all seven break modes exit 1. Output file is now the full script stdout only; break tests and the app note moved to calc/notes.md. Temp file deleted by name; `git status --porcelain` showed only the two pre-existing untracked docs entries | calc/kalpataru-savings.ts, calc/kalpataru-savings.output.txt, calc/notes.md |
| Must-fix 6 | README line 3 title, line 4 other company names removed ("never open any other company folder"), line 14 cap | README.md |
| Must-fix 7 | P3 span sentence replaced | problems.md |
| Must-fix 8 | P4 heading replaced; 12-day sentence added | problems.md |
| Must-fix 9 | P5 inference replaced with the 28.33 to 41.02 sentence | problems.md |
| Must-fix 10 | P1 NWC sentence replaced | problems.md |
| Must-fix 11 | Cash-flow line labels replaced | problems.md |
| Must-fix 12 | INTERNAL first line inserted; every Grey mention also labelled "internal note, demo environment, never printed" | webapp-fit.md |
| Should-fix 1 | "ties up Rs 63.59 Cr of cash" | problems.md |
| Should-fix 2 | P2 share printed 9.0% (script now prints one decimal; unrounded 8.97%) | solutions.md, calculator |
| Should-fix 3 | CRISIL cited p.4 | problems.md |
| Should-fix 4 | Note 11.4 quote now spells "upto" as the source does | problems.md |
| Should-fix 5 | MSME share row relabelled "including unbilled" | problems.md |
| Should-fix 6 | Internal references removed: "(KP-2)", "as the ruling sets", "quoted in problems.md", "(listed in the output file)", the calc file name and the "transcript was not read" sentence | solutions.md, problems.md |
| Should-fix 7 | Ram Patodia title; stale dossier figures marked; ACCOUNTING_SYSTEM slot set to SAP | webapp-fit.md |
| Should-fix 8 | Cross-check labelled "internal cross-check, never printed together" | depth.md |
| Should-fix 9 | Cash-flow rows renamed | data.md |
