import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import Header from './components/header';
import ContainerBurguer from './components/containerBurguer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header/>
  <ContainerBurguer/>
  </React.StrictMode>
);



