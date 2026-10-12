// keystone.html -> keystone.pdf (216 x 303 mm = A4 + 3 mm bleed), renders/p01..p16.png, renders/spreads.png,
// plus DOM checks (geometry, sizes, margins, overflow). Needs: npm i --no-save playwright-core; Edge installed.
import { chromium } from "playwright-core";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";

const dir = new URL("./", import.meta.url);
const file = new URL("keystone.html", dir).href;
mkdirSync(new URL("renders/", dir), { recursive: true });
const FACES = ['400 10pt "IBM Plex Sans"', '500 10pt "IBM Plex Sans"', '600 10pt "IBM Plex Sans"', '400 10pt "IBM Plex Serif"', '500 10pt "IBM Plex Serif"', '400 10pt "IBM Plex Mono"', '500 10pt "IBM Plex Mono"'];

const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 817, height: 1146 }, deviceScaleFactor: 2 });
await page.goto(file, { waitUntil: "networkidle" });
await page.evaluate(async (faces) => { for (const f of faces) await document.fonts.load(f, "Aa1₹’‘"); await document.fonts.ready; }, FACES);

// ---- checks (run on the exact DOM that prints) ----
const report = await page.evaluate(() => {
  const PX = 96 / 25.4, out = { geometry: [], small: [], margins: [], overflow: [], fonts: [...new Set([...document.fonts].filter((f) => f.status === "loaded").map((f) => `${f.family} ${f.weight}`))] };
  for (const root of document.querySelectorAll("svg[data-scale]")) {
    const s = +root.dataset.scale, ax = root.dataset.axis, base = +root.dataset.base;
    for (const el of root.querySelectorAll("[data-v]")) {
      const v = +el.dataset.v; let len;
      if (el.tagName === "circle") len = ax === "y" ? base - +el.getAttribute("cy") : +el.getAttribute("cx") - base;
      else { const b = el.getBBox(); len = ax === "y" ? b.height : b.width; }
      const want = v * s;
      out.geometry.push({ page: root.closest(".page").dataset.n, v, want: +want.toFixed(2), got: +len.toFixed(2), ok: Math.abs(len - want) <= 0.1 });
    }
  }
  for (const pg of document.querySelectorAll(".page")) {
    const n = +pg.dataset.n, trim = pg.querySelector(".t").getBoundingClientRect(), L = n % 2 ? 22 : 16;
    const walker = document.createTreeWalker(pg, NodeFilter.SHOW_TEXT);
    for (let t; (t = walker.nextNode());) {
      if (!t.textContent.trim()) continue;
      const el = t.parentElement, inSvg = el.closest("svg");
      const fs = parseFloat(getComputedStyle(el).fontSize);
      const min = inSvg ? 3.175 : 12; // svg user unit = mm
      const size = inSvg ? fs : fs; // svg font-size is in user units
      if (size < min - 0.01) out.small.push({ n, text: t.textContent.slice(0, 40), size });
      if (n === 1) continue; // cover: positions are specified absolutely in the brief
      const r = document.createRange(); r.selectNodeContents(t);
      for (const q of r.getClientRects()) {
        const x0 = (q.left - trim.left) / PX, x1 = (q.right - trim.left) / PX, y0 = (q.top - trim.top) / PX, y1 = (q.bottom - trim.top) / PX;
        if (x0 < L - 0.3 || x1 > L + 172.3 || y0 < 8 || y1 > 290) out.margins.push({ n, text: t.textContent.slice(0, 30), x0: +x0.toFixed(1), x1: +x1.toFixed(1), y0: +y0.toFixed(1), y1: +y1.toFixed(1) });
      }
    }
    for (const v of pg.querySelectorAll(".vis, .notes")) if (v.scrollHeight > v.clientHeight + 2) out.overflow.push({ n, cls: v.className, over: +((v.scrollHeight - v.clientHeight) / PX).toFixed(1) });
    const h1 = pg.querySelector("h1"); if (h1) out[`h1_${n}`] = Math.round(h1.getBoundingClientRect().height / (34 / 72 * 96));
    const notes = pg.querySelector(".notes"); if (notes) out[`notes_${n}`] = +(notes.getBoundingClientRect().height / PX).toFixed(1);
  }
  return out;
});
const bad = report.geometry.filter((g) => !g.ok);
console.log("fonts loaded:", report.fonts.join(", "));
console.log(`geometry: ${report.geometry.length - bad.length}/${report.geometry.length} within 0.1 mm`, bad.length ? JSON.stringify(bad) : "");
console.log("text below 9 pt:", report.small.length ? JSON.stringify(report.small) : "none");
console.log("text outside text area:", report.margins.length ? JSON.stringify(report.margins) : "none");
console.log("overflow:", report.overflow.length ? JSON.stringify(report.overflow) : "none");
console.log("headline lines:", Object.entries(report).filter(([k]) => k.startsWith("h1_")).map(([k, v]) => `${k.slice(3)}:${v}`).join(" "));
console.log("notes mm:", Object.entries(report).filter(([k]) => k.startsWith("notes_")).map(([k, v]) => `${k.slice(6)}:${v}`).join(" "));

// ---- outputs ----
await page.pdf({ path: fileURLToPath(new URL("keystone.pdf", dir)), preferCSSPageSize: true, printBackground: true });
const pages = page.locator(".page");
for (let i = 0; i < 16; i++) await pages.nth(i).screenshot({ path: fileURLToPath(new URL(`renders/p${String(i + 1).padStart(2, "0")}.png`, dir)) });

// reader-order spreads, trimmed of bleed, facing pages touching: 1 | 2-3 | ... | 14-15 | 16
const W = 300, H = Math.round(W * 297 / 210), cut = (3 / 210) * W;
const img = (n) => `<div style="width:${W}px;height:${H}px;overflow:hidden;position:relative">${n ? `<img src="${new URL(`renders/p${String(n).padStart(2, "0")}.png`, dir).href}" style="position:absolute;left:-${cut}px;top:-${cut}px;width:${W * 216 / 210}px">` : ""}</div>`;
const spreads = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14, 15], [16, 0]];
await page.setViewportSize({ width: 3 * (2 * W) + 4 * 40, height: 3 * H + 4 * 40 });
await page.evaluate((h) => { document.head.innerHTML = ""; document.body.outerHTML = h; }, `<body style="margin:0;background:#E6E8EC;padding:40px;display:grid;grid-template-columns:repeat(3,${2 * W}px);gap:40px">${spreads.map(([a, b]) => `<div style="display:flex">${img(a)}${img(b)}</div>`).join("")}</body>`);
await page.waitForFunction(() => [...document.images].every((i) => i.complete));
await page.waitForLoadState("networkidle");
await page.screenshot({ path: fileURLToPath(new URL("renders/spreads.png", dir)), fullPage: true });
await browser.close();
console.log("wrote keystone.pdf, renders/p01..p16.png, renders/spreads.png");
