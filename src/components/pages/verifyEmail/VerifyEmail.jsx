import React from 'react'
import "./VerifyEmail.css"
import { useSelector } from 'react-redux'
import { Header } from '../../layout/header/Header';
import {BsArrowLeft} from "react-icons/bs"



export const VerifyEmail = () => {

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
    <div className='verifyEmail'>

        <Header/>

        <div className='create-account-div'>

        <div className='create-account-div-left'>

            <div className='create-account-bar'>
                <h3>AfriBook</h3>
                <BsArrowLeft className='back-arrow'/><span className='back-span'>Back</span>
            </div>

            <div className='verify-email-form-div'>
                <div className='create-account-form-div-inner'>
                    <h3 className='Create account-h3'>Verification email<br/> sent</h3>
                    <p className='create-account-para-1'>A verification link has been sent to<br/>
                       <strong>bi*****@gmail.com.</strong> Check spam if not found in inbox.</p>

                    <button className='sign-up-btn'>Open mail app</button>
                    
                    <p className='create-account-para-2'>Didn't get any verification email? Resend email</p>

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
