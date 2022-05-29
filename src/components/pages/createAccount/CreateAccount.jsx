import React from 'react'
import { Card } from '../../card/Card'
import { useSelector } from 'react-redux'
import { Header } from '../../layout/header/Header'
import "./CreateAccount.css"

function CreateAccount() {
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
    <div className='CreateAccount'>
      <Header/>

      <div className='create-account-div'>

        <div className='create-account-div-left'>
        
            <div className='create-account-bar'>
              <h3>AfriBook</h3>
            </div>

            <div className='create-account-form-div'>
                <div className='create-account-form-div-inner'>
                  <h3 className='Create account-h3'>Create account</h3>
                  <p className='create-account-para-1'>Choose how you will like to create your account</p>
                  <button className='create-account-google'>Create account with Google</button>
                  <div className='horizontal-line-div'>
                    <span><hr className='horizontal-line' /></span>
                    <span className='or-create-with'>Or create with</span>
                    <span><hr className='horizontal-line' /></span>
                    </div>
                  <button className='create-account-email'>Create account with email</button>
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

export default CreateAccount


/* <div className="card--title--div">
        <span className='card--title'><strong> Title:</strong>{product.title}</span>
        <div className='specialist--photo--div'><strong> Discription:</strong>{}</div>
        <span className='card--name'><strong> Author:</strong>{product.category} </span>
    </div>
    <div className="card--specialist--div">
        
    </div>
    <div className="card--bottom--div">
        <span className='card--rating'><strong> Publisher:</strong> {}</span> <br />
        <span className='card--price'><span className='starting-at'>$</span> {product.price}</span>

</div> */
        
