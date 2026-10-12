# NWC days = (inventories + trade receivables + contract assets - trade payables - customer advances/contract liabilities) / revenue * 365
# CONSOLIDATED, Rs lakh as printed; output in Rs crore. cur = current only; all = plus non-current trade items.
# keys: rev inv tr ca tp cl | nc_tr (non-curr trade recv, PSP: non-curr retention) nc_tp nc_cl (non-curr mobilisation adv)
D = {
 "PSP": {
  "FY22": dict(rev=174806.33, inv=8184.83,  tr=31100.71, ca=13222.91, tp=1284.52+24535.50, cl=17.00+2146.58+13749.42,      nc_tr=8052.28,  nc_tp=0, nc_cl=0),
  "FY23": dict(rev=193780.60, inv=15312.26, tr=43386.65, ca=3403.49+25741.50-122.00, tp=2358.84+34472.72, cl=3078.10+7856.31+24554.88, nc_tr=10060.92, nc_tp=0, nc_cl=0),
  "FY24": dict(rev=250578.85, inv=31783.11, tr=34211.86, ca=5009.89+46157.89-389.09, tp=1808.98+40194.20, cl=3150.61+2991.57+13556.01, nc_tr=10397.67, nc_tp=0, nc_cl=0),
  "FY25": dict(rev=251212.57, inv=32394.01, tr=52983.29, ca=4898.20+52934.72-748.07, tp=1996.54+39794.14, cl=3318.69+1103.44+33768.87, nc_tr=12696.40, nc_tp=0, nc_cl=0),
  "FY26": dict(rev=314866.19, inv=34761.07, tr=92821.87, ca=5940.07+45582.42-3800.56, tp=4846.94+41672.57, cl=2659.05+1504.78+81372.21, nc_tr=15449.95, nc_tp=0, nc_cl=0),
 },
 "BLK": {  # FY22,FY23 as filed: unbilled WIP sits inside inventories; FY24 as RESTATED in FY25 AR; FY25,FY26 as filed
  "FY22": dict(rev=115751.16, inv=33980.85, tr=34780.12, ca=0,        tp=2093.07+17496.83, cl=6873.74,            nc_tr=10787.15, nc_tp=3704.97, nc_cl=10446.01),
  "FY23": dict(rev=110997.61, inv=34614.09, tr=41977.42, ca=0,        tp=2578.93+17581.78, cl=9258.31,            nc_tr=10016.61, nc_tp=2483.88, nc_cl=5370.09),
  "FY24": dict(rev=124453.44, inv=19055.83, tr=37771.98, ca=30535.17, tp=2899.40+21807.56, cl=12654.26+1019.39,   nc_tr=8917.03,  nc_tp=0,       nc_cl=7258.63),
  "FY25": dict(rev=115363.32, inv=19371.53, tr=43736.57, ca=32993.12, tp=1512.42+21584.29, cl=11182.72+8865.97,   nc_tr=3698.13,  nc_tp=0,       nc_cl=8552.99),
  "FY26": dict(rev=137913.66, inv=20343.90, tr=43433.56, ca=35547.64, tp=2036.73+24087.27, cl=11948.41+19037.40,  nc_tr=6843.95,  nc_tp=0,       nc_cl=8992.70),
 },
}
cr = lambda x: x/100
for co, yrs in D.items():
    print(f"\n{co} consolidated, Rs crore")
    print(f"{'FY':5}{'Rev':>9}{'Inv':>8}{'TR':>8}{'CA':>8}{'TP':>8}{'CustAdv':>9} | {'NWC cur':>8}{'days':>7}{'%rev':>7} | {'NWC all':>8}{'days':>7}{'%rev':>7}")
    for y, d in yrs.items():
        cur = d['inv']+d['tr']+d['ca']-d['tp']-d['cl']
        al = cur + d['nc_tr'] - d['nc_tp'] - d['nc_cl']
        print(f"{y:5}{cr(d['rev']):9.1f}{cr(d['inv']):8.1f}{cr(d['tr']):8.1f}{cr(d['ca']):8.1f}{cr(d['tp']):8.1f}{cr(d['cl']):9.1f} | "
              f"{cr(cur):8.1f}{cur/d['rev']*365:7.1f}{cur/d['rev']*100:7.1f} | {cr(al):8.1f}{al/d['rev']*365:7.1f}{al/d['rev']*100:7.1f}")
