# Jyoti Structures Limited: depth (JS-1)

Basis STANDALONE. "p" = the page of the PDF in src/d. Every quote below was read from the rendered page image ("image-checked"). Sensitive items are referred to by number only (S1, S2 ...; see sensitive-garvis.md).

**Who speaks.** No earnings calls or investor presentations exist for this company (data.md section 13). Management speaks in only two places:
- press releases, every one credited to "A Company Spokesperson", who is never named; never attribute these to a person;
- the annual report letters of Mr. Abdul Hameed Khan, Whole-Time Director and Chief Financial Officer.

## 1. Management's own words

### On working capital, cash and funding
1. **Board / Directors' Report, AR FY26 p20 (filed 22 Jul 2026), image-checked.** "the Company identified key enterprise- level risks relating to availability of fund-based and non-fund-based limits, working capital management, project execution, workplace safety, cost escalation". This is the only place a filing names working capital as a risk. No figure or plan follows it.
2. **Mr. Abdul Hameed Khan, Whole-Time Director & CFO, AR FY25 p6 (filed 20 Aug 2025), image-checked.** "Looking ahead, we remain committed to profitable growth, enhanced cash flows, and building long-term value for all stakeholders." Among the "strategic priorities" for FY 2025-26 he lists: "Strengthening cash flows".
3. **Mr. Abdul Hameed Khan, AR FY26 p7 (filed 22 Jul 2026), image-checked.** "We continue to focus on quality execution, timely delivery, prudent risk management, and maintaining financial discipline across all our operations." The FY26 letter does not mention cash flow.

### On collections and receivables
4. **Company accounting policy, AR FY26 p105, image-checked.** "Payment is generally due upon receipt of the invoice, payable within 90 days or less. Contractual retention amounts billed to customers are generally due upon expiration of the contract period."
5. **Company note, AR FY26 p124, image-checked (linked to S4).** "The Company has initiated reconciliation process with Trade Receivables to determine the continuation of contracts, details of work in progress with age, stage of completion, progress billing, disputed and undisputed dues." The same sentence appears in AR FY25 p116, so it has not changed in a year.
6. **Directors' Report "Road Ahead", AR FY25 p14, image-checked.** "Improved Financial Health of SEBs and DISCOMs: Continued policy thrust on reforming SEBs and DISCOMs is translating into improved liquidity, timely payments, and greater operational discipline [...] benefiting EPC contractors significantly." This is the company's view of its clients' payment behaviour. It does not describe its own collections.

### On advances
7. **Company accounting policy, AR FY26 p105, image-checked.** "A liability is recognised for advance payments, and it is not considered as a significant financing component because it is used to meet working capital requirements at the time of project mobilization stage."

### On execution
8. **A Company Spokesperson, Q4 FY26 press release p3 (30 Apr 2026), image-checked.** "Growth this year was volume-led and supported by better project mix, tighter cost controls, and improved site-level productivity. With a stable order book and enhanced capacity in place, we are focused on sustaining this momentum while scaling responsibly and strengthening margins."
9. **A Company Spokesperson, Q1 FY27 press release p3 (4 Aug 2026), image-checked.** "With a robust order pipeline and continued opportunities in the transmission and distribution (T&D) sector, the Company remains focused on disciplined execution and sustainable growth."
10. **Company Secretary's filing, 21 Feb 2025 (ann_Intimation-0112045 p1), image-checked.** "the company is restarting its second tower manufacturing unit at Nasik by the end of March this year."

**Working-capital target: none.** No working-capital, receivable-day, cash-cycle or net-working-capital target appears in any document. A script search of 74 text-layer documents found 0 hits (planted hit confirmed; src/js-scan.py), and the scanned results pages were read from images. No speaker has committed to a working-capital number, so there is nothing to hold them to and nothing to quote as "their own target".

## 2. Promises against delivery (internal, factual)
| Promise (speaker, document, date) | Delivery (document) | Reading |
|---|---|---|
| "Strengthening cash flows" and "enhanced cash flows" for FY26 (CFO, AR FY25 p6, 20 Aug 2025) | Operating cash flow was (268.97) in FY26, against (177.08) in FY25 (AR FY26 p91) | Not delivered on the measure the filings report. Profit rose 56.49% in the same year (Computed). |
| Second Nasik unit to restart "by the end of March this year" (filing of 21 Feb 2025) | 28 May 2025 press release: "Company has started Fabrication at its Nasik Plant 2". AR FY26 p15: "commenced commercial manufacturing operations at its second unit of Nashik Plant II in January 2026" (the printed dash before "II" is left out here). | Fabrication was first reported as started on 28 May 2025, after the stated end of March. Commercial operation was reported for January 2026. The unit's capacity is given three ways: 33,000 MT (21 Feb 2025), "approximately 35,000 metric tonnes" (CFO, AR FY26 p7) and 36,000 MT (AR FY26 p15). |
| Navinal LILO, "18 months by April, 2026" (filing of 23 Oct 2024) | No completion filing found up to 8 Oct 2026 (NSE index) | Status NOT FOUND. A missing filing is not proof of delay. |
| KPS III to AP44 line, completion "31.10.2025" (filing of 16 Jul 2024) | No completion filing found | Status NOT FOUND. |
| Rs 639 Cr orders "to be commissioned in 12 to 15 months" (press release of 11 Aug 2025) | Due between Aug and Nov 2026; nothing filed yet | Open. |
| Rights issue proceeds deployed by 31 Mar 2026 | See S12 | Garvis only. |
| Completions announced: 400 kV Pirana LILO (filed 23 Feb 2026) and 400 kV Gadag II for Renew Power (filed 4 Mar 2026) | Filings ann_Intimation-1823905 and ann_Intimation_400Kv_Gadag_II_TL-2601880 | Delivered. |

## 3. Disconfirm step (one search designed to prove each headline wrong)
| Headline finding | Disconfirming search | Result |
|---|---|---|
| Legacy balances dominate receivables (89.25% older than 3 years) | Looked for a later recovery or write-off: consolidated ageing (AR FY26 p175), the Sep 2025 balance sheet, the Q1 FY27 limited review (4 Aug 2026) | **Holds.** Receivables rose to 2,187.45 by Sep 2025 and 2,223.10 by Mar 2026. Item S4 is still open in the Q1 FY27 filing (res_q1fy27 p5). |
| The running book is clean enough to price (116 days) | Rolled the ageing forward bucket by bucket (script) and compared the two printed versions of Mar 2025 | **Weakened.** The over-3-years bucket rose Rs 146.85 Cr, Rs 139.76 Cr of it unexplained by ageing, and Mar 2025 was restated by Rs 46.12 Cr between reports. Operating cash flow was negative by Rs 268.97 Cr while net receivables rose only Rs 86.25 Cr; margin money (up Rs 98.63 Cr) explains part of the rest. This is why the verdict is LIGHT and not FULL. |
| FY26 revenue Rs 750.87 Cr | Compared the AR with the Q1 FY27 results year column | **Holds** (750.87 in res_q1fy27 p2). Q1 FY27 figures carry item S9. |
| Order book Rs 2,274 Cr at 1 Apr 2026 | Looked for a second statement in the Q4 FY26 and Q1 FY27 press releases | **Single source.** Both releases say only "stable order book" and "robust order pipeline". Earlier statements disagree with each other (data.md section 11). |
| The Rs 639 Cr order is live | Cancellation scan, see section 4 | **Holds**, but the order's description differs between the press release and AR FY26 p15. |
| CFO is the incumbent | Q1 FY27 results signature (4 Aug 2026) and AGM attendance (13 Aug 2026) | **Holds.** He is the only executive director left. |
| No borrowing rate is disclosed | Notes 15, 19 and 30, the risk note on p123, the MA report, and all press releases | **Holds.** The only rate printed is a 5.50% deposit (MA report p8). |

## 4. Live-deal check on the large orders
Scans (src/js-scan.py; output in src/js-scan-corpus-output.txt):
- (a) the NSE announcement index, 1 Apr 2025 to 8 Oct 2026, 101 rows;
- (b) the 46 company-site announcements and 12 NSE filings downloaded.

Terms searched: termination, cancellation of an order or contract, short closure, foreclosure, withdrawn order, annulment. A planted hit fired, and both scans returned **0 hits**.

| Order (filed) | Value | Later evidence | Status |
|---|---|---|---|
| POWERGRID ±800 kV HVDC KPS2 to Nagpur (23 Jan 2025) | Rs 741.28 Cr incl GST | AR FY25 p14 lists it in FY25 contracts; the 21 Feb 2025 filing cites it within orders in hand. 42-month term. | Live; no cancellation |
| Adani Energy Solutions, Navinal LILO (23 Oct 2024) | Rs 450.01 Cr excl GST | AR FY25 p14 lists it. No completion filed. | Live as far as the filings show; completion NOT FOUND |
| Adani Energy Solutions, Boisar II to Pune III (25 Feb 2025) | Rs 389.36 Cr incl GST | AR FY25 p14 lists it. 18 months, so due about Aug 2026. | Live; completion not filed |
| Not named, 765 kV and 400 kV turnkey EPC (11 Aug 2025) | Rs 639 Cr excl GST | AR FY26 p15 lists it as FY26's largest order (639.08) | Live; no cancellation |
| AESL Projects, ±800 kV Bhadla 3 to Fatehpur (15 Oct 2025) | Rs 288.36 Cr excl GST | AR FY26 p15 lists it (288.38) | Live |
| Adani Electricity Mumbai, Coastal Road works (30 Mar 2026) | Rs 88.33 Cr excl GST | AR FY26 p15 lists it (88.35) | Live |
| Sri Lanka 220 kV line in a JV with Fentons (13 May 2026) | Rs 67.96 Cr (JSL share not stated) | Press release of 14 May 2026 confirms a signed contract | Live |
