import React, { useEffect, useCallback, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api'
import Card from '../../components/Product/Card'
import './styles.css'
const Product = ({match}) => {
  const [product,setProduct] = useState()
  const {id} = match.params
  const getProduct = useCallback(async ()=>{
    const response = await api.get(`/products/${id}`)
    return setProduct(response.data)
  },[id])
  useEffect(()=>{
    getProduct()
  },[getProduct])
  return (
    <>
      <Header/>
      <div className="container d-flex justify-content-center product">
        <Card product={product}/>
      </div>
      <div className="h-50 w-100">
        <h1 className="text-center">Avaliações</h1>
        {product && product?.avaliacoes.length !== 0 ? (
          product.avaliacoes.map(avaliacao => (
            <div className="d-flex justify-content-center align-items-center">
            <div className="border border-info w-25 rounded p-5 mb-2">
              <h3 className="font-weight-bold">{avaliacao.description}</h3>
            </div>
          </div>
          ))
        ):  <p className="text-center mt-5">Nao existe avaliacaoes</p>}
       
      </div>
    </>
  );
}

export default Product;