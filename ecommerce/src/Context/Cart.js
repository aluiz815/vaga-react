import React, { createContext,useState,  useContext } from 'react';

const cartContext = createContext();

const CartProvider= ({ children }) => {
  let products = []
  let [data,setDate] = useState([])
  const toggleProductToCart = ({product}) => {
    const index = data.findIndex(p => p.id === product.id)
    if (index !== -1) {
      data.splice(index, 1);
      setDate([...data])
    } else {
      products.push(product);
      setDate([...products,...data])
    }
  }

  return (
    <cartContext.Provider value={{ products:data,toggleProductToCart }}>
      {children}
    </cartContext.Provider>
  );
};


function useCart() {
  const context = useContext(cartContext);
  if (!cartContext) {
    throw new Error('useCart must be used within an AuthProvider');
  }
  return context;
}

export { CartProvider, useCart };