# KEC-1 derived figures. Inputs are Rs crore, consolidated, copied from the filings cited in data.md.
Y=['FY23','FY24','FY25','FY26']   # FY22 balance sheet is pre-restatement (AR23) so it is NOT used in derived ratios
rev ={'FY23':17281.71,'FY24':19914.17,'FY25':21846.70,'FY26':23505.54}
trnc={'FY23':359.30,'FY24':288.34,'FY25':214.93,'FY26':31.45}
trc ={'FY23':4281.67,'FY24':4136.62,'FY25':5051.10,'FY26':6474.21}
ca  ={'FY23':7465.61,'FY24':9088.37,'FY25':11043.51,'FY26':12127.56}
inv ={'FY23':1137.16,'FY24':1213.31,'FY25':1140.46,'FY26':1532.74}
pay ={'FY23':171.98+8216.35,'FY24':167.62+7502.60+1560.79,'FY25':164.64+8831.57+1507.27,'FY26':218.20+8485.05+2120.74}  # incl acceptances
cl  ={'FY23':1230.34,'FY24':1211.49,'FY25':1659.36,'FY26':1837.26}
bor ={'FY23':493.16+2701.29,'FY24':236.01+3552.27,'FY25':358.46+3342.64,'FY26':661.37+4441.86}
cash={'FY23':281.16+63.00,'FY24':205.10+68.18,'FY25':545.69+110.24,'FY26':411.26+100.67}
fin ={'FY23':538.59,'FY24':655.13,'FY25':663.59,'FY26':663.60}
d=lambda x,y:x/rev[y]*365
print('year | TR(nc+c) | CA | TR+CA | TR+CA days | Inv | Pay+Acc | Pay days(of revenue) | OpWC(TR+CA+Inv-Pay) | OpWC days | OpWC less contract liab days | gross debt | gross-cash | fin cost/rev %')
for y in Y:
    tr=trnc[y]+trc[y]; a=tr+ca[y]; w=a+inv[y]-pay[y]
    print(y,round(tr,2),ca[y],round(a,2),round(d(a,y),1),inv[y],round(pay[y],2),round(d(pay[y],y),1),round(w,2),round(d(w,y),1),round(d(w-cl[y],y),1),round(bor[y],2),round(bor[y]-cash[y],2),round(fin[y]/rev[y]*100,2))
# growth
print('rev growth FY23->FY26 %',round((rev['FY26']/rev['FY23']-1)*100,1),' TR+CA growth %',round(((trnc['FY26']+trc['FY26']+ca['FY26'])/(trnc['FY23']+trc['FY23']+ca['FY23'])-1)*100,1))
print('FY26 vs FY25: rev %',round((rev['FY26']/rev['FY25']-1)*100,1),'TR %',round(((trnc['FY26']+trc['FY26'])/(trnc['FY25']+trc['FY25'])-1)*100,1),'CA %',round((ca['FY26']/ca['FY25']-1)*100,1),'inv %',round((inv['FY26']/inv['FY25']-1)*100,1))
# ageing FY26 / FY25 current trade receivables (gross, Note 16.3): not due, <6m, 6m-1y, 1-2, 2-3, >3
ag26=[3337.84,2179.95,691.70,209.01,92.35,234.20]; ag25=[3277.90,1418.55,266.95,124.68,18.77,53.07]
assert abs(sum(ag26)-6745.05)<0.05 and abs(sum(ag25)-5159.92)<0.05
for n,a in (('FY26',ag26),('FY25',ag25)):
    o6=sum(a[2:]); o1=sum(a[3:]); print(n,'gross current TR',round(sum(a),2),'not due %',round(a[0]/sum(a)*100,1),'>6m',round(o6,2),round(o6/sum(a)*100,1),'%  >1y',round(o1,2),round(o1/sum(a)*100,1),'%')
# payables ageing FY26 (note 32.2): unbilled, not due, <1y, 1-2, 2-3, >3
pg26=[1935.21,2517.23,3537.42,279.85,150.23,283.31]; assert abs(sum(pg26)-8703.25)<0.05
pg25=[1865.58,3760.01,2677.63,244.91,246.63,201.45]; assert abs(sum(pg25)-8996.21)<0.05
for n,a in (('FY26',pg26),('FY25',pg25)):
    t=sum(a); print(n,'payables (excl acceptances)',round(t,2),'past due (<1y..>3y)',round(sum(a[2:]),2),round(sum(a[2:])/t*100,1),'%  >1y',round(sum(a[3:]),2))
# retention inside contract assets
print('retention share of contract assets: FY26',round(4922.51/ (7408.59+4922.51)*100,1),'% of gross; FY25',round(3669.63/(7508.78+3669.63)*100,1),'%')
print('retention days of revenue FY26',round(4922.51/rev['FY26']*365,1),'FY25',round(3669.63/rev['FY25']*365,1),' growth %',round((4922.51/3669.63-1)*100,1))
print('retention / rev growth: rev', round((rev['FY26']/rev['FY25']-1)*100,1))
# segment checks
fy26={'T&D':15883,'Civil':3823,'Transportation':1555,'O&G':258,'Renewables':516,'Cables':2217,'Inter':-746}
assert sum(fy26.values())==23505+1 or abs(sum(fy26.values())-23506)<=1, sum(fy26.values())
q1={'T&D':3217,'Civil':993,'Transportation':259,'O&G':117,'Renewables':56,'Cables':601,'Inter':-219}; print('Q1FY27 seg sum',sum(q1.values()))
q1p={'T&D':3157,'Civil':940,'Transportation':471,'O&G':60,'Renewables':136,'Cables':383,'Inter':-124}; print('Q1FY26 seg sum',sum(q1p.values()))
# geography FY26 revenue
g={'India':14516.07,'UAE':1658.84,'Saudi':3282.12,'Brazil/Mexico/USA':1795.22,'Other':2253.29}; print('geo sum',round(sum(g.values()),2),'international',round(sum(g.values())-g['India'],2),round((1-g['India']/sum(g.values()))*100,1),'%')
print('largest India customer share of revenue FY26 %',round(5579.68/rev['FY26']*100,1),' FY25',round(4105.50/rev['FY25']*100,1))
print('2 customers share of receivables: 4372.34 / 6745.05 gross current =',round(4372.34/6745.05*100,1),'%  (company says ">10% each of total trade receivables"; denominator not stated)')
print('Net debt incl acceptances FY26 vs FY25 +',6722-4558, round((6722/4558-1)*100,1),'%;  Mar26->Jun26',6568-6722)
print('computed net debt = borrowings - cash - bank FY26',round(bor['FY26']-cash['FY26'],2),'vs company 4,601; FY25',round(bor['FY25']-cash['FY25'],2),'vs 3,051')
print('implied finance cost on avg(borrowings+acceptances) FY26 %',round(663.60/(((bor['FY25']+1507.27)+(bor['FY26']+2120.74))/2)*100,2))
print('1 day of FY26 revenue =',round(rev['FY26']/365,1),'Cr ; 10 NWC days =',round(rev['FY26']/365*10,0))
print('BG/LC charges FY26 % of revenue',round(208.14/rev['FY26']*100,2))
