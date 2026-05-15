import useFadeIn from '../hooks/useFadeIn.js';
import NumeroCard from './NumeroCard.jsx';

const iconHabitantes = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="14" r="6" stroke="#1BBDE8" strokeWidth="1.5" />
    <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#1BBDE8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const iconPib = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="32" height="22" rx="3" stroke="#1BBDE8" strokeWidth="1.5" />
    <path d="M14 12V8a6 6 0 0112 0v4" stroke="#1BBDE8" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="23" r="3" stroke="#5855A6" strokeWidth="1.5" />
  </svg>
);
const iconRank = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,4 36,34 4,34" stroke="#1BBDE8" strokeWidth="1.5" fill="none" />
    <path d="M20 14v10M20 28v2" stroke="#5855A6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const iconReceita = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32 L8 20 L16 20 L16 14 L24 14 L24 8 L32 8 L32 32" stroke="#1BBDE8" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="4" y1="32" x2="36" y2="32" stroke="#5855A6" strokeWidth="1.5" />
  </svg>
);
const iconStar = (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6l2.4 7.4H30l-6.2 4.5 2.4 7.4L20 21l-6.2 4.3 2.4-7.4L10 13.4h7.6z" stroke="#1BBDE8" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="20" r="16" stroke="#5855A6" strokeWidth="1" opacity="0.5" />
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
