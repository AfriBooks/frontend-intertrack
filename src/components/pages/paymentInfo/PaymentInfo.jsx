import React from 'react'
import "./PaymentInfo.css"
import {Link} from "react-router-dom"
import { AiOutlineStar } from 'react-icons/ai';
import { IoMdCheckmark } from 'react-icons/io';

export const PaymentInfo = () => {
  return (
    <div className='paymentInfo'>

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
                            <div className='tick-1'><IoMdCheckmark/></div>
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
                        <div className='paymentInfo-div-2-left-sub'>
                            <div className='payment-Info-h3'>
                                <h3>Payment Info</h3>
                                <p className='payment-Info-para'>Continue your purchase by providing your payment details</p>
                            
                            </div>
                            

                            <form className='payment-info-form' action="#" id="payment-info-form" name="payment-info-form">
                                
                                <div className='payment-input-div'>
                                    <label id="payment-card-num-label">Card number</label><br/>
                                    <input className='payment-input' id="name" type="number" name="name" required placeholder="Enter your card number"/><br/>
                                </div>
                                
                                <div className='payment-input-div'>
                                    <label className='payment-card-label' id="payment-card">Card name</label><br/>
                                    <input className='payment-input' id="card" type="card" name="card" required placeholder="Enter the name of the card"/><br/>
                                </div>
                                
                                <div className='expiration-date-div'>

                                    <div className='payment-input-div'>
                                        <label className='payment-card-exp-label' id="payment-card-exp">Expiration date</label><br/>
                                        <input className='payment-input-exp' id="card-exp" type="card-exp" name="card-exp" required placeholder="MM/YY"/><br/>
                                    </div>
                                    <div className='payment-input-div'>
                                        <label className='payment-cw-num-label' id="payment-cw-num">CW</label><br/>
                                        <input className='payment-input-exp' id="payment-cw" type="payment-cw" name="payment-cw" required placeholder="***"/><br/>
                                    </div>
                                </div>

                                <div className='payment-textarea-div'>
                                <label className='payment-textarea-label' for="payment-textarea">Billing address</label><br/>
                                <textarea className='payment-address-textarea' id="payment-textarea" name="payment-textarea" placeholder="Enter your Billing address" /><br/>
                                
                                </div>

                                <button className='pay-amount-btn'><Link to="/order-success">Pay N 18,000</Link></button>

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
