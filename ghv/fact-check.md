# Fact-check: dossier (ghv-dossier-internal.pdf, 7 Oct 2026) and gtm ghv-india.json (5 Oct 2026)
Verdicts: Verified / Wrong / Misattributed / NOT FOUND / Weak. Evidence files in src/. Ratio checks: `python -I -c "print(20726.65/2430.81, 12717/2431)"` = 8.53, 5.23.

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| 1 | CIN U45202MH2009PTC196564; Mumbai; incorporated 2009 | Partly Verified | Incorporated 2009, Mumbai-based: CRISIL 11-Feb-26 § About. CIN and Andheri registered address NOT FOUND in my sources (Zaubacorp/ClearTax not fetched; MCA barred) |
| 2 | Lineage from 1965 | Verified | CRISIL 11-Feb-26 § About: GH Vijapura & Co set up 1965 by the late Hussein M Vijapura |
| 3 | Revenue FY25 ">Rs 1,000 Cr" | Verified but stale/vague | FY25 2,431 combined; FY24 3,361 (CRISIL 11-Feb-26 KFI) |
| 4 | gtm revenue 2,430.81 FY25, source = Acuite page of GHV Infra | Number ok, label Wrong | 2,431 is CRISIL's COMBINED GHV-India + GHV-Infra figure; the cited Acuite page is the listed co |
| 5 | Dossier order book ">Rs 7,000 Cr" | Misattributed | 7,000 is GHV Infra's post-UAE headline (search snippet). GHV India 7,833 at 31-Mar-25 (Acuite 16-May-25); combined 12,717 at 30-Sep-25 (CRISIL) |
| 6 | gtm orderBook 20,726.65 = "5.17x revenue" | Wrong | 20,726.65/2,430.81 = 8.5x, not 5.17. Not in any CRISIL document; CRISIL says mgmt TARGETS 20,000. Source NOT FOUND, do not use |
| 7 | Rs 2,645 Cr UAE EPC, 24 months | Misattributed | Won by GHV Infra Projects (listed) from Rana Exim FZ-LLC per nbmcw/propnewstime snippets (Weak: primary BSE filing not fetched). CRISIL 11-Feb-26 does put UAE at 21% of combined order book |
| 8 | Rs 1,060 Cr GHV Infra <- GHV India, "30-month" | Partly Wrong | 1,060 cr verified but dated 25 Mar 2025 and 48 months (BSE pdf) |
| 9 | "Rs 1,250 Cr Maharashtra expressway, Apr-2026, 30 months" | NOT FOUND | no document in src; probably GHV Infra's own order |
| 10 | Related-party flow GHV India <-> GHV Infra | Verified | BSA + RPT approval up to Rs 15,000 cr (CRISIL 11-Feb-26) |
| 11 | gtm "Q1 FY26 profit -43% on +172% revenue" | NOT FOUND | Not in CRISIL; most likely the listed GHV Infra's quarter. Never print for GHV India |
| 12 | NHAI milestone billing (gtm), "NHAI Delhi-Mumbai Expressway pkgs 27/28" (dossier) | Partly | NHAI named as >85% of order book in Mar-24 (CRISIL 18-Mar-24). Packages 27/28 NOT FOUND. By Feb-26 pressure is Maharashtra govt / MCGM, not NHAI |
| 13 | Website ghvinfra.com / email firstname@ghvindia.com | Wrong | ghvinfra.com is GHV Infra Projects Ltd (listed) (site About page: it is the acquirer-led listed co). No GHV India site found. Email domain NOT FOUND |
| 14 | Zahid (Jahidmohmed) Vijapura "MD" of GHV India | Weak | Promoter/co-founder yes (CRISIL: Jahid, Mustaq, Farooq, Shafi Vijapura). MD title NOT FOUND |
| 15 | gtm "Husenbhai Vijapura, Chairman" | Wrong | Founder Hussein M Vijapura is "the late" (CRISIL 11-Feb-26). Jahidmohmed H(usenbhai) is the acquirer of GHV Infra |
| 16 | Shafi / Farooq Vijapura directors; Vyas, Shah, Shetty | Weak | Shafi and Farooq are named promoter-brothers (CRISIL). Acuite 16-May-25 lists Farooq, Jitendra Vyas, Jahidmohmed, Rayappan Kannan, Aalok as directors of GHV INFRA. Shah/Rupa Shetty NOT FOUND. GHV India board NOT FOUND (MCA barred) |
| 17 | CFO not publicly named | Partly | GHV India CFO NOT FOUND. GHV Infra CFO Sadanand Shetty from 26-Dec-24 (BSE pdf), 38 yrs, "coordinated SAP implementation", reports to MD |
| 18 | ERP: no SAP signal; gtm "unconfirmed, Low" | Fair | ERP NOT FOUND. Only hint is CFO bio above (prior employer, Weak) |
| 19 | gtm null fields (borrowings etc.) | Fillable | borrowings FY25 843 combined / FY24 530; GCA, receivables+unbilled 1,190 -> 660 |

Summary: dossier headline numbers (7,000 book, UAE, Q1 FY26) belong to the listed affiliate or are unsourced; use CRISIL figures in data.md.
