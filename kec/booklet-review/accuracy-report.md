# Accuracy report: KEC_Working-capital-review_booklet.html (KEC-10)

Which booklet: CFO booklet (for Mr. Rajeev Aggarwal), 16 pages, October 2026, drafted by Rajat Kate. Pages: 1 cover, 2 letter, 3 five promises, 4 contract assets, 5 gap widening, 6 one week, 7 five lenses, 8 clock/profit-to-cash, 9 ageing, 10 simulator, 11 AI auditor, 12 priced target, 13 evidence, 14 before you say yes, 15 invitation, 16 back cover.
Sources checked: README Garvis rulings, calc/verify-report.md, data.md, data-addendum.md, fact-check.md, depth.md (not needed), solutions.md, calc/kec-savings.output.txt, slots-cfo.md, webapp-fit.md, plus the call PDFs (src/T_Q4FY26.pdf, T_Q1FY27.pdf) and L&T filings (src/peers). Booklet never edited.

Verdict counts (rows below): CORRECT 55, NEEDS CAVEAT 28, WRONG 6, NOT IN OUR DATA 3 (L&T FY21+FY22 points, L&T source-year line, QR target).

## Must-fix before print
1. P14 "ISO 27001:2022 certification in progress": no such claim allowed. Delete the tile.
2. P14 "database is hosted in an Indian region, held per tenant with separate encryption": today's database is Neon us-east-2 and there is one Organisation row, no per-tenant encryption. Replace with "For the pilot, your data stays in India."
3. P14 "One read-only adapter, built for KEC's SAP instance, feeds those same screens": no SAP adapter exists (registry.ts, SAP_S4 available:false). Replace with "One read-only adapter, built for your SAP instance during the pilot, will feed those same screens."
4. P6 the 450 Cr quote is credited "In your own words" to the CFO. It is in the MD & CEO's opening remarks (Mr. Vimal Kejriwal, T-Q4 pp.2-7, before the Q&A). Write "In the words of your MD & CEO, Mr. Vimal Kejriwal: ..." or "Management said:".
5. P8 FY26 bar (-414) is drawn 13 mm; to the same scale as the others (24 mm = 614) it must be 16.2 mm (20% too short). Fix height:16.2mm, label top:46.6mm, enlarge the chart box by 3.6 mm.
6. P8 "Work done, not yet billed 12,128 / Billed, not yet paid 6,745" bar is drawn 3fr:2fr (60:40). True ratio 64.3:35.7. Use grid-template-columns:12128fr 6745fr.
7. P13 L&T "22.3% to 11.0%" and FY21 22.3 / FY22 19.9 bars: not in our data (addendum: L&T FY22 not fetched; our verified series is FY23 16.1, FY24 12.0, FY25 11.0, Garvis ruling 16.1 to 11.0). Either source the two early points from L&T's FY22/FY23 reports or print "16.1% to 11.0%" with three bars. Delete "Half the capital for every rupee of sales" (16.1 to 11.0 is about a third less) and the source line "FY2021-22 to FY2024-25".
8. P5 and P10 "certifying executed work is wholly inside KEC", and P8 tags Certified = OURS: our app rule (ROLES) and slots-cfo page 8 make CERTIFIED the client's act. Say "Measuring, billing and submitting the bill is KEC's own step; certification is signed by the client." Retag Certified as CLIENT.
9. P6 headline "Nothing went wrong. One week moved.": the 450 Cr is 21% of the 2,164 Cr rise in net debt; KEC itself also names inventory build, Dubai dispatch delays, water payments and revenue-driven debt (IP-Q4 slide 30). Use "One week of collections moved the year-end figure."
10. P8 labels: "Work done, not yet billed" should read "not yet a receivable" (contract assets include 4,922.51 of retention already billed). "Operating profit" must read "Operating profit before working-capital changes (cash-flow subtotal)". The 610 bar is tax paid, not "Tax and other".
11. P10 "Retention ... released when the milestone is met": remove the milestone wording (verify-report); add "Illustrative: holds retention to FY25 growth x revenue growth. Already inside contract assets, so not additional to the contract-asset row."
12. P10 receivables row and P5/P9/P12 "older than six months": add "past their due date"; add GST note to the receivables row (see table).
13. P2 letter: add "assuming released cash repays those loans" after the interest range and "gross working-capital release against a net debt cut, before capex, dividend, tax and growth" after "more than the 1,222 Cr".
14. P11 "Closed only when the number moves": the app also closes tickets "closed, no change". Use "Closed by the auditor alone, never by hand, once the figure is re-measured."
15. P2 address must read "RPG House, 463 Dr. Annie Besant Road, Worli, Mumbai 400030".
16. P7, P11 present-tense "Crestline reads your ERP", "computed from your ERP", "answered from your own evidence": add "once connected" / "on published figures".

## Rule tests
| Rule | Result |
|---|---|
| Interest only 6.90-8.90 as KEC's; no 10.68 | PASS (10.68 and 10.7% appear nowhere; only "6.90 to 8.90%"). Assumption caveat missing, see P2 |
| Two customers 4,372 Cr, no % | PASS (P5, P7, P10, no percentage) |
| RoNW only, no ROCE | PASS (neither printed) |
| P8 step waits blank | PASS ("? d", "days not public"; no demo proportions). "91 d" is KEC's own debtor days, labelled as such |
| Nothing from the other company (Capacite, 2,490, 445.5, 152 days, 9.65%, Katyal) | PASS, zero hits. "9.6 days" on p12 is our own 621.4/64.4 |
| No present-tense SAP connection | FAIL on P14 (item 3), soft on P7/P11 |
| No multi-currency / consolidated / SAE Towers / segment claim | PASS. P14 "do not claim" lists group/foreign currency correctly; no SAE, no segment claim |
| No ISO 27001, India/UAE hosting, per-tenant encryption | FAIL P14 (items 1, 2) |
| 14 days not 15 | PASS (booklet states no pilot window at all; slots p15 has "14 days", optionally add) |
| "overdue over six months", not "already certified" | PASS on "already certified" (absent); wording "older than six months" needs "past due date" |
| Scenarios never added | PASS ("Rows overlap and are never added" on p10, p12, p15) |
| Quotes and speakers | FAIL one (p6, item 4); p3 quotes match transcript wording |
| Filing dates | PASS (16 May 2026 statements; 18 May and 11 Aug calls; presentations 16 May and 10 Aug 2026) |
| Chart geometry (2%) | 2 FAIL (p8 FY26 bar, p8 two-segment bar); all others pass, see below |

## Chart geometry (tolerance 2%)
| Chart | Drawn | Expected | Verdict |
|---|---|---|---|
| P4 contract assets bars | 61.6 / 74.9 / 91.1 / 100% | 7,466/12,128 = 61.6; 74.9; 91.1 | CORRECT |
| P5 index lines (2.8 px per point, FY23=100 at y=260) | CA 199.2/125.9/85.3; revenue 217.4/186.1/159.2; Crestline 109.4 and 157.5 | 121.7, 147.9, 162.4; 115.2, 126.4, 136.0; 153.8, 136.6 | CORRECT |
| P8 waterfall (48 mm box, 43 mm = 5,769) | 31.5 mm (4,229), 4.5 mm (610), 6.9 mm (930) | 31.5, 4.5, 6.9 | CORRECT |
| P8 yearly bars (0.0391 mm per Cr) | 24.0, 12.2, 16.4 mm | 24.0, 12.2, 16.4 | CORRECT |
| P8 FY26 negative bar | 13.0 mm | 16.2 mm | WRONG (-20%) |
| P8 12,128 vs 6,745 two-segment | 60% / 40% | 64.3% / 35.7% | WRONG |
| P9 FY25/FY26 stacked bars | 63.5/27.5/5.2/2.4/0.4/1.0; 49.5/32.3/10.3/3.1/1.4/3.4; FY25 bar 76.5% of FY26 | 63.5/27.5/5.2/2.4/0.4/1.0; 49.5/32.3/10.3/3.1/1.4/3.5; 76.5 | CORRECT (3.4 vs 3.47 rounding) |
| P9 movement bars | 100 / 42.6 / 19.9 / 17.3% | 424.8 / 181.1 / 84.3 / 73.6 = 100 / 42.6 / 19.8 / 17.3 | CORRECT |
| P9 payables bars | 37.5/62.5; 48.8/51.2; FY26 row 96.7% of FY25 | 37.5, 48.8; 8,703/8,996 = 96.7 | CORRECT |
| P10 and P12 day bars (0-30 scale) | 33.3, 33.3, 50.3, 32, 90% | 10, 10, 15.1, 9.6, 27 days / 30 | CORRECT |
| P12 net debt bars | 67.8 / 100 / 97.7 / 81.8% | 4,558, 6,722, 6,568, 5,500 / 6,722 | CORRECT |
| P13 L&T bars (3.498% per point) | 78, 69.6, 56.3, 42, 38.5 | 22.3, 19.9, 16.1, 12.0, 11.0 | Geometry CORRECT; first two values NOT IN OUR DATA |
| P13 Kalpataru | 78 / 74.1 | 99 / 94 | CORRECT |
| P13 KEC | 70.6, 59.2, 60.9, 63.2, 78, 62.6 | 124, 104, 107, 111, 137, 110 | CORRECT |

## Item table
| Page | Item as printed | Our source value | Verdict | Exact fix wording |
|---|---|---|---|---|
| 1 | Rajeev Aggarwal, Chief Financial Officer; Rajat Kate, Managing Director; October 2026 | slots-cfo p1 | CORRECT | none |
| 1 | "12,128 Cr of contract assets, still waiting to be cash" | 12,127.56 (AR26 p.117) | CORRECT | none |
| 2 | "RPG House, Worli, Mumbai" | RPG House, 463 Dr. Annie Besant Road, Worli, Mumbai 400030 (fact-check) | NEEDS CAVEAT | "RPG House, 463 Dr. Annie Besant Road, Worli, Mumbai 400030" |
| 2 | Crestline Pune, +91 76209 35398, rajat@..., www... | slots-cfo p2 | CORRECT | none |
| 2 | Q1 FY27 call target 110 days from 137; net debt about 5,500 Cr by March | T-Q1 p.17; IP-Q4 s30 | CORRECT | none |
| 2 | 27 days = 1,738.8 Cr; 120 to 155 Cr at 6.90 to 8.90% | calc 1,738.8; 120.0-154.8 | NEEDS CAVEAT | add "if the cash released repays those loans" |
| 2 | "more than the 1,222 Cr the debt target needs" | 142.3% gross vs net | NEEDS CAVEAT | "...more than the 1,222 Cr net debt cut, as a gross release before capex, dividend, tax and growth" |
| 2 | "what one week of collections did to the year-end debt" | 450 Cr = 21% of the 2,164 rise | NEEDS CAVEAT | "what one week of collections moved in the year-end debt" |
| 2 | "both investor presentations and both results calls", RPG not named elsewhere | sources list | CORRECT | none |
| 3 | i. 110 days from 137 at 31 Mar 2026, Q1 call 11 Aug 2026 | T-Q1 p.17 | CORRECT | none |
| 3 | ii. 5,500 Cr, "roughly about INR1,200 crores debt reduction" | T-Q1 p.17 verbatim | CORRECT | none |
| 3 | iii. 120 days by H1, "and another 10 days, we will reduce in the H2", 18 May 2026 | T-Q4 p.13 verbatim | CORRECT | none |
| 3 | iv. 6,000 Cr end H1, 18 May 2026 | T-Q4 p.12 | CORRECT | none |
| 3 | v. high single digit margin "in '28 should be possible", no guidance this year, 11 Aug 2026 | T-Q1 p.11; T-Q4 analyst remark | CORRECT | none |
| 3 | "Four of them are about getting paid" | five items, four cash | CORRECT | none |
| 4 | 12,128 Cr; bars 7,466 / 9,088 / 11,044 / 12,128 | 7,465.61 / 9,088.37 / 11,043.51 / 12,127.56 | CORRECT | none |
| 4 | Retention 4,923 Cr, +34.1%, revenue +7.6% | 4,922.51 vs 3,669.63; 21,846.70 to 23,505.54 | CORRECT | none |
| 4 | 4,746 Cr absorbed by contract assets FY23 to FY26 | 60.27+1,645.80+2,017.72+1,022.11 | CORRECT | none |
| 4 | Key audit matter: recoverability of receivables and contract assets | AR26 auditor report | CORRECT | none |
| 5 | Contract assets +62%, revenue +36%; 17,282 to 23,506; order book 36,267 | 1.6245; 1.3601; AR26 p.10 | CORRECT | none |
| 5 | Index 162.4 / 136.0; 153.8 / 136.6 | script c.py | CORRECT | none |
| 5 | "certified 10 days sooner" / "Certifying executed work sooner is the one step wholly inside KEC" | webapp ROLES: certified = client act; solutions.md says ours | NEEDS CAVEAT | "Measuring, billing and submitting the bill is KEC's own step; certification is signed by the client." |
| 5 | 644.0 / 44.4-57.3; 1,932.0 / 133.3-171.9 | calc | CORRECT | none |
| 5 | "9.0% to 18.2% older than six months, 463 to 1,227" | 463.47 (9.0%) to 1,227.26 (18.2%), from due date | NEEDS CAVEAT | "more than six months past their due date" |
| 5 | "4,372 Cr of receivables held by two customers, against 2,418 Cr" | 4,372.34 / 2,417.65; no % | CORRECT | none (no percentage, rule held) |
| 5 | "91 days debtor days, against 81" | AR26 p.67 | CORRECT | none |
| 6 | "Nothing went wrong. One week moved." | FY26 NOCF -414; debt +47.5%; multiple causes in IP-Q4 s30 | NEEDS CAVEAT | "One week of collections moved the year-end figure." |
| 6 | Quote "The debt could have been lower, but for the spillover of collections of INR 450 crores ... first week of April '26" ascribed "In your own words" | T-Q4 p.4, MD & CEO opening remarks (pp.2-7) | WRONG (speaker) | "In the words of your MD & CEO, Mr. Vimal Kejriwal, on the Q4 FY26 call:" |
| 6 | Net debt 4,558 to 6,722, +47.5% vs revenue +7.6% | 4,558; 6,722; 2,164 | CORRECT | none |
| 6 | Net cash from operations 419 then -414, "first negative year of the four" | 419.07; -414.12; FY22 was -283.71 | NEEDS CAVEAT | "the only negative year of FY23 to FY26" |
| 6 | NWC days 111 FY25, 137 FY26, 134 at 30 June | AR26 series 111; IP-Q4 s30; IP-Q1 s32. Press release of May 2025 said 122 | NEEDS CAVEAT | add "AR26 series; KEC restated earlier years, definition not published" |
| 6 | 644.0 Cr per ten days; 64.4 per day; 23,505.54 | calc | CORRECT | none |
| 6 | "450 Cr is a management statement, not an audited balance" | data.md | CORRECT | none |
| 7 | Lens 01 137 days, target 110; 02 12,128 Cr | data.md | CORRECT | none |
| 7 | Lens 03 "8,703 Cr of trade payables" | 8,703.25 excl. 2,120.74 acceptances | NEEDS CAVEAT | "8,703 Cr of trade payables, excluding 2,121 Cr of acceptances" |
| 7 | Lens 04 4,372 Cr by two customers; lens 05 4,251 Cr past due | 4,372.34; 4,250.81 | CORRECT | none |
| 7 | "Crestline reads your ERP and shows which bills ... are stuck" | no SAP adapter (webapp-fit s0) | NEEDS CAVEAT | "Once connected, Crestline reads your ERP and shows ..." |
| 7 | "Read-only on your ERP", "No AI-generated numbers" | design rule | CORRECT | none |
| 8 | Waterfall 5,769 / -4,229 / -610 / 930; 73% | 5,769.26; 4,229.26; 610.17; 930; 73.3% | CORRECT (figures) | none |
| 8 | Label "Operating profit"; "balance, tax and other items" | Subtotal before WC changes; EBITDA sum FY23-26 is 5,208; the 610 is tax paid | NEEDS CAVEAT | "Operating profit before working-capital changes (cash-flow subtotal)"; third bar "Tax paid" |
| 8 | Yearly 614 / 311 / 419 / -414 | 613.74; 311.15; 419.07; -414.12 | CORRECT (values); bar for -414 WRONG | draw 16.2 mm, see geometry |
| 8 | FY26 negative bar length | 16.2 mm expected, 13 drawn | WRONG | as above |
| 8 | "Work done, not yet billed 12,128 Cr" | contract assets include 4,922.51 retention already billed | NEEDS CAVEAT | "Work done, not yet a receivable" |
| 8 | "Billed, not yet paid 6,745 Cr" | gross current receivables 6,745.05 | NEEDS CAVEAT | "gross current trade receivables" |
| 8 | Two-segment bar 3fr:2fr | 64.3:35.7 | WRONG (geometry) | 12128fr 6745fr |
| 8 | Box "Certified 4,746 Cr cash absorbed here" and "Billed 4,923 held as retention" | 4,746 is the change in all contract assets; retention is a component | NEEDS CAVEAT | relabel "Contract assets, cash absorbed in 4 years" and "Retention receivables" |
| 8 | Step tags Measured, Certified, Billed = OURS; Paid = CLIENT | slots p8: Certified is CLIENT | NEEDS CAVEAT | Certified: CLIENT |
| 8 | "Paid 91 d debtor days, 81 a year ago" | KEC own, average receivables over revenue | CORRECT | none |
| 8 | Step waits blank, "? d" | Garvis ruling | CORRECT | none |
| 9 | FY25 5,160 Cr 9.0%; FY26 6,745 Cr 18.2%; bands 3,278 / 1,419 / 3,338 / 2,180 / 692 | Note 16.3 | CORRECT | none |
| 9 | "+764 Cr more owed for over six months", movements +424.8 / +181.1 / +84.3 / +73.6 | 763.79; 424.75; 181.13; 84.33; 73.58 | CORRECT | none |
| 9 | "older than six months", "over six months" | ageing from due date | NEEDS CAVEAT | "more than six months past due" |
| 9 | Payables past due 3,371 (37.5%) and 4,251 (48.8%); in all 8,996 / 8,703 | 3,370.62; 4,250.81 | CORRECT | none |
| 9 | "never counts paying later than agreed as a saving" | rule 1 | CORRECT | none |
| 10 | Bill/certify and collect 10 days: 644.0, 44.4-57.3 | calc | CORRECT | none |
| 10 | "Bill and certify ... wholly KEC's own step" | see p5 | NEEDS CAVEAT | "bill and submit executed work: KEC's own steps" |
| 10 | Collect receivables 644.0 | verify-report: GST-inclusive balance priced at revenue per day | NEEDS CAVEAT | "Receivable balances include GST; priced at revenue per day, which understates the cash by up to about 15%" |
| 10 | Retention 15.1 days, 974.2, 67.2-86.7, "released when the milestone is met" | calc; verify-report | NEEDS CAVEAT | remove milestone wording; add "Illustrative; inside contract assets; not additional" |
| 10 | Vendors "Releases 0, paying 10 days sooner consumes 510.7" | calc | CORRECT | add "includes interest-bearing acceptances; cost base materials plus erection" |
| 10 | Target 27 days 1,738.8; 120.0-154.8 | calc | CORRECT | none |
| 10 | 8,703 Cr payables; 184.25 Cr unpaid to small suppliers | Note 32.1 | CORRECT | none |
| 10 | "Two customers: 4,372 Cr" | AR26 p.148 | CORRECT | none |
| 10 | "Water: 800 to 900 Cr" | T-Q1 p.7, JJM receivables only; 400-500 overdue | NEEDS CAVEAT | "Jal Jeevan Mission water receivables: 800 to 900 Cr, of which 400 to 500 Cr overdue" |
| 10 | "Saudi contracts: 20% retention" | T-Q4 p.9, CEO | CORRECT | none |
| 11 | Finding 137 vs 110 days; ticket steps | webapp-fit 1.6 | CORRECT | none |
| 11 | "Closed only when the number moves. Nobody can mark it done by hand." | app has closed-no-change status; auditor alone closes | NEEDS CAVEAT | "Closed by the auditor alone, never by hand, once the figure is re-measured." |
| 11 | "Every figure is computed from your ERP, never generated" | no ERP connected | NEEDS CAVEAT | "Every figure is computed, never generated. In the pilot, from your ERP." |
| 11 | "Ask Crestline: answered from your own evidence", answer 644.0 / 44.4-57.3 | public figures | NEEDS CAVEAT | "answered from the evidence it holds (here, KEC's published figures)" |
| 11 | Retrieval then code; model never produces a number | CLAUDE.md Ask rules | CORRECT | none |
| 12 | 27 days, 1,738.8, 120 to 155, rows 644.0 / 644.0 / 974.2 / 621.4 / 1,738.8 and interest ranges | calc | CORRECT | none |
| 12 | "Over six months back to 9.0%": 621.4, 42.9-55.3, 9.6 days | calc | CORRECT | label: "Over six months past due, back to 9.0%" |
| 12 | Net debt 4,558 / 6,722 / 6,568 / 5,500; 1,222 needed; 142% | data.md; calc | CORRECT | none |
| 12 | "If the working-capital promise is met, the cash it releases is more than the debt promise needs." | gross vs net, 517 Cr would not reduce guided debt (verify-report s4.6) | NEEDS CAVEAT | add "(gross release against net debt; if it repays the loans)" |
| 13 | L&T "22.3% to 11.0%", bars FY21 22.3, FY22 19.9 | addendum: only FY23 16.1, FY24 12.0, FY25 11.0 | NOT IN OUR DATA | print "16.1% to 11.0%", three bars FY23 to FY25, or source FY21/FY22 |
| 13 | L&T FY23 16.1, FY24 12.0, FY25 11.0 | L&T IAR24 p.35 and OFR 2024-25 | CORRECT | none |
| 13 | "Half the capital for every rupee of sales" | 16.1 to 11.0 is -32% | NEEDS CAVEAT | "A third less capital for every rupee of sales" |
| 13 | Source line "FY2021-22 to FY2024-25" | filings cover FY23 to FY25 | NOT IN OUR DATA | "L&T Overall Financial Review, FY2023-24 and FY2024-25" |
| 13 | Kalpataru "Under 100 days", 99 / 94, "earlier / later" | KPIL standalone FY24 99, FY25 94; stable before | NEEDS CAVEAT | label FY24 and FY25, "stand-alone"; "held under a 100-day ceiling, trimmed by 5 days" |
| 13 | KEC 124 / 104 / 107 / 111 / 137 / 110; "took 20 days out"; "run below" | AR26 p.10 chart | CORRECT | add "AR26 series, restated by KEC" |
| 14 | "ISO 27001:2022 Certification in progress" | no source; banned | WRONG | delete tile |
| 14 | "India: database hosted in an Indian region, held per tenant with separate encryption" | DB is Neon us-east-2; pilot plan only; no per-tenant encryption | WRONG | "For the pilot, your data stays in India." |
| 14 | "One read-only adapter, built for KEC's SAP instance, feeds those same screens" | no SAP adapter exists | WRONG | "...built for your SAP instance during the pilot, will feed those same screens" |
| 14 | "The screens in this booklet run today" | true on the Grey demo source only | NEEDS CAVEAT | add "on a demonstration source" |
| 14 | Enforced read-only; one company code; no ERP change | webapp-fit; slots p14 | CORRECT | none |
| 14 | "We do not claim": off the shelf, weeks, group/foreign currency, guarantees/LCs/supplier finance | webapp-fit s3 | CORRECT | none |
| 14 | One entity, one segment, 5 to 15 projects, page times | webapp-fit s2.3 | CORRECT | none |
| 15 | Pilot one rupee entity, one segment, read-only SAP access, company code, WC definition | KEC-MAIN | CORRECT | none |
| 15 | Sources: statements signed 16 May 2026; presentations 16 May / 10 Aug 2026; calls 18 May / 11 Aug 2026 | data.md s1 | CORRECT | none |
| 15 | Interest priced at 6.90-8.90 (Note 30); cash once, interest recurs; rows never added | data.md s8 | CORRECT | none |
| 15 | Management statements note (450, water, Saudi) | data.md s11 | CORRECT | none |
| 15 | QR code and crestlineintelligence.com/book-a-demo | image only | NOT IN OUR DATA | decode the QR with a phone before print; text URL matches slots |
| 16 | Tagline, Rajat Kate, Pune, phone, email, website | slots p16 | CORRECT | none |

Self-review: 4/5. Read every figure against the files and recomputed all geometry from the markup, and traced the 450 Cr quote to the CEO's opening remarks in the PDF. Weaker: did not decode the QR, did not open the L&T FY21/FY22 reports to try to source the early points, and the speaker call on p6 rests on the opening-remarks structure because the transcript text layer drops names.
