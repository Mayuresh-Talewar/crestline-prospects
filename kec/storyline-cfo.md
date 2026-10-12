# KEC booklet 1: for Rajeev Aggarwal, CFO (KEC-3, 2026-10-07)

Master: 16 pages, slots per `_shared/master-design/TEMPLATE-SLOTS.md`. Figures only from `kec/data.md` (source keys as there; KEC consolidated INR Cr; V verified, C computed). `{calc:X}` = KEC-4's calculator fills it, not typed here. No peer figure appears. Arithmetic here was run: `python -I -c "print(137-110,134-110,round(6722-5500),round(18633.22/23505.54*100,1))"` gives 27, 24, 1222, 79.3.
**Voice:** one finance person to another. His words in his order: 110 days, 5,500 Cr, by March. Name the line items (contract assets, retention, acceptances), use "ours to move" and "needs the client". Surname spelling "Aggarwal" (statements); transcripts print "Agarwal".
**Spine (6 beats):** his promises (p3) > where the 137 days sit (p4-5) > the quarter (p6) > how Crestline reads the dates (p7-11) > his target priced (p12) > proof, controls, pilot (p13-16).

## Page by page
| Pg | Chapter | Headline (12 words max) | Figures (data.md) | Chart | Savings slot |
|---|---|---|---|---|---|
| 1 | Cover | Rs {calc:STUCK_TOTAL} Cr earned, still waiting to be cash | receivables 6,505.66 (current + non-current net) + contract assets 12,127.56 at 31 Mar 26, AR26 PDF p.117. Crestline sum, labelled so | none | STUCK_TOTAL (data.md s.13 shows 18,633.22; calculator confirms) |
| 2 | Letter | This booklet is about 27 days, and the 110 you promised | NWC 137 (31 Mar 26, IP-Q4 slide 30), 134 (30 Jun 26, IP-Q1 slide 32), target 110 (T-Q1 p.17, 11 Aug 26) | none | GAP_DAYS 27 (137-110); {calc:TARGET_CASH}, {calc:TARGET_INTEREST} at {calc:RATE_STATED}; {calc:TEN_PLUS_TEN} |
| 3 | Ch1 Their own promises | Your own promises: 110 days, 5,500 Cr of debt, by March | see table A below | six ruled rows, no chart | none |
| 4 | Ch2 Where it sits | Rs 18,633 Cr of finished work is still outside the bank | contract assets 12,127.56, receivables 6,505.66; over six months 463.47 to 1,227.26 (AR26 Note 16.3, PDF p.131); Crestline days {calc:CA_DAYS} + {calc:DSO_DAYS}, labelled "revenue basis, not KEC's NWC definition" | two-bar split + dot grid {calc:DOT_COUNT} | none |
| 5 | Ch3 Growing faster | Contract assets grew 62% since FY23. Revenue grew 36%. | contract assets 7,465.61 to 12,127.56 (index 162.4); receivables 4,640.97 to 6,505.66 (140.2); revenue 17,281.71 to 23,505.54 (136.0); retention 3,669.63 to 4,922.51 (+34.1% vs revenue +7.6%); debtors turnover 91 vs 81 days, KEC's own formula (AR26 PDF p.67) | indexed lines, FY23 = 100, dashed 10 and 30 days less | {calc:SIM_30} lines |
| 6 | Ch4 The quarter | Three days came out in June. Twenty-four are still to go. | NWC 137 to 134 vs the 120 once guided for H1 (T-Q4 p.13); net debt incl. acceptances 6,722 to 6,568 vs 6,000 once guided for H1 (T-Q4 p.12); Q1 EBITDA 291 vs 350, 5.8% vs 7.0% (PR-Q1, 10 Aug 26). One day of revenue 64.4 | three tiles | TEN_DAYS {calc:TEN_DAYS}, REV_PER_DAY {calc:REV_PER_DAY} |
| 7 | Ch5 Five lenses | Where does project cash get stuck? Five ways to look. | WC: 137 days, target 110. O2C: {calc:COMBINED} days. P2P: payables 8,703.25 plus acceptances 2,120.74. Client lens: debtors 91 days. Vendor lens: 48.8% of payables past due (C). Terms: not published, say so | five lenses, FIX text | none |
| 8 | Ch6 Reads dates | Your SAP already records the dates. Crestline reads them. | AR26 PDF p.68: internal controls "integrated with the SAP ERP platform". Op cash 613.74 / 311.15 / 419.07 / (414.12) vs capex 178.29 / 237.38 / 182.52 / 328.68, FY23-FY26 (AR26 p.118). EBITDA 830 / 1,215 / 1,504 / 1,659 (AR26 p.10) | cash bars (see gap 1) + one bill's life, step waits asterisked {calc:STEP_SPLIT} | none |
| 9 | Ch7 Reason, desk, date | Every rupee waiting needs a reason, a desk and a date | receivables ageing Mar 25 vs Mar 26, six bands (Note 16.3); payables ageing past due 37.5% to 48.8% (Note 32.2, PDF p.138); MSME principal unpaid 184.25 vs 130.80. Right half is payables ageing, NOT peer bars | two ageing stacks side by side | {calc:OVER6M_DELTA} (763.79 more over six months; C) |
| 10 | Ch8 Test, then own it | Test the fix before you make it. Then put a name on it. | simulator: 30 days each wait; vendor credit held at {calc:DPO_DAYS} (never raised); payables 8,703.25, MSME 218.20; client chips: Power Grid, Adani, state governments (T-Q4 p.5; T-Q1 p.21) | simulator mock | {calc:SIM_EACH}, {calc:SIM_BOTH}, {calc:SIM_INT} at {calc:RATE_STATED} |
| 11 | Ch9 Follow-up | It writes the finding, names the owner, chases until cash moves | sample finding from his data: "Receivables over six months old: 1,227 Cr, 18.2% of gross, from 9.0%". Ask example: "What if bills were paid ten days sooner?" | ticket flow, FIX | {calc:TEN_DAYS}, {calc:TEN_INT} |
| 12 | Ch10 His target | Your own target of 110 days, priced | gap 27 days (C); target debt 5,500 from 6,722 = 1,222 down (CFO says "roughly about INR1,200 crores", T-Q1 p.17); levers he names: Afghanistan ~300, Saudi retention, railway claims 150-200, water arrears, inventory unwind | five-row table + bar of cash released against the 1,222 | {calc:TARGET_CASH}, {calc:TARGET_INTEREST}, {calc:PCT_OF_DEBT_GAP}; rows: unbilled 10 days, unpaid 10 days, over-six-month back to FY25 level, target, vendors "None claimed" |
| 13 | Ch11 Done before | It has been done before. Including by you. | own proof only: net debt cut "over Rs. 500 crore" in FY25 (PR-FY25, 26 May 25); NWC 137 to 134 in Q1 (IP-Q1 slide 32). Public peer proofs: not collected (gap 2) | two before/after strips | none |
| 14 | Ch12 Controls | It reads your books. It never writes to them. | AR26: "SAP ERP-integrated internal control framework" (PDF p.33). Safe line: "reads SAP through one adapter we build for your instance". No present-tense integration, no version, no modules | FIX | none |
| 15 | Invitation | Give us one entity and fourteen days | pilot: one INR entity or segment, 5 to 15 projects, read-only (webapp-fit s.3). Sources paragraph lists every filing with its date | FIX strip + QR | none |
| 16 | Back cover | (FIX) | | | |

### Table A: Chapter 1, the promises, his words (Rajeev Aggarwal and management; page refs as data.md s.11-12)
| # | Promise (exact words) | Source, date |
|---|---|---|
| 1 | "I think we are talking about 110 days for working capital at the end of the year." | T-Q1 p.17, 11 Aug 2026 |
| 2 | "by March, we should reach to about INR5,500 crores" ("roughly about INR1,200 crores debt reduction") | T-Q1 p.17, 11 Aug 2026 |
| 3 | "by end of H1 should be around INR6,000 crores" (H1 outcome so far: 6,568 at 30 Jun 26) | T-Q4 p.12, 18 May 2026 |
| 4 | Afghanistan: "roughly INR300 crores ... supposed to come in Q1. Now, they have told us Q2." | T-Q1 p.7, 11 Aug 2026 |
| 5 | "in the next two quarters, we will receive a lot of release of retentions also" (Saudi, 20% retention) | T-Q4 p.9, 18 May 2026 |
| 6 | Railway claims: "between INR150 crores to INR200 crores" | T-Q1 p.19, 11 Aug 2026 |
Closer: "Five of the six come with a date." Count by reading: rows 1 (year end), 2 (March), 3 (H1), 4 (Q2), 5 (two quarters) carry a date; row 6 (claims) carries none.

## What differs from the CEO book
Mechanics and his own targets lead; pages 5, 8, 9, 12 are line-item pages (contract assets, retention, acceptances, ageing bands, payables ageing). The CEO book never shows an ageing table.

## Not in data.md, wanted (flag to Garvis)
1. Operating profit before working-capital changes FY23-FY26 (template OPPROFIT_SERIES): not in data.md. Fallback used on p8: EBITDA vs operating cash vs capex bars, not the master's profit-to-cash waterfall.
2. Peer set and PROOF_A/B (p9, p13): none collected; p9 uses payables ageing, p13 uses KEC's own proof only. KEC-1 or a new ticket if peers are wanted (they would be deliberate, sourced peer lines).
3. RATE: KEC states ranges only (consortium WC loans 6.90 to 8.90%, short-term 6.50 to 7.90%, CP 6.97 to 7.30%, AR26 Note 30). KEC-4 must pick one stated rate and name it; the implied 10.68% is NOT KEC's rate.
4. TERMS (payment terms in days) and the NWC definition: unpublished. p5 caption and p7 client lens say "terms not published".
5. Q1 FY27 balance sheet: none. p6 uses only net debt, NWC days and P&L.
6. Pricing basis: the calculator prices a day at revenue/day (64.4). KEC's NWC definition is unknown, so state "on a revenue basis" next to every rupee figure beside the 137 days.
