"""Recompute, in INR million with Decimal, every figure in the pack that is not a straight conversion of a printed one.
Run: python -I numtrace.py   (writes numtrace-output.txt beside itself)"""
from decimal import Decimal as D, ROUND_HALF_UP
import os

def cr(mn, q="0.01"):
    return (D(mn) / 10).quantize(D(q), rounding=ROUND_HALF_UP)

out = []
p = out.append
# cash flow statement, printed page 262
opb = {"FY24": "2306.25", "FY25": "3810.87", "FY26": "4817.31"}
cfo = {"FY24": "770.67", "FY25": "1049.40", "FY26": "2447.40"}
for y in opb:
    gap = D(opb[y]) - D(cfo[y])
    p(f"{y}: operating profit before WC changes {cr(opb[y])} Cr; cash generated {cr(cfo[y])} Cr; taken up by WC {cr(gap)} Cr")
# WC lines FY26 sum check
wc = D("-465.80") + D("-2051.28") + D("-3138.08") + D("3285.25")
p(f"FY26 WC lines sum {wc} ; {opb['FY26']} + ({wc}) = {D(opb['FY26']) + wc} (printed 2447.40)")
# balance sheet, printed page 260
p(f"Trade receivables FY24 {cr('1566.15')}, FY25 {cr('2501.66')}, FY26 {cr('4558.21')} Cr")
p(f"Construction expenses FY26 {cr('29467.21', '0.01')} Cr = {D('29467.21')/10:.3f}; per day {D('29467.21')/10/365:.4f}")
p(f"Material consumed FY26 {cr('13848.27')} Cr; per day {D('13848.27')/10/365:.4f}")
p(f"Revenue per day 3600.25/365 = {D('3600.25')/365:.4f}")
p(f"DSO = {D('4558.21')/D('36002.52')*365:.2f}; CAD = {D('5348.28')/D('36002.52')*365:.2f}; DIO = {D('2479.26')/D('13848.27')*365:.2f}; DPO = {D('2605.39')/D('29467.21')*365:.2f}")
p(f"Receivable rise FY26 {cr(D('4558.21') - D('2501.66'))} Cr; revenue growth {((D('36002.52')/D('29182.94'))-1)*100:.1f}%")
p(f"Receivables x{D('4558.21')/D('1566.15'):.2f}; revenue x{D('36002.52')/D('24389.12'):.2f}")
p(f"Cash and bank FY26 {cr('4606.19')}, FY25 {cr('3118.67')} (printed total A+B; parts 1028.45+2090.23=3118.68), FY24 {cr('1310.07')}")
p(f"Payables FY26: MSME {cr('479.20')}, LC {cr('986.03')}, others {cr('1140.16')}; sum {cr(D('479.20')+D('986.03')+D('1140.16'))}")
p(f"Unbilled + receivables {cr(D('5348.28')+D('4558.21'))} Cr; CAD + DSO days 54.2 + 46.2 = {D('54.2')+D('46.2')}")
p(f"Stage output: sum of 8 pre-invoice stage values {sum(D(x) for x in ['2.5','3.6','1.9','4.6','2.5','4.9','31.1','3.2'])} ; plus 46.2 = {sum(D(x) for x in ['2.5','3.6','1.9','4.6','2.5','4.9','31.1','3.2'])+D('46.2')}")
cert=D("3600.25")/365; mat=D("13848.27")/10/365
p(f"Combined certification+materials: 10d {10*(cert+mat):.2f} Cr, 30d {30*(cert+mat):.2f} Cr; certification alone 10d {10*cert:.2f}, 30d {30*cert:.2f}; cycle 133.4-20 = {D('133.4')-20}, 133.4-60 = {D('133.4')-60}")
p(f"Order book multiple {D('79531.81')/D('36002.52'):.2f}")
text = "\n".join(out)
print(text)
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "numtrace-output.txt"), "w", encoding="utf-8").write(text)
