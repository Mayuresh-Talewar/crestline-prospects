# qa-report.md, Relcon Infraprojects Limited (RC-S23, 2026-10-12)

## Source re-trace (raw CRISIL text re-downloaded 2026-10-12, URL ...RelconInfraprojectsLimited_December%2013_%202024_RR_358899.html)
Every printed figure found in the raw text: 587.54, 527.03, 36.18, 35.58, 346, 2,456 (30 Sep 2024, 24 to 30 months), over 90% Maharashtra, 66% / 34%, seven RMC plants, 36% three-year CAGR, 11% FY24 growth, 0.16 times, 21.63 and 17.40 times, 21% fund-based use (12 months through October 2024), GCA 199 days (31 Mar 2024) and 200 to 266 days (past three fiscals), cause "moderate debtor levels and retention money as well as deposits given to customers", MCGM / MMRDA / Bank of India / MRVC / PWDs.
Computed (Crestline's arithmetic): 587.54 / 365 = 1.609699 Cr; x10 = 16.10; x30 = 48.29 (calc output); 2,456 / 587.54 = 4.18.
Reader and address: relcon.co.in board-of-directors page, screenshot checked: "MR. JAINENDRA P. SHAH, MANAGING DIRECTOR". Address from the contact page footer, screenshot checked: Relcon House, 4th floor, Mahatma Gandhi Rd, Agarwal Market, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057.
FLAG for Garvis: the contact page's embedded map card reads "6, Mahatma Gandhi Rd, Agarwal Market..." (a map listing); the site's own printed footer has "4th floor". The footer is used. Whether it is the registered office is not confirmed (not claimed).

## Charts
Used: (5) Process map, every stage Not public, basis line printed, no estimate (the only anchor, GCA, includes plant stock; stage_estimate.py not run). Scenario bars on the value of a day only.
Skipped: (1) cash cycle, (2) pressure on the cycle, (3) cash movement, (4) how these four move together: no days, balances, borrowing rate or multi-year cash data are published.

## Calc
calc\rc-savings.ts and rc-savings-output.txt: all asserts pass; each was broken once (BREAK=1 to 5) and failed visibly. lever-table.md lists every lever (only the value of a day is priced). Temp script deleted; app git status shows only docs/03-agent-scorecard.md and docs/onboarding/.

## Deviations from the fixed copy and template
- Tagline reads "waiting" (client brief), not "trapped", on p7 and p16.
- Fixed p14: claims/arbitration line dropped (brief). Pilot scope and one scope card written for Relcon (RMC plants not modelled).
- p6 is used for the balance-sheet tiles and the value of a day, since no latest-quarter story exists; p3 to p5 and p9 to p13 are written for what is public (no promises, ageing, peers, proofs). p13 is text only with no numbers.
- p8: no upper card; stage tiles carry name, tag and "Not public".
- Template rules rewritten to content-only wording (B1 to B3 added); design section and finish-check 10 removed; "Verified" appears only inside fixed product copy ("04 Verified") and p13 product text.
- Scenario bars: "starts at zero" omitted, because CONTENT-ONLY rules forbid scale instructions.
- Dossier "BBB+, 270, limits split, 520.55, around 200, namesake" never printed.

## Scripted checks on the prompt (planted hit proved the scan first)
```
[0] placeholders { }
[0] comments
[0] internal refs
[3] jargon
      (311, '> 04 Verified: Closed only when the number moves. Nobody can mark it done by hand.')
      (354, '> A ticket that moved the right way closes as verified. One that did not closes as no change, which is a fact ')
      (355, '> Performance counts only verified closes, proved from the source.')
[0] dashes (unicode 2013/2014, --, spaced hyphen)
[0] point sizes
[0] KEPT OUT terms
[0] interest figures
[0] The design to reproduce
[0] content-only banned
[4] signed numbers
      (71, 'Rajat Kate, Managing Director, Crestline Intelligence Private Limited, Pune, Maharashtra. Phone +91 76209 3539')
      (139, '> +91 76209 35398')
      (388, '> CRISIL report on Relcon Infraprojects Limited, 13 Dec 2024, standalone, year to 31 Mar 2024. Board and conta')
      (401, '> +91 76209 35398')
[0] other prospect names (68 folders)
[numbers not in the allowed list] ['2013', '2014', '23', '31']
pages: 16
[0] pack > lines missing from prompt
```
Justified residual hits: "Verified/verified" are fixed product copy (04 Verified) and product text on p13; signed-number hits are the phone prefix +91; numbers 2013/2014 are the dash-check instruction, 23 is FY23, 31 is "31 Mar".
Letter dated 12 Oct 2026. Other prospect names: 0 whole-word hits across 68 folder names.
