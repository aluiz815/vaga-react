import Header from '../../components/Header';
import Product from '../../components/Product/List';
import { useCart } from '../../Context/Cart';
import './styles.css';

const Checkout = () => {
  const {products} = useCart()
  const total = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);
  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
              <div className="col-2 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Nome no Cartão"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                  onChange={()=>{}}
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$ {total}</h3>
              </div>
              <div className="col-12">
                <button
                  onClick={() => {}}
                  className="btn btn-block btn-lg btn-primary"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="box col mb-4 box-sidebar">
              <h4>Minha Sacola ({products.length})</h4>

              <div className="row products">
              {products.map((p) => (
                  <Product product={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
