import useFadeIn from '../hooks/useFadeIn.js';
import OrbitaEcossistema from './OrbitaEcossistema.jsx';

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
              Primeiro ecossistema de inovação do Oeste Catarinense, o ChapHub nasceu em Chapecó/SC para conectar empresas, startups, instituições de ensino e governo. Um <strong className="text-cyan">ecossistema conectado</strong>, em que os GTs de Agro, Saúde e Educação orbitam o mesmo hub e unem a tradição agroindustrial ao futuro tecnológico.
            </p>
          </div>
          <div className="sobre__visual fade-in" style={{ transitionDelay: '0.15s' }}>
            <OrbitaEcossistema />
          </div>
        </div>
      </div>
    </section>
  );
}
