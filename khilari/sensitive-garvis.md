# Khilari Infrastructure: sensitive items, for Garvis only (KH-1)

Never printed. Booklet-facing files cite these by number only. Every item read from the page image (or the HTML page for B23). Numbers from `python -I src/kh-calc.py` (calc/kh-calc-output.txt).

## S1. Brickwork: "issuer not cooperating" and a downgrade below investment grade

| Date | Long term (fund based, Rs 5 crore) | Short term (non-fund based, Rs 95 crore) | Status | Source |
|---|---|---|---|---|
| 07 Feb 2019 | BWR BBB (Stable) | BWR A3+ | normal | history table, B20M p2 |
| 31 Mar 2020 | BWR BBB (Stable) | BWR A3+ | Issuer Not Cooperating, reaffirmed; "moved to RNR category on 10th February 2020" | B20M p1 |
| 15 Dec 2020 | BWR BBB (Stable) | BWR A3+ | removed from Issuer Not Cooperating | B20 p1 |
| 09 Mar 2022 | BWR BB/Stable | BWR A4 | downgrade, Issuer Not Cooperating | history table, B23 |
| 07 Mar 2023 | BWR B/Stable | BWR A4 | "Continues to be in ISSUER NOT COOPERATING category", downgraded | B23 (bcrisp.in id=103900) |

- B20M p1 wording: not responding to information requests "reflects lack of corporate governance" (image-checked).
- B23: the client has been under INC "since December 2021"; BWR could not assess financial performance or debt servicing.
- BB and B are below investment grade on the long-term scale, and A4 is below investment grade on the short-term scale. The last Brickwork rating we can see (Mar 2023) is BWR B/Stable / BWR A4.
- Lenders in Brickwork's annexures: Axis Bank (overdraft 3, BG 20), NKGSB Co-operative Bank (BG 50), Punjab National Bank (BG 25), proposed 2 (B20 p5; B23). Earlier (B20M p3, p4): NKGSB BG 35, Oriental Bank of Commerce BG 10, proposed CC 5 and BG 50.
- Unknown: whether the Brickwork rating was later withdrawn. Brickwork's own regulatory status was not checked from a primary source.

## S2. CRISIL: assigned 2017, non-cooperation advisory 2018

- 24 Jan 2017: CRISIL BBB-/Stable / CRISIL A3 assigned on Rs 200 crore (cash credit 15, proposed cash credit 30, BG 35, proposed BG 120) (CR17 p3, p5). BBB- is the lowest investment grade.
- 12 Apr 2018 advisory: CRISIL "is yet to receive adequate information" for a review and warned it would review on best available information (CR17 p1, image-checked).
- What CRISIL did after April 2018: NOT FOUND (two searches, zero results).

## S3. Guarantee

- Corporate guarantee to bank facilities of the subsidiary Kinvan Private Limited (KPL): Rs 135.70 crore outstanding at 31 Mar 2025 and at 31 Mar 2024, out of a Rs 140 crore sanctioned term loan (C25 p2; C24 p2).
- CARE factors this into a standalone approach (C25 p1).

## S4. Related party: funds diverted to a pharmaceutical subsidiary

- KPL makes Clavulanic acid, a drug intermediary; formed under a joint venture (C25 p2; C24 p2). CARE heads this "Diversion of funds to unrelated business segment".
- KPL exposure at 31 Mar 2025: Rs 296.83 crore (equity 8.70, preference 156.50, unsecured loan 131.63); PY Rs 208.76 crore (preference 156.50, loan 52.26) (C25 p2; C24 p2). Sums recompute (Computed).
- Other investments Rs 25.19 crore FY25 (PY 23.81). Total diversion Rs 322.02 crore FY25 (C25 p2 para 4) and Rs 322.04 crore (para 3); PY Rs 232.58 crore printed, 232.57 recomputed (Computed).
- Exposure plus guarantee: Rs 432.53 crore; diversion plus guarantee is 5.08x FY25 PAT (Computed).
- Adjusted gearing after deducting these: 0.83x (31 Mar 2025), 0.67x (31 Mar 2024) per C25; C24 printed 0.61x (31 Mar 2024) and 0.22x (31 Mar 2023).
- C24 p2: an extra Rs 54.58 crore unsecured loan was "proposed" for FY25, to Rs 263.34 crore; the actual FY25 figure was Rs 296.83 crore, above the proposal.
- C25 p2: "As informed by the management, no further fund diversion is expected in the near future." C24 said much the same a year earlier (C24 p1 outlook) and exposure still rose by Rs 88.07 crore. (Computed below.)

## S5. Conflicting figures between agencies and between vintages

- CARE prints "Status of non-cooperation with previous CRA: Not applicable" (C24 p3, 04 Oct 2024; C25 p3) although Brickwork had the company in Issuer Not Cooperating at BWR B / A4 as of 07 Mar 2023 (S1). Possible explanations (Brickwork rating withdrawn, or not disclosed to CARE) are not evidenced either way.
- Incorporation: 2005 (CARE, Brickwork, CIN) against 2007 (CRISIL CR17 p4). Founding: proprietorship in 1998 (B20 p3; B23) against "started in 1994" (B20M p2).
- Promoter experience: "more than 35 years" (CR17 p3, 2017) against "over three decades" (C25 p1, 2025).
- FY24 between CARE vintages: PBILDT 135.28 against 131.48; PAT 111.22 against 109.54; CFO 135.10 against 100; collection 39 against 33 days; GCA 236 against 220 days; current ratio 1.38 against 1.30 (C24 p3 against C25 p3). The audit moved CFO by Rs 35.1 crore (Computed).
- Order book comparator dated 30 Jun 2024 (C24 p2) and 30 Jun 2023 (C25 p2).
- Q1FY25 PAT table cell 126.38 (C24 p3) is a copy of FY23 PAT.
- C24 is a "(Revised)" release; what was revised is not stated.

## S6. Disputes and legal cases

NOT FOUND. Scan: `python -I scripts/kh-scan.py dispute src/r/*.txt` (planted hit passed; output calc/kh-scan-dispute.txt) over the six rating documents for disput, arbitrat, litigat, court, default, legal, claim: 26 hits, every one in agency disclaimer text, "legal fees" or the "Definition of Default" criteria link; zero about the company. Court records and news were not searched (web search quota exhausted, and news is not a source).

## Calc lines used here

"KPL exposure rise FY24 to FY25" = 88.07; "KPL actual FY25 exposure above C24 proposal" = 33.49; "FY24 CFO FY24: C24 (UA) vs C25 (A) difference" = 35.1 lower.
