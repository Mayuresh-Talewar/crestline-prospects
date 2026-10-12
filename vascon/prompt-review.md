# VS-8 prompt review (7 Oct 2026)

VERDICT: PASS WITH FIXES APPLIED. Master prompts may be written from slots-cfo.md and slots-md.md as edited.

## Figure trace (all re-confirmed)
Recomputed by script (python -I, inputs from data.md 3b/3c/3e, verify-report.md, calc/vascon-savings.output.txt):
`python -I -c "u={'FY24':300.64,'FY25':467.66,'FY26':563.51};r={'FY24':763.40,'FY25':1075.24,'FY26':948.53};[print(k,round(u[k]/u['FY24']*100,1),round(r[k]/r['FY24']*100,1)) for k in u]"`
- CFO p5 index lines: unbilled 100, 155.6, 187.4; revenue 100, 140.8, 124.3; scenario 178.8 (537.52) and 161.5 (485.55). MATCH.
- MD p5 slope FY25=100: revenue 88.2 (-11.8%), unbilled 120.5 (+20.5%); scenario 114.9, 103.8. MATCH.
- Per day 2.5987; 216.8 / 143.7 / 73.1 days (73.0988) / 189.96 cash; 50.4 + 41.2 = 91.6 days (130.92 / 107.18 / 238.10 Cr); 29.3 and 11.9 days; 76.22 and 30.96 Cr. MATCH.
- Cash, interest and %PBT for 10, 11.9, 20, 25, 30 days (25.99, 51.97, 64.97, 77.96; 2.51-2.85, 5.02-5.69, 6.27-7.11, 2.99-3.39; 3.9-4.4, 7.7-8.7, 9.6-10.9, 4.6-5.2). MATCH output.txt.
- Growth: retention +136.8% (FY22-26), +73.8% vs revenue +23.6% (FY23-26); unbilled +87.4% vs revenue +24.3%. MATCH.
- Debt: 201.90 -> 338.76 = +136.86; June-quarter net debt 91.41 -> 151.74 = +60.33; 51.97 and 64.97 over 338.76 = 15.3% and 19.2%; Q1 revenue 151.96 vs 220.91 = -31.2%. MATCH. CRISIL 205.00 (Mar-25) -> 338.76 (Jun-26) MATCHES depth.md section 2 (21 Aug 2026 row).
- Payables: 150.80 / 641.35 = 23.5% (ageing lakh sums reproduce 150.80); 104.33 = 16.3%. Cash flow: 54.13 - 157.30 = -103.17 vs -103.18 reported (rounding disclosed); 97.67 - 79.42 = 18.25. MATCH.
- Order book, concentration 49.3% / 11.6% / 2,531, RoE 4.36 / 12.39, targets, quotes: traced to data.md 3g, 4, 7 and depth.md; quote speakers per image checks recorded there. MATCH.
- Not independently re-derivable here (taken from VS-6 page-image reads): EPC 38-day figure (unprinted), 35 Cr dev-sales + related party (16.21 + 19.01 in data.md).

## Changes made (slots-cfo.md, slots-md.md, VASCON-MAIN.md)
1. Negatives printed (rule: none): CFO p8 chart note, MD p6 cash-from-operations tile, MD p8 waterfall note. Reworded to "an outflow of" / "an inflow of".
2. p14 both books said "no figure here includes" real estate. False: revenue, PBT, debt are consolidated. Now: real estate not modelled; company-wide figures include it and are marked.
3. Debt lines (CFO p6, p12; MD p6) labelled company-wide, includes real estate.
4. CRISIL footnote (both): claimed mobilisation advances explain a gap to the company's debt table. CRISIL's June 2026 debt (338.76) equals the company's; only March 2025 differs (205.00 vs 201.90). Reworded to the facts.
5. MD p3 headline "You have told the market" put the Group CEO's words in the reader's mouth. Now "Vascon has told the market". CFO p3 "what you and your Group CEO told the market" likewise reworded.
6. MD p12 "the 45-day cycle" unattributed; now "from the 70 your CFO described back to 45".
7. MD p9 "mostly on the client's side" was unsupported; now "The company points to payment and bill-approval delays on the client's side" (Q3T26 p13-14, p17).
8. MD p2 "same fifteen months" mismatched the backlog date; now "In the fifteen months to June 2026".
9. Unbilled balance: depth.md says filings do not split real-estate contract work out. Added to p4 footnotes; MD p4 hero no longer says "EPC work".
10. VASCON-MAIN file index updated.

## Rulings check
EPC only (done, see 2, 3, 9); CRISIL BBB+ current, A- only as former; 45 days only as CFO words, not charted; p13 own days 143.7 vs 216.8, no peer; MD book quotes only Dr Santosh Sundararajan, no "you said" to the MD; CFO "you said" only for his own call words; no scorecard; VS-6 caveats on every interest/receivable page; 76 Cr / 44.74 Cr wording present; certification is the client's act (p8, p9); no ISO/hosting/encryption/ERP-today claim; pilot wording per Garvis; no internal references; names, titles, address match data.md 8.
Residual (client call, not changed): "Every figure is computed from your ERP" (p11) reads as present tense; headline-level pilot wording is covered by the body sentence. Both rate-bearing scenarios up to 65 Cr exceed the 44.74 Cr cash-credit balance but sit under the 76 Cr limits, caveated.

## Re-run after edits (printed lines only)
em/en dashes 0; ascii minus before figure 0; banned words 0; other-company strings 0; internal references 0; headlines 16 per book, max 11 words, none over 12; "A-" only as former rating.

Self-review: 4/5 | trusted VS-7's own check script for "no negatives" though its regex missed hyphen minus | test the rule on the raw characters, not the previous author's script.
