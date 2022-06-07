import React from 'react'
import "./NewPassword.css"
import { useSelector } from 'react-redux'
import {BsArrowLeft} from "react-icons/bs"
import {Link} from "react-router-dom"


export const NewPassword = () => {

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
    <div className='newPassword'>



<div className='create-account-div'>

<div className='create-account-div-left'>

    <div className='new-password-bar'>
        <div className='new-password-afribook-div'><h3>AfriBook</h3></div>
        <Link to="/"><BsArrowLeft className='back-arrow'/><span className='back-span'>Back</span></Link>
    </div>

    <div className='new-password-form-div'>
        <div className='new-password-form-div-inner'>
            <h3 className='new-password-h3'>Create New<br/>Password</h3>
            
            <div className='new-password-input-div'>
                <label className='password-label' id="password-label">New Password</label><br/>
                <input className='new-password-input' id="new-password" type="password" name="password" required placeholder="Enter new password"/><br/>
            </div>

            <div className='new-password-input-div'>
                <label className='password-label' id="password-label">Re-enter Password</label><br/>
                <input className='new-password-input' id="new-password-1" type="new-password" name="new-password" required placeholder="Re-enter password"/><br/>
            </div>
            
            <button className='new-password-reset-btn'>Reset</button>

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
