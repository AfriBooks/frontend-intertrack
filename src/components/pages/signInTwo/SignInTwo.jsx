import React from 'react'
import "./SignInTwo.css"
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

export const SignInTwo = () => {

    const {items, status} = useSelector(state => state.products);
  
    const getProducts = items.map((product) => {
            
      return (
  
          <div className="register-card--div">
                      
              <div key={product.id} className="product">
                  
                  <div className="card--img--div">
                      <img className='card--img' src= {product.book_image} alt='' />
                  </div>
                  
  
              </div>
          </div>
  
        )
  })

  return (
    <div className='signInTwo'>

        

        <div className='create-account-div'>

        <div className='create-account-div-left'>

            <div className='signin-two-bar'>
               <div className='signinTwo-afribook'> <h3>AfriBook</h3></div>
            
            </div>

            <div className='signin-two-form-div'>
                <div className='signin-two-form-div-inner'>
                    <div className='signin-two-h3-div'><h3 className='signin-two-h3'>Wellcome back</h3></div>
                    
                    <div class="form-two-container">

                        <form className='signin-two-form' action="#" id="signin-two-form" name="signin-two-form">
                            
                            <div className='input-two-div'>
                                <label className='email-label' id="email-label">Email</label><br/>
                                <input className='input-signin-two' id="email" type="email" name="email" required placeholder="Enter your email address"/><br/>
                            </div>

                            <div className='input-two-div'>
                                <label className='password-label' id="password-label">Password</label><br/>
                                <input className='input-signin-two' id="password" type="password" name="password" required placeholder="Enter your password"/><br/>
                            </div>

                            <div className='checkbox-two-div-1'>
                                <div className='checkbox-two-div-2'>
                                    <input className='checkbox-two' type="checkbox" id="remember-me" name="" value="" />
                                    <label for="checkbox-two">Remember me</label>
                                </div>
                                <p className='forgot-password'><Link to="/password-reset"> Forgot password? </Link></p>
                            </div>

                            <button className='sign-up-two-btn'>Sign in</button>

                        </form>

                    </div>
                    
                    <p className='create-account-para-two-2'>Don't have an account? Sign up</p>

                </div>
            </div>
        </div>

        <div className='create-account-div-right'>
            <div className='create-account-card'>
            {getProducts.length ? <div className='register-card-section'>{getProducts}</div> : ""}
            </div>
        </div>

        </div>

    </div>
  )
}
