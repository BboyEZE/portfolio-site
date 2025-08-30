// site.js
// This script handles toggling visibility of elements based on data attributes.
function handleToggleClicks(e) {
  const btn = e.target.closest('[data-toggle]');
  if (!btn) return;
  const sel = btn.getAttribute('data-toggle');
  const panel = document.querySelector(sel);
  if (panel) panel.classList.toggle('active');

  btn.classList.toggle('open');
  if(btn.classList.contains('open')) {
    btn.textContent = 'Close';
  } else {
    btn.textContent = 'Read more';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleToggleClicks);
});