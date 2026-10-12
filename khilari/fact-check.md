# Khilari Infrastructure: fact check of the dossier (KH-1)

The dossier (src/15_Khilari_Infrastructure_Dossier.pdf, prepared 08 Oct 2026) is a checklist, never a source. Each claim tested against the rating documents listed in data.md (tags C25, C24, B20, CR17, LEI). Numbers by `python -I src/kh-calc.py`, output in calc/kh-calc-output.txt.

Verdicts: Right / Wrong / Stale / Unsupported.

## Headline claims (the five the ticket named)

| # | Dossier claim | Verdict | What the source says |
|---|---|---|---|
| 1 | Revenue about Rs 640 Cr in FY24 | Wrong | FY24 TOI Rs 610.85 crore (C25 p3, audited; C24 p3, unaudited). Rs 638.08 crore is FY23 (C24 p3). The dossier appears to have shifted FY23 into FY24. |
| 2 | Revenue Rs 795 Cr in FY25 | Wrong | FY25 TOI Rs 639.86 crore, unaudited (C25 p3, 06 Oct 2025). Rs 795 crore appears in no rating document. The dossier's own 2.93x multiple on Rs 1,878.72 crore implies Rs 641.2 crore (Computed), so the dossier contradicts itself. Gap Rs 155.14 crore, 1.242x (Computed). The dossier's "strong growth" read is also wrong: growth was 4.75% (Computed; CARE says "5%"). |
| 3 | PBILDT margin 21.52% (FY24) to 15.43% (FY25) | Right | C25 p2 and p3; recomputed 21.52% and 15.43% (Computed). Caveat: the earlier C24 vintage printed FY24 at 22.15% (unaudited); the 21.52% is the audited FY24 figure. |
| 4 | Order book Rs 1,878.72 Cr (30 Jun 2025), 2.93x FY25 net sales, 2 to 3 years | Right | C25 p2. Recomputed 2.936x (Computed). Missing context: it FELL from Rs 2,681 crore a year earlier (C24 p2), and Rs 196.37 crore of it is slow moving (C25 p2). |
| 5 | 14+ states | Right, with a caveat | C25 p3 and C24 p3: "across over 14 states". The ORDER BOOK is in nine states (C25 p1, p2; C24 p1, p2). Say "operates across over 14 states; current orders in nine". |
| 6 | Leaders named | Partly right | See rows 14 to 17. |

## Every other claim

| # | Dossier claim | Verdict | Source and note |
|---|---|---|---|
| 7 | Legal name Khilari Infrastructure Private Limited | Right | C25 p1; LEI |
| 8 | Unlisted private limited, CARE rated, reaffirmed Oct 2024 / Oct 2025 | Wrong in part | Oct 2024 was an ASSIGNMENT, not a reaffirmation (C24 p1: "Assigned"; C25 p4 rating history shows no CARE rating before 04 Oct 2024). Oct 2025 is a reaffirmation (C25 p1). Rating CARE BBB+; Stable / CARE A2 on Rs 100 crore. |
| 9 | CIN U45200MH2005PTC152495 | Right | LEI record (registeredAs) |
| 10 | Incorporated 07 Apr 2005 | Unsupported for the day | Year 2005 is right (C25 p3; C24 p3; B20 p3). The day is not in any document read. CR17 p4 says "incorporated in 2007" (S5). |
| 11 | Address 101, Prabhat Centre, Sector 1A, CBD Belapur, Navi Mumbai 400614 | Right | LEI legal address (same street, PIN 400614; city recorded as Mumbai). Rationales confirm only Navi Mumbai (C25 p3) and CBD Belapur (B20 p3). The dossier's "confirmed in TWO sources: Zaubacorp + CARE PR / company site" overstates it: CARE does not print the street, and the site is down. |
| 12 | Website khilariinfra.com, email info@khilariinfra.com | Stale or Unsupported | Domain does not resolve (08 Oct 2026). The email is on no primary document read. |
| 13 | Business: wastewater (STP, sewerage), solid waste, water supply; pure contractor | Right in substance | C25 p1, p3: "EPC contracts of wastewater treatment and solid waste management". "Water supply" is not named by CARE; B20 p3 adds landfills, sewer lines, hazardous waste, STP O and M. "Pure contractor" is Wrong as a description of the balance sheet: the company has a pharmaceutical subsidiary (S4). |
| 14 | Sahebrao Sukhdeo Khilari, Chairman and CEO, B.E. Civil, 30+ years, promoter | Right | C25 p1 ("Chairman and Chief Executive Officer", B.E. Civil, over three decades); full name from B20 p3 and CR17 p4 |
| 15 | Anjali Sahebrao Khilari, Director | Right, middle name Unsupported | Printed as "Anjali Khilari, Director" (C25 p1; C24 p1) |
| 16 | Aayush Sahebrao Khilari, Director | Spelling Wrong | Rationales print "Ayush Khilari", Director, M.E. Civil (C25 p1; C24 p1). Middle name Unsupported. |
| 17 | CFO not publicly named | Right | No finance head in any rationale; data.md section 7 |
| 18 | Marquee clients: state water and sanitation departments, municipal corporations, ULBs | Right | C25 p2 (entire order book from government entities incl. ULBs); no names anywhere |
| 19 | "100% government/municipal" | Right | C25 p2, as above |
| 20 | Execution horizon 2 to 3 years | Right | C25 p2 |
| 21 | Margin compression "cost-to-complete" cause | Unsupported as framed | CARE's stated causes: projects in initial stage, higher early-phase costs, material cost 31% to 36%, labour and employee cost up (C25 p2). It says nothing about cost to complete. |
| 22 | Milestone billing, retention, certification lag => stretched receivables | Unsupported in those words | CARE gives collection period 33 to 51 days FY24 to FY25 "due to increase in security deposit kept by customers" (C25 p3). Retention and certification are not named. CR17 p3 (FY16) did name "security deposits and retention money". |
| 23 | Mobilisation / WIP loads WC | Right in direction | C25 p2 (mobilisation advances up; WC utilisation up in initial phases) and p3 (inventory days 17 to 32 on unbilled revenue) |
| 24 | BG/LC heavy | Right | BG limit Rs 300 crore, 84.69% max average use (C25 p3); Rs 220 crore fully used (C24 p3). LC: Unsupported, no LC in any document. |
| 25 | Multi-state dispersion + promoter run | Right | C25 p1, p2 |
| 26 | ERP unknown, probably mid tier or Tally | Unsupported | No document mentions any system. Do not print. |
| 27 | "Scales past Rs 800 Cr" | Misread | Rs 800 crore is CARE's upgrade TRIGGER (TOI above Rs 800 crore sustained, C25 p1), not a revenue level reached. |
| 28 | Sources: Zaubacorp, Tofler | Not used | Aggregators; never cited. |

## Settled conflicts inside the primary documents (no side picked silently)

| Item | Version A | Version B | Ruling for the booklet |
|---|---|---|---|
| FY24 PBILDT / PAT | Rs 135.28 / 111.22 crore, unaudited (C24 p3) | Rs 131.48 / 109.54 crore, audited (C25 p3) | Use C25 audited; state "audited FY24, CARE Oct 2025" |
| FY24 working-capital days | 39 / 18 / 45 / 12 / 236 (C24 p3) | 33 / 17 / 42 / 8 / 220 (C25 p3) | Use C25 for FY24 beside FY25; use C24 only for FY23 beside its own FY24 |
| Date of Rs 2,681 crore order book | 30 Jun 2024 (C24 p2) | "June 30, 2023" (C25 p2) | 30 Jun 2024, the earlier document's own date |
| Total fund diversion FY25 | Rs 322.04 crore (C25 p2 para 3) | Rs 322.02 crore (C25 p2 para 4; sum recomputes to 322.02) | Garvis only (S4) |
| Year incorporated | 2005 (C25, C24, B20) | 2007 (CR17) | 2005 |
| Q1FY25 PAT | Rs 126.38 crore (C24 p3 table) | 16.57% margin, about Rs 16.08 crore (C24 p2; Computed) | The table cell is an error; do not print Q1FY25 PAT |
| C24 FY24 overall gearing comparator | "compared to 0.08x as on March 31, 2024" (C24 p2, a typo for 2023) | 0.08x at 31 Mar 2023 (C24 p3 table) | 31 Mar 2023 |

Further conflicts between agencies: S5 (Garvis only).
