import sys,re
f=sys.argv[1]; pats=sys.argv[2:]
pages=open(f,encoding='utf-8',errors='ignore').read().split('\f')
for i,p in enumerate(pages,1):
    for pt in pats:
        if re.search(pt,p,re.I): print(i,pt); 
