# KPIL STANDALONE (Kalpataru Projects International Ltd) Rs crore. Inputs typed from page images (see data.md pages). Run: python -I kp-calc.py
Y=['FY22r','FY23','FY24','FY25','FY26']
rev=dict(zip(Y,[12407.14,14336.82,16759.66,18887.91,23210.06]))
oth=dict(zip(Y,[98.39,111.69,113.45,97.94,233.46]))
pbt0=dict(zip(Y,[435.58,684.58,773.79,929.43,1499.28]))   # before exceptional items
fin=dict(zip(Y,[243.56,293.90,337.03,380.65,368.03]))
da=dict(zip(Y,[271.95,294.75,367.88,374.85,394.83]))
pat=dict(zip(Y,[350.38,531.95,533.00,647.95,831.75]))
trnc=dict(zip(Y,[215.16,180.47,131.05,80.50,66.27]))      # trade receivables non-current (net of ECL)
trc=dict(zip(Y,[4108.71,4943.87,5393.32,7218.01,7839.41]))
canc=dict(zip(Y,[0,0,23.19,14.92,15.38]))                 # contract assets non-current (FY22,FY23 line not shown in note 11)
cac=dict(zip(Y,[3463.89,4894.81,6059.36,6185.90,7068.23]))
inv=dict(zip(Y,[919.30,1087.43,1239.66,1370.81,1762.60]))
tpnc=dict(zip(Y,[325.72,161.40,115.60,79.43,96.72]))
tpc=dict(zip(Y,[157.54+3599.09,150.91+4431.56,222.45+5013.52,266.59+5824.84,432.39+6021.00]))
msme=dict(zip(Y,[157.54,150.91,222.45,266.59,432.39]))
bnc=dict(zip(Y,[804.62,924.50,1144.07,1282.68,565.62]))
bc=dict(zip(Y,[1850.51,2010.14,2119.42,2109.64,2274.32]))
adv=dict(zip(Y,[1291.89+616.84,2752.77+272.12,3544.43,4435.08,4817.27]))
cfo=dict(zip(Y,[376.35,559.38,713.61,837.07,764.46]))
cgo=dict(zip(Y,[583.09,812.81,916.93,1072.67,1167.77]))
opwc=dict(zip(Y,[1118.63,1263.99,1496.56,1591.60,2066.61]))
print('year  revG%  coreEBITDA  marg%  fin/rev%  TR+CA   (TR+CA)/rev*365  TP_total  TP/rev*365  gross_borr  adv  CFO  CFO/EBITDA')
prev=None
for y in Y:
    ebitda=pbt0[y]+fin[y]+da[y]-oth[y]
    g=(rev[y]/rev[prev]-1)*100 if prev else float('nan')
    tr=trnc[y]+trc[y]; ca=cac[y]+canc[y]
    tp=tpnc[y]+tpc[y]
    print(f"{y:6}{g:6.1f} {ebitda:9.1f} {ebitda/rev[y]*100:6.2f} {fin[y]/rev[y]*100:6.2f} {tr+ca:9.1f} {(tr+ca)/rev[y]*365:8.1f}  {tp:9.1f} {tp/rev[y]*365:8.1f} {bnc[y]+bc[y]:9.1f} {adv[y]:8.1f} {cfo[y]:7.1f} {cfo[y]/ebitda:5.2f}")
    prev=y
# company-style debtor days check FY26: avg(TR) / revenue *365 (company definition: Average Accounts Receivable / Net Sales, in days)
for y,p in (('FY26','FY25'),('FY25','FY24')):
    a=((trnc[y]+trc[y])+(trnc[p]+trc[p]))/2
    print(y,'avg TR',round(a,1),'debtor days',round(a/rev[y]*365,1))
# FY26 receivable ageing (undisputed, Note 42, p334)
und={'not due':4886.99,'<6m':1716.74,'6m-1y':228.25,'1-2y':639.48,'2-3y':258.71,'>3y':292.58}; dis={'not due':19.34,'<6m':0,'6m-1y':0,'1-2y':1.27,'2-3y':1.75,'>3y':117.33}
und25={'not due':4867.65,'<6m':1131.57,'6m-1y':460.72,'1-2y':362.87,'2-3y':189.68,'>3y':282.08}; dis25={'not due':29.58,'<6m':4.12,'6m-1y':0.21,'1-2y':2.11,'2-3y':0.04,'>3y':124.28}
for nm,u,d_ in (('FY26',und,dis),('FY25',und25,dis25)):
    tot=sum(u.values())+sum(d_.values()); o1=sum(u[k]+d_[k] for k in ('1-2y','2-3y','>3y')); o6=sum(u[k]+d_[k] for k in ('6m-1y','1-2y','2-3y','>3y'))
    print(nm,'gross TR (ageing table)',round(tot,2),'over 1y',round(o1,2),f'{o1/tot*100:.1f}%','over 6m',round(o6,2),f'{o6/tot*100:.1f}%','not due',round(u['not due']+d_['not due'],2))
# Candidate NWC (NOT the company definition): (TR+CA+Inv - TP - customer advances - contract liab)/rev*365
y='FY26'; nwc=(trnc[y]+trc[y]+cac[y]+canc[y]+inv[y]-(tpnc[y]+tpc[y])-adv[y]-378.13); print('candidate NWC days FY26 (own formula, not KPIL)',round(nwc/rev[y]*365,1),'vs KPIL stated standalone 90')
# guidance checks
print('standalone PBT margin ex-exc FY26',round(pbt0['FY26']/rev['FY26']*100,2),'ex VEPL dividend 123.41:',round((pbt0['FY26']-123.41)/rev['FY26']*100,2))
print('consol rev growth FY26',round((27143.06/22315.78-1)*100,1),'| consol FY25 growth',round((22315.78/19626-1)*100,1),'| standalone PAT growth FY25',round((647.95/533.00-1)*100,1),'| consol PAT growth FY25',round((567.27/516-1)*100,1))
print('standalone intl share of revenue FY26',round(6966.77/23210.06*100,1),'FY25',round(5756.09/18887.91*100,1),'| consol',round(10438.89/27143.06*100,1),round(8763.94/22315.78*100,1))
print('PSU India share standalone FY26 (9656.03 as printed)',round(9656.03/23210.06*100,1),'| (9565.03 as printed in consolidated note, vs consolidated rev)',round(9565.03/27143.06*100,1))
print('gross debt standalone FY26 BS minus interest-free loan 369.53',round(565.62+2274.32-369.53,2),'company 2,470')
print('WC facilities FY26 1411.51 / total borrowings',round(1411.51/(565.62+2274.32)*100,1),'%')
print('unbilled payables share FY26',round(1995.28/6550.11*100,1),'% of trade payables 6550.11 | MSME share',round(432.39/6550.11*100,1))
print('Q1FY27 standalone fin cost/rev',round(68/5482*100,2),'| Q1FY26',round(84/5040*100,2))
print('cash from ops FY22-FY26 standalone sum',round(sum(cfo.values()),1))
# consolidated growth (AR FY26 p.357 and IP slide 20)
print('consol PAT growth FY26',round((1030.63/567.27-1)*100,1),'| consol PBT before exc growth FY26',round((1334.07/822.80-1)*100,1))
print('standalone NWC days change Q4FY26->Q1FY27',94-90,'consol',80-75)
print('order book water FY24->FY26 change',round(7486/10667*100-100,1),'% ; T&D+B&F share FY26',round((28572+18295)/65457*100,1))
print('trade payables consol total',round(437.22+6633.74+96.72,2),'borrowings consol',round(611.31+2695.65,2))
print('Fasttel impairment+VEPL gain+labour code',round(-515.04+188.36-29.48,2),'vs exceptional printed -356.16')
