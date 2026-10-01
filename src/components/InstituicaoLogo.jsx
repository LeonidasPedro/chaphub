export default function InstituicaoLogo({ name, logo }) {
  return (
    <li className="instituicao-logo" title={name}>
      {logo ? <img src={logo} alt={name} loading="lazy" /> : <span>{name}</span>}
    </li>
  );
}
