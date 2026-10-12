# Reliance Infrastructure Limited: solutions (ticket RI 3, LIGHT form)

Prepared 8 Oct 2026. One solution per problem in `problems.md`. Screens are described as they exist in the app today (`_shared/crestline-webapp-context.md`). The SAP adapter does not exist yet; it is built during the pilot. Rule 13 pictures show WHAT would be measured, never a number: no days, no cash, no interest, no savings (Garvis rulings, ticket RI 3).

## Solution 1. Progress next to billing, per project

**Crestline screen (true today):** project Overview. The contract to cash waterfall shows where contract value stops becoming cash, and the value state map sums to the contract, with any residual named.

**Rule 13 picture.** One row per running job: Kudankulam, Mumbai Metro Line 4 Packages 8, 10, 12, Chordaha to Gorhar.
* Today (solid): the latest progress figure as filed, with its page (problems.md, Problem 1): Kudankulam more than 85% and Chordaha to Gorhar 75%, both as on 31 Mar 2026. Metro Line 4 reads "no figure filed".
* With Crestline (dashed, hollow): the same contract split into executed, billed, certified, collected. Each segment labelled "measured from your ERP", no value printed.
* Caption: "What Crestline would measure, not a figure."

**ERP data needed:** contract value per project and WBS; work executed and measured, with dates; RA bills with gross amount and deductions (retention, advance recovery); certified amount and date; customer receipts with date.

## Solution 2. Contract assets split by job and by kind

**Crestline screen (true today):** project Working Capital, the capital position panel (sources and uses), and the value state map on Overview. Contract assets (work done, not yet billed) and retention are separate blocks, and a figure the source cannot supply reads NA with its reason.

**Rule 13 picture.**
* Today (solid): one bar, contract assets gross, opening FY26 Rs 116.52 Cr and closing Rs 104.10 Cr (AR FY26 PDF p172, STANDALONE).
* With Crestline (dashed, hollow): the same bar split into three running jobs, and each job split into "executed, not yet billed" and "retention held by the client". Each piece labelled "measured from your ERP", no value printed.
* Caption: "What Crestline would measure, not a figure."

**ERP data needed:** WIP or unbilled revenue postings by project; retention deducted per RA bill and retention released; contract terms (retention percent and cap, defect liability months); the trial balance with opening figures, so the ledger route and the document route can be reconciled.

## Solution 3. Every running bill's wait, and whose desk it is on

**Crestline screen (true today):** the project O2C screen's stage waits (each stage with its days, its share of the cycle and whose desk it sits on, ours or the client's), the Client screen beneath it (where this client's cash is stuck, whose delay, and when it lands), and Alerts & Tickets, which turns a verdict into an owned commitment that is measured again from fresh data. Each RA bill is rebuilt from its event trail, and a wait belongs to whoever makes the act that ends it.

**Rule 13 picture.** A stage line, drawn without numbers:

| Stage | Whose act ends the wait | With Crestline |
|---|---|---|
| Work executed to measured | Ours | days measured from your ERP |
| Measured to RA bill submitted | Ours | days measured from your ERP |
| Submitted to acknowledged | The client's | days measured from your ERP |
| Acknowledged to certified | The client's | days measured from your ERP |
| Certified to invoiced | Ours | days measured from your ERP |
| Invoiced to collected | The client's | days measured from your ERP |

Today: "not in any filing" on every row (problems.md, Problem 3). Caption: "Stages and owners only. Days come from your ERP once connected."

**ERP data needed:** a dated event per bill step with user and department; departments marked ours or the client's; payment term days and certification window per contract; customer advance balance and recovery per bill.
