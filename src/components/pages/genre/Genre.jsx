import React from 'react'
import { Header } from '../../layout/header/Header';
import "./Genre.css";
import { BiSearch } from 'react-icons/bi';
import { Footer } from '../../layout/footer/Footer';

export const Genre = () => {
  return (
    <div className='genre'>
        
        <Header/>

        <div className='genre-div'>

            <div className='genre-div-1'>
                <h3>Genre</h3>
                <div className='genre-search-div'>
                    
                    <div className='genre-search-icon'><BiSearch/> </div>
                    <input className='genre-search-bar' type= "text" placeholder='search genre' />
                    
                </div>

            </div>

            <div className='genre-div-2'>
                
                <div className='genre-div-2-a'>
                    <div className='genre-outside-div-1'> <div className='genre-inside-div-1'>Horror</div> </div>
                    <div className='genre-outside-div-2'> <div className='genre-inside-div-2'>Action</div> </div>
                    <div className='genre-outside-div-3'> <div className='genre-inside-div-3'>Crime</div> </div>
                    <div className='genre-outside-div-4'> <div className='genre-inside-div-4'>Thriller</div> </div>
                    <div className='genre-outside-div-5'> <div className='genre-inside-div-5'>Fantasy</div> </div>

                </div>

                <div className='genre-div-2-b'>
                    <div className='genre-outside-div-6'> <div className='genre-inside-div-6'>Art</div> </div>
                    <div className='genre-outside-div-7'> <div className='genre-inside-div-7'>Science</div> </div>
                    <div className='genre-outside-div-8'> <div className='genre-inside-div-8'>History</div> </div>
                    <div className='genre-outside-div-9'> <div className='genre-inside-div-9'>Mystery</div> </div>
                    <div className='genre-outside-div-10'> <div className='genre-inside-div-10'>Dark</div> </div>

                </div>

                <div className='genre-div-2-c'>
                    <div className='genre-outside-div-11'> <div className='genre-inside-div-11'>Classic</div> </div>
                    <div className='genre-outside-div-12'> <div className='genre-inside-div-12'>Romance</div> </div>
                    <div className='genre-outside-div-13'> <div className='genre-inside-div-13'>Adventure</div> </div>
                    <div className='genre-outside-div-14'> <div className='genre-inside-div-14'>Drama</div> </div>
                    <div className='genre-outside-div-15'> <div className='genre-inside-div-15'>Folktale</div> </div>

                </div>

            </div>

        </div>

        <Footer/>


    </div>
  )
}
