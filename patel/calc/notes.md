# Calc notes (Patel Engineering)

Files: `pe-savings.ts` (the script, run from the app repo as `scripts/_tmp-patel-savings.ts`, a Write-created copy, then deleted by that exact name) and `pe-savings-output.txt` (its full clean output). Rs crore.

## PE-4 basis fix (Garvis must-fix)
PE-3 priced the CONSOLIDATED NWC days (company stated) on STANDALONE revenue per day: two totals in one row. The company publishes NWC days only on the consolidated basis (D4Q26 slide 36 sits in the consolidated section beside consolidated revenue of 51,027 Rs Mn; D1Q27 slide 14 beside consolidated debt of 12,927 Rs Mn; no standalone NWC days in either deck, page images checked). So option (a): every NWC row is now priced on CONSOLIDATED revenue per day, with interest capped at the CONSOLIDATED cash credit and working capital demand loan drawn, at the consolidated disclosed rate range. Receivable days stay STANDALONE days on STANDALONE revenue. The CFO's retention figure has no stated basis; it is read on the consolidated basis of the same call's NWC days. An assert now fails if an NWC row is priced on standalone revenue (BREAK=5).

## Chart to calc row
| Problem chart | Today | With Crestline mark | Calc row |
|---|---|---|---|
| P1 NWC days, FY23 to Q1 FY27 (CONSOLIDATED, company stated) | 137 (Q1 FY27) | 127 (10 days) and 107 (30 days) | NWC rows: Rs 139.80 Cr and Rs 419.40 Cr; interest Rs 13.84 to 17.27 Cr and Rs 41.52 to 51.80 Cr a year |
| P2 receivable days, FY24 to FY26 (STANDALONE, computed) | 58.6 | 48.6 (10 days only) | receivable row: Rs 138.81 Cr; interest Rs 13.74 to 17.14 Cr a year |
| P3 retention in days (CFO's figure, CONSOLIDATED revenue) | 14.3 to 17.9 | 4.3 to 7.9 (10 days only) | RETENTION rows (priceLevers) plus the 10 day NWC row: Rs 139.80 Cr; interest Rs 13.84 to 17.27 Cr a year |

A 30 day step on receivables (28.60 days) is not drawn: it falls below the 40 to 45 days the CFO already describes, so it would read as a promise. On retention a 30 day step exceeds the whole balance.

## Inputs, each traced (page images checked in PE-4)
| Input | Value | Source |
|---|---|---|
| FY26 consolidated revenue from operations | Rs 51,027.42 Mn = Rs 5,102.74 Cr | R4Q26 PDF p20, statement of audited consolidated financial results, year ended 31 Mar 2026, filed 14 May 2026 |
| FY26 standalone revenue from operations | Rs 50,665.64 Mn = Rs 5,066.56 Cr | R4Q26 PDF p9, standalone statement, same date |
| Value of a day | Rs 13.98 Cr consolidated; Rs 13.88 Cr standalone | Computed: revenue / 365 |
| Interest cap, consolidated | Rs 7,358.58 Mn = Rs 735.86 Cr | AR26 PDF p87, printed p146, "Notes to Consolidated Financial Statement", note 23, "Loans repayable on demand, From bank", 31 Mar 2026; footnote 2(a) on printed p147: "Includes cash credit and working capital demand loan from various banks". Filed 24 Aug 2026 |
| Interest cap, standalone | Rs 7,358.58 Mn = Rs 735.86 Cr | AR26 PDF p125, printed p223, standalone note 23, same line |
| Rates | 9.90% and 12.35% p.a., the two ends only | Cash credit, yearly renewal, rate of interest 9.90% to 12.35% p.a. (prior year 10.20% to 13.25%), in both sets of notes: AR26 PDF p87, printed p147 (consolidated) and PDF p126, printed p224 (standalone) |
| NWC days | FY23 160, FY24 145, FY25 105, FY26 120, Q1 FY27 137, CONSOLIDATED | D4Q26 slide 36 (PDF p37), filed 14 May 2026; D1Q27 slide 14 (PDF p15), filed 10 Aug 2026 |
| Receivable days | 62.3 / 72.3 / 58.6 (FY24 / FY25 / FY26), STANDALONE | src/pe-calc-output.txt; balances AR26 PDF p120 (8,135.37 and 9,926.00 Rs Mn), AR25 PDF p169 (7,524.94 Rs Mn) |
| Payable days | 203.3, STANDALONE | src/pe-calc-output.txt (used only to prove payables release nothing) |
| Retention | Rs 200 to 250 Cr | Rahul Agarwal, CFO, T1Q27 PDF p15 (printed 14 of 15), call 11 Aug 2026, filed 17 Aug 2026; speaker label checked |

The consolidated and standalone cap lines carry the same amount at 31 Mar 2026 (the prior year differs: 8,619.30 against 8,527.70 Rs Mn). No step reaches the cap (largest Rs 419.40 Cr against Rs 735.86 Cr), so the cap does not bind. data.md section 4 suggested the CFO's Rs 847 Cr consolidated working capital debt (T4Q26 PDF p8) as the cap; the note 23 line is used instead because it is the one line that holds the cash credit the rate applies to, and it is the smaller of the two.

## Clamp bounds (lib/finance/cycle-simulation.ts)
No terms passed (the filings state no payment term, certification window or vendor terms). Then: asset legs min 0, max now x 1.4 (or now + 30); payable leg max = today (held). Each step rides on one asset leg of `simulate()` with perDay set to the row's own basis; the leg's label is never printed. `priceLevers` converts the CFO's retention figure to days (its `days` field = retention / perDay).

## Asserts, each broken once (BREAK=n), then clean
| n | Sabotage | Result |
|---|---|---|
| 1 | release made negative | FAIL "no negative release" (and the cross check also failed) |
| 2 | 11% used as a rate | FAIL "interest only at 9.90% and 12.35%, within the cap" |
| 3 | independent route off by Rs 1 Cr | FAIL on the independent cross check |
| 4 | payable leg made to release cash | FAIL "payables never release cash" |
| 5 | NWC rows priced on standalone revenue (the PE-3 mix) | FAIL on the basis assert and the independent cross check |
| clean | none | ALL ASSERTS PASSED, exit 0; run twice, byte-identical |

Independent route: Rs Mn revenue of the row's own basis x days / 365 / 10, plain arithmetic, no app code. Before the fix, the PE-3 script was re-run from a Write-created copy: output byte-identical to the stored PE-3 output.

## Rules carried into the booklet
Rows overlap and are never added. Interest only if the released cash repays cash credit, both ends shown, with the cap. Revenue is ex GST, so the cash figures are conservative. Every rupee figure is priced on the basis of its days, and both are labelled wherever printed. Scenario, not a forecast.
