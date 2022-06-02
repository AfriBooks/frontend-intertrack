import React from 'react'
import "./Home.css"
import { Card } from '../../card/Card'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
//import { useGetAllBooksQuery } from '../../../features/productApi/productApi'


export const Home = () => {

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
      <div className='advert-div'>
          <div className='advert-div-a'>
              <h3 className='recommended-h3'>Recommended for you</h3>

          </div>
          <div className='advert-div-b'>
              <div className='book-image-div'><img className='book-image' src='https://brittlepaper.com/wp-content/uploads/2021/06/81wazwmthal_custom-a049cb82b9d3d25d2729deb5a1ac5106b52ded22.jpeg' alt=''/></div>
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
      <div className='popular-now-div'>
        <h3>Popular now</h3>
        <div className='view-all-div'>
             <p className='view-all'>View all</p>
             <MdOutlineKeyboardArrowRight/>
        </div>

      </div>
      <div className='home--card--container'>
        <Card/>
      </div>
      <Footer></Footer>
    </div>
  )
}


