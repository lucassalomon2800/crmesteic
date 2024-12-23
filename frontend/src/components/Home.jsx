import React from 'react';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Beauty CRM</h1>
      <a href="/customers/add" className="buttontop">Nuevo cliente</a>
      <a href="/customers" className="buttontop">Clientes</a>
      <div className="button-container">
        <a href="/info/rips" className="button">Ver Rips</a>
        <a href="/info/facturas" className="button">Ver facturas</a>
        <a href="/appointments" className="button">Agendar</a>
      </div>
    </div>
  );
}

export default Home;
