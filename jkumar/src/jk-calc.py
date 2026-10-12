"""JK-1: every computed figure for J. Kumar Infraprojects Limited (JKIL).

Run:  python -I src/jk-calc.py      (from the jkumar folder)
Writes src/jk-calc-output.txt next to this file.

Inputs are typed from page images of the company's own filings (Rs lakh unless noted).
S = STANDALONE, C = CONSOLIDATED. Page = PDF page in src/d/<file> (printed page in brackets).
"""
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")
OUT = []


def out(line=""):
    OUT.append(line)
    print(line)


def cr(lakh):
    """Rs lakh to Rs crore (1 crore = 100 lakh)."""
    return lakh / 100.0


# ==== inputs (S, Rs lakh) ====
# AR FY26 p89 [172-173], p90 [175], p96-97 [187-189], p99-103 [193-201]; AR FY25 p155-158 [152-155], p171-172 [168-169], p183 [180]
REV = {"FY24": 487920.47, "FY25": 569348.77, "FY26": 569389.15}
MAT = {"FY24": 317017.31, "FY25": 375124.39, "FY26": 374291.69}
CONSTR = {"FY24": 55019.06, "FY25": 60799.96, "FY26": 61396.48}
EMP = {"FY24": 36911.97, "FY25": 41322.56, "FY26": 41917.99}
OTHEXP = {"FY24": 8565.96, "FY25": 9461.89, "FY26": 9913.26}
FIN = {"FY24": 12387.67, "FY25": 15508.69, "FY26": 16230.03}
PAT = {"FY24": 32859.27, "FY25": 39044.88, "FY26": 38355.12}
OCF = {"FY24": 33645.75, "FY25": 37529.00, "FY26": 111645.26}
TR = {"FY24": 119243.89, "FY25": 148856.27, "FY26": 148529.21}
UNBILLED = {"FY24": 55310.79, "FY25": 58901.81, "FY26": 57797.08}  # contract assets
INV = {"FY24": 48146.01, "FY25": 50347.70, "FY26": 32964.86}
TP = {"FY24": 7389.11 + 51249.76, "FY25": 8621.46 + 75328.19, "FY26": 9872.02 + 75082.22}
TP_MSE = {"FY24": 7389.11, "FY25": 8621.46, "FY26": 9872.02}
MOB_ADV = {"FY24": 45924.60, "FY25": 62102.31, "FY26": 70608.53}
SUPPLIER_ADV = {"FY24": 6127.27, "FY25": 7974.08, "FY26": 14042.61}
DEBT = {"FY24": 11344.33 + 46254.50, "FY25": 13111.58 + 53514.16, "FY26": 25652.01 + 33092.34}
CASH = {"FY25": 6772.23, "FY26": 20309.70}
OTHER_BANK = {"FY25": 77167.79, "FY26": 48770.37}
INT_ON_BORROWINGS = {"FY25": 7838.70, "FY26": 7184.62}  # note 28, AR FY26 p103 [201]
GUAR_COMM = {"FY25": 3249.07, "FY26": 2572.07}
BG_OUT = {"FY25": 294515.71, "FY26": 436375.34}  # note 32, AR FY26 p105 [204]

# consolidated revenue, Rs lakh: AR FY26 p116 [227]
REV_C = {"FY25": 569348.77, "FY26": 572302.83}
# consolidated, Rs crore, as printed in MD&A tables: AR FY25 p46 [43], AR FY26 p29 [52]
REV_C_CR = {"FY24": 4879, "FY25": 5693, "FY26": 5723}
EBITDA_C_CR = {"FY24": 704, "FY25": 826, "FY26": 823}
PAT_C_CR = {"FY24": 329, "FY25": 390, "FY26": 387}

# receivable ageing from DUE DATE (S, Rs lakh): not due, <6m, 6m-1y, 1-2y, 2-3y, >3y
AGE = {
    "FY24": [96249.21, 10593.16, 1843.07, 6279.41, 3096.81, 1182.22],  # AR FY25 p171 [168]
    "FY25": [123224.19, 15517.73, 1264.82, 4612.83, 2943.18, 1293.51],  # AR FY26 p97 [188]
    "FY26": [107679.34, 18574.40, 14114.58, 4397.63, 2015.86, 1747.40],  # AR FY26 p97 [188]
}
AGE_TOTAL = {"FY24": 119243.89, "FY25": 148856.26, "FY26": 148529.21}

# payables ageing (S, Rs lakh): MSE not due, others [not due, <1y, 1-2, 2-3, >3], disputed MSE. AR FY26 p102 [199]
PAY_AGE = {
    "FY26": {"mse": 8052.89, "oth": [48450.63, 20829.06, 3279.92, 1511.29, 1011.00], "mse_disp": 1819.13, "total": 84954.24},
    "FY25": {"mse": 6837.38, "oth": [46252.86, 21420.82, 4243.89, 2059.58, 1351.04], "mse_disp": 1784.07, "total": 83949.64},
}

# order book, inflow (Rs crore)
OB = {"FY25": 22238, "FY26": 18554, "Q1FY27": 22246}  # AR FY25 p45 [42]; AR FY26 p109 [213]; Q1FY27 IP slide 10
INFLOW = {"FY25": 4700, "FY26": 1039, "Q1FY27": 4556}  # AR FY25 p45 [42]; AR FY26 p29 [52]; Q1FY27 IP slide 10
FY26_INFLOW_GUIDE = (6000, 8000)  # Kamal Gupta, Q4 FY25 call 21 May 2025, transcript p6
FY26_REV_GUIDE_CR = (6500, 6600)  # Nalin Gupta, Q4 FY25 call 21 May 2025, transcript p4
WC_DAYS_CO = {"FY23": 126, "FY24_ARFY24": 123, "FY24_deck": 105, "FY25": 112, "FY26": 99, "Q1FY27": 103}
WC_GUIDE = {"Q1FY26 call": "around 120 to 125", "Q3FY26 call": "115 to 120", "Q1FY27 call": "100 to 110"}

# ==== self-checks (planted: each must fail if an input is mistyped) ====
for y, row in AGE.items():
    assert abs(sum(row) - AGE_TOTAL[y]) < 1.0, (y, sum(row), AGE_TOTAL[y])
for y, p in PAY_AGE.items():
    s = p["mse"] + sum(p["oth"]) + p["mse_disp"]
    assert abs(s - p["total"]) < 1.0, (y, s)
assert abs(TP["FY26"] - 84954.24) < 0.01 and abs(TP["FY25"] - 83949.65) < 0.01
assert abs(DEBT["FY26"] - 58744.35) < 0.01 and abs(DEBT["FY25"] - 66625.74) < 0.01
# MSE on balance sheet = MSE not due + MSE disputed (ties two tables)
assert abs(PAY_AGE["FY26"]["mse"] + PAY_AGE["FY26"]["mse_disp"] - TP_MSE["FY26"]) < 0.01
assert abs(PAY_AGE["FY25"]["mse"] + PAY_AGE["FY25"]["mse_disp"] - TP_MSE["FY25"]) < 0.01
_planted = list(AGE["FY26"]); _planted[2] += 100.0
assert abs(sum(_planted) - AGE_TOTAL["FY26"]) > 1.0  # planted error is caught
out("Self-checks passed: ageing totals, payables totals, debt total, MSE tie-out, planted error caught.")
out()

# ==== P&L ====
out("== P&L (STANDALONE, Rs crore) ==")
for y in ("FY24", "FY25", "FY26"):
    ebitda = REV[y] - MAT[y] - CONSTR[y] - EMP[y] - OTHEXP[y]
    out(f"{y}: revenue {cr(REV[y]):,.2f} | EBITDA (rev less material, construction, employee, other exp) {cr(ebitda):,.2f} "
        f"| margin {ebitda / REV[y] * 100:.1f}% | PAT {cr(PAT[y]):,.2f} | PAT margin {PAT[y] / REV[y] * 100:.1f}% "
        f"| finance cost {cr(FIN[y]):,.2f} | OCF {cr(OCF[y]):,.2f}")
out(f"Revenue growth S FY25 vs FY24: {(REV['FY25'] / REV['FY24'] - 1) * 100:.1f}%")
out(f"Revenue growth S FY26 vs FY25: {(REV['FY26'] / REV['FY25'] - 1) * 100:.3f}%")
out(f"Revenue growth C FY26 vs FY25 (C FY26 includes a subsidiary, C FY25 equals S): {(REV_C['FY26'] / REV_C['FY25'] - 1) * 100:.2f}%")
out(f"Consolidated (MD&A Rs crore) growth FY25 vs FY24: revenue {(REV_C_CR['FY25'] / REV_C_CR['FY24'] - 1) * 100:.1f}% "
    f"| EBITDA {(EBITDA_C_CR['FY25'] / EBITDA_C_CR['FY24'] - 1) * 100:.1f}% | PAT {(PAT_C_CR['FY25'] / PAT_C_CR['FY24'] - 1) * 100:.1f}%")
out(f"OCF S FY26 vs FY25: x{OCF['FY26'] / OCF['FY25']:.2f}")
out()

# ==== working capital ====
out("== Working capital (STANDALONE, closing balances, Rs crore; days on that year's revenue or material cost, 365) ==")
for y in ("FY24", "FY25", "FY26"):
    nwc = TR[y] + UNBILLED[y] + INV[y] - TP[y] - MOB_ADV[y]
    out(f"{y}: receivables {cr(TR[y]):,.2f} ({TR[y] / REV[y] * 365:.1f} d) | contract assets {cr(UNBILLED[y]):,.2f} "
        f"({UNBILLED[y] / REV[y] * 365:.1f} d) | inventories {cr(INV[y]):,.2f} ({INV[y] / MAT[y] * 365:.1f} d on material cost) "
        f"| payables {cr(TP[y]):,.2f} ({TP[y] / MAT[y] * 365:.1f} d on material cost) | mobilisation adv {cr(MOB_ADV[y]):,.2f} "
        f"| supplier adv {cr(SUPPLIER_ADV[y]):,.2f}")
    out(f"      Crestline-computed core NWC (TR + contract assets + inventory, less payables and mobilisation adv) {cr(nwc):,.2f} "
        f"= {nwc / REV[y] * 365:.1f} days of revenue  [OUR definition, not the company's]")
for y in ("FY25", "FY26"):
    prev = {"FY25": "FY24", "FY26": "FY25"}[y]
    avg = (TR[y] + TR[prev]) / 2
    out(f"{y}: revenue / average receivables = {REV[y] / avg:.2f}x (company note 42 prints {'4.25' if y == 'FY25' else '3.83'}x) "
        f"= {365 / (REV[y] / avg):.1f} days on average basis")
out(f"Receivables plus contract assets FY26: {cr(TR['FY26'] + UNBILLED['FY26']):,.2f} cr = "
    f"{(TR['FY26'] + UNBILLED['FY26']) / REV['FY26'] * 365:.1f} days of FY26 revenue")
out()

out("== Receivable ageing from due date (STANDALONE) ==")
for y, row in AGE.items():
    tot = AGE_TOTAL[y]
    overdue = tot - row[0]
    over6m = sum(row[2:])
    over1y = sum(row[3:])
    out(f"{y}: overdue {cr(overdue):,.2f} cr ({overdue / tot * 100:.1f}%) | >6m past due {cr(over6m):,.2f} cr ({over6m / tot * 100:.1f}%) "
        f"| >1y past due {cr(over1y):,.2f} cr ({over1y / tot * 100:.1f}%) | 6m-1y bucket {cr(row[2]):,.2f} cr")
out(f"6m-1y bucket FY26 vs FY25: x{AGE['FY26'][2] / AGE['FY25'][2]:.1f} (+{cr(AGE['FY26'][2] - AGE['FY25'][2]):,.2f} cr)")
out()

out("== Payables (STANDALONE) ==")
for y, p in PAY_AGE.items():
    oth = p["oth"]
    overdue_oth = sum(oth[1:])
    out(f"{y}: total {cr(p['total']):,.2f} cr | MSE share of payables {(p['mse'] + p['mse_disp']) / p['total'] * 100:.1f}% "
        f"| MSE not due {cr(p['mse']):,.2f} | MSE disputed {cr(p['mse_disp']):,.2f} | non-MSE past due {cr(overdue_oth):,.2f} cr "
        f"({overdue_oth / sum(oth) * 100:.1f}% of non-MSE) | non-MSE >1y past due {cr(sum(oth[2:])):,.2f} cr")
out()

out("== Debt and finance cost (STANDALONE) ==")
for y in ("FY25", "FY26"):
    out(f"{y}: gross debt {cr(DEBT[y]):,.2f} cr | cash + other bank balances {cr(CASH[y] + OTHER_BANK[y]):,.2f} cr "
        f"| BG outstanding {cr(BG_OUT[y]):,.2f} cr | guarantee commission {cr(GUAR_COMM[y]):,.2f} cr")
avg_debt = (DEBT["FY25"] + DEBT["FY26"]) / 2
out(f"FY26 interest on borrowings / average gross debt = {INT_ON_BORROWINGS['FY26'] / avg_debt * 100:.1f}%  "
    f"[COMPUTED, internal only: never print as a company rate]")
out(f"FY26 interest on borrowings share of finance cost = {INT_ON_BORROWINGS['FY26'] / FIN['FY26'] * 100:.1f}%")
out(f"BG outstanding FY26 vs FY25: x{BG_OUT['FY26'] / BG_OUT['FY25']:.2f}")
out()

out("== Disconfirm: what drove FY26 OCF (STANDALONE cash flow, AR FY26 p90 [175], Rs lakh) ==")
CF26 = {"other bank balances released": 28397.42, "inventories": 17382.84, "other financial liabilities": 18828.12,
        "other liabilities (incl. mobilisation adv)": 12529.55, "trade receivables": -1076.50, "trade payables": 1004.59,
        "other non-current financial assets": -18768.56, "other current assets": -6142.30}
CAPEX_CREDITORS_26 = 17651.11  # note 18, AR FY26 p102 [198]; nil at FY25
for k, v in CF26.items():
    out(f"  {k}: {cr(v):+,.2f} cr")
adj = OCF["FY26"] - CF26["other bank balances released"] - CAPEX_CREDITORS_26
out(f"FY26 OCF {cr(OCF['FY26']):,.2f} cr less bank-balance release {cr(CF26['other bank balances released']):,.2f} "
    f"less new capex creditors {cr(CAPEX_CREDITORS_26):,.2f} = {cr(adj):,.2f} cr "
    f"(x{adj / OCF['FY25']:.2f} FY25 OCF)  [COMPUTED, our adjustment]")
out()

out("== Orders and promises ==")
out(f"Order book FY26 vs FY25: {(OB['FY26'] / OB['FY25'] - 1) * 100:.1f}% | Q1FY27 vs FY26: {(OB['Q1FY27'] / OB['FY26'] - 1) * 100:.1f}%")
out(f"FY26 inflow {INFLOW['FY26']} cr vs guidance {FY26_INFLOW_GUIDE[0]}-{FY26_INFLOW_GUIDE[1]} cr: "
    f"{INFLOW['FY26'] / FY26_INFLOW_GUIDE[0] * 100:.1f}% of the low end")
out(f"FY26 revenue: guided {FY26_REV_GUIDE_CR[0]}-{FY26_REV_GUIDE_CR[1]} cr; delivered C {REV_C_CR['FY26']} cr = "
    f"{REV_C_CR['FY26'] / FY26_REV_GUIDE_CR[0] * 100:.1f}% of the low end; S {cr(REV['FY26']):,.2f} cr")
out(f"Order book / FY26 S revenue = {OB['FY26'] / cr(REV['FY26']):.2f}x")
out(f"Company WC days: {WC_DAYS_CO}  | guidance in calls: {WC_GUIDE}")
out(f"FY26 WC days 99 vs Q3FY26 guidance low end 115: {99 - 115} days")

out()
out("== Finance cost guidance check ==")
out(f"FY26 S finance cost / revenue = {FIN['FY26'] / REV['FY26'] * 100:.2f}% (guided 'around 2.75%', Vasant Savla, T126 p13)")
out()
out("== Live-deal scan size (NSE announcement API, two pulls) ==")
ANN = {"14 Jan 2025 to 25 Sep 2026": 129, "6 Jan 2024 to 24 Dec 2024": 85}
out(f"announcements scanned: {ANN} total {sum(ANN.values())}")
out()

out("== Lakh to crore conversions used in data.md (input lakh -> Rs crore) ==")
CONV = {
    "FY26 exceptional item, Labour Codes": 1236.61,
    "FY26 interest on borrowings": 7184.62, "FY26 other finance charges": 6436.40,
    "FY26 lease interest": 32.38, "FY26 guarantee commission": 2572.07,
    "Q1FY27 S revenue": 150741.83, "Q1FY27 S PAT": 9781.30, "Q1FY27 S finance cost": 4325.96,
    "Q1FY26 S revenue": 147865.57, "Q1FY26 S PAT": 10273.44, "Q1FY26 S finance cost": 3835.41,
    "C FY26 revenue": 572302.83, "C FY26 PAT": 38689.83,
    "FY26 ECL allowance": 247.90,
    "FY25 security deposits non-current": 22047.75, "FY25 security deposits current": 14716.99,
    "FY26 security deposits non-current": 31448.74, "FY26 security deposits current": 14907.60,
    "FY26 raw materials, stores and spares": 31943.83, "FY26 trading inventory": 1021.03,
    "FY26 closing stock per note 25": 30585.30,
    "FY24 MSE payables": 7389.11, "FY24 MSMED principal unpaid": 7367.63,
    "FY25 MSMED principal unpaid": 6837.38, "FY26 MSMED principal unpaid": 8052.89,
    "FY26 debt non-current": 25652.01, "FY26 debt current": 33092.34, "FY26 repayable on demand": 20256.07,
    "FY26 overdraft": 2481.45, "FY26 current maturities": 10354.82,
    "consortium fund based limit": 40000.00, "consortium non-fund limit": 265000.00,
    "FY26 contract revenue, four customers": 341358.59,
    "FY26 creditors for capital expenditure": 17651.11,
    "FY26 cash and cash equivalents": 20309.70,
    "FY26 claims not acknowledged as debt": 1911.27,
    "FY26 inventory note 7 raw materials less note 25 closing stock": 31943.83 - 30585.30,
    "FY26 bank guarantees outstanding": 436375.34, "FY25 bank guarantees outstanding": 294515.71,
}
for k, v in CONV.items():
    out(f"  {k}: {v:,.2f} lakh = {cr(v):,.2f} Cr")
for y in ("FY24", "FY25", "FY26"):
    out(f"  {y} ageing buckets (Cr): " + ", ".join(f"{cr(x):,.2f}" for x in AGE[y]) + f" | total {cr(AGE_TOTAL[y]):,.2f}")
p = PAY_AGE["FY26"]
out("  FY26 payables ageing (Cr): MSE not due %.2f; others %s; MSE disputed %.2f"
    % (cr(p["mse"]), ", ".join(f"{cr(x):,.2f}" for x in p["oth"]), cr(p["mse_disp"])))

Path(__file__).with_name("jk-calc-output.txt").write_text("\n".join(OUT) + "\n", encoding="utf-8")
