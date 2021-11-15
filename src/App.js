import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './Login' 
import Home from './Home' 

function App() {

  return (
    <Router>
  <div>
  <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>

  </div>
  </Router>
  );
}

export default App;
