"""NWC days for Ahluwalia (ACIL) and ITD Cementation / Cemindia, CONSOLIDATED, from company annual reports.
NWC = inventories + trade receivables + contract assets - trade payables - customer advances/contract liabilities.
Inputs are as printed (Rs lakh for all but Cemindia FY25R/FY26 which are printed in Rs crore); output in Rs crore."""
L = 100.0  # lakh -> crore divisor
# label: (revenue, inventories, trade_recv, contract_assets, trade_payables, customer_adv)  -- sums shown as expressions
acil = {  # lakh. TR = current + non-current; CA = note20 subtotal + note13 retention subtotal; ADV = note30 CL subtotal + 'advance from customers' + note26 mobilisation advance
 'FY21': (198219.03, 29718.30, 37444.48+6049.02, 32898.66+10536.73, 707.54+63313.87, 23865.73+59.10+15158.01),
 'FY22': (269246.91, 24197.07, 44253.74+4456.64, 31214.50+11937.97, 996.67+60940.18, 18511.27+56.64+7023.52),
 'FY23': (283839.33, 24402.75, 60629.18+3232.50, 46371.67+3940.69, 966.01+66203.39, 31936.22+45.42+8923.54),
 'FY24': (385529.77, 31584.97, 74558.57+3468.25, 65920.07+5824.77, 810.41+69191.80, 28844.61+249.71+31613.35),
 'FY25': (409862.31, 33919.80, 78494.54+2758.92, 70906.72+6913.04, 1112.05+83605.16, 35047.70+78.85+42112.87),
 'FY26': (456519.81, 34222.96, 73446.80+2646.74, 104610.94+9226.19, 1006.77+80481.17, 63528.93+62.30+45690.83),
}
cem = {  # lakh. CA = 'unbilled WIP / unbilled revenue (contract assets)'; ADV = advances from contractees + due to customer (interest on advances excluded)
 'FY21': (272773.11, 33729.33, 53085.94, 85363.68, 1490.03+71202.13, 56277.33+21645.14),
 'FY22': (380901.65, 40022.84, 62187.57, 80946.71, 4214.36+89513.09, 57838.59+24932.92),
 'FY23': (509091.12, 57700.13, 108022.51, 105141.00, 7919.43+125438.29, 106606.53+36929.79),
 'FY24': (771787.28, 68427.22, 121142.86, 144107.46, 15279.80+149404.48, 117818.82+48953.35),
 'FY25 as originally reported': (909694.08, 64150.98, 160686.66, 179734.00, 31240.46+146239.52+28218.57, 94972.60+45492.43),  # + retention money payable (note 22, outside TP in this AR)
 'FY25 restated in FY26 AR': (924616.0, 64381.0, 98980.0, 165214.0, 41941.0+162582.0, 63872.0),  # printed in crore x100
 'FY26 (new basis)': (1006058.0, 75092.0, 129456.0, 226349.0, 46423.0+172542.0, 102375.0),
}
def show(name, d):
    print(f'\n{name}  (Rs crore; days = NWC/revenue*365)')
    print(f"{'year':28}{'rev':>9}{'inv':>8}{'TR':>8}{'CA':>8}{'TP':>8}{'adv':>8}{'NWC':>8}{'days':>7}{'%rev':>7}{'days ex-adv':>12}")
    for y,(r,i,t,c,p,a) in d.items():
        r,i,t,c,p,a=[x/L for x in (r,i,t,c,p,a)]
        n=i+t+c-p-a
        print(f'{y:28}{r:9.1f}{i:8.1f}{t:8.1f}{c:8.1f}{p:8.1f}{a:8.1f}{n:8.1f}{n/r*365:7.1f}{n/r*100:6.1f}%{(n+a)/r*365:12.1f}')
show('Ahluwalia Contracts (consolidated)', acil)
show('ITD Cementation / Cemindia Projects (consolidated)', cem)
