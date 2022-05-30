//feature-1
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import CreateAccount from "./components/pages/createAccount/CreateAccount";
import { CreateAccountForm } from "./components/pages/createAccountForm/CreateAccountForm";
import { DescBest } from "./components/pages/descBest/DescBest";
import { FavGenreThree } from "./components/pages/favGenreThree/FavGenreThree";
import { FavGenreTwo } from "./components/pages/favGenreTwo/FavGenreTwo";
import { FavoriteGenre } from "./components/pages/favoriteGenre/FavoriteGenre";
import { Home } from "./components/pages/home/Home";
import { NewPassword } from "./components/pages/newPassword/NewPassword";
import { PasswordReset } from "./components/pages/passwordReset/PasswordReset";
import { SignInOne } from "./components/pages/signInOne/SignInOne";
import { SignInTwo } from "./components/pages/signInTwo/SignInTwo";
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
                <Route exact path= "/sign-in-two"> <SignInTwo/> </Route>
                <Route exact path= "/password-reset"> <PasswordReset/> </Route>
                <Route exact path= "/new-password"> <NewPassword/> </Route>
                <Route exact path= "/desc-best"> <DescBest/> </Route>
                <Route exact path= "/fav-genre"> <FavoriteGenre/> </Route>
                <Route exact path= "/fav-genre-two"> <FavGenreTwo/> </Route>
                <Route exact path= "/fav-genre-three"> <FavGenreThree/> </Route>
                
                
            </Switch> 

          </Router>

        </div>
    );
}

export default App;