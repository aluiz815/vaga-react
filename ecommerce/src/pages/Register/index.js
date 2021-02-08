import { useState,useCallback } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Illustration from '../../assets/illustration.png';
import api from '../../services/api'
const Cadastro = () => {
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const handleSubmit = useCallback(async ()=>{
    await api.post('/users',{
      name,
      username,
      password,
    })
  },[name,username,password])
  return (
    <div className="h-100 bg-primary ">
      <Header hideCart />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco pra fazer o seu pet feliz.
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
              onChange={(e)=>setName(e.target.value)}
            />

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Usuario"
              onChange={(e)=>setUsername(e.target.value)}
            />

            <input
              type="password"
              className="form-control form-control-lg mb-3"
              placeholder="Senha"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <Link
              onClick={() => handleSubmit()}
              to="/checkout"
              className="btn btn-lg btn-block btn-secondary"
            >
              Finalizar Pedido
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
