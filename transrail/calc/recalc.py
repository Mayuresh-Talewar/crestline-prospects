from decimal import Decimal as D
rev=D("6779.95")+D("100.16"); pd=rev/365
print("revenue",rev,"per day",round(pd,4))
for d in (10,30):
    c=d*pd; a=min(c,D("252.49")); print(d,"cash",round(c,2),"applied",round(a,2),"interest",round(a*D("10.31")/100,2))
print("dso",round(D("1737.68")/rev*365,2),"cad",round(D("2515.24")/rev*365,2))
print("cad share %",round(D("2515.24")/rev*100,2), "standalone", round(D("2515.24")/D("6878.63")*100,2))
print("rec growth",round((D("1739.48")/D("1317.14")-1)*100,2),"rev",round((D("6878.63")/D("5307.63")-1)*100,2))
print("cap",D("0")+D("252.49"))
