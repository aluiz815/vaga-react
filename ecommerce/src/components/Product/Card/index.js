import './styles.css';
import {Link} from 'react-router-dom'
import {useCart} from '../../../Context/Cart'
const Product = ({ product }) => {
  const {products,toggleProductToCart} = useCart()
  const added = products.findIndex((p) => p.id === product.id) !== -1;
  return (
    <div className="product col-3">
      <img src={product?.productImg} className="img-fluid align-center" alt="product" />
      <button
        onClick={() =>toggleProductToCart({product})}
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
