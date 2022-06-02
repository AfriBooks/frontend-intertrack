import React from 'react'
import "./BestSellerBook.css"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Header } from '../../layout/header/Header';
import { Card } from '../../card/Card';
import { Footer } from '../../layout/footer/Footer';

export const BestSellerBook = () => {
  return (
        <div className='bestSellerBook'>

            <Header/>
            <div className='popular-now-div'>
            <h3>Best Selling Books</h3>
                <div className='view-all-div'>
                    <p className='view-all'></p>
                    
                </div>

            </div>
            <div className='home--card--container'>
                <Card/>
            </div>

            <div className='next-div'>
                <div className='next-div-sub'>
                    <p>Showing results pages</p>
                    <div className='page-number-div'>1</div>
                    <p>of 2 pages</p>
                    <p className='next'>Next</p>
                    <div><MdOutlineKeyboardArrowRight/> </div>

                </div>

            </div>
            <Footer/>
                


        </div>
  )
}
