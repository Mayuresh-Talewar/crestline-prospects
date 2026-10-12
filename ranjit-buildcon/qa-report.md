# QA report: Ranjit Buildcon (RN-S23)

## Source re-trace
CARE press release on Ranjit Buildcon Limited, 7 Dec 2023, re-downloaded 2026-10-12 (scratch RN-S23). Text and page images read: p1 growth 14.4%; p2 order book 4,338 (4234 at 30 Nov 2022), 3.42x, segments 51/27/17, states 67/20/12/1/1, 1,311 over 24 to 36 months, L1 about 800, promoter and MD names; p3 GCA 220 (190), WC cycle 137 (130), six-month debtors, retention and deposits named, 2006 and 1967; p4 table TOI 1,108.24 / 1,267.92, PAT 34.43 / 43.23. Script trace (trace.py) asserted every one in the extracted text.
Recomputed by script: per day 1267.92/365 = 3.4738; 10 days 34.74; 30 days 104.21; stage values and the WHOLE RA BILL line (91.7 + 128.2 = 219.9) from stage_estimate.py --gca 220.

## Calc
calc\rn-savings.ts, output calc\rn-savings-output.txt, lever table calc\lever-table.md. Clamp bounds read before asserting: dso now 220, min 0, max 308; steps land at 210 and 190. Asserts: no negative release; interest 0; days x per day equals simulate (34.7375 and 104.2126); payables never release cash; only the receivable leg priced; basis FY23 TOI / 365. Break tests (BREAK=1,2,4,5) each failed visibly with the named assert, then the clean run passed. Temp file deleted; app git status shows only docs/03-agent-scorecard.md and docs/onboarding/. priceLevers not run (needs a full cycle position, ledger and vendors; one priced lever).

## Charts
Used: Process map (catalogue 5, all stages Estimate, basis line, WHOLE RA BILL line, none priced); Scenario bars (p10).
Skipped: 1 cash cycle (only GCA, no DIO/DSO/DPO/contract-asset days); 2 pressure on the cycle (no balances, no rate); 3 cash movement (cash from operations not published; negative FY23 flow kept out); 4 how these four move (single year of WC lines).

## Scans on the prompt (by script, planted hits detected first)
Planted run caught placeholders, comment, internal refs, jargon, dashes, " pt", kept-out terms, other prospects (incl. standalone Patel), content-only words. Clean run: 0 placeholders, 0 comments, 0 jargon, 0 dashes, 0 " pt", 0 other prospect names (Patel only inside "Gaurav Patel" and "Mr. Patel"), 0 kept-out terms, 0 design-to-reproduce, 0 content-only words, 0 interest figures (six "no interest" statements only), 16 pages. One internal-reference hit, "Verified" in the fixed copy line "04 Verified: ...": justified, it is printed product copy. First run flagged "A1" as a kept-out term: it was the rule label A1, so rules were relabelled R1 to R14 (B1 to B4 added).

## Deviations from fixed copy and brief
- Tagline "waiting" instead of "trapped" on p7 and p16 (brief).
- p8: closing "Step waits are not public" lines replaced by the estimate basis and the WHOLE RA BILL line; stage values with Estimate tags (client order 2026-10-12 overrides the no-day-values rule); no upper card; "+" in the script's WHOLE line written "plus" (no signed numbers).
- p14 claims and arbitration line dropped. p15 step-wait sentence replaced; no-interest variant used; pilot scope "one to three EPC projects".
- p11 carries no extra HOW pair (fixed mechanism copy only); HOW pairs: Receivables on cover and p10, Process map p8, Ranking p12.
- "Scenario bars start at zero" and "no-signed" drawing wording not carried: content-only order removes drawing instructions.
- p6 reused for "what is one day worth" (no latest-quarter story exists); p9 lens content is "Not published" with reasons (ageing, retention, vendors); p13 text only, no numbers.
- Letter dated 12 Oct 2026 (launch message) not 9 Oct (brief). The 137-day cycle prints twice as CARE's figure (p4, p7), once as a stated figure on p12 by name only; never priced or added.
- Left out per sensitive file: slow-moving 28% of order book, subcontractor dues, large debtor, negative cash flow, guarantee, outlook change.
