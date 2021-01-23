import React from 'react';

const BotonWhatsapp = () => {
  const handleClickContacto = () => {
    console.log('enviando');
  };
  return <button onClick={handleClickContacto}>Contactame</button>;
};

export default BotonWhatsapp;
