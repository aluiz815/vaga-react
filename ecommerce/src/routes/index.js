import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import '../styles/global.css';
import Home from '../pages/Home';
import Sidebar from '../components/Sidebar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Product from '../pages/Product';
const Routes = () => {
  return (
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/product/:id"  component={Product}/>
            <Route path="/login"  component={Login}/>
            <Route path="/register"  component={Register}/>
          </Switch>
          <Sidebar />
        </Router>
  );
};

export default Routes;
