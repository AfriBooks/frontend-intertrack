import React, {useState, useEffect} from 'react'
import "./LandPage.css"
//import frame from '../../images/frame.png'
import {Link} from "react-router-dom"
import { Footer } from '../../layout/footer/Footer'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux'
import { BsStar } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { BsCart } from 'react-icons/bs';
import {IoIosNotificationsOutline  } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMistFill } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import axios from 'axios';
import { GiHamburgerMenu} from 'react-icons/gi';


export const LandPage = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart)
    const {items, status} = useSelector(state => state.products);
  
    const [displayCards, setDisplayCards] = useState([]);
    const [isloading, setIsLoading] = useState([])
  
    const current_user = JSON.parse(localStorage.getItem("afribook_user"))
    console.log(current_user)
    const { name } = current_user.data;
  
    const getDisplayCard = async () => {
      setIsLoading(true);
    const response = await axios.get(
      "https://afribook.herokuapp.com/books"
      
      )
    .catch((err) => {
        console.log(err)
    })
    if(response) {
      setIsLoading(false)
      console.log(response.data.books)
      setDisplayCards(response.data.books)
    }
  }
  
  useEffect(() => {
     getDisplayCard()
  }, []);
  
  const [filterItem, setFilterItem] = useState("")
    console.log(filterItem)
  
  const category = displayCards.filter((element) => {
      if(element === "") {
        return element;
      } else if (element.genre.toLowerCase().includes(filterItem.toLocaleLowerCase())) {
        return element;
    
      }
    })
  
  const getBooks = category.map(product => {
    const {_id, cover, title, author, price} = product;
    
      
    return (
  
        <div className="card--div-1">
            
                    
            <div key={_id} className="product">
                
                <div className="card--img--div">
                <Link to={`/books/${_id}`}><img className='card--img' src= {cover} alt='' /></Link>
                </div>
  
                <div className="card--title--div-home">
                    <span className='card--title'><strong>{title}</strong></span>
                </div>
                
                <div className="card--author--div-home">
                     <span className='card--name'> {author}</span>
                </div>
                   
                <div className='card-price-div-home'>  
                    <span className='card--price'><span className='starting-at'>$</span> {price}</span>
                </div>
                
                <div className="card--star--div-home">
                    <span className='star'><BsStar className='home-card-star'/><BsStar className='home-card-star'/><BsStar className='home-card-star'/><BsStar className='home-card-star'/> </span> 
                    
                </div>
        
  
            </div>
        </div>
  
      )
  })
  
  
  
    
  
    const advertBook = items.filter((a) => {
      if (a._id === "62b1da4eb44c85b8c89a36fe") {
        
        return a;
        
      }
    })
    //console.log(advertBook)
    
  
    const getBooksTwo = items.map((productItem) => {
            
      return (
  
          <div className="card-type-2--div-home">
                      
              <div key={productItem.id} className="productItem">
                  
                  <div className="card-two--img--div">
                  <Link to={`/product/${productItem.id}`}><img className='card-two--img' src= {productItem.cover} alt='' /></Link>
                  </div>
                  
                  <div className='card-two--title--div'>
                      <div className="card-two--title--div-sub">
                          <span className='card-two--title'><strong></strong>{productItem.title}</span>
                      </div>
                      
                      <div className="card-two--author--div">
                          <span className='card--name'>{productItem.author} </span>
                      </div>
                        
                     {/* <div className='card-two-price-div'>  
                          <span className='card--price'><span className='starting-at'>$</span> {productItem.price}</span>
                      </div>*/}
                      
                      <div className="card-two--star--div">
                          <span className='card-two-star'><BsStar className='card-type-two-star'/><BsStar className='card-type-two-star'/><BsStar className='card-type-two-star'/><BsStar className='card-type-two-star'/> </span> 
                          
                      </div>
                  </div>
          
  
              </div>
          </div>
  
        )
  })
  
  
    return (
        <div className='home'>
        
          <div className='header-home'>
  
          <div className='header-nav-bar-1'>
            <div className='header-nav-bar-1-a'>
                <div className='logo-div'><h3 className='logo'> AfriBook</h3> </div> 
  
            </div>
            <div className='header-nav-bar-1-b'>
                <div className='header-search-bar-div'>
  
                  <div className='search-icon-div'><FiSearch className='search-icon' /></div>
                  <input className='header-search-bar' type= "text" placeholder=" Search by genre" onChange={(ev) => {setFilterItem(ev.target.value)}} />
  
                </div>
  
            </div>
            <div className='header-nav-bar-1-c'>
              <div className='switch-to-author-div'><button className='switch-to-author-btn'>Switch to author</button></div> 
              <div className='cart-container-div'><div className='cart-div'><Link to="/delivery-info"><BsCart/></Link></div><div className='cart-item-num-div'>{cartTotalQuantity}</div></div>
              <p className='land-page-log-in'><Link to='sign-in-two'>Log in </Link></p>
              <button className='land-page-sign-up-btn'><Link to='create-account-form'> Sign up </Link></button>
              {/* <div className='notification-div'><IoIosNotificationsOutline/></div>
              <div className='profle-div'>
                  <div className='avatar-div'><img className='avatar' src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg' alt='pic' /></div>
                  <p className='profile-name'>{ name }</p>
  
              </div> */}
              {/* <div className='drop-down-div-home'> 
                <IoIosArrowDown className='drop-down-icon-home'/> 
                <div className='drop-down-content-home'>
                  <p> <Link to=""> Profile </Link></p>
                  <p> <Link to="/sign-in-two" > Logout </Link></p>
                  <p> <Link to="/"> Register </Link></p>
  
                </div>
              </div> */}
  
            </div>
  
            <div className='mobile--menu-icon'>
                <GiHamburgerMenu/>
            </div>
  
          </div>
  
  
          <div className='header-nav-bar-2'>
            <div className='header-nav-bar-2-a'>
              <ul className='header-nav-bar-ul'>
                  <li className='header-list'><Link to="/home"><AiOutlineHome/> Home </Link></li>
                  <li className='header-list'><Link to="/library"><FiBookOpen/> My Library </Link></li>
                  <li className='header-list'><Link to="/genre"><MdOutlineLibraryBooks/> Genre </Link></li>
                  <li className='header-list'><Link to="/delivery-info"><BsCart/> My order<div className='cart-qty-num-div'>{cartTotalQuantity}</div> </Link></li>
              </ul>
            </div>
  
            <div>
  
            <div className='header-nav-bar-2-b'>
                 <div className='filter-div'>
                  <p className='filter'>Filter</p>
                  <RiMistFill className='filter-icon'/>
                    
                 </div>
                 
  
            </div>
  
            
  
          </div>
  
          </div>
          </div>
      
  
       
        <div className='advert-banner'>
            
            <div className='advert-div-a-home'>
                <h3 className='recommended-h3'>Recommended for you</h3>
                
  
            </div>
           {advertBook.map((b) => {
      
        const {_id, cover, price, title, author, genre} = b;
        
        return (
          <div className='advert-div-b'>
          <div className='book-image-div-home'><img className='book-image' src={cover} alt=''/></div>
          <div className='book-title-div-home'>
            <div className='book-title-div-sub'>
              <h3 className='book-title'>{title}</h3>
              <p>{author}</p>
              <p><strong>N {price}</strong></p>
              
              <p>{genre}</p>
              <button className='buy-btn'>Buy now</button>
            </div>
  
          </div>
  
      </div>
  
        )
        
      
    })}
  
        </div>
        <div className='home-popular-now-div'>
        <Link to="/popular-now"><h3>Popular now</h3></Link>
          <div className='view-all-div'>
               <p className='view-all'>View all</p>
               <MdOutlineKeyboardArrowRight/>
          </div>
  
        </div>
        <div className='home--card--container-1'>
        
              {isloading && <p>Loading...</p>}
              {getBooks.length ? <div className='card--section'>{getBooks}</div> : ""}
  
        </div>
  
        <div className='newly-added-books-div'>
            <h3><Link to="/new-added"> Newly added books </Link></h3>
            <div className='view-newly-added-books-div'>
                <p>View all</p>
                <div><MdOutlineKeyboardArrowRight/> </div>
  
            </div>
  
        </div>
  
        <div className='home-card-two-container'>
            <div className='home-card-two-div-a'>
  
            {getBooksTwo.length ? <div className='card-two--section'>{getBooksTwo}</div> : "Loading..."}
  
            </div>
            
             <div className='home-card-two-div-b'>
             {getBooksTwo.length ? <div className='card-two--section'>{getBooksTwo}</div> : "Loading..."}
  
             </div>
            <div className='home-card-two-div-c'>
             {getBooksTwo.length ? <div className='card-two--section'>{getBooksTwo}</div> : "Loading..."}
  
            </div>  
            
            
  
        </div>
  
        <Footer></Footer>
      </div>
    )
}
