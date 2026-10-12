# HCC: three problems, HC-3 (QA fixes HC-4)

The story: **how fast each running bill turns into cash.** Standalone, INR crore. Sources, all primary:
AR FY26 = Annual Report FY2025-26, filed 24 Jul 2026. AR FY25 = Annual Report FY2024-25, filed 21 Jul 2025. Calls: transcripts filed on NSE (dates below). Computed figures come from `src/hc-calc-output.txt` or `calc/hcc-savings-output.txt`.

**Standalone label used on every chart:** *Receivables on running contracts* = the first line of the trade receivables ageing table, receivables considered good (note 6.8, AR FY26 p132 for FY26 and p133 for FY25). *Receivable days on running contracts* = that balance / standalone revenue from operations x 365. Crestline arithmetic, not a ratio the company reports.

**Vintage:** every trend below uses the AR FY26 vintage only (FY25 comparative and FY26). FY24 is quoted once, in words, from AR FY25.

## Respect first

HCC has done what it said it would do on the balance sheet.
* ₹250 Cr of settlement-scheme cash was promised for Q1 FY26 (Rahul Shukla, then Deputy CFO, call 8 May 2025, transcript p2, filed 12 May 2025) and received in that quarter (Rahul Shukla, CFO, call 7 Aug 2025, transcript p4, filed 11 Aug 2025).
* The debt reduction the CFO set out in August 2025, over a 15 to 18 month window (Rahul Shukla, CFO, call 7 Aug 2025, transcript p3, filed 11 Aug 2025), was reached by 31 Mar 2026 on the company's own year-end figure, inside that window (AR FY26 p3, filed 24 Jul 2026).
* Order book ₹12,971 Cr at 31 Mar 2026 (note 22.2, AR FY26 p150).
* The company names "working capital discipline" among its priorities (Management Discussion and Analysis, AR FY26 p21).

The three problems below are about what comes next: the running book, where a faster bill is a decision HCC and its clients can actually take.

## Who owns which act

| HCC's acts | The client's acts |
|---|---|
| measure, prepare, review, submit, invoice | acknowledge, certify, pay |

A wait belongs to whoever makes the act that ends it. Everything in the receivables on running contracts has been invoiced, so most of its wait now ends in the client's act. What HCC controls is the quality and speed of everything before it, and how early a slipping bill is chased.

## P1. Running bills take longer to turn into cash

| | FY25 | FY26 | Source |
|---|---|---|---|
| Receivables on running contracts | 1,361.06 | 1,701.67 | AR FY26 p133 and p132, filed 24 Jul 2026 (V) |
| Standalone revenue from operations | 4,801.05 | 3,937.25 | AR FY26 p109, filed 24 Jul 2026 (V) |
| Receivable days on running contracts | 103.5 | 157.8 | Computed, calc output |

Trend: 54.3 days slower in one year (157.8 less 103.5), on one vintage. For context, FY24 stood at 90.9 days (1,256.20 on revenue of 5,042.78, AR FY25 p136 and p113, filed 21 Jul 2025; computed in src/hc-calc-output.txt).

**Chart:** two bars, FY25 103.5 and FY26 157.8 days, same scale from zero. Label: "Receivable days on running contracts, standalone, Crestline arithmetic. Source: AR FY26 p132, p133 and p109, filed 24 Jul 2026."

**What the accounts cannot tell:** which project and which bill carries the extra days; whether a bill sat with HCC before it was submitted or with the client after; on whose desk; since when.

## P2. More cash is waiting on running contracts

| | FY25 | FY26 | Source |
|---|---|---|---|
| Receivables on running contracts | 1,361.06 | 1,701.67 | AR FY26 p133 and p132 (V) |

Trend: the running book grew by ₹340.61 Cr in one year (1,701.67 less 1,361.06), on one vintage.

**Chart:** two bars, ₹1,361.06 Cr and ₹1,701.67 Cr, same scale from zero. Label: "Receivables on running contracts, standalone, ₹ Cr. Source: AR FY26 p132 and p133, filed 24 Jul 2026."

**What the accounts cannot tell:** which clients and which contracts the extra ₹340.61 Cr belongs to; how much is not yet due against how much is late on its own due date; whether the growth is a few large bills or many small ones.

## P3. The growth is in this year's bills

The ageing table counts each balance from its transaction date (note 6.8, AR FY26 p132 and p133, filed 24 Jul 2026).

| | FY25 | FY26 | Source |
|---|---|---|---|
| Outstanding less than six months | 238.12 | 593.57 | AR FY26 p133 and p132 (V) |
| Outstanding more than one year | 549.54 | 529.46 | Computed: sum of the 1-2, 2-3 and more than 3 year columns, same pages |

Trend: bills under six months old rose by ₹355.45 Cr, more than the whole book grew (₹340.61 Cr), while bills more than a year old came down. The older book is being worked through; the new bills are where the cash now waits.

**Chart:** two bars, ₹238.12 Cr and ₹593.57 Cr, same scale from zero. Label: "Receivables on running contracts outstanding less than six months from the transaction date, standalone, ₹ Cr. Source: AR FY26 p132 and p133, filed 24 Jul 2026."

**What the accounts cannot tell:** each contract's own payment term and due date; which of these young bills are still inside their term and which are already late; how much of the ₹812.63 Cr retention (72.71 non-current plus 739.92 current, AR FY26 p131; sum computed) sits inside the running book; whose desk each bill is on.
