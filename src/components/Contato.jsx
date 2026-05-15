import { useRef, useState } from 'react';
import useFadeIn from '../hooks/useFadeIn.js';

export default function Contato() {
  useFadeIn();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      formRef.current?.reset();
      setSending(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1400);
  };

  return (
    <section className="contato" id="contato">
      <div className="contato__bg"></div>
      <div className="container contato__container">
        <div className="contato__info fade-in">
          <span className="section-label">Faça Parte</span>
          <h2 className="section-title">Junte-se ao <span className="text-cyan">Ecossistema</span></h2>
          <p className="contato__desc">
            Seja uma empresa, startup, pesquisador ou instituição — há um lugar para você no ChapHub. Venha construir o futuro de Chapecó.
          </p>
          <div className="contato__social">
            <a href="https://www.linkedin.com/company/chaphub" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/chaphub_" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>
          <div className="contato__address">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Chapecó, SC — Oeste Catarinense, Brasil
          </div>
        </div>
        <div className="contato__form-wrap fade-in" style={{ transitionDelay: '0.15s' }}>
          <form className="contato__form" ref={formRef} onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seu@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="org">Organização</label>
              <input type="text" id="org" name="org" placeholder="Empresa, startup ou instituição" />
            </div>
            <div className="form-group">
              <label htmlFor="msg">Mensagem</label>
              <textarea id="msg" name="msg" rows="4" placeholder="Como podemos colaborar?" required></textarea>
            </div>
            <button type="submit" className="btn btn--gradient btn--full" disabled={sending}>
              {sending ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            <div className="form-success" style={{ display: showSuccess ? 'block' : 'none' }}>
              Mensagem enviada! Em breve entraremos em contato.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
