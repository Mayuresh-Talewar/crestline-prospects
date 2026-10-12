"""JM-1 final scans over the deliverable .md files in jm-mhatre/.
Run: python -I src/jm-scan.py <jm-mhatre dir> > src/jm-scan-output.txt
Each scan: planted text confirmed absent from the files first, then confirmed caught.
"""
import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")

root = sys.argv[1]
files = {f: open(os.path.join(root, f), encoding="utf-8").read()
         for f in sorted(os.listdir(root)) if f.endswith(".md")}
MIN = 800  # minimum region size: every scanned file must hold at least this many chars
small = [f for f, t in files.items() if len(t) < MIN]
print("files:", {f: len(t) for f, t in files.items()}, "| under", MIN, "chars:", small or "none")

SCANS = [
    ("em/en dash", r"[—–]", 0, "a — b"),
    ("spaced hyphen used as a dash", r"(?<=\w) - (?=\w)", 0, "word - word"),
    ("Capacite", r"\bCapacit[eé]\b", re.I, "Capacite"),
    ("KEC", r"\bKEC\b", 0, "KEC"),
    ("Afcons", r"\bAfcons\b", re.I, "Afcons"),
    ("Vascon", r"\bVascon\b", re.I, "Vascon"),
    ("OVAL", r"\bOVAL\b", 0, "OVAL"),
    ("GHV", r"\bGHV\b", 0, "GHV"),
    ("Ashoka", r"\bAshoka\b", re.I, "Ashoka"),
    ("Man Infra", r"\bMan\s+Infra", re.I, "Man Infra"),
    ("MICL", r"\bMICL\b", 0, "MICL"),
    ("Arwade", r"\bArwade\b", re.I, "Arwade"),
    ("Kalpataru", r"\bKalpataru\b", re.I, "Kalpataru"),
    ("Thermax", r"\bThermax\b", re.I, "Thermax"),
    ("Reliance (company, capitalised)", r"\bReliance\b", 0, "Reliance"),
    ("Khilari", r"\bKhilari\b", re.I, "Khilari"),
    ("Jyoti", r"\bJyoti\b", re.I, "Jyoti"),
    ("Bajel", r"\bBajel\b", re.I, "Bajel"),
    ("Grey", r"\bGrey\b", re.I, "Grey"),
]
for name, pat, fl, planted in SCANS:
    rx = re.compile(pat, fl)
    token = planted + " ZZPLANTJM1"
    assert not any(token in t for t in files.values()), f"{name}: planted text already present"
    assert rx.search("x" * MIN + " " + token), f"{name}: planted hit missed"
    hits = [(f, t[max(0, m.start() - 60): m.end() + 60].replace("\n", " ")) for f, t in files.items() for m in rx.finditer(t)]
    print(f"\n-- {name}: planted hit caught; real hits: {len(hits)}")
    for f, s in hits:
        print(f"   {f}: ...{s}...")

print("\n-- fact-check verdict tally (first verdict word in column 3)")
rows = [l for l in files.get("fact-check.md", "").splitlines() if re.match(r"\|\s*\d+\s*\|", l)]
tally = {}
for l in rows:
    v = l.split("|")[3].strip()
    key = v.split()[0] if v else "?"
    tally[key] = tally.get(key, 0) + 1
assert sum(tally.values()) == len(rows)
print("rows:", len(rows), "tally:", tally)
