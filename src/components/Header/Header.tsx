import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header-layout">
      <div className="sec-heading light mx-auto">
        <h2 className="animate__animated animate__backInLeft">Trasteos - Acarreos Manizales</h2>
        <a
          className="animate__animated animate__backInDown partner-info phone-contact "
          href="http://wa.me/+573186234572?text=Hola, buen día! Estoy pendiente de realizar un acarreo y quisiera recibir más información. Gracias"
          target="_blank"
          rel="noreferrer"
        >
          318 623 4572
        </a>
      </div>
    </div>
  );
};

export default Header;
