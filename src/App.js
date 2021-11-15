import {BrowserRouter as Router, Route,Routes, Switch} from 'react-router-dom';
import Login from './Login' 
import Home from './Home' 

function App() {

  return (
  <div>
     <Router>
       <Routes>
         <Route />
         <Route exact path="/" element={<Login/>}/>
         <Route exact path="/home" element={<Home/>}/>

       </Routes>
     </Router>
  </div>

  );
}

export default App;
