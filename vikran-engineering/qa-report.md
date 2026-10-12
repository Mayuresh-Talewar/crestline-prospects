# Vikran Engineering: qa-report (VK-S23, 2026-10-12)

## Sources re-downloaded and image-checked
- Annual Report 2025-26: NSE file AR_30853_VIKRAN_2025_2026_U_9647170_31082026113935.pdf (revised copy filed 31 Aug 2026; the original filed 19 Aug 2026 is a different file). Byte-identical to the VK-1 download. Audited standalone accounts, approved 22 May 2026.
- Prospectus (company website, 5,035,681 bytes), restated financial information, examination report 18 Jul 2025. Byte-identical to the VK-1 download.
- Page images rendered and read: AR printed pages 12-13, 20-21 (listing 3 Sep 2025, order book 2,044 to 5,206), 158-159 (balance sheet), 160-161 (P&L, cash flow), 184-187 (Notes 12, 14, ageing), 224-226 (Notes 50, 51 ratios); Prospectus printed pages 301-303, 306, 307, 308.
- Page references in the pack use PRINTED page numbers (the PDF page is about half). data.md cites PDF pages; the pack does not.

## Figures re-derived in the source's own units (calc\vk-savings-output.txt)
FY26 (lakh): revenue 1,24,931; receivables 1,01,307 + 2,926 = 1,04,233; contract assets 86,394; inventories 7,992; materials 48,275 + project 43,541 = 91,816; cash 3,326 + 18,646; cash from operations (43,699); retention 20,488; gross receivable 1,04,710; gross contract assets 86,813.
FY23 to FY25 (million): revenue 5,243.05 / 7,859.48 / 9,158.47; receivables 3,699.07 / 4,638.96 / 6,343.29; contract assets 1,946.36 / 2,891.64 / 4,663.65; inventories 356.56 / 507.23 / 599.39; operating cash flow 55.51 / (664.77) / (1,290.86); materials and project expense as printed on page 307.
All match data.md. Differences: FY25 profit after tax prints 77.82 from the Prospectus (778.19 million) and 77.81 in data.md's table (AR column 7,781 lakh); neither is printed. Inventory turnover check: (materials + project expense) / average inventory = 13.13, which is what AR page 226 prints, so the stock base is verified on the page.
Days: DSO 257.5 / 215.4 / 252.8 / 304.5; contract asset days 135.5 / 134.3 / 185.9 / 252.4; DIO 31.8 (FY26). Sum line 428.9 / 383.2 / 472.6 / 588.7.

## Calc
- Script calc\vk-savings.ts (copy of scripts\_tmp-vk-savings.ts, deleted by exact name; app git status shows only the two untracked docs entries). Uses simulate, leversFor, toTerms and valueOfADay. Payment term 60 was passed in the run; the to-term row (836.96) is raw calc output only and is NOT PRICED in any booklet text (Garvis ruling). Rate 0.
- 32 PASS lines clean (per-run no-negative and interest checks plus the cross-checks, basis, clamp and payables asserts). Each assert broken once (calc\break-tests.txt, BREAK=1 to 8): all fail visibly, exit 1. Clean run exit 0.
- priceLevers not run (needs a financing rate; invents release speeds). Ranked by cash released once.
- Deviation from the launch note: "assert the 30-day cut is clamped" is false for project materials. DIO is 31.77 days and the simulator floor is 0, so 30 days leaves 1.77 days and is NOT clamped (it would release 75.47). The assert records that. The ruling prices 10 days only for stock, so the 30-day stock figure is not printed. A request of 40 days does clamp to 0.
- Garvis ruling: the collection to the 60-day term scenario (836.96) is removed from the prompt, pack, ranking, DO THIS, simulator text and lever table. Collection stays at 10 and 30 days. calck-savings-output.txt is the raw record and still shows it.

## Charts
Used: 1 The cash cycle (p6, no to-term row); 2 Pressure on the cycle, panel "No clock on these · ranked by size instead" (p9); 3 Cash movement, annual (p4); 4 How these four move together (p5); 5 Process map (p8). Skipped: none. Chart 2 cost panel not used (no single working-capital rate).
Judgement calls: chart 2 shows receivables and contract assets before loss allowance (1,047.10 and 868.13) so both sit on the same gross basis. Chart 4's working capital line is receivables plus contract assets plus inventories before payables (so no payables value is derivable); the net operating figure (receivables, contract assets, inventories less payables) is not printed. Cash line is cash and bank balances. Chart 4 shows three lines, as the ruling lists.
Process map: python -I stage_estimate.py --dso 304.5 --cad 252.4 (output saved in scratch; stages 11.6, 16.5, 8.8, 21.5, 11.6, 22.6, 144.9, 14.9 sum 252.4; payment 304.5 Published; whole bill 556.9).

## Deviations from the fixed copy and brief
1. Tagline in the pack is the brief's "Know where your money is waiting, and who can release it." on p7 and p16 (fixed copy says "trapped").
2. p8: the fixed "Step waits are not public" paragraph and footer are replaced because the later order carries Estimate days. The upper card is absent; stages carry owner tag, days and Published or Estimate tag (later order overrides the brief's "name and tag only").
3. p14: the claims and arbitration line is dropped (brief). SCOPE_CARD omitted.
4. Letter dated 12 Oct 2026 (launch and README), not 9 Oct (brief).
5. "Scenario bars start at zero" not written: CONTENT-ONLY rules remove scale and drawing instructions.
6. {ACCOUNTING_SYSTEM} is "ERP" (no filing names one).
7. Order book printed as 5,206 (the AR prints 5,206 and "~5,206"; the deck prints 5,206.0).
8. Vertical tagline label renamed "Tagline" and running head renamed "company label" to keep placement out.
9. Verbatim copies (calc script, output, break tests) were made with cp, not Write.

## Scans on the master prompt (build_check.py, planted hits detected first)
placeholders 0; comments 0; en and em dashes 0; spaced hyphens 0; " pt" 0; "design to reproduce" 0; internal references 1 (fixed copy "04 Verified: Closed only when the number moves", Crestline's own product step, justified); jargon 0; design words 0; interest figures 0; other prospect names 0 (whole words, all folder names, three spellings); cross-company scan of all new files 0.
KEPT OUT terms: 0 hits except "auditor" x3, all in the fixed p11 copy ("A finding gets an owner, a date and an auditor", "Crestline's auditor re-measures", "The auditor · How one finding reads"). That is Crestline's own ticket auditor, not the company's auditors, and the fixed copy must stay verbatim. Needs a Garvis ruling if he wants it reworded.
Number trace (trace.py): 423 numbers, 0 untraced except "2013 and 2014" (Unicode names of the dash characters), "+91" (phone code) and "26" (the tail of "2025-26").
Pages: 16. Every ">" line of the pack is present in the prompt. All chart names exact. 12 "How lines" results.
