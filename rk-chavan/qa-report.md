# R K Chavan Infrastructure: self-QA (RK-2 and RK-3), 9 Oct 2026

Source re-traced: CRISIL rationale 30 Jun 2026, text extracted from src/d/crisil_jun2026.html to calc/crisil-text-extract.txt. Scripts: calc/qa-trace.py, calc/prompt-scan.py. Output: calc/prompt-scan-output.txt. A planted miss (999.99) was confirmed absent, and every scan fired on its own planted hit.

## Printed figures against CRISIL (all FOUND)
| Printed | CRISIL wording matched |
|---|---|
| 524.35, 457.65 | Key Financial Indicators table, March 2025 and 2024 columns |
| 187 days, about 250 days | "increased from 187 days as on March 31, 2025", "around 250 days as on March 31, 2026" |
| 100 to 140, 70 to 90 days | "in the range of 100-140 days", "in the range of 70-90 days" |
| about 700, 34% | "around Rs. 700 crores in fiscal 2026 which had grown at 34%" (labelled CRISIL's estimate; never a calc input) |
| 2,595, 24 to 36 months | "Rs 2595 crores as of March 2026", "next 24-36 months" |
| 347, 250 (limits) | "Rs.347 Crore (Enhanced from Rs.250 Crore)" |
| BBB+ stable | "Crisil BBB+ / Stable / Crisil A2" |
| Q4 and retention reasons | "high revenue booking in Q4 and retenetion money" (source spelling corrected only where printed in plain words) |
| Two agency quotes (p13) | word for word, with the closing full stop |
| NHAI, PWD, MORTH; Pune | "NHAI, PWD, MORTH etc."; "Based in Pune, Maharashtra" |

## Recomputed by script (exact fractions)
1 day = 524.35 / 365 = 1.4366 -> 1.44. 10 days = 14.3658 -> 14.37. 30 days = 43.0973 -> 43.10. 700 / 524 = 33.59% rounds to CRISIL's 34. Matches the calc run (exit 0).

## Calc asserts, each broken once and confirmed to fail, then run clean
negative release, interest zero, independent exact cross-check, payables release nothing, basis match. All five failed when broken (exit 1) and the clean run passed (calc/rk-savings-output.txt). Temp script deleted by exact name; app repo git status shows only the two pre-existing entries.

## Basis match
Per-day uses FY25 operating income (524.35, the latest full year CRISIL prints) over 365. Days (187, 250) are CRISIL's gross current asset days, one basis, one source. The FY26 estimate (700) is never an input. A day at FY25 income is conservative against FY26. No split of the 250 days exists, so the booklet moves the 250 as one number and says so in the key.

## Ownership
Company's: measure, check, prepare, review, submit, invoice. Client's: acknowledge, certify, pay, release retention. Same wording on pages 8, 9 and 10.

## Prompt scans (claude-design-master-prompt.md): all 0
placeholders, comments, company names (27 listed words), internal references, dashes (em, en, spaced hyphen, double hyphen, digit hyphen digit), KEPT OUT terms, interest figures, "design to reproduce". Number trace: 344 number tokens, 50 unique, 0 untraced. Template rules reworded where they carried a banned word or an interest line: A6 (no rate published), rule 6 (status words), rule 7 (an example word). Section 2 and its finish check dropped, finish checks renumbered.

## Open points for Garvis
1. Names and titles come from the company site (footer 2023, so possibly stale); the CFO-style title is "Head, Finance" as the site prints it.
2. Logo downloaded from the site upload path only (assets/RKC_logo.png, identical to src/d copy). It is white on transparent, so the prompt says to set it on navy. Re-confirm with the company before print, as RK-1 advised.
3. Address is city only (Pune, Maharashtra, from the rationale). No postal address is printed.
4. The old line "Interest cover conflict", lenders, past rating history and the owner's son's name are absent from every page.
5. Page 13 prints two CRISIL sentences, credited to the agency. One comes from its upward factors; Garvis may drop it if the agency's words should not carry past the reader.
