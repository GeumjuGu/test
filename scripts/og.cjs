// OG 이미지(링크 공유 썸네일) 생성: node scripts/og.cjs
// scripts/og.html의 문구를 profile.json에 맞게 고친 뒤 실행하세요. Playwright가 필요합니다.
const path = require('node:path');
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto('file://' + path.join(__dirname, 'og.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(__dirname, '../public/og-default.png') });
  await b.close();
})();
