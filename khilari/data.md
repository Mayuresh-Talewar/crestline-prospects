# Khilari Infrastructure Private Limited: data (KH-1)

Blockers, line 1: the company website khilariinfra.com does not resolve (DNS: no A/AAAA record, 08 Oct 2026); khilariinfra.in is a "Launching Soon" placeholder with no content. No rating rationale after 06 Oct 2025 was found (web search quota ran out on 08 Oct 2026, browser extension not connected), so FY26 full year and any Oct 2026 review are NOT FOUND. CARE's lender annexure page is JavaScript only and returned no lender data. No tender or award notice naming the company was found (see the NOT FOUND list).

## FEASIBILITY VERDICT: LIGHT

Blunt version. The whole financial record is six rating documents from three agencies. Two of them (CARE, Oct 2024 and Oct 2025) carry real working-capital content; the other three are older and thin. There is no annual report, no balance sheet, no receivables or retention in rupees, no state-wise or client-wise split, no named client, no interest rate, no management quote, no finance head, and no working website. What the booklet CAN carry, every figure from CARE and labelled standalone:

- a three-point working-capital trend (FY23, FY24, FY25): collection period, inventory period, creditor period, operating cycle, gross current asset days;
- utilisation of the working-capital and guarantee limits;
- revenue, PBILDT and PAT for FY23 to FY25 plus four months of FY26;
- the order book at three dates and its slow-moving part.

What it CANNOT carry: rupee balances (receivable, retention, unbilled), bill-level or site-level timing, a client name, a disclosed interest rate. So no interest-saved figure can be printed (README basis rule). Problems must be framed in days and in the rationale's own words. Two FY24 vintages disagree (item S5 in the Garvis file); the booklet must pick one vintage per chart and say which.

## Sources read (all saved under src/d, rendered to page images under src/r, image-checked)

| Tag | Document | Date on document | Entity and basis | Pages |
|---|---|---|---|---|
| C25 | CARE Ratings press release, careratings.com/upload/CompanyFiles/PR/202510121011_Khilari_Infrastructure_Private_Limited.pdf | 06 Oct 2025 | KIPL, Standalone (p1) | 5 |
| C24 | CARE Ratings press release (Revised), careratings.com/upload/CompanyFiles/PR/202410121041_Khilari_Infrastructure_Private_Limited.pdf | 04 Oct 2024 | KIPL, Standalone (p1) | 5 |
| B23 | Brickwork rating rationale, bcrisp.in ViewRatingRationaleINCNew?id=103900 (HTML) | 07 Mar 2023 | KIPL | 1 (HTML) |
| B20 | Brickwork rating rationale, brickworkratings.com/Admin/PressRelease/Khilari-Infrastructure-15Dec2020.pdf | 15 Dec 2020 | KIPL | 7 |
| B20M | Brickwork rating rationale, brickworkratings.com/Admin/PressRelease/Khilari-Infrastructure-31Mar2020.pdf | 31 Mar 2020 | KIPL | 4 |
| CR17 | CRISIL rating rationale 24 Jan 2017 with rating advisory 12 Apr 2018, crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/Khilari_Infrastructure_Private_Limited_January_24_2017_RR.pdf | 24 Jan 2017 / 12 Apr 2018 | KIPL | 8 |
| LEI | GLEIF LEI record 984500672F9FFA543B07 (api.gleif.org) | last updated 18 Sep 2026 | KIPL, CIN U45200MH2005PTC152495 | JSON |

How the URLs were found: the two CARE URLs appeared in the dossier and were then returned by a web search for the company on careratings.com; each PDF's own header names the company and date. The Brickwork and CRISIL URLs came from web search results. The LEI number came from a search result and the record was read from GLEIF's own API. No URL was constructed by hand.

Calculations: `python -I src/kh-calc.py > calc/kh-calc-output.txt` (all asserts pass). Every figure marked Computed below is a line in that output.

## 1. Income statement (Rs crore, standalone, as each rationale states it)

| Period | Total operating income | PBILDT | PAT | Grade and source |
|---|---|---|---|---|
| FY23 (Audited) | 638.08 | 129.79 | 126.38 | Verified, C24 p3 table, 04 Oct 2024 |
| FY24 (Unaudited, C24 vintage) | 610.85 | 135.28 | 111.22 | Verified, C24 p3 table, 04 Oct 2024 |
| FY24 (Audited, C25 vintage) | 610.85 | 131.48 | 109.54 | Verified, C25 p3 table, 06 Oct 2025 |
| FY25 (Unaudited) | 639.86 | 98.76 | 90.11 | Verified, C25 p3 table, 06 Oct 2025 |
| 4MFY26, to 31 Jul 2025 (Unaudited) | 210.79 | 35.83 | 33.73 | Verified, C25 p3 table, 06 Oct 2025 |
| Q1FY25, to 30 Jun 2024 (Unaudited) | 97.06 | 22.00 | printed 126.38 (a table error, see below) | Verified as printed, C24 p3 |
| FY26 full year | NOT FOUND | NOT FOUND | NOT FOUND | no rationale after 06 Oct 2025 found |

- Use the C25 audited FY24 row wherever FY24 is shown beside FY25; the C24 row is the unaudited vintage (S5).
- Margins, Computed and matching the printed margins: PBILDT 20.34% FY23, 21.52% FY24 (A), 15.43% FY25, 17.0% 4MFY26; PAT 19.81% FY23, 17.93% FY24 (A), 14.08% FY25. C24 printed FY24 (UA) PBILDT margin 22.15% and PAT margin 18.21%.
- TOI growth FY25 over FY24: 4.75% (Computed; C25 p2 prints "5%"). FY24 over FY23: a fall of 4.27% (Computed).
- Q1FY25 PAT: C24 p3 table prints 126.38, the same number as FY23 PAT. C24 p2 prints a Q1FY25 PAT margin of 16.57%, which implies about 16.08 (Computed). The table cell is wrong; do not use it.
- Non-operating income: 23.88 in FY24 against 42.72 in FY23 (Verified, C24 p2).
- Material cost share: 31% FY24 to 36% FY25 (Verified, C25 p2); raw material consumed 38% FY23 to 29% FY24 (Verified, C24 p2). Two different labels, kept apart.

Older years (different documents and different line items, never put on one axis with the CARE rows):

| Period | Line item as printed | Revenue | EBITDA or margin | PAT | Source |
|---|---|---|---|---|---|
| FY15 | revenues | 107.8 | operating margin 7.0% | 5.6 | CR17 p3, p4 |
| FY16 | revenues / net sales | 223.9 (p3) / 224 (p4) | operating margin 4.8% | 7.5 | CR17 p3, p4 |
| FY17 (Audited) | Total Income | 200.89 | EBITDA 9.32 | 5.41 | B20M p2 |
| FY18 (Audited) | Total Income | 213.41 | EBITDA 14.30 | 9.84 | B20M p2 |
| FY19 (Audited) | Operating Revenue | 209.60 | EBITDA 21.86 | 17.56 | B20 p3 |
| FY20 (Audited) | Operating Revenue | 230.40 | EBITDA 31.82 | 31.26 | B20 p3 |
| FY21 | TOI range only | "Rs 200 to 250 crore till FY21" | NA | NA | C24 p2 |
| FY22 | TOI range only | within "Rs 600 to 640 crore" FY22 to FY24 | NA | NA | C24 p2 |

## 2. Working-capital metrics (days, as the rationales print them)

| Metric | FY16 | FY23 | FY24 (C24, UA) | FY24 (C25, A) | FY25 | Source |
|---|---|---|---|---|---|---|
| Collection period | 43 ("debtors") | 26 | 39 | 33 | 51 | CR17 p3; C24 p3; C25 p3 |
| Inventory period | NA | 11 | 18 | 17 | 32 | C24 p3; C25 p3 |
| Creditors period | NA | 53 | 45 | 42 | 39 | C24 p3; C25 p3 |
| Operating cycle | NA | negative | 12 | 8 | 44 | C24 p3; C25 p3 |
| Gross current asset days | 114 | 167 | 236 | 220 | 266 | CR17 p3; C24 p3; C25 p3 |

All Verified (image-checked). Operating cycle recomputed as inventory plus collection minus creditors matches every printed figure, and FY23 comes to minus 16 days (Computed; the rationale prints only "negative").

Utilisation of limits:

| Item | Figure | Period | Source |
|---|---|---|---|
| Working-capital limit (overdraft, fully FD-backed) | Rs 44.90 crore | both years | C24 p2, p3; C25 p3 |
| Average utilisation of that limit | ~44.80% | 12 months to Aug 2024 | C24 p3 |
| Average of maximum utilisation | 71.96% | 12 months to Aug 2024 | C24 p3 |
| Maximum average utilisation | ~91.40% (PY 71.96%) | 12 months to Jun 2025 | C25 p3 |
| Bank guarantee limit | Rs 220 crore, "fully utilised" | 12 months to Aug 2024 | C24 p3 |
| Bank guarantee limit | Rs 300 crore, max average utilisation 84.69% | 12 months to Jun 2025 | C25 p3 |
| Overdraft against FDs utilisation | 39% | as on 30 Sep 2020 | B20 p3 |

Computed in rupees: about Rs 41.04 crore of the Rs 44.90 crore limit at 91.40%; about Rs 254.07 crore of the Rs 300 crore guarantee limit at 84.69%.

Other liquidity lines, all Verified:
- Free cash and bank: Rs 25.24 crore (31 Mar 2025) against Rs 43.10 crore (31 Mar 2024) (C25 p3); C24 p3 printed Rs 43.33 crore for 31 Mar 2024 and Rs 59.79 crore for 31 Mar 2023.
- Current ratio: 1.20x (31 Mar 2025), 1.30x (31 Mar 2024) per C25 p3; C24 p3 printed 1.38x (31 Mar 2024) and 1.73x (31 Mar 2023).
- Cash flow from operations: negative Rs 4.66 crore FY25, positive Rs 100 crore FY24 (C25 p3); C24 p3 printed positive Rs 135.10 crore FY24 and Rs 18.29 crore FY23.
- Lien-marked FDs: Rs 191.97 crore (31 Mar 2024) against Rs 125.11 crore (31 Mar 2023) (C24 p3).
- Overall gearing: 0.15x (31 Mar 2025), 0.09x (31 Mar 2024), 0.08x (31 Mar 2023) (C25 p2, C24 p3).
- Interest coverage (PBILDT): 23.93x FY25, 28.33x FY24 (A) (C25 p2); 29.16x FY24 (UA), 56.03x FY23 (C24 p2).
- Mobilisation advances: rose with over Rs 1,050 crore of new orders from Uttarakhand and Gujarat in FY24 to FY25 (C25 p2). No rupee balance given.
- Unbilled revenue: Rs 71 crore in FY25 (C25 p2).

## 3. Rated limits

| Agency | Date | Facility | Amount (Rs crore) | Rating | Source |
|---|---|---|---|---|---|
| CARE | 06 Oct 2025 | Non-fund-based, LT/ST bank guarantee | 100.00 | CARE BBB+; Stable / CARE A2, reaffirmed | C25 p1, p4 |
| CARE | 04 Oct 2024 | Non-fund-based, LT/ST bank guarantee | 100.00 | CARE BBB+; Stable / CARE A2, assigned | C24 p1, p4 |
| CARE fund-based | both | none rated by CARE; the Rs 44.90 crore overdraft is mentioned, not rated | 0 rated | NA | C24 p2, C25 p3 |

- CARE lender details: NOT FOUND (Annexure 5 link, careratings.com/bank-rated?Id=wSZizsMwujbfRByppn64MA==, returned 502 once and then a JavaScript shell with no lender data).
- Other agencies' rating actions and limits: items S1 and S2 only. Not for the booklet.

## 4. Order book

| Date | Unexecuted order book | Multiple as printed | Slow-moving | States | Source |
|---|---|---|---|---|---|
| Jan 2016 | ~Rs 1,400 crore, 2 to 3 years | NA | NA | NA | CR17 p3 |
| 27 Nov 2020 | Rs 2,066.72 crore | NA | NA | NA | B20 p2 |
| 30 Jun 2024 | Rs 2,681 crore, 1 to 3 years | 4.39x FY24 total income (provisional) | Rs 425.01 crore | nine; "inclined towards Maharashtra and Rajasthan" | C24 p2 |
| 30 Jun 2025 | Rs 1,878.72 crore, 2 to 3 years | 2.93x FY25 net sales | Rs 196.37 crore | nine, listed | C25 p2 |

- Computed: 1,878.72 / 639.86 = 2.936x; 2,681 / 610.85 = 4.389x; slow-moving share 10.45% (2025) and 15.85% (2024); order book down Rs 802.28 crore year on year.
- Pipeline: Rs 338 crore where the company is L1 bidder (C24 p2).
- Past execution: projects of Rs 30 to 840 crore, total Rs 1,767.82 crore "in the last few years" (C24 p2).
- Conflict: C25 p2 describes the Rs 2,681 crore comparator as "as on June 30, 2023"; C24 p2 dates the same figure 30 Jun 2024. Treat C24's own date as correct; S5.
- States in the 2025 order book: Maharashtra, Rajasthan, Uttarakhand, Gujarat, West Bengal, Karnataka, Uttar Pradesh, Madhya Pradesh, Andhra Pradesh (C25 p2). Ahmedabad and Uttarakhand are named as the newly awarded projects being mobilised (C25 p2).
- Concentration by value (per state, per client, top project): NOT FOUND in any rationale. CARE gives only the direction (Maharashtra and Rajasthan, 2024).

## 5. Client mix

- "the entire order book comprises contracts awarded by government entities, including urban local bodies" (C25 p2, 06 Oct 2025). Verified.
- Programmes: AMRUT, Namami Gange (CARE spells it "Namame Gange"), World Bank and German bank aided projects (C24 p2; C25 p3).
- Clients are departments under state and central government and municipal corporations (C24 p3; C25 p3). Navi Mumbai Municipal Corporation named for a compost project (B20 p3; B23).
- Named clients with values: NOT FOUND.

## 6. Interest rate

NOT FOUND. Searched: C25, C24, B23, B20, B20M, CR17 (full text and page images) for "interest rate", "rate of interest", "%" beside debt lines, "cost of borrowing". None prints a rate. Interest coverage is printed (section 2) but no rate. Per README, no interest figure may be printed.

## 7. People (names and titles only from rationales)

| Name as printed | Title as printed | Source |
|---|---|---|
| Sahebrao Khilari | Chairman and Chief Executive Officer (CEO); B.E. Civil; over three decades of experience | C25 p1 (06 Oct 2025); C24 p1 (04 Oct 2024) |
| Sahebrao Sukhdeo Khilari | Chief Executive Officer | B20 p3 (15 Dec 2020); CR17 p4 says "managed by Mr Sahebrao Sukhdeo Khilari" |
| Anjali Khilari | Director | C25 p1; C24 p1 |
| Ayush Khilari | Director; M.E. in Civil Engineering; over a decade of experience | C25 p1; C24 p1 |
| CFO or finance head | NOT FOUND | see below |

- Website check for people: not possible (site does not resolve).
- CFO NOT FOUND. Checked: all six rating documents (no finance officer named; the contacts printed are the agencies' own analysts), the dead website, khilariinfra.in placeholder, GLEIF record (no officers). Not checked: MCA (login or fee, out of scope), LinkedIn (search quota exhausted). Spelling note: the rationales print "Ayush", not "Aayush".

## 8. Address

| As printed | Source | Grade |
|---|---|---|
| "101 PRABHAT CENTRESECTOR-1A CBD BELAPUR", MUMBAI, IN-MH, 400614 (legal and headquarters address, identical) | GLEIF LEI 984500672F9FFA543B07, record updated 18 Sep 2026 | Verified (official LEI registry; the missing space after CENTRE is in the record) |
| "registered office in Navi Mumbai, Maharashtra" | C25 p3; C24 p3 | Verified, city only |
| "The administrative office of the Company is located in CBD Belapur, Navi Mumbai" | B20 p3; B23 | Verified, area only |

For the letter page: 101, Prabhat Centre, Sector 1A, CBD Belapur, Navi Mumbai 400614, Maharashtra, with the note that the rationales confirm Navi Mumbai and CBD Belapur and the street line comes from the LEI register. The website could not confirm it.

## 9. Company facts

- Incorporated 2005 as Ask Infrastructure Private Limited, renamed KIPL in 2010 (C25 p3; C24 p3). B20 p3 says the rename happened in 2005; CR17 p4 says incorporated 2007. CIN on the LEI record carries 2005. Conflict noted (S5).
- Over 14 states of operation (C25 p3; C24 p3); order book in nine states (C25 p1, p2; C24 p1, p2).
- Registered as Class A1 contractor across states (C25 p3; C24 p3).
- Subsidiary: Kinvan Private Limited, pharmaceutical (C25 p1). Details: S3, S4.

## 10. NOT FOUND list (searches named)

| Item | Searched |
|---|---|
| ICRA, India Ratings, Acuite, Infomerics rating | web search "Khilari Infrastructure" with each agency name and site: filters (08 Oct 2026); zero Khilari results; ICRA and CRISIL search endpoints probed by curl, no usable result |
| CRISIL after Apr 2018 | two web searches on the company name with CRISIL, 2018 to 2020; zero results |
| Brickwork 07 Feb 2019 and 09 Mar 2022 rationales | web search on brickworkratings.com; not found (known only from the history tables in B20M, B20, B23; see S1) |
| CARE rationale after 06 Oct 2025 (FY26) | web searches stopped by quota; browser not connected; not found |
| Tender or award notices naming the company | AMRUT approved-projects page (amrut.mohua.gov.in) fetched, zero "Khilari" hits; two further searches blocked by quota |
| Website | khilariinfra.com, www.khilariinfra.com (no DNS record); khilariinfra.in (placeholder); khilari.com (no response) |
