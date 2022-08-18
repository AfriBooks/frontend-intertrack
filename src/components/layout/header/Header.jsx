import React, { useState, useEffect } from 'react'
import "./Header.css";
import {Link, useParams} from "react-router-dom"
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
import axios from 'axios';



export const Header = () => {
  
  const [currentUserObject, setCurrentUserObject] = useState({})

  useEffect(() => {
    const current_user_email = JSON.parse(localStorage.getItem('afribook_user_email'));
    axios.get('https://afribook.herokuapp.com/users').then(result => {
        const { users } = result.data;
        for (let user in users) {
            if (users[user].email === current_user_email) {
                return setCurrentUserObject(users[user]);
            }
        }
    })
})

  // const current_user = JSON.parse(localStorage.getItem("afribook_user"))
  const name = currentUserObject.name;

  const { cartTotalQuantity } = useSelector(state => state.cart)

  const auth = useSelector(state => state.auth)


  const [filterItem, setFilterItem] = useState("")
  //console.log(filterItem)

  const getCategory = async (categories) => {
    
  const response = await axios.get(
    `https://afribook.herokuapp.com/books/categories/${categories}`
    //`https://afribook.herokuapp.com/books/categories/love`
    
    )
  .catch((err) => {
      console.log(err)
  })
  if(response) {
    
    setFilterItem(response.dada)
  }
}

useEffect(() => {
  getCategory()
}, []);

// const category = filterItem.filter((item) => {
//   if(item === "") {
//     return item;
//   } else if (item.genre.toLowerCase().includes(filterItem.toLocaleLowerCase())) {
//     return item;

//   }
// })

// const displayCategory = category.map((cate) => {

//   const {_id, cover, title, author, price} = cate;

//   return (
//     <div>

//         <div key={_id} className="product">
              
//               <div className="card--img--div">
//               <Link to={`/books/${_id}`}><img className='card--img' src= {cover} alt='' /></Link>
//               </div>

//               <div className="card--title--div-home">
//                   <span className='card--title'><strong>{title}</strong></span>
//               </div>
              
//               <div className="card--author--div-home">
//                     <span className='card--name'> {author}</span>
//               </div>
                  
//               <div className='card-price-div-home'>  
//                   <span className='card--price'><span className='starting-at'>$</span> {price}</span>
//               </div>
              
//               <div className="card--star--div-home">
//                   <span className='star'><BsStar className='home-card-star'/><BsStar className='home-card-star'/><BsStar className='home-card-star'/><BsStar className='home-card-star'/> </span> 
                  
//               </div>
      

//         </div>


//     </div>
//   )
// })



  return (
    <div className='header'>

        <div className='header-nav-bar-1'>
          <div className='header-nav-bar-1-a'>
              <div className='logo-div'><h3 className='logo'><a href="/">AfriBook</a></h3> </div> 

          </div>
          <div className='header-nav-bar-1-b'>
              <div className='header-search-bar-div'>

                <div className='search-icon-div'><FiSearch className='search-icon' onClick={getCategory} /></div>
                <input className='header-search-bar' type= "text" placeholder=" Search by genre" onChange={(ev) => {setFilterItem(ev.target.value)}} />

              </div>

              {/* <select id="dropdown" name="city" className="dropdown1">
                    <option value="LAGOS">Select genre</option>
                    <option value="LAGOS">Love</option>
                    <option value="ABUJA">Fiction</option>
                    <option value="BENIN">Drama</option>
                    <option value="BENIN">History</option>
                    <option value="BENIN">Action</option>
              </select> */}

          </div>
          <div className='header-nav-bar-1-c'>
            <div className='switch-to-author-div'><button className='switch-to-author-btn'>Switch to author</button></div>
            <div className='cart-container-div'><div className='cart-div'><Link to="/delivery-info"><BsCart/></Link></div><div className='cart-item-num-div'>{cartTotalQuantity}</div></div>
            <div className='notification-div'><IoIosNotificationsOutline/></div>
            <div className='profle-div'>
                <div className='avatar-div'><img className='avatar' src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg' alt='pic' /></div>
                <p className='profile-name'>{name}</p>

            </div>
            <div className='drop-down-div-home'> 
              <IoIosArrowDown className='drop-down-icon-home'/> 
              <div className='drop-down-content-home'>
                <p> <Link to=""> Profile </Link></p>
                <p> <Link to="/sign-in-two" > Logout </Link></p>
                

              </div>
            </div>

          </div>

          

        </div>


        <div className='header-nav-bar-2'>
          <div className='header-nav-bar-2-a'>
            <ul className='header-nav-bar-ul'>
                <li className='header-list'><Link to="/home"><AiOutlineHome/> Home </Link></li>
                <li className='header-list'></li>
                <li className='header-list'><Link to="/genre"><MdOutlineLibraryBooks/> Genre </Link></li>
                <li className='header-list'><Link to="/order"><BsCart/> My orders </Link></li>
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

         

          </div>

          

          <div className='header-nav-bar-2-b'>
               <div className='filter-div'>
                {/* <p className='filter'>Filter</p>
                <RiMistFill className='filter-icon'/> */}

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
