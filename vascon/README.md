# Vascon Engineers Limited (NSE: VASCON, BSE: 533156)

Two separate booklets, same master design (`../_shared/master-design/`), never combined:
- **CFO booklet**: Somnath Biswas, Chief Financial Officer (verify in filings; board reconstituted FY26).
- **MD booklet**: Siddharth Vasudevan Moorthy, Managing Director (verify in filings).

Hard rules: no hallucination (Verified with document + page + filing date, or NOT FOUND); no other company's data (peers only as labelled, sourced lines); ../PLAYBOOK.md applies in full (Never mix data, Booklet accuracy rules, Fallback incl. gtm High-confidence only).
Order (client): research -> calc -> QA confirms calc -> packs -> REVIEW + calc re-confirmed -> only then Claude Design master prompts.

| File | What | Ticket |
|---|---|---|
| data.md, fact-check.md | every figure graded; dossier + gtm verified | VS-1 |
| webapp-fit.md | how Crestline helps Vascon (EPC AND real estate), honest gaps | VS-2 |
| depth.md | promises, ratings, segments, peers | VS-3 |
| problems.md, storyline-cfo.md, storyline-md.md | problems + two storylines | VS-4 |
| solutions.md, calc/ | savings from our app's maths | VS-5 |
| calc/verify-report.md | independent QA of every figure | VS-6 |
| slots-cfo.md, slots-md.md, VASCON-MAIN.md | final packs + main file | VS-7 |
| prompt-review.md | review gate | VS-8 |
| claude-design-master-prompt-cfo.md / -md.md | master prompts, only after VS-8 passes | VS-9 |

## Garvis rulings
- Printed footnotes never carry internal references (ticket ids, file names, "calc output", CLAUDE.md). Use "Crestline arithmetic on the published figures".
- Cite the CONSOLIDATED note pages for consolidated figures (check the entity header).
- 2026-10-07 Real estate (from VS-2): Crestline does NOT model a developer's own projects (no land bank, development WIP, unsold units, homebuyer bookings, RERA escrow). Booklets cover the EPC business only and say so in one line; no whole-company WC claim across EPC + real estate. Margin framed only as carry cost of trapped EPC cash. Pilot = 1-3 third-party EPC projects, INR, read-only, adapter built first.
- 2026-10-07 Readers: CFO Somnath Biswas; second booklet to Siddharth Vasudevan Moorthy, CHAIRMAN AND MANAGING DIRECTOR (from 15 May 2026). Group CEO Dr Santosh Sundararajan made the targets on the calls: quote him by name and title.
- 2026-10-07 Q3 FY26 "profit fell 88%" must NOT be printed as margin collapse: the base held a Rs 74 Cr exceptional gain; PBT before exceptionals fell 42%; the company names client delay. Use the 42% with that context, or leave it out.
- 2026-10-07 Calc basis: per day = consolidated revenue from operations FY26 / 365; EPC is 96.6% of it (say so). Real-estate inventory (591 -> 737) is OUT of all savings scenarios.
- 2026-10-07 NSE symbol VASCONEQ. RoE 4.36% (Note 34 ROCE is 6.11%; never label 6.11% as RoNW). FY24 has two vintages: label original vs restated.
- 2026-10-07 CFO's own words (14 Aug 2026): NWC cycle "from 45 days to almost 65 to 70 days". 4,000 Cr is an EPC ORDER BACKLOG target, not revenue.
- 2026-10-07 VS-6 caveats are binding (calc/verify-report.md): receivable days 91.7/50.4 are consolidated incl. real estate (~Rs 35 Cr dev-sales + related party), net of ECL, GST-inclusive; Rs 76 Cr = ALL fund-based limits at 30 Jun 2026 (cash credit alone Rs 44.74 Cr at 31 Mar 2026), interest saved only if the cash repays that debt; rate 9.65-10.95% = cash credit, consolidated AR26 p.103; lead with % of PBT; retention inside receivables, unbilled net of advances, rows overlap; the diagnostic "-25.00" never appears in a booklet.
- 2026-10-07 Garvis decisions on VS-7 open items: letter dated "October 2026" (no exact day until the posting date is set); no pilot cost stated; pilot wording = "the adapter for your SAP is built first; the 14 days of read-only analysis start once it is connected" (never promise the adapter inside 14 days); keep "No AI-generated numbers" (true: the model never produces a figure); replace "AI CFO auditor" with "Crestline's auditor re-measures the same figure"; QR "book a time" stays, with two named call slots if the client gives them.
- 2026-10-07 From depth: CRISIL downgraded Vascon to BBB+/Stable/A2 on 21 Aug 2026 (from A-), citing working-capital intensity, EPC execution delays, debt 205 -> 338.76 Cr: lead rating line in both books (AR26's "A-" is stale; never print it as current).
- 2026-10-07 "45 days" is the CFO's description only; it cannot be reproduced from filings. Never chart it as Vascon history. Page 13 "including by you" uses Vascon's own sourced unbilled days (143.7 in FY24 vs 216.8 now) instead. NO peer on p13 (none of PSP, B.L. Kashyap, Ahluwalia, Cemindia shows an honest sustained reduction; Ahluwalia's fall came from client advances).
- 2026-10-07 The MD never speaks on the calls: MD booklet quotes Group CEO Dr Santosh Sundararajan only; promise track stays internal (no scorecard). Every printed quote must be checked on the page image.
- 2026-10-07 Retention "10-15%" only from Acuite (Nov 2023, withdrawn rating): do not print.
- 2026-10-07 Garvis ruling on VS-8 residual: p11 "Every figure is computed from your ERP" -> "Once connected, every figure is computed from your ERP" (no present-tense ERP claim).
