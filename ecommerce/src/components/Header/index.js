import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.png'
import { useAuth } from '../../Context/Auth';
const Header = ({hideCart }) => {
  const {user,signOut} = useAuth()
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };
  return (
    <div className="col-12 bg-dark w-100 d-flex justify-content-between align-items-center ">
      <header className="py-4 px-4 text-center d-flex justify-content-center  align-items-center">
        <Link className="w-25" to="/">
          <img src={Logo} className="img-fluid" /> 
        </Link>
      </header>
      <div className="d-flex align-items-center">
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn h-25 btn-secondary mr-4"
        >
          <span className="mdi mdi-cart"></span> 5 Ítens
        </button>
      )}
        {user &&(
          <>
          <div className="d-flex align-items-center">
            <img src={user.user.avatar} className="rounded-circle avatar-img" />
            <p className="ml-4 text-white mt-3">{user.user.name}</p>
            <button onClick={()=> signOut()} className="ml-4 btn btn btn-lg btn-secondary">Logout</button>
          </div>
          </>
        )} 
      </div>
      
    </div>
  );
};

export default Header;
