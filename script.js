// Small interactivity: menu toggle + CTAs
const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !isExpanded);
  menuOverlay.setAttribute('aria-hidden', isExpanded);
  document.body.classList.toggle('no-scroll');
});

// Cierra el menú al hacer clic en un enlace
menuOverlay.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', (e) => {
    // Si no es el botón principal, cierra el menú
    if (!link.classList.contains('btn-primary')) {
      menuBtn.click();
    }
  });
});

function openWhatsApp() {
  const phone = '542246586766'; // Tu número
  const text = encodeURIComponent('Hola! Quiero una web con Tauren. Contame cómo arrancamos.');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// Asignar la función a todos los botones de WhatsApp
document.getElementById('ctaWhats').addEventListener('click', openWhatsApp);
document.getElementById('fabWhatsapp').addEventListener('click', (e) => {
  e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
  openWhatsApp();
});
document.getElementById('ctaWhatsMenu').addEventListener('click', (e) => {
  e.preventDefault();
  openWhatsApp();
});
document.getElementById('ctaWhatsFooter').addEventListener('click', (e) => {
  e.preventDefault();
  openWhatsApp();
});
document.getElementById('ctaWhatsMenuIcon').addEventListener('click', (e) => {
  e.preventDefault();
  openWhatsApp();
});
document.getElementById('ctaWhatsHero').addEventListener('click', (e) => {
  e.preventDefault();
  openWhatsApp();
});

document.getElementById('ctaPortfolio').addEventListener('click', ()=>{
  const servicesSection = document.getElementById('servicesTitle');
  if (servicesSection) {
    // Considerar la altura del nav en escritorio si fuera fijo
    servicesSection.scrollIntoView({behavior:'smooth',block:'start'});
  }
});

// Scroll to footer for "Contactanos" link
document.querySelectorAll('a[href="#footer"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
// --- Scroll Animations ---
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('is-visible');
      observer.unobserve(el); // Dejar de observar una vez que es visible
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.1 // El elemento se anima cuando el 10% es visible
});

animatedElements.forEach(el => {
  observer.observe(el);
});

// --- Sticky Navbar on Scroll ---
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});

// --- Parallax Effect on Hero Mockup ---
const mockup = document.querySelector('.mockup');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  mockup.style.setProperty('--parallax-y', `${-scrollY * 0.2}px`); // Mueve hacia arriba
});

// --- Interactive Background ---
const viewport = document.querySelector('.viewport');
viewport.addEventListener('mousemove', (e) => {
  // Calculate mouse position as a percentage of the viewport size
  const x = (e.clientX / viewport.offsetWidth) * 100;
  const y = (e.clientY / viewport.offsetHeight) * 100;

  // Update CSS custom properties
  viewport.style.setProperty('--mouse-x', `${x}%`);
  viewport.style.setProperty('--mouse-y', `${y}%`);
});

// --- 3D Tilt Effect on Cards ---
const tiltElements = document.querySelectorAll('.badge, .step');

tiltElements.forEach(el => {
  const intensity = 10; // Grados máximos de inclinación

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -intensity;
    const rotateY = (x / rect.width - 0.5) * intensity;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});