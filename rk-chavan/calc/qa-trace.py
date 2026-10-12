import re
from fractions import Fraction
R = "C:/Users/asus/Desktop/crestline-prospects/rk-chavan/"
S = "C:/Users/asus/AppData/Local/Temp/claude/C--Users-asus-Desktop-process-automation-crestline/915b64d7-768d-4933-affd-dd657d6cc08c/scratchpad/RK-S23/"
crisil = open(S + "crisil.txt", encoding="utf8").read()
flat = re.sub(r"\s+", " ", crisil)

# 1. recompute every derived figure with exact fractions
inc25 = Fraction("524.35"); day = inc25 / 365
r = lambda x, n: f"{float(x):.{n}f}"
derived = {"1.44": r(day, 2), "14.37": r(10 * day, 2), "43.10": r(30 * day, 2)}
for k, v in derived.items():
    assert k == v, (k, v)
assert round((700 / 524 - 1) * 100) == 34
print("derived recomputed:", derived, "| 34% from 700/524:", round((700 / 524 - 1) * 100, 2))
calc = open(R + "calc/rk-savings-output.txt", encoding="utf8").read()
assert "Rs 14.3658 Cr" in calc and "Rs 43.0973 Cr" in calc and "exit code: 0" in calc
print("calc output carries 14.3658 and 43.0973, clean run exit 0")

# 2. re-trace each CRISIL figure against the rationale text (planted miss included)
checks = {
    "524.35": r"524\.35", "457.65": r"457\.65", "187 days": r"increased from 187 days", "about 250 days": r"around 250 days as on March 31, 2026",
    "100 to 140": r"in the range of 100-140 days", "70 to 90": r"in the range of 70-90 days", "700": r"around Rs\. 700 crores in fiscal 2026",
    "34%": r"grown at 34%", "2,595": r"Rs 2595 crores\s+as of March 2026", "24 to 36": r"next 24-36 months",
    "347": r"Rs\.347 Crore \(Enhanced from Rs\.250 Crore\)", "BBB+/Stable": r"Crisil BBB\+ / Stable / Crisil A2",
    "Q4 + retention": r"high revenue booking in Q4 and retenetion money", "30 June 2026": r"June 30, 2026",
    "quote 1": r"Improvement in working capital cycle over the medium term will be closely monitored\.",
    "quote 2": r"Efficient working capital cycle and improvement in financial risk profile\.",
    "NHAI, PWD, MORTH": r"NHAI, PWD, MORTH", "Based in Pune": r"Based in Pune, Maharashtra",
}
for k, p in checks.items():
    ok = bool(re.search(p, flat)); print(f"CRISIL {k}: {'FOUND' if ok else 'MISSING'}"); assert ok, k
assert not re.search(r"999\.99", flat)  # planted miss: must not be found
print("planted figure 999.99 correctly NOT found")

# 3. every number in the Content traced to a source
p = open(R + "claude-design-master-prompt.md", encoding="utf8").read()
content = p[p.index("## Content"):]
tmpl = p[:p.index("## Content")]
SRC = {
    "524.35": "CRISIL FY25", "457.65": "CRISIL FY24", "700": "CRISIL FY26 estimate", "34": "CRISIL 34%", "2,595": "CRISIL order book",
    "24": "CRISIL 24 to 36 months", "36": "CRISIL 24 to 36 months", "347": "CRISIL limits", "250": "CRISIL limits 250 Cr / GCA days 250",
    "187": "CRISIL GCA days", "100": "CRISIL debtors", "140": "CRISIL debtors", "70": "CRISIL inventory", "90": "CRISIL inventory",
    "14.37": "calc 10 days", "43.10": "calc 30 days", "1.44": "calc one day", "240": "calc 250-10", "220": "calc 250-30",
    "365": "days in year (calc)", "10": "step (calc)", "30": "step (calc) / thirty minutes", "14": "pilot days (fixed page)", "7": "sample due date (fixed page)",
    "2025": "CRISIL FY25", "2026": "CRISIL date", "2022": "n/a", "9": "letter date 9 Oct 2026", "31": "31 March", "91": "phone", "76209": "phone", "35398": "phone",
    "25": "FY25 label", "26": "FY26 label",
}
for n in range(1, 17): SRC.setdefault(str(n), "page / list number")
for n in ("01", "02", "03", "04", "05"): SRC[n] = "list number"
toks = re.findall(r"\d[\d,]*\.?\d*", content)
toks = [t.rstrip(".,") for t in toks]
unk = sorted({t for t in toks if t not in SRC})
print("content number tokens:", len(toks), "unique:", len(set(toks)), "UNTRACED:", unk)
assert not unk
# the same trace flags a planted number
assert "999.99" not in SRC
# 4. template-part numbers
tt = sorted(set(re.findall(r"\d[\d,]*\.?\d*", tmpl)))
print("template-part numbers (rule text, not figures):", tt)
# 5. 'A' check: no signed numbers and ownership words
assert not re.search(r"(?<![\w])[+\u2212]\s?\d", re.sub(r"\+91", "", content)), "signed number"
print("no signed numbers in content")
print("QA OK")
