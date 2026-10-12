# TJN Construction: data.md (step 1 research, 2026-10-09)

## VERDICT: NOT FEASIBLE (no booklet on primary data)

Reasons:
1. Unlisted, and NO rating rationale found from CRISIL, ICRA, CARE, India Ratings, Infomerics, Acuite or Brickwork. Searches by exact name, "TJN Group", "TJN Developers LLP" and "T J Naik" returned nothing from any agency. So there is no primary source for revenue, EBITDA, PAT, debtor/creditor/inventory days, limits, rate or order book.
2. The company site (tjngroup.com, fetched 2026-10-09) carries no turnover, no annual return/report, no ERP statement, and no order book. It says "over 70 people" and "150+ projects"; nothing financial.
3. The dossier's headline (about Rs 165 Cr revenue) cites only Crunchbase, which is not a primary source. Nothing in the primary set supports or contradicts it. It cannot print.
4. A booklet needs a working-capital trend and calculator inputs. None can be built without inventing numbers.

Re-open as LIGHT only if the client supplies the company's own audited accounts or a rating letter.

## Items (Verified or NOT FOUND)

| Item | Result | Source / basis |
|---|---|---|
| Legal name | Verified as printed on site: "Tjn Construction Pvt. Ltd" (group brand "TJN"; sister "TJN Developers LLP"). Full registered name and CIN NOT FOUND in a primary document | tjngroup.com/contact-us-2/ , fetched 2026-10-09 |
| Listed or not | Unlisted: no exchange filing found; site describes "privately owned" enterprise | tjngroup.com/group-profile/ ; absence of NSE/BSE record NOT proven by an exchange search tool |
| Registered address | NOT FOUND as "registered office". Site shows a Pune office: Flat no 1, Plot no 5, Surya Terraces, Padmavati, Pune 411043; and Bangalore: #15/1, Shettyhalli Village, Royal Street, Yashwantpur Hobli, Bangalore North Taluk, Bangalore 560090 | tjngroup.com/contact-us-2/ (office addresses, not a registry extract) |
| Revenue, 2-3 years | NOT FOUND | no primary source |
| EBITDA | NOT FOUND | |
| PAT | NOT FOUND | |
| Debtor / creditor / inventory days or GCA days | NOT FOUND | |
| Working-capital cycle | NOT FOUND | |
| Rated limits and split | NOT FOUND (no rating located) | |
| Interest rate | NOT FOUND | |
| Order book and date | NOT FOUND | |
| ERP | NOT FOUND (site silent) | tjngroup.com all pages |
| Leaders, exact titles | Partly. Site "Top Management" page lists by initials only: SKN "Chairman"; TJN, CJN, PSN, HSN each "Diretor" [sic, site spelling]; key personnel Jagdhish Thakur, Sachin Tulaskar, Sathish Kumar, Prabhakar Naik, Madhu Shashidharan, Mahesh KT (no titles). Full names of directors NOT FOUND in a primary source | tjngroup.com/top-management/ , fetched 2026-10-09 |
| Site facts (descriptive only) | "employs over 70 people", "more than 100 supply-chain operatives"; services: mass excavation, ground engineering (piling, anchors, shotcrete, dewatering), design, shell and core construction. Projects listed include Embassy Tech Village, Embassy Springs, Sattva Salarpuria Cadenza, ITC Banaswadi, ITC Ahmedabad, Orchid Nirvana | tjngroup.com/group-profile/, /services-2/, /projects/ |

## Dossier check (src/35_TJN_Construction_Dossier.pdf, checklist only)

| Dossier claim | Result |
|---|---|
| Revenue about Rs 165 Cr (headline) | UNSUPPORTED. Dossier's own source is Crunchbase. No rating rationale exists to check it against. The same dossier also says "Revenue: not disclosed". |
| Founded 1993, 30+ years | NOT VERIFIED. Site gives no founding year (a fetch summary said "21 years of experience" but it is not in the raw page text, so dropped). Third-party registry listings (not primary, not cited) give an incorporation in 2008. CONFLICT, unresolved. |
| Unlisted, family-run, Naik family | Site: "first generation of family ownership", initials consistent. Naik name itself appears only as "Prabhakar Naik, Key Personnel". |
| Six Naik-family directors (MCA) | Site shows five initials (SKN, TJN, CJN, PSN, HSN). Six NOT VERIFIED. |
| HQ Pune | Site lists Pune and Bangalore offices; Bangalore is a second office (many projects are Bangalore and Ahmedabad). |
| Ground-engineering plus civil EPC | Right per site services page. |
| Likely Tally / mid-ERP | UNSUPPORTED. NOT FOUND. |
| Website tjngroup.in | WRONG domain: it does not resolve. Site is tjngroup.com, email info@tjngroup.com. |

## GTM check (crestline-gtm tjn-construction.json, read only)

Entity: same trade name and city (TJN Construction, Pune, Naik-family directors, tjngroup domain family). Treated as the same entity ONLY loosely: no CIN or registry match was possible without MCA. Nothing from gtm is marked High confidence (ERP is "Low"; revenue sourced to Crunchbase), so nothing fills a gap.

| gtm claim | Verdict |
|---|---|
| Revenue about Rs 165 Cr | Unsupported (Crunchbase) |
| est. 1993 | Unsupported / conflicts with registry listings |
| ERP unconfirmed | Right (nothing found either way) |
| Domain tjngroup.in? | Wrong: site is tjngroup.com |
| Directors Tukaram Jiwayya Naik, Suresh Krishna Naik, Prakash Suresh Naik | Unsupported by primary source (site shows initials TJN, SKN, PSN, which fit but are not names). SKN is shown as "Chairman", gtm calls T J Naik the senior promoter/MD: CONFLICT |
| Receivables, orderBook etc. | null in gtm; NOT FOUND here too |

## Conflicts between sources
- Founding: dossier/gtm 1993 vs registry aggregators 2008 (non-primary). Site silent. Unresolved.
- Senior-most: gtm "T J Naik senior promoter/MD" vs site "SKN Chairman, TJN Director".
- Domain: dossier/gtm tjngroup.in vs site tjngroup.com.
- Scale: Rs 165 Cr (Crunchbase) vs site "over 70 people": not contradictory in itself but unchecked.

## Logo
Official file saved: src/tjn-logo-official.png (from tjngroup.com/wp-content/uploads/2018/11/TJN-logo-balck-l.png). Clean black-on-transparent mark, but only 199 x 160 px: usable small, not for a cover hero.

## Re-read check
Figures printed above (over 70 people, more than 100 supply-chain operatives, addresses, project names, titles) re-read against the raw page HTML saved 2026-10-09. A fetch summary's "150+ projects" and "21 years" were NOT in the raw text and are excluded.
