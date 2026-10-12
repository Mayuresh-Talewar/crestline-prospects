# VS-1 arithmetic on Vascon's published figures. Run: python -I compute_vascon.py
# Inputs are Rs lakh read off page images (sources in data.md). Output goes into data.md as "Computed".
cr = lambda x: round(x / 100, 2)

# --- Consolidated (AR of the year; FY25 and FY26 as in AR FY26 comparatives) ---
C = {
 'FY22': dict(rev=65686.05, ti=71006.59, fin=2444.08, pat=3591.72, opbwc=3975.95, cfo_ops=3551.41, cfo=3328.10,
              bor_nc=1713.42, bor_c=14002.48, cash=2579.67, bank=7264.11, eq=82412.70, tr=16245.04, inv=51441.74, pay=584.60+27332.32),
 'FY23': dict(rev=101938.23, ti=103042.55, fin=1279.35, pat=9941.07, opbwc=12408.85, cfo_ops=11416.75, cfo=10366.04,
              bor_nc=6370.29, bor_c=7107.72, cash=5297.08, bank=5515.00, eq=92435.77, tr=21770.67, inv=47254.30, pay=662.05+35496.95),
 'FY24': dict(rev=105285.89, ti=107544.17, fin=1592.48, pat=6793.51, opbwc=10030.08, cfo_ops=1621.27, cfo=2850.76,
              bor_nc=7909.90, bor_c=9558.43, cash=2414.04, bank=5785.87, eq=99459.87, tr=26634.49, inv=56088.58, pay=2048.54+38264.56),
 'FY25': dict(rev=107741.06, ti=108990.92, fin=1888.05, pat=13025.15, opbwc=9766.76, cfo_ops=1824.78, cfo=474.97,
              bor_nc=9995.82, bor_c=10504.23, cash=11757.74, bank=11016.24, eq=109282.19, tr=21170.09, inv=59120.74, pay=3476.49+44672.10),
 'FY26': dict(rev=94852.72, ti=98372.17, fin=1619.95, pat=4889.51, opbwc=5412.59, cfo_ops=-10317.50, cfo=-12248.88,
              bor_nc=16639.06, bor_c=13221.25, cash=5608.59, bank=14724.14, eq=114882.20, tr=23829.77, inv=73649.84, pay=6524.48+57508.57),
}
print('CONSOLIDATED (Rs Cr)  rev | TI | fin | PAT | OPBWC | WC change (cash from ops - OPBWC) | CFO | borrowings | cash+bank | gross-BS net debt | equity | invent | tr | pay')
for y, d in C.items():
    bor = d['bor_nc'] + d['bor_c']; wc = d['cfo_ops'] - d['opbwc']
    print(y, cr(d['rev']), cr(d['ti']), cr(d['fin']), cr(d['pat']), cr(d['opbwc']), cr(wc), cr(d['cfo']), cr(bor),
          cr(d['cash'] + d['bank']), cr(bor - d['cash'] - d['bank']), cr(d['eq']), cr(d['inv']), cr(d['tr']), cr(d['pay']))

# --- Standalone FY26 / FY25 (AR FY26 p48-49) ---
S = {'FY26': dict(opbwc=5406.60, cfo_ops=-10485.25), 'FY25': dict(opbwc=9286.49, cfo_ops=1063.96)}
for y, d in S.items(): print('STANDALONE WC change', y, cr(d['cfo_ops'] - d['opbwc']))

# --- Ratios on ONE basis each (standalone FY26 BS / P&L, AR FY26 p48, p59, p60, p66, p67) ---
rev, tr_net, ret, unbilled_net, inv, pay, mat = 94852.62, 23810.31, 10718.19, 56351.06, 71460.04, 64135.00, 95335.63
print('STANDALONE FY26 net receivables / revenue x365 =', round(tr_net / rev * 365, 1), 'days (receivable incl. retention, net of ECL)')
print('STANDALONE FY26 retention / revenue x365 =', round(ret / rev * 365, 1), 'days; retention share of net receivable', round(ret / tr_net * 100, 1), '%')
print('STANDALONE FY26 net unbilled (contract asset) / revenue x365 =', round(unbilled_net / rev * 365, 1), 'days')
print('STANDALONE FY26 trade payables / cost of materials+services x365 =', round(pay / mat * 365, 1), 'days')
print('STANDALONE FY26 trade payables >1y share =', round((597.24+41.00+13.36+4031.03+1676.83+8720.77)/64135.00*100, 1), '%')
print('STANDALONE FY26 inventory share: projects under development', round(62927.65/71460.04*100, 1), '%')
print('CONSOL ageing FY26: >3y incl. doubtful / gross debtors', round(7555.80/16733.19*100, 1), '%')
print('Supplier finance arrangement as share of trade payables', round(10432.83/64135.00*100, 1), '%')
print('Customer advances net of unbilled (Note 18a) change FY25->FY26', cr(15149.26 - 24873.91))
print('Net unbilled change FY25->FY26', cr(56351.06 - 46765.84), ' FY24->FY25', cr(46765.84 - 30063.74), ' FY23->FY24', cr(30063.74 - 29914.44))
print('Retention standalone FY22..FY26', [cr(x) for x in (4525.55, 6166.60, 7676.01, 8471.74, 10718.19)])

# --- Company-style EBITDA check (consolidated, includes other income): FY26 and FY25 from Q4 FY26 deck p9 ---
print('EBITDA FY26 check', round(983.72 - 823.74 - 35.89 - 36.96, 2), 'FY25 check', round(1089.91 - 912.82 - 36.87 - 40.32, 2))
print('EPC share of FY25 consol revenue', round(100720.84/107740.06*100, 1), '% ; FY26', round(91640.99/94852.72*100, 1), '%; RE FY26', round(3211.73/94852.72*100, 1), '%')

# --- Dossier quarterly claims (consolidated, company decks; Rs Cr) ---
q1_26, q1_25 = 22.47, 9.16 + 0.54
h1_26, h1_25 = 33.90, 17.11 + 2.80
q3_26, q3_25 = 9.28, 75.68 - 0.11
print('Q1 FY26 PAT growth', round((q1_26/q1_25-1)*100, 1), '% (cont only base 9.16:', round((q1_26/9.16-1)*100, 1), '%)')
print('H1 FY26 PAT growth', round((h1_26/h1_25-1)*100, 1), '%; H1 revenue growth', round((446.31/395.83-1)*100, 1), '%')
print('Q3 FY26 PAT change', round((q3_26/q3_25-1)*100, 1), '% (Q3 FY25 includes exceptional 74.06 pre-tax: ex-exceptional Q3 FY25 PBT 17.39 vs Q3 FY26 PBT 10.10 =', round((10.10/17.39-1)*100, 1), '%)')
print('Q2 FY26 PAT consol 11.43 vs Q2 FY25 7.95+2.36 =', round((11.43/(7.95+2.36)-1)*100, 1), '%')

# --- Order book / external order book concentration (Q1 FY27 deck p15) ---
ext = [293, 276, 248, 218, 213, 206, 204, 190, 157, 147, 114, 65, 41, 39, 30, 22, 19, 49]
print('external order book sum', sum(ext), 'top1', round(ext[0]/sum(ext)*100, 1), '% top3', round(sum(ext[:3])/sum(ext)*100, 1), '% top5', round(sum(ext[:5])/sum(ext)*100, 1), '%')
print('order book / FY26 EPC revenue (916.41):', round(2850/916.41, 2), 'x (company says ~3x)')
print('Q1 FY27 vs Q1 FY26 consolidated revenue', round((151.96/220.91-1)*100, 1), '%; EPC', round((148/203-1)*100, 1), '%')
print('Net debt Jun-26 vs Mar-26 (Cr)', round(151.74-91.41, 2))
print('FY26 revenue vs FY25 consolidated', round((94852.72/107741.06-1)*100, 1), '%; FY26 PAT vs FY25 (ex disc)', round((4889.51/12644.66-1)*100, 1), '%')
