import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//import { useGetAllBooksQuery } from '../../features/productApi/productApi'
import "./Card.css"
import { BsStar } from 'react-icons/bs';
import {Link} from "react-router-dom"
import axios from 'axios';


//import { addToCart } from '../../features/cart/cartSlice';


export const Card = () => {
    

const [displayCards, setDisplayCards] = useState([]);
const [isloading, setIsLoading] = useState([])

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

/*const someCards = displayCards.filter(function(a) {
      if (a.id < 7) {
        return a 
      }
                   
})*/

//    const { items, status } = useSelector(state => state.products);

//    console.log(items);
    
//    const {data, error, isLoading} = useGetAllBooksQuery();
    
const getBooks = displayCards.map(product => {
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


return (
        <div className='card'>
            {isloading && <p>Loading...</p>}
            {getBooks.length ? <div className='card--section'>{getBooks}</div> : ""}
        </div>  
    ) 
            
}



// {getBooks.length ? <div className='card--section'>{getBooks}</div> : ""}
//{status.pending ? (<p>Loading...</p>) : status.rejected ? (<p>An error occured...</p>) : (
                
//     <div className="card--div--2">
        
//             {items?.map(product => <div key={product.id} className="product">
                
//                 <div className="card--img--div">
//                     <img className='card--img' src= {product.book_image} alt='' />
//                 </div>
//                 <div className="card--title--div">
//                     <span className='card--title'><strong> Title:</strong>{product.title}</span>
//                     <div className='specialist--photo--div'><strong> Discription:</strong>{}</div>
//                     <span className='card--name'><strong> Author:</strong>{product.category} </span>
//                 </div>
//                 <div className="card--specialist--div">
                    
//                 </div>
//                 <div className="card--bottom--div">
//                     <span className='card--rating'><strong> Publisher:</strong> {}</span> <br />
//                     <span className='card--price'><span className='starting-at'>$</span> {product.price}</span>

//                 </div>
        

//             </div>)}
//     </div>

// )}

// <div className='specialist--photo--div'><strong> Discription:</strong>{}</div>
