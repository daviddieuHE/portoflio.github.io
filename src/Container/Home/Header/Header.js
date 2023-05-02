import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'

export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-parent'>
            <div className='header-logo'>
                <span>DAVID DIEU</span>
            </div>
            <div className='header-option'>
                <ul>
                    <li className='link'>
                        <Link to="vision" spy={true} smooth={true} offset={0}>Ma Vision</Link>
                    </li>
                    <li className='link'>
                        <Link to="tableau" spy={true} smooth={true} offset={0}>Tableau des heures</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
