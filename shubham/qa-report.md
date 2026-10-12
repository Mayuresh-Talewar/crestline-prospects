# Shubham EPC: QA report (SE-4)

**VERDICT: PASS after fixes.** 3 must-fixes and 3 should-fixes, all applied to problems.md, solutions.md and webapp-fit.md. Calc red-check byte-identical. One scan partial (see Limits).

## Figures re-traced (page images opened, recomputed by script)
| Figure | Source (page image checked) | Verdict |
|---|---|---|
| 154.6 (FY20), 510.05 (FY25) operating income | D3 KFI 19 Jul 2021; D1 KFI 02 Jul 2025, standalone ("Analytical Approach") | CORRECT |
| 3.30x, 27.0% | recomputed 510.05 / 154.6 | CORRECT |
| 1.3974, 13.97, 41.92 | recomputed 510.05 / 365, x10, x30; calc out matches | CORRECT |
| 155 / 200 days; 145 / 201 days | D1 and D2 "Large working capital requirement" | CORRECT |
| 216.6 / 279.5 | recomputed 155 and 200 x 1.3974 | CORRECT, computed label present |
| 165 / 225; 36.4% | D2 and D1 "Rating Action" tables; recomputed | CORRECT |
| 50.6 / 78.1 fund based | D1 annexure re-summed (51 + 14.5 + 11.5 + 1.1) | NEEDS CAVEAT: includes proposed limits (applied) |
| 75% / 80% utilisation | D2: "around 75% over the 12 months through December-2023"; D1: "moderate at 80 percent for the past twelve months ended April 2025" | WRONG wording (fixed, M2) |
| 680 FY26 | SITE INSIGHT FY2025-26 Q4 issue, PDF p5, printed p03: turnover 6,800 million, "(Provisional)", "subject to closure and audit" | NEEDS CAVEAT: turnover, not operating income (fixed, M1) |
| PAT margin 3.3% / 7.04%, gearing 1.06 / 0.60 | D3, D1 KFI tables | CORRECT (KFI table figures) |
| Quote "Growth also brings responsibility..." | SITE INSIGHT FY2026-27 Q1 issue, PDF p13, printed p11, Vinay Badera | CORRECT speaker; title printed "Managing Director & CEO" (fixed, M3) |
| ERP move | FY2024-25 Q4 issue PDF p1 (Archana Badera, Director); FY2025-26 Q1 issue PDF p14 (Raju Jadhav) | "single ERP" is the later issue's wording (fixed, S3) |

Number trace: `python -I trace.py <scratch> <shubham> problems.md solutions.md webapp-fit.md` (whole-number match against the three CRISIL texts and both calc outputs, newsletter figures listed from the page images). Planted 777.77 caught. Result: UNTRACED 0.

## Must-fix (all applied)
- **M1 problems.md P1, basis mixing.** "puts FY26 at Rs 680 cr" sat after the CRISIL operating income series. The newsletter figure is turnover. Now labelled turnover, the company's measure, never on the same bars; table cites the issue and chart.
- **M2 problems.md story line and P3, utilisation wording.** "bank limits about 80% used" put a hedge CRISIL did not use and dropped the window; "Limit use rose from about 75% to 80%" compared readings taken on different limits (each window closes before the next enhancement), and read beside Rs 225 cr it implied 80% of Rs 225 cr. Now CRISIL's own words, with their windows, and a line that neither is a share of the larger limit.
- **M3 newsletter cites.** N1 and N5 cited by internal ID only. Now issue name plus PDF and printed page. Quote title now as that page prints it.

## Should-fix (all applied)
- **S1 problems.md P1.** "one day of gross current assets holds Rs 1.3974 cr" claimed what CRISIL does not state. Now "At FY25 operating income, one day is worth Rs 1.3974 cr."
- **S2 solutions.md P2.** The cash cycle diagram draws spans; the rupees per leg are the simulator's. Now "the cash cycle diagram and its simulator".
- **S3 webapp-fit.md pilot.** Accounting integration is the Jan to Mar 2025 issue (still phasing out the old software then); "single ERP" is the FY2025-26 Q1 issue. Both cited, no product named.

## Confirmed holding
No interest printed (no rate disclosed). Rows never added. Rule 13 marks use calc values only (13.97, 41.92; 145, 125, 190, 170 days). A12: no invented chart values (band drawn as range, no yearly split). A13: every problem chart has a dashed hollow mark with "Scenario, not a forecast". Payables never a saving (calc vendor leg 0.00). Ownership: measure, prepare, review, submit, invoice ours; acknowledge, certify, pay the client's, in all three files. Screens true today: Ask Crestline (both scopes), Overview, Working Capital, P2P, Vendors (under P2P), O2C, Client (under O2C), Alerts & Tickets all in lib/navigation.ts PROJECT_SECTIONS and app routes; cash movement peak, paid basis, simulator floors, vendor due dates match CLAUDE.md. No ERP product name. Every KEPT OUT item absent. FY27 projection never an input.

## Calc red-check
Copy written to the app's `scripts/_tmp-shubham-savings.ts` (cmp: identical to calc/shubham-savings.ts), run with `npx tsx`, exit 0, output `cmp` byte-identical to calc/shubham-savings.out.txt. Copy deleted by exact name; app git status shows only the 2 pre-existing entries.

## Final scans (after last edit, each with a planted hit caught)
Dashes 0; company names 0 (Vipul Patel allowed); KEPT OUT terms 0; numbers untraced 0.

## Limits
- The 22-name list was not in this folder or the playbook. The names scan used every company the playbook names plus about 25 Indian EPC peers. Garvis to re-run with the exact 22.
- README's SE-3 story line still says "about 80% used"; that is Garvis's text and was not edited.

## Applied log
| File | Change |
|---|---|
| problems.md l3 | utilisation in CRISIL's words and window |
| problems.md l11 | FY26 figure labelled turnover, not on CRISIL bars |
| problems.md l13 | value of a day wording; quote title as printed |
| problems.md tables P1 | issue and page for N1 and N5; title note |
| problems.md l51 | fund based caveat; utilisation in CRISIL's words, no "rose" |
| problems.md tables P3 | utilisation rows quote CRISIL with windows |
| solutions.md P2 | "cash cycle diagram and its simulator" |
| webapp-fit.md pilot | ERP cite split across the two issues |
