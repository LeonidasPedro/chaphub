import { useEffect, useRef } from 'react';
import useFadeIn from '../hooks/useFadeIn.js';

export default function Ecossistema() {
  useFadeIn();
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    let angle = 0;
    let raf;
    const cx = 350, cy = 250, r = 175;
    const step = () => {
      angle += 0.4;
      const rad = (angle * Math.PI) / 180;
      dot.setAttribute('cx', cx + r * Math.cos(rad));
      dot.setAttribute('cy', cy + r * Math.sin(rad));
      raf = requestAnimationFrame(step);
    };
    step();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="ecossistema" id="ecossistema">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Rede de Inovação</span>
          <h2 className="section-title">O <span className="text-cyan">Ecossistema</span> Conectado</h2>
          <p className="section-desc">Cinco câmaras temáticas orbitando o hub central, criando uma rede dinâmica de inovação e colaboração.</p>
        </div>
        <div className="ecossistema__diagram fade-in">
          <svg id="ecosSvg" viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg" className="ecos-svg">
            <defs>
              <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1BBDE8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lineGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="700" y2="500">
                <stop offset="0%" stopColor="#1BBDE8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5855A6" stopOpacity="0.8" />
              </linearGradient>
              <filter id="nodeGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <line className="ecos-line" x1="350" y1="250" x2="350" y2="80" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" style={{ animationDelay: '0s' }} />
            <line className="ecos-line" x1="350" y1="250" x2="560" y2="165" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" style={{ animationDelay: '0.1s' }} />
            <line className="ecos-line" x1="350" y1="250" x2="490" y2="420" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" style={{ animationDelay: '0.2s' }} />
            <line className="ecos-line" x1="350" y1="250" x2="210" y2="420" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" style={{ animationDelay: '0.3s' }} />
            <line className="ecos-line" x1="350" y1="250" x2="140" y2="165" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" style={{ animationDelay: '0.4s' }} />
            <circle cx="350" cy="250" r="70" fill="url(#hubGrad)" />
            <circle cx="350" cy="250" r="52" fill="none" stroke="#1BBDE8" strokeWidth="1" opacity="0.4" className="ecos-ring" />
            <circle cx="350" cy="250" r="38" fill="none" stroke="#5855A6" strokeWidth="1" opacity="0.3" className="ecos-ring" style={{ animationDelay: '0.5s' }} />
            <circle cx="350" cy="250" r="28" fill="#0D0D0D" stroke="#1BBDE8" strokeWidth="2" filter="url(#nodeGlow)" />
            <text x="350" y="252" textAnchor="middle" fill="#1BBDE8" fontSize="8" fontFamily="sans-serif" fontWeight="bold">ChapHub</text>
            <circle cx="350" cy="250" r="175" fill="none" stroke="rgba(27,189,232,0.08)" strokeWidth="1" strokeDasharray="4 8" />
            <circle className="ecos-node" cx="350" cy="80" r="34" fill="#0a1a1a" stroke="#1BBDE8" strokeWidth="1.5" filter="url(#nodeGlow)" />
            <text x="350" y="76" textAnchor="middle" fill="#1BBDE8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">CÂMARA</text>
            <text x="350" y="88" textAnchor="middle" fill="#1BBDE8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">AGRO</text>
            <circle className="ecos-node" cx="556" cy="165" r="34" fill="#0f0a1a" stroke="#5855A6" strokeWidth="1.5" filter="url(#nodeGlow)" />
            <text x="556" y="161" textAnchor="middle" fill="#5855A6" fontSize="9" fontFamily="sans-serif" fontWeight="bold">CÂMARA</text>
            <text x="556" y="173" textAnchor="middle" fill="#5855A6" fontSize="9" fontFamily="sans-serif" fontWeight="bold">TIC</text>
            <circle className="ecos-node" cx="488" cy="418" r="34" fill="#0a0a0a" stroke="#666" strokeWidth="1.5" filter="url(#nodeGlow)" />
            <text x="488" y="410" textAnchor="middle" fill="#aaa" fontSize="7" fontFamily="sans-serif" fontWeight="bold">MÁQ &</text>
            <text x="488" y="422" textAnchor="middle" fill="#aaa" fontSize="7" fontFamily="sans-serif" fontWeight="bold">EQUIP</text>
            <circle className="ecos-node" cx="212" cy="418" r="34" fill="#0a1a1a" stroke="#1BBDE8" strokeWidth="1.5" filter="url(#nodeGlow)" />
            <text x="212" y="414" textAnchor="middle" fill="#1BBDE8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">CÂMARA</text>
            <text x="212" y="426" textAnchor="middle" fill="#1BBDE8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">SAÚDE</text>
            <circle className="ecos-node" cx="144" cy="165" r="34" fill="#0a0a0a" stroke="#666" strokeWidth="1.5" filter="url(#nodeGlow)" />
            <text x="144" y="157" textAnchor="middle" fill="#aaa" fontSize="7" fontFamily="sans-serif" fontWeight="bold">CÂMARA</text>
            <text x="144" y="169" textAnchor="middle" fill="#aaa" fontSize="7" fontFamily="sans-serif" fontWeight="bold">TÉCNICA</text>
            <circle ref={dotRef} className="orbit-dot" cx="525" cy="250" r="4" fill="#1BBDE8" opacity="0.8" />
          </svg>
        </div>
        <div className="ecossistema__stats">
          <div className="ecos-stat fade-in">
            <span className="ecos-stat__num">5</span>
            <span className="ecos-stat__label">Câmaras Temáticas</span>
          </div>
          <div className="ecos-stat fade-in" style={{ transitionDelay: '0.1s' }}>
            <span className="ecos-stat__num">46.180</span>
            <span className="ecos-stat__label">Empresas Ativas</span>
          </div>
          <div className="ecos-stat fade-in" style={{ transitionDelay: '0.2s' }}>
            <span className="ecos-stat__num">23</span>
            <span className="ecos-stat__label">Projetos em Incubação</span>
          </div>
          <div className="ecos-stat fade-in" style={{ transitionDelay: '0.3s' }}>
            <span className="ecos-stat__num">+10</span>
            <span className="ecos-stat__label">Anos de Inovação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
