# QA report: C S Construction India (CS-S23, 2026-10-09)

## Source re-fetch (raw, in session scratch CS-S23)
- CRISIL rationale 8 Aug 2024 (crisil.html): table "Operating income Rs.Crore 186.23 103.10; Reported PAT 10.17 4.03"; text "Rs 319 crore in fiscal 2024 from Rs 103 crore in fiscal 2022"; "remain high due to requirement for maintaining various deposits with customers for bidding, security and retention"; "With increase in revenues, the working capital requirements shall increase".
- Company profile PDF p6 (page image read): "total order book of 18089 Mn as on 31st March 2025 and Currently 38 Projects are under execution" = 1,808.9 Cr.
- Site pages read 9 Oct 2026: /cmd-desk/ prints "Managing Director | CSCPL"; /overview/ prints "Managing Director"; /management/ prints Ms Shilpa Nagral "Chief Financial Officer" (joined Jan 2024). Both pages that name him say Managing Director, so the title is "Managing Director" (data.md recorded "Chief Managing Director" from an earlier read; the profile PDF still prints it, but the ruling goes by the site pages and one page says Managing Director). Registered office K-32, Bharat Nagar, Amravati Road, Nagpur 440033 printed on every site page footer.

## Figure trace (every printed number)
| Printed | Source / script |
|---|---|
| 103.10, 186.23 | CRISIL table |
| about 319 | CRISIL text, "about" kept per ruling |
| 4.03, 10.17 | CRISIL table |
| 1,808.9, 38, 31 Mar 2025 | Profile p6 |
| 0.5102, 5.10, 15.31 | 186.23/365 = 0.510219; x10 = 5.1022; x30 = 15.3066 (calc output; scan.py recomputes) |
| 1983 | /cmd-desk/ and profile |
| 365, FY labels, page numbers, 14 days, 7 days (example owner), phone, 440033, K-32 | fixed copy or address |

No days figure is printed or implied; no today days bar; no interest. Basis: one basis (FY23 operating income). The order book appears once beside CRISIL figures only as separate rows, never in a ratio.

## Scans on claude-design-master-prompt.md (scan.py, planted hit test passed first)
Placeholders 0, comments 0, internal references 0, dashes 0 (em/en/ " - " / "--"), " pt" 0, other prospect names 0, KEPT OUT terms 0 (BBB, CRISIL rating, Karnataka Bank, 30 Cr, 64%, interest coverage, 3.74, 5.39, top four, 46%, 388.06, 1,251, A3+, Tally, doubled, Delhi, 810), "design to reproduce" 0. Jargon: only "Verified:" in the fixed ticket step "04 Verified" (fixed product copy, kept verbatim). "2%" appears twice in the chart accuracy rule (tolerance, not a figure).

## Deviations from the fixed copy
- Tagline "trapped" changed to "waiting" on p7 and p16 per the brief.
- p14: the claims and arbitration line dropped per the brief.
- p8: no upper card; footer shortened to "Strictly private · 8 / 16 · Illustrative stages." per the launch message; STRIP_TOTALS dropped.
- p7 lens figures read "Not published" with reasons; p15 uses the no-interest variant.
- {SCOPE_CARD} = "Domestic projects in rupees, one entity."

## Template edits (prompt)
Section 2 (the design) and finish-check 10 stripped; internal words reworded in rules 1, 3 to 7, 10 and checks 7, 9, 11; added B1 to B6; the reader table is printed as lines, not a table.

## Open point for Garvis
Address printed as the full registered office (README allows it when the company prints it); the launch message said "Nagpur". Trim to "Nagpur" in the reader table if preferred. The cover FY24 "about 319" is CRISIL's text figure.

## Deepen 2026-10-10
Backup: claude-design-master-prompt.pre-deepen.bak. Calc, letter, editions, headlines, 10 and 30-day figures untouched.

| New printed figure | Page | Source, locator, date | Check |
|---|---|---|---|
| 90+ completed projects | 3 | Profile p3 "From CMD Desk" and site /cmd-desk/, 10 Oct 2026 | Page image read: "CSCIPL has completed 90+ projects in the last four decades" |
| Client names (Railways zones, IRCON, DFCCIL, RITES, MRIDC, state PWDs, MPPTCL, Government of Karnataka) | 4, 7 | Profile p13 "Our Clientel", site /clients/, 10 Oct 2026 | Page image read; logos counted. Site shows a shorter set, profile used |
| 27 ongoing projects: 10 state PWD, 10 Railways and railway bodies, 5 MRIDCL, 2 other | 6 | Site /ongoing-projects/, read 10 Oct 2026 | Raw HTML text parsed by script (27 rows); counts by client name by script; sums 10+10+5+2=27. Conflict with 38 in profile logged, never paired (rule B7). One possible duplicate row (Pune to Miraj, 65.325 twice) does not change the PWD, Railways or other counts; it would make MRIDCL 4 and the total 26, so the site list is printed as it stands |
| Finance and Accounts team of 8; Procurement team of 7 | 7, 9 | Profile p4 "Team of 230+ Professionals", 10 Oct 2026 | Page image read |
| Plant and machinery bought project by project | 7 | Profile p5, site /overview/, 10 Oct 2026 | Text and site raw HTML |

Checks run by script (check.py, planted hits caught first: KEPT, name, dash and design words all fired): every backup line is still present unchanged except seven lines deliberately extended (page 3 footnote, page 4 footnote, page 6 footnote, page 7 client and vendor lens lines, page 7 footnote, page 15 sources); every number on an added line is in data.md or is fixed copy (phone, lens label); 0 KEPT OUT terms, 0 other-prospect names, 0 dashes, 0 design words. B7 added to the prompt. NOT FOUND stays: client mix percentage, credit period, debtor and creditor days, ageing, retention and deposit amounts, MSME, vendor terms and concentration, subcontract share, JV share, operating cash flow, WC cycle as the company states it, commercial head, any 2025 rating action.
