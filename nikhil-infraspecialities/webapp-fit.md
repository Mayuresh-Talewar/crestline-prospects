# Nikhil Infraspecialities: where Crestline fits (step 2, 2026-10-09)

Verdict: weak fit, built anyway (README NI-2). The company is a manufacturer of paver blocks, pre-cast products, AAC blocks and ready-mix concrete, with private building works (CRISIL Ratings, 6 Jan 2025). It is not a roads or EPC contractor.

Navigation read from lib/navigation.ts (read-only). Project scope order: Ask Crestline, Overview, Working Capital, P2P with Vendors under it, O2C with Client under it, Alerts & Tickets, Performance, Project Hierarchy.

| Screen | Fit here | Why |
|---|---|---|
| Ask Crestline | Strong | Works on any connected source; answers "what if ten days less" through the simulator |
| Working Capital (project) | Strong | The one published figure, 476 gross current asset days, is a working-capital figure. The simulator moves the receivable leg at a daily rate |
| O2C and Client | Partial | Applies to the building works (RA bills, acknowledge, certify, pay). Sales of material are invoices, not certified bills; the product has no separate material-sales view |
| P2P and Vendors | Partial | Applies to material purchases; no vendor figure is published, so nothing is claimed |
| Alerts & Tickets | Strong | Finding to owner to re-measure works on whatever the first sync supplies |
| Overview (contract to cash waterfall) | Weak | Built for contract value turning into cash; a materials seller has no contract value series |
| Performance, Project Hierarchy | Later | Meaningful only after a first commitment and a connected source |

What we do not do: price stock. Inventory is not used as a lever (README NI-2); the simulator's stock leg is left out of every scenario.
What is missing for this company: no ERP is named in any filing, no order book, no debtor, creditor or inventory days, no borrowing rate, no official site or logo. The pack therefore claims nothing from their system; every line about the product says "once connected".
Ownership rule used on every page: measure, prepare, review, submit and invoice are the company's; acknowledge, certify and pay are the client's.
