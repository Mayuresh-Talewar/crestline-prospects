# O2C stage proportions (estimates)

Run date: 2026-10-12. Projects: 11. Events: 38,722 (all streams). O2C bills: 376.

Wait at a stage = days from that stage's event to the next stage's event on the same bill (bills with both events only). Share = stage median / sum of the nine medians (109.8 days, JOINT MEASUREMENT to PAYMENT RECEIVED). Medians do not sum to a true end-to-end median; they are a proportion guide.

| Stage | Median days | Bills observed | Share |
|---|---|---|---|
| JOINT MEASUREMENT | 2.1 | 370 | 1.9% |
| MB / QS CHECK | 3.0 | 370 | 2.7% |
| RA BILL PREPARED | 1.6 | 374 | 1.4% |
| REVIEW STARTED | 3.9 | 350 | 3.5% |
| REVIEW COMPLETED | 2.1 | 350 | 1.9% |
| BILL SUBMITTED | 4.1 | 290 | 3.7% |
| CLIENT ACKNOWLEDGED | 26.3 | 268 | 24.0% |
| CERTIFIED | 2.7 | 292 | 2.5% |
| TAX INVOICE RAISED | 64.0 | 249 | 58.3% |
| PAYMENT RECEIVED | terminal (its wait is the TAX INVOICE RAISED row) | n/a | n/a |
| RETENTION RELEASED | not computable: 1 release event in the ledger, tied to no bill | 0 | n/a |

## Activity mapping (lib/derive/streams.ts ROLES, via deriveBillCases)
- JOINT MEASUREMENT = JOINT_MEASUREMENT (first)
- MB / QS CHECK = MB_QS_CHECK (first)
- RA BILL PREPARED = RA_PREPARED (last)
- REVIEW STARTED = REVIEW_STARTED (first)
- REVIEW COMPLETED = REVIEW_COMPLETED (last)
- BILL SUBMITTED = BILL_SUBMITTED (last)
- CLIENT ACKNOWLEDGED = CLIENT_ACKNOWLEDGED (last)
- CERTIFIED = CERTIFIED or CERTIFIED_SHORT (last)
- TAX INVOICE RAISED = TAX_INVOICE_RAISED (last)
- PAYMENT RECEIVED = PAYMENT_RECEIVED (last)
- RETENTION RELEASED = RETENTION_RELEASED (separate retention cases, not bills)

Source: Crestline demonstration ledger (synthetic EPC source), computed 2026-10-12; used only to estimate a prospect's stage split, always labelled.
