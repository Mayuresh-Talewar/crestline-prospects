# Revision prompt for the Claude Design canvas "Working-capital review, Capacite" (SALES-18)

Paste everything below the line into the existing canvas. It edits the 16 boards in place.

---

## Read this first: the one question this file must answer

This file is for Mr. Rohit Katyal, Executive Chairman of Capacite Infraprojects. Every page now answers one question for him: **"What if Crestline were already running at Capacite? How much money and how much time would it give back?"**

- **Time** is days taken out of a wait: days of work not yet billed, days of bills not yet paid, the age of old bills, the working-capital days in his own plan.
- **Money** is two figures, always shown as a pair and never added together: **cash released** (once) and **interest saved a year** (every year the shorter wait holds), at **9.65%**, the rate Capacite reports on its fund-based limits.
- Every saving is a **scenario on Capacite's published FY26 figures, not a forecast and not a promise.** Each chart carries one small note saying so.
- Management time saved (chasing, reconciling) is **never given a number**. Where it appears, it is described as the work Crestline does by itself.

## Keep exactly as built

Poppins throughout, the navy `#22396F` cover and navy pages (5, 7, 13), white pages with the navy header band, the header label row and its `#597BCC` rule, the 27 pt two-line H2s, the `#F5F7FB` chart panels with 5 mm radius, the pastel gradient bars and their borders, the callout block at the foot of each page (dot, small uppercase label, 15 pt sentence), the footer "Strictly Private & Confidential · Copy 1 of 1 · N / 16", both logos, the letter's date and address block and P.S. lines, page 15's two call slots and QR, and the sources and filing dates on page 16. Margins stay as they are: odd pages at left 22 mm, even pages at left 16 mm, content width 172 mm. Do not touch pages 3, 4, 14 and 15 beyond change G1 below.

## Global changes

**G1. No decorative curves on white pages** (2, 3, 4, 6, 8, 9, 10, 11, 12, 14, 15, 16):
- Header band: replace the curved bottom edge with a straight one. Band path becomes `M -3,-3 L 213,-3 L 213,61 L -3,61 Z` (page 2: bottom at 58; page 16: bottom at 40). Same fill `#22396F`.
- Delete both swoosh lines under the band. Put one straight hairline 3 mm below the band, full width, 0.5 pt, `#8FA7DD` (page 2 at 61, page 16 at 43, all others at 64).
- Callout divider: replace the wavy path (`M 2,3 C 40,-0.5 ...`) with a straight line from x 5 to x 172 at y 3, same colour and weight. The coloured dot at x 2 stays.
- Navy pages (1, 5, 7, 13) keep their curves. Only the cover's curved text goes (see page 1).

**G2. The "with Crestline" style, used identically on every chart:**
- Scenario marks are a projection, so they are drawn hollow: dashed outline 0.75 pt (SVG `stroke-dasharray: 1.2 0.9`), no fill or a 15% tint at most, hollow round markers (white or navy fill, 0.75 pt ring).
- Colour on white pages: `#146C49` (your existing green). On navy pages: `#9ED9BF`. The problem marks keep their current colours, so problem and scenario never share a colour.
- Same axis, same scale, same chart as the problem. Never a separate mini chart.
- Labels always use these words: **"days saved"**, **"cash released"**, **"interest a year"**, and the tag **"With Crestline, illustrative"**.
- One note per chart, 9 pt, `#5F6670` on white or `#C3CBDD` on navy: **"Scenario on your published FY26 figures, not a forecast."**

**G3. Copy rules:** no em or en dashes anywhere (use commas, full stops or the word "to"); figures as ₹X Cr with a non-breaking space; plain words, no marketing verbs; say "your ERP", never a vendor name. Minimum type 9 pt.

**G4. Board order and titles.** 16 pages stay. To make room for the summary page:
- **Old page 12 ("Your plan to reach 90 days") merges into the new summary**, which takes the **page 11** board. Its 152 to 90 chart becomes one row of the summary.
- **Old page 11 ("Your accounts show how much is waiting, not where") is replaced by the process map**, on the **page 12** board.
- Rename boards in the canvas: "11 What Crestline gives back" (file `P11-Cannot-show.dc.html`) and "12 Your bill, step by step" (file `P12-Ninety-days.dc.html`). Footer numbers stay 11 / 16 and 12 / 16.
- Reading order is then: problems (5 to 10), what it all gives back (11), the bill process (12), how Crestline works (13, 14), next step (15), sources (16).

## Figures used in this revision (all FY26 consolidated, ₹ Cr, 31 March 2026)

Revenue from operations ₹2,622.72 Cr, so one day of revenue = ₹7.19 Cr (computed, 2,622.72 / 365). Interest = cash x 9.65%.

| Figure | Value | Basis |
|---|---|---|
| Their target, 152 to 90 working-capital days | 62 days saved, ₹445.5 Cr cash released, ₹43.0 Cr interest a year | Annual Report FY26 PDF p.96 (152 and 90); computed 62 x 7.19 |
| 10 days less, work not yet billed (182.8 days) | ₹71.9 Cr, ₹6.9 Cr a year | computed |
| 30 days less, work not yet billed | ₹215.6 Cr, ₹20.8 Cr a year | computed |
| 10 / 30 days less, bills not yet paid (163.8 days) | same as above | computed |
| 10 days less on both waits | 20 days saved, ₹143.7 Cr, ₹13.9 Cr a year | computed |
| 30 days less on both waits | ₹431.1 Cr, ₹41.6 Cr a year; cash cycle incl. unbilled work 224.5 to 164.5 days | computed |
| Bills over six months back to March 2025 level | ₹128.2 Cr to ₹90.4 Cr: ₹37.8 Cr, ₹3.6 Cr a year | Annual Report FY26 PDF p.158; computed |
| ₹445.5 Cr against borrowings ₹471.77 Cr | 94% | audited results 20 May 2026 p.11; computed |
| 9.65% | rate on fund-based limits | investor presentation Q4 FY26 slide 5; call transcript PDF p.8 |
| Vendors | no cash and no days claimed | paying later than agreed is not a saving |

---

## Page 1, Cover (`Main.dc.html`)

1. **Delete the curved text** (the `textPath` "FROM WORK DONE TO CASH IN THE BANK" and its invisible path `kc-accent-path`). Keep all twelve curve lines and the white sweep.
2. Set that line **straight** instead: left 22 mm, top 55 mm, "FROM WORK DONE TO CASH IN THE BANK", Poppins 500, 9 pt, letter-spacing 0.12em, `#C3CBDD`.
3. **New H1** (replaces "Working-capital review"), left 22 mm, top 68.4 mm, width 172 mm, Poppins 600, 36 pt / 42 pt, letter-spacing -0.02em, white, two lines:
   "What if Crestline were<br>already at Capacite?"
4. "Capacite Infraprojects Limited" (106.9 mm) and "October 2026" (115.7 mm) and the rule at 126 mm stay.
5. **Headline figure**, new block, left 22 mm, top 131 mm, width 110 mm (it must clear the top curve line by at least 4 mm; at x 115 the curve sits near 171 mm):
   - "₹445.5&nbsp;Cr" Poppins 600, 36 pt / 40 pt, white.
   - "released, and ₹43.0&nbsp;Cr a year in interest at 9.65%," Poppins 500, 11 pt / 15 pt, white.
   - "if your working-capital days reach your own target of 90, from 152." 11 pt / 15 pt, `#C3CBDD`.
   - 1.5 mm gap, then "Scenario on your published FY26 figures, not a forecast." 9 pt, `#C3CBDD`.
6. Everything from 245 mm down (Prepared exclusively for, Drafted by, logos, names) stays.

## Page 2, Letter (`P02-Letter.dc.html`)

1. G1 applies (band bottom straight at 58, hairline at 61).
2. **Sender block** (top right, inside the band, keep its position and 9 pt / 12 pt size), five lines:
   - "Crestline Intelligence Private Limited" (white)
   - "Pune, Maharashtra"
   - "+91 77438 51234"
   - "rajat@crestlineintelligence.com"
   - "www.crestlineintelligence.com"
   No street address: none is published, so none is printed.
3. **Replace the letter body** (keep "Dear Mr. Katyal," the signature space, "Yours sincerely," and the name block). Same 10 pt / 15.5 pt, 8 pt paragraph gap:

   > On 27 September you replied that you were free for a video call. We could not fix a time, so I am sending this by post.
   >
   > I asked one question of your FY26 accounts: if Crestline had been running at Capacite this year, what would it have given back? Your Annual Report sets a target of 90 working-capital days, from 152, and you have already taken 43 days out this year. On your own published figures, the 62 days still to go are ₹445.5&nbsp;Cr of cash, and about ₹43&nbsp;Cr a year in interest at the 9.65% your fund-based limits now cost. Ten days less on the wait to bill and ten on the wait to be paid is ₹143.7&nbsp;Cr.
   >
   > Crestline finds those days bill by bill and site by site, and names who must act. It only reads your ERP. These are scenarios on public figures, not promises.
   >
   > I would value thirty minutes with you, or with Mr. Rajesh Das. Two times are on page 15.

## Page 5, Cash waiting (`P05-Cash-waiting.dc.html`, navy)

Keep the H2, the ₹2,490 Cr figure, the bracket and both stacked bars. Scale is 0.4712 mm per day (182.8 days = 86.14 mm).

1. **New scenario row** under the stacked bars, top 183 mm, height 8 mm, 1 mm gap between boxes, both boxes 0.75 pt dashed `#9ED9BF`, radius 3 mm, no fill:
   - box 1: left 22 mm, width 81.42 mm (172.8 days), text inside 9 pt white "172.8 days".
   - box 2: left 104.42 mm, width 72.47 mm (153.8 days), text inside 9 pt white "153.8 days".
   - right of box 2, 9 pt 600 `#9ED9BF`: "326.6 days".
2. Line at 192.5 mm, 9.5 pt / 13 pt: "**With Crestline, illustrative:** 10 days less on each wait. **20 days saved, ₹143.7&nbsp;Cr cash released, ₹13.9&nbsp;Cr interest a year** at 9.65%." Bold parts in `#9ED9BF`, rest `#C3CBDD`.
3. Move the FY26 revenue bar from 195 mm to 204 mm.
4. Caption (was "Both bars on the same scale."), at 218.5 mm: "All bars on the same scale, in days of sales. Scenario on your published FY26 figures, not a forecast."
5. Callout unchanged.

## Page 6, Unpaid bills (`P06-Unpaid-bills.dc.html`)

Keep the H2 and both lines. Chart panel grows from 148 mm to 158 mm tall (84 to 242 mm). Index scale: y = 118 - (index - 100) x 0.48.

1. **Scenario lines on the same index chart** (inside the existing SVG, viewBox mm):
   - dashed line from (30, 118) to (112, 46.82): index 248, receivables ₹1,105 Cr if bills had waited 10 days less.
   - dashed line from (30, 118) to (112, 62.32): index 216, ₹961 Cr at 30 days less.
   - Both `#146C49`, stroke-width 0.5292, `stroke-dasharray: 1.2 0.9`; hollow end markers r 1.2, fill white, stroke `#146C49` 0.3528.
2. Move the "264 / Bills not yet paid" label block up from 34.9 mm to 28 mm.
3. **New label block** left 117 mm, top 47 mm:
   - "With Crestline, illustrative" 9 pt 600 `#146C49`
   - small hollow green ring, then "**248**  10 days saved, ₹1,105&nbsp;Cr" 10 pt / 14 pt
   - small hollow green ring, then "**216**  30 days saved, ₹961&nbsp;Cr" 10 pt / 14 pt
4. **Fix the attribution** (replaces "Your Annual Report puts debtor days at 164, against terms of 45 to 90 days."), at 133 mm, 10 pt / 14 pt, two lines:
   "By our arithmetic on your FY26 balance sheet, bills wait 163.8 days to be paid, against terms of 45 to 90 days. Your Annual Report's debtors turnover, 164 days, agrees."
5. At 143.5 mm, 9 pt / 12 pt: "**10 days saved: ₹71.9&nbsp;Cr cash released, ₹6.9&nbsp;Cr interest a year** at 9.65%. **30 days saved: ₹215.6&nbsp;Cr and ₹20.8&nbsp;Cr a year.** Scenario on your published FY26 figures, not a forecast." Bold in `#146C49`, rest `#5F6670`.
6. Callout sentence (label "THE PRICE OF THE WAIT" stays), two lines: "Unpaid bills grew 3.6 times faster than sales. Ten days less waiting is ₹71.9&nbsp;Cr back in the bank." Set "3.6 times faster" and "₹71.9&nbsp;Cr back in the bank" in the existing red `#A8322A`.

## Page 7, Work not yet billed (`P07-Work-not-billed.dc.html`, navy)

Keep the H2, the timeline labels and both bars. Scale 0.494 mm per day.

1. **Scenario bar under the 182.8-day bar**, top 118 mm, left 22 mm, width 85.37 mm (172.8 days), height 5 mm, 0.75 pt dashed `#9ED9BF`, radius 2.5 mm, no fill; text inside 9 pt white "172.8 days".
2. Hollow ring marker (2.4 mm, navy fill, 0.75 pt `#9ED9BF`) at x 97.49 mm (152.8 days), centred on that bar.
3. Two lines right of the bar, left 110 mm, 9 pt / 12 pt, `#9ED9BF`:
   - top 118 mm: "**10 days saved:** ₹71.9&nbsp;Cr cash released, ₹6.9&nbsp;Cr interest a year"
   - top 122.5 mm: "**30 days saved (ring):** ₹215.6&nbsp;Cr cash released, ₹20.8&nbsp;Cr interest a year"
4. Caption moves from 119 mm to 128 mm: "Drawn to scale: 346.6 days from work done to cash in the bank. Scenario on your published FY26 figures, not a forecast."
5. The FY23 to FY26 bar panel moves from 134 mm to 139 mm (height unchanged); the ₹245.2 Cr line moves from 216 mm to 219 mm.
6. Callout unchanged.

## Page 8, Ageing (`P08-Ageing.dc.html`)

Keep everything; add one scenario line on the same stack. Scale 0.8456 mm per ₹ Cr (₹90.4 Cr = 76.44 mm), so the March 2025 total sits at 61.56 mm.

1. Dashed horizontal line at y 61.56 mm from x 8 to x 78 (across both columns), 0.75 pt `#146C49`, dash 1.2 / 0.9; hollow green markers (2.4 mm) at x 21 and x 65.
2. Green leader 78.5 to 81.1 mm at 61.56 mm, then a label block at left 82 mm, top 60.2 mm, 9 pt / 12 pt:
   - "With Crestline, illustrative" (600, `#146C49`)
   - "over six months back to ₹90.4&nbsp;Cr"
   - "₹37.8&nbsp;Cr cash released" (600, `#146C49`)
3. Under the year labels, at 146.5 mm inside the panel, 9 pt / 12 pt, width 108 mm: "**₹37.8&nbsp;Cr cash released, ₹3.6&nbsp;Cr interest a year** at 9.65%. Some of this money is in legal process; Crestline tracks it, it cannot speed a tribunal. Scenario on your published FY26 figures, not a forecast."
4. Auditor card and callout unchanged.

## Page 9, Funding the growth (`P09-Funding.dc.html`)

1. Waterfall panel height 100 mm to 92 mm (84 to 176 mm); its contents do not move.
2. Borrowings and finance-cost panels move to top 179 mm and grow to 52 mm tall.
3. **Borrowings panel, fourth row on the same scale** (40 mm = ₹472 Cr, so 0.0847 mm per ₹ Cr): label "Your target" 9 pt 600 `#146C49`; bar 37.75 mm wide, 4.2 mm tall, 0.75 pt dashed `#146C49`, fill `#EAF6EF`, radius 2.1 mm; value "₹445.5&nbsp;Cr" 10 pt 600 `#146C49`.
4. Under the rows, 9 pt / 12 pt `#5F6670`: "Cash released at your 90-day target, same scale: 94% of borrowings, and **₹43.0&nbsp;Cr interest a year**. Scenario on your published FY26 figures, not a forecast."
5. Finance-cost panel content unchanged.
6. Green note moves to top 234 mm, unchanged text. Keep at least 2 mm clear above the callout; if it collides, set the note on one line at 9.5 pt.
7. Callout unchanged.

## Page 10, Vendors (`P10-Vendors.dc.html`)

No cash and no days are claimed on this page. Paying later than agreed is not a saving. What Crestline gives back here is sight of each vendor's own date.

1. Peer bar panel unchanged.
2. **Dumbbell panel**, two rows now:
   - shorten both row lines to start at x 30 mm (end 160 mm); row labels at left 6 mm, 9 pt: "Today" (`#5F6670`) on the existing row at 32 mm, "With Crestline" (600, `#146C49`) on a new row at 40 mm.
   - new row: hairline `#C3CBDD`; at x 57 mm (the day the terms allow) a navy dot inside a 4.5 mm dashed `#146C49` ring. No bar: it is paid on its own date, not before and not after.
   - move the two white chips from 41 mm to 48 mm.
3. Under the ₹909.9 Cr / ₹45.7 Cr block, at 233 mm, 9.5 pt / 13 pt, `#146C49`: "With Crestline: each vendor paid on its own due date, early payments named, MSME dues flagged before day 45. No cash is claimed here, because paying later than agreed is not a saving."
4. Callout sentence (label "PAY ON THEIR DATE" stays), two lines: "Pay each vendor on the date its own terms set. An average cannot show who is paid early and who late." Set "the date its own terms set" in `#8F5A05`.

## Page 11, NEW: What Crestline would have given back (`P11-Cannot-show.dc.html`)

Replaces old page 11's content entirely and absorbs old page 12. White page, left 22 mm, G1 band and hairline.

1. Header row: left "WHAT CRESTLINE GIVES BACK", right "CAPACITE INFRAPROJECTS".
2. H2: "What Crestline would have<br>given back in FY26."
3. **Lead strip**, top 82 mm, three columns divided by 0.5 pt `#D6D9DF` hairlines, no panels:
   - "62 days" 28 pt 600 `#146C49`, under it 9.5 pt `#5F6670` "saved, from 152 to your own target of 90 working-capital days"
   - "₹445.5&nbsp;Cr" 28 pt 600 `#146C49`, under it "cash released, once"
   - "₹43.0&nbsp;Cr" 28 pt 600 `#146C49`, under it "interest a year, at 9.65%"
   - one line under the strip, 9 pt `#5F6670`: "You have already taken 43 days out this year, including retention debtors. The Annual Report does not define working-capital days; we assume a revenue basis."
4. **The one visual**, top 118 mm: a ruled table, header row 7 mm, five rows of 16 mm, hairlines `#D6D9DF` between rows only. Columns: problem 46 mm, days 70 mm, cash released 30 mm, interest a year 26 mm. Header labels 9 pt 600 `#22396F`: "The wait", "Days today and with Crestline", "Cash released, once", "Interest a year".
   The days column is one shared axis, 0 to 200 days at 0.35 mm per day, ticks at 0, 50, 100, 150, 200 under the last row (9 pt `#8A94A6`). Today's bar: 4 mm tall, your grey-blue gradient (`#C3C9D3` to `#9CC5EE`) with its `#6F7783` 0.5 pt border. The days saved: the end of today's bar overlaid with a 0.75 pt dashed `#146C49` box, labelled in 9 pt green.

   | The wait | Days (bar) | Cash released | Interest a year |
   |---|---|---|---|
   | Work done, not yet billed | 182.8 days; dashed box over the last 10 days, hollow ring at 152.8; label "10 or 30 days saved" | ₹71.9&nbsp;Cr or ₹215.6&nbsp;Cr | ₹6.9&nbsp;Cr or ₹20.8&nbsp;Cr |
   | Bills raised, not yet paid | 163.8 days; dashed box over the last 10 days, hollow ring at 133.8; label "10 or 30 days saved" | ₹71.9&nbsp;Cr or ₹215.6&nbsp;Cr | ₹6.9&nbsp;Cr or ₹20.8&nbsp;Cr |
   | Bills over six months old | no bar; 9 pt text "measured in rupees: ₹128.2&nbsp;Cr, back to ₹90.4&nbsp;Cr" | ₹37.8&nbsp;Cr | ₹3.6&nbsp;Cr |
   | Working capital, your 90-day target | 152 days; dashed box from 90 to 152; label "62 days saved" | ₹445.5&nbsp;Cr | ₹43.0&nbsp;Cr |
   | Vendors | 179.2 days, no dashed box; 9 pt text "none claimed" | None claimed | None claimed |

   Figures in the money columns 10.5 pt 600 `#146C49`; "None claimed" 10 pt `#5F6670`.
5. Under the table, 9 pt / 12 pt `#5F6670`: "Scenarios computed with Crestline's working-capital arithmetic on your published FY26 consolidated figures, at the 9.65% rate on your fund-based limits. Not a forecast or a commitment."
6. **Overlap note**, 9.5 pt / 13 pt `#0B0D10`: "These rows overlap and are never added together. Bills over six months sit inside unpaid bills, and your 90-day target already covers the first two rows. Cash is released once; interest is saved every year the shorter wait holds."
7. **Management time**, 9.5 pt / 13 pt `#0B0D10`: "One saving we do not put a number on: the hours your teams spend chasing and reconciling. Crestline does that work itself: a named list per site, an owner on every line, a ticket with a due date, reminders, and an hourly re-check that closes the ticket only when the figure moves."
8. Callout (moved from old page 12, keep its green dot): label "MET SITE BY SITE", sentence "A target in days is met site by site, bill by bill. That list is what Crestline produces." Second sentence in `#146C49`.
9. Drop from old page 12: the navy box "On the call we would ask one thing..." and the separate green 43-days box (that line now sits under the lead strip and in the letter).
10. Footer right-aligned, "11 / 16".

## Page 12, NEW: the process map (`P12-Ninety-days.dc.html`)

Replaces "Your accounts show how much is waiting, not where." White page, left 16 mm, G1 band and hairline. No Capacite days, figures or names on this page.

1. Header row: left "WHAT THE ACCOUNTS CANNOT SHOW", right "CAPACITE INFRAPROJECTS".
2. H2: "Ten steps from work to cash,<br>and a clock on every one."
3. Top 82 mm: left, 10.5 pt 600 `#22396F` "One RA bill, from work done to cash in the bank". Right, the pill used on page 14 (white, 0.5 pt `#C3CBDD`, radius 3 mm, 9 pt `#5F6670`): "Illustrative: your stages, measured from your ERP once connected".
4. Column labels at 92 mm, 9 pt 600: "Step" (x 34 mm, `#22396F`), "Whose move" (x 84 mm), and over three columns at x 106, 134 and 162 mm (each 24 mm): "Days waiting", "Money held now", "Desk holding it".
5. **Ten rows**, 13.5 mm each, from 98 mm. Each step is a node: x 34 to 80 mm, 9 mm tall, fill `#F5F7FB`, 0.5 pt `#C3CBDD` border, radius 3 mm, text 10 pt 600 `#22396F`. Between nodes, a 0.5 pt `#98A2B3` vertical connector with a small arrowhead at x 57 mm. "Whose move" is a word, 9 pt 600: **Ours** in `#567FAC`, **Client's** in `#8F5A05`. The three measure cells per row are empty boxes, 24 x 9 mm, 0.5 pt dashed `#C3CBDD`, radius 2 mm.

   | Step | Whose move |
   |---|---|
   | Work executed | Clock starts |
   | Measured | Ours |
   | QS checked | Ours |
   | RA bill prepared | Ours |
   | Internal review | Ours |
   | Submitted to client | Ours |
   | Acknowledged by client | Client's |
   | Certified | Client's |
   | Invoiced | Ours |
   | Collected | Client's |

6. **Rework loop**: a dashed 0.5 pt `#8F5A05` connector from the left edge of "Certified" out to x 24 mm, straight up to the "RA bill prepared" row, and back in to that node with an arrowhead; right-angled with 2 mm corner radii, no free curves. A small white pill centred on the vertical run, 9 pt `#8F5A05`: "Sent back".
7. Footnote at 235 mm, 9 pt / 12 pt `#5F6670`: "A wait belongs to whoever makes the move that ends it. A bill sent back repeats the same step, so Crestline counts every round and the days it added. For each step Crestline shows the days a bill usually waits and the slowest fifth, the money sitting there today, and the desk that must act."
8. Callout (moved from old page 11, keep its dot and colour): label "FILLED FROM YOUR ERP", sentence "Every one of these boxes can be filled, with dates, from your own ERP." Set "from your own ERP" in `#567FAC`.
9. Footer left-aligned, "12 / 16".

## Page 13, How Crestline works (`P13-How-it-works.dc.html`, navy)

Keep the header row, the H2 "We only read your ERP. We never change it." and the callout. Replace the three boxes (01, 02, 03) and the four-line list under them with three bands.

1. **How we compute**, top 82 mm. Title 10.5 pt 600 white: "From your ERP down to one named line". A left-to-right flow of outlined boxes (0.75 pt white, radius 4 mm, title 11 pt 600 white, line 9 pt `#C3CBDD`), short white arrows between, as on the current page:
   - "Your ERP" / "Dates, amounts and desks. Read only." (30 mm wide, 40 mm tall)
   - "Company" / "Every project, ranked by rupees times days." (30 x 40 mm, fill `#2E4A85`, Crestline logo top right)
   - "Project" / "Contract to cash for one site." (30 x 40 mm)
   - then two rows of two boxes, each 33 x 18 mm, 4 mm apart:
     - "O2C, cash in" / "Each RA bill, step by step." then "Client" / "Its certification and payment clocks, against its contract."
     - "P2P, cash out" / "Each order, from PO to payment." then "Vendor" / "Paid against its own due date."
2. **One simulation on your published figures**, top 132 mm. Title 10.5 pt 600 white. Three lever rows, 12 mm each: label (52 mm, 10 pt white), a slider track (80 mm, 0 to 200 days at 0.4 mm per day, hairline `#597BCC`), and the bound (40 mm, 9 pt `#C3CBDD`). Today is a filled white dot; the scenario a hollow `#9ED9BF` ring joined to it by a dashed `#9ED9BF` segment.
   - "Work done, waiting to be certified": 182.8 to 152.8 days. Value 9 pt `#9ED9BF` "30 days saved, ₹215.6&nbsp;Cr". Bound: "Floor: each contract's certification window, from your ERP."
   - "Billed, waiting to be paid": 163.8 to 133.8 days, tick at 90 days. Value "30 days saved, ₹215.6&nbsp;Cr". Bound: "Floor: the term each client signed, 45 to 90 days."
   - "Vendor credit": dot at 179.2 days, no ring. Value "Held". Bound: "Ceiling: each vendor's agreed terms. Never stretched."
   - Result line, 10.5 pt: "**Cash cycle, unbilled work included: 224.5 to 164.5 days. ₹431.1&nbsp;Cr cash released, ₹41.6&nbsp;Cr interest a year** at 9.65%." (bold in `#9ED9BF`)
   - Note 9 pt `#C3CBDD`: "For comparison, your own 90-day target: ₹445.5&nbsp;Cr. Scenario on your published FY26 figures, not a forecast."
3. **Then what happens**, top 200 mm. Title 10.5 pt 600 white. Five outlined boxes in one row, 32 mm wide, 3 mm gaps, 26 mm tall, arrows between, title 10 pt 600 white, line 9 pt `#C3CBDD`:
   - "Ticket raised" / "Baseline, target and due date fixed."
   - "Owner named" / "The desk that does the work."
   - "Reminders" / "One to five a day, by severity."
   - "Re-measured" / "Every hour, the same figure, fresh data."
   - "Closed on evidence" / "Only when the figure moves."
   - Under the row, 9 pt `#C3CBDD`: "Nobody can mark a ticket done by hand. The hourly check is Crestline's own, not your statutory auditor."
4. Callout unchanged ("NOTHING CHANGES ON SITE").

## Page 16, Sources (`P16-Back-cover.dc.html`)

1. G1 applies (band straight at 40, hairline at 43).
2. Sources list: change the transcript line to "Q4 FY26 earnings call transcript, call held 21 May 2026, filed 25 May 2026 (NSE)."
3. Under "How to read the figures", add one item:
   "· Scenarios (pages 1, 2, 5 to 11 and 13) are Crestline's arithmetic on these figures: days x FY26 revenue per day (₹2,622.72&nbsp;Cr / 365 = ₹7.19&nbsp;Cr). Interest = cash x 9.65%, the rate on fund-based limits (investor presentation Q4 FY26, slide 5; call transcript, PDF p.8). Cash is released once; interest recurs each year. Scenarios overlap and are never added. Not a forecast."
4. Notes by page, edits:
   - **Page 6**: replace "Debtors turnover 164 days: Annual Report FY26 (PDF p.95)" with "163.8 days computed: receivables / FY26 revenue x 365; the Annual Report's debtors turnover of 164 days (PDF p.95) agrees". Replace "rate from the Q4 FY26 call" with "rate: see Scenarios".
   - **Page 8**: add "Scenario: over six months back to the March 2025 level, ₹128.2&nbsp;Cr less ₹90.4&nbsp;Cr."
   - **Page 9**: add "₹445.5&nbsp;Cr against borrowings of ₹471.77&nbsp;Cr (audited results p.11): 94%."
   - **Page 10**: add "No scenario: paying later than agreed is not counted as a saving."
   - **Page 11** (replace): "Rows 1 and 2: 10 and 30 days x ₹7.19&nbsp;Cr. Row 3: ₹128.2&nbsp;Cr less ₹90.4&nbsp;Cr. Row 4: 152 days and the 90-day plan, Annual Report FY26 (PDF p.96); 43 days (PDF p.12 and p.16); 62 days x ₹7.19&nbsp;Cr. The report does not define working-capital days, so a revenue basis is assumed. Row 5: none claimed."
   - **Page 12** (replace): "Illustrative stages of an RA bill. No Capacite data. Public disclosure stops at one ageing table, not split by project, client or site (Annual Report FY26, PDF p.158)."
   - **Page 13** (add): "Simulation: contract-asset days 182.8 and receivable days 163.8 each 30 days lower; payable days held at 179.2 (payables ₹909.92&nbsp;Cr / material, construction and traded purchases ₹1,853.5&nbsp;Cr x 365, computed). Cash cycle including unbilled work: 224.5 to 164.5 days."
5. Contact block: after "Crestline Intelligence Private Limited" add ", Pune, Maharashtra".
6. If the notes overflow the two columns, set the notes at 8.5 pt / 11 pt rather than dropping any of them.

## Pages 3, 4, 14, 15

G1 only. Nothing else changes.

## Before you finish, check

- No em or en dash anywhere; no figure that is not in the table above or already on the page.
- Every scenario mark is dashed or hollow and green; every problem mark keeps its own colour; every chart with a scenario has its one "not a forecast" note.
- Vendors page claims no cash and no days.
- Cover title and tagline are straight text; no curve remains on any white page.
- Footers read 1 / 16 to 16 / 16 in order; board titles 11 and 12 renamed.
