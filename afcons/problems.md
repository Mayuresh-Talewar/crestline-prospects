# Afcons: working-capital problems (AF-4)

Prepared 7 Oct 2026. Every figure is from `data.md` (consolidated, ₹ Cr, with document and page) or `solutions.md`. AR26 = Annual Report 2025-26 (made available 8 Jul 2026); Q4T = Q4 FY26 call transcript (filed 22 May 2026); Q1T = Q1 FY27 call transcript (filed 13 Aug 2026); RHP = prospectus (18 Oct 2024). Framing is respectful: these are what the filings show, not accusations. Crestline does not fix margin; profit appears only as the carry cost of cash that is waiting.

Derived numbers (Computed, one script, run 7 Oct 2026): `python -c "print(11769.59/6945.58-1, 11948.38/11018.97-1, 1702.20-110.00, 110/1702.20, 3538.27/2235.72-1, 673.61/424.73-1, 250.74/486.79-1, 7731.5/3962.83-1)"` gives +69.5%, +8.4%, 1,592.2, 6.5%, +58.3%, +58.6%, -48.5%, +95.1%.

## Problem 1. Net working capital days have more than doubled in two years
| | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|
| Net working capital, days (company figure) | NF | NF | 63 | 113 | **143** | "marginally increased from the March number" |
Source: AR26 p.18-19; CFO Ramesh Kumar Jha, Q4T PDF p.19 ("this networking capital number of around 143 days"); Q1T PDF p.11. FY22-23 days NOT FOUND (RHP gives no days). The FY26 definition is not published (data.md s.1), so 143 is quoted as the company's own, never recomputed.
Behind it, receivables plus contract assets (same basis, Computed): 6,945.58 (FY22) → 7,536.86 → 8,845.59 → 10,553.99 → **11,769.59** (FY26), up 69.5%, while revenue from operations moved 11,018.97 → 11,948.38, up 8.4%. Sources: RHP p.439-440; AR25 p.312; AR26 p.326-327.
**The accounts cannot tell them:** which project holds which days, and how many of the 143 sit with Afcons' own steps versus the client's.

## Problem 2. Profit does not arrive as cash
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|---|
| Operating profit before working-capital changes | 1,105.41 | 1,416.57 | 1,633.47 | 1,630.93 | **1,702.20** |
| Cash generated from operations | 726.92 | 1,315.38 | 957.57 | 108.12 | **110.00** |
| Net cash from operating activities | 610.45 | 1,215.48 | 707.45 | **-132.20** | **-127.49** |
Source: RHP p.441 (FY22-24); AR25 p.315; AR26 p.329. In FY26, 1,592.20 of 1,702.20 (Computed) did not reach the bank as operating cash. Operating cash flow has been negative two years running (-259.69 together). Finance costs paid in FY26 were 669.86 against operating cash of -127.49 (AR26 p.329). Gross borrowings (including acceptances) rose 2,235.72 → 3,538.27 in one year, up 58.3% (AR26 p.330).
The CFO's answer to the funding question: "we have got a sizable cash and bank balances ... undrawn bank limits ... very sizable advances which we can draw at any point in time" (Q4T PDF p.21).
**The accounts cannot tell them:** which bills and which sites absorbed the 1,592.20, and when each step started waiting.

## Problem 3. Receivables are old, and a quarter of them are disputed
Gross receivables 4,319.79 (FY25 3,604.77). More than one year past due date: **2,102.34 = 48.7%** of gross, up from 1,383.0 = 38.4% (AR26 p.354). Disputed: 1,167.16 = 27.0% (FY25 970.09, 26.9%). Allowance 281.70 (6.5% of gross; FY25 146.54, 4.1%). Net receivables 4,038.09. The auditors made "Recoverability of Non-Current Contract Assets and non-current trade receivables" a key audit matter (AR26 p.316-318; opinion unmodified). Trend across FY22-FY25 net receivables: 2,982.75 → 2,847.85 → 3,620.19 → 3,458.23 → 4,038.09 (balance sheets above). A part sits in Uttar Pradesh Jal Jeevan Mission: about 400 of receivable, "a combination of receivable plus unbilled" (CFO, Q1T PDF p.16-17).
**The accounts cannot tell them:** which invoice, which client, which due date, and who at Afcons owns the chase today.

## Problem 4. Work done but not certified: contract assets keep growing, and some are in legal proceedings
Contract assets, net: 3,962.83 (FY22) → 4,689.01 → 5,225.40 → 7,095.76 → **7,731.50** (FY26), up 95.1% (Computed). 6,234.46 current, 1,497.04 non-current (AR26 p.356). Of the non-current part, ₹659.87 Cr of variations on one joint operation is under arbitration and High Court proceedings (AR26 Note 37; first emphasis-of-matter paragraph, p.315). CFO on cause: "We are witnessing delays in certification of the work done and release of payment in projects. This has led to increase in uncertified work done" (Q1T PDF p.8). On the ~1,000: Q4 call "a sizable liquidation in the range of say INR 1000 odd crores" (Q4T PDF p.26); Q1 call "no material movement in collection of the blocked-up asset" (Q1T PDF p.8). Management describes it as receivable plus unbilled, so it overlaps Problems 3 and 4 (solutions.md Leg 4).
**The accounts cannot tell them:** which RA bill is at which step (measured, prepared, submitted, waiting for the client's engineer), since when, and whether the wait is Afcons' own or the client's.

## Problem 5. The carry on waiting cash is a visible part of a smaller profit
| ₹ Cr | FY22 | FY23 | FY24 | FY25 | FY26 | Q1 FY27 |
|---|---|---|---|---|---|---|
| Finance costs | 424.73 | 446.66 | 577.26 | 629.20 | **673.61** | 173.05 (Q1 FY26 161.77) |
| PAT | 357.61 | 410.86 | 449.74 | 486.79 | **250.74** | 30.30 (Q1 FY26 137.40) |
Source: RHP p.440; AR26 p.327; Q1R p.14. Finance costs up 58.6% FY22 to FY26 (Computed); PAT down 48.5% in FY26 (Computed, Q4PR agrees). Q4 FY26 was a loss of 88.55, "first time since we started publishing quarterly numbers from 2010" (MD, Q4T PDF p.3). The CFO named provisions of "close to INR 325 crores" for FY26 (Q4T PDF p.13). Finance cost includes interest on customer advances (97.09 accrued, AR26 p.365), so it is not all borrowing interest. ROE 4.7%, ROCE 11.9% (AR26 p.19).
Crestline does not fix margin. The only profit claim made in the booklets is the interest on cash that is waiting, at Afcons' own disclosed 7.55% to 9.95% (AR26 p.362-367): ₹74.1 to ₹97.7 Cr a year for 30 days (solutions.md), if the cash repays debt.
**The accounts cannot tell them:** how much of the finance cost is the price of one specific waiting bill.

## What the accounts cannot tell them (all five)
A balance sheet gives a total. It does not say which project, which bill, which desk, since when, or whether the next step belongs to Afcons or to the client. Afcons runs SAP S/4HANA on RISE since 21 Nov 2023 (RHP Note 52, printed p.546), so the dates exist. Crestline would read them, and the pilot builds a read-only adapter for one to three domestic INR projects (webapp-fit).

## Claim limits (webapp-fit)
No claim that Crestline fixes margin, handles joint ventures, multi-currency, claim or arbitration workflow, BG/LC, or goes "live in days". Retention FY25/FY26, BG/LC outstanding and the FY26 NWC definition are NOT FOUND and are not used. Peer and track-record lines: {depth:...} (depth.md was not present at writing).
