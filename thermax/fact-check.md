# Thermax Limited: dossier fact check (TH-1)

Dossier src/12_Thermax_Dossier.pdf is a checklist only and is never cited. Verdicts: Right / Wrong / Stale / Unsupported. Source codes are listed in data.md.

Tally: produced by the script line at the bottom, not by hand.

| # | Dossier claim | Verdict | Evidence |
|---|---|---|---|
| 1 | Legal name Thermax Limited | Right | AR26 p356 balance sheet header |
| 2 | Listed NSE: THERMAX, BSE: 500411 | Right | Every NSE cover letter (e.g. Q4FY26_transcript.pdf, 12-May-2026) |
| 3 | CIN L29299PN1980PLC022787, incorporated 1980 | Right | AR26 BRSR p160 (CIN; year of incorporation 1980) |
| 4 | Regd office D-13, MIDC Industrial Area, R.D. Aga Road, Chinchwad, Pune 411019 | Right | AR26 p66; Q1R header 30-Jul-2026 |
| 5 | Corporate office Thermax House, 14 Mumbai-Pune Road, Wakdewadi, Pune | Right | AR26 notice p1 (pin 411 003) |
| 6 | Website thermaxglobal.com; email "via company" | Right, incomplete | AR26 prints cservice@thermaxglobal.com |
| 7 | Four segments: Industrial Products, Industrial Infra, Green Solutions, Chemical | Right, now changed | AR26 p310. From Q1 FY27 Bioenergy moved from Industrial Infra to Green Solutions and all periods were recast (Q1R p9, 30-Jul-2026) |
| 8 | Manufacturer plus process/energy EPC, not a civil contractor | Right | AR26 p408 judgements: "A significant portion of the Company's business relates to EPC contracts"; group has 16 manufacturing plants (AR26 p28) |
| 9 | Revenue FY24 Rs 9,323 Cr (consolidated) | Right | AR24 p207: 9,323.46 |
| 10 | Revenue FY25 Rs 10,389 Cr | Stale | AR25 p209: 10,388.69 as reported; AR26 p227 restates FY25 to 10,369.26 |
| 11 | PAT FY24 "~Rs 580 Cr" | Wrong | AR24 p207: consolidated PAT 643.19 (owners 645.28); standalone 437.44. No FY24 PAT near 580 |
| 12 | PAT FY25 Rs 627 Cr | Right | AR25 p209 and AR26 p227: 626.70 (owners 634.47) |
| 13 | Order booking FY24 Rs 9,355 Cr | Right | AR26 p20 |
| 14 | Order booking FY25 Rs 10,337 Cr (+10.5%) | Right | AR26 p20 (Q4P slide 12 prints 10,336) |
| 15 | Order book FY24 "~Rs 10,090 Cr" | Wrong | AR26 p20: order balance FY24 10,111 |
| 16 | Order book FY25 Rs 10,693 Cr | Right | AR26 p20; Q4PR p1 |
| 17 | FY26 Q4 order book Rs 13,604 Cr | Right | Q4PR p1; AR26 p20 |
| 18 | Dividend Rs 20/share for FY26 | Right | Rs 14 final + Rs 6 special, recommended 07-May-2026 (Q4PR p2; AR26 p394) |
| 19 | FY26 Q4 PAT +18% | Right | Q4PR p1: Rs 244 cr vs Rs 206 cr, consolidated |
| 20 | Q3 FY25 group revenue +8% YoY | Unsupported | Not tested: Q3 FY25 results not in scope of the downloaded set; dossier source is an aggregator |
| 21 | Order inflows weighted to Industrial Infra and Green Solutions | Unsupported as worded | FY26 booking: Industrial Infra Rs 6,217 cr, Industrial Products Rs 5,984 cr (AR26 p90, p82). Green Solutions is small (Q4 booking Rs 317 cr, partly a method change, Q4P slide 13) |
| 22 | Data-centre and green-solutions push | Right | Q1PR: Rs 400 cr+ boiler pressure parts order for a US data centre project; Q1T p15 to p16 |
| 23 | "Mature listed-MNC-grade systems" | Right, with a caveat | SAP named for Thermax Limited (AR24 p292); but AR26 note 42B (p332) records audit-trail gaps in some accounting software |
| 24 | Industrial Infra has milestone billing, retention, advances, large contingent BG | Partly right | Retention sits in TR and contract assets (AR26 p256, p289); customer advances Rs 1,899.53 cr (p289). BG amount is NOT disclosed at group level (AR26 p297): "large contingent BG" is Unsupported |
| 25 | P2P long-lead equipment "already SAP-managed" | Unsupported | No filing describes SAP procurement modules |
| 26 | "SAP SuccessFactors CONFIRMED", Azure, M365 | Unsupported | Not in AR24, AR25, AR26, BRSR or transcripts; source is a vendor-database site |
| 27 | Core ERP "very likely SAP" | Right for FY24 | AR24 note 44A p292: Thermax Limited, IT application SAP. Version: NOT FOUND |
| 28 | Ashish Bhandari, Managing Director and CEO | Right | AR26 p357 |
| 29 | Rajendran Arunachalam, EVP and Group CFO | Right | AR26 p357: "Executive Vice President and Group Chief Financial Officer" |
| 30 | Meher Pudumjee, Chairperson | Right | AR26 p357 |
| 31 | Emails firstname.lastname@thermaxglobal.com (inferred) | Unsupported | Company prints only cservice@thermaxglobal.com. Do not use inferred addresses |
| 32 | Plants: Pune, Savli (Gujarat), Sri City, Indonesia | Unsupported in part | Sri City cooling site named by the CFO (Q4T p10); Indonesia subsidiary (AR26 p78). Savli not checked in filings |
| 33 | Registered office "confirmed in two sources: Zaubacorp + BSE letterhead" | Right on the address, wrong on method | Zaubacorp is an aggregator; the address is confirmed by AR26 and the Q1 results header |
| 34 | Low priority, enterprise buyer | Right on the facts | Operating NWC is negative (data.md verdict); CRISIL: NWC cycle "around 40 days", "net nil debt" (19-Jan-2026) |

Tally command: `python -I -c "import re;t=open('thermax/fact-check.md',encoding='utf-8').read();print({k:len(re.findall(r'\| '+k,t)) for k in ['Right','Wrong','Stale','Unsupported','Partly right']})"` (output pasted below by the run).

Tally output (run 08-Oct-2026): Right 24 (includes qualified Rights), Wrong 2, Stale 1, Unsupported 6, Partly right 1; 34 rows.
