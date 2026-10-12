# SCON Projects: self-QA report (2026-10-09)

## Source re-trace (script)
Raw text: CRISIL Ratings rationale, Scon Projects Private Limited, 5 Feb 2026 (crisilratings.com RR_384869 html), downloaded and stripped to text; whitespace-normalised because the html splits numbers ("15. 5 %"). 19 checks, all PASS: operating income 1,355.55 / 859.89; PAT 152.67 / 53.97; margin 15.5% from 9.4%; rating and date; order book 2,248 as on 31 Oct 2025; GCA 148-167 in the three fiscals through FY24, 100 as on 31 Mar 2025; the two printed quotes (components of working capital, "sustenance ... monitorable"); the downward factor with TOLANW above 1.8 times; limits 300/50/50/16.85 = 416.85 and Bank of Baroda in the lender annexure; standalone basis. A planted wrong figure (1,355.99) was correctly NOT found.

## Recompute (script)
Growth 1,355.55 / 859.89 = 57.6%. Order book / revenue = 1.66 (dates differ, printed "roughly"). Per day 1,355.55 / 365 = 3.7138. 10 days 37.1, 30 days 111.4 (also via the printed 3.7138). Non-fund-based 350 / 416.85 = 84%. Limit sum 416.85. Matches calc/scon-savings-output.txt (37.138 and 111.415, rounded after multiplying).

## Basis match
Every company figure is CRISIL standalone, Rs crore, years to 31 March. Dates differ only for order book (31 Oct 2025) against FY25 revenue, and the pairing is printed as "roughly" with both dates. No FY22 figure, no CARE figure, no pairing of GCA days across agencies. GCA days are CRISIL's measure and are not relabelled.

## Rules
- Rule 13: marks only from calc (100 to 90 = 37.1; 100 to 70 = 111.4; per day 3.71); p13 limits chart is history, no mark, and says Crestline prices no guarantee headroom (not claimed).
- No interest anywhere (no published rate); p12/p15 carry the no-interest line.
- Ownership as ruled; p8 has no upper card and no number of any kind; scenario bars start at zero; no signed numbers; no dashes; letter dated 9 October 2026; tagline "waiting".
- KEPT OUT scan 0 (325, awaiting, tight liquidity, Warje, Kothrud, EBITDA, FY22, project counts, Apr 2024 notice, gtm items). Dossier 325 trap absent. Namesake company absent.
- Fixed claims reviewed: no ISO, hosting, region or encryption; no present-tense connection claim (all "Once connected"); claims/arbitration line dropped.

## Issues found and fixed during QA
- "Crestline reads from your ERP" (present tense) on p5 and p13: reworded to "Once connected".
- p12 lead printed a negative about published data: replaced.
- Template rules mentioning "slot", "Verified", "Secondary", "Keys", "SAP" and Unicode dash numbers reworded in the prompt.
- Residual judgement calls for Garvis: the letter sentence "the part the figures show you have done" is praise of the company's own record (CRISIL figures); p13 quotes an agency sentence in a context of the company's watch-point, with the upward and downward factors not otherwise shown.
