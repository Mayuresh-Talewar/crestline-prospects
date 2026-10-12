# Polite Powertech: QA report (PL-S23, 2026-10-12)

DRHP re-downloaded from SEBI (sebi_data/attachdocs/mar-2026/1774596605715_1174.pdf, 508 pages) and every printed figure re-read from a rendered page image (printed page = PDF page minus 3): p.41 (order book 313.56 Cr, 82.41% PSU, PSU revenue 70.63%), p.88 (balance sheet: receivables 5,085.05, inventories 715.40, cash 75.05, equity 1,568.00 lakh), p.89 (revenue 15,563.01, purchases 11,377.37), p.126 (days 118, 23; target 100; footnotes x360), p.135 (EBITDA 2,164.44, PAT 1,302.46, order inflow 18,109.69, projects completed 47), p.244 (retention basis), p.247 (Tally Prime), p.321 and 323 (retention 696.70 and 1,781.22), p.326 (8.35%, Punjab National Bank), p.394 and 395 (199.06 drawn at 30 Sep 2025; 8.35%). Registered office read from p.92 (and p.1). Titles: Chairman and Managing Director, Chief Financial Officer (p.282).

## Figure trace (script: scratchpad nums.py, all derived values recomputed)
155.63=15,563.01/100; 21.64; 13.02; 181.10; 313.56; 50.85; 7.15; 24.78=(696.70+1,781.22)/100 with 6.97 and 17.81; 0.75; 15.68; 113.77; 1.99; 0.4323=155.6301/360; 0.3160=113.7737/360; 4.32; 7.78; 3.16; 7.48 (one simulator run); 0.17 (=1.9906 x 8.35%) and 16.6 lakh; 117.6 and 22.6 recomputes. Process map days and the whole-RA-bill line are verbatim from stage_estimate.py --dso 118 (calc\stage-estimate-output.txt). Only untraced tokens in the prompt: Crestline's phone number (fixed copy).

## Calc asserts
Run clean; six deliberate breaks each failed visibly (wrong stock base, uncapped interest, perDay +1%, vendor term injected, 365 basis, negative move). Temp script deleted; app git status shows only the two untracked docs paths. calc\ holds the script, full output, stage output and lever-table.md.

## Charts
Used: 1 The cash cycle (stock 23 and receivables 118 only, no vendor leg, no total, 360 basis stated); 2 Pressure on the cycle (rate panel 8.35% capped at 1.99 Cr, and "No clock on these · ranked by size instead"); 5 Process map (--dso 118, with the WHOLE RA BILL line, basis line reworded with the company name per catalogue). Skipped: 3 Cash movement and 4 How these four move together (only two operating years, no three comparable year-ends).

## Deviations from fixed copy and brief (all deliberate)
1. Tagline reads "waiting" (brief) not "trapped": p7 closing line and p16 vertical tagline.
2. p8: stages carry owner tag, days and Published/Estimate tag, and the fixed "Step waits are not public" note and footer are replaced (later client order 2026-10-12 overrides the no-day-values rule and the brief's "name and tag only").
3. p14: claims and arbitration line dropped (brief). Pilot scope: one to three EPC projects. No scope card.
4. p15 interest sentence rewritten to the disclosed 8.35% capped at the drawn 1.99 Cr (interest variant).
5. "Scenario bars start at zero" and any drawing wording omitted (CONTENT-ONLY overrides). Template section 2 and finish-check 10 stripped; rules 5, 6, 7, A5, A7, A12, A14 and checks reworded to content only.
6. Letter date 12 October 2026 (launch message) not 9 Oct. Salutation uses the full name so the surname Patel appears only inside the reader's name.
7. priceLevers not run (needs a built position and vendor ledger); ranking is by cash released once, same key, said in lever-table.md.
8. Page 13 is text only, no digits, "No numbers on this page." No peer proof exists in the filing, so the page explains how a figure closes.

## Watch item for the reviewer
The cap follows the ruling (1.99 Cr, 30 Sep 2025). The DRHP also shows 517.29 lakh outstanding on the same facility at 28 Feb 2026 (p.394); it is not printed. A higher cap would raise the printed interest, so the ruled 1.99 Cr is the conservative reading.

## Scans on the assembled prompt (scratchpad scan.py, planted hit caught first)
0 placeholders, 0 comments, 0 internal references, 0 jargon, 0 en/em dashes or spaced hyphens, 0 " pt", 0 design words, 0 other prospect names (every folder name, whole word; Patel only inside the reader's name), 0 KEPT OUT terms. Two benign hits: "guarantee" in the company's own retention release basis (bank guarantee), listed and justified; none for tax proceeding, MSME, 827, payables, 164, 36.24, 93.09, 50.22, top customer or supplier, 27.24, 27.94, overdue, H1, negative cash, 73%, 14.74. 0 interest figures other than 8.35% and 0.17 Cr / 16.6 lakh. 0 "The design to reproduce".
