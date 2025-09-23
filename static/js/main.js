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

    // Smooth anchor with offset
    document.querySelectorAll('.floating-nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id) || document.querySelector(`section.${id}`);
        if (target) {
          e.preventDefault();
          const rect = target.getBoundingClientRect();
          const offset = rect.top + window.scrollY - 20; // slight offset
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      });
    });
  }

  // Reveal sections when they enter viewport
  const sections = document.querySelectorAll('main > section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
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

  // Countdown to Feb 19, 2026 00:00:00 IST (UTC+5:30)
  const targetDate = new Date('2026-02-18T18:30:00Z').getTime();
  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMins = document.getElementById('cd-mins');
  const elSecs = document.getElementById('cd-secs');
  if (elDays && elHours && elMins && elSecs) {
    function updateCountdown() {
      const now = Date.now();
      let diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const mins = Math.floor(diff / (1000 * 60));
      diff -= mins * (1000 * 60);
      const secs = Math.floor(diff / 1000);
      elDays.textContent = String(days).padStart(2, '0');
      elHours.textContent = String(hours).padStart(2, '0');
      elMins.textContent = String(mins).padStart(2, '0');
      elSecs.textContent = String(secs).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
})();
