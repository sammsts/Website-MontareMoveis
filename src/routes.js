import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Fabricacoes from './pages/fabricacoes/Fabricacoes.jsx';
import Sobre from './pages/sobre/Sobre.jsx';
import Contato from './pages/contato/Contato.jsx';
import Parceiros from './pages/parceiros/Parceiros.jsx';
import PageNotFound from './ui/components/pagenotfound/PageNotFound.jsx';
import FabricacoesMidia from './pages/fabricacoes/manufacturingimages/FabricacoesMidia.jsx';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/fabricacoes" element={<Fabricacoes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/fabricacoesmidia" element={<FabricacoesMidia />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;