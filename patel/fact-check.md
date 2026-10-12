# Patel Engineering: dossier fact check (PE-1)

The dossier (src/20_Patel_Engineering_Dossier.pdf, prepared 2026-10-08) is a checklist, not a source. Each claim was tested against the primary filings listed in data.md (codes as there). Grades: **Right / Wrong / Stale / Unsupported**.
Tally (by script: `python -I scan.py <patel folder>`, scratch; counts the first grade word per row): 36 claims; Right 26, Wrong 4, Stale 3, Unsupported 3. Rows graded "Right, conflicting" or "Right, incomplete" count as Right.

| # | Dossier claim | Grade | What the filings say |
|---|---|---|---|
| 1 | Legal name Patel Engineering Limited | Right | Every filing letterhead; AR26 |
| 2 | Listed NSE: PATELENG / BSE: 531120 | Right | Filing headers (e.g. T4Q26 PDF p1) |
| 3 | "Patel family" promoter | Right | AR26 PDF p123 note 15(h): promoter group incl. Raahitya Constructions Pvt Ltd, Janky Patel, Ryan Rupen Patel; 31.48% total. Detail: S3 |
| 4 | CIN L99999MH1949PLC007039, incorporated 1949 | Right | R4Q26 PDF p9 header; "Since 1949" mark |
| 5 | HQ Patel Estate Road, Jogeshwari (West), Mumbai 400102 | Right | AR26 PDF p43, printed p59 (registered office) |
| 6 | Website pateleng.com | Right | AR26 PDF p43. Note: site did not respond to our fetch on 8 Oct 2026 |
| 7 | Heavy civil EPC: hydro, irrigation, tunnels, roads, urban | Right | D4Q26 slide 10 segments |
| 8 | ~75 year track record | Right | D4Q26 PDF p3 (slide 2, image checked): "75 + Years of Industry Presence" |
| 9 | Executing 48 projects across 15 states + 2 in Nepal | Stale | D4Q26 PDF p3 (slide 2, image checked): 53 ongoing projects, 14 states domestic, 2 international (Nepal and Bhutan). AR24 said 15 states and 49 projects in the order book |
| 10 | Clients NHPC, SJVN, state hydro and irrigation corporations | Right | Teesta VI (NHPC), SAPDC (SJVN subsidiary, AR26 PDF p28), NEEPCO, HPPCL, CIDCO, Maharashtra Krishna Valley Dev. Corp. (T4Q26 PDF p3 to p4) |
| 11 | Clients NHAI, state PWDs | Unsupported | Not named in the filings read. Roads are 1.42% of the order book |
| 12 | International: Nepal | Right, incomplete | Nepal (Arun III, Lower Arun L1) and Bhutan (Dorjilung) per T4Q26 PDF p4 to p5 |
| 13 | FY24 revenue ~Rs 4,544 Cr | Right (CONSOLIDATED) | R4Q25 PDF p21: 45,441.08 Rs Mn. Standalone is Rs 4,412.04 Cr |
| 14 | FY25 revenue Rs 5,093 Cr (+12%) | Right (CONSOLIDATED) | R4Q25 PDF p21; growth 12.09% (pe-calc) |
| 15 | FY25 PAT ~Rs 242 to 294 Cr, sources conflict | Wrong | The range mixes two years. FY25 consolidated PAT (owners' total comprehensive income) Rs 242.1 Cr; FY26 Rs 294 Cr (T4Q26 PDF p7, Rahul Agarwal). FY25 standalone PAT Rs 262.21 Cr |
| 16 | Q4 FY25 PAT fell ~73% YoY | Right (CONSOLIDATED) | Net profit after associates 381.65 vs 1,403.46 Rs Mn: minus 72.81% (pe-calc) |
| 17 | Order book FY24 Rs 18,663 Cr | Right | D4Q25 slide 32 (1,86,630 Rs Mn); AR25 RPO prior year |
| 18 | Order book FY25 Rs 15,217.6 Cr | Right | D4Q25 slide 32 (1,52,176 Rs Mn), excludes L1 |
| 19 | Order book Rs 15,123 Cr (Dec 2025) | Right | T3Q26 PDF p4, Kavita Shirvaikar (image checked) |
| 20 | Order book "DECLINING" | Right, and still true | Rs 15,119.30 Cr (Mar 2026), Rs 14,635.60 Cr (Jun 2026); minus 19.0% FY24 to FY26 (pe-calc) |
| 21 | Order mix hydro 49%, irrigation 26%, tunnel 11%, road 10%, urban 4% | Wrong | FY25: hydro 66%, irrigation 23%, tunnelling 8% (T4Q25 PDF p4). FY26: 62.66 / 16.19 / 4.76 / 1.42 / 14.96 (D4Q26 slide 10). No filing read shows the dossier's mix |
| 22 | Gross debt FY24 Rs 1,886 Cr | Right, conflicting | T4Q25 PDF p6, Rahul Agarwal. D4Q26 slide 28 shows 18,932 Rs Mn for FY24 |
| 23 | Gross debt FY25 Rs 1,603 Cr | Right, conflicting | Company gives 1,600 / 1,603 / 1,645 Cr and 16,025 Rs Mn in different documents (data.md, internal conflicts) |
| 24 | "Deleveraging" | Right | FY26 consolidated gross debt Rs 1,187 Cr (T4Q26 PDF p8). Rose to Rs 1,293 Cr at Jun 2026 (T1Q27 PDF p7) |
| 25 | Debtor days 54 (Mar 25) to 43 (Mar 26) | Unsupported | Aggregator figure. Computed standalone year-end: 72.3 (FY25) and 58.6 (FY26) days. Management: 52 days (H1 FY26, analyst's figure accepted, T2Q26 PDF p7); "between 40 to 45" (Q1 FY27, T1Q27 PDF p13) |
| 26 | Management expects flat FY26, then 10 to 15% growth FY27 | Stale | Said May 2025 (T4Q25 PDF p8, Kavita Shirvaikar). FY26 was flat (consolidated +0.18%). Current guidance: "we expect FY'27 revenue to grow by 10%" (T4Q26 PDF p7) and "approximately 10%" (T1Q27 PDF p6) |
| 27 | Targets Rs 8,000 to 10,000 Cr new orders | Right | "around INR 8,000 crores to INR 10,000 crores of new orders in the coming year" (T3Q26 PDF p4, Kavita Shirvaikar). May and Aug 2026: "around INR 8,000 crore" |
| 28 | WC heavy; claims, retention, WIP lock cash | Right | Contract assets 264.8 days (data.md section 2); rating rationale wording (S6) |
| 29 | CMD Rupen Patel died Jul 2024 | Right | AR26 PDF p14: 22 Aug 1966 to 05 Jul 2024. See S3 |
| 30 | Kavita Shirvaikar acting MD from Jul 2024 | Wrong | Titled "Managing Director" in AR24 (PDF p32) and AR26 (PDF p43); no "acting" anywhere read |
| 31 | Kavita Shirvaikar ex-CFO | Right | AR24 PDF p41 signature: "Chief Financial Officer & Whole Time Director" |
| 32 | Rahul Agarwal acting CFO from Jul 2024 | Stale | AR24 (filed Aug 2024): "Acting Chief Financial Officer". AR26: "Chief Financial Officer". The start month is not verified |
| 33 | Janky Patel Chairperson from Jul 2024, promoter | Right | AR24 PDF p32: "Chairperson (effective from July 6, 2024)"; AR26 PDF p59 (printed): non-executive, promoter |
| 34 | Emails kavita.shirvaikar@ / rahul.agarwal@pateleng.com (inferred) | Unsupported | No personal address in any filing read. Filings give investors@pateleng.com and headoffice@pateleng.com. Do not use inferred addresses |
| 35 | ERP: no public confirmation, SAP-likely | Wrong (understated) | SAP is confirmed in the filings: AR24 PDF p24 "implemented SAP across all our project sites"; AR26 PDF p104 auditor "SAP accounting software" |
| 36 | Heavy performance / advance guarantees | Right | Bank guarantees / surety bonds Rs 2,398.80 Cr (AR26 PDF p136 note 46) |

Opinions in the dossier (e.g. "Prerequisite likely MET", "strong fit") are not graded.
