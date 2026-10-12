# AGC Infracon research calc. All inputs from Infomerics PR 23 Apr 2025 (p5, p2, p4, Annexure II). Rs crore.
rev23, rev24 = 513.30, 567.63
ebitda23, ebitda24 = 49.17, 58.96
pat23, pat24 = 32.57, 38.39
debt23, debt24 = 46.27, 51.33
tnw23, tnw24 = 56.72, 69.02
ob = 1702.68
m9_25, m9_24 = 341.34, 325.85
cc, od, gecl, bg = 20.00, 30.00, 0.98, 185.00
lenders_bg = [60.00, 50.00, 40.00, 35.00]
lenders_od = [10.00, 5.00, 15.00]  # OD rows; HDFC OD 10, AU 5, Kotak 15 -> see assert
r = lambda x, n=2: round(x, n)
out = {
 "rev growth FY24 %": r((rev24/rev23-1)*100),
 "EBITDA margin FY23 %": r(ebitda23/rev23*100),
 "EBITDA margin FY24 %": r(ebitda24/rev24*100),
 "PAT margin FY23 %": r(pat23/rev23*100),
 "PAT margin FY24 %": r(pat24/rev24*100),
 "PAT growth FY24 %": r((pat24/pat23-1)*100),
 "gearing FY23 x": r(debt23/tnw23),
 "gearing FY24 x": r(debt24/tnw24),
 "9M FY25 vs 9M FY24 growth %": r((m9_25/m9_24-1)*100),
 "order book / FY24 revenue x": r(ob/rev24),
 "order book in months of FY24 revenue": r(ob/(rev24/12), 1),
 "revenue per day FY24 (Rs cr)": r(rev24/365, 3),
 "revenue per day FY24 (Rs lakh)": r(rev24/365*100, 1),
 "implied annual run rate if OB done in 15 months (Rs cr)": r(ob/15*12, 0),
 "implied annual run rate if OB done in 18 months (Rs cr)": r(ob/18*12, 0),
 "fund based limits CC+OD+GECL (Rs cr)": r(cc+od+gecl),
 "non fund BG (Rs cr)": r(bg),
 "total rated (Rs cr)": r(cc+od+gecl+bg),
 "BG sum from lender table": r(sum(lenders_bg)),
 "BG per Rs 100 revenue (Rs)": r(bg/rev24*100),
 "fund based limits per day of revenue (days)": r((cc+od+gecl)/(rev24/365), 1),
 "current ratio FY24 reclass bridge: Rs 15.65 cr as % of FY24 revenue": r(15.65/rev24*100),
}
assert abs(sum(lenders_bg)-bg) < 1e-9 and abs(sum(lenders_od)-od) < 1e-9
assert abs(out["gearing FY24 x"]-0.74) < 0.005 and abs(out["EBITDA margin FY24 %"]-10.39) < 0.005
for k, v in out.items(): print(f"{k}: {v}")
