import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//import { useGetAllBooksQuery } from '../../features/productApi/productApi'
import "./Card.css"
import { BsStar } from 'react-icons/bs';
import {Link} from "react-router-dom"
import axios from 'axios';


//import { addToCart } from '../../features/cart/cartSlice';




export const Card = () => {
    const {items, status} = useSelector(state => state.products);
    
    
//    const {data, error, isLoading} = useGetAllBooksQuery();
    console.log(items);

   

    const getBooks = items.map((product) => {
        const {id, image, title, category, price} = product;
        
          
        return (

            <div className="card--div-1">
                
                        
                <div key={id} className="product">
                    
                    <div className="card--img--div">
                    <Link to={`/product/${id}`}><img className='card--img' src= {image} alt='' /></Link>
                    </div>

                    <div className="card--title--div-home">
                        <span className='card--title'><strong>{title}</strong></span>
                    </div>
                    
                    <div className="card--author--div-home">
                         <span className='card--name'>Author {category}</span>
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
