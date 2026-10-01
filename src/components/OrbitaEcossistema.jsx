import { useEffect, useRef } from 'react';

const LOGO_VERT = '/chaphub/CLIENTE ECOSSISTEMA/Logos do Ecossistema de Inovação png/CHAPHUB-vertical-branca.png';
// logo 496x155 → largura 170 no SVG
const LOGO_W = 170, LOGO_H = (LOGO_W * 155) / 496;

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

// t = 3π/2 é o ponto de trás, onde o GT cruza por trás da logo ChapHub
const BEHIND = (3 * Math.PI) / 2;
const FADE_IN = (15 * Math.PI) / 180, FADE_OUT = (45 * Math.PI) / 180;
function behindOpacity(t) {
  const d = Math.abs(((t - BEHIND + 3 * Math.PI) % (2 * Math.PI)) - Math.PI);
  if (d <= FADE_IN) return 0;
  if (d >= FADE_OUT) return 1;
  return (d - FADE_IN) / (FADE_OUT - FADE_IN);
}

const ORBITS = [
  { label: 'AGRO', phase: Math.PI / 6 },
  { label: 'SAÚDE', phase: Math.PI / 6 + (2 * Math.PI) / 3 },
  { label: 'EDUCAÇÃO', phase: Math.PI / 6 + (4 * Math.PI) / 3 },
];

export default function OrbitaEcossistema() {
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
    <svg viewBox="90 115 520 270" xmlns="http://www.w3.org/2000/svg" className="ecos-svg">
      <defs>
        <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1BBDE8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0D0D0D" stopOpacity="0" />
        </radialGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx={CX} cy={CY} r="110" fill="url(#hubGrad)" />
      <circle cx={CX} cy={CY} r="72" fill="none" stroke="#1BBDE8" strokeWidth="1" opacity="0.35" className="ecos-ring" />
      <circle cx={CX} cy={CY} r="58" fill="none" stroke="#5855A6" strokeWidth="1" opacity="0.3" className="ecos-ring" style={{ animationDelay: '0.5s' }} />
      <path d={ORBIT_PATH} fill="none" stroke="rgba(27,189,232,0.12)" strokeWidth="1" strokeDasharray="4 8" />
      {ORBITS.map((o, i) => (
        <line
          key={`l-${o.label}`}
          ref={(el) => { lineRefs.current[i] = el; }}
          className="ecos-line"
          x1={CX} y1={CY} x2={CX} y2={CY}
          stroke="rgba(27,189,232,0.55)" strokeWidth="1.5" strokeDasharray="6 3"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      <image
        href={LOGO_VERT}
        x={CX - LOGO_W / 2} y={CY - LOGO_H / 2} width={LOGO_W} height={LOGO_H}
        className="ecos-logo"
      />
      {ORBITS.map((o, i) => (
        <g key={o.label} ref={(el) => { nodeRefs.current[i] = el; }}>
          <g className="ecos-node">
            <circle r="30" fill="#0D0D0D" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" filter="url(#nodeGlow)" />
            <text y="-3" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8" fontFamily="sans-serif" fontWeight="bold">GT</text>
            <text y="9" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize={o.label.length > 6 ? 7 : 8} fontFamily="sans-serif" fontWeight="bold">{o.label}</text>
          </g>
        </g>
      ))}
    </svg>
  );
}
