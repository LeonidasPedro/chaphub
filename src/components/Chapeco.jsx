import useFadeIn from '../hooks/useFadeIn.js';

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
              <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" className="chapeco__map-svg">
                <path d="M40 60 Q80 20 140 30 Q200 25 260 50 Q290 80 280 130 Q270 170 230 190 Q180 210 130 200 Q70 195 40 160 Q15 130 40 60Z" fill="none" stroke="rgba(27,189,232,0.2)" strokeWidth="1" />
                <path d="M40 80 Q60 60 90 65 Q110 68 115 100 Q118 130 90 145 Q60 155 40 135 Q25 115 40 80Z" fill="rgba(27,189,232,0.08)" stroke="rgba(27,189,232,0.3)" strokeWidth="1" />
                <circle cx="78" cy="108" r="6" fill="#1BBDE8" className="city-pulse" />
                <circle cx="78" cy="108" r="12" fill="none" stroke="#1BBDE8" strokeWidth="1" opacity="0.4" className="city-pulse-ring" />
                <text x="92" y="107" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold">CHAPECÓ</text>
                <text x="92" y="120" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">SC · Brasil</text>
                <line x1="0" y1="55" x2="300" y2="55" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="0" y1="110" x2="300" y2="110" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="0" y1="165" x2="300" y2="165" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="75" y1="0" x2="75" y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="225" y1="0" x2="225" y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              </svg>
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
