# PSP Projects: QA report (ticket PS-S23, 2026-10-12)

## Sources re-downloaded and re-read from page images (scratch only)
AR 2025-26 (30.6 MB), AR 2024-25, AR 2023-24 from pspprojects.com/financial-performance; Q4 FY26 transcript of 30 Apr 2026 from the same site. Page images read: AR26 pdf pp 20 (printed 36-37), 66, 143, 144, 145, 165, 167, 168, 173, 196, 200; AR25 pp 144, 145; AR24 pp 172, 173, 174; transcript pp 12, 13. Every printed figure was re-derived in the filing's lakh and shown in Cr (calc\series.py, calc\extras.py).

## Verified inputs (page images)
Revenue 2,98,945.24; material 1,06,016.82; change in inventories 2,149.31; construction 1,50,127.29; receivables 84,029.60; inventories 34,374.99; payables 4,798.24 + 35,285.47; cash 25,798.37; unbilled 43,835.08 less ECL 3,800.56; retention 15,160.03 + 5,940.07; advances 79,641.89 (all lakh). Series FY23 to FY25 read from AR24 and AR25 images. Receivable and payable ageing from AR26 pp 168 and 173. CFO quote and the 60 to 70 target from transcript p13 (image); speaker is Hetal Patel.

## Calc
calc\ps-savings.ts, calc\ps-savings-output.txt (all asserts pass), calc\ps-savings-break-tests.txt (each assert broken once: negative release, interest, cross-check, payables, floor and past-due, all FAIL visibly; exit 1). Temp file deleted by exact name; app `git status` shows only `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/`. Ties: DSO 102.6, DIO 116.0, DPO 56.6, unbilled 48.9, cycle 210.8 (210.83). Materials per day verified on the page: 1,060.17 + 21.49 = 1,081.66 Cr, 2.96 per day.

## Never below the client's term
The only published customer term is "immediate payment to 120 days" (note 12), so the lower end is 0 days and no scenario goes below it. The 70-day scenario is management's own target (CFO), not a contract term. Cross-check in calc: cash from every collection scenario (max 266.98) is below the 403.41 Cr already past due, so no not-yet-due balance (472.98 Cr) is needed. Risk to flag: management attributes the rise in receivable days largely to the not-due category and to final-month revenue, so part of the 32.6 days may clear on its own; the booklet says so on page 4.

## Deviations from the fixed copy and the brief (all intentional)
1. Page 7 and 16 tagline: "waiting" not "trapped", per the launch brief. Kicker texts otherwise verbatim.
2. Page 8: fixed line "Step waits are not public ... shows the stages, not days" and footer "Illustrative stages. Totals are from published accounts" were rewritten, because the later chart order (stage_estimate.py with tags) prints estimated and audited stage days. The brief's "name and tag only" tile rule is overridden by the catalogue and the launch message. No day value was typed by hand.
3. Page 14: claims and arbitration line dropped, as ruled. {SCOPE_CARD} omitted. Page 15 sources paragraph: "Step waits on page 8 are not public and are not drawn" replaced by the Estimate statement.
4. Honorific: AR26 prints "Mrs. Hetal Patel" (pp 55, 67, 78, 93, 188, 302), not "Ms." as the README said; used "Mrs." and "Dear Mrs. Patel,". Mr. Prahaladbhai S. Patel confirmed on p55. Address from AR26 p96 and p103: "PSP House", Opp. Celesta Courtyard, Opp. Lane of Vikramnagar Colony, Iscon-Ambli Road, Ahmedabad 380058, Gujarat.
5. Letter dated 12 October 2026 (launch message), not 9 October.
6. Tag text "From the audited accounts (management states 103 days)" replaces "Published" on the payment stage and the WHOLE RA BILL line; the script prints the rest verbatim (151.5 = 48.9 + 102.6).
7. The combined run is one `simulate` call: collection to 70 plus certification and materials 30 days less. It is not a sum of rows and is labelled so.
8. Letter, cover hero and page 6 per-day line carry scenario or per-day figures; the letter and page 11's Ask answer have no HOW lines (page 11 explains the mechanism in its own fixed steps). Cover and every priced chart carry the two lines.
9. Page 13 is text only, "No numbers on this page." Accuracy rules relabelled R1 to R14 and B1 to B3 because the label "A1" is on the KEPT OUT list. Template rules 5, A5, A7, A14 and finish checks 5, 6, 10 reworded to govern content only. "The design to reproduce" and finish check 10 removed.
10. Template word "Verified" and the "Secondary" marker removed from rule 6.

## Charts used (catalogue names, exact)
1 "The cash cycle · Where the money sits, and who is holding it" (p10, Position and Simulate with "to target"). 2 "No clock on these · ranked by size instead" (p9, balances by size, no cost). 3 "Cash movement ..." annual cash from operations FY23 to FY26 (p6, history only, no scenario, no peak funding need). 4 "How these four move together" (p5: DSO, DIO, DPO, cash; scenario points on FY26). 5 "Process map · One bill, from work done to cash in the bank" (p8).
Skipped: the priced panel of "Pressure on the cycle" (no single borrowing rate); monthly cash movement and any peak funding need (annual data only); net trade working capital as a fifth line on chart 4 (the ruling names four lines; it appears once on page 7).

## Scripted scans on claude-design-master-prompt.md (check.py, trace.py in scratch)
- Page headings 1 to 16 in order. 0 placeholders, 0 comment markers, 0 en or em dashes, 0 " - ", 0 " pt".
- Internal references: 0 real hits ("script" matched "transcript" twice, which proves the scan works; both are the call transcript).
- KEPT OUT terms (Adani, client share, concentration, 67%, CARE, A+, A1, downgrade, rating, 184.58, supplier finance, "65 to 96", 427.99, 770.21, gtm, 3,149, 928, "183 Cr", guidance): 0 hits. Planted hits were detected.
- Other prospect names (every folder in crestline-prospects except psp-projects, whole words, hyphen and space forms): 0. "Patel" appears only inside Prahaladbhai S. Patel, Hetal Patel, Mr. Patel and Mrs. Patel.
- Content-only words (navy, cream, gold, Poppins, italic, dashed, hollow, hatched, white card, upper card, pill, dumbbell, slider, "on one scale", "scale from", axis, curve, small capitals): 0.
- Every number traced to calc output, series output, page-image values or the cited pages: 0 untraced except 226.73 (outflow, printed without sign) and 327.06 (cash flow line, p204), both read from page images.
- Interest: 0 figures. 21.1% and 59% are revenue and receivables growth, Crestline's arithmetic, formulas in the footnotes.
- HOW lines: all printed word for word from HOW-CRESTLINE-SAVES.md.
- Not checked: the Q1 FY27 call, the dossier and gtm (not used).
