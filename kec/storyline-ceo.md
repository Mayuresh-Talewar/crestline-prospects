# KEC booklet 2: for Vimal Kejriwal, MD & CEO (KEC-3, 2026-10-07)

Master: 16 pages, slots per `_shared/master-design/TEMPLATE-SLOTS.md`. Figures only from `kec/data.md` (KEC consolidated INR Cr; V verified, C computed). `{calc:X}` = KEC-4's calculator fills it. No peer figure appears. Arithmetic was run: `python -I -c "print(round((36267/33398-1)*100,1),round((18633.22-16309.54)/(23505.54-21846.70),2),round(18633.22/23505.54*100,1),[round(f/e*100,1) for f,e in ((538.59,830),(655.13,1215),(663.59,1504),(663.60,1659))])"` gives 8.6, 1.40, 79.3, [64.9, 53.9, 44.1, 40.0].
**Voice:** strategic, short. One idea per page, consequence first, mechanics only as a one-line proof. No ageing tables, no line items beyond the two balances. "Cash is the cost of growth, not a failing."
**Spine (6 beats):** the three promises that draw on one pool of cash (p3) > growth against debt (p4) > margin and interest (p5) > the quarter (p6) > which jobs and clients hold it (p7-9) > what released cash means and the board questions (p10-12) > proof, safety, ask (p13-16).

## Page by page
| Pg | Chapter | Headline (12 words max) | Figures (data.md) | Chart | Savings slot |
|---|---|---|---|---|---|
| 1 | Cover | Rs 36,267 Cr of work ahead. Rs {calc:STUCK_TOTAL} Cr still to become cash. | order book 36,267 at 31 Mar 26 (AR26 PDF p.10); receivables + contract assets (Crestline sum, 18,633.22 in data.md s.13) | none | STUCK_TOTAL |
| 2 | Letter | Growth you have earned, and the cash it is still waiting for | revenue 23,505.54, order book + L1 over 40,000 (PR-Q1, 10 Aug 26); net debt incl. acceptances 6,568 at 30 Jun 26; target 5,500 | none | {calc:TARGET_CASH} one line only; {calc:TEN_PLUS_TEN} |
| 3 | Ch1 Their own promises | You promised growth, margin and lower debt. All three need cash. | see table A | six ruled rows | none |
| 4 | Ch2 Growth vs debt | Revenue grew 7.6%. Debt including acceptances grew 47.5%. | revenue 21,846.70 to 23,505.54; net debt incl. acceptances 4,558 to 6,722 (IP-Q4 slide 30); order book +8.6% (33,398 to 36,267); each extra rupee of revenue in FY26 came with Rs 1.40 more in receivables and contract assets (C: 2,323.68 over 1,658.84); company's reasons quoted (AR26 PDF p.33) | two bars, revenue and net debt, FY25 vs FY26 | none |
| 5 | Ch3 Margin | Interest takes 40 paise of every rupee of EBITDA | finance cost over EBITDA: 64.9%, 53.9%, 44.1%, 40.0% FY23-FY26 (C); EBITDA margin 7.1% FY26, Q1 FY27 5.8% vs 7.0% (PR-Q1); one day of revenue 64.4 vs one day of EBITDA 4.55; ten days of working capital = 38.8% of a year's EBITDA (C) | line of finance cost as % of EBITDA, FY23-FY26 | {calc:TEN_DAYS}, {calc:TEN_INT} at {calc:RATE_STATED} |
| 6 | Ch4 The quarter | Quarter one: working capital down three days, margin down 1.2 points | NWC 137 to 134; net debt 6,722 to 6,568 (IP-Q1 slide 32); EBITDA 5.8% vs 7.0%; PAT 73 vs 125; what is waiting: Afghanistan ~300 "told us Q2", water receivables 800 to 900 of which 400 to 500 overdue (T-Q1 p.7) | three tiles | TEN_DAYS, REV_PER_DAY |
| 7 | Ch5 Five lenses | Which job holds the cash, and who can release it? | company figures only, one per lens: WC 137 days vs 110; O2C {calc:COMBINED} days; P2P payables 8,703.25 plus acceptances 2,120.74; client lens: one customer 23.7% of revenue (C, Note 58); vendor lens: not public. Segment and group views are NOT shown (webapp-fit gap) | five lenses, FIX | none |
| 8 | Ch6 Reads dates | A year of revenue, and how much of it is still not cash | revenue 23,505.54; receivables + contract assets 18,633.22 = 79.3% of it (C); contract assets 12,127.56 incl. retention 4,922.51. Step waits asterisked {calc:STEP_SPLIT} | one stacked bar of a year's revenue, plus one bill's life | none |
| 9 | Ch7 Who holds it | Two clients each hold over a tenth of what you are owed | two customers each above 10% of trade receivables, together 4,372.34 vs 2,417.65 (Note 54B.3, PDF p.148; denominator not stated, so no share is printed); one India customer 23.7% of revenue; named pockets: water (JJM), Afghanistan, railway claims 150 to 200 (T-Q1 p.7, p.19). Right half: vendor days replaced by "credit each vendor agreed: not public" | ruled table of named pockets, amount, source | {calc:OVER6M_DELTA} one line |
| 10 | Ch8 Test, then own it | Test a move on one job before you commit the company | simulator: 30 days each wait; vendor credit held, never raised; what released cash can do: repay debt (6,722 to 5,500 is the target). Do NOT claim bid capacity or bank-guarantee headroom (BG/LC not modelled) | simulator mock | {calc:SIM_EACH}, {calc:SIM_BOTH}, {calc:SIM_INT} |
| 11 | Ch9 Control tower | Ask which job holds the most capital. Get an answer with a name. | Ask Crestline company brief and Performance (webapp-fit s.4); sample question "Which job is holding the most capital?" and a sample owner line marked illustrative | Ask mock, FIX | {calc:TEN_DAYS} in the example answer |
| 12 | Ch10 The board | Three questions for the board, and what each one is worth | (1) days: 137 to 110 = {calc:TARGET_CASH}; (2) debt: that cash against the 1,222 reduction to reach 5,500, {calc:PCT_OF_DEBT_GAP}; (3) margin: interest saved a year {calc:TARGET_INTEREST} at {calc:RATE_STATED}. Return on capital: not computable (gap 1) | three-row table + one bar | TARGET_CASH, TARGET_INTEREST, PCT_OF_DEBT_GAP; rows overlap and are never added |
| 13 | Ch11 Done before | It has been done before. Including by you. | own proof: net debt cut "over Rs. 500 crore" in FY25 (PR-FY25, 26 May 25); Q1 FY27 net debt down 154 (C: 6,722 - 6,568). Peer proofs not collected (gap 2) | two strips | none |
| 14 | Ch12 Safe to try | It reads your books. It never writes to them. | FIX. AR26: controls "integrated with the SAP ERP platform" (PDF p.68). "Reads SAP through one adapter we build for your instance" | FIX | none |
| 15 | Invitation | Give us one segment and fourteen days | pilot scope: one INR entity or segment, 5 to 15 projects (webapp-fit s.3); thirty minutes with you, or with Mr. Aggarwal; sources paragraph | FIX | none |
| 16 | Back cover | (FIX) | | | |

### Table A: Chapter 1, the promises, in the company's words (page refs as data.md s.11-12)
| # | Promise | Source, date |
|---|---|---|
| 1 | "Order Book + L1 position of over Rs 40,000 Cr" | PR-Q1, 10 Aug 2026 |
| 2 | "increasing the average order size from approximately Rs 350 Crore to over Rs 500 Crore ... improved working capital management" | AR26 PDF p.33 (pr. 62-63), May 2026 |
| 3 | Civil "at least 30% or maybe more" growth in FY27; Cables "at least 15%" | T-Q4 p.13, p.24, 18 May 2026 |
| 4 | "high single digit in '28 should be possible" (margin, CEO) | T-Q1 p.11, 11 Aug 2026 |
| 5 | Debt: "by March, we should reach to about INR5,500 crores" | T-Q1 p.17, 11 Aug 2026 |
| 6 | "we recently negotiated a contract where we told the client that we will not work with less than 20% advance" (CEO) | T-Q1 p.20, 11 Aug 2026 |
Closer: "Growth, margin and debt: three promises drawing on one pool of cash." Row 6 shows he is already acting on the same problem. Quote the 8.6%/47.5% only on p4, not here.

## What differs from the CFO book
Consequence leads: growth against debt (p4), interest against EBITDA (p5), concentration and named pockets (p9), the board's three questions (p12). The cash-flow, ageing and payables tables are absent. Page 8 is one bar (79.3% of a year's revenue), not the CFO's bars of operating cash. The CFO book's page 12 is the days table, the CEO's is a decision for the board.

## Not in data.md, wanted (flag to Garvis)
1. **Return on capital employed, equity, capital employed**: not in data.md (only PAT 605.59, debt, finance cost). p12 therefore does not claim a return figure; ask KEC-1 for equity and total assets (AR26 balance sheet) if the CEO book should show ROCE.
2. **Peer proofs (p13)**: none collected; own proof only.
3. **Share of receivables held by the two large customers**: denominator not stated in Note 54B.3, so p9 prints the sum and "each above 10%", never a percentage.
4. **Capacity to bid / bank-guarantee headroom**: total BG and LC book not disclosed (data.md s.14) and not modelled in the app; the booklet must not mention bid capacity as a result.
5. **RATE**: pick a stated range endpoint and name it (see CFO file gap 3); never the implied 10.68%.
6. Segment and group claims (T&D vs Civil, SAE Towers, multi-currency): not supportable in a pilot; none used.
