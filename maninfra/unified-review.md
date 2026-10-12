# MI-6 review gate: slots-unified.md (QA, 8 Oct 2026)

Verdict: PASS WITH FIXES APPLIED.

## Applied (verify-report caveats + README rulings)
- (a) P10 adds: "Receivable rows use all FY26 receivables, including Rs 6.40 Cr owed by group companies; on third-party receivables alone (Rs 31.5 Cr) the 30-day row would be 75% of the balance." P12 largest-row line carries the same qualifier.
- (b) P4 and P9 ageing: shares of current, undisputed receivables (Rs 36.13 Cr, AR FY26 p.127); not split between group and third-party clients.
- (c) Every "42.8 below zero" (P1, P2 both letters, P4, P5, P7 lens 01, P13) now reads "clients' advances exceeded the receivables, contract assets and stores, net of payables, by Rs 42.8 Cr" (74.6 - (37.9 + 11.6 + 1.0 - 18.7) = 42.8).
- (d) P5 order book: "Not like-for-like: from June 2026 the book counts PMC contracts at fee only (IP Q1 FY27 slide 27); 980+ is a floor and its basis is not stated." Cites fixed: order book = slide 27, BMCT = slide 26 (P5, P6 and sources); FY23 segment revenue cite AR FY24 p.217 added.
- (e) P6 mix was INVERTED ("infrastructure 61%, residential 39%"). Page image IPQ1FY27_p28 shows residential 61% (4 group projects), infrastructure 39%. Now "61% residential, the group's own projects; 39% infrastructure". CFO title already exact. FY26 "not due" Rs 1.80 Cr cell removed from P4 and P9 (and the misprint mention on P9's source line).

## Other fixes
- P3 headline said "Three statements on EPC, and one on real estate"; items are two EPC, two real estate. Now "Two statements on EPC, two on real estate". Unsupported line "They set the order in which the next EPC contract will be billed" now "They set the context for the next EPC contract."
- P3 analyst-meet quote: speaker printed as labelled on AM p.6, "Manan Shah, labelled "MD, MICL" in the transcript".
- P7, P9 "group associates" now "group companies"; P9 "group work paid from group funds" (unverified claim) now "Shown apart as group work, never read as collection risk".
- P8 note: FY22 CFO 15.9 is the AR FY23 comparative (image AR23_p103), stated with FY24.
- P15 sources: interest formula clause removed (debt-free ruling). Only deviation from FIXED-PAGES.md; pages 7, 8, 11, 14, 16 otherwise word-for-word with slots filled.
- Letters rewritten to the same facts (277.1 to 37.9, the 42.8 advances wording, negotiation not signed, Rs 9.1 Cr illustration, ERP not seen): A 156 words, B 152 words.
- Production line 3 "no verify-report exists" replaced.

## Checked on page images
IPQ1FY27_p27/p28 (305, mix, PMC footnote, BMCT 1,800+ 95%+ Jun-26, printed slide nos 26/27); IPQ4FY23_p19 (980+, Mar-23); AM_p6 (quote, label "Manan Shah (MD, MICL)"); TRQ4FY26 p2-p4, p8-p9 (392, 3 to 4 years, 1,800 / 990, heavy lifter; speaker Manan Shah, handover on p1 text); AR26 p.135 [img 157] payables 6.46 / 12.19 / 3.08 / 18.65 / 46.06, standalone header; AR26 p.217 [img 239] consolidated segment 303.8 / 329.4; CONSO_Q1FY27 p5 EPC 82.07 vs 102.24 (restated, finance cost allocated); AR26 p.111, AR25 p.111, AR23 p.99 CFO 46.8 / 15.4, 230.2 / 15.9, 24.8. Prior MI-4 image checks (p.108, 127, 148, 160, 175) relied on.

## Trace and re-run
- `python -I scratchpad/mi6_scan.py maninfra` : every number on printed lines and letters against calc output, data.md, verify-report, depth.md, compute-output: untraced 0 (presence trace, not per-figure provenance; ageing, payables, segment figures additionally image-checked above).
- `cp calc/maninfra-savings.ts scripts/_tmp-mi6.ts && npx tsx scripts/_tmp-mi6.ts | cmp - calc/maninfra-savings.output.txt` : IDENTICAL; scratch removed; repo git status as found.

## Scans after last edit
0 em/en dashes, 0 banned words, 0 headlines over 12 words, 0 "you said", 0 signed numbers (only +91), 0 other-company strings, 0 internal refs, 0 "{". Printed "interest" appears only as "no interest figure" statements and a source title; no rate, no carry.

## Open (not blocking)
- Chair conflict (AR26 Berjis Desai vs IP Q1 FY27 Parag Shah) is not printed; check AGM outcome only if a chair is ever named.
- FY22 to FY25 balance sheet figures traced to data.md, not re-image-checked this pass.
