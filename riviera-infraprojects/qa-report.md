# Riviera Infraprojects: qa-report (RV-S23, 2026-10-12)

## Source re-trace
CARE press release 20 Aug 2025 re-downloaded (5 pages, careratings.com). Page images of p2 and p3 viewed; text layer matches. Every printed figure is in the text and image: 553.64, 813.82, 30.19, 59.62, 39.81, 54.67, 1.43, 0.73, 22.31, 22.60, 2,941, 3.6x, 159, 135, about 260 (Q1 FY26 UA), 1,100 to 1,200 (envisaged), 45%, 50%, 68/19/13, 54/20/13/9/3/1, 48%. Gearing printed as 1.43 (p3 table; p2 text says 1.4).
Computed by script (calc\): 813.82 / 365 = 2.229644; 10 days 22.2964 (22.30); 30 days 66.8893 (66.89); 125 and 105 days; 47% (813.82 / 553.64 = 1.470); 24 days (159 less 135).
Process map values and the whole RA bill line are copied from stage_estimate.py --gca 135 (calc\stage-estimate-output.txt): 56.3 + 78.7 = 135.0.
Number trace by script: every number in the prompt is in CARE, the calc outputs or a listed derivation.

## Calc
Asserts: no negative release, interest 0, days x per day cross-check, payables never release, basis, no lever on a foreign base, 10/30 values. Five break tests each failed visibly (calc\rv-break-tests.txt), then clean run passes. Temp script deleted; app git status shows only the two docs entries. priceLevers needs a cycle position and ledger the source does not give, so it was not called; ranking is trivial with one priced lever. Combined scenario: one lever only.

## Charts
Used: (5) Process map; scenario bars. Skipped: (1) cash cycle, only GCA days exist; (2) pressure on the cycle, no balances and no borrowing rate; (3) cash movement, two years of operating cash flow (needs three); (4) four lines together, single-year data.

## Deviations from the fixed copy and the brief
- Tagline "waiting" replaces "trapped" on p7 and p16 (brief ruling).
- p8: fixed line "This timeline shows the stages, not X's days" replaced, because stages now carry estimated days under the later client order; footer reads "Illustrative stages, estimated days". Stage tiles carry value plus tag (catalogue and estimates orders override the earlier "name and tag only").
- p14 claims and arbitration line dropped. p15 uses the no-interest variant. "Day dots" sentence reworded to remove drawing.
- Letter dated 12 Oct 2026 per launch message (brief says 9 Oct). No address: CARE names Ahmedabad only for the promoter group, not the company, and the group name is kept out.
- "Scenario bars start at zero" not written: content-only rules forbid it.
- p11 carries no separate How lines (the p10 pair applies); p13 is text only.
- Process map: the whole bill equals GCA 135 by construction of the script, so it is tagged Estimate throughout.

## Scans (calc\prompt-scan-output.txt, planted hits detected)
0 placeholders, comments, internal references, jargon, dashes, point sizes, design words, "design to reproduce", other prospect names. Kept-out terms: 0 whole-word hits ("rating" appears only inside "operating" and "generating"). Interest: no interest figure; the words appear only as "No interest priced", "interest free" (CARE's own phrase) and interest coverage 22.31 and 22.60 (published ratio, p3).

## Charts and unavoidable choices flagged
Estimate figures on p8 exceed what the earlier README said ("never priced" still holds).
