import './styles.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Product = ({ product }) => {
  const [products,setProducts] = useState()
  const added = false;
  return (
    <div className="product col-3">
      <img src={product?.productImg} className="img-fluid align-center" alt="product" />
      <button
        onClick={() =>{}}
        className={`btn btn-${added ? 'secondary' : 'primary'} rounded-circle`}
      >
        {added ? '-' : '+'}
      </button>
      <h4>
        <label className="badge badge-primary">
          R$ {product?.price}
        </label>
      </h4>
      <small>
        <Link to={`/product/${product?.id}`}>
          <b>{product?.name}</b>
        </Link>
      </small>
    </div>
  );
};

export default Product;
