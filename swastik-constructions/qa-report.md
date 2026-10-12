# Swastik Constructions: QA report (SW-S23, 2026-10-12)

## Source re-trace
Acuite rationale of 30 Jan 2026 re-fetched raw (HTML, 75,537 bytes) to scratch and text-extracted. Matched in the raw text: OI 393.63 / 252.23 (~56 percent), PAT 13.33 / 11.15, order book ~Rs 1136.52 Cr (2.89 times FY25 revenue, Dec 2025), 8MFY26 gross revenue 276.03 (8MFY25 195.28), GCA 106 (39), debtor days 22 (7), inventory 5 (16), retention Rs 26.55 Cr at 31 Mar 2025, established 2004, Mumbai, clients NMC (Nagpur Municipal Corporation), CIDCO, PWD Maharashtra and Karnataka, "majority of its revenue in second half". Release date "January 30, 2026".
Computed by script: 393.63 / 365 = 1.0784383; x10 = 10.7844 (printed 10.78); simulate agrees. Prompt numbers all traced by script (every number in Content is in the allowed set; only rule numbering and FY labels are extra).

## Calc
calc/swastik-savings.ts and output: all 6 asserts pass; each broken once (BREAK=1..6) and failed visibly. 30-day cut clamped (moved -22 not -30), recorded in calc/lever-table.md. Temp file deleted; app git status shows only "?? docs/03-agent-scorecard.md" and "?? docs/onboarding/".

## Charts used
1. The cash cycle (stock 5, debtors 22; no creditor leg, no total). 5. Process map (stage_estimate.py --dso 22; Payment received Published 22, eight stages Estimate, Tax invoice no value, Retention Not public). Scenario bars: "With Crestline · ten days less" (10 days only).
## Charts skipped
2 Pressure on the cycle (no rate, only retention as a size; thin), 3 Cash movement (no cash flow statement), 4 How these four move together (one year only).

## Scans (scripted, scan on the final prompt; planted hit test caught all 15 categories)
0 placeholders, 0 comments, 0 internal references except "04 Verified:" which is fixed product copy, 0 dashes (em, en, " - ", "--"), 0 " pt", 0 other prospect names (all folder names, whole words), 0 KEPT OUT terms (157, creditor, BBB, A3+, 120/25/95 Cr, 0.50, 11.13, 42.35, 49.40, Managing Partner, Tally, Jaipur, Infra-Logic, Swastik Group, net worth, interest cover, rating, grade), 0 interest figures, 0 design words, 0 "design to reproduce".

## Deviations from fixed copy and the brief
- Tagline "waiting" (brief) instead of "trapped" on p7 and p16.
- ACCOUNTING_SYSTEM = "ERP" (none named). PILOT_SCOPE = "one to three projects". Scope card omitted. p14 claims/arbitration line dropped.
- p8: day values and Estimate/Published tags added (client order 2026-10-12, newer than the fixed "no day values" rule); "Step waits are not public" sentence and footer reworded; ownership tags kept; each tile also carries its owner and days (brief's "name and tag only" superseded by the estimates order and README SW-2).
- Brief "scenario bars start at zero" not written (drawing instruction, removed by CONTENT-ONLY).
- No hyphen stripping in fixed words (read-only, one-time, Working-capital review).
- Template rules reworded for content only (design, dashed/hollow, scale, logo placement, "slot", "Template fallback", "Verified" as marker). Added rules B1 to B3.
- Fixed p14 and p15 wording kept; p15 interest variant used (no rate).
- p13 has no digits except the page footer; p4, p9 contain only published figures.
