import React from 'react';
import BannerContacto from './components/BannerContacto/BannerContacto';
import { Helmet } from 'react-helmet';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListadoServicios from './components/ListadoServicios/ListadoServicios';
import PrincipalesServicios from './components/PrincipalesServicios/PrincipalesServicios';

const App = () => {
  return (
    <div id="main-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Acarreos Manizales | Sitio web</title>
        <link rel="preload" />
        <meta
          name="description"
          content="Acarreos, trasteos baratos y economicos en Manizales, Todo tipo de encomiendas y traslado de elementos. Servicio de mudanzas. Contacto: 318 623 4572"
        />
        <link rel="canonical" href="https://acarreosenmanizales.com/" />
      </Helmet>
      <Header />
      <BotonWhatsapp />
      <PrincipalesServicios />
      <BannerContacto />
      <ListadoServicios />
      <Footer />
    </div>
  );
};

export default App;
