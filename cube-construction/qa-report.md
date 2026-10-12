# QA report CB-S23

## Traces (CRISIL rationale 2 May 2025 re-fetched raw 2026-10-12, 21,307 chars of text; ccel.in re-fetched)
- 520.79, 712.18: Key indicators table. 1,522 Cr at 31 Dec 2024, 18 to 24 months, 2.1 times FY24: Business risk. FY25 800 to 810 Cr: Detailed rationale (printed once on p3 as an estimate). GCA 260 to 270, inventory about 115, receivables nearly 130, realised 130 to 150, retention sentence, March booking: "Large working capital requirement". Price escalation: Business risk.
- Address: ccel.in footer text (1, Chandramani Nagar ... Subhanpura, Vadodara 390 023). It is HTML text; no image rendering was done, only a text read. Clients: ISRO, DRDO, NHSRCL, Adani, Allcargo, Bombardier on ccel.in/clients; Civil Hospital and Welspun on the home page.
- Recomputed: 712.18/365 = 1.951178; x10 = 19.51; x30 = 58.54; 712.18/520.79 - 1 = 36.75%, printed 37% ; 4.3+6.1+3.2+7.9+4.3+8.3+53.4+5.5 = 93.0; 93.0+130 = 223.0.
- Calc: asserts (no negative release, interest 0, cross-check, payables never release, basis) each broken once and failed visibly (BREAK=1..5); clean run in calc\. priceLevers not run: only one priced base, nothing to rank. Temp script deleted; app git status shows only the two untracked docs.

## Deviations from fixed copy / brief
1. p14: fixed line "Not a margin or cost-control tool..." omitted ("margin" is KEPT OUT); claims/arbitration line dropped per brief.
2. Tagline "waiting" (brief) instead of "trapped" (fixed pages) on p7 and p16.
3. p8: stage days printed as estimates (later APP CHARTS / PROCESS MAP orders override fixed rule 3). Payment received tagged "Estimate (CRISIL, about 130 days, FY25)", not Published; script basis line reworded for that reason. Retention released stays "Not public". Tax invoice raised carries no number (its wait is the payment leg).
4. p7, p15: ERP is named "ERP"; pilot scope "one to three building projects".
5. Launch KEPT OUT overrides README: Gujarat 84% share not printed.
6. p11 fixed owner/finding slots filled with an estimate finding; no HOW lines beside the p11 example answer (fixed copy kept verbatim).
7. P2P/Vendor lens figures "Not published": no vendor data public.

## Charts
Used: (5) Process map; Scenario bars. Skipped: 1 (estimates on no stated basis), 2 (no rate, no balances), 3 (no cash flow statement), 4 (single year, no cash line).

## Prompt checks (script): 0 placeholders, comments, dashes (en/em), " - ", point sizes, design words, other prospect folder names, KEPT OUT terms, "The design to reproduce"; interest appears only as "No interest is priced". Every number traced above.
