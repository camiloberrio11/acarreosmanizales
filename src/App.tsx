import React from 'react';
import BannerContacto from './components/BannerContacto/BannerContacto';
// import BannerPrincipal from './components/BannerPrincipal/BannerPrincipal';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListadoServicios from './components/ListadoServicios/ListadoServicios';
import PrincipalesServicios from './components/PrincipalesServicios/PrincipalesServicios';

const App = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <BotonWhatsapp />
      {/* <BannerPrincipal /> */}
      <PrincipalesServicios />
      <BannerContacto />
      <ListadoServicios />
      <Footer />
    </div>
  );
};

export default App;
