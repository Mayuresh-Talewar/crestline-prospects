# Polite Powertech: solutions (PL-S23)

All marks come from calc\pl-savings-output.txt. Scenarios, not forecasts; rows overlap; the combined row is one run.

| Problem | Screen true today | Scenario | HOW lines used |
|---|---|---|---|
| 18 days to the target | Working Capital simulator on receivables; O2C aged by own due date; tickets with owner and date | 118 to 108: 4.32 Cr; 118 to 100: 7.78 Cr; interest 0.17 Cr a year (8.35%, cap 1.99 Cr) | Receivables, Ranking |
| Retention 24.78 Cr | O2C retention drill-down against release condition | balance only, not priced | Retention |
| Stock 23 days | Working Capital stock lever, site stock | 23 to 13: 3.16 Cr | Site stock |
| Which stage holds the days | Process map (stage_estimate.py --dso 118) | 118 published; estimates never priced; whole RA bill 202.6 = 84.6 + 118 | Process map |
| Combined | one simulator run, DSO 108 with DIO 13 | 7.48 Cr | Ranking |

Vendor credit: not priced (no terms). Ownership: ours measure, prepare, review, submit, invoice; client acknowledge, certify, pay.
Rule 13 marks: the cash and interest above only, from calc values.
