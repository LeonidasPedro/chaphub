import { useEffect } from 'react';

export default function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // desconta o header fixo e centraliza seções mais baixas que a área visível
        const nav = document.getElementById('nav');
        // ao rolar, o header perde 2 × 0.5rem de padding (.nav → .nav.scrolled)
        const navH = nav ? nav.offsetHeight - (nav.classList.contains('scrolled') ? 0 : 16) : 0;
        const rect = target.getBoundingClientRect();
        const slack = Math.max(0, (window.innerHeight - navH - rect.height) / 2);
        const top = window.scrollY + rect.top - navH - slack;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}
