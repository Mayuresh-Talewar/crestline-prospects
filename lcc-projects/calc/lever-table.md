# LCC Projects: lever table (LC-S23). Every lever considered.

Rates: revenue per day ₹9.8637 Cr (3,600.25 / 365); construction material consumed per day ₹3.7940 Cr (1,384.83 / 365). Clamp bounds read from leversFor with no terms: dio 0 to 97.95; cad 0 to 75.88; dso 0 to 76.20 (not used); dpo held at 32.30. Garvis ruling (2026-10-12): collection is NOT priced.

| Lever | Priced | Base | 10 days (₹ Cr) | 30 days (₹ Cr) | Why / why not |
|---|---|---|---|---|---|
| Collection (DSO 46.2) | No | none | none | none | Receivables already sit within the 45 to 90 day credit clients are given; the simulator never moves a bill before its own due date. 46.2 days (₹455.82 Cr) stays as the measured position. |
| Certification (contract asset 54.2) | Yes | revenue per day | 98.64 | 295.91 | Unbilled revenue ₹534.83 Cr. No certification window published, so no move to a term. |
| Project materials (DIO 65.3) | Yes | construction material consumed per day | 37.94 | 113.82 | EPC site stock only, on cost per day, never at revenue per day. |
| Combined, one run (certification + project materials) | Yes | each leg on its own base | 136.58 | 409.73 | simulate with both legs moved together. Cycle 133.4 to 113.4 and 73.4. |
| Vendor credit (DPO 32.3) | No | construction expenses per day (₹8.0732 Cr), shown only | 0 | 0 | Terms not published beyond letter of credit credit; the simulator holds the leg, a request for 90 days returns 32.3 and cash 0. Paying later is never cash released. |
| To a stated term | No | none | none | none | Client period 45 to 90 days and 46.2 sits inside it; no certification window. |
| Retention | No | none | none | none | One line with security deposits (₹336.25 Cr combined, not separable); no balance, release only at project end. |
| Mobilisation advances ₹30.04 Cr | No | none | none | none | A customer-funded balance, not a wait that can be shortened; shown in the size ranking only. |
| Interest / carry | No | none | 0 | 0 | No single borrowing rate; ratePct 0, carry asserted 0. |
| Plant, manufacturing inventory | No | none | none | none | Finished goods and raw material ₹0.65 Cr are not EPC site stock. |
