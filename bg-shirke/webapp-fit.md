# B. G. Shirke: Crestline fit (SH-2)

Entity: B. G. Shirke Construction Technology Private Limited, standalone, unlisted. Figures are from India Ratings (Ind-Ra) releases in data.md; the latest is R1, 20 Feb 2026.

## What Crestline models here

| Area | Why it fits | Evidence |
|---|---|---|
| RA bills on government housing and civil contracts | Housing for government agencies is the main line | R1 company profile |
| Certification by MHADA, CIDCO and other public bodies | MHADA 47%, CIDCO 15%, MMRDA 8%, Konkan HADB 4%, PMRDA 3%, PCMC 2% of the Rs 15,700 Cr order book (Dec 2025) | R1 |
| Receivables crossing the year end | Gross WC rose to 44% of revenue in FY25 "primarily due to higher receivable days" | R1 |
| Retention | Where a bill carries retention, the company **Retention** view lists it per bill until it is released | Product; R1 does not size retention |
| Mobilisation advances as funding | Net WC "remained stable at 17%" in FY25, "aided by higher mobilisation advances" | R1 |
| Vendor timing | The net cycle "has elongated" as the company "takes advantage of price discounts by timely/advance payments to vendors" | R1 |

## What Crestline does not model here

- **Precast plant production.** The plants are captive to the company's own projects (R1, W1). Crestline reads project cash: bills, certificates, receipts, vendor payments. Plant output, plant stock and plant costing are out of scope and never counted as a saving.
- **Other companies in the Shirke Group.** One entity only.
- **Foreign currency.** Every figure is INR; the app does not handle multiple currencies today.
- **Interest.** No borrowing rate is disclosed, so the simulator runs at 0% and no interest saving is shown.

## The pilot

One to three running housing or civil projects, one entity, read only, 14 days. The company's accounting system **will feed Crestline, read only, through an adapter built during the pilot**. Nothing is written back.

## NEVER CLAIM

1. That Crestline already connects to their system, or which system they run. Not known (data.md, NOT FOUND log).
2. Any project type, client or region beyond what R1 names.
3. Any interest saved, or any rate as theirs.
4. Precast plant stock or output as a saving.
5. That the 10 and 30 day steps are forecasts or promises. They are scenarios; the rows overlap and are never added.
6. That paying vendors later saves money.
7. That a client body's certification or payment is ours to speed up. Measure, prepare, review, submit and invoice are ours; acknowledge, certify and pay are the client's.
8. Any process map of their stages. That screen is gone; the stages shown are the O2C and P2P screens' own steps.
9. Any figure, site, bill or desk from their own books. None has been seen.
10. Certifications, hosting or encryption Crestline does not hold today.

## Screens and the fields each needs

| Screen (project scope unless stated) | What it answers here | Fields needed from their system |
|---|---|---|
| Ask Crestline (company and project) | "Which project and which client body is holding the most days?" | Everything below; it reads the screens' own evidence |
| Overview | Contract to cash on one project: where value stops becoming cash | Contract value, work executed by period, RA bill value, certified value, invoiced value, receipts, retention and advance recovery deducted per bill |
| Working Capital | Capital trapped, cash cycle diagram, simulator, ranked levers | Ledger balances for receivables, unbilled work, retention, stock, payables, mobilisation advances; revenue and cost by month; contract certification window and payment term |
| O2C (project), with the company views RA Bills, Receivables and Retention | Which bill waits at which step, and whose act ends the wait | RA bill number, measured date, prepared and submitted dates, certified date and amount, invoice date, due date, receipt date and amount, retention deducted and released, the certifying body |
| Client | One client body's certification and payment against its own terms | Client body per project, payment term, certification window, receipts by bill |
| P2P and Vendors (project), with the company view Payment Timing | Who is paid early, and how many days of cash each early payment used | PO, goods receipt, supplier invoice date and due date, payment date and amount, discount taken (brought in during the pilot; no screen shows it today), vendor advance ledger |
| Company Working Capital and Clients (portfolio) | Which of the one to three pilot projects holds the most days, and with which body | Project to client body mapping, plus the project fields above |
| Alerts & Tickets, Performance | Who owns each wait, and whether the figure moved | Department and person on each step, internal or external desk flag, work e-mail |
