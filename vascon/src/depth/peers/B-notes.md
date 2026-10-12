# B-notes: NWC, Ahluwalia Contracts (ACIL) vs ITD Cementation / Cemindia Projects (as of 2026-10-07)
Basis: CONSOLIDATED, Rs crore, year-end balances / revenue from operations. FY26 IS OUT for both (ARs filed May and Aug-Sep 2026). Window FY22..FY26 (+FY21 from comparatives). No aggregators used.
Run: `python -I nwc_B.py` (file nwc_B.py in this folder; output also in nwc_B_output.txt)
## Output (verbatim)
```

Ahluwalia Contracts (consolidated)  (Rs crore; days = NWC/revenue*365)
year                              rev     inv      TR      CA      TP     adv     NWC   days   %rev days ex-adv
FY21                           1982.2   297.2   434.9   434.4   640.2   390.8   135.4   24.9   6.8%        96.9
FY22                           2692.5   242.0   487.1   431.5   619.4   255.9   285.3   38.7  10.6%        73.4
FY23                           2838.4   244.0   638.6   503.1   671.7   409.1   305.0   39.2  10.7%        91.8
FY24                           3855.3   315.8   780.3   717.4   700.0   607.1   506.5   47.9  13.1%       105.4
FY25                           4098.6   339.2   812.5   778.2   847.2   772.4   310.4   27.6   7.6%        96.4
FY26                           4565.2   342.2   760.9  1138.4   814.9  1092.8   333.8   26.7   7.3%       114.1

ITD Cementation / Cemindia Projects (consolidated)  (Rs crore; days = NWC/revenue*365)
year                              rev     inv      TR      CA      TP     adv     NWC   days   %rev days ex-adv
FY21                           2727.7   337.3   530.9   853.6   726.9   779.2   215.6   28.9   7.9%       133.1
FY22                           3809.0   400.2   621.9   809.5   937.3   827.7    66.6    6.4   1.7%        85.7
FY23                           5090.9   577.0  1080.2  1051.4  1333.6  1435.4   -60.3   -4.3  -1.2%        98.6
FY24                           7717.9   684.3  1211.4  1441.1  1646.8  1667.7    22.2    1.1   0.3%        79.9
FY25 as originally reported    9096.9   641.5  1606.9  1797.3  2057.0  1404.7   584.1   23.4   6.4%        79.8
FY25 restated in FY26 AR       9246.2   643.8   989.8  1652.1  2045.2   638.7   601.8   23.8   6.5%        49.0
FY26 (new basis)              10060.6   750.9  1294.6  2263.5  2189.7  1023.8  1095.6   39.7  10.9%        76.9
```
Definition: NWC = inventories + trade receivables (current + non-current) + contract assets (unbilled + retention, current + non-current) - trade payables - customer advances (contract liabilities). Excluded: advances to suppliers, prepaid, govt balances, cash, borrowings, "other current assets" not contract-related. "days ex-adv" = same but customer advances left out (shown because they drive the result).
## Sources (PDF page / printed page); every consolidated BS page image rendered to img/ and READ, numbers matched text
ACIL (www.acilnet.com/wp-content/uploads/...): acil_AR_FY22.pdf (2022/06/ACIL_AR_2021_22.pdf) BS p177/175, P&L p178, notes 13/20/26/30 p207,212,217,220. acil_AR_FY24.pdf (2024/06/ACIL_AR_2023_24.pdf) BS p200/198, notes p231,236,240,243 (gives FY23 comparatives). acil_AR_FY25.pdf (2025/05/ACIL_AR_2024_25.pdf) BS p236/234, notes p268,273,280,281. acil_AR_FY26.pdf (2026/08/ACIL_AR_2025_26.pdf) BS p240/238, P&L p241, notes p273,278,284,286,287. FY21 = comparatives in AR22. No separate FY23 AR downloaded: FY23 is as shown in AR24.
Cemindia (www.cemindia.co.in/wp-content/uploads/...): cem_AR_FY22.pdf (2022/08/ITD-Cem-AR-2021-22c.pdf) cons BS p154/152, note 22 p183, revenue note p184. cem_AR_FY24.pdf (2024/08/ITDCementationAR_23_24_030824.pdf) BS p202/200, notes 21-23 p233 (FY23 comparatives). cem_AR_FY25.pdf (2025/07/ITDCementationAR_24_25_150725.pdf) BS p212/210, notes 22-24 p245/243. cem_AR_FY26.pdf (2026/05/CemindiaAR_2025_26_290526.pdf) BS p302/300, P&L p303, reclass Note 41 p376/374.
Other: cem_IP_Aug2026.pdf (2026/08/CemidiaProjects_InvestorPresentation_190826.pdf), acil_IP_Q4FY26.pdf (nsearchives.nseindia.com/corporate/532811_01062026125002_Investor_Presentation310302026.pdf), cem_Concall_Q4FY26.pdf, cem_Concall_Q1FY27.pdf (2026/08/ConcallTranscript_Q1FY27_040826.pdf), acil_Concall_Q4FY24.pdf (nsearchives .../AHLUCONT_04062024112411_TranscriptQ4Results_30052024.pdf). Older Cemindia concalls were read from the same /investor-presentation/ page (not saved).
## Restatement flags (matter for Cemindia)
- FY26 AR Note 41 (p376) restates FY25: retention receivable Rs612.30 Cr moved from trade receivables to contract assets; Rs859.76 Cr contract assets/liabilities netted per contract; Rs249.04 Cr retention payable moved from other financial liabilities into trade payables; joint operations now PROPORTIONATELY consolidated. So FY26 is on a different basis from FY22-FY25. FY25 revenue 9,096.9 (original) vs 9,246.2 (restated). I show FY25 on both bases; NWC is roughly unchanged by the reclasses (584 vs 602 Cr) but "days ex-adv" is not comparable across the break.
- FY22-FY24 trade payables include retention payable; FY25 AR moved it to other financial liabilities (Rs282.19 Cr), so I added it back for FY25 original. Supplier's credit (Rs96.32 Cr FY26, 88.40 FY25R, a supplier-finance line outside trade payables) is NOT in my payables; including it would lower FY26 NWC by about 3.5 days.
- "Due to customer" (billing in excess) counted as customer advance for FY21-FY25 original; Cemindia calls the FY26 line "Contract liabilities". Interest accrued on advances excluded.
- ACIL: FY25 and FY24 comparatives in the next year's AR equal the original figures (checked on BS images), so no restatement. ACIL FY26 AR prints current trade receivables as "73,446,80" (typo for 73,446.80; total current assets 3,18,010,21 likewise).
## Management-published NWC days (own words; none in either annual report, MD&A, or investor presentation I searched: terms net working capital / NWC / working capital days / receivable days)
Cemindia, earnings-call transcripts on company site (verbal, not audited; basis not defined):
- Q4FY22 call p2: "the operating cycle has reduced significantly due to large collections that we have received during the year" (Prasad Patwardhan, CFO).
- Q2FY24 call p7: "Net working capital is today less than 90 days ... 80, 85 days, I think is a very robust and healthy net working capital cycle."
- Q3FY24 p14: "around 80, 85 days". Q3FY25 p7: "net working capital is under 100 days".
- Q1FY26 p7 (Nitesh Sharma, CFO): "Net WC remained at 80 days ... improved from the previous quarters" (analyst: earlier "close to 100").
- Q2FY26 p8: "close to 90 days". Q1FY27 (29 Jul 2026) p9/p13: "the net working capital was around 120 days" (inventory ~30 days, WIP/contract assets ~69-107 days as spoken; trade receivables incl. retention ~69 days); p16: "Working capital would be in the same range only, 110 to 120 days."
- Their ~80-day figures sit near my "days ex-adv" row (79.9 FY24, 79.8 FY25), suggesting management excludes customer advances or measures it differently. INFERENCE only.
ACIL: no NWC-days figure in AR26 or the Q4FY26 presentation (text extracted, 18 pp, thin). Q4FY24 call p4 (an analyst's number, management agreed it rose): analyst "closer to 38 days working capital day from the last quarter it was around 25 days"; management: "working capital days has increased due to debtors, we have to receive the funds from the Emaar MGF ... around INR125 crores". FY26 call transcript on company/exchange site: NOT FOUND (only aggregator snippets, not used).
## Judgement (test: 3 consecutive yearly improvements, or a 20+ day drop over the window)
ACIL, days incl. advances: 24.9, 38.7, 39.2, 47.9, 27.6, 26.7 (FY21..FY26). FY22->FY26 -12.0 days; only two consecutive improvements (FY25, FY26; -21.2 from the FY24 peak, a one-year step of -20.3 in FY25). Does NOT meet the test over FY22..FY26; FY21 was lower than FY26. Quality of the improvement: customer advances rose Rs256 Cr -> Rs1,093 Cr (mobilisation + material-at-site advances) and contract assets rose to Rs1,138 Cr; ex-advance days went 73 -> 114. Grade: Computed (inputs Verified from BS images + notes). Verdict: no real sustained reduction; improvement is funded by clients' advances. Management cause: NOT FOUND in own filings (only the FY24 Emaar receivable remark above, Weak).
Cemindia, days incl. advances: 28.9, 6.4, -4.3, 1.1, 23.4 (orig) / 23.8 (restated), 39.7 (FY26, new basis). FY21->FY23 improved sharply (mgmt cites collections, Q4FY22 p2), then moved the OTHER way: +44 days FY23->FY26 and management itself now says 110-120 days. Ex-advance days: 85.7, 98.6, 79.9, 79.8, 76.9, so roughly flat to -9 days FY22->FY26, not 20+. Grade: Computed; the FY22-FY25 rise is Verified from BS images; the FY26 step carries the basis-break caveat (Weak on size). Verdict: NWC days worsened, driven by contract assets/unbilled revenue (Rs809 Cr -> Rs2,263 Cr) growing faster than customer advances. No management quote found attributing the rise (Q4FY26 call p6-7 says only mobilisation advance "is the same as per the last year").
Not checked: standalone figures; FY23 original ARs (FY23 taken from FY24 comparatives); JO proportionate effect size.
