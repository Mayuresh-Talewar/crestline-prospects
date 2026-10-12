# TEMPLATE-SLOTS: Capacite booklet master (16 pages) as a fill-in template (SALES-22)

Basis: text of capacite-booklet-master.pdf (pymupdf), read page by page, checked against capacite-storyline.md, capacite-pack-data.md, brochure/crestline-solutions.md. Kinds: **REQ/OPT** = researcher fills from a document; **CALC** = our calculator's output from filled slots (never typed); **FIX** = Crestline product content, identical for every company.

## 1. Narrative spine (5 lines)
1. **Cover + letter (p1-2):** a private, addressed review; "ten days, and what they are worth", with the company's own target priced in the letter.
2. **Ch1-3, their story (p3-5):** their stated promises -> money earned and not yet cash -> bills growing faster than sales.
3. **Ch4, the turn (p6):** the latest quarter, where ten days moved about 150 Cr of cash; "your ERP can say which ten days".
4. **Ch5-10, Crestline answers (p7-12):** five lenses -> how it reads dates -> reason, desk, date -> simulator and ticket flow -> their own target priced.
5. **Ch11-13, proof and ask (p13-16):** it has been done before (peers and themselves) -> read-only, what we are not -> one site, fourteen days invitation + sources -> contact back cover.

Page jobs: p1 cover, the stuck-cash total. p2 letter, personal hook and three numbers. p3 their five commitments, "three are about time". p4 stuck cash split unbilled vs unpaid. p5 indexed lines, receivables vs sales. p6 latest quarter, ten days moved. p7 five lenses, one company figure each. p8 profit-to-cash waterfall and one bill's life. p9 ageing movement and vendor days vs peers. p10 simulator, vendor advisor, client lens. p11 finding to ticket, Ask Crestline. p12 target priced against borrowings. p13 peer proof and own proof. p14 security, what Crestline is not, go-live. p15 pilot strip, QR, sources. p16 contact.

## 2. Page by page: headline pattern and slots
{x} = company-specific. Slot ids refer to the table in section 3.

**p1 Cover.** Hero "₹{STUCK_TOTAL} Cr earned, still waiting to be cash". Fixed: "Working-capital review", confidentiality lines, "Copy no. 1 of 1", sender block. Slots: COMPANY_NAME, MONTH_YEAR, ADDRESSEE, STUCK_TOTAL.

**p2 Letter.** "This booklet is about ten days, and what they are worth to {company_short}." Body: "{Annual Report} sets a target of {WC_TARGET} working-capital days, from {WC_CURRENT}, and you have already taken {WC_REDUCED} days out this year. The {GAP_DAYS} days still to go are ₹{TARGET_CASH} Cr of cash, and about ₹{TARGET_INTEREST} Cr a year in interest at the {RATE}% your fund-based limits now cost. Ten days less on the wait to bill and ten on the wait to be paid is ₹{TEN_PLUS_TEN} Cr." Slots: LETTER_DATE, ADDRESSEE, SECOND_CONTACT, WC_TARGET, WC_CURRENT, WC_REDUCED, RATE + CALC results. Disclaimer line FIX.

**p3 Ch1 "It begins with {N} promises, all of them yours."** One row per promise: {figure} + {what} + {source, date}. Capacite rows: revenue growth; new orders and order-book multiple; days more out of WC; WC target; quarters to net debt free. Closer: "{k} of the {N} are not promises about money. They are promises about time." Slots: PROMISE_1..N, ORDER_BOOK_MULT.

**p4 Ch2 "Meanwhile, almost a year of your work is waiting outside."** Hero ₹{STUCK_TOTAL} Cr "earned, and not yet cash, at {BS_DATE}". "{CA_DAYS} days: work done, waiting to become a bill, ₹{CA} Cr"; "{DSO} days: bill raised, waiting to be paid, ₹{REC} Cr". Dot grid "{DOT_COUNT} of 365 lit". Side stats: {COMBINED} days end to end; ₹{OVER6M} Cr bills over six months old, up from ₹{OVER6M_PRIOR} Cr; {PROFIT_SHARE}% of operating profit went into working capital.

**p5 Ch3 "The bills are growing {GROWTH_MULT} times faster than the sales."** Indexed lines (base year = 100) ending {REC_INDEX} and {REV_INDEX}; dashed scenario lines at 10 and 30 days less. Caption: "Bills wait {DSO} days to be paid, against terms of {TERMS}. Your Annual Report's own debtors turnover, {AR_DEBTOR_DAYS} days, agrees." Stats: order book ₹{ORDER_BOOK} Cr, {ORDER_BOOK_MULT}x sales; {CAGR}% a year growth, ₹{REV_Y0} to ₹{REV_Y1} Cr; borrowings ₹{BORR_A} to ₹{BORR_B} Cr.

**p6 Ch4 "Nothing went wrong. Ten days moved."** Requires a latest-quarter story {Q_EVENT}. Three tiles: gross debt, net debt/equity, growth promised vs delivered. Closer: "₹{TEN_DAYS} Cr is what ten days are worth on either wait. One day of revenue is ₹{REV_PER_DAY} Cr." Whole chapter OPT.

**p7 Ch5 "Where does project cash get stuck? Crestline looks through five lenses."** Lens names, definitions, three badges FIX. One company figure per lens: WC "{WC_CURRENT} days, your target is {WC_TARGET}"; O2C "{COMBINED} days"; P2P "₹{PAYABLES} Cr owed to vendors"; Client "{DSO} days against terms of {TERMS}"; Vendor "about {DPO} days, one average".

**p8 Ch6 "Crestline reads the dates your ERP already records."** Copy FIX. Two company views: profit-to-cash waterfall (4 years) and one bill's timeline ({CA_DAYS} + {DSO}); nine step names FIX; step waits ILLUSTRATIVE (CALC in demo-ledger proportions, asterisk mandatory).

**p9 Ch7 "Every rupee waiting gets a reason, a desk and a date."** (a) Ageing bands at two year-ends with movement per band and "+₹{DELTA} Cr more owed for over six months". (b) Vendor days: {COMPANY} {DPO} vs three named peers; "credit each vendor agreed: not public".

**p10 Ch8 "Test the fix before you make it. Then put a name on it."** Simulator: 30 days each wait = ₹{SIM_EACH} Cr, both = ₹{SIM_BOTH} Cr cash, ₹{SIM_INT} Cr interest a year at {RATE}%; vendor credit held at {DPO}. Advisor and client-lens copy FIX; "₹{PAYABLES} Cr owed to vendors, ₹{MSME_PAYABLES} Cr to MSME"; client chips from CLIENT_LIST.

**p11 Ch9 "It writes the finding, names the owner, and follows up until the cash moves."** FIX except the sample finding "Bills wait {DSO} days to be paid, against terms of {TERMS}", the Ask example "What if bills were paid ten days sooner? {DSO} to {DSO-10} days, ₹{TEN_DAYS} Cr released, ₹{TEN_INT} Cr interest a year", and the sample owner line (illustrative).

**p12 Ch10 "Your own target, priced."** "{GAP_DAYS} days from {WC_CURRENT} to your target of {WC_TARGET}"; "₹{TARGET_CASH} Cr cash released, once"; "₹{TARGET_INTEREST} Cr interest saved a year at {RATE}%". Five-row table (unbilled 10 days, unpaid 10 days, over-six-month bills back to prior level, target, vendors "None claimed"). Bar: borrowings 3 points vs target, "{PCT_OF_BORR}% of your ₹{BORR_B} Cr". Closing line about borrowing only if borrowings really rose.

**p13 Ch11 "It has been done before. Including by you."** Three public proofs: PROOF_A, PROOF_B (company, metric, from, to, source) and the company's own (WC_REDUCED, promised more). Footer FIX: "not Crestline clients".

**p14 Ch12 "It reads your books. It never writes to them."** All FIX (read-only, hourly sync, ISO status, hosting, what Crestline is not, go-live, first sync, no change). Client sign-off needed (section 4).

**p15 Invitation "Give us one site and fourteen days."** FIX except "Thirty minutes with you, or with Mr. {SECOND_CONTACT}" and SOURCES_PARA (filings with dates, formulas with {REV_PER_DAY} and {RATE}, chart page refs, "step waits not public", error-recipient line).

**p16 Back cover.** FIX; copy number per print.

## 3. Researcher checklist (single table, the source of the counts)
| Slot | What | Unit | Pages | Source document | Kind | Fallback if not published |
|---|---|---|---|---|---|---|
| COMPANY_NAME | legal and short name | text | all | Annual Report (AR) cover | REQ | none |
| ADDRESSEE | name, title, registered address | text | 1,2 | AR directors and corporate info | REQ | use CFO if chair does not run finance |
| SECOND_CONTACT | CFO name | text | 2,15 | AR key managerial personnel | REQ | MD or company secretary |
| LETTER_DATE | letter date and booklet month | date | 1,2 | us | REQ | none |
| BS_DATE | balance-sheet date | date | 4 | audited results | REQ | none |
| REVENUE_FY | revenue from operations | Cr | 5,6,15 | audited results | REQ | none |
| REV_SERIES | revenue, 5 years | Cr | 5 | investor presentation (IP) or ARs | REQ | 3 years |
| REC | trade receivables incl. non-current | Cr | 4,8 | audited results | REQ | none |
| CA | contract assets / unbilled incl. non-current | Cr | 4,8 | audited results | REQ | no line: merge into REC, drop the unbilled/unpaid split on p4, p8, p10, p12 and say so |
| REC_SERIES | receivables, 4 years | Cr | 5 | IP | REQ | 2 years from ARs |
| PAYABLES | trade payables | Cr | 7,9,10 | audited results | REQ | none |
| MSME_PAYABLES | payables to MSME | Cr | 9,10 | audited results or AR note | OPT | omit the MSME line |
| BORR_SERIES | borrowings, 3 year-ends | Cr | 5,12 | audited results, IP | REQ | 2 points |
| RATE | stated cost of fund-based debt | % | 2,10,12,15 | IP or results call | REQ | finance cost / average borrowings, labelled implied |
| AGEING_FY | receivable ageing, 6 bands | Cr | 4,9 | AR notes | REQ | drop p9 ageing and over-six-month tiles, say "ageing not published" |
| AGEING_PRIOR | same, prior year | Cr | 4,9 | AR notes | REQ | as above |
| TERMS | stated receivable terms | days | 5,7,11 | AR accounting policy | REQ | "terms not published", any assumed figure flagged |
| AR_DEBTOR_DAYS | company's own debtors turnover | days | 5 | AR ratio table | OPT | omit the "agrees" sentence |
| WC_TARGET | stated WC-days target | days | 2,3,7,12 | AR or results call | REQ | no target: contract-terms scenario; retitle p12 "Terms-based scenario" |
| WC_CURRENT | stated WC days | days | 2,3,7,12 | AR | REQ | our combined days, labelled computed |
| WC_REDUCED | days taken out last year | days | 2,3,13 | AR or IP | OPT | drop that clause on p2, p3, p13 |
| ORDER_BOOK | order book at year end | Cr | 3,5 | IP | REQ | omit the "work is secured" stat |
| PROMISE_1..N | stated guidance (growth, orders, WC, debt), min 3 | text+source | 3 | results call or AR | REQ | fewer promises, retitle "{N} promises" |
| OPPROFIT_SERIES | operating profit before WC change, 4 years | Cr | 8 | IP cash-flow slide | REQ | drop the waterfall on p8 |
| WC_CHANGE_SERIES | working-capital change, 4 years | Cr | 4,8 | IP cash-flow slide or AR | REQ | as above |
| TAX_PAID | tax paid, 4 years | Cr | 8 | IP or AR cash flow | OPT | omit the tax bar |
| OPCASH_SERIES | operating cash, 4 years | Cr | 8 | IP or AR | REQ | as above |
| CLIENT_LIST | 4 public and 4 private named clients | text | 10 | AR or IP | REQ | show categories, not names |
| PEER_SET | 3 peers: payables, cost base, revenue | Cr | 9,13,15 | peers' audited results | REQ | 2 peers, or drop peer bars |
| PROOF_A | public WC improvement at a peer or large player | metric, from, to | 13 | that company's report | REQ | one proof plus the self proof |
| PROOF_B | second public proof | metric, from, to | 13 | that company's report | REQ | as above |
| Q_EVENT | latest-quarter story | text | 6 | latest results call | OPT | drop chapter four, state "no figures newer than {BS_DATE}", renumber to twelve chapters |
| Q_FIGURES | latest-quarter debt, net D/E, growth, guided growth | Cr, x, % | 6 | latest results and call | OPT | drop with Q_EVENT |
| SOURCES_PARA | filings, dates, page refs, formulas | text | 15 | researcher | REQ | none |
| REV_PER_DAY | revenue / 365 | Cr | 6,15 | calculator | CALC | none |
| DSO_DAYS | receivable days | days | 4,5,7,9,10 | calculator | CALC | none |
| CA_DAYS | contract-asset days | days | 4,8 | calculator | CALC | none |
| COMBINED | CA_DAYS + DSO | days | 4,7 | calculator | CALC | none |
| DPO_DAYS | payable days | days | 7,9,10 | calculator | CALC | none |
| STUCK_TOTAL | REC + CA ("Crestline sum") | Cr | 1,4 | calculator | CALC | none |
| TEN_DAYS | 10 x REV_PER_DAY | Cr | 2,6,11,12 | calculator | CALC | none |
| TEN_PLUS_TEN | both waits 10 days shorter | Cr | 2 | calculator | CALC | none |
| TEN_INT | TEN_DAYS x RATE | Cr | 11,12 | calculator | CALC | none |
| GAP_DAYS | WC_CURRENT - WC_TARGET | days | 2,12 | calculator | CALC | none |
| TARGET_CASH | GAP_DAYS x REV_PER_DAY | Cr | 2,12 | calculator | CALC | none |
| TARGET_INTEREST | TARGET_CASH x RATE | Cr | 2,12 | calculator | CALC | none |
| PCT_OF_BORR | TARGET_CASH / latest borrowings | % | 12 | calculator | CALC | none |
| SIM_30 | 30-day scenarios: each, both, interest | Cr | 5,10 | calculator | CALC | none |
| OVER6M | over-six-month bills, both years, delta | Cr | 4,9,12 | calculator | CALC | none |
| PROFIT_SHARE | WC change / op profit, 4 years | % | 4,8 | calculator | CALC | none |
| CAGR_AND_GROWTH_MULT | revenue CAGR; receivable growth / revenue growth | %, x | 5 | calculator | CALC | none |
| DOT_COUNT | lit dots of 365 | days | 4 | calculator | CALC | none |
| ORDER_BOOK_MULT | order book / revenue | x | 3,5 | calculator | CALC | none |
| STEP_SPLIT | nine step waits, illustrative | days | 8 | calculator (demo proportions) | CALC | asterisk mandatory |
| FIX_LENSES | five lenses, definitions, badges | text | 7 | Crestline product | FIX | none |
| FIX_ENGINE | how dates are read, nine step names | text | 8 | Crestline product | FIX | none |
| FIX_TICKET | finding, 4-step ticket flow, auditor | text | 11 | Crestline product | FIX | none |
| FIX_ASK | Ask Crestline 4 steps, 6 question kinds | text | 11 | Crestline product | FIX | none |
| FIX_SIMULATOR | simulator, vendor advisor, client lens copy | text | 10 | Crestline product | FIX | none |
| FIX_SECURITY | read-only, sync, ISO, hosting, not-an-ERP, go-live | text | 14 | Crestline product | FIX | none (client must verify first) |
| FIX_PILOT | 14-day pilot strip, QR, week 1 and 2 | text | 15 | Crestline product | FIX | none |
| FIX_SENDER | Rajat Kate block, contacts, back-cover tagline | text | 1,2,16 | Crestline | FIX | none |
| FIX_DISCLAIMERS | scenario-not-forecast, not-our-clients, illustrative-split | text | 5,8-13 | Crestline | FIX | none |

By source: Annual Report (ADDRESSEE, SECOND_CONTACT, AGEING x2, TERMS, AR_DEBTOR_DAYS, WC_TARGET, WC_CURRENT, WC_REDUCED, CLIENT_LIST, COMPANY_NAME) | Audited results (BS_DATE, REVENUE_FY, REC, CA, PAYABLES, MSME_PAYABLES, BORR_SERIES) | Investor presentation (REV_SERIES, REC_SERIES, ORDER_BOOK, the four cash-flow series, RATE) | Results calls (PROMISE_n, Q_EVENT, Q_FIGURES) | Peer filings (PEER_SET, PROOF_A/B) | Calculator (CALC rows) | Crestline (FIX rows).

## 4. Needs a source (Capacite pages not supported by our three research files)
A text search of the three files returns no hit for: Q1 FY27, Kalpataru/KPIL, L&T/Larsen, ISO 27001, "15 days" / go live, UAE, "eight quarters", "net debt free". The files cover Q4 FY26 and the Annual Report only.
1. **Q1 FY27 call (p6, p3-ii/iii/v):** gross debt ₹522 Cr in June, net D/E 0.16x, 7% Q1 growth, "~₹150 Cr collections ten days late". Also "0.11x in March" disagrees with the files (company-stated 0.10x; our computed 0.16x at March).
2. **"Five promises" (p3):** only 20% growth, ₹4,500-5,000 Cr orders and the 90-day target are in the files. "25 to 30 more days in FY27" and "eight quarters to net debt free" are not (files: WC "56 to 60 days over 8 quarters", different measure; AR says "90 over 2.5 years").
3. **L&T 22.3% to 11.0% (p13):** no file; the Overall Financial Review is not in our source list.
4. **Kalpataru 75 days, net debt ₹915 Cr down 53%, revenue +22% (p13):** no file.
5. **"ISO 27001:2022 certification in progress" (p14):** no file; the product brief makes no certification claim. Needs proof before print.
6. **"Live in about 15 days" / "15 days to go live" (p7, p14):** no source, and it sits beside a 14-day pilot (p15, supported by storyline). Choose one commitment.
7. **"Hosting for India and the UAE; separate encryption per tenant" (p14):** UAE and encryption claims are in no file (hourly sync is supported).
8. **152 days (p2,3,7,12):** AR26 PDF p.96 states "WC days (152 days)" per storyline SALES-10, but the pack (s.0) found it in no primary document, and about 34 of the 43 days may be reclassification. Definition undisclosed. Print as "the Annual Report states", ask the CFO.
9. **Peer vendor days (p9: B.L. Kashyap 85, Ahluwalia 83, PSP 62):** computed in pack s.5; PSP and Ahluwalia opinions not re-read, PSP URL returned 503 on recheck. Directional only.
10. **₹2,490 Cr (p1, p4):** a Crestline sum, not an audited figure (auditor base ₹2,460.3 Cr net of ECL). Keep the label.
11. **Unbilled vs unpaid split (p4, p8):** AR26 p.148 files retention and unbilled-awaiting-certification inside receivables, so "work done not yet billed" is our reading of the contract-asset line.
12. **FY23 contract assets assumed nil, IP inputs rounded (p5, p8):** storyline flags it, plus or minus 0.3 day.
13. **Sample owner "Commercial head, due in 7 days" (p11):** illustrative, mark as an example.

## 5. Counts (script output)
Table rows: 63. REQ 28, OPT 6, CALC 20, FIX 9. (script: count column 6 of section 3 table; REQ rows PROMISE_1..N and others each count once.)
