import React from 'react'
import "./BestRomance.css";
import { Card } from '../../card/Card';
import { Header } from '../../layout/header/Header';
import {Link} from "react-router-dom"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsArrowLeft } from 'react-icons/bs';
import { Footer } from '../../layout/footer/Footer';

export const BestRomance = () => {
  return (
    <div className='bestRomance'>

        <Header/>

        <div className='bestRomance-div'>

            <div className='bestRomance-div-1'>
                        
                <Link to="/"><div><BsArrowLeft className='romance-back-arrow'/><span className='romance-back-span'>Romance</span></div></Link>
            </div>
            
            <div className='bestRomance-div-2'>
                <h3>Best Selling Books</h3>
                <div className='bestRomance-view-all-div'>
                    <p className='bestRomance-view-all'>View all</p>
                    <div><MdOutlineKeyboardArrowRight/> </div>
                    
                </div>

            </div>

            <div className='bestRomance--card--container'>
                <Card/>
            </div>

            <div className='trending-div'>
                <h3>Trending this week</h3>
                <div className='trending-view-all-div'>
                    <p className='trending-view-all'>View all</p>
                    <div><MdOutlineKeyboardArrowRight/> </div>
                    
                </div>

            </div>

            <div className='trending--card--container'>
                <Card/>
            </div>

            <div className='contemporary-div'>
                <h3>Contemporary romance</h3>
                <div className='cont-view-all-div'>
                    <p className='cont-view-all'>View all</p>
                    <div><MdOutlineKeyboardArrowRight/> </div>
                    
                </div>

            </div>

            <div className='cont--card--container'>
                <Card/>
            </div>

        </div>

        <Footer />
    
    
    </div>
  )
}
