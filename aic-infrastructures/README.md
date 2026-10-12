# AIC Infrastructures

ONE booklet; readers from primary sources only. Rules: ../PLAYBOOK.md in full, incl. "3-STEP PIPELINE", "ACCURACY GATE", "GTM CHECK" and the content-only prompt rule. Never open other company folders.
Order (3-step): X-1 research+verdict -> X-2+3 build, self-QA, pack, prompt (+ Garvis accuracy gate).
Dossier: src/51_AIC_Infrastructures_Pvt_Ltd_Dossier.pdf (checklist only, never cited). No crestline-gtm research file exists for this company (checked 2026-10-12).

## Garvis rulings
- Listed or unlisted: X-1 confirms. Unlisted = rating rationales, company site, official notices; no MCA, no login, no payment. Verdict from X-1.
- SENSITIVE BY DEFAULT: low or non-cooperating ratings, promoter, legal or tax, disputes, guarantees, related parties, auditor matters: Garvis only. News never a figure source.
- Interest only at a disclosed rate, capped. INR only.


## Garvis rulings AI-2 (2026-10-12, verdict LIGHT; CRISIL 13 Feb 2026, standalone, FY25)
- STORY: respect first: operating income FY24 284.17 to FY25 457.07 Cr (up 61%), PAT 16.79 to 28.02; order book about 1,140 Cr to be executed over 24 to 36 months. Then: CRISIL puts debtor days at 125 and inventory days at 155 in FY25 (GCA 303). Question: where each bill waits for those 125 days, and who can release it.
- CALC: value of a day = FY25 operating income 457.07 / 365. Steps 10 and 30 days on DEBTOR days 125 (receivable leg, CRISIL's figure). Stock days NEVER priced (inventory, not a waiting bill). NO interest. Rows never added.
- CHARTS (per CHART-CATALOGUE): (5) Process map: "Payment received" carries 125 days (CRISIL, FY25); every other stage "Not public"; with Crestline: 115 and 95 days and the cash released. (1) The cash cycle: PARTIAL, only two legs as CRISIL states them (DIO 155, DSO 125), NO cycle total, NO DPO, NO contract-asset leg; with Crestline only on the DSO leg. Charts 2, 3, 4 SKIPPED (no rate, no cash flow, no year-end series); say so in qa-report.
- KEPT OUT: sensitive-garvis.md (earlier non-cooperation, gearing, encumbered cash), limits and utilisation, rating grade, interest cover (conflict), the "FY23 367 Cr" line, "40 years", GCA 303 (may print once as CRISIL's figure, never added to the legs).
- ADDRESSEE: ONE edition, "The Board of Directors, AIC Infrastructures Private Limited", "Dear Members of the Board,". Address: "Mumbai". No logo: name as text. Content-only prompt with app chart names. Letter dated 12 Oct 2026.
- 2026-10-12 CLIENT: p8 stage estimates via _shared/stage_estimate.py --dso 125 (labelled Estimate; Payment received Published).
