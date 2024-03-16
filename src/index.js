import "./ui/styles/globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './ui/components/header/Header';
import Footer from './ui/components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);