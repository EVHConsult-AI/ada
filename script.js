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