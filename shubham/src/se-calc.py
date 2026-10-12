# SE-1 calculator. Every computed figure in data.md / depth.md / fact-check.md comes from here.
# Run: python -I se-calc.py > se-calc.out.txt
# Inputs are typed from page images (see data.md for document + page). Units: Rs crore unless noted.
# 1 crore = 10 million, so Rs million / 10 = Rs crore.

# CRISIL Key Financial Indicators, standalone, as published (OI = operating income, PAT = reported PAT)
crisil = {  # FY: (OI, PAT, PAT margin % as printed, gearing, interest cover, rationale)
    2020: (154.6, 5.2, 3.3, 1.06, 2.84, "CRISIL 19 Jul 2021"),
    2021: (167.3, 6.6, 4.0, 0.68, 3.45, "CRISIL 19 Jul 2021"),
    2022: (275.82, 12.00, 4.35, 0.97, 5.27, "CRISIL 03 Apr 2024"),
    2023: (330.20, 16.96, 5.13, 0.90, 5.21, "CRISIL 03 Apr 2024"),
    2024: (444.39, 25.60, 5.76, 0.64, 6.14, "CRISIL 02 Jul 2025"),
    2025: (510.05, 35.90, 7.04, 0.60, 5.82, "CRISIL 02 Jul 2025"),
}
# Company newsletter SITE INSIGHT, FY2025-26 Q4 issue, PDF p5 charts (Rs million). FY26 provisional, FY27 projected.
nl_turnover = {2023: 3301, 2024: 4444, 2025: 5085, 2026: 6800, 2027: 10000}
nl_networth = {2023: 675, 2024: 931, 2025: 1227, 2026: 1669, 2027: 2489}
nl_ebitda = {2023: 312, 2024: 449, 2025: 569, 2026: 816, 2027: 1300}
nl_margin_label = {2023: 9, 2024: 10, 2025: 11, 2026: 12, 2027: 13}


def cr(mn):
    return mn / 10


def cagr(a, b, years):
    return ((b / a) ** (1 / years) - 1) * 100


def pr(label, value, unit=""):
    print(f"{label}: {value}{unit}")


print("== 1. CRISIL operating income, year on year growth (same basis: CRISIL standalone) ==")
yrs = sorted(crisil)
for a, b in zip(yrs, yrs[1:]):
    pr(f"FY{a}->FY{b} OI growth", f"{(crisil[b][0] / crisil[a][0] - 1) * 100:.1f}", "%")
pr("FY2023->FY2025 OI CAGR (2 yrs)", f"{cagr(crisil[2023][0], crisil[2025][0], 2):.1f}", "%")
pr("FY2020->FY2025 OI CAGR (5 yrs)", f"{cagr(crisil[2020][0], crisil[2025][0], 5):.1f}", "%")

pr("FY2022->FY2025 OI multiple (tests dossier '2-3x in 2-3 yrs')", f"{crisil[2025][0] / crisil[2022][0]:.2f}", "x")
pr("FY2020->FY2025 OI multiple", f"{crisil[2025][0] / crisil[2020][0]:.2f}", "x")
pr("FY2023->FY2025 OI multiple",f"{crisil[2025][0] / crisil[2023][0]:.2f}", "x")
pr("FY2024 actual OI minus CRISIL 'booked Rs 429 cr as of Feb-24'", f"{crisil[2024][0] - 429:.2f}", " cr")

print("\n== 2. CRISIL PAT margin recomputed vs printed ==")
for y in yrs:
    oi, pat, m = crisil[y][:3]
    pr(f"FY{y} PAT/OI", f"{pat / oi * 100:.2f}% (printed {m}%)")

print("\n== 3. Newsletter turnover in crore vs CRISIL operating income (different documents, same years) ==")
for y in (2023, 2024, 2025):
    d = cr(nl_turnover[y]) - crisil[y][0]
    pr(f"FY{y} newsletter {cr(nl_turnover[y]):.2f} cr vs CRISIL {crisil[y][0]} cr, diff", f"{d:+.2f} cr ({d / crisil[y][0] * 100:+.2f}%)")
pr("FY2026 provisional turnover", f"{cr(nl_turnover[2026]):.0f}", " cr")
pr("FY2027 projected turnover", f"{cr(nl_turnover[2027]):.0f}", " cr")
pr("FY2025->FY2026 provisional growth (newsletter basis)", f"{(nl_turnover[2026] / nl_turnover[2025] - 1) * 100:.1f}", "%")
pr("FY2026->FY2027 projected growth (newsletter basis)", f"{(nl_turnover[2027] / nl_turnover[2026] - 1) * 100:.1f}", "%")

print("\n== 4. Newsletter EBITDA margin recomputed vs label; 'EBIDTA' as printed ==")
for y in nl_ebitda:
    pr(f"FY{y} EBITDA {cr(nl_ebitda[y]):.1f} cr / turnover {cr(nl_turnover[y]):.1f} cr", f"{nl_ebitda[y] / nl_turnover[y] * 100:.2f}% (label {nl_margin_label[y]}%)")
pr("Net worth FY2025 (newsletter)", f"{cr(nl_networth[2025]):.1f}", " cr")
pr("Net worth FY2026 provisional (newsletter)", f"{cr(nl_networth[2026]):.1f}", " cr")

print("\n== 5. What the printed 24.82% / 29.82% arrows could mean (test, not adopt) ==")
for name, s in (("turnover", nl_turnover), ("net worth", nl_networth)):
    for a, b in ((2023, 2025), (2023, 2026), (2023, 2027), (2024, 2027), (2025, 2027)):
        pr(f"{name} CAGR FY{a}->FY{b}", f"{cagr(s[a], s[b], b - a):.2f}", "%")

print("\n== 6. Gross current assets band (CRISIL 02 Jul 2025: 155 to 200 days, FY23 to FY25) on FY2025 OI ==")
oi25 = crisil[2025][0]
for d in (155, 200):
    pr(f"GCA at {d} days of FY2025 OI", f"{oi25 * d / 365:.1f}", " cr")
pr("Earlier band (CRISIL 03 Apr 2024: 145 to 201 days, FY22 to FY23) on FY2023 OI, low", f"{crisil[2023][0] * 145 / 365:.1f}", " cr")
pr("Earlier band on FY2023 OI, high", f"{crisil[2023][0] * 201 / 365:.1f}", " cr")

print("\n== 7. Order book cover (order book date differs from revenue year: stated, not same-basis) ==")
pr("Rs 1,400 cr (Jul 2025) / FY2025 OI", f"{1400 / oi25:.2f}", "x")
pr("Rs 1,000 cr (Apr 2024) / FY2023 OI", f"{1000 / crisil[2023][0]:.2f}", "x")
pr("Rs 1,000 cr (Apr 2024) / FY2024 OI", f"{1000 / crisil[2024][0]:.2f}", "x")
pr("Rs 1,400 cr spread over 24 months, per year", f"{1400 / 2:.0f}", " cr")
pr("Rs 1,400 cr spread over 30 months, per year", f"{1400 / 2.5:.0f}", " cr")

print("\n== 8. Rated bank facilities, sums by type (CRISIL lender annexures) ==")
fac25 = {  # (type, amount, lender) CRISIL 02 Jul 2025
    "BG": [(5, "Axis"), (17, "ICICI"), (25, "Axis"), (18, "ICICI")],
    "CC": [(3, "HDFC"), (5, "Axis"), (13, "ICICI"), (15, "HDFC"), (15, "Axis")],
    "CC/OD": [(12.5, "BoB"), (2, "ICICI")],
    "LC&BG": [(24.5, "HDFC"), (10.5, "HDFC"), (24.5, "BoB")],
    "Proposed FB": [(6.5, "proposed"), (5, "proposed")],
    "Proposed NFB": [(5.4, "proposed"), (17, "proposed")],
    "TL": [(1.1, "HDFC")],
}
fac24 = {  # CRISIL 03 Apr 2024
    "BG": [(25, "Axis"), (18, "ICICI")], "CC": [(15, "HDFC"), (15, "Axis")],
    "CC/OD": [(2, "ICICI"), (12.5, "BoB")], "LC&BG": [(24.5, "HDFC"), (24.5, "BoB")],
    "Proposed FB": [(5, "proposed")], "Proposed NFB": [(5.4, "proposed"), (17, "proposed")], "TL": [(1.1, "HDFC")],
}
FUND = ("CC", "CC/OD", "Proposed FB", "TL")
for tag, fac in (("Jul 2025", fac25), ("Apr 2024", fac24)):
    tot = sum(a for v in fac.values() for a, _ in v)
    fb = sum(a for k, v in fac.items() if k in FUND for a, _ in v)
    cc = sum(a for k in ("CC", "CC/OD") for a, _ in fac[k])
    pr(f"{tag} total rated", f"{tot:g}", " cr")
    pr(f"{tag} fund based (CC, CC/OD, proposed FB, TL)", f"{fb:g}", " cr")
    pr(f"{tag} non fund based", f"{tot - fb:g}", " cr")
    pr(f"{tag} sanctioned CC and CC/OD only", f"{cc:g}", " cr")
    by = {}
    for v in fac.values():
        for a, l in v:
            by[l] = by.get(l, 0) + a
    print(f"  {tag} by lender: " + ", ".join(f"{k} {v:g}" for k, v in sorted(by.items(), key=lambda x: -x[1])))
pr("Rated amount growth Apr 2024 to Jul 2025", f"{(225 / 165 - 1) * 100:.1f}", "%")

print("\n== 9. Cross-source estimates (Weak: mixes CRISIL adjusted ratios with newsletter figures; never print) ==")
pr("FY2025 implied debt = gearing 0.60 x newsletter net worth", f"{0.60 * cr(nl_networth[2025]):.1f}", " cr")
pr("FY2025 implied interest = newsletter EBITDA / interest cover 5.82", f"{cr(nl_ebitda[2025]) / 5.82:.1f}", " cr")

print("\n== self-check ==")
assert abs(sum(a for v in fac25.values() for a, _ in v) - 225) < 1e-9, "2025 annexure must sum to Rs 225 cr"
assert abs(sum(a for v in fac24.values() for a, _ in v) - 165) < 1e-9, "2024 annexure must sum to Rs 165 cr"
assert abs(sum(a for k, v in fac25.items() if k in FUND for a, _ in v) - 78.1) < 1e-9, "2025 fund based must equal history table 78.1"
assert abs(sum(a for k, v in fac24.items() if k in FUND for a, _ in v) - 50.6) < 1e-9, "2024 fund based must equal history table 50.6"
print("annexure sums tie to CRISIL rating history tables: OK")
