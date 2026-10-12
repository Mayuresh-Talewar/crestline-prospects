# page-image values (lakh) -> Cr, for the printed ageing and growth figures
r26=dict(nd=47297.77,b0=23342.35,b1=4437.95,y1=8148.93,y2=1767.78,y3=2643.54,tot=87638.33)
r25=dict(nd=31911.06,b0=13070.48,b1=3939.19,y1=3397.72,y2=659.68,y3=1984.83,tot=54962.96)
for n,d in (("FY26",r26),("FY25",r25)):
    s=sum(v for k,v in d.items() if k!="tot"); assert abs(s-d["tot"])<0.02,(n,s)
    over1=d["y1"]+d["y2"]+d["y3"]; pd=d["tot"]-d["nd"]
    print(n,{k:round(v/100,2) for k,v in d.items()},"over1y %.2f pastdue %.2f"%(over1/100,pd/100))
p26=dict(nd=25223.28,y0=13869.38,y1=214.47,y2=198.74,y3=577.84,tot=40083.71)
p25=dict(nd=28796.53,y0=10928.24,y1=452.52,y2=527.29,y3=403.14,tot=41107.72)
for n,d in (("PAY26",p26),("PAY25",p25)):
    s=sum(v for k,v in d.items() if k!="tot"); assert abs(s-d["tot"])<0.02,(n,s)
    print(n,{k:round(v/100,2) for k,v in d.items()},"over1y %.2f"%((d["y1"]+d["y2"]+d["y3"])/100))
print("rev growth %.2f%%"%((298945.24/246828.01-1)*100),"rec growth %.2f%%"%((84029.60/52801.04-1)*100))
print("stuck", round((84029.60+ (43835.08-3800.56))/100,2))
print("advances", 36668.31/100, 79641.89/100, "retention", (15160.03+5940.07)/100, (12696.40+4828.33)/100)
print("rec 2yr: 335.10->840.30")
