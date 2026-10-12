# Precast India Infrastructures: QA report (step 2 self-QA, run on the final prompt)

Method: both CRISIL HTML pages (src/d/) re-extracted to text in the scratchpad (python -I), every printed figure and every quoted phrase searched in the source text with spacing normalised, then scans run on the assembled prompt. Every scan was first run on a planted string and caught all nine planted classes (placeholder, comment, company name, internal reference, dash, KEPT OUT term, money figure, 158, "The design to reproduce"), so a zero is a real zero.

## Figures re-traced on the CRISIL HTML (all found)
| Printed | Source |
|---|---|
| 128.11 (FY20) | CRISIL 4 Nov 2020: "revenue of Rs. 128.11 crore in fiscal 2020" |
| 130.92 (FY21), 102.81 (FY22) | CRISIL 3 Aug 2023, key financial indicators, operating income |
| 104.8 (FY23) | CRISIL 3 Aug 2023, weakness section, "revenue was average at Rs 104.8 crore in fiscal 2023" |
| Rs 45 Cr, ICICI Bank Limited, BBB/Stable, A3+ | CRISIL 3 Aug 2023, rating action and lenders annexure |
| Over 200 projects | CRISIL 3 Aug 2023, "over 200 projects" |
| about 3% | CRISIL 3 Aug 2023, liquidity, "~3% on average for the 12 months through March 2023" |
| 5.7%, Rs 5 crore | CRISIL 4 Nov 2020, liquidity, "average of 5.7% over the 12 months through July 2020" |
| about Rs 120 Cr, 6 to 9 months | CRISIL 4 Nov 2020 ("Rs.120 crore ... next 6-9 months"; hyphen printed as "to") |
Quoted phrases (efficiently managed cycle funded by advances from customers and creditors; minimal working capital debt; remained modest due to lower booking ...; delay in execution ... final changes in designs; Healthy order book ... medium term; sizeable stretch in the working capital cycle; receives advances from customers and monthly bills): all exact in source.

## Recomputed by script
No computed figure is printed (no growth, no margin, no share). The only arithmetic was in pc-calc.py for data.md and none of it reaches the prompt. Series on page 5 plotted from the four printed values on one zero-based scale.
Basis match: FY20 is "revenue" (2020 note), FY21 and FY22 are "operating income", FY23 is "revenue" (2023 note). The mix is stated in the [REVBASIS] caveat rather than hidden; no two of them are paired in a ratio.

## Scans on claude-design-master-prompt.md (all zero)
- placeholders 0, comments 0, company names (whole words, full list plus Panchshil, Panchsheel, Bhate, Raje, BRCCPL) 0
- internal references 0 (template wording "ticket ids" reworded to "reference codes")
- dashes 0 (en and em characters 0, spaced hyphens 0, hyphen before digit 0)
- KEPT OUT terms 0 (withdrawn, non-cooperation, aggregator, promoter, related party, auditor, arbitration, guarantee, Tracxn, named clients, leader names, ownership history). Template "auditor" on page 11 reworded to "re-check"; page 14 claims and arbitration line dropped.
- savings, per-day or interest figures 0; "158" 0; "The design to reproduce" 0
- untraced numbers: none that print. Instruction-only sizes (80 pt, 34 pt) sit outside quotation marks.
- 16 pages, footers 2 to 15 present, cover and back cover carry none by design.
- Pack inside the prompt is byte for byte slots-unified.md from "## Keys" to before "## Checks".

## Judgement calls
- FIXED-PAGES "trapped" tagline replaced by the ordered tagline in p7 and p16. Right-hand footer teasers dropped (template check 8). p11 footer teaser dropped.
- Page 12 and page 13 replace the template's scenario and proof pages; no peer or proof is printed.
- Page 8 stage name "TAX INVOICE RAISED" kept as fixed wording; it is a stage, not a tax matter.
- The company's ERP is not named in any primary document, so "ERP" is used throughout.
