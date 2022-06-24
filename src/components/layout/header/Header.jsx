import React, { useState } from 'react'
import "./Header.css";
import {Link} from "react-router-dom"
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';
import {IoIosNotificationsOutline  } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMistFill } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';


export const Header = () => {

  const { cartTotalQuantity } = useSelector(state => state.cart)

  const auth = useSelector(state => state.auth)
  console.log(auth._id)

  // const [filter, setFilter] = useState("")

  // const onSearch = (item) => {

  //   console.log("item", item)

  // }

  return (
    <div className='header'>

        <div className='header-nav-bar-1'>
          <div className='header-nav-bar-1-a'>
              <div className='logo-div'><h3 className='logo'> AfriBook</h3> </div> 

          </div>
          <div className='header-nav-bar-1-b'>
              <div className='header-search-bar-div'>
                <div className='search-icon-div'><FiSearch className='search-icon' /></div>
                <input className='header-search-bar' type= "text" placeholder=" Search by genre"/>

            </div>

          </div>
          <div className='header-nav-bar-1-c'>
            <div className='switch-to-author-div'><button className='switch-to-author-btn'>Switch to author</button></div>
            <div className='cart-container-div'><div className='cart-div'><Link to="/delivery-info"><BsCart/></Link></div><div className='cart-item-num-div'>{cartTotalQuantity}</div></div>
            <div className='notification-div'><IoIosNotificationsOutline/></div>
            <div className='profle-div'>
                <div className='avatar-div'><img className='avatar' src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg' alt='pic' /></div>
                <p className='profile-name'>Bisola</p>

            </div>
            <div className='drop-down-div'><IoIosArrowDown/></div>

          </div>

        </div>


        <div className='header-nav-bar-2'>
          <div className='header-nav-bar-2-a'>
            <ul className='header-nav-bar-ul'>
                <li className='header-list'><Link to="/home"><AiOutlineHome/> Home </Link></li>
                <li className='header-list'><Link to="/library"><FiBookOpen/> My Library </Link></li>
                <li className='header-list'><Link to="/genre"><MdOutlineLibraryBooks/> Genre </Link></li>
                <li className='header-list'><Link to="/delivery-info"><BsCart/> My order<div className='cart-qty-num-div'>{cartTotalQuantity}</div> </Link></li>
                {/*<li className='header-list'><Link to="/register"> Register </Link></li>
                <li className='header-list'><Link to="/sign-in-one"><MdOutlineLibraryBooks/> Sign In </Link></li>
                <li className='header-list'><Link to="/desc-best"><BsBag/> Best </Link></li>
                <li className='header-list'><Link to="/fav-genre"> Fav-Genre </Link></li>
                <li className='header-list'><Link to="/fav-genre-two"> Fav-Genre2 </Link></li>
                <li className='header-list'><Link to="/fav-genre-three"> Fav-Genre3 </Link></li>
                <li className='header-list'><Link to="/best-seller"> Best-Seller </Link></li>
                <li className='header-list'><Link to="/best-romance"> Best-Romance </Link></li>*/}
                
            
            </ul>
          </div>

          <div>

          {auth._id ? <div>Logout</div> 
          : <div className='header-login-div'><div><Link to="/sign-in-two"> Login</Link></div>
          <div className='header-reg'><Link to="/"> Register</Link></div></div>}

          </div>

          

          <div className='header-nav-bar-2-b'>
               <div className='filter-div'>
                <p className='filter'>Filter</p>
                <RiMistFill className='filter-icon'/>

               </div>

          </div>

        </div>

    </div>
  )
}

/* <div>

{auth._id ? <div>Logout</div> 
: <div className='header-login-div'><div><Link to="/sign-in-two"> Login</Link></div>
<div className='header-reg'><Link to="/register-form"> Register</Link></div></div>}

</div> */
