# Nikhil Constructiongroup: QA report (NK-2, 2026-10-09)

Method: the two CRISIL rationales were downloaded as raw HTML (crisilratings.com, RR_374133 of 5 Aug 2025 and RR_335181 of 2 Feb 2024), tags stripped by script, and every printed figure was searched in that raw text (no fetch summary used). Derived figures were recomputed by script. Two planted false figures (448.15 revenue, "285 as on Mar-25") and one planted wrong rounding (12.3) were all caught.
Basis check: every figure is standalone, FY to 31 March, Rs Cr. Per-day value uses FY25 revenue only; the 275 days are GCA days, labelled as such, never DSO. No two figures on different totals are paired.
Noted, not printed: the same Aug 2025 document shows the order book as 1350 (intro) and 1357 (strengths), so the pack prints only "over Rs 1,300 Cr at 30 Jun 2025".
Calc breaks: each of the four asserts (no negative release, zero interest, cross-check, payables never release) was broken once and failed visibly (exit 1); clean run passes (calc/nk-savings.out.txt).

## Script output
```
--- Aug 2025 rationale, raw text
OK   date  [August 05, 2025]
OK   legal name  [Nikhil Constructiongroup Private Limited]
OK   rating  [Crisil BBB+/Stable/Crisil A2]
OK   limits  [Rs.323 Crore (Enhanced from Rs.226 Crore)]
OK   rev FY25  [447.15]
OK   rev FY24  [433.46]
OK   PAT FY25  [37.44]
OK   PAT FY24  [34.33]
OK   gearing  [0.99]
OK   GCA  [188-275 days for the three fiscals through 2025 with GCA days at 275 as on Mar-25]
OK   45%  [around 45% of revenue booking during last quarter of fiscal]
OK   deposits  [security deposits given to institutions]
OK   add to  [add to the GCA days]
OK   order book date  [Jun 30, 2025]
OK   18-30  [next 18-30 months]
OK   NHAI share  [around 35-40% of the orders from NHAI, Ministry of Road Transport and Highways]
OK   above average  [Above Average financial risk profile]
OK   healthy ob  [healthy order book]
OK   1995  [set up in 1995]
OK   Pune  [NCPL based in Pune]
OK   monitorable  [monitorable as the business scales up]
OK   util 62  [around 62 percent for the past ten months ended Jun-25]
OK   BG  [204.50]
OK   CC  [110.10]
OK   TL  [8.40]
OK   PLANTED wrong revenue  [448.15]  (planted: must be absent)
OK   PLANTED wrong GCA  [285 as on Mar-25]  (planted: must be absent)
--- Feb 2024 rationale, raw text
OK   date  [February 02, 2024]
OK   FY23 rev  [309.5]
OK   FY22 rev  [197.94]
OK   FY23 PAT  [21.46]
OK   GCA  [175-230 days for the three fiscals through 2023]
--- recomputation
OK   per day  got 1.225 want 1.225
OK   10 days  got 12.25 want 12.25
OK   30 days  got 36.75 want 36.75
OK   limit parts sum  got 323.0 want 323.0
OK   growth FY25 vs FY24 pct  got 3.2 want 3.2
OK   FY22 to FY25 multiple  got 2.26 want 2.26
OK   days after 10  got 265 want 265
OK   days after 30  got 245 want 245
OK   PLANTED wrong 10-day  got 12.25 want 12.3  (planted: must differ)

UNEXPECTED MISSES: 0
```

## Master prompt scan (claude-design-master-prompt.md), with planted hits
```
PLANTED (must all be >0) {'placeholders': 1, 'comments': 2, 'company names': 2, 'internal refs': 3, 'dashes': 4, 'KEPT OUT': 4, 'interest figures': 1, 'design to reproduce': 1}
    placeholders -> ['{COMPANY}']
    comments -> ['<!--', '-->']
    company names -> ['Afcons', 'Precast']
    internal refs -> ['Garvis', 'KEPT OUT', 'slot']
    dashes -> ['--', '--', '–', '5-6']
    KEPT OUT -> ['1,357', 'cooperat', 'NPA', 'withdraw']
    interest figures -> ['1,357 cooperat withdraw NPA a – b 5-6 interest']
    design to reproduce -> ['The design to reproduce']
PROMPT {'placeholders': 0, 'comments': 0, 'company names': 0, 'internal refs': 0, 'dashes': 0, 'KEPT OUT': 0, 'interest figures': 0, 'design to reproduce': 0}
   interest ctx: tent says. Every bar shows its value label. A6. **Interest only at a rate the company discloses.** Print only the rate
   interest ctx:  the company discloses.** Print only the rate and interest figures the Content gives; never compute or label a rate as
   interest ctx: gure as its target." - Footnote: "[GCA] [SCEN] No interest is priced." - Footer: "Strictly private · 10 / 16 · Scenari
   interest ctx: er: "275 to 265 days, ₹12.25 Cr released once. No interest is priced." - Line: "Illustrative answer on published figur
   interest ctx: the published figures: days x revenue per day. No interest is priced, because no borrowing rate is published. Cash is 
numbers total 290 not in core allowlist: {'2013': 1, '2014': 1, '31': 8, '01': 3, '02': 3, '03': 3, '04': 3, '05': 1}
    2013 :: en dash and em dash characters (Unicode 2013 and 2014). There must be none
    2014 :: nd em dash characters (Unicode 2013 and 2014). There must be none. 5. Ever
    31 :: ng income. [SRC] = Standalone, years to 31 March. CRISIL rating rational
    31 :: htra. - Footnote: "Standalone, years to 31 March. CRISIL rating rational
    01 :: ctiongroup figure it would open up." - "01 Working capital · WC · The ca
    01 :: uttons: "Raise ticket · Alert owner" - "01 Ticket raised: Baseline, targ
    02 :: arch 2025" · "CRISIL, 5 August 2025" - "02 Order to cash · O2C · From wo
    02 ::  due date are fixed at that moment." - "02 Owner told: The owner is mail
    03 :: t quarter" · "CRISIL, 5 August 2025" - "03 Procure to pay · P2P · From a
    03 :: l is logged with whether it landed." - "03 Re-measured: The same figure,
    04 ::  days are not in the rating report." - "04 Client · WHO PAYS SLOW · Whic
    04 :: h data, each time the source syncs." - "04 Verified: Closed only when th
    05 ::  each client pays is not published." - "05 Vendor · WHO COSTS MORE · Whi
```
Numbers left outside the allowlist are page numbers, list numbering (01 to 05), the date 31 March, and the template's Unicode code names 2013 and 2014. Every other number is a figure listed above as traced to CRISIL or calc.
