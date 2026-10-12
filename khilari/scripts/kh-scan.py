import sys
sys.stdout.reconfigure(encoding="utf-8")
# KH-1 scans. Each scan proves itself first on a planted hit, and refuses a file below a minimum size.
# Usage: python -I scripts/kh-scan.py <mode> <files...>
#   mode = dash | names | dispute
import re

MIN_BYTES = 1500
PATTERNS = {
    # em dash, en dash, a hyphen used as punctuation between spaces, double hyphen
    "dash": re.compile(r"—|–| - |--"),
    # other companies, case-sensitive on their proper names; KEC/OVAL/GHV/MICL as whole words
    "names": re.compile(r"Capacite|\bKEC\b|Afcons|Vascon|\bOVAL\b|\bGHV\b|Ashoka|Man Infra|\bMICL\b|Arwade|"
                        r"Kalpataru|Thermax|Reliance|Jyoti|\bGrey\b"),
    "dispute": re.compile(r"disput|arbitrat|litigat|court|default|legal|claim", re.I),
}
PLANT = {"dash": "x — y", "names": "a Grey b", "dispute": "an Arbitration case"}

mode, files = sys.argv[1], sys.argv[2:]
pat = PATTERNS[mode]
assert pat.search(PLANT[mode]), "planted hit not found: scan is broken"
if mode == "dash":
    assert pat.search("a -- b") and pat.search("a – b"), "planted dash variants not found"
print(f"[{mode}] planted hit detected OK")
total = 0
for f in files:
    data = open(f, encoding="utf-8", errors="replace").read()
    assert len(data.encode("utf-8")) >= MIN_BYTES, f"{f} below minimum region size"
    for n, line in enumerate(data.splitlines(), 1):
        if mode == "dash" and re.fullmatch(r"\|[-|: ]+\|", line.strip()):
            continue  # markdown table rule, not punctuation
        for m in pat.finditer(line):
            total += 1
            print(f"{f}:{n}: {m.group(0)!r} :: {line.strip()[:140]}")
print(f"[{mode}] files={len(files)} hits={total}")
