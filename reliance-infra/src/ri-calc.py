import sys
sys.stdout.reconfigure(encoding="utf-8")
# RI-1 calculations. Every input is typed from a page image cited beside it.
# Run: python -I src/ri-calc.py > src/ri-calc.out.txt   (from reliance-infra/)
# Units: Rs crore unless stated. AR26 = Annual Report FY26 (NSE 23 Jul 2026), AR25 = AR FY25 (rinfra.com / NSE 17 Jul 2025),
# AR24 = AR FY24 (NSE 12 Jul 2024), Q1 = Q1 FY27 results (NSE 14 Aug 2026), IR = India Ratings rationale 11 Jul 2025.
# PDF page numbers (pX) are the PDF's own page index, not the printed folio.

def r(x, n=2):
    return round(x, n)

out = []
def p(label, val):
    out.append(f"{label}: {val}")

# ---------- Consolidated segment note (AR26 p285-286, CONSOLIDATED) ----------
seg_rev = {"FY26": {"Power": 23253.55, "E&C": 237.22, "Infra": 1428.92, "Others": 484.84, "Total": 25404.53},
           "FY25": {"Power": 28120.97, "E&C": 211.81, "Infra": 1371.55, "Others": 313.30, "Total": 30017.63}}
seg_res = {"FY26": 3.13, "FY25": 25.10}
for y in ("FY26", "FY25"):
    d = seg_rev[y]
    assert abs(sum(v for k, v in d.items() if k != "Total") - d["Total"]) < 0.02, y
    p(f"E&C share of total segment revenue {y} (%)", r(d["E&C"] / d["Total"] * 100))
    p(f"E&C segment result margin {y} (%)", r(seg_res[y] / d["E&C"] * 100))
p("E&C segment revenue growth FY26 vs FY25 (%)", r((237.22 / 211.81 - 1) * 100))
seg_assets = {"FY26": 2953.29, "FY25": 2906.15, "Q1FY27": 2907.19}
seg_liab = {"FY26": 2125.01, "FY25": 2396.33, "Q1FY27": 1832.18}
for y in seg_assets:
    p(f"E&C segment assets less liabilities {y}", r(seg_assets[y] - seg_liab[y]))
p("E&C segment assets / E&C segment revenue FY26 (x)", r(2953.29 / 237.22))
# Q1 FY27 segment (Q1 p9)
p("E&C segment result margin Q1FY27 (%)", r(3.40 / 47.35 * 100))
p("E&C segment revenue Q1FY27 vs Q1FY26 (%)", r((47.35 / 53.54 - 1) * 100))

# ---------- Standalone (the entity that does the E&C work) ----------
rev = {"FY23": 810.00, "FY24": 424.68, "FY25": 211.81, "FY26": 237.22}  # AR24 p108; AR25 p153; AR26 p132
p("Standalone revenue FY24 vs FY23 (%)", r((rev["FY24"] / rev["FY23"] - 1) * 100))
p("Standalone revenue FY25 vs FY24 (%)", r((rev["FY25"] / rev["FY24"] - 1) * 100))
p("Standalone revenue FY26 vs FY23 (%)", r((rev["FY26"] / rev["FY23"] - 1) * 100))

# Trade receivables (AR26 p158-159; AR25 p178-179)
tr_net = {"FY26": 3.14 + 68.71, "FY25": 380.73 + 68.89, "FY24": 399.17 + 61.48}
tr_gross = {"FY26": 2176.98, "FY25": 2230.67, "FY24": 2200.95}
ecl = {"FY26": 2105.13, "FY25": 1781.05, "FY24": 1740.30}
over3 = {"FY26": 1869.62, "FY25": 1917.34, "FY24": 1833.87}
for y in tr_net:
    p(f"Standalone net trade receivables {y}", r(tr_net[y]))
    p(f"Standalone gross receivables less ECL {y} (check)", r(tr_gross[y] - ecl[y]))
    p(f"ECL as % of gross receivables {y}", r(ecl[y] / tr_gross[y] * 100))
    p(f"Receivables older than 3 years as % of gross {y}", r(over3[y] / tr_gross[y] * 100))
# ageing table FY26 sums
age26 = [30.10, 174.58, 66.19, 36.49, 1869.62]
p("FY26 ageing buckets sum (should be 2,176.98)", r(sum(age26)))
age25 = [70.99, 11.88, 41.31, 189.15, 1917.34]
p("FY25 ageing buckets sum (should be 2,230.67)", r(sum(age25)))
# Days: year-end balance over the year's revenue x 365 (closing basis, labelled)
for y in ("FY26", "FY25", "FY24"):
    p(f"Net receivable days {y} (closing net TR / revenue x 365)", r(tr_net[y] / rev[y] * 365, 1))
    p(f"Gross receivable days {y} (closing gross TR / revenue x 365)", r(tr_gross[y] / rev[y] * 365, 1))

# Contract assets / liabilities (AR26 p161, p172; AR25 p192)
ca_gross = {"FY26": 104.10, "FY25": 116.52, "FY24": 129.72, "FY23": 161.49}
p("Contract assets FY26 net of ECL (gross 104.10 less impaired 34.56)", r(104.10 - 34.56))
cl = {"FY26": 765.15, "FY25": 1048.79, "FY24": 1104.88, "FY23": 1689.22}
p("Contract liabilities FY26 rebuilt from note 21 (462.45+276.50+26.20)", r(462.45 + 276.50 + 26.20))
for y in ("FY26", "FY25", "FY24"):
    p(f"Contract asset days {y} (closing / revenue x 365)", r(ca_gross[y] / rev[y] * 365, 1))
    p(f"Contract liability days {y} (closing / revenue x 365)", r(cl[y] / rev[y] * 365, 1))
p("Contract liabilities change FY26 vs FY25", r(cl["FY26"] - cl["FY25"]))
p("of which written back as exceptional (AR26 p172)", -242.19)

# Trade payables (AR26 p167-168)
tp = {"FY26": 1095.99 + 17.74, "FY25r": 1111.90 + 28.57}
p("Standalone trade payables FY24 total (AR25 p187: 1,518.25 + 22.39)", r(1518.25 + 22.39))
p("Standalone trade payables FY25 as first filed (AR25 p187: 1,293.88 + 28.57)", r(1293.88 + 28.57))
p("Unsecured ICD from others FY26 (7.14 + 139.71)", r(7.14 + 139.71))
p("Standalone trade payables FY26 total", r(tp["FY26"]))
p("Standalone trade payables FY25 restated total", r(tp["FY25r"]))
p("FY26 payables ageing sum (should be 1,113.73)", r(78.12 + 34.06 + 80.85 + 286.70 + 634.00))
p("Payables older than 3 years as % FY26", r(634.00 / 1113.73 * 100))
p("MSME as % of payables FY26", r(12.15 / 1113.73 * 100))
cogs = {"FY26": 232.66, "FY25": 176.89}
p("Payable days FY26 (closing payables / construction material & subcontract cost x 365)", r(tp["FY26"] / cogs["FY26"] * 365, 1))

# Borrowings (AR26 p166; AR25 p185, p187)
p("Standalone borrowings FY26 (345.03 + 224.71)", r(345.03 + 224.71))
p("Standalone borrowings FY25 restated in AR26 (406.05 + 219.60)", r(406.05 + 219.60))
p("Standalone borrowings FY25 as first reported in AR25 (249.41 + 219.60)", r(249.41 + 219.60))
p("Standalone borrowings FY24 in AR25 (2,930.17 + 129.67)", r(2930.17 + 129.67))
p("Standalone bank borrowings FY24 in AR25 (term 27.24 + WC 145.67)", r(27.24 + 145.67))
p("Standalone bank borrowings FY25 and FY26", 0.0)
p("ICD interest FY26 / average ICD balance (indicative, 85.52 / avg(569.74, 625.65)) %",
  r(85.52 / ((569.74 + 625.65) / 2) * 100))

# Working capital the company itself implies (AR26 p131 and ratio note p203)
ca, cli = 1626.27, 3974.29
p("Standalone current assets less current liabilities FY26", r(ca - cli))
p("Current ratio FY26 (company states 0.41)", r(ca / cli))
p("Net capital turnover FY26 = revenue / (CA less CL) (company states (0.10))", r(237.22 / (ca - cli), 3))

# Order book (AR24 p29 MD&A + note; AR25 p73 MD&A, p192 note; AR26 p52 MD&A, p172 note; IR p4)
ob = {"FY23": 2350.36, "FY24": 1974.64, "FY25_AR25_note": 1337.70, "FY25_AR25_MDA": 899.73,
      "FY25_AR26_restated": 443.57, "FY26": 363.25}
p("Order book FY26 vs FY24 (%)", r((ob["FY26"] / ob["FY24"] - 1) * 100))
p("Order book FY26 vs FY25 restated (%)", r((ob["FY26"] / ob["FY25_AR26_restated"] - 1) * 100))
p("Order book FY26 / FY26 E&C revenue (years of cover)", r(ob["FY26"] / rev["FY26"]))
p("Order book due within 12 months FY26 (214.58) as % of book", r(214.58 / 363.25 * 100))
p("India Ratings 'INR9 billion' in crore", r(9e9 / 1e7))
p("Dossier order book 9,000 / filed 899.73 (x)", r(9000 / 899.73))
# Unit conversions used in sensitive-garvis.md (IND-Ra figures in INR billion / million; 1 crore = 1e7)
for lbl, inr in (("SEC dispute INR12.5 bn", 12.5e9), ("DVC award INR8.98 bn", 8.98e9), ("DVC withdrawal INR6 bn", 6e9),
                 ("BGs at risk INR1.7 bn", 1.7e9), ("ICDs INR6,973 mn (Dec 2025)", 6973e6), ("NFB limits INR18,602.3 mn", 18602.3e6)):
    p(f"{lbl} in Rs crore", r(inr / 1e7))

# Consolidated (AR25 p234-235; AR26 p217-218, p221, p255, p268, p270)
p("Consolidated revenue FY25 vs FY24 (%)", r((23591.88 / 22066.86 - 1) * 100))
p("Consolidated revenue FY26 vs FY25 (%)", r((20440.53 / 23591.88 - 1) * 100))
p("Dossier PAT 494 vs filed owners' profit 4,937.52 (x)", r(4937.52 / 494))
p("Dossier FY24 loss 161 vs filed owners' loss 1,608.66 (x)", r(1608.66 / 161))
p("MD&A net worth growth FY25 vs FY24 (14,287 / 8,428) %", r((14287 / 8428 - 1) * 100))
p("BS equity attributable growth FY25 vs FY24 (14,430.20 / 8,747.23) %", r((14430.20 / 8747.23 - 1) * 100))
p("Consolidated borrowings FY26 (1,372.01 + 3,431.82)", r(1372.01 + 3431.82))
p("Consolidated borrowings FY25 (1,933.12 + 4,359.49)", r(1933.12 + 4359.49))
p("Consolidated trade payables FY26 (17,232.37 + 17.74)", r(17232.37 + 17.74))
p("Consolidated net trade receivables FY26 (1,181.56 + 68.71)", r(1181.56 + 68.71))
p("E&C contract liabilities as % of E&C segment liabilities FY26", r(765.15 / 2125.01 * 100))

# Project progress (AR24 p31, AR25 p72, AR26 p50-51)
p("Kudankulam progress points FY24->FY25->FY26", (r(76 - 62.5, 1), r(85 - 76, 1)))
p("Chordaha-Gorhar progress points FY25->FY26", r(75 - 68.65, 2))

print("\n".join(out))
