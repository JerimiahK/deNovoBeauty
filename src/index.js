import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/Atoms/ScrollToTop/ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
