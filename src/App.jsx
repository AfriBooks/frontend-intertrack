//feature-1
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import { BestRomance } from "./components/pages/bestRomance/BestRomance";
import { BestSellerBook } from "./components/pages/bestSellerBook/BestSellerBook";
import { BookDetails } from "./components/pages/bookDetails/BookDetails";
import CreateAccount from "./components/pages/createAccount/CreateAccount";
import { CreateAccountForm } from "./components/pages/createAccountForm/CreateAccountForm";
import { DeliveryInfo } from "./components/pages/deliveryInfo/DeliveryInfo";
import { DescBest } from "./components/pages/descBest/DescBest";
import { FavGenreThree } from "./components/pages/favGenreThree/FavGenreThree";
import { FavGenreTwo } from "./components/pages/favGenreTwo/FavGenreTwo";
import { FavoriteGenre } from "./components/pages/favoriteGenre/FavoriteGenre";
import { Genre } from "./components/pages/genre/Genre";
import { Home } from "./components/pages/home/Home";
import { Library } from "./components/pages/library/Library";
import { NewAdded } from "./components/pages/newAdded/NewAdded";
import { NewPassword } from "./components/pages/newPassword/NewPassword";
import { OrderSuccess } from "./components/pages/orderSuccess/OrderSuccess";
import { PasswordReset } from "./components/pages/passwordReset/PasswordReset";
import { PaymentInfo } from "./components/pages/paymentInfo/PaymentInfo";
import { PopularNow } from "./components/pages/popularNow/PopularNow";
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
                <Route exact path= "/product/:id"> <BookDetails/> </Route>
                <Route exact path= "/popular-now"> <PopularNow/> </Route>
                <Route exact path= "/best-seller"> <BestSellerBook/> </Route>
                <Route exact path= "/new-added"> <NewAdded/> </Route>
                <Route exact path= "/delivery-info"> <DeliveryInfo/> </Route>
                <Route exact path= "/payment-info"> <PaymentInfo/> </Route>
                <Route exact path= "/order-success"> <OrderSuccess/> </Route>
                <Route exact path= "/library"> <Library/> </Route>
                <Route exact path= "/best-romance"> <BestRomance/> </Route>
                <Route exact path= "/genre"> <Genre/> </Route>
                
                
            </Switch> 

          </Router>

        </div>
    );
}

export default App;