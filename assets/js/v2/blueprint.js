/**
 * Phượng Hoàng V2 — Blueprint JavaScript
 * IntersectionObserver-driven. GPU-safe only.
 * All JS contracts preserved.
 */
(function () {
  'use strict';

  /* ═══ SCROLL REVEAL ═══ */
  var revealEls = document.querySelectorAll('.bp-reveal');
  if (revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    revealEls.forEach(function(el) { revealObserver.observe(el); });
  }

  /* ═══ MAGNETIC BUTTON ═══ */
  var magneticBtn = document.querySelector('.bp-btn-magnetic');
  if (magneticBtn && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var RANGE = 24, TILT = 12;
    magneticBtn.addEventListener('mousemove', function(e) {
      var r = magneticBtn.getBoundingClientRect();
      var x = e.clientX - r.left - r.width / 2;
      var y = e.clientY - r.top - r.height / 2;
      if (Math.abs(x) < RANGE && Math.abs(y) < RANGE) {
        magneticBtn.style.transform =
          'perspective(600px) rotateX(' + (-y / TILT) + 'deg) rotateY(' + (x / TILT) + 'deg)';
      }
    });
    magneticBtn.addEventListener('mouseleave', function() {
      magneticBtn.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    });
  }

  /* ═══ ACCIDENT COUNTER ═══ */
  var counterEl = document.getElementById('accidentCounter');
  if (counterEl) {
    var target = parseInt(counterEl.getAttribute('data-target'), 10);
    var currentText = counterEl.textContent.replace(/[.,]/g, '') || '0';
    var currentVal = parseInt(currentText, 10);
    var alreadyAtTarget = (currentVal >= target);

    if (!alreadyAtTarget) {
      var counterObserver = new IntersectionObserver(
        function(entries) {
          var entry = entries && entries[0];
          if (entry && entry.isIntersecting) {
            animateCounter(counterEl, target);
            counterObserver.unobserve(counterEl);
          }
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(counterEl);
    }
  }

  function animateCounter(el, target) {
    if (!target) return;
    var duration = 1500, start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target).toLocaleString('vi-VN');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ═══ HEADER SCROLL ═══ */
  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          siteHeader.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

})();
