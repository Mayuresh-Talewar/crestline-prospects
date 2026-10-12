# Shubham EPC: dossier fact check (SE-1)

Dossier: src/21_Shubham_EPC_Dossier.pdf (2 pages, "prepared 2026-10-08"). Checklist only, never cited. Document IDs (D1 to D4, N1 to N6) and calc sections (C1 to C9) as in data.md.

Counts are by script: see the last line.

| # | Dossier claim | Mark | Evidence |
|---|---|---|---|
| 1 | Legal name Shubham EPC Private Limited, formerly Shubham Civil Projects Pvt Ltd | Right | D1 header and "About the Company" |
| 2 | Unlisted private limited | Right | "Private Limited" (D1); no ticker or DRHP found; NSE/BSE APIs blocked from this machine |
| 3 | CRISIL rated, reaffirmed Jul 2025 | Right | D1, 02 Jul 2025. Possibly stale: no 2026 action found |
| 4 | CIN U45209PN2010PTC135885 | Unsupported | Not in D1 to D4 or N1 to N6; MCA out of scope |
| 5 | Incorporated 2010 | Right | D1, D2 "reconstituted as a private limited company in 2010". D3 says "incorporated in 2009": CRISIL contradicts itself |
| 6 | HQ "Amit Crystal, 4th Floor, SN 106/2A, Office 401-402, Senapati Bapat Road, Pune 411016" | Unsupported | Site gives "401, Amit Crystal, Senapati Bapat Road, Pune 411016" (D4 contact). Floor, survey number and office 402 not in any primary source |
| 7 | Website shubham.biz | Right | D4 |
| 8 | Business: civil + MEP, healthcare, life sciences and lab, data centres, interior fit outs | Right | D4 overview; D1 names healthcare, data centre, MEP |
| 9 | "Confirmed pure contractor" | Unsupported | D4 has a Real Estate vertical describing "real estate developments" (residential, commercial). Whether SEPL develops on its own account is not stated |
| 10 | "NOT power/water" | Unsupported | D4 MEP page lists substations, transmission and distribution, water and sewage treatment plants as MEP scope |
| 11 | Clients: PWDs, govt/semi-govt bodies, corporates | Right | D1 strengths, verbatim |
| 12 | FY23 revenue Rs 330 Cr | Right | D2: Rs 330.20 cr operating income |
| 13 | FY25 "Rs 500-1,000 Cr band (verify)" | Stale | D1: Rs 510.05 cr exact |
| 14 | "~35% growth trajectory" | Right | D2 expected ~35% for FY24; actual 34.6% (C1) |
| 15 | FY24 "~Rs 429 Cr booked" | Stale | D2: booked "as of Feb-24"; final FY24 Rs 444.39 cr (D1), Rs 15.39 cr higher (C1) |
| 16 | Order book >Rs 1,400 Cr (Jul 2025), 24 to 30 months | Right | D1. Stale risk: no later figure published |
| 17 | Order book "~2x+ rev" | Right | 2.74x FY25 operating income (C7) |
| 18 | Paid-up capital Rs 19.76 Cr | Unsupported | Not in any primary source |
| 19 | Order book "up from >Rs 1,000 Cr in Apr-2024" | Right | D2 |
| 20 | Segments healthcare / data centre / MEP / life sciences from CRISIL | Right | D1 names healthcare, data centre, MEP; life sciences comes from D4, not CRISIL |
| 21 | "revenue ~2-3x in 2-3 yrs" | Wrong | FY22 to FY25 1.85x; FY23 to FY25 1.54x (C1) |
| 22 | Milestone/progress billing and retention for PWD/govt clients | Unsupported | No source mentions billing terms or retention |
| 23 | BG/LC for govt and corporate contracts | Right | D1: BG Rs 65 cr, LC and BG Rs 59.5 cr rated; purpose (performance/advance) not stated |
| 24 | Promoter run, Badera family; co-director a CA | Right | D1 promoters Vinay and Archana Badera; D4 "CA Mangesh Katariya, Director" |
| 25 | "lean finance vs a Rs 1,400 Cr book = visibility gap" | Unsupported | Opinion; no source |
| 26 | ERP: "No public SAP/Oracle signal ... likely mid-tier ERP / Tally ... VERIFY" | Stale | N2: ERP holds the accounting workflow, Tally phased out; N4: migration to "a unified ERP system". Product still not named |
| 27 | Vinay Badera, Founder & Managing Director | Stale | Latest title "CEO & Managing Director" (N6 p13, Oct 2026) |
| 28 | DIN 02228631 | Unsupported | Not in any primary source |
| 29 | vinay.badera@shubham.biz (inferred) | Unsupported | Pattern not shown anywhere; only info@shubham.biz is published |
| 30 | Mangesh Amritlal Katariya, Director, CA | Right | D4 (name and title). Middle name not in primary sources |
| 31 | CFO not publicly named | Right | NOT FOUND across D1 to D4, N1 to N6 |
| 32 | CFO "likely Katariya" | Unsupported | No source names a finance head |
| 33 | Registered office "confirmed in TWO sources ... CRISIL rationale / company site" | Wrong | D1 to D3 give no address, only "Headquartered in Pune" |
| 34 | Footprint across India, HQ Pune | Right | D4 key-strengths: Gujarat, Rajasthan, Karnataka; 80% of revenue from Maharashtra |
| 35 | Leadership table lists only two people | Stale | D4 lists five: Vinay Badera, Archana Badera, Mangesh Katariya, Karan Shah, Vipul Patel (joined 2026) |

Not in the dossier and now sourced: FY20 to FY22 history (D3, D2), FY26 provisional turnover Rs 680 cr and FY27 projection Rs 1,000 cr (N1), EBITDA and net worth (N1), rated limits Rs 225 cr with lenders (D1), gross current assets 155 to 200 days (D1).

Tally by script: `python -I -c "import re;t=open('fact-check.md',encoding='utf-8').read();import collections;print(collections.Counter(re.findall(r'^\| \d+ \|[^|]*\| (Right|Wrong|Stale|Unsupported) \|',t,re.M)))"`
Result: Right 18, Unsupported 10, Stale 5, Wrong 2 (35 claims).
