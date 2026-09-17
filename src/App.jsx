import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Sobre from './components/Sobre.jsx';
import Numeros from './components/Numeros.jsx';
import Gts from './components/Gts.jsx';
import Ecossistema from './components/Ecossistema.jsx';
import Chapeco from './components/Chapeco.jsx';
import Governanca from './components/Governanca.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';
import useSmoothScroll from './hooks/useSmoothScroll.js';

export default function App() {
  useSmoothScroll();
  useEffect(() => { document.title = 'ChapHub'; }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Sobre />
      <Numeros />
      <Gts />
      <Ecossistema />
      <Chapeco />
      <Governanca />
      <Contato />
      <Footer />
    </>
  );
}
