(function() {
  const nav = document.querySelector('.floating-nav');
  if (nav) {
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
      const nearTop = progress < 0.05;
      const directionUp = y < lastY;
      if (nearTop) { nav.classList.remove('visible'); }
      else if (directionUp) { nav.classList.add('visible'); }
      else { nav.classList.remove('visible'); }
      lastY = y;
      ticking = false;
    }
    window.addEventListener('scroll', function() {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
  }

  // Reveal sections when they enter viewport
  const sections = document.querySelectorAll('main > section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Active nav link highlight
        const id = entry.target.getAttribute('id') || (entry.target.classList.contains('hero') ? 'home' : '');
        if (id) {
          document.querySelectorAll('.floating-nav .nav-link').forEach(a => a.classList.remove('active'));
          const link = document.querySelector(`.floating-nav .nav-link[href="#${id}"]`);
          if (link) link.classList.add('active');
        }
      }
    });
  }, { threshold: 0.6 });
  sections.forEach(s => observer.observe(s));
})();
