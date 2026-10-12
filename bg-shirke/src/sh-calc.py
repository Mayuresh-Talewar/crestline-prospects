# SH-1 calculations for B. G. Shirke Construction Technology Pvt Ltd (BGSCTPL).
# Every input is copied from a rating document named beside it. Nothing here is a forecast.
# Run: python -I src/sh-calc.py > src/sh-calc-output.txt
import sys
sys.stdout.reconfigure(encoding="utf-8")

BN_TO_CR = 100        # INR 1 billion = Rs 100 crore
MN_TO_CR = 0.1        # INR 1 million = Rs 0.1 crore
DAYS = 365

def cr(bn): return round(bn * BN_TO_CR, 2)
def pct(a, b): return round(100 * a / b, 2)
def days_of(share_pct): return round(share_pct / 100 * DAYS, 1)
def cagr(end, start, years): return round(100 * ((end / start) ** (1 / years) - 1), 2)

rows = []
def out(key, value, basis):
    rows.append((key, value, basis))
    print(f"{key} = {value}    [{basis}]")

# ---- India Ratings (Ind-Ra), standalone view, INR billion ----
REV = {"FY20": 38.79, "FY21": 31.53, "FY22": 43.9, "FY23": 57.9, "FY24": 58.9, "FY25": 59.16}   # 55271, 59236, 67175, 73764, 81548
EBITDA = {"FY24": 12.9, "FY25": 13.2}                      # 81548 key financials table
GWC_PCT = {"FY22": 36, "FY23": 31, "FY24": 36, "FY25": 44} # 73764 (FY22-24), 81548 (FY25)
NWC_PCT_2026 = {"FY23": 14, "FY24": 17, "FY25": 17}        # 81548
NWC_PCT_2024 = {"FY22": 8, "FY23": 14, "FY24": 17}         # 73764
NWC_PCT_2023 = {"FY22": 8, "FY23": 13}                     # 67175 (vintage differs on FY23)
CL_PCT = {"FY22": 28, "FY23": 18, "FY24": 19}              # 73764 current liabilities % revenue

for y, v in REV.items(): out(f"revenue_{y}_RsCr", cr(v), "Ind-Ra, INR bn x 100")
OLD_EBITDA = {"FY20": 7.8, "FY21": 5.3, "FY22": 6.8, "FY23_R3": 12.08, "FY23_R2": 12.5}  # 55271, 59236, 67175, 73764
NET_INCOME = {"FY20": 3.8, "FY21": 1.7, "FY22": 3.1, "FY23": 8.0}                      # 55271, 59236, 67175 tables
for y, v in OLD_EBITDA.items(): out(f"ebitda_{y}_RsCr", cr(v), "Ind-Ra summary tables")
for y, v in NET_INCOME.items(): out(f"net_income_{y}_RsCr", cr(v), "Ind-Ra summary tables")
out("revenue_1HFY26_RsCr", cr(28.2), "81548 text")
out("cash_FYE25_RsCr", cr(13.77), "81548"); out("cash_FYE24_RsCr", cr(10.8), "81548")
for y, v in EBITDA.items(): out(f"ebitda_{y}_RsCr", cr(v), "Ind-Ra 81548 table")
out("ebitda_margin_FY25_pct", pct(13.2, 59.16), "13.2/59.16; Ind-Ra prints 22.3")
out("ebitda_margin_FY24_pct", pct(12.9, 58.9), "12.9/58.9; Ind-Ra prints 22.1")
out("revenue_growth_FY25_pct", round(100 * (59.16 / 58.9 - 1), 2), "FY25 over FY24")
out("cagr_FY21_FY25_pct", cagr(59.16, 31.53, 4), "Ind-Ra 81548 says 17%")
out("cagr_FY20_FY24_pct", cagr(58.9, 38.79, 4), "Ind-Ra 73764 says 11%")

for y, p in GWC_PCT.items():
    out(f"gross_wc_days_{y}", days_of(p), f"{p}% of revenue x 365 (Computed)")
    out(f"gross_wc_RsCr_{y}", round(p / 100 * cr(REV[y]), 0), f"{p}% x revenue")
for y, p in NWC_PCT_2026.items():
    out(f"net_wc_days_{y}", days_of(p), f"{p}% of revenue x 365, Feb 2026 vintage (Computed)")
    out(f"net_wc_RsCr_{y}", round(p / 100 * cr(REV[y]), 0), f"{p}% x revenue")
out("net_wc_days_FY22", days_of(8), "8% x 365, Dec 2024 vintage")
out("net_wc_days_FY23_nov2023_vintage", days_of(13), "13% x 365; Feb 2026 vintage says 14%")
for y, p in CL_PCT.items(): out(f"current_liab_days_{y}", days_of(p), f"{p}% x 365")
# self-check: gross minus current liabilities should give net, per Ind-Ra's own definition
for y in ("FY22", "FY23", "FY24"):
    out(f"check_gwc_minus_cl_{y}_pct", GWC_PCT[y] - CL_PCT[y], f"vs net {NWC_PCT_2024[y]}% published")

# Ind-Ra FY20/FY21 day counts, 55271 (Jun 2021) and 53707 (Feb 2021)
INV_DAYS = {"FY20": 192, "FY21": 227}    # inventory incl. unbilled revenue
PAY_DAYS = {"FY20": 167, "FY21": 209}    # payables incl. mobilisation advances
NWC_DAYS = {"FY20": 25, "FY21": 18}
REC_DAYS = {"FY19": 27, "FY20": 40}      # 53707
for y in ("FY20", "FY21"):
    out(f"inv_minus_pay_{y}", INV_DAYS[y] - PAY_DAYS[y], f"vs NWC {NWC_DAYS[y]} published")
out("inv_plus_rec_minus_pay_FY20", INV_DAYS["FY20"] + REC_DAYS["FY20"] - PAY_DAYS["FY20"],
    "does NOT equal published NWC 25: receivables not in the published sum")
out("gross_cycle_inv_plus_rec_FY20", INV_DAYS["FY20"] + REC_DAYS["FY20"], "192 + 40 (Computed)")

# Order book
OB = {"Dec2025": (157.0, 59.16), "Oct2024": (166.1, 58.9), "Jul2023": (104.9, 57.9), "May2022": (124.15, 43.9)}
for k, (ob, rev) in OB.items():
    out(f"order_book_{k}_RsCr", cr(ob), "Ind-Ra")
    out(f"order_book_{k}_x_prior_FY_rev", round(ob / rev, 2), "order book / last full-year revenue")
out("order_book_Oct2019_RsCr", cr(177.0), "R8"); out("order_book_May2021_RsCr", cr(150.14), "R6")
out("order_book_share_Maharashtra_govt_pct", 81, "Ind-Ra 81548, as printed")
out("order_book_MHADA_CIDCO_MMRDA_KHADB_PMRDA_PCMC_sum_pct", 47 + 15 + 8 + 4 + 3 + 2, "sum of named shares; 81% printed")

# Limits and utilisation
LIM = {"FB": 9312.2, "NFB": 39058.8, "proposed_LT": 500.0, "LT_loan": 81.1}   # 73764, INR mn
total_2024 = round(sum(LIM.values()), 1)
out("limits_total_Dec2024_INRmn", total_2024, "sum of 73764 rows; 81548 says reduced from 48,952.1")
out("limits_total_Feb2026_RsCr", round(48888.2 * MN_TO_CR, 2), "81548")
out("fb_limit_Dec2024_RsCr", round(LIM["FB"] * MN_TO_CR, 2), "73764")
out("nfb_limit_Dec2024_RsCr", round(LIM["NFB"] * MN_TO_CR, 2), "73764")
out("fb_avg_drawn_RsCr_if_Dec2024_split", round(0.27 * LIM["FB"] * MN_TO_CR, 0),
    "27% avg FB utilisation (12m to Dec 2025) x Dec 2024 FB limit; split not republished in 2026")
out("nfb_avg_used_RsCr_if_Dec2024_split", round(0.65 * LIM["NFB"] * MN_TO_CR, 0), "65% x Dec 2024 NFB limit")
out("cash_1HFY26_RsCr", cr(15.48), "unencumbered cash incl. MFs, 81548")
out("group_exposure_1HFY26_RsCr", cr(6.4), "81548")
out("implied_gross_interest_FY25_RsCr", round(cr(13.2) / 13.7, 0),
    "EBITDA / 13.7x coverage; Ind-Ra uses EBITDAR, so approximate")
out("interest_FY23_RsCr", cr(1.2), "67175 financial summary")

# Vintage conflicts inside Ind-Ra's own releases
out("ebitda_margin_FY23_nov2023_pct", pct(12.08, 57.9), "12.08/57.9 (67175 prints 20.9)")
out("ebitda_margin_FY23_dec2024_pct", pct(12.5, 57.9), "12.5/57.9 (73764 prints 21.6)")

# ---- CARE, 27 Jul 2018, CONSOLIDATED, Rs crore ----
TOI = {"FY17": 2683.94, "FY18": 3229.07}; PBILDT = {"FY17": 432.12, "FY18": 630.54}; PAT = {"FY17": 42.00, "FY18": 200.47}
for y in TOI:
    out(f"care_pbildt_margin_{y}_pct", pct(PBILDT[y], TOI[y]), "CARE prints 16.16 (FY17) / 19.35 (FY18)")
    out(f"care_pat_margin_{y}_pct", pct(PAT[y], TOI[y]), "CARE prints 1.57 / 6.21")
out("care_toi_growth_FY18_pct", round(100 * (TOI["FY18"] / TOI["FY17"] - 1), 2), "CARE prints 21%")
out("care_book_debt_days_FY18", round(476 / TOI["FY18"] * DAYS, 1), "476 / TOI x 365; CARE prints 60 (basis not stated)")
out("care_debt_plus_unbilled_RsCr_FY18", round(476 + 509.35, 2), "book debts + unbilled")
out("care_debt_plus_unbilled_days_FY18", round((476 + 509.35) / TOI["FY18"] * DAYS, 1), "excl. retention, which CARE does not size")

# ---- ICRA grading, Jan 2012, Rs crore ----
out("icra_opbdit_margin_FY11_pct", pct(212.66, 1258.50), "ICRA prints 16.90")
out("icra_pat_margin_FY11_pct", pct(95.20, 1258.50), "ICRA prints 7.56")
out("icra_debtor_plus_inventory_days_FY11", 39 + 174, "gross current asset proxy, 2 lines only")
out("icra_wc_intensity_days_FY11", days_of(17), "17% x 365")
out("icra_wc_intensity_days_1HFY12", days_of(44), "44% x 365")
out("icra_order_book_x_FY11", round(3619 / 1258.50, 2), "vs 2.85x of construction turnover printed")

# ---- 2012 group guarantees (I1 p5, Rs crore) ----
out("icra_group_guarantees_FY11_RsCr", round(167.58 + 280.89 + 25.15, 2), "two shipping cos + aviation co")

# ---- fact-check tally, read from fact-check.md table ----
import os, re, collections
fc = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "fact-check.md")
verdicts = [m.group(1) for m in re.finditer(r"^\| \d+ \|[^|]*\| (Right|Wrong|Stale|Unsupported) \|", open(fc, encoding="utf-8").read(), re.M)]
tally = collections.Counter(verdicts)
for v in ("Right", "Wrong", "Stale", "Unsupported"): out(f"factcheck_{v}", tally[v], "count of fact-check.md rows")
out("factcheck_total", len(verdicts), "rows with a verdict")

# ---- planted self-checks: the script fails if arithmetic or inputs drift ----
assert abs(pct(13.2, 59.16) - 22.31) < 0.01
assert total_2024 == 48952.1, total_2024
assert days_of(44) == 160.6
assert round(cagr(59.16, 31.53, 4)) == 17
PLANTED = ("planted_check", 2 + 2)
assert PLANTED[1] == 4
print(f"\nrows={len(rows)} all asserts passed")
