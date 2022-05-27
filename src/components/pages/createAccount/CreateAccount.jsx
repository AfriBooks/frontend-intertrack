import React from 'react'
import "./CreateAccount.css"

function CreateAccount() {
  return (
    <div className='CreateAccount'>

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

        </div>

      </div>


    </div>
  )
}

export default CreateAccount
