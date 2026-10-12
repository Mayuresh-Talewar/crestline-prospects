# Bajel Projects: dossier fact check (BJ-1)

The dossier (src/5_Bajel_Projects_Dossier.pdf) is a checklist and is never cited. Every verdict below rests on the company's own filings or the CRISIL rationale. Document keys, pages and filing dates are in data.md. Rs Cr figures come from src/bj-calc-output.txt.

Score, 30 claims, counted by script:
- Right: 16 (14 plain, 1 handover only, 1 with care).
- Right on a narrow basis: 3.
- Right in part: 1.
- Stale: 1.
- Unsupported: 5.
- Wrong: 4 (basis, as framed, in part, as a basis).

Command: `python -I -c` counting column 3 of the numbered table rows in fact-check.md.

| # | Dossier claim | Verdict | What the filings say |
|---|---|---|---|
| 1 | Legal name Bajel Projects Limited | Right | AR26 cover and signature pages |
| 2 | Listed NSE BAJEL / BSE; 2023 demerger of Bajaj Electricals' EPC business | Right | BSE 544042; listed 19 Dec 2023 (AR24 p112); demerger effective 1 Sep 2023 per AR24 p112 |
| 3 | CIN L31900MH2022PLC375133, incorporated 2022 | Right | AR26 corporate information; CR26 p3 "incorporated in January 2022" |
| 4 | HQ 801 Rustomjee Aspiree, Sion (East), Mumbai 400022 | Right | AR26 registered office line |
| 5 | Four verticals: Power Transmission, Power Distribution, Monopoles, International EPC | Stale | Power Distribution was renamed "New Energies" (DK1 p22; AR26 MD&A) |
| 6 | 50+ project sites | Unsupported | AR26 p71 says "all 40+ sites". No filing says 50+ |
| 7 | Revenue Rs 2,598 Cr FY25 and Rs 2,792 Cr FY26 (labelled consolidated) | Right | Standalone 2,598.24 and 2,791.58; consolidated identical (AR26 p257, p337) |
| 8 | FY24 revenue Rs 1,169 Cr, "+2x since FY24" | Right | 1,169.21, single entity (AR24 p165); FY26 is 2.39x FY24 (Computed) |
| 9 | PAT Rs 15 Cr FY25 and Rs 27 Cr FY26 (labelled consolidated) | Wrong (basis) | Rs 26.95 Cr is STANDALONE. Consolidated FY26 PAT is Rs 20.28 Cr (AR26 p337). FY25 is Rs 15.46 Cr on both bases |
| 10 | "Wafer-thin ~1% margin" | Right | PAT 0.97% of revenue FY26 standalone (Computed); EBITDA 4.4% (PR4 p3) |
| 11 | Order book Rs 4,055 Cr at 30 Jun 2026, highest since listing | Right | DK1 p22, PR1 p2. Standalone, excl. GST, excl. supply orders |
| 12 | Debtor days 136 (FY25) to 214 (FY26) | Right on a narrow basis | Reproduces only as CURRENT receivables / revenue (136.4, 213.6). Company basis 139.8 to 202.8; closing total 176.8 to 241.8 (Computed) |
| 13 | "DETERIORATED sharply, key pain", "ballooned in one year" | Wrong as framed | FY24 was 182.5 days on the company basis, so FY25 was the low point. Gross overdue fell from Rs 448.34 Cr to Rs 399.35 Cr (AR26 p280, Computed). CFO and CRISIL call the rise largely one-off (depth.md D1, D2) |
| 14 | WC days -13 (FY25) to +23 (FY26) | Right on a narrow basis | Reproduces only as (current assets less cash and bank balances less current liabilities) / revenue: -12.6 and 22.8 (Computed). Not a company figure. CFO states "Net working capital stood at 124 days" (TR4 p7) |
| 15 | Borrowings Rs 376 Cr (FY25) and Rs 367 Cr (FY26) | Right on a narrow basis | Borrowings plus lease liabilities on the AR26 vintage: 375.60 and 366.81 (Computed). FY25 was originally Rs 121.00 Cr. Rs 235.59 Cr of trade credit was reclassified (AR26 p327). FY26 borrowings are 91.14% vendor bill discounting; working capital facilities are Rs 31.00 Cr |
| 16 | Cash from operations fell Rs 69 Cr to Rs 21 Cr | Right | 69.13 to 21.09, standalone and consolidated (AR26 p258, p338). FY24 was 195.37 (AR25 p190) |
| 17 | Q4 FY25 total income Rs 808 Cr, +59% YoY | Right | DK25 p22, standalone |
| 18 | Won Rs 600 to 700 Cr PowerGrid 765 kV orders (Chhattisgarh) | Right in part | TL05, 765 kV in Chhattisgarh, PGCIL for its SPV, band "INR 600+ Crore", filed 12 Aug 2026. No upper bound is disclosed. The Rs 700 Cr figure belongs to the MSETCL Saswad TBCB order (TR4 p5), not PowerGrid. Two more PGCIL SPV packages followed: TL02 765 kV Rs 400 Cr+, TL06 400 kV Rs 300 to 400 Cr. All live as of 8 Oct 2026 |
| 19 | Aug 2026 CRISIL rating update | Right | Upgraded to A+/Stable, A1 reaffirmed (CR26, filed 6 Aug 2026) |
| 20 | Fresh SAP go-live: SAP Cloud ERP via RISE, about 90 days, 400+ users, 50+ sites, 70 to 80% IT cost cut | Unsupported | Zero hits for SAP in every filing (scan log, data.md). AR25 p39 mentions only a "Common ERP system". The vendor page (Weak, search snippet only) frames the ERP as chosen after the Sep 2023 demerger, so "fresh" and "just post go-live" also look Stale |
| 21 | "SAP CONFIRMED", "SAP proof: sap.com (Feb 2026)" | Unsupported | Vendor page answers 403; not a filing; never used for copy |
| 22 | 3-way match discipline "still bedding in" | Unsupported | No filing mentions it |
| 23 | Finance org still maturing; CFO handover to Nitesh Bhandari May 2025 | Right (handover) | Appointed 4 Apr 2025, effective 1 May 2025 (CFOA). "Maturing" is opinion |
| 24 | Nitesh Bhandari "Chief Financial Officer & Joint President", CA, ex-Gujarat Gas | Right, with care | Press release of 4 Apr 2025 says "CFO & Joint President", a chartered accountant, formerly CFO and ED of Gujarat Gas Limited (CFOA p3). AR26 calls him "Chief Financial Officer"; use that |
| 25 | Rajesh Ganesh, Managing Director & CEO | Right | AR26 p256; DK1 p18 |
| 26 | Shekhar Bajaj, Chairman / Director, DIN 00089358 | Right | "Chairman- Non Executive", DIN 00089358 (AR26 p256) |
| 27 | Emails nitesh.bhandari@ and rajesh.ganesh@bajelprojects.com | Unsupported | Inferred by the dossier; NOT FOUND in filings. Published: investor.relations@bajelprojects.com |
| 28 | Marquee client Power Grid | Right | 64.31% of FY26 revenue (AR26 p312, Computed) |
| 29 | Receivables trapped in "unbilled revenue, retentions" | Wrong in part | Contract assets (unbilled) fell from Rs 90.99 Cr to Rs 18.86 Cr. Retention is real but sits inside "Not Due" receivables (AR26 p281), with no separate balance disclosed |
| 30 | "Sharpest O2C pain in the Maharashtra set" | Wrong as a basis | It is a cross-company ranking with no filing basis, and the debtor-day premise fails (claims 12 and 13) |

Notes:
- Claim 9's FY26 PAT of Rs 27 Cr is quoted by the company itself as standalone (PR4 p2). Any booklet use says "standalone".
- Claims 12, 14 and 15 match the aggregator the dossier cites, but only on constructions the company does not use. Print them only with the basis named, or not at all.
