# CAP-GTM: capacite-infraprojects.json vs our verified Capacite data (2026-10-07)
Checked file: crestline-gtm/data/research/capacite-infraprojects.json. Ours: storyline (SALES-8/10/13), pack-data (pack), booklet-fact-check (BFC), crestline-solutions (CS). PDF page numbers. Consolidated, INR Cr.

| # | gtm claim | verdict | evidence |
|---|---|---|---|
| 1 | revenue 2623 (FY26) | Verified | R p.9 2,622.72; AR26 p.95 "2,623". The gtm sourceUrl headline says 2644 = total income (storyline SALES-10 s.2) |
| 2 | PAT dipped 5% | Verified | 193.09 vs 203.77 = -5.2% (pack contradictions #4; R p.9) |
| 3 | 12% revenue growth | Verified | AR26 p.95 "12% growth"; 2,622.72/2,349.51 = +11.6% (pack s.1) |
| 4 | PAT dip = "margin/cost plus collection drag" | Partial | Company attributes it to other income falling 58 to 21 Cr (T p.3, pack contradictions #4); collection drag is not company-stated |
| 5 | Qualified opinion on Rs 11.56 Cr receivable | Verified | AR26 standalone p.97, consolidated p.140: INR 1,155.93 lakhs, one party (storyline SALES-10 s.1) |
| 6 | that client is under insolvency | Verified | Note 53 (AR26 p.137): readmitted into CIRP, NCLT Amaravati |
| 7 | (omitted) Emphasis of Matter Rs 54.93 Cr, same report | Missing-but-available (54.93 Cr; FY25 63.62) | AR26 p.97, p.140; pack s.4 "larger news than the qualification" |
| 8 | working-capital days 152 | Verified | AR26 p.94 risk table (storyline cites p.96, BFC corrects to p.94). Definition not given |
| 9 | "improved from 195" | NOT FOUND in our files | 195 is in no AR, IP or transcript (storyline SALES-10 s.3); only the 43-day cut is company-stated (T p.3, AR p.12) |
| 10 | public-sector orders carry 100+ day receivable cycles | NOT FOUND in our files | pack s.3; AR26 p.158 says terms "generally 45 to 90 days"; no segment split published |
| 11 | receivables = null | Missing-but-available (1,176.8 = 1,085.00 + 91.81) | R p.10 |
| 12 | unbilled = null | Missing-but-available (contract assets 1,313.5 = 1,068.34 + 245.15) | R p.10 |
| 13 | retention = null | NOT FOUND in our files (null is correct) | AR26 p.148: retention sits inside trade receivables, cannot be split |
| 14 | inventory = null | Missing-but-available (128.89) | R p.10 |
| 15 | payables = null | Missing-but-available (909.92 = MSME 45.66 + other 864.26) | R p.11 |
| 16 | costBase = null | Missing-but-available (material 824.27; vendor cost base 1,853.5, computed) | pack s.2 |
| 17 | orderBook = null | Missing-but-available (13,498; 5.1x sales; public 57 / private 43) | IP slides 14-15, AR26 p.12 |
| 18 | paymentTermDays = null | Missing-but-available (45 to 90 days) | AR26 p.158 |
| 19 | borrowings = null | Missing-but-available (471.77 Mar 26; 522 Jun 26) | R p.11; BFC row 1 (S2 p.8) |
| 20 | interestCost = null | Missing-but-available (96.41; 3.68% of revenue) | R p.9 |
| 21 | ERP = SAP (best guess) | Wrong (RIB BuildSmart per vendor case study; AR names "Strategic ERP" for books) | RIB case study 20 Oct 2022 (BuildSmart, FY2014-15, 25 sites); AR26 p.137 auditor report. No SAP anywhere (storyline SALES-10 s.5). Current system unverified |
| 22 | listed on NSE and BSE | Verified | AR26 p.106 Note 1 |
| 23 | codes NSE: CAPACITE / BSE: 540710 | NOT FOUND in our files | not in any of the four files; check an exchange page |
| 24 | email pattern first.last@capacite.in (~97.8%) | NOT FOUND in our files | only cs@capacite.in is primary (AR26 p.32) |
| 25 | Rajesh Das, CFO | Verified | AR26 p.30, 32, 46 (KMP) |
| 26 | Rajesh Das "22+ yrs" | Wrong (26+ years per company site) | pack s.7 (capacite.in/our-team) |
| 27 | Rajesh Das CFO "from Aug 2023" | NOT FOUND in our files | not in pack s.7 or AR extracts |
| 28 | Rohit Katyal "Founder & Executive Chairman" | Wrong ("Executive Chairman" in AR; site: "Co-founder and Promoter") | pack s.7; contradictions #3 |
| 29 | Rahul Kapur, Company Secretary & Compliance Officer | Verified | AR26 p.30, 32 |
| 30 | Rahul Kapur reachable at cs@capacite.in | Verified | AR26 p.32 |

Counts (script output: 10 Verified, 1 Partial, 3 Wrong, 10 Missing-but-available, 6 NOT FOUND; total 30). Command: `awk -F'|' '/^\| [0-9]+ \|/{split($4,a," ");print a[1]}' gtm-check.md | sort | uniq -c`

**Gets right:** revenue, PAT/growth, the qualified Rs 11.56 Cr (insolvent counterparty), 152 WC days, CFO/CS names and cs@ address, and it flags itself secondary and incomplete.
**Misses:** every balance-sheet field it left null is public (receivables, unbilled, payables, borrowings, order book, terms), plus the bigger Rs 54.93 Cr Emphasis of Matter, 43-day cut and the CEO/Q1 FY27 material.
**Wrong in print:** yes: "195 to 152" (195 unsourced), "100+ day" public cycles, "SAP", "Founder & Executive Chairman", CFO "22+ yrs", and 2644 if the sourceUrl headline were used as revenue.
