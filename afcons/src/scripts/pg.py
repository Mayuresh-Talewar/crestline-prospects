import sys,re
f=sys.argv[1]
pages=open(f,encoding='utf8',errors='ignore').read().split('\f')
for n in sys.argv[2:]:
    print('=== %s PDF page %s'%(f,n)); print(re.sub(r'\n\s*\n+','\n',pages[int(n)-1]))
