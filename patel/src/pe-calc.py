"""PE-1 calculations for Patel Engineering Ltd. Every computed number in data.md / depth.md comes from here.
Run: python -I src/pe-calc.py > src/pe-calc-output.txt   (from the patel folder)
Inputs are typed from page images; source noted on each line. Units: Rs million unless stated. 1 crore = 10 million.
"""
import sys
sys.stdout.reconfigure(encoding="utf-8")

CR = 10.0  # Rs million per crore


def cr(mn):
    return mn / CR


def days(bal, flow):
    return bal / flow * 365


def out(label, val, fmt="{:,.2f}"):
    print(f"{label}: {fmt.format(val)}")


# ===== STANDALONE P&L (AR FY26 vintage for FY26/FY25; AR FY25 vintage for FY24) =====
# Q4 FY26 results filing 14 May 2026, PDF p9 (standalone); AR FY25 PDF p150 (FY24 column)
rev = {"FY26": 50665.64, "FY25": 50076.45, "FY24": 44120.39}
mat = {"FY26": 12821.48, "FY25": 9019.10}
constr = {"FY26": 24773.68, "FY25": 27587.53, "FY24": 32425.57}  # FY24 line includes materials (AR FY25 layout)
emp = {"FY26": 4019.67, "FY25": 3822.73, "FY24": 3531.82}
oth = {"FY26": 2456.46, "FY25": 2734.51, "FY24": 1961.94}
fin = {"FY26": 2906.13, "FY25": 3187.84, "FY24": 3567.88}
pat = {"FY26": 2849.60, "FY25": 2622.10, "FY24": 2855.96}
dep = {"FY26": 1085.46, "FY25": 992.50}
oi = {"FY26": 1536.47, "FY25": 2085.62}
pbt_pre_exc = {"FY26": 4139.23, "FY25": 4817.86}

print("=== STANDALONE P&L (Rs crore) ===")
ebitda = {}
for y in ["FY26", "FY25", "FY24"]:
    opex = mat.get(y, 0) + constr[y] + emp[y] + oth[y]
    ebitda[y] = rev[y] - opex
    out(f"{y} revenue from operations Cr", cr(rev[y]))
    out(f"{y} EBITDA computed (revenue less material, construction, employee, other exp) Cr", cr(ebitda[y]))
    out(f"{y} EBITDA margin %", ebitda[y] / rev[y] * 100)
    out(f"{y} finance cost Cr", cr(fin[y]))
    out(f"{y} PAT Cr", cr(pat[y]))
# cross-check: PBT before exceptional = EBITDA plus other income less finance less depreciation
for y in ["FY26", "FY25"]:
    chk = ebitda[y] + oi[y] - fin[y] - dep[y]
    assert abs(chk - pbt_pre_exc[y]) < 0.05, (y, chk)
print("check: EBITDA plus other income less finance less depreciation = PBT before exceptional (FY26, FY25): OK")
out("Revenue growth FY26 vs FY25 % (standalone, AR FY26 vintage)", (rev["FY26"] / rev["FY25"] - 1) * 100)
out("Finance cost / revenue FY26 %", fin["FY26"] / rev["FY26"] * 100)

# ===== CONSOLIDATED P&L =====
# Q4 FY26 results PDF p20; Q4 FY25 results (13 May 2025) PDF p21
crev = {"FY26": 51027.42, "FY25": 50933.59, "FY24": 45441.08}
cnp = {"FY26": 2691.65, "FY25": 2478.52, "FY24": 3022.10}  # net profit after associates, continuing ops
cfin = {"FY26": 2964.44, "FY25": 3224.18, "FY24": 3620.94}
print("\n=== CONSOLIDATED P&L (Rs crore) ===")
for y in ["FY26", "FY25", "FY24"]:
    out(f"{y} revenue Cr", cr(crev[y]))
    out(f"{y} net profit after associates (continuing) Cr", cr(cnp[y]))
    out(f"{y} finance cost Cr", cr(cfin[y]))
out("Consolidated revenue growth FY25 vs FY24 %", (crev["FY25"] / crev["FY24"] - 1) * 100)
out("Consolidated revenue growth FY26 vs FY25 %", (crev["FY26"] / crev["FY25"] - 1) * 100)
q4fy25, q4fy24 = 381.65, 1403.46  # Q4 FY25 results PDF p21, line 11
out("Q4 FY25 vs Q4 FY24 consolidated net profit change %", (q4fy25 / q4fy24 - 1) * 100)

# ===== STANDALONE BALANCES =====
print("\n=== STANDALONE WORKING-CAPITAL BALANCES (Rs crore) ===")
# Trade receivables, AR FY26 PDF p120 (note 4); FY24 from AR FY25 PDF p169
tr = {"FY26": 2701.30 + 5434.07, "FY25": 3145.25 + 6780.75, "FY24": 2777.35 + 4747.59}
assert abs(tr["FY26"] - 8135.37) < 0.05 and abs(tr["FY25"] - 9926.00) < 0.05 and abs(tr["FY24"] - 7524.94) < 0.05
age = {  # gross, by due date: <6m, 6m-1y, 1-2y, 2-3y, >3y, not due
    "FY26": [3541.67, 771.03, 1051.88, 176.64, 2866.47, 0.0],
    "FY25": [5537.04, 289.49, 864.35, 942.62, 2704.16, 0.0],
    "FY24": [1772.17, 414.00, 1830.88, 1089.07, 1873.95, 549.83],
}
gross_tot = {"FY26": 8407.70, "FY25": 10337.66, "FY24": 7529.90}
adv_awards = {"FY26": 4042.42, "FY25": 3573.88, "FY24": 4914.11}  # netted off receivables
for y in ["FY26", "FY25", "FY24"]:
    assert abs(sum(age[y]) - gross_tot[y]) < 0.05, (y, sum(age[y]))
    out(f"{y} trade receivables net Cr", cr(tr[y]))
    out(f"{y} receivable days on standalone revenue", days(tr[y], rev[y]), "{:,.1f}")
    out(f"{y} gross receivables more than 3 years Cr", cr(age[y][4]))
    out(f"{y} share of gross receivables older than 3 years %", age[y][4] / gross_tot[y] * 100, "{:,.1f}")
    out(f"{y} share of gross receivables older than 1 year %", sum(age[y][2:5]) / gross_tot[y] * 100, "{:,.1f}")
    out(f"{y} advances received against arbitration awards/claims netted off receivables Cr", cr(adv_awards[y]))
print("check: ageing buckets sum to filed gross totals (FY26, FY25, FY24): OK")

# Contract assets (unbilled WIP), AR FY26 PDF p138 note (iii) and PDF p122 note 9
ca = {"FY26": 36757.77, "FY25": 32943.52, "FY24open": 29561.57}
ca_nc = {"FY26": 12070.58, "FY25": 8958.88}
ca_c = {"FY26": 24687.20, "FY25": 23984.64}
for y in ["FY26", "FY25"]:
    assert abs(ca_nc[y] + ca_c[y] - ca[y]) < 0.05, y
print("check: non-current + current contract assets = contract-balance table (FY26, FY25): OK")
cl = {"FY26": 6202.27, "FY25": 6674.69, "FY24open": 7656.60}
assert abs(3938.60 + 2263.68 - cl["FY26"]) < 0.05  # notes 26 and 21
for y in ["FY26", "FY25"]:
    out(f"{y} contract assets Cr", cr(ca[y]))
    out(f"{y} contract asset days on standalone revenue", days(ca[y], rev[y]), "{:,.1f}")
    out(f"{y} non-current contract assets Cr", cr(ca_nc[y]))
    out(f"{y} non-current contract asset days", days(ca_nc[y], rev[y]), "{:,.1f}")
    out(f"{y} current contract assets Cr", cr(ca_c[y]))
    out(f"{y} current contract asset days", days(ca_c[y], rev[y]), "{:,.1f}")
    out(f"{y} contract liabilities (client advances) Cr", cr(cl[y]))
    out(f"{y} contract liability days", days(cl[y], rev[y]), "{:,.1f}")
out("Contract assets 1 Apr 2024 (AR FY26 roll-forward) Cr", cr(ca["FY24open"]))
out("Contract assets growth 1 Apr 2024 to 31 Mar 2026 %", (ca["FY26"] / ca["FY24open"] - 1) * 100, "{:,.1f}")
out("Non-current contract assets growth FY25 to FY26 %", (ca_nc["FY26"] / ca_nc["FY25"] - 1) * 100, "{:,.1f}")

inv = {"FY26": 7914.27, "FY25": 9077.46}  # AR FY26 PDF p122 note 10 (AR FY26 vintage)
inv_land = {"FY26": 1265.16, "FY25": 2367.48}

# Trade payables, AR FY26 PDF p125-126 notes 18 and 24; ageing PDF p140 note 55
tp = {"FY26": 6630.75 + 21586.09, "FY25": 7166.31 + 20990.45}
assert abs(tp["FY26"] - 28216.84) < 0.05 and abs(tp["FY25"] - 28156.76) < 0.05
cogs_like = mat["FY26"] + constr["FY26"]
for y in ["FY26", "FY25"]:
    out(f"{y} trade payables Cr", cr(tp[y]))
    out(f"{y} payable days on standalone revenue", days(tp[y], rev[y]), "{:,.1f}")
out("FY26 payable days on material + construction cost", days(tp["FY26"], cogs_like), "{:,.1f}")
pay_unbilled = 12644.81
out("FY26 payables unbilled / not due Cr", cr(pay_unbilled))
out("FY26 share of payables unbilled / not due %", pay_unbilled / tp["FY26"] * 100, "{:,.1f}")
pay_gt3 = 1988.52
out("FY26 share of payables more than 3 years past due %", pay_gt3 / tp["FY26"] * 100, "{:,.1f}")
msme = {"FY26": 870.35, "FY25": 461.05}
msme_late = {"FY26": 1613.46, "FY25": 541.08}
out("FY26 MSME dues Cr", cr(msme["FY26"]))
out("FY25 MSME dues Cr", cr(msme["FY25"]))
out("FY26 MSME paid beyond appointed day Cr", cr(msme_late["FY26"]))
out("FY25 MSME paid beyond appointed day Cr", cr(msme_late["FY25"]))
out("FY26 MSME interest accrued and unpaid at year end Cr", cr(162.76))
out("MSME late payments growth FY25 to FY26 (multiple)", msme_late["FY26"] / msme_late["FY25"], "{:,.2f}")

# Trade working capital (simple, stated formula): receivables + contract assets + inventory less payables less contract liabilities
print("\n=== STANDALONE TRADE WORKING CAPITAL (formula stated) ===")
for y in ["FY26", "FY25"]:
    twc = tr[y] + ca[y] + inv[y] - tp[y] - cl[y]
    out(f"{y} trade WC (rec + contract assets + inventory less trade payables less contract liabilities) Cr", cr(twc))
    out(f"{y} trade WC days on standalone revenue", days(twc, rev[y]), "{:,.1f}")
    twc_x = tr[y] + ca[y] + (inv[y] - inv_land[y]) - tp[y] - cl[y]
    out(f"{y} same excluding stock of land, days", days(twc_x, rev[y]), "{:,.1f}")

# Retention (management words, Q1 FY27 call PDF p15): Rs 200 to 250 crore
for r in (200, 250):
    out(f"Retention Rs {r} Cr as days of FY26 standalone revenue", days(r * CR, rev["FY26"]), "{:,.1f}")

# Borrowings, AR FY26 PDF p123 note 16, PDF p125 note 23, PDF p140 note 51
print("\n=== BORROWINGS AND CASH ===")
bor = {"FY26": 2393.94 + 8846.10, "FY25": 3323.01 + 12009.40}
out("FY26 standalone borrowings Cr", cr(bor["FY26"]))
out("FY25 standalone borrowings Cr", cr(bor["FY25"]))
out("Standalone borrowings change FY25 to FY26 Cr", cr(bor["FY26"] - bor["FY25"]))
cdebt = {"FY26": 2563 + 9306, "FY25": 3884 + 12567}  # Q4 FY26 deck PDF p36 (consolidated, Rs Mn rounded)
out("FY26 consolidated borrowings from deck balance sheet Cr", cr(cdebt["FY26"]))
ocf = {"FY26": 5641.16, "FY25_ar26": 2839.17, "FY25_ar25": 3683.19, "FY24_ar25": 4543.82}
for k, v in ocf.items():
    out(f"Standalone operating cash flow {k} Cr", cr(v))
out("FY26 standalone OCF / computed EBITDA %", ocf["FY26"] / ebitda["FY26"] * 100, "{:,.1f}")
out("FY25 OCF restatement, AR FY26 minus AR FY25 vintage Cr", cr(ocf["FY25_ar26"] - ocf["FY25_ar25"]))
out("Consolidated OCF FY26 Cr", cr(5601.02))
bg = 23988.01  # AR FY26 PDF p136 note 46(a)
out("Bank guarantees / surety bonds outstanding FY26 Cr", cr(bg))
out("Bank guarantees as multiple of FY26 standalone revenue", bg / rev["FY26"], "{:,.2f}")

# ===== ORDER BOOK =====
print("\n=== ORDER BOOK ===")
ob = {"FY24": 186630, "FY25": 152176, "FY26": 151193, "Q1FY27": 146356}  # AR FY24 PDF p12; Q4FY25 deck p33; Q4FY26 deck p11; Q1FY27 deck p10
for k, v in ob.items():
    out(f"Order book {k} Cr", cr(v))
out("Order book change FY24 to FY26 %", (ob["FY26"] / ob["FY24"] - 1) * 100, "{:,.1f}")
out("Book to bill FY26: order book / consolidated FY26 revenue", ob["FY26"] / crev["FY26"], "{:,.2f}")
out("FY26 order inflow (deck ~44,000 Mn) Cr", cr(44000))

# ===== PROMISES =====
print("\n=== PROMISE CHECKS ===")
out("FY26 inflow vs Rs 8,000 Cr target (Aug 2025) %", 4400 / 8000 * 100, "{:,.1f}")
out("FY26 non-core monetisation Rs 185 Cr vs Rs 150-200 Cr band: inside band (1=yes)", 1 if 150 <= 185 <= 200 else 0, "{:,.0f}")
out("Term debt FY25 601 Cr to FY26 340 Cr, reduction Cr (call figures)", 601 - 340, "{:,.0f}")

# ===== PLAIN CONVERSIONS USED IN data.md (Rs Mn to Rs Cr) =====
print("\n=== CONVERSIONS (Rs Mn -> Rs Cr) ===")
conv = {
    "Q1 FY27 standalone revenue (R1Q27 p4)": 12737.27,
    "Q1 FY27 standalone PAT": 857.67,
    "Q1 FY27 standalone finance cost": 610.14,
    "Contract liabilities 1 Apr 2024 (AR26 p138)": 7656.60,
    "Secured deposit, note 6, non-current + current FY26": 2946.02 + 2005.12,
    "Inventories FY26": 7914.27,
    "Inventories FY25 (AR26 vintage)": 9077.46,
    "Stock of land FY26": 1265.16,
    "Inventories FY25 (AR25 vintage, includes unbilled WIP)": 42020.98,
    "Piece rate wages payable, current FY26": 9953.97,
    "Piece rate wages payable, current FY25": 6675.08,
    "MSME interest accrued and unpaid FY25": 79.03,
    "Listed NCD issued FY26": 900.00,
    "Term loan from banks FY26": 849.49,
    "Foreign currency term loan FY26": 281.97,
    "Term loan from others FY26": 304.38,
    "Supplier finance from others FY26": 515.68,
    "Supplier finance from banks FY26": 189.83,
    "Unsecured loan from others at 10% FY26": 329.43,
}
conv.update({
    "S7 contingent: service tax and GST in appeal FY26 (AR26 p136)": 2020.78,
    "S7 contingent: income tax in appeal FY26": 2807.37,
    "S7 US surety settlement (AR26 p128, Rs 469.35 Mn)": 469.35,
    "S9 loans to related parties non-current FY26 (AR26 p121)": 3948.79,
    "S9 loans to related parties current FY26": 777.36,
    "S9 ACP Tollways impairment FY26 (AR26 p122)": 299.50,
    "S9 ACP Tollways held for sale, net FY26": 550.00,
    "S10 irrecoverable debts and advances written off FY26 (R4Q26 p12)": 1526.93,
    "S10 irrecoverable debts and advances written off FY25 (AR26 vintage)": 2915.17,
    "S10 excess credit written back FY26": 1022.59,
    "S10 exceptional items FY26 standalone": 1175.68,
    "S10 exceptional items FY25 standalone": 1417.95,
    "S10 bad debts written off incl. Vivad se Vishwas FY26 (AR26 p138)": 669.22,
    "S10 bad debts written off incl. Vivad se Vishwas FY25": 1062.24,
})
conv.update({
    "S6 India Ratings fund-based limits (NSE 28 Apr 2025)": 16848.4,
    "S6 India Ratings non-fund-based limits": 56096.9,
})
for k, v in conv.items():
    out(f"{k} Cr", cr(v))
# Rupee amounts (NSE 30 Sep 2025 Acron filing) to crore: 1 crore = 1,00,00,000 rupees
out("S7 Acron settlement Rs 38,84,80,617 in Cr", 388480617 / 1e7)
out("S7 Acron stated total liability Rs 56,56,31,661 in Cr", 565631661 / 1e7)
out("Contract assets / net trade receivables FY26 (multiple)", ca["FY26"] / tr["FY26"])

if __name__ == "__main__":
    print("\nALL CHECKS PASSED")
