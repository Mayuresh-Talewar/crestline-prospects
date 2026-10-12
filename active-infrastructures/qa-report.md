# Active Infrastructures Limited: self-QA report (steps 2 and 3, 2026-10-09)

Source re-downloaded today from the company site into scratch: `final-active-infrastructures-annual-report-26.pdf` (194 pages, 28.4 MB). Every printed figure was read from the page image, not the text layer.

## 1. Printed figures, image-checked on the page

| Printed | Page seen (printed / PDF) | What the image shows | Recompute |
|---|---|---|---|
| ₹49.9 Cr, 4,993.50 lakh | 132 / 135 and 150 / 153 | Trade receivables, consolidated, 31 Mar 2026: 4,993.50 | 4,993.50 / 100 = 49.935, printed 49.9 |
| ₹96.57 Cr, 9,656.65 lakh | 133 / 136 | Revenue from operations, consolidated, FY26: 9,656.65 | 9,656.65 / 100 = 96.5665, printed 96.57 |
| ₹10.28 Cr | 133 / 136 | Profit for the period 1,028.41 | 10.2841, printed 10.28 |
| ₹19.92 Cr, 1,992.22 lakh | 150 / 153 | Note 7, Inventories, services: 1,992.22 | 19.9222, printed 19.92 |
| ₹125.33 Cr, 4 projects | 11 / 14 | "approximately ₹125.33 crores, spread across 4 active projects" | none |
| ₹92.43 Cr, 50.5% | 11 / 14 | Majority-owned (50.5%) subsidiary, "approximately ₹92.43 Crores", Roads and Highways | none |
| Risk row and mitigation | 12 / 15 | "Delayed payments in public sector contracts" / "Diversified clientele and factoring facilities" | none |
| MD quote | 4 / 7 | "We aim to further digitize our project monitoring, strengthen cash flow controls, ..." signed Nitesh Sanklecha, Managing Director | quote truncated after "controls" |
| NSE Emerge listing | 4 / 7 | "listing on the NSE Emerge platform" | none |
| Signing date 25 May 2026 | 132 / 135 | "Nagpur, 25th May,2026" | none |
| Address, 10th Floor, Nagpur 440001 | cover / PDF 1 | "Riaan Tower, 10th Floor, Mangalwari Road, Sadar Bazar, Nagpur - 440001" | none |
| 188.7 days | calc | 4,993.50 / 9,656.65 x 365 = 188.74 | script, calc/ac-savings-output.txt |
| 178.7, 158.7, ₹2.65 Cr, ₹7.94 Cr, ₹0.2646 Cr | calc | 10 days = 2.6458, 30 days = 7.9373, per day 0.264575 | script plus independent days x per day cross-check |

Notes
- 188.7 comes from the lakh figures. Dividing the rounded 49.9 by the per-day value gives 188.6; the booklet prints only 188.7 and always shows the lakh arithmetic beside it.
- Same basis everywhere: consolidated FY26. No standalone, FY24 or FY25 figure is printed.
- Page 13 body has no digits (script).

## 2. Scans on the assembled prompt (each proved with a planted hit first; output in calc/scan-output.txt)

| Scan | Result |
|---|---|
| Placeholders, comments, "The design to reproduce", dashes (en, em, spaced hyphen), point sizes | 0 hits |
| Internal references | 0 hits. "Verified" appears once as fixed Crestline copy ("04 Verified: Closed only when the number moves.") and is excluded by context |
| Jargon | 0 hits |
| Company names (40 listed, whole words) | 0 hits |
| KEPT OUT terms | 0 hits except the word "auditor" 4 times, all inside fixed Crestline page 11 copy and its headline ("an auditor", "The auditor", "Crestline's auditor"). It means Crestline's own re-measuring check, not the company's statutory auditor. Fixed copy is kept verbatim |
| Interest figures and percent figures | 0 interest figures. Percent: 50.5% (subsidiary share) and 2% (chart tolerance rule) only |
| Numbers traced | 54 distinct number tokens, 0 untraced; each is a data or calc figure, a page number, a date or fixed contact detail |
| Pages | exactly 16, in order |

## 3. Deviations from the fixed product copy

| Where | Fixed copy | Printed | Why |
|---|---|---|---|
| p7 and p16 tagline | "Know where your money is trapped, and who can release it." | "Know where your money is waiting, and who can release it." | Order of this ticket |
| p14 | Claims and arbitration line | Dropped | Order of this ticket |
| p8 | Upper half is pack copy | No upper card. Tiles carry only name and tag. "Do not invent step waits." added | Order of this ticket |
| p8 strip | {STRIP_TOTALS} | "Published totals, consolidated FY26: trade receivables ₹49.9 Cr · revenue from operations ₹96.57 Cr." | Keeps the fixed footer "Totals are from published accounts" true. Removable if the client wants tiles alone |
| Possessive | {COMPANY}'s | "Active Infrastructures'" | The name ends in s |
| p15 sources, no-interest variant | "No interest is priced, because no borrowing rate is published." | "...because no single borrowing rate applies to this cash." | Two overdraft rates are published by two subsidiaries, so the fixed sentence would be false |
| p14 pilot scope | {PILOT_SCOPE}. {SCOPE_CARD} | "One EPC project." with no scope card | Slot filled; optional card left empty |
| p7 lenses | slot figures | Lens 01 and 02 carry figures; 03, 04 and 05 read "Not published" with a reason | Order of this ticket (lens pages with no figure) |
| p11 | tone, finding, ask | Tone "WATCH"; finding, root cause subject, target, question and answer filled from calc values | Slots |

## 4. Deviations from the master prompt template

- Removed: the comment block, the "Paste everything below this line" line, section 2 "The design to reproduce", finish-check 10. Sections renumbered.
- Reworded because they carried internal-reference or jargon words: title line, section 1 (the reference to section 2), rule 1 ("slot" became "field"), rules 4, 5, 6, 7, 9, 10, A1, A3, A7, A8, A9, A11, A14, checks 5, 7, 8, 9, 11 and 12. Rule 5 now defines the ">" convention that the fixed pages use.
- Rule 10 now says there is no logo at all (company or Crestline), as ordered.
- Added B1 to B5: charts start at zero; never compute a figure not given; debtor days always carry their label; pages with no figure stay without one; "Not published" lens lines keep their wording.
- The working file `prompt-head.tmpl` holds the reworded head; `claude-design-master-prompt.md` is rebuilt from it and slots-unified.md by script.

## 5. Open items for Garvis

- CFO name: the AR corporate-information page prints "Mr. Gautam Jain"; the full "Mr. Gautam Ramesh Jain" is on the related-party list (PDF p171). Edition B and the ruling use the full name.
- Committee tables in the AR print the MD as "Chairman-Managing Director"; the signature and the corporate-information list print "Managing Director". The booklet uses "Managing Director".
- Which AR version (original or the revised copy sent after the August corrigendum) the site file is cannot be told. Every printed figure matched the page images of the file downloaded today.
- Process slip: one text replacement in slots-unified.md was done with an inline Python call instead of Edit. Result verified (0 occurrences left); no other file was changed that way.
