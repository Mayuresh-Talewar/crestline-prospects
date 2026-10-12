# KEC: five working-capital problems Crestline answers (KEC-3, 2026-10-07)

Every figure is from `kec/data.md` (KEC-1). Source keys (AR26, IP-Q4, IP-Q1, PR-Q1, T-Q4, T-Q1) and page notation are those of data.md. KEC consolidated, INR Cr. **V** verified, **C** computed (data.md section 13 script `python -I src/kec_calc.py`, plus the KEC-3 script below). No peer figure is used anywhere in this file.
KEC-3 arithmetic (every growth, index and share below was run, not hand-counted; inputs copied from data.md s.2, 4, 5, 6, 7): `python -I -c "r=[17281.71,19914.17,21846.70,23505.54];c=[7465.61,9088.37,11043.51,12127.56];print([round(x/r[0]*100,1) for x in r],[round(x/c[0]*100,1) for x in c],round(4922.51/3669.63*100-100,1),round(1227.26/463.47,2),round(6722/1659,2),round(663.6/1659*100,1),round(644/1659*100,1))"` gives 100/115.2/126.4/136.0, 100/121.7/147.9/162.4, 34.1, 2.65, 4.05, 40.0, 38.8. The ageing and payables shares are data.md s.6 script output.

## Read first: three limits that shape every page
1. **NWC days is KEC's number, not ours.** Definition unpublished (data.md "Unverified"). Chart ONE series only: AR26 FY22-FY26 (124, 104, 107, 111, 137) plus the 134 at 30 Jun 26 (PR-Q1). Our own days (data.md s.13) are labelled "Crestline arithmetic, revenue basis" and never share an axis with KEC's.
2. **FY22 balance-sheet lines are not comparable** (reclassified). All balance trends run FY23 to FY26. Q1 FY27 has no balance sheet, only net debt, NWC days and P&L.
3. **Consolidated figures tell KEC's story; a pilot is one INR entity** (webapp-fit.md). The booklets say so in one line and never say Crestline reads KEC's group or SAE Towers.

## P1. Work done and certified, still not cash: contract assets 12,128, retention 4,923
**Headline: contract assets are up 62.4% since FY23, revenue 36.0%.**
| | FY23 | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|---|
| Contract assets | 7,465.61 | 9,088.37 | 11,043.51 | 12,127.56 | AR26 PDF p.117 (pr. 230); AR25 p.110; AR24 p.99 (V) |
| Index, FY23 = 100 | 100 | 121.7 | 147.9 | 162.4 | C |
| Revenue index | 100 | 115.2 | 126.4 | 136.0 | C |
| of which retention receivables | n/c | n/c | 3,669.63 | 4,922.51 | AR26 PDF p.132 Note 20 (V) |
- Retention +34.1% in FY26 against revenue +7.6% (C). Retention is 76.4 days of revenue, from 61.3 (data.md s.13).
- Contract-asset movement in the cash-flow statement: (1,022.11) FY26, (2,017.72) FY25, (1,645.80) FY24 (AR26 PDF p.118; AR25 p.111) (V).
- KEC's own words: contract assets "transferred to trade receivables when the rights to collection becomes unconditional due to passage of time" (AR26 PDF p.132). Saudi contracts "20% retention ... heading into completion"; CFO: half of retention released at handover, half six months later (T-Q4 p.9; T-Q1 p.18).
- The auditor lists "Recoverability of Trade Receivables and Contract Assets" as a key audit matter (AR26 PDF p.111-112), a fact about judgement, not a criticism.
- **What the accounts cannot tell them:** which project and bill the 12,128 sits on; how much is awaiting certification vs retention not yet due vs disputed; since which date; whose desk; contract-asset ageing is **not published** (data.md s.14).
- **Chart:** indexed lines, FY23 = 100 (revenue 136.0, contract assets 162.4), labelled at the end; beside it a blank-dashed stage timeline (work done, measured, certified, billed, paid) for what the ERP will fill.
- **Crestline answers with:** O2C stage waits and certification queue (`/projects/[id]/o2c`), retention ledger per bill (`RetentionItem`), "ours vs client's" split by the act that ends each wait. Status: YES on demo source (webapp-fit 1.1).

## P2. The old bills are getting older: over six months 9.0% to 18.2%
**Headline: receivables over six months old went from 463 to 1,227 Cr in one year.**
| Current trade receivables, gross, from due date | 31 Mar 25 | 31 Mar 26 |
|---|---|---|
| Not due | 3,277.90 | 3,337.84 |
| Under 6 months | 1,418.55 | 2,179.95 |
| 6 months to 1 year | 266.95 | 691.70 |
| 1 to 2 years | 124.68 | 209.01 |
| 2 to 3 years | 18.77 | 92.35 |
| Over 3 years | 53.07 | 234.20 |
| Total gross | 5,159.92 | 6,745.05 |
Source: AR26 Note 16.3, PDF p.131 (pr. 259) (V). C: over six months 463.47 (9.0%) to 1,227.26 (18.2%), 2.65 times; not due 63.5% to 49.5%.
- Two customers each above 10% of trade receivables: together 4,372.34 vs 2,417.65 (Note 54B.3, PDF p.148) (V). One Indian customer is 23.7% of revenue (C).
- Management names its pockets: water (Jal Jeevan Mission) receivables 800 to 900, of which 400 to 500 overdue, "Balance are pending certification" (T-Q1 p.7); Afghanistan about 300 "due for payment for some time" (T-Q1 p.7); railway claims 150 to 200 to realise (T-Q1 p.19). Management statements, not audited balances.
- Debtors turnover: 91 days FY26 vs 81 FY25, KEC's own formula (AR26 PDF p.67) (V).
- **Cannot tell them:** which client, project or bill is in each band; since when it stalled; whose desk holds the next step; how much is the client's delay and how much is theirs; terms per contract (not published).
- **Chart:** ageing stack, two columns (Mar 25, Mar 26), the over-six-month bands highlighted. Not a donut.
- **Crestline answers with:** ageing on each bill's own due date, client screen (where is our money with this client, against its own terms), named stuck cases ranked by value x days. Status: YES on demo.

## P3. Working-capital days: 137, against the 110 the CFO has promised
**Headline: 137 days at March, 134 at June, and a stated target of 110.**
| | FY22 | FY23 | FY24 | FY25 | FY26 | 30 Jun 26 | Target |
|---|---|---|---|---|---|---|---|
| NWC days (AR26 series) | 124 | 104 | 107 | 111 | 137 | 134 | 110 by year end |
Source: AR26 PDF p.10 chart (pr. 16-17); IP-Q1 slide 32; target T-Q1 p.17 ("110 days for working capital at the end of the year", CFO, 11 Aug 2026) (V). Earlier guidance: about 120 by H1, 10 more in H2 (T-Q4 p.13, 18 May 2026).
- The 27-day gap and the 24-day gap after Q1 are subtraction (C): 137 - 110 and 134 - 110.
- Series caution: AR25 printed 112 / 112 / 122 for FY23 / FY24 / FY25; AR26 restated the same years (data.md "Unverified"). One series per chart.
- Management's reasons: "delayed customer collections, strategic inventory build-up ... temporary dispatch delays" (AR26 PDF p.33); inventory +34.4% in FY26 (C).
- **Cannot tell them:** which of the 137 days is certification, which is client payment, which is stores, which is vendor timing; which projects carry them; which part is ours to move and which needs the client. Their definition is not public, so the booklet must not restate it.
- **Chart:** line of the AR26 series with a dashed line at 110 and the 134 marked, one chart, hand-labelled.
- **Crestline answers with:** cash-cycle diagram to scale, simulator bounded by contract windows, levers ranked in one currency, per project. Status: YES per project, group level 3/5 (webapp-fit 1.3). Savings slot: {calc:GAP_DAYS_CASH}.

## P4. Growth was paid for by debt: net debt +47.5%, operating cash negative
**Headline: net debt including acceptances 4,558 to 6,722 Cr while revenue grew 7.6%.**
| | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|
| Net cash from operations | 613.74 | 311.15 | 419.07 | (414.12) |
| Capex | 178.29 | 237.38 | 182.52 | 328.68 |
| Finance costs | 538.59 | 655.13 | 663.59 | 663.60 |
| EBITDA margin % | 4.8 | 6.1 | 6.9 | 7.1 |
Source: AR26 PDF p.118; AR25 p.111; AR24 p.100; AR26 p.10 (V). C: cumulative FY23-FY26 operating cash 929.84 vs capex 926.87; finance cost FY26 = 40.0% of EBITDA (1,659) and 84.1% of PBT (789.14).
- Net debt incl. acceptances: 3,051 + 1,507 = 4,558 (31 Mar 25) to 4,601 + 2,121 = 6,722 (31 Mar 26), 6,568 at 30 Jun 26 (IP-Q4 slide 30; IP-Q1 slide 32) (V). Against EBITDA: 3.03x to 4.05x (C, net debt incl. acceptances over company EBITDA).
- **Thin margin:** Q1 FY27 EBITDA 291 vs 350, margin 5.8% vs 7.0%, PAT 73 vs 125 (PR-Q1, 10 Aug 2026) (V). One day of revenue is 64.4 Cr, one day of EBITDA 4.55 Cr, so ten days of working capital is 38.8% of a year's EBITDA (C). That ratio is the reason a day matters to profit.
- Management: "Debt could have been lower, but for the spillover of collections of INR 450 crores ... to the first week of April" (T-Q4 p.4). Target 5,500 by March 2027 (T-Q1 p.17).
- Do not print the implied 10.68% blended finance cost as KEC's rate (data.md s.8). Stated ranges only (consortium WC loans 6.90 to 8.90%, AR26 Note 30).
- **Cannot tell them:** which projects absorbed the cash; peak funding need inside a quarter (a closing figure hides the trough); what a project's bills cost to carry.
- **Chart:** paired bars, operating cash vs net debt change by year (small), or a waterfall of FY23-FY26 operating cash to capex. One chart.
- **Crestline answers with:** peak funding need (the trough, not the close), cost of carry per project at a stated rate, funding map. Borrowings themselves are NOT in the feed (webapp-fit 1.3), so debt is KEC's public figure, never Crestline's.

## P5. Payables: who is paid when, is not on the balance sheet
**Headline: 48.8% of trade payables are past their due date, and 3,858 Cr runs through supplier finance.**
| Trade payables, from due date (excl. acceptances) | 31 Mar 25 | 31 Mar 26 |
|---|---|---|
| Unbilled | 1,865.58 | 1,935.21 |
| Not due | 3,760.01 | 2,517.23 |
| Under 1 year | 2,677.63 | 3,537.42 |
| 1 to 2 years | 244.91 | 279.85 |
| 2 to 3 years | 246.63 | 150.23 |
| Over 3 years | 201.45 | 283.31 |
| Total | 8,996.21 | 8,703.25 |
Source: AR26 Note 32.2, PDF p.138 (pr. 272) (V). C: past due 3,370.62 (37.5%) to 4,250.81 (48.8%).
- Supplier finance first disclosed FY26: 1,737.37 of payables "in the nature of Supplier finance arrangements but non-interest bearing" (0 to 180 days) plus acceptances 2,120.74 interest-bearing; together 3,858.11 (C), 35.6% of payables + acceptances. KEC: "The arrangement simply offers participating suppliers the benefit of early payment" (Note 33, PDF p.138).
- MSME principal unpaid 184.25 vs 130.80 (Note 32.1) (V).
- **Framing rule:** paying later is never Crestline's recommendation (rule 1). The page is about visibility: payment against each vendor's own due date, early is leakage, late is risk, MSME 45-day exposure by vendor. The supplier-finance chain is described, never judged.
- **Cannot tell them:** the vendor, site or order behind each past-due rupee; credit each vendor agreed (not public); whether late is choice or consequence of late client payment (the P1/P2 link).
- **Chart:** payables ageing, two columns, same anatomy as the receivables chart, so the reader sees the two halves side by side.
- **Crestline answers with:** payment timing vs each vendor's due date, vendor scorecard, MSME flag, subcontract stream (YES, webapp-fit 1.2). **NOT claimed:** LC, acceptance, TReDS or supplier-finance modelling (NO, webapp-fit 1.2); the app sees the PO-to-payment dates, not the finance provider.

## Ranking (impact on the reader, effort to print)
| Rank | Problem | Why |
|---|---|---|
| 1 | P3 NWC 137 vs 110 | their own number, their own promise, both executives care |
| 2 | P1 contract assets and retention | largest balance (12,128), 1.7 times the revenue growth |
| 3 | P2 ageing | cleanest two-column proof, 9.0% to 18.2% |
| 4 | P4 debt and cash | the consequence; sensitive, so the CEO book leads with it |
| 5 | P5 payables | sensitive, framed as visibility only |
Dependency note: P5 can be cut to one page-9 half (as in the master) if space runs out.

## Figures wanted but not in data.md
Contract-asset ageing; receivables by client type (state utility, PGCIL, private, international); payment terms in days; the NWC definition; total BG/LC book; peer figures for p9/p13 (none collected, so no peer lines are used); order intake FY22-FY24; Q1 FY27 balance sheet.
