# Thermax Limited: problems (TH-3)

Story: how quickly project bills turn into cash.

## Start from what they do well
Thermax runs working capital well, and every page of the booklet should read that way.
- Customers fund the business. At 31 March 2026, customer advances of Rs 1,899.53 cr (AR26 p289, consolidated) were larger than everything left in receivables, contract assets and inventory after trade payables and unearned revenue, so the group's operating working capital was below zero (Computed from AR26, consolidated).
- CRISIL, rating rationale of 19 Jan 2026: "Prudent working capital management. The net working capital cycle has been around 40 days due to prudent collection policy and inventory management." The group is "net nil debt" in the same rationale.
- The past due share of consolidated receivables FELL from 62.0% to 57.7% in FY26 (AR26 p256, Computed).

So the question is narrower: once a project bill is raised, how long does it take to turn into cash, and why do some bills not turn at all? That is where the filings show something worth a conversation.

Conventions for every problem below:
- Basis: CONSOLIDATED unless labelled, because most of the Industrial Infra segment sits outside the standalone entity (standalone Industrial Infra revenue Rs 1,537.80 cr of the segment's Rs 4,348.05 cr, AR26 p409 and p310), and AR26 MD&A p113 places the contract asset increase "mainly in TBWES". Standalone figures never share a chart with consolidated ones.
- Span and vintage: every trend is FY25 to FY26 on AR26 vintage (AR26, filed NSE 03 Jul 2026), FY25 as AR26 restated it. AR26 restated FY25 when it started showing each contract net (consolidated p289, "refer note 49"), so older years from AR25 and AR24 are a different presentation and are not put on the same line.
- Figures in Rs crore. Computed figures come from `calc/thermax-savings-output.txt`.

---

## Problem 1. Rs 377 cr is more than a year past due, and that part grew while the rest of the past due book fell

**Document:** Annual Report 2025-26, Notes to Consolidated Financial Statements, ageing of trade receivables, p256. Filed NSE 03 Jul 2026. Page image re-checked (TH-3).
**Basis:** CONSOLIDATED, gross trade receivables before impairment allowance, AR26 vintage.

| 31 March | Gross receivables | Past due | Past due share | More than one year past due | Share of gross |
|---|---|---|---|---|---|
| FY25 (AR26) | 2,315.24 | 1,434.88 | 62.0% | 335.56 | 14.5% |
| FY26 | 2,500.19 | 1,443.42 | 57.7% | 377.27 | 15.1% |

(Past due, shares and the over-one-year sums are Computed: calc output.)

What the money did: the overall past due share improved, but the oldest part moved the other way. Receivables more than a year past due rose by Rs 41.71 cr (12.4%) to Rs 377.27 cr, while the 6 months to 1 year bucket fell from 202.51 to 135.06. That pattern is consistent with bills moving out of the middle bucket into the oldest one rather than being collected; the table alone cannot say which bills did. The impairment allowance against the whole book is Rs 295.35 cr (AR26 p256).

AR26 p256 also notes that one subsidiary sold receivables to a bank without recourse: Rs 190 cr at 31 March 2026 (Rs 422.08 cr a year earlier) is derecognised and sits outside this table, which moves the gross total the past due share is struck on.

AR26 states on the same page: "The above ageing includes retention receivables which are classified as due on the basis of the contractual terms with respective customers." So part of the past due book is retention whose contractual release date has passed.

**What the accounts cannot tell:** which project and which bill each old rupee belongs to; whether it is retention waiting on a completion or performance certificate, a disputed bill, or a bill the client has simply not paid; whose desk it sits on now (the client's approver, or a document still owed by the site); and since when it has sat there. The ageing table is a single company-wide snapshot with no segment split.

---

## Problem 2. Operating cash flow halved, and AR26 names project retention and advances as the reason

**Document:** AR26 Consolidated Statement of Cash Flows, p228 (page image re-checked TH-3); Consolidated Statement of Profit and Loss, p227; MD&A, Cash Flow, p113 (page image checked). Filed NSE 03 Jul 2026.
**Basis:** CONSOLIDATED, AR26 vintage (FY25 as restated in AR26).

| Year | Net cash from operating activities | Profit after tax | Operating cash flow as a share of profit |
|---|---|---|---|
| FY25 (AR26) | 1,079.79 | 626.70 | 172.3% |
| FY26 | 541.55 | 720.26 | 75.2% |

(Shares Computed: calc output. Operating cash flow fell 49.8%; AR26 MD&A prints "(50%)".)

AR26's own explanation, MD&A p113, word for word: "The decrease in operating cash flow is due to increased execution activities, resulting in higher retention in the project business and lower customer advances during the current year."

Read respectfully: FY25 was an exceptionally strong cash year, so part of the fall is a return to normal. But the reason the company itself gives sits squarely in the project business: retention held back on bills, and lower customer advances.

**What the accounts cannot tell:** which projects the extra retention sits on, what each project's retention release milestone is and when it falls due; which advances were expected and did not arrive, on which order, and how long after the handshake; whether the cash gap is concentrated in two jobs or spread across twenty. A cash flow statement is one line per year for the whole group.

---

## Problem 3. Contract assets up 21%, retention and unbilled, mainly in TBWES

**Document:** AR26 Notes to Consolidated Financial Statements, contract assets, p256 and contract balances, p289 (page images re-checked TH-3); MD&A, Contract Assets, p113 (page image checked). Filed NSE 03 Jul 2026.
**Basis:** CONSOLIDATED, net of loss allowance, AR26 vintage.

| 31 March | Contract assets, gross | Loss allowance | Contract assets, net |
|---|---|---|---|
| FY25 (AR26) | 781.94 | 141.38 | 640.56 |
| FY26 | 941.73 | 168.65 | 773.08 |

(Net change +20.7%, Computed: calc output. AR26 MD&A p113 prints 21%.)

AR26 MD&A p113: "The increase is mainly due to an increase in retention amount and unbilled amount mainly in TBWES." AR26 p289 adds that contract assets rose because the entity "has supplied more products and services ahead of the agreed billing and payment schedules as per contractual terms."

Contract assets are work done and not yet billable: either the milestone has not been reached, or retention has been held back. Both are cash the company has earned on site and not yet been allowed to invoice.

**What the accounts cannot tell:** for each milestone, how many days passed between the work being done and the bill being raised; how much of that wait was Thermax's own (measuring, preparing, submitting) and how much was the client's (certifying, approving); which retention tranches are close to their release milestone; which project in TBWES carries most of the increase.

---

## Problem 4. Thermax's CFO expects the overdues to be worked down "over the next couple of quarters"

**Document:** Q4 FY26 earnings conference call, held 08 May 2026, transcript p11 (page image re-checked TH-3; transcript taken from thermaxglobal.com, NSE pointer filed 12 May 2026).
**Speaker:** Rajendran Arunachalam, Executive Vice President and Group Chief Financial Officer (title as AR26 p357).

Thermax's CFO said, answering an analyst's question on "a substantial working capital build":

> "This has been caused by some project delays and, hence, the related collection delays on some of our receivables as well."

> "I'll be hopeful that we should resolve all the overdues in one quarter. But yes, the business reality is, I'm sure that we would be able to work it over the next couple of quarters."

**Basis of the figure he was speaking to:** CONSOLIDATED past due receivables, AR26 p256, AR26 vintage.

| 31 March | Past due receivables |
|---|---|
| FY25 (AR26) | 1,434.88 |
| FY26 | 1,443.42 |

(Computed: calc output.)

This is an open intention, not a missed one, and it is framed that way. The point is how it can be followed. The Q1 FY27 results carry no balance sheet, so the first published figure to test it against will be the half year to 30 September 2026. Even then it will be one company-wide number twice a year. No target in days or rupees was stated on the call or in AR26 (depth.md section 2).

**What the accounts cannot tell:** which overdue bills make up the Rs 1,443 cr, which of them belong to the "few large orders" with retention he named, who on each side owns the next step, and week by week whether the stock is actually falling. A promise worked over "a couple of quarters" needs a weekly view; the filings give a half-yearly one.

---

## Problem 5. The project business does not publish its receivables, so nobody outside can see which projects hold them

**Document:** AR26 Notes to Consolidated Financial Statements, segment information, p310 to p311. Filed NSE 03 Jul 2026. Searched for segment receivables, contract assets, retention, advances and overdues in AR26 note 33, the Q4 FY26 presentation (NSE 07 May 2026) and the Q1 FY27 presentation (NSE 31 Jul 2026): NOT FOUND (data.md section 7).
**Basis:** Industrial Infra SEGMENT, consolidated segment note, AR26 vintage (FY25 as restated in AR26). The Q1 FY27 recast, which moved Bioenergy out of the segment, is not mixed in.

| Year | Segment revenue | Segment assets | Segment liabilities | Net (assets less liabilities) | Net in days of segment revenue |
|---|---|---|---|---|---|
| FY25 (AR26) | 4,694.45 | 2,491.09 | 2,353.60 | 137.49 | 10.7 |
| FY26 | 4,348.05 | 2,490.28 | 2,330.16 | 160.12 | 13.4 |

(Net and days Computed: data.md section 7 and src/th-calc-output.txt.)

Read respectfully: the project segment is almost entirely funded by its own customers. Rs 2,490.28 cr of segment assets is matched by Rs 2,330.16 cr of segment liabilities, so the business carries only about 13 days of its own money. That is a well run project business.

The day steps in this booklet are measured on each gross wait (bills waiting to be certified or paid), which sits inside the Rs 2,490.28 cr of segment assets. They are not measured against this net figure, which is what remains after customer advances.

But the segment note publishes only those four lines. How much of the Rs 2,490.28 cr is receivables, how much is contract assets and retention, and how much of the group's Rs 1,443 cr past due book belongs to these projects is not disclosed in any filing searched.

**What the accounts cannot tell:** which Industrial Infra projects hold the receivables and the retention; on each project, how long each milestone bill took to be raised, certified and paid against that contract's own terms; whose desk each wait sits on; and since when. This is the gap the pilot is built for.
