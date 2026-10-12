# Cymetree Projects LLP: QA report (CY-S23, 9 Oct 2026)

Source re-fetched raw 9 Oct 2026 (CRISIL Ratings rationale, 31 Jul 2026; needed a browser User-Agent) and read as text by script. The page is HTML, so there are no page images.

## Figures re-traced against the raw text
- Operating income FY25 154.50, FY24 69.76; PAT 17.97 and 6.06 (Key Financial Indicators; columns 2025, 2024). Ratio 154.50 / 69.76 = 2.215, printed as "more than doubled".
- Order book Rs 846 crore, May 2026, 12 to 24 months (Strengths). FY26 estimate Rs 340 to 345 crore (Strengths). Prints once, page 3, text only.
- Debtor days "120 to 145" over three fiscals ended 31 March 2026 (Weaknesses). History only; appears on pages 4, 7 and 11, never charted or calculated.
- Quote on page 6 matches the Weaknesses text word for word.
- Per day = 154.50 / 365 = 0.4233 Cr (printed 0.42 and, in sources, 0.4233). 10 days = 4.23, 30 days = 12.70 (calc/output-clean.txt).
- Calc: 5 asserts, each broken once and failed visibly (calc/output-break1 to 5), then clean. Interest 0. Payables release 0. Temp script deleted; app git status shows only the two untracked docs paths.

## Scans on the prompt (scripted, planted hits all caught)
Placeholders 0 · comments 0 · reference codes 0 · jargon 0 (one hit is the fixed product line "04 Verified") · en/em dashes 0 · point sizes 0 · other prospect names 0 · KEPT OUT terms 0 · interest figures 0 · "design to reproduce" 0 · untraced numbers 0 (the only signed-looking numbers are the +91 phone).

## Deviations from the fixed copy
- Tagline "trapped" replaced by the ruled "waiting" on pages 7 and 16.
- "Cymetree Projects'" used as the possessive of the company name.
- Page 7: lens text is "Not published" with a reason for three lenses; the other two carry the value of a day and the debtor range.
- Page 8: no upper card, no totals line, footer "Illustrative stages." only, as ruled. Eleven stage tiles, name and tag only.
- Page 14: claims and arbitration line dropped. Page 15: interest-free variant of the sources paragraph; pilot scope "one to three projects"; ERP not named by any source, so "ERP".
- Page 11 owner line kept as the EXAMPLE line. Rule labels A1 to A14 renamed R1 to R14 in the prompt (A3 is a kept-out term).
- Template rules reworded to remove "slot", "headline table", "Template fallback" and status words; added B1 to B3. Template section 2 and finish check 10 dropped.

## Deepen 2026-10-10
Backups: claude-design-master-prompt.pre-deepen.bak, slots-unified.pre-deepen.bak. Source re-downloaded raw 10 Oct 2026; HTML rationale, so there are no page images and no image check was possible; each figure was read from raw text by script.
New figures printed:
- About 54%: bank limit utilisation, twelve months ended May 2026. CRISIL rationale 31 Jul 2026, Liquidity para. Raw text match. Prompt page 6.
New qualitative statements (no figures): long credit period "in line with the industry standards" and "majorly driven by the debtor days" and "inventory levels remain low" (CRISIL, Weaknesses, working capital para, raw text match; pages 4, 5, 7); client types and vendor description (company site, self-description, accessed 10 Oct 2026; pages 3, 7, 9, source note p15).
Not added, NOT FOUND: client shares, named clients, creditor days, MSME, retention, contract assets, ageing, operating cash flow, project counts, partner titles.
Checks (check.py, planted hits caught): 8 backup lines changed, all intended (B1 rule, p7 lenses and footnote, p9 count word, p12 and p13 additions, p15 sources); all other backup lines still present; new numbers: only 54, traced to data.md; dashes 0; other prospect names 0; KEPT OUT terms 0 (substring "TOL" in "total" only); design words 0. Calc and headline figures unchanged; page count 16.
