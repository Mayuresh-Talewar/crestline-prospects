# VS-3 computations. Inputs are figures read from the cited pages (Rs Cr). Run: python -I depth_compute.py
def pct(a,b): return (a/b-1)*100
print("== A. Targets vs actuals (target page -> actual page in depth.md)")
rows=[("FY25 EPC revenue (Q3T24 p9 'Rs 1,000 Cr')",1000,1013),   # actual: Q4T25 p3 call
      ("FY26 EPC revenue (Q4T25 p10 '1,200')",1200,916.41),     # actual: AR26 PDF p124 segment
      ("Order intake FY25 (Q4T24 p12 '~1,500 by Apr-25')",1500,300),   # Q4T25 p11 mgmt 'almost 300'
      ("Order intake FY26 (Q2T26 p3 '~1,500')",1500,762),        # Q4D26 p3
      ("Order backlog 1 Apr 2025 (Q4T24 p12 '4,000')",4000,2825),# Q4D25 p3
      ("Order backlog 1 Apr 2026 (Q1T26 p8 'upwards of 3,500')",3500,2717)] # Q4D26 p3
for n,t,a in rows: print(f"{n}: target {t}, actual {a}, {pct(a,t):+.1f}% vs target")
print("Q1 FY27 EPC revenue 148 as share of 'EPC 1,000' =",round(148/1000*100,1),"% ; CFO said Q1+Q2 = 30% of year (Q1T27 p13)")
print("\n== B. Net debt Jun-24 -> Mar-25 (company deck, Q4D25 p5/6 image) vs GMP net proceeds")
print("Jun-24 124.40 -> Mar-25 16.50 =",round(16.50-124.40,2),"; GMP net proceeds stated 'about 110' (Q3T25 p3). Residual =",round(16.50-124.40+110,2))
print("\n== C. Unbilled (net due from customers, standalone, AR24 p87 / AR25 p111 / AR26 p59) vs revenue")
nd={"Mar-23":299.14,"Mar-24":300.64,"Mar-25":467.66,"Mar-26":563.51}
rec={"Mar-23":148.86,"Mar-24":178.48,"Mar-25":211.56,"Mar-26":238.10}
rev={"Mar-23":767.47,"Mar-24":763.40,"Mar-25":1075.24,"Mar-26":948.53}
pay={"Mar-23":336.28,"Mar-24":364.14,"Mar-25":479.22,"Mar-26":641.35}
print("net unbilled Mar-24->Mar-26 growth %.1f%% ; standalone revenue FY24->FY26 %.1f%%"%(pct(nd['Mar-26'],nd['Mar-24']),pct(rev['Mar-26'],rev['Mar-24'])))
for k in nd:
    a=(rec[k]+nd[k])/rev[k]*365; b=(rec[k]+nd[k]-pay[k])/rev[k]*365
    print(f"{k}: receivable+net unbilled days {a:6.1f}; less trade payables {b:6.1f}  (standalone, EPC+RE, NOT the company's 45-day measure)")
print("\n== D. CRISIL EPC receivable days as printed (three different values for FY24)")
print("FY24: 93 (26 Jul 2024), 71 (21 Oct 2024), 88 (15 Jan 2026 as 'a year before' FY25's 72)")
print("\n== E. Order book (company) Jun-23..Jun-26 Rs Cr")
ob=[1980,2854,3613,3365,3482,3267,3179,2825,2902,2800,2825,2717,2850]
print("peak",max(ob),"latest",ob[-1],"change from peak %.1f%%"%pct(ob[-1],max(ob)))
print("\n== F. Cash credit consolidated (AR26 PDF p103 image): 1,077.06 -> 4,474.37 lakh =",round(4474.37/100,2),"Cr; x%.1f"%(4474.37/1077.06))
