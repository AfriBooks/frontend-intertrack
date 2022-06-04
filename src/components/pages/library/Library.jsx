import React from 'react'
import { HeaderLibrary } from '../../layout/headerLibrary/HeaderLibrary';
import { Footer } from '../../layout/footer/Footer';
import "./Library.css";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsFilterSquare } from 'react-icons/bs';
import { Card } from '../../card/Card';

export const Library = () => {
  return (
    <div className='library'>
        <HeaderLibrary/>

        <div className='library-div'>
            <div className='my-Lbrary-div'>My Lbrary</div>
            <div className='library-btn-div'>
                <button className='downloads-btn'>Downloads</button>
                <button className='current-reads-btn'>Current reads</button>
                <button className='wish-List-btn'>Wish List</button>
                <button className='archive-btn'>Archive</button>

            </div>

            <div className='library-search-div'>
                <h4>Downloads</h4>
                <div className='library-search-div-sub'>
                    <div className='library-search-icon-div'>
                        <div className='library-search-icon-div-sub'><BiSearch/> </div>
                        <input className='search-library' type= "text" placeholder="Search downloads"/>

                    </div>
                    <div className='library-filter-div'>
                        <p className='library-filter'>Filter</p>
                        <div className='library-filter-icon'><BsFilterSquare/> </div>

                    </div>

                </div>

            </div>

            <div className='home--card--container'>
                <Card/>
            </div>

        </div>

        <div className='next-div'>
            <div className='next-div-sub'>
                <p>Showing results pages</p>
                <div className='page-number-div'>1</div>
                <p>of 24 pages</p>
                <p className='next'>Next</p>
                <div><MdOutlineKeyboardArrowRight/> </div>

            </div>

        </div>

        <Footer/>
        

    </div>
  )
}
