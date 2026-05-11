const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (i % 3) * 0.1 + 's';
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Bar animations
  const bars = document.querySelectorAll('.bar-fill');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animated');
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => barObserver.observe(b));

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow =
      window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,.4)' : 'none';
  });

  // Contact form
  function handleSubmit(e) {
    e.preventDefault();
    const notif = document.getElementById('notif');
    notif.classList.add('show');
    e.target.reset();
    setTimeout(() => notif.classList.remove('show'), 3500);
  }