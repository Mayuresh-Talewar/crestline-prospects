# BSR Infratech India: QA report (BS-S23, 2026-10-12)

## Source re-trace (ICRA rationale 3 Aug 2026 re-downloaded, 8 pp; pages 1, 2, 4 read as images; company site About and Contact rendered and read as images)
Matched on the page images: operating income 1,674.8 and 2,682.2 (p4, FY26 provisional), PAT 103.2 and 165.2 (p4), growth 60% (p1), CAGR 28.2% and 775.2 FY2021 (p2), order book 11,098 at 30 Apr 2026 and more than 6,000 Cr from APCRDA and ADCL (p1, p2), gross debtors 1,222 and 728 (p1-2), 989.8 at 30 Jun 2026 (p2), nearly 66% Central funded, top five 32% (p1), AP 66.3% and about 35% nascent (p3). Site: MD "Srinivasa Rao Balusu, Managing Director", Registered & Corporate Office #851, D-Block, 15th Cross, Sahakaranagar, Bengaluru 560092, "SAP S/4 HANA" implemented (About page images).
Recomputed by script: 1222/(2682.2/365)=166.29 (166.3); 728/(1674.8/365)=158.66 (158.7); 2682.2/365=7.3485; x10=73.48; x30=220.45; 1222/728=1.68; 2682.2/1674.8=1.60; 11098/2682.2=4.14; stage values and 285.4 / 119.1 from stage_estimate.py.
Note: data.md quoted 73.5 and 220.5 (rounded); the calc prints 73.48 and 220.45 and those are used.

## Charts
Used: Process map (catalogue 5, anchored on 166.3, Payment received tagged as ruled, WHOLE RA BILL line); scenario bars (p10, p12).
Skipped: 1 Cash cycle (only one day measure), 2 Pressure on the cycle (no rate, only one balance), 3 Cash movement (no cash flow statement), 4 How these four move together (single year, one line).

## Calc
calc\bs-savings.ts, bs-savings-output.txt (lever table inside), stage-estimate-output.txt. Five asserts each broken once and seen to fail. Temp script deleted; app git status shows only the two untracked docs paths. No term published, so no collection-to-term move; no interest.

## Deviations from fixed copy and brief
1. p8 fixed line "Step waits are not public... shows the stages, not days" replaced, because the later order puts estimates and one published-basis wait on the map. Footer reworded the same way. No upper card; stage tiles carry name, owner, days and tag (later chart order).
2. Tagline "waiting" used on p7 and p16 (brief) instead of "trapped".
3. WHOLE RA BILL line prints "plus" instead of the script's "+" (no signed numbers). Basis line names ICRA arithmetic instead of "published days" because BSR does not publish 166.3; the source does not support "published".
4. p14 claims line dropped (brief). p14 pilot card carries the SAP S/4HANA read-only line (ruling).
5. "Scenario bars start at zero" not written: content-only order removes drawing instructions.
6. p13 is text only, no numbers. Interest variant of p15 used.
7. HOW lines: Receivables on cover and p10, Process map on p8, Ranking on p12.
8. p11 ask answer carries no HOW lines (not listed in the brief); p4, p5, p6 carry no scenario.

## Scans on the prompt (script)
0 placeholders, comments, jargon, dashes (en/em and spaced hyphen), " pt", design words, "design to reproduce", KEPT OUT terms (141, 160, A Positive, A2+, rating, 1,761, 300 Cr, 1,440, interest cover, 5.4, OPBDIT, 11.5%, 10,322.6, 4,135, 1,661.6, CFO, aggregator name), 0 of 75 other folder names. Plants detected. Only "+91" phone prefix matched the signed-number scan. Every number traced to ICRA, the site, the calc or the stage script.
Logo: assets\bsr-logo.png (white mark, transparent, clean); one reader, one edition.
