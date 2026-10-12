# lakh values read from page images -> Cr
L={"rev26":29261.90,"rev25":28957.04,"pat26":1813.36,"pat25":1989.39,"ocf26":1349.48,"ocf25":-3329.38,
"ltb26":2110.36,"stb26":7541.91,"ltb25":2408.52,"stb25":4788.11,"msme26":124.18,"oth26":7238.41,"msme25":467.10,"oth25":9075.50,
"msme24":231.03,"oth24":4500.83,"fin26":1254.38,"fin25":1238.72,"cash26":1960.54,"cash25":4891.63,"svc26":6998.75,"svc25":4512.28,
"custadv25":1070.84,"supadv25":2360.14,"supadv24":1204.69,"oth25u1":8945.32,"oth25_1_2":78.49,"oth25_2_3":51.69}
c={k:round(v/100,2) for k,v in L.items()}
print(c)
print("borrow26",round((L["ltb26"]+L["stb26"])/100,2),"borrow25",round((L["ltb25"]+L["stb25"])/100,2))
print("pay26",round((L["msme26"]+L["oth26"])/100,2),"pay25",round((L["msme25"]+L["oth25"])/100,2),"pay24",round((L["msme24"]+L["oth24"])/100,2))
print("svc share26",round(L["svc26"]/L["rev26"]*100,1),"svc share25",round(L["svc25"]/L["rev25"]*100,1))
pd=292.62/365
print("per day",round(pd,4),"10d",round(pd*10,2),"30d",round(pd*30,2))
print("EPC+fab",266.30+75.97)
