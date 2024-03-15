import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Fabricacoes from './pages/fabricacoes/Fabricacoes.jsx';
import Sobre from './pages/sobre/Sobre.jsx';
import Contato from './pages/contato/Contato.jsx';

const RoutesApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/fabricacoes" element={<Fabricacoes />} index />
        <Route path="/sobre" element={<Sobre />} index />
        <Route path="/contato" element={<Contato />} index />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;