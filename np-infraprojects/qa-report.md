# NP Infraprojects: qa-report (step 2 and 3, 2026-10-09)

## 1. Re-trace against the raw CARE text (script, pymupdf text of the 4-page PDF, 22 Sep 2025)
All 18 printed company facts found verbatim: 242.39, 220.63, 102.62, CAGR ~24% (FY21 to FY25), 11.36% and 14.57% PBILDT margin, PAT 7.98 and 15.93, order book 1,367 Cr (July 2025), GCA days 282 with its three named causes, incorporated November 2018, standalone, (UA) on FY25, growth "driven by execution of subcontracted projects", date 22 September 2025. Table figures read from the text layer of the Brief Financials block; the margins are also printed in the p1/p2 prose, which agrees.

## 2. Recomputed by script
- 35.32/242.39 = 14.57% and 25.07/220.63 = 11.36% (match CARE's printed margins).
- CAGR (242.39/102.62)^(1/4) - 1 = 24.0% (matches "~24%").
- Per day 242.39/365 = 0.664082, printed 0.664. 10 x 0.664 = 6.64; 30 x 0.664 = 19.92. Both equal the calc (6.6408, 19.9225). 282 less 10 = 272, less 30 = 252.
- Not printed on purpose: order book to TOI 5.65x (CARE) vs 5.64 computed; the 42-day cycle.

## 3. Number trace over the Reader table and Keys
Every numeric token maps to CARE, the calc, the letter date or fixed-page copy (14 days, 7 days, 16 pages). Untraced tokens: none. Planted hit ("243.39") was flagged, so the scan works.

## 4. Calc
Asserts: no negative release, interest 0, cross-check days x per day, payables never release cash. Each broken once (NP_BREAK=neg, interest, cross, payables) and failed visibly (exit 1, FAIL lines, summary); clean run: ALL ASSERTS PASSED. Files: calc/np-savings.ts, calc/np-savings-output.txt. Temp copy deleted; app repo git status shows only "?? docs/03-agent-scorecard.md" and "?? docs/onboarding/".

## 5. Scans on claude-design-master-prompt.md (planted hit caught 11 of 11 categories)
- Placeholders 0, comments 0, "The design to reproduce" 0, finish-check 10 removed.
- Company names (whole words, 36 listed, KEC included) 0. Cross-company grep of all new files 0.
- Internal references and template jargon (slot, template, headline table, Template fallback, Garvis, file names) 0. The one word "Verified" is the printed step name "04 Verified" in the fixed ticket flow.
- KEPT OUT terms 0 (BB+, A4+, Not Cooperating, stretched, gearing, 1.92, 1.57, 57.46, 581, 2012, 42 days, CRISIL, India Ratings, liquidity, net worth). EXCEPTION: "Pune" appears once, in Crestline's own sender address (Crestline Intelligence Private Limited, Pune, Maharashtra), kept to a single occurrence.
- Dashes: en or em 0; spaced hyphen 0. Other hits were markdown rules (---) only.
- Signed numbers 0 except the phone "+91 76209 35398" (twice, sender block and p15 band).
- Interest figures 0; the pack says "No interest is priced".
- Rating grade, liquidity wording, past client named in CARE, logo: none printed.
- Pack inside the prompt is byte-identical to slots-unified.md from "## Keys" to before "## Checks" (script: pack in text = True). 16 page headings.

## 6. Decisions to confirm
- Tagline uses "waiting" per client order, replacing the fixed pages' "trapped" (p7, p16).
- 0.664 printed (not 0.66) so the arithmetic reads true.
- Applying the 10 and 30 day steps to CARE's GCA days as one receivable-style leg is a scenario by ruling, not a Crestline-measured leg.
