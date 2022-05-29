import React from 'react'
import "./SignInTwo.css"
import { useSelector } from 'react-redux'
import { Header } from '../../layout/header/Header';

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

        <Header/>

        <div className='create-account-div'>

        <div className='create-account-div-left'>

            <div className='signin-two-bar'>
                <h3>AfriBook</h3>
            
            </div>

            <div className='signin-two-form-div'>
                <div className='signin-two-form-div-inner'>
                    <h3 className='signin-two-h3'>Wellcome back</h3>
                    
                    <div class="form-container">

                        <form action="#" id="signin-form" name="signin-form">
                            
                            <div className='input-div'>
                                <label className='email-label' id="email-label">Email</label><br/>
                                <input className='input-signin-two' id="email" type="email" name="email" required placeholder="Enter your email address"/><br/>
                            </div>

                            <div className='input-div'>
                                <label className='password-label' id="password-label">Password</label><br/>
                                <input className='input-signin-two' id="password" type="password" name="password" required placeholder="Enter your password"/><br/>
                            </div>

                            <div className='checkbox-div-1'>
                                <div className='checkbox-div-2'>
                                    <input className='checkbox' type="checkbox" id="remember-me" name="" value="" />
                                    <label for="apple">Remember me</label>
                                </div>
                                <p className='forgot-password'>Forgot password?</p>
                            </div>

                            <button className='sign-up-btn'>Sign in</button>

                        </form>

                    </div>
                    
                    <p className='create-account-para-2'>Don't have an account? Sign up</p>

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
