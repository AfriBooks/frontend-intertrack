import React from 'react'
import "./DeliveryInfo.css"
import {Link} from "react-router-dom"
import { AiOutlineStar } from 'react-icons/ai';

export const DeliveryInfo = () => {
  return (
    <div className='deliveryInfo'>

        <div className='deliveryInfo-div-1'>
            <div className='deliveryInfo-div-1-a'>
                <div className='deliveryInfo-afribook-div'>
                    <h3>Afribook</h3>

                </div>
                <div className='deliveryInfo-checkout-div'>
                    <h4 className='checkout'>Checkout</h4>

                </div>

            </div>
            <div className='deliveryInfo-div-1-b'>
                
                <div className='deliv-info-div'>
                    <div className='tick-1'>1</div>
                    <p>Delivery Info</p>

                </div>

                <span><hr className='deliveryInfo-line' /></span>

                <div className='pay-info-div'>
                    <div className='tick-2'>2</div>
                    <p>Payment Info</p>

                </div>

                <span><hr className='deliveryInfo-line' /></span>

                <div className='order-div'>
                    <div className='tick-3'>3</div>
                    <p>Order Status</p>

                </div>

            </div>

        </div>

        <div className='deliveryInfo-div-2'>
            <div className='deliveryInfo-div-2-left'>
                <div className='deliveryInfo-div-2-left-sub'>
                    <div className='delivery-Info-h3'>
                        <h3>Delivery Info</h3>
                        <p className='delivery-Info-para'>Continue your purchase by providing your delivery details</p>
                       
                    </div>
                    <div className='delivery-Info-para'></div>

                    <form className='delivery-info-form' action="#" id="delivery-info-form" name="delivery-info-form">
                        
                        <div className='delivery-input-div'>
                            <label id="delivery-name-label">Full Name</label><br/>
                            <input className='delivery-input' id="name" type="text" name="name" required placeholder="Enter your name"/><br/>
                        </div>
                        
                        <div className='delivery-input-div'>
                            <label className='delivery-phone-num-label' id="delivery-phone-num">Phone number</label><br/>
                            <input className='delivery-input' id="phone" type="phone" name="phone" required placeholder="Enter your phone number"/><br/>
                        </div>

                        <div className='textarea-div'>
                        <label className='delivery-textarea-label' for="delivery-textarea">Delivery address</label><br/>
                        <textarea className='delivery-address-textarea' id="delivery-textarea" name="delivery-textarea" placeholder="Enter your delivery address" /><br/>
                        
                        </div>

                        <button className='Continue-to-payment-btn'><Link to="/payment-info">Continue to payment Info</Link></button>

                    </form>

                </div>

            </div>
            <div className='deliveryInfo-div-2-right'>
                <div className='deliveryInfo-div-2-right-sub'>
                    <div className='deliveryInfo-div-2-right-sub-sub'>
                        <div className='order-summary-div'>
                            <div className='order-summary'>Order Summary</div>
                            <div className='single-order-div'>
                                <div className='single-order-image-div'>
                                    <img className='single-order-image' src='https://africanbookaddict.files.wordpress.com/2018/12/wrbg.jpg' alt='' />

                                </div>
                                <div className='single-order-title-div'>
                                    <h4>Book title</h4>
                                    <p>Book author</p>
                                    <div className='deliv-rating'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                                    <p>N 9,000</p>

                                </div>
                                <div className='single-order-count-div'>
                                    <div className='single-order-count-div-sub'>
                                        <button className='add-btn'>+</button>
                                        <p className='qty'>1</p>
                                        <button className='minus-btn'>-</button>

                                    </div>

                                </div>

                            </div>
                            <div className='single-order-div'>
                                <div className='single-order-image-div'>
                                    <img className='single-order-image' src='https://africanbookaddict.files.wordpress.com/2018/12/wrbg.jpg' alt='' />

                                </div>
                                <div className='single-order-title-div'>
                                    <h4>Book title</h4>
                                    <p>Book author</p>
                                    <div className='deliv-rating'><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                                    <p>N 9,000</p>

                                </div>
                                <div className='single-order-count-div'>
                                    <div className='single-order-count-div-sub'>
                                        <button className='add-btn'>+</button>
                                        <p className='qty'>1</p>
                                        <button className='minus-btn'>-</button>

                                    </div>

                                </div>
                            </div>
                           
                            
                            <div className='total-div'>
                                <h4>Total</h4>
                                <h4>N 18,000</h4>

                             </div>

                        </div>
                        
                    </div>

                </div>

            </div>

        </div>

        
    </div>
  )
}
