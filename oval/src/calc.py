# OV-1 computations. Inputs typed from page images cited in data.md (Rs lakh). Run: python -I calc.py
rev = {'FY23c': 5902.14, 'FY24': 7796.54, 'FY25': 10228.90, 'FY26': 15314.19}  # FY23 = RHP restated consolidated
pat = {'FY24c': 440.11, 'FY24s': 437.14, 'FY25s': 934.02, 'FY25c': 933.25, 'FY26': 1481.39}
tr = {'FY23c': 1824.83, 'FY24': 1781.91, 'FY25': 4306.55, 'FY26': 3507.15}
inv = {'FY23c': 2302.98, 'FY24': 3988.07, 'FY25': 4368.90, 'FY26': 5906.74}
tp = {'FY24c': 2762.53, 'FY25': 3405.96, 'FY26': 1293.99}
ltp26 = 684.66  # note 7.10 long-term trade payables, AR26 p162
def pct(a, b): return round((a / b - 1) * 100, 1)
out = []
p = out.append
p(f"rev growth FY25/FY24 {pct(rev['FY25'], rev['FY24'])}%  FY26/FY25 {pct(rev['FY26'], rev['FY25'])}%  FY26/FY24 x{rev['FY26']/rev['FY24']:.2f}")
p(f"PAT FY26/FY25 {pct(pat['FY26'], pat['FY25s'])}%  FY26/FY24 consolidated-restated x{pat['FY26']/pat['FY24c']:.2f}  vs standalone x{pat['FY26']/pat['FY24s']:.2f}")
p(f"PAT margin FY26 {pat['FY26']/rev['FY26']*100:.2f}%  FY25 {pat['FY25s']/rev['FY25']*100:.2f}%")
# EBITDA as defined by company
pbt, fin, dep, oth, ext = 2104.42, 643.42, 115.74, 371.48, 39.04
p(f"EBITDA incl other income excl extraordinary (press release basis) {pbt+fin+dep-ext:.2f} lakh -> {(pbt+fin+dep-ext)/100:.2f} Cr; AR basis excl other income {pbt+fin+dep-oth:.2f}")
# receivable / payable / inventory days (avg balance, 365)
for y, prev in (('FY26', 'FY25'), ('FY25', 'FY24')):
    ar = (tr[y] + tr[prev]) / 2
    p(f"{y} avg receivable days on revenue: {ar/rev[y]*365:.1f}; closing receivable days {tr[y]/rev[y]*365:.1f}")
# AR26 turnover-implied
p(f"AR26 note37 turnover 4.54 -> {365/4.54:.1f} d ; 3.95 -> {365/3.95:.1f} d ; payables 3.49 -> {365/3.49:.1f} d ; 2.46 -> {365/2.46:.1f} d ; inventory 2.98 -> {365/2.98:.1f}; 2.45 -> {365/2.45:.1f}")
# payables incl long-term trade payables
p(f"trade payables FY26 current {tp['FY26']} + LT {ltp26} = {tp['FY26']+ltp26:.2f}; FY25 {tp['FY25']}; change {tp['FY26']+ltp26-tp['FY25']:.2f} (AR26 says -2111.97 on current only: {tp['FY26']-tp['FY25']:.2f})")
# receivable ageing
a26 = dict(unbilled=1686.27, lt6m=1425.15, m6_12=74.70, y1_2=243.55, y2_3=48.33, gt3=29.15)
a25 = dict(unbilled=0, lt6m=3813.06, m6_12=48.49, y1_2=243.65, y2_3=10.83, gt3=190.53)
for n, a, tot in (('FY26', a26, 3507.15), ('FY25', a25, 4306.55)):
    s = sum(a.values()); gt1 = a['y1_2'] + a['y2_3'] + a['gt3']; gt6 = gt1 + a['m6_12']
    p(f"{n} ageing sum {s:.2f} vs {tot}; unbilled {a['unbilled']/tot*100:.1f}%; >6m {gt6:.2f} ({gt6/tot*100:.1f}%); >1y {gt1:.2f} ({gt1/tot*100:.1f}%)")
pay26 = [1197.83, 92.73, 2.82, 0.61]; pay25 = [3005.46, 289.94, 68.36, 42.20]
p(f"payables ageing sums FY26 {sum(pay26):.2f} (1293.99), FY25 {sum(pay25):.2f} (3405.96); >1y FY26 {sum(pay26[1:]):.2f}")
# revenue streams
s26 = {'O&G works': 7789.47, 'Spec infra': 4119.44, 'Other services': 318.32, 'Trading': 3086.96}
s25 = {'O&G works': 6333.98, 'Spec infra': 3483.15, 'Other services': 411.77}
for n, s, r in (('FY26', s26, 15314.19), ('FY25', s25, 10228.90)):
    p(f"{n} streams sum {sum(s.values()):.2f} vs {r}; shares " + ", ".join(f"{k} {v/r*100:.1f}%" for k, v in s.items()))
rh = {'FY25': (4720.26, 388.12, 5120.61, 10228.99), 'FY24': (4804.47, 249.86, 2742.21, 7796.54), 'FY23': (4223.40, 161.25, 1517.49, 5902.14)}
for k, v in rh.items():
    p(f"RHP verticals {k}: sum {sum(v[:3]):.2f} vs {v[3]}; O&G {v[0]/v[3]*100:.2f}% O&M {v[1]/v[3]*100:.2f}% SpecInfra {v[2]/v[3]*100:.2f}%")
p(f"RHP 'skills development' FY25 144.75 = {144.75/10228.99*100:.2f}% of revenue")
# borrowings standalone
lt26, st26, lt25, st25 = 1328.01, 4194.60, 525.65, 3670.11
p(f"borrowings standalone FY26 {lt26+st26:.2f} FY25 {lt25+st25:.2f}; trade payables+borrowings-adjusted; interest cost/avg borrowings (AR26 avg 4859.19): {643.42/4859.19*100:.1f}% (incl non-interest charges, NOT a disclosed rate)")
p(f"net worth FY26 11122.23; debt/equity (total borrowings/NW) {(lt26+st26)/11122.23:.2f}; AR26 reports 0.12 on LT only: {lt26/11122.23:.2f}")
# cash flow check
cfo, cfi, cff, fx = -2995.93, -1191.46, 4997.36, -3.65
p(f"CF sum FY26 {cfo+cfi+cff+fx:.2f} (806.32) ; opCF before WC 2687.04 ; WC outflow: {2687.04-2995.93:.2f}")
p(f"FY26 WC lines: rec +799.40 loans/adv -2404.84 stock -1537.84 prov +241.98 CL -40.77 TP -2111.97 tax -628.93 = {799.40-2404.84-1537.84+241.98-40.77-2111.97-628.93:.2f} (stmt -5682.97)")
p(f"advances to vendors & others FY26 2909.63 vs FY25 1109.15 = x{2909.63/1109.15:.2f}; inventories+advances+receivables FY26 {5906.74+2909.63+3507.15:.2f}")
# guarantees vs limits
p(f"BG limit 75.00 Cr vs guarantees outstanding 5984.70 lakh = {5984.70/100:.2f} Cr -> {5984.70/7500*100:.1f}% of BG limit")
# Note 40 quarterly returns
bk = [57.51, 53.15, 51.75, 52.10, 61.16, 68.35, 67.96, 65.72, 61.62, 63.33, 62.37, 71.18]
rp = [58.67, 57.09, 55.47, 58.44, 65.12, 69.26, 69.87, 69.94, 70.08, 72.14, 62.79, 71.62]
d = [round(a - b, 2) for a, b in zip(bk, rp)]
p(f"Note40 months {len(bk)}; max gap {min(d)} Cr (Dec-25 is index 8: {d[8]}); months with returns > books: {sum(1 for x in d if x<0)}/{len(d)}; avg gap {sum(d)/len(d):.2f}")
# order book
p(f"order book/rev: 796/153.14 = {796/153.14:.2f}x ; 780/153.14 = {780/153.14:.2f}x ; RHP 452.9961 Cr vs 780: +{(780/452.9961-1)*100:.0f}% in 51 days (9 Apr -> 30 May 2025)")
# H1 revisions
p(f"H1 FY26 revenue as published 18-Oct-2025 6154.24 vs May-2026 comparative 6096.24 = {6154.24-6096.24:.2f} lakh; PAT 677.03 vs 635.92 = {677.03-635.92:.2f}")
p(f"H2 vs H1 FY26 revenue (May-2026 cols) {pct(9217.95, 6096.24)}% ; PR labels 'H2 FY26 vs H1 FY25 YoY 51%' ; PAT H2/H1 {pct(845.48, 635.92)}%")
p(f"IPO: 5499200 x 85 = {5499200*85/1e7:.4f} Cr ; WC object 3702.60 lakh = 37.03 Cr; monitoring agency utilised WC 29.81 of 37.03 (Mar-2026)")
p(f"customer concentration FY25 top1 {2264.30/10228.99*100:.2f}% top5 {6030.44/10228.99*100:.2f}% top10 {8106.51/10228.99*100:.2f}%; gov entities 9223.36/10228.99 = {9223.36/10228.99*100:.2f}%")
p(f"RHP restated consolidated WC gap FY25 8121.36 vs FY24 4125.90 = x{8121.36/4125.90:.2f}; FY23 3267.21")
print("\n".join(out))
