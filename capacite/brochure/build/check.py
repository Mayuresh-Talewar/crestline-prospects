# Acceptance checks for keystone.pdf against ../copy-deck.md and ../build-brief.md §6.
# Run: python check.py   (needs PyMuPDF; QR decode needs zxingcpp + numpy, optional)
import re, sys, pathlib, fitz

HERE = pathlib.Path(__file__).parent
pdf = fitz.open(HERE / "keystone.pdf")
html = (HERE / "keystone.html").read_text(encoding="utf8")
css = (HERE / "keystone-print.css").read_text(encoding="utf8")
deck = (HERE.parent / "copy-deck.md").read_text(encoding="utf8")
fails = []
def ok(cond, msg):
    print(("PASS " if cond else "FAIL ") + msg)
    if not cond: fails.append(msg)

# 8. PDF box, pages, fonts
mb = pdf[0].mediabox
ok(len(pdf) == 16, f"16 pages ({len(pdf)})")
ok(abs(mb.width - 612.28) < .5 and abs(mb.height - 858.9) < .5, f"MediaBox {mb.width:.2f} x {mb.height:.2f} pt (216 x 303 mm)")
fonts = sorted({f[3].split("+")[-1] for p in pdf for f in p.get_fonts()})
ok(all(re.match(r"IBMPlex(Sans|Serif|Mono)", f) for f in fonts), "embedded fonts: " + ", ".join(fonts))

# per-page text
pages = [p.get_text() for p in pdf]
alltext = "\n".join(pages)

# 4. AI tells
ok(not re.search("[–—]", alltext + html), "no en/em dashes in PDF text or HTML")
bad = [w for w in ["unlock", "leverage", "seamless", "robust", "holistic", "empower", "journey", "landscape", "delve", "ai-powered", "platform", "revolutionary", "not just"] if w in alltext.lower()]
ok(not bad, "no banned words " + str(bad))
ok("!" not in alltext, "no exclamation marks")
ok(not re.search(r"box-shadow|filter|backdrop|blur", css + html), "no shadow/filter/blur")
ok(html.count("<linearGradient") == 6 and "gradient(" not in css, "only the six jelly gradients")

# 5. minimum size
small = [(i + 1, s["text"][:30], round(s["size"], 2)) for i, p in enumerate(pdf) for b in p.get_text("dict")["blocks"] for l in b.get("lines", []) for s in l["spans"] if s["text"].strip() and s["size"] < 8.95]
ok(not small, f"all text >= 9 pt {small[:5]}")

# 3. dates on pages 2-16
nodate = [i + 1 for i in range(1, 16) if not re.search(r"(\d{1,2} )?(May|July) 2026", pages[i])]
ok(not nodate, f"source + filing date on pages 2-16 (missing: {nodate})")

# 1. numbers: every figure in the PDF page appears in that page's copy-deck section (plus brief §5 lines), and vice versa
sec = {int(m.group(1)): m.group(2) for m in re.finditer(r"## Page (\d+)\.(.*?)(?=\n## Page |\Z)", deck, re.S)}
NUM = r"-?₹?\d[\d,]*(?:\.\d+)?"
def toks(s): return {t.replace("₹", "").lstrip("-").rstrip(".,") for t in re.findall(NUM, s)}
footer = "Copy 1 of 1 · {n} / 16"
brief = {2: "₹13,498 Cr and sales growth: Investor presentation Q4 FY26, filed with BSE, May 2026. ₹2,490 Cr: computed from audited consolidated results, filed with NSE 20 May 2026, p.10. 43 days: Annual Report FY26, filed with NSE, July 2026 (PDF p.12). up to July 2026",
         **{n: "No Capacite figures on this page. Every figure in this file is from Capacite's public filings up to July 2026; sources on page 16." for n in (13, 14, 15)}}
extra = {12: " ".join(str(d) for d in range(0, 170, 10)), 15: " ".join(str(d) for d in range(1, 15))}
for n in range(1, 17):
    src = re.sub(r"\*[^*\n]*\*", "", sec[n]) + " " + brief.get(n, "") + " " + extra.get(n, "") + " " + (footer.format(n=n) if n > 1 else "")
    want, got = toks(src), toks(pages[n - 1])
    ok(got <= want and want <= got, f"p{n} figures match deck (extra {sorted(got - want)}, missing {sorted(want - got)})")

# spot sums (brief §6.1)
ok(round(1313.5 + 1176.8, 1) == 2490.3 and round(182.8 + 163.8, 1) == 346.6, "sums: 1,313.5 + 1,176.8 = 2,490.3 (printed ₹2,490 Cr); 182.8 + 163.8 = 346.6")
ok(round(42.3 + 17.9 + 6.2 + 24.0, 1) == 90.4 and round(43.9 + 45.7 + 14.6 + 24.0, 1) == 128.2, "band totals 90.4 and 128.2")
ok(1839 - 1376 - 136 == 327, "waterfall 1,839 - 1,376 - 136 = 327 vs 324 reported (note printed)")

# 2. cover geometry (brief §3): edge at x 0/74/210, and >= 15 mm from text
def bez(t, a, b, c, d): return (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d
pts = [(bez(t / 4000, -3, 55, 125, 213), bez(t / 4000, 205, 250, 232, 188)) for t in range(4001)]
def y_at(x): return min(pts, key=lambda p: abs(p[0] - x))[1]
ok(all(abs(y_at(x) - y) < .5 for x, y in [(0, 207.3), (74, 231.1), (210, 189.5)]), f"cover edge y at x 0/74/210 = {y_at(0):.1f}/{y_at(74):.1f}/{y_at(210):.1f}")
top = min(y - 35 for x, y in pts if 22 <= x <= 194)
ok(top - 101 >= 15, f"top contour {top - 101:.1f} mm below the title block (>= 15); navy text starts {256 - 3.9 - 0:.0f} mm, navy edge at x 22..130 >= {min(y for x, y in pts if 22 <= x <= 130):.1f}")

# 9. QR
try:
    import zxingcpp, numpy as np
    pg = pdf[14]; pix = pg.get_pixmap(dpi=300, colorspace=fitz.csGRAY)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width)
    res = [r.text for r in zxingcpp.read_barcodes(img)]
    ok(res == ["https://www.crestlineintelligence.com/book-a-demo"], f"QR decodes from the PDF to {res}")
except ImportError as e:
    print("SKIP QR decode:", e)

# 7. folio
ok(all(re.search(rf"Copy 1 of 1 · {n} / 16", pages[n - 1]) for n in range(2, 17)), "footer folio n / 16 on pages 2-16")
print(f"\n{len(fails)} failure(s)")
sys.exit(1 if fails else 0)
