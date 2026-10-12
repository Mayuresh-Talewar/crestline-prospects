# Every figure below is typed from a rendered page image (see data.md for doc + page). Rs lakh -> Rs Cr by /100.
# Run: python -I compute.py   (all counts / ratios in data.md come from this output)
L = lambda x: x / 100.0
SA = {  # STANDALONE, as first reported in each year's own annual report unless noted
 'FY22': dict(rev=23657.55, oi=7532.47, pbt=13120.43, pat=10563.66, fin=41.74, da=480.93, texp=18069.59, cfo=1586.86,
              tr_c=7640.33, tr_nc=206.05, pay=2026.60, msme=0, adv=425.54, ret=424.22, ca=0, cl=6117.18),
 'FY23': dict(rev=79779.03, oi=8317.73, pbt=20875.11, pat=16598.86, fin=460.26, da=673.18, texp=67221.65, cfo=2477.14,
              tr_c=21558.90, tr_nc=6154.10, pay=10581.30, msme=117.83, adv=1846.28, ret=6154.10, ca=69.22, cl=7182.23),
 'FY24': dict(rev=70833.01, oi=9646.76, pbt=24430.42, pat=19545.74, fin=499.17, da=697.07, texp=56049.35, cfo=23024.18,
              tr_c=6181.45, tr_nc=538.45, pay=3375.79, msme=1515.70, adv=5962.81, ret=669.21, ca=919.00, cl=2809.99),
 'FY25': dict(rev=39473.06, oi=12336.15, pbt=20250.00, pat=15679.74, fin=415.38, da=745.80, texp=31559.21, cfo=1538.91,
              tr_c=5909.47, tr_nc=209.25, pay=3321.81, msme=1284.52, adv=2772.19, ret=418.50, ca=0, cl=731.61),
 'FY26': dict(rev=28555.19, oi=15220.39, pbt=20103.33, pat=15483.07, fin=429.65, da=938.22, texp=23672.25, cfo=4679.50,
              tr_c=3613.48, tr_nc=180.46, pay=1219.33, msme=645.76, adv=0, ret=360.92, ca=1162.24, cl=7464.28),
}
print('STANDALONE (Rs Cr)  [revenue = revenue from operations as first reported; EBITDA ex other income = rev - (total exp - finance - D&A)]')
print('yr   rev    OI     PBT    PAT   EBITDAxOI  EBITDA%rev  OI%totinc  CFO   TR(c+nc)  TRdays  payables(total) MSME%  ret   adv   CA     CL')
for y, d in SA.items():
    ebitda = d['rev'] - (d['texp'] - d['fin'] - d['da'])
    tr = d['tr_c'] + d['tr_nc']
    pay = d['pay'] + d['msme']
    print(y, f"{L(d['rev']):7.1f} {L(d['oi']):6.1f} {L(d['pbt']):6.1f} {L(d['pat']):6.1f} {L(ebitda):8.1f} {100*ebitda/d['rev']:8.1f}% {100*d['oi']/(d['rev']+d['oi']):8.1f}% "
          f"{L(d['cfo']):6.1f} {L(tr):7.1f} {tr/d['rev']*365:6.0f} {L(pay):9.1f} {100*d['msme']/pay if pay else 0:6.1f}% {L(d['ret']):5.1f} {L(d['adv']):5.1f} {L(d['ca']):5.1f} {L(d['cl']):5.1f}")
print('payable days on (revenue) is NOT computed: no cost-base denominator reconciled; use balances only')

print('\nSTANDALONE revenue change YoY')
ys = list(SA)
for a, b in zip(ys, ys[1:]):
    print(b, f"{100*(SA[b]['rev']/SA[a]['rev']-1):.1f}%")
print('FY26 vs FY23 peak', f"{100*(SA['FY26']['rev']/SA['FY23']['rev']-1):.1f}%")

print('\nFY26 STANDALONE receivable ageing (Rs lakh, current): not-due-as-printed 180.46, <6m 3054.84, 6m-1y 170.27, 1-2y 206.23, 2-3y 0.29, >3y 1.39, undisputed good total 3613.48')
good = dict(nd=180.46, m6=3054.84, y1=170.27, y2=206.23, y3=0.29, y3p=1.39)
tot = sum(good.values()); print('sum', round(tot, 2), {k: f"{100*v/tot:.1f}%" for k, v in good.items()})
print('over 6 months past due (6m-1y + 1-2y + 2-3y + >3y) =', round(L(good['y1']+good['y2']+good['y3']+good['y3p']), 2), 'Cr =', f"{100*(good['y1']+good['y2']+good['y3']+good['y3p'])/tot:.1f}%")
print('FY25 ageing (current): <6m 5581.56 / 6m-1y 118.66 / total 5909.47 + not due 209.25 => over-6m share', f"{100*118.66/(5909.47):.1f}%")

print('\nRELATED-PARTY CONTRACT REVENUE (standalone, Rs lakh) vs contract revenue and revenue from operations')
RPT = {'FY22': 3828.0+15819.92*0+0, }
rpt = {'FY22': 3827.61 + 15819.92, 'FY23': 6418.38 + 9213.46, 'FY24': 4345.90 + 5376.44, 'FY25': 1584.51 + 28.92, 'FY26': 1439.01 + 47.92}
con = {'FY22': 21909.97, 'FY23': 78600.54, 'FY24': 68236.50, 'FY25': 35783.59, 'FY26': 24191.71}
for y in rpt:
    print(y, f"RPT contract rev {L(rpt[y]):6.1f} Cr = {100*rpt[y]/con[y]:5.1f}% of contract revenue {L(con[y]):6.1f}; = {100*rpt[y]/SA[y]['rev']:5.1f}% of revenue from ops")
print('FY26 external contract revenue (contract rev - RPT) =', round(L(con['FY26']-rpt['FY26']), 1), 'Cr; FY23 =', round(L(con['FY23']-rpt['FY23']), 1), 'Cr; change', f"{100*((con['FY26']-rpt['FY26'])/(con['FY23']-rpt['FY23'])-1):.1f}%")
print('FY26 RPT trade receivables 639.60 lakh of total TR', round(L(SA['FY26']['tr_c']+SA['FY26']['tr_nc']), 2), 'Cr =', f"{100*639.60/(SA['FY26']['tr_c']+SA['FY26']['tr_nc']):.1f}%",
      '; Atmosphere Realty 548.72 =', f"{100*548.72/(SA['FY26']['tr_c']+SA['FY26']['tr_nc']):.1f}%", 'of TR; vs its FY26 contract revenue 1439.01 =', f"{548.72/1439.01*365:.0f} days of its annual billing")
print('Receivables from directors-linked firms/companies (note 2.04, FY26) 590.53 lakh =', f"{100*590.53/(SA['FY26']['tr_c']):.1f}% of current TR")

print('\nCONSOLIDATED (Rs Cr, as first reported; FY26 as in AR 13 May 2026 before the interest reclassification)')
C = {'FY22': dict(rev=96148.48, ti=116265.49, pat=29851.93, pato=21635.44, epc=49334.85, re=64161.08, epc_res=12885.04, epc_a=19324.30, epc_l=16718.44, bor=37734.80+17992.19),
     'FY23': dict(rev=189034.83, ti=193826.86, pat=28895.55, pato=25857.21, epc=102480.60, re=97335.79, epc_res=13551.59, epc_a=43474.24, epc_l=32928.74, bor=1230.62+19357.21),
     'FY24': dict(rev=126345.49, ti=136022.06, pat=30334.14, pato=30039.41, epc=80333.44, re=53040.28, epc_res=15769.56, epc_a=20434.34, epc_l=21135.59, bor=6342.87+6741.84),
     'FY25': dict(rev=110806.85, ti=123122.86, pat=31281.09, pato=28271.85, epc=41338.66, re=69846.88, epc_res=10629.60, epc_a=15463.06, epc_l=12085.27, bor=0+3560.08),
     'FY26': dict(rev=63046.14, ti=79201.99, pat=21100.36, pato=20058.10, epc=30378.75, re=32939.04, epc_res=7989.66, epc_a=13807.82, epc_l=11914.90, bor=1776.59+4009.06)}
print('yr   rev    TI     PAT   PAT-owners  EPCseg-rev  RE-rev  EPC share of seg rev  EPC result  EPC assets  EPC liab  EPC net assets  gross borrowings')
for y, d in C.items():
    print(y, f"{L(d['rev']):7.1f} {L(d['ti']):7.1f} {L(d['pat']):6.1f} {L(d['pato']):8.1f} {L(d['epc']):9.1f} {L(d['re']):8.1f} {100*d['epc']/(d['epc']+d['re']):8.1f}% {L(d['epc_res']):9.1f} {L(d['epc_a']):9.1f} {L(d['epc_l']):9.1f} {L(d['epc_a']-d['epc_l']):9.1f} {L(d['bor']):9.1f}")
print('consol rev FY26 vs FY25', f"{100*(C['FY26']['rev']/C['FY25']['rev']-1):.1f}%", '| total PAT', f"{100*(C['FY26']['pat']/C['FY25']['pat']-1):.1f}%", '| PAT owners', f"{100*(C['FY26']['pato']/C['FY25']['pato']-1):.1f}%", '| TI', f"{100*(C['FY26']['ti']/C['FY25']['ti']-1):.1f}%")
print('EPC segment revenue FY26 vs FY23', f"{100*(C['FY26']['epc']/C['FY23']['epc']-1):.1f}%", '| FY26 vs FY25', f"{100*(C['FY26']['epc']/C['FY25']['epc']-1):.1f}%")
print('Reclass of interest into revenue: FY26 consol 71469.77-63046.14 =', round(L(71469.77-63046.14), 2), 'Cr; standalone 36644.42-28555.19 =', round(L(36644.42-28555.19), 2), 'Cr')
print('Q1 FY27 EPC segment: rev 8206.89 vs Q1FY26 10224.21 =', f"{100*(8206.89/10224.21-1):.1f}%", '; EPC net assets Jun-26', round(L(12861.85-9483.10), 2), 'Cr')

print('\nEPC ORDER BOOK (Rs Cr, company statements): Mar-23 980+, Mar-24 823, Mar-25 503, Dec-25 300, Mar-26 392, Jun-26 305')
ob = [('Mar-23', 980), ('Mar-24', 823), ('Mar-25', 503), ('Mar-26', 392), ('Jun-26', 305)]
print('Mar-23 -> Jun-26', f"{100*(305/980-1):.0f}%", '; Mar-25 -> Mar-26', f"{100*(392/503-1):.0f}%", '; Mar-26 -> Jun-26', f"{100*(305/392-1):.0f}%")
print('Jun-26 infra share 61% =', round(305*.61), 'Cr; residential 39% =', round(305*.39), 'Cr; Mar-26 52% infra =', round(392*.52), 'Cr; Mar-25 26% infra =', round(503*.26), 'Cr')
print('standalone RPO (Ind AS 115 note) Mar-26 28786 lakh =', L(28786), 'Cr; 0-1y 23230 =', L(23230), '; FY26 standalone contract revenue', L(24191.71))

print('\nBuyback 169.29 Cr vs standalone cash+bank+current investments Mar-26 (2129.25+34227.22+19427.29 lakh) =', round(L(2129.25+34227.22+19427.29), 1), 'Cr')
print('Standalone loans+advances to related/others Mar-26 82121.13 lakh =', L(82121.13), 'Cr = ', f"{100*82121.13/222019.80:.1f}% of standalone total assets 2,220.20 Cr")
print('Standalone total TR Mar-26 as % of total assets', f"{100*(3613.48+180.46)/222019.80:.1f}%")
print('Dividends: 0.72 x 40,36,66,505 sh =', round(0.72*403666505/1e7, 2), 'Cr')
print('Bank limits (CARE, 11 Nov 2025): fund-based 32.50 + non-fund 387.00 =', 32.5+387.0, 'Cr; standalone BG & commitment charges FY26 4.20 Cr (420.40 lakh); fixed deposits pledged 54.78 Cr (5478.05 lakh)')
print('MICL Q4FY26 call: FY26 collections 990 / sales 1800 =', f"{990/1800*100:.0f}%", '(real estate, group-wide; not EPC)')
