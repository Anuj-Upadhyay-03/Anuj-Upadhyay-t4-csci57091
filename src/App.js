
import './App.css';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import Profiledetails from './Components/Profiledetails';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/Profiledetails" component={Profiledetails}/>  
    <Route exact path="/Profile" component={Profile}/>  
      <Route exact path="/" component={Login}/>   
    </Switch>
  </Router>
  );
}

export default App;
