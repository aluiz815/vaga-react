import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import '../styles/global.css';
import Home from '../pages/Home';
import Sidebar from '../components/Sidebar';
const Routes = () => {
  return (
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
          <Sidebar />
        </Router>
  );
};

export default Routes;
