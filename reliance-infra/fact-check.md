# Reliance Infrastructure Limited: dossier fact check (RI-1)

Dossier `src/13_Reliance_Infrastructure_Dossier.pdf` (prepared 8 Oct 2026) is a checklist only and is never cited. Each claim is tested against the company's filings in `src/d/`. Page numbers are PDF page indexes; filing dates as in data.md. Computed figures from `src/ri-calc.out.txt`.

Verdicts: Right / Wrong / Stale / Unsupported.

| # | Dossier claim | Verdict | What the filings say | Source |
|---|---|---|---|---|
| 1 | FY25 consolidated operating income Rs 23,592 Cr | Right | Revenue from operations Rs 23,591.88 Cr, CONSOLIDATED | AR FY25 PDF p235, filed NSE 17 Jul 2025; AR FY26 PDF p218 |
| 2 | FY24 operating income ~Rs 22,050 Cr, growth +7% | Right (rounded) | FY24 Rs 22,066.86 Cr; growth 6.91% (Computed) | AR FY25 PDF p235 |
| 3 | FY25 PAT Rs 494 Cr | Wrong (factor of 10) | Net profit attributable to owners Rs 4,937.52 Cr; total net profit incl. non-controlling interest Rs 9,177.22 Cr. 494 is 4,937.52 / 9.99 (Computed): a crore and billion slip in the dossier's news source | AR FY25 PDF p235; AR FY26 PDF p285 |
| 4 | FY24 PAT Rs (161) Cr loss | Wrong (factor of 10) | Net loss attributable to owners Rs (1,608.66) Cr; total (1,147.98) | AR FY25 PDF p235 |
| 5 | "Turnaround to profit" in FY25 | Right in direction only | Owners' profit FY25 4,937.52 against FY24 loss (1,608.66), CONSOLIDATED. Standalone (the EPC entity) still lost (1,108.05) as filed, (609.96) restated | AR FY25 PDF p153, p235; AR FY26 PDF p132 |
| 6 | Net worth FY25 Rs 14,287 Cr, FY24 ~Rs 8,428 Cr, +70% | Right (MD&A basis) | MD&A states 14,287 and 8,428; growth 69.52% (Computed). Balance sheet equity attributable to owners is 14,430.20 and 8,747.23 (64.97%). The company's two figures differ | AR FY25 PDF p73, p234; AR FY24 PDF p29 |
| 7 | Net worth "+70% (equity raise / resolution)" | Unsupported as a cause | The filings show warrant money and settlements, but the MD&A gives no attribution of the change; not tested further | n/a |
| 8 | Zero standalone bank debt (FY25) | Right, with a caveat | Standalone term loans from banks and working capital loans from banks are nil at 31 Mar 2025 and 31 Mar 2026. Standalone borrowings still total Rs 469.01 Cr (FY25 as filed) and Rs 569.74 Cr (FY26), all inter-corporate deposits; non-fund-based bank limits (guarantees) remain | AR FY25 PDF p185, p187; AR FY26 PDF p166 to 167; IND-Ra 11 Jul 2025 PDF p2 |
| 9 | FY24 standalone bank debt "high (legacy)" | Unsupported as worded | FY24 standalone bank borrowings were Rs 172.91 Cr (term 27.24, working capital 145.67); total borrowings Rs 3,059.84 Cr were mostly debentures and other lenders | AR FY25 PDF p185, p187 |
| 10 | EPC order book over Rs 9,000 Cr | Wrong (factor of 10) | 31 Mar 2025: Rs 899.73 Cr (MD&A), Rs 1,337.70 Cr (note 24.4), later restated to Rs 443.57 Cr. India Ratings wrote "around INR9 billion" (= Rs 900 Cr), the likely source of the slip. 31 Mar 2026: Rs 363.25 Cr | AR FY25 PDF p73, p192; IND-Ra 11 Jul 2025 PDF p4; AR FY26 PDF p52, p172 |
| 11 | "Resurgent Reliance" turnaround narrative, AR FY25 | Right | Cover title of AR FY25 | AR FY25 PDF p1 |
| 12 | Legal name, NSE RELINFRA / BSE 500390, CIN L75100MH1929PLC001530 | Right | As printed | AR FY26 PDF p1 |
| 13 | Registered office, Reliance Centre, Ground Floor, 19 Walchand Hirachand Marg, Ballard Estate, Mumbai 400001 | Right | As printed (400 001) | AR FY26 PDF p1 |
| 14 | Incorporated 1929 | Right (from CIN) | CIN year segment 1929 | AR FY26 PDF p1 |
| 15 | Punit Narendra Garg, CEO / Director | Stale | Ceased as Executive Director and Chief Executive Officer w.e.f. 1 Apr 2025 | NSE filing 2 Apr 2025 |
| 16 | Vijesh Babu Thota, Chief Financial Officer, primary buyer | Stale | CFO until 23 May 2026; now Executive Director & Chief Executive Officer. CFO is Asheesh Chaturvedi from 23 May 2026 | AR FY26 PDF p131; Board outcome NSE 23 May 2026 |
| 17 | Email vthota@rinfra.com (inferred) | Unsupported | Not printed in any filing read. Only printed address is rinfra.investor@reliancegroupindia.com | Q1 FY27 results PDF p9 |
| 18 | ERP: SAP likely | Right (FY25, standalone) | Standalone auditor's report names "accounting software SAP" for FY25. FY26 standalone report does not name the software | AR FY25 PDF p142; AR FY26 PDF p121 |
| 19 | Business mix: power, roads, Metro Line 1, defence, EPC as one segment | Right | Segments Power, E&C, Infrastructure, Others | AR FY26 PDF p284 |
| 20 | EPC is one segment of a holding, not a pure contractor | Right, and stronger than stated | E&C was 0.93% of group segment revenue in FY26 (Computed) | AR FY26 PDF p285 |
| 21 | EPC O2C has milestone billing, retention, bank guarantees | Right in kind, unquantified | Retention is bundled inside receivables and payables; no separate figure. Non-fund-based limits exist | AR FY26 PDF p158, p167 |
| 22 | "Scaling Reliance Defence" | Right in direction (out of scope) | Defence partnerships listed | Presentation 7 Dec 2025 PDF p11 |
| 23 | Historic pain was group-level leverage, litigation, stuck receivables | Right in kind | Details are sensitive; see sensitive-garvis.md | n/a |
| 24 | FY26 figures | Not in dossier | FY26: consolidated revenue 20,440.53; owners' profit 2,900.23; MD&A net worth 17,876; E&C revenue 237.22; order book 363.25 | AR FY26 PDF p218, p52, p285 |

Tally (script: `python -I -c` over the verdict column, 24 rows): Right 15 (several with caveats), Wrong 3, Unsupported 3, Stale 2, not in dossier 1.

The three Wrong items (FY25 PAT, FY24 loss, order book) are each a factor of 10 out (Computed: 9.99, 9.99, 10.0). That pattern fits a crore and billion conversion slip in the dossier's secondary sources; the cause itself is not proven. None of the three may be used anywhere, including as Secondary (dossier).
