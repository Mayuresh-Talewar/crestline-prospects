# Lever table: DRAIPL, CARE 2 Apr 2026, FY25 (365-day arithmetic; CARE states no day base)

Basis for every row: TOI 7,116 Cr / 365 = 19.4959 Cr a day. No interest anywhere: no borrowing rate is published.
Simulator clamp read first: DSO lever min 0 (no client term published, so terms.payment is null), max 68 (38 x 1.4 = 53.2 vs 38 + 30 = 68). The clamp therefore does not protect the scenario; the 10-day step is held by the ruling (a 30-day cut to 8 days is not credible).

| Lever | Published days | Status | Why / result |
|---|---|---|---|
| Receivables (DSO) | 38 (CARE average collection period, FY25) | PRICED, 10 days only | 38 to 28 = 194.96 Cr once (valueOfADay 19.4959 x 10), simulate agrees. 30 days not run (ruled not credible). To-term not run: client term NOT FOUND. TOI is a proxy for invoiced value; GST and retention basis unknown. |
| Contract assets / unbilled (certification) | none | NOT PRICED | No balance, no days, no window published. CARE names it only qualitatively (p3). |
| Retention | none | NOT PRICED | No balance, no release basis published. |
| Site stock (DIO) | 20 (CARE inventory period) | NOT PRICED | No stock cost base (materials consumed or COGS) published; never priced at revenue per day. Asserted: leversFor returns only dso. |
| Payables (DPO) | none | NOT PRICED | No creditor days, payables or vendor terms. Probe: asking for 200 days with no terms releases 0 Cr. |
| Gross current asset days | 127 (FY25), 98 (FY24) | NOT PRICED | CARE's separate measure, not split; never priced. |
| Combined scenario | n/a | NOT RUN | Only one priced leg. |
| Ranking (priceLevers) | n/a | trivial | One priced lever, so it ranks first; stated as "only one move is priced". priceLevers needs a full project position and was not forced onto a single figure. |
