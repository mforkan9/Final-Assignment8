import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Details/Detail';
import NotFound from './NoMatch/NotFound';
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/details/:id'>
              <Detail></Detail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    
  );
}

export default App;
