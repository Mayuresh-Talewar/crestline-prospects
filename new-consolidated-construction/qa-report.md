# QA report: New Consolidated Construction Company Limited (NC2-S23, 2026-10-12)

## Re-trace
Raw source re-fetched 2026-10-12 (Acuite rationale of 3 Feb 2026, connect.acuite.in/company-details/39182, converted to text). Confirmed in the text: operating income 610.57 and 572.76; GCA 336 (335); inventory 171 (164), shuttering about 38%; debtors 100 (98); retention 92.39 (102.84); order book 2,183.86 at 1 Jan 2026, about 3.5 times FY25; clients Bagmane, Prestige, L&T Realty; Asian Paints HQ, HUL, VSNL Tower; over 100 pharma plants; private clients, direct negotiation. Maharashtra 75% and Karnataka 20% and residential 70% come from data.md (NC2-1, Acuite p3), not re-read in this pass.
Leaders re-read on the live site 12 Oct 2026 as text: Mr. Mahesh M. Mudda, Vice Chairman & Managing Director; Mr. Harshvardhan Kaushik, Chief Financial Officer. NOT image-checked (text of the live page only). Logo: site PNG, viewed, clean white ground, copied to assets\ncccl-logo.png.
Computed by script (calc\savings-output.txt): per day 1.672795; 10 days 16.73; 30 days 50.18; retention 55.2 revenue-days; retention fall 10.45 (102.84 minus 92.39); stage values and whole bill 171.6 = 71.6 + 100 (calc\stage-estimate-output.txt).
Calc asserts: negative release, interest zero, cross-check, payables never release, basis, no lever on a foreign base. Each broken once and failed visibly (basis and cross-check fail on the same cross-check line; dpo break fails on its probe guard), then clean run. Temp script deleted; app git status shows only the two untracked doc items.

## Charts
Used: 1 The cash cycle (partial, no total), 5 Process map (Payment received tagged "As Acuite reports, FY25"), scenario bars. Skipped: 2 (only one Verified balance, retention), 3 and 4 (no cash flow or multi-year series).

## Deviations from the fixed copy
1. Tagline "Know where your money is waiting, and who can release it." on p1, p7, p16 (fixed copy says "trapped"), per the step brief.
2. p8: fixed "Step waits are not public" line, "Illustrative stages" footer and the no-day-values rule replaced because the later client order requires tagged estimates; the stage values come only from stage_estimate.py.
3. p14: claims and arbitration line dropped (brief). p14/15 "ERP" used (no filing names one).
4. p15: no-interest variant used; sources paragraph lists the actual sources.
5. p11: HOW Receivables two lines added under the Ask answer.
6. Template rules reworded to content-only; rule labels renamed R1 to R11 so no label reads as a rating grade.

## Open items for Garvis
- Registered office line is from the FY24 annual return; the site shows head office at Lower Parel. Confirm which address the letters go to.
- Titles use "and" as ruled; the site prints "&".
- Percentages on p5 are Acuite's approximate figures, not re-read in this pass.

## Scans on the prompt (planted hits confirmed the regexes work)
0 placeholders, 0 comments, 0 dashes, 0 " pt", 0 design words, 0 KEPT OUT terms, 0 other prospect names (75 folders checked, whole words), 0 interest figures. One internal-word hit: "Verified" inside fixed product copy ("04 Verified"), kept. All numbers traced: pack figures to data above; 14, 16, 7, 12, 25, 24, 91, 76209 35398, 39182, 400001, 1946 are page counts, fiscal labels, contact and address digits.
