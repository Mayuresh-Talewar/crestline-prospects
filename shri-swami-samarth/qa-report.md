# Shri Swami Samarth Engineers: self-QA (2026-10-09)

Raw source re-fetched into scratch from connect.acuite.in (6 Jul 2026 press release and rationale); every printed figure re-traced by script (output in calc/qa-trace-output.txt; the scan script itself holds other companies' names and stays out of this folder).

## Result
- 16 of 16 source figures found in the raw text. Per day 630.37 / 365 = 1.727041; 10 days 17.2704, 30 days 51.8112; printed 1.727, 17.27, 51.81 agree, also when computed from the rounded 1.727.
- Basis: one document, one basis, FY26 and FY25 standalone. No figure from another source or year.
- Calc asserts: 9 of 9 clean; each of the four assert groups failed visibly when broken once (calc/ss-savings-output.txt). Temp script deleted; app repo git status shows only docs/03-agent-scorecard.md and docs/onboarding/.
- Ownership: measure, prepare, review, submit, invoice are the company's; acknowledge, certify, pay are the client's.
- Scans on the prompt (planted hit detected first): 0 placeholders, comments, company names, kept-out terms, interest figures, "design to reproduce", point sizes, long dashes, other agencies, rating grades.

## Deviations from the fixed copy (all deliberate)
1. Tagline "trapped" changed to "waiting" on pages 7 and 16 by client order.
2. Page 14 line "Not a claims or arbitration tracker" dropped by client order.
3. Possessives of the company name rewritten ("the published figures of Shri Swami Samarth Engineers", "Shri Swami Samarth Engineers' ERP") because the full name ends in an s; meaning unchanged. Page 8 label and page 11 headings reworded the same way.
4. Page 8: no upper card; ownership tags use the full company name; a totals strip carries the published receivable days.
5. Page 15 uses the no-rate interest variant; the "Week 1 / Week 2" labels of the old design are not carried.
6. Page 7 lens notes: P2P, Client and Vendor read "Not published" with a reason.
7. Page 11 "Owner" line is the fixed example (7 days), kept as the fixed copy has it.
8. Money is written "crore" in words everywhere so no figure can collide with a kept-out limit figure.

## Residual notes for a grep
- "Verified" appears once in the fixed page 11 step "04 Verified"; "+91" is the fixed telephone number; lens numbers 01 to 05 are fixed.
- The template rules were reworded where they held kept-out or internal words; rule ids renamed C1 to C14 (an "A2" id would collide with a kept-out term); added rules are B1 to B9.
