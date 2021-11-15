import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './Login' 
import Home from './Home' 

function App() {

  return (
  <div>
    
    <Router>
     <Switch>
        <Route path="/">
           <Login />
        </Route>
        <Route path="/home">
           <Home />
        </Route>
     </Switch>
</Router>
  </div>

  );
}

export default App;
