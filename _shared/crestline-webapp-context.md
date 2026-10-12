# Crestline: product context

Paste this into any AI or design session as background on the Crestline web app. It describes the product only: what it is, what each screen answers, and the rules it keeps. It holds no customer data.

---

## 1. What Crestline is

Crestline is working-capital intelligence for EPC and construction companies. It sits **above** the company's ERP (SAP, Oracle, Tally, Excel or any other system), reads from it without ever writing back, and answers one question: **where is the company's money trapped, for how long, why, and who can release it?**

An ERP records what happened. It does not record how long each step took, whose desk it sat on, or what that wait cost. Crestline rebuilds that from the ERP's own event trail and ledgers, prices every delay in rupees, names the person who can move it, and follows the action through to a re-measured result.

**What it is not:** not an ERP, not accounting software, not project management, not a generic process-mining tool, not HR, payroll, CRM, tax filing or inventory management. It does not replace SAP. It reads it.

---

## 2. The three pillars

| Pillar | Plain meaning | Typical questions |
|---|---|---|
| **O2C** (Order to Cash, cash in) | Work executed, measured, billed (RA bills), certified by the client, invoiced, collected | Which bills are waiting for certification? Which client is paying late against the terms they signed? |
| **P2P** (Procure to Pay, cash out) | Purchase order, goods received, supplier invoice, matching, payment | Which vendors are we paying early (leaking cash) or late (risk)? |
| **Working Capital** | The capital trapped between the two: stock, unbilled work, receivables, retention, minus what vendors fund | How many days of revenue is tied up, and which lever releases the most? |

The intelligence layer across all three is **TIME x MONEY**. Every finding has a rupee figure, a number of days, an owner, a cause, a recommended action and a confidence. Findings are ranked by **rupee-days** (amount x excess days), never by count of cases. A four-day wait on ₹40 Cr outranks a three-week wait on ₹40 L.

---

## 3. Hierarchy and navigation

Two scopes, and the URL decides which one you are in. The sidebar changes completely between them, so a reader never confuses a company figure with a project figure.

### Portfolio scope (the whole company)

| Screen | What it answers |
|---|---|
| **Ask Crestline** (home) | The morning brief across every project: what happened and what needs me. Then ask anything about the company. |
| **Projects** | Every project and the capital it is holding. Also where a new project or source is connected. |
| **Portfolio Overview** | The control tower: company position, project comparison, biggest process bottleneck, cash exposure, funding gap, time against money, actions. |
| **Working Capital** | The company cash command centre: where the cash is, why working capital moved, cash-in and cash-out pipelines, ageing, ratios by project, release opportunity per project. |
| **O2C (Cash In)** | Work executed through to cash collected, with drill-downs into RA bills, receivables, retention and claims. |
| **P2P (Cash Out)** | Procurement through to vendor payment, with drill-downs into purchase orders, payables, payment timing and three-way matching. |
| **Clients** | Each client's certification and payment behaviour across all sites. |
| **Vendors** | Vendor exposure and payment timing against each vendor's own terms. |
| **Project Hierarchy** | Who reports to whom, which slots are empty, who holds more than one. |
| **Performance** | What changed after Crestline, added up across projects and proved from the source. |
| **Alerts & Tickets** | What was flagged, what became a commitment, who has been told. |
| **Settings** | Appearance, working days and holidays, which AI model answers, connected systems and what each can supply, recent syncs, account and access. |

### Project scope (one site or contract)

Opening a project lands on Ask Crestline for that project. Order in the sidebar:

| Screen | What it answers |
|---|---|
| **Ask Crestline** | Ask anything about this job and get the figures, the chart and the evidence. |
| **Overview** | Contract to cash: a waterfall showing where contract value stops becoming cash, stage waits, a value-state map that sums to the contract, funding sources, reconciliation. |
| **Working Capital** | Capital trapped on this project: position, cash-cycle diagram, simulator, ranked levers, accrued and paid bases. |
| **P2P (Cash Out)** | Procurement and vendor payment, including the discovered process map of how orders really flowed. |
| ↳ **Vendors** | Who this project pays, and how promptly against each vendor's terms. |
| **O2C (Cash In)** | Billing, certification and collection, including the discovered process map of how bills really flowed. |
| ↳ **Client** | This project's client: where its cash is stuck, whose delay it is, and when it lands. |
| **Alerts & Tickets** | What was flagged here, what became a commitment, who has been told. |
| **Performance** | Before and after the first commitment, and what moved. |
| **Project Hierarchy** | The slots on this project and the chain above them. |

P2P comes before O2C because money leaves before it comes back. Each counterparty screen sits under its pillar: vendors are who P2P pays, the client is who O2C collects from.

The scope switcher at the top of the sidebar moves between projects and keeps your section (O2C on one project goes to O2C on the next).

---

## 4. The engines, in plain words

**Process mining.** Every source emits events (a bill submitted, certified, a PO released, goods received, a payment made). Crestline rebuilds each bill and each order from those events and discovers the real process, including the deviations. O2C and P2P are discovered separately because an RA bill and a PO share nothing but the company.
- **Bottlenecks are ranked by money, not duration.**
- **Ours or theirs.** A wait belongs to whoever makes the act that ends it. A wait that ends in "certified" or "collected" is the client's; a wait that ends in our submission is ours. Client delay is never counted as ours.
- **Rework** is the same step happening twice (a bill rejected and resubmitted), counted per case.
- **Holders** are the cases sitting on a step right now, with their age and value. A finished case is never "stuck".
- Discovery is deterministic: the same data always draws the same map.
- The map has Steps and Routes sliders that move from the main trunk of the process to the full picture of what really happens.

**Cash-cycle diagram.** A to-scale timeline from "material bought" to "client pays", with stock days, receivable days and payable days as spans, and the cash cycle drawn as the bar from the day you pay the vendor to the day the client pays you. It shows what the cycle is and who owns each half.

**Cycle simulator.** The same card in the future tense: move a leg and see the cash released and the interest saved. Every lever moves a real balance at its measured daily rate. The sliders stop where the contract stops: certification cannot go below the contract's certification window, collection cannot go below the payment term the client signed, and vendor credit cannot go above the vendors' own agreed terms. **Paying vendors late is never shown as releasing cash.** A scenario can be turned into a plan, which raises tickets with the simulated figure as the target.

**Lever ranking ("Do this first").** Every move the evidence supports is priced in one currency (cash released once, interest saved a year) and sorted. Financing the gap is priced too, as the alternative every lever competes with. Rows show the trade-off against the next best move, not against the sum.

**Playbook.** "Do this" is spelled out: the named invoices, bills and vendors that have to move, each with a deadline, opened by the ratio call and its target (for example, cut receivable days to the client's agreed term).

**Reconciliation.** A source describes the same money twice: the ledger says what the books believe, the event trail says what the documents add up to. Crestline compares the two routes for each figure and shows a verdict on the figure itself:
- **Match**: both routes agree.
- **Divergent**: they do not, and the measured gap is shown.
- **Single**: only one route exists, so nothing was verified. This is deliberately not a pass.
- **Unavailable**: the source cannot supply it.
Factors between the two (such as tax included in one and not the other) are measured, never assumed.

**The NA rule.** If a source did not supply something, the screen says **NA** and names which figure and why. Never a zero. Zero is a claim that a balance is empty; NA is an honest admission that we were not told. A chart that needs all its parts refuses to draw a partial picture.

**Accrued and paid bases.** Beside the ledger's working capital, Crestline rebuilds the position from transactions (accrued) and from cash that actually moved (paid). The paid figure is what an overdraft must cover. The bridge between them is stated step by step, with anything unexplained named.

**Peak funding need.** The cash-movement panel tracks monthly collections against payments and reports the deepest point the cumulative position reached, not just the year-end close. That trough is the facility the business actually needed.

---

## 5. Ask Crestline (the AI layer)

The same screen at two scopes: the company and one project. Before anything is typed it shows the morning brief: what happened and what needs attention, each row tagged O2C, P2P or Working Capital, and each row actionable on the spot.

**What you can ask**

| Kind of question | Example | How it is answered |
|---|---|---|
| Position | "How much is waiting to be certified?" | The matching figures, first |
| Why | "Why is this project beyond its terms?" | Every relevant figure against its own contract target, worst gap first |
| What now | "What should I do first to release cash?" | Ranked levers, financing as the alternative, named invoices and deadlines |
| What if | "What if the client paid in 60 days?" | The simulator, held to the contract's bounds; a request outside them is taken to the bound and says so |
| Compare | "Which project is holding the most capital?" | Projects compared on their gap to their own terms, never raw figures |
| Projection | "Where will receivables be in three months?" | A simple trend line with its own uncertainty band; under six months of history, it says it cannot |

**How it stays trustworthy**
- **Figures first.** The answer streams in reading order: verdict, chart, actions, evidence, then follow-up questions. Prose comes last and the answer would still be correct without it.
- **It retrieves from the screen's own evidence.** Each screen publishes its facts with stable ids, units and targets; the question is scored against those facts. So an answer cannot disagree with the screen.
- **The model never produces a number.** All arithmetic is done in code. If the model's narration contains any figure that is not in the evidence, the narration is thrown away.
- **Where nothing matches the question, it says so** rather than serving a weak match confidently.
- **The scope is in the URL.** The chat can never quietly point at a different project from the one in the address bar.
- Every answer ends with suggested next questions based on what was asked.

---

## 6. Actionables, tickets and alerts

**Under every chart** sits a short list of verdicts (Actionables). A verdict always has a comparison: a figure against the terms this contract agreed, never against a peer average. Each row names a desk and a person, bolds the names and figures, and opens to show the comparison and the numbered steps. Rows are either **measured** (computed by Crestline) or **AI review** (a model's finding, whose figures are still Crestline's). Source is shown as a word, never as a colour.

Each row carries two buttons:
- **Raise ticket**: turns the verdict into a commitment.
- **Alert owner**: mails the owner, and still writes a ticket behind it so the mail is not a to-do nobody can close.

A row with no re-measurable figure behind it cannot become a ticket and says why. A row that is already a ticket moves to an "Already raised" group with no buttons, and the AI moves on to the next best move.

**Ticket lifecycle**
1. **Recorded.** The finding is stored with who said it (measured or AI).
2. **Raised.** Title, numbered steps, owner and severity are pre-filled. The baseline, the target and the direction of "better" are fixed at this moment so "improved" cannot be redefined later.
3. **Owner told.** A mail with the baseline, target, due date and chasing cadence.
4. **Chased.** Severity sets how many reminders a day. Every reminder is logged with whether it landed and why not.
5. **Worked.** The owner moves it to In progress; the ticket has its own discussion thread.
6. **Claimed.** The owner marks it ready for verification. No person can mark it done.
7. **Audited.** An automatic auditor re-measures the same figure from fresh source data. It records news, not heartbeats: with no new data, it writes nothing.
8. **Closed on the number.** Moved materially the right way: **Closed, verified**. Unmoved after the claim or the due date: **Closed, no change**, which is a fact about the number, not a judgement of the effort.

**Mail rules**
- A mail never sends on one click. The recipient and their address are shown first, because these are real inboxes and a send cannot be recalled.
- Automated reminders are switched off until the company turns them on.
- A daily client statement can list what falls due, what is due today and what is overdue, under the same rule.

**Alerts & Tickets screen.** Summary chips (open, overdue, in progress, closed verified, closed no change, flagged without ticket), then one list, overdue and most costly first. A row expands to show how long it has sat in each stage and how hard the owner has been pushed. A bell in the header carries a live activity feed. Every action that writes gives a toast receipt.

**Performance** counts only verified closes: what moved, before and after, proved from the source.

---

## 7. Connectors and data

**One universal event contract.** Every source, whether SAP, Oracle, Tally, Excel or a REST feed, is translated into the same event shape: case, activity, timestamp, person, department, amount, system, attributes. Adding an ERP means writing one adapter that emits this shape. Nothing downstream changes.

**How a source is connected.** At connect time the adapter handshakes with the source, maps its columns once, and **probes what the source can supply**. Each capability is declared Available, Partial or Unavailable with a reason a CFO can read. Capabilities include: the process event trail, contract terms, work execution, certification, customer invoices and receipts, retention, claims, customer advances, purchase orders, goods receipts, supplier invoices and payments, vendor advances, subcontract, inventory (needs stock issues, not just receipts), opening balances, and the stock, receivable, payable and cash-cycle day ratios.

A source that records goods received but never stock issued cannot support inventory days, so those cards say NA and why. Settings lists, per connected system, what it can and cannot supply.

**Data rules**
- Everything shown came out of a connected source. Nothing on screen is authored or simulated.
- Syncs are repeatable: re-running one converges, it never duplicates.
- Nothing is derived at write time. Cycle times, ratios, bottlenecks and rankings are computed when read, so a change to the maths never needs a re-import.
- Figures are aged against the source's last event, not today's date, so a page opened months later shows the same numbers.
- Ageing uses each document's own due date, never a house average.
- Who owns a step (our desk or the counterparty's) comes from the source, never guessed.

---

## 8. Security and access

- **Read-only on the ERP.** Crestline never writes to the source system.
- **Invite only.** There is no public sign-up. An administrator issues a one-time invite link that expires after seven days.
- **Company email domains only.** Free and disposable mail addresses are refused. Passwords are long and checked against common words and the person's own name.
- **Roles:** Owner, Admin, Member, Viewer. Members and above can raise tickets and send alerts; viewers read. Controls a person cannot use are not shown. An Admin manages only Members and Viewers; nobody changes their own access; the last Owner cannot be removed.
- **Suspension takes effect on the next click.**
- Sign-in is rate limited, and a wrong password, an unknown address and no access all read the same message. Every access event is kept in an audit trail.
- Account screen: change name and password, see live sessions, sign out one device or everywhere.

---

## 9. Product rules that make it trustworthy

1. **Paying vendors later is never "better".** Stretching payables is not an improvement. Payment timing is judged against each vendor's contractual due date.
2. **The target is the due date.** Not zero, not infinity. Paying early is lending borrowed cash at zero interest; paying late is risk.
3. **Every leak is priced and owned.** Never a bare "average cycle time". Always rupees, days, owner, cause, action and confidence.
4. **Rank by rupee-days**, not by number of cases.
5. **Behavioural measures are labelled as such** (for example the 80th-percentile wait), never passed off as accounting ratios.
6. **Crestline's own analytical metrics are labelled** as not being accounting standards (for example contract asset days).
7. **Assumptions are always stated** wherever a financing figure appears: the interest rate and the basis.
8. **Every figure names its source** and its as-at date.
9. **Judged against this contract, never a peer average.** Another project's terms are not a commitment anybody here signed.
10. **NA, never a false zero.**
11. **No figure from a model.** AI selects, orders and phrases; code calculates.
12. **Every term is explained in plain language** from one glossary, never jargon explaining jargon. "Working capital is a queue, not a balance." "Collections is the bucket, certification is the tap."

---

## 10. Design language

- A navy frame (black in dark mode) holds a wide light canvas with hairline borders and soft shadows; the reader can choose the frame colour, and buttons follow it.
- Charts use soft pastel series drawn from the frame's hues, with a muted grey, green, amber and red ramp; no rainbow, no 3D.
- Verdict colours (green, amber, red) carry meaning and never change with the theme, and colour is never the only carrier: every status has a dot and a text label.
- IBM Plex Sans with tabular figures; dark mode is dark grey, never black on the canvas.
- Calm and flat: no cards around answers, one clear primary action per row, every chart followed by what to do about it.
