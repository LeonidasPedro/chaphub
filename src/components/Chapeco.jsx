import useFadeIn from '../hooks/useFadeIn.js';
import SCOutlineMap from './SCOutlineMap.jsx';

export default function Chapeco() {
  useFadeIn();
  return (
    <section className="chapeco" id="chapeco">
      <div className="chapeco__bg-overlay"></div>
      <div className="container chapeco__container">
        <div className="chapeco__content fade-in">
          <span className="section-label">A Cidade</span>
          <div className="chapeco__badge">Capital Brasileira da Agroindústria</div>
          <h2 className="section-title">Chapecó,<br /><span className="text-cyan">Polo de Inovação</span></h2>
          <p className="chapeco__desc">
            Localizada no coração do Oeste Catarinense, Chapecó combina a força de uma economia agroindústrial robusta com um ecossistema tecnológico vibrante. Somos a cidade que une o campo ao código, o trator à inteligência artificial.
          </p>
          <div className="chapeco__facts">
            <div className="fact">
              <span className="fact__icon">🌾</span>
              <div><strong>Maior centro mundial</strong><br />em produção de proteína animal</div>
            </div>
            <div className="fact">
              <span className="fact__icon">💡</span>
              <div><strong>13ª cidade</strong><br />com mais startups no Brasil</div>
            </div>
            <div className="fact">
              <span className="fact__icon">🏭</span>
              <div><strong>28,4% do PIB</strong><br />vem da indústria — 2º em SC</div>
            </div>
            <div className="fact">
              <span className="fact__icon">📍</span>
              <div><strong>Oeste Catarinense</strong><br />Chapecó · Santa Catarina · Sul do Brasil</div>
            </div>
          </div>
          <a href="#contato" className="btn btn--primary">Conheça Chapecó</a>
        </div>
        <div className="chapeco__visual fade-in" style={{ transitionDelay: '0.2s' }}>
          <div className="chapeco__map-card">
            <div className="chapeco__map-header">
              <div className="chapeco__dot chapeco__dot--cyan"></div>
              <span>Chapecó · SC</span>
            </div>
            <div className="chapeco__map-body">
              <SCOutlineMap />
            </div>
            <div className="chapeco__map-stats">
              <div className="map-stat"><span className="map-stat__val">275.959</span><span className="map-stat__key">habitantes</span></div>
              <div className="map-stat"><span className="map-stat__val">R$ 17,6bi</span><span className="map-stat__key">PIB</span></div>
              <div className="map-stat"><span className="map-stat__val">46.180</span><span className="map-stat__key">empresas</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
