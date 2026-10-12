# Rulka Electricals: savings calc notes (RE-3)

Company: Rulka Electricals Limited, standalone. Inputs from the Annual Report 2025-26, filed 07 Sep 2026 (AR26), FY26 against the FY25 column printed in that same report. Every input figure is in `../data.md` and `../src/re-calc-output.txt` section 4.

## Files
* `rulka-savings.ts`: the script, copied byte for byte from the app repo, where it ran as `scripts/_tmp-rulka-savings.ts` with `npx tsx`. That temp file was deleted after the run; `git status` then showed only the 2 entries that were there before.
* `rulka-savings-output.txt`: its FULL output from the clean run (exit code 0, ALL ASSERTS PASSED).

## Chart to calc row map (done before the script was written)
* Problem 1 chart, receivable days (closing): today 119.74 (FY25) and 118.69 (FY26). With Crestline marks: rows "Receivable days 118.69 to 108.69" and "Receivable days 118.69 to 88.69"; cash rows "Cash released once: Rs 3.02 Cr" and "Rs 9.06 Cr".
* Problem 2 chart, receivables over 6 months past due: today Rs 0.94 Cr (FY25) and Rs 9.59 Cr (FY26), drawn against the whole book of Rs 35.84 Cr. With Crestline marks sit on the WHOLE BOOK only: rows "Receivables after: Rs 32.82 Cr" and "Rs 26.78 Cr". The calc does not model the overdue bucket, so no mark is drawn on it.
* Problem 3 chart, where the cycle moved (closing days, FY25 to FY26): DSO minus 1.05, DIO minus 27.30, DPO plus 38.45, cycle minus 66.80 (from `re-calc-output.txt` section 8). With Crestline mark on the DSO leg only: the "moved" rows, 10.00 and 30.00 days off. No mark on DPO: row "Asked DPO +30: held at 110.46, cash from payables 0.00". No mark on DIO: no stock scenario was run.
* The rows "Cash cycle 87.05 to 77.05" and "87.05 to 57.05" are a check only and are NOT drawn: that cycle keeps payables at the FY26 level, and printing it would lean on the supplier side.

## Settings and why
* Value of a day = 110.20 / 365 = Rs 0.3019 Cr (30.19 lakh), the Garvis RE-3 basis.
* Receivables and payables entered at the exact lakh balances (3,583.52 and 2,556.41). Entered first at the rounded Rs 35.84 Cr, the basis match failed (the rounding moved the rebuilt days past the 0.01 day tolerance) and the cross-check failed with it. That was a real catch, fixed at the input, not by widening the tolerance.
* No terms passed. The company publishes no client payment term and no vendor term. So the receivable floor read from `leversFor` is 0 and the ceiling 166.17; both steps sit inside. The payable ceiling equals today's 110.46, so payables cannot move up at all.
* Interest rate 0, so carry is 0 in `simulate` and in `priceLevers`. Garvis ruling: cash only, no interest printed.
* Stock is not passed a rate, so `leversFor` does not draw that leg.
* The two steps are alternatives. Never add Rs 3.02 Cr and Rs 9.06 Cr.

## Asserts, each broken once (BREAK knob in the script)
* BREAK=1 moves receivable days the wrong way: "no negative release" FAILED (minus 3.02 and minus 9.06), cross-check failed with it. Exit 1.
* BREAK=2 passes a 9.5% rate to `simulate`: "interest = 0" FAILED (carry 0.29 and 0.86). Exit 1.
* BREAK=3 passes a 9.5% rate to `priceLevers`: "interest = 0" FAILED (lever carry 0.29 and 0.86). Exit 1.
* BREAK=4 gives vendors a term above today's days: "payables never release cash" FAILED (2.31 and 6.94). Exit 1.
* BREAK=5 uses 360 days for the rate: "basis match" FAILED (117.07 against 118.69) and the cross-check with it. Exit 1.
* Clean run: every assert PASS, exit 0. That output is the file in this folder.
* The independent cross-check recomputes the release by hand (step x 110.20 / 365), rebuilds receivable days from the reduced balance, and checks the lever ranking carries the same cash.

## What the calc cannot say
* Which bills or which client the days come out of. That needs their bill trail.
* Any interest saving. None is printed.
* Any saving from paying suppliers later. There is none by rule.
