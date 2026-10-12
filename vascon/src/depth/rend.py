import sys,pymupdf
f,pages,out=sys.argv[1],sys.argv[2:-1],sys.argv[-1]
d=pymupdf.open(f)
for p in pages:
    d[int(p)-1].get_pixmap(dpi=100).save(f"{out}_p{p}.png")
