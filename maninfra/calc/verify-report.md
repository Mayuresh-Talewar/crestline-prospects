# MI-4 independent verification (QA), 8 Oct 2026

Scope read: calc/maninfra-savings.ts + .output.txt, problems.md, solutions.md, README.md rulings, data.md; app maths lib/finance/cycle-simulation.ts, lib/finance/working-capital-cycle.ts (valueOfADay), lib/insights/levers.ts (priceLevers). Only maninfra/ opened. Image file names are PDF pages (AR26 printed p. = PDF p. - 22).

## 1. Calls, mapping, no carry
- Calls match the app: simulate (cash = -moved x perDay, clamp to [terms ?? 0, max]), toTerms (empty when every target is null), leversFor (dio/dpo dropped because perDay null), valueOfADay, priceLevers (retention lever = whole balance, days = balance / perDay).
- RATE = 0 passed to all three rate inputs (valueOfADay, basis.ratePct, priceLevers financingRatePct); carry asserted 0 on every row.
- Red test: scratch copy with RATE = 9 failed with `AssertionError: rate 0 must give zero carry`. Check works. Scratch deleted.

## 2. Re-run
- `cp calc/maninfra-savings.ts scripts/_tmp-mi4.ts && npx tsx scripts/_tmp-mi4.ts | cmp - calc/maninfra-savings.output.txt` -> IDENTICAL (byte-for-byte), exit 0.
- Scratch removed; repo git status as found (only the pre-existing `?? docs/03-agent-scorecard.md`, `?? docs/onboarding/`).
- Trace scan (every number in problems.md + solutions.md against output/data.md/depth.md): 3 unmatched tokens, all slide numbers (19, 28, 41), 0 untraced figures.

## 3. Hand recompute (all agree)
perDay 285.5519/365 = 0.7823 Cr; receivable days 37.9/0.7823 = 48.4; CA days 11.6/0.7823 = 14.8; A = B = 10 x 0.7823 = 7.8; C = 30 x 0.7823 = 23.5 (61.9% of 37.9; 1.06% of 2,220.2; 4.21% of 557.8); D capped at the floor 0 = 11.6; retention 3.6 = 4.6 days; per Rs 1,000 Cr: 27.4 / 9.1 / 6.8; related party 6.40/37.9 = 16.9%, third-party 31.5; revenue -64.2% / -27.7%; receivables -86.3%; order book 305/980 -1 = -68.9%; net trade WC FY22-FY26 0.0 / 100.6 / 2.8 / 10.8 / -42.8; crude days 121/127/35/57/48; consolidated 630.5 vs 1,108.1 = -43.1%.

## 4. Inputs checked on page images
- AR26 p.108 [img p130] STANDALONE balance sheet: receivables 3,613.48 + 180.46 lakh = 37.9; payables 645.76 + 1,219.33 = 18.7; current borrowings "-" (nil, no non-current borrowing line); total assets 2,22,019.80; cash 2,129.25 + bank 34,227.22 + current investments 19,427.29 = 557.8; inventories 1.0. Signed by Manan P Shah, MD and Ashok M Mehta, Whole Time Director & CFO.
- AR26 p.148 [img p170] standalone note 4.06(a): single EPC segment; contract assets 1,162.24, contract liabilities 7,464.28. Both correct.
- AR26 p.127 [img p149] ageing: over 6 months = 170.27 + 206.23 + 0.29 + 1.39 = 378.18 lakh = 3.78 Cr; under 6 months 3,054.84 lakh. The percentages are of current undisputed-good receivables (36.13 Cr), not of 37.9. The 180.46 "not due" anomaly is on the image as described.
- AR26 p.160 [img p182] related-party trade receivables 639.60 lakh; Atmosphere Realty 548.72 (FY25 444.58). Correct.
- AR26 p.175 [img p197] CONSOLIDATED revenue 63,046.14 lakh (FY25 1,10,806.85). Correct. Consolidated borrowings 1,776.59 + 4,009.06 = 57.9 (note 2.16, text).
- Q4 FY26 call, 14 May 2026: p.3 "about INR392 crores, which shall be executed over the next 3 to 4 years"; p.4 "approximately INR1,800 crores ... approximately INR990 crores"; p.5 "nothing less than INR2,500 crores", under the speaker label "Manan Shah:" on the page; p.9 "heavy lifter". Pages 3-4 continue Manan Shah's opening remarks. His hand-over is on p.1, which has no image, so p.1 was checked from the text only.
- Analyst meet, 21 Aug 2026, p.6 [img AM_p6]: speaker label "Manan Shah (MD, MICL)"; quote "almost on the final verge of negotiations for one of the significantly large order for EPC ... hopefully in the next two quarters". Correct, and never shown as won.
- IP Q1FY27: Rs 305 Cr "As on Jun-26" is printed SLIDE 27 (PDF p.28); BMCT Rs 1,800+ Cr, "95%+ EXECUTED As on Jun-26" is printed SLIDE 26 (PDF p.27). Slide 27 footnote: "Order Book pertaining PMC contracts includes only PMC fee". 61% residential (group projects) / 39% infra.

## 5. Traps
- Standalone vs consolidated: every EPC figure is standalone and tagged; consolidated revenue and borrowings tagged [Consol]. PASS.
- EPC vs MICL: 1,800 / 990 / 2,500 / GDV are tagged [MICL] and called presales; never shown as construction figures. PASS.
- Group receivables: P4 labels them and never calls them a risk. BUT rows A/C and the P2 ageing tail are on ALL receivables, including the Rs 6.40 Cr owed by group companies. Caveat below.
- Negotiated order: "NOT signed", "No such order is signed" in both files. PASS.
- Illustrative rows: the s.5 / booklet row is labelled ILLUSTRATIVE. PASS. Overlap: "rows overlap, never added" in both files. Retention may sit inside receivables, so it overlaps A/C too (stated in calc s.1). PASS.
- Interest: none printed; "cash released, once" throughout. PASS (README ruling).

## 6. Verdicts
| Figure | Verdict |
|---|---|
| Revenue 285.6, receivables 37.9, CA 11.6, retention 3.6, payables 18.7, borrowings nil, total assets 2,220.2, cash etc. 557.8 | CORRECT |
| Per day Rs 0.782 Cr; receivable days 48.4; CA days 14.8 | CORRECT. The GST caveat is already in the footnote |
| Row A 7.8, Row B 7.8, Row D 11.6, retention ceiling 3.6 / 4.6 days | CORRECT |
| Row C 23.5 (62% of receivables) | NEEDS CAVEAT: "Receivable rows use all FY26 receivables, including Rs 6.40 Cr owed by group companies; on third-party receivables alone (Rs 31.5 Cr) Row C would be 75% of the balance." |
| Ageing: Rs 3.78 Cr (10.5%), 84.5% under six months | NEEDS CAVEAT: "share of current, undisputed receivables (Rs 36.13 Cr, AR26 p.127); not split between group and third-party clients." |
| Net trade WC -42.8 | CORRECT arithmetic. NEEDS CAVEAT (no printed negative): "clients' advances exceeded the EPC business's receivables, contract assets and stores, net of payables, by Rs 42.8 Cr." |
| Order book 980+ to 305, -68.9% | NEEDS CAVEAT: "Jun-26 book counts PMC contracts at fee only (IP Q1FY27 slide 27); 980+ is a floor and its basis is not stated." Fix the cites: order book = slide 27, BMCT = slide 26 (printed slide numbers). |
| "Most of the current order book is group projects" | NEEDS CAVEAT: "61% of the Rs 305 Cr book is residential, the group's own projects (IP Q1FY27 slide 27)." |
| Related party 6.40 (16.9%), Atmosphere 5.49 / 4.45, third-party 31.5 | CORRECT |
| Revenue -64.2% / -27.7%, receivables -86.3%, consolidated 630.5 / -43.1%, borrowings 57.9 | CORRECT |
| Per Rs 1,000 Cr: 27.4 / 9.1 / 6.8 (ILLUSTRATIVE) | CORRECT |
| Quotes: 2,500 (p.5), 1,800 / 990 (p.4), 392 and 3 to 4 years (p.3), heavy lifter (p.9), negotiation (AM p.6), all Manan Shah | CORRECT. For the AM quote, print the label as on the page: "Manan Shah (MD, MICL)" |

Not image-verified (text or data.md only): FY22-FY25 balances, FY25 ageing 1.19 (2.0%), note 4.09 related-party revenue 14.9, IP Q4FY23 slide 19 (the 980+ is in the text), GDV 18,125+.
WRONG: none.
