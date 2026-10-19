const measurementId = 'G-96SJSJ73X8';
const enabled = import.meta.env.PROD && window.location.hostname === 'elkassi.github.io';
type Parameters = Record<string, string | number | boolean>;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, parameters: Parameters = {}) {
  if (enabled) window.gtag?.('event', name, { send_to: measurementId, ...parameters });
}

let lastRoute = '';
export function trackRoute(route: string, language: string) {
  if (!enabled || route === lastRoute) return;
  lastRoute = route;
  const [page, detail] = route.split(':');
  // Separate content events make hash routes visible without duplicating the
  // page_view events collected by Google's enhanced measurement.
  trackEvent(page === 'project' ? 'project_view' : page === 'projects' ? 'category_view' : 'section_view', {
    ...(page === 'project' ? { project_id: detail } : page === 'projects' ? { project_category: detail } : { section_id: detail }),
    portfolio_language: language,
  });
}

export function initializeAnalytics() {
  if (!enabled || document.getElementById('portfolio-google-tag')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement('script');
  script.id = 'portfolio-google-tag';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(script);
  document.addEventListener('click', event => {
    const anchor = event.target instanceof Element ? event.target.closest('a') : null;
    if (!anchor) return;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin === window.location.origin && url.pathname.startsWith(`${import.meta.env.BASE_URL}cv/`)) {
      // This records a download-link click, not proof that a file was saved.
      trackEvent('cv_download', { cv_language: url.pathname.endsWith('-fr.pdf') ? 'fr' : 'en' });
    } else if (url.protocol === 'mailto:') {
      trackEvent('contact_click', { contact_method: 'email' });
    } else if (url.origin === window.location.origin && /^#(?:home|journey|about|skills|certificates|contact|\/projects\/[a-z-]+|\/project\/[a-z-]+)$/.test(url.hash)) {
      trackEvent('navigation_click', { destination: url.hash.slice(1) });
    }
  });
}
