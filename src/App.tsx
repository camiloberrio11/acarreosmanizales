import React from 'react';
import BannerContacto from './components/BannerContacto/BannerContacto';
import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';
import Footer from './components/Footer/Footer';
import ListadoServicios from './components/ListadoServicios/ListadoServicios';
import PrincipalesServicios from './components/PrincipalesServicios/PrincipalesServicios';

const App = () => {
  return (
    <div id="main-wrapper">
      <BannerPrincipal />
      <PrincipalesServicios />
      <BannerContacto />
      <ListadoServicios />
      <Footer />
    </div>
  );
};

export default App;
