import useFadeIn from '../hooks/useFadeIn.js';
import SCOutlineMap from './SCOutlineMap.jsx';

export default function Chapeco() {
  useFadeIn();
  return (
    <section className="chapeco" id="chapeco">
      <div className="chapeco__bg-overlay"></div>
      <div className="container chapeco__container">
        <div className="chapeco__content fade-in">
          <h2 className="section-title">Chapecó,<br /><span className="text-cyan">Polo de Inovação</span></h2>
          <p className="chapeco__desc">
            Localizada no coração do Oeste Catarinense, Chapecó combina a força de uma economia agroindústrial robusta com um ecossistema tecnológico vibrante. Somos a cidade que une o campo ao código, o trator à inteligência artificial.
          </p>
          <ul className="chapeco__facts">
            <li className="fact">Articulação entre empresas, instituições de ensino e poder público</li>
            <li className="fact">Grupos de Trabalho temáticos que transformam demandas do setor em projetos</li>
            <li className="fact">Apoio a startups e à adoção de tecnologia na economia regional</li>
          </ul>
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
