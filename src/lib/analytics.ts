// GA4(gtag)가 로드되어 있으면 이벤트를 보내고, 없으면 조용히 무시합니다.
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, params: Params = {}) {
  try {
    window.gtag?.('event', event, params);
  } catch {
    /* 분석 실패가 사이트 동작을 막지 않도록 */
  }
  if (import.meta.env.DEV) console.debug('[track]', event, params);
}
