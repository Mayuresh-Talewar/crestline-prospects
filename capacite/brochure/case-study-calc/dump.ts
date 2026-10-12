/**
 * SALES-19 read-only dump. Every call here is a read the auditor or a page already makes;
 * nothing writes (buildAsk(projectId) writes a cache, so it is NOT used; model keys are
 * stripped so the Ask narration never runs). Run: npx tsx docs/brochure-capacite/case-study-calc/dump.ts REF...
 */
import "../../../scripts/env";
import "./no-ai";
import { prisma } from "@/lib/db";
import { repository } from "@/lib/repository";
import { MODULES } from "@/lib/orchestrator/modules";
import { buildEvidenceFor } from "@/lib/orchestrator/evidence-builder";
import { renderPack } from "@/lib/orchestrator/evidence";
import { buildCashCycleView } from "@/lib/view-models/cash-cycle";
import { buildCashLedgerView } from "@/lib/view-models/cash-ledger";
import { buildWorkingCapitalCycle } from "@/lib/view-models/working-capital-cycle";
import { fundingSummary } from "@/lib/finance/cash-cycle";
import { buildPlaybook } from "@/lib/insights/playbook";
import { priceLevers, costOfFinancing } from "@/lib/insights/levers";
import { buildSimulatorBasis } from "@/lib/view-models/cycle-simulator";
import { simulate, toTerms } from "@/lib/finance/cycle-simulation";
import { ownersFor } from "@/lib/orchestrator/modules";
import { deskOwners } from "@/lib/insights/working-capital";
import { buildProcessMapView } from "@/lib/view-models/process-map";

const j = (x: unknown) => JSON.stringify(x, (_k, v) => (typeof v === "number" ? Math.round(v * 100) / 100 : v), 1);

async function main() {
  const refs = process.argv.slice(2);
  const projects = await prisma.project.findMany({ where: { sourceRef: { in: refs } }, select: { id: true, sourceRef: true } });
  const chart = await repository.people.chart();
  for (const p of projects) {
    console.log(`\n\n######## ${p.sourceRef} ${p.id}`);
    const scope = (await repository.projects.scope(p.id))!;
    const cashCycle = buildCashCycleView(scope);
    const clientPaysDay = (scope.ratios.dio ?? 0) + (cashCycle.contractAssetDays ?? 0) + (scope.ratios.dso ?? 0);
    const cycle = buildWorkingCapitalCycle(scope, fundingSummary(cashCycle.vendors, clientPaysDay, scope.financingRatePct).weightedLeadDays);
    const ledger = buildCashLedgerView(scope);
    const owners = ownersFor(chart, scope.project.sourceRef);
    const playbook = buildPlaybook({ scope, vendors: cashCycle.vendors, financingRatePct: scope.financingRatePct });
    const levers = priceLevers({ position: cycle.position, ledger: ledger.ledger, vendors: cashCycle.vendors, retention: scope.project.retentionHeld, perDay: cycle.perDay.cash, financingRatePct: scope.financingRatePct, owners: deskOwners(owners) });
    const basis = buildSimulatorBasis({ scope, vendors: cashCycle.vendors, playbook, desks: deskOwners(owners), contractAssetDays: cashCycle.contractAssetDays });
    console.log("== RATIOS", j({ ratios: scope.ratios, contract: scope.contract, rate: scope.financingRatePct, cad: cashCycle.contractAssetDays }));
    console.log("== DESKS", j(deskOwners(owners)));
    console.log("== SIM AT TERMS", j({ terms: toTerms(basis), result: simulate(basis, toTerms(basis)), blocked: basis.blocked }));
    console.log("== LEVERS", j(levers), "\n== FINANCING COST", costOfFinancing(ledger.ledger, scope.financingRatePct));
    console.log("== PLAYBOOK", j(playbook));
    const { months, ...summary } = ledger.ledger as unknown as Record<string, unknown>;
    console.log("== CASH LEDGER SUMMARY", j(summary));
    const pm = buildProcessMapView(scope);
    if (pm) for (const s of ["o2c", "p2p"] as const) {
      const { stuck, ...rest } = pm[s] as unknown as Record<string, unknown> & { stuck: unknown[] };
      console.log(`== PROCESS ${s} stuck(top5)`, j((stuck ?? []).slice(0, 5)));
      console.log(`== PROCESS ${s} rest`, j(rest).slice(0, 6000));
    }
    if (pm) console.log("== PROCESS money", j(pm.money).slice(0, 5000));
    for (const m of MODULES) {
      const pack = await buildEvidenceFor(p.id, m.key);
      if (!pack) continue;
      const { context, ...own } = pack;
      void context;
      console.log(`\n== PACK ${m.key}\n${renderPack({ ...own } as typeof pack)}`);
    }
  }
}
main().then(() => process.exit(0), (e) => { console.error(e); process.exit(1); });
