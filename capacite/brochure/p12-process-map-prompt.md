# P12 process map: paste-ready Claude Design instruction (SALES-20)

Figures: Crestline's own discovery engine, run read-only on Grey Infra project GI-BSP-02 (Bhilai), O2C stream, 86 RA bills, 780 events, as at the source's last event. Raw output: `case-study-calc/p12-map.txt` (script `case-study-calc/p12-map.ts`). Paste everything below the line.

---

Replace the content of board **"12 Your bill, step by step"** (file `P12-Ninety-days.dc.html`). KEEP exactly as they are: the navy header band and its two contour lines, the header row "WHAT THE ACCOUNTS CANNOT SHOW" / "CAPACITE INFRAPROJECTS" and its hairline, the H2 "Ten steps from work to cash,<br>and a clock on every one.", the footer "Strictly Private & Confidential · Copy 1 of 1 · 12 / 16" and its position, Poppins, and the colours already used on this page (navy `#22396F`, ink `#0B0D10`, grey `#5F6670`, node fill `#F5F7FB`, node border `#C3CBDD`, connector `#98A2B3`, Ours `#567FAC`, Client's `#8F5A05`). Add one tone only, for the slowest step: red ink `#B42318` on tint `#FEF3F2` (if the red on page 8 differs, use that one). DELETE: the illustrative pill, the column table, every dashed empty box, the "Sent back" pill and its right-angled connector, and the old footnote. No dashed empty boxes anywhere on the page. No Capacite figures on this map.

All coordinates are mm inside the existing 210 x 297 trim frame (the div at left 3 mm, top 3 mm, as on every board). Text column x 16 to 188. Minimum type 9 pt. Draw the map as one inline SVG, `viewBox="0 0 210 297"`, width 210 mm, height 297 mm, over the trim frame, with the text as HTML or SVG text, whichever you already use.

## 1. Lead line, y 72 to 77
- Left, x 16, 10.5 pt 600 `#22396F`: "One RA bill, from work done to cash in the bank".
- Right-aligned to x 188, 9 pt `#5F6670`: "86 bills · median 171 days, slowest fifth 249".

## 2. Column heads, y 80 to 87 (9 pt; top line 600 `#22396F`, second line 400 `#5F6670`)
- x 19: "Step"
- x 60: "Days waiting" / "median · slowest fifth"
- x 84: "Held here now" / "bills parked at this step"
- right-aligned to x 130: "Whose move"

## 3. The map: one column of nodes, top to bottom
- **Start pill**, x 16 to 76, y 89 to 95, radius 3 mm, white, 0.75 pt `#22396F` border, 9 pt 600 `#22396F`: "Work executed · the clock starts · 76 bills".
- **Ten node cards**, x 16 to 132 (116 mm), 9.5 mm tall, radius 3 mm, fill `#F5F7FB`, 0.5 pt `#C3CBDD` border. Card k (k = 0 to 9) has top y = 99 + 13.5k (so 99, 112.5, 126, 139.5, 153, 166.5, 180, 193.5, 207, 220.5). Inside each card, one line, vertically centred:
  - **Left rail** 1.4 mm wide, full card height, clipped to the card's left radius: `#567FAC` for Ours, `#8F5A05` for Client's.
  - Step name at x 19, 10 pt 600 `#22396F`.
  - Days at x 60: median 10.5 pt 600 `#0B0D10`, then a space and the slowest fifth 9 pt `#5F6670`.
  - Held at x 84: the rupee figure 10 pt 600 `#0B0D10` then 9 pt `#5F6670` " · n bills". Where nothing is parked: 9 pt `#5F6670` "Nothing parked".
  - Owner tag right-aligned to x 130: a pill 5 mm tall, radius 2.5 mm, white, 0.5 pt border in the owner colour, 9 pt 600 text in the owner colour: "Ours" or "Client's".

| k | Step name | Days waiting | Held here now | Whose move |
|---|---|---|---|---|
| 0 | Joint measurement | **7.6 d** 11 | Nothing parked | Ours |
| 1 | MB / QS check | **5.0 d** 9 | Nothing parked | Ours |
| 2 | RA bill prepared | **5.6 d** 7 | Nothing parked | Ours |
| 3 | Review started | **3.2 d** 4.9 | **₹13.5 Cr** · 6 bills | Ours |
| 4 | Review completed | **14.5 d** 26.7 | Nothing parked | Ours |
| 5 | Bill submitted | **4.7 d** 6.2 | **₹5.2 Cr** · 2 bills | Ours |
| 6 | Client acknowledged | **12.8 d** 17.9 | **₹28.2 Cr** · 12 bills | Client's |
| 7 | Certified | **45.8 d** 60.3 | Nothing parked | Client's |
| 8 | Tax invoice raised | **10.2 d** 14.2 | **₹27.1 Cr** · 10 bills | Ours |
| 9 | Payment received | **110.1 d** 134.1 | Last step | Client's |

- **Edges (the trunk).** A 0.5 pt `#98A2B3` vertical arrow at x 22 from the bottom of each node to the top of the next (4 mm), small filled arrowhead. Label to the right of the arrow at x 25, 9 pt `#5F6670`, vertically centred in the gap: days 600 `#0B0D10`, then " · n bills". Line weight steps with volume: 0.75 pt for 70 bills and up, 0.5 pt for 30 to 69, 0.35 pt under 30.

| Into | Edge label |
|---|---|
| Joint measurement (from the start pill) | **7.6 d** · 76 bills |
| MB / QS check | **5.0 d** · 76 bills |
| RA bill prepared | **5.5 d** · 76 bills |
| Review started | **3.6 d** · 76 bills |
| Review completed | **14.2 d** · 70 bills |
| Bill submitted | **4.6 d** · 70 bills |
| Client acknowledged | **12.5 d** · 44 bills |
| Certified | **45.8 d** · 15 bills |
| Tax invoice raised | **9.4 d** · 23 bills |
| Payment received | **110.1 d** · 35 bills (red, see 5) |

- **Short-certification branch.** Right of card 7, a small pill x 138 to 188, y 194.5 to 202.5, radius 3 mm, fill `#F5F7FB`, 0.5 pt `#8F5A05` border, two lines 9 pt: line 1 600 `#8F5A05` "Certified short · 29 bills · 46.9 d", line 2 `#5F6670` "₹10.6 Cr held on 5 · then 10.3 d to invoice". Join it to the right edge of card 7 with a 0.5 pt `#8F5A05` line (x 132 to 138, y 198.5). No return arrow (it would cross the callout below); line 2 carries that leg.

## 4. The rework loop (curved, dashed)
- A curved dashed arrow, 0.75 pt `#8F5A05`, dash 1.5 / 1 mm, leaving the right edge of card 3 (Review started) and returning into the same edge: path `M 132,142 C 150,134 150,160 133,147`, arrowhead pointing left at the end. It is a loop, so it returns to the SAME step, not to an earlier one.
- Two small white pills on the outer side of the loop, 0.5 pt `#8F5A05` border, radius 2.5 mm, 9 pt `#8F5A05`, 5 mm tall: x 152 to 188 at y 135.5 "RA rejected · 21.4 d", and x 152 to 188 at y 142.5 "RA corrected · 2.8 d".
- Under them, x 152 to 188, y 150 to 164, 9 pt / 12 pt: line 1 600 `#8F5A05` "Sent back 13 times", then `#0B0D10` "on 11 of 86 bills. About 26 days added each round."

## 5. The slowest step, by money
- Card 9 (Payment received) changes tone: fill `#FEF3F2`, 0.75 pt `#B42318` border, rail `#B42318` 2 mm, the days figure "110.1 d" in `#B42318`. Its owner tag stays "Client's" in `#8F5A05`.
- The edge into it: 0.75 pt `#B42318`, arrowhead `#B42318`, label "**110.1 d** · 35 bills" with the days in `#B42318` 600.
- **Callout**, x 138 to 188, y 207 to 236, no fill, a 0.75 pt `#B42318` rule down its left edge (x 138), text from x 141: label 9 pt 600 letter-spacing 0.08em `#B42318` "SLOWEST STEP, BY MONEY"; then 9.5 pt / 13 pt `#0B0D10`: "Invoice to cash takes **110 days**, the slowest fifth 134. **₹62.8 Cr** has passed through it on 35 bills, and **₹27.1 Cr** sits on 10 invoices waiting now." (bold = 600). A 0.5 pt `#B42318` leader from the callout's left rule at y 225 to the right edge of card 9 (x 132).

## 6. Under the map
- Footnote, x 16 to 188, y 239, 9 pt / 12 pt `#5F6670`: "Days are medians between dated events in the ERP; the slowest fifth is the 80th percentile. Held here now counts the bills whose last recorded step is this one. A wait belongs to whoever makes the move that ends it, so acknowledging, certifying and paying are the client's."
- **Source label (required, do not reword)**, x 16, y 252, 9 pt 600 `#22396F`: "Shown on Crestline's demonstration EPC ERP (Grey Infra, one project). Yours is drawn from your own ERP once connected."

## 7. Callout (keep its position, label, dot and divider)
- Label stays "FILLED FROM YOUR ERP".
- Sentence: "Every step on this map can be drawn, with dates and rupees, from your own ERP." Set "from your own ERP" in `#567FAC`.

## Checks before you finish
- No dashed boxes anywhere; the only dashed stroke on the page is the rework loop.
- Nothing overlaps: right-zone items sit at loop y 134 to 164, short pill y 194.5 to 202.5, callout y 207 to 236; cards end at x 132.
- The H2 is still the largest text on the page. No new fonts.
