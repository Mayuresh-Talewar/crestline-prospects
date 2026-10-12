# KEC data addendum (KEC-1b, 2026-10-07)

Grade: **V** Verified (document + page + date) / **C** Computed (script below) / **W** Weak. INR crore, KEC **consolidated** unless marked. Page = "PDF p.N (printed p.M)"; printed = 2N-4 for a left half, 2N-3 for a right half (checked on the pages I rendered: AR26 p117/118/131/213, AR24 p59/100/191, AR23 p60/96/189, AR25 p64). Every table page was **rendered as an image** and read from the image, not from text. `data.md` untouched.
Documents (all in `src/`): AR23 `AR2223.pdf`, AR24 `AR2324.pdf`, AR25 `AR2425.pdf`, AR26 `AR2526.pdf` (statements signed 16 May 2026, PwC). Peer files in `src/peers/`.

## Open items first (Unverified)
| Item | Status | Cheap test |
|---|---|---|
| KEC single average cost of borrowing | **NOT FOUND**, only ranges + one computed proxy | Ask CFO |
| Bank-guarantee (non-fund) outstanding total | **NOT FOUND** | Ask CFO / bankers' sanction list |
| Payment terms in days; contract-asset ageing; NWC definition | **NOT FOUND** (searched below) | Ask CFO |
| Concentration share of receivables | Note does not say gross or net; I give both (C) | Ask CFO which base |
| L&T FY26 and FY22 NWC %; KPIL FY23 and earlier NWC days | not fetched | L&T Overall Financial Review 2025-26; KPIL Q4 FY23 transcript |
| NWC-days series itself restated (AR23 said 118 for FY23, AR24 says 112 "in line with March 2023") | already open in data.md; seen again here | one series per chart |

## 1. Operating profit before working-capital changes, and the working-capital change (V, C)
Statement: Consolidated Cash Flow, section A. FY26 and FY25: AR26 PDF p.118 (printed 233). FY24 and FY23: AR24 PDF p.100 (printed 197), which also carries the FY23 reclassified lines. Filing date: AR26 statements 16 May 2026; AR24 statements signed May 2024 (day not read, grade V for figures, month for date).

| Cr | FY23 | FY24 | FY25 | FY26 |
|---|---|---|---|---|
| Operating profit before WC changes (V, "Adjustments" subtotal) | 853.74 | 1,353.45 | 1,785.56 | 1,776.51 |
| Change in operating assets (V) | (1,378.97) | (1,654.91) | (3,189.42) | (2,423.30) |
| of which contract assets (V) | (60.27) | (1,645.80) | (2,017.72) | (1,022.11) |
| of which trade receivables (V) | (1,194.60) | 144.68 | (992.62) | (1,150.38) |
| of which inventories (V) | (46.80) | (71.90) | 72.85 | (355.01) |
| Change in operating liabilities (V) | 1,353.50 | 864.73 | 1,665.74 | 533.37 |
| of which trade payables (V) | 1,515.27 | 807.99 | 1,244.06 | (370.44) |
| of which trade acceptances (V, FY25-26 only line) | n/a | n/a | (53.52) | 613.47 |
| **Net working-capital change (C)** | **(25.47)** | **(790.18)** | **(1,523.68)** | **(1,889.93)** |
| Cash from operations before tax (V) | 828.27 | 563.27 | 261.88 | (113.42) |
| Tax (paid)/refund (V) | (214.53) | (252.13) | 157.19 | (300.70) |
| Net operating cash flow (V) | 613.74 | 311.14 | 419.07 | (414.12) |

C checks (all four years tie to the printed "cash from operations" to the paisa): FY23 is the AR24 comparative; AR23 as first printed shows assets (1,859.00) and liabilities 1,833.53, same net (25.47), tax (221.54), net CFO 606.73, i.e. a reclass between lines, not a restatement of the total.
**Four-year waterfall (C):** operating profit before WC 5,769.26 → working capital (4,229.26) → cash from operations 1,540.00 → tax (610.17). Working capital absorbed 73.3% of four-year operating profit. In FY26 it absorbed 106.4% (more than all of it). Contract assets alone absorbed 4,745.90 over the four years (C: 60.27 + 1,645.80 + 2,017.72 + 1,022.11), 4,685.63 of it in FY24-26. Commands: `python -I calc.py` (script pasted in section 8).

## 2. Equity, capital employed, ROCE
| | FY22 | FY23 | FY24 | FY25 | FY26 | Source |
|---|---|---|---|---|---|---|
| Net worth / total equity (V) | 3,620 | 3,771 | 4,096 | 5,347 (5,347.45) | 6,160 (6,159.69) | MD&A: AR23 PDF p.60 (116), AR24 p.59 (114), AR25 p.64 (124), AR26 p.67 (131); BS AR26 p.117 (230) |
| Gross borrowings (V) | 2,875 | 3,216 | 3,826 (AR25 restates to 3,802) | 3,707 (BS 3,701.10) | 5,103.23 (BS: 661.37 + 4,441.86) | same MD&A pages; FY26 from AR26 BS p.117 (230), no MD&A figure printed |
| Return on net worth, KEC's own (V) | 9.5% | 4.8% | 8.8% | 12.1% | 10.5% | same MD&A tables. Formula printed: "Net Profit After Tax/Average Net Worth (Total Equity including all reserves)" |
| Debt/equity, KEC's own (V) | 0.8 | 0.9 | 1.0 (AR24 printed 0.9) | 0.7 | 0.9 | same |

**ROCE: KEC does not print a consolidated one.** It prints a **standalone** ROCE in the ratio note (V): FY23 11.40 (AR24 p.191 right, printed 379) / 11.4 (AR23 p.189 left, printed 374); FY24 10.41 (AR24 p.191) restated 10.38 (AR25 p.204); FY25 11.91 (AR25 p.204; AR26 p.213 left, printed 422); FY26 **9.61** (AR26 p.213). Formula printed: "Earning before interest and taxes / Tangible net worth (net worth-intangible asset) + total debt + leases + deferred tax liability". Standalone only, never mix with consolidated.
**Computed consolidated ROCE (C)**, my formula stated: EBIT = profit before exceptional items and tax + finance costs; capital employed = total equity + gross borrowings (leases excluded). Close / average: FY23 10.0% / 10.4%; FY24 13.7% / 14.5%; FY25 15.4% / 16.4%; FY26 13.4% / 14.9%. FY26 EBIT 1,511.5 = 847.92 + 663.60 (AR26 p.117 right, printed 231). Not KEC's number; label "Crestline computation" if shown. The shape: ROCE fell in FY26 while equity and borrowings both rose, because capital employed grew 24.5% (9,049 to 11,263) and EBIT 8.7%.

## 3. Interest and cost of borrowing: no single average rate is stated (V for each quote)
- AR26 consolidated borrowings note, bank secured working-capital loans: "The interest rates are in the range from 6.90% to 8.90% p.a. (previous year range from 8.10% to 10.50% p.a)" (PDF p.137 left, printed 270). Same note: Saudi JV 5.10% to 6.74%; Bangladesh 13.70%; subsidiary lines 8.7% to 10.6%; unsecured Rs 100 Cr at 7.75%; packing credit 4.37% to 6.90% (note 30.2). Non-current rates: MCLR-linked, "8.50% p.a. (MCLR-3M + spread)" (p.134 right, printed 265); a USD loan "8.22% to 14.87% p.a" (p.137 right, printed 271).
- Lease liabilities: "weighted average incremental borrowing rate applied is 7.41 % (Previous year: 7.16%)" (consolidated, p.144 right, printed 285). This is the only weighted-average rate, and it is for leases, not for bank debt.
- Trade acceptances (Rs 2,120.74 Cr): "Interest bearing", "0 to 180 days" (p.138 right, printed 277). They sit outside "Borrowings" yet carry interest.
- Interest-to-sales: 2.8% FY26 from 3.0% FY25 (AR26 p.67 right, printed 131; same on transcript Q4 FY26, 'Interest expenses as a percentage of revenue have reduced by 20 basis points to 2.8%'). Q1 FY27 call (11 Aug 2026), Q&A on interest: "This quarter, we had 3.3% ... our expectation is that against the 3.3%, which we did, we should be around 2.3% or so for the whole year ... interest should be around INR 600-odd crores" (`src/T_Q1FY27.txt` lines 309-317). Speaker labels are scrambled in the text file; check the PDF before attributing the sentence.
- **Computed proxy (C, not KEC's):** finance costs 663.60 / average of (borrowings + trade acceptances) FY25-FY26 closing = 10.7%. On borrowings alone 15.1%, which is wrong as a rate because acceptance interest and other charges sit inside finance costs. Use only to show the all-in cost of the money funding the gap, with this caveat. For a "value of one day", the safest published anchor is the 6.90% to 8.90% range, stated as a range.

## 4. Denominator for client concentration (V quotes, C shares)
- Receivables, AR26 consolidated risk note: "As at March 31, 2026, two customers exceed 10% of the Group's total trade receivables amounting to ₹ 4,372.34 crore. As at March 31, 2025, two customers exceed 10% of the Group's total trade receivables amounting to ₹ 2,417.65 crore." (PDF p.148 left, printed 292). Earlier: FY24 "none of the customers exceed 10%" (AR24 p.129 left, printed 254; AR25 p.140 left, printed 276 repeats it); FY23 "one of the customer exceed 10%" (AR24 p.129); FY22 one (AR23 p.126 left, printed 248).
- Denominator, trade receivables before ECL (Note 11.1 + Note 16 + Note 16.3, AR26 p.130 left (256), p.131 (258-259)): FY26 6,745.05 current + 35.60 non-current = 6,780.65; FY25 5,159.92 + 351.06 = 5,510.98. Net of ECL (balance sheet p.117, printed 230): FY26 6,474.21 + 31.45 = 6,505.66; FY25 5,051.10 + 214.93 = 5,266.03.
- **Share (C):** two customers = **64.5%** of gross FY26 receivables (67.2% of net); FY25 43.9% (45.9% net). The note does not say gross or net; quote the range 64.5% to 67.2%. These are two customers, not named; the AR says "major customers includes government bodies and public sector undertakings" (p.147 right, printed 291).
- **Revenue concentration (V, segment note, AR26 PDF p.157 left, printed 310):** "revenue arising from one customer in India amounting to ₹ 5,579.68 crore is contributing to more than 10% of the Group's revenue. (2025 : 4,105.50 crore)"; "one customer outside India amounting to ₹ 3,282.12 crore ... (2025 : 2,383.14 crore)". Against revenue from operations 23,505.54 / 21,846.70 (p.117 right, printed 231), C: 23.7% + 14.0% = **37.7%** FY26; FY25 18.8% + 10.9% = 29.7%. (Saudi geography revenue 3,282.12 equals the foreign customer, so that customer is the Saudi one by the numbers, but KEC does not name it. Do not print a name.)
- Ageing context (V, Note 16.3, p.131 right, printed 259), gross FY26: not due 3,337.84; under 6 months 2,179.95; 6 to 12 months 691.70; 1 to 2 years 209.01; 2 to 3 years 92.35; over 3 years 234.20; total 6,745.05. ECL allowance 270.84 (FY25 108.82). Note 16.1: non-recourse discounting "₹ Nil (₹ 63.14 crore during the previous year)".

## 5. Bank guarantees and non-fund limits
**Outstanding bank-guarantee / LC book: NOT FOUND.** Checked: AR26 contingent-liabilities note 57 (p.156 left, printed 308; tax and legal claims only, total 188.22 vs 179.24), the credit-risk and liquidity notes, related-party notes, IP Q4 FY26, both transcripts. What IS disclosed (V):
- Facilities: "The Group has access to various fund/non-fund based bank financing facilities. The amount of unused borrowing facilities (fund and non-fund based) ... is ₹ 14,461.07 crore as at March 31, 2026 (₹ 8,296.04 crore as at March 31, 2025)" (p.147 right, printed 291). Standalone 11,484.84 / 8,003.79 (p.201 left, printed 402). This is the **unused** part only; the used non-fund part is not stated.
- Cost: "Bank (guarantee, letter of credit and other) charges" 208.14 FY26, 175.35 FY25 (consolidated, p.141 left, printed 278), a P&L line KEC prints separately from finance costs. Standalone 177.09 / 157.53 (p.194 right).
- Guarantees given on behalf of jointly controlled operations, max exposure, consolidated (V): FY22 84.33 (AR23 p.126) / FY23 245.10 / FY24 303.21 (AR24 p.129 left; the printed text mislabels the FY24 figure "March 31, 2023", read it as FY24) / FY25 714.85 / **FY26 1,308.27** (AR26 p.148 left, printed 292). Standalone, on behalf of subsidiaries and JVs: FY24 1,840.96, FY25 1,997.41, **FY26 2,631.11** (AR25 p.192 left; AR26 p.201 right, printed 403). The related-party table prints a different guarantee total (4,385.03 FY26, p.211 left) which I did not reconcile; do not print it beside these. KEC says "the likelihood of any claim under the guarantee as remote".

## 6. Payment terms in days, NWC definition, contract-asset ageing
- **Payment terms in days: NOT FOUND.** Only: "Credit period varies as per the contractual terms with the customers" (AR26 p.147 right, printed 291) and "Invoices are issued according to contractual terms and are usually payable as per the credit period agreed with the customer" (p.120 right, printed 241). Checked: AR26 notes 3.4, 54B.3, 16, 20; transcripts Q4 FY26, Q1 FY27; IP Q4 FY26/Q1 FY27. Qualitative only (Q1 FY27 transcript, lines ~904-915): Saudi retention "20%"; clients paying "70%" with one agreeing "95%"; "the release of retentions has been fast tracked, not the percentage"; Power Grid made advances interest-free (line ~965).
- **NWC definition: NOT FOUND** in AR26, transcripts, IP, PR (re-grepped "working capital"). AR23 p.60 gave no formula for days either. KEC's printed receivable/inventory days are defined (AR26 p.67: debtors days = "(Average Account Receivable/Total Revenue from operations) x No. of Days", FY26 91 vs 81; inventory days 36 vs 33; consolidated), but those are not NWC days. Standalone note 64 prints receivable 96 / payable 277 days (FY26) on a different base; do not mix.
- **Contract-asset ageing: NOT FOUND.** Note 20 gives one balance (p.132 left, printed 260): receivable for contract works 7,408.59, retention receivables 4,922.51, ECL 203.54 (FY25 134.90), net 12,127.56. Retention 3,669.63 in FY25 so retention rose 1,252.88 (C) in a year. No age buckets, no release dates.
- Contract assets classified current because the "operating cycle ... extends upto the realisation of receivables (including retention monies)" (p.120 left, printed 240).

## 7. Peers for "it has been done before" (primary filings only; labelled peer lines, never mixed into KEC's figures)
| Peer | Measure and figures | Own wording and page | Grade |
|---|---|---|---|
| **Larsen & Toubro** (consolidated, ex financial services and corporate) | Net working capital % of sales: FY23 **16.1%** → FY24 **12.0%** → FY25 **11.0%** (5.1 points down in two years, C) | "The significant change in the Net Working Capital % of Sales for FY 2023-24 has been due to better collections and efficient working capital management." L&T Integrated Annual Report 2023-24, Overall Financial Review, PDF p.35: https://investors.larsentoubro.com/upload/AnnualRep/FY2024AnnualRepLnT%20IAR24.pdf . FY24 and FY25 columns also in Overall Financial Review 2024-25, PDF p.6: https://investors.larsentoubro.com/pdf/2025/MDA%20Annexures/Overall%20Financial%20Review%202024-25.pdf (both saved in `src/peers/`) | **Strong** (two independent filings, same company, agree on FY24 12.0%; one company though) |
| **Kalpataru Projects International** (standalone, India-core EPC; transmission peer) | Net working capital days: FY24 **99** → FY25 **94**; consolidated 79 at FY25 | FY25: "Our net working capital declined by 5 days at stand-alone level to reach 94 days ... we were successful in bringing down our net working capital much below 100 days" (Q4 FY25 call, 19 May 2025, `src/peers/kpil_q4fy25_tr.txt` line 91; https://kalpataruprojects.com/api/view-file/KPIL_Q4_FY25_Transcript.pdf ). FY24: "With net working capital of 99 days" and "on the net working capital days, we have achieved a target below 100 days" (Q4 FY24 call, 9 May 2024, `kpil_q4fy24_tr.txt` lines 72, 91; https://kalpataruprojects.com/api/view-file/KPIL_Q4_FY24_Earnings_Call_Transcript.pdf ) | **Moderate**, and a **disconfirming note**: in the same FY24 call KPIL says days "have remained stable" over four years, so this is "held below a stated 100-day ceiling, then trimmed 5 days", not a big cut. Also states a public target "below 100 days" and "finance costs below 2% of sales" |
Disconfirming search for L&T: searched for any restatement or definition change; none found in these two documents (FY24 value is 12.0% in both). The sentence is L&T's, not mine. Tata Projects and Sterlite: not listed or no primary NWC series found in the time; not used. Sources I did not use: screener.in, news (aggregators never cited).
Use for the page: L&T and KPIL are both KEC competitors for the same Power Grid style work; the CFO will know both. KEC's own history (AR26 chart FY22 124 → FY23 104 → FY25 111 → FY26 137, from data.md) shows it has cut before.

## 8. Script (all Computed rows above)
Run: `python -I calc.py` (inputs read off the printed statements; file saved in my scratchpad and pasted here so it can be recreated).
```python
ops={'FY23':853.74,'FY24':1353.45,'FY25':1785.56,'FY26':1776.51}
wca={'FY23':-1378.97,'FY24':-1654.91,'FY25':-3189.42,'FY26':-2423.30}
wcl={'FY23':1353.50,'FY24':864.73,'FY25':1665.74,'FY26':533.37}
cfo={'FY23':828.27,'FY24':563.27,'FY25':261.88,'FY26':-113.42}
for y in ops: wc=wca[y]+wcl[y]; assert abs(ops[y]+wc-cfo[y])<0.01
# 4yr: ops 5769.26, WC -4229.26 (73.3%), CFO 1540.00 ; FY26 WC -1889.93 = 106.4% of ops
eq={'FY22':3620,'FY23':3771,'FY24':4096,'FY25':5347.45,'FY26':6159.69}
bor={'FY22':2875,'FY23':3216,'FY24':3826,'FY25':3701.10,'FY26':661.37+4441.86}
pbt={'FY23':160.98,'FY24':426.49,'FY25':727.49,'FY26':847.92}; fin={'FY23':538.59,'FY24':655.13,'FY25':663.59,'FY26':663.60}
# ROCE = (pbt+fin)/(eq+bor) -> 10.0, 13.7, 15.4, 13.4 close ; 10.4, 14.5, 16.4, 14.9 on average capital
# concentration: 4372.34/(6745.05+35.60)=64.5% ; /(6474.21+31.45)=67.2% ; FY25 2417.65/5510.98=43.9%
# revenue: (5579.68+3282.12)/23505.54=37.7% ; FY25 (4105.50+2383.14)/21846.70=29.7%
# fin cost proxy: 663.60/avg((3701.10+1507.27),(5103.23+2120.74))=10.7%
```
(FY23 PBT 160.98 = PAT 176.03 + tax (15.05); FY24 426.49 = 346.78 + 79.71, both from the cash-flow pages; no exceptional items in FY23-FY25 per the P&L pages read; FY26 uses PBT before exceptional items 847.92, p.117 right.)

## Gaps the storylines can now fill / still cannot
Filled: operating-profit-to-cash waterfall (1), equity and ROCE (2, with the standalone-vs-computed warning), borrowing-rate ranges (3), concentration (4: strong, revenue and receivables), guarantee exposure and facilities (5, partial), two peers (7).
Still NOT FOUND: single average borrowing cost; used non-fund limits; payment terms in days; contract-asset ageing; NWC formula; consolidated ROCE printed by KEC; L&T FY22 and FY26, KPIL FY23.

Self-review: 4/5. Verified table pages as images and tied every cash-flow year to the printed total. Weaker: KPIL gives only a 5-day move so the "done before" case rests mostly on L&T; I did not find a third peer, I did not read Standalone vs consolidated guarantee reconciliation, and the contract-asset four-year sum was added by hand (60.27 + 1,645.80 + 2,017.72 + 1,022.11 = 4,745.90), not in calc.py.
