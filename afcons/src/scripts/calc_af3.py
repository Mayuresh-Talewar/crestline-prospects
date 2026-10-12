# AF-3 computations. Every input is read from the page/doc cited in depth.md. Run: python -I calc_af3.py
mn = lambda x: x / 10
# 1. NWC days, company formula (Q4 FY25 presentation PDF p.40): (CA - cash&bank) - (CL - current borrowings), / revenue * 365
# FY22-FY24 RHP PDF p.444 (Rs mn), FY25-26 AR26 PDF p.165 (Rs Cr). Revenue: data.md section 2.
bs = {  # CA, cash, other bank bal, CL, current borrowings, revenue (Rs Cr)
 'FY22': (mn(78931.01), mn(4470.85), mn(793.31), mn(72247.27), mn(11533.13), 11018.97),
 'FY23': (mn(89749.55), mn(3193.21), mn(581.23), mn(82499.17), mn(9663.44), 12637.38),
 'FY24': (mn(109732.92), mn(4132.59), mn(2530.01), mn(98814.66), mn(18573.11), 13267.50),
 'FY25': (11355.97, 440.17, 330.39, 8334.75, 1640.48, 12548.42),
 'FY26': (12953.97, 385.70, 500.19, 10011.43, 2618.67, 11948.38)}
nwcd = {}
for y, (ca, c, b, cl, cb, rev) in bs.items():
    nwc = (ca - c - b) - (cl - cb); nwcd[y] = nwc * 365 / rev
    print('NWC %s: (%.2f-%.2f)-(%.2f-%.2f)=%.2f Cr; days=%.1f' % (y, ca, c + b, cl, cb, nwc, nwcd[y]))
print('Company published: FY24 63, FY25 113, FY26 143 (AR26 p.18; Q4P p.39 prints FY24/FY25 only)')
print('CRISIL basis (RR Aug-26): FY24 <90, FY25 117, FY26 139; company minus CRISIL FY25 = %d, FY26 = %d days' % (113 - 117, 143 - 139))
print('NWC change FY24->FY26 company basis: +%d days; FY22->FY26 computed: %+.1f days' % (143 - 63, nwcd['FY26'] - nwcd['FY22']))
# 2. Guidance vs outcome
rev25, rev26, ti25, ti26 = 12548.42, 11948.38, 13022.77, 12322.10
print('FY26 revenue growth: %.2f%% (guide 20-25%% May-25; 10%%+ Nov-25; 5%% Feb-26); total income %.2f%%' % (100 * (rev26 / rev25 - 1), 100 * (ti26 / ti25 - 1)))
print('Revenue FY26 needed for +20%%: %.0f; shortfall %.0f Cr (%.1f%% of that)' % (rev25 * 1.2, rev25 * 1.2 - rev26, 100 * (rev25 * 1.2 - rev26) / (rev25 * 1.2)))
print('Order inflow FY26 4,125 vs guide 20,000: %.1f%% of guide' % (100 * 4125 / 20000))
print('Op cash flow FY25 -132.20 vs "positive" promised Nov-24: miss by %.2f' % (0 - -132.20))
print('Debt: CFO Q4T PDF p.21 said FY27 debt would come down to the FY25 level (gross incl acceptances 2,235.72 at Mar-25); Mar-26 is 3,538.27, gap to that level %.2f (open: FY27 not closed)' % (3538.27 - 2235.72))
print('Net debt/equity net-debt basis: Mar-26 0.5x -> Jun-26 0.68x (Q1T PDF p.8)')
# 3. Rated limits (CRISIL RR 19-Aug-26 annexure, Rs Cr) - SANCTIONED/RATED LIMITS, not outstanding
bg = [14743, 1060, 710, 1920, 566, 250]
print('CRISIL BG rated limits sum %d; + proposed BG 641 = %d; LC 1895 + proposed 105 = %d; CC/WCDL 2400; proposed WC 200' % (sum(bg), sum(bg) + 641, 1895 + 105))
print('ICRA Jun-25 non-fund 17490 + ST 1600 = %d (rated, not outstanding)' % (17490 + 1600))
print('RHP BG incl LC Jun-24 14,371.26 Cr (outstanding provided) vs CRISIL BG-only rated limit Aug-26 %d: not like-for-like' % sum(bg))
# 4. Non-current contract assets (RHP p.444 Rs mn; AR26 p.165)
nc = {'Mar-22': mn(14912.91), 'Mar-23': mn(14164.98), 'Mar-24': mn(12710.09), 'Mar-25': 1646.58, 'Mar-26': 1497.04}
print('NC contract assets Cr:', {k: round(v, 2) for k, v in nc.items()})
ca_tot = {'Mar-24': 5225.40, 'Mar-25': 7095.76, 'Mar-26': 7731.50}
for k in ca_tot: print('NC share of total contract assets %s: %.1f%%' % (k, 100 * nc[k] / ca_tot[k]))
print('Current contract assets Mar-25 5,449.18 -> Mar-26 6,234.46: %+.1f%%' % (100 * (6234.46 / 5449.18 - 1)))
# 5. Claims: Chenab award split; EOM items
print('Chenab: 165.62 revenue + 77.91 from contract assets = %.2f = award 243.53; separate 115 stays in non-current contract assets' % (165.62 + 77.91))
print('TTA JV carried: 659.87 + 120.81 + 30.63 + 25.77 = %.2f Cr; less 79.28 received as customer advance = %.2f' % (659.87 + 120.81 + 30.63 + 25.77, 659.87 + 120.81 + 30.63 + 25.77 - 79.28))
print('TTA share of total NC contract assets Mar-26 (659.87 / 1497.04) = %.1f%%' % (100 * 659.87 / 1497.04))
print('Dahej: LD award 79.28 incl interest 20.45 -> principal %.2f; plus contract asset 11.10 = %.2f' % (79.28 - 20.45, 79.28 + 11.10))
print('Net receivable on arbitration awards 1,259.08 vs total trade receivables net 4,038.09 = %.1f%%; vs gross 4,319.79 = %.1f%%' % (100 * 1259.08 / 4038.09, 100 * 1259.08 / 4319.79))
print('AGJV provision 124.12 (Note 36) vs CRISIL "around Rs 130 crore" one-off: diff %.2f' % (130 - 124.12))
# 6. Geography
print('Overseas revenue share FY26 %.1f%%; segment-asset share %.1f%%; assets/revenue India %.2fx Other %.2fx' % (100 * 3349.02 / rev26, 100 * 5659.39 / 19068.01, 13408.62 / 8599.36, 5659.39 / 3349.02))
print('Overseas revenue share FY25 %.1f%%; segment-asset share %.1f%%' % (100 * 3851.29 / rev25, 100 * 4558.79 / 17106.22))
# 7. Interest
print('Finance cost / revenue: FY25 %.2f%%, FY26 %.2f%% (finance cost 629.20 -> 673.61 = %+.1f%%)' % (100 * 629.20 / rev25, 100 * 673.61 / rev26, 100 * (673.61 / 629.20 - 1)))
print('Finance cost paid FY26 669.86 vs operating cash flow -127.49')
# 8. Peers (own filings)
jk = {'FY22': 127, 'FY23': 126, 'FY24': 123, 'FY25': 112, 'FY26': 99}
print('J Kumar working-capital days FY22->FY26: %+d days; fell in %d of 4 years' % (jk['FY26'] - jk['FY22'], sum(jk[a] > jk[b] for a, b in zip(list(jk)[:-1], list(jk)[1:]))))
lt = {'Mar-22': 19.7, 'Mar-23': 16.1, 'Mar-24': 12.0, 'Mar-25': 11.0, 'Mar-26': 4.1}
print('L&T group NWC/revenue Mar-22->Mar-26: %+.1f pts; fell in %d of 4 years' % (lt['Mar-26'] - lt['Mar-22'], sum(lt[a] > lt[b] for a, b in zip(list(lt)[:-1], list(lt)[1:]))))
ncc = {'Q4FY24': 76, 'Q4FY25': 77, 'Q3FY26': 119, 'Q4FY26': 97}
print('NCC standalone NWC days Q4FY24->Q4FY26: %+d (peak Q3FY26 119)' % (ncc['Q4FY26'] - ncc['Q4FY24']))
hg = {'FY22': 31, 'FY23': 23, 'FY24': 25, 'FY25': 37}
print('HG Infra standalone NWC days FY24->FY25: %+d; FY23->FY25 %+d' % (hg['FY25'] - hg['FY24'], hg['FY25'] - hg['FY23']))
print('Afcons company NWC days FY24->FY26: %+d (+%.0f%%)' % (143 - 63, 100 * (143 / 63 - 1)))
# 9. Call-date arithmetic: days from 19-May-26 call to 10-Aug-26 call
import datetime as d
print('Q4FY26 call 19-May-26 -> Q1FY27 call 10-Aug-26: %d days; "before June" deadline 31-May-26 passed %d days before Q1 call' % ((d.date(2026,8,10)-d.date(2026,5,19)).days, (d.date(2026,8,10)-d.date(2026,5,31)).days))
print('Q1FY27 intimation lead: 3-Aug-26 for 7-Aug-26 board = %d days; Q2 outer deadline 14-Nov-26 (45d after 30-Sep) = %s' % ((d.date(2026,8,7)-d.date(2026,8,3)).days, d.date(2026,9,30)+d.timedelta(days=45)))
