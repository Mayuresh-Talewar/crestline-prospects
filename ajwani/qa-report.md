# Ajwani Infrastructure: self-QA report (2026-10-09)

Method: raw text of the MGT-7 (p.9 values 7555541792 and 2406998382, filing date 12/11/2025) and of the CRISIL 19 Jun 2024 rationale was re-read by script, every printed figure was matched, the arithmetic was recomputed independently, the assembled master prompt was scanned, and every scan was first proven on a planted hit.

Findings:
- Both reader titles verified on the company site (About > Board of Directors): "Mr. Navin Gobind Ajwani, is the Chairman and Managing Director"; "Mr. Sunil Gobind Ajwani, is the Joint Managing Director". The booklet prints them as Chairman & Managing Director and Joint Managing Director. MGT-7 calls both Managing Director; the site titles are used for the address block, as data.md already ruled.
- Basis match: FY23 CRISIL operating income, FY24 CRISIL "over Rs 500 crore", FY25 MGT-7 turnover are shown as separate labelled figures with a [BASIS] caveat; no growth rate, no pairing of 755.55 with 754 (order book sits on p3 only, dated 31 Mar 2024).
- Per day 2.07 is exact (755.55 / 365). 10 days 20.7, 30 days 62.1 match calc/ajwani-savings.out.txt. Break-tests (calc/ajwani-savings.breaks.txt): each of 4 asserts fails visibly when broken, passes clean.
- No "today" days bar; GCA 195 to 317 prints as a history tile (p5), never in a scenario. p8 stage tiles carry no digit (script-checked). p6 bars start at zero, ratio 3.0 for 62.1 / 20.7.
- Ownership: measure with the client, check, prepare, review, submit, invoice = Ajwani Infrastructure; acknowledge, certify, pay, release retention = client.
- Fixes made while building: the template's own text carried "slot", "headline table", "Template fallback" and a "today" rule; all reworded in the assembled prompt. p14 claims/arbitration line dropped. Page 8 footer no longer says totals are published.
- Limit: the MGT-7 p.9 values were read from the text layer here; the page image was checked in step 1 (data.md).

## Script output (full)
```
== SCAN
placeholders: planted fires=True; real hits=0
comments: planted fires=True; real hits=0
company names: planted fires=True; real hits=0
internal refs: planted fires=True; real hits=0
dashes: planted fires=True; real hits=0
kept out: planted fires=True; real hits=0
interest figure: planted fires=True; real hits=0
design to reproduce: planted fires=True; real hits=0
signed numbers: planted fires=True; real hits=0
== TRACE
SOURCE RE-TRACE
OK   turnover 755.55 Cr | MGT-7 p.9 raw 7555541792
OK   net worth 240.70 Cr | MGT-7 p.9 raw 2406998382
OK   filed 12 Nov 2025 | MGT-7 eForm filing date 12/11/2025
OK   registered office | MGT-7 p.1
OK   FY23 operating income 383.85 | CRISIL 19 Jun 2024 KFI
OK   over Rs 500 crore FY24 | CRISIL
OK   net worth 205 at 31 Mar 2024 | CRISIL
OK   order book 754 at 31 Mar 2024 | CRISIL
OK   GCA 195-317 five fiscals | CRISIL
OK   paid within 30 days | CRISIL
OK   BBB+/Stable and A2 | CRISIL
OK   rationale dated 19 Jun 2024 | CRISIL
OK   timely execution | CRISIL

RECOMPUTE
OK   per day 2.07 printed 2.07 | in calc output: True
OK   10 days 20.7 printed 20.7 | in calc output: True
OK   30 days 62.099999999999994 printed 62.1 | in calc output: True
bar ratio 62.1/20.7 = 3.0 (bars within 2% of values when drawn 3:1)

NUMBER TRACE (every numeric token in Content)
distinct tokens: 70 | unmatched: []
OK   all numeric tokens trace to a source, the calc, or a page/ordinal count
== EXTRA
pack byte-for-byte in prompt: True
pages in pack: True
p8 stage tiles with digits: []
section heads: ['## 1. What you are building', '## 2. Reader editions', '## 3. Rules you must follow', '## 4. Before you finish, check every page of every edition', '## Content', '## Keys']
tagline x: 2 old trapped: 1
letter date: True | both titles: True True
pt sizes in Content: []
```
