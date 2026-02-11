function handleToggleClicks(e) {
  const btn = e.target.closest('[data-toggle]');
  if (!btn) return;
  const sel = btn.getAttribute('data-toggle');
  const panel = document.querySelector(sel);
  if (panel) panel.classList.toggle('active');

  btn.classList.toggle('open');
  if (btn.classList.contains('open')) {
    btn.textContent = 'Close';
  } else {
    btn.textContent = 'Read more';
  }
}

function initRevealObserver() {
  const reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleToggleClicks);
  initRevealObserver();
});
