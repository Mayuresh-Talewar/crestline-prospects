# Ashoka Buildcon Limited - problems (AB-3), 8 Oct 2026

BASIS: every figure is STANDALONE (Ashoka Buildcon Limited, the EPC company). Consolidated figures (BOT/HAM SPVs) are not used. Rs crore. Days = year-end balance / revenue from operations x 365, one base per row.
Figures: `calc/ashoka-savings.output.txt` (script `calc/ashoka-savings.ts`), inputs from data.md sections 1-3.
Pages: AR26 PDF p183-186 (FY26, FY25 balance sheet, P&L, cash flow), AR25 p177-180 (FY24), AR24 p148-151 (FY23, restated per its Note 66), AR23 p132-135 (FY22). Annual reports signed 25 May 2022, 24 May 2023, 22 May 2024, 23 May 2025, 21 May 2026 (exchange filing day not verified: print the month).
Rounding: the script works from crore inputs, data.md from lakh. Differences of 0.1 (NWC FY23 644.8 vs 644.9, FY24 620.4 vs 620.5, FY26 2,391.4 vs 2,391.3; past due 702.2 vs 702.3) are rounding. Print data.md's lakh-based figure where they differ.
Print rules: no signed numbers (write "used Rs 591.3 Cr in operations"), no related-party receivable figures, CRISIL only as "CRISIL, before its rating was withdrawn at the company's request (June 2026)".

## P1. Money earned and not yet received has nearly doubled in days: 148 to 290
| STANDALONE | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Trade receivables (current + non-current) | 1,112.9 | 1,243.6 | 1,428.1 | 1,768.3 | 1,968.6 |
| Contract assets | 813.4 | 1,351.1 | 1,699.1 | 2,268.0 | 2,646.1 |
| Receivables + contract assets, days of revenue | 151 | 149 | 148 | 209 | 290 |
| Revenue from operations | 4,644.6 | 6,372.3 | 7,726.7 | 7,061.4 | 5,811.7 |

- The balance grew Rs 1,487.5 Cr (3,127.2 to 4,614.7, FY24 to FY26) while revenue fell from 7,726.7 to 5,811.7.
- The company's own ratio says the same: trade receivables turnover (revenue / average receivables + contract assets) 1.28 in FY26 against 1.85 in FY25, "Increase in Trade receviables and contract assets resulting in overall decline" (AR26 Note 60, PDF p253; [sic]).
- CARE Ratings (9 Jan 2026) names a gross-current-asset period above 270 days as a downgrade trigger (README ruling; quote checked by AB-1).
- Respectful frame: the CFO calls the build-up "more of a transitory" one in Power T&D (Paresh Mehta, CFO, Q4 FY26 call, 22 May 2026, p6). The filings show the level; they do not show which jobs carry it.

## P2. Contract assets: 166 days of revenue sits built but not yet billable
| STANDALONE | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Contract assets | 813.4 | 1,351.1 | 1,699.1 | 2,268.0 | 2,646.1 |
| Contract-asset days | 64 | 77 | 80 | 117 | 166 |

- Larger than trade receivables every year since FY23 (2,646.1 against 1,968.6 in FY26).
- What it is, in the company's words: revenue earned where "receipt of consideration is conditional on successful completion of project milestones/certification" (AR26 PDF p211).
- 73.8% (1,995.7 of 2,703.6 gross) is "not due"; contract assets with a significant increase in credit risk rose from 69.1 to 366.8, all aged six months to two years (AR26 Note 14 ageing, PDF p212). Allowance 57.6 against 15.6 (Note 12).
- Ours vs the client's: measuring, preparing and submitting a bill are Ashoka's own acts; certifying it is the client's. The accounts do not split the 166 days between them.

## P3. Net operating working capital went from 47 to 150 days, and operations used cash two years running
| STANDALONE | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Net operating WC (receivables + contract assets + inventory - payables - acceptances - contract liabilities) | 592.0 | 644.9 | 620.5 | 1,606.3 | 2,391.3 |
| ...days of revenue | 47 | 37 | 29 | 83 | 150 |
| Net cash from operating activities | 161.1 inflow | 72.8 inflow | 410.1 inflow | 591.3 used | 291.6 used |

- FY25 and FY26 together: Rs 882.9 Cr used by operations (AR26 p186; AR25 p180).
- Operating profit before working-capital changes held at 597.0, 617.7 and 603.9 (FY24-FY26): the business earned; the cash stayed in the cycle.
- The CFO's own words: "we should go back to the old norms of 110 to 120 days" (Paresh Mehta, CFO, Q4 FY26 call, 22 May 2026, p6). His metric is not defined and the timing later moved to Q4 FY27: quote it, never use it as a target or equate it with the 150 above.

## P4. One rupee in three of trade receivables is more than six months past due
| STANDALONE, from due date (AR26 Note 14, PDF p212) | 31 Mar 2025 | 31 Mar 2026 |
|---|---|---|
| Gross trade receivables (ageing table) | 1,912.4 | 2,139.4 |
| Past due more than 6 months | 639.9 (33.5%) | 702.3 (32.8%) |
| of which 1-2 years | 269.9 | 346.0 |
| of which 2-3 years | 39.9 | 89.7 |
| of which over 3 years | 36.6 | 53.9 |
| ECL charge in the year (cash-flow line) | 69.3 | 110.5 |

- ECL charge FY24 27.9, FY25 69.3, FY26 110.5; FY22 and FY23 were reversals (depth.md 10).
- Top ten customers hold 70.74% of gross trade receivables (FY25 71.81%) (AR26 PDF p234).
- Terms the AR states: "generally on terms of 30 to 90 days" (PDF p213); "credit period ranging from 45 to 90 days" (PDF p234). Against those, the share past six months is not a timing difference.

## P5. The cycle is being paid for with borrowed money: WC loan 757 to 1,110, finance cost 313
| STANDALONE | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Finance cost | 85.6 | 141.0 | 228.1 | 296.4 | 313.0 |

- Working-capital loan 757 at 31 Mar 2026, 1,110 at 30 Jun 2026: up 353 (46.6%) in one quarter (Q4 FY26 call p5; Q1 FY27 deck p7, Aug 2026).
- The company links the two itself: "Finance cost has increased mainly due to increased working capital cycle on account of nature of projects where initially working capital requirement is more" (AR26 MD&A, PDF p44; same pattern FY24 and FY25).
- Finance cost FY26 313.0 against PAT 320.4 and PBT before exceptional items 225.3.
- Rate: the AR prints the WC demand loan as "3 Month MCLR + Spread and 1 Year MCLR + Spread", no number (Note 27, PDF p222). The only numeric rate stated for standalone WC debt: "9.5 is the cost of borrowing at the standard level for the working capital debt" (Paresh Mehta, CFO, Q4 FY25 call, 26 May 2025, p15).

## What their books cannot tell them (all five problems)
The annual report and SAP S/4HANA ledger give a balance per account at a date. They do not say:
- which project and site holds the 290 days, and how much is road against Power T&D (the standalone segment note is omitted, AR26 Note 52, PDF p249);
- which RA or milestone bill, at which step: measured, submitted, waiting for the client to certify, certified and not invoiced, invoiced and not paid;
- whose desk it sits on (Ashoka's or the client's), and since when;
- what a day off each step is worth in rupees, ranked, with a named owner;
- the auditor's own remark on the books: audit trail "not enabled for certain changes made using privileged/administrative access rights" in SAP HANA, and no backup logs for the Tally part (AR26 PDF p175-176). Not a qualified opinion; it is a reason a second, event-level route to the same figures is worth having.
