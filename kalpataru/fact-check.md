# KPIL fact-check: dossier and gtm file against the company's own filings, KP-1

Checked 8 Oct 2026. Inputs treated as claims, never as sources: `src/kalpataru-dossier-internal.pdf` (prepared 2026-10-08, text read in full) and `crestline-gtm/data/research/kalpataru-projects.json` (updatedAt 2026-09-28; its only confidence label is "Medium" on the ERP field; no other field carries a label, so every other gtm claim is unlabelled).
Verdicts: Verified / Wrong / Partly / NOT FOUND (searches named). Basis is stated where a number could be either standalone or consolidated. Pages are printed pages; documents are the company's own filings on NSE (dates in data.md).
Fallback rule (PLAYBOOK): a "Wrong" or contradicted claim is never used as a fallback.

## A. Dossier (kalpataru-dossier-internal.pdf)
| # | Claim | Verdict | Evidence |
|---|---|---|---|
| D1 | Legal name KPIL, formerly Kalpataru Power Transmission, merged with JMC Projects | Verified | AR FY23 p.246 header "Formerly Kalpataru Power Transmission Limited"; merger effective 4 Jan 2023, appointed date 1 Apr 2022 (CRISIL 16 Oct 2024 p.4); shares issued under the JMC amalgamation scheme (AR FY26 Note 16.3 p.305) |
| D2 | CIN L40100GJ1981PLC004281, incorporated 1981 | Verified | CIN in every NSE letter footer; "Incorporated in 1981 by Mr. Mofatraj P Munot" (CRISIL 16 Oct 2025 p.5) |
| D3 | Listed NSE: KPIL / BSE: 522287; Munot family | Verified | NSE letters; promoters Mofatraj P. Munot 9.57%, Parag M. Munot 0.37% (AR FY26 p.305). Note: other holders above 5% are K. C. Holdings 12.17% and Kalpataru Construction 8.00%, whose group status the filing does not state |
| D4 | Registered office Plot 101, Part III, GIDC Estate, Sector-28, Gandhinagar 382028; corporate office Kalpataru Synergy, 7th Floor, Opp. Grand Hyatt, Santacruz (E), Mumbai 400055 | Verified | NSE letter footer 29 Sep 2026 (printed "Plot No. 101, Part-III, G.I.D.C. Estate, Sector - 28, Gandhinagar - 382 028"; "Santacruz (E), Mumbai - 400055") |
| D5 | "70+ countries" | Wrong (stale) | Company now prints "75+ Countries" (IP 14 May 2026 p.15, image-checked); press release 24 Sep 2026 says projects across "over 30 countries" under execution. The two are different claims; "70+" matches neither |
| D6 | Diversified EPC across 9+ verticals | Wrong | Company says "Six High Growth EPC Businesses": T&D, Oil and Gas, B&F, Water, Railways, Urban Infra (IP 14 May 2026 p.15). Highways and airports are sub-lines inside Urban Infra and B&F, not extra verticals; "9+" NOT FOUND |
| D7 | T&D includes LMG, Linjemontage, Fasttel abroad | Partly | LMG (Sweden) and Linjemontage appear in AR/IP; Fasttel (Brazil) is in Judicial Reorganisation (filed 5 Mar 2026), all Brazil projects "wrapped up", investment Rs 515.04 crore fully provided (AR FY26 Note 56 p.343; Q4 FY26 call p.3 and p.14). Listing it as an operating arm is outdated |
| D8 | Marquee clients: Power Grid, state TRANSCOs, global utilities, NHAI, Indian Railways, metro corporations, oil and gas majors | Partly | CRISIL names Power Grid (16 Oct 2025 p.4). AR gives only "Public sector undertakings in India" = Rs 9,656.03 crore, 41.6% of standalone FY26 revenue (Note 55.1 p.342); no other customer above 10%. NHAI appears as counterparty in road-concession disputes, not as a named order client. Others NOT FOUND by name in AR FY26 |
| D9 | Revenue (consolidated) FY24 ~Rs 19,626 crore | Verified | IP 8 May 2024 p.7: 19,626; IP 14 May 2026 slide 20 |
| D10 | Revenue (consolidated) FY25 ">Rs 22,000 crore (+14%)" | Verified | AR FY26 p.357: 22,315.78; growth 13.7% (kp-calc-output) |
| D11 | "TTM ~Rs 27,143 crore" | Wrong label | 27,143.06 is FY26 full year (Apr 2025 to Mar 2026), consolidated, AR FY26 p.357. Not trailing twelve months |
| D12 | Revenue (standalone) FY24 ~16,700; FY25 18,888 (+13%) | Verified | AR FY25 p.235: 16,759.66; 18,887.91; growth 12.7% |
| D13 | PAT "+22% YoY" in the consolidated table | Wrong basis | +21.6% is STANDALONE (533.00 to 647.95). Consolidated PAT FY24 516 to FY25 567.27 = +9.9% (IP 8 May 2024 p.7; AR FY26 p.357) |
| D14 | Order book FY24 ~Rs 57,000 crore | Wrong | Rs 58,415 crore at 31 Mar 2024 (IP 8 May 2024 p.10) |
| D15 | Order book FY25 Rs 64,495 crore; FY25 order inflow Rs 25,475 crore | Verified | IP 16 May 2025 p.18; Q4 FY25 call p.3 |
| D16 | EBITDA margin ~8.5% FY24 (consolidated heading) | Wrong (small) | Consolidated core EBITDA margin FY24 8.3% (Rs 1,628 crore on Rs 19,626 crore), IP 8 May 2024 p.7. India Ratings' 8.5% is its own adjusted figure |
| D17 | ~8.9% EBITDA margin (Q2) | Verified | Q2 FY25 consolidated core EBITDA Rs 438 crore, 8.9% (IP 28 Oct 2024 p.4). Standalone core EBITDA margin was 8.4% in FY25 and 8.7% in FY26 (IP 14 May 2026 p.10) |
| D18 | Q1 FY25 "Revenue/Income Rs 4,609 crore, PAT Rs 84 crore, PAT -26%" | Verified | Revenue 4,587 plus other income 22 = 4,609; PAT 84, -26% (IP 29 Jul 2024 p.5, consolidated) |
| D19 | Q2 FY25 revenue 4,930, EBITDA 438 (8.9%), PAT 126, revenue +9%, PAT +40% | Verified | IP 28 Oct 2024 p.4 (image-checked), consolidated |
| D20 | "cumulative crossed Rs 7,000 Cr in T&D alone by mid-FY25" | NOT FOUND | Searched IP 28 Oct 2024, 29 Jul 2024, Q2 FY25 transcript headlines; T&D FY25 inflow was Rs 14,461 crore (IP 16 May 2025 p.18). The phrase is unclear and unsupported |
| D21 | "Post-merger (KPTL + JMC) integration, unified cross-segment reporting is an active need" | NOT FOUND | No filing says integration is incomplete; IP 14 May 2026 slide 24 (text layer, not image-checked): "Proven merger integration success with JMC". Opinion, contradicted by the company's own wording |
| D22 | ERP "very likely enterprise SAP, verify S/4HANA/ECC, treat as SAP-likely, not independently confirmed" | Verified, upgraded | AR FY26 p.131 (PDF p.68, image-checked), "ERP Controls and Automations": "The Company continues to strengthen its digital and operational capabilities through the extensive deployment of SAP S/4 HANA across its business operations and is progressively transitioning towards SAP RISE to further enhance scalability, agility, standardisation, and cloud enabled enterprise management." Also: "developed and implemented various customised management reports, dashboards, and automated control mechanisms within SAP". Filed 22 Jun 2026. International rollouts: only LMG "adopting SAP" (AR FY26 PDF p.82, text layer). Multi-entity landscape "rich-but-siloed": NOT FOUND |
| D23 | Manish Mohnot, MD and CEO | Verified | AR FY26 p.174, p.280 |
| D24 | Ram Patodia "President and Group CFO" | Partly | AR FY26 p.174 and p.280 print "Chief Financial Officer"; calls introduce "President, Finance and the CFO" (Q4 FY26 p.2). "Group CFO" has 0 hits in AR FY26 and AR FY25 text and in the Q4 FY26, Q3 FY26, Q2 FY26 and Q4 FY25 transcripts |
| D25 | Mofatraj P. Munot, Chairman | Verified | "Non-Executive Chairman" AR FY26 p.174 |
| D26 | Parag Munot, "Vice-Chairman" | Wrong | "Promoter Director" (AR FY26 p.174); "Vice Chairman" NOT FOUND in AR FY26 text |
| D27 | Company Secretary Rahul Shah | Wrong | Ms. Shweta Girotra, Company Secretary (AR FY26 p.174 and p.280; signs NSE letters 25 Sep 2025 to 29 Sep 2026). "Rahul Shah" has 0 hits in AR FY25 and AR FY26 text |
| D28 | E-mails manish.mohnot@ / ram.patodia@kalpataruprojects.com (inferred) | NOT FOUND | Only generic addresses are printed: info@kalpataruprojects.com (letter footers), investorrelations@kalpataruprojects.com (IP Q1 FY27 last slide). Searched AR FY26 and AR FY25 text, NSE letters, rating letters. Not used |
| D29 | "Order wins ... diversification across water/railways/urban" and "domestic grid capex plus international T&D inflows" | Verified (qualitative) | T&D inflow Rs 12,931 crore FY26, 65% abroad (Q4 FY26 p.3); water order book fell from Rs 10,667 crore (FY24) to Rs 7,486 crore (FY26), -29.8% (data.md section 7) |
| D30 | Thin margins make every WC day matter; "every WC day = PAT at ~9% margin" | Opinion | Standalone core EBITDA margin 8.7%, PBT margin before exceptionals 6.5% FY26 (company 5.9% excluding one-offs). Not a factual claim to verify; the arithmetic of a day is the calculator's job |
| D31 | Sources 1 to 5 (Constrofacilitator, Business Standard, Equitymaster, Yahoo/GuruFocus, Zaubacorp) | Not used | Secondary. The company's own documents were used for every checked figure |

## B. gtm file (kalpataru-projects.json); confidence labels: only erp.confidence "Medium"
| # | Claim | gtm label | Verdict | Evidence |
|---|---|---|---|---|
| G1 | revenue 27143 (period FY26, no basis stated) | none | Verified, consolidated | AR FY26 p.357 Rs 27,143.06 crore consolidated. Standalone is Rs 23,210.06 crore (p.281). The file does not say which |
| G2 | orderBook 65457 | none | Verified, consolidated | IP 14 May 2026 p.13 |
| G3 | receivables, unbilled, retention, inventory, payables, costBase, paymentTermDays, borrowings, interestCost all null | none | Incomplete | All now in the filings except retention (not separate) and paymentTermDays (NOT FOUND: AR FY26 policy text says only "within the agreed credit period normally applicable to the respective project", pp.288 to 289, PDF p.147; Note 11.4 gives up to 20% advance and up to 20% retention; no credit period in days). Standalone values in data.md |
| G4 | "Thin PBT margin 4.9%" | none | Verified, consolidated | PBT before exceptional 4.9% (IP slide 4); standalone 6.5% (5.9% excluding one-offs) |
| G5 | "Net working-capital ~75 days: reasonable for a global EPC, not acute" | none | Number Verified, framing basis-mixed | 75 is CONSOLIDATED (IP slide 12). Standalone is 90 (94 at 30 Jun 2026). CRISIL: receivables incl. net unbilled about 264 days (16 Oct 2025 p.4). Calling it "not acute" rests on the consolidated figure only |
| G6 | "Large multi-country receivables and FX complexity across 70+ countries" | none | Partly | 75+ countries (IP). International receivable amounts NOT FOUND (searched 5 transcripts and AR FY26); the only stated figure is international project working capital 50 to 60 days (Q4 FY25 call p.19). Foreign-subsidiary receivable at Fasttel provided in full |
| G7 | "net debt cut 53% to ~915 Cr" | none | Verified, consolidated | IP slide 4: "Decline of 53% YoY", Rs 915 crore |
| G8 | "record cash flows in FY26" | none | Partly | Consolidated net operating cash flow Rs 1,534.38 crore vs 913.95 (AR FY26 p.360). STANDALONE operating cash flow fell to Rs 764.46 crore from Rs 837.07 crore (p.284) |
| G9 | ERP "SAP (best-guess, likely, not publicly confirmed)" | Medium | Verified by the company (see D22) | Confidence label "Medium" should read "confirmed in the company's own annual report, S/4 HANA" |
| G10 | Listed NSE: KPIL / BSE: 522287 | none | Verified | NSE letters |
| G11 | emailPattern firstname.lastname@kalpataruprojects.com (inferred) | none | NOT FOUND | See D28 |
| G12 | CFO "Avinash Jain" | none | Wrong | CFO is Ram Patodia; "Avinash Jain" 0 hits in AR FY26 and AR FY25 text |
| G13 | Manish Mohnot, MD and CEO "the sponsor" | none | Verified (title) | AR FY26 p.174 |
| G14 | Mofatraj P. Munot, Non-Executive Chairman, promoter | none | Verified | AR FY26 p.174, p.305 |
| G15 | sourceUrl construction news site; "complete": false | none | Secondary | Never used as source; the revenue it quotes agrees with the filing |
| G16 | "Likely SAP (unconfirmed). The hook is scale and thin-margin WC discipline, not trapped cash" | none | Opinion, contradicted in part | Standalone receivables plus contract assets Rs 14,989 crore, 235.7 days of revenue (data.md); that is trapped cash on the Indian entity's own balance sheet, and it is the standalone figure that matters under the basis ruling |

## C. Conflicts inside the company's own documents (reported, no side chosen)
1. Public-sector-undertaking revenue: standalone Note 55.1 (AR FY26 p.342) prints Rs 9,656.03 crore; consolidated Note 48 (p.417) prints Rs 9,565.03 crore for the same sentence, "previous year Rs 7,867.70 Crores" in both. One has transposed digits; nothing in the AR says which.
2. Operating cash flow FY26 consolidated: IP slide 4 shows Rs 1,534 crore; Q4 FY26 call p.3 says "INR 1,535 crores"; AR cash-flow statement p.360 prints 1,534.38. Rounding only.
3. NWC days: consolidated 75 vs standalone 90 at the same date (IP slide 12). Not a conflict, a basis difference; both printed by the company.
4. India Ratings (3 Jul 2026) now IND AA+/Stable while CRISIL (16 Oct 2025) stays CRISIL AA/Stable. Different agencies, different dates.

## D. ERP evidence, exact wording
AR FY26, filed 22 Jun 2026, printed p.131 (PDF p.68), image-checked: "The Company continues to strengthen its digital and operational capabilities through the extensive deployment of SAP S/4 HANA across its business operations and is progressively transitioning towards SAP RISE ... the Company has leveraged its ERP ecosystem to improve process integration, operational visibility, project monitoring, financial discipline, and decision-making capabilities." and (printed p.130) internal-audit training programme "Auditing in SAP Environment", "Adv. Analytics - Power BI/Fabric". Earlier: AR FY24 (filed 19 Jun 2024) refers to a safe-stock-level review "integrated into our SAP system" and "company's ERP" feeding a project-review video wall (text layer, not image-checked). Not found anywhere: S/4HANA release, which modules hold contract-asset or retention data, whether LMG or Fasttel run the same SAP, and any link between the SAP RISE move and the date of cutover.
