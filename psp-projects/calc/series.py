# standalone, Rs lakh from AR24 (FY23,FY24), AR25 (FY25), AR26 (FY26) page images; shown in Rs Cr
Y=["FY23","FY24","FY25","FY26"]
rev=[192664.91,246249.80,246828.01,298945.24]
mat=[59941.76,93560.14,77412.87,106016.82]
chg=[-2207.15,-16917.83,3198.97,2149.31]
con=[100470.38,126677.43,132119.79,150127.29]
rec=[43420.92,33509.62,52801.04,84029.60]
inv=[15163.55,31602.59,32257.21,34374.99]
pay=[2342.74+34414.49,1791.56+39792.89,1851.04+39256.68,4798.24+35285.47]
cash=[9384.51,11113.88,7966.79,25798.37]
ocf=[4308.62,-22673.33,5452.25,33741.48]
unb=[None,None,52222.22-748.07,43835.08-3800.56]
for i,y in enumerate(Y):
    cogs=mat[i]+chg[i]; base=cogs+con[i]
    dso=rec[i]/rev[i]*365; dio=inv[i]/cogs*365; dpo=pay[i]/base*365
    cad=None if unb[i] is None else unb[i]/rev[i]*365
    cyc=None if cad is None else dio+cad+dso-dpo
    print(y,f"rev {rev[i]/100:.2f} rec {rec[i]/100:.2f} inv {inv[i]/100:.2f} pay {pay[i]/100:.2f} cash {cash[i]/100:.2f} ocf {ocf[i]/100:.2f} ntwc {(rec[i]+inv[i]-pay[i])/100:.2f}")
    print("   DSO %.1f DIO %.1f DPO %.1f CAD %s cycle %s cogs %.2f"%(dso,dio,dpo,"%.1f"%cad if cad else "NA","%.1f"%cyc if cyc else "NA",cogs/100))
print("per day FY26 rev %.4f mat %.4f"%(rev[3]/36500,(mat[3]+chg[3])/36500))
print("cash+other bank FY26", (25798.37+15533.21)/100)
print("rec +%.0f%% FY25->FY26"%((rec[3]/rec[2]-1)*100), "rev +%.1f%%"%((rev[3]/rev[2]-1)*100))
print("target gap days", 102.6-70, "x8.19=",(102.6-70)*8.19)
