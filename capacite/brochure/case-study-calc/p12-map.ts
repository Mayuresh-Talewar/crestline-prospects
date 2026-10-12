/** SALES-20 read-only: Bhilai O2C discovery figures for brochure p12. Reads only (scope is the same read every page makes). */
import "../../../scripts/env";
import "./no-ai";
import { prisma } from "@/lib/db";
import { repository } from "@/lib/repository";

const D = 86_400_000, d = (ms: number) => Math.round((ms / D) * 10) / 10, cr = (n: number | null | undefined) => n == null ? null : Math.round(n / 1e5) / 100 + " Cr";
async function main() {
  const p = await prisma.project.findFirst({ where: { sourceRef: "GI-BSP-02" }, select: { id: true } });
  const scope = (await repository.projects.scope(p!.id))!;
  const r = scope.process!.o2c;
  console.log("STATS", r.stats.caseCount, "cases", r.stats.eventCount, "events, median", d(r.stats.medianCaseDurationMs), "p80", d(r.stats.p80CaseDurationMs), "rework", r.summary.reworkRate, "conf", r.summary.conformanceRate, "asOf", new Date(r.workingCapital.asOfMs).toISOString());
  console.log("IDEAL", r.idealPath.join(" > "));
  const acts = [...new Set([...r.idealPath, ...r.nodes.map(n => n.id)])];
  for (const a of acts) {
    const n = r.nodes.find(x => x.id === a), dd = r.activityDetails[a], an = r.activityAnalysis[a];
    console.log("NODE", JSON.stringify({ a, label: an?.label, cases: n?.count, medWait: an && d(an.medianWaitMs), p80: dd && d(dd.p80CycleMs), ourShare: an?.ourShare, holders: dd?.holders && { n: dd.holders.caseCount, amt: cr(dd.holders.amount), oldest: d(dd.holders.oldestMs) }, repeatedCases: an?.repeatedCases, repeatRD: an?.repeatRupeeDays, rank: an?.rankByCost, dept: dd?.department }));
  }
  for (const e of [...r.edges].sort((a, b) => b.count - a.count)) console.log("EDGE", e.from, ">", e.to, e.count, "p50", d(e.p50DurationMs), "p95", d(e.p95DurationMs), "cash", cr(e.cashFlow));
  for (const b of r.bottlenecks.slice(0, 4)) console.log("BOTTLENECK", JSON.stringify({ h: b.headline, med: d(b.medianMs), n: b.caseCount, cash: cr(b.cashImpact), carry: cr(b.annualOpportunityCost), ours: b.internallyControllable, owner: b.owner, reason: b.reason }));
  for (const v of r.variants.filter(v => v.kind === "rework").slice(0, 4)) console.log("REWORK VARIANT", v.cases, d(v.medianDurationMs), v.path.join(" > "));
  const ideal = r.variants.find(v => v.kind === "ideal"); if (ideal) console.log("IDEAL VARIANT", ideal.cases, d(ideal.medianDurationMs));
  console.log("WC", cr(r.workingCapital.totalFrozen), r.workingCapital.openCaseCount, "open");
}
main().then(() => process.exit(0), (e) => { console.error(e); process.exit(1); });
