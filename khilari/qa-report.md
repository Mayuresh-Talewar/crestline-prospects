# Khilari Infrastructure: QA report (KH-4)

Scope: problems.md, solutions.md, webapp-fit.md and calc/ checked against data.md, depth.md and the CARE page images in src/r. Protocol: qa-reviewer.md "Financial booklet verification protocol". Lessons applied: leave the repo exactly as found; report client-only steps separately (none here).

## Verdict
PASS AFTER FIXES. Eight must-fixes found and applied; two should-fixes left for KH-5 (calc wording, not printed). Every printed number traces (0 untraced); the calc re-runs byte-identical; no KEPT OUT term, other company name or dash is left.

## 1. Page images re-read
| Figure | Page image | Vintage and label | Verdict |
|---|---|---|---|
| FY23 collection 26, inventory 11, creditors 53, GCA 167, cycle "negative" | CARE 04 Oct 2024 p3, Liquidity | FY23 "(A)" Audited in that page's table | CORRECT |
| FY24 collection 33, inventory 17, creditors 42, cycle 8, GCA 220 | CARE 06 Oct 2025 p3, Liquidity | FY24 "(A)" Audited | CORRECT |
| FY25 collection 51, inventory 32, creditors 39, cycle 44, GCA 266 | CARE 06 Oct 2025 p3 | FY25 "(UA)" Unaudited | CORRECT, labelled unaudited everywhere |
| TOI FY25 Rs 639.86 crore | CARE 06 Oct 2025 p3 table | UA | CORRECT |
| 91.40% (PY 71.96%), limits Rs 44.90 crore, 12 months to Jun 2025 | CARE 06 Oct 2025 p3 | max average, like for like | CORRECT; "over the same year" was loose (fixed) |
| 71.96% as "average of maximum utilisation", 12 months to Aug 2024 | CARE 04 Oct 2024 p3 | prior year basis | CORRECT; the plain average beside it is never used |
| Order book Rs 1,878.72 crore, 2.93x, government entities incl. urban local bodies, nine states | CARE 06 Oct 2025 p2 | as printed | CORRECT (2.93x is CARE's print; 1,878.72 / 639.86 is 2.936) |
| Unbilled revenue Rs 71 crore FY25 | CARE 06 Oct 2025 p2, scale paragraph | as printed | NEEDS CAVEAT: CARE gives it as the driver of revenue growth early in FY26; now paraphrased that way |

## 2. Recomputed by script (scratchpad kh4_check.py)
Value of a day 639.86 / 365 = 1.753; 10 days 17.53; 30 days 52.59; 18 days (51 to 33) 31.55; 15 days (32 to 17) 26.30; FY23 cycle 11 + 26 less 53 is below zero (16 under); FY24 8 and FY25 44 reproduce CARE; 36 extra days = 15 inventory + 18 collection + 3 creditor fall. All OK.

## 3. CARE explanations
- Collection: "due to increase in security deposit kept by customers against order execution" (06 Oct 2025 p3). Quoted exactly. CORRECT.
- Inventory: CARE says the period rose 17 to 32 days "due to increase in amount of unbilled revenue" (06 Oct 2025 p3). CARE does NOT say the inventory period is, or is mostly, unbilled work. The old problem 2 did. WRONG, rewritten (must-fix 1).

## Must-fixes (line numbers are the pre-fix files)
1. problems.md:28,35. Title "Work done, not yet billed" and "the 'inventory' line is mostly work already executed in the field and not yet turned into a bill" relabel inventory as unbilled. New title: "The inventory period nearly doubled, and CARE ties the rise to unbilled revenue". New text: the period rose "due to increase in amount of unbilled revenue"; "CARE gives this as the reason for the rise; it does not say how much of the inventory period is unbilled work." solutions.md:32 chart label changed to "inventory period (CARE ties the FY25 rise to unbilled revenue)".
2. problems.md:47,51 and solutions.md:43. FY23 cycle printed as a signed number (ruling d). Now "below zero (CARE: "negative")"; on the chart FY23 has no bar and no number, only the label "below zero (CARE: negative)" at the zero line.
3. problems.md:3,44,53. "On the client's side" filed the inventory wait as the client's; measuring, preparing, reviewing and submitting are ours. And "the extra 36 days came from the two client side waits" is 33 of 36. Now: "the inventory period and the collection period rose, and supplier credit did not"; title "The cycle grew on the inventory and collection side, not the supplier side"; "Of the 36 extra days, 33 came from the inventory period (up 15) and the collection period (up 18), and 3 from creditor days falling."
4. problems.md:37 "only certification is the department's" and webapp-fit.md:10. Now "measuring, preparing, reviewing and submitting a bill are its own acts; acknowledging and certifying it are the department's"; webapp-fit: "Acknowledging, certifying and paying are the client's acts; measuring, preparing, reviewing, submitting and invoicing are the company's."
5. solutions.md:19 to 24 (ruling a). Row a was listed before row c and row b had no bound label. Now: lead mark row c (33 days, Rs 31.55 crore), standard step row a (41 days, Rs 17.53 crore), outer bound row b labelled "below any year shown" (21 days, Rs 52.59 crore). Same order in Solution 3.
6. problems.md:20 (ruling b). Rupee value of a collection day carried no basis note. Added: "CARE does not state the basis of its collection period, so valuing a day at income per day is our approximation, not CARE's." solutions.md rules line: "Cash released once, valued at income per day. CARE does not state the basis of its collection or inventory period, so these figures are approximate."
7. problems.md:37 "new projects in their early phase carry more of this, and CARE says as much (p2)". CARE p2 says working capital use rises in early execution, not unbilled work. Now quoted: "in the initial phases of execution" (06 Oct 2025 p2).
8. solutions.md:52 printed the internal "row d" reference (ruling c). Removed; the gross current asset rupee figure appears in no reviewed file (scan below).

## Should-fixes
1. problems.md:53 "Over the same year" for the 12 months to June 2025. APPLIED: "In the 12 months to June 2025 ... about 91.40%, against 71.96% the year before".
2. calc/notes.md ("CARE's inventory period carries unbilled revenue ... print it as unbilled work") and the calc labels for rows e and f ("unbilled work"; engine slot "Stock on site") carry the same overreach as must-fix 1. NOT edited: the calc must stay byte-identical and notes.md is outside this ticket's edit list. KH-5 must print rows e and f as "inventory period", never copy the calc label.
3. KH-5: the pack takes the 2.93x and Rs 71 crore wording from problems.md only.

## Rules held (checked after the last edit)
- No interest: rate 0% in the calc; no interest figure printed. OK.
- No ERP named: only "their ERP or Tally". OK.
- Payables never a saving: row p releases Rs 0.00 crore; text says so. OK.
- Rows never added: every caption says so. OK.
- Rule 13 marks: every mark value (33, 41, 21, 17, 22, 26, 29, 34, 14 days; 31.55, 17.53, 52.59, 26.30 crore) is a calc output line. OK.
- KEPT OUT absent, incl. the trigger and downgrade wording (scan: 0 hits).
- Screens true today: Ask Crestline, Projects, Portfolio Overview, O2C, Client, Clients, Working Capital, P2P, Vendors, Alerts & Tickets, Performance, Settings all in app lib/navigation.ts (lines 78 to 135, 193 to 211, 257); no process map (removed per app CLAUDE.md, listed as never-claim 9); the retention lever exists (lib/insights/levers.ts:115).
- Ownership: fixed per must-fixes 3 and 4.

## Calc red-check
Copied calc/kh-savings.ts to the app's scripts/_tmp-khilari-savings.ts, ran `npx tsx`, exit 0, output identical by `cmp` (sha256 ff532e36...bddb20 both). Deleted that file by exact name. git status in porcelain mode, before and after: `?? docs/03-agent-scorecard.md` and `?? docs/onboarding/` only.

## Final scans (after the last edit)
- Number trace (kh4_check.py; numbers matched only where not inside another number or a word; planted 987.65 rejected): files 3, untraced 0. Corpus: both CARE text layers (key figures image-checked above), the two calc outputs, the recomputed set.
- KEPT OUT terms (the sensitive-file items, the trigger, downgrade wording, the dossier revenue, the signed FY23 cycle, the GCA rupee figure; planted hit found): files 3, hits 0.
- Dashes and the fifteen other company names (khilari/scripts/kh-scan.py, planted hits found, minimum file size 1500 bytes): see the applied log.

## Applied log
- problems.md: must-fixes 1, 2, 3, 4, 6, 7; should-fix 1.
- solutions.md: must-fixes 1, 2, 5, 6, 8; Solution 2 now also says Crestline separates unbilled work from material on site and asks for stock receipts and issues to do it.
- webapp-fit.md: must-fix 4; never-claim 5 reworded; never-claims 14 (inventory is not unbilled) and 15 (FY23 cycle in words) added.
- Scans after the last edit: dash 0 hits, names 0 hits, trace 0 untraced, KEPT OUT 0 hits (files: problems.md, solutions.md, webapp-fit.md, qa-report.md for dash and names).

Self-review: 4/5 | biggest mistake: my trace corpus accepts any number 1 to 15 as traced (list numbering), so a wrong small day count would pass the script and was checked by eye instead | rule from now on: trace small integers against the page, never whitelist a range.
