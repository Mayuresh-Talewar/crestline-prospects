# Calculator notes (hand-written, not script output)

`kalpataru-savings.output.txt` is the full stdout of the clean run and nothing else.

## KP-5 re-run, 8 Oct 2026
- Interest cap changed from borrowings drawn (2,839.94) to working-capital facilities drawn, `WC_FACILITIES = 1411.51` (AR FY26 Note 18(ii) p.308), because the disclosed 4% to 10% applies to those facilities only (QA must-fix 5, Garvis ruling KP-4).
- Row b now reads `30 | 1,907.68 | 56.46 | 141.15 | 1,411.51`. Rows a and c sit under the cap and are unchanged.
- P2 with-Crestline share now printed to one decimal (`9.0%`, QA should-fix 2); the value is 8.97% unrounded.
- Run: copied to `scripts/_tmp-kalpataru-savings.ts` in the app repo, `npx tsx`, copied back, temp deleted by name; `git status --porcelain` afterwards showed only the two pre-existing untracked docs entries.

## Break tests (separate runs, `BREAK=<mode>`; clean run exited 0, each break exited 1)
```
BREAK=neg    A1 no negative release: a released -635.8920547945206
BREAK=rate   A2 interest range: rates 4,12 are not the disclosed 4% and 10%
BREAK=cap    A3 interest cap: cash used for interest 1,907.68 > working-capital facilities 1,411.51
BREAK=lever  A4 priceLevers = simulate: a lever cash 636.8920547945206 vs simulate 635.8920547945206
BREAK=dpo    A5 DPO never releases: stretching payables released 1907.6761643835619
BREAK=target A6 target met: toTerms moved NWC to 80, gap 10 days
BREAK=leg    A7 leg independence: cad 635.8920547945206 dso 699.4812602739727 days*perDay 635.8920547945206
```
With the lower cap, BREAK=cap now trips on row b itself (1,907.68 > 1,411.51) before the 50-day break row.

## App note (from KP-3, unchanged)
`simulate()` clamps a leg to [min, max], and the cad leg's min is the certification term. Where that term sits ABOVE today's figure, simulate pushes the leg UP to the term and reports cash consumed. Row d is therefore judged on `toTerms` and the gap, not on `simulate`.
