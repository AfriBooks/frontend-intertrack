import React from 'react'
import { Header } from '../../layout/header/Header'
import "./BookDetails.css"
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { RiThumbUpLine } from 'react-icons/ri';
import { Footer } from '../../layout/footer/Footer';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../features/cart/cartSlice';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { single, singleProductFetch } from '../../../features/product/singleProductSlice';
import { useEffect } from 'react';





export const BookDetails = () => {
    const {singleItem, status} = useSelector(state => state.singleProduct);
    console.log(singleItem)

    const dispatch = useDispatch();
    const history = useHistory()

    const handleAddToCart = (singleProduct) => {
         dispatch(addToCart(singleProduct));
         history.push("/delivery-info");
    };
   
const { id } = useParams();
console.log(id);

const fetchProductDetails = async () => {

    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    
    .catch((err) => {
        console.log("error ", err)
        

    });

    dispatch(single(response.data))

};


useEffect(() => {
    if (id && id !== "") fetchProductDetails();
    
}, [id]);

  return (
    <div className='bookDetails'>
        <Header/>

        <div className='bookDetails-div-1'>

            <div className='bookDetails-div-left'>
                    <div className='bookDetails-div-left-subdiv'>
                         <div className='bookDetails-div-left-subdiv-image-div'>
                             <img className='subdiv-image-div-image' src={singleItem.image} alt=''/>

                         </div>
                    </div>
            </div>
            <div className='bookDetails-div-right'>
                <div className='title-book-div'>
                    <h3 className='title-book'>{singleItem.title}</h3>
                    <p className='author-name'>{singleItem.category}</p>
                    <p className='paper-book'><strong>Paperback: N{singleItem.price}</strong></p>
                    <p className='e-book'><strong> Ebook: N1500</strong></p>
                    <div className='rating-div'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                    <div className='radio-btn-div'>
                        <p className='choose-format-para'>Choose prefered format</p>
                        <div className='radio-btn-div-sub'>
                            <input type="radio" id="paper-back" name="book-type" value="paper-back" />
                              <label for="paper-back">Paperback</label>
                              
                            <input className='e-book-radio' type="radio" id="e-book" name="book-type" value="e-book" />
                              <label for="e-book">Ebook</label>

                        </div>

                    </div>
                    <div className='buy-now-div'>
                        <button className='buy-now-btn'>Buy now</button>
                        <button className='add-to-cart-btn' onClick={() => handleAddToCart(singleItem)}>Add to cart</button>

                    </div>

                </div>
                <div className='book-summary-div'>
                    <h4 className='summary-h4'>Book Summary</h4>
                    <p className='summary-para'>{singleItem.description} <br/><span className='see-more'>See more...</span> </p>

                </div>
                <div className='book-desc-div'>
                    <h4 className='desc-h4'>Book description</h4>
                    <p className='desc-para'>Format:  Paperback Ebook</p>
                    <p className='desc-para'>ISBN:  12345678901112</p>
                    <p className='desc-para'>Pages:  580</p>
                    <p className='desc-para'>Reading time:  2hours</p>
                    <p className='desc-para'>Dimension:  134 x 158nm</p>
                    <p className='desc-para'>Published:  2021</p>
                    <p className='desc-para'>Tags:  Romance Fiction Historical</p>

                </div>
            
            </div>

        </div>
        <div className='bookDetails-div-2'>
            <div className='bookDetails-div-2-left'>

            </div>
            <div className='bookDetails-div-2-right'>
                <div className='review-div'>
                    <h3>Reviews</h3>
                    <span>See what people think about Zainab takes New York</span>
                    <p> <strong>4.0</strong> <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>
                    <span>40 ratings/24 reviews</span>
                    <p>What would you rate this book?</p>
                    <p><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>
                    <div className='textarea-div'>
                        <label for="textarea">Tell us what you think</label><br/>
                        <textarea className='textarea' id="textarea" name="coment" placeholder="Enter your review" /><br/>
                        <button className='post-btn'>Post</button>
                    </div>

                    <p>Showing 1 - 5 of 24 reviews</p>

                </div>
                <div className='single-review-div'>
                    <h4>Bisola</h4>
                    <p><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Praesent ullamcorper dapibus diam. Sed faucibus consectetur laoreet.
                      Proin ac nibh turpis. Mauris efficitur efficitur dui eu dapibus.
                       Cras interdum nisl et sodales dapibus.
                        Aliquam erat volutpat. Proin ante nisi, laoreet molestie dui a, porttitor viverra sem.
                         Quisque pulvinar ultricies sapien ut lacinia<span className='more'>...more</span> </p>
                         <p>Feb 10, 2021</p>
                         <p>Replies 10 <IoIosArrowDown/> <RiThumbUpLine/> 20 likes</p>


                </div>
                <div className='single-review-div'>
                    <h4>Bisola</h4>
                    <p><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Praesent ullamcorper dapibus diam. Sed faucibus consectetur laoreet.
                      Proin ac nibh turpis. Mauris efficitur efficitur dui eu dapibus.
                       Cras interdum nisl et sodales dapibus.
                        Aliquam erat volutpat. Proin ante nisi, laoreet molestie dui a, porttitor viverra sem.
                         Quisque pulvinar ultricies sapien ut lacinia<span className='more'>...more</span> </p>
                         <p>Feb 10, 2021</p>
                         <p>Replies 10 <IoIosArrowDown/> <RiThumbUpLine/> 20 likes</p>


                </div>
                <div className='single-review-div'>
                    <h4>Bisola</h4>
                    <p><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Praesent ullamcorper dapibus diam. Sed faucibus consectetur laoreet.
                      Proin ac nibh turpis. Mauris efficitur efficitur dui eu dapibus.
                       Cras interdum nisl et sodales dapibus.
                        Aliquam erat volutpat. Proin ante nisi, laoreet molestie dui a, porttitor viverra sem.
                         Quisque pulvinar ultricies sapien ut lacinia<span className='more'>...more</span> </p>
                         <p>Feb 10, 2021</p>
                         <p>Replies 10 <IoIosArrowDown/> <RiThumbUpLine/> 20 likes</p>


                </div>
                <div className='bottom-line-div'>
                    <span><hr className='bottom-line' /></span>
                    <span className='See-more-replies'>See more replies</span>
                    <span><hr className='bottom-line' /></span>
                </div>

            </div>
           

        </div>
        <div className='bookDetails-div-3'>
            <div className='bookDetails-div-3-a'>
                <h3>You may also like</h3>
                <div className='viewall-div'>
                    <p>View all</p>
                    <div><MdKeyboardArrowRight/></div>
                </div>
            </div>
            <div className='bookDetails-div-3-b'>

            </div>

        </div>
             
        
        <Footer/>

        
    </div>
  )
}
