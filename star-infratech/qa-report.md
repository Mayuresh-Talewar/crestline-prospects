# Star Infratech: QA report (ST-S23, 2026-10-12)

## PRECONDITION passed
ICRA 10 Jul 2026 (id 144176) and ICRA 22 Jul 2025 (id 136499) re-downloaded from icra.in and every printed figure read on the PAGE IMAGE, not the text layer:
- 10 Jul 2026 p2 image: operating income 1,154.2 / 1,384.5 / 1525.4 (FY26*, provisional); PAT FY26* 69.8. p1 image: Karnataka-based M/S Star Infratech, formerly Star Builders and Developers, 1991 proprietorship, 2011 partnership. No city is stated, so the address is "Karnataka".
- 22 Jul 2025 p1 image: working capital intensity 12% FY2025 from 38% FY2024 (receivable cycle, sub-contractor advances); order book Rs 6,347.8 Cr at 31 Mar 2025, about 4 times FY2025 revenues; clients KBJNL, PRAMC, KHSDRP, CNNL with full names. p2 image: about Rs 2,000 Cr fresh orders in FY2025; top two segments (layout development and building) 75% at 31 Mar 2025; segments layouts, buildings, irrigation, roads.
No mismatch with data.md. Note: ICRA's FY26 PAT column heading says "audited" but marks FY26 as provisional; the booklet labels it provisional.

## Calc
calc\st-savings.ts, output calc\st-savings-output.txt. Per day 4.179178 Cr; 10 days 41.791781; 30 days 125.375342. Printed 4.1792 / 41.79 / 125.38 (4 dp for per day so that x10 and x30 round to the printed figures). Clamp bounds read from cycle-simulation.ts (cad/dso min = term else 0, max = max(now x 1.4, now + 30); dpo held at today's figure without terms). The simulator offers no lever on the real basis (no days), asserted. A harness basis (test day value, never printed) cross-checks simulate against days x OI / 365. Asserts: no negative release, interest 0, independent cross-check, payables never release cash, basis. Each broken once (BREAK=cross, interest, neg, dpo, basis): all five failed visibly with exit 1; clean run passed. Temp script deleted by name; app git status shows only docs/03-agent-scorecard.md and docs/onboarding/.

## Charts
Used: (5) Process map (all stages "Not public", basis line, whole RA bill "Not public"); scenario bars "With Crestline · ten days less / thirty days less" (p10 and p12).
Skipped: (1) cash cycle, no day measure; (2) pressure on the cycle, no balances and no rate; (3) cash movement, no cash flow statement; (4) how these four move together, one-year-end data only. Added chart-like data: "Operating income by year" (p4, three Verified points on one basis); not a catalogue chart, ruled by the story.

## Deviations from the fixed copy
1. Tagline reads "waiting" (step brief) instead of "trapped" (fixed pages) on p7 and p16.
2. p14 omits the claims/arbitration line (step brief).
3. p8: stage tiles carry name, ownership tag and "Not public"; the old strip totals line is replaced by the basis line and "Whole RA bill: Not public".
4. p13 rewritten as text only, no peers (none published).
5. p10, p12 and p9 copy written by the pack; no fixed copy exists for them in FIXED-PAGES.md.
6. HOW lines: Ranking (cover, p10, p12) and Process map (p8), verbatim from HOW-CRESTLINE-SAVES.md.
7. Template rules containing design, jargon or internal words reworded in the prompt; new rules labelled B1 to B5.

## Scripted scans on the prompt (scan.py, planted hit confirmed detection of every check)
0 placeholders, 0 comments, 0 dashes, 0 spaced hyphens, 0 point sizes, 0 "design to reproduce", 0 content-only words, 0 KEPT OUT terms (whole-word; "operating income" is ICRA's term and does not contain the word "rating"; debtor, withdrawal and ratings also 0), 0 other prospect names (every folder in crestline-prospects except star-infratech, _shared, docs), 0 interest figures, 0 untraced numbers. One internal-reference hit, "04 Verified:", is fixed product copy from FIXED-PAGES.md p11, justified.
