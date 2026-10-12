# Content-only master prompts (CLIENT ORDER 2026-10-10)

The client builds the design in Claude Design. The master prompt carries CONTENT ONLY: no design and no chart instructions.

## REMOVE
- Backgrounds and colours: navy, cream, white, gold, "line 2 in gold", gold italic, gold dot, the colour of any word.
- Fonts and type: Poppins, bold, italic, small capitals, point sizes, "large".
- Layout and placement: cards ("One white card", "Two white cards"), "upper card", rows and columns, "beside", "at right", "on the top curve", strips, bands, pills, rules between items, spacing, "set apart", page thirds.
- Chart drawing: chart type and shape (bar, column, pill, dumbbell, slider, track, dot grid, waterfall, line), dashed, hollow, hatched, solid, scale ("one scale from 0 to N"), axis ticks, bar length, bar order and direction, marker positions, legends drawn as shapes, "starts at zero". Template rules or checks that exist only to describe drawing (dashed and hollow marks, bar scale, outline drawing).
- Logo placement and size: where a logo sits, "small", "never on navy", field colour. KEEP one line: which logo files are used, as supplied, never redrawn.
- The headline table's Background field.

## KEEP, word for word
- Every printed line (lines starting with ">"), every figure, label, value, date, source and footnote.
- What each page contains, as content: titles, context lines, the labels and values of each chart, written as data. For example: "Data, ten days less: 82.19 days, ₹188.50 Cr released once". Convert "Chart: two pill bars on a scale from 0 to 200: X 185.00; Y 50.98" into "Data: X 185.00; Y 50.98". Card titles and context lines become printed ">" lines.
- The scenario and accuracy guards as CONTENT rules: "Scenario, not a forecast", "rows overlap and are never added", "No numbers on this page", "Never compute a figure that is not given here", "Do not invent step waits", which values are scenario and which are measured (a scenario value must be shown as a scenario, labelled as such).
- The reader table, editions, letter, sender, headline wording (both lines), footers and page order.
- Accuracy rules A1 to A14 (or R/B labels) where they govern content. Reword any rule that describes drawing so it governs content only.

## Check after editing (by script)
1. Every ">" line in the backup is still present, unchanged.
2. Every number in the backup's Content section is still present, except scale and axis ticks that existed only in a chart drawing instruction. List each removed number with its line and justify it.
3. 0 hits for: navy, cream, gold, Poppins, italic, dashed, hollow, hatched, "white card", "upper card", pill, dumbbell, slider, "on one scale", "scale from", axis, " pt", curve, "small capitals". Any remaining hit must be inside a printed ">" line, listed and justified.
4. The page count and page headings are unchanged.
