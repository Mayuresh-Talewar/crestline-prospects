# Afcons Infrastructure Limited (NSE: AFCONS)

Two separate booklets, same master design (`../_shared/master-design/`), never combined:
- **CFO booklet**: Ramesh Kumar Jha, Chief Financial Officer (verify title in filings).
- **MD booklet**: S. Paramasivan, Managing Director (verify title in filings).

Hard rules: no hallucination (every figure Verified with document + page + filing date, or marked NOT FOUND, never guessed); no other company's data in this folder (peers only as labelled, sourced peer lines). Follow ../PLAYBOOK.md including "Booklet accuracy rules".

| File | What | Ticket |
|---|---|---|
| data.md, fact-check.md | every figure graded; dossier + gtm claims verified | AF-1 |
| webapp-fit.md | how Crestline helps Afcons, honest gaps | AF-2 |
| depth.md | promise track record, ratings, segments, peers | AF-3 |
| problems.md, storyline-cfo.md, storyline-md.md | problems + two storylines | AF-4 |
| solutions.md, calc/ | savings from our app's maths | AF-5 |
| calc/verify-report.md | independent QA of every figure | AF-6 |
| slots-cfo.md, slots-md.md, AFCONS-MAIN.md | final packs + main file | AF-7 |
| prompt-review.md | review of packs + re-confirmation that every calc is correct | AF-8 |
| claude-design-master-prompt-cfo.md, claude-design-master-prompt-md.md | paste-ready master prompts for Claude Design, written ONLY after AF-8 passes | AF-9 |
| src/ | sources (dossier is internal, never cited) | |

## Garvis rulings
- 2026-10-07 Client order on sequence: research -> calc -> QA confirms every calc (AF-6) -> final packs (AF-7) -> REVIEW + calc re-confirmed (AF-8) -> only then the Claude Design master prompts (AF-9). No prompt is written before AF-8 passes.
- 2026-10-07 Margin framing (from AF-2): Crestline does NOT fix margin, cost-to-complete, budget vs actual or EAC. The booklets frame Afcons' profit pressure ONLY as the carry cost of trapped working capital (interest on cash waiting) plus visibility of claims and retention. No JV, multi-currency, claims/arbitration-workflow, BG/LC or "live in days" claims. Pilot = adapter built for 1-3 domestic INR projects.
- 2026-10-07 The CFO's "120 days" is NOT a commitment (his words: "bare minimum, we can look at 120 days ... I do not want to commit", Q4 transcript p.19). Print it only with those words; never as "your target".
- 2026-10-07 EBITDA: company figure 1,439 (FY26) vs Board's Report 1,362.26 (difference = Rs 76.51 Cr labour-code charge). Print one, labelled, never mixed.
- 2026-10-07 Revenue = revenue from operations 11,948.38; total income 12,322.10 only when labelled as such.
- 2026-10-07 ERP: SAP S/4HANA (RISE) since 21 Nov 2023, from the RHP Note 52 (printed p.546). No sap.com case study found; never cite one.
- 2026-10-07 Leaders: MD Srinivasan Paramasivan (DIN 00058445); CFO Ramesh Kumar Jha; Executive Chairman Subramanian Krishnamurthy (since 28 Aug 2025); no separate CEO.
- 2026-10-07 Fallback (client order): NOT FOUND items may use gtm / dossier figures marked Secondary, per PLAYBOOK "Fallback when the filings are silent". Never for headline, calc input, savings or Crestline claims; never if already marked Wrong.
- 2026-10-07 Rate VERIFIED by Garvis: AR FY26 PDF page 137 (borrowings note, Interest (ii)): "Cash credit facility and working capital demand loan from banks carry interest ranging from 7.55% to 9.95% per annum (As at 31st March, 2025 ... 9.09% to 10.35%)". Cite as AR26 PDF p.137 (borrowings note). Interest saved only if released cash repays CC/WCDL.
- 2026-10-07 AF-6 caveats are binding for the packs (calc/verify-report.md): 722 Cr is a ceiling (27% disputed, ECL 281.70); PBT 386.79 is after the 76.51 exceptional item; PAT share is pre-tax interest over PAT; 123.4 days is not a DSO (retention + arbitration interest inside receivables); NWC cash assumes a revenue basis; rows overlap.
- 2026-10-07 Ratings: lead with CRISIL AA-/Negative (19 Aug 2026), whose own downgrade trigger is debtor days above 300 (now 295 incl. contract assets) and NWC "materially above 100" (now 139). Strongest single line for both booklets. ICRA/CARE withdrawn: never cite them as current.
- 2026-10-07 Promises: 18-promise ledger stays INTERNAL. Booklets may quote the CFO's own words on collections, framed as "the causes are real; no filing shows which bill, which desk, since when". Never print a missed-promise scorecard.
- 2026-10-07 Peers: lead with J Kumar Infraprojects 127 -> 99 days (FY22-FY26). L&T group only with its caveat (FY26 drop driven by customer advances and vendor credit). Note NCC and HG Infra moved up. Levels not comparable: direction only.
- 2026-10-07 NWC definition FOUND: Q4 FY25 deck p.39 formula reproduces 43, 38, 63, 113, 143 (FY22-FY26). The revenue-basis caveat can be replaced by this citation.
- 2026-10-07 Page 13 "It has been done before. Including by you." LEADS with Afcons' own history (NWC 43 FY22, 38 FY23, 63 FY24, now 143; Q4 FY25 deck p.39 formula) and uses ONE peer only as support: J Kumar 127 -> 99 days (FY22-FY26). L&T, NCC, HG Infra stay out of the booklets (kept in depth.md). Client understood; Garvis default (a).
- 2026-10-07 CORRECTION (Garvis miss): the rate cite is AR26 PDF p.185, the CONSOLIDATED borrowings note (same 7.55-9.95% sentence). p.137 was the standalone note. Packs are consolidated, so p.185 everywhere.
- 2026-10-07 Fixed in our Afcons packs + prompts after AF-10: credit-period cite = AR26 p.400-401 (PDF p.202), not p.357 (that is Note 8); "Two totals are yours" -> "Two totals: 236.2 days of work not yet certified" (certification is the client's act); 359.6 -> 359.5 days. Client's MD booklet was built from the CFO prompt: rebuild it from claude-design-master-prompt-md.md.
