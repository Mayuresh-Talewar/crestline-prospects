"""JS-1 scans. Every scan proves itself on a planted hit first and refuses regions smaller than MIN_CHARS.

python -I js-scan.py corpus <txt_dir> <nse_list.txt>     search filings for WC targets and for cancellations
python -I js-scan.py final <file> [<file> ...]          dashes and other-company names in deliverables
"""
import sys, os, re
sys.stdout.reconfigure(encoding="utf-8")

MIN_CHARS = 500

TARGET = re.compile(r"(working capital (days|cycle|target)|net working capital|NWC|receivable days|debtor days|DSO|"
                    r"(?<![\d.])\d{2,3}\s?days of (revenue|sales|turnover)|target (of|to) (reduce|bring)|reduce (our )?(receivables|debtors))", re.I)
CANCEL = re.compile(r"(terminat|cancell?(ed|ation)? of (the )?(order|contract|project|LoA|LOA)|short.?clos|forecl|withdrawn order|annul)", re.I)
DASH = re.compile(r"[‒–—―−]|(?<=\s)-(?=\s)|(?<=\w)--(?=\w)")
OTHERS = ["Capacite", "KEC", "Afcons", "Vascon", "OVAL", "GHV", "Ashoka", "Man Infra", "MICL", "Arwade",
          "Kalpataru", "Thermax", "Reliance", "Khilari", "Grey"]
NAMES = re.compile(r"(?<![A-Za-z])(" + "|".join(re.escape(n) for n in OTHERS) + r")(?![A-Za-z])", re.I)


def prove(pattern, planted, name):
    assert pattern.search(planted), f"planted hit failed for {name}"
    print(f"[planted] {name}: fires on planted text OK")


def region_ok(text, label):
    if len(text) < MIN_CHARS:
        print(f"[REFUSED] {label}: only {len(text)} chars, below minimum {MIN_CHARS}")
        return False
    return True


def corpus(txt_dir, nse_list):
    prove(TARGET, "we aim to bring net working capital to 90 days of revenue", "WC target")
    prove(CANCEL, "the client has issued termination of the contract", "cancellation")
    files = sorted(f for f in os.listdir(txt_dir) if f.endswith(".txt"))
    scanned = hits = 0
    for f in files:
        t = open(os.path.join(txt_dir, f), encoding="utf-8").read()
        if len(t.strip()) < MIN_CHARS:
            continue  # scanned images with no text layer; read from page images instead
        scanned += 1
        flat = " ".join(t.split())
        for m in TARGET.finditer(flat):
            hits += 1
            print(f"[WC term] {f}: ...{flat[max(0, m.start()-90):m.end()+90]}...")
    print(f"WC-target scan: {scanned} text files scanned (of {len(files)}), {hits} hits")
    nse = open(nse_list, encoding="utf-8").read()
    if region_ok(nse, "NSE list"):
        rows = [r for r in nse.splitlines() if CANCEL.search(r)]
        print(f"Cancellation scan on NSE list ({len(nse.splitlines())} lines): {len(rows)} hits")
        for r in rows:
            print("  ", r[:200])
    ann_hits = 0
    ann_files = [f for f in files if f.startswith("ann_")]
    nse_files = [f for f in files if f.startswith("nse_")]
    print(f"Announcement files scanned: {len(ann_files)} company-site, {len(nse_files)} NSE")
    for f in files:
        if not (f.startswith("ann_") or f.startswith("nse_")):
            continue
        flat = " ".join(open(os.path.join(txt_dir, f), encoding="utf-8").read().split())
        for m in CANCEL.finditer(flat):
            ann_hits += 1
            print(f"[cancel term] {f}: ...{flat[max(0, m.start()-90):m.end()+90]}...")
    print(f"Cancellation scan on downloaded announcements: {ann_hits} hits")


def final(paths):
    prove(DASH, "a planted — dash", "dash (em)")
    prove(DASH, "a planted - spaced hyphen", "dash (spaced hyphen)")
    prove(NAMES, "planted Kalpataru line", "company names")
    for p in paths:
        t = open(p, encoding="utf-8").read()
        if not region_ok(t, p):
            continue
        d = [(i + 1, l) for i, l in enumerate(t.splitlines()) if DASH.search(l)]
        n = [(i + 1, l) for i, l in enumerate(t.splitlines()) if NAMES.search(l)]
        print(f"{os.path.basename(p)}: {len(t)} chars, dash lines {len(d)}, other-company lines {len(n)}")
        for i, l in d + n:
            print(f"   line {i}: {l[:160]}")


if __name__ == "__main__":
    if sys.argv[1] == "corpus":
        corpus(sys.argv[2], sys.argv[3])
    else:
        final(sys.argv[2:])
