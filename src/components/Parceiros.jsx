import useFadeIn from '../hooks/useFadeIn.js';
import { parceiros } from '../data/parceiros.js';

export default function Parceiros() {
  useFadeIn();
  return (
    <section className="parceiros" id="parceiros">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Parceiros</span>
          <h2 className="section-title">Quem Constrói o <span className="text-cyan">Ecossistema</span></h2>
          <p className="section-desc">Empresas, instituições e governos que acreditam na inovação de Chapecó.</p>
        </div>
        <div className="parceiros__grid fade-in">
          {parceiros.map((name) => (
            <div key={name} className="parceiro-item">
              <div className="parceiro-logo"><span>{name}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
