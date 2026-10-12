# Shubham EPC: depth (SE-1)

Entity: Shubham EPC Private Limited, standalone. Document IDs and calc sections (C1 to C9) as in data.md. Quotes are copied from the page image (CRISIL screenshots, newsletter page renders), not from a text layer alone.

## 1. The sources' own words on working capital

CRISIL, 02 Jul 2025 (D1, "Weaknesses", image-checked):
> "Large working capital requirement: Gross current assets have remained high in the range of 155-200 days over the three fiscals through March-25, driven by moderately high receivables, inventory and other current assets pertaining to contractual requirement towards work orders. The working capital requirement is funded through credit from suppliers and short-term bank debt. Execution of large orders may lead to high incremental working capital requirement. Efficient working capital management and better liquidity position would be critical over the near-to-medium term."

CRISIL, 03 Apr 2024 (D2, same section, image-checked):
> "Gross current assets have remained high at 145-201 days over the two fiscals through March-23 ... Execution of large orders would lead to high incremental working capital requirement."

CRISIL names working capital in the headline paragraph of both rationales: "These strengths are partially offset by exposure to risks inherent in tender-based business amid competition, along with large working capital requirement." (D1, D2)

Downgrade trigger (D1, "Downward factors"): "substantial increase in the working capital requirement or limited cash flow weakening liquidity and the financial risk profile."

## 2. The sources' own words on liquidity

D1 (Jul 2025): "Liquidity: Adequate. Bank utilization is moderate at 80 percent for the past twelve months ended April 2025. Cash accrual are expected to be around Rs 40 crore which are sufficient against term debt obligation of Rs 5-8 crore over the medium term."

D2 (Apr 2024): "Bank limit was utilised at around 75% over the 12 months through December-2023. Cash accrual, expected at around Rs 30 crore per annum, will sufficiently cover yearly debt obligation of Rs 2-4 crore over the medium term. Current ratio was healthy at 1.60 times on March 31, 2023. Company maintain free cash and FD balance of around Rs.8-10 crore as of Dec-23."

Company (N1 PDF p5, printed p03, FY2025-26 Q4 newsletter, image-checked): "While the final numbers remain subject to closure and audit, the trend clearly indicates robust growth aligned with our strategic direction." And: "the organization is aligned towards an ambitious target supported by a strong order book".

Vinay Badera, Managing Director (N1 PDF p13, printed p11, image-checked): "Our growth ambitions are clearly defined in our business plan ... As we scale, it is important that we step out of our comfort zones". Same page: "We must also remain mindful of how we work ... we should avoid unnecessary stress, which often arises when work is delayed until the last moment."

Vinay Badera, Managing Director & CEO (N5 PDF p13, printed p11, Jul 2026, image-checked): "Growth also brings responsibility. As we scale our operations, we must sharpen our focus on cost consciousness." And: "ERP implementation, AI-enabled solutions, digital dashboards, and data-driven decision-making are helping us move from intuition-based management to insight-based management."

## 3. Trend (all computed in src/se-calc.py)

| Measure | Trend | Basis |
|---|---|---|
| Operating income | 154.6 (FY20) to 510.05 cr (FY25); CAGR 27.0% (C1) | CRISIL standalone, same basis |
| Growth by year | +8.2%, +64.9%, +19.7%, +34.6%, +14.8% (FY21 to FY25, C1) | same |
| PAT margin | 3.3% to 7.04% (FY20 to FY25) | CRISIL KFI |
| Gearing | 1.06 (FY20) to 0.60 (FY25) | CRISIL KFI |
| Gross current assets | 145 to 201 days (FY22 to FY23) then 155 to 200 days (FY23 to FY25) | CRISIL; a band, not a yearly series |
| Bank utilisation | ~75% (12 m to Dec 2023) to 80% (12 m to Apr 2025) | CRISIL |
| Rated limits | Rs 95 cr (2021, then withdrawn), Rs 125 cr, Rs 165 cr (Apr 2024), Rs 225 cr (Jul 2025): +36.4% in 15 months (C8) | CRISIL |
| Non fund based share of limits | Rs 146.9 of Rs 225 cr (Jul 2025) | CRISIL; guarantees dominate the facility mix |
| Company plan | turnover 680 cr provisional FY26 (+33.7%), 1,000 cr projected FY27 (+47.1%) (C3) | Company newsletter; not audited, not rated |

What the trend says in one line: income grew 3.30x in five years, FY20 to FY25 (C1), while CRISIL's gross current assets band has not come down, so each year's growth has pulled more capital into the work. The two CRISIL bands overlap; they do not prove the days rose or fell.

What the accounts cannot tell them: which receivable, which bill, which site, and whose desk the 155 to 200 days sit on. CRISIL does not split receivables from inventory from "other current assets pertaining to contractual requirement". That split is the gap Crestline answers.

## 4. Disconfirm step (one search per headline fact, designed to prove it wrong)

| Headline fact | Disconfirming test | Result |
|---|---|---|
| FY25 income Rs 510.05 cr | Company's own figure (N1) | 508.5 cr: 0.30% lower (C3). Agrees; small gap, CRISIL adjusts operating income. Use CRISIL as the rated figure |
| FY23 income Rs 330.20 cr | N1 and N1 text "Rs 330+ crore" | 330.1 cr: agrees within 0.03% |
| Order book above Rs 1,400 cr is current | Searched N1, N5, N6 and the site for a newer figure or a cancellation | No newer figure; N1 "strong order book" only. Live projects named on the site. Treat as of Jul 2025 |
| Rating BBB+/A2 is current | Web searches for a 2026 CRISIL action, "not cooperating", other agencies | None found. CRISIL reviews yearly; a Jul 2026 action may exist unindexed. Print "as of 02 Jul 2025" |
| Gearing 0.60 (FY25) | D1 text vs D1 table | Text says 0.61, table 0.60: CRISIL conflicts with itself |
| Interest coverage FY23 | D2 text vs D2 table | Text 5.31, table 5.21: CRISIL conflicts with itself |
| Incorporation year | D3 vs D1, D2 | D3 "incorporated in 2009"; D1, D2 "reconstituted ... in 2010" |
| Growth arrows on N1 charts (24.82% turnover, 29.82% net worth) | Recompute every CAGR window (C5) | No window gives 24.82% or 29.82% (nearest: turnover FY23 to FY25 24.11%; net worth FY23 to FY25 34.82%). Do not print either arrow |
| ERP quote speaker | Image of N2 PDF p1 | Speaker is Archana Badera, Director, not the MD. The text layer misled |
| "lifetime high sales turnover" quote | Image of N3 PDF p2 | Speaker is CA Mangesh Kataria(ya), Director |

## 5. What this allows in the booklet (for SE-2/3)
- Print: income, PAT, gearing, interest coverage (CRISIL, dated); gross current assets band; rated limits; order book as of Jul 2025; FY26 provisional and FY27 projection only labelled as the company's own unaudited figures.
- Do not print: any interest saved (no rate); any DSO/DPO/DIO; a debt figure; the newsletter's growth arrows.
