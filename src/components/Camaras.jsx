import useFadeIn from '../hooks/useFadeIn.js';
import { camaras } from '../data/camaras.js';

export default function Camaras() {
  useFadeIn();
  return (
    <section className="camaras" id="camaras">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Setores de Atuação</span>
          <h2 className="section-title">Câmaras <span className="text-cyan">Temáticas</span></h2>
          <p className="section-desc">Cinco câmaras especializadas que estruturam as frentes de inovação do ecossistema.</p>
        </div>
        <div className="camaras__grid">
          {camaras.map((c) => (
            <div
              key={c.title}
              className="camara-card fade-in"
              data-color={c.color}
              style={{ transitionDelay: c.delay }}
            >
              <div className="camara-card__glow"></div>
              <div className="camara-card__logo">
                <img src={c.logo} alt={c.alt} />
              </div>
              <div className="camara-card__body">
                <h3 className="camara-card__title">{c.title}</h3>
                <p className="camara-card__text">{c.text}</p>
                <div className="camara-card__tags">
                  {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="camara-card__bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
