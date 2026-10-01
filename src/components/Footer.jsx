const BASE = '/chaphub/CLIENTE ECOSSISTEMA/Logos do Ecossistema de Inovação png';
const LOGO_H = `${BASE}/CHAPHUB-horizontal-branca.png`;
const SUB = [
  { src: `${BASE}/AGRO-branca.png`, alt: 'GT Agro' },
  { src: `${BASE}/SAÚDE-branca.png`, alt: 'GT Saúde' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <img src={LOGO_H} alt="ChapHub" height="36" />
          <p className="footer__tagline">Primeiro Ecossistema de Inovação<br />do Oeste Catarinense.</p>
        </div>
        <div className="footer__subbrands">
          {SUB.map((s) => <img key={s.alt} src={s.src} alt={s.alt} height="24" />)}
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 ChapHub — Ecossistema de Inovação de Chapecó. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
