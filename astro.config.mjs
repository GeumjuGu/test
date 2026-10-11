// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 배포 도메인으로 바꾸세요. canonical URL·OG 이미지 절대경로에 쓰입니다.
export default defineConfig({
  site: 'https://example.com',
  vite: { plugins: [tailwindcss()] },
});
