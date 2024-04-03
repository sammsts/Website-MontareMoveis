import "./ui/styles/globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './ui/components/header/Header';
import Footer from './ui/components/footer/Footer';
import ScrollToTop from "react-scroll-to-top";

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentDate = new Date();
const yearFooter = currentDate.toLocaleDateString('pt-BR', { year: 'numeric' });

root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer yearFooter={yearFooter} />
    <ScrollToTop smooth color="black" width="40" height="35" />
  </React.StrictMode>
);