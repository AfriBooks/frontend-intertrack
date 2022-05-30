import React from 'react'
import { Header } from '../../layout/header/Header'
import "./FavoriteGenre.css"
import {BsArrowLeft} from "react-icons/bs"

export const FavoriteGenre = () => {
  return (
    <div className='favoriteGenre'>
         <Header/>
        <div className='fav-g--nav--div'>
            <div className='fav-g-nav-div-1'>
                <div className='fav-g-afribook--div'>
                    <h3>AfriBook</h3>
                    <div><BsArrowLeft className='back-arrow'/><span className='back-span'>Back</span></div>
                </div>
                <div className='fav-g-select--div'>
                    <div className='select-div-a'>
                        <input className='check' type="checkbox" id="select" name="" value="" />
                        <label className='fav-g-select-genre' for="book">Select your favorite genre</label>
                    </div>

                    <div className='select-div-b'>
                        <span><hr className='fav-g-horiz--line' /></span>
                    </div>

                    <div className='select-div-c'>
                        <input className='check' type="checkbox" id="select" name="" value="" />
                        <label className='select-genre' for="book">Choose your user type</label>
                    </div>

                </div>
            </div>
            <div className='descBest-nav-div-2'>
                <div>Skip</div>
            </div>
        </div>

        <div className='fav-g-main-div'>
            <div className='fav-g-div-1'>
                <h3 className='fav-h3'>Select your favorite Genre</h3>
                <p>Select atleast 3 of your favorite genre. We use your favorite genre to make better book<br/>
                recommendation which help tailor what you see on your feed.</p>
                <p>You have selected <strong>0/3</strong> of your favorite genre</p>

            </div>
            <div className='fav-g-div-2'>
                <span><hr className='fav-horiz--line' /></span>
                <span><hr className='fav-horiz--line' /></span>
                <span><hr className='fav-horiz--line' /></span>

            </div>
            <div className='fav-g-div-3'>
                <div className='fav-g-div-3-a'>
                    <div className='fav-outer'><div className='art'>Art</div></div>
                    <div className='fav-outer'><div className='horror'>Horror</div></div>
                    <div className='fav-outer'><div className='history'>History</div></div>
                    <div className='fav-outer'><div className='romance'>Romance</div></div>
                    <div className='fav-outer'><div className='fantacy'>Fantacy</div></div>

                </div>
                <div className='fav-g-div-3-b'>
                <div className='fav-outer'><div className='crime'>Crime</div></div>
                    <div className='fav-outer'><div className='thriller'>Thriller</div></div>
                    <div className='fav-outer'><div className='mystery'>Mystery</div></div>
                    <div className='fav-outer'><div className='dark'>Dark</div></div>
                    <div className='fav-outer'><div className='science'>Science</div></div>

                </div>
                <div className='fav-g-div-3-c'>
                    <div className='fav-outer-bottom'><div className='red-pink'></div></div>
                    <div className='fav-outer-bottom'><div className='light-pink'></div></div>
                    <div className='fav-outer-bottom'><div className='dark-brown'></div></div>
                    <div className='fav-outer-bottom'><div className='pink'></div></div>
                    <div className='fav-outer-bottom'><div className='blue'></div></div>

                </div>

            </div>
            <div className='fav-g-div-4'>
                <p>Don't see your favorite genre here?</p>
                <button className='continue'>Continue</button>

            </div>
        
        </div>

    </div>
    

  )
}
