# Rulka Electricals Limited: dossier fact check (RE-1)

Dossier `src/22_Rulka_Electricals_Dossier.pdf` (prepared 08 Oct 2026) tested against the company's own filings. Its four cited sources are an aggregator, a results portal, a company registry mirror and an IPO portal; none is a primary source. Page numbers are PDF pages of the files in `src/d/`; document codes as in data.md. Figures computed by `src/re-calc.py` (§ = output section).

Count of marks (one line Python over the table rows, first word of the Mark cell): 37 claims; Right 20, Wrong 5, Stale 2, Unsupported 10.

| # | Dossier claim | Mark | Evidence |
|---|---|---|---|
| 1 | Legal name Rulka Electricals Limited | Right | AR26 cover letter; AR25 p82 |
| 2 | Listed, NSE SME, symbol RULKA | Right | AR26 p40: NSE EMERGE, listed 24 May 2024 |
| 3 | IPO May 2024, about Rs 26.40 Cr | Right | AR25 p37: 11,23,200 shares at Rs 235, total 2,639.52 lakh (fresh 1,979.64 + offer for sale 659.88), §7 |
| 4 | CIN U31103MH2013PLC243817 | Right | AR25 p82. Letterheads print "PTC" (old private company form): a stale letterhead, not a different company |
| 5 | Incorporated 2013 | Right | CIN year; AR26 p36 profile: Kasavkar has led the company "since its inception in 2013" |
| 6 | Business since 2004 | Unsupported | "2004" in 0 of 18 document texts |
| 7 | Headquarters Mumbai, exact line to confirm | Stale | Exact line is filed: A-20, Shiva Industrial Estate, Lake Road, Bhandup (West), Mumbai 400078 (AR26 p3) |
| 8 | Operates as "REPL" | Wrong | The company calls itself REL (letter refs REL/LT/...; TJ p2 "build REL") |
| 9 | Website relservices.in | Right | AR26 p3 |
| 10 | Email azad@replservices.com (inferred) | Unsupported | Filings show only info@relservices.in. The inferred domain "replservices" is not the company's domain "relservices" |
| 11 | Electrical and firefighting contractor; warehouses, industrial, LT cable, solar EPC, maintenance | Right | AR26 p5 to p6 (Who we are), PJ p6 |
| 12 | Part product business (electrical panels) | Unsupported | All revenue is one line, "Revenue from Engineering, Procurement and Construction (EPC Revenue)" (AR26 note 19 p102); one reportable segment (note 36 p106). Panels appear only as a service line in the MD&A |
| 13 | About 70% electrical / 30% firefighting | Unsupported | No split filed. The only 70/30 in the filings is repeat against new customers (TJ text layer, Nitin Aher; PR "70% repeat orders"); PJ p10 says 65% of revenue from repeat clients |
| 14 | FY25 revenue Rs 79.73 Cr | Right (restated vintage) | AR26 p90: 7,972.54 lakh. The original FY25 accounts said 7,947.11 (AR25 p83), §6. Print the vintage |
| 15 | FY26 revenue Rs 110.20 Cr, up 38% | Right | AR26 p90: 11,020.26; growth 38.23% (§2) |
| 16 | FY25 PAT Rs 2.26 Cr | Right | AR26 p90 and AR25 p83: 225.56 lakh |
| 17 | FY26 PAT Rs 3.29 Cr | Right | AR26 p90: 328.86 lakh |
| 18 | FY24 PAT Rs 6.11 Cr | Right | AR25 p83: 61,106.65 thousand (§6) |
| 19 | FY25 dip from elevated manpower costs and project delays | Unsupported (half right) | Company's own reasons: "spillover losses from legacy civil projects", a new rented office and "expanding our workforce by 40%" (PM p4 image, Nitin Aher). "Project delays" appears in no filing as a cause |
| 20 | FY25 order book about Rs 73 Cr, point in time | Unsupported | Filed figures: 68.40 Cr at H1 FY25, 93.98 Cr added in H2, "total FY25 orders" 163.28 Cr (AR25 p16, PM p8). No 73 anywhere |
| 21 | FY26 year end unexecuted order book Rs 143.85 Cr | Right | AR26 p10 and p39 (143.85, "total order book for the year"); TJ p4 image "unexecuted ... approximately rupees 144 crores" |
| 22 | Cash flow turnaround in FY26 | Right | OCF (1,503.94) in FY25 to +611.76 in FY26 (AR26 p91). Note: payables rose 1,324.37 in the same year, so suppliers financed it (see depth.md) |
| 23 | Bigger bid ambitions | Right (text layer) | TJ p7: "orders of size 50 crores, 70 crores each" (speaker not image-checked) |
| 24 | Completed 102 projects in FY25 | Unsupported | "102" appears only as section numbers and page labels in 18 texts. Filed counts: 36 sites in H1 FY26 (PR; PJ p10), "83+ Projects Under Execution" (PJ p6) |
| 25 | Won solar and electrical orders in FY26 | Right | TJ p4 image: first EHV order (220 kV and 33 kV), solar EPC team; NSE order filings through FY26 |
| 26 | Microcap upper circuit moves | Unsupported | Market data, not a filing; "upper circuit" in 0 texts. Not a booklet fact |
| 27 | NSE SME listed 2024 | Right | AR26 p40 |
| 28 | O2C: milestone billing and retention; some government clients | Unsupported (retention part Right) | Retention money 499.96 lakh (AR26 note 12 p101). Government: Maharashtra transmission EHV order (TJ p4). Billing method (milestone) is not filed |
| 29 | P2P: panels, cables, firefighting and solar components, subcontractors | Unsupported | Purchases 8,447.50 and labour charges 1,183.08 lakh are filed (AR26 note 21 p102); no split by item |
| 30 | No public ERP signal; likely Tally | Right / Unsupported | No system named in 18 texts (Right). "Likely Tally" has no source |
| 31 | Rupesh Laxman Kasavkar, CEO / Director (promoter) | Wrong | Chairman and Managing Director, DIN 06546906 (AR26 p3, p89 image). No CEO title is filed. Promoter: Right (note 3 p96) |
| 32 | Azad Ashok Jinwal, Chief Financial Officer / Director | Wrong | CFO and KMP only; not on the board (AR26 p3 board list, p46 KMP list, p13 image) |
| 33 | MD designation unconfirmed | Stale | Confirmed: Kasavkar is MD (AR26 p89; every NSE letter signed "Managing Director") |
| 34 | Board: promoter directors | Wrong (incomplete) | Two executive directors (Kasavkar, Nitin Aher) and three independent directors (Dhumal, Sawant, Jogal), AR26 p3. The dossier omits Nitin Aher, who gives the opening remarks on both calls and signs the deck message |
| 35 | Entry point CFO Azad Jinwal | Right as a fact of title | He is CFO (AR26 p13). Choice of reader is Garvis's call |
| 36 | Size Rs 79 to 110 Cr | Right | §2 |
| 37 | Address double verified via MCA / Zaubacorp | Wrong (method) | MCA is out of scope and a registry mirror is not primary; the line is now taken from AR26 p3 |

## Conflicts inside the company's own documents (none settled silently)
1. **Order book at H1 FY26.** PR (17 Nov 2025): "Rs. 92Cr. worth of orders in hand". TD p5 (call of 15 Dec 2025, Pravin Chaudhari, image-checked): "Unexecuted order book stands at approximately INR144 crores". Year end figure is also about 144 (TJ p4) after Rs 110 Cr of execution and about Rs 138 Cr of inflow (TJ p3). Use only the year end Rs 143.85 Cr with the AR26 wording.
2. **Working capital days.** TJ p3 (Nitin Aher, image-checked): "Debtor days improved from 120 days to 103 days while inventory days reduced from 90 days to 67 days"; cash conversion cycle "from 143 days to 97 days". AR26 note 35 p106: receivable days 117.12 to 102.66, inventory days 69.58 to 76.97 (inventory days went UP). The 103 and 97 rebuild from AR26 (§4: 102.66 and 97.78); the 67, 90, 120 and 143 do not.
3. **Debt to equity.** PJ p17 SWOT (image): "D/E ratio slightly elevated at 0.31x with rise in short-term borrowings". PJ p15 and AR26 note 35: 0.13x, borrowings down 45.21% (§3).
4. **Return ratios.** ROCE 12.50% / 9.51% (AR26 note 35) against 12.25% / 9.41% (PJ p15) and "12.25% from 9.40%" (TJ p2). ROE 9% (AR26) against 9.19% (PJ p15, TJ p2).
5. **FY25 trade payables split.** AR26 balance sheet: MSME 777.57 / others 454.45; AR26 note 9: 684.44 / 547.58. Same total 1,232.02 (§3).
6. **FY25 OCF, three values.** (1,491.29) AR25 p84; (1,498.08) H1 comparative; (1,503.94) AR26 p91.
7. **Inventory note headings.** AR26 numbers both "Changes in inventories" and "Employee benefits expense" as note 22 (p102). Cosmetic.
8. **Accounting framework.** AR26 p40 says the statements follow Ind AS; the notes cite AS-3, AS-15 and AS-18 (Indian GAAP). Cosmetic for the booklet, listed for completeness.
9. **Labels.** PJ p5 is headed "MESSAGE FROM THE CMD" but is signed by Nitin Aher, Whole-Time Director; the CMD is Rupesh Kasavkar. TJ p2 has Nitin Aher welcoming investors to the "FY25 earnings conference call" in a call on FY26. Credit quotes to the person named under them, never to the slide title.
10. **H1 FY26 sites.** PR: 36 sites completed in H1 FY26; TJ p3 (image) says "During the year we completed 36 projects". Same 36 for a half and for a year.

## Text layer traps caught (image beats text)
- PJ p5 text layer: borrowings "reduced by 45% to 34.80 Cr from 38.76 Cr". The slide image says Rs 4.80 Cr from Rs 8.76 Cr.
- TD p10 text layer: the sidebar names put "Nitin Aher" beside the working capital answer. The page image labels that answer "Management"; the transcript's previous page hands the question to "[Jagdish 0:27:30]". The quote is credited to Management, unnamed.
