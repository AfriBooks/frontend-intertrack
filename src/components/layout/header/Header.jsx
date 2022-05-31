import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';
import {IoIosNotificationsOutline  } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';


export const Header = () => {
  return (
    <div className='header'>

        <div className='header-nav-bar-1'>
          <div className='header-nav-bar-1-a'>
              <h3 className='logo'>afRIBook</h3>  

          </div>
          <div className='header-nav-bar-1-b'>
              <div className='header-search-bar-div'>
                <div className='search-icon-div'><FiSearch className='search-icon' /></div>
                <input className='header-search-bar' type= "text" placeholder="Search by book name, arthors, genre etc"  />

            </div>

          </div>
          <div className='header-nav-bar-1-c'>
            <div><button>Switch to author</button></div>
            <div className='cart-container-div'><div className='cart-div'><BsCart/></div><div className='cart-item-num-div'>5</div></div>
            <div><IoIosNotificationsOutline/></div>
            <div className='profle-div'>
                <div><img src='' alt='' /></div>
                <p>Bisola</p>

            </div>
            <div><IoIosArrowDown/></div>

          </div>

        </div>


        <div className='header-nav-bar-2'>
            

            <ul className='header-nav-bar-ul'>
                <li className='header-list'><Link to="/"> Home </Link></li>
                <li className='header-list'><Link to="/register"> Register </Link></li>
                <li className='header-list'><Link to="/sign-in-one"> Sign In </Link></li>
                <li className='header-list'><Link to="/desc-best"> Best </Link></li>
                <li className='header-list'><Link to="/fav-genre"> Fav-Genre </Link></li>
                <li className='header-list'><Link to="/fav-genre-two"> Fav-Genre2 </Link></li>
                <li className='header-list'><Link to="/fav-genre-three"> Fav-Genre3 </Link></li>
            
            </ul>

        </div>

    </div>
  )
}
