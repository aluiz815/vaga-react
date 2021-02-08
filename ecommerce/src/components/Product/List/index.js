
import './styles.css';
import {useCart} from '../../../Context/Cart'
const Product = ({ product }) => {
  const {toggleProductToCart} = useCart()
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src={product?.productImg} className="img-fluid" alt="product" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">
              R$ {product?.price}
            </label>
          </h6>
          <small>
            <b>{product?.name}</b>
          </small>
        </div>
        <div className="col-3">
          <button
            onClick={() =>toggleProductToCart({product})}
            className="btn px-3 py-2 btn-secondary rounded-circle"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
