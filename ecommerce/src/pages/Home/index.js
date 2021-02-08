import { useEffect,useState } from 'react';
import Header from '../../components/Header';
import axios from '../../services/api'
const Products = () => {
  const [products,setProducts]=useState()
  
  useEffect(()=>{
    async function getProducts() {
      const response = await axios.get('products')
      setProducts(response.data)
    }
    getProducts()
  },[])
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Produtos</h3>
            <br />
            <div className="row">
              {console.log(products)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
