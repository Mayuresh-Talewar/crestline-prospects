import re, sys
R = "C:/Users/asus/Desktop/crestline-prospects/rk-chavan/"
CASE_INS = ["Capacite", "Afcons", "Vascon", "GHV Infra", "Ashoka", "Man Infra", "Arwade", "Kalpataru", "Thermax", "Reliance", "Khilari",
            "Jyoti", "Bajel", "Mhatre", "Shirke", "J Kumar", "Patel Engineering", "Shubham", "Rulka", "Glass Wall", "Precast", "Transrail"]
CASE_SENS = ["KEC", "OVAL", "GHV", "MICL", "HCC", "Grey"]
KEPT = [r"(?i)non.?cooperat", r"(?i)not cooperating", r"(?i)spam", r"(?i)casino", r"(?i)ninewin", r"(?i)rkcinfra", r"\bHAM\b",
        r"(?i)hybrid annuity", r"(?i)\btoll\b", r"\bSPVs?\b", r"\bPAT\b", r"(?i)profit after tax", r"(?i)interest cover",
        r"Karmala", r"Tembhurni", r"Bhoyegaon", r"Gadchandur", r"Meena", r"(?<![A-Z])BB\+", r"A4\+", r"(?i)gearing", r"(?i)overdraft",
        r"(?i)drop ?line", r"(?i)accruals", r"(?i)downgrade", r"MSRDC", r"Ircon", r"Union Bank", r"ICICI", r"Axis Bank",
        r"Punjab National", r"UCO", r"Bank of Maharashtra", r"Central Bank", r"Warje", r"411058", r"\bCIN\b", r"(?i)issuer"]
INTERNAL = [r"\.(md|py|ts|html|pdf|png|txt)\b", r"RK-\d", r"(?i)garvis", r"(?i)dossier", r"(?i)\bgtm\b", r"Secondary", r"Verified (\(|by)",
            r"(?i)qa-report", r"calc/", r"src/", r"(?i)scratchpad", r"(?i)ponytail", r"NOT FOUND", r"\bTBD\b", r"(?i)data\.md"]

def scan(t):
    out = {}
    out["placeholders"] = re.findall(r"\{[A-Za-z_0-9]+\}|<[^>\n]{1,40}>|(?i:lorem|\bXXX\b)", t)
    out["comments"] = re.findall(r"<!--", t)
    out["company names"] = [n for n in CASE_INS if re.search(r"(?i)\b" + re.escape(n) + r"\b", t)] + \
                           [n for n in CASE_SENS if re.search(r"\b" + n + r"\b", t)]
    out["internal refs"] = [p for p in INTERNAL if re.search(p, t)]
    tt = re.sub(r"(?m)^\s*-{3,}\s*$", "", t)  # markdown rules and bullets are structure, not copy
    tt = re.sub(r"(?m)^(\s*)- ", r"\1", tt)
    out["dashes"] = re.findall("[\u2010-\u2015\u2212]| - |--|\\d-\\d", tt)
    out["kept out"] = [p for p in KEPT if re.search(p, t)]
    out["interest figures"] = re.findall(r"(?i)interest[^.\n]{0,40}[\d₹%]|[\d₹%][^.\n]{0,20}interest", t)
    out["design to reproduce"] = re.findall(r"(?i)design to reproduce|master design|## 2\. The design", t)
    return out

if __name__ == "__main__":
    real = open(R + "claude-design-master-prompt.md", encoding="utf8").read()
    res = scan(real)
    for k, v in res.items():
        print(f"{k}: {len(v)} {v[:5]}")
    plant = real + ("\n{COMPANY} <!-- c --> Afcons KEC build.md Secondary non-cooperation 4 - 5 interest 9% a year BB+ The design to reproduce\n")
    pres = scan(plant)
    print("PLANTED:", {k: len(v) for k, v in pres.items()})
    assert all(len(v) > 0 for v in pres.values()), "a scan failed to fire on its planted hit"
    assert scan("rated BBB+")["kept out"] == [] and scan("was BB+")["kept out"], "BB+ pattern wrong"
    assert all(len(v) == 0 for v in res.values()), "real prompt has hits"
    print("ALL SCANS CLEAN, ALL PLANTS CAUGHT")
