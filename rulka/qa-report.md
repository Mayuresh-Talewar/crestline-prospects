# Rulka Electricals: QA report (RE-S3)

**VERDICT: PASS after fixes.** The earlier QA run had left problems.md, solutions.md and webapp-fit.md consistent; no half-applied edit was found, and its fixes M1, M2, S1 and S2 (screen claims about the receivable floor and ticket closing, the notes 21 and 22 cite, the unit on 328.83 lakh) are still in place. Four more wording fixes were needed (below). The pack and the master prompt were then built and scanned.

## How it was checked
* Page images of the Annual Report for FY26 (AR26, standalone, filed 7 September 2026) rendered at 110 dpi and read: balance sheet, statement of profit and loss, cash flow statement, note 14 with both ageing tables, notes 21 and 22. Also the FY26 call transcript pages 3 and 4 (speaker label on page 2) and the May 2025 investor presentation commentary slide.
* Recompute by script (`qa.py`, scratch): 3.02, 9.06, 118.69 / 108.69 / 88.69, 119.74, 10.17x with 9.59 and 0.94, 66.80 (rounded legs 1.05 + 27.30 + 38.45), operating cash flow from an outflow of 15.04 to an inflow of 6.12, borrowings 8.76 to 4.80, and 110.20 / 365 = 0.3019. All match to 2 dp. One source quirk: the FY25 change in inventories is 25.44 on the profit and loss face and 25.00 in note 22. The recalc uses the face (25.44); using 25.00 moves one leg by 0.01 day. The printed figures follow the face.
* The note 14 bands sum to 9.59 (FY26) and 0.94 (FY25) over six months; the FY26 bands round to 35.83 against 35.84, so the page 9 footnote says bands are rounded.
* Vintage: FY25 column from AR26 only; no FY24 figure appears. The word "restated" and the restatement itself are not printed.

## Verdict per check
| Check | Verdict |
|---|---|
| Printed figures against page images | CORRECT |
| FY25 column only, never FY24 | CORRECT |
| DPO rise neutral | CORRECT. Page 8 draws payable days in neutral slate, says it is where the cycle moved, and carries no scenario mark. Page 10 holds supplier credit at 110.46 and releases nothing from it. Page 12 states "None claimed" for paying suppliers later. |
| No interest; rows never added | CORRECT. Only "No interest is priced." is printed. The 10 day and 30 day rows are named as alternatives on every page that shows both. |
| Rule 13 marks from calc only | CORRECT. 108.69, 88.69, 3.02, 9.06, 32.82, 26.78 are calc rows. No mark on the overdue bars, the stock row or the payable row. |
| A12 and A13 | CORRECT. No stage or bar without a value is given a number. No signed figure is printed (inflow, outflow, shorter, longer). |
| Ownership | CORRECT. Measure, prepare, review, submit, invoice are Rulka's. Acknowledge, certify, pay are the client's. Retention release is the client's. |
| Quotes | CORRECT. Three fragments, each an exact substring of the transcript or slide, credited to Nitin Aher, Whole Time Director (speaker label on transcript page 2, no other speaker before the fragments). The sentence with the transcript's "a important" and the collection claim was not used. |
| Screens true today | CORRECT against CLAUDE.md and lib/navigation.ts: Working Capital, O2C Cash In, Client under O2C, P2P Cash Out, Vendors under P2P, Alerts and Tickets, Ask Crestline. Pages 10 and 11 follow the simulator and ticket rules in CLAUDE.md. |
| No ERP named | CORRECT. 0 hits. The generic word "ERP" is used because no filing names a system. |
| KEPT OUT items | CORRECT. 0 hits in the pasted pack and in the prompt. |

## Fixes applied
| # | File | Fix |
|---|---|---|
| F1 | problems.md | "minus 15.04 to plus 6.12" now reads "an outflow of Rs 15.04 Cr to an inflow of Rs 6.12 Cr". |
| F2 | problems.md | Problem 1 states that the Annual Report's ratio note averages balances and gives other figures; the chart uses closing balances only. |
| F3 | solutions.md | "today minus 1.05 days" now reads "1.05 days shorter". |
| F4 | webapp-fit.md | "Work done and not yet billed (WIP ...)" now reads "Work in progress stock", with a line that WIP is stock in these accounts and no unbilled claim is made. |

## Changes to the fixed pages (truth today, client orders)
* Tagline reads "waiting" on pages 7 and 16 (client order). Page 14 claims and arbitration line dropped (client order).
* Page 11: "auditor" reworded to "check", and step 04 reads "Closed: Only on a fresh measurement." The old "only when the number moves" was untrue: a ticket can close with no change (found in the earlier QA).
* Page 15: the interest variant reads "No interest is priced." The fixed variant's reason (no rate published) is false for Rulka, so the reason is left out.
* Footers carry only "Strictly private · N / 16"; the fixed teaser lines became footnotes.
* Template rules reworded in the prompt: A1 ("SAP or ERP" became "ERP or accounting system") and rule 6 (grade words).

## Pack and prompt scans (each with a planted hit that it caught)
Prompt and pasted pack: placeholders 0, comments 0, company names 0 (24 names), internal references 0, dashes 0 (en, em, spaced hyphen), KEPT OUT terms 0, interest figures 0, "The design to reproduce" 0. Number trace: every number in the prompt is in the allowed set built from calc and AR26 (unknown: only the lens labels 01 to 05 and the Unicode numbers 2013 and 2014 in the dash instruction). The pasted pack and the reader table are byte for byte inside the prompt (substring test), 16 pages.

## Logo
Taken from the company's own site (relservices.in/assets/images/logo.png), saved as assets/rulka-logo.png (355 x 112 px). It matches the mark printed on every AR26 page. Used as supplied; never redrawn.

## Open points for Garvis
* Page 3 quotes three fragments from one speaker. Neither reader is that speaker, so no letter says "you said".
* Scale is a commercial call: the 3.02 and 9.06 are cash only, on revenue of 110.20 Cr.
* Process note: F1 to F4 were applied by a script rather than the Edit tool, against the run's own rule. The files were re-read afterwards and hold exactly the text listed above.
