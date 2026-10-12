# LCC Projects

ONE booklet; readers from primary sources only. Rules: ../PLAYBOOK.md in full, incl. "3-STEP PIPELINE", "ACCURACY GATE", "GTM CHECK" and the content-only prompt rule. Never open other company folders.
Order (3-step): X-1 research+verdict -> X-2+3 build, self-QA, pack, prompt (+ Garvis accuracy gate).
Dossier: src/67_LCC_Projects_Ltd_Dossier.pdf (checklist only, never cited). No crestline-gtm research file exists for this company (checked 2026-10-12).

## Garvis rulings
- Listed or unlisted: X-1 confirms. Unlisted = rating rationales, company site, official notices; no MCA, no login, no payment. Verdict from X-1.
- SENSITIVE BY DEFAULT: low or non-cooperating ratings, promoter, legal or tax, disputes, guarantees, related parties, auditor matters: Garvis only. News never a figure source.
- Interest only at a disclosed rate, capped. INR only.


## Garvis rulings LC-2 (2026-10-12, verdict FULL; listed; Prospectus 11 Sep 2026, restated CONSOLIDATED, audited, 365-day, closing balances)
- STORY: respect first and strong: revenue 2,438.91 (FY24) to 2,918.29 to 3,600.25 Cr (FY26); PAT 122.0 to 223.6 to 286.4; order book 7,953.18 Cr across 103 projects in 12 states; cash from operations before tax 77.1 to 105.0 to 244.7 Cr; SAP being implemented. Then the turn, in the company's OWN working-capital days: 31 (FY24) to 52 to 67 (FY26); receivable days 23.4 to 46.2 (Crestline arithmetic). Question: as the book doubles, which bills carry the next days.
- CALC (cover everything; app simulator): revenue per day 3,600.25/365; materials per day as in data.md (verify). Levers: collection 46.2 (10, 30 days), certification 54.2 (10, 30 days), materials 65.3 at materials per day (10, 30). ONE combined run if simulate computes it. Clients' stated credit period is 45 to 90 days and receivables already sit inside it, so NO "to term" move. NOT priced: vendor credit (shown only at 32.3 days on construction expenses; never raised), retention (mixed with deposits), interest (rate range, no single rate). Lever table; priceLevers only where it prices each leg on its correct base.
- CHARTS: (1) The cash cycle: materials 65.3, unbilled 54.2, receivables 46.2, vendor credit 32.3 (on construction expenses, "never counted as better when higher"), cycle 133.4; Position + Simulate. (2) "No clock on these · ranked by size instead". (3) Cash movement, ANNUAL: cash from operations before tax FY24-FY26. (4) How these four move together: company-stated working-capital days 31/52/67, receivable days, cash and bank, three year-ends. (5) Process map: stage_estimate.py --dso 46.2 --cad 54.2, measured stages tagged "From the audited accounts (Crestline's arithmetic)", never "Published"; WHOLE RA BILL line likewise.
- HOW lines: Receivables, Unbilled work, Site stock ("project materials"), Vendor credit, Process map, Ranking. ERP: "SAP, being implemented: Crestline reads it, read-only, alongside it" (never S/4HANA RISE or a partner name).
- KEPT OUT: sensitive-garvis.md (arbitration, leverage, tax matters), government share (two conflicting figures), top-three client share, CARE standalone figures (3,469, 215 days, rating, limits), the 66.4-day DPO on purchases, rate range, aggregator figures, "11 states", Highbar.
- READERS (two editions): A Mr. Arjan Suja Rabari, Chairman and Managing Director; B Ms. Artiba Narpatsinh Jadeja, Chief Financial Officer (exact Prospectus titles; verify the honorific). Address: registered office from the Prospectus. Logo: src/lcc-logo-official.png. Letter dated 12 Oct 2026.
