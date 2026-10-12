# Peer NWC: B.L. Kashyap (BLK) and PSP Projects (PSP), researched 2026-10-07
Basis: CONSOLIDATED, Rs lakh as printed, shown in Rs crore. FY22..FY26 all available (both FY26 annual reports out, May 2026).
Run: `cd peers && python -I nwc_A.py`. Formula as briefed. "cur" = current items only; "all" = plus non-current trade
receivables / payables / mobilisation advance (BLK) and non-current retention (PSP). Primary reading = "all".

```
PSP consolidated, Rs crore
FY         Rev     Inv      TR      CA      TP  CustAdv |  NWC cur   days   %rev |  NWC all   days   %rev
FY22    1748.1    81.8   311.0   132.2   258.2    159.1 |    107.8   22.5    6.2 |    188.3   39.3   10.8
FY23    1937.8   153.1   433.9   290.2   368.3    354.9 |    154.0   29.0    7.9 |    254.6   48.0   13.1
FY24    2505.8   317.8   342.1   507.8   420.0    197.0 |    550.7   80.2   22.0 |    654.7   95.4   26.1
FY25    2512.1   323.9   529.8   570.8   417.9    381.9 |    624.8   90.8   24.9 |    751.8  109.2   29.9
FY26    3148.7   347.6   928.2   477.2   465.2    855.4 |    432.5   50.1   13.7 |    587.0   68.0   18.6
BLK consolidated, Rs crore
FY22    1157.5   339.8   347.8     0.0   195.9     68.7 |    423.0  133.4   36.5 |    389.3  122.8   33.6
FY23    1110.0   346.1   419.8     0.0   201.6     92.6 |    471.7  155.1   42.5 |    493.4  162.2   44.4
FY24    1244.5   190.6   377.7   305.4   247.1    136.7 |    489.8  143.7   39.4 |    506.4  148.5   40.7
FY25    1153.6   193.7   437.4   329.9   231.0    200.5 |    529.6  167.5   45.9 |    481.0  152.2   41.7
FY26    1379.1   203.4   434.3   355.5   261.2    309.9 |    422.2  111.7   30.6 |    400.7  106.0   29.1
```
Included: CA = contract assets (retention receivable + unbilled revenue net of ECL; PSP note 8 current; BLK note 11 unbilled, only
where shown separately). CustAdv = mobilisation + customer advances + amount due to customers (PSP note 20; BLK note 15a; plot advances
and statutory dues excluded). Excluded as not clearly contract-related: other current assets (PSP note 10; BLK GST, prepaids, vendor
advances, "Others" 7,561.66 lakh in FY22), BLK FY22 "advance against sale of investment" 6,000 lakh. BLK inventories include land
stock-in-trade (~96 Cr FY24-25). BLK customer advances other than mobilisation are not itemised before FY24.

## Sources (numbers read from page images in img/). Format: PDF page / printed page
URLs from IR pages: BLK https://www.blkashyap.com/investor-relation/ ; PSP https://www.pspprojects.com/financial-performance/ and /investor-presentations/
- BLK_AR_FY2026.pdf (blkashyap.com/wp-content/uploads/2025/08/Annual-Report-2026.pdf): cons BS 130/130; notes 9,11 153/153; note 15, revenue 159/159.
- BLK_AR_FY2025.pdf (.../2025/08/Annual-Report.pdf): cons BS 126/125 (FY25 + FY24 restated); note 11 149/148; note 15, revenue 155/154.
- BLK_AR_FY2024.pdf (.../2023/08/Annual-Report-2024-1.pdf): cons BS 129/119 (FY24 as filed + FY23); note 11 153/143; note 15, revenue 159/149.
- BLK_AR_FY2022.pdf (.../2023/06/B-L-Kashyaap-Annual-Report-2022.pdf): cons BS 122/120; notes 9,11 146/144; notes 15,16 152/150.
- BLK_AR_FY2023.pdf (.../2023/07/B-L-Kashyaap-Annual-Report-2023.pdf): FY23 taken from FY24 AR comparative column; only text-matched here, its own BS image not read.
- PSP_AR_FY2026.pdf (pspprojects.com/wp-content/uploads/2026/05/PSP-PROJECTS-ANNUAL-REPORT-2025-26.pdf): cons BS 211/270; note 8 233/292; note 20 + revenue 243/302.
- PSP_AR_FY2024.pdf (.../2024/08/PSP-Annual-Report-2023-24.pdf): cons BS 234/232 (FY24 + FY23); note 8 256/254; note 20 + revenue 265/263.
- PSP_AR_FY2022.pdf (.../2022/09/14th-Annual-Report_PSP_2021-22.pdf): cons BS 192/190; note 8 212/210; note 20 + revenue 220/218.
- PSP_AR_FY2025.pdf (.../2025/09/Annual-Report-2024-25.pdf), PSP_AR_FY2023.pdf (.../2023/08/Annual-Report-2022-23_High.pdf): restatement text-match only.
- PSP_IP_Q4FY22..Q4FY26.pdf: .../2022/05/Investor-Presentation-Q4-FY22.pdf, 2023/05/Q4FY23_Investor-Presentation.pdf,
  2024/05/Q4FY24_Investor-Presentation-May-2024.pdf, 2025/05/Investor-Presentation-Q4FY25-PSP-Projects.pdf, 2026/04/Investor-Presentation-Q4FY26-PSP-Projects.pdf.
Grade for all inputs above (page image read): Verified, except BLK FY23 own AR (comparative read instead).

## Restated vs original
- PSP: no restatement. Balance-sheet and note figures re-appear unchanged in later ARs (text match of 20+ figures). Computed.
- BLK: FY24 WAS regrouped. As filed FY24: inventories 49,590.99, other current assets 10,480.52 (no unbilled). FY25 AR comparative:
  inventories 19,055.83 plus unbilled revenue 30,535.17 in other current assets (same sum), TR 37,771.98 vs 37,572.23 and non-current
  8,917.03 vs 9,116.78 (same sum). I use the RESTATED FY24. FY22/FY23 are on the OLD grouping (unbilled WIP inside inventories, WIP
  27,140.75 lakh FY22, note 9), so the Inv vs CA split is not comparable across FY23/FY24; only the sum Inv+CA is. Verified.

## Company-published working-capital days
- PSP, Q4FY25 investor presentation slide 12 (PDF p12), "Working Capital Cycle in Construction Space", image read: cycle days FY22 28,
  FY23 41, FY24 35, FY25 65 (inventory/receivable/payable days FY22 17/65/54, FY23 29/82/70, FY24 47/50/62, FY25 48/78/61). Q4FY24
  deck p11: "PSP Projects has industry's best working capital cycle of 35 days." Definition = inventory + receivable - payable days, so
  customer advances are NOT netted. Verified.
- PSP AR FY26 MD&A (PDF p20, printed 36, image read): "the average working capital cycle increased from 65 days to 96 days of turnover
  equivalent. This movement was largely attributable to an increase in trade receivables, which increased from Rs528.01 Crore in FY
  2024-25 to Rs840.30 Crore in FY 2025-26." Receivable days 78 to 103. Verified. (840.30 Cr is the standalone figure, not 928.2 consolidated.)
  Q4FY26 investor presentation: no cycle chart found in text: NOT FOUND.
- BLK: NOT FOUND. The IR page lists annual reports and results only, no investor presentation. MD&A prints turnover ratios only
  (inventory turnover 16.58 FY26, PDF p50; ratio table p121). No NWC-days figure in FY22-FY26 ARs (scope: text search of pages 1-140).

## Verdict (Computed from Verified inputs; consolidated; "all" basis, "cur" in brackets)
- PSP moved the OTHER way. NWC days 39 > 48 > 95 > 109 over FY22-FY25 (four straight rises, +70 days), then 68 in FY26 [cur: 22 > 29 > 80 >
  91 > 50]. FY26 relief is customer advances: mobilisation advance 33,768.87 > 81,372.21 lakh (note 20, PDF p243), while trade receivables
  rose 529.8 > 928.2 Cr. The company's own cycle (advances excluded) worsened 65 > 96 days in FY26. Not a sustained reduction. Management
  cause quoted above: receivables growth; it does not explain the advance build-up (AR p20 names past delays on Surat Diamond Bourse and Pandharpur). Verified/Computed.
- BLK: no sustained reduction. Days 123 > 162 > 149 > 152 > 106: improvements in FY24 and FY26 only, never 3 in a row; FY22 to FY26 change
  -17 days (fails the 20-day test) [cur basis 133 > 112 = -22, a marginal pass that depends entirely on FY26; FY25 was up on both]. The FY26
  drop (-46 days in one year) comes with advance from customers 8,865.97 > 19,037.40 lakh (note 15a, PDF p159), lower inventory days and flat
  receivables, so it looks advance-funded and one year old, not a trend. That reading is inferred from line items: Weak (management does not say it).
- BLK management wording is generic, with no quantified cause (FY26 AR chairman, PDF p6): "improving working capital management,
  accelerating customer collections, reducing receivable cycles, optimizing inventory levels". Quantified attribution: NOT FOUND.
- Caveats: definitional choices (non-current items, which other assets count as contract-related) move days by roughly 10-30 for
  either company but not the direction of the trend. Year-end balances over full-year revenue, not averages. Computed, not audited.
