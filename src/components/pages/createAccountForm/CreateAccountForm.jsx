import React from 'react'
import { useState, useEffect } from 'react'
import "./CreateAccountForm.css"
import { useSelector, useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { registerUser } from '../../../features/auth/authSlice'
import { useHistory } from 'react-router-dom';
import { Header } from '../../layout/header/Header'



export const CreateAccountForm = () => {

    const {items, status} = useSelector(state => state.products);

    const auth = useSelector(state => state.auth);
    console.log(auth)

    const history = useHistory()

    useEffect(() => {
        if (auth._id) {
            history.push("/home")
        }
    }, [auth._id, history])

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
    })

    console.log("user:", user)

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(registerUser(user))
        
    }
    


    

    
  
    const getProducts = items.map((product) => {
            
      return (
  
          <div className="register-card--div-two">
                      
              <div key={product._id} className="createAccountForm-card-product-div-two">
                  
                  <div className="createAccountForm-card--img--div">
                      <img className='createAccountForm-card--img' src= "https://brittlepaper.com/wp-content/uploads/2021/06/81b6ahl1uL.jpeg" alt='' />
                  </div>
                  
  
              </div>
          </div>
  
        )
  })
  

  return (
      
    <div className='createAccountForm-two'>

    

    <div className='createAccountForm-main-div-two'>

    <div className='createAccountForm-div-left-two'>
    
        <div className='createAccountForm-bar-two'>
            <h3>AfriBook</h3>
        </div>

        <div className='createAccountForm-div-two'>
            <div className='createAccountForm-div-inner-two'>
                <div className='createAccountForm-h3-div-two'>
                    <h3 className='createAccountForm-h3-two'>Create account</h3>
                    <p className='createAccountForm-para-1-two'>Fill in the form below to create an account</p>
                </div>
                
                
                <form onSubmit={handleSubmit} className="createAccountForm-form-two">
                    <label id="createAccountForm-name-label-two">Name</label><br />
                    <input className='createAccountForm-input-two' type ="text" placeholder='name' onChange={(e) => setUser({...user, name: e.target.value})}/>

                    <label className='createAccountForm-email-label-two' id="email-label">Email address</label><br />
                    <input className='createAccountForm-input-two' type ="email" placeholder='email' onChange={(e) => setUser({...user, email: e.target.value})} />

                    <label className='createAccountForm-password-label-two' id="password-label">Password</label><br/>
                    <input className='createAccountForm-input-two' type ="password" placeholder='password' onChange={(e) => setUser({...user, password: e.target.value})} /><br/>

                    <button className='createAccountForm-sign-up-btn-two'>Sign up </button>

                   

                   
                </form>

                    <p className='createAccountForm-para-2-two'>Already have an account?<Link to="/sign-in-two"> Login </Link></p>

            </div>
        </div>
        
    </div>

    <div className='createAccountForm-div-right-two'>
        <div className='createAccountForm-card-div-two'>
        {getProducts.length ? <div className='register-card-section-two'>{getProducts}</div> : ""}
        </div>
    </div>

    </div>
        
    </div>
  )
}

// {getProducts.length ? <div className='register-card-section'>{getProducts}</div> : ""}
//{auth.registerStatus === "rejected" ? <p>{auth.registerError}</p> : null}
//{auth.registerStatus === "pending" ? "Submiting" : "Sign up"} 

/*

 <form className='createAccountForm-form' onSubmit={handleSubmit} >
                        
    <div className='createAccountForm-input-div'> 
        <label id="createAccountForm-name-label">Name</label><br />
        <input className='createAccountForm-input' id="name" type="text" name="name" required placeholder="Enter your name" 
        onChange={(e) => setUser({...user, name: e.target.value})} />
    </div>
    
    <div className='createAccountForm-input-div'>
        <label className='createAccountForm-email-label' id="email-label">Email address</label><br />
        <input className='createAccountForm-input' id="email" type="email" name="email" required placeholder="Enter your email address" 
        onChange={(e) => setUser({...user, email: e.target.value})} />
    </div>

    <div className='createAccountForm-input-div'>
        <label className='createAccountForm-password-label' id="password-label">Password</label><br/>
        <input className='createAccountForm-input' id="password" type="password" name="password" required placeholder="Enter your password" 
        onChange={(e) => setUser({...user, password: e.target.value})} />
    </div>

    <button className='createAccountForm-sign-up-btn' name='submit'>sign up</button>

                        

                    </form>

*/
