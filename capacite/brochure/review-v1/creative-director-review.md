# SALES-12c Creative Director review: Project Keystone v1 (frozen)

Reviewed 2026-10-06: renders p01-p16, spreads.png, keystone.pdf (16 pages, MediaBox 612 x 858.96 pt, Plex Serif/Sans/Mono only, checked).
Print piece, so desktop/390px/dark do not apply. Contrast was checked by eye only, not measured.

## Verdict: CHANGES REQUESTED

The base is strong. The voice is plain and dated, the figures are his own and every page is sourced. The letter (p2), the ageing page (p8) and the call page (p15) are where it should be.
It is not yet "perfect, not AI-made". Three things still give it away: a stock-brochure swoosh on the cover and the back, wireframe-style dashed boxes on four pages, and a template rhythm (a mono-caps label, a headline, a chart, then a dead gap, on 14 pages).

## 1. Would he keep the cover on his desk?
Not yet. What earns a place on the desk: "Copy No. 1 of 1 / Issued to: Mr. Rohit Katyal", the serif title between hairlines, and a lot of calm white.
What costs it:
- The curve is generic. One navy swell with five blue contour lines is the stock device of insurance and bank annual reports. Nothing in it is Capacite’s, so it reads as decoration.
- The tracked mono uppercase text on the path ("FROM WORK DONE TO CASH IN THE BANK") is a web-hero gimmick. It is also the only mono caps on the page, so it pulls the eye away from his name.
- 76 mm of dead white sits between the title rule (y 101) and the first contour. The page reads as two halves, not one object.

What would make it keepable:
- Make the line his data. Draw the top contour as the real shape of Capacite’s FY22-FY26 order book (8,702 / 9,513 / 9,011 / 10,545 / 13,498, smoothed). Mark the five fiscal years in 9 pt Plex Sans at the points where they sit, x 22 to 194. Footnote it on p16. Then the curve is a fact about his company. A chairman keeps that, and nobody keeps a swoosh.
- Delete the text on the path. If a line is wanted, set "From work done to cash in the bank" straight, Plex Serif italic 11 pt, ink, at x 22, baseline y 112, under the title block.
- Production, for the printer: blind-deboss "Project Keystone" on the 300 gsm board. Hand-number "1/1" in ink beside "Copy No.". These are the touches that make it an object.

## 2. Template or AI tells (element, page)
1. **Cover and back curves (p1, p16).** p16’s curve is a different S-wave with two bends, not the cover’s single tide. It reads as a website section divider. Fix: on p16, drop the band, or mirror the cover’s exact path (M -3,205 C 55,250 125,232 213,188) flipped vertically at the top.
2. **Dashed boxes (p7, p10, p11, p14).** p11 is 15 identical dashed rectangles with mono placeholder text ("Which site?"). It looks like an empty-state UI. p7’s three dashed mono boxes and p10’s dashed "Vendor by vendor" box do the same.
3. **"WHAT THIS MEANS FOR YOU" in mono caps on 14 pages,** plus a mono-caps running header. One label repeated on every page is the eyebrow-on-every-section tell.
4. **p13: three outlined cards joined by arrows,** with four ruled one-liners below. This is the "three equal cards" layout, the top tell in brochure-ai-tells.md.
5. **Every page has the same skeleton** (label, headline, visual, empty band, meaning, notes). On p3, p4, p7, p11, p12, p13 and p14 the 1fr visual row leaves 50-90 mm of nothing above the meaning line. That empty band says "a grid was filled", not "a page was composed".
6. **Diagonal jelly gradients on print bars (p4, p5 revenue bar, p9, p10, p12).** These are the app’s style and the brief asks for them. But a grey-to-blue fill on a single-series bar (p4, p10, p5 revenue) carries no meaning, and it is the gradient that reads as AI. Keep the jelly where two series must be told apart (p5 stack, p8 red band, p9). Use flat tints elsewhere.

## 3. Reader order and the 5-second test
The order works: who you are (p3-4), the cash waiting (p5-7), how old it is (p8), what it cost (p9), vendors (p10), what the accounts cannot show (p11-12), how we read it (p13-14), the ask (p15), sources (p16). The navy rectos on p5, p7 and p13 give a good beat.

Pages that fail 5 seconds:
- **p9:** 3-line headline, a waterfall, a side table, a prose note and a footnote line. Four focal points.
- **p4:** the headline leads with sales, but the chart is the order book. The reader has to find revenue in the side column.
- **p12:** 3-line headline, plus a 2-line serif question that competes with it.
- **p10:** 3-line headline. The dumbbell key in a dashed box reads like a broken chart.
- **p7:** repeats the p5 bar (182.8 / 163.8) two pages later, so it feels like a reprint.

The brief allows at most 2 headline lines. p9, p10 and p12 break that.

## 4. Findings

| # | Sev | Page | Finding | Exact fix |
|---|---|---|---|---|
| 1 | Major | p1 | Generic swoosh plus mono text on the path; dead white y 101-177 | Order-book contour and straight serif subline, as in section 1 |
| 2 | Major | p11 | 15 dashed placeholder boxes | One ruled table: figure column, then "Which site / Whose desk / Since when" as 10 pt Plex Sans column heads. Each cell is an empty 0.5 pt #5F6670 underline, like the P.S. lines on p2. No dashes, no mono |
| 3 | Major | p9, p10, p12 | Headlines run to 3 lines | p9 "Three-quarters of four years’ operating profit went into working capital." at 30 pt, measure 12 cols. p10 "Vendors wait about 179 days. Each one’s terms set its date." p12 "Your target is 90 working-capital days. You report 152." Confirm wording against v2 |
| 4 | Major | p13 | Three cards and arrows | One horizontal line: three nodes as 2 pt dots on a 0.75 pt #C3CBDD rule, with the label under each dot. No boxes |
| 5 | Major | p3, p4, p7, p11-14 | Dead band above "What this means" | Visual row auto not 1fr, and the meaning block sits 14 mm under the visual. Let the white fall at the page foot above the notes. On p3, run the client and project lists the full width in two columns |
| 6 | Major | p16 | Different wave from the cover | Use the cover path, flipped, or no curve at all |
| 7 | Major | p9 | Side table sits inside the plot area | Move borrowings and peer finance cost below the waterfall as a 12-column ruled table. The waterfall uses cols 1-12 |
| 8 | Polish | all | "WHAT THIS MEANS FOR YOU" mono caps x14 | Drop the label and keep the 13 pt sentence, after a 12 mm 0.75 pt navy rule. Or use Plex Serif italic 11 pt "What this means for you", sentence case |
| 9 | Polish | p7 | Repeats the p5 bar | Drop the coloured bar on p7. Keep the stage ruler (Work done to Paid) with only the unbilled span filled |
| 10 | Polish | p4, p5, p10 | Gradient on single-series bars | Flat #A9C4EC (or the jelly’s mid stop) |
| 11 | Polish | p8 | "More than doubled" leader ends between bars; FY25 bands carry no names | Point the leader at the 1-2 year band on both bars. Name the bands once on the March 2025 column too |
| 12 | Polish | p9 | Hyphen as minus ("-₹1,376") | Use U+2212 minus (not a dash, so the dash ban holds) |
| 13 | Polish | footer | "Copy 1 of 1" vs cover "Copy No. 1 of 1" | Match the cover: "Copy No. 1 of 1" |
| 14 | Polish | p3 | "Tata Trust cancer hospital, Mumbai" wraps mid-name; mono "BUILT" / "CITIES" labels | One project per line at 11 pt, or widen to cols 8-12. Labels in Plex Sans 9 pt sentence case |

No blockers: figures, sources, fonts and the page box all hold.

## 5. Top 5 changes, by impact
1. **p1:** turn the tide line into Capacite’s own FY22-FY26 order-book curve, with year marks, and delete the text on the path (section 1).
2. **p11, then p7, p10, p14:** retire every dashed box. Empty cells become underlines to fill in, which echoes the P.S. lines on p2.
3. **All inside pages:** visual row from 1fr to auto, and drop the mono "What this means for you" label. This one move breaks the template rhythm on 14 pages.
4. **p9, p10, p12:** 2-line headlines (finding 3). Move p9’s side table below the waterfall.
5. **p13 and p16:** replace the three cards with one ruled line diagram, and make the back match the cover’s curve or remove it.

## Upgrade ideas (optional)
- One real photograph of a Capacite building on p3, from the Annual Report with rights cleared and credited. It is the only page where his work is described and never shown. Check permission first; never an AI image.
- A tipped-in handwritten Post-it on p5 beside ₹2,490 Cr, signed by Rajat (brochure-ai-tells Do #5).
- A thin navy belly-band around the closed file, printed "Mr. Rohit Katyal".