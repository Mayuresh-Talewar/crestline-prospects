# AB-6 review gate: slots-unified.md (QA, 8 Oct 2026)

Verdict: PASS WITH FIXES APPLIED.
Lessons applied: page images opened for every quote (speaker label) and key input; entity header checked (standalone); no signed numbers; no internal refs; repo left as found.

## 1. AB-4 / README rulings applied
- WC loan 757 to 1,110: removed from p5 stats, p6 headline and tile, p12 bar line. p6 now: headline "In one quarter, cash fell from ₹584 Cr to ₹261 Cr"; tiles cash and bank 584 to 261, standalone debt 1,127 to 1,173 "after the ₹300 Cr of NCDs due in April 2026 were repaid" (deck p7 PDF p8, image checked: "Standalone Debt", NCDs "-" at Jun 26). 1,110 kept only as the interest cap with its date.
- "Receivables to 90 days" row dropped (p12). p10 bounds line now says no row is priced to the 90-day bound (GST basis). p11 DO THIS target changed from "124 to 90 days" to "ten days out, 124 to 114" (same GST trap).
- Interest is now the RANGE with the README attribution wording on p10, p11 footnote, p12 footnote, p15 sources. Values by script: 10 days 13.9 to 15.1; 30 days 41.8 to 45.4; FY24 row capped 97.1 to 105.5; % of PBTx 6.2 to 6.7 and 43.1 to 46.8; 31.0% to 33.7% of finance cost 313.0.
- Leads with % of PBT before exceptional items (225.3). PBT 390.0 / 390.2 printed nowhere.
- FY24 148-day row labelled "upper bound, not a forecast" in the row and below it.
- 32.8% labelled "of gross trade receivables before the credit-loss allowance" on p4, p7 lens 04, p9.
- Power T&D: no "transitory" paraphrase in the pack; the 110 to 120 fragment omits the reasons entirely (allowed "or not at all").
- Ratings: p4 now leads "CARE Ratings rates Ashoka CARE AA- (9 January 2026)" with the 270-day trigger (CARE.pdf p1-2 checked, analytical approach standalone). CRISIL wording as README.

## 2. Review fixes (found on page images)
- WRONG, fixed: p3 "Standalone interest cost ₹313 Cr in FY26; FY27 ₹225 to ₹240 Cr" credited to Paresh Mehta. Q1 FY27 transcript printed p19: the ₹313 Cr is the analyst's (Vaibhav Shah) figure and he says "for FY25"; Mehta only answers "around INR225 crores or INR225 crores to INR240 crores". Row removed; headline now "Four stated plans", closer "Three of these are results".
- NEEDS CAVEAT, fixed: p3 "Third-party debt" row. Q4 FY26 printed p9: Mehta says WC debt 1,126 "less cash of around INR580 crores, so approximately INR600 crores" then "debt level ... INR500 crores to INR600 crores by March '27". Relabelled "Standalone debt, net of cash".
- Fixed: p3 timing line. Q1 FY27 p15 "that should rationalize by this year-end 4Q" answers a question about collections; now "asked about collections, he said".
- Fixed: p15 said "Page references are PDF pages" but transcripts and deck are cited by printed page (verified: TR p.7 = PDF 8, p.15 = PDF 16, deck p7 = PDF 8). Now states both conventions.
- Fixed: payables ageing is Note 29 (p.223), not Note 28. p7 footnote and p9 footer corrected.
- Fixed: p15 fixed-page line missing "of your choice" (FIXED-PAGES p15). Restored.
- Fixed: p4 list rows began "- 166" / "- 124" (signed-number scan); now "•".

## 3. Quotes checked on page images (speaker label)
| Quote | Page seen | Verdict |
|---|---|---|
| "guidance, we are lowering down from 20% to between 10% to 15% ..." | TR Q1 FY27 printed p7 (PDF 8), Satish Parakh | CORRECT |
| Order inflow ₹6,000 to ₹8,000 Cr | same page, Satish Parakh | CORRECT |
| "we believe that we should go back to the old norms of 110 to 120 days"; "by post September" | TR Q4 FY26 printed p6 (PDF 7), Paresh Mehta | CORRECT; CFO's words only, metric undefined, never priced (p3, p7, p12) |
| "debt level will be in the range of INR500 crores to INR600 crores by March '27" | TR Q4 FY26 printed p9, Paresh Mehta | CORRECT with relabel |
| "And most of the payment should be in ... unbilled revenue and debtors." | TR Q1 FY27 printed p15 (PDF 16), Paresh Mehta | CORRECT |
| "9.5 is the cost of borrowing at the standard level for the working capital debt" | TR Q4 FY25 printed p15 (PDF 16), Paresh Mehta | CORRECT (in the range wording) |
| NCD 8.75% / SCF banks 9.00% | AR26 Note 27 PDF p222 / Note 28 PDF p223 | CORRECT |
| Order book 15,251; client mix 55.8/15.1/12.2/10.0/7.0 | Q1 FY27 deck printed p13 (PDF 14) | CORRECT |
| Cash flow 603.9 / 182.9 / 291.6; 617.7 / 495.7 / 591.3 | AR26 PDF p186, "Standalone Cash Flow Statement" | CORRECT |
| Ageing bands, 702.3, 2,139.4, 269.9 | AR26 PDF p212, summed from lakh by script | CORRECT |
| Payables 558.9 (not due less unearned revenue), 1,176.7, MSME 161.0 | AR26 PDF p223 | CORRECT |
| Q1 revenue 1,287.9 / 1,310.6 | RES Q1 FY27 PDF p8, "Unaudited Standalone" | CORRECT |

## 4. Figure trace
Command: `python "%TEMP%/trace.py" C:\Users\asus\Desktop\crestline-prospects\ashoka` (every number in slots-unified.md against calc output, all src PDFs/HTML text with lakh converted to crore, and the interest range / %PBTx / finance-cost share computed in the script).
Result: untraced count 9, all resolved by hand: 702.3 x2, 269.9, 558.9 (lakh row sums on p212/p223), 1.7 (1,287.9 vs 1,310.6), 76209 / 35398 x2 (fixed phone number). Genuinely untraced: 0.
Calc re-run: copied ashoka-savings.ts to the app's scripts/, `npx tsx` rc=0, `cmp` against ashoka-savings.output.txt BYTE-IDENTICAL; temp deleted; app `git status --short` identical before/after.

## 5. Other checks
- p10 within webapp-fit: third-party EPC only; HAM 10.0% printed as published order-book mix (ruled fact); no annuity / toll / SPV claim. PASS.
- Fixed pages p7, p8, p11, p14, p15, p16 compared line by line with FIXED-PAGES.md: faithful after the p15 fix. p15 headline drops "in one entity" to stay at 12 words (scope is stated in the body and p14).
- NOT printed list (MMRDA, Ivory Coast, NHAI suspension, CBI, related-party figures, six-HAM sale, CGD as business): absent. "city gas" appears only in the webapp-fit scope card as not modelled.
- Reader block: names, titles, address (Nasik 422 011), letters 153 and 149 words, same facts in both. PASS.
- PLAYBOOK rules 1-12: pass (rule 6 now via disclosed range; rule 7 rows overlap, GST conservative, interest only if cash repays debt; rule 12 p8 no step values).

## 6. Scans after last edit
0 em/en dashes; 0 banned words; 0 headlines over 12 words; 0 "you said"; 0 signed numbers (phone +91 only); 0 other-company strings; 0 internal refs; 0 "{".

## Open for Garvis
- p6 headline is a new figure-led headline (cash 584 to 261); confirm the tone.
- p15 sources still call 8.75% to 9.5% "the rate range the company discloses" (FIXED-PAGES wording); 9.5% is spoken on a call, not in the AR. Acceptable under the README range ruling, flagged.
