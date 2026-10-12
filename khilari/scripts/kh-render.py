import sys
sys.stdout.reconfigure(encoding="utf-8")
# Render every page of a PDF to PNG (for image reads) and dump its text layer (for search only).
# Usage: python -I kh-render.py <pdf> <outdir>
import os
import pymupdf

pdf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
doc = pymupdf.open(pdf)
base = os.path.splitext(os.path.basename(pdf))[0]
with open(os.path.join(out, base + ".txt"), "w", encoding="utf-8") as f:
    for i, p in enumerate(doc, 1):
        p.get_pixmap(dpi=110).save(os.path.join(out, f"{base}_p{i}.png"))
        f.write(f"\n=== PAGE {i} ===\n" + p.get_text())
print(base, doc.page_count, "pages")
