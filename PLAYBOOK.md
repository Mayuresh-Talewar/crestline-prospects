# Prospect research playbook

One folder per company. The team finds the PROBLEMS and Crestline's SOLUTIONS from the company's own published data. The client designs the brochure himself (Claude Design). The team never designs here.

## The one question every output answers
What if Crestline were already running at this company? How much money and how much time would it save?

## Folder layout
```
crestline-prospects/
  PLAYBOOK.md            this file
  _shared/               reused for every company
    crestline-webapp-context.md   our product, safe to paste into any AI session
    crestline-chart-spec.md       our app's chart colours and anatomy
    brochure-ai-tells.md          words and looks that read as AI-made
    ceo-print-pack.md, confidential-file-look.md, *-refs/   print references
  <company>/
    data.md          every figure, graded, with page + filing date
    storyline.md     company story + 4-5 problems + spread outline
    solutions.md     per problem: what / why / how / savings scenarios
    calc/            the savings calculator run on their numbers
```
Capacite is the worked example: `capacite/`.

## Steps (in order, one ticket each)
1. **Data** (R&D): download the primary documents first: annual report, audited results, investor presentation, earnings call transcript (NSE/BSE). Grade every figure Verified (page) / Computed (formula) / Weak. Record each document's filing date. Aggregators and news sites are never cited.
2. **Fact check** (R&D): settle anything that conflicts (opinion vs emphasis of matter, total income vs revenue from operations, consolidated vs standalone). Quote the exact wording.
3. **Problems** (R&D): 4-5 working-capital problems Crestline actually answers, each provable from the data, framed respectfully, with a multi-year trend and what the accounts cannot tell them (site, bill, desk, since when).
4. **Solutions + savings** (Senior Dev): run OUR app's pure functions (cycle simulation, levers, value of a day) on their numbers. Scenarios: a 10-day step, a 30-day step, their contract terms, THEIR OWN stated target. Interest at a rate they published. Rows overlap and are never added.
5. **Copy check** (writer): plain human language, no AI tells, every figure unchanged.

## Rules that do not bend
- Never pair two figures computed on different totals.
- Every printed figure carries its document and filing date (exact day only when verified, else month).
- Savings are scenarios, never promises. Paying vendors later is never a saving.
- Time saved = days out of each wait. Management hours are described, never numbered.
- No company's ERP data is ever implied. A process map is their stages, illustrative, or our demo labelled as demo.
- Our demo environment (Grey Infra) is never presented as a client.
- Before calling any figure the client brings "wrong", check our own files first.

## Running the calculator for a new company
`capacite/brochure/solutions-calc/capacite-savings.ts` imports the app's code (`@/lib/...`), so it only runs from inside the app repo. Copy it into the repo's scratch area, change the inputs block, run with `npx tsx`, and delete the copy afterwards.

## The master design (locked 2026-10-07)
Every company gets the SAME 16-page booklet the client designed for Capacite: `_shared/master-design/capacite-booklet-master.pdf`. The research job is to fill its data slots, listed in `_shared/master-design/TEMPLATE-SLOTS.md`. No new layouts, no new chapters, unless the client asks.

## Never mix data (client order, 2026-10-07)
- One company = one folder. Agents read and write ONLY that company's folder plus `_shared/`. Never copy a file from another company's folder.
- `_shared/` holds ONLY Crestline product facts and design references. No company figure is ever stored there as data. The master PDF carries Capacite's numbers; it is a LAYOUT reference only. New booklets start from `TEMPLATE-SLOTS.md`, never by editing Capacite's text.
- Our demo data (Grey Infra) never enters a company folder as that company's figures. If a page shows the demo, it is labelled as demo.
- Every figure in `data.md` carries: company, document, page, filing date. No source = it does not go in.
- Before any hand-over: scan the company folder for every other company's name and its headline figures (e.g. Capacite, 2,490, 445.5, 152). Any hit outside a peer-comparison line = stop and fix.

## Booklet accuracy rules (learned on Capacite and KEC, 2026-10-07)
Every booklet, every company, is checked against these before print:
1. **Claims about Crestline must be true today.** No ISO certification "in progress" unless an auditor is engaged; no "hosted in India" or "per-tenant encryption" unless it is set up; no present-tense "connects to your SAP/ERP" until the adapter exists ("will feed, built during the pilot"). Pilot = one entity, one segment, read-only, 14 days.
2. **Every quote names the right speaker**, checked in the transcript PDF (text layers drop names).
3. **Ours vs the client's follows the product rule**: in O2C, acknowledged, certified and collected are the client's acts. Measuring, preparing, reviewing, submitting and invoicing are the company's own.
4. **No "nothing went wrong" headlines.** Filings always show something went wrong; say what the money did instead.
5. **Charts drawn to scale**: every bar and point within 2% of its label, same scale across a chart.
6. **Interest only at a rate the company discloses**; our computed rate is never printed as theirs.
7. **Savings are scenarios, rows overlap, never added**; GST in receivables means our cash figures are conservative; interest saved only if the cash repays debt.
8. **Peers and comparatives**: primary filings only; print the vintage when a company restates; never a scorecard of missed promises.
9. **No other company's data** (scan before hand-over); no demo numbers beside a client's figures.
10. Full address and correct names and titles on the letter page.

## About crestline-gtm research files (checked 2026-10-07)
They are a checklist, never a source. Checked against filings: KEC 17 claims (8 right, key balances left null), Capacite 30 claims (10 right, 3 wrong incl. "ERP: SAP" with no evidence, 10 left null, 6 unsupported). Their "SAP CONFIRMED" ERP labels are not reliable: verify every ERP claim in the company's own filings or a live vendor page before any copy mentions it.

## Fallback when the filings are silent (client order, 2026-10-07)
If a figure is NOT FOUND in the company's own documents, the team may take it from the crestline-gtm research file or the client's dossier, with these limits:
- It is marked **Secondary (gtm)** or **Secondary (dossier)** wherever it appears, never Verified.
- Never used if our fact check already marked that claim Wrong or contradicted by a filing.
- Never used for a headline figure, a calculator input, a savings number, or anything said about Crestline.
- In a booklet it prints only with its source in words (e.g. "as reported in market research, not in the company's filings"), or it is left out.
- (2026-10-07, client) Within the fallback, take gtm items ONLY where gtm marks confidence "High", still labelled Secondary. "High" is not proof: Capacite's gtm "SAP, High" was wrong. A High item that a filing contradicts is never used.
11. **"You said" only for the reader's own words.** In a booklet addressed to one person, never write "you said" / "in your own words" over a quote by someone else (Afcons MD edition credited the CFO's quotes to the MD). Use "your CFO said" or the company's name.

## One booklet per company (client order, 2026-10-07, replaces "two booklets")
ONE master prompt and ONE 16-page booklet per company. The content is the same for every reader; only the reader block changes per edition: cover "Prepared exclusively for" name and title, the letter on p2 (one variant per reader), and the salutation. Body copy is written in a neutral voice: quotes are credited by name and title ("Ramesh Kumar Jha, CFO, said"), never "you said". The master prompt holds the shared 16 pages plus a short reader table (name, title, letter text) so Claude Design builds one design and swaps the reader block per edition.
12. **Never invent chart values.** Claude Design invented per-step days on Vascon p8 and a sentence calling them an "illustrative split". Steps without data are drawn without numbers.

## Foreign currency (client order, 2026-10-07)
Every figure is shown in INR. If a source gives an amount in a foreign currency (AED, USD, SAR...), convert it to INR by script at a stated published rate (RBI reference rate, or the rate the company's own filing uses) on a stated date, and print the source amount + rate + date in the footnote, e.g. "AED 1,200 Mn at Rs 23.60 / AED (RBI reference, 31 Mar 2026)". Never mix rates or dates in one chart. This is about how the booklet shows figures; it is NOT a claim that Crestline's app handles multi-currency (it does not today).
- 2026-10-07 Fixed Crestline pages for every company: _shared/master-design/FIXED-PAGES.md (neutral, reviewed wording). Packs fill its slots; never rewrite those pages from scratch.

## Parallel companies (client order, 2026-10-08)
Two companies may run at the same time only with these locks: separate folders; every agent writes only inside its own company folder and never opens another; sources and calculators per company, never copied; every Garvis message starts with the company name; and BEFORE hand-over of any file, a cross-company scan of the finished company's folder for every other company's names, people and headline figures (zero hits outside a labelled peer line), repeated at the review gate and once more on the assembled master prompt.

## Research protocol (upgraded 2026-10-08)
The 12-step company research protocol now lives in the research agent's own file (~/.claude-garvis/agents/rnd-researcher.md, "Company research protocol") so every research ticket follows it automatically: primary first; entity + basis on every figure; tables and quotes from page images; numbers by script; graded evidence; live-deal check; same-basis comparisons only; management's exact words; disconfirm top findings; sensitive items flagged; people from primary sources; final scans before reporting.
13. **Every problem chart shows "today" and "with Crestline"** (client order 2026-10-08): the with-Crestline mark uses only that company's calc output, same scale, dashed/hollow, labelled days + cash (+ interest only where allowed) + "scenario, not a forecast".
- 2026-10-08 Client: with-Crestline chart marks SHIPPED in the Man Infra prompt now; the other five packs (vascon, afcons, oval, ghv, ashoka) were also updated with marks and are KEPT ("if implemented, do not remove"), but their delivered master prompts were NOT re-assembled; re-assemble only when the client asks. From the next company on, A14 / rule 13 applies by default.
- 2026-10-08 CLIENT ORDER: master prompts carry NO design prompt. When assembling, DROP section "## 2. The design to reproduce" entirely and finish-check 10 (backgrounds/navy pages). Keep: what you are building (one line), reader editions, rules, accuracy rules, checks, Content. The client's own canvas holds the design.

## 3-STEP PIPELINE (client order 2026-10-09, replaces the 6-step order; all agents on Sonnet)
1. RESEARCH (<co>-1): latest annual report (or latest rating rationale if unlisted) + ONE rating rationale + latest results/call only. Verify only the dossier's HEADLINE claims (revenue, PAT, order book, leaders, ERP), not every line. Page images only for figures that will print. Output: data.md (verdict on top), depth.md, sensitive-garvis.md. Fact-check folded into data.md as a short "Dossier check" table.
2. BUILD (<co>-2): webapp-fit + problems + calc (shared calc pattern, independent cross-check, break-tests) + SELF-QA in the same pass (re-trace printed figures, basis match, KEPT OUT scan). Output: webapp-fit.md, problems.md, solutions.md, calc/, qa-report.md.
3. PACK + PROMPT (<co>-3): 16-page pack + content-only master prompt + scripted scans. Garvis then runs his own grep scan before telling the client.
Garvis rulings go in README between steps 1 and 2. Agent reports max 8 lines.
- ACCURACY GATE (client 2026-10-09: "Sonnet, but no mistake on company data"): agents run on Sonnet, and before any prompt goes to the client Garvis himself (a) traces every number in the prompt to data.md / calc output by script, (b) re-opens the source page for the cover hero, per-day value and the 10/30-day figures, (c) runs the KEPT OUT and cross-company greps. Any miss = back to the agent, never shipped.
- GTM CHECK (client 2026-10-09): step 1 research ALSO reads C:\Users\asus\Desktop\crestline-gtm\data\research\<company>.json (READ ONLY; never mails, contacts or any other gtm file; never write there). Every gtm claim is checked against the filings and logged in data.md as a "GTM check" table (Right / Wrong / Stale / Unsupported). gtm may fill a gap only per the Fallback rule (confidence "High", labelled Secondary, never a headline, calc input or Crestline claim).
- 2026-10-10 CLIENT ORDER: master prompts are CONTENT-ONLY, no design or chart instructions at all. Rules: _shared/CONTENT-ONLY-RULES.md (STEP23-BRIEF updated).
- 2026-10-10 TJN Construction DROPPED by client (no verifiable figures). Not in done-booklet.
- 2026-10-10 CLIENT ORDER: deep coverage of client, vendor, project, cash and people data (STEP1-BRIEF depth checklist; STEP23 uses it).
- 2026-10-10 Supreme Infrastructure (dossier 5) DROPPED by client. Nikhil Infraspecialities (36) REINSTATED: deepen + content-only. Atmastco added (deep info + calc).
- 2026-10-12 CLIENT ORDER: booklet charts = the web app's own charts, named exactly (_shared/CHART-CATALOGUE.md), accurate data, calc for every scenario. Batch 51-65 set up.
- 2026-10-12 CLIENT: calc must cover every lever the data supports (STEP23 'CALC COVERS EVERYTHING').
- 2026-10-12 CLIENT: every with-Crestline result carries 2 lines on HOW Crestline saves it (_shared/HOW-CRESTLINE-SAVES.md).
- 2026-10-12 CLIENT: dossiers 51-100 file into crestline-prospects/done-booklet-51-to-100/<Company>/ (not done-booklet). AIC and Thakur moved there.
