"""Process-map stage estimates, anchored on a company's PUBLISHED days.

Pattern: Crestline demonstration ledger medians (STAGE-PROPORTIONS.md, 2026-10-12).
Each value is the median wait AFTER that stage until the next one; the wait after
TAX INVOICE RAISED is the wait to be paid (shown on PAYMENT RECEIVED in the app).

Anchors, in priority:
  dso  -> the payment wait is the company's DSO (MEASURED); other stages scale by dso/64.0
  cad  -> contract-asset days anchor the measurement-to-certification stages (sum 45.8)
  gca  -> only if neither: the whole path (109.8) scales to GCA days
Retention is never estimated (no pattern in the ledger).

Usage: python -I stage_estimate.py --dso 125 [--cad 150.6] [--gca 290]
"""
import argparse

LEDGER = [  # stage, median days after it
    ("JOINT MEASUREMENT", 2.1), ("MB / QS CHECK", 3.0), ("RA BILL PREPARED", 1.6),
    ("REVIEW STARTED", 3.9), ("REVIEW COMPLETED", 2.1), ("BILL SUBMITTED", 4.1),
    ("CLIENT ACKNOWLEDGED", 26.3), ("CERTIFIED", 2.7), ("TAX INVOICE RAISED", 64.0),
]
PRE = LEDGER[:8]          # measurement .. certified
PAY = 64.0


def estimate(dso=None, cad=None, gca=None):
    out = []
    if dso is None and cad is None and gca is None:
        return [(s, None, "Not public") for s, _ in LEDGER] + [("RETENTION RELEASED", None, "Not public")]
    if dso is None and cad is None:
        k_pre = k_pay = gca / sum(d for _, d in LEDGER)
        basis = f"scaled from published gross current asset days {gca:g}"
    else:
        k_pay = (dso / PAY) if dso is not None else None
        k_pre = (cad / sum(d for _, d in PRE)) if cad is not None else k_pay
        k_pay = k_pay if k_pay is not None else k_pre
        basis = "scaled from published " + " and ".join(
            x for x in [f"debtor days {dso:g}" if dso is not None else "",
                        f"contract asset days {cad:g}" if cad is not None else ""] if x)
    for s, d in PRE:
        out.append((s, round(d * k_pre, 1), "Estimate"))
    pay = dso if dso is not None else round(PAY * k_pay, 1)
    out.append(("TAX INVOICE RAISED", None, "-"))  # its wait is shown on PAYMENT RECEIVED
    out.append(("PAYMENT RECEIVED", pay, "Published" if dso is not None else "Estimate"))
    out.append(("RETENTION RELEASED", None, "Not public"))
    return out, basis


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("--dso", type=float); a.add_argument("--cad", type=float); a.add_argument("--gca", type=float)
    r = a.parse_args()
    rows, basis = estimate(r.dso, r.cad, r.gca)
    for s, v, tag in rows:
        print(f"{s:22} {'' if v is None else v:>6} {tag}")
    pre=sum(v for s,v,tag in rows if v is not None and s!="PAYMENT RECEIVED")
    pay=[v for s,v,tag in rows if s=="PAYMENT RECEIVED"][0]
    if pay is not None:
        print(f"WHOLE RA BILL, work done to cash: {pre+pay:.1f} days = {pre:.1f} days before the invoice (Estimate) + {pay:g} days to be paid ({[tag for s,v,tag in rows if s=='PAYMENT RECEIVED'][0]})")
    print("Basis:", basis, "using the stage pattern in Crestline's demonstration ledger. Estimates are not the company's measured days.")
    # self-check: dso anchor reproduces the ledger pattern exactly at dso=64
    chk, _ = estimate(dso=64.0)
    assert [v for _, v, _ in chk[:8]] == [d for _, d in PRE], "scaling self-check failed"
