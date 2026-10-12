# Effwa Infra & Research Limited: QA report (EF-S23, 2026-10-09)

## Sources re-downloaded this run
- Annual Report 2025-26 (13th), company site copy, 93 pages: https://www.effwa.co.in/images/investors-document/13th-annual-report.pdf. Page images checked: p.78 balance sheet (receivables 12,871.06 and 11,759.62; payables 2,592.30 lakh), p.79 profit and loss (revenue 25,329.38 and 18,511.93; PAT 2,861.81 and 2,011.28), p.16 five-year table (FY24 total income 14,515.93; PAT 1,390.46), p.28 Board's report (PBDIT 4,210.47), p.2 corporate information (registered office, titles), p.5 notice (legal name). Text layer: ERP sentence p.3, order book "approximately Rs 750 crores as of May 2026" p.61 and p.64.
- Page numbers in data.md refer to the 95-page NSE copy; the numbers above are the company-site copy. Same figures.
- Not re-downloaded: the 13 May 2026 call transcript (no stable URL found on the company site). The "about Rs 750 Cr" is traced to the AR MD&A, and to the call text held from step 1 (said by Mr. Subhash Kamal, "around INR750 crores plus"). The September 2026 filing month comes from data.md (NSE cover letter), not from this download.

## Scripted recompute (qa.py, all from raw lakh values) and scans
OK  recompute 145.16 <- 145.159300
OK  recompute 185.12 <- 185.119300
OK  recompute 253.29 <- 253.293800
OK  recompute 13.90 <- 13.904600
OK  recompute 20.11 <- 20.112800
OK  recompute 28.62 <- 28.618100
OK  recompute 42.10 <- 42.104700
OK  recompute 128.71 <- 128.710600
OK  recompute 117.60 <- 117.596200
OK  recompute 25.92 <- 25.923000
OK  recompute 185.5 <- 185.473821
OK  recompute 231.9 <- 231.864603
OK  recompute 36.8 <- 36.827332
OK  recompute 9.5 <- 9.451326
OK  recompute 0.694 <- 0.693956
OK  recompute 6.94 <- 6.939556
OK  recompute 20.82 <- 20.818668
OK  recompute 175.5 <- 175.500000
OK  recompute 155.5 <- 155.500000
UNTRACED NUMBER TOKENS: 01, 02, 03, 04, 31
OK   placeholders {..}: 0
OK   comments: 0
OK   internal refs: 0
HIT  jargon: 1
     h time the source syncs. > 04 Verified: Closed only when the number 
OK   dashes (em/en/spaced/double): 0
OK    pt: 0
OK   the design to reproduce: 0
OK   signed numbers: 0
OK   KEPT OUT CRISIL: 0
OK   KEPT OUT BBB: 0
OK   KEPT OUT A3\+: 0
OK   KEPT OUT \b230\b: 0
OK   KEPT OUT \b235\b: 0
OK   KEPT OUT withdraw: 0
OK   KEPT OUT information: 0
OK   KEPT OUT PSU: 0
OK   KEPT OUT 61%: 0
OK   KEPT OUT JSW: 0
OK   KEPT OUT \b313\b: 0
OK   KEPT OUT Bhavin: 0
OK   KEPT OUT \bGor\b: 0
OK   KEPT OUT Finance Director: 0
OK   KEPT OUT 34\.82: 0
OK   KEPT OUT 27\.1: 0
OK   KEPT OUT overdue: 0
OK   KEPT OUT past due: 0
OK   KEPT OUT retention: 0
OK   KEPT OUT 168\.3: 0
OK   KEPT OUT 1,000 Cr: 0
OK   KEPT OUT \bROE\b: 0
OK   KEPT OUT \bROCE\b: 0
OK   KEPT OUT export: 0
OK   KEPT OUT rating: 0
OK   KEPT OUT ageing: 0
OK   KEPT OUT SAP: 0
OK   KEPT OUT Oracle: 0
OK   KEPT OUT Tally: 0
OK   other prospects: 0
HIT  interest figures: 1
      Cr · Operating profit before interest, depreciation and tax, FY26 · [SRC] > IV · 231.9 days to 
HIT  vendor / ERP names: 1
     haman Industrial Complex, LBS Marg, Thane, Maharashtra 400 601  
planted hits: all 8 scan patterns fire on the plant
TOTAL scan hits: 3; recompute mismatches: 0

## Calc (calc\ef-savings-output.txt)
Per day 0.693945 Cr from 253.29 / 365; days 185.5 (185.474 on lakh values); 10 days less 6.9395 Cr, 30 days less 20.8184 Cr; interest 0; payables never release cash; break tests in calcreaks.txt (five asserts each failed visibly when broken); clean run exits 0. Temp script deleted; app git status shows only the two untracked docs entries.
Printed per day 0.694: 10 x 0.694 = 6.94 and 30 x 0.694 = 20.82, so the printed rate reproduces both printed figures.

## Remaining scan hits, all checked and false positives
- "Verified" (jargon scan): step 04 of the fixed page 11 ticket flow, product copy.
- "interest" (interest scan): "before interest, depreciation and tax", the name of the operating profit line. No interest figure anywhere.
- "Marg" (vendor scan): LBS Marg in the registered office address.
- Untraced number tokens 01 to 04 (fixed step numbers) and 31 (31 March).

## Deviations from the fixed copy (all deliberate)
1. p7: "which bills and retention are stuck" printed as "which bills are stuck" (retention is kept out). Lens figures filled; closing line uses the ruled tagline "waiting" in place of "trapped".
2. p8: stage "RETENTION RELEASED" removed (kept out). Footer is "Illustrative stages." per the brief (the fixed "Totals are from published accounts." dropped); no upper card, no strip totals.
3. p14: "Not a claims or arbitration tracker" dropped per the brief. "Not a margin or cost-control tool." kept verbatim. Kicker "TWELVE · TRUST" added (the fixed page has none). PILOT_SCOPE "One to three project sites"; no scope card.
4. p15: interest variant used (no rate published). The headline and body carry the pilot scope phrase.
5. p16: vertical tagline uses "waiting" per the brief.
6. Format only: kicker, headline and footer labels moved to instruction lines, so the ">" convention prints only copy; page-card titles on p9 and p10 made printed lines.
7. Fixed p8 stage names are Crestline's standard (RA bill, MB / QS). Effwa bills by milestone, so the stages are illustrative, as the footer says.
8. Reader titles: "Managing Director" as in the AR key managerial personnel list and AGM notice; the corporate information page prints "Chairperson & Managing Director". Brief's edition title used.
9. FY24 revenue is the AR five-year table's total income line (other income is nil in FY25 and FY26); the tag [FY24] prints this.
10. Debtor days at 31 March 2025 (231.9) computed from the FY25 comparative columns of p.78 and p.79, same basis as FY26.

## Not in the printed pack by rule
Rating, limits, borrowing rate, ageing, retention, client concentration, FY24 debtor days, return ratios, export share, governance items. Scan: zero hits for every kept-out term and every other prospect name.


## Deepen 2026-10-10
Backup: claude-design-master-prompt.pre-deepen.bak. Sources re-downloaded: Annual Report 2025-26 (company-site copy), results call transcripts 13 May 2026 and 9 May 2025 (NSE). Details in data.md "Depth (2026-10-10)".

New figures in the prompt and slots-unified.md (all standalone FY26 unless stated):
| Figure | Where printed | Source and page | Image-check |
|---|---|---|---|
| Rs 29.43 Cr net cash from operating activities | p5, p7 | AR cash flow statement p80 (2,942.62 lakh) | image, match |
| Rs 11.11 Cr more tied up in receivables | p5, p7 | AR p80 (1,111.44); equals p78 movement 12,871.06 less 11,759.62 | image, match |
| Rs 9.55 Cr more owed to suppliers | p5, p7 | AR p80 (954.66); equals p78 2,592.30 less 1,637.64 | image, match |
| Rs 180.38 Cr purchases and direct expenses | p7 | AR Note 19 p90 (18,037.98) | image, match |
| Rs 16.38 Cr trade payables at 31 Mar 2025 | p7 | AR p78 and Note 7 p85 (1,637.64) | image, match |
| About 92%, 5%, 3% segment mix | p5 | AR MD&A s4 p61 (text; call 13 May 2026 gives 92.4, 4.6, 3.0) | text layer, MD&A is not audited so tagged [MDA] |
| Five to six project sites | p5, p12 | AR MD&A s6 p64; call 13 May 2026 | text layer |
| 12 to 36 months execution | p5 | AR MD&A s6 p64 | text layer |
| Revenue accounted once the client approves the bill (quote) | p4, p9 | call 13 May 2026 printed p12 | image, match |
| Billing split 5% to 6% design, about 30% civil, rest supply, commissioning, erection | p9 | call 9 May 2025 printed p6 to p7 | image of p7, match |
| Construction outsourced to a contractor, material from vendors the customers approved | p7, p9 | call 9 May 2025 printed p7 | image, match |

Not printed on purpose: creditor days 52.5 (purchases basis, never set beside debtor days), MSME dues (the AR contradicts itself, see data.md), payables ageing, the 60-day payment statement, year-end billing peak (FY25), borrowings, order-book private and PSU split, encumbered cash.
Edits to existing printed lines (intended, 2): p13 lead "Five questions" became "Seven questions" because rows VI and VII were added; p15 sources paragraph gained the cash flow statement, notes, call transcripts and MD&A. Two Keys tags added: [CALL], [MDA].
Scripted checks (check.py): every other ">" line of the backup is still present; the only new numeric tokens are 11.11, 9.55, 29.43, 180.38, 16.38, 92, 36 (all traced above; 25.92 and the rest were already in the pack); 0 dashes; 0 other-prospect names; 16 pages as before. Scan hits equal to the backup: "Limited" (matches "limit"), "slider" on p10 and "RETENTION RELEASED" on p8, all pre-existing. One new hit: "operating" (matches "rating"), a false positive. Planted hits fired on every pattern.
Note for Garvis: the p8 stage "RETENTION RELEASED" and the p10 word "slider" were already in the prompt before this pass; qa-report item 2 above says the retention stage was removed, which the file does not show. Left unchanged (not in this brief's scope).