import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Dock from 'react-dock';
import './styles.css';

const Sidebar = () => {
  const history = useHistory();
  const [opened, setOpened] = useState(false);
  const [products,setProducts] = useState()
  const [user,setUser] = useState()
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
        <h5>Minha Sacola (5)</h5>

        <div className="row products">
          {console.log(products)}
        </div>

        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ 5</h3>
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
