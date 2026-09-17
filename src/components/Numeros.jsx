import useFadeIn from '../hooks/useFadeIn.js';
import NumeroCard from './NumeroCard.jsx';

const iconHabitantes = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <circle cx="20" cy="14" r="6" strokeWidth="1.5" />
    <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const iconPib = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path d="M6 30c5-1 7-6 10-11s6-9 12-11" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 8h6v6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="6" y1="34" x2="34" y2="34" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const iconRank = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <rect x="6" y="22" width="8" height="12" strokeWidth="1.5" />
    <rect x="16" y="12" width="8" height="22" strokeWidth="1.5" />
    <rect x="26" y="18" width="8" height="16" strokeWidth="1.5" />
  </svg>
);
const iconReceita = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path d="M8 32 L8 20 L16 20 L16 14 L24 14 L24 8 L32 8 L32 32" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="4" y1="32" x2="36" y2="32" strokeWidth="1.5" />
  </svg>
);
const iconStar = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path d="M20 6l2.4 7.4H30l-6.2 4.5 2.4 7.4L20 21l-6.2 4.3 2.4-7.4L10 13.4h7.6z" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="16" strokeWidth="1" opacity="0.4" />
  </svg>
);

export default function Numeros() {
  useFadeIn();
  return (
    <section className="numeros" id="numeros">
      <div className="numeros__bg-tri">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <polygon points="200,0 400,400 0,400" fill="rgba(88,85,166,0.06)" />
          <polygon points="200,50 380,400 20,400" fill="rgba(27,189,232,0.04)" />
        </svg>
      </div>
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Impacto em Números</span>
          <h2 className="section-title">Chapecó em <span className="text-cyan">Dados</span></h2>
          <p className="section-desc">Um ecossistema que já transformou a economia regional e projeta ainda mais crescimento.</p>
        </div>
        <div className="numeros__grid">
          <NumeroCard count={275959} label="Habitantes em Chapecó" sub="6ª cidade mais populosa de SC" icon={iconHabitantes} />
          <NumeroCard count={176} prefix="R$ " suffix=",6 bi" label="PIB Municipal" sub="Top 100 do Brasil" icon={iconPib} delay="0.05s" />
          <NumeroCard count={13} suffix="ª" label="Cidade em startups no Brasil" sub="2ª em densidade per capita" icon={iconRank} delay="0.1s" />
          <NumeroCard count={350} prefix="R$ " suffix=" M/ano" label="Gerados pelas empresas" sub="Receita do ecossistema" icon={iconReceita} delay="0.15s" />
          <NumeroCard count={83} label="Empresas graduadas pela IncTech" sub="Desde a fundação do ecossistema" icon={iconStar} delay="0.2s" />
        </div>
      </div>
    </section>
  );
}
