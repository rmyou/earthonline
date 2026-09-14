/* eslint-disable no-console */
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const output = resolve("public/default-og.jpg");
await mkdir(dirname(output), { recursive: true });

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#082f49"/>
      <stop offset="1" stop-color="#0e7490"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(1040 80) rotate(140) scale(420 360)">
      <stop offset="0" stop-color="#67e8f9" stop-opacity=".42"/>
      <stop offset="1" stop-color="#67e8f9" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <path d="M0 548c210-70 354 65 572 10 186-46 303-153 628-92v164H0z" fill="#67e8f9" opacity=".1"/>
  <path d="M0 594c220-64 390 33 598-5 190-35 335-118 602-75v116H0z" fill="#f7fbfc" opacity=".08"/>
  <circle cx="1040" cy="140" r="9" fill="#67e8f9"/>
  <circle cx="1078" cy="140" r="9" fill="#67e8f9" opacity=".72"/>
  <circle cx="1116" cy="140" r="9" fill="#67e8f9" opacity=".44"/>
  <text x="80" y="128" fill="#a5f3fc" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="5">KREAM'S FIELD NOTES</text>
  <text x="80" y="275" fill="#ffffff" font-family="'Microsoft YaHei','PingFang SC','Noto Sans SC',sans-serif" font-size="66" font-weight="700">把复杂的问题讲清楚，</text>
  <text x="80" y="365" fill="#ffffff" font-family="'Microsoft YaHei','PingFang SC','Noto Sans SC',sans-serif" font-size="66" font-weight="700">也把真实的过程留下来。</text>
  <rect x="80" y="445" width="96" height="5" rx="2.5" fill="#67e8f9"/>
  <text x="80" y="518" fill="#e6f2f5" font-family="'Microsoft YaHei','PingFang SC','Noto Sans SC',sans-serif" font-size="30" font-weight="600">话说三遍淡如水</text>
  <text x="80" y="566" fill="#a5f3fc" font-family="Arial, sans-serif" font-size="23">earthonline-six.vercel.app</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
  .toFile(output);
console.log(`Generated ${output}`);
