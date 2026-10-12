# AF-8 prompt review (7 Oct 2026)

VERDICT: PASS WITH FIXES APPLIED. No calculation blocker. Master prompts (AF-9) may be written from the edited slots files.

## Figure trace
- Recomputed by script (python): per day 32.735; 10d 327.4; 30d 982.1; 23d 752.9; 1,000 = 30.5 days; >1y 48.67% and 38.37%; 722.0 x (calc output + AF-6 hand recompute); days 236.2 / 123.4 / 136.6 / 31.1; 65.7% / 34.3%; 169.5% index and 69.5%; 8.4% revenue; 93.5% (1,592.20 / 1,702.20); 365 / 3.02 = 120.9 (about 121); order book 32,496 / 11,948.38 = 2.72; index series 100/108.5/127.4/152.0/169.5 and 100/114.7/120.4/113.9/108.4; scenario ends 164.7 and 155.3; waterfall WC change -378.49/-101.19/-675.90/-1,522.81/-1,592.20 and tax and other -116.47/-99.90/-250.12/-240.32/-237.49 (both reconcile exactly to cash generated and net operating cash); band movements +71.48/-18.07/-57.77/+420.54/+144.97/+153.87; band sums 3,604.77 and 4,319.79; FY25 >1y 1,382.96; 295 vs 300 = 5; 295 less 280/270 = 15 to 25 (upgrade line); 21.3%, 58.3%, 77.9%, 7.0%, 20.8%, 27.0%. All CORRECT.
- Automated: every 3+ digit number in the three files searched in data/depth/calc/verify/problems/solutions/storylines/fact-check/README. Not found = only the derived values above (all recomputed) and Crestline's phone.
- Quotes re-read in src/txt transcripts: CFO undrawn limits (Q4T), 325 crores (ECL provisioning), 1000 odd, MD "first time ... 2010" (said of the loss, "We view this as an exception"), Q1 "no material movement", "stuck collection": match.
- Rate: text 7.55% to 9.95% found on AR26 PDF p.137 and PDF p.185. NOTE: p.137 is the STANDALONE borrowings note, p.185 the consolidated one. Same range; kept p.137 as ruled. Garvis may prefer p.185 as the packs are consolidated.

## Q2 NWC formula (Q4 FY25 deck p.39)
Formula = (current assets less cash) less (current liabilities less current borrowings), over revenue from operations, x 365. Revenue basis, so the calculator (days x revenue / 365) matches it exactly: depth.md recomputes 42.9/37.9/62.8/113.2/142.8; 143 x 32.735 = 4,681 vs NWC 4,675 Cr (0.1%). NWC rows (143 to 113, 143 to 120, NWC 10/30-day) are correct as printed. The 236.2 and 123.4 leg rows are balance over revenue per day, NOT the NWC formula (labelled [C-DAYS]). No savings row changes. No blocker.

## Changes made (slots-cfo.md, slots-md.md, AFCONS-MAIN.md)
1. 719 vs 722: the "about 719 more" stat replaced in both books by one figure, 722.0 (calc output section 4) with [C-CEIL]; stale 719 text in checks and MAIN open items updated.
2. Page 13 both books: Block A own record now leads (43, 38, 63, 113, 143 + dashed 113); CFO headline changed to "Your own record: 43 days in FY22, 143 now."; MD chart extended from three to five years (FY22 43, FY23 38); L&T, NCC, HG Infra removed from CFO p13, MD p9, MD p13, both p15 source notes and the MAIN file (kept in depth.md); J Kumar 127 to 99 is the only peer; footers made singular. CRISIL lender block kept as lender (not a peer), 139 and 295 stated as CRISIL basis, never mixed with 143.
3. CFO p12 headline "Priced: 143 days down to 120 is ₹752.9 Cr." changed to "Priced: the 23 days you named, worth ₹752.9 Cr." (120 now appears only with his quoted words on that page); MAIN section 6 matches.
4. MD p6 quote now verbatim ("for the first time since we started publishing quarterly numbers from 2010"); MD p5 and p6 "AF-8 to re-read" notes closed. MAIN rate-cite and quote-check items updated.

## Rulings checked
Page 13 own history + one peer: done. CRISIL 139 vs company 143: never mixed (CFO p13, MD p13, MAIN). 120 only in CFO words: CFO p2/p3/p12 carry the quote; MD p12 footnote carries it. No missed-promise scorecard: none in files. Ownership: certify and collect = client in CFO p4/p8/p10/p12, MD p4/p8/p10. Crestline claims: no ISO/hosting/encryption/present-tense SAP, pilot 14 days, SAP adapter built in pilot; consistent with webapp-fit and PLAYBOOK.
Open, not mine: "121 days (365 / 3.02)" sits near the CFO's 120; it is labelled as the AR's own turnover definition, left in.

## Re-run after edits
Em/en dashes 0 (all three). Banned words 0. Other-company strings (8) 0 hits. Headlines 15 each; max 11 (CFO), 12 (MD). L&T/NCC/HG strings 0 in the three files.

Self-review: 4/5 | rate cite p.137 is standalone, spotted only after the ruling said "verified" | I will open the page's entity header (standalone or consolidated) for every cited page, whatever the ruling says.
