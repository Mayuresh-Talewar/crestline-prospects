# J. Kumar Infraprojects: review of slots-unified.md (JK-6)

Run 8 Oct 2026. Protocol: qa-reviewer "Financial booklet verification protocol", PLAYBOOK.md (incl. the 2026-10-08 content-only order), README rulings JK-3 and the JK-4 correction (binding).

## Verdict
GO AFTER FIXES. No figure is NO-GO: every printed number traces (0 untraced) and every derived figure recomputes by script (0 mismatches). Two must-fixes (one wrong claim about the 13 days, one logo placement) and six booklet-facing should-fixes, all applied in Phase B (log at the foot).

## Method
- Check script `jk6.py` (JK-6 scratch), run with `python -I jk6.py pack slots-unified.md`. Region "## Reader table" to the line before "## Checks", asserted at least 20,000 characters and 200 lines (30,511 / 400). Every scan was run again with a planted hit; every plant was caught.
- Page images rendered with PyMuPDF from src/d and opened: AR26 PDF p9, p29, p30, p89, p97, p100; T127 PDF p4 and p18; R127 PDF p5; IP127 PDF p11. Half-page location of each cite (printed left/right page) checked by script on PDF p9, p13, p30, p67, p96, p97, p100, p109.

## 1. Figures, on the page and beside the right label
| Figure (pack) | Page image | Verdict |
|---|---|---|
| 5,693.89 revenue; 1,485.29 / 1,488.56 receivables; 329.65 / 503.48 inventories; 849.54 payables (9,872.02 + 75,082.22 lakh) | AR26 printed 172 and 173, "Standalone Balance Sheet" / "Standalone Statement of Profit and Loss" | CORRECT |
| Ageing six bands, both years; 141.15, 12.65; "all undisputed, none credit impaired" | printed 188, "Notes to Standalone", 8.1 | CORRECT |
| 577.97 contract assets | printed 189, note 12, Unbilled Revenue 57,797.08 lakh | CORRECT |
| 8.1% (overdraft, "8.1% to 11.1%"), 12.35% (cash credit, "9.00% p.a. to 12.35 % p.a.") | printed 194 | CORRECT |
| 587.44 / 666.26 | printed 195, Debt Reconciliation, Total Debt 58,744.35 / 66,625.74 lakh | CORRECT |
| 112 / 99; 96 / 95; 70 / 58; 54 / 54 | printed 53, Key Ratios, beside consolidated Financial Review on 52 | CORRECT, caveat [MDA] in place |
| 18,554 (3.26x) | printed 213, 1,855,400 lakh | CORRECT |
| 1,507.42 / 1,478.66 | R127 p5, Standalone Unaudited, 30-Jun-26 / 30-Jun-25, dated 6 Aug 2026 | CORRECT |
| 22,246 | IP127 slide 10 (PDF p11), "Order Book as at June 30, 2026" | CORRECT |
| 386 / 389 / 415 / 464 | transcripts printed p14, p13, p12, p4; speaker on each: Vasant Savla | CORRECT |
| Derived: 15.5997, 15.60, 156.00, 467.99, 95.2, 95.4, 85.2, 65.2, 86.2, 9.05, 12.64 / 19.27, 37.91 / 57.80, 11.43 / 17.43, 26.6%, 79.7%, 24.0%, 2,063.26, 132.3, 37.1, 17.2%, 27.5%, 11.2x, 128.50, 3.26x, 132 / 37 / 95 dots | recomputed in `jk6.py` with asserts | CORRECT |
| "The 13 days ... came from inventory, 70 to 58" (p5 lead and takeaway, p13 row ii and closing) | 70 to 58 is 12 days; debtor days 96 to 95 is the 13th | **WRONG** (M1) |

## 2. Rules
- Rule 13 / A14: p4 dot grid, p5 card B, p9 card A all carry calc-only marks on the same scale; p9 card B retention mark has no numbers (A12); p5 card A is marked history only. PASS.
- A12: p8 stages carry name and tag only. PASS. A13: 0 signed numbers. PASS.
- Interest: every interest figure sits in its "low Cr to high Cr" pair, 8.1% never without 12.35%, the [INT] key carries the 587.44 cap and the repayment condition and is cited on every page that prints interest (letter, p5, p9, p10, p11, p12). 0 single-rate hits; 0 "net cash". PASS. Inline condition missing on the p5 and p9 chart labels (S1).
- Rows never added: p12 says the 141.15 row "sits inside both rows above" (9.05 days is inside 10 and 30); bars on their own lines; letter "two different steps, not a sum". PASS.
- Ownership: measure, prepare, review, submit, invoice are J. Kumar's; acknowledge, certify, pay, release retention the client's; joint measurement both. PASS.
- Screens true today (app CLAUDE.md, lib/navigation.ts, read only): Ask Crestline, Working Capital simulator, O2C, Client, P2P, Vendors, Alerts & Tickets, auditor re-measure, question kinds, retention lever label (lib/insights/levers.ts) all exist. "Vendor advisor" and "Client lens" are the master template's FIX card names for the vendor-timing and client screens. PASS.
- Farvision appears once, in "Farvision will feed, read-only, built during the pilot". PASS.
- KEPT OUT: 0 hits on the README JK-3 list and sensitive-garvis.md items. The excluded director is named nowhere in the pack. PASS.
- Company names (19): 0. Dashes: 0. Placeholders: 0. PASS.

## 3. Editions
- Titles on the AR26 page image (printed 172 and 173, and the message on 12): "Dr. Nalin J. Gupta, Managing Director"; "Vasant Savla, Chief Financial Officer". Pack matches. PASS.
- "you said" appears twice: Edition 1 over Vasant Savla's own retention quote, Edition 2 over Dr. Nalin J. Gupta's own range quote. Body pages credit by name and title. PASS (script).
- 103 days in June: T127 printed p3, "Working capital days for Q1 FY27 stood at 103 days as compared to 99 days for FY26"; printed p17, Nalin Gupta, "the working capital cycle as of right now is 103". The pack cites p17 only for a "June quarter" claim (S3).

## 4. Logo
assets/jkumar_logo_white.png, sha256 21299de0...3f9b, 600 x 750 RGBA. Rendered on navy and on white: the "J. Kumar" wordmark is white and disappears on white. The pack says "on a white strip leave it out", which drops the logo from the cover the master puts it on (M2).

## Must-fix
- **M1, p5 lead, p5 card A takeaway, p13 row ii, p13 closing. WRONG.** "The 13 days came from inventory, 70 to 58": inventory moved 12 days, debtors 1. A CFO reading the four-row table beside it sees the gap. Fix keeps the ruling (inventory, never advances) without false arithmetic: "came almost entirely from inventory: inventory days 70 to 58, debtor days 96 to 95, creditor days unchanged at 54", and "took 12 of the 13 days out of stock" is avoided by "took the days out of stock". Garvis to confirm the JK-4 wording "inventory only" is read this way.
- **M2, p1 logo line. WRONG placement.** Replace "on a white strip leave it out" with: place it on a small navy (#0D172F) rounded chip in the white strip's "PREPARED EXCLUSIVELY FOR" column, never directly on white; never redraw or recolour it.

## Should-fix (all booklet-facing, all applied)
- **S1** p5 card B and p9 card A interest labels: add "only if the cash repays the facilities" inline (the key carries it; a chart label read alone does not).
- **S2** Letter, both editions: "the June quarter at 103 sits inside the range too" implies 99 sits inside 100 to 110. Now "and the June quarter, at 103, sits inside the range". p6 lead "stayed inside" to "is inside".
- **S3** p6 footnote: add T127 p3 for the June-quarter 103 (no speaker credit added).
- **S4** Letter, both editions: "Every figure here is from J. Kumar's own filings" is untrue of the scenario figures. Now "Every figure here starts from J. Kumar's own filings."
- **S5** [MDA] key: "so it is never set beside the standalone figures" is broken by p5, p7 and p13, which print both on one page. Now "so it is never combined or compared with the standalone figures."
- **S6** p5 footnote: FY25 receivable days use FY25 revenue; "(FY26 revenue / 365)" now "(that year's revenue / 365)". Same rounding either way (95.4).
- **S7** p8: "the upper-half cash-flow waterfall of the master is not used" points at a design the content-only prompt no longer carries. Now "There is no cash-flow waterfall on this page."

## Not booklet-facing (reported, not changed)
- calc/notes.md caveat 2 still quotes the consolidated "net cash of Rs 264 crore" (also flagged by JK-4). Never lift copy from it.
- MASTER-PROMPT-TEMPLATE section 1 says the layout is "built on the master design described in section 2"; handled at assembly (section 2 dropped, sentence pointed at the client's canvas).

## Applied log (Phase B, slots-unified.md)
Each replacement string was scanned before it went in (names, KEPT OUT terms, dashes, signed numbers, untraced numbers; a planted hit was caught). Backup in JK-6 scratch; `diff` shows 17 changed printed lines and nothing else.

| Fix | Where | Change |
|---|---|---|
| M1 | p5 lead | "...from inventory." to "...almost entirely from inventory: inventory days 70 to 58, debtor days 96 to 95, creditor days unchanged at 54." |
| M1 | p5 card A takeaway | "the 13 days came from inventory, 70 to 58" to "the days came almost entirely from inventory, 70 to 58. Debtor days moved from 96 to 95." |
| M1 | p13 row ii | "where the 13 days came from" to "where almost all of the 13 days came from" |
| M1 | p13 closing | "took 13 days out of stock" to "took the days out of stock" |
| M2 | p1 logo line | navy (#0D172F) rounded chip in the white strip's "PREPARED EXCLUSIVELY FOR" column; never directly on white; file named without its folder |
| S1 | p5 card B (2 lines), p9 card A | interest labels end "only if the cash repays the facilities" |
| S2 | letter, both editions; p6 lead | "the June quarter, at 103, sits inside the range"; "Working capital is inside the range" |
| S3 | p6 footnote | "103 days for the June quarter: same results call, transcript p. 3." |
| S4 | letter, both editions | "Every figure here starts from J. Kumar's own filings." |
| S5 | [MDA] key | "never combined or compared with the standalone figures" |
| S6 | p5 footnote | "(that year's revenue / 365)" |
| S7 | p8 instruction | "There is no cash-flow waterfall on this page." |

Re-run after the last edit: `python -I jk6.py pack slots-unified.md`: recompute 0 mismatches; untraced 0; names 0; KEPT OUT 0; dashes 0; signed 0; placeholders 0; single-rate interest and "net cash" 0; Farvision outside the approved phrase 0; "you said" only ed1 / ed2 over each reader's own quote; every plant caught. Region 30,944 characters, 400 lines.
