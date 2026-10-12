import sys,pymupdf
# usage: render.py pdf outprefix dpi page...
d=pymupdf.open(sys.argv[1]); pre=sys.argv[2]; dpi=int(sys.argv[3])
for n in sys.argv[4:]:
    d[int(n)-1].get_pixmap(dpi=dpi).save(f"{pre}_p{n}.png"); print(f"{pre}_p{n}.png")
