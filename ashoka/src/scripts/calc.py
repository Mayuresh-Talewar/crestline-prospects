# All inputs: Rs lakh, STANDALONE, from the audited statements named in data.md. Run: python -I calc.py
Y=['FY22','FY23','FY24','FY25','FY26']
# source vintage: FY22 = FY23 AR comparative; FY23 = FY24 AR comparative (restated, Note 66); FY24 = FY25 AR comparative; FY25,FY26 = FY26 AR
rev  =[464463.80,637234.90,772666.34,706142.89,581165.66]
oth  =[14565.36,10540.73,11461.35,12637.06,14054.62]
mat  =[143148.98,242606.70,344299.03,288221.56,182132.06]
con  =[236965.14,309865.36,326323.06,314031.43,303180.61]
fin  =[8562.27,14097.57,22805.87,29635.47,31297.21]
dep  =[6970.70,7423.68,10464.22,9820.47,9785.18]
pbt_pre=[54600.94,42387.25,35840.49,27870.44,22528.47]   # before exceptional (FY23 per FY24 AR)
pat  =[-30864.81,67127.36,44275.55,19724.39,32043.65]
trc  =[104832.27,108581.81,109853.37,127195.81,165638.36]   # trade receivables current
trn  =[6458.58,15779.53,32959.52,49633.35,31220.11]         # non-current
ca   =[81336.40,135110.26,169911.76,226797.77,264606.12]    # contract assets
inv  =[18770.29,29840.81,43265.14,34870.50,24716.99]
tpc  =[80797.38,102040.23,129758.19,100701.45,98030.48]     # current trade payables (MSME + other), FY24 restated ex-acceptances
tpn  =[10417.98,12028.82,10658.20,16698.60,19638.56]
acc  =[0,0,27689.70,29395.20,27591.88]                      # acceptances/factoring (FY24 shown separately from FY25 AR)
clc  =[37176.20,72359.85,86771.91,71866.53,55965.94]        # contract liabilities current
cln  =[23803.20,38395.86,39063.74,59204.10,45822.33]
cash =[3878.62+10521.66,5660.08+12989.05,35788.97+15271.57,13540.03+10505.50,51234.86+7065.96]
bor_nc=[16293.33,11667.94,19663.85,103069.21,106559.21]
bor_c =[39637.80,92181.85,124601.30,102800.16,104651.11]
ocf  =[16107.97,7276.28,41014.16,-59128.15,-29164.35]
cgo  =[31254.25,21173.66,56278.03,-49570.38,-18291.72]
opbwc=[54627.40,52535.40,59697.95,61773.74,60390.39]
cr=lambda x:x/100
print('Y',*Y)
print('rev Cr',[round(cr(x),1) for x in rev])
print('rev yoy %',[None]+[round((rev[i]/rev[i-1]-1)*100,1) for i in range(1,5)])
ebitda=[pbt_pre[i]+fin[i]+dep[i] for i in range(5)]
print('EBITDA Cr (PBT pre-exc + fin + dep, incl other income)',[round(cr(x),1) for x in ebitda])
print('EBITDA % of total income',[round(ebitda[i]/(rev[i]+oth[i])*100,1) for i in range(5)])
print('fin cost Cr',[round(cr(x),1) for x in fin])
print('PAT Cr',[round(cr(x),1) for x in pat])
tr=[trc[i]+trn[i] for i in range(5)]
print('trade rec (C+NC) Cr',[round(cr(x),1) for x in tr])
print('contract assets Cr',[round(cr(x),1) for x in ca])
print('TR+CA Cr',[round(cr(tr[i]+ca[i]),1) for i in range(5)])
print('TR days on rev (yr-end)',[round(tr[i]/rev[i]*365) for i in range(5)])
print('CA days on rev (yr-end)',[round(ca[i]/rev[i]*365) for i in range(5)])
print('TR+CA days on rev',[round((tr[i]+ca[i])/rev[i]*365) for i in range(5)])
print('inventory Cr',[round(cr(x),1) for x in inv])
tp=[tpc[i]+tpn[i] for i in range(5)]
print('trade payables (C+NC) Cr',[round(cr(x),1) for x in tp])
print('payable days on (materials+construction) yr-end',[round(tp[i]/(mat[i]+con[i])*365) for i in range(5)])
print('payable+acceptances days',[round((tp[i]+acc[i])/(mat[i]+con[i])*365) for i in range(5)])
print('advances (contract liab C+NC) Cr',[round(cr(clc[i]+cln[i]),1) for i in range(5)])
nwc=[tr[i]+ca[i]+inv[i]-tp[i]-acc[i]-clc[i]-cln[i] for i in range(5)]
print('net operating WC (TR+CA+Inv-TP-Acc-ContractLiab) Cr',[round(cr(x),1) for x in nwc])
print('  as days of rev',[round(nwc[i]/rev[i]*365) for i in range(5)])
print('borrowings all-in (C+NC) Cr',[round(cr(bor_nc[i]+bor_c[i]),1) for i in range(5)])
print('cash+bank Cr',[round(cr(x),1) for x in cash])
print('OCF Cr',[round(cr(x),1) for x in ocf]);print('CashGenFromOps Cr',[round(cr(x),1) for x in cgo]);print('OpProfit before WC Cr',[round(cr(x),1) for x in opbwc])
print('Sum OCF FY25+FY26 Cr',round(cr(ocf[3]+ocf[4]),1))
# FY26 ageing (lakh)
tot=484303.85; nd=258960.93; l6=84326.27; m6_1=53959.72; y12=72691.20; y23=8972.90; y3=5392.83
ca_tot=233677.53+36684.60
print('FY26 TR+CA gross',round(cr(tot),1))
print('FY26 TR only gross',round(cr(tot-ca_tot),1))
# TR only ageing: undisputed good+SICR+credit impaired+disputed
ageing_tr={'not due':59388.78,'<6m':84326.27,'6m-1y':21258.74,'1-2y':32287.12+2315.08,'2-3y':5306.02+22.20+3644.68,'>3y':3329.90+1740.95+321.98}
s=sum(ageing_tr.values());print('FY26 TR-only gross (ageing table)',round(cr(s),1),{k:(round(cr(v),1),round(v/s*100,1)) for k,v in ageing_tr.items()})
print('FY26 TR past due >6m Cr', round(cr(s-ageing_tr['not due']-ageing_tr['<6m']),1), 'pct', round((s-ageing_tr['not due']-ageing_tr['<6m'])/s*100,1))
ageing_tr25={'not due':51892.79,'<6m':75355.07,'6m-1y':29351.82,'1-2y':22361.01+4626.26,'2-3y':2623.45+109.60+1254.84,'>3y':1872.93+1463.67+326.30}
s5=sum(ageing_tr25.values());print('FY25 TR-only gross',round(cr(s5),1),{k:(round(cr(v),1),round(v/s5*100,1)) for k,v in ageing_tr25.items()})
print('FY25 TR past due >6m Cr', round(cr(s5-ageing_tr25['not due']-ageing_tr25['<6m']),1), round((s5-ageing_tr25['not due']-ageing_tr25['<6m'])/s5*100,1))
print('FY26 CA not due share',round(199572.15/ca_tot*100,1),'; CA 6m-2y (SICR+good 1-2y)',round(cr(34105.38+36684.60),1))
# payables ageing FY26
print('FY26 TP ageing: not due MSME+other',round(cr(16100.67+39792.71),1),'1-2? <1y',round(cr(51235.65),1),'1-2y',round(cr(3281.12),1),'2-3y',round(cr(2861.12),1),'>3y',round(cr(4397.77),1),'total',round(cr(101568.37+16100.67-16100.67),1))
# standalone debt (company definition) FY26: bank NC term loans + current borrowings
print('Standalone third-party debt Mar26 (NC bank 8048.09 + current 104651.11) Cr',round(cr(8048.09+104651.11),1))
print('Subsidiary loans NC Mar26 Cr',round(cr(98511.12),1))
# consolidated
print('Consol PAT growth %',round((257580.19/173356.87-1)*100,1),' standalone PAT growth %',round((32043.65/19724.39-1)*100,1))
print('Consol rev ops FY26 vs FY25 %',round((751988.39/1003662.78-1)*100,1))
print('Q1FY27 standalone rev vs Q1FY26 %',round((128787.65/131063.91-1)*100,1),' fin cost %',round((6024.59/8405.43-1)*100,1))
print('Q2FY26 consol PAT yoy %',round((9069.67/46246.90-1)*100,1),'qoq %',round((9069.67/22689.15-1)*100,1),'owners yoy %',round((7806.28/45703.90-1)*100,1))
print('top10 receivables share (company) 70.74%; FY26 turnover 285 days = 365/1.28 ->',round(365/1.28),'; FY25',round(365/1.85))
print('Govt-promoted share of credit exposure FY26 %',round(353450.98/490537.79*100,1))
print('ECL allowance FY26 note 12+14+5 split: CA',round(cr(5756.01),1),'TR',round(cr(17005.00),1))
print('--- extra')
print('Group-co TR 75327.78 / TR(C+NC) 196858.47 %',round(75327.78/196858.47*100,1),'; note-5/14 related dues',round(cr(26883.35),1),'Cr vs concentration table',round(cr(75327.78),1),'Cr')
print('Advances from customers Mar26 Cr',round(cr(46996.57+45822.33),1),' Mar25',round(cr(68685.91+59204.10),1))
print('Consol rev ops Cr FY22-26',[round(x/100,1) for x in [599898.36,810048.19,979846.22,1003662.78,751988.39]])
print('Consol fin cost Cr FY23-26',[round(x/100,1) for x in [110382.72,131039.21,124531.07,91194.96]])
print('Consol PAT Cr FY22-26 (FY22 per FY23 AR, FY23 restated per FY24 AR)',[round(x/100,1) for x in [77140.60,29394.40,52122.50,173356.87,257580.19]])
print('Std debt Jun25..Jun26 Cr',[1652,1362,1046,1127,1173],' cash',[215,376,584,261])
print('Q1FY27 std debt - cash',1173-261,' Mar26',1127-584)
print('Std WC loan fall? 1257(Jun25),978(Sep25),667(Dec25),757(Mar26),1110(Jun26)')
print('std total debt Mar25 1405 -> Mar26 1127 pct',round((1127/1405-1)*100,1))
print('ECL charge FY22-26 cash-flow add-back Cr',[round(x/100,1) for x in [-962.68,-441.67,2794.53,6927.63,11053.29]])
