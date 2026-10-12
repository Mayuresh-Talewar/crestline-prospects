"""BJ-1 calculations for Bajel Projects Limited. Every input is typed from a page image.

Run:  python -I bj-calc.py > bj-calc-output.txt
Units: inputs in Rs lakh as printed; outputs in Rs crore (1 crore = 100 lakh).
Entity: STANDALONE unless a line says CONSOLIDATED.
Sources (printed page numbers):
  AR26 = Annual Report FY2025-26, filed with NSE/BSE 17 Jul 2026 (audit report dated 27 May 2026)
  AR25 = Annual Report FY2024-25, filed with NSE 18 Jul 2025
  AR24 = Annual Report FY2023-24, filed with NSE 29 Jul 2024
"""
import sys

sys.stdout.reconfigure(encoding="utf-8")

def cr(lakh):
    return lakh / 100.0

# ---------- Standalone balance sheet, AR26 p256 (FY25 column is the AR26 regrouped vintage) ----------
BS = {
    "FY26": dict(tr_nc=21527.21, tr_cur=163377.55, inventories=13851.27, contract_assets=1885.77,
                 cash=2372.11, other_bank=15948.72, cur_assets=211871.72, cur_liab=176144.07,
                 contract_liab=46532.34, borrowings=34996.11, lease_nc=1046.35, lease_cur=638.69,
                 tp_mse=4479.63, tp_other=83676.01, equity=68125.98),
    "FY25": dict(tr_nc=28799.72, tr_cur=97065.74, inventories=12760.83, contract_assets=9098.68,
                 cash=5568.03, other_bank=21215.73, cur_assets=155668.01, cur_liab=137846.70,
                 contract_liab=41870.21, borrowings=35658.61, lease_nc=1403.71, lease_cur=497.42,
                 tp_mse=2566.29, tp_other=52061.65, equity=58466.46),
}
# AR25 p188, FY24 column (original vintage; FY24 has no regrouped version)
FY24_TR_NET = 60711.95 + 12829.00          # current + non-current, net of ECL
FY25_BORROWINGS_AS_ORIGINALLY_REPORTED = 12100.00   # AR25 p188
FY25_TRADE_CREDITS_ORIGINAL = 33728.47               # AR25 p188, separate line
RECLASS_TO_BORROWINGS = 23558.61                     # AR26 p327 Note 49(i)
RECLASS_TO_PAYABLES = 10169.86                       # AR26 p327 Note 49(i)

# ---------- P&L, AR26 p257 (standalone) and p337 (consolidated); FY24 from AR25 p189 ----------
REV = {"FY24": 116921.15, "FY25": 259823.65, "FY26": 279157.52}
PAT_SA = {"FY24": 428.65, "FY25": 1546.35, "FY26": 2695.33}
PAT_CONS_FY26 = 2027.67            # AR26 p337
PBT_PRE_EXC = {"FY25": 2397.44, "FY26": 4157.66}
FIN_COST = {"FY24": 1853.31, "FY25": 5351.11, "FY26": 6342.47}
DA = {"FY25": 1268.10, "FY26": 1969.04}
INT_MOB_ADV = {"FY25": 1078.26, "FY26": 1520.04}   # AR26 p297 Note 29
INT_BORROW = {"FY25": 4128.96, "FY26": 4636.34}    # AR26 p297 Note 29

# ---------- Cash flow, AR26 p258; FY24 from AR25 p190 ----------
CFO = {"FY24": 19536.74, "FY25": 6913.30, "FY26": 2108.80}
CFO_CONS_FY26 = 2108.81            # AR26 p338

# ---------- Note 18 borrowings FY26, AR26 p291 ----------
WC_SECURED_BANKS = 3100.00
VBD_FI = 17850.80
VBD_BANKS = 14045.31

# ---------- Note 6 ageing (gross), AR26 p280 (FY26 and FY25 in AR26 vintage) ----------
AGE_AR26 = {
    "FY26": dict(not_due=153012.32, lt6m=14785.13, m6_1y=4532.48, y1_2=3348.91, y2_3=1640.23, gt3=15628.68, total=192947.75),
    "FY25": dict(not_due=88276.77, lt6m=13946.74, m6_1y=5500.35, y1_2=3402.17, y2_3=1796.94, gt3=20188.23, total=133111.20),
}
# AR25 p213: FY25 and FY24 in the ORIGINAL vintage
AGE_AR25 = {
    "FY25": dict(not_due=16994.18, lt6m=75852.88, m6_1y=22463.20, y1_2=1837.29, y2_3=2482.24, gt3=13481.41, total=133111.20),
    "FY24": dict(not_due=13517.83, lt6m=39299.66, m6_1y=1154.74, y1_2=6480.99, y2_3=6352.70, gt3=11685.64, total=78491.56),
}
ECL = {"FY26": 8042.99, "FY25": 7245.74}

# ---------- Company-stated ratios ----------
TR_TURNOVER = {"FY24": 2.00, "FY25": 2.61, "FY26": 1.80}   # AR24 MD&A, AR25 MD&A p106 area, AR26 p320 Note 45
TP_TURNOVER = {"FY25": 4.53, "FY26": 3.23}                # AR26 p320 Note 45

# ---------- Customers and geography, AR26 p312 Note 38 ----------
PGCIL = {"FY25": 159872.10, "FY26": 179523.85}
OUTSIDE_INDIA = {"FY25": 6482.08, "FY26": 2281.19}

# ---------- MSME, AR26 p292 Note 19 ----------
MSME_PRINCIPAL_UNPAID = {"FY25": 2535.96, "FY26": 4431.42}
MSME_INTEREST_UNPAID = {"FY25": 30.33, "FY26": 48.21}

# ---------- Q4 FY26 call, 29 May 2026 (transcript p14, Nitesh Bhandari, CFO), Rs crore as spoken ----------
CALL_TR_FROM, CALL_TR_TO, CALL_RISE = 1258, 1849, 590
CALL_BILLING, CALL_HOLDBACK, CALL_RETENTION = 194, 225, 100

# ---------- Order book, Q1 FY27 deck p22 (Rs crore, excl. GST, excl. supply orders) ----------
OB = {"Mar23": 1638, "Mar24": 3598, "Mar25": 2984, "Mar26": 3442, "Jun25": 3612, "Jun26": 4055}
Q1_REV = {"Q1FY26": 607.6, "Q1FY27": 566.9}   # press release 7 Aug 2026 p2
INTEREST_RATE_LOW, INTEREST_RATE_HIGH = 0.065, 0.10   # AR26 p291 Note 18: WC facilities and VBD

# ---------- other figures, Rs lakh as printed ----------
OTHER_LAKH = [
    ("Advance to suppliers FY26 (AR26 p284 Note 14)", 742.34),
    ("Advance to suppliers FY25 (AR26 p284 Note 14)", 3337.06),
    ("Fixed deposits under lien FY26 (AR26 p284 Note 12)", 10069.72),
    ("Other bank balances FY26 (AR26 p284 Note 12)", 15948.72),
    ("Receivables under arbitration, net, FY26, three customers (AR26 p281 Note 6(d))", 8595.50),
    ("Receivables under arbitration, net, FY25, two customers (AR25 p214 Note 4(d))", 5020.00),
    ("Receivables on operationally closed projects, net, FY25 (AR25 p214 Note 4(e))", 12676.34),
    ("Impairment on those closed-project receivables FY25 (AR25 p214 Note 4(e))", 2820.40),
    ("ECL allowance FY26 (AR26 p280)", 8042.99),
    ("ECL allowance FY25 (AR26 p280)", 7245.74),
    ("Unsatisfied performance obligations 31 Mar 2026 (AR26 p317 Note 42)", 344181.54),
    ("Unsatisfied performance obligations 31 Mar 2025 (AR26 p317 Note 42)", 298440.96),
    ("Unbilled on account of work under certification FY26 (AR26 p316 Note 42)", 7212.91),
    ("Unearned revenue FY26 (AR26 p316 Note 42)", 12936.03),
    ("Interest on borrowings FY26 (AR26 p297 Note 29)", 4636.34),
    ("Interest payable to MSME vendors FY26 (AR26 p297 Note 29)", 17.88),
    ("Provision for onerous contracts FY26 (AR26 p294 Note 21A)", 325.78),
    ("Exceptional item, labour codes, FY26 (AR26 p257, p298 Note 32)", 772.06),
    ("Interest paid FY26 (AR26 p258)", 5934.49),
    ("Interest paid FY25 (AR26 p258)", 5200.78),
    ("Increase in trade receivables, cash flow FY26 (AR26 p258)", 59981.57),
    ("Increase in trade receivables, cash flow FY25 (AR26 p258)", 54942.82),
    ("Contract assets FY24 (AR25 p188)", 16574.00),
    ("Contract liabilities FY24 (AR25 p188)", 22630.72),
    ("Inventories FY24 (AR25 p188)", 10104.63),
    ("Trade credits FY24, separate line (AR25 p188)", 13586.74),
    ("FY25 trade credits line as originally reported (AR25 p188)", 33728.47),
    ("Revenue outside India FY26 (AR26 p312)", 2281.19),
    ("Revenue India FY26 (AR26 p312)", 276876.33),
    ("Revenue India FY25 (AR26 p312)", 253341.57),
    ("Trade receivables current FY26 (AR26 p256)", 163377.55),
    ("Trade receivables non-current FY26 (AR26 p256)", 21527.21),
    ("Trade receivables current FY25 (AR26 p256)", 97065.74),
    ("Trade receivables non-current FY25 (AR26 p256)", 28799.72),
    ("Trade receivables current FY24 (AR25 p188)", 60711.95),
    ("Trade receivables non-current FY24 (AR25 p188)", 12829.00),
    ("Gross trade receivables FY24 (AR25 p213)", 78491.56),
    ("Dues to micro and small enterprises FY26 (AR26 p292)", 4479.63),
    ("Dues to micro and small enterprises FY25 (AR26 p292)", 2566.29),
    ("Interest on borrowings FY25 (AR26 p297 Note 29)", 4128.96),
    ("Working capital facilities secured banks FY25 (AR26 p291)", 10000.00),
    ("Working capital facilities financial institutions FY25 (AR26 p291)", 2100.00),
    ("Vendor bill discounting FIs FY25 (AR26 p291)", 14748.41),
    ("Vendor bill discounting banks FY25 (AR26 p291)", 8810.20),
    ("Unbilled on account of work under certification FY25 (AR26 p316)", 7475.32),
    ("KAM: undisputed receivables net FY26 (AR26 p246 to 247)", 181630.20),
    ("KAM: impairment on undisputed receivables FY26 (AR26 p246 to 247)", 5320.94),
    ("GST demand Karnataka, intimation 24 Jan 2025 (Reg 30 filing)", 238.82),
    ("GST tax interest penalty Karnataka, SCN 18 Feb 2025 (Reg 30 filing)", 261.82),
    ("GST demand Bihar, intimation 13 Mar 2025 (Reg 30 filing)", 390.90),
    ("GST tax interest penalty Bihar, SCN 21 Jul 2025 (Reg 30 filing 22 Jul 2025)", 236.77),
    ("TDS credit not granted AY 2023-24, Rs 4,04,60,648 (Reg 30 filing 20 Feb 2024)", 404.60648),
    ("Arbitration claim against the Company, Rs 2,00,00,000 (Reg 30 filing 24 Jan 2025)", 200.0),
]
OTHER_SUMS = [
    ("Vendor bill discounting total FY25", 14748.41 + 8810.20),
]


def days(bal, rev):
    return bal / rev * 365


def line(label, value, fmt="{:,.2f}"):
    print(f"{label}: {fmt.format(value)}")


def main():
    b26, b25 = BS["FY26"], BS["FY25"]
    tr26 = b26["tr_nc"] + b26["tr_cur"]
    tr25 = b25["tr_nc"] + b25["tr_cur"]

    print("== 1. Revenue, PAT, EBITDA (standalone, Rs Cr) ==")
    for y in ("FY24", "FY25", "FY26"):
        line(f"Revenue from operations {y}", cr(REV[y]))
        line(f"PAT {y}", cr(PAT_SA[y]))
        line(f"Net cash from operating activities {y}", cr(CFO[y]))
        line(f"Finance costs {y}", cr(FIN_COST[y]))
    line("PAT FY26 CONSOLIDATED", cr(PAT_CONS_FY26))
    line("Net cash from operating activities FY26 CONSOLIDATED", cr(CFO_CONS_FY26))
    line("Revenue FY26 / FY24 (times)", REV["FY26"] / REV["FY24"], "{:.2f}")
    line("Revenue growth FY26 vs FY25 (%)", (REV["FY26"] / REV["FY25"] - 1) * 100)
    line("PAT margin FY26 standalone (% of revenue)", PAT_SA["FY26"] / REV["FY26"] * 100)
    for y in ("FY25", "FY26"):
        ebitda = PBT_PRE_EXC[y] + FIN_COST[y] + DA[y]
        line(f"EBITDA incl. other income {y} (PBT pre-exceptional + finance + D&A)", cr(ebitda))
    line("Interest on mobilisation advances FY26", cr(INT_MOB_ADV["FY26"]))
    line("Interest on mobilisation advances FY25", cr(INT_MOB_ADV["FY25"]))

    print("\n== 2. Receivables (net of ECL unless stated) ==")
    line("Trade receivables FY26 total net", cr(tr26))
    line("Trade receivables FY25 total net", cr(tr25))
    line("Trade receivables FY24 total net", cr(FY24_TR_NET))
    line("Increase FY25 to FY26", cr(tr26 - tr25))
    line("Gross trade receivables FY26 (before ECL)", cr(AGE_AR26["FY26"]["total"]))
    line("Gross trade receivables FY25 (before ECL)", cr(AGE_AR26["FY25"]["total"]))
    print("[Days, three bases, 365-day year]")
    line("A. Dossier basis: CURRENT receivables / revenue, FY25", days(b25["tr_cur"], REV["FY25"]), "{:.1f}")
    line("A. Dossier basis: CURRENT receivables / revenue, FY26", days(b26["tr_cur"], REV["FY26"]), "{:.1f}")
    line("B. Closing TOTAL net receivables / revenue, FY25", days(tr25, REV["FY25"]), "{:.1f}")
    line("B. Closing TOTAL net receivables / revenue, FY26", days(tr26, REV["FY26"]), "{:.1f}")
    for y in ("FY24", "FY25", "FY26"):
        line(f"C. Company basis 365 / stated turnover, {y}", 365 / TR_TURNOVER[y], "{:.1f}")
    rec_turn26 = REV["FY26"] / ((tr26 + tr25) / 2)
    rec_turn25 = REV["FY25"] / ((tr25 + FY24_TR_NET) / 2)
    line("Check: revenue / average total receivables FY26 (times)", rec_turn26, "{:.3f}")
    line("Check: revenue / average total receivables FY25 (times)", rec_turn25, "{:.3f}")
    print("[Overdue vs not due, AR26 vintage, gross]")
    for y in ("FY25", "FY26"):
        a = AGE_AR26[y]
        overdue = a["total"] - a["not_due"]
        line(f"Not due {y}", cr(a["not_due"]))
        line(f"Overdue (all buckets) {y}", cr(overdue))
        line(f"Not due share {y} (%)", a["not_due"] / a["total"] * 100)
        line(f"Overdue more than 1 year {y}", cr(a["y1_2"] + a["y2_3"] + a["gt3"]))
    print("[Vintage conflict: FY25 ageing as published twice]")
    line("FY25 not due, AR25 vintage", cr(AGE_AR25["FY25"]["not_due"]))
    line("FY25 not due, AR26 vintage", cr(AGE_AR26["FY25"]["not_due"]))
    line("FY24 not due, AR25 vintage", cr(AGE_AR25["FY24"]["not_due"]))
    line("FY24 overdue, AR25 vintage", cr(AGE_AR25["FY24"]["total"] - AGE_AR25["FY24"]["not_due"]))
    print("[CFO's bridge of the rise, call, Rs Cr as spoken]")
    named = CALL_BILLING + CALL_HOLDBACK + CALL_RETENTION
    line("Named items: billing + holdback + retention", named, "{:,.0f}")
    line("Unexplained remainder of the stated 590", CALL_RISE - named, "{:,.0f}")
    line("Spoken 1,849 less 1,258", CALL_TR_TO - CALL_TR_FROM, "{:,.0f}")

    print("\n== 3. Working capital lines (Rs Cr) ==")
    for y, b in (("FY25", b25), ("FY26", b26)):
        line(f"Inventories {y}", cr(b["inventories"]))
        line(f"Contract assets {y}", cr(b["contract_assets"]))
        line(f"Contract liabilities {y}", cr(b["contract_liab"]))
        tp = b["tp_mse"] + b["tp_other"]
        line(f"Trade payables total {y}", cr(tp))
        line(f"MSE share of trade payables {y} (%)", b["tp_mse"] / tp * 100)
        line(f"MSME principal unpaid at year end {y}", cr(MSME_PRINCIPAL_UNPAID[y]))
        line(f"MSME interest accrued unpaid {y}", cr(MSME_INTEREST_UNPAID[y]))
        line(f"Days of payables, 365 / stated payables turnover {y}", 365 / TP_TURNOVER[y], "{:.1f}")
    print("[Dossier 'WC days' reconstruction]")
    for y, b in (("FY25", b25), ("FY26", b26)):
        wc = b["cur_assets"] - b["cash"] - b["other_bank"] - b["cur_liab"]
        line(f"Current assets less cash less other bank balances less current liabilities {y}", cr(wc))
        line(f"  as days of revenue {y}", days(wc, REV[y]), "{:.1f}")
        wc2 = b["cur_assets"] - b["cur_liab"]
        line(f"Net current assets (all) {y}", cr(wc2))
        line(f"  as days of revenue {y}", days(wc2, REV[y]), "{:.1f}")

    print("\n== 4. Borrowings (Rs Cr) ==")
    for y, b in (("FY25", b25), ("FY26", b26)):
        lease = b["lease_nc"] + b["lease_cur"]
        line(f"Borrowings {y} (AR26 vintage)", cr(b["borrowings"]))
        line(f"Lease liabilities {y}", cr(lease))
        line(f"Borrowings + lease liabilities {y}", cr(b["borrowings"] + lease))
    line("FY25 borrowings as originally reported (AR25)", cr(FY25_BORROWINGS_AS_ORIGINALLY_REPORTED))
    line("FY25 trade credits reclassified into borrowings (AR26 Note 49)", cr(RECLASS_TO_BORROWINGS))
    vbd = VBD_FI + VBD_BANKS
    line("FY26 vendor bill discounting total", cr(vbd))
    line("FY26 working capital facilities (secured, banks)", cr(WC_SECURED_BANKS))
    line("Vendor bill discounting share of FY26 borrowings (%)", vbd / b26["borrowings"] * 100)

    print("\n== 5. Concentration and geography ==")
    for y in ("FY25", "FY26"):
        line(f"Power Grid (incl. group) share of revenue {y} (%)", PGCIL[y] / REV[y] * 100)
        line(f"Revenue outside India {y} (Rs Cr)", cr(OUTSIDE_INDIA[y]))
        line(f"Revenue outside India share {y} (%)", OUTSIDE_INDIA[y] / REV[y] * 100)

    print("\n== 6. Orders and Q1 FY27 ==")
    line("Order book growth Jun 2025 to Jun 2026 (%)", (OB["Jun26"] / OB["Jun25"] - 1) * 100)
    line("Order book Jun 2026 / FY26 revenue (years)", OB["Jun26"] / cr(REV["FY26"]), "{:.2f}")
    line("Q1 FY27 revenue growth YoY (%)", (Q1_REV["Q1FY27"] / Q1_REV["Q1FY26"] - 1) * 100)

    print("\n== 7. Value of one day (scenario input, not a saving) ==")
    per_day = cr(REV["FY26"]) / 365
    line("FY26 revenue per day (Rs Cr)", per_day)
    line("Interest on one day of revenue at 6.5% a year (Rs Cr)", per_day * INTEREST_RATE_LOW)
    line("Interest on one day of revenue at 10% a year (Rs Cr)", per_day * INTEREST_RATE_HIGH)
    line("Cap: FY26 borrowings that carry the disclosed 6.5% to 10% rate (Rs Cr)", cr(b26["borrowings"]))

    print("\n== 8. Other lakh to crore conversions ==")
    for label, lakh in OTHER_LAKH:
        line(label, cr(lakh))
    for label, lakh in OTHER_SUMS:
        line(label, cr(lakh))
    assert abs(14748.41 + 8810.20 - RECLASS_TO_BORROWINGS) < 0.05   # FY25 VBD equals the Note 49 reclass

    # ---------- self-checks: the printed totals must tie ----------
    for y in ("FY25", "FY26"):
        a = AGE_AR26[y]
        assert abs(sum(v for k, v in a.items() if k != "total") - a["total"]) < 0.05, y
        assert abs(a["total"] - ECL[y] - (BS[y]["tr_nc"] + BS[y]["tr_cur"])) < 0.05, y
    for y in ("FY24", "FY25"):
        a = AGE_AR25[y]
        assert abs(sum(v for k, v in a.items() if k != "total") - a["total"]) < 0.05, y
    assert abs(VBD_FI + VBD_BANKS + WC_SECURED_BANKS - b26["borrowings"]) < 0.05
    assert abs(FY25_BORROWINGS_AS_ORIGINALLY_REPORTED + RECLASS_TO_BORROWINGS - b25["borrowings"]) < 0.05
    assert abs(round(rec_turn26, 2) - TR_TURNOVER["FY26"]) < 0.011
    assert abs(round(rec_turn25, 2) - TR_TURNOVER["FY25"]) < 0.011
    print("\nself-checks passed: ageing sums, ageing less ECL = balance sheet, borrowings split, Note 49 bridge, turnover recompute")


if __name__ == "__main__":
    main()
