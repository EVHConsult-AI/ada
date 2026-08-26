(() => {
  const MEASUREMENT_ID = 'G-QJKQTTXSF3';
  const APPROVED_HOSTS = new Set([
    'evhconsult.eu',
    'ai.evhconsult.eu',
    'ada.evhconsult.eu',
    'erwin.evhconsult.eu'
  ]);
  const CHANGE_EVENT = 'evh:analytics-consent-changed';
  const COOKIE_EXPIRES_SECONDS = 13 * 30 * 24 * 60 * 60;
  let loaded = false;

  const isApprovedHost = () => APPROVED_HOSTS.has(window.location.hostname);
  const hasAnalyticsConsent = () => window.EVHConsent?.getAnalyticsConsent?.() === true;

  const load = () => {
    if (loaded || !isApprovedHost() || !hasAnalyticsConsent()) return;

    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: COOKIE_EXPIRES_SECONDS,
      cookie_update: false
    });

    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(tag);
  };

  window.EVHAnalytics = Object.freeze({
    isLoaded: () => loaded,
    track: (name, parameters) => {
      if (!loaded) return;
      window.gtag('event', name, parameters);
    }
  });

  window.addEventListener(CHANGE_EVENT, load);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load, { once: true });
  } else {
    load();
  }
})();
