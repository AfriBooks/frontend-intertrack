
import { useSelector } from 'react-redux'
//import { useGetAllBooksQuery } from '../../features/productApi/productApi'
import "./Card.css"
import { BsStar } from 'react-icons/bs';



export const Card = () => {
    const {items, status} = useSelector(state => state.products);
    
    
    //const {data, error, isLoading} = useGetAllBooksQuery();
    console.log(items);

    const getBooks = items.map((product) => {
          
        return (

            <div className="card--div">
                        
                <div key={product.id} className="product">
                    
                    <div className="card--img--div">
                        <img className='card--img' src= {product.book_image} alt='' />
                    </div>

                    <div className="card--title--div">
                        <span className='card--title'><strong></strong>{product.title}</span>
                    </div>
                    
                    <div className="card--author--div">
                         <span className='card--name'>Author{product.category} </span>
                    </div>
                       
                    <div className='card-price-div'>  
                        <span className='card--price'><span className='starting-at'>$</span> {product.price}</span>
                    </div>
                    
                    <div className="card--star--div">
                        <span className='star'><BsStar/><BsStar/><BsStar/><BsStar/> </span> 
                        
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


// {status.pending ? (<p>Loading...</p>) : status.rejected ? (<p>An error occured...</p>) : (
                
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
