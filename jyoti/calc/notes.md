# Jyoti Structures: savings calc notes (JS-3)

## 1. Chart to calc row map (written BEFORE the calc was run)

| Problem chart (problems.md / solutions.md) | Today bars (source) | With-Crestline mark | Calc row that feeds it |
|---|---|---|---|
| P1 Running receivables, days of revenue | Mar 2025 220 days, Mar 2026 116 days (data.md s4, AR FY26 p124 vintage) | 106 days (a), 86 days (b); cash 20.57 / 61.72 | Row A and Row B (running book) |
| P2 Under-6-months bucket, days of revenue | Mar 2025 129 days, Mar 2026 104 days (data.md s4, AR FY26 p124 vintage) | 94 days (a), 74 days (b); same cash as A / B | Row C (context: the same steps read on the 104-day bucket) |
| P3 Customer advances, Rs Cr | Mar 2025 134.21, Mar 2026 92.92 (data.md s5, AR FY26 p100) | hollow segment on the Mar 2026 bar to 113.49 (a) and 154.64 (b) | Row D (context: A / B cash beside the advance cushion) |

Rows overlap and are never added. Row C and Row D reuse the cash of Row A and Row B; they are other readings of the same days, not extra savings.

JS-4 (Garvis rulings a and b): P2 is now a context panel inside the P1 chart (Row C days 94 and 74, no cash label). P3 no longer stacks a hollow top on the advances bar: its with-Crestline mark is a separate callout of Rows A and B (20.57 and 61.72). Row D's sums (113.49, 154.64) are no longer drawn. The calc itself is unchanged.

## 2. Commentary (after the run)

Script: `jyoti-savings.ts` (run from the app repo as `scripts/_tmp-jyoti-savings.ts`, then deleted). Full output: `jyoti-savings-output.txt`. The mapping above held: every planned mark value came out of the run unchanged.

**What was run.** The app's own `simulate` (lib/finance/cycle-simulation) on one leg, receivables, and `priceLevers` (lib/insights/levers) on the same move. Value of a day = FY26 revenue 750.87 / 365 = 2.057 Cr a day (Garvis ruling JS-3). Standalone, AR FY26 vintage only.

**Inputs passed and not passed.**
- Interest rate 0%: the filings give no rate to price it at (data.md s8), so no interest figure exists anywhere in this calc.
- No contract terms: payment, certification and vendor terms are all null. The company's policy line "payable within 90 days or less" (AR FY26 p105) is a general policy, not a term signed on a named contract, so it is not passed as a floor.
- No targets: the company states no working-capital target (depth.md s1).

**Results (cash released once, never a yearly figure).**
| Row | Move | Days | Cash released once |
|---|---|---|---|
| A | 10-day step on the running book (238.93 Cr) | 116 to 106 | Rs 20.57 Cr |
| B | 30-day step on the running book | 116 to 86 | Rs 61.72 Cr |
| C, context | the same steps read on the under-6-months bucket (214.18 Cr, 104.11 days) | 104 to 94; 104 to 74 | same as A; same as B |
| D, context | Mar 2026 customer advances 92.92 Cr plus the A or B cash | | 113.49; 154.64 (Rs Cr, a reading, not a saving) |

**Asserts, each broken once and seen to fail, then run clean.**
| Assert | How it was broken | Result |
|---|---|---|
| no negative release | step reversed, so days are added | failed: "Row A: negative release" |
| interest = 0 | a non-zero test rate (mode `interest`) | failed: "Row A: interest must be 0" |
| priceLevers cash = simulate cash | lever value nudged off the simulate value (mode `match`) | failed: "priceLevers ... != simulate ..." |
| payables never release cash | a vendor ceiling far above today's days (mode `payables`) | failed: "payables released cash ... at DPO 77" |
| all four | clean run | "ALL ASSERTS PASSED", exit 0 |

The payables check runs on current trade payables (116.20 Cr, 67 days) only to prove the rule: asked to pay 10 or 30 days later, the simulator holds the leg at 67 days and releases nothing. None of the payables check is printed.

**Caveats that travel with every printed figure.**
1. Rows overlap and are never added. C and D reuse the cash of A and B.
2. The ageing note counts from the due date of payment, not the bill date, so the days are a floor on the real wait from bill to cash.
3. Receivables include GST and revenue does not. Days are therefore slightly high, and cash at revenue per day is conservative.
4. Scenario, not a forecast. Crestline has no Jyoti data; the steps are sizes of move, not findings.
5. No interest, no yearly carry, no whole-book days figure.
