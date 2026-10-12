# J. M. Mhatre Infra: Crestline web app fit (JM-2+3, LIGHT)

One page. What the app does today for a road and bridge contractor working for CIDCO and state government bodies in Maharashtra, what it does not do, the pilot, and what must never be claimed. Source for the product: the app's own CLAUDE.md and lib/navigation.ts, read on 08 Oct 2026. The process map screen no longer exists and is never offered.

## What Crestline models for this kind of contractor

- **RA bills, end to end.** Each running account bill is rebuilt from its own dated trail: work executed, measured, bill prepared, submitted, certified by the client, invoiced, collected. Measuring, preparing, reviewing, submitting and invoicing are the company's own acts; acknowledging, certifying and paying (collection) are the client's. A wait is owned by whoever makes the act that ends it, so a CIDCO or state body delay is never counted as the company's.
- **Measurement and certification.** Time from executed work to certified bill, per bill, against the certification window the contract states. Certified short is read off the certification itself.
- **Collection.** Ageing on each invoice's own due date, never a house average; which client body is paying late against the term it signed.
- **Retention.** The retention ledger: deducted per bill, released, and what is held now. Released by certificates, so it is shown as the client's act.
- **Vendor and subcontractor timing.** Each supplier and subcontractor paid against its own due date. Paying early is shown as cash given away; paying late is shown as risk, never as a saving.
- **Stock on site.** Only where the source records material issued as well as received; otherwise the card reads NA and says why.
- **The cash cycle and the simulator.** Stock days plus collection days less creditor days, drawn to scale, and a simulator that moves one leg at the measured value of a day.

## What it does not model

- Any legal entity other than the one company connected.
- Land, plots and property.
- Bank instruments and margin money, and earnest money or security deposits held by clients.
- Borrowing, facilities and interest. A financing figure appears only at a rate the company states.
- Foreign currency. Everything is in INR; there is no multi-currency handling.

## The pilot (JM-3)

One entity, one to three running road or bridge projects, read-only, 14 days. The connection to the company's system will feed Crestline read-only and is built during the pilot; it is not built today. No system is named for this company because none is named in any public document.

## Never claim

1. That Crestline connects to their system today. Say "will feed, read-only, built during the pilot".
2. Which ERP or accounting system they use.
3. Any day count after FY23, or that we know their current cycle.
4. Any interest figure. No rate is disclosed.
5. Any named site, bill, client desk or person behind a delay; the public record does not hold them.
6. That a scenario is a forecast or a promise. Rows are alternatives and are never added.
7. That paying vendors later releases cash.
8. Bank instrument, deposit, land, other entity or currency tracking.
9. A process map screen, or any picture of their process drawn from their data.
10. Certification, hosting location or encryption claims that are not set up today.
11. That our demo environment is a client, or any demo figure beside theirs.

## Screens that exist today, and the fields each needs

Fields come from whatever system holds them: an ERP, an accounting package, or spreadsheets the site keeps. Each is probed at connect time; a field the source cannot supply makes its card read NA, never zero.

| Screen (project scope) | What it answers here | Fields it needs |
|---|---|---|
| Ask Crestline | The morning brief for the project; questions answered from the screens' own figures | Everything below |
| Overview | Contract value to cash: where it stops | Contract value, executed work by date, RA bill amounts and deductions (retention, recoveries), receipts |
| Working Capital | Cash cycle, simulator, ranked levers | Monthly trial balance (receivables, unbilled work, retention, stock, payables, advances), revenue, invoiced value, cost base |
| P2P (Cash Out) | Orders through to vendor payment | Purchase order, goods receipt, supplier invoice with due date, payment date and amount |
| Vendors | Who is paid early or late against own terms | Vendor terms, MSME flag, subcontract bills and payments |
| O2C (Cash In) | Billing, certification, collection | RA bill number, measurement date, submitted date, certified date and amount, invoice date and due date, receipt date and amount |
| Client | Which client body holds the cash, and since when | The O2C fields plus the payment term and certification window in each contract |
| Alerts & Tickets | Who was told, and whether the figure moved | People with department and e-mail; any fact above to re-measure |
| Performance | Before and after, proved from the source | A second sync after the first commitment |
| Project Hierarchy | Who sits in which slot | People, roles, reporting line |

Portfolio scope (all projects together) has the same Working Capital, O2C, P2P, Clients, Vendors, Performance and Alerts & Tickets screens, plus Ask Crestline, Projects, Portfolio Overview and Project Hierarchy. With one to three pilot projects it is a roll-up of those only.
