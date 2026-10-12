# Vascon Engineers: depth (VS-3)

Prepared 7 Oct 2026. Adds to `data.md` and `fact-check.md`; does not repeat them. Money is Rs Crore. Page = the "Page x of n" printed on each call transcript (speaker label read on the page image for every quote marked [img]); decks and annual reports as "PDF p". Text extractions are in `src/depth/txt/`, rendered pages in `src/depth/img/`, rating pages in `src/depth/rating/`, arithmetic in `src/depth/depth_compute.py` (output `depth_compute_output.txt`; run `cd src/depth && python -I depth_compute.py`).

**Grades:** Verified = company or rating-agency document, page read. Computed = script above. Weak = single secondary, ambiguous, or a tool summary. NOT FOUND = scope stated. Entity: calls are group-level management statements; balance-sheet rows say STANDALONE or CONSOLIDATED.

## 0. Read first: new facts that change earlier files, and what is still unverified

| # | Finding | Grade | Cheap test that settles it |
|---|---|---|---|
| 1 | **CRISIL downgraded Vascon on 21 Aug 2026** from A-/Stable/A2+ to **BBB+/Stable/A2** (rated amount Rs 1,250 Cr), after the Q1 FY27 call. The company's filing of 24 Aug 2026 repeats it. AR26 PDF p13, p34, p39 still print "A-" (written before). Any booklet line "CRISIL A-" is stale. Not in `data.md`, README or `webapp-fit.md`. | Verified (CRISIL page, consolidated basis; NSE letter) | none needed; re-check CRISIL on the day of printing |
| 2 | **Retention "10-15 percent" has a source after all**, but it is a rating agency, not the company: Acuite, 9 Nov 2023: working capital intensive "primarily on account of high receivable which include retention money it has to keep with clients (10-15 percent)". Fact-check row "retention 10-15% NOT FOUND" stays correct for the company's own documents. Company says only "5% retention ... in every invoice" (Somnath Biswas, Q2T25 p16 [img not read: text label only]). | Verified for Acuite wording (page text read by me via curl); the Acuite PDF itself returned 404 so quote is from the Acuite web page | open the Acuite PDF from acuite.in when it is back |
| 3 | **New order: Rs 660.79 Cr incl. taxes, Qualcomm India, office block at Bengaluru, 30 months from site handover, letter 25 Sep 2026.** After the Rs 2,850 Cr order book (30 Jun 2026). Same-day tax basis differs from the CPWD order (Rs 347.43 Cr incl. GST, called Rs 295 Cr by management, so ex-GST). | Verified (company letter) | next deck (Nov 2026) shows the new order book |
| 4 | The Reliance Jamnagar order (Rs 131.58 Cr ex-GST, 18 May 2026) was cancelled 23 Jul 2026. Mar-26 2,717 + CPWD 295 - Q1 EPC revenue 148 = 2,864 against the reported 2,850, so the 30 Jun order book very likely already excludes it. | Computed, inference | ask: is Reliance in the 2,850? (Q1D27 p16 project list does not name it) |
| 5 | **June 2024 net debt is 38 on the Q1 FY25 call and 124.4 in the deck of the same day.** And the fall "124 to 17" (Jun-24 to Mar-25) is Rs 107.9 Cr against GMP net proceeds of "about 110": operating net debt did not move. Mar-25 also first shows a "Less: Project Flow (51.20)" line. | Verified (call text; deck page image Q4D25 PDF p6) + Computed | none |
| 6 | The CFO's "45 days" cannot be reproduced from any filing (no formula, `data.md` 3h). CRISIL measures a different thing (EPC receivable days) and prints three different values for FY24: 93 (26 Jul 2024), 71 (21 Oct 2024), 88 (15 Jan 2026). | Verified for each CRISIL print | ask Somnath Biswas for the definition (the question for the booklet) |
| 7 | Q2 FY27 results date: **not announced.** Trading window closes 1 Oct 2026 "till 48 hours after the declaration"; "date of the board meeting ... shall be intimated in due course" (letter 25 Sep 2026). Past pattern: board 5 Nov 2024 (call), 12 Nov 2025 (call). A date in the first half of November is a pattern guess. | Verified (closure letter); guess is Weak | NSE/BSE board-meeting intimation (due about 5 working days before) |
| 8 | FY25 order intake is stated as "around INR500 crores" on 29 Jan 2025 (Q3T25 p8) and "Almost INR300 crores" on 16 May 2025 (Q4T25 p11). Not reconciled in any filing. Use "at most one third of the Rs 1,500 Cr aim". | Verified (both quotes), reconciliation NOT FOUND | ask |

## 1. Promise track record, FY24 to Q1 FY27

Internal use. Each row: what was said (exact words, speaker, call date, page), then what the filings show. Speakers: Dr Santosh Sundararajan, Group CEO (SS); Somnath Biswas, CFO (SB). The MD, Siddharth Vasudevan Moorthy, is not on any call: his name does not occur in any of the 17 transcripts Q1 FY23 to Q1 FY27 (Computed: `grep -lE "Siddharth" src/depth/txt/*transcript*.txt src/depth/txt/T-*.txt` returns nothing). Every quote below is the Group CEO or the CFO; the MD booklet has no call quote to cite. Calls are consolidated-group statements unless the speaker says EPC. Outcomes use the same document set as `data.md`.

### 1a. NWC, collections, client delays

| Call, speaker, page | What management said | What the record shows | Grade |
|---|---|---|---|
| 3 Aug 2022 (Q1 FY23), SS p12 | "some departments are paying after we raise a bill not more than 40-45 days we do receive the payments so far." | Earliest "45" in the set. It is a client payment lag, not an NWC cycle. | Verified (text label) |
| 16 May 2023 (Q4 FY23), SS p2 | "cash conversion cycle has also improved and net debt brought down to a mere Rs 12 Crores as on March 31, 2023." | Company's net debt Mar-23 Rs 12 Cr (deck, `data.md` 3e). No cash conversion days printed. | Verified |
| 5 Nov 2024 (Q2 FY25), SB p16 | "5% retention has been involved in every invoice ... almost Rs. 20 Rs. 25 Crores is less than one-year retention." | Retention balance Mar-24 76.76, Mar-25 84.72, Mar-26 107.18 (standalone, `data.md` 3c). | Verified (text) |
| 16 May 2025 (Q4 FY25), SS p10 [img] | "the EPC working capital cycle is, in fact, fantastic. We do not have any issue ... our working capital cycle, our debtor cycle, everything is now very much under control." SB same page: "at par with them" (Ahluwalia). | FY26: cash from operations -157 Cr WC absorbed (consolidated, `data.md` 3b); CRISIL EPC receivables 72 days Mar-25. See peers section: Ahluwalia comparison. | Verified |
| 16 May 2025, SB p16 [img] | "we haven't experienced that kind of delay in the payment for government project as of now. So that's why our EPC working capital cycle is quite healthy still." | Three government projects stopped paying from about Sep 2025 (rows below). | Verified |
| 16 May 2025, SS p18 | "we are at around 45 days ... if the collections are delayed, we sort of put a halt to the work" (separate bank account per project). | Halt did happen (Q3T26 p13-14, Q4T26 p6). The discipline was applied as stated. | Verified |
| 6 Aug 2025 (Q1 FY26), SS p6 [img] | "no payment issues from government, even if it is state government, even if it is in the phase of elections or whatever." | 11 Feb 2026: payments "stuck" in Bihar (Supaul) after elections. | Verified |
| 11 Feb 2026 (Q3 FY26), SS p13-14 [img p14] | "so far last three years we have not had any major issues of delay, except now in the last two, three months, a big project in Bihar, Supaul ... payments have been stuck ... We expect the money to come in this week or maximum by next week." | 13 May 2026 (Q4T26 p7, SS): "from March onwards, both these projects have started paying and we have remobilized over April." 14 Aug 2026 (Q1T27 p3, SS and Q1D27 PDF p8): "Fund flows for the affected projects are expected to commence from August 2026." Same projects (Supaul, Sindhudurg, Q1T27 p10). Four statements, three timings. | Verified |
| 11 Feb 2026, SS p17 | Three projects slowed: top project Rs 30 Cr a month "a direct loss of about Rs. 100 crores of revenue"; Capgemini "thanks to our clients delayed decision-making" Rs 30-50 Cr; Sindhudurg "our bill approval process that also got stuck". | FY26 EPC revenue 916 (segment) or "approximately INR928 crores" (SS, Q4T26 p3) against 1,200. | Verified |
| 13 May 2026 (Q4 FY26), SS p9 | "this was really unfortunate that 3 projects at one go, 3 big projects ... stopped paying us ... we do buffer in about a 7%, 8% to 10% chance of one project probably getting stuck". Deck PDF p8: "All projects are now operating at an optimum level". | Q1 FY27: EPC revenue 148 against 203; "one of the worst quarters we've had over the last 3 to 4 years" (SS, Q1T27 p15). | Verified |
| 13 May 2026, SB p11 [img] | "EPC operating cash flow is 20 negative and RE is 100 negative" (SS: "Minus 100"). Units not stated; Rs Cr is implied. | FY26 consolidated cash from operations -103.18 (`data.md` 3b), consistent in size. EPC's own operating cash flow was +40 in FY25 (SB, Q4T25 p9) and +25 in FY24. | Verified (text), units Weak |
| 14 Aug 2026 (Q1 FY27), SB p7 | "over the last couple of years, 4, 5 years, we used to get a very healthy working capital cycle of 45 days ... increased from 45 days to almost 65 to 70 days." Also "a couple of projects ... milestone basis payment, unless you reach to that milestone, you have to pump the money". | CC drawing (consolidated): 10.77 Cr Mar-25 to 44.74 Cr Mar-26 (AR26 PDF p103 image). Net debt 151.74 Jun-26. | Verified |
| 14 Aug 2026, SS p7 | EPC debt "very short-term debt, which will be rolled over in a matter of 6 to 8 months". | CRISIL 21 Aug 2026: debt 205.00 (Mar-25) to 338.76 (Jun-26) "owing to larger working capital requirement and higher-than-expected debt in the real estate segment". | Verified |

### 1b. Order intake, backlog, revenue

| Call, speaker, page | What management said | Outcome | Grade |
|---|---|---|---|
| 9 Aug 2023 (Q1 FY24), SS p5, p12 | order book "closer to INR 3,000 Crores"; "next year, we want to grow our EPC revenue to at least INR 1,000 Crores"; "we're targeting FY25 ... INR 3,000 Crores mark of third-party execution or rather EPC execution, internal and third-party" (as transcribed; the figure is three times the 1,000 stated elsewhere on the same call, so treat it as a transcription or slip). | Backlog 3,365 at Mar-24; FY25 EPC revenue "INR1,013 crores" (SS, Q4T25 p3). The 1,000 was met; the 3,000 never recurs in any later call. | Verified |
| 8 Nov 2023 (Q2 FY24), SS p9 | "start the next financial year with close to upwards of Rs 3,500 Crores order backlog". | 3,365 (Q4D24 p3): 4% short. | Verified |
| 8 Feb 2024 (Q3 FY24), SS p9 | FY25: "Rs 1,000 Crores looks entirely visible because you already have the order backlog in hand. There are no ifs and buts"; FY26 "Rs 1,200 Crores to Rs 1,250 Crores"; "before March '25, we would have to book about Rs 1,800 Crores to Rs 2,000 Crores of fresh orders". | FY25 met (1,013). FY26 EPC 916. FY25 intake 300 to 500 (row 8, section 0). | Verified |
| 8 Feb 2024, SS p10 | QIP of about Rs 100 Cr: "hopefully this quarter". | 23 May 2024 SS p13 "next few months"; 20 Aug 2024 SB p8 "6-odd months left"; 5 Nov 2024 SB p14 "put QIP in the back seat" and SS "on hold"; 29 Jan 2025 SB p9 "QIP plan has already been dropped"; 16 May 2025 SS p13 "the QIP hasn't happened"; 11 Feb 2026 SB p8 "we dropped the QIP program"; 17 Apr 2026 board: 2,00,00,000 warrants at Rs 40 = Rs 80 Cr (`data.md` 3e), Rs 20 Cr infused by Jul 2026 (CRISIL). | Verified |
| 23 May 2024 (Q4 FY24), SS p12 | "we want to start April 2025 with an order backlog of Rs 4,000 Crores ... order booking target of about Rs 1,500 Crores by April 2025 and we are confident that we will be able to achieve that." | Mar-25 backlog 2,825 (-29%); FY25 intake 300 to 500 (-67% to -80%). SS 16 May 2025 p6: "we did not achieve our order booking target". | Verified |
| 23 May 2024, SS p18 | Asked about slow-moving projects: "Slow-moving in terms of EPC? No, not really. All our order books, touchwood, are running at full speed." | Q3 FY26 and Q1 FY27: three government and private projects slowed. | Verified (text) |
| 20 Aug 2024 (Q1 FY25), SS p14 | "EPC will ... cross the Rs 1,000 Crores mark this year ... Rs 1,250 Crores next year, upwards of Rs 1,500 Crores a year after that." Real estate FY25 "Rs 125 Crores" (SB p10). | FY25 EPC 1,013 met; real estate revenue 70.19 Cr (AR26 PDF p124). FY26 EPC 916, not 1,250. | Verified |
| 20 Aug 2024, SS p3/p5, SB | GMP cash "by the end of this month" (SS p5: "end of this month or maximum first week of September"). | Received 10 Oct 2024 (Q2T25 p4). Net: Rs 157 Cr gross, "about 110". | Verified |
| 5 Nov 2024 (Q2 FY25), SS p6 | "we have a target of Rs. 1,500 Crore order booking for the year ... only achieved about Rs. 400 Crore so far ... we hope to achieve before April." | Not achieved. | Verified |
| 5 Nov 2024, SB p17 | Why do rating-agency papers show Rs 850 Cr EPC revenue against 1,000 guided? "we are always little bit conservative in terms of our CMA and rating agencies". | CRISIL's own forecasts: ~Rs 850 Cr (26 Jul 2024), ~Rs 820 Cr (21 Oct 2024). Actual 1,013. | Verified |
| 29 Jan 2025 (Q3 FY25), SS p8 [text] | "may not be March end, but maybe April end, but this INR 1,500 crores will be booked." SB p5: "We will get that." | Not booked: 16 May 2025 SS p6-7: "we have to win at least INR1,200 crores, INR1,300 crores to keep our promises or our growth story alive". | Verified |
| 16 May 2025 (Q4 FY25), SS p15 | EPC "INR1,200 crores, INR1,450 crores, INR1,750 crores and then INR2,000 plus over the next 4 years"; FY26 real estate "INR200-plus crores" (p10). | FY26 EPC 916; real estate 32.12 Cr (AR26 PDF p124). | Verified |
| 6 Aug 2025 (Q1 FY26), SS p8 | "start next year with close to upwards of INR3,500 crore order backlog". Also p7: "We have not bagged any significant orders in the last 6 months". | Mar-26 backlog 2,717 (-22%). | Verified |
| 12 Nov 2025 (Q2 FY26), SS p3, p9 [img p9] | "We also aim to secure about INR1,500 crores of new EPC orders during FY '26"; "unutilized working capital can support up to INR3,000 crores of additional EPC orders"; p9 "the survival of the company depends on us booking some decent orders in the next few months". Do not print the survival line. | FY26 intake 762 (Q4D26 p3, "Rs 762 Cr"); SS 11 Feb 2026 p11: "it does look like we have failed in a big way". Bank limits were not the cause: "This entire year not booking orders is not attributable to lack of banking relations or bank guarantee" (SS p10). | Verified |
| 11 Feb 2026, SS p10 | "L1 for a couple of orders totaling to about Rs. 1,300 crores to Rs. 1,500 crores". | 13 May 2026 SS p3: "L1 currently for 2 projects valued to a total of about INR500 crores". Then CPWD Rs 295 Cr (Jun), Wardha LOI Rs 126 Cr (12 Aug), Qualcomm Rs 660.79 Cr (25 Sep). | Verified |
| 11 Feb 2026, SS p17 | "Rs. 1,200 crores does not look achievable." | Withdrawn by the CEO himself on 11 Feb 2026, seven weeks before year end (already in `data.md` 7). | Verified |
| 13 May 2026 (Q4 FY26), SS p10 | FY27 "1,200 ... EPC should cross 1,000. Real estate should cross 200"; "end the year at about INR4,000 crores of order backlog". | After Q1: EPC 148, real estate 4 (SS, Q1T27 p5). SB p13: H1 "30%" and H2 "70%" of the year. 148/1,000 = 14.8%. | Verified |
| 14 Aug 2026 (Q1 FY27), SS p3 | "INR1,500 crores to INR2,000 crores of new EPC order intake during FY27." | By 25 Sep 2026: 295 + 126 + 660.79 = 1,081.79 (Computed; tax bases differ). | Computed |
| 14 Aug 2026, SS p13 | "EPC should do, if not better than last year, at least equal to last year, which is INR900 crores plus. We hope to achieve INR1,000 crores on EPC." | CRISIL 21 Aug 2026 expects "double-digit revenue growth in fiscal 2027" and operating margin 8-9%. Q2 FY27 not out. | Verified |

### 1c. Debt and capital

| Call, page | What management said | Record | Grade |
|---|---|---|---|
| 9 Aug 2023 (Q1 FY24), SB p13 | "The only debt that is in EPC is an INR 60 Crores CC limit, INR 63 Crores CC limit. ... The balance debt belongs to the real estate." | Consolidated CC drawn 44.74 Cr at Mar-26 (4.2x Mar-25). CRISIL Aug 2026: fund-based limit Rs 119 Cr, utilisation 59% average for 9 months to Jun-26. | Verified |
| 9 Aug 2023, SB p16 | NBFC debt costs "around in the range of 3% to 3.5%" above banks. | Arka Fincap and SBM Bank at 13.50% (AR26 PDF p104). Section 4. | Verified |
| 29 Jan 2025 (Q3 FY25), SS p6 | Net debt 104 "without considering the INR 100 crores cash balance from GMP". | Company's own net debt Mar-25 16.50 includes it (deck image). | Verified |
| 16 May 2025 (Q4 FY25), SS p4 | "Net debt reduced ... to just INR17 crores as of March 2025." Also "we have exited all noncore assets" (p4). | Mar-26 91.41, Jun-26 151.74 (Q1D27 p8). See section 0 row 5. | Verified |
| 11 Feb 2026 (Q3 FY26), SS p8, SB p9 | Real-estate debt "optimization" (deck): "when we say optimized, it does not mean we will not borrow"; borrowings "not more than six to eight months, there will be a rollover". | Debt 205 to 338.76 in 15 months (CRISIL). | Verified |
| 15 Jan 2026 CRISIL, Q3T26 p4 | "CRISIL has reaffirmed our long-term credit rating at A-minus". | 21 Aug 2026 downgrade. | Verified |

What the table says in one reading (for the writer, not for print): the EPC volume and margin guidance of FY24 and FY25 was met (FY25 EPC revenue 1,013 against 1,000), the order-intake and backlog aims were missed in FY25 and FY26 and the CEO said so on the calls, the working-capital statements changed once a government client stopped paying, and real-estate revenue, launch dates (Powai: Q3 FY25 per Q1T25 p5, launched June 2026 per Q1T27 p4) and the QIP slipped. None of this should be printed as a scorecard (PLAYBOOK rule 8, `data.md` D8).

## 2. Credit ratings

Only **CRISIL** rates the company now. ICRA, CARE, India Ratings, Infomerics: NOT FOUND (scope: two web searches 7 Oct 2026, CRISIL list page and the company's rating letters; none names them). **Acuite** rated it until 2023 and withdrew. All CRISIL pages are consolidated (stated in each rationale's "Analytical Approach"). Saved: `src/depth/rating/`.

| Date | Action | Words that matter for working capital, liquidity, real estate, triggers | Source |
|---|---|---|---|
| 25 Jul 2023 | CRISIL BBB to BBB+ | (page is a stub; no rationale text retrievable: NOT FOUND) | `rating/..July 25_ 2023..` |
| 9 Nov 2023 | **Acuite** BBB to BBB+/A2, withdrawn same day | "EPC operations are working capital intensive, primarily on account of high receivable which include retention money it has to keep with clients (10-15 percent)"; receivables due more than 3 years "Rs. 36.81Cr as on March 31, 2023" (EPC); EPC bank-limit utilisation about 81% for 9 months to Aug 2023 (read from a tool summary, not by me: Weak) | connect.acuite.in/fcompany-details/VASCON_ENGINEERS_LIMITED/9th_Nov_23 |
| 26 Jul 2024 | CRISIL BBB+ placed on Watch Developing (GMP sale) | "unbilled revenue which comprises ~10% of the order book and retention money which is 29% of overall debtors in the EPC segment"; "receivables increased to 93 days in fiscal 2024, from 78 days in fiscal 2023 due to an increase in retention money ... likely to remain at 80-90 days"; fund-based lines Rs 63 Cr "utilised at 41% on average"; QIP of Rs 125 Cr "a key credit monitorable" | `rating/..July 26_ 2024..` |
| 21 Oct 2024 | **Upgraded to A-/Stable, A2+** | same weakness text but "receivables increased to 71 days in fiscal 2024, from 63 days in fiscal 2023 ... likely to remain at 70-80 days"; "Inventory ... unsold real estate units ... Rs 235 crore (excluding Rs 227 crore as land and development potential)"; upgrade factors "Improvement in working capital cycle and liquidity" | `rating/..October 21_ 2024..` |
| 29 Oct 2025 | Credit bulletin (bank-wise lenders) | Bank guarantees by lender (SBI 204, Federal 100, IndusInd 76.33, others); no new rationale | `rating/..October 29_ 2025..` |
| 15 Jan 2026 | Reaffirmed A-/Stable, A2+; rated amount raised Rs 725 to Rs 1,250 Cr | "In the EPC segment, the unbilled revenue formed ~18% of the order book and retention money, around 40% of overall receivables. However, receivables have been improving in the EPC segment (72 days as on March 31, 2025, as against 88 days a year before) ... likely to range within 70-80 days". Real-estate debt "rose to Rs 147 crore in fiscal 2025, from Rs 88 crore". "Unencumbered cash and equivalent stood at Rs 118 crore as on March 31, 2025." Fund-based utilisation Rs 95 Cr, 58% average for 12 months to Sep 2025. Downward: "Substantial delay in execution of orders or increase in real estate inventory"; collections below Rs 58 Cr. | `rating/..January 15_ 2026..` |
| **21 Aug 2026** | **Downgraded to BBB+/Stable, A2** | "substantially weak operating performance in the real estate segment ... and execution delays in key EPC projects. Debt level increased from Rs 205.00 crore as on March 31, 2025, to Rs 338.76 crore as on June 30, 2026, owing to larger working capital requirement". Operating margin 5.7% FY26 (9.8% FY25) and 3.25% in Q1 FY27. Interest coverage 2.4x FY26 (2.9x) and 1.6x Q1 FY27. "Trade receivables stood at Rs 238.30 crore as on March 31, 2026, including retention money of Rs.107.17 crore ... Of the total receivables Rs 90.73 crore remained outstanding for more than two years ... approximately Rs 15 crore is under arbitration ... recovered Rs 6 crore from a disputed claim ... Rs 0.5 crore monthly". "Utilisation of the fund-based bank limit of Rs 119 crore averaged 59% during the 9 months through June 2026." Unencumbered cash Rs 31.86 Cr at 30 Jun 2026 and "buffer of Rs 36 crore in fund-based facilities". "Interest-bearing mobilisation advances have been treated as debt." Upward: "Improvement in the working capital cycle and liquidity". Downward: "Substantial delay in execution of orders or increase in real estate inventory" and "substantially low collections against longstanding receivables". | `rating/..August 21_ 2026..`; NSE letter `rating/intimation.pdf` |

Other points for the writer. (a) CRISIL's receivable-day figure for the same year changes by rationale (FY24: 93, 71, 88), so Vascon has no stable definition of "receivable days" in the public record. (b) CRISIL treats interest-bearing mobilisation advances as debt: relevant because Vascon says government advances come "at about 12% interest" (SS, Q1T27 p7). (c) CRISIL's real-estate exposure is a primary weakness (debt 88 to 147 to about 150-160 Cr on the CFO's figure, Q3T26 p7); the booklet covers EPC only (README ruling). (d) Rated-limit utilisation as a "working capital" signal: fund-based 41% (FY24), 58% (FY25), 59% (9M to Jun-26); non-fund-based is the real constraint (bank guarantees Rs 332 Cr, `data.md` 5).

## 3. Client delays and receivables

**Government share of the external order book** (SS/SB, opening remarks): Jun-23 78%, Sep-23 87%, Dec-23 78%, Mar-24 about 80%, Jun-24 82%, Sep-24 82%, Dec-24 78%, Mar-25 78%, Jun-25 73%, Sep-25 74%, Dec-25 77%, Mar-26 79%, Jun-26 77% (Q1T24 p3; Q2T24 p3; Q3T24 p3; Q4T24 p2; Q1T25 p3; Q2T25 p3; Q3T25 p2; Q4T25 p3; Q1T26 p3; Q2T26 p4; Q3T26 p5; Q4T26 p3; Q1D27 p4). Verified.

**Clients named by management as late, stalled or cancelled** (all in call text; speaker SS unless stated):

| Client / project | Words | Where |
|---|---|---|
| Bihar Medical Services and Infrastructure Corporation, Supaul medical college (Rs 514 Cr LOI) | "payments have been stuck, and we only received a small portion of what we should have received"; >Rs 30 Cr a month of work; "stopping or slowing down work at site" | Q3T26 p13-14; order Q3T24 p3; paying "from March onwards" (Q4T26 p7) |
| PWD Sindhudurg, medical college (Rs 331.38 Cr) | "our bill approval process that also got stuck" | Q3T26 p17; Q4T26 p6; order Q1T25 p3 |
| Capgemini, Chennai IT park (Rs 416 Cr, private) | "they slowed down the project ... thanks to our clients delayed decision-making", Rs 30-50 Cr revenue; "internal organization changes at a major private client" | Q3T26 p17; Q4T26 p3 |
| Vedanta, Barmer | "final bill certification ... takes its own sweet time" (SB, Q3T26 p10); "stuck for a long period ... cash flows that were pending from the client" (Q1T27 p11) | |
| Royal Rides, Goa ropeway admin building (Rs 225 Cr order) | not started; "hardly INR10 crores, INR12 crores ... INR15 crores" recognised; "we do not want to take any revenue coming from that" in FY27 | Q1T27 p12 |
| Reliance Industries, Jamnagar (Rs 131.58 Cr ex-GST) | cancelled by RIL 23 Jul 2026; "mutually decided" after design change to Mivan | company letter; Q1T27 p12 |
| NMMC Vashi hospital (Rs 220 Cr) | not started; "fronts" not offered, "political or local level issues" | Q1T27 p11 |
| One Goa project in arbitration | revenue of "about INR4 crores to INR5 crores" reversed in Q1 FY26 | Q1T26 p5. Which project: NOT FOUND (scope: transcripts Q1 FY26 to Q1 FY27 and AR26) |

Segment line the company itself draws (Q1T27 p3): "temporary cash flow constraints in 2 major government projects". Customers are never named in the annual report notes; no customer percentage (NOT FOUND, `data.md` 4).

**Receivable quality (balance sheet and agency):**

| Measure | Value | Entity, date | Source |
|---|---|---|---|
| Retention accrued, not due | 107.17 Cr, 45% of net receivable 238.30 | consolidated Mar-26 (CRISIL: 107.17, 238.30; `data.md` 3c standalone 107.18, 238.10) | CRISIL 21 Aug 2026; AR26 PDF p60 |
| Retention as share of EPC receivables | 29% (Mar-24), around 40% (Mar-25), 45% (Mar-26) | CRISIL, CRISIL, Computed | rationales above; `data.md` |
| Receivables over 2 years | 90.73 Cr (~15 Cr in arbitration; 6 Cr recovered at 0.5 Cr a month) | consolidated, Mar-26 | CRISIL 21 Aug 2026 |
| Receivables over 3 years, gross | 75.56 Cr = 45.2% of gross debtors (3,168 lakh credit-impaired) | consolidated Mar-26 | `data.md` 3c |
| Receivables over 3 years (EPC) | 36.81 Cr | Mar-23 | Acuite 9 Nov 2023 |
| Expected-loss matrix | 0% (<1y), 20% (1-2y), 35% (2-3y), 38.5% (3y+) | standalone | AR26 PDF p60 |
| Provisioning policy, as said | "our auditors make sure that we keep providing for really old receivables ... internal policy of bucket provisioning" | SS and SB, Q4T26 p11 [img] | Verified |

**Net unbilled work (standalone, "net amount due from customers": unbilled less related advances; `data.md` 3c):** 299.14 (Mar-23), 300.64 (Mar-24), 467.66 (Mar-25), **563.51 (Mar-26)**. Mar-24 to Mar-26 +87.4% against standalone revenue +24.3% (Computed, `depth_compute.py` C). Gross unbilled 690.91 and advances 127.40 at Mar-26. CRISIL: unbilled "~10% of the order book" (Mar-24), "~18%" (Mar-25). Net unbilled on the revenue = 217 days (`data.md`); the figure includes real-estate contract work, which the filings do not split (NOT FOUND, `data.md` 3c).

**Almet Corporation Limited.** Statutory auditor's emphasis of matter (standalone Note 45, AR26 PDF p42 / p81; consolidated Note 44, p82 / p123; repeated in the Q1 FY27 limited-review report): entire shareholding in Almet Corporation Limited, Share Transfer Agreement 31 March 2025; "due to a dispute among the transferees, the agreement has been kept in abeyance". Note 45 adds: Marathwada Realtors Private Limited also sold (28 Mar 2025) to partners of "Ramanuj Venture"; for Almet the transfer was executed to two of three intended transferees, "a dispute has emerged among the partners of Ramanuj Venture", the matter "is subjudice"; the company "has ceased to consolidate ACL & MRPL". Sale price: NOT FOUND (scope: AR25 Notes 41-42, AR26 Notes 44-45, MD&A, calls). Almet's FY25 loss in subsidiary table: -32.47 Cr (AR25 PDF p33). Not an EPC receivable; it matters as a control and cash-realisation point, and the profit on both sales sits in FY25 'Exceptional items' (AR25 EoM Notes 41, 42). Relevant to a WC booklet only as a footnote. Verified.

## 4. Interest rates disclosed

| Instrument | Rate | Entity, date, page | Grade |
|---|---|---|---|
| Cash credit from banks (SBI, Bank of Maharashtra, Karnataka Bank, Federal Bank), secured on current assets and properties, with personal guarantee of the Managing Director | **9.65% to 10.95%**; drawn 4,474.37 lakh (Rs 44.74 Cr), Mar-25 1,077.06 | CONSOLIDATED Note 13 "B. Current Borrowings", AR26 PDF p103 / printed p202 [img read]. Standalone equivalent PDF p63 | Verified |
| Term loans, Aditya Birla Capital and Aditya Birla Finance | 11.75%, 12.00%, 12.50% | consolidated Note 13.1, AR26 PDF p103 / printed p203 [img read] | Verified |
| ARKA Fincap Ltd (outstanding 3,392.44 lakh), SBM Bank Ltd (1,355.96) | **13.50%**; both secured on Santacruz and Powai project current assets | consolidated Note 13.1, AR26 PDF p104 | Verified (text) |
| Other rows | from 6.20% (Federal Bank overdraft against FDs) and 8.50% (ICICI) to 13.50% | `data.md` 3e (VS-1) | Verified |
| Lease liabilities | incremental borrowing rate 11% to 13% | standalone AR26 PDF p72 | Verified |
| Supplier finance, payable terms | "30-180days", Rs 104.33 Cr at Mar-26, no collateral | standalone AR26 PDF p66 (`data.md` 3d) | Verified |
| Client advances | "about 12% interest" | SS, Q1T27 p7; "10% interest plus the cost of BG" (SS, Q1T25 p15) | Verified |
| Management on cost of borrowing | CC "around 9% from SBI"; other borrowing "going towards 11% 12%" (SS, Q2T25 p19); CC drawdown 60-70 Cr "about 10%" (SS, Q3T25 p4); "current borrowings well below 15%, 13%" (SS, Q3T26 p8) | | Verified (text) |

The spread between CC (up to 10.95%) and the 13.50% project loans is 2.55 points (Computed). Mobilisation advances count as debt for CRISIL (section 2).

## 5. PEERS

Four listed building-EPC peers, all **consolidated**, Rs Cr, each company's own annual report (balance-sheet pages rendered and read; sources, PDFs, page numbers in `src/depth/peers/A-notes.md` and `B-notes.md`; scripts `nwc_A.py`, `nwc_B.py`, re-run by me and reproduced). Capacite is excluded by rule. NWC days = (inventories + trade receivables + contract assets/unbilled/retention - trade payables - customer advances/contract liabilities) / revenue x 365. Computed; inputs Verified. FY26 annual reports are out for all four.

| NWC days | FY21 | FY22 | FY23 | FY24 | FY25 | FY26 | Reading |
|---|---|---|---|---|---|---|---|
| PSP Projects (revenue 1,748 to 3,149) | | 39 | 48 | 95 | 109 | 68 | worse four years, relief in FY26 only |
| B.L. Kashyap (1,158 to 1,379) | | 123 | 162 | 149 | 152 | 106 | improved FY24 and FY26 only; FY26 coincides with customer advances 200 to 310 Cr |
| Ahluwalia Contracts (2,692 to 4,565) | 25 | 39 | 39 | 48 | 28 | 27 | two improving years, funded by advances 772 to 1,093 Cr |
| Cemindia (ITD Cementation) (3,809 to 10,061) | 29 | 6 | -4 | 1 | 23 | 40 | other way since FY23; FY26 is on a new consolidation basis |

(PSP and BLK from `nwc_A.py` "all" basis; BLK FY24 is the restated grouping from the FY25 report, about 305 Cr of unbilled moved out of inventories; BLK FY23 read from the FY24 report's comparative column.)

**Finding: none of the four shows a real sustained reduction** (three straight yearly falls, or a 20+ day drop that is not bought with client advances). Grade Moderate: four companies, own filings, one definition; a different definition moves days by 10 to 30 but not the direction (peer notes). What each did:
- **Ahluwalia**: net days fell 48 to 27 in FY24 to FY26 (-21), but advances rose from 607 to 1,093 Cr and contract assets from 717 to 1,138 Cr. Leaving advances out, days rose 105 to 114 (73 in FY22). No management explanation found in its filings. Relevant because Vascon management says its ratios are "at par with" Ahluwalia (SB, Q4T25 p10): on this definition Ahluwalia is at 27 to 48 days, Vascon's standalone proxy at 53 to 68 (section 6), formulas differ.
- **B.L. Kashyap**: -46 days in FY26 alone. Management wording is generic (annual report p6, "improving working capital management, accelerating customer collections", no number). The advance-funded reading is Weak (inferred from line items).
- **PSP**: worse. Its own deck cycle (inventory + receivable - payable days, advances not netted) was 28, 41, 35, 65 for FY22 to FY25 (Q4FY25 deck slide 12); AR FY26 p20: "the average working capital cycle increased from 65 days to 96 days ... largely attributable to an increase in trade receivables". FY26 relief is mobilisation advances 338 to 814 Cr.
- **Cemindia**: improved FY21 to FY23, which the CFO attributed to "large collections" (Q4FY22 call p2), then +44 days FY23 to FY26 as contract assets grew 809 to 2,263 Cr. Management quotes "around 120 days" and guides 110 to 120 days on Q1FY27 call (p9, p13, p16): a stated figure that excludes advances (inference).
- Published NWC days: BLK NOT FOUND (scope: its IR page, annual reports FY22-FY26); ACIL none of its own.

**Disconfirming search** (one, 7 Oct 2026, "building contractor NWC days reduced three consecutive years"): returned only aggregator pages (screener.in, stockanalysis, news); the one that fits (BLK days 161, 158, 140) is Weak as an aggregator and, on the company's own balance sheets, is the FY24 and FY26 pattern above, not three straight falls. J Kumar Infraprojects (99 days from 112, one year, news) is not a building contractor and one year only. So the booklet cannot say "peers cut NWC through discipline"; it can say **where peers hold NWC down it is by collecting more client advances, and that when a peer lost the advance cushion (PSP, Cemindia) its days rose.** That is the honest use of peers for the page.


## 6. Vascon's own history: a lower NWC cycle

| Year / date | What the company says | Evidence | Grade |
|---|---|---|---|
| 3 Aug 2022 | government departments pay "not more than 40-45 days" after bill (SS, Q1T23 p12) | client lag, not NWC | Verified |
| 16 May 2023 | "cash conversion cycle has also improved" (SS, Q4T23 p2); no days | net debt 12 Cr | Verified |
| "last couple of years, 4, 5 years" to Aug 2026 | "a very healthy working capital cycle of 45 days, net working capital cycle of 45 days" (SB, Q1T27 p7) | none: no formula in AR22-AR26 or any deck (`data.md` 3h) | Verified quote; level NOT FOUND |
| 16 May 2025 | "we are at around 45 days" (SS, Q4T25 p18) | CRISIL, same period, EPC receivable days 72 (FY25) or 71 and 63 (FY24, FY23 per the Oct 2024 print) | Verified |

The only independent reading is a rough proxy (Computed, **standalone, EPC and real estate together, not the company's definition**; `depth_compute.py` C): (net trade receivables + net amount due from customers - trade payables) / revenue x 365 = 53 days (Mar-23), 55 (Mar-24), 68 (Mar-25), 62 (Mar-26). Receivables plus net unbilled alone: 213, 229, 231, 308 days. Payables Mar-23 and Mar-24 (336.28, 364.14) read from AR24 PDF p97 image; Mar-25 and Mar-26 from `data.md` 3d. Use only as "the order of magnitude agrees with the 45 to 70 days quoted, the formula is unknown". The honest line for the "including by you" page: **the company has said it ran 45 days for four to five years and that it is now 65 to 70; the cycle was lowest in the years of its own stated best collections discipline (separate bank account per project, work halted when payment stops), and the company can show it again by publishing the formula.**

## 7. Q2 FY27 results date

Not announced as of 7 Oct 2026 (section 0 row 7). Q2 FY27 is the quarter ended 30 Sep 2026; the first deck with the Qualcomm order and the first read on whether the two government projects resumed (Q1T27 p3: "from August 2026"). Pattern guess only: board meeting and call in the first half of November.
