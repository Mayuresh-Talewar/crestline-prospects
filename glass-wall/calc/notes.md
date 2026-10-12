# Calc notes (GW-2)

* Files: glasswall-savings.ts (the script as run, copied from the app repo before the temp file was deleted), glasswall-savings-output.txt (full clean output).
* Run from inside the app repo: copy to scripts/, `npx tsx scripts/<name>.ts`, delete after. Imports the app's `@/lib/finance/cycle-simulation` and `@/lib/insights/levers`.
* Basis: RHP dated 1 Sep 2026, restated consolidated, FY26. Revenue Rs 4,569.71 Mn (p84), receivables Rs 1,089.62 Mn (p38), contract assets Rs 491.54 Mn (p369), retention Rs 153.75 Mn plus Rs 205.81 Mn (p39).
* Chart to calc row: Problem 1 chart = block today 158.12 and rows "10 days", "30 days". Problem 2 chart = block days 126.3 and the same two rows. Problem 3 chart = retention held (input, not a scenario) and the same two rows.
* Receivables plus contract assets are ONE block on the simulator's single asset leg (key "dso"): 126.29 days at Rs 1.2520 Cr a day. The app labels are ignored.
* Clamp bounds read, no terms passed: min 0, max 176.81 days. Payables leg is built only to prove it cannot release cash (days 109 as printed on p38, per day from payables over those days). Not printed anywhere.
* priceLevers is called with rate 0 and retention only, to show it prices nothing negative and no interest.
* Break tests (each run once with BREAK=<name>, each failed, then clean run passed): negative (step sign flipped), interest (rate 8), crosscheck (366 day year), payables (vendor ceiling 200), basis (FY25 contract assets).
* Rows overlap. Never add the 10 day row to the 30 day row, or retention to the block.
