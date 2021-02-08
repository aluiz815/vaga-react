import { BrowserRouter as Router, Switch} from 'react-router-dom';
import '../styles/global.css';
import Home from '../pages/Home';
import Sidebar from '../components/Sidebar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import AppProvider from '../Context/index';
import Route from './Route'
const Routes = () => {
  return (
        <AppProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/product/:id"  component={Product}/>
              <Route path="/login"  component={Login} isLogin/>
              <Route path="/register"  component={Register} isRegister/>
              <Route path="/checkout"  component={Checkout} isPrivate/>
            </Switch>
            <Sidebar />
          </Router>
        </AppProvider>
  );
};

export default Routes;
