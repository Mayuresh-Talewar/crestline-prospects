# Deepen brief: add client, vendor, project and cash depth, plus deep problems, to an existing prompt

CLIENT ORDER 2026-10-10: "add all the info and where is there problem that has to be deep and accurate".
The launch message names COMPANY, FOLDER and TICKET.

## Setup
- FIRST invoke Skill "ponytail:ponytail". It never overrides accuracy.
- Work ONLY in crestline-prospects\FOLDER\. Use exact-path reads only: never ls above it, and never open other company folders or crestline-gtm.
- NEVER touch the app repo. The calc stays exactly as it is: no new savings figures, no change to the 10 and 30-day numbers.
- Edit only with Write/Edit. Put scripts in files in UTF-8 and run them with python -I. Never use shell heredocs.
- Scratch goes ONLY in the session scratchpad\TICKET\. Create it and check it is empty.
- Back up claude-design-master-prompt.md to claude-design-master-prompt.pre-deepen.bak before editing.

## Read first
- crestline-prospects\PLAYBOOK.md
- _shared\STEP1-BRIEF.md (the DEPTH CHECKLIST)
- _shared\CONTENT-ONLY-RULES.md
- FOLDER\README.md (the rulings and KEPT OUT list are BINDING), data.md, depth.md, problems.md, qa-report.md, the current prompt
- sensitive-garvis.md, only to know what to avoid

## 1. Research the depth checklist
- Re-download the primary sources already cited in data.md (the annual report, rating rationale, investor deck or call, company site). Search for any other PRIMARY source on the same entity.
- For every item in the DEPTH CHECKLIST, record it in data.md under "## Depth (2026-10-10)" as Verified (document, page or section, date, basis) or NOT FOUND.
- Image-check every number from a PDF. Read HTML rationales as raw text with a script.
- No aggregators, no MCA, no news figures, no dossier figures.
- Keep the basis consistent with the existing calc (standalone vs consolidated, year).

## 2. Deep problems: rewrite problems.md
- Find where the money actually waits and why, as deep as the verified data allows.
- Each problem needs:
  - the stage (billing, certification, collection, retention, vendor, stock, JV, cash)
  - the owner (ours or the client's, by the ownership rule)
  - the verified figures behind it, with source and date
  - the mechanism (why it waits)
  - what Crestline would measure and show
  - a respect-first framing
- Only claims the evidence supports. Where a cause is not stated by a source, say what would be measured instead of guessing a cause.
- Nothing from KEPT OUT or sensitive-garvis.md.

## 3. Put it into the pack and prompt
- Add the new verified figures and the deeper problems into slots-unified.md and the prompt, content-only.
- Main places: page 3 or 4 (the story), page 5 or 6 (where it waits), page 7 (the Client and Vendor lenses get real figures where Verified), page 9 (client and vendor), page 12 (which move first, named by stage), page 13 (text) and page 15 (sources).
- A lens with no Verified figure keeps "Not published" with a reason.
- Every new figure is labelled with its source and date. Never compute a new ratio unless it uses figures on one basis, and label it "Crestline's arithmetic on the published accounts".
- Keep the letter, editions, headlines and calc figures unless a new verified fact corrects them. If one does, STOP and report it rather than changing it.

## 4. Checks (by script, with planted hits)
- Every ">" line in the backup that you did not intend to change is still present.
- Every number in the prompt traces to data.md or the calc.
- 0 KEPT OUT terms, 0 names of other prospects, 0 dashes, 0 design words (per CONTENT-ONLY-RULES).
- qa-report.md: add a "Deepen 2026-10-10" section listing each new figure with its source, page and image-check result.

## Report
10 lines max: what new verified data was added (client, vendor, project, cash), the new problems in one line each, what stayed NOT FOUND, and the check results. End with: score /5 | biggest mistake | rule.
