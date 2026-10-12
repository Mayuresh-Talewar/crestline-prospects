# Steps 2 and 3 brief: build, self-QA, pack and master prompt (Garvis pipeline)

The launch message names COMPANY, LEGAL NAME, FOLDER, TICKET, the calc inputs (PER DAY, DAYS, LEG, or NONE for a no-figure edition) and any extra KEPT OUT terms. The FOLDER\README.md rulings (the latest "Garvis rulings X-2") are BINDING and override this brief.

## Setup
- FIRST invoke Skill "ponytail:ponytail". It never overrides accuracy.
- Work ONLY in crestline-prospects\FOLDER\. Use exact-path reads only: never ls above it, and never open other company folders or crestline-gtm.
- Edit only with Write/Edit, for every file change. Write scripts to files in UTF-8. With python -I, write output to files and Read them.
- Scratch goes ONLY in the session scratchpad\TICKET\. Create it and check it is empty.
- FIRST re-download the primary source(s) named in data.md into scratch, so that every printed figure can be re-traced against the raw text or page image.
- Every scan gets a planted hit, and check what each hit really is before patching.

## Read first (exact paths under crestline-prospects\)
- PLAYBOOK.md
- _shared\master-design\TEMPLATE-SLOTS.md
- _shared\master-design\FIXED-PAGES.md (no-rate variant; keep all fixed product copy verbatim, including "02 Owner told")
- _shared\master-design\MASTER-PROMPT-TEMPLATE.md
- _shared\crestline-webapp-context.md
- the app's CLAUDE.md and lib\navigation.ts (read-only)
- FOLDER\README.md, data.md, depth.md
- sensitive-garvis.md, only to know what to avoid

## 1. Calc (skip entirely if the calc inputs are NONE)
- Write scripts\_tmp-<ticket>-savings.ts in the app repo (C:\Users\asus\Desktop\process-automation-crestline) with Write. Use simulate from @/lib/finance/cycle-simulation and valueOfADay from @/lib/finance/working-capital-cycle. Read the clamp bounds; pass no terms.
- Steps of 10 and 30 days on the named LEG. No interest unless the README rules a disclosed rate.
- Asserts:
  - no negative release
  - interest = 0 (or capped at the disclosed rate)
  - an independent cross-check (days × per day vs simulate)
  - payables never release cash
  - the basis matches
- Break each assert once and confirm it fails VISIBLY, then run it clean.
- Copy the script and its FULL output to FOLDER\calc\.
- Delete the temp file by its exact name. App git status must show only "?? docs/03-agent-scorecard.md" and "?? docs/onboarding/".

## 2. Docs
- webapp-fit.md
- problems.md: 2 or 3 problems on the ruled story, respect first, every figure dated and cited.
- solutions.md: screens true today; rule 13 marks from calc values only.
- Ownership: measure, prepare, review, submit and invoice are ours; acknowledge, certify and pay are the client's.
- qa-report.md: re-trace every figure against the raw source, recompute by script, and list every deviation from the fixed copy.

## 3. slots-unified.md: ONE 16-page pack
- Order: internal notes, then "## Reader table" (the editions as ruled), then "## Keys" to Page 16 with the fixed pages in full, then Checks.
- Editions change only the cover reader lines, the p2 TO block and salutation, and the letter.
- Tagline: "Know where your money is waiting, and who can release it."
- Drop the p14 claims/arbitration line.
- Cover hero: the 10-day figure from the calc, with the arithmetic and "Scenario, not a forecast". For a no-figure edition, the hero is a sentence.
- p8: NO upper card. Each stage tile carries ONLY its name and tag. (The client accepts labelled example days if Claude Design adds them; never write any into the prompt.)
- p13: text only. No table and no computed figures. Add "No numbers on this page."
- Every chart page: "Never compute a figure that is not given here."
- Lens pages with no figure read "Not published" with a reason.
- Scenario bars start at zero.
- No rating grade unless the README allows it.
- No signed numbers. No dashes as punctuation. No point sizes or design specs.
- Logo: as ruled, copied to assets\.
- Date the letter 9 Oct 2026.

## 4. Assemble FOLDER\claude-design-master-prompt.md from the template, CONTENT-ONLY
- Strip comments, "## 2. The design to reproduce" and finish-check 10.
- Fill {COMPANY}, {COMPANY_LEGAL_NAME}, {SENDER}, {READERS_TABLE} and the logo line.
- {PACK} = from Keys to before Checks.
- Reword template rules containing KEPT OUT, internal-reference or jargon words ("slot", "headline table", "Template fallback"). Never reword the fixed product copy. Label any added rules B1, B2 and so on.

## Checks on the prompt, by script
- 0 placeholders, 0 comments, 0 internal references, 0 jargon, 0 dashes, 0 " pt"
- 0 names of any other prospect company. Read the folder names list in the launch message and check whole words.
- every number traced
- 0 KEPT OUT terms (from the README and the launch message)
- 0 interest figures unless ruled
- 0 "The design to reproduce"

## Report
8 lines max with the prompt path. End with: score /5 | biggest mistake | rule.

## CONTENT-ONLY (CLIENT ORDER 2026-10-10, overrides anything above)
The pack and prompt carry NO design and NO chart instructions. Read _shared\CONTENT-ONLY-RULES.md and follow it while writing (not after): no backgrounds, colours, fonts, cards, layout, chart types, shapes, scales, dashed/hollow, logo placement. Chart content is written as "Data: label value; label value", and scenario values are labelled "Scenario, not a forecast". Run its 4 checks on the final prompt.

## DEPTH IN THE PACK (CLIENT ORDER 2026-10-10)
Use every Verified client, vendor, project and cash figure from data.md that the README does not keep out. Page 7's Client and Vendor lenses, and the client and vendor content on pages 9, 10 and 12, carry real published figures where they exist (labelled with source and date). "Not published" only where data.md says NOT FOUND.

## APP CHARTS (CLIENT ORDER 2026-10-12, overrides earlier chart rules)
Read _shared\CHART-CATALOGUE.md. Pick every catalogue chart whose data EXISTS in data.md (never fill one with examples), and name each chart in the prompt exactly as the catalogue names it, with "Data:" and "With Crestline:" lines from data.md and the calc only. p8 is the "Process map" per catalogue item 5 (Not public except Verified measured stages). Run the calc for EVERY scenario printed (10/30 days on the ruled leg; carry cost only at a disclosed rate). In qa-report.md, list each chart used, each chart skipped and why.

## CALC COVERS EVERYTHING (CLIENT ORDER 2026-10-12: "i want cal cover every thing")
Run the app simulator (simulate, toTerms, leversFor, valueOfADay, priceLevers) on EVERY lever the Verified data supports, not just one leg:
- Receivables (DSO) at revenue per day. Contract assets / unbilled (certification wait) at revenue per day. Retention, only as a balance with a stated release basis (never at an invented speed).
- Stock (DIO) ONLY for EPC site stock and ONLY at cost per day (materials consumed or COGS ÷ 365, published on the same basis). Never price it at revenue per day, and never price plant or manufacturing inventory.
- Payables (DPO) ONLY up TO the vendors' stated terms where those are published. Paying later than terms is never cash released. If no terms are published, DPO is shown and never priced.
- For each priced lever: 10 days, 30 days, and "to the stated term" where a term exists (the client's payment term or the certification window, as published).
- One COMBINED scenario only if the simulator computes it as one run (all moved legs together). Label it as one scenario, never as a sum of rows.
- Ranking: priceLevers order (cash released once; carry a year only at a disclosed rate, capped at the borrowing it applies to).
- In calc\, write a LEVER TABLE listing every lever considered: priced, or not priced and why (no base, no term, not a waiting bill, data missing).
- Every printed saving traces to this calc output. Asserts as before, plus: no lever priced on a base it does not belong to.

## HOW CRESTLINE SAVES IT (CLIENT ORDER 2026-10-12)
Beside EVERY "With Crestline" result (charts, scenario bars, process map, cover hero, page 10, page 12), print exactly TWO short lines from _shared\HOW-CRESTLINE-SAVES.md for that lever: approved wording only, true of the product today, "once connected".

## PROCESS MAP ESTIMATES (CLIENT ORDER 2026-10-12)
p8 stages with no published figure carry an ESTIMATE from `python -I _shared\stage_estimate.py` anchored on the company's Verified days (see CHART-CATALOGUE item 5). Tag each stage "Published" or "Estimate", print the script's basis line, and never price an estimate.

## WHOLE RA BILL TOTAL (CLIENT ORDER 2026-10-12)
Under the Process map, print the stage_estimate.py "WHOLE RA BILL" line: the total days from work done to cash (the estimated stages before the invoice plus the published payment wait). The payment wait is only the last leg.

## NEVER BELOW THE CLIENT'S TERM (GARVIS RULE 2026-10-12, after LCC and Vikran)
Where a client credit period or payment term is published, no collection scenario may take receivable days BELOW the lower end of that term, and no "to term" move may include balances not yet due (retention, not-yet-due invoices). If receivables already sit within the term, collection is NOT PRICED; price certification, materials and the rest instead.
