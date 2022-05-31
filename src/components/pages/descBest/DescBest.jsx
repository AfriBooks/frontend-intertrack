import React from 'react'
import "./DescBest.css"
import {BsArrowLeft} from "react-icons/bs"
import {Link} from "react-router-dom"

export const DescBest = () => {
  return (
    <div className='descBest'>
        <div className='descBest--nav--div'>
            <div className='descBest-nav-div-1'>
                <div className='afribook--div'>
                    <h3>AfriBook</h3>
                    <Link to="/"><div><BsArrowLeft className='back-arrow'/><span className='back-span'>Back</span></div></Link>
                </div>
                <div className='select--div'>
                    <div className='select-div-a'>
                        <input className='check' type="checkbox" id="select" name="" value="" />
                        <label className='select-genre' for="book">Select your favorite genre</label>
                    </div>

                    <div className='select-div-b'>
                        <span><hr className='horiz--line' /></span>
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
        
        <div className='descBest-main-div'>
            <div className='main-div-sub'>
                <h3>What describes you best?</h3>
                <p className='main-div-sub-para'>To get the best experience, we want to know more about you.<br/>
                Your choice here won't limit what you can do in Afribook.</p>
                <p className='i-am-a'>I am a</p>
                <div className='reader-writer-div'>
                    <div className='reader-div'>
                        <input type="radio" id="reader" name="book" value="reader"/>
                        <label className='reader-label' for="reader">Reader</label><br/>

                    </div>
                    <div className='writer-div'>
                        <input type="radio" id="writer" name="book" value="writer"/>
                        <label className='writer-label' for="writer">Writer</label><br/>

                    </div>

                </div>
                <button className='done'>Done</button>

            </div>

        </div>

    </div>
  )
}
