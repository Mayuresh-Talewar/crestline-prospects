# Step 1 brief: research and verdict (Garvis pipeline)

The launch message names COMPANY, FOLDER, DOSSIER and TICKET.

## Setup
- FIRST invoke Skill "ponytail:ponytail". It never overrides accuracy.
- Work ONLY in crestline-prospects\FOLDER\. Use exact-path reads only: never ls above it, and never open other company folders.
- Never open crestline-gtm unless the launch message names a gtm file. If it names one, that file is READ ONLY: confirm the entity first, and use only items marked High confidence, labelled "Secondary (gtm)".
- Edit only with Write/Edit. Write scripts to files in UTF-8. With python -I, write output to files and Read them; never print the rupee sign to the console.
- Scratch goes ONLY in the session scratchpad\TICKET\. Create it, check it is empty, and put downloads in their own subfolder.

## Read first
- crestline-prospects\PLAYBOOK.md: the research sections, "3-STEP PIPELINE" and "GTM CHECK".
- FOLDER\README.md.
- The dossier src\DOSSIER. It is a CHECKLIST only: never cite it, and verify every claim in it. Start by checking that its year is the latest filed year, then its headline revenue, then the exact legal entity.

## Sources
- Use primary sources only: rating rationales (CRISIL, ICRA, CARE, India Ratings, Infomerics, Acuite, Brickwork), the company site (including its own annual return or report), exchange filings if it is listed (annual report, results, investor deck), and government award notices.
- No MCA, no login, no payment. Never create accounts or enter credentials.
- News is never a figure source.
- Download raw documents and read their text with a script. Image-check every number that will print. Never trust a WebFetch or WebSearch summary for numbers.
- Check that the legal entity and incorporation year of every source match. Rule out namesakes explicitly.
- Confirm the latest rating action on the agency's own site.

## Find
Each item is Verified (document, page or section, date, basis) or marked NOT FOUND:
- exact legal name; listed or not; what it does (EPC or manufacturing); registered address
- revenue (latest two or three years), EBITDA, PAT
- debtor, creditor and inventory days, or gross current asset days (the latest single-year figure, on the same basis as revenue)
- working-capital cycle
- rated limits and their split, or borrowings
- interest rate (only if disclosed as a single rate)
- order book with its date
- ERP (only if stated)
- leaders, with exact titles from a primary source

## Write
- data.md: verdict on top, then every figure with its source, date and basis.
- depth.md: the story angle (respect first, then the question of where bills wait).
- sensitive-garvis.md: low or non-cooperating ratings, disputes, arbitration, promoter, legal, tax, defaults, delays, related-party concentration, auditor matters, restatements, IPO-proceeds issues and namesakes. Garvis only.
- Conflicts between sources, listed.
- Logo: the official file only, into src\ if it is clean.
- Verdict: FULL, LIGHT or NOT FEASIBLE, with reasons.

Never derive a day figure from two different measures. After writing, re-read every printed number against the extracted text.

## Report
8 lines max: the key figures, the verdict and anything NOT FOUND. End with: score /5 | biggest mistake | rule.

## DEPTH CHECKLIST (CLIENT ORDER 2026-10-10: "deep cover every thing like vendor data, client and all")
Dig for EACH of these and record each as Verified or NOT FOUND (never guess, never aggregator, never MCA):
- CLIENT side: client mix (government / PSU / private share), named key clients or segments the company itself publishes, top-client concentration, credit period given, debtor days, receivable ageing, retention held, contract assets / unbilled revenue, certification delays the source names.
- VENDOR side: trade payables, creditor days on a stated basis, MSME dues and MSME days, vendor advances, vendor credit terms, top supplier concentration, subcontract share.
- PROJECT side: order book split by segment/client/state, number of projects, largest orders, execution period, JV share.
- CASH side: operating cash flow, working-capital cycle as the company states it, borrowing for working capital, limit utilisation.
- PEOPLE: MD, CFO, finance head, project/commercial heads, with exact titles.
Sensitive items found here still go only to sensitive-garvis.md.

## CHART DATA (CLIENT ORDER 2026-10-12)
Also collect the data for _shared\CHART-CATALOGUE.md, on ONE basis: DIO, DSO, DPO and contract-asset days (or the balances and their bases to compute them), 3+ years of cash from operations, 3+ year-ends of working capital and cash, and a single disclosed borrowing rate with the borrowing it applies to. Record each as Verified or NOT FOUND, and say which catalogue charts the data supports.

## LEVER DATA (CLIENT ORDER 2026-10-12: calc covers everything)
Also record, Verified or NOT FOUND, on the same basis as the days: the cost base for stock (materials consumed or COGS), vendor payment terms, the client's payment term or certification window, the retention balance and its release basis, and contract assets and unbilled revenue.
