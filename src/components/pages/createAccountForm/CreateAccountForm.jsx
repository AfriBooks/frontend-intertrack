import React from 'react'
import { Header } from '../../layout/header/Header'
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

    <Header/>

    <div className='create-account-div'>

    <div className='create-account-div-left'>
    
        <div className='create-account-bar'>
            <h3>AfriBook</h3>
        </div>

        <div className='create-account-form-div'>
            <div className='create-account-form-div-inner'>
                <h3 className='Create account-h3'>Create account</h3>
                <p className='create-account-para-1'>Fill in the form below to create an account</p>
                
                <div class="form-container">

                    <form action="#" id="signup-form" name="signup-form">
                        
                        <div className='input-div'>
                            <label id="name-label">Full Name</label><br/>
                            <input className='input' id="name" type="text" name="name" required placeholder="Enter your name"/><br/>
                        </div>
                        
                        <div className='input-div'>
                            <label className='email-label' id="email-label">Enter your email</label><br/>
                            <input className='input' id="email" type="email" name="email" required placeholder="Enter your email address"/><br/>
                        </div>

                        <div className='input-div'>
                            <label className='password-label' id="password-label">Password</label><br/>
                            <input className='input' id="password" type="password" name="password" required placeholder="Enter your password"/><br/>
                        </div>

                        <button className='sign-up-btn'><Link to="/verify-email">Sign up</Link></button>

                    </form>

                </div>
                
                
                <p className='create-account-para-2'>Already have an account? Login</p>

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

// {getProducts.length ? <div className='register-card-section'>{getProducts}</div> : ""}
