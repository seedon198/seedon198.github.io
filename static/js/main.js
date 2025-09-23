(function() {
  const nav = document.querySelector('.floating-nav');
  if (!nav) return;

  // Show navbar on load for empty/short pages
  nav.classList.add('visible');

  let lastY = window.scrollY || 0;
  let ticking = false;

  function getScrollProgress() {
    const scrollTop = window.scrollY || 0;
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    const winHeight = window.innerHeight;
    const scrollable = Math.max(docHeight - winHeight, 1);
    return scrollTop / scrollable; // 0..1
  }

  function onScroll() {
    const y = window.scrollY || 0;
    const progress = getScrollProgress();
    const nearTop = progress < 0.05; // mimic < 5%
    const directionUp = y < lastY;

    if (nearTop) {
      nav.classList.remove('visible');
    } else if (directionUp) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();
