import React from 'react'

import "./CreateAccountForm.css"
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

export const CreateAccountForm = () => {

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
      
    <div className='createAccountForm'>

    

    <div className='createAccountForm-main-div'>

    <div className='createAccountForm-div-left'>
    
        <div className='createAccountForm-bar'>
            <h3>AfriBook</h3>
        </div>

        <div className='createAccountForm-div'>
            <div className='createAccountForm-div-inner'>
                <div className='createAccountForm-h3-div'>
                    <h3 className='createAccountForm-h3'>Create account</h3>
                    <p className='createAccountForm-para-1'>Fill in the form below to create an account</p>
                </div>
                
                
                <div class="createAccountForm-container">
                    

                    <form className='createAccountForm-form' action="#" id="signup-form" name="signup-form">
                        
                        <div className='createAccountForm-input-div'>
                            <label id="createAccountForm-name-label">Name</label><br />
                            <input className='createAccountForm-input' id="name" type="text" name="name" required placeholder="Enter your name"/>
                        </div>
                        
                        <div className='createAccountForm-input-div'>
                            <label className='createAccountForm-email-label' id="email-label">Email address</label><br />
                            <input className='createAccountForm-input' id="email" type="email" name="email" required placeholder="Enter your email address"/>
                        </div>

                        <div className='createAccountForm-input-div'>
                            <label className='createAccountForm-password-label' id="password-label">Password</label><br/>
                            <input className='createAccountForm-input' id="password" type="password" name="password" required placeholder="Enter your password"/>
                        </div>

                        <button className='createAccountForm-sign-up-btn'><Link to="/verify-email">Sign up</Link></button>

                    </form>

                    <p className='createAccountForm-para-2'>Already have an account? Login</p>

                </div>
                
                
                

            </div>
        </div>
    </div>

    <div className='createAccountForm-div-right'>
        <div className='createAccountForm-card'>
        {getProducts.length ? <div className='register-card-section'>{getProducts}</div> : ""}
        </div>
    </div>

    </div>
        
    </div>
  )
}

// {getProducts.length ? <div className='register-card-section'>{getProducts}</div> : ""}
