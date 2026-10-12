/** SALES-19 read-only: the Ask engine's blocks, no model (keys stripped), no buildAsk (it writes a cache). */
import "../../../scripts/env";
import "./no-ai";
import { prisma } from "@/lib/db";
import { answer } from "@/lib/ask/answer";

async function run(projectId: string | null, q: string) {
  console.log(`\n### ${projectId ?? "COMPANY"}  "${q}"`);
  for await (const e of answer(projectId, q)) {
    if (e.type === "intent") console.log(`intent   ${e.label}`);
    else if (e.type === "error") console.log(`ERROR    ${e.message}`);
    else if (e.type === "block") {
      const b = e.block as unknown as Record<string, unknown> & { kind: string };
      console.log(`[${b.kind}] ${JSON.stringify(b, (k, v) => (k === "points" || k === "series" ? undefined : v)).slice(0, 1800)}`);
    }
  }
}
async function main() {
  const bhilai = await prisma.project.findFirstOrThrow({ where: { sourceRef: "GI-BSP-02" }, select: { id: true } });
  // await run(null, "Which clients are paying slowest against the terms they signed?");
  // await run(null, "Which job is holding the most capital?");
  await run(bhilai.id, "Why is certification beyond the contract window?");
  await run(bhilai.id, "How can I release cash this month?");
}
main().then(() => process.exit(0), (e) => { console.error(e); process.exit(1); });
