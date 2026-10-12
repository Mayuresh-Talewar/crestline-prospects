# QA report: Innovators Facade Systems (IF-S23)

## Sources re-traced (page images, this ticket)
Copied from the IF-1 download folder (same company, same files) into scratchpad\IF-S23\dl, rendered at 100 dpi and read as images: AR 2025-26 pp4, 10, 68, 78, 79, 80, 89, 92, 94; AR 2024-25 pp79, 80, 81, 95; AR 2023-24 (pdf pages 64 to 68, 80, 82; printed pages 62 to 66, 78, 80); press release 30 May 2026 p2 (pdf page 3). Note: AR 2025-26 pdf pages equal printed pages; AR 2023-24 pdf pages run 2 ahead of the printed page numbers. A fresh download was not repeated: the IF-1 files are the company's own PDFs.

Every input in calc\if-savings.ts matches the images: FY26 revenue 22,751.51; inventories 8,796.64; trade receivables 4,191.37; unbilled 4,239.13; payables 134.04 + 6,241.86; cash and bank 4,054.48; materials consumed 11,844.29; purchases 15,229.69; cash from operations 4,181.55. FY25 5,411.24 / 5,472.05 / 2,286.32 / 2,597.84 + 309.87 / 3,105.71 / 10,808.58 / 9,556.42 / 473.85 / revenue 22,137.35. FY24 6,663.40 / 3,688.33 / 1,760.68 / 4,146.00 + 207.85 / 2,390.98 / 10,594.50 / 9,059.56 / 3,545.61 / revenue 21,548.09. FY23 8,289.90 / 3,450.82 / 1,837.80 / 5,602.23 + 315.13 / 1,581.57 / 9,700.06 / 13,304.27 / 1,776.11 / revenue 18,097.69. Ageing, MSME and advances on p89 and p92. Order figures on press release p2: 57,179, 24,430, 134.05%, 74,102.
Recomputed by script (savings-output.txt): every printed day figure in all four years reproduces to one decimal (the script asserts it); CCC identity holds.

## Calc
Script calc\if-savings.ts, output calc\savings-output.txt, lever table calc\lever-table.md, break tests calc\break-tests.txt.
Asserts: no negative release; interest 0; independent cross-check (days x base / 365 for each single leg and the combined run); payables never release cash; each lever on its own base; printed days reproduce. Each was broken once (neg, rate, dpo, xcheck, basis, days) and failed visibly; the clean run passes. Temp script deleted by exact name; app git status shows only "?? docs/03-agent-scorecard.md" and "?? docs/onboarding/".
Combined figures come from ONE simulate call with three legs moved (not a sum). priceLevers could not rank (no certification window, payment term or vendor term is published, so no cycle position can be built from the audited balances): ranked by cash released once, and said so on pages 10 and 12. priceLevers ran only as a cash cross-check.

## Charts used
1. The cash cycle (page 4): all four legs, DPO labelled "vendor credit, never counted as better when higher", Position and Simulate.
2. Pressure on the cycle, "No clock on these · ranked by size instead" (page 9): four balances ranked by size, no cost.
3. Cash movement, annual FY23 to FY26 (page 6): cash generated from operations, four years on one basis.
4. How these four move together (page 5): operating working capital, cash cycle, cash and bank balances, FY23 to FY26; FY26 cycle scenario points.
5. Process map (page 8): script output verbatim, basis line verbatim, priced on the Published stage only.
Plus the scenario figures "With Crestline · ten days less / thirty days less" (pages 4, 10, 12) with two HOW lines for each lever.
## Charts skipped, and why
None of the five. Skipped inside them: the surplus line of chart 4 (not published); peak funding need on chart 3 (no source states one); any cost on chart 2 (no single borrowing rate); retention, vendor credit and interest are not priced (see lever table). Charts 2 and 3 carry "History only", no scenario mark.

## Figures I added beyond data.md (all re-read from images)
Customer advances 2,123.18 + 4,367.18 = 6,490.36 and 2,243.37 (AR26 p89); advances netted in unbilled revenue 2,256.49 (p92); payables ageing buckets (p89); receivables ageing both years (p92); cash-flow movements 2,309.36, 1,446.14, 3,385.41, 3,468.19, 4,321.53 (AR26 p80, AR25 p81).
## Deviations and corrections
- depth.md says Rs 1.67 Cr of receivables has crossed one year. It does not trace: p92 gives 38.26 + 46.51 + 41.99 = 126.76 lakh = Rs 1.27 Cr. Printed 1.27. depth.md not used for any figure.
- Fixed copy changes: (1) tagline printed as "Know where your money is waiting, and who can release it." (brief) in place of "trapped" on pages 7 and 16 and the cover; (2) page 8: the sentence "Step waits are not public ... This timeline shows the stages, not ... days" is replaced by the stage estimates, their tags and the script's basis line, because the 2026-10-12 orders put estimates on page 8; the fixed sentence "Once connected, Crestline measures them from the dates your ERP records" is dropped with it, and the process map's own two lines carry that meaning; (3) page 8 has no upper cash-flow card; (4) page 14 has no claims and arbitration line; (5) page 15 uses the no-rate interest variant and names both readers in the call line; (6) page 7 lens 04 and 05 add the "Not published" reason lines.
- The word "retention" appears twice, both in fixed product copy (page 7 intro line, and the RETENTION RELEASED stage on page 8 which the catalogue requires, tagged Not public). "Verified" appears once, in the fixed ticket step "04 Verified". No retention figure is printed.
- Name: the Annual Report prints "Innovators Façade Systems Limited" (with the cedilla). The prompt uses that spelling for the legal name (letter address, opening line) and the ASCII "Innovators Facade Systems" for the short name, as the ticket gave both.
- Title: the reader table says "Ms. Priti Sharma" as ruled; the Annual Report p4 prints "Mrs. Priti Sharma". Registered office copied from p4 with the dash after Maharashtra removed ("Sector No.1" kept as printed).
- The prompt's reader-edition and rule sections were rewritten from the template with all drawing rules removed; rules B1 to B5 added.

## Prompt checks (script scratchpad\IF-S23\check.py, planted hits confirmed first)
placeholders 0 | comments 0 | internal references 0 | dashes 0 | point sizes 0 | design words 0 | "design to reproduce" 0 | other prospect names 0 (69 folder names, whole words) | KEPT OUT: 2 hits, both "retention" in fixed copy, justified above | jargon: 1 hit, "04 Verified" in fixed copy | interest figures 0 | every decimal in the prompt traced to the images or calc output (109 distinct decimals reviewed by hand).
