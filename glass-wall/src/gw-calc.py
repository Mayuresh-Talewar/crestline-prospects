"""GW-1 calculations. Every computed figure in data.md / depth.md comes from here.
Inputs are typed from page images of the RHP dated 1 Sep 2026 (restated consolidated, Rs million)
and the Q1 FY27 results filed 6 Oct 2026. Run: python -I src/gw-calc.py > src/gw-calc-output.txt
"""
MN_PER_CR = 10.0  # 1 crore = 10 million

# RHP p84 (P&L), p82-83 (balance sheet), p38 (WC table), p144-145 (KPIs). FY26, FY25, FY24
Y = ["FY26", "FY25", "FY24"]
DAYS = {"FY26": 365, "FY25": 365, "FY24": 366}
rev = {"FY26": 4569.71, "FY25": 2783.27, "FY24": 3043.42}
other_inc = {"FY26": 144.54, "FY25": 98.09, "FY24": 59.15}
total_inc = {"FY26": 4714.25, "FY25": 2881.36, "FY24": 3102.57}
rm = {"FY26": 2207.92, "FY25": 1294.21, "FY24": 1543.55}
fin_cost = {"FY26": 35.20, "FY25": 35.86, "FY24": 93.74}
ebitda = {"FY26": 1051.98, "FY25": 730.09, "FY24": 547.03}
pat = {"FY26": 837.89, "FY25": 575.10, "FY24": 202.51}
recv = {"FY26": 1089.62, "FY25": 507.66, "FY24": 634.37}
pay = {"FY26": 655.46, "FY25": 377.87, "FY24": 382.60}
inv = {"FY26": 393.43, "FY25": 384.32, "FY24": 297.40}
ncb = {"FY26": 47.36, "FY25": 67.29, "FY24": 139.59}   # non-current borrowings
cb = {"FY26": 19.46, "FY25": 17.35, "FY24": 108.94}    # current borrowings
cash = {"FY26": 324.79, "FY25": 26.15, "FY24": 83.38}
bank_oth = {"FY26": 534.48, "FY25": 752.81, "FY24": 232.91}
equity = {"FY26": 2598.84, "FY25": 1740.59, "FY24": 1209.06}
past_due_6m = {"FY26": 119.53, "FY25": 116.55, "FY24": 148.44}  # RHP p39
# RHP p369 note 37(b): contract assets / liabilities at year end
ca = {"FY26": 491.54, "FY25": 409.89, "FY24": 536.81}
cl = {"FY26": 880.01, "FY25": 780.78, "FY24": 837.41}
company_days = {"FY26": (88, 109, 66, 45), "FY25": (67, 107, 109, 69), "FY24": (77, 91, 71, 57)}

# RHP p39: retention at 31 Mar 2026
ret_noncur, ret_cur = 153.75, 205.81
# RHP p33: order book, Rs million
ob = {"31-Jul-26": 9815.46, "31-Mar-26": 8460.22, "31-Mar-25": 3488.25, "31-Mar-24": 2078.08}
# RHP p433-434: borrowings at 3 Aug 2026
cc_out_aug26, cc_sanc, nfb_sanc = 53.09, 300.00, 900.00
# Q1 results p6 (filed 6 Oct 2026): Q1FY27 vs Q1FY26, Rs million
q1 = {"rev": (1074.48, 791.19), "pat": (172.95, 187.31), "other_inc": (24.96, 47.99),
      "fin": (8.46, 4.95), "dep": (15.36, 7.86)}
top10_share = {"FY26": 86.40, "FY25": 78.13, "FY24": 88.56}  # RHP p27
dossier = {"rev_FY26_cr": 456.97, "pat_FY26_cr": 83.79, "ob_cr": 981.55, "q1_rev_cr": 107, "q1_pat_cr": 17}


def cr(x):
    return x / MN_PER_CR


def pct(a, b):
    return (a / b - 1) * 100


def main():
    print("== Rs crore conversions (restated consolidated)")
    for y in Y:
        print(f"{y}: revenue {cr(rev[y]):.2f} | total income {cr(total_inc[y]):.2f} | EBITDA {cr(ebitda[y]):.2f}"
              f" | PAT {cr(pat[y]):.2f} | other income {cr(other_inc[y]):.2f} | finance cost {cr(fin_cost[y]):.2f}")
    print(f"Revenue growth FY26 vs FY25 {pct(rev['FY26'], rev['FY25']):.1f}% | FY25 vs FY24 {pct(rev['FY25'], rev['FY24']):.1f}%")
    print(f"PAT growth FY26 vs FY25 {pct(pat['FY26'], pat['FY25']):.1f}%")
    for y in Y:
        print(f"{y}: EBITDA margin {ebitda[y]/rev[y]*100:.2f}% | PAT margin {pat[y]/rev[y]*100:.2f}%")

    print("\n== Working capital days, recomputed on the company's own formulas (RHP p38 notes)")
    for y in Y:
        d = DAYS[y]
        rd, pd, idd = recv[y] / rev[y] * d, pay[y] / rm[y] * d, inv[y] / rm[y] * d
        print(f"{y} ({d}d): receivable {rd:.1f} | payable {pd:.1f} | inventory {idd:.1f} | NWC {rd - pd + idd:.1f}"
              f" | company prints {company_days[y]}")
        rd365 = recv[y] / rev[y] * 365
        print(f"   check on 365 days: receivable {rd365:.1f}")

    print("\n== Days the company's NWC formula leaves out (contract assets incl. retention; advances)")
    for y in Y:
        d = DAYS[y]
        ca_d = ca[y] / rev[y] * d
        cl_d = cl[y] / rev[y] * d
        print(f"{y}: contract assets {cr(ca[y]):.2f} Cr = {ca_d:.1f} days of revenue | contract liabilities"
              f" {cr(cl[y]):.2f} Cr = {cl_d:.1f} days | receivable + contract assets {cr(recv[y] + ca[y]):.2f} Cr"
              f" = {(recv[y] + ca[y]) / rev[y] * d:.1f} days")
    ret = ret_noncur + ret_cur
    print(f"Retention 31 Mar 2026: {cr(ret_noncur):.2f} + {cr(ret_cur):.2f} = {cr(ret):.2f} Cr ="
          f" {ret / rev['FY26'] * 365:.1f} days of FY26 revenue; non-current share {ret_noncur / ret * 100:.1f}%")
    print(f"Receivables Rs Cr: FY26 {cr(recv['FY26']):.2f} | FY25 {cr(recv['FY25']):.2f} | FY24 {cr(recv['FY24']):.2f}")
    print(f"Receivable growth FY26 vs FY25 {pct(recv['FY26'], recv['FY25']):.1f}% vs revenue growth {pct(rev['FY26'], rev['FY25']):.1f}%")
    for y in Y:
        print(f"{y}: past due > 6 months {cr(past_due_6m[y]):.2f} Cr = {past_due_6m[y] / recv[y] * 100:.1f}% of receivables")

    print("\n== Borrowings and cash")
    for y in Y:
        debt = ncb[y] + cb[y]
        cb_all = cash[y] + bank_oth[y]
        print(f"{y}: borrowings {cr(debt):.2f} Cr | cash + other bank {cr(cb_all):.2f} Cr | net debt {cr(debt - cb_all):.2f} Cr"
              f" | net debt/equity {(debt - cb_all) / equity[y]:.2f} | debt/equity {debt / equity[y]:.2f}")
    print(f"3 Aug 2026: cash credit drawn {cr(cc_out_aug26):.2f} Cr of {cr(cc_sanc):.2f} Cr sanctioned"
          f" ({cc_out_aug26 / cc_sanc * 100:.1f}%); non-fund-based sanctioned {cr(nfb_sanc):.2f} Cr")

    print("\n== Order book")
    for k, v in ob.items():
        print(f"{k}: {cr(v):.2f} Cr")
    print(f"Order book 31 Jul 2026 / FY26 revenue = {ob['31-Jul-26'] / rev['FY26']:.2f}x")
    print(f"Order book growth 31 Mar 2026 vs 31 Mar 2025 {pct(ob['31-Mar-26'], ob['31-Mar-25']):.1f}%")

    print("\n== Q1 FY27 vs Q1 FY26 (unaudited consolidated)")
    for k, (a, b) in q1.items():
        print(f"{k}: {cr(a):.2f} Cr vs {cr(b):.2f} Cr ({pct(a, b):.1f}%)")

    print("\n== Operating cash flow (Q1 FY27 investor presentation, filed 6 Oct 2026, slide 28, Rs crore)")
    ocf = {"FY26": 73.3, "FY25": 73.0, "FY24": 42.7}
    wc_chg = {"FY26": -17.7, "FY25": 2.6, "FY24": -21.4}
    for y in Y:
        print(f"{y}: operating cash flow {ocf[y]} Cr = {ocf[y] / cr(pat[y]) * 100:.1f}% of PAT | working capital change {wc_chg[y]} Cr")

    print("\n== Dossier claims vs filings (Rs crore)")
    print(f"FY26 revenue: dossier {dossier['rev_FY26_cr']} vs filing {cr(rev['FY26']):.2f}")
    print(f"FY26 PAT: dossier {dossier['pat_FY26_cr']} vs filing {cr(pat['FY26']):.2f}")
    print(f"Order book: dossier {dossier['ob_cr']} vs filing {cr(ob['31-Jul-26']):.2f}")
    print(f"Q1 revenue: dossier {dossier['q1_rev_cr']} vs filing {cr(q1['rev'][0]):.2f}; Q1 PAT dossier"
          f" {dossier['q1_pat_cr']} vs filing {cr(q1['pat'][0]):.2f}")
    print(f"Dossier FY26 PAT margin 'about 18%': filing {pat['FY26'] / rev['FY26'] * 100:.2f}%")


def selfcheck():
    # filings' own arithmetic must hold, or an input was mistyped
    for y in Y:
        assert abs(rev[y] + other_inc[y] - total_inc[y]) < 0.02, y
        assert abs(round(ebitda[y] / rev[y] * 100, 2) - {"FY26": 23.02, "FY25": 26.23, "FY24": 17.97}[y]) < 0.02, y
        assert abs((cl[y] - ca[y]) - {"FY26": 388.47, "FY25": 370.89, "FY24": 300.60}[y]) < 0.02, y
    assert abs(sum(v for k, v in ob.items() if k == "31-Jul-26") - (6260.91 + 1861.91 + 1692.64)) < 0.02


if __name__ == "__main__":
    selfcheck()
    main()
