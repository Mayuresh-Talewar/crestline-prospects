"""JS-1 calculations for Jyoti Structures Limited (JSL). Every computed figure in data.md / depth.md comes from here.

Run:  python -I C:\\Users\\asus\\Desktop\\crestline-prospects\\jyoti\\src\\js-calc.py > ...\\src\\js-calc-output.txt
Inputs are typed from page images (image-checked) of the documents named beside each one.
Basis: STANDALONE unless labelled. Units: Rs crore unless labelled. Lakh inputs are converted here (1 crore = 100 lakh).
"""
import sys
sys.stdout.reconfigure(encoding="utf-8")

LAKH_PER_CR = 100.0
DAYS = 365


def cr(lakh):
    return lakh / LAKH_PER_CR


def pct(a, b):
    return 100.0 * a / b


def growth(new, old):
    return 100.0 * (new / old - 1.0)


def line(label, value, unit="", fmt="{:,.2f}"):
    print(f"{label}: {fmt.format(value)}{(' ' + unit) if unit else ''}")


# ---------------- inputs (standalone unless labelled) ----------------
# AR FY26 p89 (P&L), comparatives restated by the FY26 AR
rev26, oi26, ti26 = 750.87, 21.57, 772.44
pbt26, fin26, da26, pat26 = 54.72, 2.70, 12.55, 56.04
mat26, erect26 = 433.78, 197.68
rev25_r, oi25_r, ti25 = 498.04, 6.46, 504.50          # FY25 as restated in AR FY26
pbt25, fin25, da25, pat25 = 35.66, 0.12, 8.50, 35.81
# AR FY25 p80 (original vintage) and AR FY25 p130 (consolidated)
rev25_o, rev24 = 497.83, 451.38
pat24 = 29.44
cpat25, cpat24 = 35.57, 28.86                        # CONSOLIDATED PAT
# AR FY24 p97 (Rs lakh)
rev23 = cr(22923.12)
# Q1 FY27 results p2 (standalone, unaudited, filed 4 Aug 2026)
q1rev27, q1rev26, q1pat27, q1pat26 = 251.46, 156.19, 19.46, 11.16
q4rev26 = 234.36

# Receivables ageing from due date (net of ECL in the >3y bucket as the totals show)
age26 = {"<6m": 214.18, "6m-1y": 7.90, "1-2y": 9.03, "2-3y": 7.82, ">3y": 1984.17}   # AR FY26 p124
tot26 = 2223.10
age25_v26 = {"<6m": 176.04, "6m-1y": 59.92, "1-2y": 56.49, "2-3y": 7.09, ">3y": 1837.32}  # AR FY26 p124 (comparative)
age25_v25 = {"<6m": 129.92, "6m-1y": 69.13, "1-2y": 93.37, "2-3y": 7.09, ">3y": 1837.34}  # AR FY25 p116 (original)
tot25 = 2136.85
age24 = {"<6m": 72.80, "6m-1y": 25.27, "1-2y": 26.44, "2-3y": 0.0, ">3y": 1898.24}        # AR FY25 p116
tot24 = 2022.75
age23_lakh = {"<6m": 9322.36, "6m-1y": 20.00, "1-2y": 0.0, "2-3y": 0.0, ">3y": 189701.08}  # AR FY24 p132
tot23 = cr(199043.44)
gross26, ecl26 = 2237.85, 14.75                       # AR FY26 p96 note 6
branch_tr26 = 208.77                                  # AR FY26 p78, seven foreign branches
total_assets26 = 2913.09
recv_sep25 = 2187.45                                  # Q2 FY26 SoAL p3

inv26, inv25, inv24 = 146.01, 94.34, 71.81            # AR FY26 p96, AR FY25 p87
tp26_cur, tp25_cur = 116.20, 132.00                   # note 20 (current)
tp26_noncur = 15.00                                   # note 16 operational creditors, trade payable
msme26_age = {"<6m": 5.36, "6m-1y": 0.12, "1-2y": 0.02, "2-3y": 0.00, ">3y": 0.01}   # AR FY26 p126
adv26, adv25, adv24 = 92.92, 134.21, 93.77            # advances from customers, note 22
unbilled26 = 5.45                                     # note 11 iv
ocf = {"FY24": -19.34, "FY25": -177.08, "FY26": -268.97}  # AR FY25 p82, AR FY26 p91
cash26, cash25 = 97.33, 463.83
borrow26 = {"LT NCD": 1896.63, "LT financial creditors": 28.78, "ST NCD": 82.76,
            "ST financial creditors": 0.49, "ST project specific demand loan": 74.49}   # AR FY26 p99
bg26, bg25 = 123.52, 44.64                            # AR FY26 p114
ob_apr26 = 2274.0                                     # AR FY26 p15
ob_apr25_pr, ob_apr25_ar = 1900.0, 1800.0             # PR 28 May 2025 p2 ("over"), AR FY25 p14 ("in excess of")
orders_fy26 = {"turnkey 765/800 kV AC + HVDC lines, 765 kV substations": 639.08,
               "800 kV HVDC Bhadla III to Fatehpur": 288.38,
               "Mumbai Coastal Road EHV line works": 88.35}  # AR FY26 p15


def check_sum(name, buckets, total, tol=0.02):
    s = sum(buckets.values())
    ok = abs(s - total) <= tol
    print(f"[check] {name}: buckets sum {s:,.2f} vs stated total {total:,.2f} -> {'OK' if ok else 'MISMATCH'}")
    return s


print("=== 0. Table integrity checks ===")
check_sum("ageing Mar-26", age26, tot26)
check_sum("ageing Mar-25 (FY26 AR vintage)", age25_v26, tot25)
check_sum("ageing Mar-25 (FY25 AR vintage)", age25_v25, tot25)
check_sum("ageing Mar-24", age24, tot24)
age23 = {k: cr(v) for k, v in age23_lakh.items()}
check_sum("ageing Mar-23 (lakh converted)", age23, tot23)
print(f"[check] gross - ECL = {gross26 - ecl26:,.2f} vs net {tot26:,.2f}")
print(f"[check] EBITDA FY26 = PBT+finance+D&A = {pbt26 + fin26 + da26:,.2f} (PR 30 Apr 2026 states 69.97)")
print(f"[check] EBITDA FY25 = {pbt25 + fin25 + da25:,.2f} (PR states 44.28)")
print(f"[check] borrowings total = {sum(borrow26.values()):,.2f} (AR FY26 p92 states 2,083.17)")

for k, v in age23.items():
    line(f"Mar-23 ageing bucket {k} in crore (from lakh)", v, "Cr")
line("Mar-23 ageing total in crore (from lakh)", tot23, "Cr")
# Inventory 'other' lines: stores and consumables + bought-out components + scrap (AR FY25 p87, AR FY26 p96)
for yr, parts in (("Mar-24", (0.79, 4.89, 0.14)), ("Mar-25", (1.36, 5.10, 0.10)), ("Mar-26", (5.82, 6.44, 0.05))):
    line(f"{yr} stores + bought-out components + scrap", sum(parts), "Cr")

print("\n=== 1. Growth and margins ===")
line("FY23 revenue from operations (lakh to crore)", rev23, "Cr")
line("FY24 revenue growth vs FY23", growth(rev24, rev23), "%")
line("FY25 revenue growth, original vintage (497.83 vs 451.38)", growth(rev25_o, rev24), "%")
line("FY26 revenue growth vs FY25 restated (750.87 vs 498.04)", growth(rev26, rev25_r), "%")
line("FY26 total income growth (772.44 vs 504.50)", growth(ti26, ti25), "%")
line("FY25 standalone PAT growth (35.81 vs 29.44)", growth(pat25, pat24), "%")
line("FY25 CONSOLIDATED PAT growth (35.57 vs 28.86)", growth(cpat25, cpat24), "%")
line("FY26 standalone PAT growth (56.04 vs 35.81)", growth(pat26, pat25), "%")
ebitda26 = pbt26 + fin26 + da26
ebitda25 = pbt25 + fin25 + da25
line("FY26 EBITDA incl. other income", ebitda26, "Cr")
line("FY26 EBITDA excl. other income", ebitda26 - oi26, "Cr")
line("FY26 EBITDA excl. other income / revenue from operations", pct(ebitda26 - oi26, rev26), "%")
line("FY25 EBITDA excl. other income / revenue (restated)", pct(ebitda25 - oi25_r, rev25_r), "%")
line("Other income share of FY26 PBT", pct(oi26, pbt26), "%")
line("Q1 FY27 revenue growth vs Q1 FY26", growth(q1rev27, q1rev26), "%")
line("Q1 FY27 PAT growth vs Q1 FY26", growth(q1pat27, q1pat26), "%")
line("Q1 FY27 revenue vs Q4 FY26", growth(q1rev27, q4rev26), "%")
# Q4 FY25 standalone results p4 (filed 28 May 2025): quarter to 31-03-2025 against quarter to 31-03-2024
q4pat25, q4pat24, q4pbt25, q4pbt24 = 11.95, 14.66, 12.31, 5.09
line("Q4 FY25 standalone PAT change vs Q4 FY24", growth(q4pat25, q4pat24), "%")
line("Q4 FY25 standalone PBT change vs Q4 FY24", growth(q4pbt25, q4pbt24), "%")
line("Q4 FY25 CONSOLIDATED PAT change vs Q4 FY24 (11.93 vs 14.12, results p13)", growth(11.93, 14.12), "%")
line("Order book over 1,900 / FY25 revenue (dossier's 3.8x)", 1900.0 / rev25_o, "x")

print("\n=== 2. Receivables: legacy against running business ===")
for name, a, tot in (("Mar-23", age23, tot23), ("Mar-24", age24, tot24),
                     ("Mar-25 (FY26 vintage)", age25_v26, tot25), ("Mar-26", age26, tot26)):
    running = tot - a[">3y"]
    line(f"{name} >3y bucket share of net receivables", pct(a[">3y"], tot), "%")
    line(f"{name} running book (all buckets up to 3y)", running, "Cr")
line("Mar-26 >3y share of total assets", pct(age26[">3y"], total_assets26), "%")
line("Mar-26 receivables share of total assets (auditor states 76.30%)", pct(tot26, total_assets26), "%")
line("Mar-26 foreign branch receivables share of net receivables", pct(branch_tr26, tot26), "%")
line("Mar-26 ECL provision cover on gross receivables", pct(ecl26, gross26), "%")
line("Mar-26 ECL provision cover on >3y bucket", pct(ecl26, age26[">3y"] + ecl26), "%")
d3 = age26[">3y"] - age25_v26[">3y"]
line("Change in >3y bucket Mar-25 to Mar-26", d3, "Cr")
line("of which explainable by Mar-25 2-3y bucket ageing in", age25_v26["2-3y"], "Cr")
line("Unexplained rise in >3y bucket (ageing roll-forward gap)", d3 - age25_v26["2-3y"], "Cr")
for k in age25_v26:
    line(f"Mar-25 vintage difference FY26 AR minus FY25 AR [{k}]", age25_v26[k] - age25_v25[k], "Cr")

print("\n=== 3. Days (balance / annual flow x 365). Receivables include GST; revenue excludes it ===")
rev_day26 = rev26 / DAYS
line("FY26 revenue from operations per day", rev_day26, "Cr/day", "{:,.3f}")
line("Q1 FY27 revenue per day (91 days)", q1rev27 / 91, "Cr/day", "{:,.3f}")
line("Total net receivables days on FY26 revenue", tot26 / rev_day26, "days", "{:,.0f}")
line("Running book (<=3y) days on FY26 revenue", (tot26 - age26[">3y"]) / rev_day26, "days", "{:,.0f}")
line("Under-6-months bucket days on FY26 revenue", age26["<6m"] / rev_day26, "days", "{:,.0f}")
line("Running book (<=3y) days on FY25 restated revenue, Mar-25", (tot25 - age25_v26[">3y"]) / (rev25_r / DAYS), "days", "{:,.0f}")
line("Under-6-months bucket days on FY25 restated revenue, Mar-25", age25_v26["<6m"] / (rev25_r / DAYS), "days", "{:,.0f}")
line("Inventory days on FY26 revenue", inv26 / rev_day26, "days", "{:,.0f}")
line("Inventory days on FY26 cost of materials consumed", inv26 / (mat26 / DAYS), "days", "{:,.0f}")
line("Inventory days on FY25 revenue (restated)", inv25 / (rev25_r / DAYS), "days", "{:,.0f}")
line("Customer advances days on FY26 revenue", adv26 / rev_day26, "days", "{:,.0f}")
line("Customer advances days on FY25 revenue (restated)", adv25 / (rev25_r / DAYS), "days", "{:,.0f}")
line("Current trade payables days on FY26 materials + erection/subcontract cost",
     tp26_cur / ((mat26 + erect26) / DAYS), "days", "{:,.0f}")
nwc_running = (tot26 - age26[">3y"]) + unbilled26 + inv26 - tp26_cur - adv26
line("Running-business NWC proxy Mar-26 (running receivables + unbilled + inventory - current TP - advances)", nwc_running, "Cr")
line("same, in days of FY26 revenue", nwc_running / rev_day26, "days", "{:,.0f}")

print("\n=== 4. MSME, cash, borrowings, guarantees ===")
line("MSME dues aged beyond 6 months from due date", sum(v for k, v in msme26_age.items() if k != "<6m"), "Cr")
line("MSME dues total", sum(msme26_age.values()), "Cr")
line("Cumulative operating cash flow FY24 to FY26", sum(ocf.values()), "Cr")
line("Fall in cash and cash equivalents FY26", cash25 - cash26, "Cr")
line("Borrowings total Mar-26", sum(borrow26.values()), "Cr")
line("Resolution-plan instruments (NCD + financial creditors) share of borrowings",
     pct(sum(v for k, v in borrow26.items() if "demand loan" not in k), sum(borrow26.values())), "%")
line("Bank guarantees outstanding growth FY26", growth(bg26, bg25), "%")
margin26, margin25 = 148.74, 50.11                    # AR FY26 p96 note 8, margin money with bank
line("Increase in margin money with bank FY26", margin26 - margin25, "Cr")
line("Margin money / bank guarantees outstanding Mar-26", pct(margin26, bg26), "%")
line("Margin money in days of FY26 revenue", margin26 / rev_day26, "days", "{:,.0f}")
line("Change in net receivables Mar-25 to Mar-26", tot26 - tot25, "Cr")
line("Change in net receivables Mar-25 to Sep-25 (Q2 SoAL)", recv_sep25 - tot25, "Cr")

print("\n=== 5. Order book ===")
inflow_named = sum(orders_fy26.values())
line("FY26 major orders named in AR FY26 p15 (sum)", inflow_named, "Cr")
line("Order book 1 Apr 2026 / FY26 revenue", ob_apr26 / rev26, "x")
line("Implied FY26 inflow if opening = 1,900 (PR): closing - opening + revenue", ob_apr26 - ob_apr25_pr + rev26, "Cr")
line("Implied FY26 inflow if opening = 1,800 (AR FY25)", ob_apr26 - ob_apr25_ar + rev26, "Cr")
line("Gap between the two stated 1 Apr 2025 order books", ob_apr25_pr - ob_apr25_ar, "Cr")
