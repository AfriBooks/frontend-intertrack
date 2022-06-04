import React from 'react'
import "./OrderSuccess.css"
import { IoMdCheckmark } from 'react-icons/io';


export const OrderSuccess = () => {
    return (
        
        <div className='orderSuccess'>

            <div className='orderSuccess-div-1'>
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
                        <div className='tick-2'><IoMdCheckmark/></div>
                        <p>Payment Info</p>

                    </div>

                    <span><hr className='deliveryInfo-line' /></span>

                    <div className='order-div'>
                        <div className='tick-3'>3</div>
                        <p>Order Status</p>

                    </div>

                </div>

            </div>

            <div className='orderSuccess-div-2'>
                <div className='orderSuccess-div-2-sub'>
                    <div className='order-ok-div-container'><div className='order-ok-div'><IoMdCheckmark/></div></div>
                    <h3>Order Summary</h3>
                    <div className='orderSuccess-para-div'>
                        <p className='orderSuccess-para'>Your orders have been successfully placed, go to my Deliveries </p>
                        <p>to track your order</p>
                         
                    </div>
                    <button className='delivery-btn'>Go to My Deliveries</button>

                </div>

            </div>

        
        </div>
    )
}
