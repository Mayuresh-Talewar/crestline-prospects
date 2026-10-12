import re,sys
P=sys.argv[1] if len(sys.argv)>1 else r"C:\Users\asus\Desktop\crestline-prospects\atmastco\claude-design-master-prompt.md"
s=open(P,encoding="utf-8").read()
bad=[]
def hit(name,pat,flags=0,lit=False):
    pat=re.escape(pat) if lit else pat
    for m in re.finditer(pat,s,flags):
        a=max(0,m.start()-30); bad.append((name,s[a:m.end()+30].replace("\n"," ")))
hit("placeholder",r"\{[A-Za-z_0-9]+\}"); hit("comment",r"<!--")
for w in ["data.md","AT-S","Garvis","Verified","Secondary","slot","headline table","Template fallback","KEPT OUT","calc\\","depth.md","README","sensitive"]: hit("internal:"+w,w,re.I if w not in("Verified","Secondary") else 0,True)
for w in ["pack","tag in brackets","fallback","checker"]: hit("jargon:"+w,r"\b"+re.escape(w)+r"\b",re.I)
hit("dash","[\u2013\u2014]"); hit("hyphen-sep",r" - "); hit("signed",r"(?<![\w])[+\-]\d(?!\d{4} )")
hit("pt",r"\d\s?pt\b|\bpt\b"); hit("design",r"The design to reproduce",re.I,False)
others="Capacite|KEC|Afcons|Vascon|OVAL|GHV|Ashoka|Man Infra|Arwade|Kalpataru|Thermax|Reliance|Khilari|Jyoti|Bajel|Mhatre|Shirke|J Kumar|HCC|Patel Engineering|Shubham|Rulka|Glass Wall|Precast|Transrail|Chavan|AGC|Pawar|Patkar|Nikhil|SCON|Grey|Ghodke|Ajwani|Garuda|TJN|Welspun|Balajee|Active Infrastructures|Swami Samarth|Niraj|Yash|Jaideepraj|Cymetree|Univastu|HNB|Effwa|Bucon|CS Construction|Supreme"
hit("othername",r"\b("+others+r")\b",re.I)
hit("keptout-care",r"\bCARE\b")
for t in ["cooperat","material weakness","promoter loan","96%","85%","BBB","A3","190","exceptional","8.11","47.42","43.45","113.2","206.0","175.8","154.0","reclassif","328","CCC","Venkataraman","Ganesan","inventory days","Infomerics"]: hit("keptout:"+t,t,re.I if t.isalpha() and t not in("BBB","A3","CCC") else 0,True)
hit("interest-fig",r"interest[^.\n]{0,40}\d|\d[^.\n]{0,25}interest")
for t in ["navy","cream","gold","Poppins","italic","dashed","hollow","hatched","white card","upper card","pill","dumbbell","slider","on one scale","scale from","axis","curve","small capitals"]: hit("design:"+t,r"\b"+t+r"\b",re.I)
# numbers
allowed=set("""292.62 365 0.8017 8.02 24.05 0.80 18.13 13.49 33.29 289.57 224.01 19.89 342.27 266.30 75.97 900.00 750.00 235.00 140 23.9 15.6 82.54 10.71 23.60 12.05 69.99 45.12 71.97 24.09 47.88 96.52 21.10 75.42 48.92 19.61 12.39 12.54 73.63 1.24 47.32 2.31 95.43 4.67 89.45 0.78 0.52 82.54 8,000 1,000 33 2024 2025 2026 2023 10 30 14 16 1 2 3 4 5 6 7 8 9 11 12 13 15 01 02 03 04 05 06 25 76209 35398 91 157 158 490026 23 20 18 19 62 104 106 17 09 28 22 24 26 11 FY24 FY25 FY26""".split())
rest=re.sub(r"https?://\S+","",s)
for m in re.finditer(r"\d[\d,]*\.?\d*",rest):
    n=m.group().rstrip(".,")
    if n not in allowed: bad.append(("number",n+" :: "+rest[max(0,m.start()-30):m.end()+20].replace("\n"," ")))
print("HITS",len(bad))
open("chk-out.txt","w",encoding="utf-8").write(chr(10).join(str(b) for b in bad))
