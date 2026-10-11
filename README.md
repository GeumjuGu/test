# 마케터 포트폴리오

방문자가 **30초 안에** 이 사람이 누구인지, 어떤 성과를 냈는지, 어떻게 연락하는지 알 수 있게 만든 프리랜서 마케터용 포트폴리오 사이트입니다. 기획 문서는 [`docs/PRD.md`](docs/PRD.md)에 있습니다.

Astro 5 + Tailwind CSS v4로 만든 정적 사이트이고, 페이지 JS는 카운트업·이벤트 추적 정도만 씁니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
```

## 내용 바꾸기 (코드 수정 불필요)

> 현재 들어 있는 이름·수치·사례는 모두 **예시**입니다. 공개 전에 반드시 본인 내용으로 바꾸세요.

| 파일 | 내용 |
|---|---|
| `src/data/profile.json` | 이름, 헤드라인, 가용 상태, 연락처, 업종별 헤드라인(`variants`), 가격 노출(`showPricing`) |
| `src/data/metrics.json` | 상단 성과 숫자 4개와 산출 기준 |
| `src/content/cases/*.md` | 사례 1개 = 파일 1개. `featured: true`면 첫 화면에 노출. 필드가 빠지면 빌드가 실패합니다 |
| `src/data/services.json` | 서비스 패키지 |
| `src/data/skills.json`, `certifications.json` | 채널·도구, 자격증 |
| `src/data/testimonials.json`, `process.json` | 추천사, 협업 방식 |
| `public/profile.svg` | 프로필 사진 (jpg/webp로 바꾸면 `profile.json`의 `photo`도 수정) |

헤드라인을 바꾸면 `scripts/og.html` 문구도 맞춘 뒤 `node scripts/og.cjs`로 링크 공유 썸네일(`public/og-default.png`)을 다시 만드세요.

## 업종별 맞춤 링크

`https://내도메인/?for=saas` 처럼 보내면 헤드라인과 사례 순서가 해당 업종에 맞게 바뀝니다. 업종 키는 `profile.json`의 `variants`에 추가합니다.

## 연동 설정

- **방문 분석 (GA4)**: 배포 환경 변수에 `PUBLIC_GA_ID=G-XXXXXXX` 설정. 섹션 노출(`section_view`), CTA 클릭(`cta_click`), 사례 열람(`case_open`), 이메일 복사(`email_copy`), 문의 제출(`form_submit`)이 기록됩니다.
- **문의 폼**: [Formspree](https://formspree.io) 등에서 받은 주소를 `profile.json`의 `formEndpoint`에 넣으면 페이지 이동 없이 전송됩니다. 비워두면 메일 앱이 열립니다.
- **미팅 예약**: `contact.calendar`에 Cal.com/Calendly 링크.
- **이력서**: PDF를 `public/`에 넣고 `resumeUrl`에 경로(예: `/resume.pdf`) 입력.

## 배포

Vercel 또는 Cloudflare Pages에서 이 저장소를 연결하면 빌드 명령 `npm run build`, 출력 폴더 `dist`로 자동 배포됩니다. 배포 후 `astro.config.mjs`의 `site`를 실제 도메인으로 바꾸세요.
