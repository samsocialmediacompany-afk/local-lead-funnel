import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require(path.join(process.cwd(), "node_modules", ".pnpm", "node_modules", "sharp"));

const outputDir = path.join(process.cwd(), "public", "brand");
const storiesDir = path.join(outputDir, "stories");
const colors = {
  navy: "#0F2747",
  blue: "#2563EB",
  green: "#22C55E",
  background: "#F8FAFC",
  text: "#0F172A",
  white: "#FFFFFF",
  muted: "#CBD5E1"
};

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const text = (value, x, y, size, fill = colors.white, weight = 700, anchor = "start") =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-family="Noto Sans TC, Inter, Arial, sans-serif" font-size="${size}px" font-weight="${weight}">${esc(value)}</text>`;

const multiline = (lines, x, y, size, lineHeight, fill = colors.white, weight = 700, anchor = "start") =>
  lines
    .map((line, index) => text(line, x, y + index * lineHeight, size, fill, weight, anchor))
    .join("");

const funnel = (x, y, scale = 1) => `
  <g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M0 0h150l-48 54v44l-27 18V54z" fill="${colors.white}"/>
    <path d="M112 22 148 0l-16 42-14-11-34 42-18-15 34-42-14-11z" fill="${colors.green}"/>
  </g>`;

const logoMark = (width, height, label = "LLF") => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" rx="${Math.round(width * 0.12)}" fill="${colors.navy}"/>
    <circle cx="${width * 0.5}" cy="${height * 0.42}" r="${width * 0.31}" fill="${colors.blue}" opacity="0.22"/>
    ${funnel(width * 0.27, height * 0.2, width / 1080)}
    ${text(label, width / 2, height * 0.83, width * 0.16, colors.white, 900, "middle")}
  </svg>`;

const cover = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="1640" height="624" viewBox="0 0 1640 624">
    <rect width="1640" height="624" fill="${colors.navy}"/>
    <circle cx="1430" cy="30" r="380" fill="${colors.blue}" opacity="0.18"/>
    <circle cx="1530" cy="520" r="260" fill="${colors.green}" opacity="0.12"/>
    <path d="M0 535h1640" stroke="${colors.white}" stroke-opacity="0.1"/>
    ${text("Local Lead Funnel｜預約成交系統", 150, 112, 34, colors.green, 800)}
    ${text("幫本地店家把流量變成預約", 150, 250, 64, colors.white, 900)}
    ${text("一頁式網站 × LINE 導流 × 表單追蹤", 155, 325, 30, colors.muted, 600)}
    <rect x="150" y="392" width="330" height="70" rx="14" fill="${colors.green}"/>
    ${text("免費診斷你的預約流程", 315, 438, 24, colors.navy, 900, "middle")}
    ${text("local-lead-funnel.vercel.app", 150, 560, 22, colors.white, 600)}
    <g transform="translate(1120 135)">
      <rect width="360" height="300" rx="30" fill="${colors.white}" fill-opacity="0.08" stroke="${colors.white}" stroke-opacity="0.18"/>
      <path d="M70 70h220l-68 76v64l-42 26v-90z" fill="${colors.white}"/>
      <path d="m254 45 70-42-30 83-26-20-60 73-29-24 60-73-25-20z" fill="${colors.green}"/>
      ${text("流量", 110, 270, 20, colors.muted, 700)}
      ${text("名單", 180, 270, 20, colors.muted, 700)}
      ${text("預約", 252, 270, 20, colors.green, 800)}
    </g>
  </svg>`;

const socialOg = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${colors.background}"/>
    <rect width="740" height="630" fill="${colors.navy}"/>
    <circle cx="1050" cy="-20" r="290" fill="${colors.blue}" opacity="0.16"/>
    <circle cx="1090" cy="585" r="220" fill="${colors.green}" opacity="0.12"/>
    ${text("Local Lead Funnel", 76, 100, 30, colors.green, 900)}
    ${multiline(["幫本地店家", "把流量變成預約"], 76, 230, 58, 78, colors.white, 900)}
    ${text("一頁式網站 × LINE × 表單 × 追蹤", 80, 390, 26, colors.muted, 600)}
    ${text("預約成交系統", 80, 535, 24, colors.white, 700)}
    <g transform="translate(830 130)">
      <rect width="280" height="330" rx="28" fill="${colors.white}" stroke="${colors.navy}" stroke-opacity="0.12"/>
      <circle cx="140" cy="80" r="52" fill="${colors.blue}" opacity="0.12"/>
      <path d="M74 62h132l-43 49v39l-24 15v-54z" fill="${colors.navy}"/>
      <path d="m178 48 44-28-19 52-16-12-34 42-19-16 34-42-16-12z" fill="${colors.green}"/>
      ${text("流量", 70, 230, 20, colors.text, 700)}
      ${text("名單", 126, 230, 20, colors.text, 700)}
      ${text("預約", 182, 230, 20, colors.blue, 800)}
      <path d="M74 260h132" stroke="${colors.muted}" stroke-width="4" stroke-linecap="round"/>
      <path d="M74 285h96" stroke="${colors.green}" stroke-width="8" stroke-linecap="round"/>
    </g>
  </svg>`;

const postCopy = [
  ["把社群流量變成預約名單", "網站 × LINE × 表單 × 追蹤"],
  ["我們不是只做一個網站", "而是整理整條預約流程"],
  ["哪些店家適合？", "需要預約或諮詢，就能使用"],
  ["有流量，為什麼沒預約？", "問題可能不在曝光量"],
  ["客戶為什麼問完就消失？", "降低每一步的阻力"],
  ["一頁式成交頁在做什麼？", "把重要資訊集中在同一條路上"],
  ["免費診斷你的預約流程", "先找出最容易流失的地方"],
  ["從診斷到正式上線", "六個步驟建立預約入口"],
  ["現在開始整理你的成交入口", "免費檢查目前預約流程"]
];

const post = (title, subtitle, index) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
    <rect width="1080" height="1350" fill="${colors.navy}"/>
    <circle cx="950" cy="80" r="260" fill="${colors.blue}" opacity="0.2"/>
    <circle cx="130" cy="1200" r="240" fill="${colors.green}" opacity="0.1"/>
    ${text("LLF", 76, 100, 38, colors.green, 900)}
    ${text(`0${index + 1}`, 1004, 100, 32, colors.white, 800, "end")}
    <rect x="76" y="180" width="928" height="760" rx="32" fill="${colors.white}" fill-opacity="0.08" stroke="${colors.white}" stroke-opacity="0.16"/>
    ${funnel(445, 300, 1.3)}
    ${multiline(title.length > 13 ? [title.slice(0, 13), title.slice(13)] : [title], 540, 560, 56, 82, colors.white, 900, "middle")}
    ${text(subtitle, 540, 760, 26, colors.muted, 600, "middle")}
    <path d="M220 835h640" stroke="${colors.green}" stroke-width="8" stroke-linecap="round"/>
    ${text("Local Lead Funnel｜預約成交系統", 76, 1110, 28, colors.white, 800)}
    ${text("幫本地店家把流量變成預約", 76, 1164, 25, colors.muted, 600)}
    <rect x="76" y="1210" width="330" height="64" rx="14" fill="${colors.green}"/>
    ${text("免費診斷你的預約流程", 241, 1252, 22, colors.navy, 900, "middle")}
  </svg>`;

const highlight = (label, glyph) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
    <rect width="1080" height="1920" fill="${colors.navy}"/>
    <circle cx="540" cy="840" r="310" fill="${colors.blue}" opacity="0.18"/>
    <circle cx="540" cy="840" r="250" fill="none" stroke="${colors.green}" stroke-width="8"/>
    <text x="540" y="900" text-anchor="middle" fill="${colors.white}" font-family="Arial, sans-serif" font-size="170px" font-weight="900">${esc(glyph)}</text>
    ${text("LLF", 540, 1180, 46, colors.green, 900, "middle")}
    ${text(label, 540, 1270, 54, colors.white, 900, "middle")}
    ${text("Local Lead Funnel｜預約成交系統", 540, 1770, 28, colors.muted, 600, "middle")}
  </svg>`;

const story = (label, title, lines, index) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920" viewBox="0 0 1080 1920">
    <rect width="1080" height="1920" fill="${colors.background}"/>
    <rect width="1080" height="470" fill="${colors.navy}"/>
    <circle cx="960" cy="80" r="240" fill="${colors.blue}" opacity="0.18"/>
    ${text("LLF", 70, 104, 42, colors.green, 900)}
    ${text(label, 1010, 104, 28, colors.white, 700, "end")}
    ${multiline(title, 70, 250, 58, 78, colors.white, 900)}
    <rect x="70" y="560" width="940" height="850" rx="28" fill="${colors.white}" stroke="${colors.muted}" stroke-opacity="0.5"/>
    ${lines.map((line, lineIndex) => `${text(`${String(lineIndex + 1).padStart(2, "0")}`, 125, 720 + lineIndex * 140, 24, colors.green, 900)}${text(line, 205, 720 + lineIndex * 140, 34, colors.text, 800)}`).join("")}
    <path d="M125 1560h830" stroke="${colors.navy}" stroke-opacity="0.15" stroke-width="3"/>
    ${text("申請免費診斷", 70, 1690, 42, colors.navy, 900)}
    ${text("local-lead-funnel.vercel.app", 70, 1760, 28, colors.blue, 700)}
    ${text(`Story ${index}`, 1010, 1840, 24, colors.navy, 700, "end")}
  </svg>`;

const assets = {
  "logo-square": logoMark(1080, 1080),
  "facebook-cover": cover(),
  "social-og": socialOg()
};

for (const [name, svg] of Object.entries(assets)) {
  await writeAsset(path.join(outputDir, name), svg);
}

for (const [[title, subtitle], index] of postCopy.map((copy, index) => [copy, index])) {
  await writeAsset(path.join(outputDir, `post-${String(index + 1).padStart(2, "0")}`), post(title, subtitle, index));
}

const highlights = [
  ["服務", "＋"],
  ["流程", "→"],
  ["診斷", "✓"],
  ["FAQ", "?"],
  ["聯絡", "@"]
];
for (const [label, glyph] of highlights) {
  await writeAsset(path.join(outputDir, `highlight-${label === "FAQ" ? "faq" : label === "服務" ? "service" : label === "流程" ? "process" : label === "診斷" ? "diagnosis" : "contact"}`), highlight(label, glyph));
}

const storySets = [
  ["服務", ["我們協助店家做什麼", ["一頁式預約網站", "官方 LINE 導流", "表單與名單追蹤"]]],
  ["服務", ["完整的預約入口", ["網站整理服務資訊", "LINE 承接客戶詢問", "表單留下可追蹤資料"]]],
  ["流程", ["從診斷到上線", ["免費診斷", "確認需求", "建置頁面"]]],
  ["流程", ["串接後持續優化", ["LINE 與表單串接", "上線測試", "後續每週優化"]]],
  ["診斷", ["免費診斷會檢查什麼", ["網站與預約入口", "粉專與 LINE 導流", "表單與名單追蹤"]]],
  ["診斷", ["如何申請", ["填寫診斷表單", "留下目前問題", "取得 3 個改善方向"]]],
  ["FAQ", ["沒有網站也可以嗎？", ["可以先從需求盤點開始", "依產業規劃入口", "再決定建置方式"]]],
  ["FAQ", ["廣告費是否另計？", ["廣告費依平台另計", "方案內容清楚列出", "先確認合作範圍"]]],
  ["聯絡", ["開始整理預約流程", ["官方網站", "官方 LINE", "Email 與免費診斷表單"]]],
  ["聯絡", ["找到適合你的下一步", ["local-lead-funnel.vercel.app", "lin.ee/sR8MLrmc", "samsocialmediacompany@gmail.com"]]]
];
for (const [index, [label, [title, lines]]] of storySets.entries()) {
  await writeAsset(path.join(storiesDir, `story-${String(index + 1).padStart(2, "0")}-${label}`), story(label, [title], lines, index + 1));
}

async function writeAsset(basePath, svg) {
  await fs.mkdir(path.dirname(basePath), { recursive: true });
  await fs.writeFile(`${basePath}.svg`, svg, "utf8");
  await sharp(Buffer.from(svg)).png({ quality: 92 }).toFile(`${basePath}.png`);
}

console.log(`Generated ${Object.keys(assets).length + postCopy.length + highlights.length + storySets.length} brand assets in ${outputDir}`);
