import React from 'react'
import "./SignInTwo.css"
import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { useState } from 'react'
import { logInUser } from '../../../features/auth/signInSlice'


export const SignInTwo = () => {

    const [loading, setLoading] = useState(false);
    const [ signIn, setsignIn ] = useState({
        email: "",
        password: "",
    })
    console.log("user:", signIn)

    const dispatch = useDispatch();

    const authSignIn = useSelector(state => state.authSignIn);

    console.log(authSignIn)


    const handleSignIn = (e) => {
        e.preventDefault()
        setLoading(true);
        dispatch(logInUser(signIn))
        setLoading(false);
    }

    const {items, status} = useSelector(state => state.products);
    console.log(items)
  
    const getProducts = items.map(product => {
       
            
      return (
  
          <div className="sign-in-card--div">
                      
              <div key={product._id} className="sign-in-product">
                  
                  <div className="sign-in-card--img--div">
                      <img className='sign-in-card--img' src= {product.cover} alt='' />
                  </div>
                  
  
              </div>
          </div>
  
        )
  })

  return (
    <div className='signInTwo'>

        

        <div className='sign-in-account-main-div-two'>

        <div className='sign-in-account-div-left-two'>

            <div className='signin-two-bar'>
               <div className='signinTwo-afribook'> <h3><Link to='/'> AfriBook </Link></h3></div>
            
            </div>

            <div className='signin-two-form-div'>
                <div className='signin-two-form-div-inner'>
                    <div className='signin-two-h3-div'><h3 className='signin-two-h3'>Welcome back</h3></div>
                    
        

                    <form onSubmit={handleSignIn} className="signin-two-form">
                        <label id="sign-in-two-name-label">Email</label><br />
                        <input className='input-signin-two' type ="email" placeholder='email' onChange={(e) =>  setsignIn({...signIn, email: e.target.value})} />

                        <label className='signi-in-two-name-label' id="password-label">Password</label><br/>
                        <input className='input-signin-two' type ="password" placeholder='password' onChange={(e) =>  setsignIn({...signIn, password: e.target.value})} /><br/>

                        <div className='checkbox-two-div-1'>
                        <div className='checkbox-two-div-2'>
                            <input className='checkbox-two' type="checkbox" id="remember-me" name="" value="" />
                            <label for="checkbox-two">Remember me</label>
                        </div>
                        <p className='forgot-password'><Link to="/password-reset"> Forgot password? </Link></p>
                        </div>

                        <button className='sign-up-two-btn' disabled={loading}>{loading ? "Please wait..": "Sign in"}</button>

                   
                    </form>
                    
                    <p className='sign-in-account-para-two-2'>Don't have an account?<Link to="/create-account-form"> Sign up </Link></p>

                </div>
            </div>
        </div>

        <div className='sign-in-account-div-right-two'>
            <div className='sign-in-account-card'>
            {getProducts.length ? <div className='sign-in-card-section'>{getProducts}</div> : ""}
            </div>
        </div>

        </div>

    </div>
  )
}

/* <form className='signin-two-form' onChange={handleSignIn} id="signin-two-form" name="signin-two-form">
                            
<div className='input-two-div'>
    <label className='email-label' id="email-label">Email</label><br/>
    <input className='input-signin-two' id="email" type="email" name="email" required placeholder="Enter your email address" 
    onChange={(e) => setsignIn({...signIn, email: e.target.value})} /><br/>
</div>

<div className='input-two-div'>
    <label className='password-label' id="password-label">Password</label><br/>
    <input className='input-signin-two' id="password" type="password" name="password" required placeholder="Enter your password" 
     onChange={(e) => setsignIn({...signIn, password: e.target.value})} /><br/>
</div>

<div className='checkbox-two-div-1'>
    <div className='checkbox-two-div-2'>
        <input className='checkbox-two' type="checkbox" id="remember-me" name="" value="" />
        <label for="checkbox-two">Remember me</label>
    </div>
    <p className='forgot-password'><Link to="/password-reset"> Forgot password? </Link></p>
</div>

<button className='sign-up-two-btn'>Sign in</button>

</form> */
