# VS-13 Accuracy report: Vascon CMD edition booklet (read-only check)

File: Vascon_CMD-edition_Siddharth-Vasudevan-Moorthy_booklet.pdf (16 pp). Every page rendered and read; text extracted; chart bars measured from the PDF vectors (p3, p6, p13) or pixels (p4, p5, p9, p12).
Compared with: slots-unified.md (VS-12 PASS) + Edition 2 reader block, README rulings, PLAYBOOK rules 1-11.

Verdict: NOT print-ready. Every figure outside p8 matches the approved pack (arithmetic re-run: 2.60/day, 51.97/64.97, 5.02-7.11, 25.99, 30.96, 189.96, 15.3-19.2%, 136.86 and the share-of-PBT table all reproduce). Three WRONG items and three fixes.

## Must-fix list
1. WRONG p8: per-step day counts (38.4, 21.6, 12.3, 26.9, 104.5, 13.1; 50.4 and 41.2 reused) invented by Claude Design. Pack says "Timeline of stages, no day counts per step". The six invented values sum to exactly 216.8, so they look real, and "Certified 104.5 d (client)" blames the client for half the wait, a claim nobody published. The page footnote itself says "Step waits are not public". Fix: delete all day figures and mini bars from the 8 tiles; keep stage name + OURS/CLIENT/JOINT tag only. Keep the totals line above them (216.8 / 50.4 / 41.2). Remove the "* Illustrative split..." note.
2. WRONG p15 Sources: adds "the days shown there are an illustrative split that sums to the published totals". Not in pack; exists only because of item 1. Fix: end the sentence at "Step waits on page 8 are not public."
3. WRONG (rule: no printed negatives) p6 cash-from-operations chart prints "+18.25" and "-103.18". Fix: "18.25 inflow" and "103.18 outflow" (p8 already does this). The red "₹103.18 Cr" hero is fine because the caption says outflow.
4. FIX p3: dashed "about 4,000" bar is 86.4 pt tall; the six solid bars (0.02253 pt/Cr) need 90.1 pt. It is drawn as about 3,830, 4.1% short, over the 2% limit. Solid bars are all within 1.3%.
5. FIX p4 and p13: axis tick labels are not to scale. Bars, the 60-day rule and the 73.1 bracket are correct (p13: 143.7 = 226.5 pt, 216.8 = 342.0 pt, ratio matches), but labels 50/100/150/200 are spaced evenly instead of at value/250 of the axis. On p13 the "200" label sits about 13 days left of true 200; on p4 about 15 days. Fix: place ticks at their true positions.
6. Minor p2: the P.S. text ("Please read on.") is not beside "P.S."; it appears only as the footer tagline. Fix: print "P.S. Please read on." on the P.S. line.
7. Minor p1: approved hero small line ("The cycle as Somnath Biswas, CFO, described it: from 45 days to almost 65 to 70.") is not printed. Harmless omission. Restore or accept.
8. Minor p5: the big "₹563.51 Cr" heading sits over a sentence about revenue (1,075.24 / 948.53). Not in pack. Fix: drop it or label it "Unbilled, FY26".
9. NOT VERIFIED: the Vascon logo on p1 (master prompt rule 10: only if the client uploaded it, never redrawn) and both QR codes (p15, p16; no decoder here). Open them and confirm they go to crestlineintelligence.com/book-a-demo.

## Page table
| Page | As printed | Approved value | Status | Exact fix |
|---|---|---|---|---|
| 1 | Prepared for Mr. Siddharth Vasudevan Moorthy, Chairman and Managing Director; Rajat Kate, MD; October 2026; hero "52 TO 65 CR · TWENTY TO TWENTY-FIVE DAYS OF EPC REVENUE"; footnote | same | CORRECT (hero small line missing) | restore line or accept; confirm logo upload |
| 2 | Dear Mr. Moorthy; 13 May 2026 quote "about INR4,000 crores of order backlog" by Dr. Santosh Sundararajan, Group CEO; 2,850 Cr at 30 Jun 2026; net debt 16.62 to 151.74 "Company-wide (includes real estate)"; 2.60 Cr/day; CFO named for 45 to 65-70; 52-65 Cr; 5.0-7.1 Cr at 9.65-10.95% "if it repays borrowing"; "adapter built for your SAP, it only reads"; address with 411014; October 2026; footnote 76 Cr / 44.74 Cr | identical | CORRECT; P.S. text misplaced | print the P.S. line |
| 3 | rows i-vii with names, titles, dates; bars 1,832 / 2,127 / 3,365 / 2,825 / 2,717 / 2,850 / about 4,000 dashed; "4,000 is a backlog target, not revenue" | identical | CORRECT; dashed bar 4.1% short | redraw to 90.1 pt |
| 4 | 216.8 d / 563.51; 50.4 / 130.92 + 41.2 / 107.18 = 91.6 / 238.10; 60-day rule; three side stats; receivable and overlap caveats | identical | CORRECT; axis labels off | space ticks to scale |
| 5 | 187.4 / 155.6 / 100 and 124.3 / 140.8 / 100; marks 178.8 and 161.5; 25.99 / 77.96; +87.4% vs 24.3% | identical; lines plotted within 1% | CORRECT (extra heading) | item 8 |
| 6 | CRISIL BBB+/Stable, A2, from A- and A2+ (21 Aug 2026), debt 205.00 to 338.76; net debt 16.62 / 91.41 / 151.74 company-wide incl. real estate; +60.33; total debt 298.60 / 338.76; cash from ops 18.25 inflow, 103.18 outflow; revenue 151.96 vs 220.91, down 31.2%; 25.99 at 9.65-10.95% = 2.51-2.85 | identical; bars within 2% | WRONG (negatives) | "+18.25" and "-103.18" become "18.25 inflow" and "103.18 outflow" |
| 7 | five lenses; 45 to 65-70 credited to Somnath Biswas, CFO; 216.8; 104.33; 50.4 vs 60; 23.5%; "Once connected"; "NO AI-GENERATED NUMBERS" | identical | CORRECT | none |
| 8 | waterfalls 97.67 / 79.42 / 18.25 inflow and 54.13 / 157.30 / 103.18 outflow (to scale); stage timeline with 38.4 d, 21.6, 12.3, 26.9, 104.5, 13.1, 50.4, 41.2 | stages only, "no day counts per step"; waterfall same | WRONG (waterfall CORRECT) | remove step day figures (item 1) |
| 9 | retention 45.26 / 61.67 / 76.76 / 84.72 / 107.18, dashed 76.22 (within 1%); +136.8%, 73.8%, 23.6%; payables 641.35 / 150.80 (23.5%) / 104.33 (16.3%) from 29.40 / 65.24 | identical; "no cash is claimed" kept | CORRECT | none |
| 10 | simulator 25.99; 11.9 d / 30.96; 216.8 to 206.8; 41.2 to 29.3; vendor held; Supaul and Sindhudurg marked illustrative; 49.3% of 2,531, 11.6%; 641.35, 65.24; about 77% | identical | CORRECT | none |
| 11 | finding 216.8 / 50.4 inside 60; "Once connected, every figure is computed from your ERP"; "Crestline's auditor re-measures the same figure"; "model never produces a number"; interest caveat | identical | CORRECT | none |
| 12 | 20-25 d; 51.97-64.97; 5.02-7.11; table rows and PBT shares; Vendors none claimed; 189.96; debt 201.90 / 298.60 / 338.76 company-wide; 15.3-19.2%; 136.86 | identical (all recomputed) | CORRECT | none |
| 13 | FY24 143.7 / 300.64 vs FY26 216.8 / 563.51; 73.1 d, 189.96 cash only; no peer; 45 not charted | identical | CORRECT; axis labels off | space ticks to scale |
| 14 | read-only, EPC only, 96.6%, auditor audit-trail note, "What Crestline is not", 14 days after SAP connected | identical; no ISO/hosting/encryption | CORRECT | none |
| 15 | pilot wording, adapter first, QR, thirty minutes with Somnath Biswas or Siddharth Vasudevan Moorthy; Sources and notes | identical except one added sentence | WRONG (extra claim) | cut the added sentence (item 2) |
| 16 | headline, Rajat Kate, Managing Director, Pune, contact, QR | identical | CORRECT (QR not verified) | open QR |

## Rule checks
- "You said" over others' quotes: none. Edition differences are only cover lines, p2 letter, salutation: confirmed.
- 45 days: only in the CFO's words (p2, p3, p7, p12); never charted; p13 uses own 143.7 vs 216.8, no peer.
- CRISIL BBB+ is current; "A-" appears only as the previous rating.
- Interest caveats present wherever interest is printed (p2, p6, p10, p11, p12): 9.65-10.95% cash credit, 44.74 Cr, 76 Cr all fund-based limits, only if cash repays debt.
- Company-wide labels: net debt and total debt marked company-wide / includes real estate; cash flow and revenue marked consolidated.
- No ISO / hosting / encryption / ERP-today claims; "Once connected" and pilot wording as ruled. No internal references or other-company data (grep: none). Names, titles, 411014, October 2026: correct.
- No "88%" profit-fall headline anywhere.

Self-review: 4/5 | logo and QR codes not verifiable here (no decoder, no upload record) | confirm both from the client's source file before print
