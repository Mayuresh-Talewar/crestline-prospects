# AB-4 verify report: Ashoka savings calc (QA, 8 Oct 2026)

Lessons applied: page images opened for every key input and quote (speaker label checked); entity/basis checked before each claim; repo left as found.

## 1. Calls and mapping
- `leversFor`, `simulate`, `toTerms` (lib/finance/cycle-simulation.ts:120,198,243), `valueOfADay` (lib/finance/working-capital-cycle.ts:310), `priceLevers` (lib/insights/levers.ts) used as the app uses them. cash = -moved x perDay (cycle-simulation.ts:208); dso floor = terms.payment (90), cad floor 0 (no certification window disclosed); DIO/DPO not simulated. Correct.
- priceLevers carry = value x 9.5% uncapped; both 477.7 < 1,110 so cap irrelevant there.

## 2. Re-run
Copied to `scripts/_tmp-ashoka-savings.ts`, `npx tsx` rc=0, `cmp` against `ashoka-savings.output.txt`: BYTE-IDENTICAL. Temp file deleted; `git status --short` identical before/after (only the two pre-existing untracked docs entries).

## 3. Inputs checked on page images
| Input | Source seen | Verdict |
|---|---|---|
| Revenue from operations FY26 5,811.7 / FY25 7,061.4 | AR26 standalone P&L, PDF p185 (Rs lakh 5,81,165.66 / 7,06,142.89) | CORRECT |
| Finance cost 313.0; PBT before exceptional 225.3; exceptional 164.7; PAT 320.4 | AR26 p185 | CORRECT |
| PBT 390.0 | AR26 p185 prints PBT 39,017.64 lakh = **390.2** (includes 0.17 share of profit from partnership firms; script computes 225.3 + 164.7) | WRONG: 390.2. Every rounded % of PBT is unchanged (3.9, 11.6, 27.0, 13.0, 11.7, 15.6) |
| TR FY26 312.2 + 1,656.4; FY25 496.3 + 1,272.0; CA 2,646.1 / 2,268.0; inventory, payables, acceptances, contract liabilities | AR26 standalone BS PDF p183-184 | CORRECT |
| FY24 TR 1,428.1, CA 1,699.1, revenue 7,726.7 | AR25 p177/179 comparative = AR24 p148/150 original, identical | CORRECT, same basis, not restated |
| 32.8% past due > 6 months (702.3 of 2,139.4) | AR26 Note 14 ageing PDF p212, trade receivables rows only, gross before ECL, from due date | CORRECT; caveat "of gross trade receivables before expected-credit-loss allowance; contract assets excluded" |
| WC loan 757 (31 Mar 2026) | CFO opening remarks, Q4 FY26 call 22 May 2026, PDF p6 (printed p5), standalone | NEEDS CAVEAT (see traps) |
| WC loan 1,110 (30 Jun 2026) | Q1 FY27 deck p7 (PDF p8), "Standalone Debt Breakup" | NEEDS CAVEAT (see traps) |
| "9.5" | Q4 FY25 transcript, 26 May 2025, printed "Page 15 of 16" (PDF p16); speaker **Paresh Mehta**: "9.5 is the cost of borrowing at the standard level for the working capital debt, which will typically remain." Asked by Hardik Gandhi (HPMG) about finance cost falling as ~Rs 5,000 Cr of debt leaves via monetisation. | CORRECT as quoted; it is a spoken, 16-month-old rate |
| Note 27 MCLR wording | AR26 PDF p222 (printed 208): "Variable - Range of interest rates for :- 3 Month MCLR + Spread and 1 Year MCLR + Spread", no number | CORRECT |
| "110 to 120 days" | Q4 FY26 call PDF p7, printed "Page 6 of 13"; speaker **Paresh Mehta**, answering Vaibhav Shah's "Last year, we were around 110 days odd. This year, it has almost doubled" | CORRECT; metric undefined; never used as a target in the calc (labelled rows only) |

## 4. Hand recompute (all match the output)
perDay 5,811.7/365 = 15.922. 10 d = 159.2; 30 d = 477.7; x9.5% = 15.1 / 45.4; /320.4 = 4.7 / 14.2%; /225.3 = 6.7 / 20.1%.
FY26 R+CA days 4,614.7/5,811.7x365 = 289.8; FY24 3,127.2/7,726.7x365 = 147.7; 142.1 d x 15.922 = 2,262.6; interest capped 1,110 x 9.5% = 105.5; /225.3 = 46.8%.
NWC FY26 1,968.6+2,646.1+247.2-1,176.7-275.9-1,017.9 = 2,391.4 (2,391.3 from lakh) = 150.2 d. To 120: 30.2 d, 480.7; to 110: 40.2 d, 639.9. Receivables 1,968.6 - 90x15.922 = 535.6.
105.5 / 313.0 = 33.7%.

## 5. Traps
- Standalone vs consolidated: every input standalone (headers checked). PASS.
- FY24 vs FY26 vintage: identical in original and comparative. PASS. (FY24 payables were restated for acceptances; NWC subtracts both, so unaffected.)
- **WC loan 757 to 1,110 is not working-capital stress alone.** Same deck/call: standalone debt 1,127 to 1,173 (+46 only); NCDs 300 to nil (Note 27: 8.75% NCDs due 9-23 Apr 2026). The +353 is mostly the NCD repayment refinanced on the WC line. Also AR26 Note 27 audited WC demand loan is **681.5**, not 757 (call figure). problems.md P5 bullet "up 353 (46.6%) in one quarter" NEEDS CAVEAT: "The working-capital loan rose from Rs 757 Cr to Rs 1,110 Cr between 31 Mar and 30 Jun 2026 as the Rs 300 Cr NCDs were repaid in April; total standalone debt moved from Rs 1,127 Cr to Rs 1,173 Cr (Q4 FY26 call p5; Q1 FY27 deck p7)." Or drop "+46.6%".
- 9.5% rate: CFO, standalone WC debt, 26 May 2025. AR26 shows lower disclosed rates (NCD 8.75%, SCF banks 9.00%), so 9.5% may overstate today's carry. Print only in the README wording: "at the 9.5% the CFO cited on the Q4 FY25 call (26 May 2025, p.15); the FY26 Annual Report states no rate". solutions.md still says "Interest columns print only if Garvis accepts": superseded by the ruling, replace with that wording.
- Interest cap: applied (min(cash, 1,110)). PASS. Cap uses the 30 Jun loan against a 31 Mar balance; state the date.
- Exceptional gain: solutions.md booklet table leads with % of PAT and % of PBT (390.0) and footnotes %PBTx. **Violates the README ruling** ("lead with % of PBT before exceptional items (225.3)"): swap the columns so % of 225.3 leads (6.7, 20.1, 6.7, 20.1, 6.7, 20.1, 46.8, 22.6, 20.3, 27.0); relabel PBT 390.2.
- "Back to FY24" row: must carry "upper bound, not a forecast" (ruling); solutions.md has only "capped". NEEDS CAVEAT.
- GST: "receivable balances carry GST ... cash figures are conservative" holds for the step rows, but NOT for "Receivables to 90 days": 123.6 days is a GST-inclusive balance over ex-GST revenue, so it overstates the gap to a 90-day term. At an assumed 18% GST the release is 1,968.6 - 90 x 15.922 x 1.18 = 277.7 (12%: 363.7). NEEDS CAVEAT: "Receivable days divide a GST-inclusive balance by ex-GST revenue, so this row overstates the gap to terms; the GST rate is not disclosed, at 18% the release would be about Rs 278 Cr." Or drop the row.
- Overlap: stated in script, table and rules. PASS.
- 110-120: labelled "CFO's words, metric undefined, NOT a target" everywhere. PASS. The NWC-to-110/120 rows put his number on our measure; keep the label (analyst's "110 days odd" for FY25 does not match our FY25 83 days, which shows the metrics differ).
- P1 "transitory one in Power T&D": he names milestone projects, ROW/appointed-date waits AND Power division receivables. NEEDS CAVEAT: "the CFO calls it 'more of a transitory' build-up from milestone-based projects, right-of-way waits and Power division receivables".

## Verdicts per headline
CORRECT: 5,811.7; 15.9/day; 159.2; 477.7; 15.1; 45.4; 4.7%/14.2% PAT; 6.7%/20.1%/46.8% PBTx; 148 to 290 days; 2,262.6; 105.5; 33.7% of finance cost; 32.8%; 313.0; 320.4; 225.3; 164.7; NWC 150 days; 480.7; 639.9.
WRONG: PBT 390.0 -> 390.2.
NEEDS CAVEAT: WC loan 757 to 1,110 (NCD refinance); 2,262.6 / 105.5 ("upper bound, not a forecast"); 9.5% interest wording; 535.6 receivables-to-terms (GST basis); table column order (PBTx first); 32.8% basis; P1 "transitory" paraphrase.
