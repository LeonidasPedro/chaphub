'use strict';

const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

/* NAV SCROLL */
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}));

/* HERO PARTICLES */
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function createParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 14000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? '#1BBDE8' : Math.random() > 0.5 ? '#5855A6' : '#ffffff'
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = '#1BBDE8';
        ctx.globalAlpha = (1 - dist / 100) * 0.08;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawParticles);
}

new ResizeObserver(() => {
  resizeCanvas();
  createParticles();
}).observe(canvas);
resizeCanvas();
createParticles();
drawParticles();

/* TYPED TEXT */
const typedEl = document.getElementById('typed');
const words = ['Inovação.', 'Desenvolvimento.', 'Compartilhamento.', 'Networking.', 'Criatividade.', 'Experiência.', 'Agronegócio.', 'Tecnologia.', 'Saúde.', 'Conexões.'];
let wi = 0, ci = 0, deleting = false;

function typeLoop() {
  const word = words[wi];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ci + 1);
    ci++;
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
    setTimeout(typeLoop, 65);
  } else {
    typedEl.textContent = word.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
      setTimeout(typeLoop, 300);
      return;
    }
    setTimeout(typeLoop, 35);
  }
}
setTimeout(typeLoop, 1200);

/* FADE IN OBSERVER */
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

/* ANIMATED COUNTERS */
function animateCount(el, target, duration = 1800) {
  const isLarge = target > 9999;
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * eased);
    el.textContent = isLarge ? current.toLocaleString('pt-BR') : current.toString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isLarge ? target.toLocaleString('pt-BR') : target.toString();
  }
  requestAnimationFrame(step);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = parseInt(e.target.dataset.count, 10);
      const countEl = e.target.querySelector('.count-up');
      animateCount(countEl, target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.numero-card[data-count]').forEach(c => counterObs.observe(c));

/* SVG ORBIT */
const dot = document.querySelector('.orbit-dot');
if (dot) {
  let angle = 0;
  const cx = 350, cy = 250, r = 175;
  function animOrbit() {
    angle += 0.4;
    const rad = (angle * Math.PI) / 180;
    dot.setAttribute('cx', cx + r * Math.cos(rad));
    dot.setAttribute('cy', cy + r * Math.sin(rad));
    requestAnimationFrame(animOrbit);
  }
  animOrbit();
}

/* CONTACT FORM */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.textContent = 'Enviar Mensagem';
      btn.disabled = false;
      formSuccess.style.display = 'block';
      setTimeout(() => formSuccess.style.display = 'none', 5000);
    }, 1400);
  });
}

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
