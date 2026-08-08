/**
 * menu.js — Shared mobile menu functions
 * Used by all pages that have the mobile hamburger menu.
 * Previously duplicated inline in 19 HTML files.
 */

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  const toggle = document.getElementById('menuToggle');
  if (!menu || !overlay) return;
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  var isActive = menu.classList.contains('active');
  document.body.style.overflow = isActive ? 'hidden' : '';
  if (toggle) toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  const toggle = document.getElementById('menuToggle');
  if (menu) menu.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  const openSubs = document.querySelectorAll('.mobile-submenu.open');
  for (let i = 0; i < openSubs.length; i++) {
    openSubs[i].classList.remove('open');
  }
  const openArrows = document.querySelectorAll('.mobile-nav-link .arrow.open');
  for (let j = 0; j < openArrows.length; j++) {
    openArrows[j].classList.remove('open');
  }
}

function toggleMobileSub(el) {
  const sub = el.nextElementSibling;
  if (!sub) return;
  const arrow = el.querySelector('.arrow');
  sub.classList.toggle('open');
  var isOpen = sub.classList.contains('open');
  if (arrow) arrow.classList.toggle('open');
  el.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('active')) {
      closeMobileMenu();
    }
  }
});

// Attach to global namespace (created by phong.js)
if (window.PhuongHoang) {
  window.PhuongHoang.toggleMobileMenu = toggleMobileMenu;
  window.PhuongHoang.closeMobileMenu = closeMobileMenu;
  window.PhuongHoang.toggleMobileSub = toggleMobileSub;
}
