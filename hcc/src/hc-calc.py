"""HC-1 calculations for Hindustan Construction Company Limited (HCC).
Every input is typed from a page image named beside it. INR crore. STANDALONE unless labelled.
Run: python -I src/hc-calc.py   (output saved by hand to src/hc-calc-output.txt)
Day counts use CLOSING balances over the same year's revenue from operations x 365 (not averages).
"""
import sys
sys.stdout.reconfigure(encoding="utf-8")

def r(x, n=2):
    return round(x, n)

out = []
def p(label, val, how):
    out.append(f"{label} = {val}    [{how}]")

# ---------- P&L, standalone (AR FY26 pdf p111; AR FY25 pdf p115 for FY24 comparative) ----------
rev = {"FY26": 3937.25, "FY25": 4801.05, "FY24": 5042.78}
mat = {"FY26": 526.51, "FY25": 564.22, "FY24": 862.02}
sub = {"FY26": 1973.33, "FY25": 2520.62, "FY24": 2725.88}
emp = {"FY26": 331.42, "FY25": 316.72, "FY24": 325.84}
oth = {"FY26": 472.75, "FY25": 466.51, "FY24": 442.38}
fin = {"FY26": 436.30, "FY25": 506.36, "FY24": 542.89}
pat = {"FY26": 205.81, "FY25": 84.92, "FY24": 178.57}
ebitda = {y: rev[y] - mat[y] - sub[y] - emp[y] - oth[y] for y in rev}
assert abs(ebitda["FY26"] - 633.24) < 0.01 and abs(ebitda["FY25"] - 932.98) < 0.01  # AR FY26 pdf p43 Board's report
for y in rev:
    p(f"EBITDA {y} (excl other income)", r(ebitda[y]), "rev - materials - subcontract - employee - other exp")
    p(f"EBITDA margin {y} %", r(100 * ebitda[y] / rev[y]), "EBITDA / revenue from operations")
    p(f"Finance cost / revenue {y} %", r(100 * fin[y] / rev[y]), "finance cost / revenue")
p("Revenue change FY25->FY26 %", r(100 * (rev["FY26"] / rev["FY25"] - 1)), "standalone")
p("Revenue change FY24->FY25 %", r(100 * (rev["FY25"] / rev["FY24"] - 1)), "standalone")
p("PAT change FY25->FY26 %", r(100 * (pat["FY26"] / pat["FY25"] - 1)), "standalone")

# Interest on arbitration awards inside revenue (AR FY26 pdf p151 note 22)
arb_int = {"FY26": 273.31, "FY25": 141.88}
for y in arb_int:
    p(f"Interest on arbitration awards share of revenue {y} %", r(100 * arb_int[y] / rev[y]), "note 22 / revenue")
    p(f"Interest on arbitration awards share of EBITDA {y} %", r(100 * arb_int[y] / ebitda[y]), "note 22 / EBITDA")
contract_rev = {"FY26": 3645.91, "FY25": 4618.58}
p("EBITDA FY26 excluding arbitration-award interest", r(ebitda["FY26"] - arb_int["FY26"]), "EBITDA - note 22 interest")
p("Same, margin on contract revenue FY26 %", r(100 * (ebitda["FY26"] - arb_int["FY26"]) / contract_rev["FY26"]), "(EBITDA - award interest) / contract revenue")

# Quarters (Q1 FY27 results pdf p4, filed 6 Aug 2026; Q4 cross-checked on Q4 FY26 results pdf p7)
q = {"Q1FY27": (981.73, 135.58, 558.63, 87.09, 95.92), "Q4FY26": (988.71, 151.29, 445.51, 86.09, 125.56),
     "Q1FY26": (1068.99, 116.75, 597.43, 83.76, 112.07)}
for k, (rv, m, s, e, o) in q.items():
    eb = rv - m - s - e - o
    p(f"EBITDA {k}", r(eb), "rev - mat - sub - emp - other")
    p(f"EBITDA margin {k} %", r(100 * eb / rv), "EBITDA / revenue")

# Consolidated revenue (AR FY26 pdf p191; AR FY25 pdf p195)
crev = {"FY26": 3969.59, "FY25": 5603.37, "FY24": 7006.78}
p("Consolidated revenue change FY24->FY25 %", r(100 * (crev["FY25"] / crev["FY24"] - 1)), "consolidated")
p("Consolidated revenue change FY25->FY26 %", r(100 * (crev["FY26"] / crev["FY25"] - 1)), "consolidated")

# ---------- Receivables (AR FY26 pdf p133-135; AR FY25 pdf p137-138) ----------
tr_nc = {"FY26": 1178.39, "FY25": 646.52, "FY24": 654.99}
tr_c = {"FY26": 2249.64, "FY25": 2365.71, "FY24": 1852.73}
tr = {y: tr_nc[y] + tr_c[y] for y in tr_nc}
assert abs(tr["FY26"] - 3428.03) < 0.01 and abs(tr["FY25"] - 3012.23) < 0.01 and abs(tr["FY24"] - 2507.72) < 0.01
gross = {"FY26": 3484.29, "FY25": 3063.15, "FY24": 2554.10}
disputed = {"FY26": 1726.36, "FY25": 1651.17, "FY24": 1251.52}
undisp_good = {"FY26": 1701.67, "FY25": 1361.06, "FY24": 1256.20}
for y in tr:
    p(f"Total trade receivables {y}", r(tr[y]), "non-current + current, net of ECL")
    p(f"Disputed share of gross receivables {y} %", r(100 * disputed[y] / gross[y]), "disputed considered good / gross")
    p(f"Receivable days {y}", r(tr[y] / rev[y] * 365, 1), "closing net TR / revenue x 365")
    p(f"Undisputed-good receivable days {y}", r(undisp_good[y] / rev[y] * 365, 1), "undisputed considered good / revenue x 365")
# FY26 ageing rows (pdf p134)
ud = [532.90, 593.57, 45.74, 255.91, 146.40, 127.15]
dd = [0, 430.92, 457.91, 170.71, 132.71, 534.11]
assert abs(sum(ud) - 1701.67) < 0.01 and abs(sum(dd) - 1726.36) < 0.01
p("FY26 undisputed older than 1 year", r(sum(ud[3:])), "1-2y + 2-3y + >3y")
p("FY26 undisputed up to 1 year incl not due", r(sum(ud[:3])), "not due + <6m + 6m-1y")
p("FY26 disputed older than 3 years", r(dd[5]), "row d, >3y")
p("FY26 disputed older than 1 year", r(sum(dd[3:])), "row d, 1y+")
awards_ch = {"FY26": 1105.68 + 237.12}
p("FY26 arbitration awards challenged in court inside TR", r(awards_ch["FY26"]), "note 6.5: non-current 1,105.68 + current 237.12")
p("FY26 same, share of net TR %", r(100 * awards_ch["FY26"] / tr["FY26"]), "awards / net TR")
p("FY25 awards challenged per AR FY25 note 6.3", r(646.52 + 1004.65), "646.52 + 1,004.65 (AR FY25 vintage)")
p("FY25 awards challenged per AR FY26 note 6.5 comparative", r(646.52 + 596.53), "646.52 + 596.53 (AR FY26 vintage) CONFLICT")
ret = {"FY26": 72.71 + 739.92, "FY25": 921.99, "FY24": 807.58}
for y in ret:
    p(f"Retention inside TR {y}", r(ret[y]), "note 6 retention lines")
    p(f"Retention share of net TR {y} %", r(100 * ret[y] / tr[y]), "retention / net TR")

# ---------- Contract assets (pdf p110, p152) ----------
ca = {"FY26": 1939.35, "FY25": 2144.85, "FY24": 2069.17}
for y in ca:
    p(f"Contract asset days {y}", r(ca[y] / rev[y] * 365, 1), "closing unbilled WIP / revenue x 365")
    p(f"TR + contract assets {y}", r(tr[y] + ca[y]), "sum")
    p(f"TR + contract asset days {y}", r((tr[y] + ca[y]) / rev[y] * 365, 1), "(TR + CA) / revenue x 365")
p("FY26 closed/suspended project claims in CA, share %", r(100 * 115.71 / ca["FY26"]), "note 33 115.71 / CA")
p("FY26 closed/suspended project items, all three", r(115.71 + 24.21 + 57.52), "note 33 CA + current TR + NC TR")

# ---------- Payables (pdf p150-151; AR FY25 pdf p114, p153) ----------
tp = {"FY26": 111.54 + 1905.86, "FY25": 125.67 + 1935.74, "FY24": 90.21 + 1706.06}
msme = {"FY26": 111.54, "FY25": 125.67, "FY24": 90.21}
assert abs(tp["FY26"] - 2017.40) < 0.01 and abs(tp["FY25"] - 2061.41) < 0.01 and abs(tp["FY24"] - 1796.27) < 0.01
for y in tp:
    p(f"Trade payables {y}", r(tp[y]), "MSME + others")
    p(f"MSME share of payables {y} %", r(100 * msme[y] / tp[y]), "MSME / total")
    p(f"Payable days on materials+subcontract {y}", r(tp[y] / (mat[y] + sub[y]) * 365, 1), "TP / (materials + subcontracting) x 365")
p("FY26 MSME past the not-due bucket", r(55.82 + 1.54 + 0.63 + 16.07), "<1y + 1-2y + 2-3y + >3y, from transaction date")
p("FY26 payables older than 3 years", r(236.00), "ageing total column")

# ---------- Advances (note 21, pdf p151; AR FY25 pdf p153) ----------
adv = {"FY26": 986.99, "FY25": 847.60, "FY24": 1110.75}
for y in adv:
    p(f"Advance from contractee days {y}", r(adv[y] / rev[y] * 365, 1), "advances / revenue x 365")

# ---------- Simple NWC (operating items only, standalone, closing) ----------
inv = {"FY26": 128.47, "FY25": 123.62, "FY24": 126.39}
for y in inv:
    nwc = inv[y] + tr[y] + ca[y] - tp[y] - adv[y]
    p(f"Operating NWC {y}", r(nwc), "inventory + TR + CA - trade payables - contractee advances (Crestline construct)")
    p(f"Operating NWC days {y}", r(nwc / rev[y] * 365, 1), "NWC / revenue x 365")

# ---------- Debt (note 17, pdf p145-148) ----------
borr = {"FY26": 648.31 + 179.90, "FY25": 1044.75 + 460.99}
intpay = {"FY26": 1191.65, "FY25": 1716.39}
assert abs(borr["FY26"] - 828.21) < 0.01 and abs(borr["FY25"] - 1505.74) < 0.01
fac = {"OCD 0.01% coupon, 11.50% yield": 152.72 + 34.09 + 74.52 + 14.32,
       "NCD secured (LIC 11.50% / ACRE 9.5%)": 133.50 + 15.30,
       "NCD unsecured (ARCIL / others, 9.5%)": 271.89 + 37.20,
       "FCTL secured, SOFR 3M + 350bp": 31.19 + 13.37,
       "FCTL unsecured, 1.91% fixed": 24.92,
       "Loan from others, interest free": 25.19}
assert abs(sum(fac.values()) - 828.21) < 0.01
for k, v in fac.items():
    p(f"FY26 facility: {k}", r(v), "note 17 non-current + current")
for y in borr:
    p(f"Borrowings + interest accrued {y}", r(borr[y] + intpay[y]), "note 17.3 (A)+(B)+(C)")
p("Borrowings + interest accrued at 1 Apr 2024 (FY24 close)", r(1478.51 + 257.71 + 1641.66), "note 17.3 opening row, AR26 p146")
p("Debt incl accrued interest change FY25->FY26 %", r(100 * ((borr['FY26'] + intpay['FY26']) / (borr['FY25'] + intpay['FY25']) - 1)), "note 17.3")
p("CARE debt change %", r(100 * (2016 / 3279 - 1)), "CARE Apr 2026: 3,279 to 2,016")
p("Company stated debt 1,995 vs computed FY26 gap", r(borr["FY26"] + intpay["FY26"] - 1995), "computed - stated")

# ---------- Cash flow (pdf p112; AR FY25 pdf p116) ----------
ocf = {"FY26": 700.70, "FY25": 74.51, "FY24": 389.78}
for y in ocf:
    p(f"OCF / EBITDA {y} %", r(100 * ocf[y] / ebitda[y]), "operating cash flow / EBITDA")

# ---------- Company-stated ratio (AR FY26 pdf p22, Key Financial Ratios) ----------
for y, t in (("FY26", 1.22), ("FY25", 1.74)):
    p(f"Days implied by stated debtors turnover {y}", r(365 / t, 1), "365 / stated debtors turnover ratio (company's own denominator, not disclosed)")

# ---------- Orders ----------
p("Order book / FY26 revenue (x)", r(12971 / rev["FY26"]), "note 22.2 order book / revenue")
p("Q1 FY27 new orders vs FY27 target %", r(100 * 127 / 15000), "Q1 FY27 deck 127 / Q4 FY26 call 15,000")
p("NHPC Salal order as share of Jun 2026 order book %", r(100 * 524.17 / 12976), "press release 11 Aug 2026 / Q1 FY27 note 4")
p("FY26 inflow versions: AR p5 / AR p43 share / deck p3", "5,910 / 5,636 / 5,654", "three company figures, not computed")

# ---------- Fact-check tally (reads ../fact-check.md; first word of the verdict column) ----------
import os, re, collections
fc = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "fact-check.md")
rows = [l for l in open(fc, encoding="utf-8") if re.match(r"\| \d+ \|", l)]
tally = collections.Counter(l.split("|")[3].strip().split()[0] for l in rows)
p("Fact-check rows", len(rows), "table rows in fact-check.md")
p("Fact-check tally", dict(sorted(tally.items())), "first word of verdict column; row 35 counts as Right (SAP) and is mixed")

for line in out:
    print(line)
print("lines:", len(out))
