import sys,re,glob
# usage: kw.py regex files...  -> prints file, pdf page, line
pat=re.compile(sys.argv[1],re.I)
for f in sys.argv[2:]:
    pages=open(f,encoding='utf8',errors='ignore').read().split('\f')
    for i,p in enumerate(pages,1):
        for ln in p.split('\n'):
            if pat.search(ln): print(f"{f.split('/')[-1]} p{i}: {ln.strip()[:230]}")
