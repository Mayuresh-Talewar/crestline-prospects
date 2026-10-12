import sys
sys.stdout.reconfigure(encoding="utf-8")
# KH-1 calculations. Every input is copied from a rating rationale (image-checked); source tag on each.
# Run: python -I scripts/kh-calc.py > calc/kh-calc-output.txt
# C25 = CARE 06 Oct 2025, C24 = CARE 04 Oct 2024 (Revised), B20 = Brickwork 15 Dec 2020,
# B20M = Brickwork 31 Mar 2020, CR17 = CRISIL 24 Jan 2017. All Rs crore, standalone.

def pct(a, b):
    return round(100 * a / b, 2)

out = []
def row(label, value, note=""):
    out.append(f"{label}: {value}{('  | ' + note) if note else ''}")

# 1. Margins recomputed against the printed margins
C25 = {"FY24A": (610.85, 131.48, 109.54), "FY25UA": (639.86, 98.76, 90.11), "4MFY26UA": (210.79, 35.83, 33.73)}
C24 = {"FY23A": (638.08, 129.79, 126.38), "FY24UA": (610.85, 135.28, 111.22), "Q1FY25UA": (97.06, 22.00, 126.38)}
for tag, d in (("C25", C25), ("C24", C24)):
    for yr, (toi, pbildt, pat) in d.items():
        row(f"{tag} {yr} PBILDT margin %", pct(pbildt, toi))
        row(f"{tag} {yr} PAT margin %", pct(pat, toi))
printed = {"C25 FY24 PBILDT": 21.52, "C25 FY25 PBILDT": 15.43, "C25 FY24 PAT": 17.93, "C25 FY25 PAT": 14.08,
           "C24 FY24 PBILDT": 22.15, "C24 FY23 PBILDT": 20.34, "C24 FY24 PAT": 18.21, "C24 FY23 PAT": 19.81,
           "C24 Q1FY25 PBILDT": 22.67, "C24 Q1FY25 PAT": 16.57}
assert pct(131.48, 610.85) == printed["C25 FY24 PBILDT"]
assert pct(98.76, 639.86) == printed["C25 FY25 PBILDT"]
assert pct(109.54, 610.85) == printed["C25 FY24 PAT"]
assert pct(90.11, 639.86) == printed["C25 FY25 PAT"]
assert pct(135.28, 610.85) == printed["C24 FY24 PBILDT"]
assert pct(129.79, 638.08) == printed["C24 FY23 PBILDT"]
assert pct(111.22, 610.85) == printed["C24 FY24 PAT"]
assert pct(126.38, 638.08) == printed["C24 FY23 PAT"]
assert pct(22.00, 97.06) == printed["C24 Q1FY25 PBILDT"]
row("C24 Q1FY25 PAT implied by printed 16.57% margin", round(0.1657 * 97.06, 2),
    "table prints 126.38, same as FY23 PAT: table error")

# 2. Growth
row("TOI growth FY25 over FY24 % (C25)", round(100 * (639.86 / 610.85 - 1), 2), "C25 text says 'grew by 5%'")
row("TOI change FY24 over FY23 % (C24)", round(100 * (610.85 / 638.08 - 1), 2))
row("Revenue growth FY16 over FY15 % (CR17)", round(100 * (223.9 / 107.8 - 1), 2))
row("Operating revenue growth FY20 over FY19 % (B20)", round(100 * (230.40 / 209.60 - 1), 2))
row("B20 FY19 EBITDA margin %", pct(21.86, 209.60))
row("B20 FY20 EBITDA margin %", pct(31.82, 230.40))
row("B20M FY17 EBITDA margin on total income %", pct(9.32, 200.89))
row("B20M FY18 EBITDA margin on total income %", pct(14.30, 213.41))

# 3. Order book multiples
row("C25 order book / FY25 TOI (x)", round(1878.72 / 639.86, 3), "printed 2.93x of net sales")
row("C24 order book / FY24 TOI (x)", round(2681 / 610.85, 3), "printed 4.39x of total income FY24 (Provisional)")
row("C25 slow-moving share of order book %", pct(196.37, 1878.72))
row("C24 slow-moving share of order book %", pct(425.01, 2681))
row("Order book change 30 Jun 2024 to 30 Jun 2025 (Rs Cr)", round(1878.72 - 2681, 2))
row("B20 order book 27 Nov 2020 / FY20 operating revenue (x)", round(2066.72 / 230.40, 3))

# 4. Operating cycle = inventory + collection - creditors (as the rationales define it)
for tag, inv, col, cred, printed_oc in (("C25 FY25", 32, 51, 39, 44), ("C25 FY24", 17, 33, 42, 8),
                                        ("C24 FY24", 18, 39, 45, 12), ("C24 FY23", 11, 26, 53, None)):
    oc = inv + col - cred
    row(f"{tag} operating cycle recomputed (days)", oc, f"printed {printed_oc if printed_oc is not None else 'negative'}")
    if printed_oc is not None:
        assert oc == printed_oc
    else:
        assert oc < 0

# 5. Same-year conflicts between the two CARE vintages (FY24)
for label, a24, a25 in (("TOI", 610.85, 610.85), ("PBILDT", 135.28, 131.48), ("PAT", 111.22, 109.54),
                        ("Interest coverage x", 29.16, 28.33), ("Collection days", 39, 33), ("Inventory days", 18, 17),
                        ("Creditor days", 45, 42), ("Operating cycle days", 12, 8), ("GCA days", 236, 220),
                        ("Current ratio x", 1.38, 1.30), ("Free cash 31 Mar 2024", 43.33, 43.10),
                        ("CFO FY24", 135.10, 100), ("Adjusted gearing 31 Mar 2024 x", 0.61, 0.67)):
    row(f"FY24 {label}: C24 (UA) vs C25 (A) difference", round(a25 - a24, 2), f"C24 {a24} / C25 {a25}")

# 6. Fund diversion arithmetic
row("C25 KPL exposure: equity + preference + loan", round(8.70 + 156.50 + 131.63, 2), "printed 296.83")
assert round(8.70 + 156.50 + 131.63, 2) == 296.83
row("C25 total diversion: KPL + other investments", round(296.83 + 25.19, 2), "printed 322.02 (p2 para 4) and 322.04 (p2 para 3)")
row("C25 PY diversion: 208.76 + 23.81", round(208.76 + 23.81, 2), "printed 232.58")
row("C24 KPL exposure: preference + loan", round(156.50 + 52.26, 2), "printed 208.76")
row("C24 proposed FY25 KPL exposure: 208.76 + 54.58", round(208.76 + 54.58, 2), "printed 263.34")
row("C25 KPL exposure + guarantee outstanding (Rs Cr)", round(296.83 + 135.70, 2))
row("C25 diversion + guarantee / FY25 PAT (x)", round((322.02 + 135.70) / 90.11, 2))

# 7. Limit utilisation in rupees (ratio x limit, as printed)
row("C25 WC limit used at max-average 91.40% (Rs Cr)", round(0.9140 * 44.90, 2))
row("C24 WC limit used at average 44.80% (Rs Cr)", round(0.4480 * 44.90, 2))
row("C25 BG limit used at max-average 84.69% (Rs Cr)", round(0.8469 * 300, 2))
row("C25 BG limit vs CARE-rated BG (Rs Cr)", round(300 - 100, 2), "rated 100 of a 300 limit")
row("C24 BG limit vs CARE-rated BG (Rs Cr)", round(220 - 100, 2))
row("C24 lien-marked FDs increase FY24 (Rs Cr)", round(191.97 - 125.11, 2))

# 8. Dossier claim test
row("Dossier FY25 revenue 795 vs C25 FY25 TOI 639.86 (Rs Cr)", round(795 - 639.86, 2))
row("Dossier FY25 revenue 795 / C25 FY25 TOI (x)", round(795 / 639.86, 3))
row("Implied sales from dossier 2.93x on 1878.72", round(1878.72 / 2.93, 2), "consistent with 639.86, not 795")

row("KPL exposure rise FY24 to FY25 (Rs Cr)", round(296.83 - 208.76, 2))
row("KPL actual FY25 exposure above C24 proposal (Rs Cr)", round(296.83 - 263.34, 2))

# 8b. Distance to rating triggers and operating cycle rise by vintage
row("C25 TOI gap to Rs 800 crore upgrade trigger (Rs Cr)", round(800 - 639.86, 2))
row("Operating cycle rise FY24 to FY25, C24 FY24 vintage (days)", 44 - 12)
row("Operating cycle rise FY24 to FY25, C25 FY24 vintage (days)", 44 - 8)
row("GCA days above 180-day trigger, FY24 C24 / FY25 C25", f"{236 - 180} / {266 - 180}")

# 9. Rupees per day at FY25 TOI (for later tickets; basis: CARE FY25 UA TOI / 365)
row("C25 FY25 TOI per day (Rs Cr)", round(639.86 / 365, 4))

print("\n".join(out))
print("ALL ASSERTS PASSED")
