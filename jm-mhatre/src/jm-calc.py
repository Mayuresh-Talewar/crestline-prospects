"""JM-1 calculations for J. M. Mhatre Infra Private Limited.
Every computed number in data.md / fact-check.md / depth.md comes from here.
Run:  python -I src/jm-calc.py <path-to-src/d> <path-to-text-dump-dir> > src/jm-calc-output.txt
Inputs are typed from the rationale pages AFTER image-checking them; each line names its source.
"""
import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")

CR = 10_000_000  # rupees in one crore
MN_PER_CR = 10   # INR million per crore


def cr(rupees):
    return round(rupees / CR, 2)


def pct(a, b):
    return round((a / b - 1) * 100, 2)


def share(a, b):
    return round(a / b * 100, 2)


print("== 1. Unit conversions (company filings, rupees to Rs crore)")
mgt7 = {
    "FY25 turnover (MGT-7 FY2024-25 p9)": 7_911_971_205,
    "FY25 net worth (MGT-7 FY2024-25 p9)": 6_716_754_270,
    "FY24 turnover (MGT-7 FY2023-24 p8)": 9_675_385_545,
    "FY24 net worth (MGT-7 FY2023-24 p8)": 6_776_468_968,
    "Paid-up equity (MGT-7 FY2024-25 p4)": 200_000_000,
}
for k, v in mgt7.items():
    print(f"{k}: Rs {cr(v)} Cr")
print("Director remuneration FY25 (MGT-7 p16), Rs Cr:",
      "WTD total", cr(83_045_000), "| Janardhan Moru Mhatre", cr(17_910_000),
      "| Pritam Janardhan Mhatre (part year)", cr(43_800_000), "=", share(43_800_000, 83_045_000), "% of WTD total")
print("ED cash seized Rs 16.50 lakh (Infomerics R13) in crore:", round(16.50 / 100, 4))

print("\n== 2. Unit conversions (INR million to Rs crore)")
for k, v in {
    "Ind-Ra fund-based WC limit (INR700 mn)": 700,
    "Ind-Ra non-fund-based WC limit (INR2000 mn)": 2000,
    "Ind-Ra bank loan facilities 18 Jun 2026 (INR2700 mn)": 2700,
    "CRISIL 10 Nov 2016 total facilities (Rs 2500 mn)": 2500,
    "Ind-Ra FY17P revenue (INR4,436 mn)": 4436,
    "Ind-Ra FY16 revenue (INR4,456 mn)": 4456,
    "Ind-Ra FY17P EBITDA (INR1,012 mn)": 1012,
    "Ind-Ra FY16 EBITDA (printed '9,90', read as INR990 mn)": 990,
    "Ind-Ra FY17P net income (INR442 mn)": 442,
    "Ind-Ra FY16 net income (INR429 mn)": 429,
    "Ind-Ra order book Jul 2017 (INR21.76 bn = 21,760 mn)": 21760,
}.items():
    print(f"{k}: Rs {v / MN_PER_CR:.2f} Cr")

print("\n== 3. Rated limits, sums")
inf_tl = [11.49, 3.89, 1.59, 1.24, 26.50, 1.00]
print("Infomerics 28 Mar 2024 term loans sum:", round(sum(inf_tl), 2), "(rationale prints 45.71)")
print("Infomerics LT = TL 45.71 + CC 90.00 =", round(45.71 + 90.00, 2), "; total with BG 375.00 =", round(45.71 + 90 + 375, 2))
print("CARE LT = CC 90.00 + TL 46.41 =", round(90 + 46.41, 2), "; total with BG 379.00 =", round(90 + 46.41 + 379, 2))
bwr_lt = [12.17, 90.00, 30.00, 64.77]
bwr_st = [273.00, 155.06]
print("Brickwork 28 Jul 2025 LT:", round(sum(bwr_lt), 2), "ST:", round(sum(bwr_st), 2), "total:", round(sum(bwr_lt) + sum(bwr_st), 2), "(prints 625.00)")
print("Brickwork 28 Jul 2025 sanctioned only (excl. proposed 30.00, 64.77, 155.06):",
      round(12.17 + 90.00 + 273.00, 2))
lenders = {  # Infomerics Annexure 3, 28 Mar 2024: (TL, CC, BG)
    "Bank of Baroda": (11.49, 40.00, 105.00), "Bank of India": (3.89, 20.00, 55.00),
    "IDBI Bank": (1.59, 15.00, 35.00), "Punjab National Bank": (1.24, 5.00, 38.00),
    "CSB Bank": (0.0, 10.00, 40.00), "Raigad District Central Co-operative Bank": (26.50, 0.0, 62.00),
    "GPP Sahakari Bank": (1.00, 0.0, 40.00),
}
tot = sum(sum(v) for v in lenders.values())
print("Lender total (Infomerics Annexure 3):", round(tot, 2))
print("  CC sum:", round(sum(v[1] for v in lenders.values()), 2), " BG sum:", round(sum(v[2] for v in lenders.values()), 2))
for k, v in sorted(lenders.items(), key=lambda kv: -sum(kv[1])):
    print(f"  {k}: {round(sum(v), 2)} Cr = {share(sum(v), tot)}% of rated")

print("\n== 4. Working-capital arithmetic (Infomerics 28 Mar 2024 p4, FY23)")
inv, coll, cred = 81, 71, 61
print("inventory + collection - creditors =", inv + coll - cred, "(rationale prints operating cycle 91)")
print("GCA days change FY22 266 -> FY23 275:", 275 - 266, "days")
print("CARE WC cycle FY22 74 -> FY23 87:", 87 - 74, "days")
print("Ind-Ra debtor days FY16 131 -> FY17 172:", 172 - 131, "days")

print("\n== 5. Order book ratios")
ob = [
    ("CARE 12 Oct 2022: 2511.91 / FY22 TOI 1151.38 (prints 2.25x)", 2511.91, 1151.38),
    ("CARE 21 Nov 2023: 2216.80 / FY23 TOI 1187.70 (prints 1.87x)", 2216.80, 1187.70),
    ("Infomerics 28 Mar 2024: 2130 / FY23 TOI 1187.70 (prints 1.8x)", 2130, 1187.70),
    ("Brickwork 28 Jul 2025: 2035.11 / FY25P 798.93 (prints 2.53x)", 2035.11, 798.93),
    ("Brickwork 28 Jul 2025: 2035.11 / FY25 MGT-7 turnover 791.20", 2035.11, 791.20),
]
for k, a, b in ob:
    print(f"{k}: {a / b:.2f}x")
print("CARE 2022 ratio on CRISIL's FY22 operating income 1123.64:", f"{2511.91 / 1123.64:.2f}x")
print("Brickwork total order book 5717.16 less unexecuted 2035.11 = executed", round(5717.16 - 2035.11, 2))
print("CARE Nov 2023 slow moving 59% of 2216.80 =", round(0.59 * 2216.80, 2), "Cr; standalone 41% =", round(0.41 * 2216.80, 2))
print("Infomerics slow moving 33% of 2130 =", round(0.33 * 2130, 2), "; government 72% =", round(0.72 * 2130, 2))
print("Brickwork top 5 ~53% of 2035.11 =", round(0.53 * 2035.11, 2), "; roads/bridges ~65% =", round(0.65 * 2035.11, 2))
print("CARE Oct 2022 slow moving 1094.00 / 2511.91 =", share(1094.00, 2511.91), "%")

print("\n== 6. Growth and margins (same source, same basis only)")
print("Infomerics TOI FY22 1135.69 -> FY23 1187.70:", pct(1187.70, 1135.69), "% (prints 4.58%)")
print("Infomerics/MGT-7 FY23 1187.70 -> FY24 967.54:", pct(967.54, 1187.70), "%")
print("MGT-7 turnover FY24 967.54 -> FY25 791.20:", pct(cr(7_911_971_205), cr(9_675_385_545)), "%")
print("Brickwork TOI FY24 982.66 -> FY25P 798.93:", pct(798.93, 982.66), "%")
print("Brickwork TOI FY23 1203.33 -> FY24 982.66:", pct(982.66, 1203.33), "%")
print("Brickwork EBITDA margin FY22..FY25:", [share(e, t) for e, t in [(121.65, 1135.69), (121.26, 1203.33), (39.39, 982.66), (79.18, 798.93)]])
print("Brickwork PAT margin FY22..FY25:", [share(p, t) for p, t in [(61.29, 1135.69), (41.59, 1203.33), (9.30, 982.66), (25.36, 798.93)]])
print("Brickwork FY19 -> FY25P TOI (2020 rationale 942.47 vs 2025 rationale 798.93):", pct(798.93, 942.47), "% (different vintages, indicative only)")

print("\n== 7. Conflicts between rationales on the SAME year (difference, % of lower)")
conf = [
    ("FY22 TOI: CRISIL 1123.64 vs Infomerics/Brickwork 1135.69", 1123.64, 1135.69),
    ("FY22 TOI: CARE 2023 1135.68 vs CARE 2022 1151.38", 1135.68, 1151.38),
    ("FY22 PBILDT: CARE 2023 121.65 vs CARE 2022 137.35", 121.65, 137.35),
    ("FY23 TOI: CARE/Infomerics 1187.70 vs Brickwork 1203.33", 1187.70, 1203.33),
    ("FY23 EBITDA: Infomerics 119.04 vs CARE PBILDT 122.62", 119.04, 122.62),
    ("FY24 TOI: Infomerics 967.54 vs Brickwork 982.66", 967.54, 982.66),
    ("FY24 EBITDA: Infomerics 25.00 vs Brickwork 39.39", 25.00, 39.39),
    ("FY25 revenue: MGT-7 turnover 791.20 vs Brickwork provisional 798.93", 791.20, 798.93),
    ("ED freeze: Brickwork Rs 42.20 Cr FDs vs Infomerics approx Rs 44 Cr", 42.20, 44.0),
]
for k, a, b in conf:
    print(f"{k}: diff {round(b - a, 2)} Cr = {share(b - a, a)}%")

print("\n== 8. KRHPL figures")
print("JMMIPL 51% of Rs 110 Cr equity:", round(0.51 * 110, 2), "(rationales print 56.10)")
print("Equity infused 42.50 of 56.10 (Infomerics, to Jan 2024): balance", round(56.10 - 42.50, 2))
print("Corporate guarantee 224.40 / FY25 MGT-7 net worth 671.68:", share(224.40, cr(6_716_754_270)), "%")


# ---------- scans over the downloaded corpus ----------
def corpus(txtdir):
    docs = {}
    for f in sorted(os.listdir(txtdir)):
        if f.endswith(".txt"):
            docs[f] = open(os.path.join(txtdir, f), encoding="utf-8", errors="replace").read()
    return docs


def scan(name, pattern, docs, planted, min_chars=500, flags=re.I):
    rx = re.compile(pattern, flags)
    small = [f for f, t in docs.items() if len(t) < min_chars]
    assert not any(rx.search(planted) is None for _ in [0]), f"{name}: planted text does not match"
    assert not any(planted in t for t in docs.values()), f"{name}: planted text already in corpus"
    probe = dict(docs)
    probe["__planted__"] = "x" * min_chars + " " + planted  # space so \b anchors can fire
    assert any(rx.search(t) for f, t in probe.items() if f == "__planted__"), f"{name}: planted hit missed"
    print(f"\n-- SCAN {name}: /{pattern}/ over {len(docs)} docs; planted hit found; docs under {min_chars} chars: {small or 'none'}")
    for f, t in docs.items():
        for m in rx.finditer(t):
            s = t[max(0, m.start() - 90): m.end() + 90].replace("\n", " ")
            print(f"   {f}: ...{re.sub(r'\s+', ' ', s)}...")


if len(sys.argv) > 2:
    docs = corpus(sys.argv[2])
    print("\n== 9. Corpus scans (text dumps, pdftotext -layout and JSON extracts)")
    scan("interest rate disclosed", r"(?<![\d.])\d{1,2}(?:\.\d{1,2})?\s?%\s?(?:p\.?a|per annum)|rate of interest|interest rate|coupon rate\s*\(?%?\)?\s*[:|]?\s*(?<![\d.])\d", docs,
         "rate of interest 9.75% per annum PLANTEDJM1")
    scan("live-deal check (cancel/terminate/short-close)", r"cancell?ation|cancell?ed|terminat\w*|short[- ]?clos\w*|foreclos\w*", docs,
         "contract was short-closed PLANTEDJM1")
    scan("sensitive (ED / PMLA / dispute / court)", r"Enforcement Directorate|\bED\b|PMLA|money laundering|arbitration|litigation|\bNCLT\b|wilful|\bdispute", docs,
         "arbitration award PLANTEDJM1", flags=re.I)
    scan("working-capital days", r"(?<![\d.])\d{2,3}\s+days", docs, "inventory of 999 days PLANTEDJM1")
    scan("dossier claim: dams", r"\bdams?\b", docs, "built two dams PLANTEDJM1")
    scan("dossier claim: ERP (SAP/Oracle/Tally)", r"\bSAP\b|\bOracle\b|\bTally\b|\bERP\b", docs, "runs on Tally PLANTEDJM1", flags=0)
    scan("dossier claim: letter of credit", r"letters? of credit|\bLC\b|\bLCs\b", docs, "an LC facility PLANTEDJM1", flags=0)
    scan("dossier claim: mobilisation advance", r"mobili[sz]ation advance", docs, "mobilisation advance PLANTEDJM1")
    scan("retention", r"retention", docs, "retention PLANTEDJM1")
    scan("CFO / chief financial officer", r"\bCFO\b|chief financial officer", docs, "the CFO PLANTEDJM1")
    scan("dossier claim: CIDCO", r"\bCIDCO\b", docs, "CIDCO PLANTEDJM1", flags=0)
