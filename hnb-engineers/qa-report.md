# HNB Engineers: QA report (HN-S23, 9 Oct 2026)

## Re-trace against the raw source
CRISIL rationale 1 Oct 2025 re-fetched as raw HTML (the agency's page, text layer, no images) and 26 Nov 2024 likewise. Found verbatim: operating income 221.53 and 206.45; gross current assets of 412 days at 31 Mar 2025; "90-120 days credit"; "payments from counterparties can sometimes get stretched"; orders of around Rs 1,279 crore as on 1 Jun 2025; 1,500 MLD commissioned; O&M for around 1,000 MLD; "over four decades"; incorporated 1973 in Pune. The 345 days at 31 Mar 2024 is in the 26 Nov 2024 rationale only.

## Recompute by script
221.53 / 365 = 0.6069315; x10 = 6.0693 (printed 6.07); x30 = 18.2079 (printed 18.21); 412 minus 345 = 67; 412 minus 10 = 402; 412 minus 30 = 382. simulate() agrees with days x per day. Asserts (negative release, interest zero, cross-check, payables, basis) each broken once and failed visibly; clean run passes. Temp script deleted; app git status shows only the two untracked doc paths.

## Prompt scans (scripted, planted hit caught)
Placeholders 0, comments 0, internal references 0, dashes 0, point sizes 0, other prospect names 0, "The design to reproduce" 0, interest figures 0. Every number in the prompt traced to the source or the calc (remaining digits are dates, page numbers and the phone number).

## KEPT OUT scan
One hit: "margin" in the fixed p14 line "Not a margin or cost-control tool." It is product copy, not a company figure, and the brief forbids rewording fixed copy. Ruling needed from Garvis: keep, or delete that line.

## Deviations from fixed copy
- Tagline "waiting" instead of "trapped" on p7 and p16 (brief).
- p14 claims/arbitration line dropped (brief).
- p8: no upper card, no totals line; footer "Illustrative stages." only (launch message).
- p14 scope card omitted. p3 to p6, p9, p10, p12, p13 are new pack copy.
- Template rules reworded to remove jargon words, accuracy rules relabelled R1 to R14 (A2 would match a kept-out term), rules B1 to B6 added.

## Deepen 2026-10-10
Sources fetched as raw HTML and read as text by script (no PDF, so no page images needed): CRISIL 29 Aug 2023, 26 Nov 2024, 1 Oct 2025; hnbc.in About Us. Each figure below was checked against the extracted text of that document.
| New figure | Source and section | Check |
|---|---|---|
| 287 days GCA, 31 Mar 2023 | CRISIL 29 Aug 2023, Weakness, "gross current assets (GCAs) of 287 days as on 31, Mar,2023" | found verbatim |
| Orders ~Rs 570 Cr, Jun 2023 | same note, Healthy order flow | found |
| Orders ~Rs 1,147 Cr, 30 Sep 2024 | CRISIL 26 Nov 2024, Healthy order flow | found |
| Limit use 83% to Sep 2024, "utilization increased due to delay in receipt of payment from customers" | CRISIL 26 Nov 2024, Liquidity | found |
| Limit use 69% to Aug 2025 | CRISIL 1 Oct 2025, Liquidity | found |
| FY23 Q4 receivables, large portion realised next quarter | CRISIL 29 Aug 2023, rating action text | found |
| Six regions; supports (suppliers, advances, bank) | CRISIL 1 Oct 2025, Strengths and Weaknesses | found |
| Client names | hnbc.in About Us, Clients we serve | found (undated page) |
Unchanged: letter, headlines, 6.07 and 18.21, 412 and 345 (345 re-found in 26 Nov 2024). No ratio computed. Utilisation is printed as a percentage only; limit amount, grade and lender not printed. Judgement call for Garvis: "limits" are KEPT OUT; the percentages are kept because CRISIL ties them to late customer payments.
