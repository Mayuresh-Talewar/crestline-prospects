# RE-1 calculator: every computed number in rulka/*.md comes from this file.
# Run: python -I src/re-calc.py > src/re-calc-output.txt   (from the rulka folder)
# Inputs are typed from page IMAGES of the filings in src/d/. Units: Rs lakh unless stated.
# AR26 = FY26 Annual Report (NSE, filed 07 Sep 2026), standalone; FY25 column = restated comparative.
# AR25 = FY25 Annual Report (NSE, filed 08 Sep 2025), standalone, original vintage (Rs thousand -> lakh /100).

def cr(lakh): return lakh / 100
def days(bal, flow): return bal / flow * 365
def pct(a, b): return (a / b - 1) * 100
def p(label, v, unit=""): print(f"{label}: {v:,.2f}{unit}")

# ---------- AR26 statements (p89 BS, p90 P&L, p91 CF, notes p97-p106) ----------
A26 = dict(  # FY26, FY25 restated
    rev=(11020.26, 7972.54), oth=(5.52, 7.08), tot=(11025.78, 7979.63),
    mat=(9421.36, 6723.85), chg_inv=(112.65, 25.44), emp=(719.24, 610.84), fin=(101.18, 85.27),
    dep=(33.75, 26.26), oexp=(209.87, 183.56), totexp=(10598.05, 7655.21),
    pbt=(427.73, 324.41), pat=(328.86, 225.56),
    purch=(8447.50, 6245.22),  # note 21 purchases of goods and services
    equity=(3742.08, 3413.22), ltb=(1.47, 19.11), stb=(478.50, 856.83), wcl=(460.86, 839.19),
    tp_bs=((1761.11, 795.30), (777.57, 454.45)), tp_note=((1761.11, 795.30), (684.44, 547.58)),
    ocl=(426.56, 421.85), adv_cust=(222.93, 140.00),
    inv=(2058.82, 1962.25), inv_rm=(1266.17, 1056.94), inv_wip=(792.65, 905.30),
    tr=(3583.52, 2615.46), tr_over6m=(959.20, 94.31), retention=(499.96, 373.75),
    vend_adv=(438.25, 487.81), cash=(57.69, 25.53), obb=(65.51, 35.78),
    ocf=(611.76, -1503.94), wc_int=(88.59, 72.42),
    total_bs=(7268.79, 6001.82),
    ncl=(53.28, 69.79), cl=(3473.43, 2518.80), nca=(893.33, 776.15), ca=(6375.47, 5225.67),
    reported_days=dict(inv=(76.97, 69.58), tr=(102.66, 117.12), tp=(81.85, 74.78), nwc=(96.12, 123.93)),
)
# AR26 note 14 ageing FY26 (from due date)
AGE26 = dict(lt6m=2624.32, m6_1y=630.37, y1_2=283.82, y2_3=3.56, gt3=41.45)
# AR26 note 32 bank stock statement, Mar-26
STMT = dict(books=3085.93, bank=3757.61)

# ---------- AR25 original (p81 BS, p82 P&L, p83 CF, p90 borrowings), Rs thousand ----------
k = lambda x: x / 100
A25 = dict(  # FY25 original, FY24
    rev=(k(794710.76), k(709791.77)), pat=(k(22556.32), k(61106.65)), pbt=(k(32441.50), k(83580.53)),
    inv=(k(105694.38), k(61111.74)), tr=(k(352076.38), k(250115.85)),
    tp=(k(77756.93) + k(37947.53), k(101054.01) + k(31640.59)),
    stb=(k(85682.71), k(86357.54)), ltb=(k(1910.85), k(24052.06)), ocf=(k(-149128.62), k(-58312.22)),
    fin=(k(8634.99), k(6889.50)), dep=(k(2625.53), k(1513.69)),
)

print("== 1. Footing checks (AR26) ==")
for i, yr in enumerate(("FY26", "FY25r")):
    liab = A26["equity"][i] + A26["ncl"][i] + A26["cl"][i]
    assets = A26["nca"][i] + A26["ca"][i]
    p(f"{yr} liabilities side", liab); p(f"{yr} assets side", assets)
    assert abs(liab - A26["total_bs"][i]) < 0.05 and abs(assets - A26["total_bs"][i]) < 0.05
    pl = A26["tot"][i] - A26["totexp"][i]
    p(f"{yr} total income less total expenses", pl); assert abs(pl - A26["pbt"][i]) < 0.05
assert abs(sum(AGE26.values()) - A26["tr"][0]) < 0.05; p("FY26 ageing buckets sum", sum(AGE26.values()))
print("CF inventory movement equals BS change:", round(A26["inv"][0] - A26["inv"][1], 2), "(CF shows 96.57)")

print("\n== 2. Headline in crore ==")
for key in ("rev", "tot", "pat", "pbt"):
    p(f"{key} FY26 Cr", cr(A26[key][0])); p(f"{key} FY25r Cr", cr(A26[key][1]))
p("Revenue growth FY26 vs FY25r %", pct(A26["rev"][0], A26["rev"][1]))
p("PAT growth FY26 vs FY25r %", pct(A26["pat"][0], A26["pat"][1]))
for i, yr in enumerate(("FY26", "FY25r")):
    e = A26["pbt"][i] + A26["fin"][i] + A26["dep"][i]
    p(f"EBITDA {yr} (PBT+finance+D&A, company's own May-2025 method) lakh", e)
    p(f"EBITDA {yr} margin on revenue from ops %", e / A26["rev"][i] * 100)
    p(f"EBITDA {yr} excl other income lakh", e - A26["oth"][i])
p("OCF FY26 Cr", cr(A26["ocf"][0])); p("OCF FY25r Cr", cr(A26["ocf"][1]))
p("OCF FY26 / PAT x", A26["ocf"][0] / A26["pat"][0])

print("\n== 3. Balances in crore (AR26) ==")
for key in ("tr", "inv", "inv_rm", "inv_wip", "retention", "vend_adv", "adv_cust", "tr_over6m"):
    p(f"{key} FY26 Cr", cr(A26[key][0])); p(f"{key} FY25r Cr", cr(A26[key][1]))
for i, yr in enumerate(("FY26", "FY25r")):
    tpb = sum(A26["tp_bs"][i]); tpn = sum(A26["tp_note"][i])
    p(f"Trade payables {yr} BS face Cr", cr(tpb)); p(f"Trade payables {yr} note 9 Cr", cr(tpn))
    debt = A26["ltb"][i] + A26["stb"][i]
    p(f"Total borrowings {yr} Cr", cr(debt)); p(f"Debt/equity {yr} x", debt / A26["equity"][i])
p("Borrowing reduction %", pct(A26["ltb"][0] + A26["stb"][0], A26["ltb"][1] + A26["stb"][1]))
p("Cash + other bank FY26 Cr", cr(A26["cash"][0] + A26["obb"][0]))
p("Receivables over 6 months share FY26 %", A26["tr_over6m"][0] / A26["tr"][0] * 100)
p("Receivables over 6 months share FY25r %", A26["tr_over6m"][1] / A26["tr"][1] * 100)
p("Receivables over 6 months growth x", A26["tr_over6m"][0] / A26["tr_over6m"][1])
p("Receivables 1 year and older FY26 lakh", AGE26["y1_2"] + AGE26["y2_3"] + AGE26["gt3"])
p("MSME share of trade payables FY26 %", A26["tp_bs"][0][0] / sum(A26["tp_bs"][0]) * 100)
p("BS vs note 9 FY25 MSME split gap lakh", A26["tp_bs"][1][0] - A26["tp_note"][1][0])

print("\n== 4. Days (365) ==")
cogs = [A26["mat"][i] + A26["chg_inv"][i] for i in (0, 1)]
avg = lambda key: (A26[key][0] + A26[key][1]) / 2
tp_avg = (sum(A26["tp_bs"][0]) + sum(A26["tp_bs"][1])) / 2
p("Rebuilt company DSO FY26 (avg TR / revenue)", days(avg("tr"), A26["rev"][0]))
p("Rebuilt company DIO FY26 (avg inv / material+change in inv)", days(avg("inv"), cogs[0]))
p("Rebuilt company DPO FY26 (avg TP / purchases)", days(tp_avg, A26["purch"][0]))
p("Company reported FY26 DSO/DIO/DPO", 0)
print("   ", A26["reported_days"])
p("Rebuilt FY26 CCC (DSO + DIO minus DPO), average basis",
  days(avg("tr"), A26["rev"][0]) + days(avg("inv"), cogs[0]) - days(tp_avg, A26["purch"][0]))
fy24_tr_implied = 2 * A26["reported_days"]["tr"][1] * A26["rev"][1] / 365 - A26["tr"][1]
p("FY24 opening TR implied by company's FY25 DSO of 117.12 (lakh)", fy24_tr_implied)
p("FY24 TR in AR25 original (lakh)", A25["tr"][1])
for i, yr in enumerate(("FY26", "FY25r")):
    dso = days(A26["tr"][i], A26["rev"][i]); dio = days(A26["inv"][i], cogs[i])
    dpo = days(sum(A26["tp_bs"][i]), A26["purch"][i])
    p(f"Closing DSO {yr}", dso); p(f"Closing DIO {yr}", dio); p(f"Closing DPO {yr}", dpo)
    p(f"Closing CCC {yr}", dso + dio - dpo)
    p(f"Retention days of revenue {yr}", days(A26["retention"][i], A26["rev"][i]))
    p(f"WIP days of revenue {yr}", days(A26["inv_wip"][i], A26["rev"][i]))
    p(f"Advance from customers days of revenue {yr}", days(A26["adv_cust"][i], A26["rev"][i]))
    gross = A26["tr"][i] + A26["inv"][i] + A26["retention"][i] + A26["vend_adv"][i]
    net = gross - sum(A26["tp_bs"][i]) - A26["adv_cust"][i]
    p(f"Trade working capital {yr} (TR+inv+retention+vendor adv-TP-cust adv) Cr", cr(net))
    p(f"Trade working capital {yr} days of revenue", days(net, A26["rev"][i]))
print("Management call figures (June 2026): CCC 143 -> 97, debtor 120 -> 103, inventory 90 -> 67 (not rebuilt here)")
p("Mgmt CCC reduction days", 143 - 97)

print("\n== 5. Rates ==")
print("Disclosed: term loan 8.25% p.a. (AR26 p97); OD repo 6.50 + 3.00 (AR25 p90); MSME loans 9.25% (AR25 p90)")
p("OD rate as stated in AR25, repo + spread %", 6.50 + 3.00)
avg_wcl = (A26["wcl"][0] + A26["wcl"][1]) / 2
p("Implied WC interest / avg WC loan FY26 % (COMPUTED, never print as theirs)", A26["wc_int"][0] / avg_wcl * 100)
p("Value of one day of revenue FY26 lakh", A26["rev"][0] / 365)
p("Carry of one day of revenue at 8.25% per year, lakh", A26["rev"][0] / 365 * 0.0825)
p("Carry of one day of revenue at 9.50% per year, lakh", A26["rev"][0] / 365 * 0.095)

print("\n== 6. Vintages: FY25 original (AR25) vs FY25 restated (AR26) ==")
for key in ("rev", "pat", "inv", "tr", "ocf"):
    p(f"{key} FY25 original", A25[key][0]); p(f"{key} FY25 restated", A26[key][1])
    p(f"{key} difference (restated minus original)", A26[key][1] - A25[key][0])
p("TP FY25 original", A25["tp"][0]); p("TP FY25 restated", sum(A26["tp_bs"][1]))
p("TR moved out = WIP moved in? (orig TR minus restated TR)", A25["tr"][0] - A26["tr"][1])
print("   restated WIP FY25:", A26["inv_wip"][1], "| restated RM FY25:", A26["inv_rm"][1], "| original inventory:", round(A25["inv"][0], 2))
p("FY24 revenue Cr (AR25)", cr(A25["rev"][1])); p("FY24 PAT Cr (AR25)", cr(A25["pat"][1]))
p("FY25 orig revenue growth vs FY24 %", pct(A25["rev"][0], A25["rev"][1]))
p("FY25 PAT change vs FY24 %", pct(A25["pat"][0], A25["pat"][1]))
p("FY24 EBITDA (PBT+fin+D&A) lakh", A25["pbt"][1] + A25["fin"][1] + A25["dep"][1])
for i, yr in enumerate(("FY25o", "FY24")):
    p(f"Closing DSO {yr} (original basis)", days(A25["tr"][i], A25["rev"][i]))
    p(f"OCF {yr} Cr (original)", cr(A25["ocf"][i]))
    p(f"Borrowings {yr} Cr (original)", cr(A25["stb"][i] + A25["ltb"][i]))

print("\n== 7. Other ==")
p("Bank stock statement gap Mar-26 lakh", STMT["bank"] - STMT["books"])
p("Bank gap as % of books", (STMT["bank"] - STMT["books"]) / STMT["books"] * 100)
p("Order book / FY26 revenue x", 14385 / A26["rev"][0])
p("IPO total lakh (fresh 1979.64 + OFS 659.88)", 1979.64 + 659.88)
p("IPO fresh issue price check (1979.64 lakh / 842400 sh) Rs", 1979.64e5 / 842400)
p("Preferential equity 650000 x 109.50 Rs Cr", 650000 * 109.50 / 1e7)
p("Warrants 7740808 x 109.50 Rs Cr", 7740808 * 109.50 / 1e7)
p("Nov-2025 orders in hand vs Dec-2025 call unexecuted, Cr gap", 144 - 92)

print("\n== 8. Disconfirm: what moved the cycle (closing basis, AR26 both years) ==")
c = {}
for i, yr in enumerate(("FY26", "FY25r")):
    c[yr] = (days(A26["tr"][i], A26["rev"][i]), days(A26["inv"][i], cogs[i]), days(sum(A26["tp_bs"][i]), A26["purch"][i]))
p("DSO change days", c["FY26"][0] - c["FY25r"][0])
p("DIO change days", c["FY26"][1] - c["FY25r"][1])
p("DPO change days (a rise shortens the cycle)", c["FY26"][2] - c["FY25r"][2])
p("CCC change days", (c["FY26"][0] + c["FY26"][1] - c["FY26"][2]) - (c["FY25r"][0] + c["FY25r"][1] - c["FY25r"][2]))
CF26 = dict(tp_up=1324.37, tr_up=-968.06)  # AR26 p91 working capital lines
p("FY26 OCF without the rise in trade payables lakh", A26["ocf"][0] - CF26["tp_up"])
p("Rise in MSME payables FY26 lakh (BS face)", A26["tp_bs"][0][0] - A26["tp_bs"][1][0])
p("Closing DSO FY24 to FY25 original change days", days(A25["tr"][0], A25["rev"][0]) - days(A25["tr"][1], A25["rev"][1]))

if __name__ == "__main__":
    # self-check: a known identity must hold or the inputs were mistyped
    assert abs((A25["tr"][0] - A26["tr"][1]) - A26["inv_wip"][1]) < 0.05
    assert abs((A26["ltb"][0] + A26["stb"][0]) - 479.97) < 0.01
    print("\nself-checks passed")
