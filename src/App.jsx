//feature-1
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import CreateAccount from "./components/pages/createAccount/CreateAccount";
import { Home } from "./components/pages/home/Home";

function App() {
    return ( 
        <div className = "app">
        
        <Router>
            <Switch>
              
                <Route exact path= "/"> <Home/> </Route>
                <Route exact path= "/register"> <CreateAccount/> </Route>
                
            </Switch> 

          </Router>

        </div>
    );
}

export default App;