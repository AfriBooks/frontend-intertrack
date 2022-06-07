import React from 'react'
import "./SignInOne.css"
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEmail } from 'react-icons/md';


export const SignInOne = () => {

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
    <div className='signInOne'>

    

        <div className='create-account-div'>

        <div className='create-account-div-left'>

            <div className='create-account-bar'>
                <h3>AfriBook</h3>
            
            </div>

            <div className='signinOne-form-div'>
                <div className='signinOne-form-div-inner'>
                    <h3 className='Create account-h3'>Wellcome back</h3>
                    <button className='create-account-google'><FcGoogle/> Login with Google</button>
                    <div className='horizontal-line-div'>
                        <span><hr className='horizontal-line' /></span>
                        <span className='or-create-with'>Or create with</span>
                        <span><hr className='horizontal-line' /></span>
                    </div>
                    <button className='create-account-email'><Link to="/sign-in-two"><MdOutlineEmail/> Login with Email </Link></button>
                    
                    
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
