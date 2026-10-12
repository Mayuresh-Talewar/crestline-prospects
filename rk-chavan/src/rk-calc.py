# All inputs from CRISIL rationale 30 Jun 2026 (src/d/crisil_jun2026.html). Run: python -I rk-calc.py > rk-calc-output.txt
rev24, rev25, rev26 = 457.65, 524.35, 700.0   # Rs Cr; FY26 "around Rs. 700 crores" (estimate), FY25 text says 524
pat24, pat25 = 27.85, 30.23
def p(k, v): print(f"{k}: {v}")
p("rev growth FY25 vs FY24 %", round((rev25/rev24-1)*100, 2))
p("rev growth FY26 est vs FY25 (524.35) %", round((rev26/rev25-1)*100, 2))
p("rev growth FY26 est vs FY25 (524 as printed) %", round((rev26/524-1)*100, 2))
p("PAT margin FY25 %", round(pat25/rev25*100, 2))
p("PAT margin FY24 %", round(pat24/rev24*100, 2))
p("PAT growth FY25 vs FY24 %", round((pat25/pat24-1)*100, 2))
p("CAGR FY22->FY26 (4 yrs implied by 'nearly 20%') needs FY22: not in doc", "n/a")
bg=[7.5,135,2,20]; cc=[7.5,2.5,15,50,25]; dl=[35,46]
p("BG lenders sum", sum(bg)); p("CC lenders sum", sum(cc)); p("DLOD lenders sum", sum(dl))
fund=100+81+1; nonfund=164.5+0.5
p("fund-based facilities (CC+DLOD+proposed CC)", fund); p("non-fund (BG+proposed)", nonfund)
p("total rated", fund+nonfund)
p("check vs printed 347", abs(fund+nonfund-347)<1e-9)
p("DLOD share of fund-based %", round(81/fund*100,1))
p("EPC order book / FY26 revenue (years)", round(2595/rev26,2))
p("EPC + toll book Rs Cr", 2595+625)
p("revenue per day FY26 est Rs Cr", round(rev26/365,3))
p("debtors 100d / 140d at that rate Rs Cr (illustrative, basis of days not stated)", (round(100*rev26/365,1), round(140*rev26/365,1)))
p("inventory 70d / 90d Rs Cr (illustrative)", (round(70*rev26/365,1), round(90*rev26/365,1)))
p("GCA days change FY25->FY26", 250-187)
p("GCA 250d at rate Rs Cr (illustrative)", round(250*rev26/365,1))
p("cash accruals 60 vs term debt 24-33: cover x", (round(60/33,2), round(60/24,2)))
p("interest cover FY25 doc table vs text", (4.79, 5.10))
assert round((rev26/524-1)*100) == 34
