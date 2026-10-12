"""TH-1 calculations for Thermax Limited. Every input is typed from a page image cited beside it.
Run: python -I thermax/src/th-calc.py > thermax/src/th-calc-output.txt
All amounts Rs crore. Days use 365 and full-year revenue from operations of the SAME entity and SAME vintage.
"""
import sys
sys.stdout.reconfigure(encoding="utf-8")

def d(x, rev):  # balance expressed as days of revenue
    return x / rev * 365

def pct(a, b):
    return a / b * 100

out = []
def p(label, v, fmt="{:,.2f}"):
    out.append(f"{label}: {fmt.format(v)}")

# ---------- STANDALONE FY26 / FY25 (AR26, PDF p195-221, printed pp356-409; filed NSE 03-Jul-2026) ----------
S26 = dict(rev=6518.26, oi=284.56, pbt_pre_exc=707.02, fin=24.87, da=97.19, pat=648.91,
           tr=1524.25, ca=496.99, inv=481.55, tp=1420.84, msme=616.19, msme_notdue=565.78,
           unearned=142.68, adv=1025.26, borr=25.00 + 100.16, ocf=416.48, cash=100.14)
S25 = dict(rev=6244.53, oi=202.53, pbt_pre_exc=619.41, fin=31.53, da=73.64, pat=572.14,
           tr=1407.92, ca=371.47, inv=379.30, tp=1101.56 + 52.52, msme=472.00, msme_notdue=415.69,
           unearned=382.20, adv=828.43, borr=25.00 + 59.51, ocf=373.17)
for tag, s in (("STANDALONE FY26", S26), ("STANDALONE FY25 (AR26 comparative)", S25)):
    out.append(f"== {tag} ==")
    p("EBITDA incl other income (PBT pre-exc + finance cost + D&A)", s["pbt_pre_exc"] + s["fin"] + s["da"])
    p("EBITDA excl other income", s["pbt_pre_exc"] + s["fin"] + s["da"] - s["oi"])
    p("EBITDA margin excl OI %", pct(s["pbt_pre_exc"] + s["fin"] + s["da"] - s["oi"], s["rev"]))
    p("Trade receivable days", d(s["tr"], s["rev"]), "{:.1f}")
    p("Contract asset days", d(s["ca"], s["rev"]), "{:.1f}")
    p("Inventory days (on revenue)", d(s["inv"], s["rev"]), "{:.1f}")
    p("Trade payable days (on revenue)", d(s["tp"], s["rev"]), "{:.1f}")
    p("Contract liability days (unearned + advances)", d(s["unearned"] + s["adv"], s["rev"]), "{:.1f}")
    nwc = s["tr"] + s["ca"] + s["inv"] - s["tp"] - s["unearned"] - s["adv"]
    p("Operating NWC (TR+CA+Inv-TP-contract liabilities)", nwc)
    p("Operating NWC days", d(nwc, s["rev"]), "{:.1f}")
    p("MSME dues past due (MSME total less not due)", s["msme"] - s["msme_notdue"])
    p("OCF / EBITDA excl OI %", pct(s["ocf"], s["pbt_pre_exc"] + s["fin"] + s["da"] - s["oi"]))
    p("Value of one day of revenue", s["rev"] / 365)
    p("Borrowings total", s["borr"])

# standalone receivable ageing FY26 (AR26 printed p381)
age = dict(unbilled=14.79, notdue=915.22, lt6m=478.53, m6_1y=124.33, y1_2=84.49, y2_3=28.24, gt3=63.93)
tot = sum(age.values())
p("Standalone FY26 gross TR ageing total (check 1,709.53)", tot)
overdue = tot - age["unbilled"] - age["notdue"]
p("Standalone FY26 overdue gross", overdue)
p("Standalone FY26 overdue % of gross", pct(overdue, tot))
p("Standalone FY26 overdue > 1 year", age["y1_2"] + age["y2_3"] + age["gt3"])
p("Standalone impairment allowance % of gross TR", pct(185.28, 1709.53))
p("Standalone contract asset loss allowance % of gross CA", pct(124.52, 621.51))
p("Standalone MSME paid beyond appointed day FY26 vs FY25 change", 294.31 - 548.06)

# ---------- CONSOLIDATED FY26 / FY25 restated (AR26 PDF p130-172, printed pp226-311) ----------
C26 = dict(rev=10694.15, oi=267.48, pbt_pre_exc=946.73, fin=138.96, da=207.64, pat=720.26,
           tr=2204.84, ca=773.08, inv=909.50, tp=938.15 + 1119.23, unearned=145.32, adv=1899.53,
           borr=1615.83 + 672.18, ocf=541.55, cash=674.45, obank=516.21, cur_inv=1276.74, nc_inv=497.48)
C25 = dict(rev=10369.26, oi=252.22, pbt_pre_exc=884.47, fin=116.78, da=158.51, pat=626.70,
           tr=2003.01, ca=640.56, inv=716.55, tp=749.78 + 943.10 + 54.37, unearned=545.51, adv=1469.20,
           borr=1161.55 + 531.79, ocf=1079.79)
for tag, s in (("CONSOLIDATED FY26", C26), ("CONSOLIDATED FY25 (AR26 restated comparative)", C25)):
    out.append(f"== {tag} ==")
    e = s["pbt_pre_exc"] + s["fin"] + s["da"]
    p("EBITDA incl other income", e)
    p("EBITDA excl other income", e - s["oi"])
    p("EBITDA margin excl OI %", pct(e - s["oi"], s["rev"]))
    p("PAT margin %", pct(s["pat"], s["rev"]))
    p("Trade receivable days", d(s["tr"], s["rev"]), "{:.1f}")
    p("Contract asset days", d(s["ca"], s["rev"]), "{:.1f}")
    p("Inventory days (on revenue)", d(s["inv"], s["rev"]), "{:.1f}")
    p("Trade payable days (on revenue)", d(s["tp"], s["rev"]), "{:.1f}")
    p("Contract liability days", d(s["unearned"] + s["adv"], s["rev"]), "{:.1f}")
    nwc = s["tr"] + s["ca"] + s["inv"] - s["tp"] - s["unearned"] - s["adv"]
    p("Operating NWC", nwc)
    p("Operating NWC days", d(nwc, s["rev"]), "{:.1f}")
    p("OCF / EBITDA excl OI %", pct(s["ocf"], e - s["oi"]))
    p("Finance cost / borrowings % (rough, closing debt)", pct(s["fin"], s["borr"]))
    p("Value of one day of revenue", s["rev"] / 365)
p("Consol FY26 cash + other bank + current investments", C26["cash"] + C26["obank"] + C26["cur_inv"])
p("Consol FY26 OCF change vs FY25 %", pct(C26["ocf"] - C25["ocf"], C25["ocf"]))
p("Consol FY26 borrowings change", C26["borr"] - C25["borr"])
cage = dict(unbilled=46.56, notdue=1010.21, lt6m=931.09, m6_1y=135.06, y1_2=195.86, y2_3=72.37, gt3=109.04)
ct = sum(cage.values())
p("Consol FY26 gross TR ageing total (check 2,500.19)", ct)
p("Consol FY26 overdue gross", ct - cage["unbilled"] - cage["notdue"])
p("Consol FY26 overdue % of gross", pct(ct - cage["unbilled"] - cage["notdue"], ct))
p("Consol FY26 overdue > 1 year", cage["y1_2"] + cage["y2_3"] + cage["gt3"])
cage25 = dict(unbilled=21.64, notdue=858.72, lt6m=896.81, m6_1y=202.51, y1_2=162.25, y2_3=56.38, gt3=116.93)
c25t = sum(cage25.values())
p("Consol FY25 gross TR ageing total (check 2,315.24)", c25t)
p("Consol FY25 overdue % of gross", pct(c25t - cage25["unbilled"] - cage25["notdue"], c25t))
p("Consol MSME undisputed past due FY26 (937.42 less 857.50)", 937.42 - 857.50)
p("Consol contract asset loss allowance % of gross CA", pct(168.65, 941.73))

# ---------- VINTAGE CHECK: FY25 consolidated as originally reported (AR25 printed p208-211) ----------
out.append("== VINTAGE: FY25 consolidated original (AR25) vs restated (AR26) ==")
p("TR current+noncurrent original", 2417.50 + 147.85)
p("TR restated in AR26", 2003.01)
p("OCF original", 1042.79)
p("OCF restated", 1079.79)

# ---------- CONSOLIDATED FY24 / FY23 (AR24 printed p206-209; filed NSE 08-Jul-2024) ----------
out.append("== CONSOLIDATED FY24 / FY23 (AR24 vintage) ==")
p("FY24 TR days (cur+noncur)", d(2116.43 + 150.63, 9323.46), "{:.1f}")
p("FY23 TR days (cur+noncur)", d(1762.06 + 114.50, 8089.81), "{:.1f}")
p("FY24 OCF / PAT %", pct(247.30, 643.19))
p("FY23 OCF / PAT %", pct(459.56, 450.70))
p("FY25 OCF / PAT % (AR26 vintage)", pct(1079.79, 626.70))
p("FY26 OCF / PAT %", pct(541.55, 720.26))
p("Standalone FY24 TR days (cur+noncur)", d(1501.64 + 140.08, 5821.93), "{:.1f}")
p("Standalone FY23 TR days (cur+noncur)", d(1210.22 + 112.94, 5141.16), "{:.1f}")
p("Standalone FY24 OCF / PAT %", pct(90.79, 437.44))

# ---------- INDUSTRIAL INFRA SEGMENT (consolidated segment note) ----------
out.append("== INDUSTRIAL INFRA SEGMENT ==")
ii = {
    "FY26 (AR26 vintage)": dict(rev=4348.05, res=217.51, a=2490.28, l=2330.16),
    "FY25 (AR26 restated)": dict(rev=4694.45, res=110.08, a=2491.09, l=2353.60),
    "FY25 (AR25 original)": dict(rev=4714.56, res=110.08, a=2994.72, l=2862.14),
    "FY24 (AR24)": dict(rev=4455.21, res=208.91, a=2711.67, l=2324.40),
    "FY23 (AR24)": dict(rev=3928.00, res=216.77, a=2548.92, l=2374.97),
    "FY26 (Q1FY27 recast, Bioenergy moved out)": dict(rev=4088.34, res=250.37, a=2375.41, l=2236.84),
}
for k, s in ii.items():
    na = s["a"] - s["l"]
    out.append(f"{k}: PBIT margin {pct(s['res'], s['rev']):.1f}% | segment net assets {na:,.2f} | "
               f"net assets days {d(na, s['rev']):.1f} | gross segment assets days {d(s['a'], s['rev']):.1f} | "
               f"value of a day {s['rev']/365:,.2f}")
p("Q1 FY27 Industrial Infra PBIT margin % (recast)", pct(-70.66, 814.15))
p("Q1 FY27 Industrial Infra net assets", 2087.92 - 2184.90)
p("Industrial Infra order balance / FY26 segment revenue (years)", 7439 / 4348.05)

# ---------- order book cover ----------
out.append("== ORDERS ==")
p("Consol order balance 31-Mar-26 / FY26 revenue (years)", 13604 / 10694.15)
p("Order booking growth FY26 %", pct(13871 - 10337, 10337))
p("Standalone order balance / standalone FY26 revenue (years)", 6400 / 6518.26)
p("Anuppur order as % of consol order balance 31-Mar-26", pct(1600, 13604))

# ---------- interest: disclosed rates only, capped at the facility ----------
out.append("== INTEREST AT DISCLOSED RATES (scenario inputs, not savings) ==")
p("Standalone: annual interest at 7.30% on the Rs 25 cr term loan (cap)", 25 * 0.073)
p("Standalone: annual interest at 6.19% on Rs 100.16 cr packing credit (top of range, cap)", 100.16 * 0.0619)
p("Standalone: carry of one day of revenue for a year at 7.30% (only if cash repays debt)", S26["rev"] / 365 * 0.073)
p("Industrial Infra: one day of revenue", 4348.05 / 365)
p("Consolidated: carry of one day at 7.67% (unsecured FI line, Rs 199 cr cap)", C26["rev"] / 365 * 0.0767)

print("\n".join(out))
