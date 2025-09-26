
// Main interactions
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Back to top visibility
  const back = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) back.classList.add('show');
    else back.classList.remove('show');
  });
  back?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Required: one alert box
  if (!localStorage.getItem('cookieAlerted')) {
    alert('This student demo uses cookies for a better experience.');
    localStorage.setItem('cookieAlerted', '1');
  }

  // Required: two popup windows
  document.getElementById('newsletter-btn')?.addEventListener('click', () => {
    window.open('about:blank','newsletter','width=420,height=500,noopener');
  });
  document.getElementById('open-deal')?.addEventListener('click', () => {
    window.open('about:blank','deal','width=480,height=380,noopener');
  });
});
