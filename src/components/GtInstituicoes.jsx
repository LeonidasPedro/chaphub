import InstituicaoLogo from './InstituicaoLogo.jsx';
import { instituicoes } from '../data/instituicoes.js';

export default function GtInstituicoes({ ids }) {
  if (!ids?.length) return null;
  return (
    <div className="gt-instituicoes">
      <span className="gt-instituicoes__label">Instituições participantes</span>
      <ul className="gt-instituicoes__grid">
        {ids.map((id) => <InstituicaoLogo key={id} {...instituicoes[id]} />)}
      </ul>
    </div>
  );
}
