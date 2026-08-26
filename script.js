(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const year = document.querySelector('[data-year]');
  const mobileBreakpoint = 1040;

  if (year) year.textContent = new Date().getFullYear();
  const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];

  const closeNavigation = (returnFocus = false) => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (returnFocus) toggle.focus();
  };

  const openNavigation = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    document.body.classList.add('nav-open');
    navLinks[0]?.focus();
  };

  toggle?.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeNavigation() : openNavigation();
  });
  navLinks.forEach((link) => link.addEventListener('click', () => closeNavigation()));

  document.addEventListener('keydown', (event) => {
    const isOpen = toggle?.getAttribute('aria-expanded') === 'true';
    if (event.key === 'Escape' && isOpen) {
      closeNavigation(true);
      return;
    }
    if (event.key === 'Tab' && isOpen && navLinks.length) {
      const last = navLinks[navLinks.length - 1];
      if (event.shiftKey && document.activeElement === toggle) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.focus();
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > mobileBreakpoint) closeNavigation();
  });
})();

(() => {
  const COOKIE_NAME = 'evh_analytics_consent';
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
  const GA_MEASUREMENT_ID = 'G-0JKQTTXSF3';
  const PRIVACY_URL = 'https://evhconsult.eu/privacy.html';
  const CHANGE_EVENT = 'evh:analytics-consent-changed';
  const isProductionDomain = location.hostname === 'evhconsult.eu' || location.hostname.endsWith('.evhconsult.eu');

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  const consentState = (analyticsStorage) => ({
    analytics_storage: analyticsStorage,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  window.gtag('consent', 'default', consentState('denied'));

  const readChoice = () => {
    const prefix = `${COOKIE_NAME}=`;
    const match = document.cookie.split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
    if (!match) return null;
    const value = decodeURIComponent(match.slice(prefix.length));
    return value === 'granted' || value === 'denied' ? value : null;
  };

  const writeChoice = (choice) => {
    const attributes = [`${COOKIE_NAME}=${encodeURIComponent(choice)}`, 'Path=/', `Max-Age=${COOKIE_MAX_AGE}`, 'SameSite=Lax'];
    if (isProductionDomain) attributes.push('Domain=.evhconsult.eu', 'Secure');
    document.cookie = attributes.join('; ');
  };

  const deleteGaCookies = () => {
    const names = document.cookie
      .split(';')
      .map((part) => part.trim().split('=')[0])
      .filter((name) => name === '_ga' || name.startsWith('_ga_'));

    names.forEach((name) => {
      document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
      if (isProductionDomain) {
        document.cookie = `${name}=; Path=/; Domain=.evhconsult.eu; Max-Age=0; SameSite=Lax; Secure`;
      }
    });
  };

  const notify = (choice) => {
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, {
      detail: { analytics: choice === 'granted', choice }
    }));
  };

  const applyChoice = (choice, persist = false) => {
    if (persist) writeChoice(choice);
    const granted = choice === 'granted';
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = !granted;
    window.gtag('consent', 'update', consentState(granted ? 'granted' : 'denied'));
    if (!granted) deleteGaCookies();
    notify(choice);
  };

  const initialChoice = readChoice();
  if (initialChoice) applyChoice(initialChoice);

  window.EVHConsent = Object.freeze({
    cookieName: COOKIE_NAME,
    measurementId: GA_MEASUREMENT_ID,
    getChoice: readChoice,
    getAnalyticsConsent: () => readChoice() === 'granted',
    changeEvent: CHANGE_EVENT
  });

  const initUi = () => {
    const style = document.createElement('style');
    style.textContent = `
      .evh-consent{position:fixed;z-index:10000;left:1rem;right:1rem;bottom:1rem;max-width:760px;margin:0 auto;padding:1rem 1.1rem;background:#fff;color:#172033;border:1px solid rgba(23,32,51,.18);border-radius:12px;box-shadow:0 18px 50px rgba(0,0,0,.22);font:14px/1.5 Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      .evh-consent[hidden]{display:none}.evh-consent h2{margin:0 0 .35rem;font-size:1.05rem;color:inherit}.evh-consent p{margin:.35rem 0}.evh-consent a{color:#304f9d;text-decoration:underline;text-underline-offset:2px}.evh-consent-status{font-weight:600}.evh-consent-actions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.8rem}.evh-consent button{appearance:none;border:1px solid #304f9d;border-radius:8px;padding:.58rem .85rem;font:inherit;font-weight:700;cursor:pointer;background:#fff;color:#304f9d}.evh-consent button[data-consent-accept],.evh-consent button[data-consent-refuse]{background:#304f9d;color:#fff}.evh-consent button[data-consent-close]{border-color:rgba(23,32,51,.3);color:#172033}.evh-cookie-settings{appearance:none;border:0;background:none;padding:0;color:inherit;font:inherit;cursor:pointer;text-decoration:none}.evh-cookie-settings:hover,.evh-cookie-settings:focus-visible{text-decoration:underline;text-underline-offset:3px}@media(max-width:560px){.evh-consent-actions button{flex:1 1 100%}}
    `;
    document.head.appendChild(style);

    const panel = document.createElement('section');
    panel.className = 'evh-consent';
    panel.hidden = true;
    panel.tabIndex = -1;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Analytics cookie settings');
    panel.innerHTML = `
      <h2>Analytics cookies</h2>
      <p>EVH Consult uses Google Analytics 4 only with your consent to understand aggregate site use, regional/campaign effectiveness and successful contact requests. It is not used for advertising or remarketing.</p>
      <p class="evh-consent-status" data-consent-status></p>
      <p><a href="${PRIVACY_URL}">Privacy &amp; cookie information</a></p>
      <div class="evh-consent-actions">
        <button type="button" data-consent-accept>Accept analytics</button>
        <button type="button" data-consent-refuse>Refuse analytics</button>
        <button type="button" data-consent-close>Close</button>
      </div>`;
    document.body.appendChild(panel);

    const status = panel.querySelector('[data-consent-status]');
    const closeButton = panel.querySelector('[data-consent-close]');
    let returnFocus = null;

    const renderStatus = () => {
      const choice = readChoice();
      status.textContent = choice === 'granted'
        ? 'Analytics is currently allowed.'
        : choice === 'denied'
          ? 'Analytics is currently refused.'
          : 'No analytics choice has been stored yet. No Google Analytics request is made until you accept.';
    };

    const openPanel = (settingsMode = true, trigger = null) => {
      returnFocus = trigger;
      renderStatus();
      panel.hidden = false;
      closeButton.hidden = !settingsMode;
      if (settingsMode) panel.focus();
    };

    const closePanel = () => {
      panel.hidden = true;
      if (returnFocus instanceof HTMLElement) returnFocus.focus();
      returnFocus = null;
    };

    panel.querySelector('[data-consent-accept]').addEventListener('click', () => {
      applyChoice('granted', true);
      closePanel();
    });

    panel.querySelector('[data-consent-refuse]').addEventListener('click', () => {
      applyChoice('denied', true);
      closePanel();
    });

    closeButton.addEventListener('click', closePanel);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden && !closeButton.hidden) closePanel();
    });

    document.querySelectorAll('.footer-links').forEach((footerLinks) => {
      if (!footerLinks.querySelector('[data-privacy-link]')) {
        const privacy = document.createElement('a');
        privacy.href = PRIVACY_URL;
        privacy.textContent = 'Privacy & cookies';
        privacy.dataset.privacyLink = '';
        footerLinks.appendChild(privacy);
      }
      if (!footerLinks.querySelector('[data-cookie-settings]')) {
        const settings = document.createElement('button');
        settings.type = 'button';
        settings.className = 'evh-cookie-settings';
        settings.textContent = 'Cookie settings';
        settings.dataset.cookieSettings = '';
        footerLinks.appendChild(settings);
      }
    });

    document.querySelectorAll('[data-cookie-settings]').forEach((button) => {
      button.addEventListener('click', () => openPanel(true, button));
    });

    if (!readChoice()) openPanel(false);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUi, { once: true });
  } else {
    initUi();
  }
})();
