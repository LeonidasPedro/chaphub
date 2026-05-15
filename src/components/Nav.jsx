import { useEffect, useState } from 'react';
import useNavScroll from '../hooks/useNavScroll.js';

const LOGO = '/chaphub/CLIENTE ECOSSISTEMA/Logos do Ecossistema de Inovação png/CHAPHUB-horizontal-branca.png';

export default function Nav() {
  const scrolled = useNavScroll(60);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__container">
        <a href="#" className="nav__logo" onClick={close}>
          <img src={LOGO} alt="ChapHub" height="40" />
        </a>
        <nav className={`nav__links${open ? ' open' : ''}`} id="navLinks">
          <a href="#sobre" className="nav__link" onClick={close}>Sobre</a>
          <a href="#camaras" className="nav__link" onClick={close}>Câmaras</a>
          <a href="#ecossistema" className="nav__link" onClick={close}>Ecossistema</a>
          <a href="#chapeco" className="nav__link" onClick={close}>Localização</a>
          <a href="#contato" className="nav__link" onClick={close}>Contato</a>
        </nav>
        <a href="#contato" className="btn btn--outline nav__cta hide-mobile">Faça Parte</a>
        <button
          className={`nav__hamburger${open ? ' open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
