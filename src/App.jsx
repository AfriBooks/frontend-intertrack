//feature-1
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import CreateAccount from "./components/pages/createAccount/CreateAccount";
import { CreateAccountForm } from "./components/pages/createAccountForm/CreateAccountForm";
import { Home } from "./components/pages/home/Home";
import { SignInOne } from "./components/pages/signInOne/SignInOne";
import { VerifyEmail } from "./components/pages/verifyEmail/VerifyEmail";

function App() {
    return ( 
        <div className = "app">
        
        <Router>
            <Switch>
              
                <Route exact path= "/"> <Home/> </Route>
                <Route exact path= "/register"> <CreateAccount/> </Route>
                <Route exact path= "/register-form"> <CreateAccountForm/> </Route>
                <Route exact path= "/verify-email"> <VerifyEmail/> </Route>
                <Route exact path= "/sign-in-one"> <SignInOne/> </Route>
                
            </Switch> 

          </Router>

        </div>
    );
}

export default App;