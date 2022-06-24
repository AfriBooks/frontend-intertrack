import React from 'react'
import "./Home.css"
//import frame from '../../images/frame.png'
import {Link} from "react-router-dom"
import { Card } from '../../card/Card'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux'
import { BsStar } from 'react-icons/bs';

//import { useGetAllBooksQuery } from '../../../features/productApi/productApi'


export const Home = () => {

  const {items, status} = useSelector(state => state.products);
  

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

   //const {data, error, isLoading} = useGetAllBooksQuery();

//    const getBooks = data.map(book => {
       
//     return (
    
//      <Card 
//           key = {book.results.books.id}
//           image = {book.results.books.book_image}
//           title = {book.results.books.title}
//           publisher = {book.results.books.publisher}
//           price = {book.results.books.price}
//           author = {book.results.books.author}
//           description = {book.results.books.description}
//      />
    
//     )
// })

  return (
      <div className='home'>
      
          <Header/>
    

     
      <div className='advert-banner'>
          
          <div className='advert-div-a-home'>
              <h3 className='recommended-h3'>Recommended for you</h3>

          </div>
          <div className='advert-div-b'>
              <div className='book-image-div-home'><img className='book-image' src='https://brittlepaper.com/wp-content/uploads/2021/06/81wazwmthal_custom-a049cb82b9d3d25d2729deb5a1ac5106b52ded22.jpeg' alt=''/></div>
              <div className='book-title-div'>
                <div className='book-title-div-sub'>
                  <h3 className='book-title'>Book title</h3>
                  <p>Author</p>
                  <p><strong>Price</strong></p>
                  <span>Rating</span>
                  <p>Category</p>
                  <button className='buy-btn'>Buy now</button>
                </div>

              </div>

          </div>

      </div>
      <div className='home-popular-now-div'>
      <Link to="/popular-now"><h3>Popular now</h3></Link>
        <div className='view-all-div'>
             <p className='view-all'>View all</p>
             <MdOutlineKeyboardArrowRight/>
        </div>

      </div>
      <div className='home--card--container-1'>
        <Card/>
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

 


