import React from 'react'
import "./Footer.css";
import { BsFacebook } from 'react-icons/bs';
import { IoLogoInstagram } from 'react-icons/io';
import { GrTwitter } from 'react-icons/gr';


export const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-div'>
            <ul className='footer-ul-1'>
                <li className='footer-list footer-list-head'>AfriBook</li>
                <li className='footer-list'>support@afribook.com</li>
                <li className='footer-list'>4 Silverway drive, ikoyi<br/>Lagos, Nigeria 332211</li>
                
                <li className='footer-list'><BsFacebook className='footer-icon'/><IoLogoInstagram className='footer-icon'/><GrTwitter className='footer-icon'/></li>

            </ul>
            <ul className='footer-ul-2'>
                <li className='footer-list footer-list-head'>Author</li>
                <li className='footer-list'>Publish</li>
                <li className='footer-list'>Stats</li>

            </ul>
            <ul className='footer-ul-3'>
                <li className='footer-list footer-list-head'>Reader</li>
                <li className='footer-list'>My Library</li>
                <li className='footer-list'>My orders</li>
                <li className='footer-list'>Genres</li>

            </ul>
            <ul className='footer-ul-4'>
                <li className='footer-list footer-list-head'>Support</li>
                <li className='footer-list'>Help</li>
                <li className='footer-list'>Authors T & C</li>
                <li className='footer-list'>Readers T & C</li>

            </ul>

        </div>


    </div>
  )
}
