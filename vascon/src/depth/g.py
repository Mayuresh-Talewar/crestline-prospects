import sys,re,glob
pat=re.compile(sys.argv[1],re.I); w=int(sys.argv[2]); files=sys.argv[3:]
for f in files:
    pages=open(f,encoding='utf8',errors='ignore').read().split('\f')
    for i,p in enumerate(pages,1):
        t=re.sub(r'\s+',' ',p); last=-1; spans=[]
        for m in pat.finditer(t):
            a,b=max(0,m.start()-w),m.end()+w
            if spans and a<=spans[-1][1]: spans[-1][1]=b
            else: spans.append([a,b])
        for a,b in spans: print(f"[{f.split('/')[-1][:-4]} p{i}] {t[a:b]}\n")
