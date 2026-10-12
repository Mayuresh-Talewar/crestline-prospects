# Crestline chart spec for print (SALES-9)

Source of truth: code, light mode, default rail palette (`DEFAULT_PALETTE_ID = "midnight"`, `lib/rail-palette.ts:41`). No screenshots taken; every hex below is read from `app/globals.css` or computed (OKLab `color-mix`, script run, matches CSS spec) from its tokens.
Note: CLAUDE.md says frame is navy #22396F; the code default is Midnight #0f1a33 (navy is an option). Use #0f1a33 unless client says otherwise.

## Two palettes exist (use both, they never mix on one chart)
A. ANALYTIC ramp (`--chart-N`): the original muted green/grey/amber/red.
B. PASTEL "jelly" family (`--pastel-*`): what the newer O2C, WC, Overview, Client, Portfolio screens actually draw. This is the look the client likes (green, purple, red, yellow). Prefer B for the brochure, use A only for lines/markers needing contrast.

## 1. Hex table (light)
| Token | Hex | Use |
|---|---|---|
| chart-1 green | #1F8A63 | primary series, cash in, on time, target rule |
| chart-2 grey | #98A2B3 | comparison / prior period |
| chart-3 amber | #C98A1F | warning, waiting on client, line series |
| chart-4 red | #C25A4D | risk, late, largest leak |
| chart-5 slate | #4C5563 | contract/opening total bar, neutral line |
| chart-grid | #EBEDF0 | gridlines (dashed 3 3) |
| chart-axis | #98A2B3 | tick text and axis ink |
| pastel sky / ink | #9CC5EE / #567FAC | blue: billed, submitted, "reached stage" |
| pastel mint / ink | #9ED9BF / #549678 | green: collected, someone else's money, good |
| pastel amber / ink | #F3CF86 / #B38540 | yellow: waiting, ageing |
| pastel rose / ink | #F1B3AB / #C46C61 | red: leak, risk, did not move on |
| pastel lavender / ink | #C3B6EE / #7D71BD | purple: ours to fix, "yours" (hatched) |
| pastel peach / ink | #F5C29D / #C38459 | orange: certification queue, overdue |
| pastel slate / ink | #C3C9D3 / #6F7783 | neutral: contract, opening |
| tone good fill / ink | #EAF6EF / #146C49 | stat chip, pill |
| tone watch (warning) | #FDF3DD / #8F5A05 | |
| tone bad (risk) | #FBE9E7 / #A8322A | |
| tone severe | #F5D2CE / #7F1A12 | |
| neutral signal | #F0F1F4 / #5F6670 | |
| signal solids | positive #0F7A55, warning #A66306, risk #B42318 (muted fills #E8F4EE, #FDF3E3, #FDECEB) | text/badges |
| canvas / card | #FAFAFB / #FFFFFF | page / panel |
| border / strong | #E6E8EC / #D6D9DF | hairlines |
| ink: foreground / muted | #0B0D10 / #5F6670 | text; muted #F2F3F5 as fill |
| frame / rail | #0F1A33 (ink #F2F5FB) | sidebar and gutter |
| action (buttons) | #0F7A55, ink #FFFFFF | default |
| 8-step categorical bars (`--perf-cat-1..8`) | #7AA3CE, #7AB89C, #A8BFEE, #D6AD66, #98C3CF, #989FAA, #A095D7, #DDA47C | stacked stage bars, in this order |
| stage ramp (`--perf-stage-1..8`) | sky, mint, amber, lavender, rose, peach, slate, #ADBFEE | stacked waits |
| performance pairs | actual line #567FAC fill sky 45% (#D2E5F8); forecast line #549678 fill mint 38% (#DBF1E6); compare #7D71BD; good fill mint 70%; bad fill rose 70%; before-Crestline slate 40% | `--perf-*` |

Jelly bar fill (`components/client/palette.ts`): `linear-gradient(100deg, pastel A, pastel B)`, a pastel into its neighbour, never flat. Pairs: green mint to sky; amber amber to peach; red peach to rose; purple sky to lavender; blue sky to (sky 60% + lavender = #ADBFEE); slate slate to sky. Edge hairline = hue mixed 62% with black. Text on a bar: #1F2937 10.5px/500.
Capital-position tints on white (hue 26% to hue 12%, top to bottom): sky #E5F0FB to #F3F8FD; mint #E6F5EE to #F4FBF7; amber #FCF3E1 to #FEF9F1; rose #FCEBE9 to #FEF6F5; lavender #EFECFB to #F8F6FD (hatch stripe #EAE6FA).

## 2. Eight chart types
Shared chrome (`components/charts/chart-primitives.tsx`): axis text 11.5px (10-10.5px on dense/x labels) #98A2B3, no tick lines, no axis lines; grid #EBEDF0 dashed "3 3", horizontal only; legend = 8px square swatches radius 2px, 12px (10.5-11px on o2c) #5F6670, 16px gap, top or below plot; tooltip = white card, 1px #E6E8EC, radius 8px; data labels 10-10.5px, 600 weight in #0B0D10 for the figure, 9.5px #5F6670 for sub-label. No gradients except jelly bars, no 3D.
1. **Contract-to-cash waterfall** `components/o2c/charts.tsx` (L329 bars, WATERFALL_FILL L148) and `components/overview/contract-waterfall.tsx`. Floating bars via transparent pedestal, top radius 6-8px, maxBarSize 56-64, barCategoryGap 22%. Overview version: value bars sky (#9CC5EE), first/contract slate (#C3C9D3), collected mint (#9ED9BF), gap bars rose (#F1B3AB) with the largest leak in #C25A4D; value labels on top 10px/500 at 70% ink. Gates #1F8A63, unbuilt #4C5563, lost #C25A4D, waiting #C98A1F, contractual sky ink, unmatured lavender ink, overdue peach ink. 1px stroke in the reason colour.
2. **Capital position (sources and uses)** `components/finance/capital-position.tsx`. Two stacked columns of equal height (320px), blocks tinted (see tints), hairline between blocks in card white, 3px full-strength hue rail on the outer edge, radius 8px clip. Label 11.5px/600 + detail 11px muted ("Rs Cr, %, days"). Own-funds block hatched: `repeating-linear-gradient(135deg, tint 0 7px, hatch 7px 8px)`. Legend 11px below: amber waiting on the client, rose not yet billable, sky not yet executed, mint someone else's money, lavender yours.
3. **Cash cycle diagram** `components/finance/cash-cycle-diagram.tsx`. To-scale timeline, markers as two-line 10.5px/500 labels above, bars below are jelly: `to-bottom` pastel 45% to 15% alpha, label in the hue's ink, 11.5px/600, figure right-aligned tabular. Amber waits, rose risk, mint vendor credit, peach certification, sky 60% to 25% for the CCC conclusion bar (strongest).
4. **Cash flow composed (bars + CCC line)** `components/charts/composed-charts.tsx` L112-122. Collected #1F8A63 and paid #98A2B3 bars, top radius 3px, maxBarSize 18; CCC line #C98A1F 2px dashed "4 3", active dot r4 white stroke 2.
5. **Timing diverging bar** (same file L284-330). Horizontal, zero rule #D6D9DF 1.5px (target = centre), bars radius 3, maxBarSize 24, coloured by signal (green/amber/red = chart-1/3/4), grid vertical only.
6. **Bucket / category horizontal bars** (same file L457-492, `category-bar-chart.tsx`). Right-end radius [0 4 4 0], maxBarSize 22, colour by signal; Overview-era screens use jelly gradients instead.
7. **Composition area / trend** `components/charts/composition-area...` in composed-charts L195-232 and `area-trend-chart.tsx`. Series stroke 1.5px, fill gradient of the same colour, cursor line #D6D9DF; projection (Ask charts, `components/ask/answer-chart.tsx`) is dashed "4 3", hollow dots (r2.5, 1.5 stroke, white fill), band as two faint lines, "projected" label 9.5px, boundary rule dashed foreground 45% opacity.
8. **Dumbbell (vendors, clients: agreed vs actual)** `components/client/workspace/compare-charts.tsx` L60+. Row = hairline #E6E8EC track, bar 8px high fully rounded between the two ends, hollow dot 12px (2px #5F6670 border, white fill) for what the contract allows, solid 12px dot for actual (late #C25A4D, inside #1F8A63), dashed 2px #5F6670 tick for P80. Direction of the bar is the reading.
(Also worth redrawing: O2C pipeline ladder and WC "what moved it" bars: jelly pairs, label centred 10.5px/500 #1F2937 where share over 16%.)

## 3. Card and stat-chip anatomy
- **Panel** (`components/common/panel.tsx`): white, 1px #E6E8EC, radius 1.8 x 12px = about 21.6px (rounded-2xl), shadow `0 1px 2px rgba(16,24,40,.04), 0 1px 3px rgba(16,24,40,.03)`.
- **MetricCard** (`components/common/metric-card.tsx`): padding 20 x 18px; label 13px/500 #5F6670; value 26px (32px emphasised) /600 #0B0D10, tabular, letter-spacing -0.025em, line-height 1; delta chip beside the value; comparison 12px muted at 80%; note 12.5px muted; info glyph 16px at 50% opacity.
- **Executive strip** (`components/common/metric-chip-strip.tsx`): one frame, radius 21.6px, 1px border at 70%, shadow as Panel, cells separated by hairlines (right and bottom only), cell padding 16 x 12px. Cell: 6px tone dot + label 11.5px #5F6670; value 16px (18px emphasised) /600 in the tone ink (good #146C49, watch #8F5A05, bad #A8322A, severe #7F1A12); support 11px at 85%; a 2px top rule fading to transparent at 85% in the tone accent (good mint #9ED9BF, watch amber #F3CF86, bad rose #F1B3AB, severe #A8322A 3px, neutral slate #C3C9D3).
- Eyebrow label: 11px/600, tracking 0.06em, uppercase, #5F6670.

## 4. Type and numbers
- Font: IBM Plex Sans (300-700), mono IBM Plex Mono (400-600). Figures: tabular-nums, letter-spacing -0.025em, `ss01`.
- Rupees (`lib/format.ts` formatRupees): Indian style, no millions. At or over 1 Cr: Rs + value + " Cr" with 0 dp if 100 or more, 1 dp if 10+, else 2 dp ("Rs 146 Cr", "Rs 4.25 Cr"); 1 L to 1 Cr: " L" with 1 dp if 10+, else 2 ("Rs 82.4 L"); below: grouped "Rs 85,000". Negatives "-Rs 3.2 Cr". Axis ticks: "Rs" + bare crore ("Rs 12.5", 0 dp over 100) with Cr in the axis label. Days "45.9 days" (1 dp, trailing zero trimmed), compact "46d", percent 1 dp ("28%"), rupee-days "Rs 8.4 Cr-days", dates "02 Apr 2026". The symbol in the app is the rupee sign U+20B9 (replace "Rs" above with it).

## Print notes (needs artwork vs pure style)
Pure CSS/type: everything above. Needs real artwork: none, but gradients and hatch must be rebuilt in the layout tool (the app uses OKLab mixes; hexes above are already resolved). Use pastels as FILL and inks as LINES/TEXT. In print, convert pastel fills to CMYK proof: light tints (#E5F0FB etc.) may vanish on uncoated stock, so keep the 3px full-hue rail and 1px edge hairline.
Caveat: Ask-chart series come from `chartRamp` (OKLCH L 0.60, C 0.125, hue from the rail palette) and shift with the reader's palette, so they are not a fixed palette; ignore for print.
