# OVAL: fact check of the dossier and the gtm file (OV-1)

Date 7 Oct 2026. Inputs read: `src/oval-dossier-internal.pdf` (dated 2026-10-07, 2 pages, "Crestline Intelligence", sources: Whalesbook, Tradejini, Bajaj Finserv, Zaubacorp, Tofler) and `crestline-gtm/data/research/oval-projects.json` (only that file; gtm confidence labels shown). Both are checklists, never sources. Verdicts: **Verified** (primary filing found), **Wrong**, **Partly** (right in part, stated incompletely or stale), **NOT FOUND**. Codes and URLs: see `data.md` section 0. Page convention as in data.md.

## A. Dossier claims

| # | Dossier says | Verdict | Evidence |
|---|---|---|---|
| 1 | Legal name OVAL Projects Engineering Limited (formerly Private Limited) | Verified | RHP cover page: converted to public limited, fresh certificate 20 Sep 2024 |
| 2 | Listed SME platform, IPO 2025, ~Rs 46.74 Cr; "verify NSE-SME vs BSE-SME" | Verified: **BSE SME**, not NSE | AR26 p19: "BSE Limited, SME Platform; scrip code 544498; date of listing 4 September 2025". 54,99,200 x Rs 85 = Rs 46.7432 Cr (C). Symbol: NOT FOUND (only scrip code printed in filings read) |
| 3 | CIN U74900TR2013PLC008465 | Partly | That is the unlisted-form CIN used in the RHP and still on letterheads. AR26 p19 and AR26 audit pages print **L74900TR2013PLC008465**. |
| 4 | "2013 (Tripura)" | Partly / Wrong on place | Incorporated 7 Oct 2013 under ROC Delhi and Haryana (RHP p1 and History section); registered office moved Haryana to Tripura in 2015 (RHP History section; 2015 amendment row). |
| 5 | Registered office Badharghat, Agartala, Tripura 799003 | Verified | AR26 p19; RHP cover |
| 6 | "Website/Email: oval group / ovalprojects (verify)" | Resolved | Website www.ovalprojects.com; cs@, info@, cfo@ovalprojects.com (RHP PDF p74; AR26 p19). Individual mailbox pattern NOT FOUND. |
| 7 | Business: EPC works + O&M + engineering/management services + skill development "primarily for the OIL & GAS industry" | Partly | RHP restated consolidated revenue note (F-19, PDF p198) lists works contract, management services (17.63 lakh FY25), skills development (144.75 lakh FY25 = 1.42%), export of engineering services (nil FY24 and FY25; 50.98 FY23). AR26 p170 (FY26) shows only O&G works 50.9%, specialised infrastructure 26.9%, other services 2.1%, trading of O&G goods 20.2% (new). "Primarily oil and gas" holds (O&G works 50.9% plus trading 20.2% in FY26) but specialised civil infrastructure is 26.9%, and the engineering-services/skill-development streams are small or not itemised. |
| 8 | 90%+ government clients | Verified for FY25 | RHP PDF p37: 90.17% FY25, 77.73% FY24, 91.06% FY23 from "government-controlled entities". The dossier's "oil & gas PSUs / state bodies" mix is not separated in the filing. |
| 9 | FY25 revenue Rs 102.29 Cr; FY26 Rs 153.14 Cr; +50% | Verified | AR26 p151: 10,228.90 and 15,314.19 lakh standalone; +49.7% (C). Basis not stated by dossier: standalone. Consolidated FY26 revenue is Rs 149.90 Cr (AR26 p211). |
| 10 | PAT FY25 9.33, FY26 14.81, +59% | Verified (standalone) | AR26 p151: 934.02 and 1,481.39 lakh (+58.6%, C). 9.33 is the restated consolidated figure (933.25, RHP F-6); standalone is 9.34. Consolidated FY26 PAT is Rs 13.72 Cr (AR26 p211). |
| 11 | Revenue FY24 77.97; PAT FY24 4.40; "~2x and ~3.4x in 2 years" | Verified | RHP F-6 (restated consolidated: 7,796.54; 440.11); AR26 p99 gives standalone PAT FY24 437.14 (4.37). C: 1.96x revenue; 3.37x consolidated, 3.39x standalone. |
| 12 | Order book ">Rs 780 Cr (May-25)" | Partly | Company states "Rs 780+ Cr (30th May, 2025)" (IP slide, printed p13). Definition differs: RHP PDF p38 says Rs 45,299.61 lakh (453 Cr) unexecuted at 9 Apr 2025. **Latest: Rs 796 Cr total contract value at 30 Apr 2026** (AR26 p87). Dossier is stale. |
| 13 | "~Rs 490 Cr unexecuted (Apr-25)" | Contradicted | IP printed p13 says "490+ Cr unexecuted (as of Apr 2025)"; the RHP, filed earlier, says 453.0 Cr unexecuted at 9 Apr 2025 (PDF p38, p105). Two company documents disagree by 37 Cr. Do not use 490. |
| 14 | "~5x" order book to revenue | Verified | 780/153.14 = 5.09x; AR26 uses 796/153.14 = 5.2x (p87). Different totals, same direction. |
| 15 | "Limited quarterly disclosure so far" | Verified | SME listing: half-yearly only. H2 FY26 and FY26 published 29 May 2026; H1 FY26 on 18 Oct 2025. No quarterly results exist. No H1 FY27 yet (7 Oct 2026). |
| 16 | ERP "almost certainly ERP-GREENFIELD (Tally / mid-tier accounting). No SAP/Oracle signal found." | Verified in direction | See section C. Tally Prime is named by the auditor for FY25. Company says an ERP is planned or in progress. No SAP or Oracle word in AR25, AR26, RHP, DRHP, IP. |
| 17 | MD Goutam Debnath, DIN 06923261 | Verified | AR26 p13 ("Chairman & Managing Director", age 45, 53.12%). Dossier omits "Chairman". |
| 18 | Sneha Banik, Whole-Time Director | Verified | AR26 p150 (DIN 08968107); RHP |
| 19 | "Himangshu Mahawar / Khitish Kumar Nayak / Tarun Malik" as Directors | Verified, role refined | Mahawar non-executive; Nayak and Malik independent (AR26 p13, p19) |
| 20 | **CFO "Not publicly named, identify via MCA/IPO prospectus"** | **Wrong** | **Princee Premchand Gupta**, CFO since 10 Aug 2024 (RHP PDF p167); signs the audited accounts (AR26 p150) and the 29 May 2026 declaration (FR26 p3); email cfo@ovalprojects.com, tel +91 79777 67790 (RHP PDF p74). |
| 21 | "Finance likely sits with the MD / promoter" | Wrong | There is a named CFO and a CS (Nisha Kashyap). |
| 22 | Registered office "double-verified" | Verified | Matches RHP and AR26. |
| 23 | "AGM held 20-Sep-2024" | NOT FOUND | The RHP records a shareholders' meeting on 20 Sep 2024 (WTD and MD re-appointment, conversion certificate dated the same day) but never calls it an AGM (RHP, Our Management). Actual AGMs: 12th on 30 Dec 2025 (BSE clipping 9 Dec 2025), 13th on 29 Sep 2026 (AR26 p19, p33). |
| 24 | "IPO ~Rs 46.74 Cr"; "listed" | Verified | MA p5; AR26 p106 |
| 25 | Zaubacorp source URL ends U74900TR2013PTC008465 (private form) | Wrong URL form | Company is now a listed public company (L-CIN). |
| 26 | Dossier gives no receivable, payable, borrowing or WC figure | n/a | All now in `data.md`. |

## B. gtm file (oval-projects.json, updatedAt 2026-09-28, by Nikhil, `complete: false`)

| gtm field | gtm value (confidence) | Verdict | Evidence |
|---|---|---|---|
| revenue | 153.14 (source: Whalesbook, secondary) | Verified | AR26 p151 (Rs 153.14 Cr, standalone) |
| receivables / unbilled / retention / inventory / payables / costBase / borrowings / interestCost / paymentTermDays | all null | Now filled | Receivables Rs 35.07 Cr, inventory Rs 59.07 Cr, current payables Rs 12.94 Cr (plus Rs 6.85 Cr long-term trade payables), borrowings Rs 55.23 Cr (standalone), finance cost Rs 6.43 Cr; unbilled Rs 16.86 Cr inside receivables; retention held by clients Rs 10.50 Cr (inside "Other LD & Withheld"). See data.md sections 3 to 7. paymentTermDays: NOT FOUND (no contract terms disclosed; IP says "60-90 day PSU payment visibility", a company claim, W). |
| orderBook | 780 | Partly | Company-stated 30 May 2025, different definition from the RHP's 453 Cr unexecuted; AR26: 796 Cr at 30 Apr 2026. |
| painPoints[0] order book >780 vs ~153 (~5x) | | Verified | IP; AR26 p87 |
| painPoints[1] "Clients skew government/PSU (IGGL, CPWD, Tripura PWD)" | | Verified | 90.17% government-controlled (RHP PDF p37). IGGL in AR26 (client list); Tripura PWD in AR26 p76/p91 and LOA 9 Dec 2025; CPWD appears only as a logo (IP printed p13, p16), not in a named contract |
| painPoints[2] "+50% revenue strains finance/systems" | | Verified (fact), inference (strain) | Revenue +49.7%; operating cash flow -29.96 Cr (AR26 p153) |
| painPoints[3] small newly-listed SME | | Verified | BSE SME 4 Sep 2025 |
| loophole: "Tripura-registered ... (**Mumbai corporate HQ**, but operations not Maharashtra-centric)" | | **Wrong on Mumbai** | HQ and registered office Agartala (AR26 p19: "Registered & Corporate Office" Agartala). A corporate office exists at Gurugram (PR letterhead, 30 May 2026) and a branch at Pen, Raigad, Maharashtra. The press release is datelined Mumbai because the investor-relations adviser is ORIM Connect (PR p2). |
| loophole: "CFO email is a published functional address (cfo@)" | | Verified | RHP PDF p74 |
| erp: "unknown (no public proof)", Low | | Partly | Public proof exists that books were kept in Tally Prime (AR25 auditor, see C). "Unknown" understates; "Low" confidence label is unnecessary. No ERP is named as live. |
| listing: "BSE SME: 544498 (2025 IPO); CIN U74900TR2013PLC008465" | | Verified; CIN outdated | AR26 p19; L- CIN since listing |
| emailPattern: functional mailboxes cfo@, cs@, info@ | | Verified | cfo@ and cs@ RHP PDF p74; info@ AR26 p19. Individual pattern "[Mayuresh to verify]": NOT FOUND. |
| people: Princee Gupta, CFO, "cfo@... phone +91-7977767790" | | Verified | RHP PDF p74 prints "+91-79777 67790" (same digits). Full name Princee Premchand Gupta. |
| people: Goutam Debnath "Chairman & MD, Promoter" | | Verified | AR26 p13 |
| people: Nisha Kashyap "CS & Compliance Officer, cs@" | | Verified | RHP PDF p74, p167; AR26 p19 |

gtm confidence labels: only `erp.confidence = Low` is present. No "High" item is available as a fallback, and none is needed: the filings supply every item above.

## C. ERP and accounting system (primary evidence, exact words)

1. **AR25 independent auditor's report (8 Jun 2025), printed p63 (PDF p74):** "The Company has migrated to Tally Prime5.1 from Tally Prime 3.01 during the year and is in the process of establishing necessary controls and documentations regarding audit trail. Consequently, The Company has fully enabled audit trail on migration to Tally 3.01 on 21-12-2023 we are unable to comment on audit trail feature of the said software facility is not fully used by the company for the financial year 2024-2025." Image: `src/img/ar25_p74.png`. Grade **Verified** for FY25. Note the sentence contradicts itself on versions (5.1 / 3.01); quote it, never paraphrase to a version number.
2. **AR25 MD&A, printed p54 (PDF p65), "Finance & Control":** "Transition to ERP-based integrated accounting and procurement for better control over working capital and vendor performance." and "Predictive analytics models in development to track receivables and forecast cash flow." Image `src/img/ar25_p65.png`. Also AR25 (PDF p67) "Technology Leverage: Using ERP, GIS, and digital dashboards to manage multiple sites across wider geographies efficiently." (text read, image not rendered).
3. **AR26 printed p97, Table G.3 "Digital adoption roadmap", row "In progress":** "Integrated accounting and procurement systems; digital attendance and workforce management; predictive analytics for receivables". Row "In place": "Project management dashboards linking engineering, procurement and site progress; GIS mapping and drone-based survey for right-of-use and progress measurement". Image `src/img/ar26_p97.png`. Grade Verified: an integrated system is **in progress, not live**.
4. **IP printed p18 (PDF p19), Phase 2 (FY26 to FY28):** "Upgrade PMO systems, ERP, and procurement technology platform". Image `src/img/pres_p19.png`.
5. **AR26 auditor's report, p137:** "the Company has used accounting software for maintaining its books of account for the financial year ended March 31, 2026 which has a feature of recording audit trail (edit log) facility and the same has have been operated throughout the year for all relevant transactions". No product named for FY26. (The two subsidiaries' reports say books were kept manually, AR26 p252 and p263; the two joint ventures keep no audit-trail software, AR26 consolidated auditor's report.)
6. **RHP and DRHP:** searched for ERP, Tally, SAP, Oracle, "accounting software" in full text. No internal-controls or IT-systems section names a system. RHP risk factor 47 (PDF p58) is generic: "We manage our internal compliance by monitoring and evaluating internal controls ...".

Conclusion: Tally Prime is the only accounting product named, and only for FY25. The company says an ERP-based integrated accounting and procurement system is planned (AR25), "in progress" (AR26) and on the Phase-2 roadmap (IP). Nothing says SAP, Oracle or any named ERP. A booklet may say "accounting on Tally Prime per the FY25 auditor's report; an integrated system is in progress per the FY26 annual report". It may not say "Tally" for FY26.

## D. Conflicts found inside the company's own filings (print neither side as fact without the other)

| Topic | Document A | Document B |
|---|---|---|
| FY26 EBITDA | PR and IP: Rs 28.25 Cr, 18.44% (includes other income, excludes the 39.04 lakh extraordinary item) | AR26 p100: Rs 24.92 Cr, 16.3% ("less other income") |
| Unexecuted order book Apr 2025 | RHP PDF p38: Rs 453.0 Cr | IP p13: Rs 490+ Cr; AR25: ~Rs 504 Cr pending Aug 2025 |
| IPO proceeds use | AR26 p106: applied "in full" to long-term working capital and GCP | MA (14 May 2026): Rs 7.78 Cr unutilised at 31 Mar 2026, and Rs 14.07 Cr of FY27 working-capital spend was "prepaid" in FY26 |
| Receivable days FY25 | RHP PDF p104: 152 (called "average", recomputes to closing balance) | AR26 G.10 p104: ~92 (turnover 3.95x). Different bases. |
| "Zero bad debt history" | IP printed p16 | AR26 ageing p192: Rs 29.15 lakh over 3 years and Rs 190.53 lakh at 31 Mar 2025; RHP risk factor 20: 11.59% over six months (FY25), 39.74% (FY23) |
| "All revenue from government/PSU entities" | IP printed p16 | RHP PDF p37: 90.17% (FY25), 77.73% (FY24) |
| Debt-equity | AR26 p105 and IP: 0.12 / "0.2x" | AR26 uses long-term debt only; total borrowings / net worth is 0.50 (C) |
| H1 FY26 restated | 18 Oct 2025: revenue 6,154.24, PAT 677.03 | 29 May 2026 comparative column: 6,096.24, 635.92 |
| PR/IP half-year labels | PR table and IP printed p21 label Rs 60.96 Cr revenue, 12.33 EBITDA, 6.38 PAT, EPS 4.01 as **"H1 FY25"** and compare them with H2 FY26 (92.18 / 15.92 / 8.45 / 4.58) as "YoY" | FR26 p7 shows exactly those figures (6,096.24 revenue, EPS 4.01) for the half year ended **30 Sep 2025 = H1 FY26**; real H1 FY25 standalone revenue was 3,145.33 lakh (H1 results, standalone P&L, comparative column). The "50%/51% YoY" in the PR is H2 FY26 over H1 FY26 (92.18/60.96 = +51.2%, C), a sequential change. Never print it as year on year. |
| AR26 MD&A cash-flow paragraph | p103 text swaps operating and investing outflow in two sentences | audited statement p153 to p154 is the reference |
| Crisil rating | CRISIL 30 Mar 2026: B/Stable, A4, Issuer Not Cooperating | Company letter 31 Mar 2026: rating withdrawal requested since Nov 2023, no consent to publication |

## E. What was not checked
Whalesbook, Tradejini, Bajaj Finserv, Tofler, Zaubacorp pages were not opened (secondary; every dossier figure was checked against filings instead). BSE announcement timestamps (API blocked). Scanned auditor-certificate PDFs on the company's material-documents page.
