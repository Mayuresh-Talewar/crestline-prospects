# AF-1 computations. Every input is a figure read from the page cited in data.md. Run: python -I calc_af1.py
mn = lambda x: x / 10  # Rs million -> Rs crore
# consolidated, Rs crore. FY22-24 from RHP restated (Rs mn /10); FY25-26 from AR FY26 p.327 / AR FY25 p.313
rev = {'FY22': mn(110189.66), 'FY23': mn(126373.82), 'FY24': mn(132674.95), 'FY25': 12548.42, 'FY26': 11948.38}
oth = {'FY22': mn(2505.83), 'FY23': mn(2067.08), 'FY24': mn(3793.79), 'FY25': 474.35, 'FY26': 373.72}
ti_pub = {'FY22': mn(112695.49), 'FY23': mn(128440.90), 'FY24': mn(136468.74), 'FY25': 13022.77, 'FY26': 12322.10}
pat = {'FY22': mn(3576.05), 'FY23': mn(4108.60), 'FY24': mn(4497.38), 'FY25': 486.79, 'FY26': 250.74}
fin = {'FY22': mn(4247.33), 'FY23': mn(4466.63), 'FY24': mn(5772.58), 'FY25': 629.20, 'FY26': 673.61}
for y in rev:
    ti = rev[y] + oth[y]
    print(y, 'rev+other=%.2f published TI=%.2f diff=%.2f | other income share of TI=%.1f%% | PAT/TI=%.2f%% PAT/rev=%.2f%% | finance cost/rev=%.2f%%' % (ti, ti_pub[y], ti - ti_pub[y], 100 * oth[y] / ti, 100 * pat[y] / ti_pub[y], 100 * pat[y] / rev[y], 100 * fin[y] / rev[y]))
print('Rev from ops YoY FY26 vs FY25: %.2f%%; TI YoY: %.2f%%' % (100 * (rev['FY26'] / rev['FY25'] - 1), 100 * (ti_pub['FY26'] / ti_pub['FY25'] - 1)))
print('Rev from ops FY26 vs FY24: %.2f%%' % (100 * (rev['FY26'] / rev['FY24'] - 1)))
# EBITDA as company defines (press release / AR p.11) and margin on TOTAL INCOME
eb = {'FY22': mn(10685.99), 'FY23': mn(13737.89), 'FY24': mn(15831.24), 'FY25': 1662, 'FY26': 1439}
for y in eb:
    print(y, 'EBITDA %.1f / TI %.1f = %.2f%%' % (eb[y], ti_pub[y], 100 * eb[y] / ti_pub[y]))
print('FY26 EBITDA bridge: Board report 1,362.26 + labour code 76.51 = %.2f (company 1,439)' % (1362.26 + 76.51))
# borrowings (AR FY26 notes 14, 20) incl acceptances
b26 = 919.60 + 2618.67; b25 = 595.24 + 1640.48; b24 = 597.69 + 1857.32
print('Gross borrowings incl acceptances FY26 %.2f FY25 %.2f FY24 %.2f' % (b26, b25, b24))
print('Acceptances 259.67 as %% of FY26 gross borrowings: %.1f%%' % (100 * 259.67 / b26))
print('Net debt ex leases FY26 = %.2f ; FY25 = %.2f (mgmt said 2,653 / 1,486)' % (b26 - 385.70 - 500.19, b25 - 440.17 - 330.39))
print('Net debt (AR def, incl leases) FY26 2741.02 / equity 5450.58 = %.2fx ; ex leases %.2fx' % (2741.02 / 5450.58, (b26 - 385.70 - 500.19) / 5450.58))
print('Gross debt / total equity FY26 %.2fx FY25 %.2fx' % (b26 / 5450.58, b25 / 5262.06))
# receivables & contract assets
tr26 = 3431.52 + 606.57; tr25 = 2779.32 + 678.91; tr24 = 3120.99 + 499.20
ca26 = 6234.46 + 1497.04; ca25 = 5449.18 + 1646.58; ca24 = 3954.39 + 1271.01
print('Trade receivables net: FY26 %.2f FY25 %.2f FY24 %.2f' % (tr26, tr25, tr24))
print('Contract assets net: FY26 %.2f FY25 %.2f FY24 %.2f' % (ca26, ca25, ca24))
print('TR+CA net: FY26 %.2f FY25 %.2f FY24 %.2f' % (tr26 + ca26, tr25 + ca25, tr24 + ca24))
print('CA gross FY26 %.2f (ECL %.2f)' % (6286.82 + 1728.22, 52.36 + 231.18))
# FY26 ageing buckets (AR FY26 printed p.354, PDF p179), Rs crore: not due,<6m,6m-1y,1-2y,2-3y,>3y
rows26 = {'U good cur': [1144.01, 609.89, 102.33, 584.99, 179.00, 216.30], 'U sicr cur': [26.59, 6.16, 4.11, 29.99, 14.99, 2.90],
          'U good nc': [14.12, 2.33, 4.26, 1.29, 96.69, 98.69], 'U sicr nc': [0.14, 0.03, 0.04, 0.01, 12.86, 0.91],
          'D good cur': [0.06, 267.85, 32.49, 100.05, 86.00, 108.55], 'D sicr cur': [0, 2.71, 0.33, 1.01, 0.87, 1.08],
          'D good nc': [0, 0, 0, 6.11, 14.53, 368.55], 'D sicr nc': [0, 0, 0, 0.06, 0.14, 176.77]}
rows25 = {'U good cur': [922.59, 867.37, 115.25, 204.85, 172.45, 30.13], 'U sicr cur': [15.30, 23.42, 1.16, 1.62, 1.66, 1.11],
          'U good nc': [173.74, 0.12, 0, 3.58, 0, 79.91], 'U sicr nc': [1.75, 0, 0, 0.01, 0, 18.66],
          'D good cur': [0.06, 15.97, 84.07, 86.01, 85.14, 195.43], 'D sicr cur': [0, 0.16, 0.85, 0.87, 0.86, 2.03],
          'D good nc': [0, 0, 0, 5.97, 0, 415.59], 'D sicr nc': [0, 0, 0, 0.06, 0, 77.02]}
for nm, rows, exp in [('FY26', rows26, 4319.79), ('FY25', rows25, 3604.77)]:
    cols = [sum(r[i] for r in rows.values()) for i in range(6)]; tot = sum(cols)
    print(nm, 'ageing buckets', [round(c, 2) for c in cols], 'total %.2f (printed subtotal %.2f)' % (tot, exp))
    print(nm, 'not due %.1f%% | <6m %.1f%% | 6m-1y %.1f%% | >1y %.1f%% | >2y %.1f%%' % (100 * cols[0] / tot, 100 * cols[1] / tot, 100 * cols[2] / tot, 100 * sum(cols[3:]) / tot, 100 * sum(cols[4:]) / tot))
    d = sum(sum(rows[k]) for k in rows if k.startswith('D')); print(nm, 'disputed total %.2f = %.1f%% of gross' % (d, 100 * d / tot))
    print(nm, 'row totals vs printed:', [round(sum(v), 2) for v in rows.values()])
print('ECL FY26 %.2f = %.1f%% of gross receivables; FY25 146.54 = %.1f%%' % (281.70, 100 * 281.70 / 4319.79, 100 * 146.54 / 3604.77))
# payables ageing FY26 (AR printed p.364)
pay26 = [[81.45, 65.60, 25.67, 13.04, 33.61], [1743.17, 1726.23, 263.24, 225.74, 287.41], [0, 2.04, 0.11, 0.03, 1.39], [0, 0, 0, 0, 1.95]]
pc = [sum(r[i] for r in pay26) for i in range(5)]; pt = sum(pc)
print('Payables FY26 buckets', [round(c, 2) for c in pc], 'total %.2f (BS 4042.77+427.91=%.2f)' % (pt, 4042.77 + 427.91))
print('Payables FY26 not due %.1f%% | <1y %.1f%% | >1y %.1f%%' % (100 * pc[0] / pt, 100 * pc[1] / pt, 100 * sum(pc[2:]) / pt))
pay25 = [[53.06, 82.68, 16.15, 6.76, 33.29], [1262.79, 1797.37, 284.62, 131.90, 290.99], [0] * 5, [1.21, 7.89, 0.59, 2.16, 3.67]]
pc5 = [sum(r[i] for r in pay25) for i in range(5)]
print('Payables FY25 total %.2f (BS %.2f)' % (sum(pc5), 3541.35 + 433.78), 'not due %.1f%%' % (100 * pc5[0] / sum(pc5)))
# advances
print('Advances from customers FY26 %.2f FY25 %.2f ; contract liabilities total FY26 %.2f FY25 %.2f' % (1672.70 + 2141.31, 2154.48 + 2270.76, 1952.69 + 2141.31, 2503.23 + 2270.76))
# retention FY22-24 RHP printed p.45, Rs mn
for y, v in [('FY22', 11920.70), ('FY23', 11194.10), ('FY24', 10966.10)]:
    print(y, 'retention receivables Rs cr %.2f' % mn(v))
print('Total TR incl arbitration interest FY24 RHP %.2f ; BS check FY24 TR (cur+nc) %.2f' % (mn(40098.71), tr24))
# cash flow
print('FY26: WC outflow = cash generated 110.00 - OPBWC 1702.20 = %.2f ; FY25 = 108.12-1630.93 = %.2f' % (110.00 - 1702.20, 108.12 - 1630.93))
print('2-yr cumulative CFO FY25+FY26 = %.2f' % (-127.49 - 132.20))
print('Finance costs paid FY26 669.86, FY25 627.02')
# geographic
print('Overseas share of revenue FY26 %.1f%% FY25 %.1f%%' % (100 * 3349.02 / 11948.38, 100 * 3851.29 / 12548.42))
print('Segment PBT FY26 India 74.73 / Other 609.20 : India share of rev %.1f%%, of segment PBT %.1f%%' % (100 * 8599.36 / 11948.38, 100 * 74.73 / 683.93))
print('Segment PBT margin FY26 India %.2f%% Other %.2f%% ; FY25 India %.2f%% Other %.2f%%' % (100 * 74.73 / 8599.36, 100 * 609.20 / 3349.02, 100 * 367.89 / 8697.13, 100 * 604.62 / 3851.29))
# order book
print('Order book roll Q1FY27: 32496 + 13219 inflow - 43290 closing = %.0f (executed + adjustments); Q1FY27 rev from ops 2671.00' % (32496 + 13219 - 43290))
print('Book-to-bill Q1FY27 as company says 3.8x; 13219/2727 = %.2f' % (13219 / 2727))
ob26 = [9279, 7580, 7423, 4779, 2907, 528]; ob27 = [8905, 6992, 7110, 9540, 10324, 419]; ob25 = [10398, 7355, 8161, 4322, 1797, 649]
print('OB sums Mar26 %d Jun26 %d Sep25 %d' % (sum(ob26), sum(ob27), sum(ob25)))
print('FY26 inflow 4125 / FY26 TI 12322 = %.2fx ; OB Mar26 / FY26 TI = %.2fx' % (4125 / 12322, 32496 / 12322))
print('NWC days FY24->FY26 change: +%d days' % (143 - 63))
print('Finance cost Q1FY27 173.05 / rev from ops 2671.00 = %.2f%% ; consolidated PBT 50.59' % (100 * 173.05 / 2671.00))
# order book mix shares recomputed
print('Mar26 mix %%:', [round(100 * v / sum(ob26), 1) for v in ob26])
print('Jun26 mix %%:', [round(100 * v / sum(ob27), 1) for v in ob27])
print('Sep25 mix %%:', [round(100 * v / sum(ob25), 1) for v in ob25])
