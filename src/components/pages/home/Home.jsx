import React from 'react'
import "./Home.css"
import { Card } from '../../card/Card'
import { Header } from '../../layout/header/Header'
import { Footer } from '../../layout/footer/Footer'
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
      <div className='home--card--container'>
        <Card/>
      </div>
      <Footer></Footer>
    </div>
  )
}


