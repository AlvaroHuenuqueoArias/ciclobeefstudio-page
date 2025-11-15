// docs/assets/js/custom.js
// Minimal JS helpers for CicloBeef Studio

(function () {
  // small helper: add 'has-js' class to body
  document.documentElement.classList.add('has-js');

  // example: simple cookie-free banner injection (only as placeholder)
  function showBetaBadge() {
    const badge = document.createElement('div');
    badge.style.position = 'fixed';
    badge.style.right = '12px';
    badge.style.bottom = '12px';
    badge.style.padding = '8px 12px';
    badge.style.background = 'rgba(0,0,0,0.7)';
    badge.style.color = '#fff';
    badge.style.borderRadius = '6px';
    badge.style.fontSize = '13px';
    badge.innerText = 'CicloBeef Studio — Prototype';
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 7000); // desaparece luego de 7s
  }

  // run on DOM ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    showBetaBadge();
  } else {
    document.addEventListener('DOMContentLoaded', showBetaBadge);
  }
})();

