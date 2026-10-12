// Builds keystone.html (16 pages, reader order). Copy is verbatim from ../copy-deck.md; geometry from ../build-brief.md §4.
// Run: node build.mjs   (then node export.mjs)
import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const qrcode = require("../../../node_modules/qrcode-generator");

const f = (n) => +(+n).toFixed(3);
const PT = 0.3528; // mm per pt
const NAVY = "#22396F";

// ---- primitives (user unit = 1 mm) ----
const vbar = (x, yb, w, h, r = 1.5) => { const yt = yb - h; return `M${f(x)},${f(yb)} V${f(yt + r)} A${r},${r} 0 0 1 ${f(x + r)},${f(yt)} H${f(x + w - r)} A${r},${r} 0 0 1 ${f(x + w)},${f(yt + r)} V${f(yb)} Z`; };
const hbar = (x0, yt, len, h, r = 1.5) => `M${f(x0)},${f(yt)} H${f(x0 + len - r)} A${r},${r} 0 0 1 ${f(x0 + len)},${f(yt + r)} V${f(yt + h - r)} A${r},${r} 0 0 1 ${f(x0 + len - r)},${f(yt + h)} H${f(x0)} Z`;
const T = (x, y, s, cls = "", a = "") => `<text x="${f(x)}" y="${f(y)}"${cls ? ` class="${cls}"` : ""}${a ? ` text-anchor="${a}"` : ""}>${s}</text>`;
const dash = (w, h, label, opts = {}) => { // dashed "not published" box, 0.75 pt #98A2B3 3/2 pt, r 1.5 mm
  const lines = Array.isArray(label) ? label : [label];
  const col = opts.navy ? "#C3CBDD" : "#98A2B3";
  return `<svg width="${w}mm" height="${h}mm" viewBox="0 0 ${w} ${h}"><rect x=".2" y=".2" width="${f(w - .4)}" height="${f(h - .4)}" rx="1.5" fill="none" stroke="${col}" stroke-width=".265" stroke-dasharray="1.058 .706"/>${lines.map((l, i) => T(2, 4.6 + i * 4, l, opts.navy ? "m p" : "m")).join("")}</svg>`;
};
const MARK = "M 207.069 115.088 C 181.225 120.158, 161.849 138.623, 155.241 164.479 L 153.458 171.458 146.479 173.241 C 104.685 183.922, 84.210 227.672, 102.833 266.500 C 118.641 299.459, 162.843 312.427, 194.281 293.329 C 200.290 289.679, 214 277.168, 214 275.334 C 214 274.824, 210.287 273.865, 205.750 273.203 C 197.821 272.046, 197.383 272.085, 194.500 274.225 C 174.565 289.018, 157.795 290.993, 137.803 280.901 C 107.586 265.647, 101.791 224.263, 126.619 201.037 C 134.942 193.251, 152.469 184.944, 153.462 188.315 C 159.606 209.178, 163.090 215.933, 172.601 225.416 C 183.961 236.744, 196.627 242.467, 213.932 244.091 C 236.785 246.235, 242.661 248.507, 253.577 259.423 C 273.956 279.803, 274.052 310.123, 253.800 330.200 C 235.849 347.997, 208.036 349.366, 187.273 333.473 C 182.211 329.599, 181.309 329.507, 169.250 331.646 C 164.628 332.466, 165.119 333.738, 172.918 341.144 C 193.693 360.870, 221.824 365.330, 247.500 352.968 C 266.726 343.711, 279.104 327.308, 283.510 305.249 C 284.005 302.770, 284.793 301.867, 286.830 301.444 C 332.524 291.961, 354.364 247.961, 334.205 206 C 319.725 175.859, 277.283 162.714, 246.503 178.835 C 239.659 182.420, 224 196.200, 224 198.639 C 224 199.269, 226.546 200.075, 229.750 200.459 C 232.912 200.838, 236.400 201.358, 237.500 201.614 C 238.792 201.915, 242.453 200.124, 247.844 196.551 C 266.409 184.250, 286.383 183.830, 304.328 195.362 C 325.863 209.203, 333.119 240.570, 319.855 262.494 C 314.179 271.877, 299.673 282.685, 288.962 285.510 L 284.161 286.777 282.438 279.638 C 277.173 257.828, 261.291 239.489, 242.064 233.019 C 237.991 231.649, 231.015 230.502, 223.064 229.897 C 207.794 228.734, 199.214 226.326, 191.147 220.939 C 162.272 201.657, 161.551 157.403, 189.806 138.632 C 209.638 125.457, 231.160 126.044, 249.793 140.269 L 255.086 144.309 263.524 143.054 C 273.432 141.580, 273.425 141.754, 264.001 132.242 C 250.324 118.438, 226.535 111.270, 207.069 115.088";
const logo = (color) => `<div class="logo" style="color:${color}"><svg viewBox="74 93 290 290" aria-hidden="true"><path d="${MARK}" fill-rule="evenodd" fill="currentColor" stroke="currentColor" stroke-width="12" stroke-linejoin="round"/></svg><span>Crestline Intelligence</span></div>`;

// ---- page shells ----
const page = (n, section, inner, { navy = false, cls = "" } = {}) => {
  const side = n % 2 ? "recto" : "verso";
  const hd = n > 1 ? `<div class="hd"><span>${section}</span><span>Project Keystone</span></div>` : "";
  const ft = n > 1 ? `<div class="ft">Strictly Private &amp; Confidential · Project Keystone · Copy 1 of 1 · ${n} / 16</div>` : "";
  return `<section class="page ${side}${navy ? " navy" : ""}${cls ? " " + cls : ""}" data-n="${n}"><div class="t">${inner}${hd}${ft}</div></section>`;
};
const CENTER = new Set([5, 6, 7, 10, 12, 14, 15]);
let curPage = 0;
const std = (h1, vis, mean, notes, notesCls = notes.length < 420 ? "one" : "") =>
  `<div class="bd"><h1>${h1}</h1><div class="vis${CENTER.has(curPage) ? " c" : ""}">${vis}</div><div class="mean"><div class="ml">What this means for you</div><p>${mean}</p></div><div class="notes ${notesCls}">${notes}</div></div>`;
const NO_FIG = "No Capacite figures on this page. Every figure in this file is from Capacite's public filings up to July 2026; sources on page 16.";

// ---- jelly gradients (brief §1) ----
const J = { blue: ["#9CC5EE", "#ADBFEE"], green: ["#9ED9BF", "#9CC5EE"], amber: ["#F3CF86", "#F5C29D"], red: ["#F5C29D", "#F1B3AB"], purple: ["#9CC5EE", "#C3B6EE"], slate: ["#C3C9D3", "#9CC5EE"] };
const defs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${Object.entries(J).map(([k, [a, b]]) => `<linearGradient id="j-${k}" x1="0" y1=".41" x2="1" y2=".59"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`).join("")}</defs></svg>`;

// ================= PAGE 1: cover, "the tide line" =================
const EDGE = "M -3,205 C 55,250 125,232 213,188";
const bez = (t, a, b, c, d) => (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * d;
const arcTo = (xTarget) => { let L = 0, px = -3, py = 205; for (let i = 1; i <= 20000; i++) { const t = i / 20000, x = bez(t, -3, 55, 125, 213), y = bez(t, 205, 250, 232, 188); L += Math.hypot(x - px, y - py); px = x; py = y; if (x >= xTarget) return L; } return L; };
const startOffset = f(arcTo(30));
const contours = [[7, .9, "#597BCC"], [14, .75, "#597BCC"], [21, .6, "#8FA7DD"], [28, .5, "#8FA7DD"], [35, .4, "#C3CBDD"]];
const p1 = page(1, "", `
<svg class="bleed" viewBox="-3 -3 216 303" width="216mm" height="303mm" aria-hidden="true">
  <path d="${EDGE} L 213,300 L -3,300 Z" fill="${NAVY}" data-cover="edge"/>
  ${contours.map(([d, w, c]) => `<path d="${EDGE}" transform="translate(0,-${d})" fill="none" stroke="${c}" stroke-width="${f(w * PT)}"/>`).join("")}
  <path id="tp" d="${EDGE}" transform="translate(0,-37)" fill="none"/>
  <text style="font-family:'IBM Plex Mono';font-size:3.175px;letter-spacing:.381px;text-transform:uppercase" fill="${NAVY}"><textPath href="#tp" startOffset="${startOffset}">FROM WORK DONE TO CASH IN THE BANK</textPath></text>
</svg>
<div class="serif" style="position:absolute;right:16mm;top:17.9mm;text-align:right;font-size:10pt;line-height:14pt">Copy No. 1 of 1<br>Issued to: Mr. Rohit Katyal, Executive Chairman,<br>Capacite Infraprojects Limited</div>
<div style="position:absolute;left:22mm;top:62mm;width:142.7mm;height:39mm;border-top:.5pt solid ${NAVY};border-bottom:.5pt solid ${NAVY}">
  <div class="serif" style="position:absolute;left:0;top:2.9mm;font-weight:500;font-size:46pt;line-height:18mm;letter-spacing:-.01em;white-space:nowrap">Project Keystone</div>
  <div style="position:absolute;left:0;top:22.15mm;font-size:14pt;line-height:6mm;color:#5F6670;white-space:nowrap">Working-capital review of Capacite Infraprojects Limited</div>
  <div class="mono" style="position:absolute;left:0;top:30.5mm;font-size:10pt;line-height:4.4mm">October 2026</div>
</div>
<div style="position:absolute;left:22mm;top:250.5mm;color:#fff">
  <div style="font-weight:600;font-size:11pt;line-height:5mm">Strictly Private &amp; Confidential</div>
  <div style="font-size:9pt;line-height:5.6mm;color:#C3CBDD">Prepared for the addressee only. Please do not forward or copy.</div>
</div>
<div style="position:absolute;left:22mm;top:269mm">${logo("#fff")}</div>`);

// ================= PAGE 2: letter =================
const p2 = page(2, "Letter", `
<div class="bd" style="display:block">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:3mm;border-bottom:.5pt solid ${NAVY}">
    <div style="padding-top:1mm">${logo(NAVY)}</div>
    <div class="f9" style="text-align:right">Crestline Intelligence Private Limited<br>+91 77438 51234<br>rajat@crestlineintelligence.com<br>www.crestlineintelligence.com</div>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:5.5mm"><span>12 October 2026</span><span class="f9 mu">Based only on Capacite's public filings, as published up to July 2026.</span></div>
  <div style="margin-top:4mm">Mr. Rohit Katyal<br>Executive Chairman<br>Capacite Infraprojects Limited<br>605-607, 6th Floor, A Wing, Shrikant Chambers, Phase I<br>Adjacent to R K Studios, Sion-Trombay Road<br>Chembur, Mumbai 400 071</div>
  <div class="serif" style="margin-top:6mm;width:140mm;font-size:11pt;line-height:16pt">
    <p>Dear Mr. Katyal,</p>
    <p style="margin-top:12pt">On 27 September you wrote that you were free for a video call. We have not managed to fix a time over email, so I am writing by post.</p>
    <p style="margin-top:6pt">In four years Capacite has nearly doubled its sales, and the order book stands at ₹13,498 Cr. This year you also took 43 days out of working capital, on mostly public-sector work. That is hard won.</p>
    <p style="margin-top:6pt">Your FY26 accounts still hold ₹2,490 Cr of work done and bills raised that is not yet cash. That is close to a year of sales. The accounts give the total. They cannot say which site, which bill or which desk is holding it.</p>
    <p style="margin-top:6pt">Crestline answers that. It reads your ERP and does not change it. Everything in these pages comes from your published documents.</p>
    <p style="margin-top:6pt">I would value thirty minutes with you, or with Mr. Rajesh Das if you prefer. Two times are on page 15.</p>
    <p style="margin-top:12pt">Yours sincerely,</p>
  </div>
  <div style="height:28mm"></div>
  <div>Rajat Kate<br>Founder, Crestline Intelligence</div>
</div>
<div style="position:absolute;left:16mm;width:172mm;top:236mm">
  <div class="serif f11">P.S.</div>
  ${[0, 1, 2].map(() => `<div style="height:6.6mm;border-bottom:.5pt solid #D6D9DF"></div>`).join("")}
</div>
<div class="notes one" style="position:absolute;left:16mm;width:172mm;top:266mm">₹13,498 Cr and sales growth: Investor presentation Q4 FY26, filed with BSE, May 2026. ₹2,490 Cr: computed from audited consolidated results, filed with NSE 20 May 2026, p.10. 43 days: Annual Report FY26, filed with NSE, July 2026 (PDF p.12).</div>`);

// ================= PAGE 3 =================
const facts = [
  ["Incorporated 2012", "An EPC company focused on buildings and factories. Listed on BSE and NSE in 2017."],
  ["75 mn sq ft", "Delivered in twelve years."],
  ["Limca Book of Records", "For the fastest hospital construction."],
  ["₹13,498 Cr order book", "57% public, 43% private, at 31 March 2026."],
  ["Public clients", "MHADA, CIDCO, MCGM, NBCC."],
  ["Private clients", "Oberoi Realty, DLF, Lodha, Godrej, Raymond, Piramal, Signature Global."],
];
const p3 = page(3, "Capacite today", (curPage = 3, std)(
  "More than 75 million square feet delivered in twelve years.",
  `<div class="g12"><div class="ruled" style="grid-column:1/8">${facts.map(([a, b]) => `<div><div class="f16">${a}</div><div style="margin-top:1mm">${b}</div></div>`).join("")}</div>
   <div style="grid-column:9/13;padding-top:3.4mm">
     <div class="lab">Built</div>
     <div class="serif f13" style="margin-top:2mm">MCGM Bhandup hospital<br>Tata Trust cancer hospital, Mumbai<br>BHU campus<br>Phoenix Markecity, Pune</div>
     <div class="lab" style="margin-top:9mm">Cities</div>
     <div style="margin-top:2mm">Mumbai region, Pune region, NCR, Varanasi, Bengaluru, Chennai, Hyderabad.</div>
   </div></div>`,
  "Your order book is spread across public and private clients, in seven city regions.",
  "Investor presentation Q4 FY26 (BSE, May 2026), slides 9, 13, 14, 15, 17. Annual Report FY26 (July 2026), PDF p.12, p.95, p.106. Order book is on a standalone basis, as stated on the Q4 FY26 call (transcript filed 25 May 2026, NSE)."));

// ================= PAGE 4: order book columns =================
// y 0.008 mm/₹Cr (15,000 = 120). OVERRULE: tick gutter 17 mm (₹5,000 Cr measures 14.3 mm at 9 pt), bar width 16.37, gap 3.60 (22%). Heights untouched.
const OB = [["FY22", 8702, "₹8,702 Cr", "6.5x sales"], ["FY23", 9513, "₹9,513 Cr", "5.3x"], ["FY24", 9011, "₹9,011 Cr", "4.7x"], ["FY25", 10545, "₹10,545 Cr", "4.5x"], ["FY26", 13498, "₹13,498 Cr", "5.1x"]];
const p4chart = (() => {
  const s = .008, base = 126, gut = 17, w = 16.37, gap = 3.6;
  let g = "";
  for (const v of [5000, 10000, 15000]) { const y = base - v * s; g += `<line x1="0" x2="113.33" y1="${f(y)}" y2="${f(y)}" stroke="#D6D9DF" stroke-width=".176" stroke-dasharray=".706 .706"/>${T(0, y - 1.3, `₹${v.toLocaleString("en-IN")} Cr`, "k")}`; }
  OB.forEach(([yr, v, lab, x5], i) => {
    const x = gut + i * (w + gap), h = v * s, last = i === 4;
    g += `<path d="${vbar(x, base, w, h)}" fill="url(#j-blue)" stroke="#567FAC" stroke-width="${last ? .265 : .176}" data-v="${v}"/>`;
    g += T(x + w / 2, base - h - 1.8, lab, "v", "middle") + T(x + w / 2, base + 5, yr, "b", "middle") + T(x + w / 2, base + 9.4, x5, "m", "middle");
  });
  g += `<line x1="${gut}" x2="113.33" y1="${base}" y2="${base}" stroke="#98A2B3" stroke-width=".265"/>`;
  return `<svg width="113.33mm" height="138mm" viewBox="0 0 113.33 138" data-scale="${s}" data-axis="y" data-base="${base}">${g}</svg>`;
})();
const p4 = page(4, "Capacite today", (curPage = 4, std)(
  "Sales nearly doubled in four years. Order book: 5.1 times sales.",
  `<div class="g12"><div style="grid-column:1/9"><div class="sb" style="margin-bottom:2mm">Order book, FY22 to FY26</div>${p4chart}</div>
   <div style="grid-column:9/13;padding-top:13.9mm"><div class="sb" style="margin-bottom:1.6mm">FY22 to FY26</div><div class="ruled">
     <div><div class="mu f9">Revenue</div><div class="nw">₹1,340 Cr to <b class="sb">₹2,623 Cr</b></div><div class="mu f9">(18% a year)</div></div>
     <div><div class="mu f9">EBITDA</div><div class="nw">₹219 Cr to <b class="sb">₹427 Cr</b></div></div>
     <div><div class="mu f9">Profit after tax</div><div class="nw">₹48 Cr to <b class="sb">₹193 Cr</b></div></div>
   </div></div></div>`,
  "At 5.1 times sales, the book holds about five years of work at the FY26 pace. The next pages are about the cash it takes to deliver it.",
  "Investor presentation Q4 FY26 (BSE, May 2026), slides 14 and 27. Revenue is consolidated revenue from operations, ₹2,622.72 Cr in FY26 (Annual Report FY26, July 2026, PDF p.146)."));

// ================= PAGE 5 (navy): ₹2,490 Cr =================
const p5chart = (() => {
  const s = .06558, a = 1313.5 * s, b = 1176.8 * s, y0 = 10, H = 22, ry = y0 + H + 14;
  return `<svg width="172mm" height="60mm" viewBox="0 0 172 60" data-scale="${s}" data-axis="x" data-base="0">
  <path d="M0,7.6 V5.6 H${f(a + b)} V7.6" fill="none" stroke="#fff" stroke-width=".265"/>${T(0, 3.4, "346.6 days of sales", "v w")}
  <path d="M0,${y0} H${f(a)} V${y0 + H} H0 Z" fill="url(#j-purple)" data-v="1313.5"/>
  <path d="${hbar(a, y0, b, H)}" fill="url(#j-amber)" data-v="1176.8"/>
  <rect x="${f(a - .25)}" y="${y0}" width=".5" height="${H}" fill="${NAVY}"/>
  ${T(2.5, y0 + 9, "Work done, not yet billed", "v on")}${T(2.5, y0 + 15.5, "₹1,313.5 Cr<tspan dx=\"3\">182.8 days of sales</tspan>", "s on")}
  ${T(a + 2.5, y0 + 9, "Bills raised, not yet paid", "v on")}${T(a + 2.5, y0 + 15.5, "₹1,176.8 Cr<tspan dx=\"3\">163.8 days of sales</tspan>", "s on")}
  <path d="${hbar(0, ry, 2622.7 * s, 12)}" fill="url(#j-slate)" data-v="2622.7"/>
  ${T(2.5, ry + 7.4, "FY26 revenue<tspan dx=\"3\" class=\"s on\">₹2,622.7 Cr</tspan>", "v on")}
  </svg>`;
})();
const p5 = page(5, "Cash waiting", (curPage = 5, std)(
  "346.6 days of sales are earned and not yet in the bank.",
  `<div style="font:600 96pt/30mm 'IBM Plex Sans';letter-spacing:-.025em;margin:4mm 0 12mm 0">₹2,490 Cr</div>${p5chart}`,
  "This is money for work already done. It comes to close to a year of sales.",
  "Contract assets ₹1,313.5 Cr (current ₹1,068.34 Cr, non-current ₹245.15 Cr) and trade receivables ₹1,176.8 Cr (current ₹1,085.00 Cr, non-current ₹91.81 Cr) at 31 March 2026: audited consolidated results, filed 20 May 2026 (NSE), p.10. ₹2,490 Cr is Crestline's sum of these two lines. Days computed: balance / FY26 revenue x 365. The auditor's key audit matter uses its own figure, net of loss allowance; we have not mixed the two."), { navy: true });

// ================= PAGE 6: index slope =================
const p6chart = (() => {
  const s = 140 / 300, Y = (i) => f(140 - i * s), R = "#C46C61", G = "#549678";
  const dot = (x, i, c, v) => `<circle cx="${x}" cy="${Y(i)}" r="1" fill="${c}" stroke="#fff" stroke-width=".265"${v ? ` data-v="${v}"` : ""}/>`;
  let g = "";
  for (const i of [200, 300]) g += `<line x1="0" x2="110" y1="${Y(i)}" y2="${Y(i)}" stroke="#D6D9DF" stroke-width=".176" stroke-dasharray=".706 .706"/>${T(0, Y(i) - 1.3, i, "k")}`;
  g += `<line x1="0" x2="110" y1="${Y(100)}" y2="${Y(100)}" stroke="#98A2B3" stroke-width=".265"/>${T(110, Y(100) - 1.6, "FY23 = 100", "k", "end")}`;
  g += T(0, Y(100) + 5.2, "FY23", "b") + T(110, Y(100) + 5.2, "FY26", "b", "end");
  g += `<line x1="0" y1="${Y(100)}" x2="110" y2="${Y(146)}" stroke="${G}" stroke-width=".706" stroke-linecap="round"/>`;
  g += `<line x1="0" y1="${Y(100)}" x2="110" y2="${Y(264)}" stroke="${R}" stroke-width=".882" stroke-linecap="round"/>`;
  g += dot(0, 100, R, 100) + dot(110, 146, G, 146) + dot(110, 264, R, 264);
  const lab = (i, c, w, a, b) => `<line x1="114" x2="120" y1="${Y(i)}" y2="${Y(i)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>${T(122, Y(i) + 1.25, a, "v")}${T(122, Y(i) + 5.6, b, "s")}`;
  g += lab(264, R, .882, `Bills not yet paid<tspan dx="2.5">264</tspan>`, "₹445 Cr to ₹1,177 Cr") + lab(146, G, .706, `Sales<tspan dx="2.5">146</tspan>`, "₹1,799 Cr to ₹2,623 Cr");
  return `<svg width="172mm" height="104mm" viewBox="0 -5 172 104" data-scale="${f(s)}" data-axis="y" data-base="140">${g}</svg>`;
})();
const p6 = page(6, "Cash waiting", (curPage = 6, std)(
  "Since FY23, unpaid bills grew 164%. Sales grew 46%.",
  `<div style="margin-top:4mm">${p6chart}</div><p style="margin-top:7mm">Your Annual Report gives debtors turnover as 164 days. Terms are generally 45 to 90 days.</p>`,
  "Receivables grew 3.6 times as fast as sales. Each 10 days off the wait is ₹71.9 Cr of cash, or about ₹6.9 Cr a year of interest at your 9.65% rate.",
  "Receivables include non-current: investor presentation Q4 FY26 (BSE, May 2026), slide 28; audited results, filed 20 May 2026 (NSE), p.10. Index computed: 1,177 / 445 and 2,623 / 1,799. Debtors turnover 164 days: Annual Report FY26 (July 2026), PDF p.95; terms, PDF p.158. Capacite's policy keeps retention and unbilled work awaiting certification inside receivables (PDF p.148), so these days read higher than for companies that book them elsewhere. 10 days = FY26 revenue / 365 x 10 (computed). Rate from the Q4 FY26 call (transcript filed 25 May 2026, NSE)."));

// ================= PAGE 7 (navy): stage timeline =================
const p7chart = (() => {
  const s = .4962, a = 182.8 * s, b = 163.8 * s, m1 = f(a / 3), m2 = f(2 * a / 3), yc = 20;
  let g = "";
  const stage = (x, l, an, dashed) => `<line x1="${x}" x2="${x}" y1="8" y2="${dashed ? 50.5 : 28}" stroke="#fff" stroke-width="${dashed ? .265 : .265}"${dashed ? ` stroke-dasharray=".706 .706"` : ""}/>${T(an === "end" ? x : an === "start" ? x : x, 5.2, l, "v w", an)}`;
  g += stage(m1, "Measured", "middle", 1) + stage(m2, "Certified", "middle", 1);
  g += `<path d="${hbar(0, yc - 6, a, 12)}" fill="url(#j-purple)" data-v="182.8"/>`;
  g += `<path d="${hbar(a, yc - 4.5, b, 9)}" fill="url(#j-amber)" data-v="163.8"/>`;
  g += stage(0, "Work done", "start") + stage(f(a), "Billed", "middle") + stage(f(a + b), "Paid", "end");
  g += T(2.5, yc + 1.3, "182.8 days waiting to be billed<tspan dx=\"3\" class=\"s on\">₹1,313.5 Cr</tspan>", "v on");
  g += T(a + 2.5, yc + 1.3, "163.8 days waiting to be paid<tspan dx=\"3\" class=\"s on\">₹1,176.8 Cr</tspan>", "v on");
  return `<svg width="172mm" height="56mm" viewBox="0 0 172 56" data-scale="${s}" data-axis="x" data-base="0">${g}</svg>`;
})();
const boxes7 = [["Work done to", "measured:", "days not", "published"], ["Measured to", "certified:", "days not", "published"], ["Certified to", "billed:", "days not", "published"]];
const p7 = page(7, "Work not yet billed", (curPage = 7, std)(
  "Work done but not yet billed equals six months of sales.",
  `<div style="position:relative">${p7chart}
     <div style="position:absolute;left:0;top:31mm;display:flex;gap:1.24mm">${boxes7.map((l) => dash(29, 19.5, l, { navy: true })).join("")}</div></div>
   <div style="margin-top:9mm;width:113.33mm"><div class="sb" style="margin-bottom:1.6mm">Days of sales held as work not yet billed</div>
     <div class="mono" style="display:flex;justify-content:space-between;border-top:.5pt solid #597BCC;border-bottom:.5pt solid #597BCC;padding:2mm 0;font-size:10.5pt;line-height:14pt">
       <span>FY23 187.5</span><span>FY24 232.2</span><span>FY25 178.7</span><span style="font-weight:500">FY26 182.8</span></div></div>
   <p style="margin-top:6mm">₹245.2 Cr of this moved to non-current in FY26. The published accounts do not say why.</p>`,
  "More than half the 346.6 days come before a bill is raised. Your accounts do not show which step holds them.",
  "Audited consolidated results, filed 20 May 2026 (NSE), p.10; investor presentation Q4 FY26 (BSE, May 2026), slide 28. Days computed: contract assets / revenue x 365, and trade receivables / revenue x 365. Non-current contract assets ₹245.15 Cr in FY26, nil in FY25."), { navy: true });

// ================= PAGE 8: ageing stacks =================
const p8chart = (() => {
  const s = 1.15, base = 162, cols = [[0, "March 2025", [42.3, 17.9, 6.2, 24.0], "₹90.4 Cr", "7.9% of receivables"], [54, "March 2026", [43.9, 45.7, 14.6, 24.0], "₹128.2 Cr", "10.8% of receivables"]];
  const names = [["6 months to", "1 year"], ["1 to 2 years"], ["2 to 3 years"], ["Over 3 years"]];
  let g = "";
  for (const [x, label, vals, tot, sh] of cols) {
    let y = base, joins = [];
    vals.forEach((v, i) => {
      const h = v * s, top = i === 3, red = i === 1;
      const d = top ? vbar(x, y, 30, h) : `M${x},${f(y)} H${x + 30} V${f(y - h)} H${x} Z`;
      g += `<path d="${d}" fill="${red ? "url(#j-red)" : "#C3C9D3"}" stroke="${red ? "#C46C61" : "#6F7783"}" stroke-width="${red ? .265 : .176}" data-v="${v}"/>`;
      const mid = y - h / 2, val = `₹${v.toFixed(1)} Cr`;
      if (x === 54) { const nl = names[i]; g += nl.map((n, k) => T(x + 2.5, mid - (nl.length * 4.2 + 4.6) / 2 + 3.2 + k * 4.2, n, "s on")).join("") + T(x + 2.5, mid + (nl.length * 4.2 + 4.6) / 2 - .6, val, "v on"); }
      else if (h >= 8) g += T(x + 2.5, mid + 1.3, val, "v on");
      else g += `<line x1="${x + 30}" x2="${x + 33.5}" y1="${f(mid)}" y2="${f(mid)}" stroke="#6F7783" stroke-width=".176"/>` + T(x + 34.5, mid + 1.3, val, "v");
      y -= h; if (i < 3) joins.push(y);
    });
    g += joins.map((jy) => `<rect x="${x - .2}" y="${f(jy - .3)}" width="30.4" height=".6" fill="#fff"/>`).join("");
    g += T(x + 15, y - 6.2, tot, "t14", "middle") + T(x + 15, y - 2, sh, "s", "middle") + T(x + 15, base + 5.4, label, "b", "middle");
  }
  const yl = base - (43.9 + 45.7 * .78) * s; // leader into the gap, on the 1 to 2 year band of March 2026
  g += `<line x1="54" x2="48" y1="${f(yl)}" y2="${f(yl)}" stroke="#C46C61" stroke-width=".176"/>` + T(47, yl - .7, "More than", "s", "end") + T(47, yl + 3.5, "doubled", "s", "end");
  return `<svg width="84mm" height="168mm" viewBox="0 0 84 168" data-scale="${s}" data-axis="y" data-base="${base}">${g}</svg>`;
})();
const p8 = page(8, "Ageing", (curPage = 8, std)(
  "Bills over six months old rose from ₹90.4 Cr to ₹128.2 Cr.",
  `<div class="g12"><div style="grid-column:1/8">${p8chart}</div>
   <div style="grid-column:8/13;padding-top:14mm"><p class="rule" style="padding-top:2.6mm">Your auditor's report carries a qualified opinion on one receivable of ₹11.56 Cr. The party has been readmitted to insolvency proceedings. The report also carries an emphasis of matter on ₹54.93 Cr of long-outstanding receivables, contract assets and other exposures. Legal action is under way on both.</p></div></div>`,
  "Most of the rise is in bills one to two years old: ₹17.9 Cr to ₹45.7 Cr.",
  "Ageing of gross trade receivables from transaction date: Annual Report FY26 (July 2026), PDF p.158; band totals and shares computed. Auditor's report: audited results, filed 20 May 2026 (NSE), p.5; Annual Report FY26, PDF p.97 and p.140, notes 53 and 54. Disputed receivables within the table: ₹41.21 Cr."));

// ================= PAGE 9: waterfall =================
const p9chart = (() => {
  const s = .065, base = 128, Y = (v) => f(base - v * s), w = 24, X = (i) => i * 43 + 9.5;
  let g = "";
  const bar = (i, lo, hi, fill, edge, ew, v) => `<path d="${vbar(X(i), base - lo * s, w, (hi - lo) * s)}" fill="url(#j-${fill})" stroke="${edge}" stroke-width="${ew}" data-v="${v}"/>`;
  g += bar(0, 0, 1839, "slate", "#6F7783", .176, 1839) + bar(1, 463, 1839, "red", "#C25A4D", .265, 1376) + bar(2, 327, 463, "amber", "#B38540", .176, 136) + bar(3, 0, 324, "green", "#549678", .176, 324);
  const con = (v, i) => `<line x1="${X(i) + w}" x2="${X(i + 1)}" y1="${Y(v)}" y2="${Y(v)}" stroke="#98A2B3" stroke-width=".176" stroke-dasharray=".706 .706"/>`;
  g += con(1839, 0) + con(463, 1) + con(327, 2);
  g += T(X(0) + w / 2, Y(1839) - 1.8, "₹1,839 Cr", "v", "middle");
  g += T(X(1) + w / 2, Y(1839) - 6, "-₹1,376 Cr", "v", "middle") + T(X(1) + w / 2, Y(1839) - 1.8, "75% of operating profit", "s", "middle");
  g += T(X(2) + w / 2, Y(463) - 1.8, "-₹136 Cr", "v", "middle") + T(X(3) + w / 2, Y(324) - 1.8, "₹324 Cr", "v", "middle");
  g += `<line x1="0" x2="172" y1="${base}" y2="${base}" stroke="#98A2B3" stroke-width=".265"/>`;
  [["Operating profit before", "working capital"], ["Absorbed by", "working capital"], ["Tax paid"], ["Operating cash"]].forEach((l, i) => l.forEach((t, k) => (g += T(i * 43 + 21.5, base + 5 + k * 4.2, t, "s", "middle"))));
  return `<svg width="172mm" height="139mm" viewBox="0 0 172 139" data-scale="${s}" data-axis="y" data-base="${base}">${g}</svg>`;
})();
const p9table = `<div style="position:absolute;left:90mm;top:6mm;width:82mm" class="ruled">
  <div><div class="mu f9" style="margin-bottom:1mm">Borrowings</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2mm"><div>₹326 Cr<div class="mu f9">(Mar 2024)</div></div><div>₹417 Cr<div class="mu f9">(Mar 2025)</div></div><div><b class="sb">₹472 Cr</b><div class="mu f9">(Mar 2026)</div></div></div></div>
  <div><div class="mu f9" style="margin-bottom:1mm">Finance cost per ₹100 of sales, FY26</div><div style="display:grid;grid-template-columns:1fr auto;row-gap:.8mm"><b class="sb">Capacite</b><b class="sb">₹3.68</b><span>B.L. Kashyap</span><span>₹3.15</span><span>PSP Projects</span><span>₹1.44</span><span>Ahluwalia Contracts</span><span>₹1.11</span></div></div>
  <p>In FY26 operating cash rose to ₹223 Cr from ₹52 Cr, and your borrowing rate came down from 12.65% to 9.65%.</p></div>`;
const p9 = page(9, "Funding the growth", (curPage = 9, std)(
  "Over four years, <span class=\"nw\">three-quarters</span> of operating profit went into working capital.",
  `<div style="position:relative">${p9chart}${p9table}</div>
   <p class="f9 mu" style="margin-top:1.5mm">The bars use rounded published figures and come to ₹3 Cr more than the reported total. We print the total as reported.</p>
`,
  "Working capital took ₹1,376 Cr in four years. Over the last two, borrowings went from ₹326 Cr to ₹472 Cr.",
  "Investor presentation Q4 FY26 (BSE, May 2026), slides 28 and 29; audited results, filed 20 May 2026 (NSE), p.11. Totals and the 75% share computed. Operating cash by year: ₹88 Cr, -₹39 Cr, ₹52 Cr, ₹223 Cr. The MD's letter in the Annual Report FY26 (July 2026) gives FY26 as ₹224 Cr. Rate: Q4 FY26 call (transcript filed 25 May 2026, NSE) and investor presentation slide 5. Peer ratios computed from their FY26 audited statements (B.L. Kashyap filed 28 May 2026, PSP Projects 28 May 2026, Ahluwalia Contracts 30 May 2026, all NSE); directional only."));

// ================= PAGE 10: vendors =================
const p10chart = (() => {
  const s = .6, rows = [["Capacite", 179, "about 179 days"], ["B.L. Kashyap", 85, "85 days"], ["Ahluwalia Contracts", 83, "83 days"], ["PSP Projects", 62, "62 days"]];
  let g = "";
  rows.forEach(([n, v, lab], i) => {
    const y = i * 10.98;
    g += T(0, y + 5.8, n, i ? "b" : "b") + `<path d="${hbar(40, y, v * s, 9)}" fill="url(#j-slate)" stroke="#6F7783" stroke-width="${i ? .176 : .265}" data-v="${v}"/>` + T(40 + v * s - 2.5, y + 5.9, lab, "v on", "end");
  });
  g += `<line x1="40" x2="40" y1="-1" y2="${f(3 * 10.98 + 10)}" stroke="#98A2B3" stroke-width=".265"/>`;
  return `<svg width="172mm" height="43mm" viewBox="0 0 172 43" data-scale="${s}" data-axis="x" data-base="40">${g}</svg>`;
})();
const dumbbell = `<div style="position:relative;margin-top:13mm">
  <svg width="172mm" height="30mm" viewBox="0 0 172 30">
    <rect x=".2" y=".2" width="171.6" height="29.6" rx="1.5" fill="none" stroke="#98A2B3" stroke-width=".265" stroke-dasharray="1.058 .706"/>
    ${T(4, 6.2, "Vendor by vendor, from your ERP", "m")}
    <line x1="40" x2="166" y1="20" y2="20" stroke="#E6E8EC" stroke-width=".176"/>
    <rect x="62" y="18.75" width="64" height="2.5" rx="1.25" fill="#C3C9D3"/>
    <circle cx="62" cy="20" r="1.75" fill="#fff" stroke="#5F6670" stroke-width=".265"/>
    <circle cx="126" cy="20" r="1.75" fill="#5F6670"/>
    ${T(62, 14, "The day the vendor's terms allow", "b", "middle")}${T(126, 14, "The day it was paid", "b", "middle")}
  </svg></div>
  <div class="f9" style="margin-top:2.6mm;color:#5F6670">Paid before the due date: your borrowed cash, lent at zero.<br>Paid after it: a risk to supply, and to MSME compliance.</div>`;
const p10 = page(10, "Vendors", (curPage = 10, std)(
  "Payables average about 179 days. Each vendor's terms set its own date.",
  `<div class="sb" style="margin:3mm 0 3mm">Days to pay vendors, FY26</div>${p10chart}${dumbbell}
   <p style="margin-top:8mm">Of ₹909.9 Cr owed to vendors, ₹45.7 Cr is owed to MSME vendors. The law gives them 45 days.</p>`,
  "Each vendor's own terms set the right day to pay it. An average of 179 days cannot show who is paid early and who is paid late.",
  "Trade payables ₹909.92 Cr (MSME ₹45.66 Cr): audited results, filed 20 May 2026 (NSE), p.11. Days computed by Crestline (payables / cost base x 365); Capacite does not publish its own figure. Peers computed from their FY26 audited statements (filed 28 to 30 May 2026, NSE); directional only."));

// ================= PAGE 11: the dashed grid =================
const rows11 = [["₹1,313.5 Cr", "Work done, not yet billed"], ["₹1,176.8 Cr", "Bills raised, not yet paid"], ["₹128.2 Cr", "Bills over six months old"], ["₹1,376 Cr", "Absorbed by working capital, FY23 to FY26"], ["₹909.9 Cr", "Owed to vendors"]];
const p11 = page(11, "What the accounts cannot show", (curPage = 11, std)(
  "Your accounts show how much is waiting. They do not show where.",
  `<div class="g12" style="margin-top:2mm"><div class="f9 mu" style="grid-column:5/13;margin-bottom:2.4mm">Not published. Held in your ERP.</div></div>
   ${rows11.map(([a, b]) => `<div class="g12 rule" style="padding:4mm 0 5.2mm"><div style="grid-column:1/5"><div class="f16">${a}</div><div class="f9 mu" style="margin-top:.6mm">${b}</div></div>
     <div style="grid-column:5/13;display:flex;gap:4mm">${["Which site?", "Whose desk?", "Since when?"].map((l) => dash(35.11, 15, l)).join("")}</div></div>`).join("")}`,
  "Where your ERP dates each step, every one of these boxes can be filled from it.",
  "Public disclosure stops at one ageing table, with no split by project, client or site: Annual Report FY26 (July 2026), PDF p.158.", "one"));

// ================= PAGE 12: the 90-day ruler =================
const p12chart = (() => {
  const s = 1.075, X = (d) => f(d * s), yr = 30;
  let g = "";
  for (let d = 0; d <= 160; d += 10) g += `<line x1="${X(d)}" x2="${X(d)}" y1="${yr}" y2="${yr + 1.8}" stroke="#0B0D10" stroke-width=".176"/>` + T(X(d), yr + 6, d, "m", d === 0 ? "start" : d === 160 ? "end" : "middle");
  g += `<line x1="0" x2="172" y1="${yr}" y2="${yr}" stroke="#0B0D10" stroke-width=".265"/>`;
  g += `<path d="M${X(90)},${yr - 3} H${X(152)} V${yr + 3} H${X(90)} Z" fill="url(#j-purple)" data-v="62"/>` + T((X(90) + X(152)) / 2, yr + 1.25, "62 days to go", "v on", "middle");
  g += `<circle cx="${X(90)}" cy="${yr}" r="1.75" fill="#fff" stroke="${NAVY}" stroke-width=".265" data-v="90"/><circle cx="${X(152)}" cy="${yr}" r="1.75" fill="${NAVY}" data-v="152"/>`;
  g += `<line x1="${X(152)}" x2="${X(152)}" y1="9.6" y2="${yr - 2.4}" stroke="#5F6670" stroke-width=".176"/>` + T(X(152), 3.4, "152 days: ‘Elevated receivables and WC days", "b", "end") + T(X(152), 7.6, "(152 days) remain a focus area.’", "b", "end");
  g += `<line x1="${X(90)}" x2="${X(90)}" y1="21" y2="${yr - 2.4}" stroke="#5F6670" stroke-width=".176"/>` + T(X(90), 19, "Your target: 90 days over two and a half years", "b", "end");
  return `<svg width="172mm" height="38mm" viewBox="0 0 172 38" data-scale="${s}" data-axis="x" data-base="0">${g}</svg>`;
})();
const p12 = page(12, "What the accounts cannot show", (curPage = 12, std)(
  "Your Annual Report states 152 working-capital days. The target is 90.",
  `<div style="margin-top:10mm">${p12chart}</div>
   <p class="f11" style="margin-top:9mm">You have already taken 43 days out this year, including retention debtors.</p>
   <p class="serif f14" style="margin-top:14mm;width:128mm;font-weight:500">On the call we would ask one thing: which sites hold the 62 days still to go?</p>`,
  "The 62 days sit in particular sites and bills. Crestline lists them, with their values and owners.",
  "Annual Report FY26 (July 2026): 152 days and the 90-day plan in the risk section, PDF p.96; 43 days, PDF p.12 and p.16. The report does not define working-capital days, so we have not rebuilt the figure. 62 days computed as 152 less 90."));

// ================= PAGE 13 (navy): read-only flow =================
const arrow = `<svg width="8mm" height="8mm" viewBox="0 0 8 8"><path d="M1,4 H7 M5,2.2 L7,4 L5,5.8" fill="none" stroke="#fff" stroke-width=".265"/></svg>`;
const box13 = (a, b) => `<div style="width:52mm;border:.75pt solid #fff;padding:4mm 3.6mm 5mm"><div class="sb f13">${a}</div><div style="color:#C3CBDD;margin-top:1.4mm">${b}</div></div>`;
const p13 = page(13, "How Crestline works", (curPage = 13, std)(
  "We read your ERP. We never change it.",
  `<div style="display:flex;flex-direction:column;justify-content:center;height:100%">
     <div style="display:flex;align-items:stretch">${box13("Your ERP", "Your books stay where they are.")}<div style="display:flex;align-items:center">${arrow}</div>${box13("Crestline, read-only", "Nothing is written back.")}<div style="display:flex;align-items:center">${arrow}</div>${box13("A list your team can act on", "Each waiting bill with its value, days and desk.")}</div>
     <div class="ruled f11" style="margin-top:14mm;width:128mm"><div>It works with the ERP you already run.</div><div>It reads the dates your ERP already records, step by step.</div><div>Every figure ties back to your ledger, or the difference is shown.</div><div style="border-bottom:.5pt solid #597BCC">Your finance team keeps working as it does today.</div></div></div>`,
  "No new system for your sites, and no change to your books.", NO_FIG, "one"), { navy: true });

// ================= PAGE 14: anatomy of one line =================
const fields = [["RA bill no.", "RA bill no.: the bill or work order, as your ERP numbers it"], ["Site", "Site: the project it belongs to"], ["Value, ₹", "Value, ₹: the amount waiting"], ["Days at this stage", "Days at this stage: counted from the date your ERP recorded the last step"], ["Stage it waits at", "Stage it waits at: measurement, certification, billing or payment"], ["Desk holding it", "Desk holding it: the person or team whose action comes next"]];
const p14 = page(14, "How Crestline works", (curPage = 14, std)(
  "One line for each waiting bill, with the desk holding it.",
  `<div class="lab" style="margin-top:4mm;text-transform:none;letter-spacing:0">Illustrative layout. No Capacite data.</div>
   <div style="display:grid;grid-template-columns:31mm 22mm 25mm 31.33mm 31.33mm 31.34mm;margin-top:2mm;border-top:.5pt solid #0B0D10;border-bottom:.5pt solid #0B0D10">${fields.map(([n], i) => `<div class="mono" style="font-size:11pt;line-height:15pt;color:#5F6670;padding:3mm 2mm;min-height:17mm;${i ? "border-left:.5pt solid #D6D9DF" : ""}">${n}</div>`).join("")}</div>
   <div style="display:grid;grid-template-columns:31mm 22mm 25mm 31.33mm 31.33mm 31.34mm">${fields.map(([n, e]) => { const k = e.indexOf(":") + 1; return `<div style="padding:0 2mm"><div style="width:0;height:8mm;border-left:.5pt solid #5F6670;margin-left:.2mm"></div><div class="f9 mu" style="margin-top:1.4mm"><span style="color:#0B0D10">${e.slice(0, k)}</span>${e.slice(k)}</div></div>`; }).join("")}</div>
   <div class="ruled f11" style="margin-top:12mm;width:128mm"><div>Ranked by value times days waiting, so the largest wait comes first.</div><div style="border-bottom:.5pt solid #E6E8EC">Each line carries an owner and the date it was raised. It closes when the bill moves, on the evidence in your ERP.</div></div>
   <div style="margin-top:10mm;width:128mm;border:.5pt solid ${NAVY};padding:3.4mm 4mm 3.8mm">On the call we will show the working product on a demonstration ledger. It is not a client's data. Capacite's figures would come only from Capacite's ERP.</div>`,
  "Your team gets a list of named bills to chase, largest first.", NO_FIG, "one"));

// ================= PAGE 15: next step =================
const QR_URL = "https://www.crestlineintelligence.com/book-a-demo";
const qrSvg = (() => {
  const q = qrcode(0, "M"); q.addData(QR_URL); q.make();
  const n = q.getModuleCount(); let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c},${r}h1v1h-1z`;
  return `<svg width="22mm" height="22mm" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" role="img" aria-label="QR code: ${QR_URL}" data-qr="${QR_URL}"><path d="${d}" fill="#0B0D10"/></svg>`;
})();
const strip = (() => {
  const c = 172 / 14; let g = "";
  for (let i = 0; i < 14; i++) { const w1 = i < 7; g += `<rect x="${f(i * c)}" y="7" width="${f(c)}" height="${f(c)}" fill="${w1 ? "#E5F0FB" : "#E6F5EE"}"/><rect x="${f(i * c)}" y="7" width="${f(c)}" height="1" fill="${w1 ? "#9CC5EE" : "#9ED9BF"}"/>` + T(i * c + c / 2, 7 + c / 2 + 2.2, i + 1, "m", "middle"); }
  for (let i = 1; i < 14; i++) g += `<line x1="${f(i * c)}" x2="${f(i * c)}" y1="7" y2="${f(7 + c)}" stroke="#fff" stroke-width=".176"/>`;
  g += T(0, 4.2, "Week 1: connect read-only, read the site", "b") + T(86, 4.2, "Week 2: the list, reviewed with your team", "b");
  return `<svg width="172mm" height="${f(7 + c)}mm" viewBox="0 0 172 ${f(7 + c)}">${g}</svg>`;
})();
const tick = (s) => `<div style="display:flex;align-items:center;gap:3.4mm;margin-top:3.4mm"><span style="width:5mm;height:5mm;border:.75pt solid #0B0D10;flex:none"></span><span class="f13">${s}</span></div>`;
const p15 = page(15, "Next step", (curPage = 15, std)(
  "Thirty minutes, on the call you offered.",
  `<p class="f11" style="width:128mm;margin-top:1mm">On 27 September you wrote that you were available for a video call. We would like to keep that appointment.</p>
   <p class="f11" style="width:128mm;margin-top:6mm;border-top:.5pt solid ${NAVY};border-bottom:.5pt solid ${NAVY};padding:3mm 0 3.4mm">A two-week pilot on one site, read-only, at no cost. You choose the site. At the end you receive the bills and payments holding that site's cash, each with its value, how long it has waited and who holds it.</p>
   <div style="margin-top:9mm">${strip}</div>
   <div style="margin-top:9mm">${tick("Wednesday 21 October 2026, 11:00 IST")}${tick("Friday 23 October 2026, 16:00 IST")}<p style="margin-top:4.6mm">Or any time that suits you: call or write to Rajat Kate.</p></div>
   <div class="g12 rule" style="margin-top:9mm;padding-top:5mm"><div style="grid-column:1/7"><div class="sb f13">Rajat Kate</div><div style="margin-top:1mm">Founder, Crestline Intelligence<br>+91 77438 51234<br>rajat@crestlineintelligence.com<br>www.crestlineintelligence.com</div></div>
     <div style="grid-column:7/10;padding-top:1mm">${qrSvg}<div class="f9" style="margin-top:1.6mm">Book a time</div></div></div>`,
  "You see one site's list before you decide anything else.", NO_FIG, "one"));

// ================= PAGE 16: sources, back cover =================
const BAND = "M -3,-3 L 213,-3 L 213,30 C 140,52 70,24 -3,44 Z";
const BEDGE = "M 213,30 C 140,52 70,24 -3,44";
const p16 = page(16, "Sources", `
<svg class="bleed" viewBox="-3 -3 216 303" width="216mm" height="303mm" aria-hidden="true"><path d="${BAND}" fill="${NAVY}"/>${[6, 12].map((d) => `<path d="${BEDGE}" transform="translate(0,${d})" fill="none" stroke="#8FA7DD" stroke-width=".176"/>`).join("")}</svg>
<div class="g12 f9" style="position:absolute;left:16mm;width:172mm;top:78mm;line-height:12.5pt">
  <div style="grid-column:1/7"><div class="sb" style="font-size:10pt;margin-bottom:2.6mm">Sources</div><div class="ruled">
    <div>Capacite Infraprojects Limited, audited consolidated financial results with auditor's report, filed 20 May 2026 (NSE).</div>
    <div>Investor presentation Q4 FY26, May 2026 (BSE).</div>
    <div>Q4 FY26 earnings call transcript, call held 21 May 2026, filed 25 May 2026 (NSE).</div>
    <div>Annual Report FY2025-26, July 2026 (capacite.in, NSE). Page numbers are PDF pages.</div>
    <div>Peers: B.L. Kashyap FY26 audited results, filed 28 May 2026; PSP Projects Annual Report FY26, filed 28 May 2026; Ahluwalia Contracts FY26 audited results, filed 30 May 2026 (all NSE).</div></div></div>
  <div style="grid-column:7/13"><div class="sb" style="font-size:10pt;margin-bottom:2.6mm">How to read the figures</div><div class="ruled">
    <div>Based only on Capacite's public filings, as published up to July 2026.</div>
    <div>All Capacite figures are consolidated, from the documents listed. Revenue is revenue from operations, ₹2,622.72 Cr.</div>
    <div>Figures footnoted as computed are Crestline's arithmetic on those documents. They are not company statements.</div>
    <div>Nothing in this file comes from Capacite's ERP. We have not seen it.</div></div></div>
</div>
<div style="position:absolute;left:16mm;width:172mm;top:236mm;border-top:.5pt solid ${NAVY};padding-top:5mm;display:flex;gap:12mm;align-items:flex-start">
  <div style="padding-top:.6mm">${logo(NAVY)}</div>
  <div class="f9">Crestline Intelligence Private Limited<br>+91 77438 51234<br>rajat@crestlineintelligence.com<br>www.crestlineintelligence.com<div class="mu" style="margin-top:3mm">If this file reached you in error, please call +91 77438 51234 and we will collect it.</div></div>
</div>`, { cls: "hdnavy" });

// ---- assemble; curl quotes in text nodes only (typesetting, not rewording) ----
const curl = (s) => s.replace(/(₹[\d,.]+) Cr/g, "$1 Cr").replace(/(^|[\s(>])'/g, "$1‘").replace(/'/g, "’");
let html = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><title>Project Keystone</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Serif:wght@400;500&display=block" rel="stylesheet">
<link rel="stylesheet" href="keystone-print.css"></head><body>${defs}${[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16].join("\n")}</body></html>`;
html = html.replace(/>([^<]*)</g, (m, t) => ">" + curl(t) + "<");
writeFileSync(new URL("./keystone.html", import.meta.url), html);
console.log("keystone.html written,", html.length, "bytes; cover textPath startOffset", startOffset);
