import "./ui/styles/globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './ui/components/header/Header';
import Footer from './ui/components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentDate = new Date();
const yearFooter = currentDate.toLocaleDateString('pt-BR', { year: 'numeric' });

root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer yearFooter={yearFooter} />
  </React.StrictMode>
);