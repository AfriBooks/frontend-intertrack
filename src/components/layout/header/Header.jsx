import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"



export const Header = () => {
  return (
    <div className='header'>
        <div className='header-nav-bar'>
            <h3 className='logo'>afRIBook</h3>

            <ul className='header-nav-bar-ul'>
                <li className='header-list'><Link to="/"> Home </Link></li>
                <li className='header-list'><Link to="/register"> Register </Link></li>
                <li className='header-list'><Link to="/sign-in-one"> Sign In </Link></li>
                <li className='header-list'><Link to="/verify-email">VerifyEmail</Link></li>

            </ul>

            <div className='header-search-bar-div'>
                <input className='header-search-bar' type= "text" placeholder="Search"  />

            </div>

        </div>

    </div>
  )
}
