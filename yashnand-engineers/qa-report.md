# QA report: Yashnand (YE-S23)

## Source re-trace (raw CRISIL text re-fetched 2026-10-12, 5 Dec 2024 rationale)
Matched in text: 575.08 / 441.68, PAT 39.75 / 33.12, order book 1,386.67 (Mar 2024) / 1,481.70 (Sep 2024), 24.12% utilisation (12 months to Oct 2024), cash 35.98, debtors 120, inventory 29, GCA 151, "usually 60-70", March 2024 sales, set up Dec 2001, private limited Feb 2019, AA class (special category I), states. 30.2% = 575.08/441.68 - 1 (script check). Scripted scan: all prompt numbers traced (only list numbers 01 to 05, FY23, 31 March are untraced and are labels/dates).
## Calc
calc\ye-savings.ts and output: per day 1.575562 Cr; ten days 15.76; thirty 47.27. 7 asserts pass; each of 5 breakable asserts failed visibly (calc\break-tests.txt). Temp script deleted; app git status shows only the two docs entries. priceLevers not run: only one lever has a base, so ranking is trivial (stated on p12).
## Deviations from fixed copy
- p8: fixed line "Step waits are not public..." and footer "Illustrative stages. Totals are from published accounts." replaced by the estimate basis line, WHOLE RA BILL line and "Estimated stages. The payment day count is from published accounts." (client orders 2026-10-12). Stage days added (Estimate/Published tags).
- p14: claims/arbitration line dropped (brief). p7 lens figures filled. Tagline "waiting" version per brief. p15 uses no-interest variant.
- Letter dated 12 Oct 2026 (launch message) not 9 Oct. No address: "Mumbai" in the rationale is CRISIL's own dateline, not the company's city.
- Basis: README says CRISIL computes debtor days on operating income; data.md says the basis is not stated. Pack prints "as CRISIL reports; CRISIL does not state the basis" and values a day at operating income / 365.
## Charts
Used: The cash cycle (partial: 29 and 120, no total), Process map, scenario bars. Skipped: Pressure on the cycle (no rate/balances), Cash movement (no cash flow statement), How these four move together (single year).
## Scans on the prompt (planted hit test shown to trigger every scan)
0 placeholders, 0 comments, 0 dashes, 0 " pt", 0 design words, 0 kept-out terms (BBB, A-, A2+, 280.5, 31 Cr, 249.5, 456.43, 35-37, 35 to 37, promoter, grades), 0 other prospect names (whole words), 0 "design to reproduce". Internal-ref hit: "04 Verified" is fixed product copy. "interest" hits are all "no interest priced". 16 pages.
