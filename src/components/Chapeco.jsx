import useFadeIn from '../hooks/useFadeIn.js';
import SCOutlineMap from './SCOutlineMap.jsx';

const DADOS = [
  { val: '275.959', key: 'habitantes' },
  { val: 'R$ 17,6 bi', key: 'PIB municipal' },
  { val: '46.180', key: 'empresas ativas' },
];

export default function Chapeco() {
  useFadeIn();
  return (
    <section className="chapeco" id="chapeco">
      <div className="chapeco__map" aria-hidden="true">
        <SCOutlineMap />
      </div>
      <div className="container chapeco__container">
        <div className="chapeco__content fade-in">
          <h2 className="section-title">Chapecó,<br /><span className="text-cyan">Polo de Inovação</span></h2>
          <p className="chapeco__desc">
            Localizada no coração do Oeste Catarinense, Chapecó combina a força de uma economia agroindústrial robusta com um ecossistema tecnológico vibrante. Somos a cidade que une o campo ao código, o trator à inteligência artificial.
          </p>
        </div>
        <dl className="chapeco__dados fade-in" style={{ transitionDelay: '0.15s' }}>
          {DADOS.map((d) => (
            <div key={d.key} className="dado">
              <dt className="dado__val">{d.val}</dt>
              <dd className="dado__key">{d.key}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
