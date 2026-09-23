import useFadeIn from '../hooks/useFadeIn.js';
import { governanca } from '../data/governanca.js';

export default function Governanca() {
  useFadeIn();
  return (
    <section className="governanca" id="governanca">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Governança</span>
          <h2 className="section-title">Instituições e governos que acreditam na <span className="text-cyan">inovação</span> de Chapecó</h2>
          <p className="section-desc">Instituições que fazem parte da governança no ecossistema de inovação de Chapecó</p>
        </div>
        <div className="governanca__grid fade-in">
          {governanca.map(({ name, logo }) => (
            <div key={name} className="governanca-item">
              <div className="governanca-logo" title={name}>
                {logo ? <img src={logo} alt={name} loading="lazy" /> : <span>{name}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
