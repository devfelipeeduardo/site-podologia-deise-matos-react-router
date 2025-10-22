import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Servicos from "./pages/Servicos/Servicos.jsx";
import Contato from "./pages/Contato/Contato.jsx";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
