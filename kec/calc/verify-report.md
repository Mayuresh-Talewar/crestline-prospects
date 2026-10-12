# KEC-8 verification report (independent)

Re-run: script copied to repo scripts/_tmp-kec-savings.ts, `npx tsx`, copy deleted. Output byte-identical to kec-savings.output.txt (diff clean, "checks passed"). `git status` after: only the two untracked docs paths that existed before. Repo untouched.

## 1. Calls (real app functions, unchanged)
- `simulate(basis, {cad|dso|dpo: days -/+ n})`, basis = `SimBasis` hand-built: days = closing balance / (revenue/365) (dio on material/365, dpo on (material+subcontract)/365), perDay same, terms all null (no clamps except 0 floor), ratePct 10.68.
- `leversFor(basis)` asserted length 4. `valueOfADay(revenue/365, 10.68)` = 64.40 / 6.87.
- `priceLevers({position: 2 hand-made actions @10 days x rev/day, ledger.stillAwaiting = over-6m excess 621.4, retention = 974.2, perDay = rev/365, rate 10.68, vendors [] })`. Output order = sorted by carry; correct app behaviour.
- Not called: `deriveRatios` (no factors / averages possible from published data). All other rows are plain arithmetic in the script (27 x rev/day, retention growth, ageing share), not app functions.

## 2. Per-day basis and rate
- App prices unbilled at revenuePerDay, receivables at invoicedPerDay restated onto the ledger basis by a MEASURED factor, payables at payablePerDay. Script used revenue/365 for contract assets and receivables, cost/365 for payables.
- Contract assets (ex-GST, ledger basis ~ revenue): correct.
- Receivables are GST-inclusive. App would price a receivable day at rev/day x factor (up to 1.18 = 759.9 per 10 days vs 644.0). So the shortcut is CONSERVATIVE for the receivable row: understates by at most 15% (about 116 Cr per 10 days); KEC's real factor is below 1.18 because about 38% of revenue is overseas (8,989.47 of 23,505.54) and unmeasurable from public data. Flagged not fixed.
- Same basis problem shows up in DAYS: 101.0 receivable days and 289.3 combined days = GST-inclusive balance over ex-GST revenue (CLAUDE.md Bhilai trap, 115.7 vs 98.0). On the app's basis receivable days would be roughly 86 to 101. Printed days overstate; cash does not.
- Closing balances used; app uses averages where an opening balance exists (KEC publishes FY25 comparatives). Days would be lower on average; cash per day unaffected.
- Interest: booklet uses only 6.90-8.90% (Note 30 consortium WC loans). Script's own 10.68% (finance cost incl. lease and other borrowing costs / avg debt) is never printed. Booklet range is 17-35% below it: conservative. Caveat: it is a loan-rate range, not KEC's average cost; supplier-finance acceptance cost is unknown; saving is real only if released cash retires that debt.

## 3. Hand recompute
rev/day 23,505.54/365 = 64.3987. 27 x = 1,738.77 (printed 1,738.8). x6.90% = 119.97, x8.90% = 154.75 (printed 120.0 to 154.8). /1,222 = 142.3%. 24 x = 1,545.6; 10 x = 644.0 (44.4 to 57.3); 30 x = 1,932.0 (133.3 to 171.9). Interest on 1,222 debt cut = 84.3 to 108.8. Retention 3,669.63 x 1.07592 = 3,948.3, release 974.2. Over-6m 1,227.26 - 8.98% x 6,745.05 (605.85) = 621.4. After-tax 15.2 to 19.6% of PAT: reproduced. Sanity: Crestline WC 9,342 = 145 days of revenue vs KEC's 137, so the revenue/day scale for the 137 is plausible (within 6%).

## 4. Basis traps in the booklets
1. Retention (974.2) sits INSIDE contract assets ("incl. retention", p.117) so it overlaps the contract-asset 10/30-day rows and the NWC 27 days. Booklets never add them but the priceLevers ranking stacks them side by side as if parallel moves.
2. The "collect what the client has already certified 621.4" row is over-6-month overdue receivables fed into `ledger.stillAwaiting` as a stand-in. Label is wrong for that figure (overdue bills, not certified-uncollected) and it overlaps the "collect receivables" row. Likewise the retention row is labelled "met its milestone" but the figure is excess over FY25 x revenue growth, which is an assumption not a milestone fact.
3. Payables include 2,120.74 interest-bearing acceptances, and net debt 6,722 also includes acceptances. WC (9,342), DPO 212 and "pay 10 days sooner -510.7" treat them as operating; the debt target treats them as debt. Do not net both. DPO 212 is on materials + erection cost only.
4. 137 and 110 NWC days: definition unknown; priced on revenue/day (stated in print rules). Fine, but 1,738.8 is a scale, not KEC's own number. Growth: target is at FY27 revenue, so the true release is net of growth (booklet gives 70.8 per 1%).
5. 142% compares a gross WC release with a NET debt reduction that also carries capex, dividend, tax; booklet already says "before capex, dividend, tax and growth". Keep that wording.
6. The 6.90-8.90 range applies to the 6,722 only if the released cash retires the loans; 1,738.8 > 1,222 means about 517 would not reduce the guided debt number.

## 5. Verdicts
| Figure | Verdict |
|---|---|
| 64.4 rev/day; 27 days = 1,738.8; 24 days = 1,545.6; 142.3%; 70.8 per 1% | CORRECT (scenario; NWC definition caveat) |
| 644.0 / 1,932.0 for contract assets | CORRECT |
| 644.0 / 1,932.0 for receivables | CORRECT BUT NEEDS CAVEAT: "Receivable balances include GST; priced at revenue per day, which understates the cash by up to about 15%." |
| Interest 120.0-154.8 etc. (6.90-8.90%) | CORRECT BUT NEEDS CAVEAT: "Interest at the 6.90% to 8.90% KEC paid on consortium working-capital loans in FY26, assuming released cash repays those loans." |
| 84.3-108.8 on 1,222 | CORRECT (same caveat) |
| 974.2 retention (67.2-86.7) | CORRECT BUT NEEDS CAVEAT: "Illustrative: holds retention to FY25 x FY26 revenue growth. Included in contract assets, so not additional to the contract-asset rows. Not a milestone-based figure." Remove "has already met its milestone" wording. |
| 621.4 old receivables | CORRECT BUT NEEDS CAVEAT: "Overdue over six months back to the FY25 share (9.0%). Overlaps receivable collection." Fix label "already certified" -> "overdue over six months". |
| 188.3 / 101.0 / 289.3 days | CORRECT BUT NEEDS CAVEAT: "Closing balances over revenue per day; receivables include GST, so days overstate; Crestline arithmetic, not KEC's definition." |
| 212.0 DPO; -510.7 pay sooner | CORRECT BUT NEEDS CAVEAT: "Includes interest-bearing acceptances (also in net debt); cost base is materials plus erection only." |
| 10.68% rate, valueOfADay 6.87 | CORRECT arithmetic; not printed, keep it unprinted |
| No WRONG figures found. | |

Answer to client: yes for the headline (1,738.8 Cr, 120 to 155 Cr a year, 142%); the figures were produced by the app's own functions and reproduce exactly. They are conservative on interest and on receivables. Fix three labels and add the caveats above before print.

Self-review: 4/5. Could not quantify the true GST factor or KEC's NWC definition (not public); did not open the PDF to re-verify the source inputs themselves, only the maths on them.
