# Nikhil Infraspecialities: self-QA (steps 2 and 3, 2026-10-09)

Method: Python -I scripts (scratch NI-S23). Each scanner was first run on the prompt plus a planted bad string and had to fire (placeholder, comment, dash, signed number, interest figure, percent, company name, KEPT OUT term, jargon). One real hit was found and fixed: the template rule 7 still said "slot", reworded.

## Figures traced to the raw CRISIL text (CRISIL Ratings rationale, 6 Jan 2025, standalone)
Found verbatim: 50.26, 46.12, 3.39, 3.10, 476, "more than two decades", Jambhulwadi, Ambegaon Budruk, Mundhwa, "Incorporated in 2016", paver blocks, AAC, precast products, work-in-process, finished stock, "large receivables and inventory", "long credit period". Date in the document: January 06, 2025. FY23 and FY24 are the document's fiscal 2023 and 2024 (year to 31 Mar 2024).
All 37 distinct numbers in the prompt's Content were traced: 12 from CRISIL or its dates, 5 from calc, the rest page numbers, scenario steps (10, 30), 365, the 14-day pilot and the fixed-page sample due days. Untraced: none.

## Recomputed by script
50.26 / 365 = 0.1377 Cr = 13.77 L; x10 = 1.38 Cr; x30 = 4.13 Cr; 476 minus 10 = 466; 476 minus 30 = 446. Matches calc/ni-savings-output.txt. Four deliberate breaks of the calc (day basis, interest on, negative release, payables) each failed visibly; the clean run passed.

## Basis match
Cover hero and p10 and p12 pair only operating income per day with day steps. The 476 is the agency's own measure and its base is not stated; the caveat [DAY] says so on every page that uses it. No rupee total of stuck cash is printed (would need a balance not published).

## Rules
- No rating grade, outlook or upgrade trigger; no customer or related company name; no FY22 figure; no 127.81, NHAI, Janata, nikhilgroup; no interest figure (sentence level scan).
- Business described as manufacturer plus building works; the words EPC and roads do not appear.
- Ownership: measure, prepare, review, submit, invoice are the company's; acknowledge, certify, pay are the client's (p8, p9, p13).
- p8: 11 tiles, name and tag only, no digits; "Do not invent step waits." present; no upper card.
- p13: zero digits in the body; "No numbers on this page." present.
- Lens page: four lenses read "Not published" with a reason. "Never compute a figure that is not given here." appears on 7 or more pages.
- Scenario bars start at zero, dashed and hollow, p10 and p12 only; p5 is history only.
- No dashes (en, em, minus, spaced hyphen), no signed numbers (the phone number is the only plus), no logo, tagline reads "waiting", letter dated 9 Oct 2026, p14 claims line dropped.

## Judgement calls to flag
1. "pre-cast" is hyphenated to avoid the banned company word.
2. Fixed p11 line 02 was reworded to say the recipient is shown before a send (matches the product).
3. Operating income, not revenue, is the label (README NI-2).
4. The GCA days are scaled at one day of operating income: a sizing, not a claim about balances.

## Deepen 2026-10-10
Sources re-downloaded 10 Oct 2026. CRISIL Ratings rationale of 6 Jan 2025 is HTML: read as raw text by script (no page numbers; section named). CARE Ratings press release of 14 Dec 2023 is a PDF: p1 re-rendered and the raw-materials sentence checked against the page image (matches).
Newer CRISIL action: none found on crisilratings.com / crisil.com searches. Calc unchanged (GCA 476, 50.26 / 365, Rs 1.38 Cr, Rs 4.13 Cr). No new ratio computed.

| New figure (printed) | Source and section | Check |
|---|---|---|
| 75 to 80% of revenue from material sales; 15 to 20% from civil works (FY24) | CRISIL 6 Jan 2025, Strengths, "Extensive experience of the promoters" | raw text, exact |
| Bank limits used 80% on average, 12 months through November 2024 | CRISIL, Liquidity | raw text |
| Current ratio 1.27 times at 31 Mar 2024 | CRISIL, Liquidity | raw text ("1. 27" split in the HTML; read as 1.27) |
| PAT margin 6.73% FY23, 6.74% FY24 | CRISIL, Key Financial Indicators | raw text |
| Cash credit 30.00, term loan 7.75, bank guarantee 2.25, total 40 (Rs Cr) | CRISIL, Annexure | raw text; 30.00 + 7.75 + 2.25 = 40.00 |
| Expected cash accrual 7.5 to 11.0 Cr a year; term debt obligations 2.0 to 3.5 Cr a year | CRISIL, Liquidity (agency expectation, labelled so) | raw text |
| Cement, sand and gravel as inputs; price changes put stock value at risk | CARE 14 Dec 2023, p1, "Moderate profitability margins" | page image |

Scripted checks (check.py, run first on the prompt with a planted bad string: it fired on Poppins, navy, pt, dashed, an en dash, Capacite, NCPL and an untraced 99.99; then clean):
1. The backup has no lines starting with ">": its printed lines are quoted strings. All quoted strings in its Content are still present, except the page 15 Sources line, which is the same text with one sentence inserted for the new sources.
2. Numbers removed: only the page list in the Backgrounds key (1, 4, 7, 12, 16) and the bar and column ordinals of the removed drawing instructions. Numbers added: 75, 80, 20, 40, 7.5, 11.0, 2.0, 3.5, 2.25, 30.00, 7.75, 6.73, 6.74, 1.27 and 2023 (CARE date). All trace to data.md.
3. Design words: 0 hits (navy, cream, gold, Poppins, italic, dashed, hollow, hatched, white card, upper card, pill, dumbbell, slider, on one scale, scale from, axis, pt, curve, small capitals).
4. 16 pages; page headings unchanged except the colour in brackets, e.g. "(navy)", removed.
Also: 0 KEPT OUT terms (grade, outlook, triggers, lender, debt ratios, related company), 0 other-prospect names, 0 dashes, 0 spaced hyphens. The only plus signs are in the phone number.
Backups: claude-design-master-prompt.with-design.bak and claude-design-master-prompt.pre-deepen.bak (identical, the 9 Oct prompt).
