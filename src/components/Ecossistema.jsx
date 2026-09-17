import { useEffect, useRef } from 'react';
import useFadeIn from '../hooks/useFadeIn.js';

const CX = 350, CY = 250;
const ORBIT = { rx: 230, ry: 62, deg: -20, period: 19200 };
const TILT = (ORBIT.deg * Math.PI) / 180;

// ponto da elipse inclinada no ângulo t (rad)
function orbitPoint(t) {
  const ex = ORBIT.rx * Math.cos(t), ey = ORBIT.ry * Math.sin(t);
  return {
    x: CX + ex * Math.cos(TILT) - ey * Math.sin(TILT),
    y: CY + ex * Math.sin(TILT) + ey * Math.cos(TILT),
  };
}

const ORBIT_PATH = (() => {
  const a = orbitPoint(0), b = orbitPoint(Math.PI);
  return `M ${a.x} ${a.y} A ${ORBIT.rx} ${ORBIT.ry} ${ORBIT.deg} 1 1 ${b.x} ${b.y} A ${ORBIT.rx} ${ORBIT.ry} ${ORBIT.deg} 1 1 ${a.x} ${a.y}`;
})();

// t = 3π/2 é o ponto de trás, onde o GT cruza por trás do título ChapHub
const BEHIND = (3 * Math.PI) / 2;
const FADE_IN = (15 * Math.PI) / 180, FADE_OUT = (45 * Math.PI) / 180;
function behindOpacity(t) {
  const d = Math.abs(((t - BEHIND + 3 * Math.PI) % (2 * Math.PI)) - Math.PI);
  if (d <= FADE_IN) return 0;
  if (d >= FADE_OUT) return 1;
  return (d - FADE_IN) / (FADE_OUT - FADE_IN);
}

const ORBITS = [
  { label: 'AGRO', phase: Math.PI / 6, fill: '#0a1a1a', stroke: '#1BBDE8', text: '#1BBDE8' },
  { label: 'SAÚDE', phase: Math.PI / 6 + (2 * Math.PI) / 3, fill: '#0f0a1a', stroke: '#5855A6', text: '#8b88d9' },
  { label: 'EDUCAÇÃO', phase: Math.PI / 6 + (4 * Math.PI) / 3, fill: '#0a0a0a', stroke: '#666', text: '#aaa' },
];

export default function Ecossistema() {
  useFadeIn();
  const nodeRefs = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf;
    const start = performance.now();
    const step = (now) => {
      const base = reduce ? 0 : ((now - start) / ORBIT.period) * 2 * Math.PI;
      ORBITS.forEach((o, i) => {
        const t = (base + o.phase) % (2 * Math.PI);
        const { x, y } = orbitPoint(t);
        const op = behindOpacity(t);
        const node = nodeRefs.current[i], line = lineRefs.current[i];
        if (node) {
          node.setAttribute('transform', `translate(${x} ${y})`);
          node.style.opacity = op;
        }
        if (line) {
          line.setAttribute('x2', x);
          line.setAttribute('y2', y);
          line.style.opacity = op * 0.6;
        }
      });
      if (!reduce) raf = requestAnimationFrame(step);
    };
    step(start);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="ecossistema" id="ecossistema">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Rede de Inovação</span>
          <h2 className="section-title">O <span className="text-cyan">Ecossistema</span> Conectado</h2>
        </div>
        <div className="ecossistema__diagram fade-in">
          <svg id="ecosSvg" viewBox="0 110 700 280" xmlns="http://www.w3.org/2000/svg" className="ecos-svg">
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
            <path d={ORBIT_PATH} fill="none" stroke="rgba(27,189,232,0.12)" strokeWidth="1" strokeDasharray="4 8" />
            {ORBITS.map((o, i) => (
              <line
                key={`l-${o.label}`}
                ref={(el) => { lineRefs.current[i] = el; }}
                className="ecos-line"
                x1={CX} y1={CY} x2={CX} y2={CY}
                stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="6 3"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
            {ORBITS.map((o, i) => (
              <g key={o.label} ref={(el) => { nodeRefs.current[i] = el; }}>
                <g className="ecos-node">
                  <circle r="30" fill={o.fill} stroke={o.stroke} strokeWidth="1.5" filter="url(#nodeGlow)" />
                  <text y="-3" textAnchor="middle" fill={o.text} fontSize="8" fontFamily="sans-serif" fontWeight="bold">GT</text>
                  <text y="9" textAnchor="middle" fill={o.text} fontSize={o.label.length > 6 ? 7 : 8} fontFamily="sans-serif" fontWeight="bold">{o.label}</text>
                </g>
              </g>
            ))}
            <circle cx="350" cy="250" r="70" fill="url(#hubGrad)" />
            <circle cx="350" cy="250" r="52" fill="none" stroke="#1BBDE8" strokeWidth="1" opacity="0.4" className="ecos-ring" />
            <circle cx="350" cy="250" r="38" fill="none" stroke="#5855A6" strokeWidth="1" opacity="0.3" className="ecos-ring" style={{ animationDelay: '0.5s' }} />
            <circle cx="350" cy="250" r="28" fill="#0D0D0D" stroke="#1BBDE8" strokeWidth="2" filter="url(#nodeGlow)" />
            <text x="350" y="252" textAnchor="middle" fill="#1BBDE8" fontSize="8" fontFamily="sans-serif" fontWeight="bold">ChapHub</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
