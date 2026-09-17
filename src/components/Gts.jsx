import useFadeIn from '../hooks/useFadeIn.js';
import { gts } from '../data/gts.js';

export default function Gts() {
  useFadeIn();
  return (
    <section className="gts" id="gts">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Setores de Atuação</span>
          <h2 className="section-title">Grupos de Trabalho <span className="text-cyan">(GTs)</span></h2>
          <p className="section-desc">Três Grupos de Trabalho especializados que estruturam as frentes de inovação do ecossistema.</p>
        </div>
        <div className="gts__grid">
          {gts.map((c) => (
            <div
              key={c.title}
              className="gt-card fade-in"
              data-color={c.color}
              style={{ transitionDelay: c.delay }}
            >
              <div className="gt-card__glow"></div>
              <div className="gt-card__logo">
                <img src={c.logo} alt={c.alt} />
              </div>
              <div className="gt-card__body">
                <h3 className="gt-card__title">{c.title}</h3>
                <p className="gt-card__text">{c.text}</p>
                <div className="gt-card__tags">
                  {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="gt-card__bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
