# pc-calc.py: every computed figure in precast/data.md. Run: python -I pc-calc.py > pc-calc-output.txt
rev={"FY20":128.11,"FY21":130.92,"FY22":102.81,"FY23":104.8}   # Rs Cr, CRISIL 2020/2023 rationales
pat={"FY21":8.17,"FY22":8.48}
g=lambda a,b:(b/a-1)*100
print("FY21 vs FY20 rev growth %",round(g(rev["FY20"],rev["FY21"]),2))
print("FY22 vs FY21 rev growth %",round(g(rev["FY21"],rev["FY22"]),2))
print("FY23 vs FY22 rev growth % (FY23 figure as printed Aug 2023)",round(g(rev["FY22"],rev["FY23"]),2))
for y in pat: print(y,"PAT margin %",round(pat[y]/rev[y]*100,2))
print("PAT FY22 vs FY21 %",round(g(pat["FY21"],pat["FY22"]),2))
# dossier (Tracxn) FY25 = 158 at -27.83% YoY implies FY24:
fy24=158/(1-0.2783); print("Dossier-implied FY24 Rs Cr",round(fy24,1))
print("Dossier-implied FY24 vs CRISIL FY23 %",round(g(rev["FY23"],fy24),1))
print("Facility total Rs Cr",35+5+5,"; BG share %",round(35/45*100,1),"; proposed BG",5)
print("Nov 2020 facilities Rs Cr 72 -> 45 : change %",round(g(72,45),1))
print("FY20 cash+FD Rs Cr 29.27 as % of FY20 rev",round(29.27/rev["FY20"]*100,1))
