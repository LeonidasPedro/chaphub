import useFadeIn from '../hooks/useFadeIn.js';
import { governanca } from '../data/governanca.js';

export default function Governanca() {
  useFadeIn();
  return (
    <section className="governanca" id="governanca">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">Governança</span>
          <h2 className="section-title">Governança</h2>
          <p className="section-desc">Instituições que fazem parte da governança no ecossistema de inovação de Chapecó</p>
        </div>
        <div className="governanca__grid fade-in">
          {governanca.map((name) => (
            <div key={name} className="governanca-item">
              <div className="governanca-logo"><span>{name}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
