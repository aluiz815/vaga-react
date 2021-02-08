import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'

function Success() {
  return (
    <>
    <Header/>
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="bg-primary text-center w-50 h-50 d-flex align-items-center justify-content-center flex-column ">
        <h1 className="text-white">Pedido Realizado Com Sucesso</h1>
        <Link to="/" className="btn btn-lg btn-dark">Voltar Para Home</Link>
      </div>
    </div>
  </>
  );
}

export default Success;