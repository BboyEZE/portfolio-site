// site.js - shared interactions: tabs, read-more toggles, scroll reveal, year stamp.

/* -------------------------------------------------------------------------
   Read-more toggles (project cards)
   ------------------------------------------------------------------------- */
function handleToggleClicks(e) {
  const btn = e.target.closest('[data-toggle]');
  if (!btn) return;
  const panel = document.querySelector(btn.getAttribute('data-toggle'));
  if (!panel) return;

  const open = panel.classList.toggle('active');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
  const t = (window.I18N && window.I18N.t.bind(window.I18N)) || ((k) => k === 'btn.showless' ? 'Show less' : 'Read more');
  btn.textContent = open ? t('btn.showless') : t('btn.readmore');
}

/* -------------------------------------------------------------------------
   Projects tabs (Professional / Personal) - no page reload
   ------------------------------------------------------------------------- */
function initTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

  function select(tab) {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) {
        panel.classList.toggle('is-active', selected);
        panel.hidden = !selected;
      }
    });
    // Re-run reveal on the freshly shown panel
    revealNow();
  }

  tablist.addEventListener('click', (e) => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) select(tab);
  });

  // Keyboard support (arrow keys)
  tablist.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let next = null;
    if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
    if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
    if (next) { e.preventDefault(); next.focus(); select(next); }
  });
}

/* -------------------------------------------------------------------------
   Scroll reveal (IntersectionObserver)
   ------------------------------------------------------------------------- */
let revealObserver = null;

function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealNow();
}

function revealNow() {
  if (!revealObserver) return;
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
    // Only observe elements that are currently displayed
    if (el.offsetParent !== null || el.getClientRects().length) revealObserver.observe(el);
  });
}

/* -------------------------------------------------------------------------
   Pointer-follow glow on CTA cards
   ------------------------------------------------------------------------- */
function initCardGlow() {
  document.querySelectorAll('.cta').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* -------------------------------------------------------------------------
   Boot
   ------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.addEventListener('click', handleToggleClicks);
  initTabs();
  initReveal();
  initCardGlow();
});
