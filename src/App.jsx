import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Servicos from "./pages/Servicos/Servicos.jsx";
import Contato from "./pages/Contato/Contato.jsx";

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <ScrollToTopButton />
    </>
  )
}

export default App
