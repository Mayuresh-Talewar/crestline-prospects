# QA report: Pawar Patkar (PP-2 and PP-3, 2026-10-09)

## Calc
- calc/pp-savings.ts (copy of the temporary script, deleted from the app repo by exact name; `git status` there shows only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`).
- calc/pp-savings-output.txt: four break runs (each fails, exit 1) and the clean run (10 PASS, exit 0).
- Inputs: revenue 552.35 Cr (FY25 provisional, standalone), GCA days 106, no terms passed, ratePct 0. The GCA days ride on the receivable leg (the simulator has no GCA leg); clamp bounds read: min 0, max = max(days x 1.4, days + 30) = 148.4, so 96 and 76 are inside.
- Deviation: `valueOfADay` lives in `@/lib/finance/working-capital-cycle`, not `@/lib/insights/levers` (grep confirmed); imported from there.
- Test-only placeholder: vendor days 40 on the payable leg, used for the "payables never release cash" assert. It is not a Pawar Patkar figure and is not printed.
- Results: per day 1.513288 Cr; 10 days 15.132877 (15.13); 30 days 45.398630 (45.40); independent days x per day agrees to 1e-9; interest 0.

## Figure re-trace (data.md, Acuite Ratings rationale 1 Sep 2025, vs printed)
All of 552.35, 500.35, 235.81, 27.67, 32.95, 162.38, 123.64, 0.16x, 13.20x, 35.87, 106, 55, A-/Stable, A2+, 200 Cr, the three client names and the supplier wording are present in data.md. I could not re-open the Acuite page itself (no network step in this ticket), so page-level re-tracing is against data.md; the cover hero, per-day and 10 and 30 day figures need Garvis's own source look per the accuracy gate.
Recomputed by script: 106 less 55 = 51; 106/55 = 1.927 (93% more); 552.35/500.35 = 1.104 (10% more); 552.35/235.81 = 2.342; index FY24 = 100: days 193, 96 days 174.5 (175), 76 days 138.2 (138), revenue 110.4 (110). Chart bars within 2% of label.

## Decisions to know
- Letter and row v say only "assigned" by Acuite, never "first": the sensitive file shows an earlier Acuite history that data.md's "first assignment" would contradict.
- Gearing 0.16x is read as FY25 from data.md's "0.16x (0.08x)"; the bracket is not printed.
- Section names printed (p15 only): Key Financials, Key Rating Drivers, Moderate working capital operations, Liquidity. Other pages cite the rationale and date only.
- p6 reuses chapter four (no latest-quarter source) for the value of a day; p13 is the company's own strength instead of peer proofs (none available). 16 pages kept.
- p7 and p16 tagline is the client's wording "waiting", overriding the fixed "trapped". p14 claims line dropped.
- p11 fixed copy contains the product step name "04 Verified"; kept as fixed Crestline wording (it is the only hit on the internal-reference scan).

## Scans on claude-design-master-prompt.md (planted hit first, then clean counts)
Planted string trips every category (none missed). Clean: placeholders 0, comments 0, company names 0, dashes 0 (em, en, minus, spaced hyphen; "+91" phone prefix and the agency symbol A-/Stable are the only signs), KEPT OUT terms 0 (incl. 1,433.96, 1,443.96, 30-40, cooperat), "The design to reproduce" 0, interest: 0 figures (only the rule text, "interest cover 13.20", and "No interest is priced"). Internal references 1 (fixed copy above). Numbers not in template or allowed list: only 23/25 (from FY23, FY25), 01 to 05 (lens labels), 31 (31 Mar): all traced.
