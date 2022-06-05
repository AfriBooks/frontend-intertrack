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
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Horror</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Action</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Crime</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Thriller</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Fantasy</div> </div>

                </div>

                <div className='genre-div-2-b'>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Art</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Science</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>History</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Mystery</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Dark</div> </div>

                </div>

                <div className='genre-div-2-c'>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Classic</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Romance</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Adventure</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Drama</div> </div>
                    <div className='genre-outside-div'> <div className='genre-inside-div'>Folktale</div> </div>

                </div>

            </div>

        </div>

        <Footer/>


    </div>
  )
}
