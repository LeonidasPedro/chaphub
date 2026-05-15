import useFadeIn from '../hooks/useFadeIn.js';

const LOGO_VERT = '/chaphub/CLIENTE ECOSSISTEMA/Logos do Ecossistema de Inovação png/CHAPHUB-vertical-branca.png';

export default function Sobre() {
  useFadeIn();
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <div className="sobre__grid">
          <div className="sobre__text fade-in">
            <span className="section-label">Sobre o ChapHub</span>
            <h2 className="section-title">O que é o <span className="text-cyan">ChapHub</span>?</h2>
            <p className="sobre__desc">
              O ChapHub é o primeiro ecossistema de inovação do Oeste Catarinense, conectando empresas, startups, instituições de ensino e governo para impulsionar o desenvolvimento regional. Nascido em Chapecó/SC, somos a ponte entre a tradição agroindústrial e o futuro tecnológico do Brasil.
            </p>
            <div className="sobre__pillars">
              <div className="pillar fade-in" style={{ transitionDelay: '0.1s' }}>
                <div className="pillar__icon">
                  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="#1BBDE8" strokeWidth="1.5" />
                    <path d="M20 38 L30 18 L40 38 Z" fill="none" stroke="#1BBDE8" strokeWidth="1.5" />
                    <path d="M25 38 L30 28 L35 38" fill="none" stroke="#5855A6" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <h4 className="pillar__title">Hub Central</h4>
                  <p className="pillar__text">Compartilhar, desenvolver, crescer, difundir e reunir a inovação regional.</p>
                </div>
              </div>
              <div className="pillar fade-in" style={{ transitionDelay: '0.2s' }}>
                <div className="pillar__icon">
                  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="#1BBDE8" strokeWidth="1.5" />
                    <circle cx="30" cy="30" r="10" fill="none" stroke="#1BBDE8" strokeWidth="1.5" />
                    <line x1="30" y1="2" x2="30" y2="20" stroke="#5855A6" strokeWidth="1.5" />
                    <line x1="30" y1="40" x2="30" y2="58" stroke="#5855A6" strokeWidth="1.5" />
                    <line x1="2" y1="30" x2="20" y2="30" stroke="#5855A6" strokeWidth="1.5" />
                    <line x1="40" y1="30" x2="58" y2="30" stroke="#5855A6" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="pillar__title">Processo & Experiência</h4>
                  <p className="pillar__text">Metodologia estruturada para transformar ideias em soluções com impacto real.</p>
                </div>
              </div>
              <div className="pillar fade-in" style={{ transitionDelay: '0.3s' }}>
                <div className="pillar__icon">
                  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="#1BBDE8" strokeWidth="1.5" />
                    <polygon points="30,12 48,44 12,44" fill="none" stroke="#1BBDE8" strokeWidth="1.5" />
                    <polygon points="30,22 40,40 20,40" fill="rgba(88,85,166,0.2)" stroke="#5855A6" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <h4 className="pillar__title">Unidade & Força</h4>
                  <p className="pillar__text">Rede coesa de parceiros que agem juntos pela estabilidade e crescimento do ecossistema.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sobre__visual fade-in" style={{ transitionDelay: '0.15s' }}>
            <div className="sobre__logo-wrap">
              <img src={LOGO_VERT} alt="ChapHub vertical" className="sobre__logo-img" />
              <div className="sobre__glow"></div>
              <div className="sobre__ring sobre__ring--1"></div>
              <div className="sobre__ring sobre__ring--2"></div>
              <div className="sobre__ring sobre__ring--3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
