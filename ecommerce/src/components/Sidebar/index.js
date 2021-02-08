import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dock from 'react-dock';
import './styles.css';
import { useCart } from '../../Context/Cart';
import { useAuth } from '../../Context/Auth';
import Product from '../Product/List'  
const Sidebar = () => {
  const history = useHistory();
  const [opened, setOpened] = useState(false);
  const {products} = useCart()
  const {user} = useAuth()
  const total = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);
  useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola ({products.length})</h5>

        <div className="row products">
        {products.map((p) => (
            <Product product={p} />
          ))}
        </div>

        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ {total}</h3>
          </div>
          <button
            onClick={() => {user ? history.push('/checkout') : history.push('/register')}}
            className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  );
};

export default Sidebar;
