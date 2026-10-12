# AIC Infrastructures: QA report (AI-S23, 2026-10-12)

## Source re-traced
CRISIL rationale 13 Feb 2026 re-fetched raw (src\crisil-2026-02-13.html, 94 KB; the first plain request returned a 406 block page, a browser user-agent got the document). Text layer is HTML, no image layer to check. Standalone, FY25.

## Figures re-traced against the raw text
| Printed | Raw text |
|---|---|
| Operating income 457.07 / 284.17; PAT 28.02 / 16.79; PAT margin 6.13 / 5.91 | Key financial indicators table |
| Orders around 1,140 Cr, 24 to 36 months | "Orders worth around Rs 1140 crore to be executed over the next 24-36 months" |
| Receivables 125 days, inventory 155 days, GCA 303 days at 31 Mar 2025; bulk of revenue in last quarter FY25 | "Gross current assets stood at 303 days ... Receivables and Inventory were high at 125 days and 155 days" |
| FY26 307 Cr to Dec 2025, more than 550 Cr expected | "revenue of Rs. 307 crores till December 2025 and is expected to report more than Rs. 550 crores" |
| Operating margin around 14%; net worth around 118 Cr vs 90 Cr | "operating margins ... around 14%"; "around Rs 118 crore ... against Rs 90 crore" |
| Incorporated 2014, Mumbai, Mr Kritarth Raja; runways, retaining walls, pavement roads, taxiways; metro and road | "About the Company" |
| 61% | (457.07 / 284.17 - 1) = 60.85%, rounds to 61%, labelled Crestline's arithmetic |
| Clients on page 10 | Company website clientele page (data.md S4), named as such |
| 1.2522; 12.52; 37.57 | calc\aic-savings-output.txt (1.252247; 12.522466; 37.567397) |

Recomputed by script: 457.07/365 = 1.252247; x10 = 12.52247; x30 = 37.56740. Basis match: all three on FY25 standalone operating income and CRISIL's 125 days.

## Charts
Used: Process map (page 8, "Payment received" 125 days, every other stage Not public; with Crestline 115 and 95 days, Rs 12.52 Cr and Rs 37.57 Cr). The cash cycle (page 5), partial: DIO 155 and DSO 125, no total, no DPO, no contract-asset leg; scenario on the DSO leg only. Scenario bars (page 6).
Skipped: Pressure on the cycle (no disclosed rate and no balances in rupees to rank by size). Cash movement (no cash flow statement; unlisted). How these four move together (single year only, no year-end series).

## Calc coverage
calc\lever-table.md: only DSO priced. DIO not priced (no cost base), contract assets, retention, DPO no data, no stated term, no combined run. Asserts all broken once and seen to fail, then clean run. Temp script deleted; app git status shows only the two untracked docs entries.

## Two how-lines
Receivables lines (approved wording, word for word) beside every receivable result: pages 1, 5, 6, 10, 11, 12. Process map lines beside page 8's result.

## Deviations from fixed copy
1. Tagline: "waiting" in place of "trapped" (p7, p16), by brief order.
2. p8 last paragraph: the sentence "This timeline shows the stages, not company's days." replaced by "The only day count here is the receivable days CRISIL states for FY25, on the Payment received stage." because the chart carries that figure (catalogue item 5).
3. p8 stage tiles carry "Not public" and Payment received carries 125 days, per the app-charts order.
4. p14 claims and arbitration line dropped, per brief. p8 upper card absent. p13 text only.
5. Pilot scope "one to three projects"; accounting system "ERP" (none named in sources).
6. p6, p12 chapters retitled for this company (no Q4 event, no stated target): p6 "Ten days, and what they are worth", p12 "Thirty days, priced".

## Kept out
Rating grade, non-cooperation history, capital-structure ratios, cash held, bank limits and utilisation, interest coverage, FY23 line, "40 years", registered or office street address, 2021 and 2022 credit period (stale). GCA 303 printed once as CRISIL's figure and not added.

## Prompt scans (scripted, planted hits detected)
0 placeholders, 0 comments, 0 dashes, 0 pt, 0 KEPT OUT terms, 0 design words, 0 "design to reproduce", 0 other prospect names (69 folder names, whole words). Internal-word scan: 1 hit, "Verified" in the fixed copy "04 Verified:" (product wording, kept). "Interest" appears only in "No interest is priced" and rule A6; no interest figure. Numbers outside the traced set: 01 to 05 (lens numbers), 25 and 26 (inside FY25, FY26). 16 pages.
