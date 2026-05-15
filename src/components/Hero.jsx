import useHeroParticles from '../hooks/useHeroParticles.js';
import useTyped from '../hooks/useTyped.js';
import { typedWords } from '../data/typedWords.js';

export default function Hero() {
  const canvasRef = useHeroParticles();
  const typed = useTyped(typedWords);

  return (
    <section className="hero" id="hero">
      <canvas className="hero__canvas" id="heroCanvas" ref={canvasRef}></canvas>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <div className="hero__tag">Chapecó · Santa Catarina · Brasil</div>
        <h1 className="hero__title">
          Primeiro Ecossistema de<br />Inovação do<br />
          <span className="hero__title-gradient">Oeste Catarinense.</span>
        </h1>
        <p className="hero__sub">
          <span className="typed-wrapper">
            <span id="typed">{typed}</span><span className="typed-cursor">|</span>
          </span>
        </p>
        <div className="hero__ctas">
          <a href="#sobre" className="btn btn--primary">Conheça o Ecossistema</a>
          <a href="#camaras" className="btn btn--ghost">Nossas Câmaras</a>
        </div>
      </div>
      <div className="hero__triangle-wrap">
        <svg className="hero__triangle" viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1BBDE8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5855A6" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <polygon points="100,10 190,210 10,210" fill="none" stroke="url(#triGrad)" strokeWidth="2" filter="url(#glow)" />
          <polygon points="100,40 165,190 35,190" fill="none" stroke="url(#triGrad)" strokeWidth="1" opacity="0.5" />
          <polygon points="100,70 140,170 60,170" fill="rgba(27,189,232,0.05)" stroke="url(#triGrad)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      <a href="#sobre" className="hero__scroll">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
