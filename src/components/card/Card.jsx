import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//import { useGetAllBooksQuery } from '../../features/productApi/productApi'
import "./Card.css"



export const Card = () => {
    const {items, status} = useSelector(state => state.products);
    
    
    //const {data, error, isLoading} = useGetAllBooksQuery();
    console.log(items);


return (
        <div className='card'>
            {status.pending ? (<p>Loading...</p>) : status.rejected ? (<p>An error occured...</p>) : (
                <>
                   <div className="card--div">
                        {items?.map(product => <div key={product.id} className="product">
                            
                            <div className="card--img--div">
                                <img className='card--img' src= {product.book_image} alt='' />
                            </div>
                            <div className="card--title--div">
                                <span className='card--title'><strong> Title:</strong>{product.title}</span>
                                <div className='specialist--photo--div'><strong> Discription:</strong>{}</div>
                                <span className='card--name'><strong> Author:</strong>{product.category} </span>
                            </div>
                            <div className="card--specialist--div">
                                
                            </div>
                            <div className="card--bottom--div">
                                <span className='card--rating'><strong> Publisher:</strong> {}</span> <br />
                                <span className='card--price'><span className='starting-at'>$</span> {product.price}</span>

                            </div>
                    

                        </div>)}

                   </div>
                
                </>
            )}
        </div>  
    ) 
            
}
