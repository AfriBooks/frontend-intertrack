import React from 'react'
import "./PasswordReset.css"
import { useSelector } from 'react-redux'
import {BsArrowLeft} from "react-icons/bs"
import {Link} from "react-router-dom"

export const PasswordReset = () => {

    const {items, status} = useSelector(state => state.products);
  
    const getProducts = items.map((product) => {
            
      return (
  
          <div className="register-card--div">
                      
              <div key={product.id} className="product">
                  
                  <div className="card--img--div">
                      <img className='card--img' src= {product.cover} alt='' />
                  </div>
                  
  
              </div>
          </div>
  
        )
  })

  return (
    <div className='passwordReset'>

        

        <div className='create-account-div'>

        <div className='create-account-div-left'>

            <div className='create-account-bar'>
                <h3>AfriBook</h3>
                <BsArrowLeft className='back-arrow'/><span className='back-span'>Back</span>
            </div>

            <div className='password-reset-form-div'>
                <div className='password-reset-form-div-inner'>
                    <h3 className='password-reset-h3'>Password reset</h3>
                    <p className='password-reset-para-1'>Enter your email and we will send you a reset link.</p>
                    <div className='input-div'>
                        <input className='input-password-reset' id="email" type="email" name="email" required placeholder="Enter your email"/><br/>
                    </div>
                    <p className='password-reset-para-2'>Didn't get any Reset link? Resend email</p>
                    
                    <button className='password-reset-sign-up-btn'><Link to="/new-password"> Send </Link></button>

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
